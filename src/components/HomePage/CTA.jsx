// src/components/HomePage/CTA.jsx
import React, { useState } from "react";
import "../../appStyles/HomePageStyles/CTA.css";
import ContactSection from "./ContactSection";
import { Button } from "../Button/Button";

const CTA = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      {/* Pink card section */}
      <section className="cta-wrapper">
        <div className="cta-card">
          <div className="cta-inner">
            <h2 className="cta-title">
              Get Accurate Transcripts <br />
              Faster - Every Time
            </h2>

            <p className="cta-text">
              Professional transcription made simple: quick turnaround, premium
              accuracy, and complete confidentiality.
            </p>

            {/* <button
              className="cta-button"
              onClick={() => setShowContact(true)}
            >
              Get Started
            </button> */}
            <div onClick={() => setShowContact(true)}>
            {/* <Button name="Get Started" /> */}
              <Button
              name="Get Started"
              paddingXL="8.6vw"
              paddingXM="24.5vw" // ← mobile padding
              widthL="10.86vw" // ← THIS IS KEY: let content decide width
              widthM="30.3vw" // ← auto width on mobile too
              bacgrounClr="#022447"
              bacgrounArrow="#ffffff"
              colorArrow="#022447"
              colorText="#ffffff"
              colorTextHover="#022447"
            />
          </div>
          </div>
        </div>
      </section>

      {/* Popup contact form */}
      {showContact && (
        <ContactSection onClose={() => setShowContact(false)} />
      )}
    </>
  );
};

export default CTA;
