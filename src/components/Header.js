import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header({ onRefresh }) {
  const location = useLocation();

  return (
    <header className="headerBar">
      <h1>GenZ</h1>

      <nav className="navTabs">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Posts
        </Link>

        <Link
          to="/users"
          className={location.pathname === "/users" ? "active" : ""}
        >
          Users
        </Link>

        <Link
          to="/notifications"
          className={location.pathname === "/notifications" ? "active" : ""}
        >
          Notifications
        </Link>
      </nav>

      <button className="refbutton button" onClick={onRefresh}>
        Refresh Notifications
      </button>
    </header>
  );
}

export default Header;
