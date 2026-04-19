"use client";

export default function Roadmap() {
  const roadmapData = [
    {
      title: "Financial Needs Analysis",
      phase: "P1",
      desc: "We begin by understanding your financial goals, whether it’s home ownership, investment planning, or loan requirements, to provide tailored solutions.",
      align: "right",
    },
    {
      title: "Personalized Financial Planning",
      phase: "P2",
      desc: "Our experts design customized financial strategies including loan options, investment opportunities, and risk assessment to match your profile.",
      align: "left",
    },
    {
      title: "Loan & Investment Advisory",
      phase: "P3",
      desc: "We provide expert guidance on home loans, property investments, and financial products through trusted banking and financial partners.",
      align: "right",
    },
    {
      title: "Verification & Documentation",
      phase: "P4",
      desc: "All financial and property-related documentation is verified thoroughly to ensure transparency, compliance, and a hassle-free process.",
      align: "left",
    },
    {
      title: "Processing & Approval",
      phase: "P5",
      desc: "We coordinate with banks and financial institutions to ensure smooth loan processing, faster approvals, and seamless execution.",
      align: "right",
    },
    {
      title: "Final Disbursement & Support",
      phase: "P6",
      desc: "From loan disbursement to post-service assistance, we provide end-to-end support ensuring a secure and stress-free financial journey.",
      align: "left",
    },
  ];

  return (
    <section
      className="roadmap roadmap--style1 padding-top padding-bottom bg-color"
      id="roadmap"
    >
      <div className="container">
        {/* HEADER */}
        <div
          className="section-header section-header--max50 text-center"
          data-aos="fade-up"
        >
          <h2 className="mb-10 mt-minus-5">
            Our <span>Process</span>
          </h2>
          <p>
            A1 Financial Services ensures a smooth, transparent, and guided
            journey from financial planning to successful loan approval and
            investment execution.
          </p>
        </div>

        {/* ROADMAP ITEMS */}
        <div className="roadmap__wrapper">
          <div className="row gy-4 gx-5">
            {roadmapData.map((item, index) => (
              <div
                key={index}
                className={`col-md-6 ${
                  item.align === "right" ? "offset-md-6" : ""
                }`}
              >
                <div
                  className={`roadmap__item ${
                    item.align === "left"
                      ? "roadmap__item--style2 ms-auto me-md-4"
                      : "ms-md-4"
                  }`}
                  data-aos={item.align === "left" ? "fade-right" : "fade-left"}
                  data-aos-duration="800"
                >
                  <div className="roadmap__item-inner">
                    <div className="roadmap__item-content">
                      <div className="roadmap__item-header">
                        <h3>{item.title}</h3>
                        <span>{item.phase}</span>
                      </div>

                      <p>{item.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SHAPES */}
      <div className="roadmap__shape">
        <span className="roadmap__shape-item roadmap__shape-item--1">
          <span></span>
        </span>
        <span className="roadmap__shape-item roadmap__shape-item--2">
          <img src="/assets/images/icon/1.png" alt="shape" />
        </span>
      </div>
    </section>
  );
}
