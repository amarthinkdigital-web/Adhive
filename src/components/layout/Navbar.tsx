"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

function NavLink({
  href,
  children,
  onClick,
  active = false,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className={`group relative inline-flex items-center rounded-full px-3 lg:px-4 py-1.5 lg:py-2 text-sm lg:text-[15px] font-medium tracking-wide transition-all duration-300 ${
        active
          ? "text-orange-600 bg-orange-50/80"
          : "text-zinc-700 hover:text-orange-600 hover:bg-orange-50/40"
      }`}
    >
      <span className="relative z-10">{children}</span>
      <span
        className={`absolute bottom-0.5 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-orange-500 transition-all duration-300 ${
          active ? "w-5 opacity-100" : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-100"
        }`}
      />
    </Link>
  );
}

const MOBILE_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#what-is-adhive", label: "About adHive" },
  { href: "/#how-it-works", label: "How it Works" },
  { href: "/#why-adhive", label: "Why adHive" },
  { href: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const scrollTopOnRouteChange = useRef(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/" && hash === href.slice(1);
    if (href === "/") return pathname === "/" && !hash;
    return pathname === href;
  };

  // Close the mobile dropdown on every route change
  const [lastPathname, setLastPathname] = useState(pathname);
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setMobileMenuOpen(false);
  }

  // When the logo sends us to "/" from another page, land on the very top
  useEffect(() => {
    if (!scrollTopOnRouteChange.current) return;
    scrollTopOnRouteChange.current = false;
    const id = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    });
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  const goToHomeTop = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      e.preventDefault();
      setMobileMenuOpen(false);

      if (pathname === "/") {
        if (window.location.hash) {
          router.replace("/", { scroll: false });
        }
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } else {
        scrollTopOnRouteChange.current = true;
        router.push("/", { scroll: false });
      }
    },
    [pathname, router]
  );

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
          onClick={goToHomeTop}
          aria-label="adHive Home"
        >
          <img src="/images/adhivelogo.png" alt="adHive Logo" className="h-7 sm:h-8 w-auto object-contain" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          <NavLink href="/" onClick={goToHomeTop} active={isActive("/")}>Home</NavLink>
          <NavLink href="/#what-is-adhive" active={isActive("/#what-is-adhive")}>About adHive</NavLink>
          <NavLink href="/#how-it-works" active={isActive("/#how-it-works")}>How it Works</NavLink>
          <NavLink href="/#why-adhive" active={isActive("/#why-adhive")}>Why adHive</NavLink>
          <NavLink href="/contact" active={isActive("/contact")}>Contact Us</NavLink>
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3 z-10">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/adhiveglobal?obrf=MjhjeHpwZGhqcWRr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 lg:w-9 lg:h-9 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white hover:scale-110 transition-transform shadow-sm"
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
            className="w-8 h-8 lg:w-9 lg:h-9 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:scale-110 transition-transform shadow-sm"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          {/* X (Twitter) */}
          <a
            href="https://x.com/adhiveglobal"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 lg:w-9 lg:h-9 flex items-center justify-center rounded-full bg-zinc-900 text-white hover:scale-110 hover:bg-black transition-all shadow-sm"
            aria-label="X (Twitter)"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 lg:w-4 lg:h-4">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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
          <div className="flex flex-col px-3 pt-2 pb-4">
            {MOBILE_LINKS.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center justify-between rounded-xl px-3 py-3 text-[15px] font-semibold transition-colors ${
                    active ? "bg-orange-50 text-orange-600" : "text-zinc-800 hover:bg-zinc-50 hover:text-orange-500"
                  }`}
                  onClick={item.href === "/" ? goToHomeTop : () => setMobileMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  <span
                    className={`h-1.5 w-1.5 rounded-full bg-orange-500 transition-opacity ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </Link>
              );
            })}

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
              <a
                href="https://x.com/adhiveglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-zinc-900 text-white px-5 py-3 rounded-xl text-[15px] font-semibold hover:bg-black transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Follow on X
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}