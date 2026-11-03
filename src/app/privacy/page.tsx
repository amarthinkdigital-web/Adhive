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
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-10">Privacy Policy</h1>
        </Reveal>

        <div className="max-w-none text-zinc-600 space-y-6">
          <ol className="list-decimal pl-6 space-y-4 text-base leading-relaxed">
            <li>This policy explains how we collect, use, and protect your information when you use our app.</li>
            <li>We collect information you provide (like name and email) and information collected automatically (like device and usage data).</li>
            <li>We use your information to run the app, improve your experience, provide support, and keep it secure.</li>
            <li>We do not sell your data and only share it with trusted service providers or when required by law.</li>
            <li>You can access, update, or delete your information and contact us anytime for any questions.</li>
          </ol>
        </div>
      </section>
      <Footer />
    </main>
  );
}
