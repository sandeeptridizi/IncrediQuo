import React from "react";
import "../../appStyles/HomePageStyles/FeatureSection.css";
import featureIllustration from "../../assets/features/Group 1304.png";
const FeatureSection = () => {
  return (
    <section className="feature-section">
      <div className="feature-inner">

        {/* SVG illustration */}
        <div className="feature-illustration">
          <img src={featureIllustration} alt="Feature illustration" className="feature-svg" />
        </div>

        {/* Right content */}
        <div className="feature-content">
          <h2 className="feature-title">
            Lorem Ipsum is the <br />
            Dummy test
          </h2>

          <p className="feature-text">
            You can explore the features that we provide with fun and have
            their own functions each feature.
          </p>

          <ul className="feature-list">
            <li className="feature-item">Powerful online protection.</li>
            <li className="feature-item">Internet without borders.</li>
            <li className="feature-item">Supercharged NetONE</li>
            <li className="feature-item">No specific time limits.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
