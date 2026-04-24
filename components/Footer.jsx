"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__top footer__top--style1">
            <div className="row gy-5 gx-4">
              <div className="col-md-6">
                <div className="footer__about">
                  <a href="index.html" className="footer__about-logo">
                    <img
                      src="/assets/images/logo/a1financial_tbg.png"
                      alt="A1 Financial"
                      style={{
                        height: "80px",
                        width: "auto",
                        objectFit: "contain",
                        display: "block",
                      }}
                    />
                  </a>

                  <p className="footer__about-moto">
                    A1 Financial Services provides trusted solutions in
                    financial consulting, property advisory, loans, investment
                    support, and strategic wealth planning.
                  </p>
                </div>
              </div>

              <div className="col-md-2 col-sm-4 col-6">
                <div className="footer__links">
                  <div className="footer__links-tittle">
                    <h6>Quick Links</h6>
                  </div>

                  <div className="footer__links-content">
                    <ul className="footer__linklist">
                      <li className="footer__linklist-item">
                        <a href="#about">About Us</a>
                      </li>
                      <li className="footer__linklist-item">
                        <a href="#team">Teams</a>
                      </li>
                      <li className="footer__linklist-item">
                        <a href="#services">Services</a>
                      </li>
                      <li className="footer__linklist-item">
                        <a href="#features">Features</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-2 col-sm-4 col-6">
                <div className="footer__links">
                  <div className="footer__links-tittle">
                    <h6>Office Address</h6>
                  </div>

                  <div className="footer__links-content">
                    <ul className="footer__linklist">
                      <li className="footer__linklist-item">
                        <a href="https://www.google.com/maps/" target="_blank">
                          88, Borewell Rd
                        </a>
                      </li>

                      <li className="footer__linklist-item">
                        Palm Meadows, Dodsworth Layout
                      </li>

                      <li className="footer__linklist-item">
                        Whitefield, Bengaluru 560066
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-2 col-sm-4">
                <div className="footer__links">
                  <div className="footer__links-tittle">
                    <h6>Registration</h6>
                  </div>

                  <div className="footer__links-content">
                    <ul className="footer__linklist">
                      <li className="footer__linklist-item">GSTIN:</li>
                      <li className="footer__linklist-item">29ACLFA0142L1ZB</li>

                      <li className="footer__linklist-item">
                        <a href="tel:+919187116639">+91 9187116639</a>
                      </li>

                      <li className="footer__linklist-item">
                        <a href="mailto:services@A1financialservice.com">
                          services@A1financialservice.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <div className="footer__end">
              <div className="footer__end-copyright">
                <p className="mb-0">
                  © 2026 All Rights Reserved By A1 Financial
                </p>
              </div>

              <div>
                <ul className="social">
                  <li className="social__item">
                    <a href="#" className="social__link social__link--style22">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>

                  <li className="social__item">
                    <a href="#" className="social__link social__link--style22">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>

                  <li className="social__item">
                    <a href="#" className="social__link social__link--style22">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>

                  <li className="social__item">
                    <a href="#" className="social__link social__link--style22">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>

                  <li className="social__item">
                    <a href="#" className="social__link social__link--style22">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__shape">
        <span className="footer__shape-item footer__shape-item--1">
          <img src="assets/images/footer/1.png" alt="shape icon" />
        </span>

        <span className="footer__shape-item footer__shape-item--2">
          <span></span>
        </span>
      </div>
    </footer>
  );
}
