"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader">
      <img
        src="/assets/images/logo/logo15.png"
        alt="A1 Financial"
        style={{
          width: "180px",
          height: "auto",
          objectFit: "contain",
        }}
      />
    </div>
  );
}
