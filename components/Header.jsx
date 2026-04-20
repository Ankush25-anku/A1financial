"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="header-section header-section--style2">
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* LOGO */}
            <div className="logo">
              <Link href="/">
                <img
                  src="/assets/images/logo/logo15.png"
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
            <div className="menu-area">
              <ul className="menu menu--style1">
                {/* DEMOS */}
                <li className="megamenu">
                  <a href="">Home</a>
                </li>

                {/* SERVICES */}
                <li>
                  <a href="#">Services</a>
                  <ul className="submenu">
                    <li>
                      <Link href="/services">Services</Link>
                    </li>
                    <li>
                      <Link href="/service-details">Service Details</Link>
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
                  </ul>
                </li>

                {/* BANK & LOANS */}
                {/* 🔥 BANK & LOANS MEGA MENU */}

                {/* PAGES */}
                <li>
                  <a href="#">Pages</a>
                  <ul className="submenu">
                    <li>
                      <Link href="/blogs">Blogs</Link>
                    </li>
                    <li>
                      <Link href="/signin">Sign In</Link>
                    </li>
                    <li>
                      <Link href="/signup">Sign Up</Link>
                    </li>
                  </ul>
                </li>

                {/* CONTACT */}
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE */}
            <div className="header-action">
              <div className="menu-area">
                <div className="header-btn">
                  <Link
                    href="/contact"
                    className="trk-btn trk-btn--border trk-btn--primary"
                  >
                    Join Now
                  </Link>
                </div>

                {/* MOBILE MENU ICON */}
                <div className="header-bar d-lg-none header-bar--style1">
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
