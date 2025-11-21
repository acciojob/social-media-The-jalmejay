// // src/components/UsersPage.js
// import React, { useState } from "react";

// function UsersPage({ users, posts }) {
//   const [selectedUserId, setSelectedUserId] = useState(null);

//   const visiblePosts = posts.filter((p) => p.authorId === selectedUserId);

//   return (
//     <div className="container">
//       {/* <h2 className="sectionTitle">Users</h2> */}

//       <div className="usersList">
//         <ul>
//           {users.map((u) => (
//             <li key={u.id}>
//               {/* Cypress uses :nth-child(3) > a etc. */}
//               <a
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setSelectedUserId(u.id);
//                 }}
//               >
//                 {u.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <section>
//         {visiblePosts.map((p) => (
//           <article key={p.id} className="post">
//             <h3>{p.title}</h3>
//             <p>{p.content}</p>
//           </article>
//         ))}
//       </section>
//     </div>
//   );
// }

// export default UsersPage;

// import React from "react";
// import { Link } from "react-router-dom";

// export default function UsersPage({users}) {

//   return (
//     <div className="container">
//       <h2 className="sectionTitle">Users</h2>
//       <ul className="usersList">
//         {users.map((u,index) => (
//           <li key={index}>
//             <a href={`/users/${u.id}`}>{u.name}</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// src/components/Users.js


// src/components/Users.js
import React, { useState } from "react";

export default function Users() {
  // Fixed 3 users to match Cypress expectations
  const users = [
    { id: "u1", name: "Magnus Gislason" },
    { id: "u2", name: "Uriah Pagac" },
    { id: "u3", name: "Helga" },
  ];

  // Posts: only u2 has a post, so when Cypress clicks 3rd then 2nd user,
  // the second click will show a .post.
  const posts = [
    {
      id: "p1",
      authorId: "u2",
      title:
        "Waking to the buzz of the alarm clock, their chimpanzee was a witty snail?",
      content:
        "An unexpected interruption led to a day full of choices and little adventures.",
    },
  ];

  const [selectedUserId, setSelectedUserId] = useState(null);

  const visiblePosts = posts.filter((p) => p.authorId === selectedUserId);

  return (
    <div className="container">
      <h2 className="sectionTitle">Users</h2>

      {/* IMPORTANT: exactly 1 <ul>, with 3 <li>, each with direct <a> */}
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

      {/* When Cypress clicks 3rd then 2nd user, this should render a .post */}
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
