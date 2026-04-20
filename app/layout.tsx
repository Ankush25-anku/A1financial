import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Preloader from "@/components/Preloader";
import Servicesdetailsheader from "@/components/Servicesdetailsheader";
import ThemeToggle from "@/components/ThemeToggle";
import AOSInit from "@/components/AOSInit";
import Script from "next/script";
import Footer from "@/components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "A1 Financial Services | Property Advisory, Home Loans & Investment Solutions",
  description:
    "A1 Financial Services offers trusted property advisory, home loan assistance, real estate investment guidance, and strategic financial solutions for individuals and businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-bs-theme="light"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/aos.css" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>

      <body className="min-h-screen">

        <Preloader />

        <ThemeToggle />

        <Servicesdetailsheader />

        <AOSInit />

        {/* moved INSIDE body (important fix) */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          aria-label="Chat on WhatsApp"
        >
          <img
            src="/assets/images/whatsapp.png"
            alt="WhatsApp"
          />
        </a>

        {children}
      <Footer />

        <Script
          src="/assets/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/all.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/swiper-bundle.min.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/fslightbox.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/purecounter_vanilla.js"
          strategy="afterInteractive"
        />

        <Script
          src="/assets/js/custom.js"
          strategy="afterInteractive"
        />

      </body>
    </html>
  );
}