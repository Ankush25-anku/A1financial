"use client";

import {
  Zap,
  FileText,
  Shield,
  Target,
  Users,
  CheckCircle,
} from "lucide-react";

export default function WhyApply() {
  const items = [
    {
      icon: <Zap />,
      title: "Faster Approval",
      desc: "Our dedicated bank RMs ensure priority processing — reducing approval time significantly.",
    },
    {
      icon: <Target />,
      title: "Best Rate Guarantee",
      desc: "We compare rates across all partner banks and negotiate the most competitive rate for your profile.",
    },
    {
      icon: <FileText />,
      title: "End-to-End Support",
      desc: "Document collection, form filling, follow-ups — we handle everything from eligibility to disbursement.",
    },
    {
      icon: <Shield />,
      title: "Fully Confidential",
      desc: "Your financial data is handled with complete security and confidentiality at all times.",
    },
    {
      icon: <CheckCircle />,
      title: "Free Eligibility Check",
      desc: "Know your exact loan eligibility instantly using real bank criteria — not just rough estimates.",
    },
    {
      icon: <Users />,
      title: "Zero Charges to You",
      desc: "Our service is 100% free for borrowers. We are compensated by the banks, not by you.",
    },
  ];

  return (
    <section className="why-section">
      <div className="why-container">
        {/* HEADER */}
        <div className="why-header">
          <h2>Why Apply for Home Loan Through Spectical Asset Pvt Ltd?</h2>
          <p>
            We are an authorised channel partner for multiple banks. Get
            exclusive benefits, faster approval, and expert guidance —
            completely free of charge to you.
          </p>
        </div>

        {/* GRID */}
        <div className="why-grid">
          {items.map((item, i) => (
            <div className="why-card" key={i}>
              <div className="why-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
