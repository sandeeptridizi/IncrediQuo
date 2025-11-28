import React from "react";
import heroIllustration from "../../assets/services/SummarizationHero.png";
import "../../appStyles/Services/TranscriptionHero.css";

import BulbIcon from "../../assets/services/ServiceIcon.png";
import BulbIcon2 from "../../assets/services/serviceIcon1.png";

const SummarizationHero = ({ onOpenContact }) => {
  const handleGetStarted = () => {
    if (typeof onOpenContact === "function") {
      onOpenContact();
    }
  };

  return (
    <section className="ts-hero">
      <div className="ts-hero__inner">
        {/* LEFT: Illustration */}
        <div className="ts-hero__left">
          <img
            src={heroIllustration}
            alt="Summarization service illustration"
            className="ts-hero__image"
          />
        </div>

        {/* RIGHT: Text content */}
        <div className="ts-hero__right">
          <p className="ts-hero__eyebrow">Summarization</p>

          <h1 className="ts-hero__title">
            Precision Summaries That Save Time & Deliver Clarity
          </h1>

          <p className="ts-hero__description">
            Our Summarisation Service transforms lengthy, complex content into
            clear, concise, and insightful summaries, without losing meaning,
            context, or critical details. We help you extract the essential
            information you need for faster decision-making, smoother workflows,
            and smarter content consumption across every industry.
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

export default SummarizationHero;
