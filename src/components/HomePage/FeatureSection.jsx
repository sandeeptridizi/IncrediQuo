import React from "react";
import "../../appStyles/HomePageStyles/FeatureSection.css";
import featureIllustration from "../../assets/features/featuresection.png";
import whyChooseImg from "../../assets/features/Why choose IncrediQuo.png";
// New image import
import worldMap from "../../assets/WorldMap.png"; // Assuming the file name is 'world map in src.png' or similar

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <div className="feature-inner">
       <div className="feature__image-wrapper">
          <div className="feature__image-bg"></div>

          <img
            src={featureIllustration}
            alt="Feature illustration"
            className="feature__image-main"
          />
        </div>
        <div className="feature-content">
          <h2 className="feature-title">
            Our Workflow Engineered <br />
            for Accuracy & Speed
          </h2>

          <p className="feature-text">
            A streamlined, quality-first process that ensures every
            transcription, caption, and summary is delivered with precision, on
            time, every time.
          </p>

          <ul className="feature-list">
            <li className="feature-item">
              Clear requirement gathering and project scoping
            </li>
            <li className="feature-item">
              Tasks assigned to the right domain experts.
            </li>
            <li className="feature-item">
              Human-led processing with smart tech support
            </li>
            <li className="feature-item">
              Fast delivery across all working modes.
            </li>
          </ul>
        </div>
      </div>
      <div className="why-choose-container">
        <div className="why-left">
          <h2 className="why-title">Why Choose IncrediQuo:</h2>

          <div className="why-list">
            <p className="why-item">High accuracy and attention to detail</p>
            <p className="why-item">
              Fast turnaround time with expedited options
            </p>
            <p className="why-item">
              Secure file handling and NDA compliance
            </p>
            <p className="why-item">
              Custom formatting and speaker identification
            </p>
            <p className="why-item">
              Multilingual support and timecoding
            </p>
            <p className="why-item">
              Dedicated project managers & multilayer quality checks
            </p>
          </div>

          <p className="why-desc">
            Our process ensures each transcript passes through multiple layers
            of review—including initial typing, proofreading, and final quality
            audit.
          </p>
        </div>
        <div className="why-right">
          <img
            src={whyChooseImg}
            alt="Why choose IncrediQuo"
            className="why-image"
          />
        </div>
      </div>

      {/* New World Map Section */}
      <div className="world-map-container">
        <img
          src={worldMap}
          alt="World Map showing global presence"
          className="world-map-image"
        />
      </div>
      {/* End of New World Map Section */}
    </section>
  );
};

export default FeatureSection;