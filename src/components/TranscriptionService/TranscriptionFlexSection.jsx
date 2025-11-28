// src/components/TranscriptionService/TranscriptionFlexSection.jsx
import React from "react";
import "../../appStyles/Services/TranscriptionFlexSection.css";

const TranscriptionFlexSection = () => {
  return (
    <section className="ts-flex">
      <div className="ts-flex__inner">
        <p className="ts-flex__eyebrow">Our Working Process</p>

        <h2 className="ts-flex__title">
          Our Streamlined 4-Step Workflow
        </h2>

        <div className="ts-flex__grid">
          {/* STEP 1 */}
          <article className="ts-flex__card">
            <div className="ts-flex__icon" aria-hidden="true" />
            <div>
              <h3>Requirement Intake</h3>
              <p>
                We collect your files and understand your project needs. Clear instructions guide the entire workflow.
              </p>
            </div>
          </article>

          {/* STEP 2 */}
          <article className="ts-flex__card">
            <div className="ts-flex__icon" aria-hidden="true" />
            <div>
              <h3>Expert Processing</h3>
              <p>
                Our skilled team handles the core transcription or service task. Every detail is processed with precision.
              </p>
            </div>
          </article>

          {/* STEP 3 */}
          <article className="ts-flex__card">
            <div className="ts-flex__icon" aria-hidden="true" />
            <div>
              <h3>Quality Review</h3>
              <p>
                Multiple quality checks ensure accuracy and consistency. Errors are removed before finalization.
              </p>
            </div>
          </article>

          {/* STEP 4 */}
          <article className="ts-flex__card">
            <div className="ts-flex__icon" aria-hidden="true" />
            <div>
              <h3>Final Delivery</h3>
              <p>
                Your completed files are delivered in your preferred format — on time, polished, and ready to use.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TranscriptionFlexSection;
