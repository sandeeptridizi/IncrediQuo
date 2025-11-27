import React from "react";
import { useNavigate } from "react-router-dom";
import "../../appStyles/Services/TranscriptionRelatedServices.css";

import subtitlingIcon from "../../assets/services/subtitling.png";
import summarizationIcon from "../../assets/services/summarization.png";
import transcriptionIcon from "../../assets/services/transcription.png";

const relatedServices = [
  {
    index: "01",
    title: "Closed Captioning & Subtitling",
    icon: subtitlingIcon,
    alt: "Closed Captioning & Subtitling",
    path: "/services/closed-captioning",
  },
  {
    index: "02",
    title: "Summarization",
    icon: summarizationIcon,
    alt: "Summarization",
    path: "/services/summarization",
  },
  {
    index: "03",
    title: "Transcription Services",
    icon: transcriptionIcon,
    alt: "Transcription Services",
    path: "/services/transcription",
  },
];

const AdditionalSupportRelatedServices = () => {
  const navigate = useNavigate();

  return (
    <section className="ts-related">
      <div className="ts-related__inner">
        <h2 className="ts-related__heading">Related Services</h2>

        <div className="ts-related__grid">
          {relatedServices.map((service) => (
            <article
              key={service.index}
              className="ts-related__card"
              onClick={() => navigate(service.path)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  navigate(service.path);
                }
              }}
            >
              <span className="ts-related__card-index">{service.index}</span>

              <div className="ts-related__icon-wrap">
                <img
                  src={service.icon}
                  alt={service.alt}
                  className="ts-related__icon"
                />
              </div>

              <h3>{service.title}</h3>
              <div className="ts-related__underline" />

              <p>
                It is a long established fact that a reader will be distracted by
                the readable content of a page.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalSupportRelatedServices;
