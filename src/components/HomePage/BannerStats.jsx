// BannerStats.jsx
import React from "react";
import "../../appStyles/HomePageStyles/BannerStats.css";
import { Button } from "../Button/Button";

const BannerStats = ({ onOpenContact }) => {
  const handleClick = () => {
    if (typeof onOpenContact === "function") {
      onOpenContact(); // open popup like Hero
    }
  };

  return (
    <section className="banner">
      <div className="banner__inner">
        {/* LEFT SIDE PILL STRIPES */}
        <div className="banner__stripes">
          <div className="banner__stripe"></div>
          <div className="banner__stripe"></div>
          <div className="banner__stripe"></div>
          <div className="banner__stripe"></div>
          <div className="banner__stripe"></div>
          <div className="banner__stripe"></div>
          <div className="banner__stripe"></div>
          <div className="banner__stripe"></div>
        </div>

        <div className="banner__text">
          <h2>
            Flexible Work Modes Designed for Your
            <br />
            Every Deadline
          </h2>
          <p>
            At IncrediQuo Solutions, we adapt to your pace not the other way
            around. Whether you need fast, real-time accuracy or structured
            delivery, our flexible service modes ensure your transcription and
            language solutions arrive exactly when you need them.
          </p>
          {/* <button className="banner__button" onClick={handleClick}>
            Get Started
          </button> */}
          <div onClick={handleClick}>
            <Button
              name="Get Started"
              paddingXL="8.6vw"
              paddingXM="24.5vw"
              widthL="10.7vw"
              widthM="30.3vw"
              bacgrounClr="#ffff"
              bacgrounArrow="#022447"
              colorArrow="#ffff"
              colorText="#022447"
              colorTextHover="#ffff"
            />
          </div>
        </div>

        <div className="banner__ticker">
          <div className="banner__ticker-track">
            <span>24 Hours</span>
            <span>Real-time</span>
            <span>Custom / As per Client Requirement</span>

            {/* duplicate items for infinite loop */}
            <span>24 Hours</span>
            <span>Real-time</span>
            <span>Custom / As per Client Requirement</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerStats;
