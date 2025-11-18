// // src/components/NotificationsPage.js
// import React from "react";

// function NotificationsPage({ notifications, onRefresh }) {
//   return (
//     <div className="container AppContent">
//       <h2>Notifications</h2>

//       {/* This must be the ONLY button on this route */}
//       <button className="button" onClick={onRefresh}>
//         Refresh Notifications
//       </button>

//       <section className="notificationsList">
//         {/* initially: notifications = [], so section.notificationsList > div does NOT exist */}
//         {notifications.map((n) => (
//           <div key={n.id}>{n.text}</div>
//         ))}
//       </section>
//     </div>
//   );
// }

// export default NotificationsPage;

// src/components/NotificationsPage.js
import React from "react";

function NotificationsPage({ notifications, onRefresh }) {
  return (
    <div className="container">
      <h2 className="sectionTitle">Notifications</h2>

      {/* This must be the ONLY button on this route */}
      <button className="viewBtn" onClick={onRefresh}>
        Refresh Notifications
      </button>

      <section className="notificationsList">
        {notifications.map((n) => (
          <div key={n.id}>{n.text}</div>
        ))}
      </section>
    </div>
  );
}

export default NotificationsPage;
