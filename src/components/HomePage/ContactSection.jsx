// src/components/HomePage/ContactSection.jsx
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom"; // ✅ Portal
import { useLocation } from "react-router-dom";
import "../../appStyles/HomePageStyles/ContactSection.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../Button/Button";
import emailjs from '@emailjs/browser';
import { isBlockedPersonalEmail } from "../../constants/blockedEmailDomains";

const ContactSection = ({ onClose }) => {
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
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  // ✅ update Sourcepage when route changes
  useEffect(() => {
    setFormData((prev) => ({ ...prev, Sourcepage: getSourcePage() }));
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isCareersForm = getSourcePage() === "Careers - Apply Job";
    if (!isCareersForm && isBlockedPersonalEmail(formData.Email)) {
      toast.error("Please use a work or business email address.");
      return;
    }
    if(isCareersForm) {
      const templateParams = {
      name: formData.Name,
      email: formData.Email,
      phone: formData.PhoneNumber,
      jobDescription: formData.Message,
      time: new Date().toLocaleString(),
      reference: "Job Application Section - IncrediQuo",
    };
    emailjs
      .send("default_service", "template_jyvqfum", templateParams)
      .then((result) => {
        console.log(result.text);
        toast.success("Job application submitted successfully");
        onClose();
      })
      .catch((error) => {
        console.log(error.text);
        toast.error("Job application submission failed");
        onClose();
      });
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
        setShowSuccessModal(true);
        setFormData({
          ...formData,
          Name: "",
          Email: "",
          PhoneNumber: "",
          Message: "",
        });
        setTimeout(() => onClose?.(), 2000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      toast.dismiss(toastId);
      setShowErrorModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ✅ Render the whole thing into document.body so it ignores About page transforms
  return ReactDOM.createPortal(
    <>
      {/* MAIN CONTACT MODAL */}
      <div className="contact-modal-backdrop" onClick={onClose}>
        <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
          <button className="contact-close" onClick={onClose}>
            ×
          </button>

          <h2 className="contact-title">Get in touch with us</h2>
          <p className="contact-subtitle">
            We strive to respond to all inquiries within 48 hours.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="Name"
              placeholder="Your name"
              className="contact-input"
              value={formData.Name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              className="contact-input"
              value={formData.Email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            <input
              type="tel"
              name="PhoneNumber"
              placeholder="Phone Number"
              className="contact-input"
              value={formData.PhoneNumber}
              onChange={handleChange}
              disabled={isSubmitting}
            />
            <textarea
              rows="4"
              name="Message"
              placeholder="Your message"
              className="contact-textarea"
              value={formData.Message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
            <div className="contact-submit-btn">
              <Button
                name={isSubmitting ? "Submitting..." : "Submit form"}
                paddingXL="8.6vw"
                paddingXM="24.5vw"
                widthL="11.14vw"
                widthM="30.3vw"
                bacgrounClr="#ffffff"
                bacgrounArrow="#022447"
                colorArrow="#ffffff"
                colorText="#022447"
                colorTextHover="#ffffff"
                type="submit" 
                disabled={isSubmitting} 
              />
            </div>
          </form>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      {showSuccessModal && (
        <div className="success-modal-backdrop">
          <div className="success-modal">
            <div className="success-icon">✔</div>
            <h3>Thank You!</h3>
            <p>Your message has been sent successfully.</p>
            <button
              className="success-close-btn"
              onClick={() => {
                setShowSuccessModal(false);
                onClose?.();
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

     
      {showErrorModal && (
        <div className="error-modal-backdrop">
          <div className="error-modal">
            <div className="error-icon">✖</div>
            <h3>Oops! Something went wrong</h3>
            <p>
              We couldn't send your message right now.
              <br />
              Please try again later or contact us directly.
            </p>
            <button
              className="error-close-btn"
              onClick={() => setShowErrorModal(false)}
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </>,
    document.body
  );
};

export default ContactSection;
