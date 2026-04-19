"use client";

import { useEffect } from "react";

export default function Partner() {
  useEffect(() => {
    // Initialize Swiper (from your template JS)
    if (typeof window !== "undefined" && window.Swiper) {
      new window.Swiper(".partner__slider", {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 30,
        autoplay: {
          delay: 2000,
        },
        breakpoints: {
          0: { slidesPerView: 2 },
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          992: { slidesPerView: 5 },
        },
      });
    }
  }, []);

  return (
    <div className="partner partner--gradient">
      <div className="container">
        <div className="partner__wrapper">
          <div className="partner__slider swiper">
            <div className="swiper-wrapper">
              {/* ITEM 1 */}
              <div className="swiper-slide">
                <div className="partner__item">
                  <div className="partner__item-inner">
                    <img
                      src="/assets/images/partner/light/1.png"
                      alt="partner"
                    />
                  </div>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="swiper-slide">
                <div className="partner__item">
                  <div className="partner__item-inner">
                    <img
                      src="/assets/images/partner/light/2.png"
                      alt="partner"
                    />
                  </div>
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="swiper-slide">
                <div className="partner__item">
                  <div className="partner__item-inner">
                    <img
                      src="/assets/images/partner/light/3.png"
                      alt="partner"
                    />
                  </div>
                </div>
              </div>

              {/* ITEM 4 */}
              <div className="swiper-slide">
                <div className="partner__item">
                  <div className="partner__item-inner">
                    <img
                      src="/assets/images/partner/light/4.png"
                      alt="partner"
                    />
                  </div>
                </div>
              </div>

              {/* ITEM 5 */}
              <div className="swiper-slide">
                <div className="partner__item">
                  <div className="partner__item-inner">
                    <img
                      src="/assets/images/partner/light/5.png"
                      alt="partner"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
