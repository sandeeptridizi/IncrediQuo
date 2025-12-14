import React, { useState, useEffect } from "react";
import "../../appStyles/AboutUs/AboutHero.css";
import AboutHeroImg from "../../assets/Abouthero/AboutHero.jpg";
import { Button } from "../Button/Button";


const Typewriter = ({ text, delay }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);
  return (
    <span className="about-hero__highlight">
      {displayText}
    </span>
  );
};

const AboutHero = () => {
  const animatedText = "Transcription and Language Solutions";
  const typingDelay = 50; 
  return (
    <section className="about-hero">
      <div className="about-hero__inner">
        <div className="about-hero__text">
          <h1>
            Your Trusted Partner for Professional{" "}
            <Typewriter text={animatedText} delay={typingDelay} />
          </h1>

          <p>
            At IncrediQuo Solutions, we combine human expertise with intelligent
            workflows to provide precise, secure, and scalable language
            solutions trusted by global enterprises.
          </p>

         
          <div className="about_hero_button">
                        <Button
  name="Learn More"
  paddingXL = "8.6vw"
  paddingXM = "24.5vw"
  widthL = "10.9vw"
  widthM = "30.31vw"
  bacgrounClr="#022447"
  bacgrounArrow="#ffffff"
  colorArrow="#022447"
  colorText="#ffffff"
  colorTextHover="#022447"
/>
          </div>
        </div>

       <div className="about-hero__image-wrapper">
  <div className="about-hero__image-bg"></div>

  <img
    src={AboutHeroImg}
    alt="Team collaborating at a laptop"
    className="about-hero__image-main"
  />
</div>
      </div>
    </section>
  );
};

export default AboutHero;