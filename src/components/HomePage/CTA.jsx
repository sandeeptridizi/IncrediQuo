// src/components/HomePage/CTA.jsx
import React, { useState } from "react";
import "../../appStyles/HomePageStyles/CTA.css";
import ContactSection from "./ContactSection";

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

            <button
              className="cta-button"
              onClick={() => setShowContact(true)}
            >
              Get Started
            </button>
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
