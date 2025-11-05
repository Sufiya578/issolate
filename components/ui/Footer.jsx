"use client";

import Link from "next/link";
import { Instagram, Facebook, X, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-background bg-foreground py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">

        {/* === Top Footer Grid === */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* --- Brand Section --- */}
          <div>
            {/* Title + Socials for mobile/tablet */}
            <div className="flex items-start justify-between">
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-wide mb-3">
                ISSO<span className="text-primary">·</span>LATE
              </h2>

              {/* Social Icons (only visible on mobile & tablet) */}
              <div className="flex space-x-3 text-muted-foreground lg:hidden">
                <Link href="#" className="text-background hover:opacity-90 hover:-translate-y-1 transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-background hover:opacity-90 hover:-translate-y-1 transition-all duration-300">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-background hover:opacity-90 hover:-translate-y-1 transition-all duration-300">
                  <X className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-background hover:opacity-90 hover:-translate-y-1 transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Summarized Brand Text */}
            <p className=" opacity-90 leading-relaxed mb-3 text-xs sm:text-sm">
              Premium men’s tees designed for comfort, confidence, and effortless style.
            </p>

            {/* Contact Info */}
            <div className=" opacity-90 leading-relaxed space-y-1 text-xs sm:text-sm">
              {/* <p>Email: <a href="mailto:info@iisolate.com" className="underline text-background">info@iisolate.com</a></p> */}
              <p>Address: PB Road Jugsalai, Jamshedpur -831006</p>
              <p>Phone: <a href="tel:+917761883497" className="underline text-background">+91 7761883497</a></p>

            </div>
          </div>

          {/* --- Quick Links + Support --- */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-2">
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Quick Links
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><Link href="/" className="opacity-90 hover:underline hover:text-background hover:ml-1 transition-all duration-300">Home</Link></li>
                <li><Link href="/shop" className="opacity-90 hover:underline hover:text-background hover:ml-1 transition-all duration-300">Shop</Link></li>
                <li><Link href="/about" className="opacity-90 hover:underline hover:text-background hover:ml-1 transition-all duration-300">About Us</Link></li>
                <li><Link href="/contact" className="opacity-90 hover:underline hover:text-background hover:ml-1 transition-all duration-300">Contact</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Support
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><Link href="/ReturnExchange" className="opacity-90 hover:underline hover:text-background hover:ml-1 transition-all duration-300">Returns & Exchange</Link></li>
                <li><Link href="/PrivacyPolicy" className="opacity-90 hover:underline hover:text-background hover:ml-1 transition-all duration-300">Privacy Policy</Link></li>
                <li><Link href="/fraudScam" className="opacity-90 hover:underline hover:text-background hover:ml-1 transition-all duration-300">Fraud & Scam Awareness</Link></li>
              </ul>
            </div>
          </div>

          {/* --- Socials (desktop only) --- */}
          <div className="hidden lg:block">
            <h3 className="font-semibold mb-4">Follow us</h3>
            <div className="flex space-x-4 text-muted-foreground">
              <Link href="#" className="text-background hover:opacity-90 hover:-translate-y-1 transition-all duration-300"><Instagram className="w-5 h-5" /></Link>
              <Link href="#" className="text-background hover:opacity-90 hover:-translate-y-1 transition-all duration-300"><Facebook className="w-5 h-5" /></Link>
              <Link href="#" className="text-background hover:opacity-90 hover:-translate-y-1 transition-all duration-300"><X className="w-5 h-5" /></Link>
              <Link href="#" className="text-background hover:opacity-90 hover:-translate-y-1 transition-all duration-300"><Mail className="w-5 h-5" /></Link>
            </div>
          </div>
        </div>

        {/* === Bottom Line === */}
        <div className="text-center text-xs sm:text-sm text-background border-t border-border mt-5 pt-5">
          © {new Date().getFullYear()} ISSO·LATE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}