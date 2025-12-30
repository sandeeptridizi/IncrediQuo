// src/components/Terms/TermsContent.jsx
import React from "react";
import "../../appStyles/TermsPageStyles/TermsContent.css";

const TermsContent = () => {
  return (
    <section className="terms-content">
      <div className="terms-content__inner">
        <p>
          Welcome to IncrediQuo Solutions (&quot;Company&quot;, &quot;we&quot;,
          &quot;our&quot;, or &quot;us&quot;). By accessing or using our website
          and services, you agree to the following Terms &amp; Conditions.
          Please read them carefully before using our platform.
        </p>

        <h2>Acceptance of Terms</h2>
        <p>
          By accessing our website, requesting a quote, creating an account, or
          using any of our services, you acknowledge that you have read,
          understood, and agree to be legally bound by these Terms &amp;
          Conditions.
        </p>

        <h2>Scope of Services</h2>
        <p>IncrediQuo Solutions provides, including but not limited to:</p>
        <ul>
          <li>Transcription Services</li>
          <li>Closed Captioning &amp; Subtitling</li>
          <li>Summarisation</li>
          <li>Additional Language &amp; Administrative Support</li>
        </ul>
        <p>
          We reserve the right to modify, expand, or discontinue any service at
          any time.
        </p>

        <h2>User Responsibilities</h2>
        <p>Users agree not to:</p>
        <ul>
          <li>
            Submit unlawful, harmful, or confidential content without proper
            permissions.
          </li>
          <li>
            Upload materials that infringe copyright or intellectual property
            rights.
          </li>
          <li>
            Misuse the website or attempt unauthorised/unauthorized access to
            systems.
          </li>
        </ul>
        <p>Users are responsible for the accuracy of the data they provide.</p>

        <h2>Confidentiality &amp; Data Handling</h2>
        <p>
          All files shared with us are treated as strictly confidential. We do
          not claim ownership of your content and use it solely for providing
          requested services.
        </p>
        <p>
          Your data is stored securely and accessed only by authorised/authorized
          personnel.
        </p>

        <h2>Turnaround Times</h2>
        <p>
          Delivery timelines depend on service mode (Standard, 24-Hour,
          Real-Time, Same-Day, Custom). Delays may occur due to:
        </p>
        <ul>
          <li>Poor audio / video quality</li>
          <li>Unclear speech</li>
          <li>Large file volumes</li>
          <li>Additional editing requests</li>
        </ul>
        <p>We will communicate any expected delays in advance.</p>

        <h2>Pricing &amp; Payment Terms</h2>
        <p>
          Pricing is shared transparently based on service type, file length,
          and complexity. Payments must be completed before or after service
          delivery as per the agreed terms.
        </p>
        <p>
          Refunds are offered only in cases where service delivery fails due to
          our error.
        </p>

        <h2>Accuracy &amp; Quality Disclaimer</h2>
        <p>
          While we ensure high accuracy through expert processing and robust
          quality checks, some factors may affect the final output, such as:
        </p>
        <ul>
          <li>Background noise</li>
          <li>Overlapping speech</li>
          <li>Accents and dialect variations</li>
        </ul>
        <p>
          We provide revisions within reasonable limits for genuine issues.
        </p>

        <h2>Intellectual Property Rights</h2>
        <p>
          All service deliverables remain your property. However, the methods,
          templates, processes, and tools used by IncrediQuo Solutions remain
          the intellectual property of the Company.
        </p>

        <h2>Limitation of Liability</h2>
        <p>IncrediQuo Solutions is not liable for:</p>
        <ul>
          <li>
            Losses arising from incorrect, misleading, or incomplete information
            provided by users.
          </li>
          <li>Third-party data breaches beyond our control.</li>
          <li>Indirect, incidental, or consequential damages.</li>
        </ul>
        <p>
          Our total liability shall not exceed the amount paid for the specific
          service.
        </p>

        <h2>Service Termination</h2>
        <p>We may suspend or terminate service if:</p>
        <ul>
          <li>A user violates our policies.</li>
          <li>Payment terms are not met.</li>
          <li>Uploaded content includes illegal or harmful material.</li>
        </ul>

        <h2>Governing Law</h2>
        <p>
          These Terms &amp; Conditions are governed by the laws of India. Any
          disputes shall be resolved through arbitration or legal proceedings
          within the jurisdiction of Hyderabad, Telangana.
        </p>

        <h2>Updates to Terms</h2>
        <p>
          IncrediQuo Solutions reserves the right to revise these terms at any
          time. Continued use of our services indicates acceptance of the
          updated terms.
        </p>
      </div>
    </section>
  );
};

export default TermsContent;
