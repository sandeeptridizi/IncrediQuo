import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import "../../appStyles/HomePageStyles/Navbar.css";
import Logo from "../../assets/logo1.png";
import { Button } from "../Button/Button"; 
import { PiPhoneCall } from "react-icons/pi";

const Navbar = () => {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false); 
    const dropdownRef = useRef(null);
    const contactRef = useRef(null); 
    const navigate = useNavigate();
    const location = useLocation(); // Initialize useLocation

    // 1. Scroll Effect
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 2. Close Services Menu when route changes (FIX for Services menu not closing)
    useEffect(() => {
        setIsServicesOpen(false);
    }, [location]); 

    // 3. Close Contact Popup on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (contactRef.current && !contactRef.current.contains(event.target) && isHovered) {
                setIsHovered(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isHovered]);

    // 4. Close Services Dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsServicesOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleServiceClick = () => {
        // Closes menu when a link *inside* the menu is clicked
        setIsServicesOpen(false);
    };

    // Main wrapper click handler: Navigates to /contact
    const handleNavigate = () => {
        // Only navigate if the popup is NOT currently open
        if (!isHovered) {
             navigate("/contact");
        }
    };
    
    // Icon click handler: Toggles the number popup
    const handleIconClick = (e) => {
        e.stopPropagation(); // Stop click from triggering the parent's handleNavigate
        setIsHovered((prev) => !prev); // Toggle popup
    };

    const navbarClass = `navbar ${scrolled ? 'scrolled' : ''}`;
    return (
        <header className={navbarClass}>
            <div className="navbar__top-row">
                <NavLink to="/" className="navbar__logo">
                    <img src={Logo} alt="Logo" />
                </NavLink>

                {/* --- MAIN CONTACT BUTTON WRAPPER (Handles navigation and contains the icon trigger) --- */}
                <div
                    className="navbar__button contact-button-wrapper"
                    onClick={handleNavigate} // RESTORED: Navigate on button click
                    ref={contactRef} 
                    style={{ cursor: "pointer" }}
                >
                    
                    {/* ICON TRIGGER AREA: Anchors the popup and handles hover/icon click */}
                    <div 
                        className="icon-popup-trigger-area"
                        onMouseEnter={() => setIsHovered(true)} 
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={handleIconClick} // Toggles popup
                    >
                        {/* Contact Icon */}
                        <div className="phone-icon-container">
                            <PiPhoneCall className="ringing-phone-icon" />
                        </div>

                        {/* --- Phone Number Popup Element (Anchored here) --- */}
                        <div className={`contact-number-popup ${isHovered ? "show" : ""}`}>
                            <div className="popup-caret"></div>
                            +91 9849668819
                        </div>
                    </div> 

                    {/* Contact Button */}
                    <Button name="Contact Us" />
                </div>
                {/* --- END CONTACT BUTTON WRAPPER --- */}
            </div>

            <nav className="navbar__links-row">
                <NavLink to="/" end>
                    Home
                </NavLink>
                <NavLink to="/about">About</NavLink>

                <div
                    className={`dropdown ${isServicesOpen ? "open" : ""}`}
                    ref={dropdownRef}
                >
                    <span
                        className="dropdown__title"
                        onClick={() => setIsServicesOpen((prev) => !prev)}
                    >
                        Our Services
                    </span>

                    <div className="dropdown__menu">
                        <NavLink to="/services/transcription" onClick={handleServiceClick}>
                            Transcription Services
                        </NavLink>
                        <NavLink to="/services/closed-captioning" onClick={handleServiceClick}>
                            Closed Captioning &amp; Subtitling
                        </NavLink>
                        <NavLink to="/services/summarization" onClick={handleServiceClick}>
                            Summarization
                        </NavLink>
                        <NavLink to="/services/additional-support" onClick={handleServiceClick}>
                            Additional Support
                        </NavLink>
                    </div>
                </div>

                <NavLink to="/blogs">Blogs</NavLink>
                <NavLink to="/careers">Careers</NavLink>
            </nav>
        </header>
    );
};

export default Navbar;