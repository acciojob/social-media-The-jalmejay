import React, { useState } from "react";
import "./../styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotificationsPage from "./NotificationsPage";
import Header from "./Header";
import PostDetails from "./PostDetails";
import PostsPage from "./PostsPage";
import UsersPage from "./UsersPage";

const App = () => {
  const initialUsers = [
    { id: "u1", name: "Magnus Gislason" },
    { id: "u2", name: "Uriah Pagac" },
    { id: "u3", name: "Helga" },
  ];

  const initialPosts = [
    {
      id: "p1",
      title:
        "Draped neatly on a hanger, the cranberries resemble reserved hippopotamus;",
      authorId: "u1",
      content:
        "They were lost without the harmonious rabbit that composed their kangaroo.",
      reactions: [0, 0, 0, 0, 0],
      time: "about 9 hours ago",
    },
    {
      id: "p2",
      title:
        "Waking to the buzz of the alarm clock, their chimpanzee was a witty snail?",
      authorId: "u2",
      content:
        "An unexpected interruption led to a day full of choices and little adventures.",
      reactions: [2, 1, 0, 0, 0],
      time: "about 13 hours ago",
    },
  ];

  const [users] = useState(initialUsers);
  const [posts, setPosts] = useState(initialPosts);
  const [notifications, setNotifications] = useState([]);

  const handleCreate = ({ title, authorId, content }) => {
    const id = `p${Date.now()}`;
    const newPost = {
      id,
      title,
      authorId,
      content,
      reactions: [0, 0, 0, 0, 0],
      time: "just now",
    };
    // new post becomes .posts-list > :nth-child(2)
    setPosts((prev) => [newPost, ...prev]);
  };

  const handleReact = (postId, idx) => {
    if (idx === 4) return; // last button must stay 0
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postId
          ? {
              ...p,
              reactions: p.reactions.map((c, i) =>
                i === idx ? c + 1 : c
              ),
            }
          : p
      )
    );
  };

  const handleSave = (postId, { title, content }) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === postId ? { ...p, title, content } : p))
    );
  };

  const refreshNotifications = () => {
    setNotifications([
      { id: "n1", text: "Magnus liked your post" },
      { id: "n2", text: "Uriah commented" },
    ]);
  };

  return (
    <Router>
      {/* Header visible on all routes: h1 GenZ + nav links */}
      <Header onRefresh={refreshNotifications} />

      <Routes>
        <Route
          path="/"
          element={
            <PostsPage
              posts={posts}
              users={users}
              onReact={handleReact}
              onCreate={handleCreate}
            />
          }
        />
        <Route
          path="/posts/:id"
          element={
            <PostDetails posts={posts} users={users} onSave={handleSave} />
          }
        />
        <Route
          path="/users"
          element={<UsersPage users={users} posts={posts} />}
        />
        <Route
          path="/notifications"
          element={
            <NotificationsPage
              notifications={notifications}
              onRefresh={refreshNotifications}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
