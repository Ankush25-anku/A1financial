"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Banner1() {
  const canvasRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const frameCount = 211;

    const currentFrame = (i) =>
      `/frames/frame_${String(i).padStart(4, "0")}.png`;

    const setCanvas = () => {
      const dpr = window.devicePixelRatio || 1;

      const width = window.innerWidth < 768 ? 360 : 743;
      const height = window.innerWidth < 768 ? 350 : 715;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = "100%";
      canvas.style.height = "100%";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setCanvas();
    window.addEventListener("resize", setCanvas);

    const images = [];

    for (let i = 1; i <= frameCount; i++) {
      const img = new window.Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const render = (index) => {
      const img = images[index - 1];
      if (!img || !img.complete) return;

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      ctx.clearRect(0, 0, width, height);

      const scale = Math.max(width / img.width, height / img.height);

      const drawWidth = img.width * scale;
      const drawHeight = img.height * scale;

      const x = (width - drawWidth) / 2;
      const y = (height - drawHeight) / 2;

      ctx.drawImage(img, x, y, drawWidth, drawHeight);
    };

    images[0].onload = () => render(1);

    const obj = { frame: 1 };

    const anim = gsap.to(obj, {
      frame: frameCount,
      snap: "frame",
      ease: "none",

      scrollTrigger:
        window.innerWidth < 768
          ? false
          : {
              trigger: ".banner--style1",
              start: "top top",
              end: "+=100%",
              scrub: 0.5,
            },

      onUpdate: () => render(Math.floor(obj.frame)),
    });

    if (window.innerWidth < 768) {
      render(1);
    }

    return () => {
      anim.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener("resize", setCanvas);
    };
  }, []);

  return (
    <section className="banner banner--style1">
      {/* KEEPING YOUR EXISTING BACKGROUND */}
      <div className="banner__bg">
        <div className="banner__bg-element">
          <Image
            src="/assets/images/banner/home1/bg.png"
            alt="section-bg-element"
            className="dark d-none d-lg-block"
            width={1920}
            height={1080}
            priority
          />

          <span className="bg-color d-lg-none"></span>
        </div>
      </div>

      <div className="container">
        <div className="banner__wrapper">
          <div className="row gy-5 gx-4">
            {/* LEFT CONTENT */}
            <div className="col-lg-6 col-md-7">
              <div
                className="banner__content"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="banner__content-coin">
                  <Image
                    src="/assets/images/banner/home1/3.png"
                    alt="coin"
                    width={80}
                    height={80}
                  />
                </div>

                <h1 className="banner__content-heading">
                  Invest your money with <span>higher return</span>
                </h1>

                <p className="banner__content-moto">
                  Anyone can invest money to different currency to increase
                  their earnings by the help of Bitrader through online.
                </p>

                <div className="banner__btn-group btn-group">
                  <Link
                    href="/signin"
                    className="trk-btn trk-btn--primary trk-btn--arrow"
                  >
                    Get Started
                  </Link>

                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="trk-btn trk-btn--outline22"
                  >
                    Watch Video
                  </a>
                </div>

                <div className="banner__content-social">
                  <p>Follow Us</p>

                  <ul className="social">
                    <li className="social__item">
                      <a
                        href="#"
                        className="social__link social__link--style1 active"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>

                    <li className="social__item">
                      <a href="#" className="social__link social__link--style1">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>

                    <li className="social__item">
                      <a href="#" className="social__link social__link--style1">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE 3D VIDEO IN PLACE OF 743x715 IMAGE */}
            <div className="col-lg-6 col-md-5">
              <div
                className="banner__thumb video-thumb"
                data-aos="fade-left"
                data-aos-duration="1000"
                style={{
                  width: "100%",
                  maxWidth: "743px",
                  height: "715px",
                  overflow: "hidden",
                  borderRadius: "20px",
                }}
              >
                <canvas
                  ref={canvasRef}
                  className="banner-video-canvas"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner__shape">
        <span className="banner__shape-item banner__shape-item--1">
          <Image
            src="/assets/images/banner/home1/4.png"
            alt="shape"
            width={120}
            height={120}
          />
        </span>
      </div>
    </section>
  );
}
