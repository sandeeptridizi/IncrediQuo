// src/components/AdditionalSupportService/AdditionalSupportHero.jsx
import React from "react";
import heroIllustration from "../../assets/services/Additionalsupport.png"; // <-- correct image
import "../../appStyles/Services/TranscriptionHero.css";
import visionCard from "../../assets/icons/Group 5.png";
import goalCard from "../../assets/icons/Group 9.png";

const AdditionalSupportHero = () => {
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
            Lorem Ipsum Content is the
            <br /> Dummy text
          </h1>

          <p className="ts-hero__description">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed.
          </p>

          <div className="ts-hero__cards">
            <img src={visionCard} className="ts-hero__card-full" alt="Our Vision" />
            <img src={goalCard} className="ts-hero__card-full" alt="Our Goal" />
          </div>

          <button className="ts-hero__cta">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default AdditionalSupportHero;
