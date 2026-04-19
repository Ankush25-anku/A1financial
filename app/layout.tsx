import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Preloader from "@/components/Preloader";

import Servicesdetailsheader from "@/components/Servicesdetailsheader";
import ThemeToggle from "@/components/ThemeToggle";
import AOSInit from "@/components/AOSInit"; // ✅ NEW
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A1 Financial | Crypto, Forex, Stocks & Trading Services",
  description:
    "A1 Financial - Professional platform for crypto, forex, stocks & trading business.",
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
        {/* ✅ Favicon */}
        <link rel="icon" href="/assets/images/favicon.png" />

        {/* ✅ CSS FILES */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/aos.css" />
        <link rel="stylesheet" href="/assets/css/all.min.css" />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>

      <body className="min-h-screen">
        {/* ✅ Preloader */}
        <Preloader />

        {/* ✅ Theme Toggle */}
        <ThemeToggle />
           <Servicesdetailsheader />
        {/* ✅ Header */}
      

        {/* ✅ AOS INIT (CLIENT SIDE ONLY) */}
        <AOSInit />

        {/* ✅ Page Content */}
        {children}
<Footer />
        {/* ================= SCRIPTS ================= */}

        {/* Bootstrap */}
        <Script
          src="/assets/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />

        {/* Icons */}
        <Script src="/assets/js/all.min.js" strategy="afterInteractive" />

        {/* Swiper */}
        <Script
          src="/assets/js/swiper-bundle.min.js"
          strategy="afterInteractive"
        />

        {/* Other Scripts */}
        <Script src="/assets/js/fslightbox.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/purecounter_vanilla.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/custom.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}