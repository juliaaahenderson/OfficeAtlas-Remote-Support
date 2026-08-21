"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Step {
  num: string;
  title: string;
  desc: string;
}

interface TabCategory {
  id: string;
  label: string;
  steps: Step[];
}

const guideCategories: TabCategory[] = [
  {
    id: "download",
    label: "Download",
    steps: [
      { num: "01", title: "Sign in to your Microsoft account", desc: "Use your existing account or create a new one." },
      { num: "02", title: "Select your subscription", desc: "Choose the Microsoft 365 plan you want." },
      { num: "03", title: "Download the installer", desc: "Get the installer file for Windows or Mac." },
      { num: "04", title: "Run the setup", desc: "Open the installer and follow the instructions." }
    ]
  },
  {
    id: "install",
    label: "Install",
    steps: [
      { num: "01", title: "Locate bootstrapper file", desc: "Find the downloaded executable in your local Downloads folder." },
      { num: "02", title: "Approve setup administration", desc: "Allow administrative permissions to initialize core configurations." },
      { num: "03", title: "Stream application assets", desc: "Keep your internet connection active while Office elements load." },
      { num: "04", title: "Confirm successful setup", desc: "Wait for the success screen verifying ready-to-use desktop apps." }
    ]
  },
  {
    id: "activate",
    label: "Activate",
    steps: [
      { num: "01", title: "Open any Office program", desc: "Launch Word, Excel, or PowerPoint from your local apps menu." },
      { num: "02", title: "Access activation prompt", desc: "Click 'Sign In' at the top-right corner of the application screen." },
      { num: "03", title: "Enter licensed credentials", desc: "Input the email address registered with your active M365 subscription." },
      { num: "04", title: "Accept license agreement", desc: "Review terms and accept to fully unlock document editing permissions." }
    ]
  },
  {
    id: "troubleshoot",
    label: "Troubleshoot",
    steps: [
      { num: "01", title: "Verify network firewall access", desc: "Ensure system security software is not blocking Office setup ports." },
      { num: "02", title: "Execute Office Repair utility", desc: "Access local system settings to trigger online diagnostics and repairs." },
      { num: "03", title: "Purge old installation data", desc: "Clear conflicting legacy registry files using the Microsoft SARA tool." },
      { num: "04", title: "Reach out to system help desk", desc: "Access enterprise support channels to resolve subscription errors." }
    ]
  }
];

export default function InstallationGuide() {
  const [activeTabId, setActiveTabId] = useState("download");
  const activeGuide = guideCategories.find((cat) => cat.id === activeTabId) || guideCategories[0];

  return (
    <section className="py-24 bg-white font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header Block */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Get Started with Confidence
          </h2>
        </div>

        {/* Tab Category Selectors (with smooth line indicator) */}
        <div className="flex gap-8 border-b border-zinc-100 pb-4 mb-12 text-sm font-semibold relative z-10">
          {guideCategories.map((cat) => {
            const isActive = activeTabId === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTabId(cat.id)}
                className={`relative pb-4 text-sm font-bold transition-colors cursor-pointer ${
                  isActive ? "text-blue-600" : "text-zinc-400 hover:text-slate-800"
                }`}
              >
                {cat.label}
                {isActive && (
                  <motion.div
                    layoutId="installationActiveBar"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Timeline Steps) */}
          <div className="lg:col-span-6 relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTabId}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                {activeGuide.steps.map((step) => (
                  <div key={step.num} className="flex items-start gap-5">
                    {/* Circle step number indicator */}
                    <div className="w-8 h-8 rounded-full bg-[#002D9C] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {step.num}
                    </div>
                    <div>
                      <h4 className="text-[15px] font-semibold text-slate-900 leading-snug">
                        {step.title}
                      </h4>
                      <p className="text-xs text-zinc-500 leading-relaxed mt-1 font-medium">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column (Visual) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative z-10">
            <div className="w-full max-w-[480px] rounded-3xl overflow-hidden shadow-xl border border-zinc-100 bg-slate-50">
              <img 
                src="/cloud-download-office.jpg" 
                alt="Cloud Download and Office Apps Guide" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>

        {/* Footer CTA Link */}
        <div className="mt-12 relative z-10">
          <Link 
            href="/guides" 
            className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            View All Deployment & Setup Guides
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
