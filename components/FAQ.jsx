"use client";

import { useState } from "react";

export default function FAQ() {
  const [active, setActive] = useState(1);

  const faqs = [
    {
      id: 1,
      q: "How do I choose the right property for investment?",
      a: "Choosing the right property depends on factors like location, builder reputation, future growth potential, and your financial goals. Our experts help identify verified projects matching your requirements.",
    },
    {
      id: 2,
      q: "What are the charges for your services?",
      a: "Our consultation services are completely free for clients with no hidden costs.",
    },
    {
      id: 3,
      q: "Do you provide home loan assistance?",
      a: "Yes, we offer complete home loan assistance from eligibility checks to documentation and approval.",
    },
    {
      id: 4,
      q: "Can NRIs buy properties through your platform?",
      a: "Absolutely. We assist NRI clients with property selection, documentation and loan support.",
    },
    {
      id: 5,
      q: "How do I apply for a home loan through your platform?",
      a: "Contact our team or fill the enquiry form and we guide you through the complete loan process.",
    },
    {
      id: 6,
      q: "What is the typical timeline for buying a property?",
      a: "It usually ranges from a few weeks to a couple of months depending on approvals and documentation.",
    },
  ];

  return (
    <section className="faq padding-top padding-bottom of-hidden">
      <div className="section-header section-header--max65">
        <h2 className="mb-10 mt-minus-5">
          <span>Frequently</span> Asked questions
        </h2>

        <p>
          Find answers to common questions about property buying, investment
          opportunities, and home loan assistance.
        </p>
      </div>

      <div className="container">
        <div className="faq__wrapper">
          <div className="row g-5 align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="accordion accordion--style1">
                {faqs.map((item) => (
                  <div key={item.id} className="accordion__item accordion-item">
                    <div className="accordion__header accordion-header">
                      <button
                        type="button"
                        className={`accordion__button accordion-button ${
                          active !== item.id ? "collapsed" : ""
                        }`}
                        onClick={() =>
                          setActive(active === item.id ? null : item.id)
                        }
                      >
                        <span className="accordion__button-content">
                          {item.q}
                        </span>
                      </button>
                    </div>

                    {active === item.id && (
                      <div className="accordion-collapse show">
                        <div className="accordion__body accordion-body">
                          <p className="mb-15">{item.a}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div
                className="faq__thumb faq__thumb--style1"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <img
                  className="dark"
                  src="assets/images/others/11.jpeg"
                  alt="faq-thumb"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="faq__shape faq__shape--style1">
        <span className="faq__shape-item faq__shape-item--1">
          <img src="assets/images/others/2.png" alt="shape-icon" />
        </span>
      </div>
    </section>
  );
}
