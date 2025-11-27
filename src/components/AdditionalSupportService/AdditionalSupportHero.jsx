import React from "react";
import heroIllustration from "../../assets/services/Additionalsupport.png"; // <-- correct image
import "../../appStyles/Services/TranscriptionHero.css";
import visionCard from "../../assets/icons/Group 5.png";
import goalCard from "../../assets/icons/Group 9.png";

const AdditionalSupportHero = ({ onOpenContact }) => {
  const handleGetStarted = () => {
    if (typeof onOpenContact === "function") {
      onOpenContact();
    }
  };

  return (
    <section className="ts-hero">
      <div className="ts-hero__inner">
        
        {/* LEFT IMAGE */}
        <div className="ts-hero__left">
          <img
            src={heroIllustration}
            alt="Additional Support illustration"
            className="ts-hero__image"
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="ts-hero__right">
          <p className="ts-hero__eyebrow">Additional Support</p>

          <h1 className="ts-hero__title">
            Reliable Language Support Beyond Transcription
          </h1>

          <p className="ts-hero__description">
            Get comprehensive assistance tailored to your content needs quality
            checks, formatting support, linguistic enhancements, and specialized
            documentation to ensure every file you deliver is polished,
            accurate, and ready for use.
          </p>

          <div className="ts-hero__cards">
            <img
              src={visionCard}
              className="ts-hero__card-full"
              alt="Our Vision"
            />
            <img
              src={goalCard}
              className="ts-hero__card-full"
              alt="Our Goal"
            />
          </div>

          <button className="ts-hero__cta" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdditionalSupportHero;
