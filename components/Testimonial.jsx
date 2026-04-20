"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Testimonial() {
  const testimonials = [
    {
      text: "A1 Financial made my home loan process incredibly smooth. From comparing banks to final approval, everything was handled professionally and quickly.",
      name: "Rahul Sharma",
      role: "Home Buyer",
      img: "/assets/images/testimonial/1.png",
    },
    {
      text: "I was confused about which bank to choose, but A1 Financial guided me with the best options and lowest interest rates. Highly recommended!",
      name: "Priya Nair",
      role: "Property Investor",
      img: "/assets/images/testimonial/2.png",
    },
    {
      text: "The team provided end-to-end support — from eligibility check to loan disbursement. Truly hassle-free experience!",
      name: "Amit Verma",
      role: "First-Time Buyer",
      img: "/assets/images/testimonial/6.png",
    },

    /* duplicate for smooth autoplay */
    {
      text: "A1 Financial made my home loan process incredibly smooth. From comparing banks to final approval, everything was handled professionally and quickly.",
      name: "Rahul Sharma",
      role: "Home Buyer",
      img: "/assets/images/testimonial/1.png",
    },
    {
      text: "I was confused about which bank to choose, but A1 Financial guided me with the best options and lowest interest rates. Highly recommended!",
      name: "Priya Nair",
      role: "Property Investor",
      img: "/assets/images/testimonial/2.png",
    },
    {
      text: "The team provided end-to-end support — from eligibility check to loan disbursement. Truly hassle-free experience!",
      name: "Amit Verma",
      role: "First-Time Buyer",
      img: "/assets/images/testimonial/6.png",
    },
  ];

  return (
    <section className="testimonial padding-top padding-bottom-style2 bg-color">
      <div className="container">
        {/* HEADER */}
        <div className="section-header d-md-flex align-items-center justify-content-between">
          <div className="section-header__content">
            <h2 className="mb-10">
              Connect with <span>Our Clients</span>
            </h2>

            <p className="mb-0">
              Hear real experiences from clients who trusted A1 Financial for
              their home loan and property journey.
            </p>
          </div>

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

        {/* SWIPER */}
        <div className="testimonial__wrapper">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            speed={1200}
            loopAdditionalSlides={6}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            navigation={{
              prevEl: ".testimonial__slider-prev",
              nextEl: ".testimonial__slider-next",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial__item testimonial__item--style1">
                  <div className="testimonial__item-inner">
                    <div className="testimonial__item-content">
                      <p className="mb-0">{item.text}</p>

                      <div className="testimonial__footer">
                        <div className="testimonial__author">
                          <div className="testimonial__author-thumb">
                            <img src={item.img} alt={item.name} />
                          </div>

                          <div className="testimonial__author-designation">
                            <h6>{item.name}</h6>
                            <span>{item.role}</span>
                          </div>
                        </div>

                        <div className="testimonial__quote">
                          <span>
                            <i className="fa-solid fa-quote-right"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
