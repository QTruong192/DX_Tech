import React from "react";
import logo from "../../assets/images/logo.png";
import "./navbar.scss";
const Navbar = () => {
  return <nav className="navbar">
    <img className="logo" src={logo} alt="logo"/>
    <div className="nav-links">
      <a className="nav-link" href="#">About us</a>
      <a className="nav-link" href="#">Services</a>
      <a className="nav-link" href="#">Use Cases</a>
      <a className="nav-link" href="#">Pricing</a>
      <a className="nav-link" href="#">Blog</a>
      <button className="btn-primary">Request a quote</button>
    </div>
  </nav>;
};

export default Navbar;