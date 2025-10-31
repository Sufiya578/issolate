"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Heart,
  ShoppingBag,
  User,
  Search,
  Menu,
  X,
  ArrowLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Catalog", href: "/catalog" },
    { name: "Contact", href: "/contact" },
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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white shadow-md"
      }`}
    >
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"> */}
      <div className="w-full  px-2 md:px-10 flex items-center justify-between h-16">
        {/* LEFT — Desktop Nav Links / Mobile Menu Icon */}
        <div className="flex items-center space-x-6">
          {/* Mobile/Tablet Menu Button */}
          <button
            className="md:hidden flex items-center justify-center"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
            )}
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-semibold text-gray-800 hover:text-primary transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* CENTER — Brand Logo */}
        <Link
          href="/"
          className="text-xl sm:text-2xl font-extrabold tracking-wider text-primary"
        >
          ISSO<span className="text-gray-800">·</span>LATE
        </Link>

        {/* RIGHT — Search + Icons */}
        <div className="flex items-center space-x-3 md:space-x-5  text-gray-700">
          {/* Desktop Search Bar */}
          <form
            onSubmit={handleSearch}
            className="hidden md:flex items-center border border-black  px-3 py-1 w-60 lg:w-[280px] focus:outline-none focus:ring-0 focus:border-none"
          >
            <input
              type="text"
              placeholder="Search for products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none focus:ring-0 focus:border-none text-sm w-full placeholder:text-gray-500"
            />
            <button type="submit">
              <Search className="w-4 h-4 text-black" />
            </button>
          </form>

          {/* Mobile Search Icon */}
          <button
            className="md:hidden p-1"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="w-5 h-5 md:w-6 md:h-6 text-gray-800" />
          </button>

          {/* Wishlist (desktop only) */}
          <Heart className="hidden md:block w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:text-primary transition" />

          {/* Cart */}
          <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:text-primary transition" />

          {/* User (desktop only) */}
          <User className="hidden md:block w-5 h-5 md:w-6 md:h-6 cursor-pointer hover:text-primary transition" />
        </div>
      </div>

      {/* 🧭 SIDEBAR — Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-16 z-40 transition-transform duration-300 ease-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setSidebarOpen(false)}
        />

        {/* Sidebar Content */}
        <div className="relative bg-white w-4/5 max-w-xs h-[calc(100vh-4rem)] shadow-xl flex flex-col justify-between px-6 py-8">
          <div>
            <nav className="flex flex-col space-y-6 text-lg font-semibold text-gray-900">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setSidebarOpen(false)}
                  className="hover:text-primary transition"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="border-t border-gray-200 pt-6 text-center">
            <p className="text-gray-600 mb-3 text-sm leading-relaxed">
              Have an account?
              <br />
              <Link
                href="/login"
                className="text-primary font-semibold hover:underline"
                onClick={() => setSidebarOpen(false)}
              >
                Login
              </Link>{" "}
              to find more products.
            </p>
          </div>
        </div>
      </div>

      {/* 🔍 SEARCH OVERLAY (Mobile/Tablet) — Animated */}
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

              <form onSubmit={handleSearch} className="flex items-center w-full focus:outline-none focus:ring-0 focus:border-none">
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent outline-none  focus:ring-0 focus:border-none text-md px-2 placeholder:text-gray-500"
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