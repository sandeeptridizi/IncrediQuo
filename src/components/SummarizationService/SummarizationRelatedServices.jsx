import React from "react";
import { useNavigate } from "react-router-dom";
import "../../appStyles/Services/TranscriptionRelatedServices.css";

import transcriptionIcon from "../../assets/services/transcription.png";
import subtitlingIcon from "../../assets/services/subtitling.png";
import supportIcon from "../../assets/services/support.png";

const SummarizationRelatedServices = () => {
  const navigate = useNavigate();

  const services = [
    {
      index: "01",
      title: "Transcription Services",
      icon: transcriptionIcon,
      path: "/services/transcription",
      description:
        "Accurate, human-refined transcripts for audio and video content, delivered with clarity, consistency, and quick turnaround.",
    },
    {
      index: "02",
      title: "Closed Captioning & Subtitling",
      icon: subtitlingIcon,
      path: "/services/closed-captioning",
      description:
        "Precise, well-timed captions and multilingual subtitles that improve accessibility and expand your global reach.",
    },
    {
      index: "03",
      title: "Additional Support",
      icon: supportIcon,
      path: "/services/additional-support",
      description:
        "Custom formatting, QC checks, timestamping, and workflow-specific assistance to polish and enhance your final output.",
    },
  ];

  return (
    <section className="ts-related">
      <div className="ts-related__inner">
        <h2 className="ts-related__heading">Related Services</h2>

        <div className="ts-related__grid">
          {services.map((service) => (
            <article
              key={service.index}
              className="ts-related__card"
              onClick={() => navigate(service.path)}
              role="button"
              tabIndex={0}
            >
              <span className="ts-related__card-index">{service.index}</span>

              <div className="ts-related__icon-wrap">
                <img src={service.icon} alt={service.title} className="ts-related__icon" />
              </div>

              <h3>{service.title}</h3>
              <div className="ts-related__underline" />
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummarizationRelatedServices;
