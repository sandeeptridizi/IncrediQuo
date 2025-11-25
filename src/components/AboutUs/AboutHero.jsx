import React from "react";
import "../../appStyles/AboutUs/AboutHero.css";
import AboutHeroImg from "../../assets/Abouthero/AboutHero.jpg"; // 👈 import image

const AboutHero = () => {
  return (
    <section className="about-hero" id="about">
      <div className="about-hero__inner">
        {/* LEFT TEXT */}
        <div className="about-hero__text">
          <h1>
            Building
            <br />
            Connections,
            <br />
            Creating Impact
          </h1>
          <p>
            We&apos;re a consumer-led digital health company that helps people
            live healthier, happier lives.
          </p>

          <button className="about-hero__button">Learn More</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="about-hero__image">
          <img src={AboutHeroImg} alt="About illustration" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
