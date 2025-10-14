import React, { useState } from "react";

function UsersPage({ users, posts }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="container usersList">
      <h2 className="sectionTitle">Users</h2>
      <ul>
        {users.map((u, idx) => (
          <li key={u.id} onClick={() => setSelected(u.id)} data-user-index={idx + 1}>
            {u.name}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 16 }}>
        {selected &&
          posts
            .filter((p) => p.authorId === selected)
            .map((p) => (
              <article className="post" key={p.id}>
                <h4>{p.title}</h4>
                <p>{p.content}</p>
              </article>
            ))}
      </div>
    </div>
  );
}

export default UsersPage;
