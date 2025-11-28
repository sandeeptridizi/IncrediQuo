import React from "react";
import "../../appStyles/Career/HowItWorks.css";

const HowItWorks = () => {
  return (
    <>
      {/* TITLE OUTSIDE THE PINK BOX */}
      <h2 className="hiw__title">How it works</h2>

      {/* PINK STRIP ONLY */}
      <section className="hiw">
        <div className="hiw__row">

          {/* 1. Create a resume */}
          <div className="hiw__card">
            <div className="hiw__icon">
              <svg className="hiw__svg-icon" viewBox="0 0 24 24">
                <rect x="5" y="3" width="12" height="18" rx="2" ry="2" />
                <polyline points="11 7 15 7 15 11" />
                <line x1="11" y1="7" x2="15" y2="11" />
              </svg>
            </div>
            <div className="hiw__text">
              <h4>Explore Opportunities</h4>
              <p>Find roles that match your skills, passion, and career goals..</p>
            </div>
          </div>

          {/* 2. Search */}
          <div className="hiw__card">
            <div className="hiw__icon">
              <svg className="hiw__svg-icon" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="5" />
                <line x1="15.5" y1="15.5" x2="19" y2="19" />
              </svg>
            </div>
            <div className="hiw__text">
              <h4>Apply with Confidence</h4>
              <p>Submit your application and showcase your strengths and experience</p>
            </div>
          </div>

          {/* 3. Apply & Be selected */}
          <div className="hiw__card">
            <div className="hiw__icon">
              <svg className="hiw__svg-icon" viewBox="0 0 24 24">
                <line x1="7" y1="6" x2="7" y2="18" />
                <line x1="12" y1="9" x2="12" y2="18" />
                <line x1="17" y1="12" x2="17" y2="18" />
                <circle cx="7" cy="6" r="1.5" />
                <circle cx="12" cy="9" r="1.5" />
                <circle cx="17" cy="12" r="1.5" />
              </svg>
            </div>
            <div className="hiw__text">
              <h4>Grow with IncrediQuo</h4>
              <p>Join a team that supports your development and values your contribution</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default HowItWorks;
