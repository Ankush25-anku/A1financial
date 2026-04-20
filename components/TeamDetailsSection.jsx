"use client";

import Link from "next/link";

export default function TeamDetailsSection() {
  return (
    <section className="team team--details padding-top padding-bottom bg-color-3">
      <div className="container">
        <div className="team__wrapper">
          <div className="row g-5 align-items-center">
            <div className="col-md-5">
              <div className="team__thumb">
                <img src="/assets/images/team/11.jpg" alt="Team Image" />
              </div>
            </div>

            <div className="col-md-7">
              <div className="team__content">
                <h3>Arun Kumar J</h3>

                <p className="designation">CEO & DIRECTOR</p>

                <p className="info">
                  Arun Kumar J leads A1 Financial with a strong vision to help
                  clients make confident decisions in home loans, property
                  financing, and real estate advisory. With extensive industry
                  knowledge and a client-first approach, he has helped
                  individuals and families secure the right financial solutions
                  with trust and transparency.
                </p>

                <p>
                  Under his leadership, A1 Financial focuses on providing expert
                  loan guidance, faster approvals, bank comparisons, and
                  personalized advisory services. From eligibility assessment to
                  loan disbursement, the goal is to deliver reliable solutions
                  that simplify the financing journey for every client.
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
