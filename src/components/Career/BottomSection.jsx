import React from "react";
import { useNavigate } from "react-router-dom";
import "../../appStyles/Career/BottomSection.css";
import { Button } from "../Button/Button";

const BottomSection = () => {
  const navigate = useNavigate();

  return (
    <div className="career-bottom">
      {/* DOT IMAGE */}
      <img src="/Graphic_Elements.png" alt="" className="dot-pattern" />

      <p>
        We’re a precision-driven transcription and language support company
        built on trust, accuracy, and innovation. Learn how our expertise adds
        value to every client we serve.
      </p>

      {/* ABOUT US button */}
      <div
        className="blogs-approach__button bottom-btn"
        onClick={() => navigate("/about")}
        style={{ cursor: "pointer" }}
      >
        <Button
          name="ABOUT US"
          paddingXL="8.6vw"
          paddingXM="24.5vw"
          widthL="10.87vw"
          widthM="30.3vw"
          bacgrounClr="#022447"
          bacgrounArrow="#ffffff"
          colorArrow="#022447"
          colorText="#ffffff"
          colorTextHover="#022447"
        />
      </div>
    </div>
  );
};

export default BottomSection;
