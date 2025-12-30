import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "../../appStyles/HomePageStyles/Navbar.css";
import Logo from "../../assets/finalLogo.png";
import { Button } from "../Button/Button";
import { HiMenu, HiX } from "react-icons/hi";


const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
  const handleOutsideClick = (event) => {
    if (!isMobileMenu) return;

    const menu = menuRef.current;
    const button = buttonRef.current;

    if (
      menu &&
      !menu.contains(event.target) &&
      button &&
      !button.contains(event.target)
    ) {
      setIsMobileMenu(false);
    }
  };

  document.addEventListener("mousedown", handleOutsideClick);

  return () => {
    document.removeEventListener("mousedown", handleOutsideClick);
  };
}, [isMobileMenu]);

  const openCalendly = () => {
    window.open(
      "https://calendly.com/shashank-incrediquosolutions/30min",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar__top-row">
       <NavLink to="/" className="navbar__logo">
          <img src={Logo} alt="Logo" />
        </NavLink>
              
                <div className="navbar__links-row">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>

          <div
            className={`dropdown ${isServicesOpen ? "open" : ""}`}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <span className="dropdown__title">Services</span>
            <div className="dropdown__menu">
              <NavLink to="/services/transcription">
                Transcription Services
              </NavLink>
              <NavLink to="/services/closed-captioning">
                Closed Captioning & Subtitling
              </NavLink>
              <NavLink to="/services/summarization">Summarization</NavLink>
              <NavLink to="/services/additional-support">
                Additional Support
              </NavLink>
            </div>
          </div>
          <NavLink to="/blogs">News & Insights</NavLink>
          <NavLink to="/careers">Careers</NavLink>
        </div>

        {/* Desktop Buttons */}
        <div className="contact-buttons-container">
          <div onClick={openCalendly}>
            <Button
              name="Schedule Appointment"
                paddingXL = "12.6vw"
                paddingXM = "9.5vw"
                widthL = "15.8vw"

              widthM="44vw"
              bacgrounClr="#022447"
              bacgrounArrow="#fff"
              colorArrow="#022447"
              colorText="#fff"
            />
          </div>

          <div onClick={() => navigate("/contact")}>
            <Button name="Contact Us" />
          </div>
        </div>
        <button ref={buttonRef}
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenu(prev => !prev)}
        >
          {isMobileMenu ? <HiX size={34} /> : <HiMenu size={34} />}
        </button>
        </div>
      <div ref={menuRef} className={`mobile-menu ${isMobileMenu ? "open" : ""}`}>

        <div className="mobile-nav-links">
          <NavLink to="/" onClick={() => setIsMobileMenu(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setIsMobileMenu(false)}>
            About
          </NavLink>
          <details className="mobile-dropdown">
            <summary>Services</summary>
            <NavLink
              to="/services/transcription"
              onClick={() => setIsMobileMenu(false)}
            >
              Transcription Services
            </NavLink>
            <NavLink
              to="/services/closed-captioning"
              onClick={() => setIsMobileMenu(false)}
            >
              Closed Captioning & Subtitling
            </NavLink>
            <NavLink
              to="/services/summarization"
              onClick={() => setIsMobileMenu(false)}
            >
              Summarization
            </NavLink>
            <NavLink
              to="/services/additional-support"
              onClick={() => setIsMobileMenu(false)}
            >
              Additional Support
            </NavLink>
          </details>

          <NavLink to="/blogs" onClick={() => setIsMobileMenu(false)}>
            News & Insights
          </NavLink>
          <NavLink to="/careers" onClick={() => setIsMobileMenu(false)}>
            Careers
          </NavLink>
          <div className="mobile-contact-buttons">
             <button type="button" onClick={() => { setIsMobileMenu(false) ; navigate("/contact")}}> Contact Us </button>

          <button name="Schedule Appointment" onClick={openCalendly} >Schedule Appointment</button>
        </div>
        </div>        
      </div>
    </header>
  );
};

export default Navbar;
