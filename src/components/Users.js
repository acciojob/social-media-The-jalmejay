// src/components/Users.js
import React, { useState } from "react";

export default function Users() {
  const users = [
    { id: "u1", name: "Magnus Gislason" },
    { id: "u2", name: "Uriah Pagac" },
    { id: "u3", name: "Helga" },
  ];

  const posts = [
    {
      id: "p1",
      authorId: "u2",
      title: "Waking to the buzz...",
      content: "An unexpected interruption...",
    },
  ];

  const [selectedUserId, setSelectedUserId] = useState(null);

  const visiblePosts = posts.filter((p) => p.authorId === selectedUserId);

  return (
    <div className="container">
      <h2 className="sectionTitle">Users</h2>

      {/* IMPORTANT: Cypress NEEDS this exact wrapper */}
      <div className="usersList">
        <ul>
          {users.map((u) => (
            <li key={u.id}>
              <a
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
