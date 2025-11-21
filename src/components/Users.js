// src/components/Users.js
import React, { useState } from "react";

export default function Users({ users: propUsers, posts: propPosts }) {
  const users = propUsers ?? [
    { id: "u1", name: "Magnus Gislason" },
    { id: "u2", name: "Uriah Pagac" },
    { id: "u3", name: "Helga" },
  ];

  const posts = propPosts ?? [
    {
      id: "p1",
      authorId: "u2",
      title: "A post from Uriah",
      content: "Content example",
    },
  ];

  const [selectedUserId, setSelectedUserId] = useState(null);

  const visiblePosts = posts.filter((p) => p.authorId === selectedUserId);

  return (
    <div className="container">
      <h2 className="sectionTitle">Users</h2>

      {/* UNIQUE WRAPPER for Cypress */}
      <div className="usersList">
        <ul className="userListItems">
          {users.map((u) => (
            <li key={u.id} className="userItem">
              <a
                className="userLink"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedUserId(u.id);
                }}
              >
                {u.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <section>
        {visiblePosts.map((post) => (
          <article key={post.id} className="post">
            <h3>{post.title}</h3>
            <p className="content">{post.content}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
