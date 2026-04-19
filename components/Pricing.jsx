"use client";

import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$99",
      features: [
        "Weekly online meeting",
        "Unlimited learning access",
        "24/7 technical support",
        "Personal training",
      ],
      active: false,
    },
    {
      name: "Standard",
      price: "$149",
      features: [
        "Weekly online meeting",
        "Unlimited learning access",
        "24/7 technical support",
        "Personal training",
        "Business analysis",
      ],
      active: true,
    },
    {
      name: "Premium",
      price: "$199",
      features: [
        "With all standard features",
        "Unlimited learning access",
        "24/7 technical support",
        "Personal training",
      ],
      active: false,
    },
  ];

  return (
    <section className="pricing padding-top padding-bottom">
      {/* HEADER */}
      <div className="section-header section-header--max50 text-center">
        <h2 className="mb-10 mt-minus-5">
          Our <span>pricings </span>plan
        </h2>
        <p>
          We offer the best pricing plans with premium services and support.
        </p>
      </div>

      <div className="container">
        <div className="pricing__wrapper">
          <div className="row g-4">
            {plans.map((plan, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="pricing__item">
                  <div
                    className={`pricing__item-inner ${
                      plan.active ? "active" : ""
                    }`}
                  >
                    <div className="pricing__item-content">
                      {/* TOP */}
                      <div className="pricing__item-top">
                        <h6 className="mb-15">{plan.name}</h6>
                        <h3 className="mb-25">
                          {plan.price}/<span>Monthly</span>
                        </h3>
                      </div>

                      {/* FEATURES */}
                      <div className="pricing__item-middle">
                        <ul className="pricing__list">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="pricing__list-item">
                              <span>
                                <img
                                  src="/assets/images/icon/check.svg"
                                  alt="check"
                                />
                              </span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* BUTTON */}
                      <div className="pricing__item-bottom">
                        <Link
                          href="/signup"
                          className={`trk-btn trk-btn--outline ${
                            plan.active ? "active" : ""
                          }`}
                        >
                          Choose Plan
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SHAPE */}
      <div className="pricing__shape">
        <span className="pricing__shape-item pricing__shape-item--1">
          <span></span>
        </span>
        <span className="pricing__shape-item pricing__shape-item--2">
          <img src="/assets/images/icon/1.png" alt="shape" />
        </span>
      </div>
    </section>
  );
}
