import React from "react";
import "../../appStyles/ContactUs/NewsletterSection.css";
import imagDot from "../../assets/contactUs/contactUsDot.png"

const NewsletterSection = () => {
  return (
    <section className="contact-newsletter">
      {/* decorative dots in top-left */}
      <div className="contact-newsletter__dots" >      <img src={imagDot} alt="dot image"/>
</div>

      <div className="contact-newsletter__inner">
        <p className="contact-newsletter__overline">
          SUBSCRIBE TO OUR NEWSLETTER
        </p>
        <p className="contact-newsletter__title">
          Subscribe now and never miss an update from IncrediQuo Solutions
        </p>

        <form className="contact-newsletter__form">
          <input
            type="email"
            placeholder="Email Address"
            className="contact-newsletter__input"
          />
          <button type="button" className="contact-newsletter__button">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
