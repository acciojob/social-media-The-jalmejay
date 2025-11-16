// src/components/App.js
import React, { useState } from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import PostsPage from "./PostsPage";
import PostDetails from "./PostDetails";
import UsersPage from "./UsersPage";
import NotificationsPage from "./NotificationsPage";

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
    },
    {
      id: "p2",
      title:
        "Waking to the buzz of the alarm clock, their chimpanzee was a witty snail?",
      authorId: "u2",
      content:
        "An unexpected interruption led to a day full of choices and little adventures.",
      reactions: [0, 0, 0, 0, 0],
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
    };
    // new post should become .posts-list > :nth-child(2)
    setPosts((prev) => [newPost, ...prev]);
  };

  const handleReact = (postId, idx) => {
    // 5th button should not change
    if (idx === 4) return;
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
      prev.map((p) =>
        p.id === postId ? { ...p, title, content } : p
      )
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
      <div className="App">
        {/* .App > :nth-child(1) → Header */}
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
              <PostDetails
                posts={posts}
                users={users}
                onSave={handleSave}
              />
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
      </div>
    </Router>
  );
};

export default App;
