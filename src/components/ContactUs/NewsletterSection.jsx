import React from "react";
import "../../appStyles/ContactUs/NewsletterSection.css";

const NewsletterSection = () => {
  return (
    <section className="contact-newsletter">
      {/* decorative dots in top-left */}
      <div className="contact-newsletter__dots" />

      <div className="contact-newsletter__inner">
        <p className="contact-newsletter__overline">
          SUBSCRIBE TO OUR NEWSLETTER
        </p>
        <p className="contact-newsletter__title">
          Become a part of 1215 Tribes of the near future, leave us your email
          and we will be in touch.
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
