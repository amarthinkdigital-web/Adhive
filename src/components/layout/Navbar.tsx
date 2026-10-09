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
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-full max-w-7xl px-4 sm:px-5 md:px-6 ${
        scrolled ? "top-2 sm:top-4" : "top-3 sm:top-5 lg:top-8"
      }`}
    >
      <div className={`flex items-center justify-between transition-all duration-300 rounded-full px-4 sm:px-6 ${
        scrolled ? "bg-white/85 backdrop-blur-xl border border-zinc-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-2.5 sm:py-3" : "bg-transparent py-3 sm:py-4"
      }`}>
        <Link href="/" className="flex items-center z-10 shrink-0">
          <img src="/images/adhivelogo.png" alt="adhive Logo" className="h-7 sm:h-8 w-auto object-contain" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
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
        <div className="hidden lg:flex items-center gap-4 z-10 shrink-0">
          <Link
            href="/contact"
            className="bg-orange-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-600 transition-all shadow-md shadow-orange-500/20 whitespace-nowrap"
          >
            Join the Community
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden z-20 p-2 -mr-2 text-zinc-600 shrink-0"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-zinc-100 rounded-3xl shadow-xl p-4 sm:p-6 flex flex-col gap-1 lg:hidden max-h-[75vh] overflow-y-auto overscroll-contain">
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
              className="mt-3 bg-orange-500 text-white text-center px-5 py-3 rounded-xl text-base font-semibold"
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