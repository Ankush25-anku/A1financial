"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Blog() {
  const blogs = [
    {
      title: "Real Estate Market Outlook: 2026 Analysis",
      category: "Market Trends",
      img: "/assets/images/blog/author/11.jpeg",
      author: "A1 Financial Team",
      date: "10/02/2026",
      authorImg: "/assets/images/blog/author/11.jpeg",
      desc: "Explore the latest real estate trends, pricing insights, and future investment opportunities across India.",
    },
    {
      title: "First-Time Home Buyer’s Complete Checklist",
      category: "Home Buying Guide",
      img: "/assets/images/blog/author/12.png",
      author: "A1 Financial Team",
      date: "18/01/2026",
      authorImg: "/assets/images/blog/author/12.png",
      desc: "From budgeting to loan approval, discover everything you need before purchasing your first home.",
    },
    {
      title: "Top Investment Areas in Bangalore for 2026",
      category: "Investment Tips",
      img: "/assets/images/blog/author/13.png",
      author: "A1 Financial Team",
      date: "05/01/2026",
      authorImg: "/assets/images/blog/author/13.png",
      desc: "Find high-growth locations in Bangalore offering strong ROI potential for smart property investors.",
    },

    /* duplicate for smooth autoplay */
    {
      title: "Real Estate Market Outlook: 2026 Analysis",
      category: "Market Trends",
      img: "/assets/images/blog/author/16.png",
      author: "A1 Financial Team",
      date: "10/02/2026",
      authorImg: "/assets/images/blog/author/16.png",
      desc: "Explore the latest real estate trends, pricing insights, and future investment opportunities across India.",
    },
    {
      title: "First-Time Home Buyer’s Complete Checklist",
      category: "Home Buying Guide",
      img: "/assets/images/blog/author/14.png",
      author: "A1 Financial Team",
      date: "18/01/2026",
      authorImg: "/assets/images/blog/author/14.png",
      desc: "From budgeting to loan approval, discover everything you need before purchasing your first home.",
    },
    {
      title: "Top Investment Areas in Bangalore for 2026",
      category: "Investment Tips",
      img: "/assets/images/blog/author/15.png",
      author: "A1 Financial Team",
      date: "05/01/2026",
      authorImg: "/assets/images/blog/author/15.png",
      desc: "Find high-growth locations in Bangalore offering strong ROI potential for smart property investors.",
    },
  ];

  return (
    <section className="blog padding-top padding-bottom">
      <div className="container">
        {/* HEADER */}
        <div className="section-header d-md-flex align-items-center justify-content-between">
          <div className="section-header__content">
            <h2 className="mb-10">
              <span>Insights</span> for Home Buyers & Investors
            </h2>

            <p className="mb-0">
              Stay updated with real estate trends, home loan tips, and smart
              investment strategies from A1 Financial.
            </p>
          </div>

          <div className="section-header__action">
            <div className="swiper-nav swiper-nav--style1">
              <button className="swiper-nav__btn blog__slider-prev">
                <i className="fa-solid fa-angle-left"></i>
              </button>

              <button className="swiper-nav__btn blog__slider-next active">
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>

        {/* SLIDER */}
        <div className="blog__wrapper">
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
              prevEl: ".blog__slider-prev",
              nextEl: ".blog__slider-next",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {blogs.map((blog, index) => (
              <SwiperSlide key={index}>
                <div
                  className="blog__item blog__item--style2"
                  style={{
                    pointerEvents: "none",
                  }}
                >
                  <div className="blog__item-inner">
                    {/* IMAGE */}
                    <div className="blog__thumb">
                      <img src={blog.img} alt={blog.title} />
                    </div>

                    {/* CONTENT */}
                    <div className="blog__content">
                      <div className="blog__meta">
                        <span className="blog__meta-tag blog__meta-tag--style1">
                          {blog.category}
                        </span>
                      </div>

                      <h5>
                        <span
                          style={{
                            cursor: "default",
                            pointerEvents: "none",
                            textDecoration: "none",
                          }}
                        >
                          {blog.title}
                        </span>
                      </h5>

                      <p className="mb-15">{blog.desc}</p>

                      {/* AUTHOR */}
                      <div className="blog__writer">
                        <div className="blog__writer-thumb">
                          <img src={blog.authorImg} alt={blog.author} />
                        </div>

                        <div className="blog__writer-designation">
                          <h6 className="mb-0">{blog.author}</h6>
                          <span>{blog.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* BUTTON */}
        {/* <div className="text-center">
          <Link
            href="/blogs"
            className="trk-btn trk-btn--border trk-btn--primary mt-15"
          >
            View More
          </Link>
        </div> */}
      </div>

      <div className="blog__shape">
        <span className="blog__shape-item blog__shape-item--1">
          <span></span>
        </span>
      </div>
    </section>
  );
}
