import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // ✅ Fix
import "../../appStyles/ContactUs/ContactFormSection.css";
import { Button } from "../Button/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactFormSection = () => {
  const location = useLocation();

  const getSourcePage = () => {
    const path = location.pathname;
    const map = {
      "/": "Home Page - Hero",
      "/about": "About Us",
      "/contact": "Contact Page",
      "/careers": "Careers",
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

  useEffect(() => {
    setFormData((prev) => ({ ...prev, Sourcepage: getSourcePage() }));
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      // toast.dismiss(toastId);
      setShowErrorModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-main">
      <div className="contact-main__card">
        <form className="contact-main__form" onSubmit={handleSubmit}>
          <div className="contact-main__field">
            {/* <input type="text" placeholder="Your Name" /> */}
            <input
              type="text"
              name="Name"
              placeholder="Your name"
              // className="contact-input"
              value={formData.Name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="contact-main__field">
            {/* <input type="email" placeholder="Your Email" /> */}
            <input
              type="email"
              name="Email"
              placeholder="Email"
              // className="contact-input"
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
            {/* <textarea rows="5" placeholder="Your Message"></textarea> */}
            <textarea
              rows="4"
              name="Message"
              placeholder="Your message"
              // className="contact-textarea"
              value={formData.Message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />
          </div>
          {/* <button className="contact-main__submit">Submit</button> */}
          {/* <div className="contact-main__submit">
            <Button name="Submit form" />
          </div> */}
          <div className="contact-main__submit">
            <Button
              name={isSubmitting ? "Submitting..." : "Submit form"}
              disabled={isSubmitting}
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

      {/* ERROR MODAL */}
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
    </section>
  );
};

export default ContactFormSection;
