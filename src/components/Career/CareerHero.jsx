import React from "react";
import "../../appStyles/Career/CareerHero.css";
import heroImg from "../../assets/carrers/carrerphoto.png";

const CareerHero = () => {
  return (
    <section className="career-hero">
      <div className="career-hero__inner">

        <div className="career-hero__panel">

          <div className="career-hero__text">
            <h1>PERFECT ROLE<br />IS AWATING!</h1>
            <p className="career-hero__subtitle">No 1 job portal site for dentist</p>

            <div className="career-hero__buttons">
              <button className="ch-btn ch-btn--light">Create resume</button>
              <button className="ch-btn ch-btn--ghost">Watch Demo</button>
            </div>
          </div>

          <div className="career-hero__image-wrapper">
            <img src={heroImg} alt="Hero" className="career-hero__image" />
          </div>
        </div>

        <div className="career-hero__search">

          <div className="search-field">
            <label>Location</label>
            <select>
              <option>Select Your City</option>
            </select>
          </div>

          <div className="search-field">
            <label>Title</label>
            <select>
              <option>Choose job role</option>
            </select>
          </div>

          <button className="ch-btn--search">
            <span>SEARCH</span>
            <span className="ch-btn__icon">🔍</span>
          </button>

        </div>
      </div>
    </section>
  );
};

export default CareerHero;
