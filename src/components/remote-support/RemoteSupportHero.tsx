"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Zap
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

            {/* Premium 1st CTA Presentation (2nd CTA removed as requested) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2"
            >
              <button
                onClick={() => onOpenSupportModal()}
                className="relative group overflow-hidden inline-flex items-center justify-center gap-3 px-9 py-4.5 bg-gradient-to-r from-[#0078D4] via-[#0067b8] to-[#005299] text-white text-base sm:text-lg font-semibold rounded-2xl shadow-xl shadow-[#0078D4]/35 hover:shadow-2xl hover:shadow-[#0078D4]/50 transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300 cursor-pointer ring-4 ring-[#0078D4]/15"
              >
                {/* Subtle Shine Sweep Effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                
                <span className="relative z-10 tracking-wide">Get Remote Support</span>
                <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
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
