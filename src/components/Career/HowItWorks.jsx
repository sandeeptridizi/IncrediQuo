// src/components/Career/HowItWorks.jsx
import React from "react";
import "../../appStyles/Career/HowItWorks.css";

import iconExplore from "../../assets/carrers/Group 88.png";
import iconGrow from "../../assets/carrers/Group 90.png";
import iconApply from "../../assets/carrers/Group 89.png";

const HowItWorks = () => {
  return (
    <>
      {/* TITLE OUTSIDE THE PINK BOX */}
      <h2 className="hiw__title">How it works</h2>

      {/* PINK STRIP ONLY */}
      <section className="hiw">
        <div className="hiw__row">
          {/* 1 */}
          <div className="hiw__card">
            <div className="hiw__icon">
              <img src={iconExplore} alt="Explore Opportunities" />
            </div>
            <div className="hiw__text">
              <h4>Explore Opportunities</h4>
              <p>
                Find roles that match your skills, passion, and career goals.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="hiw__card">
            <div className="hiw__icon">
              <img src={iconGrow} alt="Apply with Confidence" />
            </div>
            <div className="hiw__text">
              <h4>Apply with Confidence</h4>
              <p>
                Submit your application and showcase your strengths and
                experience.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="hiw__card">
            <div className="hiw__icon">
              <img src={iconApply} alt="Grow with IncrediQuo" />
            </div>
            <div className="hiw__text">
              <h4>Grow with IncrediQuo</h4>
              <p>
                Join a team that supports your development and values your
                contribution.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
