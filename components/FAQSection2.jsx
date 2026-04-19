"use client";

import { useState } from "react";

export default function FAQSection2() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "How quickly will you respond to my enquiry?",
      a: "We typically respond within 2 hours during business hours. For urgent queries, you can call us directly for faster assistance.",
    },
    {
      q: "Can I visit the office without an appointment?",
      a: "Yes, you can walk in, but we recommend booking an appointment to ensure a dedicated advisor is available for you.",
    },
    {
      q: "Do you serve NRI clients remotely?",
      a: "Absolutely. We provide complete remote assistance for NRI clients including document handling, loan processing, and advisory.",
    },
    {
      q: "Is your consultation service free?",
      a: "Yes, our consultation is completely free. We are compensated by partner banks, not by customers.",
    },
    {
      q: "What is the best way to reach for a home loan enquiry?",
      a: "You can contact us via phone, WhatsApp, or fill out the form. Our team will guide you step-by-step through the process.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq2-section">
      <div className="faq2-container">
        {/* HEADER */}
        <div className="faq2-header">
          <span className="faq2-tag">❓ FAQ</span>
          <h2>
            Frequently Asked <span>Questions</span>
          </h2>
        </div>

        {/* LIST */}
        <div className="faq2-list">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`faq2-item ${openIndex === index ? "active" : ""}`}
            >
              {/* QUESTION */}
              <div className="faq2-question" onClick={() => toggleFAQ(index)}>
                <h4>{item.q}</h4>
                <div className="faq2-icon">
                  {openIndex === index ? "−" : "+"}
                </div>
              </div>

              {/* ANSWER */}
              {openIndex === index && (
                <div className="faq2-answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
