import React from "react";
import "../../appStyles/Services/TranscriptionRelatedServices.css";

import subtitlingIcon from "../../assets/services/subtitling.png";
import summarizationIcon from "../../assets/services/summarization.png";
import transcriptionIcon from "../../assets/services/transcription.png";

const AdditionalSupportRelatedServices = () => {
  return (
    <section className="ts-related">
      <div className="ts-related__inner">
        <h2 className="ts-related__heading">Related Services</h2>

        <div className="ts-related__grid">
          {/* 01 – Closed Captioning & Subtitling */}
          <article className="ts-related__card">
            <span className="ts-related__card-index">01</span>
            <div className="ts-related__icon-wrap">
              <img
                src={subtitlingIcon}
                alt="Closed Captioning & Subtitling"
                className="ts-related__icon"
              />
            </div>
            <h3>Closed Captioning &amp; Subtitling</h3>
            <div className="ts-related__underline" />
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page.
            </p>
          </article>

          {/* 02 – Summarization */}
          <article className="ts-related__card">
            <span className="ts-related__card-index">02</span>
            <div className="ts-related__icon-wrap">
              <img
                src={summarizationIcon}
                alt="Summarization"
                className="ts-related__icon"
              />
            </div>
            <h3>Summarization</h3>
            <div className="ts-related__underline" />
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page.
            </p>
          </article>

          {/* 03 – Transcription Services */}
          <article className="ts-related__card">
            <span className="ts-related__card-index">03</span>
            <div className="ts-related__icon-wrap">
              <img
                src={transcriptionIcon}
                alt="Transcription Services"
                className="ts-related__icon"
              />
            </div>
            <h3>Transcription Services</h3>
            <div className="ts-related__underline" />
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AdditionalSupportRelatedServices;
