import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/animated/ScrollProgress";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "adhive | Hyperlocal Marketing",
  description: "Hyperlocal Marketing. Without Burning Your Wallet. adhive helps businesses promote their products and services through real people in their local community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${outfit.variable}`}>
      <body className="antialiased font-sans flex flex-col min-h-screen">
        <ScrollProgress />
        {/* Top Banner — strict single-line on all screens */}
        <div className="bg-zinc-900 text-white text-center py-2 px-3 text-[11px] sm:text-sm font-medium z-[60] relative flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap">
          <span className="hidden sm:inline bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shrink-0">Coming Soon</span>
          <span className="hidden sm:inline truncate">The smarter way to reach your local audience. Launching soon on Android &amp; iOS.</span>
          <span className="sm:hidden">🚀 adHive launching soon on Android &amp; iOS</span>
        </div>
        
        {children}
      </body>
    </html>
  );
}
