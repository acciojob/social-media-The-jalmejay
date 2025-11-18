// // src/components/Header.js
// import React from "react";
// import { Link } from "react-router-dom";

// function Header({onRefresh}) {
//   return (
//     <header>
//       <h1>GenZ</h1>
//       <nav>
//         {/* Link renders <a href="/">...</a> in the DOM */}
//         <Link to="/">Posts</Link>
//         <Link to="/users">Users</Link>
//         <Link to="/notifications">Notifications</Link>
//       </nav>
//       <button className="refbutton button" onClick={onRefresh}>
//         Refresh Notifications
//       </button>
//     </header>
//   );
// }

// export default Header;

// src/components/Header.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header({ onRefresh }) {
  const location = useLocation();

  return (
    <header className="headerBar">
      <div className="App">GenZ</div>
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
