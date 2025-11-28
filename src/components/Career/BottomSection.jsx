import React from "react";
import { Link } from "react-router-dom";
import "../../appStyles/Career/BottomSection.css";
import { Button } from "../Button/Button";

const BottomSection = () => {
  return (
    <div className="career-bottom">
      {/* DOT IMAGE instead of CSS pattern */}
      <img
        src="/Graphic_Elements.png"
        alt=""
        className="dot-pattern"
      />

      <p>
        We’re a precision-driven transcription and language support company built
        on trust, accuracy, and innovation. Learn how our expertise adds value
        to every client we serve.
      </p>

      {/* ABOUT US button → goes to /about */}
      {/* <Link to="/about" className="bottom-btn">
        ABOUT US
      </Link> */}
      <div
                        className="bottom-btn"
                        onClick={() => navigate("/about")}
                        style={{ cursor: "pointer" }}
                      >
                        <Button name="ABOUT US" 
                        />
                      </div>
    </div>
  );
};

export default BottomSection;
