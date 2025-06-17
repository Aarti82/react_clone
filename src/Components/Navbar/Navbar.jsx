import React from "react"; 
import "./Navbar.css";
import { Link } from "react-router-dom";
import react from "../../assets/react.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <img className="image" src={react} alt="Logo" />
        <h1 className="logo">V19.1</h1>
      </div>
      <input type="text" className="search-input" placeholder="Search...." />
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/learn">Learn</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
