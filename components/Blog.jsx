"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Blog() {
  const blogs = [
    {
      title: "Real Estate Market Outlook: 2026 Analysis",
      category: "Market Trends",
      img: "/assets/images/blog/1.png",
      author: "A1 Financial Team",
      date: "10/02/2026",
      authorImg: "/assets/images/blog/author/1.png",
      desc: "Explore the latest real estate market trends, pricing insights, and future growth opportunities for smart investors.",
    },
    {
      title: "First-Time Home Buyer’s Complete Checklist",
      category: "Home Buying Guide",
      img: "/assets/images/blog/2.png",
      author: "A1 Financial Team",
      date: "18/01/2026",
      authorImg: "/assets/images/blog/author/2.png",
      desc: "Everything you need to know before buying your first property — from budgeting to legal checks and loan approval.",
    },
    {
      title: "Top 10 Areas to Invest in Bangalore for 2026",
      category: "Investment Tips",
      img: "/assets/images/blog/3.png",
      author: "A1 Financial Team",
      date: "05/01/2026",
      authorImg: "/assets/images/blog/author/3.png",
      desc: "Discover high-growth locations in Bangalore with strong ROI potential for real estate investment.",
    },
  ];

  return (
    <section className="blog padding-top padding-bottom">
      <div className="container">
        {/* HEADER */}
        <div className="section-header d-md-flex align-items-center justify-content-between">
          <div className="section-header__content">
            <h2 className="mb-10">
              <span>Latest</span> Articles
            </h2>
            <p className="mb-0">
              Get expert insights on real estate, home loans, and smart
              investment strategies.
            </p>
          </div>

          {/* NAV */}
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
        <div
          className="blog__wrapper"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Swiper
            modules={[Navigation]}
            loop={true}
            spaceBetween={30}
            slidesPerView={3}
            navigation={{
              nextEl: ".blog__slider-next",
              prevEl: ".blog__slider-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {blogs.map((blog, index) => (
              <SwiperSlide key={index}>
                <div className="blog__item blog__item--style2">
                  <div className="blog__item-inner">
                    {/* IMAGE */}
                    <div className="blog__thumb">
                      <img src={blog.img} alt="blog" />
                    </div>

                    {/* CONTENT */}
                    <div className="blog__content">
                      <div className="blog__meta">
                        <span className="blog__meta-tag blog__meta-tag--style1">
                          {blog.category}
                        </span>
                      </div>

                      <h5>
                        <Link href="/blog-details">{blog.title}</Link>
                      </h5>

                      <p className="mb-15">{blog.desc}</p>

                      {/* AUTHOR */}
                      <div className="blog__writer">
                        <div className="blog__writer-thumb">
                          <img src={blog.authorImg} alt="author" />
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
        <div className="text-center">
          <Link
            href="/blogs"
            className="trk-btn trk-btn--border trk-btn--primary mt-15"
          >
            View more
          </Link>
        </div>
      </div>
    </section>
  );
}
