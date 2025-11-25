// src/components/TranscriptionService/TranscriptionRelatedServices.jsx
import React from "react";
import "../../appStyles/Services/TranscriptionRelatedServices.css";

// service icons
import subtitlingIcon from "../../assets/services/subtitling.png";
import summarizationIcon from "../../assets/services/summarization.png";
import supportIcon from "../../assets/services/support.png";

const TranscriptionRelatedServices = () => {
  return (
    <section className="ts-related">
      <div className="ts-related__inner">
        <h2 className="ts-related__heading">Related Services</h2>

        <div className="ts-related__grid">
          {/* Card 1 */}
          <article className="ts-related__card">
            <span className="ts-related__card-index">01</span>

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

          {/* Card 2 */}
          <article className="ts-related__card">
            <span className="ts-related__card-index">02</span>

            <div className="ts-related__icon-wrap">
              <img
                src={summarizationIcon}
                alt="Summarization icon"
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

          {/* Card 3 */}
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

export default TranscriptionRelatedServices;
