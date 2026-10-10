"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { Compass, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background selection:bg-zinc-200">
      <Navbar />

      <section className="relative pt-40 pb-32 md:pt-52 md:pb-40 overflow-hidden">
        {/* Dot pattern background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNlNGU0ZTciLz48L3N2Zz4=')] opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

        <div className="max-w-2xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-zinc-50 text-xs font-semibold text-zinc-600 mb-8">
              <Compass className="w-3.5 h-3.5" />
              Error 404
            </div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="text-8xl md:text-9xl font-extrabold tracking-tight bg-gradient-to-br from-zinc-900 via-zinc-600 to-zinc-400 bg-clip-text text-transparent leading-none mb-6"
            >
              404
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              This page left the building.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-md mb-10 leading-relaxed"
            >
              The page you're looking for doesn't exist, was moved, or never shipped. Let's get you back on track.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/">
                <Button variant="primary" size="lg" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
              <Link href="/resources">
                <Button variant="outline" size="lg" className="gap-2">
                  <Search className="w-4 h-4" />
                  Browse Resources
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}