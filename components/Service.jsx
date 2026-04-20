"use client";

import Link from "next/link";

export default function Service() {
  return (
    <section className="service padding-top padding-bottom">
      <div className="section-header section-header--max50">
        <h2 className="mb-10 mt-minus-5">
          <span>services </span>We offer
        </h2>
        <p>
          We offer the best services around - from installations to repairs,
          maintenance, and more!
        </p>
      </div>

      <div className="button-wrapper text-center mb-5">
        <Link href="/emicalculator">
          <button className="emi-btn">Calculate EMI</button>
        </Link>

        <Link href="/comparebanks">
          <button className="offer-btn">View Bank Offers</button>
        </Link>
      </div>

      <div className="container">
        <div className="service__wrapper">
          <div className="row g-4 align-items-center">
            <div className="col-sm-6 col-md-6 col-lg-4">
              <div
                className="service__item service__item--style1"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className="service__item-inner text-center">
                  <div className="service__item-thumb mb-30">
                    <img
                      className="dark"
                      src="/assets/images/service/1.png"
                      alt="service-icon"
                    />
                  </div>
                  <div className="service__item-content">
                    <h5>
                      <a className="stretched-link" href="service-details.html">
                        Fast Processing
                      </a>
                    </h5>
                    <p className="mb-0">
                      Get quick approvals and streamlined processing for faster
                      loan disbursement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div
                className="service__item service__item--style1"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="service__item-inner text-center">
                  <div className="service__item-thumb mb-30">
                    <img
                      className="dark"
                      src="/assets/images/service/2.png"
                      alt="service-icon"
                    />
                  </div>
                  <div className="service__item-content">
                    <h5>
                      <a className="stretched-link" href="service-details.html">
                        Best Rates
                      </a>
                    </h5>
                    <p className="mb-0">
                      Enjoy competitive interest rates tailored to your
                      financial needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div
                className="service__item service__item--style1"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="service__item-inner text-center">
                  <div className="service__item-thumb mb-30">
                    <img
                      className="dark"
                      src="/assets/images/service/3.png"
                      alt="service-icon"
                    />
                  </div>
                  <div className="service__item-content">
                    <h5>
                      <a className="stretched-link" href="service-details.html">
                        Expert Guidance
                      </a>
                    </h5>
                    <p className="mb-0">
                      Receive professional support to choose the right financial
                      solution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-4">
              <div
                className="service__item service__item--style1"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className="service__item-inner text-center">
                  <div className="service__item-thumb mb-30">
                    <img
                      className="dark"
                      src="/assets/images/service/4.png"
                      alt="service-icon"
                    />
                  </div>
                  <div className="service__item-content">
                    <h5>
                      <a className="stretched-link" href="service-details.html">
                        Easy Documentation
                      </a>
                    </h5>
                    <p className="mb-0">
                      Minimal paperwork and hassle-free documentation for a
                      smooth experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
