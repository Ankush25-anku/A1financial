"use client";

import Link from "next/link";

export default function Header1() {
  return (
    <header className="header-section header-section--style2">
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">

            {/* LOGO */}
            <div className="logo">
              <Link href="/">
                <img
                  className="dark"
                  src="/assets/images/logo/logo15.png"
                  alt="A1 Financial"
                />
              </Link>
            </div>


            {/* MENU */}
            <div className="menu-area">
              <ul className="menu menu--style1">

                <li className="megamenu">
                  <Link href="/">Home</Link>
                </li>

                <li>
                  <Link href="/services">
                    Services
                  </Link>
                </li>

                <li>
                  <Link href="/about">
                    About
                  </Link>
                </li>

                <li>
                  <Link href="/blogs">
                    Blogs
                  </Link>
                </li>

                <li>
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </li>

              </ul>
            </div>


            {/* RIGHT ACTION */}
            <div className="header-action">
              <div className="menu-area">

                <div className="header-btn">
                  <Link
                    href="/contact"
                    className="trk-btn trk-btn--border trk-btn--primary"
                  >
                    <span>
                      Get Consultation
                    </span>
                  </Link>
                </div>


                {/* MOBILE TOGGLE */}
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