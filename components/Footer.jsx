"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          {/* TOP */}
          <div className="footer__top footer__top--style1">
            <div className="row gy-5 gx-4">
              {/* ABOUT */}
              <div className="col-md-6">
                <div className="footer__about">
                  <Link href="/" className="footer__about-logo">
                    <img
                      src="/assets/images/logo/logo14.png"
                      alt="A1 Financial"
                      style={{
                        height: "80px", // 🔥 increase more
                        width: "auto",
                        objectFit: "contain",
                        display: "block",
                      }}
                    />
                  </Link>

                  <p className="footer__about-moto">
                    Welcome to A1 Financial! We provide powerful trading
                    solutions for crypto, forex, and stocks.
                  </p>

                  {/* APP BUTTONS */}
                  <div className="footer__app">
                    <div className="footer__app-item footer__app-item--apple">
                      <div className="footer__app-inner">
                        <div className="footer__app-thumb">
                          <a
                            href="https://www.apple.com/app-store/"
                            target="_blank"
                          >
                            <img
                              src="/assets/images/footer/apple.png"
                              alt="apple"
                            />
                          </a>
                        </div>
                        <div className="footer__app-content">
                          <span>Download on the</span>
                          <p className="mb-0">App Store</p>
                        </div>
                      </div>
                    </div>

                    <div className="footer__app-item footer__app-item--playstore">
                      <div className="footer__app-inner">
                        <div className="footer__app-thumb">
                          <a
                            href="https://play.google.com/store"
                            target="_blank"
                          >
                            <img
                              src="/assets/images/footer/play.png"
                              alt="playstore"
                            />
                          </a>
                        </div>
                        <div className="footer__app-content">
                          <span>GET IT ON</span>
                          <p className="mb-0">Google Play</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* QUICK LINKS */}
              <div className="col-md-2 col-sm-4 col-6">
                <div className="footer__links">
                  <h6>Quick links</h6>
                  <ul className="footer__linklist">
                    <li>
                      <Link href="/#about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/#team">Teams</Link>
                    </li>
                    <li>
                      <Link href="/#services">Services</Link>
                    </li>
                    <li>
                      <Link href="/#features">Features</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* SUPPORT */}
              <div className="col-md-2 col-sm-4 col-6">
                <div className="footer__links">
                  <h6>Support</h6>
                  <ul className="footer__linklist">
                    <li>
                      <Link href="#">Terms & Conditions</Link>
                    </li>
                    <li>
                      <Link href="#">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/faq">FAQs</Link>
                    </li>
                    <li>
                      <Link href="#">Support Center</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* COMPANY */}
              <div className="col-md-2 col-sm-4">
                <div className="footer__links">
                  <h6>Company</h6>
                  <ul className="footer__linklist">
                    <li>
                      <Link href="#">Careers</Link>
                    </li>
                    <li>
                      <Link href="#">Updates</Link>
                    </li>
                    <li>
                      <Link href="#">Jobs</Link>
                    </li>
                    <li>
                      <Link href="#">Announcements</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="footer__bottom">
            <div className="footer__end">
              <div className="footer__end-copyright">
                <p className="mb-0">
                  © {new Date().getFullYear()} All Rights Reserved By A1
                  Financial
                </p>
              </div>

              {/* SOCIAL */}
              <ul className="social">
                <li>
                  <a className="social__link social__link--style22">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a className="social__link social__link--style22">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a className="social__link social__link--style22">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a className="social__link social__link--style22">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a className="social__link social__link--style22">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SHAPES */}
      <div className="footer__shape">
        <span className="footer__shape-item footer__shape-item--1">
          <img src="/assets/images/footer/1.png" alt="shape" />
        </span>
        <span className="footer__shape-item footer__shape-item--2">
          <span></span>
        </span>
      </div>
    </footer>
  );
}
