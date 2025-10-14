import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Header({ onRefresh }) {
  const navigate = useNavigate();
  const loc = useLocation();

  const go = (e, to) => {
    e.preventDefault();
    navigate(to);
  };

  return (
    <div className="headerBar">
      <div className="brand">GenZ</div>

      <nav className="navTabs" aria-label="main-nav">
        <a
          href="/"
          className={loc.pathname === "/" ? "active" : ""}
          onClick={(e) => go(e, "/")}
        >
          Posts
        </a>
        <a
          href="/users"
          className={loc.pathname === "/users" ? "active" : ""}
          onClick={(e) => go(e, "/users")}
        >
          Users
        </a>
        <a
          href="/notifications"
          className={loc.pathname === "/notifications" ? "active" : ""}
          onClick={(e) => go(e, "/notifications")}
        >
          Notifications
        </a>
      </nav>

      <button className="refreshBtn button" onClick={onRefresh}>
        Refresh Notifications
      </button>
    </div>
  );
}

export default Header;
