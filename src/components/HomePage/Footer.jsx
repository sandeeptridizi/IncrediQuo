// src/components/Homepage/Footer.jsx
import React from "react";
import "../../appStyles/HomePageStyles/Footer.css";
import logo from "../../assets/logo.png"; // lightning / brand icon

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <div className="footer-top">
          {/* -------- LEFT BRAND BLOCK -------- */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-mark">
                <img src={logo} alt="Logoipsum logo" />
              </div>
              <span className="footer-logo-text">Logoipsum</span>
            </div>

            <p className="footer-description">
              Lorem Ipsum Content is the Dummy text
              <br />
              which is for the web content
            </p>

            <button className="footer-social">in</button>

            <p className="footer-copy-left">©2022 IncrediQuo Solutions</p>
          </div>

          {/* -------- RIGHT LINK COLUMNS -------- */}
          <div className="footer-links">
            {/* Services group – ~230px wide in Figma */}
            <div className="footer-column footer-column--services">
              <h4 className="footer-heading">Services</h4>
              <ul>
                <li>Transcription</li>
                <li>Closed Captioning &amp; Subtitling</li>
                <li>Summarization</li>
                <li>Additional Support</li>
              </ul>
            </div>

            {/* Quikers group + Privacy / Terms – ~380px wide in Figma */}
            <div className="footer-column footer-column--quikers">
              <h4 className="footer-heading">Quikers</h4>
              <ul>
                <li>Home Page</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Blogs</li>
              </ul>

              <div className="footer-bottom-links">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
