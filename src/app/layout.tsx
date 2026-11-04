import type { Metadata, Viewport } from "next";
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

const siteUrl = "https://adhiveglobal.com";
const siteName = "adHive";
const siteDescription =
  "adHive is a people-powered, hyperlocal marketing platform. Businesses reach real local customers through community members who share promotions on social media, and Sharer earn rewards for genuine local reach.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: "adHive — Hyperlocal Marketing Platform for Local Businesses",
    template: "%s | adHive",
  },
  description: siteDescription,
  keywords: [
    "adHive",
    "hyperlocal marketing",
    "hyperlocal advertising",
    "local business marketing",
    "local advertising platform",
    "social media marketing India",
    "promote local business",
    "sharer rewards",
    "Nashik marketing platform",
  ],
  authors: [{ name: "Adhive Technocrats LLP", url: siteUrl }],
  creator: "Adhive Technocrats LLP",
  publisher: "Adhive Technocrats LLP",
  category: "Marketing",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName,
    title: "adHive — Hyperlocal Marketing Platform for Local Businesses",
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "adHive — Hyperlocal Marketing Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@adhiveglobal",
    creator: "@adhiveglobal",
    title: "adHive — Hyperlocal Marketing Platform for Local Businesses",
    description: siteDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0a09",
  colorScheme: "light",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      legalName: "Adhive Technocrats LLP",
      url: siteUrl,
      logo: `${siteUrl}/icon.png`,
      description: siteDescription,
      email: "contact@adhiveglobal.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nashik",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.instagram.com/adhiveglobal",
        "https://www.facebook.com/share/1CmP3SDBau/",
        "https://x.com/adhiveglobal",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${outfit.variable}`}>
      <body className="antialiased font-sans flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
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
