import React from "react";

function NotificationsPage({ notifications, onRefresh }) {
  return (
    <div className="container">
      <h2 className="sectionTitle">Notifications</h2>
      <button className="button viewBtn" onClick={onRefresh}>
        Refresh Notifications
      </button>

      <section className="notificationsList">
        {notifications.length > 0 ? (
          notifications.map((n) => (
            <div key={n.id} className="post" style={{ marginTop: 12 }}>
              {n.text}
            </div>
          ))
        ) : (
          <p>No new notifications</p>
        )}
      </section>
    </div>
  );
}

export default NotificationsPage;
