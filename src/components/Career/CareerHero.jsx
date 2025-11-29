import React, { useState, useEffect } from "react";
import "../../appStyles/Career/CareerHero.css";
import heroImg from "../../assets/carrers/carrerphoto.png";
import { Button } from "../Button/Button";

// Dedicated component to handle typing animation and line breaks
const AnimatedH1 = ({ text, delay }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const separator = '~'; // Using tilde to clearly denote line breaks in the input string

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

    // Split the raw output by the separator and insert <br /> tags
    const renderedText = displayText.split(separator).map((item, index) => (
        <React.Fragment key={index}>
            {item}
            {/* Add <br /> only between the segments */}
            {index < displayText.split(separator).length - 1 && <br />}
        </React.Fragment>
    ));

    return (
        <>{renderedText}</>
    );
};

const CareerHero = () => {
  // Use '~' as a separator to represent the desired line breaks (<br />)
  const rawAnimatedText = "Build Your Future~with IncrediQuo~Solutions"; 
  const typingDelay = 75; // Milliseconds per character

  return (
    <section className="career-hero">
      <div className="career-hero__inner">
        {/* BLUE PANEL */}
        <div className="career-hero__panel">
          {/* LEFT TEXT */}
          <div className="career-hero__text">
            <h1>
              {/* Using the dedicated component for the animation */}
              <AnimatedH1 text={rawAnimatedText} delay={typingDelay} />
            </h1>

            <p className="career-hero__subtitle">
              Innovate, create, and shape the future of
              <br />
              language solutions
            </p>

            <div className="career-hero__buttons">
              <div>
                <Button
                  name="Apply Job"
                  paddingXL="8.6vw"
                  paddingXM="24.5vw"
                  widthL="10.21vw"
                  widthM="3.3vw"
                  bacgrounClr="#ffff"
                  bacgrounArrow="#022447"
                  colorArrow="#ffff"
                  colorText="#022447"
                  colorTextHover="#ffff"
                />
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="career-hero__image-wrapper">
            <img
              src={heroImg}
              alt="Team member working"
              className="career-hero__image"
            />
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="career-hero__search">
          {/* Location field */}
          <div className="search-field">
            <label>Location</label>

            <div className="search-field__value">
              <span className="search-value">Select Your City</span>

              <span className="search-icon search-icon--pin" aria-hidden="true">
                <img src="/Group 3.png" alt="" />
              </span>
            </div>
          </div>

          {/* Title field */}
          <div className="search-field">
            <label>Title</label>

            <div className="search-field__value">
              <span className="search-value">Choose job role</span>

              <span
                className="search-icon search-icon--chevron"
                aria-hidden="true"
              >
                <img src="/Group 4.png" alt="" />
              </span>
            </div>
          </div>

          {/* SEARCH BUTTON */}
          <Button
            name="Search....."
            type="button"
            paddingXL="8.6vw"
            paddingXM="24.5vw"
            widthL="10.5vw"
            widthM="3.3vw"
            bacgrounClr="#022447"
            bacgrounArrow="#ffff"
            colorArrow="#022447"
            colorText="#ffff"
            colorTextHover="#022447"
          />
        </div>
      </div>
    </section>
  );
};

export default CareerHero;