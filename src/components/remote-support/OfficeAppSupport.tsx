"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileText, 
  Table, 
  Presentation, 
  Mail, 
  BookOpen, 
  Cloud,
  CheckCircle2,
  ShieldCheck
} from "lucide-react";

interface AppDetail {
  id: string;
  name: string;
  shortName: string;
  icon: any;
  appColor: string;
  bgLight: string;
  borderLight: string;
  tagline: string;
  description: string;
  techNote: string;
  fileFormats: string[];
  diagnosticHighlights: string[];
}

const appsData: AppDetail[] = [
  {
    id: "word",
    name: "Microsoft Word Support",
    shortName: "Word",
    icon: FileText,
    appColor: "#2B579A",
    bgLight: "bg-[#2B579A]/5",
    borderLight: "border-[#2B579A]/30",
    tagline: "Document Recovery, Template Repairs & Crash Diagnostics",
    description: "Troubleshoot Word startup freezes, corrupted Normal.dotm templates, document recovery locks, and print spooler errors.",
    techNote: "winword.exe /safe startup & template cache rebuild parameters",
    fileFormats: [".DOCX", ".DOCM", ".DOTX", ".RTF", "Legacy .DOC"],
    diagnosticHighlights: [
      "Normal.dotm global template isolation and cache rebuild.",
      "Third-party COM add-in conflict isolation (/safe mode).",
      "Auto-recovery file path extraction & corrupted document repair."
    ]
  },
  {
    id: "excel",
    name: "Microsoft Excel Support",
    shortName: "Excel",
    icon: Table,
    appColor: "#107C41",
    bgLight: "bg-[#107C41]/5",
    borderLight: "border-[#107C41]/30",
    tagline: "Formula Freezes, Macro Debugging & Add-in Fixes",
    description: "Diagnose calculation thread locks, hardware graphics acceleration freezes, PowerQuery connection drops, and macro security blocks.",
    techNote: "excel.exe /safe & hardware acceleration registry switches",
    fileFormats: [".XLSX", ".XLSM", ".XLSB", ".CSV", "PowerQuery Feeds"],
    diagnosticHighlights: [
      "Hardware graphics acceleration toggle for large dataset freezes.",
      "VBA macro security policy & trusted location configuration.",
      "PowerQuery data source credential re-authentication."
    ]
  },
  {
    id: "powerpoint",
    name: "Microsoft PowerPoint Support",
    shortName: "PowerPoint",
    icon: Presentation,
    appColor: "#D83B01",
    bgLight: "bg-[#D83B01]/5",
    borderLight: "border-[#D83B01]/30",
    tagline: "Slide Deck Recovery, Codec Embedding & Export Repair",
    description: "Fix embedded video playback failures, corrupted slide master layouts, export stalls to PDF/MP4, and presentation fonts.",
    techNote: "powerpnt.exe /safe & media codec transcode parameters",
    fileFormats: [".PPTX", ".PPTM", ".POTX", ".MP4 Export", "Slide Masters"],
    diagnosticHighlights: [
      "Embedded media codec verification & 4K video export fix.",
      "Slide Master layout inheritance repair and font embedding.",
      "Presenter View display driver dual-monitor setup."
    ]
  },
  {
    id: "outlook",
    name: "Microsoft Outlook Support",
    shortName: "Outlook",
    icon: Mail,
    appColor: "#0078D4",
    bgLight: "bg-[#0078D4]/5",
    borderLight: "border-[#0078D4]/30",
    tagline: "PST/OST Database Repair, Profile Setup & Sync Solutions",
    description: "Resolve emails stuck in Outbox, SCANPST.exe database corruption, Autodiscover XML authentication loops, and shared mailbox access.",
    techNote: "SCANPST.exe integrity repair & Outlook /cleanreminders switch",
    fileFormats: [".PST", ".OST", "Exchange M365", "IMAP / POP3", "MSG"],
    diagnosticHighlights: [
      "SCANPST.exe database integrity scan & OST cache rebuild.",
      "Autodiscover XML registry key repair for Exchange/M365.",
      "Windows Credential Manager token reset for password prompts."
    ]
  },
  {
    id: "onenote",
    name: "Microsoft OneNote Support",
    shortName: "OneNote",
    icon: BookOpen,
    appColor: "#7719AA",
    bgLight: "bg-[#7719AA]/5",
    borderLight: "border-[#7719AA]/30",
    tagline: "Notebook Sync Failures, Section Recovery & Cloud Setup",
    description: "Fix 0xE0000007 sync errors, misplaced notebook sections, OneDrive cloud storage permission conflicts, and page template layouts.",
    techNote: "onenote.exe /safemode & OneDrive sync cache purge",
    fileFormats: [".ONE", "OneDrive Notebooks", "OneNote Desktop", "Web App"],
    diagnosticHighlights: [
      "0xE0000007 & 0xE4020045 cloud notebook sync error repair.",
      "Misplaced Section recovery & local offline notebook backup.",
      "Cross-device synchronization for Windows, Mac & iPad."
    ]
  },
  {
    id: "m365",
    name: "Microsoft 365 Suite Support",
    shortName: "Microsoft 365",
    icon: Cloud,
    appColor: "#0078D4",
    bgLight: "bg-[#0078D4]/5",
    borderLight: "border-[#0078D4]/30",
    tagline: "Full Suite Deployment, Tenant Licensing & Cloud Integration",
    description: "Manage tenant licensing assignments, Office Deployment Tool (ODT) setups, OneDrive for Business sync, and admin policy rules.",
    techNote: "Office Deployment Tool (ODT) configuration.xml deployment",
    fileFormats: ["M365 Personal", "Family", "Business Std", "Enterprise E3/E5"],
    diagnosticHighlights: [
      "Office Deployment Tool (ODT) custom XML build installation.",
      "Microsoft 365 Admin Center license assignment & identity sync.",
      "OneDrive for Business SharePoint document library synchronization."
    ]
  }
];

export default function OfficeAppSupport() {
  const [selectedAppId, setSelectedAppId] = useState<string>("word");
  const selectedApp = appsData.find(a => a.id === selectedAppId) || appsData[0];

  return (
    <section className="py-14 md:py-20 bg-[#FAFBFC] font-sans border-t border-zinc-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-semibold text-[#0A0F1D] tracking-tight"
          >
            Support & Documentation for Office Apps
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal"
          >
            Technical specifications, diagnostic parameters, and resolution workflows for individual desktop applications.
          </motion.p>
        </div>

        {/* Top App Selector Bar */}
        <div className="flex items-center justify-start md:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 blog-scrollbar no-scrollbar">
          {appsData.map((app) => {
            const Icon = app.icon;
            const isSelected = selectedAppId === app.id;
            return (
              <button
                key={app.id}
                onClick={() => setSelectedAppId(app.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-2xl border text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shrink-0 ${
                  isSelected
                    ? "bg-white text-[#0A0F1D] border-[#0078D4] shadow-md ring-2 ring-[#0078D4]/15"
                    : "bg-white/80 text-zinc-600 border-zinc-200/90 hover:bg-slate-50 hover:text-zinc-900"
                }`}
              >
                <div 
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${app.appColor}15`, color: app.appColor }}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span>{app.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Premium Feature Card — Eyebrow Badge Removed */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedApp.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-zinc-200/90 rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden"
          >
            {/* Ambient background glow */}
            <div 
              className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none select-none opacity-20"
              style={{ backgroundColor: selectedApp.appColor }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start relative z-10">
              
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Title */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs shrink-0"
                      style={{ backgroundColor: `${selectedApp.appColor}15`, color: selectedApp.appColor }}
                    >
                      <selectedApp.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-semibold text-[#0A0F1D] tracking-tight">
                      {selectedApp.name}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-[#0078D4]">
                    {selectedApp.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                  {selectedApp.description}
                </p>

                {/* Diagnostic Highlights Checklist */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-semibold text-zinc-500">
                    Technical Diagnostics Covered:
                  </h4>
                  <div className="space-y-2.5">
                    {selectedApp.diagnosticHighlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-700 font-medium">
                        <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* File Formats Pill List */}
                <div className="pt-3 border-t border-zinc-100 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium text-zinc-500 mr-2">Formats Covered:</span>
                  {selectedApp.fileFormats.map((fmt) => (
                    <span key={fmt} className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                      {fmt}
                    </span>
                  ))}
                </div>

              </div>

              {/* Right Column */}
              <div className="lg:col-span-5 space-y-5">
                <div className="bg-slate-50 border border-zinc-200/90 rounded-2xl p-6 shadow-sm space-y-4">
                  
                  {/* Header info */}
                  <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span className="text-xs font-semibold text-[#0A0F1D]">Technical Specification</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 bg-white px-2 py-0.5 rounded border border-zinc-200">
                      {selectedApp.shortName}.exe
                    </span>
                  </div>

                  {/* Tech Spec Details */}
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-white border border-zinc-200/80 space-y-1">
                      <div className="text-[11px] font-semibold text-zinc-500">Command Line Parameter</div>
                      <div className="text-xs font-mono font-semibold text-[#0078D4]">
                        {selectedApp.techNote}
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-zinc-200/80 space-y-2">
                      <div className="text-[11px] font-semibold text-zinc-500 flex items-center justify-between">
                        <span>Architecture Verification</span>
                        <span className="text-emerald-600 font-semibold">x64 / x86 Validated</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#0078D4] h-full w-full rounded-full" />
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-200/60 text-xs text-blue-900 space-y-1">
                      <div className="font-semibold flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-[#0078D4]" />
                        Official Desktop Compatibility
                      </div>
                      <p className="text-[11px] text-blue-800 font-normal leading-relaxed">
                        Compatible with Microsoft 365 Apps for Enterprise, Office 2024, Office 2021, and Office 2019 builds.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
