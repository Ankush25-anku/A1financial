"use client";

import Link from "next/link";
import { useState } from "react";

export default function Servicesdetailsheader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header-section bg-color-3">
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* LOGO */}
            <div className="logo">
              <Link href="/">
                <img
                  src="/assets/images/logo/logo14.png"
                  alt="A1 Financial"
                  style={{
                    height: "80px", // 🔥 increase more
                    width: "auto",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </Link>
            </div>

            {/* MENU */}
            <div
              className={`menu-area ${menuOpen ? "mobile-menu-active" : ""}`}
            >
              <ul className="menu menu--style1">
                {/* DEMOS MEGA MENU */}
                <li className="megamenu">
                  <a href="/">Home</a>
                </li>

                {/* SERVICES */}
                <li>
                  <a href="#">Services</a>
                  <ul className="submenu">
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <Link href="/service-details">Services Details</Link>
                    </li>
                  </ul>
                </li>

                {/* ABOUT */}
                <li>
                  <a href="#">About</a>
                  <ul className="submenu">
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/price">Price</Link>
                    </li>
                    <li>
                      <Link href="/team">Team</Link>
                    </li>
                    <li>
                      <Link href="/team-2">Team 2</Link>
                    </li>
                    <li>
                      <Link href="/team-details">Team Details</Link>
                    </li>
                  </ul>
                </li>

                {/* PAGES */}
                <li>
                  <a href="#">Pages</a>
                  <ul className="submenu">
                    <li>
                      <Link href="/blogs">Blogs</Link>
                    </li>
                    <li>
                      <Link href="/blog-sidebar">Blog Sidebar</Link>
                    </li>
                    <li>
                      <Link href="/blog-details">Blog Details</Link>
                    </li>
                    <li>
                      <Link href="/signup">Sign Up</Link>
                    </li>
                    <li>
                      <Link href="/signin">Sign In</Link>
                    </li>
                    <li>
                      <Link href="/forgot-pass">Reset Password</Link>
                    </li>
                    <li>
                      <Link href="/404">404 Error</Link>
                    </li>
                  </ul>
                </li>

                {/* CONTACT */}
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* HEADER ACTION */}
            <div className="header-action">
              <div className="menu-area">
                <div className="header-btn">
                  <Link
                    href="/signup"
                    className="trk-btn trk-btn--border trk-btn--primary"
                  >
                    <span>Join Now</span>
                  </Link>
                </div>

                {/* MOBILE MENU ICON */}
                <div
                  className="header-bar d-lg-none home1"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
