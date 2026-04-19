"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Feature() {
  const [activeTab, setActiveTab] = useState(0);

  // INIT AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // REFRESH AOS WHEN TAB CHANGES
  useEffect(() => {
    AOS.refresh();
  }, [activeTab]);

  const tabs = [
    {
      title: "Home Loan",
      image: "/assets/images/service/1.png",
      icon: "/assets/images/feature/5.png",
      amount: "7.10%",
    },
    {
      title: "Loan Against Property",
      image: "/assets/images/service/2.png",
      icon: "/assets/images/feature/6.png",
      amount: "8.5%",
    },
    {
      title: "Construction Loan",
      image: "/assets/images/service/3.png",
      icon: "/assets/images/feature/7.png",
      amount: "7.10%",
    },
  ];
  return (
    <section
      id="features"
      className="feature feature--style1 padding-bottom padding-top bg-color"
    >
      <div className="container">
        <div className="feature__wrapper">
          <div className="row g-5 align-items-center justify-content-between">
            <div className="col-md-6 col-lg-5">
              <div
                className="feature__content"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <div className="feature__content-inner">
                  <div className="section-header">
                    <h2 className="mb-10 mt-minus-5">
                      <span>benefits </span>We offer
                    </h2>
                    <p className="mb-0">
                      Unlock the full potential of our product with our amazing
                      features and top-notch.
                    </p>
                  </div>

                  <div className="feature__nav">
                    <div
                      className="nav nav--feature flex-column nav-pills"
                      id="feat-pills-tab"
                      role="tablist"
                      aria-orientation="vertical"
                    >
                      <div
                        className="nav-link active"
                        id="feat-pills-one-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#feat-pills-one"
                        role="tab"
                        aria-controls="feat-pills-one"
                        aria-selected="true"
                      >
                        <div className="feature__item">
                          <div className="feature__item-inner">
                            <div className="feature__item-content">
                              <h6>HOME Loan</h6>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="nav-link"
                        id="feat-pills-two-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#feat-pills-two"
                        role="tab"
                        aria-controls="feat-pills-two"
                        aria-selected="false"
                      >
                        <div className="feature__item">
                          <div className="feature__item-inner">
                            <div className="feature__item-content">
                              <h6>Loan Against Property</h6>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="nav-link"
                        id="feat-pills-three-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#feat-pills-three"
                        role="tab"
                        aria-controls="feat-pills-three"
                        aria-selected="false"
                      >
                        <div className="feature__item">
                          <div className="feature__item-inner">
                            <div className="feature__item-content">
                              <h6>Construction Loan</h6>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* <div
                        className="nav-link"
                        id="feat-pills-four-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#feat-pills-four"
                        role="tab"
                        aria-controls="feat-pills-four"
                        aria-selected="false"
                      >
                        <div className="feature__item">
                          <div className="feature__item-inner">
                            <div className="feature__item-content"></div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6">
              <div
                className="feature__thumb pt-5 pt-md-0"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <div className="feature__thumb-inner">
                  <div className="tab-content" id="feat-pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="feat-pills-one"
                      role="tabpanel"
                      aria-labelledby="feat-pills-one-tab"
                      tabIndex="0"
                    >
                      <div className="feature__image floating-content">
                        <img
                          src="assets/images/feature/11.jpg"
                          alt="Feature image"
                        />

                        <div
                          className="floating-content__top-right floating-content__top-right--style2"
                          data-aos="fade-left"
                          data-aos-duration="1000"
                        >
                          <div className="floating-content__item floating-content__item--style2 text-center">
                            <img
                              src="assets/images/feature/5.png"
                              alt="rating"
                            />
                            <p className="style2">Interest Rate For Loan</p>
                          </div>
                        </div>

                        <div
                          className="floating-content__bottom-left floating-content__bottom-left--style2"
                          data-aos="fade-left"
                          data-aos-duration="1000"
                        >
                          <div className="floating-content__item floating-content__item--style3 d-flex align-items-center">
                            <h3 className="style2">
                              <span
                                className="purecounter"
                                data-purecounter-start="0"
                                data-purecounter-end="10"
                              >
                                10M
                              </span>
                              M
                            </h3>
                            <p className="ms-3 style2">Available for loan</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="feat-pills-two"
                      role="tabpanel"
                      aria-labelledby="feat-pills-two-tab"
                      tabIndex="0"
                    >
                      <div className="feature__image floating-content">
                        <img
                          src="assets/images/feature/13.jpg"
                          alt="Feature image"
                        />

                        <div
                          className="floating-content__top-right floating-content__top-right--style2"
                          data-aos="fade-left"
                          data-aos-duration="1000"
                        >
                          <div className="floating-content__item floating-content__item--style2 text-center">
                            <img
                              src="assets/images/feature/6.png"
                              alt="rating"
                            />
                            <p className="style2">Interest Rate For Loan</p>
                          </div>
                        </div>

                        <div
                          className="floating-content__bottom-left floating-content__bottom-left--style2"
                          data-aos="fade-left"
                          data-aos-duration="1000"
                        >
                          <div className="floating-content__item floating-content__item--style3 d-flex align-items-center">
                            <h3 className="style2">
                              <span
                                className="purecounter"
                                data-purecounter-start="0"
                                data-purecounter-end="18"
                              >
                                10M
                              </span>
                              M
                            </h3>
                            <p className="ms-3 style2">Rate of Interest</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="feat-pills-three"
                      role="tabpanel"
                      aria-labelledby="feat-pills-three-tab"
                      tabIndex="0"
                    >
                      <div className="feature__image floating-content">
                        <img
                          src="assets/images/feature/14.jpeg"
                          alt="Feature image"
                        />

                        <div
                          className="floating-content__top-right floating-content__top-right--style2"
                          data-aos="fade-left"
                          data-aos-duration="1000"
                        >
                          <div className="floating-content__item floating-content__item--style2 text-center">
                            <img
                              src="assets/images/feature/7.png"
                              alt="rating"
                            />
                            <p className="style2">Interest Rate For Loan</p>
                          </div>
                        </div>

                        <div
                          className="floating-content__bottom-left floating-content__bottom-left--style2"
                          data-aos="fade-left"
                          data-aos-duration="1000"
                        >
                          <div className="floating-content__item floating-content__item--style3 d-flex align-items-center">
                            <h3 className="style2">
                              <span
                                className="purecounter"
                                data-purecounter-start="0"
                                data-purecounter-end="30"
                              >
                                10M
                              </span>
                              M
                            </h3>
                            <p className="ms-3 style2">Available for loan</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <div
                      className="tab-pane fade"
                      id="feat-pills-four"
                      role="tabpanel"
                      aria-labelledby="feat-pills-four-tab"
                      tabIndex="0"
                    >
                      <div className="feature__image floating-content">
                        <img
                          src="assets/images/feature/2.png"
                          alt="Feature image"
                        />

                        <div
                          className="floating-content__top-right floating-content__top-right--style2"
                          data-aos="fade-left"
                          data-aos-duration="1000"
                        >
                          <div className="floating-content__item floating-content__item--style2 text-center">
                            <img
                              src="assets/images/feature/8.png"
                              alt="rating"
                            />
                            <p className="style2">Interest Rate For Loan</p>
                          </div>
                        </div>

                        <div
                          className="floating-content__bottom-left floating-content__bottom-left--style2"
                          data-aos="fade-left"
                          data-aos-duration="1000"
                        >
                          <div className="floating-content__item floating-content__item--style3 d-flex align-items-center">
                            <h3 className="style2">
                              <span
                                className="purecounter"
                                data-purecounter-start="0"
                                data-purecounter-end="28"
                              >
                                10M
                              </span>
                              M
                            </h3>
                            <p className="ms-3 style2">Available for loan</p>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="feature__shape">
        <span className="feature__shape-item feature__shape-item--1">
          <img src="assets/images/feature/shape/1.png" alt="shape-icon" />
        </span>

        <span className="feature__shape-item feature__shape-item--2">
          <span></span>
        </span>
      </div>
    </section>
  );
}
