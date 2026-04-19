"use client";

import Link from "next/link";

export default function Servicedetails() {
  return (
    <div className="service-details padding-top padding-bottom section-bg-color">
      <div className="container">
        <div className="service-details__wrapper">
          <div className="row flex-lg-row-reverse g-5">
            {/* RIGHT CONTENT */}
            <div className="col-lg-8">
              <div className="service-details__item">
                <div className="service-details__item-inner">
                  {/* IMAGE */}
                  <div
                    className="service-details__thumb mb-40"
                    data-aos="fade-up"
                    data-aos-duration="800"
                  >
                    <div className="service-details__thumb-inner">
                      <img src="/assets/images/service/bg.png" alt="service" />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div
                    className="service-details__content"
                    data-aos="fade-up"
                    data-aos-duration="900"
                  >
                    <h3 className="mb-15">
                      <Link href="/service-details" className="stretched-link">
                        Modules for smart trading
                      </Link>
                    </h3>

                    <p>
                      Are you ready to take your trading skills to the next
                      level? With these modules, you can analyze trends and make
                      smarter decisions.
                    </p>
                  </div>

                  {/* FAQ */}
                  <div
                    className="service-details__faq mt-55"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div className="accordion" id="faqAccordion1">
                      {/* FAQ ITEM */}
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="faq1">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faqBody1"
                          >
                            Trading FAQs: How to Start Investing
                          </button>
                        </h2>
                        <div
                          id="faqBody1"
                          className="accordion-collapse collapse"
                        >
                          <div className="accordion-body">
                            AI-powered tools to automate trading systems.
                          </div>
                        </div>
                      </div>

                      {/* FAQ ITEM */}
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="faq2">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faqBody2"
                          >
                            Got questions about trading?
                          </button>
                        </h2>
                        <div
                          id="faqBody2"
                          className="accordion-collapse collapse show"
                        >
                          <div className="accordion-body">
                            Trading helps you manage investments easily.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* TEAM */}
                  <div className="service-details__team mt-50">
                    <h5 className="mb-25">Meet with our experts</h5>

                    <div className="row g-5">
                      {/* MEMBER */}
                      <div className="col-sm-6">
                        <div className="team__item">
                          <img
                            src="/assets/images/team/other/1.png"
                            alt="team"
                          />
                          <h6>
                            <Link href="/team-details">Tyler Jones</Link>
                          </h6>
                          <p>Trader Boss</p>
                        </div>
                      </div>

                      {/* MEMBER */}
                      <div className="col-sm-6">
                        <div className="team__item">
                          <img
                            src="/assets/images/team/other/2.png"
                            alt="team"
                          />
                          <h6>
                            <Link href="/team-details">Adam Smith</Link>
                          </h6>
                          <p>Nimble Broker</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SIDEBAR */}
            <div className="col-lg-4 col-md-8 col-12">
              <div className="sidebar">
                {/* SEARCH */}
                <div className="sidebar__search">
                  <h6>Search Here</h6>
                  <form>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search articles"
                    />
                  </form>
                </div>

                {/* CATEGORIES */}
                <div className="sidebar__categorie mt-4">
                  <h6>Categories</h6>
                  <ul>
                    <li className="active">
                      <a href="#">Modules for smart trading</a>
                    </li>
                    <li>
                      <a href="#">Crypto platform</a>
                    </li>
                    <li>
                      <a href="#">Exchange orders</a>
                    </li>
                  </ul>
                </div>

                {/* SOCIAL */}
                <div className="sidebar__social mt-4">
                  <h6>Social Links</h6>
                  <div className="social">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
