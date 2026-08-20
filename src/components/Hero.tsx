"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#home") {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-[#FCFCFC]"
    >
      {/* Full-width background image in original colors */}
      <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none">
        <img
          src="/bg%20visual.jpg"
          alt="Microsoft 365 Background Visual Map"
          className="w-full h-full object-cover object-right"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10">
        {/* Texts positioned on the left side */}
        <div className="max-w-2xl flex flex-col items-start text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-[56px] font-sans font-semibold tracking-tight text-[#0A0F1D] leading-[1.08] mb-8"
          >
            Understand <br />
            Microsoft 365. <br />
            <span className="text-[#002060]">Beyond the Basics.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-base sm:text-[17px] text-zinc-600 font-normal leading-relaxed max-w-lg mb-10"
          >
            Explore Microsoft 365, Office applications, plans, features,
            installation guides, product comparisons, activation information, and
            in-depth research — all in one place.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-12"
          >
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#002060] text-white text-[14px] font-bold rounded-lg hover:bg-[#002060]/90 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
            >
              Explore the Ecosystem
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-zinc-700 text-[14px] font-bold rounded-lg border border-zinc-200 hover:border-zinc-300 transition-all duration-300 cursor-pointer"
            >
              Read Latest Research
            </Link>
          </motion.div>

          {/* Social Proof Avatars */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex items-center gap-4"
          >
            <div className="flex -space-x-3">
              {[
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&fit=crop&q=80",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&fit=crop&q=80",
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&fit=crop&q=80",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&fit=crop&q=80",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="User avatar"
                  className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm"
                />
              ))}
            </div>
            <p className="text-xs text-zinc-500 font-medium leading-tight max-w-[200px]">
              Trusted by Learners, Professionals and Organizations worldwide
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
