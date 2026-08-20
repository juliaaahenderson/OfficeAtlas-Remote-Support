"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, ShoppingBag, Download, Laptop, Key, Layout, Compass } from "lucide-react";

interface Step {
  number: string;
  title: string;
  shortDesc: string;
  icon: any;
  details: string[];
}

const steps: Step[] = [
  {
    number: "01",
    title: "Choose Your Plan",
    shortDesc: "Select the subscription or commercial license that matches your user count and workspace requirements.",
    icon: ShoppingBag,
    details: [
      "Determine user counts (M365 Personal vs Family for home; Business for enterprise).",
      "Verify if you need desktop applications or if web-based tools suffice.",
      "Check storage configurations (1TB per user standard vs customizable pools)."
    ]
  },
  {
    number: "02",
    title: "Download Microsoft 365",
    shortDesc: "Access the office portal to retrieve the deployment installer file matching your system architecture.",
    icon: Download,
    details: [
      "Log in to setup.office.com or admin.microsoft.com.",
      "Select your native language and system version (64-bit recommended).",
      "Retrieve the bootstrapper installer package to your local storage."
    ]
  },
  {
    number: "03",
    title: "Install Your Apps",
    shortDesc: "Run the setup configuration tool to deploy Word, Excel, Teams, and PowerPoint on your hardware.",
    icon: Laptop,
    details: [
      "Open the downloaded installer executable.",
      "Allow the streaming installer to download and copy office components in the background.",
      "Ensure an active internet connection until the success confirmation popup displays."
    ]
  },
  {
    number: "04",
    title: "Sign In & Activate",
    shortDesc: "Authenticate using your official Microsoft account credentials to bind your local client with active subscriptions.",
    icon: Key,
    details: [
      "Launch any installed Office client application (e.g. Word).",
      "Click 'Sign In' at the top right of the application shell.",
      "Enter the email address registered with your active license key to unlock editing permissions."
    ]
  },
  {
    number: "05",
    title: "Configure Your Workspace",
    shortDesc: "Integrate cloud assets like OneDrive folders and Teams communication spaces into local system directories.",
    icon: Layout,
    details: [
      "Launch local OneDrive desktop sync to bind cloud directory paths to Explorer/Finder.",
      "Log in to local Microsoft Teams to sync organizational calendars and departments.",
      "Pin key application shortcuts (Word, Excel, Outlook) for instant dashboard retrieval."
    ]
  },
  {
    number: "06",
    title: "Explore Advanced Features",
    shortDesc: "Deploy AI assistance, custom macros, and team collaboration assets to complete your productivity suite.",
    icon: Compass,
    details: [
      "Integrate Copilot companions into PowerPoint and Word templates.",
      "Connect Power Automate tasks to optimize notification setups.",
      "Establish SharePoint communication sites for centralized document sharing."
    ]
  }
];

export default function LearningPath() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="guides" className="py-24 bg-slate-50/50 border-y border-zinc-200/50 relative overflow-hidden font-sans">
      
      {/* Ambient Premium Light Glows */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-10 left-1/3 w-[500px] h-[500px] rounded-full bg-blue-100/20 blur-[130px]" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-indigo-100/20 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-20 text-center mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
            From Setup to Mastery
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            A comprehensive, guided path to purchasing, installing, configuring, and optimizing your Microsoft 365 workspace.
          </p>
        </div>

        {/* Dynamic Learning Path Component */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          
          {/* Vertical Path timeline (Steps list) */}
          <div className="lg:col-span-5 relative space-y-6">
            
            {/* Background running line */}
            <div className="absolute left-7 top-6 bottom-6 w-0.5 bg-zinc-200/60 -z-10 hidden sm:block" />

            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const StepIcon = step.icon;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 relative group cursor-pointer ${
                    isActive 
                      ? "bg-white border-blue-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)]" 
                      : "bg-white/40 border-zinc-200/60 hover:bg-white hover:border-zinc-300/80 hover:shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Circle Node */}
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 shrink-0 ${
                        isActive 
                          ? "bg-blue-500 border-blue-500 text-white shadow-sm" 
                          : "bg-white border-zinc-200 text-zinc-400 group-hover:border-zinc-300"
                      }`}
                    >
                      <StepIcon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-wider">
                        Step {step.number}
                      </span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />}
                    </div>
                    <h3 className="text-base font-semibold text-slate-900 mt-0.5">
                      {step.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1 line-clamp-1 font-semibold">
                      {step.shortDesc}
                    </p>
                  </div>

                  <ChevronRight className={`w-4 h-4 text-zinc-300 transition-transform duration-300 self-center shrink-0 ${
                    isActive ? "translate-x-1 text-blue-500" : "group-hover:translate-x-0.5"
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Details Screen Panel */}
          <div className="lg:col-span-7 bg-white border border-zinc-200/80 rounded-2xl p-8 sticky top-28 min-h-[420px] flex flex-col justify-between shadow-xl shadow-slate-100/50">
            <div>
              <div className="flex justify-between items-center pb-6 border-b border-zinc-100 mb-6">
                <div>
                  <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
                    Milestone Details
                  </span>
                  <h3 className="text-2xl font-semibold text-slate-900 mt-1">
                    {steps[activeStep].title}
                  </h3>
                </div>
                <span className="text-5xl font-sans font-black text-slate-100 tracking-tight leading-none select-none">
                  {steps[activeStep].number}
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                {steps[activeStep].shortDesc}
              </p>

              <ul className="space-y-4">
                {steps[activeStep].details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-3 text-xs text-slate-500 leading-relaxed font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Premium Graphical Progress Indicator */}
            <div className="border-t border-zinc-100 pt-6 mt-8 space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400 font-bold">Estimated progress</span>
                <span className="text-blue-600 font-extrabold">{Math.round(((activeStep + 1) / steps.length) * 100)}% Complete</span>
              </div>
              
              {/* Graphical Progress Bar */}
              <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="flex justify-end pt-2">
                <button 
                  onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  className="inline-flex items-center gap-1.5 px-4.5 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Next Step <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
