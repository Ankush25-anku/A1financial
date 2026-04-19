"use client";

import { useState } from "react";

export default function FAQ1() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Which bank gives the lowest home loan interest rate in India?",
      a: "Interest rates vary by profile, but SBI, Bank of Baroda, and HDFC Bank often offer some of the lowest rates starting around 7.1% p.a.",
    },
    {
      q: "What is the maximum home loan I can get?",
      a: "You can typically get up to 80–90% of the property value depending on your income, credit score, and lender policies.",
    },
    {
      q: "What CIBIL score is needed for a home loan?",
      a: "A score of 750+ is ideal for the best interest rates. Some banks may approve loans for scores above 650 with slightly higher rates.",
    },
    {
      q: "What documents are required for a home loan?",
      a: "Basic documents include PAN card, Aadhaar, income proof, bank statements, property documents, and employment details.",
    },
    {
      q: "How long does home loan processing take?",
      a: "Typically 3–7 working days depending on the bank, documentation, and verification process.",
    },
    {
      q: "Fixed vs floating rate home loan — which is better?",
      a: "Floating rates are usually cheaper long-term, while fixed rates give stability. Most borrowers prefer floating for flexibility.",
    },
    {
      q: "Can a self-employed person get a home loan?",
      a: "Yes, self-employed individuals can get loans by providing income proof like ITRs, business financials, and bank statements.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        {/* HEADER */}
        <div className="faq-header">
          <div className="faq-icon">?</div>
          <div>
            <h3>Frequently Asked Questions</h3>
            <p>Home loan questions answered by our experts</p>
          </div>
        </div>

        {/* FAQ LIST */}
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div className="faq-item" key={i}>
              {/* QUESTION */}
              <div className="faq-question" onClick={() => toggle(i)}>
                <h4>{item.q}</h4>
                <span className={`icon ${openIndex === i ? "open" : ""}`}>
                  {openIndex === i ? "−" : "+"}
                </span>
              </div>

              {/* ANSWER */}
              {openIndex === i && (
                <div className="faq-answer">
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
