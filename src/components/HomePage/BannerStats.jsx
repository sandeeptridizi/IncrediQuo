// BannerStats.jsx (unchanged)
import React from "react";
import "../../appStyles/HomePageStyles/BannerStats.css";

const BannerStats = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="banner">
      <div className="banner__inner">
        <div className="banner__text">
          <h2>
            It is a long established fact that a reader
            <br />
            will be distra by the
          </h2>
          <p>
            It is a long established fact that a reader will be distra by the
            readable content of a page when looking at its layout, when looking
            at its layout.
          </p>
          <button className="banner__button" onClick={scrollToContact}>
            Get Started
          </button>
        </div>

       <div className="banner__ticker">
  <div className="banner__ticker-track">
    <span>24 Hours</span>
    <span>Real-time</span>
    <span>Custom / As per Client Requirement</span>

    {/* duplicate items so the loop looks continuous */}
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
