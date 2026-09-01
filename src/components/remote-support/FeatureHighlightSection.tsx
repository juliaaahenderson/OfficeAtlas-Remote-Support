"use client";

import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Clock, 
  Lock, 
  Sliders,
  MonitorCheck,
  ShieldCheck,
  Zap,
  Sparkles
} from "lucide-react";

export default function FeatureHighlightSection() {
  return (
    <section className="py-14 md:py-20 bg-[#FAFBFC] font-sans border-t border-zinc-200/80 relative overflow-hidden">
      
      {/* Soft Ambient Light Glows */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none select-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-emerald-100/30 rounded-full blur-[120px] pointer-events-none select-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header (Matched font size: text-3xl sm:text-4xl font-semibold text-[#0A0F1D]) */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-semibold text-[#0A0F1D] tracking-tight"
          >
            Support Without the Complicated Steps
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal"
          >
            Whether you're setting up Microsoft Office for the first time or dealing with an unexpected issue, get guided assistance without having to figure everything out yourself.
          </motion.p>
        </div>

        {/* Unique Asymmetrical Premium Feature Showcase Card (Pristine Light Mode Only) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-zinc-200/90 rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Interactive Live Session Diagnostics Visual (Light Mode) */}
            <div className="lg:col-span-6 space-y-5">
              <div className="bg-slate-50 border border-zinc-200/90 rounded-2xl p-6 sm:p-7 shadow-sm space-y-5">
                
                {/* Header Banner */}
                <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0078D4] flex items-center justify-center text-white font-semibold shadow-xs">
                      <MonitorCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#0A0F1D]">OfficeAtlas Remote Session</h3>
                      <p className="text-[11px] text-zinc-500">Encrypted End-to-End Assistance</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-semibold uppercase tracking-wider">
                    Live Guidance
                  </span>
                </div>

                {/* 3 Interactive Feature Modules */}
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white border border-zinc-200/80 shadow-2xs flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0078D4] border border-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Sliders className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[#0A0F1D]">No Complicated Tech Setup</h4>
                      <p className="text-[11px] text-zinc-500 font-normal leading-relaxed mt-0.5">
                        Step-by-step guidance formatted for non-technical users. Zero manual registry editing required.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-zinc-200/80 shadow-2xs flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Lock className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[#0A0F1D]">Secure Data Handling</h4>
                      <p className="text-[11px] text-zinc-500 font-normal leading-relaxed mt-0.5">
                        Your documents, personal files, and passwords stay strictly private in an encrypted session.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-zinc-200/80 shadow-2xs flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[#0A0F1D]">Rapid Problem Diagnostics</h4>
                      <p className="text-[11px] text-zinc-500 font-normal leading-relaxed mt-0.5">
                        Identify activation keys, corrupted add-in templates, or sign-in loops fast without guesswork.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer status line */}
                <div className="pt-2 flex items-center justify-between text-xs text-zinc-600 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Microsoft 365 & Legacy Office (2016-2024)</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Key Guarantees & Technical Checklist */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-semibold text-[#0078D4] flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#0078D4]" />
                  Guided Troubleshooting Excellence
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#0A0F1D] tracking-tight">
                  Seamless Office Support Experience
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                  Our remote support process eliminates technical frustration by delivering clear, direct step-by-step resolution tailored to your exact Office version.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-3">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-800 font-medium">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#0078D4] shrink-0 mt-0.5" />
                    <span>Step-by-step instructions customized to your specific Office edition.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-800 font-medium">
                    <ShieldCheck className="w-4.5 h-4.5 text-[#0078D4] shrink-0 mt-0.5" />
                    <span>Zero confusing manual registry editing or Command Prompt switches required.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-zinc-800 font-medium">
                    <Zap className="w-4.5 h-4.5 text-amber-600 shrink-0 mt-0.5" />
                    <span>Clear explanation of root causes so technical problems don't return.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
