import React from "react";
import heroIllustration from "../../assets/services/ClosedCaptionServicePage.png";  // ⬅ correct image
import "../../appStyles/Services/TranscriptionHero.css";
import visionCard from "../../assets/icons/Group 5.png";
import goalCard from "../../assets/icons/Group 9.png";

const ClosedCaptionHero = ({ onOpenContact }) => {
  const handleGetStarted = () => {
    if (typeof onOpenContact === "function") {
      onOpenContact();
    }
  };

  return (
    <section className="ts-hero">
      <div className="ts-hero__inner">
        {/* LEFT — illustration */}
        <div className="ts-hero__left">
          <img
            src={heroIllustration}
            alt="Closed captioning & subtitling illustration"
            className="ts-hero__image"
          />
        </div>

        {/* RIGHT — text */}
        <div className="ts-hero__right">
          <p className="ts-hero__eyebrow">Closed Captioning &amp; Subtitling</p>

          <h1 className="ts-hero__title">
            Precision Captioning & Subtitles for a Truly Inclusive Audience
          </h1>
          <p className="ts-hero__description">
            Make your videos accessible, accurate, and globally ready with our
            expertly crafted captions and multilingual subtitles. We ensure
            clarity, timing precision, and compliance. so every viewer
            understands your story.
          </p>

          {/* Vision and Goal card images */}
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

          <button className="ts-hero__cta" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClosedCaptionHero;
