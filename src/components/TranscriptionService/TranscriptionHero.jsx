import React from "react";
import heroIllustration from "../../assets/transcription/Mask group.png";
import "../../appStyles/Services/TranscriptionHero.css";

// import PNG card images correctly
import visionCard from "../../assets/icons/Group 5.png";
import goalCard from "../../assets/icons/Group 9.png";

const TranscriptionHero = ({ onOpenContact }) => {
  const handleGetStarted = () => {
    if (typeof onOpenContact === "function") {
      onOpenContact();  // open popup modal
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
            IncrediQuo Solutions delivers high-accuracy transcription, captioning, summarisation, and language support designed for modern business needs. Fast, reliable, and powered by expert professionals.
          </p>

          {/* CARDS — only images */}
          <div className="ts-hero__cards">
            <img
              src={visionCard}
              alt="Our Vision card"
              className="ts-hero__card-full"
            />

            <img
              src={goalCard}
              alt="Our Goal card"
              className="ts-hero__card-full"
            />
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
