import React from "react";
import LegalLayout, { LegalSection } from "@/components/layout/LegalLayout";

export default function Terms() {
  return (
    <LegalLayout title="Terms of Service" updated="August 6, 2026">
      <LegalSection heading="1. Acceptance of Terms">
        <p>
          {`By accessing or using the TEQSEL website and services, you agree to be
          bound by these Terms of Service. If you do not agree, please do not use
          our website or services.`}
        </p>
      </LegalSection>
      <LegalSection heading="2. Services">
        <p>
          TEQSEL provides technology sales consulting services including sales
          strategy, lead generation, CRM implementation, training, and market
          expansion advisory. Specific deliverables are defined in individual
          engagement agreements.
        </p>
      </LegalSection>
      <LegalSection heading="3. Intellectual Property">
        <p>
          All content on this website — including text, graphics, logos, and
          methodology frameworks — is the property of TEQSEL and protected by
          applicable intellectual property laws.
        </p>
      </LegalSection>
      <LegalSection heading="4. Use of Website">
        <p>
          You agree to use this website lawfully and not to disrupt, damage, or
          attempt to gain unauthorized access to any part of the site or its
          systems.
        </p>
      </LegalSection>
      <LegalSection heading="5. Disclaimer">
        <p>
          Consulting outcomes depend on many factors outside our control. While
          we strive for excellence, we make no guarantees regarding specific
          revenue results.
        </p>
      </LegalSection>
      <LegalSection heading="6. Changes to Terms">
        <p>
          We may update these Terms from time to time. Continued use of our
          website after changes constitutes acceptance of the revised Terms.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}