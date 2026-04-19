"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header2() {
  return (
    <header className="header-section header-section--style2">
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo">
              <Link href="/">
                <Image
                  className="dark"
                  src="/assets/images/logo/logo.png"
                  alt="logo"
                  width={160}
                  height={50}
                />
              </Link>
            </div>

            <div className="menu-area">
              <ul className="menu menu--style1">
                <li className="megamenu">
                  <Link href="#">Demos</Link>

                  <ul className="submenu">
                    <li>
                      <div className="home-showcase">
                        <div className="row g-4 row-cols-2 row-cols-md-3 row-cols-lg-4">
                          <div className="col">
                            <div className="home-showcase__item">
                              <div className="home-showcase__image">
                                <Image
                                  src="/assets/images/demo/1.png"
                                  alt="home"
                                  width={300}
                                  height={220}
                                />

                                <div className="home-showcase__buttons">
                                  <Link
                                    href="/"
                                    className="trk-btn trk-btn--primary home-showcase__buttons-item mt-3"
                                  >
                                    <span>Preview</span>
                                  </Link>
                                </div>
                              </div>

                              <h3 className="home-showcase__title">
                                <Link href="/">Stock Trading</Link>
                              </h3>
                            </div>
                          </div>

                          <div className="col">
                            <div className="home-showcase__item">
                              <div className="home-showcase__image">
                                <Image
                                  src="/assets/images/demo/2.png"
                                  alt="home"
                                  width={300}
                                  height={220}
                                />

                                <div className="home-showcase__buttons">
                                  <Link
                                    href="/"
                                    className="trk-btn trk-btn--primary home-showcase__buttons-item mt-3"
                                  >
                                    <span>Preview</span>
                                  </Link>
                                </div>
                              </div>

                              <h3 className="home-showcase__title">
                                <Link href="/">Crypto Trading</Link>
                              </h3>
                            </div>
                          </div>

                          <div className="col">
                            <div className="home-showcase__item">
                              <div className="home-showcase__image">
                                <Image
                                  src="/assets/images/demo/new.png"
                                  alt="home"
                                  width={300}
                                  height={220}
                                />
                              </div>

                              <h3 className="home-showcase__title">
                                <Link href="#">New Demos</Link>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
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
            </div>

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
