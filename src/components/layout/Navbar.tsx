"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group relative text-[15px] font-semibold text-zinc-600 hover:text-orange-500 transition-colors tracking-wide"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
        scrolled ? "top-[40px] sm:top-[44px]" : "top-[42px] sm:top-[48px]"
      }`}
    >
      {/* Pill bar — always white bg on mobile, glass on desktop when not scrolled */}
      <div className={`flex items-center justify-between transition-all duration-300 rounded-full px-4 sm:px-6 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border border-zinc-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] py-2.5 sm:py-3"
          : "bg-white md:bg-white/60 border border-zinc-200/50 md:border-white/30 shadow-md md:shadow-sm py-3 sm:py-4"
      }`}>

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center z-10 shrink-0"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <img src="/images/adhivelogo.png" alt="adHive Logo" className="h-7 sm:h-8 w-auto object-contain" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/#what-is-adhive">About adHive</NavLink>
          <NavLink href="/#how-it-works">How it Works</NavLink>
          <NavLink href="/#why-adhive">Why adHive</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center gap-3 z-10">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/adhiveglobal?obrf=MjhjeHpwZGhqcWRr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:scale-110 transition-transform shadow-sm"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1CmP3SDBau/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:scale-110 transition-transform shadow-sm"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-20 p-2 -mr-1 text-zinc-700 hover:text-orange-500 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu — positioned BELOW the pill, no overlap with logo */}
      {mobileMenuOpen && (
        <div className="mt-2 bg-white rounded-2xl border border-zinc-100 shadow-2xl overflow-hidden md:hidden">
          <div className="flex flex-col px-5 pt-2 pb-4">
            <Link
              href="/"
              className="text-[15px] font-semibold text-zinc-800 py-3 border-b border-zinc-100 hover:text-orange-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#what-is-adhive"
              className="text-[15px] font-semibold text-zinc-800 py-3 border-b border-zinc-100 hover:text-orange-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About adHive
            </Link>
            <Link
              href="/#how-it-works"
              className="text-[15px] font-semibold text-zinc-800 py-3 border-b border-zinc-100 hover:text-orange-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it Works
            </Link>
            <Link
              href="/#why-adhive"
              className="text-[15px] font-semibold text-zinc-800 py-3 border-b border-zinc-100 hover:text-orange-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why adHive
            </Link>
            <Link
              href="/contact"
              className="text-[15px] font-semibold text-zinc-800 py-3 border-b border-zinc-100 hover:text-orange-500 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

            {/* Social Buttons */}
            <div className="pt-4 flex flex-col gap-2.5">
              <a
                href="https://www.instagram.com/adhiveglobal?obrf=MjhjeHpwZGhqcWRr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white px-5 py-3 rounded-xl text-[15px] font-semibold hover:opacity-90 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 shrink-0">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                Follow on Instagram
              </a>
              <a
                href="https://www.facebook.com/share/1CmP3SDBau/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#1877F2] text-white px-5 py-3 rounded-xl text-[15px] font-semibold hover:bg-[#1565d8] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
                Follow on Facebook
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}