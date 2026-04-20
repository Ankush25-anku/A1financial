"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer class="footer ">
      <div class="container">
        <div class="footer__wrapper">
          <div class="footer__top footer__top--style1">
            <div class="row gy-5 gx-4">
              <div class="col-md-6">
                <div class="footer__about">
                  <a href="index.html" class="footer__about-logo">
                    <img
                      src="/assets/images/logo/a1financial_tbg.png"
                      alt="A1 Financial"
                      style={{
                        height: "80px", // 🔥 increase more
                        width: "auto",
                        objectFit: "contain",
                        display: "block",
                      }}
                    />
                  </a>

                  <p class="footer__about-moto">
                    A1 Financial Services provides trusted solutions in
                    financial consulting, property advisory, loans, investment
                    support, and strategic wealth planning. We help individuals
                    and businesses make informed financial decisions with
                    transparency, compliance, and long-term value.
                  </p>
                </div>
              </div>

              <div class="col-md-2 col-sm-4 col-6">
                <div class="footer__links">
                  <div class="footer__links-tittle">
                    <h6>Quick Links</h6>
                  </div>

                  <div class="footer__links-content">
                    <ul class="footer__linklist">
                      <li class="footer__linklist-item">
                        <a href="#about">About Us</a>
                      </li>

                      <li class="footer__linklist-item">
                        <a href="#team">Teams</a>
                      </li>

                      <li class="footer__linklist-item">
                        <a href="#services">Services</a>
                      </li>

                      <li class="footer__linklist-item">
                        <a href="#features">Features</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-2 col-sm-4 col-6">
                <div class="footer__links">
                  <div class="footer__links-tittle">
                    <h6>Office Address</h6>
                  </div>

                  <div class="footer__links-content">
                    <ul class="footer__linklist">
                      <li class="footer__linklist-item">
                        <a
                          href="https://www.google.com/maps/dir/13.0135909,77.7616675/Share+Space+-+Coworking+Space+-+Whitefield/"
                          target="_blank"
                        >
                          88, Borewell Rd
                        </a>
                      </li>

                      <li class="footer__linklist-item">
                        Palm Meadows, Dodsworth Layout
                      </li>

                      <li class="footer__linklist-item">
                        Whitefield, Bengaluru 560066
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-2 col-sm-4">
                <div class="footer__links">
                  <div class="footer__links-tittle">
                    <h6>Registration</h6>
                  </div>

                  <div class="footer__links-content">
                    <ul class="footer__linklist">
                      <li class="footer__linklist-item">GSTIN:</li>

                      <li class="footer__linklist-item">29ACLFA0142L1ZB</li>

                      <li class="footer__linklist-item">
                        <a href="tel:+919187116639">+91 9187116639</a>
                      </li>

                      <li class="footer__linklist-item">
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

          <div class="footer__bottom">
            <div class="footer__end">
              <div class="footer__end-copyright">
                <p class="mb-0">© 2026 All Rights Reserved By A1 Financial</p>
              </div>

              <div>
                <ul class="social">
                  <li class="social__item">
                    <a href="#" class="social__link social__link--style22">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>

                  <li class="social__item">
                    <a href="#" class="social__link social__link--style22">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>

                  <li class="social__item">
                    <a href="#" class="social__link social__link--style22">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>

                  <li class="social__item">
                    <a href="#" class="social__link social__link--style22">
                      <i class="fab fa-youtube"></i>
                    </a>
                  </li>

                  <li class="social__item">
                    <a href="#" class="social__link social__link--style22">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer__shape">
        <span class="footer__shape-item footer__shape-item--1">
          <img src="assets/images/footer/1.png" alt="shape icon" />
        </span>

        <span class="footer__shape-item footer__shape-item--2">
          <span></span>
        </span>
      </div>
    </footer>
  );
}
