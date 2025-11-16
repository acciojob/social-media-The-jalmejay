// src/components/UsersPage.js
import React, { useState } from "react";

function UsersPage({ users, posts }) {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const visiblePosts = posts.filter((p) => p.authorId === selectedUserId);

  return (
    <div className="container AppContent">
      <h2>Users</h2>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {/* Cypress looks for `:nth-child(3) > a` */}
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

      <section>
        {visiblePosts.map((p) => (
          <article key={p.id} className="post">
            <h3>{p.title}</h3>
            <p>{p.content}</p>
          </article>
        ))}
      </section>
    </div>
  );
}

export default UsersPage;
