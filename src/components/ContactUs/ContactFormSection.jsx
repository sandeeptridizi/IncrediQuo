// src/components/ContactUs/ContactFormSection.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../appStyles/ContactUs/ContactFormSection.css";
import { Button } from "../Button/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isBlockedPersonalEmail } from "../../constants/blockedEmailDomains";

const ContactFormSection = ({ onSuccess, onError }) => {
  const location = useLocation();

  const getSourcePage = () => {
    const path = location.pathname;
    const map = {
      "/": "Home Page - Hero",
      "/about": "About Us",
      "/contact": "Contact Page",
      "/careers": "Careers - Apply Job",
      "/services/transcription": "Transcription Services",
      "/services/closed-captioning": "Closed Captioning & Subtitling",
      "/services/summarization": "Summarization Service",
      "/services/additional-support": "Additional Support",
    };
    return map[path] || `Page: ${path.slice(1).replace(/-/g, " ") || "Home"}`;
  };

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
    Message: "",
    Sourcepage: getSourcePage(),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, Sourcepage: getSourcePage() }));
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isCareersForm = location.pathname === "/careers";
    if (!isCareersForm && isBlockedPersonalEmail(formData.Email)) {
      toast.error("Please use a work or business email address.");
      return;
    }
    setIsSubmitting(true);
    const toastId = toast.loading("Submitting your message...");

    try {
      const payload = new URLSearchParams();
      payload.append("Name", formData.Name);
      payload.append("Email", formData.Email);
      payload.append("PhoneNumber", formData.PhoneNumber);
      payload.append("Message", formData.Message);
      payload.append("Sourcepage", formData.Sourcepage);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxHdCiCLSC5Vta17Okxf3fFmBhO9K4YjCNy0pzBn_IvKULGUYEq5inO6Tia317gWaWbBw/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: payload,
        }
      );

      const result = await response.json();
      toast.dismiss(toastId);

      if (result.status === "success") {
        toast.success("Message sent successfully!");
        setFormData({ ...formData, Name: "", Email: "", PhoneNumber: "", Message: "" });
        onSuccess(); // Show success modal in ContactPage
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      toast.dismiss(toastId);
      toast.error("Failed to send message. Please try again.");
      onError(); // Show error modal in ContactPage
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-main">
      <div className="contact-main__card">
        <form className="contact-main__form" onSubmit={handleSubmit}>
          <div className="contact-main__field">
            <input
              type="text"
              name="Name"
              placeholder="Your name"
              value={formData.Name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="contact-main__field">
            <input
              type="email"
              name="Email"
              placeholder="Email"
              value={formData.Email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="contact-main__field">
            <input
              type="tel"
              name="PhoneNumber"
              placeholder="Phone number"
              value={formData.PhoneNumber}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>
          <div className="contact-main__field">
            <textarea
              rows="4"
              name="Message"
              placeholder="Your message"
              value={formData.Message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="contact-main__submit">
            <Button
              name={isSubmitting ? "Submitting..." : "Submit form"}
              type="submit"
              disabled={isSubmitting}
              paddingXL="8.6vw"
              paddingXM="24.5vw"
              widthL="11.25vw"
              widthM="30.3vw"
              bacgrounClr="#022447"
              bacgrounArrow="#ffffff"
              colorArrow="#022447"
              colorText="#ffffff"
              colorTextHover="#022447"
            />
          </div>
        </form>

        <div className="contact-main__copy">
          <h2>
            Get in touch
            <br />
            with us
          </h2>
          <p>
            We strive to respond to all inquiries within 48 hours. Thank you for
            your patience and interest.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;