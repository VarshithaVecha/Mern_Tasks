import React from 'react';
import "./navbar.css";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-container">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}
export default Navbar;