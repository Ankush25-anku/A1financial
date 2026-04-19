"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Banner() {
  const canvasRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const frameCount = 211;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const isMobile = window.innerWidth < 768;

    const currentFrame = (index) =>
      `/frames/frame_${String(index).padStart(4, "0")}.png`;

    // ✅ FIXED canvas sizing (correct math)
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;

      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // preload
    const images = [];
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    // ✅ FIXED render (correct scaling + centering)
    const render = (index) => {
      const img = images[index - 1];
      if (!img) return;

      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      context.clearRect(0, 0, width, height);

      // background fill
      context.fillStyle = "#0f172a";
      context.fillRect(0, 0, width, height);

      const scale = isMobile
        ? Math.min(width / img.width, height / img.height)
        : Math.max(width / img.width, height / img.height);

      const drawWidth = img.width * scale;
      const drawHeight = img.height * scale;

      const x = (width - drawWidth) / 2;
      const y = (height - drawHeight) / 2;

      context.drawImage(img, x, y, drawWidth, drawHeight);
    };

    images[0].onload = () => render(1);

    const obj = { frame: 1 };

    // ✅ DESKTOP ONLY animation
    const overlay = document.querySelector(".hero-overlay");

    /* fade out heading while scroll begins */
    gsap.to(overlay, {
      opacity: 0,
      y: -80,
      ease: "none",
      scrollTrigger: isMobile
        ? false
        : {
            trigger: ".hero-video-section",
            start: "top top", // visible at start
            end: "+=30%", // disappear early while scrolling
            scrub: true,
          },
    });

    const animation = gsap.to(obj, {
      frame: frameCount,
      snap: "frame",
      ease: "none",
      scrollTrigger: isMobile
        ? false
        : {
            trigger: ".hero-video-section",
            start: "top top",
            end: "+=100%",
            scrub: 0.5,
            pin: true,
          },
      onUpdate: () => render(Math.floor(obj.frame)),
    });

    // mobile fallback
    if (isMobile) render(1);

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <section className="hero-video-section">
      <div className="canvas-wrapper">
        <canvas ref={canvasRef} className="hero-canvas" />
      </div>

      <div className="hero-overlay">
        <h1 className="hero-title">
          Strategic Real Estate Advisory & Verified Property Solutions
        </h1>
        <p className="hero-brand">
          <span>A1 Financial Services</span>
        </p>
      </div>
    </section>
  );
}
