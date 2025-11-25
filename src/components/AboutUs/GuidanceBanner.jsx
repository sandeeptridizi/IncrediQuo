import React from "react";
import "../../appStyles/AboutUs/GuidanceBanner.css";

const GuidanceBanner = () => {
  return (
    <section className="guidance-banner">
      <div className="guidance-banner__inner">
        <h2>
          Daily guidance crafted
          <br />
          specifically for your goals.
        </h2>

        <p>
          Figma ipsum component variant main layer. Arrow arrow variant arrow
          object component slice. Pen select rectangle font selection frame
          draft.
        </p>

        <button className="guidance-banner__button">Get Started</button>
      </div>
    </section>
  );
};

export default GuidanceBanner;
