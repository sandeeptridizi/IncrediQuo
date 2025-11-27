import React from "react";
import heroIllustration from "../../assets/services/SummarizationHero.png";
import "../../appStyles/Services/TranscriptionHero.css"; 
import visionCard from "../../assets/icons/Group 5.png";
import goalCard from "../../assets/icons/Group 9.png";

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

export default SummarizationHero;
