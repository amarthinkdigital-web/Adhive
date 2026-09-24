"use client";

import React, { useEffect, useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import gsap from "gsap";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.out"
      });
      
      gsap.to(".floating-orb", {
        y: -30,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-[#fafafa] text-[#09090b] flex flex-col" ref={containerRef}>
      <Navbar />

      <section className="flex-1 relative overflow-hidden pt-32 pb-24 flex items-center">
        {/* Background Effects */}
        <div className="floating-orb absolute top-20 left-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="floating-orb absolute bottom-0 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" style={{ animationDelay: '-2s' }} />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Content */}
          <div className="max-w-xl">
            <div className="animate-item inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-200 bg-violet-50 text-xs font-semibold text-violet-700 mb-6">
              Contact Us
            </div>
            <h1 className="animate-item text-5xl md:text-6xl font-bold tracking-tight mb-6 text-zinc-900">
              Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600">amazing.</span>
            </h1>
            <p className="animate-item text-lg text-zinc-600 mb-12">
              Have a project in mind? We'd love to hear about it. Reach out to us and let's turn your vision into a reality with engineering precision.
            </p>
            
            <div className="space-y-6">
              <div className="animate-item flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center group-hover:border-violet-300 group-hover:bg-violet-50 transition-colors">
                  <Mail className="w-5 h-5 text-violet-600" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium">Email Us</p>
                  <a href="mailto:hello@adhive.app" className="text-lg font-semibold text-zinc-800 hover:text-violet-600 transition-colors">hello@adhive.app</a>
                </div>
              </div>

              <div className="animate-item flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center group-hover:border-blue-300 group-hover:bg-blue-50 transition-colors">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium">Visit Us</p>
                  <p className="text-lg font-semibold text-zinc-800">San Francisco, CA</p>
                </div>
              </div>

              <div className="animate-item flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center group-hover:border-pink-300 group-hover:bg-pink-50 transition-colors">
                  <Phone className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 font-medium">Call Us</p>
                  <a href="tel:+15551234567" className="text-lg font-semibold text-zinc-800 hover:text-pink-600 transition-colors">+1 (555) 123-4567</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="animate-item bg-white border border-zinc-200 p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent rounded-3xl pointer-events-none" />
            
            <form className="relative z-10 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-700">First Name</label>
                  <input type="text" placeholder="John" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 transition-all text-zinc-900 placeholder:text-zinc-400" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-700">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 transition-all text-zinc-900 placeholder:text-zinc-400" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-700">Email Address</label>
                <input type="email" placeholder="john@company.com" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 transition-all text-zinc-900 placeholder:text-zinc-400" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-700">Message</label>
                <textarea rows={5} placeholder="Tell us about your project..." className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 transition-all text-zinc-900 placeholder:text-zinc-400 resize-none" />
              </div>

              <Button 
                variant="primary" 
                size="lg" 
                className="w-full mt-2 gap-2 flex items-center justify-center py-6 group"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                  border: "none",
                  boxShadow: "0 8px 32px rgba(124,58,237,0.30)",
                }}
              >
                Send Message
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
