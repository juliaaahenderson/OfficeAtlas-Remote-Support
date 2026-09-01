"use client";

import { motion } from "framer-motion";
import { 
  MessageSquareText, 
  Wifi, 
  UserCheck, 
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description: "Select your Microsoft Office issue (installation, activation, sign-in, or app errors).",
    microHighlight: "Quick 1-minute request form",
    icon: MessageSquareText,
    accentBg: "bg-blue-50 text-[#0078D4] border-blue-200/80",
    stepBadge: "bg-blue-600 text-white"
  },
  {
    number: "02",
    title: "Connect With Support",
    description: "Initiate a secure remote support session guided by our OfficeAtlas specialist.",
    microHighlight: "256-bit encrypted session",
    icon: Wifi,
    accentBg: "bg-indigo-50 text-indigo-600 border-indigo-200/80",
    stepBadge: "bg-indigo-600 text-white"
  },
  {
    number: "03",
    title: "Get Guided Assistance",
    description: "We diagnose the underlying problem and walk you through step-by-step resolution.",
    microHighlight: "Direct diagnostic walkthrough",
    icon: UserCheck,
    accentBg: "bg-purple-50 text-purple-600 border-purple-200/80",
    stepBadge: "bg-purple-600 text-white"
  },
  {
    number: "04",
    title: "Get Back to Work",
    description: "Your Office suite is verified, fully functional, and ready for your daily tasks.",
    microHighlight: "100% operational verification",
    icon: CheckCircle2,
    accentBg: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
    stepBadge: "bg-emerald-600 text-white"
  }
];

export default function HowItWorksTimeline() {
  return (
    <section className="py-14 md:py-20 bg-[#FCFCFC] font-sans border-b border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-semibold text-[#0A0F1D] tracking-tight"
          >
            Getting Help Is Simple
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed"
          >
            No complicated technical jargon or endless wait times. Four quick steps to get your Office suite running smoothly.
          </motion.p>
        </div>

        {/* Premium Step Cards Grid with Connecting Progress Line */}
        <div className="relative">
          
          {/* Subtle Progress Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[12%] right-[12%] h-[3px] bg-gradient-to-r from-[#0078D4]/30 via-indigo-500/30 to-emerald-500/30 z-0 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group bg-white border border-zinc-200/90 hover:border-[#0078D4]/50 rounded-3xl p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    
                    {/* Top Row: Step Number Badge & Icon */}
                    <div className="flex items-center justify-between">
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-2xl border ${step.accentBg} flex items-center justify-center transition-transform group-hover:scale-105 duration-300 shadow-2xs`}>
                        <Icon className="w-7 h-7" />
                      </div>

                      {/* Step Number Pill */}
                      <div className={`px-3 py-1 rounded-full text-xs font-mono font-bold shadow-xs ${step.stepBadge}`}>
                        STEP {step.number}
                      </div>
                    </div>

                    {/* Step Title & Description */}
                    <div className="space-y-2.5">
                      <h3 className="text-lg font-semibold text-[#0A0F1D] group-hover:text-[#0078D4] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                        {step.description}
                      </p>
                    </div>

                  </div>

                  {/* Bottom Micro Highlight Footnote */}
                  <div className="pt-5 mt-5 border-t border-zinc-100 flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{step.microHighlight}</span>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
