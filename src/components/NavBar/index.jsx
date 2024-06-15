import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/" className="nav-item">
        بوت‌کمپ دسترسی‌پذیری دیوار
      </Link>
      <Link to="/about" className="nav-item">
        درباره بوت‌کمپ
      </Link>
    </div>
  );
}

export default NavBar;
