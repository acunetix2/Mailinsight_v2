// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img src="/icon.png" alt="MailInsight logo" />
        <span>MailInsight</span>
      </div>
      <nav className="nav-links">
        {/* Map dropdowns here or hard-code for now */}
        {/* Copy/paste your dropdown code here */}
      </nav>
      <button
        className="btn primary small"
        onClick={() =>
          window.location.href =
            "https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email%20profile&access_type=online"
        }
      >
        Sign In
      </button>
    </header>
  );
};

export default Navbar;
