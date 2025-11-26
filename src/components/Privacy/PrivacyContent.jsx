// src/components/Privacy/PrivacyContent.jsx
import React from "react";
import "../../appStyles/TermsPageStyles/TermsContent.css";

const PrivacyContent = () => {
  return (
    <section className="terms-content">
      <div className="terms-content__inner">
        <p>
          Your privacy is important to us. This policy explains how we collect,
          use, store, and safeguard your information.
        </p>

        <h2>Information We Collect</h2>

        <h3>a. Personal Information</h3>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Billing details</li>
          <li>Company information (if applicable)</li>
        </ul>

        <h3>b. Project Data &amp; Files</h3>
        <ul>
          <li>Audio recordings</li>
          <li>Video files</li>
          <li>Documents</li>
          <li>Reference materials</li>
        </ul>
        <p>(Handled with strict confidentiality.)</p>

        <h3>c. Technical Data</h3>
        <ul>
          <li>IP address</li>
          <li>Device / browser details</li>
          <li>Usage analytics through cookies</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use collected information to:</p>
        <ul>
          <li>
            Provide transcription, captioning, summarization, and support
            services
          </li>
          <li>Improve website performance and user experience</li>
          <li>Process payments and send invoices</li>
          <li>Communicate project updates</li>
          <li>Ensure quality control</li>
          <li>
            Enhance internal training and process improvement (without exposing
            client identity)
          </li>
        </ul>
        <p>We do not sell or rent personal data to third parties.</p>

        <h2>Data Protection &amp; Security</h2>
        <p>We implement:</p>
        <ul>
          <li>Encrypted data storage</li>
          <li>Restricted access controls</li>
          <li>NDA-backed workforce operations</li>
          <li>Secure file transfer methods</li>
        </ul>
        <p>
          While we maintain strong security standards, no internet-based system
          is 100% secure.
        </p>

        <h2>Cookies &amp; Tracking Technologies</h2>
        <p>We use cookies to:</p>
        <ul>
          <li>Improve website navigation</li>
          <li>Analyze traffic</li>
          <li>Customize user experience</li>
        </ul>
        <p>You may disable cookies through your browser settings.</p>

        <h2>File Storage &amp; Retention</h2>
        <p>Files are stored only for the duration required to deliver services.</p>
        <p>
          Standard retention period: 30–90 days (custom agreements available).
          Upon request, files can be deleted immediately after delivery.
        </p>

        <h2>Sharing of Information</h2>
        <p>We may share limited information with:</p>
        <ul>
          <li>Internal teams and vetted freelancers for processing</li>
          <li>Payment gateways for transactions</li>
          <li>Legal authorities when required by law</li>
        </ul>
        <p>We never sell client files or personal data.</p>

        <h2>Your Rights</h2>
        <p>You may request to:</p>
        <ul>
          <li>Access your stored data</li>
          <li>Update or correct personal information</li>
          <li>Request deletion of files or personal data</li>
          <li>Withdraw consent for communications</li>
        </ul>
        <p>Email us anytime to initiate these requests.</p>

        <h2>Children’s Privacy</h2>
        <p>
          We do not knowingly collect information from individuals under 16
          years of age.
        </p>

        <h2>External Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for their privacy practices or content.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. Revised versions will
          be posted on this page with the updated date.
        </p>

        <h2>Contact Information</h2>
        <p>For privacy or data-related queries, contact us at:</p>
        <p>
          <strong>Email:</strong> info@incrediquosolutions.com
          <br />
          <br />
          <strong>Location:</strong> Hyderabad, India
        </p>
      </div>
    </section>
  );
};

export default PrivacyContent;
