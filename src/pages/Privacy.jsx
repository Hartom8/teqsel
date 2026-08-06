import React from "react";
import LegalLayout, { LegalSection } from "@/components/layout/LegalLayout";

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" updated="August 6, 2026">
      <LegalSection heading="1. Overview">
        <p>
          {`TEQSEL ("we", "us", "our") respects your privacy. This policy explains how we
          collect, use, and protect your personal information when you visit our
          website or engage our consulting services.`}
        </p>
      </LegalSection>
      <LegalSection heading="2. Information We Collect">
        <p>We may collect:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Contact details you provide via our forms (name, email, phone, company).</li>
          <li>Information about your business and service needs.</li>
          <li>Anonymous usage data such as pages visited and device type.</li>
        </ul>
      </LegalSection>
      <LegalSection heading="3. How We Use Your Information">
        <p>We use your information to:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Respond to inquiries and provide consulting services.</li>
          <li>Send relevant updates and newsletters (only if you opt in).</li>
          <li>Improve our website and offerings.</li>
        </ul>
      </LegalSection>
      <LegalSection heading="4. Data Sharing">
        <p>
          We do not sell your data. We may share information with trusted service
          providers who help us operate our business, under appropriate
          confidentiality agreements.
        </p>
      </LegalSection>
      <LegalSection heading="5. Data Security">
        <p>
          We implement reasonable technical and organizational measures to
          protect your information from unauthorized access or disclosure.
        </p>
      </LegalSection>
      <LegalSection heading="6. Your Rights">
        <p>
          You may request access to, correction of, or deletion of your personal
          data at any time by contacting us.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}