"use client";

import Link from "next/link";

export default function TeamDetailsSection1() {
  return (
    <section className="team team--details padding-top padding-bottom bg-color-3">
      <div className="container">
        <div className="team__wrapper">
          <div className="row g-5 align-items-center">
            <div className="col-md-5">
              <div className="team__thumb">
                <img src="/assets/images/team/12.jpg" alt="Team Image" />
              </div>
            </div>

            <div className="col-md-7">
              <div className="team__content">
                <h3>Harshitha M</h3>

                <p className="designation">CO-Founder</p>

                <p className="info">
                  Harshitha M plays a key role in driving the vision and growth
                  of A1 Financial, helping clients navigate home loans, property
                  finance, and real estate solutions with confidence. With a
                  strong focus on client relationships and strategic guidance,
                  she supports borrowers in finding the right financial
                  opportunities tailored to their needs.
                </p>

                <p>
                  As CO-Founder, she contributes to delivering seamless advisory
                  services, faster loan processing, and personalized support
                  across every stage of the financing journey. Her commitment is
                  centered on transparency, trust, and helping clients make
                  informed financial decisions with ease.
                </p>
                <ul className="social mt-30">
                  <li className="social__item">
                    <Link
                      href="#"
                      className="social__link social__link--style2"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>

                  <li className="social__item">
                    <Link
                      href="#"
                      className="social__link social__link--style2"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>

                  <li className="social__item">
                    <Link
                      href="#"
                      className="social__link social__link--style2"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>

                  <li className="social__item">
                    <Link
                      href="#"
                      className="social__link social__link--style2"
                    >
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </li>

                  <li className="social__item">
                    <Link
                      href="/signin"
                      className="social__link social__link--style2 d-sm-none d-md-block"
                    >
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
