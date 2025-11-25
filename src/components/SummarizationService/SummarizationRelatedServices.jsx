import React from "react";
// ✅ reuse the same CSS used by Transcription related cards
import "../../appStyles/Services/TranscriptionRelatedServices.css";

import transcriptionIcon from "../../assets/services/transcription.png";
import subtitlingIcon from "../../assets/services/subtitling.png";
import supportIcon from "../../assets/services/support.png";

const SummarizationRelatedServices = () => {
  return (
    <section className="ts-related">
      <div className="ts-related__inner">
        <h2 className="ts-related__heading">Related Services</h2>

        <div className="ts-related__grid">
          {/* 01 – Transcription */}
          <article className="ts-related__card">
            <span className="ts-related__card-index">01</span>

            <div className="ts-related__icon-wrap">
              <img
                src={transcriptionIcon}
                alt="Transcription Services icon"
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

          {/* 02 – Closed Captioning & Subtitling */}
          <article className="ts-related__card">
            <span className="ts-related__card-index">02</span>

            <div className="ts-related__icon-wrap">
              <img
                src={subtitlingIcon}
                alt="Closed Captioning & Subtitling icon"
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

          {/* 03 – Additional Support */}
          <article className="ts-related__card">
            <span className="ts-related__card-index">03</span>

            <div className="ts-related__icon-wrap">
              <img
                src={supportIcon}
                alt="Additional Support icon"
                className="ts-related__icon"
              />
            </div>

            <h3>Additional Support</h3>
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

export default SummarizationRelatedServices;
