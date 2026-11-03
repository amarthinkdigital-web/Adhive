import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/animated/Reveal";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 max-w-4xl mx-auto px-6">
        <Reveal>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">Privacy Policy</h1>
        </Reveal>
      

        <div className="max-w-none text-zinc-600 space-y-10">
          <p className="text-base leading-relaxed text-zinc-600">
            At Adhive, we respect your privacy and are committed to protecting the personal information you share with us through our website and mobile application.
          </p>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-zinc-900">1. Information We Collect</h2>
            <p className="text-base leading-relaxed">
              We may collect information such as your name, mobile number, email address, location, social media profile details, campaign activity and transaction-related information when you register or use our services.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-zinc-900">2. How We Use Information</h2>
            <p className="text-base leading-relaxed">
              We use collected information to provide and improve our services, manage user accounts, facilitate advertising campaigns, process transactions, verify campaign participation and communicate important updates.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-zinc-900">3. Information Sharing</h2>
            <p className="text-base leading-relaxed">
              We do not sell users&apos; personal information to advertisers or other third parties. We may share necessary information with authorized service providers, payment processors, business partners or regulatory authorities where required to operate our services or comply with applicable law.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-zinc-900">4. Data Security</h2>
            <p className="text-base leading-relaxed">
              We implement reasonable technical and organizational security measures to protect user information against unauthorized access, misuse, alteration or disclosure. However, no digital platform can guarantee absolute security.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-zinc-900">5. Third-Party Services</h2>
            <p className="text-base leading-relaxed">
              Adhive may integrate with third-party platforms, including Instagram and payment service providers such as Razorpay. Information processed through these services may also be subject to their respective privacy policies and terms.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-zinc-900">6. User Rights and Policy Updates</h2>
            <p className="text-base leading-relaxed">
              Users may contact Adhive to request access to, correction of or deletion of their personal information, subject to applicable legal and operational requirements. We may update this Privacy Policy periodically, and revised versions will be published on our website.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
