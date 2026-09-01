"use client";

import { motion } from "framer-motion";
import { 
  FileCheck, 
  Target, 
  Sparkles, 
  Search,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

const benefits = [
  {
    title: "Clear Guidance",
    description: "Straightforward information formatted without unnecessary technical jargon.",
    pillTag: "Plain-English Workflows",
    icon: FileCheck,
    accentBg: "bg-blue-50 text-[#0078D4] border-blue-200/80",
    pillBg: "bg-blue-100/70 text-[#0078D4]"
  },
  {
    title: "Office-Focused",
    description: "Resources designed exclusively around Microsoft Office and Microsoft 365.",
    pillTag: "M365 & Legacy Suite Coverage",
    icon: Target,
    accentBg: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
    pillBg: "bg-emerald-100/70 text-emerald-700"
  },
  {
    title: "Easy to Follow",
    description: "Simple, logical steps for common installation, activation, and setup needs.",
    pillTag: "Step-by-Step Resolution Paths",
    icon: Sparkles,
    accentBg: "bg-indigo-50 text-indigo-600 border-indigo-200/80",
    pillBg: "bg-indigo-100/70 text-indigo-700"
  },
  {
    title: "Research-Driven",
    description: "Helpful information organized systematically to make finding answers easier.",
    pillTag: "Empirically Verified Guides",
    icon: Search,
    accentBg: "bg-purple-50 text-purple-600 border-purple-200/80",
    pillBg: "bg-purple-100/70 text-purple-700"
  }
];

export default function WhyOfficeAtlasTrust() {
  return (
    <section className="py-14 md:py-20 bg-[#FCFCFC] font-sans border-b border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-semibold text-[#0A0F1D] tracking-tight"
          >
            Why Use OfficeAtlas?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed"
          >
            We simplify complex Microsoft Office workflows and technical hurdles into clear, structured resolution paths.
          </motion.p>
        </div>

        {/* Premium 4-Card Elevated Grid (Light Mode) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group bg-white border border-zinc-200/90 hover:border-[#0078D4]/40 rounded-3xl p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Icon Container */}
                  <div className={`w-14 h-14 rounded-2xl border ${item.accentBg} flex items-center justify-center transition-transform group-hover:scale-105 duration-300 shadow-2xs`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-[#0A0F1D]">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Pill Footnote Tag */}
                <div className="pt-5 mt-5 border-t border-zinc-100">
                  <span className={`inline-block text-[11px] font-semibold px-3 py-1 rounded-full ${item.pillBg}`}>
                    {item.pillTag}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Premium Trust Assurance Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#0A0F1D] text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0078D4] flex items-center justify-center text-white shrink-0 shadow-md">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-semibold text-white">Independent Educational & Diagnostic Platform</h4>
              <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed mt-0.5 max-w-2xl">
                OfficeAtlas is dedicated to organizing Microsoft Office setup workflows and troubleshooting procedures into clear, accessible documentation.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-4 py-2 rounded-xl shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Verified Knowledge Base</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
