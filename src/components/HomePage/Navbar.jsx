// src/components/HomePage/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "../../appStyles/HomePageStyles/Navbar.css";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar__logo">
        <img src={Logo} alt="Logo" />
        <span>IncrediQuo-Solutions</span>
      </NavLink>

      <nav className="navbar__links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>

        <div className="dropdown">
          <span className="dropdown__title">Our Services</span>
          <div className="dropdown__menu">
            <NavLink to="/services/transcription">Transcription Services</NavLink>
            <NavLink to="/services/closed-captioning">Closed Captioning & Subtitling</NavLink>
            <NavLink to="/services/summarization">Summarization</NavLink>
            <NavLink to="/services/additional-support">Additional Support</NavLink>
          </div>
        </div>

        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/careers">Careers</NavLink>
      </nav>

      <NavLink to="/contact" className="navbar__button">
        Contact Us
      </NavLink>
    </header>
  );
};

export default Navbar;
