"use client";

import React from "react";
import { Button } from "@/components/ui/Button";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg leading-none">A</span>
              </div>
              <span className="font-bold text-2xl tracking-tight">Adhive</span>
            </div>
            <p className="text-muted-foreground mb-8 max-w-sm">
              The AI marketing platform for website growth. Build on-brand pages, identify visitors, and automate SEO.
            </p>
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-muted border border-border rounded-full px-4 py-2 w-full max-w-[200px] focus:outline-none focus:border-primary/50 transition-colors"
              />
              <Button variant="primary" size="sm">Subscribe</Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Product</h4>
            <ul className="flex flex-col gap-3">
              {["AI Website Builder", "Visitor Identification", "Analytics", "Hosting"].map((item) => (
                <li key={item}><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
            <ul className="flex flex-col gap-3">
              {["Blog", "Documentation", "Case Studies", "Help Center"].map((item) => (
                <li key={item}><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="flex flex-col gap-3">
              {["About Us", "Careers", "Contact", "Partners"].map((item) => (
                <li key={item}><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Adhive AI, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
