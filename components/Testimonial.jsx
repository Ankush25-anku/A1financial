"use client";

import { useEffect } from "react";

export default function Testimonial() {
  const testimonials = [
    {
      text: "This testimonial example works because it allows prospective customers to see themselves in the current customer base.",
      name: "Mobarok Hossain",
      role: "Trade Master",
      img: "/assets/images/testimonial/1.png",
    },
    {
      text: "A customer shares her experience with products and services, highlighting value and usability.",
      name: "Guy Hawkins",
      role: "Trade Boss",
      img: "/assets/images/testimonial/2.png",
    },
    {
      text: "This testimonial builds trust by showing real experiences and relatable journeys of customers.",
      name: "Belal Hossain",
      role: "Trade Genius",
      img: "/assets/images/testimonial/6.png",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined" && window.Swiper) {
      new window.Swiper(".testimonial__slider", {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
          nextEl: ".testimonial__slider-next",
          prevEl: ".testimonial__slider-prev",
        },
        breakpoints: {
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        },
      });
    }
  }, []);

  return (
    <section className="testimonial padding-top padding-bottom-style2 bg-color">
      <div className="container">
        {/* HEADER */}
        <div className="section-header d-md-flex align-items-center justify-content-between">
          <div className="section-header__content">
            <h2 className="mb-10">
              connect with <span>our Clients</span>
            </h2>
            <p className="mb-0">
              We love connecting with our clients to hear about their
              experiences.
            </p>
          </div>

          {/* NAV */}
          <div className="section-header__action">
            <div className="swiper-nav">
              <button className="swiper-nav__btn testimonial__slider-prev">
                <i className="fa-solid fa-angle-left"></i>
              </button>
              <button className="swiper-nav__btn testimonial__slider-next active">
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>

        {/* SLIDER */}
        <div
          className="testimonial__wrapper"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="testimonial__slider swiper">
            <div className="swiper-wrapper">
              {testimonials.map((item, index) => (
                <div key={index} className="swiper-slide">
                  <div className="testimonial__item testimonial__item--style1">
                    <div className="testimonial__item-inner">
                      <div className="testimonial__item-content">
                        <p className="mb-0">{item.text}</p>

                        <div className="testimonial__footer">
                          {/* AUTHOR */}
                          <div className="testimonial__author">
                            <div className="testimonial__author-thumb">
                              <img src={item.img} alt={item.name} />
                            </div>
                            <div className="testimonial__author-designation">
                              <h6>{item.name}</h6>
                              <span>{item.role}</span>
                            </div>
                          </div>

                          {/* QUOTE ICON */}
                          <div className="testimonial__quote">
                            <span>
                              <i className="fa-solid fa-quote-right"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
