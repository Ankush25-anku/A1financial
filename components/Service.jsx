"use client";

import Link from "next/link";

export default function Service() {
  const features = [
    {
      icon: "⚡",
      title: "Fast Processing",
      desc: "Get approval in 48 hours",
    },
    {
      icon: "💰",
      title: "Best Rates",
      desc: "Competitive interest rates",
    },
    {
      icon: "👨‍💼",
      title: "Expert Guidance",
      desc: "Dedicated loan advisors",
    },
    {
      icon: "📄",
      title: "Easy Documentation",
      desc: "Minimal paperwork required",
    },
  ];

  return (
    <section id="services" className="service padding-top padding-bottom">
      {/* HEADER */}
      <div className="section-header section-header--max50 text-center">
        <h2 className="mb-10 mt-minus-5">
          <span>Loan </span>Services
        </h2>

        <p>
          Explore flexible loan options with competitive interest rates and
          quick approvals.
        </p>
      </div>

      <div className="container">
        <div className="service__wrapper">
          {/* BUTTONS */}
          <div className="text-center mt-5 button-wrapper">
            <Link href="/emicalculator">
              <button className="emi-btn">Calculate EMI</button>
            </Link>

            <button className="offer-btn">View Bank Offers</button>
          </div>

          {/* FEATURES */}
          <div className="row mt-5 text-center feature-row">
            {features.map((item, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="feature-box">
                  <div className="feature-icon">{item.icon}</div>

                  <h6>{item.title}</h6>

                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
