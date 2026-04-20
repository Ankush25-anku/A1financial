"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Banner3() {
  const canvasRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const frameCount = 211;
    const isMobile = window.innerWidth < 768;

    const currentFrame = (index) =>
      `/frames/frame_${String(index).padStart(4, "0")}.png`;

    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;

      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const images = [];

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const render = (index) => {
      const img = images[index - 1];
      if (!img) return;

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      ctx.clearRect(0, 0, width, height);

      const scale = isMobile
        ? Math.min(width / img.width, height / img.height)
        : Math.max(width / img.width, height / img.height);

      const drawWidth = img.width * scale;
      const drawHeight = img.height * scale;

      const x = (width - drawWidth) / 2;
      const y = (height - drawHeight) / 2;

      ctx.drawImage(img, x, y, drawWidth, drawHeight);
    };

    images[0].onload = () => render(1);

    const obj = { frame: 1 };

    const animation = gsap.to(obj, {
      frame: frameCount,
      snap: "frame",
      ease: "none",
      scrollTrigger: isMobile
        ? false
        : {
            trigger: ".banner",
            start: "top top",
            end: "+=150%",
            scrub: 1,
            pin: true,
          },
      onUpdate: () => {
        render(Math.floor(obj.frame));
      },
    });

    if (isMobile) {
      render(1);
    }

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <section
      className="banner banner--style4 bg--cover"
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <div className="banner__wrapper">
          <div className="row justify-content-center">
            <div className="col-md-10 justify-content-center">
              <div
                className="banner__content"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <h1>Empower Your Ultimate Financial Future</h1>

                <p>
                  Explore our comprehensive resources and expert insights to
                  empower your trading journey. Master the art of making
                  decisions.
                </p>

                <div className="banner__content-btn btn-group justify-content-center">
                  <a
                    href="/signin"
                    className="trk-btn trk-btn--primary trk-btn--arrow"
                  >
                    Trading Now
                  </a>

                  <a
                    href="https://www.youtube.com/watch?v=MHhIzIgFgJo"
                    className="playbtn"
                    data-fslightbox="gallery"
                  >
                    <span className="playbtn__thumb">
                      <i className="fa-solid fa-play"></i>
                    </span>

                    <span className="playbtn__content">Watch Video</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="banner__shape"
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <span className="banner__shape-item banner__shape-item--1">
          <img src="/assets/images/banner/home1/4.png" alt="shape icon" />
        </span>

        <span className="banner__shape-item banner__shape-item--5">
          <img src="/assets/images/banner/home4/2.png" alt="shape icon" />
        </span>
      </div>
    </section>
  );
}
