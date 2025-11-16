// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

function Header({onRefresh}) {
  return (
    <header>
      <h1>GenZ</h1>
      <nav>
        {/* Link renders <a href="/">...</a> in the DOM */}
        <Link to="/">Posts</Link>
        <Link to="/users">Users</Link>
        <Link to="/notifications">Notifications</Link>
      </nav>
      <button className="refbutton button" onClick={onRefresh}>
        Refresh Notifications
      </button>
    </header>
  );
}

export default Header;
