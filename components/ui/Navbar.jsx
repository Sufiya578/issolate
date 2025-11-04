"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShoppingBag,
  User,
  Search,
  Menu,
  X,
  ArrowLeft,
  Instagram,
  Twitter,
  Youtube,

} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const router = useRouter();

  // Top bar texts
  const topTexts = [
    "⚡ Free shipping on all orders above ₹999!",
    "🖤 New winter collection just dropped!",
    "🚚 Express delivery available pan India!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % topTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "About us", href: "/about" },
    { name: "Contact us", href: "/contact" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/catalog?query=${searchQuery}`);
      setSearchQuery("");
      setSearchOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* 🖤 Black Top Bar */}
      <div className="bg-black text-white text-sm md:text-sm h-[45px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentTextIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="font-medium text-center px-4"
          >
            {topTexts[currentTextIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* 🌐 Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white shadow-md"
        }`}
      >
        <div className="w-full px-2 md:px-10 flex items-center justify-between h-16">
          {/* LEFT — Desktop Nav Links / Mobile Menu Icon */}
          <div className="flex items-center space-x-6">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden flex items-center justify-center"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
              )}
            </button>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-md font-normal text-gray-700 hover:text-primary hover:underline transition"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* CENTER — Brand Logo */}
          <Link
            href="/"
            className="text-lg sm:text-xl font-extrabold tracking-wider text-gray-700"
          >
            IISO<span className="text-gray-800">·</span>LATE
          </Link>

          {/* RIGHT — Search + Icons */}
          <div className="flex items-center space-x-3 md:space-x-5 text-gray-700">
            {/* Desktop Search Bar */}
            <form
              onSubmit={handleSearch}
              className="hidden md:flex items-center border border-black px-3 py-1 w-60 lg:w-[280px]"
            >
              <input
                type="text"
                placeholder="Search for products"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none text-sm w-full placeholder:text-gray-500"
              />
              <button type="submit">
                <Search className="w-4 h-4 text-black" />
              </button>
            </form>

            {/* Mobile Search Icon */}
            <button className="md:hidden p-1" onClick={() => setSearchOpen(true)}>
              <Search className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
            </button>

            {/* Cart */}
            <ShoppingBag className="w-5 h-5  cursor-pointer hover:text-primary transition" />

            {/* User Icon (desktop) */}
            <User className="hidden md:block w-5 h-5  cursor-pointer hover:text-primary transition" />
          </div>
        </div>
      </div>

      {/* 🧭 SIDEBAR — Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-[calc(4rem+45px)] z-40 transition-transform duration-300 ease-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setSidebarOpen(false)}
        />
        <div className="relative bg-white w-4/5 max-w-xs h-[calc(100vh-4rem)] shadow-xl flex flex-col justify-between px-6 py-8">
          <div>
            <nav className="flex flex-col space-y-6 text-md font-normal text-gray-700 ">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setSidebarOpen(false)}
                  className="hover:text-primary hover:underline transition"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

  {/* Bottom Section — User + Socials */}
<div className="border-t border-gray-200 pt-6 mb-6 text-center">
  <div className="flex items-center justify-center space-x-2">
    <User className="w-6 h-6 text-gray-800" />
    <p className="text-gray-700 text-sm">
      <Link
        href="/login"
        onClick={() => setSidebarOpen(false)}
        className="text-blue-600 font-semibold underline"
      >
        Login
      </Link>{" "}
      to find more products
    </p>
  </div>


          

            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mt-6 text-gray-600">
              <Link href="https://instagram.com" target="_blank">
                <Instagram className="w-5 h-5 hover:text-black transition" />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <Twitter className="w-5 h-5 hover:text-black transition" />
              </Link>
              <Link href="https://youtube.com" target="_blank">
                <Youtube className="w-5 h-5 hover:text-black transition" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 🔍 SEARCH OVERLAY (Mobile) */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-60 flex flex-col"
          >
            <div className="flex items-center px-2 py-3 border-b border-gray-200 shadow-sm">
              <button
                onClick={() => setSearchOpen(false)}
                className="mr-3 p-2 rounded-full hover:bg-gray-100"
              >
                <ArrowLeft className="w-5 h-5 text-gray-700" />
              </button>

              <form onSubmit={handleSearch} className="flex items-center w-full">
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-md px-2 placeholder:text-gray-500"
                />
                <button type="submit" className="p-2">
                  <Search className="w-5 h-5 text-gray-700" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}