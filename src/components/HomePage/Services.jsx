import React from "react";
import { useNavigate } from "react-router-dom";
import "../../appStyles/HomePageStyles/Services.css";

import transcriptionIcon from "../../assets/services/transcription.png";
import subtitlingIcon from "../../assets/services/subtitling.png";
import summarizationIcon from "../../assets/services/summarization.png";
import supportIcon from "../../assets/services/support.png";

const services = [
  {
    title: "Transcription",
    icon: transcriptionIcon,
    desc: "Accurate, human-refined transcripts for audio and video content, delivered with clarity, consistency, and quick turnaround.",
    path: "/services/transcription",
  },
  {
    title: "Closed Captioning & Subtitling",
    icon: subtitlingIcon,
    desc: "Precise, well-timed captions and multilingual subtitles that improve accessibility and expand your global reach.",
    path: "/services/closed-captioning",
  },
  {
    title: "Summarization",
    icon: summarizationIcon,
    desc: "Concise, high-quality summaries of long audio, video, or text to help you grasp key insights instantly.",
    path: "/services/summarization",
  },
  {
    title: "Additional Support",
    icon: supportIcon,
    desc: "Custom formatting, QC checks, time-stamping, and workflow-specific assistance to polish and enhance your final output.",
    path: "/services/additional-support",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="section services">
      <div className="services-container">
        <h2 className="section__title services-title">Our Services</h2>

        <div className="services-grid">
          {services.map((service) => (
            <article
              key={service.title}
              className="service-card"
              onClick={() => navigate(service.path)}
            >
              <div className="service-card__icon">
                <img src={service.icon} alt={service.title} />
              </div>

              <h3 className="service-card__title">{service.title}</h3>

              <div className="service-card__underline">
                <span className="line-main" />
                <span className="line-sub" />
              </div>

              <p className="service-card__desc">{service.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
