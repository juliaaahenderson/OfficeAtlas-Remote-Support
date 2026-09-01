"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Zap,
  BookOpen
} from "lucide-react";

interface RemoteSupportHeroProps {
  onOpenSupportModal: (topic?: string) => void;
}

export default function RemoteSupportHero({ onOpenSupportModal }: RemoteSupportHeroProps) {
  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center overflow-hidden bg-white font-sans">
      
      {/* 1. Full-Width Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">
        <img 
          src="/Remote Support Office App Illustration.jpeg" 
          alt="Remote Support Office App Illustration" 
          className="w-full h-full object-cover object-center lg:object-right"
        />
      </div>

      {/* 2. Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side Texts Directly Over Background Visual */}
          <div className="lg:col-span-8 xl:col-span-7 space-y-7 text-left">

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#0A0F1D] tracking-tight leading-[1.1]"
            >
              Get the Help You Need with{" "}
              <span className="text-[#0078D4] font-semibold">
                Microsoft Office
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-700 font-normal leading-relaxed max-w-2xl"
            >
              Get help with Microsoft 365 and Office installation, activation, setup, updates, and common technical issues.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              {/* Primary CTA: Opens Interactive Remote Support Request Modal */}
              <button
                onClick={() => onOpenSupportModal()}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#0078D4] hover:bg-[#0067b8] text-white text-base font-semibold rounded-xl shadow-lg shadow-[#0078D4]/30 hover:shadow-xl hover:shadow-[#0078D4]/40 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                Get Remote Support
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Secondary CTA: Navigates to Office Guides & Technical Documentation */}
              <Link
                href="/guides"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/90 hover:bg-slate-50 text-[#0A0F1D] text-base font-semibold rounded-xl border border-slate-300 shadow-sm hover:border-slate-400 transition-all cursor-pointer backdrop-blur-xs"
              >
                <BookOpen className="w-4.5 h-4.5 text-[#0078D4]" />
                Explore Office Help
              </Link>
            </motion.div>

            {/* Trust Micro-Bullets */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4 border-t border-slate-300/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs font-medium text-slate-700"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                <span>Fast Guided Assistance</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4.5 h-4.5 text-[#0078D4] shrink-0" />
                <span>Safe Remote Diagnostics</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4.5 h-4.5 text-amber-600 shrink-0" />
                <span>Zero Installation Bloat</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
