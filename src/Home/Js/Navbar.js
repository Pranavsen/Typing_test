import React from "react";
import { Link } from "react-router-dom";
import "../Css/Navbar.css";
function Navbar() {
  return (
    <div className="navbar_container">
      <div className="navbar_container_left">
        <Link to="/">
          <div className="navbar_container_logo">
            <img src="https://www.typingtest.com/forms/img/logo.svg" alt="logoimg" />
          </div>
        </Link>
        <div className="navbar_title text">Improve typing speed</div>
      </div>
      <div className="navbar_container_right text">
        <div>Contact us </div>
        <div>FAQ</div>
      </div>
    </div>
  );
}

export default Navbar;
