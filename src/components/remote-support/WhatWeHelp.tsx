"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Download, 
  Key, 
  Layers, 
  RefreshCcw, 
  UserCheck, 
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  Wrench,
  Sparkles
} from "lucide-react";

const categories = [
  {
    id: "install",
    title: "Install Office",
    description: "Download and install Microsoft Office suite for Windows 10/11 or macOS.",
    problemText: "Setup freezes at 51%, error 30088-4, or 32/64-bit architecture conflict.",
    solutionTitle: "Recommended Installation Solution",
    solutionSteps: [
      "Download official installer package directly via setup.office.com or ODT.",
      "Execute Microsoft Support & Recovery Assistant (SaRA) to scrub legacy builds.",
      "Select matching 64-bit architecture and run setup with Administrator privileges."
    ],
    icon: Download,
    accentBorder: "group-hover:border-[#0078D4]",
    accentBg: "bg-blue-50/80 text-[#0078D4] border-blue-200/80"
  },
  {
    id: "activate",
    title: "Activate Office",
    description: "Resolve product key redemption errors, license mismatches, and status failures.",
    problemText: "'Unlicensed Product' banner, error code 0xC004F074, or key rejection.",
    solutionTitle: "Recommended Activation Solution",
    solutionSteps: [
      "Launch Command Prompt (Admin) and navigate to Office16 directory.",
      "Execute 'cscript ospp.vbs /dstatus' to inspect active license keys.",
      "Flush expired KMS/MAK keys with '/unpkey' and re-bind valid product key."
    ],
    icon: Key,
    accentBorder: "group-hover:border-amber-500",
    accentBg: "bg-amber-50/80 text-amber-600 border-amber-200/80"
  },
  {
    id: "m365",
    title: "Microsoft 365",
    description: "Configure tenant accounts, user licensing, OneDrive sync, and app integrations.",
    problemText: "OneDrive sync errors, missing shared mailboxes, or tenant sign-in loop.",
    solutionTitle: "Recommended M365 Solution",
    solutionSteps: [
      "Access admin.microsoft.com to confirm user subscription license assignment.",
      "Reset Web Account Manager (WAM) identity token in Windows settings.",
      "Re-link OneDrive sync client using tenant credentials."
    ],
    icon: Layers,
    accentBorder: "group-hover:border-indigo-500",
    accentBg: "bg-indigo-50/80 text-indigo-600 border-indigo-200/80"
  },
  {
    id: "updates",
    title: "Office Updates",
    description: "Fix Click-to-Run updater stalls, update error code 30088-4, and version builds.",
    problemText: "Click-to-Run updater fails to fetch current builds or stalls downloading.",
    solutionTitle: "Recommended Update Solution",
    solutionSteps: [
      "Open services.msc and restart 'Microsoft Office Click-to-Run Service'.",
      "Launch Command Prompt and execute 'officec2rclient.exe /update user'.",
      "Switch from Monthly to Semi-Annual Channel if build stalls persist."
    ],
    icon: RefreshCcw,
    accentBorder: "group-hover:border-emerald-500",
    accentBg: "bg-emerald-50/80 text-emerald-600 border-emerald-200/80"
  },
  {
    id: "account",
    title: "Account & Sign-in",
    description: "Troubleshoot login loops, credential manager conflicts, 2FA, and password resets.",
    problemText: "Repeated credential prompts in Outlook, 2FA failure, or MSA sign-in loop.",
    solutionTitle: "Recommended Account Solution",
    solutionSteps: [
      "Open Windows Credential Manager -> Windows Credentials.",
      "Remove all stored 'MicrosoftOffice16_Data' and identity tokens.",
      "Re-launch Office app, enter authentic credentials, and complete 2FA."
    ],
    icon: UserCheck,
    accentBorder: "group-hover:border-purple-500",
    accentBg: "bg-purple-50/80 text-purple-600 border-purple-200/80"
  },
  {
    id: "errors",
    title: "Office Errors",
    description: "Diagnose crashes, corrupted Normal.dotm templates, and COM add-in freezes.",
    problemText: "App closing immediately on launch, COM add-in freeze, or template error.",
    solutionTitle: "Recommended Diagnostic Solution",
    solutionSteps: [
      "Press Win+R and launch application in Safe Mode (e.g. 'winword /safe').",
      "Disable third-party COM add-ins under Options -> Add-ins -> COM Add-ins.",
      "Perform Quick Repair via Control Panel -> Programs & Features."
    ],
    icon: AlertTriangle,
    accentBorder: "group-hover:border-rose-500",
    accentBg: "bg-rose-50/80 text-rose-600 border-rose-200/80"
  }
];

export default function WhatWeHelp() {
  const [activeSolutionId, setActiveSolutionId] = useState<string | null>(null);

  const toggleSolution = (id: string) => {
    setActiveSolutionId(activeSolutionId === id ? null : id);
  };

  return (
    <section id="what-we-help" className="py-14 md:py-20 bg-[#FCFCFC] font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-semibold text-[#0A0F1D] tracking-tight"
          >
            What Can We Help You With?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal"
          >
            Explore technical information, diagnostic coverage, and recommended solutions for common Microsoft Office issues.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {categories.map((item, idx) => {
            const Icon = item.icon;
            const isSolutionOpen = activeSolutionId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`group bg-white border border-zinc-200/90 ${item.accentBorder} rounded-3xl p-7 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
              >
                <div className="space-y-5">
                  
                  {/* Header row: Icon */}
                  <div className="flex items-center justify-between">
                    <div className={`w-14 h-14 rounded-2xl ${item.accentBg} border flex items-center justify-center transition-transform group-hover:scale-105 duration-300`}>
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Title & Overview */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-[#0A0F1D]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Problem Statement Box */}
                  <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/60 text-xs text-amber-900 font-normal leading-relaxed flex items-start gap-2.5">
                    <Wrench className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-amber-950">Typical Issue: </span>
                      {item.problemText}
                    </div>
                  </div>

                  {/* Interactive Recommended Solution Accordion */}
                  <div className="pt-2">
                    <button
                      onClick={() => toggleSolution(item.id)}
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-zinc-200/80 hover:bg-blue-50/50 hover:border-blue-200 text-xs font-semibold text-[#0078D4] transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#0078D4]" />
                        <span>{isSolutionOpen ? "Hide Recommended Solution" : "View Recommended Solution"}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSolutionOpen ? "rotate-180 text-[#0078D4]" : "text-zinc-400"}`} />
                    </button>

                    <AnimatePresence>
                      {isSolutionOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-3 p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 space-y-3 text-xs text-emerald-950">
                            <div className="font-semibold text-emerald-900 flex items-center gap-1.5 border-b border-emerald-200/60 pb-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              {item.solutionTitle}
                            </div>
                            <ol className="space-y-2 list-decimal list-inside text-emerald-900/90 leading-relaxed font-normal">
                              {item.solutionSteps.map((step, sIdx) => (
                                <li key={sIdx} className="pl-1">
                                  <span className="font-normal">{step}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
