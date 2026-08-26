"use client";

import { ArrowLeft, CheckCircle2, ShieldAlert, Key, Sparkles, AlertCircle, Calendar, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function ActivationPortal() {
  const steps = [
    {
      title: "Initialize Sign-In",
      desc: "Log in with the Intuit account credentials linked to your product purchase subscription."
    },
    {
      title: "Input License Credentials",
      desc: "Enter your License Number and Product Number details inside the activation screen prompts."
    },
    {
      title: "Submit Validation",
      desc: "If prompted, enter the Validation Code sent to the registered email address to authorize activation."
    },
    {
      title: "Finalize Registration",
      desc: "The system registers your company file database parameters and links online modules."
    }
  ];

  return (
    <div className="bg-[#FAFBFD] min-h-screen text-[#0A0F1D] font-sans pb-20">
      
      {/* Clean Light Compact Hero Header */}
      <div className="relative pt-28 pb-6 px-6 md:px-10 overflow-hidden border-b border-zinc-200/60">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FAFBFD] to-zinc-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[300px] rounded-full blur-3xl opacity-20" style={{ background: `radial-gradient(circle, #0078D420, transparent 70%)` }} />
        
        <div className="relative max-w-7xl mx-auto">
          <Link 
            href="/quickbooks"
            className="text-xs font-semibold text-[#0078D4] hover:text-[#002060] transition-colors inline-flex items-center gap-1.5 mb-5"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to QuickBooks Hub
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#0078D4] bg-[#0078D4]/5 px-3 py-1.5 rounded-full border border-[#0078D4]/15">
                <Key className="w-3.5 h-3.5" />
                Activation
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-sans font-semibold tracking-tight text-[#0A0F1D] leading-[1.12]">
                Activation & Setup Guide
              </h1>
              <p className="text-zinc-500 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
                Learn how license codes verification, user authorization, and company file database registration operates.
              </p>
            </div>
            
            {/* SVG Illustration - Activation theme */}
            <div className="hidden lg:flex justify-end">
              <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Security shield and key grid mockup */}
                <rect x="50" y="30" width="300" height="135" rx="12" fill="white" stroke="#E4E7EC" strokeWidth="1.5"/>
                <rect x="50" y="30" width="300" height="30" rx="12" fill="#F0FDF4"/>
                <rect x="50" y="59" width="300" height="1" fill="#E4E7EC"/>
                
                {/* Verified text */}
                <circle cx="80" cy="45" r="6" fill="#22C55E"/>
                <path d="M77 45 L79 47 L83 43" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                <text x="94" y="49" fill="#15803D" fontSize="10" fontWeight="700" fontFamily="system-ui">LICENSE AUTHORIZED</text>
                
                {/* Text boxes showing code activation details */}
                <rect x="70" y="80" width="110" height="32" rx="6" fill="#F8FAFC" stroke="#E4E7EC" strokeWidth="1"/>
                <text x="80" y="93" fill="#9CA3AF" fontSize="7.5" fontWeight="600" fontFamily="system-ui">Product License Key</text>
                <text x="80" y="105" fill="#4B5563" fontSize="9.5" fontWeight="bold" fontFamily="Courier">5034-7221-9804</text>
                
                <rect x="195" y="80" width="135" height="32" rx="6" fill="#F8FAFC" stroke="#E4E7EC" strokeWidth="1"/>
                <text x="205" y="93" fill="#9CA3AF" fontSize="7.5" fontWeight="600" fontFamily="system-ui">User Validation Code</text>
                <text x="205" y="105" fill="#22C55E" fontSize="9.5" fontWeight="bold" fontFamily="Courier">QB-8812-ACTIVE</text>
                
                {/* Connection check lines */}
                <rect x="70" y="125" width="260" height="24" rx="6" fill="#F4F4F5"/>
                <circle cx="85" cy="137" r="4.5" fill="#22C55E" opacity="0.3"/>
                <circle cx="85" cy="137" r="2.5" fill="#22C55E"/>
                <text x="96" y="140" fill="#71717A" fontSize="8.5" fontWeight="600" fontFamily="system-ui">Database server handshake validated: Active</text>

                <text x="200" y="188" textAnchor="middle" fill="#9CA3AF" fontSize="11" fontWeight="700" fontFamily="system-ui">Product Authentication Matrix</text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10">
        
        {/* Steps */}
        <div className="space-y-6 mb-16">
          <h2 className="text-xl font-semibold text-[#0A0F1D]">Standard Registration Steps</h2>
          
          <div className="relative">
            {/* Horizontal Timeline Connector (visible on desktop) */}
            <div className="hidden md:block absolute top-[34px] left-[50px] right-[50px] h-[2px] bg-gradient-to-r from-blue-300/40 via-emerald-300/30 to-teal-300/40 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
              {steps.map((step, idx) => {
                const colors = [
                  { text: "text-[#0078D4]", bg: "bg-blue-50/70", border: "hover:border-[#0078D4]/30", indicator: "bg-[#0078D4]" },
                  { text: "text-[#10B981]", bg: "bg-emerald-50/70", border: "hover:border-[#10B981]/30", indicator: "bg-[#10B981]" },
                  { text: "text-[#0F766E]", bg: "bg-teal-50/70", border: "hover:border-[#0F766E]/30", indicator: "bg-[#0F766E]" },
                  { text: "text-[#059669]", bg: "bg-green-50/70", border: "hover:border-[#059669]/30", indicator: "bg-[#059669]" }
                ];
                const current = colors[idx] || colors[0];

                return (
                  <div 
                    key={idx} 
                    className={`group relative bg-white border border-zinc-200/75 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-zinc-900/[0.03] hover:-translate-y-1.5 transition-all duration-500 ${current.border}`}
                  >
                    {/* Glowing Accent Corner Dot on Hover */}
                    <div className={`absolute top-3 right-3 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${current.indicator} animate-ping`} />
                    
                    {/* Step Number Circle */}
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300 ${current.bg} ${current.text}`}>
                      {idx + 1}
                    </div>

                    <h3 className="text-[15px] font-semibold text-[#0A0F1D] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Common Activation Obstacles */}
        <div className="bg-white border border-zinc-200/70 p-8 rounded-2xl shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50/60 border border-rose-100 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5 text-rose-500" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#0A0F1D] leading-snug">Troubleshooting Common Activation Problems</h2>
              <p className="text-xs text-zinc-400 font-medium">Verify system parameters prior to database registration</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-zinc-50/50 hover:bg-white rounded-xl p-5 border border-zinc-200/60 hover:shadow-lg hover:shadow-zinc-900/[0.04] transition-all duration-300 space-y-2">
              <h3 className="text-sm font-bold text-[#0A0F1D]">Incorrect Validation Code</h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed">
                Confirm your system's date, time, and timezone parameters are correctly set. Mismatched time stamps trigger verification failures.
              </p>
            </div>
            <div className="bg-zinc-50/50 hover:bg-white rounded-xl p-5 border border-zinc-200/60 hover:shadow-lg hover:shadow-zinc-900/[0.04] transition-all duration-300 space-y-2">
              <h3 className="text-sm font-bold text-[#0A0F1D]">Validation Loop Prompt</h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed">
                Ensure you are running the QuickBooks software client with Administrator rights on your workstation PC to save license data.
              </p>
            </div>
            <div className="bg-zinc-50/50 hover:bg-white rounded-xl p-5 border border-zinc-200/60 hover:shadow-lg hover:shadow-zinc-900/[0.04] transition-all duration-300 space-y-2">
              <h3 className="text-sm font-bold text-[#0A0F1D]">Limit Exceeded Notice</h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed">
                You may have exceeded the maximum allowed activations for your multi-user subscription. Contact billing to update seats allocations.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
