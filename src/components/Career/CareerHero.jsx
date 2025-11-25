import React from "react";
import "../../appStyles/Career/CareerHero.css";
import heroImg from "../../assets/carrers/carrerphoto.png";

const CareerHero = () => {
  return (
    <section className="career-hero">
      {/* LEFT: blue block with text */}
      <div className="career-hero__panel">
        <div className="career-hero__text">
          <h1>PERFECT ROLE IS AWAITING!</h1>
          <p className="career-hero__subtitle">No 1 job portal site for dentist</p>

          <div className="career-hero__buttons">
            <button className="ch-btn ch-btn--light">Create resume</button>
            <button className="ch-btn ch-btn--ghost">Watch Demo</button>
          </div>
        </div>
      </div>

      {/* RIGHT: image card that overlaps outside the blue panel */}
      <div className="career-hero__image-wrapper">
        <img src={heroImg} alt="Career" className="career-hero__image" />
      </div>

      {/* BOTTOM: search bar */}
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

        <button className="ch-btn ch-btn--search">
          SEARCH
          <span className="ch-btn__icon">🔍</span>
        </button>
      </div>
    </section>
  );
};

export default CareerHero;
