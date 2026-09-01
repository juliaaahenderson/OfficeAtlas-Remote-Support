"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Download, 
  Lock, 
  Zap, 
  CheckCircle2,
  Monitor
} from "lucide-react";

interface ConnectSupportAgentProps {
  onOpenSupportModal?: (topic?: string) => void;
}

export default function ConnectSupportAgentSection({ onOpenSupportModal }: ConnectSupportAgentProps) {
  const handleDownload = (platform: string) => {
    if (onOpenSupportModal) {
      onOpenSupportModal(`Download Client for ${platform}`);
    } else {
      alert(`Initiating download for ${platform} Remote Support Client...`);
    }
  };

  return (
    <section id="connect-agent" className="py-14 md:py-20 bg-[#FCFCFC] font-sans border-b border-zinc-200/60">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0A0F1D] tracking-tight leading-tight"
          >
            Connect to <span className="text-[#0078D4] font-semibold">Support Agent</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed max-w-xl mx-auto"
          >
            Download our official remote connection client to securely share your session with a <strong className="font-semibold text-zinc-900">technical support specialist</strong> for diagnostics, activation, and <strong className="font-semibold text-zinc-900">Microsoft Office setup</strong>.
          </motion.p>
        </div>

        {/* Verified Support Client Card Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0A0F1D] text-white rounded-3xl p-7 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden"
        >
          
          {/* Subtle Ambient Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#0078D4]/20 rounded-full blur-[130px] pointer-events-none select-none" />

          {/* Top Verification Badge */}
          <div className="flex items-center justify-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-300">
            <ShieldCheck className="w-4 h-4 text-[#0078D4]" />
            <span>VERIFIED OFFICEATLAS REMOTE SUPPORT CLIENT</span>
          </div>

          {/* 3 Platform Download Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            
            {/* 1. Windows Download */}
            <div className="bg-slate-900/90 border border-slate-800 hover:border-[#0078D4]/60 rounded-2xl p-6 text-center space-y-5 transition-all duration-300 group hover:shadow-lg hover:shadow-[#0078D4]/10">
              {/* Windows Logo Icon */}
              <div className="w-12 h-12 mx-auto rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6 fill-current text-[#0078D4]" viewBox="0 0 24 24">
                  <path d="M0 3.449L9.75 2.1v9.451H0m0 1.05h9.75v9.451L0 20.551M10.8 1.95L24 0v11.55H10.8m0 1.05H24V24l-13.2-1.95" />
                </svg>
              </div>

              <div className="space-y-1">
                <div className="text-xs text-zinc-400 font-medium">Download for</div>
                <div className="text-lg font-bold text-white">Windows</div>
              </div>

              <button
                onClick={() => handleDownload("Windows")}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0078D4] hover:bg-[#0067b8] text-white text-xs font-semibold rounded-xl shadow-md transition-all cursor-pointer group-hover:shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>Download →</span>
              </button>
            </div>

            {/* 2. Mac Download */}
            <div className="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/60 rounded-2xl p-6 text-center space-y-5 transition-all duration-300 group hover:shadow-lg hover:shadow-emerald-500/10">
              {/* Apple Logo Icon */}
              <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.64-.78 1.08-1.86.96-2.94-.93.04-2.07.62-2.74 1.4-.6.69-1.13 1.8-.99 2.86 1.05.08 2.13-.54 2.77-1.32z" />
                </svg>
              </div>

              <div className="space-y-1">
                <div className="text-xs text-zinc-400 font-medium">Download for</div>
                <div className="text-lg font-bold text-white">Mac</div>
              </div>

              <button
                onClick={() => handleDownload("Mac")}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl shadow-md transition-all cursor-pointer group-hover:shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>Download →</span>
              </button>
            </div>

            {/* 3. Chromebook / Web Download */}
            <div className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/60 rounded-2xl p-6 text-center space-y-5 transition-all duration-300 group hover:shadow-lg hover:shadow-amber-500/10">
              {/* Chromebook Icon */}
              <div className="w-12 h-12 mx-auto rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                <Monitor className="w-6 h-6 text-amber-400" />
              </div>

              <div className="space-y-1">
                <div className="text-xs text-zinc-400 font-medium">Download for</div>
                <div className="text-lg font-bold text-white">Chromebook</div>
              </div>

              <button
                onClick={() => handleDownload("Chromebook")}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-xl shadow-md transition-all cursor-pointer group-hover:shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>Download →</span>
              </button>
            </div>

          </div>

          {/* Bottom Security Footer */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs text-zinc-400 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Secure Connection</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#0078D4]" />
              <span>256-Bit Encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Instant Setup</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
