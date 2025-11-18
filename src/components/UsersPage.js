// src/components/UsersPage.js
import React, { useState } from "react";

function UsersPage({ users, posts }) {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const visiblePosts = posts.filter((p) => p.authorId === selectedUserId);

  return (
    <div className="container">
      {/* <h2 className="sectionTitle">Users</h2> */}

      <div className="usersList">
        <ul>
          {users.map((u) => (
            <li key={u.id}>
              {/* Cypress uses :nth-child(3) > a etc. */}
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
