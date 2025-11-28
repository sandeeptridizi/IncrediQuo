import React from "react";
import heroIllustration from "../../assets/services/ClosedCaptionServicePage.png";
import "../../appStyles/Services/TranscriptionHero.css";

import BulbIcon from "../../assets/services/ServiceIcon.png";
import BulbIcon2 from "../../assets/services/Icon1.png";

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
            clarity, timing precision, and compliance so every viewer
            understands your story.
          </p>

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

          <button className="ts-hero__cta" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClosedCaptionHero;
