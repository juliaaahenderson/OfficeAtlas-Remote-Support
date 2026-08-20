"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";

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
  }
];

export default function Comparison() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeComparison = comparisonData[activeIndex];

  return (
    <section id="compare" className="py-28 bg-slate-50/50 border-y border-zinc-200/50 relative overflow-hidden font-sans">
      
      {/* Premium Ambient Light Glows */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute -top-60 -left-60 w-[600px] h-[600px] rounded-full bg-blue-100/30 blur-[150px]" />
        <div className="absolute bottom-20 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-100/30 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
            Choose What Fits You Best
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
            Understand key differences in license features, apps, and storage parameters before purchasing.
          </p>
        </div>

        {/* Tab Selection Panels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {comparisonData.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`relative p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer overflow-hidden ${
                  isActive 
                    ? "bg-white border-blue-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)]" 
                    : "bg-white/40 border-zinc-200/80 hover:border-zinc-300/80 hover:bg-white"
                }`}
              >
                <h3 className={`text-sm font-semibold transition-colors duration-200 ${isActive ? "text-blue-600" : "text-slate-800"}`}>
                  {item.title}
                </h3>
                <p className="text-[11px] text-zinc-400 mt-1 line-clamp-1 font-semibold">
                  {item.description}
                </p>
                {isActive && (
                  <motion.div
                    layoutId="comparisonBorder"
                    className="absolute inset-0 border-2 border-blue-500 rounded-2xl pointer-events-none"
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
            className="bg-white border border-zinc-200/80 rounded-2xl shadow-xl shadow-slate-100/50 overflow-hidden"
          >
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-3 bg-slate-50/80 border-b border-zinc-200/60 p-6 text-sm font-bold text-slate-800">
              <div className="hidden md:block uppercase tracking-wider text-xs text-zinc-400 font-extrabold">Features</div>
              <div className="text-left md:text-center text-blue-600 flex items-center justify-between md:justify-center font-extrabold">
                <span className="md:hidden text-zinc-400 text-xs font-semibold">Option A</span>
                {activeComparison.options[0]}
              </div>
              <div className="text-left md:text-center text-[#6E56CF] mt-4 md:mt-0 flex items-center justify-between md:justify-center border-t border-zinc-200 pt-4 md:pt-0 md:border-0 font-extrabold">
                <span className="md:hidden text-zinc-400 text-xs font-semibold">Option B</span>
                {activeComparison.options[1]}
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-zinc-100">
              {activeComparison.data.map((row, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-3 p-6 text-sm items-center hover:bg-slate-50/40 transition-colors">
                  
                  {/* Feature title */}
                  <div className="font-extrabold text-slate-900 md:font-semibold mb-2 md:mb-0">
                    {row.feature}
                  </div>

                  {/* Left Option Column */}
                  <div className="text-left md:text-center text-slate-700 flex md:block items-center gap-2 font-medium">
                    <span className="md:hidden text-zinc-400 text-[11px] uppercase tracking-wider font-bold w-24">
                      {activeComparison.options[0]}:
                    </span>
                    <div className="flex items-center md:justify-center gap-2">
                      {row.leftCheck === true && <Check className="w-4 h-4 text-emerald-600 bg-emerald-50 p-0.5 rounded-full border border-emerald-100 shrink-0" />}
                      {row.leftCheck === false && <X className="w-4 h-4 text-rose-600 bg-rose-50 p-0.5 rounded-full border border-rose-100 shrink-0" />}
                      <span>{row.leftVal}</span>
                    </div>
                  </div>

                  {/* Right Option Column */}
                  <div className="text-left md:text-center text-slate-700 mt-2 md:mt-0 flex md:block items-center gap-2 font-medium">
                    <span className="md:hidden text-zinc-400 text-[11px] uppercase tracking-wider font-bold w-24">
                      {activeComparison.options[1]}:
                    </span>
                    <div className="flex items-center md:justify-center gap-2">
                      {row.rightCheck === true && <Check className="w-4 h-4 text-emerald-600 bg-emerald-50 p-0.5 rounded-full border border-emerald-100 shrink-0" />}
                      {row.rightCheck === false && <X className="w-4 h-4 text-rose-600 bg-rose-50 p-0.5 rounded-full border border-rose-100 shrink-0" />}
                      <span>{row.rightVal}</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
