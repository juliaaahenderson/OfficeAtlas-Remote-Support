"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

interface FinalCTAProps {
  onOpenSupportModal: (topic?: string) => void;
}

export default function FinalCTA({ onOpenSupportModal }: FinalCTAProps) {
  return (
    <section className="py-10 md:py-14 bg-gradient-to-b from-[#FCFCFC] via-[#F8FAFC] to-[#EDF2F7] text-[#0A0F1D] font-sans relative overflow-hidden border-b border-zinc-200/80">
      
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-[#0078D4]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center space-y-6">
        
        {/* Main Headline & Supporting text */}
        <div className="space-y-3">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-semibold text-[#0A0F1D] tracking-tight leading-tight"
          >
            Ready to Get Your Office Working Again?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed max-w-2xl mx-auto"
          >
            Find the right guidance for installation, activation, setup, and common Microsoft Office issues.
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-1"
        >
          {/* Primary CTA */}
          <button
            onClick={() => onOpenSupportModal()}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0078D4] hover:bg-[#0067b8] text-white text-sm font-semibold rounded-xl shadow-md shadow-[#0078D4]/25 hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            Get Remote Support
            <ArrowRight className="w-4.5 h-4.5" />
          </button>

          {/* Secondary CTA */}
          <Link
            href="/guides"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0A0F1D] hover:bg-slate-800 text-white text-sm font-semibold rounded-xl shadow-sm transition-all cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-[#0078D4]" />
            Browse Office Guides
          </Link>
        </motion.div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-4 border-t border-zinc-200/80 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-[11px] font-medium text-zinc-600"
        >
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Fast Guided Assistance</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0078D4]" />
            <span>256-Bit Encrypted Sessions</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-amber-600" />
            <span>Instant Technical Diagnostics</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
