import React, { useEffect, useState } from "react";
import "../../appStyles/ContactUs/NewsletterSection.css";
import imagDot from "../../assets/contactUs/contactUsDot.png";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const NewsletterSection = ({ onSuccess, onError }) => {
  const location = useLocation();
const getSourcePage2 = () => {
  const path = location.pathname.replace(/\/$/, "").toLowerCase();

  const map2 = {
    "/contact": "Contact - Subscribe",
  };

  return map2[path] || "Contact - Subscribe";
};

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
    Message: "",
    Sourcepage: getSourcePage2(),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, Sourcepage: getSourcePage2() }));
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
    payload.append("Name", " ");
    payload.append("Email", formData.Email);
    payload.append("PhoneNumber", " ");
    payload.append("Message", " ");
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
      onSuccess?.();      // ✅ popup works
      setFormData((prev) => ({ ...prev, Email: "" }));
    } else {
      throw new Error();
    }
  } catch (error) {
    toast.dismiss(toastId);
    onError?.();          // ✅ error popup
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section className="contact-newsletter">
      {/* decorative dots in top-left */}
      <div className="contact-newsletter__dots">
        {" "}
        <img src={imagDot} alt="dot image" />
      </div>

      <div className="contact-newsletter__inner">
        <p className="contact-newsletter__overline">
          SUBSCRIBE TO OUR NEWSLETTER
        </p>
        <p className="contact-newsletter__title">
          Subscribe now and never miss an update from IncrediQuo Solutions
        </p>

     <form className="contact-newsletter__form" onSubmit={handleSubmit}>
  <input
    type="email"
    name="Email"
    placeholder="Email Address"
    className="contact-newsletter__input"
    value={formData.Email}
    onChange={handleChange}
    required
    disabled={isSubmitting}
  />

  <button
    type="submit"
    className="contact-newsletter__button"
    disabled={isSubmitting}
  >
    {isSubmitting ? "Submitting..." : "Subscribe"}
  </button>
</form>

      </div>
    </section>
  );
};

export default NewsletterSection;
