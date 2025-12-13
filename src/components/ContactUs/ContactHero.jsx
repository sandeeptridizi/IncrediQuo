import React from "react";
import "../../appStyles/ContactUs/ContactHero.css";
import "../../appStyles/ContactUs/ContactInfo.css";

// SVG icons
import locationIcon from "../../assets/contactUs/contact_location.svg";
import phoneIcon from "../../assets/contactUs/contact_phone.svg";
import emailIcon from "../../assets/contactUs/contact_email.svg";

// Left-side hero image
import contactHeroImg from "../../assets/contactUs/Contact us-1.jpg";

const ContactHero = () => {
  return (
    <section className="contact-hero">
      {/* TOP ROW: image left, text right */}
      <div className="contact-hero__layout">
        {/* LEFT: IMAGE */}
        <div className="contact-hero__image">
          <img src={contactHeroImg} alt="Contact IncrediQuo Solutions" />
        </div>

        {/* RIGHT: ONLY HEADING + PARAGRAPH */}
        <div className="contact-hero__content">
          <div className="contact-hero__inner">
            <h1>Contact Us</h1>
            <p>
              Get in touch with IncrediQuo Solutions for fast, reliable, and
              high-quality transcription and language support services. We’re
              here to assist you with any requirement, big or small.
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW: BOXES (NOW BELOW) */}
      <div className="contact-hero__bottom">
        <div className="contact-info__inner">
          <div className="contact-info__title">
            Get In Touch
          </div>

          <div className="contact-info__cards">
            {/* LOCATION — clickable for Google Maps */}
            <a
              href="https://www.google.com/maps?q=B-1003,+Level-10,+B-Block,+The+Platina+Building,+Gachibowli,+Hyderabad+500032"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info__card contact-info__card--link"
            >
              <div className="contact-info__icon">
                <img
                  src={locationIcon}
                  alt="Location"
                  className="contact-info__icon-img"
                />
              </div>
              <div className="contact-info__text">
                <p>
                  B-1003, Level-10, B-Block, The Platina Building,
                  {/* <br /> */}
                  Gachibowli, Hyderabad - 500032, India
                </p>
              </div>
            </a>

            {/* PHONE */}
            <div className="contact-info__card">
              <div className="contact-info__icon">
                <img
                  src={phoneIcon}
                  alt="Phone"
                  className="contact-info__icon-img"
                />
              </div>
              <div className="contact-info__text2">
                <p>+91 9849668819</p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="contact-info__card">
              <div className="contact-info__icon">
                <img
                  src={emailIcon}
                  alt="Email"
                  className="contact-info__icon-img"
                />
              </div>
              <div className="contact-info__text3">
                <p>info@incrediquosolutions.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
