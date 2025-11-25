import React from "react";
import "../../appStyles/Services/TranscriptionFlexSection.css"; // ✅ reuse

const SummarizationFlex = () => {
  return (
    <section className="ts-flex">
      <div className="ts-flex__inner">
        <p className="ts-flex__eyebrow">Say hello to Landingfolio</p>
        <h2 className="ts-flex__title">
          Unlimited options give you the
          <br />
          ultimate flexibility
        </h2>

        <div className="ts-flex__grid">
          <article className="ts-flex__card">
            <div className="ts-flex__icon" aria-hidden="true" />
            <div>
              <h3>Unlimited Components</h3>
              <p>
                Clarity gives you the blocks &amp; components you need to create
                a website.
              </p>
            </div>
          </article>

          <article className="ts-flex__card">
            <div className="ts-flex__icon" aria-hidden="true" />
            <div>
              <h3>Build Website</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </div>
          </article>

          <article className="ts-flex__card">
            <div className="ts-flex__icon" aria-hidden="true" />
            <div>
              <h3>Easy Analytics</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </div>
          </article>

          <article className="ts-flex__card">
            <div className="ts-flex__icon" aria-hidden="true" />
            <div>
              <h3>Release Fast</h3>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SummarizationFlex;
