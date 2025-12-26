import React from "react";
import whatsappIcon from "../assets/whatsapp.png";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const whatsappNumber = "919849668819"; 

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={whatsappIcon} alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppButton;
