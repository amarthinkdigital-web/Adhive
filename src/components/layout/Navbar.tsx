"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Menu, X, ChevronDown, Zap } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navItems = [
  {
    name: "Product",
    href: "/product",
    dropdown: [
      { name: "Visitor Identification", href: "/product/visitor-identification", desc: "Unmask anonymous traffic.", icon: "👤" },
      { name: "Real-time Analytics", href: "/product/analytics", desc: "Privacy-first insights.", icon: "📊" },
      { name: "Automated Workflows", href: "/product/workflows", desc: "Trigger personalized outreach.", icon: "🔁" },
    ]
  },
  {
    name: "Solutions",
    href: "/solutions",
    dropdown: [
      { name: "For Startups", href: "/solutions#startups", desc: "Scale faster with limited resources.", icon: "🚀" },
      { name: "For Enterprises", href: "/solutions#enterprise", desc: "Security, control, and volume.", icon: "🏢" },
      { name: "For Marketing Agencies", href: "/solutions#agencies", desc: "Deliver ROI to clients faster.", icon: "💼" },
    ]
  },
  {
    name: "Resources",
    href: "/resources",
    dropdown: [
      { name: "Blog & News", href: "/resources#blog", desc: "Latest updates and growth tips.", icon: "📝" },
      { name: "Documentation", href: "/resources#docs", desc: "Technical guides and API references.", icon: "📖" },
      { name: "Case Studies", href: "/resources#case-studies", desc: "How companies grow with Adhive.", icon: "📈" },
      { name: "Community Forum", href: "/resources#community", desc: "Connect with other builders.", icon: "💬" },
    ]
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Contact",
    href: "/contact",
  }
];

export const Navbar = () => {
  const router = useRouter();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setActiveDropdown(null);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 20);
  });

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-xl border-b border-zinc-200/80 shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
          : "bg-transparent border-b border-transparent"
      }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <nav className="w-full max-w-7xl flex items-center justify-between px-6 py-4 mx-auto relative">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 z-10 group" onClick={() => setActiveDropdown(null)}>
          <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center shadow-sm group-hover:bg-zinc-700 transition-colors">
            <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-lg tracking-tight text-zinc-900">Adhive</span>
        </Link>

        {/* Desktop Nav Links — centered */}
        <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative flex items-center"
              onMouseEnter={() => setActiveDropdown(item.name)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                  activeDropdown === item.name
                    ? "text-zinc-900 bg-zinc-100"
                    : "text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50"
                }`}
              >
                {item.name}
                {item.dropdown && (
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === item.name ? "rotate-180 text-zinc-700" : "text-zinc-400"
                    }`}
                  />
                )}
              </Link>

              {/* Dropdown */}
              {item.dropdown && (
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
                      style={{ minWidth: "320px" }}
                    >
                      {/* Invisible bridge */}
                      <div className="absolute -top-3 left-0 w-full h-3 bg-transparent" />
                      
                      <div className="bg-white border border-zinc-200 rounded-xl shadow-lg shadow-zinc-900/8 overflow-hidden">
                        {/* Header accent strip */}
                        <div className="px-4 py-3 bg-zinc-50 border-b border-zinc-100">
                          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">{item.name}</p>
                        </div>
                        
                        <div className="p-2">
                          {item.dropdown.map((drop) => (
                            <Link
                              key={drop.name}
                              href={drop.href}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-zinc-50 transition-colors group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center text-sm shrink-0 group-hover:bg-zinc-200 transition-colors">
                                {drop.icon}
                              </div>
                              <div>
                                <p className="font-semibold text-sm text-zinc-900 group-hover:text-zinc-700 leading-tight mb-0.5">
                                  {drop.name}
                                </p>
                                <p className="text-xs text-zinc-500 leading-snug">
                                  {drop.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3 z-10">
          <Link
            href="#"
            className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors px-3 py-2 rounded-lg hover:bg-zinc-50"
          >
            Log in
          </Link>
          <Button variant="primary" size="sm" className="rounded-lg text-sm px-4 py-2 font-semibold shadow-sm" onClick={() => router.push('/contact')}>
            Get Started
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-zinc-600 hover:bg-zinc-100 transition-colors z-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-zinc-200 overflow-y-auto max-h-[80vh]"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <div key={item.name} className="flex flex-col">
                  <Link
                    href={item.href}
                    className="text-base font-semibold text-zinc-900 py-2 px-3 rounded-lg hover:bg-zinc-50 transition-colors"
                    onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="flex flex-col pl-4 mb-2">
                      {item.dropdown.map((drop) => (
                        <Link
                          key={drop.name}
                          href={drop.href}
                          className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 py-2 px-3 rounded-lg hover:bg-zinc-50 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="text-base">{drop.icon}</span>
                          {drop.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="h-px w-full bg-zinc-100 my-2" />
              <Button variant="outline" className="w-full justify-center rounded-lg">Log in</Button>
              <Button variant="primary" className="w-full justify-center rounded-lg mt-1" onClick={() => router.push('/contact')}>Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};