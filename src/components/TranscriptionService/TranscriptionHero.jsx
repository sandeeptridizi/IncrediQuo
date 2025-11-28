import React from "react";
import heroIllustration from "../../assets/transcription/Mask group.png";
import "../../appStyles/Services/TranscriptionHero.css";

// import PNG card images correctly
import visionCard from "../../assets/icons/Group 5.png";
import goalCard from "../../assets/icons/Group 9.png";

import BulbIcon from "../../assets/services/ServiceIcon.png";
import BulbIcon2 from "../../assets/services/ServiceIcon1.png";

const TranscriptionHero = ({ onOpenContact }) => {
  const handleGetStarted = () => {
    if (typeof onOpenContact === "function") {
      onOpenContact(); // open popup modal
    }
  };

  return (
    <section className="ts-hero">
      <div className="ts-hero__inner">
        {/* LEFT — Illustration */}
        <div className="ts-hero__left">
          <img
            src={heroIllustration}
            alt="Transcription service illustration"
            className="ts-hero__image"
          />
        </div>

        {/* RIGHT — Text */}
        <div className="ts-hero__right">
          <p className="ts-hero__eyebrow">Transcription Services</p>

          <h1 className="ts-hero__title">
            Precision-Driven Language
            <br />
            Services You Can Trust
          </h1>

          <p className="ts-hero__description">
            IncrediQuo Solutions delivers high-accuracy transcription,
            captioning, summarisation, and language support designed for modern
            business needs. Fast, reliable, and powered by expert professionals.
          </p>

          {/* CARDS — only images */}
          <div className="vg-container">
            <div className="vg-card">
              <div className="innerIMg_bulb">
                <img src={BulbIcon} alt="Vision" className="vg-icon" />
              </div>
              <div className="vg-text">
                <h4>Our Vision</h4>
                <p>Making every word clear, accurate, and dependable</p>
              </div>
            </div>
            <div className="vg-card">
              <div className="innerIMg_bulb">
                <img src={BulbIcon2} alt="Goal" className="vg-icon" />
              </div>
              <div className="vg-text">
                <h4>Our Goal</h4>
                <p>Delivering fast, precise language solutions every time</p>
              </div>
            </div>
          </div>

          {/* CTA BUTTON */}
          <button className="ts-hero__cta" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default TranscriptionHero;
