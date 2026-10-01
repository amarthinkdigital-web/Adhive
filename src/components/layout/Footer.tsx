import React from "react";
import Link from "next/link";
import { Mail, Globe } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  // Brief states © 2026 adhive, but we can use dynamic or hardcoded 2026. Let's use 2026.

  return (
    <footer className="bg-zinc-950 text-zinc-300 py-16 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 items-start text-center">
          
          <div className="flex flex-col items-center">
            <Link href="/" className="inline-block mb-6">
              <img src="/images/adhivelogo.png" alt="adhive Logo" className="h-10 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-zinc-400 text-lg mb-6 max-w-sm">
              Hyperlocal Marketing.
              <br />
              Without Burning Your Wallet.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-600 transition-all shadow-md shadow-orange-500/20 mb-6"
            >
              Join the Community
            </Link>
            <div className="flex items-center gap-4 text-zinc-500">
              <a href="mailto:support@adhive.io" className="hover:text-orange-500 transition-colors" aria-label="Email support@adhive.io">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors" aria-label="Website">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-zinc-400 hover:text-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#what-is-adhive" className="text-sm text-zinc-400 hover:text-orange-500 transition-colors">
                  About adhive
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-sm text-zinc-400 hover:text-orange-500 transition-colors">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="/#why-adhive" className="text-sm text-zinc-400 hover:text-orange-500 transition-colors">
                  Why adhive
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-zinc-400 hover:text-orange-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="text-sm text-zinc-400 hover:text-orange-500 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-zinc-400 hover:text-orange-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-sm text-zinc-400 hover:text-orange-500 transition-colors">
                  Refund & Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="/community-guidelines" className="text-sm text-zinc-400 hover:text-orange-500 transition-colors">
                  Community Guidelines
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-center pt-8 border-t border-zinc-800/50 gap-6">
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg text-sm text-zinc-400 cursor-not-allowed hover:bg-zinc-800 transition-colors">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-5 opacity-50" />
              <span>Coming Soon</span>
            </button>
            <button className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg text-sm text-zinc-400 cursor-not-allowed hover:bg-zinc-800 transition-colors">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-5 opacity-50" />
              <span>Coming Soon</span>
            </button>
          </div>
          <p className="text-xs text-zinc-500 text-center">
            © 2026 adhive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
