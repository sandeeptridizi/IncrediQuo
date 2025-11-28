// src/components/ContactUs/ContactPage.jsx
import React from "react";
import ContactHero from "./ContactHero";
// import ContactInfo from "./ContactInfo";
import ContactFormSection from "./ContactFormSection";
import NewsletterSection from "./NewsletterSection";

const ContactPage = () => {
  return (
    <main className="page-animate">
      <ContactHero />
      {/* <ContactInfo /> */}
      <ContactFormSection />
      <NewsletterSection />
    </main>
  );
};

export default ContactPage;
