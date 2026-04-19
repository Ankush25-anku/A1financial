"use client";

export default function CTA() {
  return (
    <section className="cta padding-top padding-bottom bg-color">
      <div className="container">
        <div className="cta__wrapper">
          {/* NEWSLETTER */}
          <div className="cta__newsletter justify-content-center">
            <div
              className="cta__newsletter-inner"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {/* IMAGE */}
              <div className="cta__thumb">
                <img src="/assets/images/cta/3.png" alt="cta" />
              </div>

              {/* CONTENT */}
              <div className="cta__subscribe">
                <h2>
                  <span>Subscribe</span> our news
                </h2>

                <p>
                  Are you tired of missing updates? Subscribe now and stay in
                  the loop!
                </p>

                {/* FORM */}
                <form
                  className="cta-form cta-form--style2 form-subscribe"
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Subscribed successfully 🚀");
                  }}
                >
                  <div className="cta-form__inner d-sm-flex align-items-center">
                    <input
                      type="email"
                      className="form-control form-control--style2 mb-3 mb-sm-0"
                      placeholder="Email Address"
                      required
                    />

                    <button
                      className="trk-btn trk-btn--large trk-btn--secondary2"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* SHAPES */}
          <div className="cta__shape">
            <span className="cta__shape-item cta__shape-item--1">
              <img src="/assets/images/cta/2.png" alt="shape" />
            </span>
            <span className="cta__shape-item cta__shape-item--2">
              <img src="/assets/images/cta/4.png" alt="shape" />
            </span>
            <span className="cta__shape-item cta__shape-item--3">
              <img src="/assets/images/cta/5.png" alt="shape" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
