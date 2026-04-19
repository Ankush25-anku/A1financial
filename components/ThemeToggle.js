"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-bs-theme", savedTheme);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-bs-theme", newTheme);
  };

  return (
    <div className="lightdark-switch">
      <span className="switch-btn" onClick={toggleTheme}>
        <img
          src={
            theme === "light"
              ? "/assets/images/icon/moon.svg"
              : "/assets/images/icon/sun.svg"
          }
          alt="theme switch"
          className="swtich-icon"
        />
      </span>
    </div>
  );
}
