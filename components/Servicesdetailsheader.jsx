"use client";

import Link from "next/link";
import { useState } from "react";

export default function Servicesdetailsheader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-section bg-color-3" data-bs-theme="light">
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* LOGO */}
            <div className="logo">
              <Link href="/">
                <img
                  src="/assets/images/logo/a1financial_tbg.png"
                  alt="A1 Financial"
                  style={{
                    height: "80px",
                    width: "auto",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </Link>
            </div>

            {/* MENU */}
            {/* MENU */}
            <div className="menu-area">
              {/* desktop menu */}
              <ul className="menu menu--style1 d-none d-lg-flex">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>

              {/* mobile menu */}
              {menuOpen && (
                <ul
                  style={{
                    position: "fixed",
                    top: "80px",
                    left: "0",
                    right: "0",
                    background: "#fff",
                    zIndex: "999999",
                    padding: "25px",
                    listStyle: "none",
                    boxShadow: "0 10px 30px rgba(0,0,0,.08)",
                  }}
                  className="d-lg-none"
                >
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/blogs">Blogs</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              )}
            </div>

            {/* HEADER ACTION */}
            <div className="header-action">
              <div className="header-btn d-none d-lg-block">
                <Link
                  href="/contact"
                  className="trk-btn trk-btn--border trk-btn--primary"
                >
                  <span>Join Now</span>
                </Link>
              </div>

              {/* MOBILE HAMBURGER */}
              <div
                className="header-bar d-lg-none home1"
                onClick={() => {
                  setMenuOpen(!menuOpen);
                }}
                style={{ cursor: "pointer" }}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
