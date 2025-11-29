import React, { useState, useEffect } from "react";
import "../../appStyles/AboutUs/AboutHero.css";
import AboutHeroImg from "../../assets/Abouthero/AboutHero.jpg"; // your image
import { Button } from "../Button/Button";

// Updated Typewriter Component: Cursor removed, text remains
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, delay, text]);

  // Only returns the progressively displayed text
  return (
    <span className="about-hero__highlight">
      {displayText}
    </span>
  );
};

const AboutHero = () => {
  const animatedText = "Transcription and Language Solutions";
  const typingDelay = 50; // Milliseconds per character

  return (
    <section className="about-hero">
      <div className="about-hero__inner">
        {/* LEFT TEXT */}
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

          {/* <button className="about-hero__button">Learn More</button> */}
          <div>
            {/* <Button name="Learn More" /> */}
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

        {/* RIGHT IMAGE */}
        <div className="about-hero__image">
          <img src={AboutHeroImg} alt="Team collaborating at a laptop" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;