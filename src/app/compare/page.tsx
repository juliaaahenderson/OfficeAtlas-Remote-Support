"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Check, 
  X, 
  ShieldCheck, 
  Sparkles, 
  HelpCircle,
  Scale
} from "lucide-react";

interface ComparisonOption {
  title: string;
  description: string;
  options: [string, string];
  data: {
    feature: string;
    leftVal: string;
    rightVal: string;
    leftCheck?: boolean;
    rightCheck?: boolean;
  }[];
}

const comparisonData: ComparisonOption[] = [
  {
    title: "Personal vs Family",
    description: "Compare the top consumer subscriptions to choose the right coverage.",
    options: ["M365 Personal", "M365 Family"],
    data: [
      { feature: "Number of Users", leftVal: "1 User", rightVal: "Up to 6 Users" },
      { feature: "Cloud Storage", leftVal: "1 TB secure storage", rightVal: "Up to 6 TB (1 TB per person)" },
      { feature: "Desktop Applications", leftVal: "Included", rightVal: "Included", leftCheck: true, rightCheck: true },
      { feature: "Apps Included", leftVal: "Word, Excel, PPT, Outlook, OneNote", rightVal: "Word, Excel, PPT, Outlook, OneNote" },
      { feature: "Premium Safety Features", leftVal: "OneDrive Ransomware protection", rightVal: "Family Safety app + Security protection", leftCheck: true, rightCheck: true },
      { feature: "Best For", leftVal: "Individuals, freelancers", rightVal: "Families, households" }
    ]
  },
  {
    title: "M365 vs Office 2024",
    description: "Subscription vs one-time purchase. What's the real difference?",
    options: ["Microsoft 365", "Office 2024 Home & Student"],
    data: [
      { feature: "Payment Model", leftVal: "Monthly or Annual Subscription", rightVal: "One-time purchase" },
      { feature: "Feature Updates", leftVal: "Continuous new features", rightVal: "Security fixes only, no new features" },
      { feature: "Cloud Storage", leftVal: "1 TB per user", rightVal: "None included", leftCheck: true, rightCheck: false },
      { feature: "Desktop Applications", leftVal: "Word, Excel, PPT, Outlook + premium utilities", rightVal: "Word, Excel, PPT (Home & Student edition)" },
      { feature: "Multiple Devices", leftVal: "Up to 5 devices simultaneously", rightVal: "1 PC or Mac only" },
      { feature: "Best For", leftVal: "Users wanting cloud storage & latest apps", rightVal: "Offline users who hate subscriptions" }
    ]
  },
  {
    title: "Business Basic vs Standard",
    description: "Compare critical commercial cloud setups for professional business tools.",
    options: ["Business Basic", "Business Standard"],
    data: [
      { feature: "Desktop Apps", leftVal: "Web & Mobile apps only", rightVal: "Fully installed desktop apps", leftCheck: false, rightCheck: true },
      { feature: "Cloud Storage", leftVal: "1 TB OneDrive storage per user", rightVal: "1 TB OneDrive storage per user", leftCheck: true, rightCheck: true },
      { feature: "Professional Email", leftVal: "50 GB custom domain mailbox", rightVal: "50 GB custom domain mailbox", leftCheck: true, rightCheck: true },
      { feature: "Teams Meeting Capacity", leftVal: "Up to 300 participants", rightVal: "Up to 300 participants + webinar hosting" },
      { feature: "Advanced Security", leftVal: "Standard M365 security measures", rightVal: "Defender + secure data access policies" },
      { feature: "Best For", leftVal: "Remote teams needing cloud-first productivity", rightVal: "Businesses requiring premium desktop experiences" }
    ]
  },
  {
    title: "Desktop vs Web Apps",
    description: "Analyze the functional limits of browser-based vs local desktop software.",
    options: ["Web/Mobile Apps", "Desktop Installed Apps"],
    data: [
      { feature: "Offline Support", leftVal: "Limited offline viewing/saving", rightVal: "Full offline capabilities", leftCheck: false, rightCheck: true },
      { feature: "Macro & VBA Support", leftVal: "Not supported", rightVal: "Full VBA / Script engine execution", leftCheck: false, rightCheck: true },
      { feature: "Advanced Formatting", leftVal: "Simplified layout editor", rightVal: "Full typographic & pagination suite" },
      { feature: "Performance", leftVal: "Browser dependent", rightVal: "Native local machine speed" },
      { feature: "Installation", leftVal: "Instant via web browser", rightVal: "Requires download and license activation" },
      { feature: "Best For", leftVal: "Quick edits, Chromebooks, light usage", rightVal: "Complex spreadsheets, formatting, offline work" }
    ]
  },
  {
    title: "OneDrive vs SharePoint",
    description: "Cloud file cabinet vs shared intranet portals and libraries.",
    options: ["OneDrive for Business", "SharePoint Online"],
    data: [
      { feature: "Primary Focus", leftVal: "Personal file cabinet, draft editing", rightVal: "Department hubs, intranet portals" },
      { feature: "Access Scope", leftVal: "Private by default, shared selectively", rightVal: "Shared by default, group permissions" },
      { feature: "Custom Metadata", leftVal: "Not supported", rightVal: "Full metadata and content tagging support", leftCheck: false, rightCheck: true },
      { feature: "Page & News Publishing", leftVal: "Not supported", rightVal: "Communication sites, news publishing templates", leftCheck: false, rightCheck: true },
      { feature: "Sharing Protocols", leftVal: "Individual links, user-to-user sharing", rightVal: "Site permissions, group hierarchy policies" },
      { feature: "Best For", leftVal: "Individual documents and sharing drafts", rightVal: "Team document libraries, portals, intranets" }
    ]
  },
  {
    title: "Teams vs Outlook",
    description: "Compare synchronous chat-first vs asynchronous email-first collaboration.",
    options: ["Microsoft Teams", "Microsoft Outlook"],
    data: [
      { feature: "Communication Model", leftVal: "Synchronous (Real-time chat, calls)", rightVal: "Asynchronous (Structured emails)" },
      { feature: "Thread Organization", leftVal: "Channel tabs, group chat feeds", rightVal: "Inboxes, folders, categories" },
      { feature: "Meeting Integrations", leftVal: "Native video, webinar hosting", rightVal: "Calendar scheduling invitations", leftCheck: true, rightCheck: true },
      { feature: "File Sharing Limit", leftVal: "Up to 250 GB per file via SharePoint", rightVal: "Up to 20-33 MB per email attachment" },
      { feature: "Context Switching", leftVal: "Tab integrations for external SaaS apps", rightVal: "Add-ins, link anchors", leftCheck: true, rightCheck: false },
      { feature: "Best For", leftVal: "Quick team discussions, virtual meetings", rightVal: "Official notifications, external clients" }
    ]
  },
  {
    title: "Standard vs Premium",
    description: "Advanced endpoint management and enterprise threat protection systems.",
    options: ["Business Standard", "Business Premium"],
    data: [
      { feature: "Endpoint Management", leftVal: "Not included", rightVal: "Microsoft Intune device enrollment", leftCheck: false, rightCheck: true },
      { feature: "Advanced Threat Protection", leftVal: "Standard spam & malware filters", rightVal: "Defender for Business endpoint protection", leftCheck: false, rightCheck: true },
      { feature: "Information Protection", leftVal: "Standard data loss protection (DLP)", rightVal: "Azure Information Protection labels", leftCheck: false, rightCheck: true },
      { feature: "Virtual Desktop (AVD)", leftVal: "Not supported", rightVal: "Azure Virtual Desktop rights included", leftCheck: false, rightCheck: true },
      { feature: "Desktop Applications", leftVal: "Included", rightVal: "Included", leftCheck: true, rightCheck: true },
      { feature: "Best For", leftVal: "Businesses needing core office apps", rightVal: "Security-first firms with remote devices" }
    ]
  }
];

export default function CompareHub() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeComparison = comparisonData[activeIndex];

  return (
    <div className="pt-24 pb-16 bg-[#FAFBFC] min-h-screen relative overflow-hidden font-sans text-slate-800">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-50/50 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-50/40 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 space-y-16">
        
        {/* Navigation Back Link */}
        <div className="pt-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>

        {/* ── HERO SECTION (Exactly like 1st visual) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          {/* Left Text content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-100 bg-blue-50/50">
              <Scale className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                COMPARE PLANS
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-semibold text-[#0A0F1D] tracking-tight leading-[1.1]">
              Find the perfect plan for <span className="text-[#0078D4]">your needs</span>
            </h1>

            <p className="text-base sm:text-[17px] text-zinc-600 font-normal leading-relaxed max-w-xl">
              Compare all OfficeAtlas plans side by side and choose the one that fits your team best.
            </p>

            {/* Three feature badges below */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-[#0A0F1D] uppercase tracking-wider">
                  Secure & Private
                </h4>
                <p className="text-[11px] text-zinc-500 font-normal leading-normal">
                  Your data is always encrypted and protected.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-[#0A0F1D] uppercase tracking-wider">
                  All Features
                </h4>
                <p className="text-[11px] text-zinc-500 font-normal leading-normal">
                  Powerful features to streamline your work.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  <HelpCircle className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-[#0A0F1D] uppercase tracking-wider">
                  Expert Support
                </h4>
                <p className="text-[11px] text-zinc-500 font-normal leading-normal">
                  Get help when you need it, from real people.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Image */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[540px] rounded-3xl overflow-hidden shadow-xl border border-zinc-200/50 bg-white">
              <img 
                src="/choose-whats-right-for-you.jpg" 
                alt="Choose What's Right for You" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* ── COMPARISON TABLE AREA (In between exactly like right now) ── */}
        <div className="space-y-8 pt-8">
          {/* Tab Selection Panels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {comparisonData.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative p-4 rounded-xl border text-left transition-all duration-350 cursor-pointer overflow-hidden ${
                    isActive 
                      ? "bg-white border-blue-500 shadow-[0_8px_25px_rgb(0,0,0,0.03)] scale-[1.01]" 
                      : "bg-white/40 border-zinc-200/85 hover:border-zinc-300/85 hover:bg-white"
                  }`}
                >
                  <h3 className={`text-xs font-bold uppercase tracking-wider transition-colors duration-205 ${isActive ? "text-[#0078D4]" : "text-slate-800"}`}>
                    {item.title}
                  </h3>
                  {isActive && (
                    <motion.div
                      layoutId="compareHubBorder"
                      className="absolute inset-0 border-2 border-blue-500 rounded-xl pointer-events-none"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Comparison Table */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-zinc-200/80 rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Table Header */}
              <div className="grid grid-cols-1 md:grid-cols-3 bg-slate-50/80 border-b border-zinc-200/60 p-6 text-sm font-semibold text-slate-900">
                <div className="hidden md:block uppercase tracking-wider text-xs text-zinc-400 font-bold">Features</div>
                <div className="text-left md:text-center text-[#0078D4] flex items-center justify-between md:justify-center font-bold">
                  <span className="md:hidden text-zinc-400 text-xs font-semibold">Option A</span>
                  {activeComparison.options[0]}
                </div>
                <div className="text-left md:text-center text-[#6E56CF] mt-4 md:mt-0 flex items-center justify-between md:justify-center border-t border-zinc-200/50 pt-4 md:pt-0 md:border-0 font-bold">
                  <span className="md:hidden text-zinc-400 text-xs font-semibold">Option B</span>
                  {activeComparison.options[1]}
                </div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-zinc-150/80">
                {activeComparison.data.map((row, rIdx) => (
                  <div key={rIdx} className="grid grid-cols-1 md:grid-cols-3 p-6 items-center hover:bg-slate-50/30 transition-colors duration-150 gap-2 md:gap-0">
                    {/* Feature Title */}
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 md:text-sm md:normal-case md:font-semibold md:text-slate-800 md:tracking-normal">
                      {row.feature}
                    </div>

                    {/* Left Option Value */}
                    <div className="text-sm text-slate-650 font-normal leading-relaxed md:text-center flex items-center gap-2 md:justify-center">
                      {row.leftCheck !== undefined ? (
                        row.leftCheck ? (
                          <span className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600"><Check className="w-3 h-3" /></span>
                        ) : (
                          <span className="w-5 h-5 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500"><X className="w-3 h-3" /></span>
                        )
                      ) : null}
                      <span>{row.leftVal}</span>
                    </div>

                    {/* Right Option Value */}
                    <div className="text-sm text-slate-650 font-normal leading-relaxed md:text-center flex items-center gap-2 md:justify-center border-t border-zinc-150/60 pt-2.5 mt-2.5 md:pt-0 md:mt-0 md:border-0">
                      {row.rightCheck !== undefined ? (
                        row.rightCheck ? (
                          <span className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600"><Check className="w-3 h-3" /></span>
                        ) : (
                          <span className="w-5 h-5 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500"><X className="w-3 h-3" /></span>
                        )
                      ) : null}
                      <span>{row.rightVal}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── CONTACT BANNER (Exactly like 2nd visual) ── */}
        <div 
          style={{ 
            backgroundImage: "url('/tech-support-headset-illustration.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center right",
            backgroundRepeat: "no-repeat"
          }}
          className="border border-blue-100/60 rounded-3xl p-8 sm:p-10 md:p-12 shadow-sm relative overflow-hidden min-h-[240px] flex items-center mt-12 bg-[#F3F7FD]"
        >
          {/* Light gradient overlay on mobile to keep text readable against background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F3F7FD] via-[#F3F7FD]/90 to-transparent md:hidden" />

          <div className="space-y-4 max-w-lg md:max-w-xl relative z-10">
            <h2 className="text-2xl sm:text-3xl font-sans font-semibold text-[#0A0F1D] tracking-tight leading-snug">
              Still not sure which plan is right for you?
            </h2>
            <p className="text-sm sm:text-base text-zinc-800 font-medium leading-relaxed">
              Our team is here to help you choose the best solution for your needs.
            </p>
            <div className="pt-2">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#0078D4] hover:bg-[#006cc1] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm shadow-blue-500/10"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
