// src/components/ContactUs/ContactPage.jsx
import React, { useState, useEffect } from "react";
import ContactHero from "./ContactHero";
import ContactFormSection from "./ContactFormSection";
import NewsletterSection from "./NewsletterSection";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ContactPage = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleSuccess = () => {
    setShowSuccessModal(true);
    // Auto-close after 3 seconds
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 3000);
  };

  const handleError = () => setShowErrorModal(true);

  const handleClose = () => {
    setShowSuccessModal(false);
    setShowErrorModal(false);
  };

  // Optional: Close success modal when clicking outside
  useEffect(() => {
    if (showSuccessModal) {
      const timer = setTimeout(() => setShowSuccessModal(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessModal]);

  return (
    <main className="page-animate">
      <ContactHero />
      <ContactFormSection onSuccess={handleSuccess} onError={handleError} />
      <NewsletterSection />

      {/* SUCCESS MODAL - Auto closes after 3s */}
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

      {/* ERROR MODAL - Manual close only */}
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
    </main>
  );
};

export default ContactPage;