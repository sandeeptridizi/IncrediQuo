import React from "react";
import "../../appStyles/ContactUs/ContactFormSection.css";

const ContactFormSection = () => {
  return (
    <section className="contact-main">
  <div className="contact-main__card">

    <form className="contact-main__form">
      <div className="contact-main__field">
        <input type="text" placeholder="Your Name" />
      </div>
      <div className="contact-main__field">
        <input type="email" placeholder="Your Email" />
      </div>
      <div className="contact-main__field">
        <textarea rows="5" placeholder="Your Message"></textarea>
      </div>
      <button className="contact-main__submit">Submit</button>
    </form>

    <div className="contact-main__copy">
      <h2>Get in touch<br />with us</h2>
      <p>
        We strive to respond to all inquiries within 48 hours. Thank you
        for your patience and interest.
      </p>
    </div>

  </div>
</section>

  );
};

export default ContactFormSection;
