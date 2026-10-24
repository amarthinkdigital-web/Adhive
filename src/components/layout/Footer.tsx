import React from "react";
import Link from "next/link";
import { Mail } from "lucide-react";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group relative inline-block text-sm text-zinc-400 hover:text-orange-500 transition-colors"
    >
      {children}
      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  // Brief states © 2026 adHive, but we can use dynamic or hardcoded 2026. Let's use 2026.

  return (
    <footer className="bg-zinc-950 text-zinc-300 pt-16 pb-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 mb-12 items-start text-center">
          
          <div className="flex flex-col items-center">
            <Link href="/" className="inline-block mb-6">
              <img src="/images/adhivelogo.png" alt="adHive Logo" className="h-10 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-zinc-400 text-lg mb-2 max-w-sm">
              Hyperlocal Marketing.
              <br />
              Without Burning Your Wallet.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <FooterLink href="/">Home</FooterLink>
              </li>
              <li>
                <FooterLink href="/#what-is-adhive">About adHive</FooterLink>
              </li>
              <li>
                <FooterLink href="/#how-it-works">How it Works</FooterLink>
              </li>
              <li>
                <FooterLink href="/#why-adhive">Why adHive</FooterLink>
              </li>
              <li>
                <FooterLink href="/contact">Contact Us</FooterLink>
              </li>
            </ul>
          </div>

          {/* <div className="flex flex-col items-center">
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <FooterLink href="/terms">Terms of Service</FooterLink>
              </li>
              <li>
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
              </li>
              <li>
                <FooterLink href="/refund">Refund &amp; Cancellation Policy</FooterLink>
              </li>
              <li>
                <FooterLink href="/community-guidelines">Community Guidelines</FooterLink>
              </li>
            </ul>
          </div> */}

        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between pt-12 border-t border-zinc-800/50 gap-4 lg:gap-6">
          <div className="flex items-center gap-4 text-zinc-400 w-full lg:w-auto justify-center lg:justify-start">
            <span className="text-white font-semibold">Follow Us</span>
            <div className="flex items-center gap-4 text-zinc-500">
              <a href="mailto:support@adhive.io" className="hover:text-orange-500 transition-colors" aria-label="Email support@adhive.io">
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/adhiveglobal?obrf=MjhjeHpwZGhqcWRr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1CmP3SDBau/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href="https://x.com/adhiveglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
          <p className="text-sm text-zinc-400 font-medium text-center lg:text-right w-full lg:w-auto py-1">
            © 2026 Adhive Technocrats LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
