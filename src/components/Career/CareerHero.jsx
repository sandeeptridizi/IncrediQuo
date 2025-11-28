import React from "react";
import "../../appStyles/Career/CareerHero.css";
import heroImg from "../../assets/carrers/carrerphoto.png";
import { Button } from "../Button/Button";

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
              {/* <button type="button" className="ch-btn ch-btn--light">
                Apply Job
              </button> */}
              <div>
                <Button
                name="Apply Job"
                  paddingXL="8.6vw"
  paddingXM="24.5vw"
  widthL="10.5vw"
  widthM="3.3vw"
  bacgrounClr="#ffff"
  bacgrounArrow="#022447"
  colorArrow="#ffff"
  colorText="#022447"
  colorTextHover="#ffff" />
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
          <button className="ch-btn ch-btn--search" type="button">
            <span className="ch-btn__label">SEARCH</span>
            <span className="ch-btn__icon" aria-hidden="true">
              <img src="/search button.png" alt="" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
