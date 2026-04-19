"use client";

import { Phone, FileText } from "lucide-react";

export default function CTASection1() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2>Get the Best Home Loan Deal Today</h2>

        <p>
          Compare, apply, and get approved faster with Spectical Asset Pvt Ltd —
          India's trusted real estate and loan advisory partner.
        </p>

        <div className="cta-buttons">
          <button className="cta-primary">
            <Phone size={18} />
            Talk to a Loan Expert
          </button>

          <button className="cta-secondary">
            <FileText size={18} />
            Free Eligibility Check
          </button>
        </div>
      </div>
    </section>
  );
}
