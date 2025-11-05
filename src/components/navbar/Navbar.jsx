import React, { useState, useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode", "theme-dark");
      document.body.classList.remove("theme-light");
    } else {
      document.body.classList.add("theme-light");
      document.body.classList.remove("dark-mode", "theme-dark");
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="nav-logo">SH</div>
        <h2>SkillHub</h2>
      </div>

      <div className="nav-center">
        <a href="#browse">Browse Courses</a>
      </div>

      <div className="nav-right">
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
