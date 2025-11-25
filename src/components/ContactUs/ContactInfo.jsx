import React from "react";
import "../../appStyles/ContactUs/ContactInfo.css";

const LocationIcon = () => (
  <svg
    width="46"
    height="58"
    viewBox="0 0 46 58"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23 4C15.8 4 10 9.8 10 17c0 9.9 13 22.5 13 22.5S36 26.9 36 17C36 9.8 30.2 4 23 4Z"
      stroke="#002147"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle
      cx="23"
      cy="17"
      r="4.5"
      stroke="#002147"
      strokeWidth="2.5"
      fill="none"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="46"
    height="58"
    viewBox="0 0 46 58"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 10h4l3 8-4 2c1.4 3 3.6 5.6 6.6 7.6 2.4 1.6 4.8 2.6 7.4 3l1.8-4.2 8 3.2v4.6c0 2-1.6 3.6-3.6 3.6C29 38.8 20 29.8 15.4 19.4 14.4 17.3 14 15.1 14 13.1 14 11.6 14.7 10 15 10Z"
      stroke="#002147"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const MailIcon = () => (
  <svg
    width="46"
    height="58"
    viewBox="0 0 46 58"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="8"
      y="14"
      width="30"
      height="22"
      rx="4"
      ry="4"
      stroke="#002147"
      strokeWidth="2.5"
      fill="none"
    />
    <path
      d="M10 16.5 23 25l13-8.5"
      stroke="#002147"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const ContactInfo = () => {
  return (
    <section className="contact-info">
      <div className="contact-info__inner">
        <div className="contact-info__title">
          Get In
          <br />
          Touch
        </div>

        <div className="contact-info__cards">
          <div className="contact-info__card">
            <div className="contact-info__icon">
              <LocationIcon />
            </div>
            <div className="contact-info__text">
              <h3>
                545 Mavis Island, IL
                <br />
                99191
              </h3>
            </div>
          </div>

          <div className="contact-info__card">
            <div className="contact-info__icon">
              <PhoneIcon />
            </div>
            <div className="contact-info__text">
              <h3>+2034 4040 3030</h3>
            </div>
          </div>

          <div className="contact-info__card">
            <div className="contact-info__icon">
              <MailIcon />
            </div>
            <div className="contact-info__text">
              <h3>hello@gmail.com</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
