"use client";

export default function ContactSection() {
  return (
    <div className="contact padding-top padding-bottom">
      <div className="container">
        <div className="contact__wrapper">
          <div className="row g-5">
            {/* LEFT INFO */}
            <div className="col-md-5">
              <div
                className="contact__info"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                {/* SOCIAL */}
                <div className="contact__social">
                  <h3>
                    let’s <span>get in touch</span> with us
                  </h3>

                  <ul className="social">
                    <li>
                      <a href="#" className="social__link active">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social__link">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social__link">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social__link">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social__link">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* CONTACT DETAILS */}
                {/* CONTACT DETAILS */}
                <div className="contact__details">
                  {/* PHONE */}
                  <div className="contact__item">
                    <div className="contact__item-inner">
                      <div className="contact__item-thumb">
                        <i className="fas fa-phone-alt fs-2"></i>
                      </div>

                      <div className="contact__item-content">
                        <p>
                          <a href="tel:+919187116639">+91 9187116639</a>
                        </p>
                        <p>
                          <a href="tel:+918951916579">+91 8951916579</a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="contact__item">
                    <div className="contact__item-inner">
                      <div className="contact__item-thumb">
                        <i className="fas fa-envelope fs-2"></i>
                      </div>

                      <div className="contact__item-content">
                        <p>
                          <a href="mailto:services@A1financialservice.com">
                            services@A1financialservice.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ADDRESS */}
                  <div className="contact__item">
                    <div className="contact__item-inner">
                      <div className="contact__item-thumb">
                        <i className="fas fa-map-marker-alt fs-2"></i>
                      </div>

                      <div className="contact__item-content">
                        <p>
                          <a
                            href="https://www.google.com/maps/dir/13.0135909,77.7616675/Share+Space+-+Coworking+Space+in+Whitefield,+88,+Borewell+Rd,+Palm+Meadows,+Dodsworth+Layout,+Whitefield,+Bengaluru,+Karnataka+560066/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            88, Borewell Rd, Palm Meadows,
                          </a>
                        </p>

                        <p>
                          <a
                            href="https://www.google.com/maps/dir/13.0135909,77.7616675/Share+Space+-+Coworking+Space+in+Whitefield,+88,+Borewell+Rd,+Palm+Meadows,+Dodsworth+Layout,+Whitefield,+Bengaluru,+Karnataka+560066/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Dodsworth Layout, Whitefield, Bengaluru 560066
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* WHATSAPP */}
                  <div className="contact__item">
                    <div className="contact__item-inner">
                      <div className="contact__item-thumb">
                        <i className="fab fa-whatsapp fs-2"></i>
                      </div>

                      <div className="contact__item-content">
                        <p>
                          <a
                            href="https://wa.me/919187116639"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Chat with us on WhatsApp
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="col-md-7">
              <div className="contact__form">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <div className="row g-4">
                    <div className="col-12">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email here"
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Message</label>
                      <textarea
                        rows="5"
                        className="form-control"
                        placeholder="Enter Your Message"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="trk-btn trk-btn--border trk-btn--primary mt-4"
                  >
                    Contact Us Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SHAPE */}
      <div className="contact__shape">
        <span className="contact__shape-item contact__shape-item--1">
          <img src="/assets/images/contact/4.png" alt="" />
        </span>
        <span className="contact__shape-item contact__shape-item--2">
          <span></span>
        </span>
      </div>
    </div>
  );
}
