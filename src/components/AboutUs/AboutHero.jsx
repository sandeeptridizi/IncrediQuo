import React from "react";
import "../../appStyles/AboutUs/AboutHero.css";
import AboutHeroImg from "../../assets/Abouthero/AboutHero.jpg"; // your image

const AboutHero = () => {
  return (
    <section className="about-hero">
      <div className="about-hero__inner">
        {/* LEFT TEXT */}
        <div className="about-hero__text">
          <h1>
            Your Trusted Partner for Professional{" "}
            <span className="about-hero__highlight">
              Transcription and Language Solutions
            </span>
          </h1>

          <p>
            At IncrediQuo Solutions, we combine human expertise with intelligent
            workflows to provide precise, secure, and scalable language
            solutions trusted by global enterprises.
          </p>

          <button className="about-hero__button">Learn More</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-hero__image">
  <img src={AboutHeroImg} alt="Team collaborating at a laptop" />
</div>

      </div>
    </section>
  );
};

export default AboutHero;
