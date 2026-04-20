"use client";

import Link from "next/link";

export default function Banner1() {
  return (
    <section className="banner banner--style1">
      <div className="banner__bg">
        <div className="banner__bg-element">
          <img
            src="/assets/images/banner/home1/bg.png"
            alt="section-bg-element"
            className="dark d-none d-lg-block"
          />

          <span className="bg-color d-lg-none"></span>
        </div>
      </div>

      <div className="container">
        <div className="banner__wrapper">
          <div className="row gy-5 gx-4">
            <div className="col-lg-6 col-md-7">
              <div
                className="banner__content"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="banner__content-coin">
                  <img
                    src="/assets/images/banner/home1/3.png"
                    alt="coin icon"
                  />
                </div>

                <h1 className="banner__content-heading">
                  Trusted Guidance for <span>Loans & Property Investments</span>
                </h1>

                <p className="banner__content-moto">
                  A1 Financial Services helps you with home loans, property
                  advisory, investment guidance, and verified real estate
                  solutions designed for long-term value and smarter decisions.
                </p>

                <div className="banner__content-social">
                  <p>Follow Us</p>

                  <ul className="social">
                    <li className="social__item">
                      <a
                        href="#"
                        className="social__link social__link--style1 active"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>

                    <li className="social__item">
                      <a href="#" className="social__link social__link--style1">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>

                    <li className="social__item">
                      <a href="#" className="social__link social__link--style1">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>

                    <li className="social__item">
                      <a href="#" className="social__link social__link--style1">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>

                    <li className="social__item">
                      <a href="#" className="social__link social__link--style1">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-5">
              <div
                className="banner__thumb"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <img
                  src="/assets/images/banner/home1/1223.png"
                  alt="banner-thumb"
                  className="dark"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner__shape">
        <span className="banner__shape-item banner__shape-item--1">
          <img src="/assets/images/banner/home1/4.png" alt="shape icon" />
        </span>
      </div>
    </section>
  );
}
