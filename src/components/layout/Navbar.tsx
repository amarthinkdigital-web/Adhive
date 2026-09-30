"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-full max-w-7xl px-4 md:px-6 ${
        scrolled ? "top-4" : "top-8"
      }`}
    >
      <div className={`flex items-center justify-between transition-all duration-300 rounded-full px-6 ${
        scrolled ? "bg-white/85 backdrop-blur-xl border border-zinc-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-3" : "bg-transparent py-4"
      }`}>
        <Link href="/" className="flex items-center z-10">
          <img src="/images/adhivelogo.png" alt="adhive Logo" className="h-8 w-auto object-contain" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-[15px] font-semibold text-zinc-600 hover:text-orange-500 transition-colors tracking-wide">
            Home
          </Link>
          <Link href="/#what-is-adhive" className="text-[15px] font-semibold text-zinc-600 hover:text-orange-500 transition-colors tracking-wide">
            About adhive
          </Link>
          <Link href="/#how-it-works" className="text-[15px] font-semibold text-zinc-600 hover:text-orange-500 transition-colors tracking-wide">
            How it Works
          </Link>
          <Link href="/#why-adhive" className="text-[15px] font-semibold text-zinc-600 hover:text-orange-500 transition-colors tracking-wide">
            Why adhive
          </Link>
          <Link href="/contact" className="text-[15px] font-semibold text-zinc-600 hover:text-orange-500 transition-colors tracking-wide">
            Contact Us
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4 z-10">
          <Link
            href="/contact"
            className="bg-orange-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-600 transition-all shadow-md shadow-orange-500/20"
          >
            Join the Community
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-20 p-2 -mr-2 text-zinc-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-zinc-100 shadow-xl p-6 flex flex-col gap-4 md:hidden">
            <Link
              href="/"
              className="text-base font-semibold text-zinc-900 py-2 border-b border-zinc-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#what-is-adhive"
              className="text-base font-semibold text-zinc-900 py-2 border-b border-zinc-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              About adhive
            </Link>
            <Link
              href="/#how-it-works"
              className="text-base font-semibold text-zinc-900 py-2 border-b border-zinc-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it Works
            </Link>
            <Link
              href="/#why-adhive"
              className="text-base font-semibold text-zinc-900 py-2 border-b border-zinc-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why adhive
            </Link>
            <Link
              href="/contact"
              className="text-base font-semibold text-zinc-900 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/contact"
              className="mt-4 bg-orange-500 text-white text-center px-5 py-3 rounded-xl text-base font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join the Community
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}