import React from "react";
import "../../appStyles/Career/CareerHero.css";
import heroImg from "../../assets/carrers/carrerphoto.png";

const CareerHero = () => {
  return (
    <section className="career-hero">
      <div className="career-hero__inner">
        {/* BLUE PANEL */}
        <div className="career-hero__panel">
          {/* LEFT TEXT */}
          <div className="career-hero__text">
            <h1>
              Build Your Future <br />
              with IncrediQuo <br />
              Solutions
            </h1>

            <p className="career-hero__subtitle">
              Innovate, create, and shape the future of
              <br />
              language solutions
            </p>

            <div className="career-hero__buttons">
              <button type="button" className="ch-btn ch-btn--light">
                Apply Job
              </button>
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

              {/* Location pin – 12 x 14.67, 1.4px, #8F90A6 */}
              <span
                className="search-icon search-icon--pin"
                aria-hidden="true"
              >
                <svg
                  width="12"
                  height="14.67"
                  viewBox="0 0 12 15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 14.5C6 14.5 1.5 9.9 1.5 6.5C1.5 4.29 3.29 2.5 5.5 2.5C7.71 2.5 9.5 4.29 9.5 6.5C9.5 9.9 6 14.5 6 14.5Z"
                    fill="none"
                    stroke="#8F90A6"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="5.5"
                    cy="6"
                    r="1.5"
                    fill="none"
                    stroke="#8F90A6"
                    strokeWidth="1.4"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* Title field */}
          <div className="search-field">
            <label>Title</label>

            <div className="search-field__value">
              <span className="search-value">Choose job role</span>

              {/* Chevron – 12 x 6, 1.5px, #8F90A6 */}
              <span
                className="search-icon search-icon--chevron"
                aria-hidden="true"
              >
                <svg
                  width="12"
                  height="6"
                  viewBox="0 0 12 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L6 5L11 1"
                    fill="none"
                    stroke="#8F90A6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>

          {/* SEARCH BUTTON – 159 x 54 */}
          <button className="ch-btn ch-btn--search" type="button">
            <span className="ch-btn__label">SEARCH</span>
            <span className="ch-btn__icon" aria-hidden="true">
              <svg
                width="17.76"
                height="17.76"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="4.5"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  fill="none"
                />
                <line
                  x1="12"
                  y1="12"
                  x2="17"
                  y2="17"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
