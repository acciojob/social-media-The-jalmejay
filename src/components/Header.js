// src/components/Header.js
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Header({ onRefresh }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="headerBar">
      <h1>GenZ</h1>

      <nav className="navTabs">
        <button
          onClick={() => navigate("/")}
          className={location.pathname === "/" ? "active" : ""}
        >
          Posts
        </button>

        <button
          onClick={() => navigate("/users")}
          className={location.pathname === "/users" ? "active" : ""}
        >
          Users
        </button>

        <button
          onClick={() => navigate("/notifications")}
          className={location.pathname === "/notifications" ? "active" : ""}
        >
          Notifications
        </button>
      </nav>

      <button className="refbutton button" onClick={onRefresh}>
        Refresh Notifications
      </button>
    </header>
  );
}

export default Header;
