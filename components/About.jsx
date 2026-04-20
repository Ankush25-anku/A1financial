"use client";

import Link from "next/link";

export default function About() {
  return (
    <section id="about"  className="about about--style1">
      <div className="container">
        <div className="about__wrapper">
          <div className="row gx-5 gy-4 align-items-center">
            {/* LEFT IMAGE */}
            <div className="col-lg-6">
              <div className="about__thumb pe-lg-5">
                <div className="about__thumb-inner">
                  <div className="about__thumb-image floating-content">
                    <img
                      src="/assets/images/about/13.png"
                      alt="about"
                      style={{ width: "100%" }}
                    />

                    {/* FLOATING TOP */}
                    <div className="floating-content__top-left">
                      <div className="floating-content__item">
                        <h3>
                          <span>3</span> Years
                        </h3>
                        <p>Financial Expertise</p>
                      </div>
                    </div>

                    {/* FLOATING BOTTOM */}
                    <div className="floating-content__bottom-right">
                      <div className="floating-content__item">
                        <h3>
                          <span>2K+</span>
                        </h3>
                        <p>Happy Clients Served</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-lg-6">
              <div className="about__content">
                <div className="about__content-inner">
                  <h2>
                    About <span>A1 Financial Services</span> — your trusted
                    financial partner
                  </h2>

                  <p className="mb-0">
                    At A1 Financial Services, we are committed to helping
                    individuals and businesses achieve financial stability and
                    growth. With years of experience in investment planning,
                    wealth management, and financial consulting, we provide
                    tailored solutions designed to secure your future. Our
                    expert team focuses on delivering reliable, transparent, and
                    result-driven financial services you can trust.
                  </p>

                  <Link
                    href="/about"
                    className="trk-btn trk-btn--border trk-btn--primary"
                  >
                    Learn More About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
