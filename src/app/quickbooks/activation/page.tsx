"use client";

import { ArrowLeft, CheckCircle2, ShieldAlert } from "lucide-react";
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
    <div className="bg-[#FAFBFD] min-h-screen text-[#0A0F1D] pt-28 pb-20 px-6 md:px-10 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Back Link */}
        <Link 
          href="/quickbooks"
          className="text-xs font-bold text-[#0078D4] hover:text-[#002060] transition-colors inline-flex items-center gap-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to QuickBooks Hub
        </Link>

        {/* Header */}
        <div className="space-y-4 max-w-2xl border-b border-zinc-200/50 pb-8">
          <h1 className="text-4xl sm:text-[42px] font-sans font-semibold tracking-tight text-[#0A0F1D] leading-tight">Activation & Setup Guide</h1>
          <p className="text-zinc-500 text-lg leading-relaxed font-medium">
            Learn how license codes verification, user authorization, and company file database registration operates.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          <h2 className="text-lg font-bold">Standard Registration Steps</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((s, idx) => (
              <div key={idx} className="bg-white border border-zinc-200/80 p-6 rounded-xl space-y-3 shadow-sm">
                <div className="w-7 h-7 rounded-full bg-[#0A0F1D] text-white flex items-center justify-center text-xs font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-sm font-bold">{s.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Common Activation Obstacles */}
        <div className="bg-white border border-zinc-200/80 p-8 rounded-2xl space-y-6">
          <h2 className="text-lg font-bold flex items-center gap-2 text-rose-600">
            <ShieldAlert className="w-5 h-5" />
            Troubleshooting Common Activation Problems
          </h2>

          <div className="space-y-4 text-xs font-semibold">
            <div className="space-y-1">
              <div className="text-[#0A0F1D] font-bold">Incorrect Validation Code Error</div>
              <p className="text-zinc-500 leading-relaxed pl-4 border-l border-zinc-200">
                Confirm your system's date, time, and timezone parameters are correctly set. Mismatched time stamps trigger verification failures.
              </p>
            </div>
            <div className="space-y-1">
              <div className="text-[#0A0F1D] font-bold">Validation Loop Prompt</div>
              <p className="text-zinc-500 leading-relaxed pl-4 border-l border-zinc-200">
                Ensure you are running the QuickBooks software client with Administrator rights on your workstation PC.
              </p>
            </div>
            <div className="space-y-1">
              <div className="text-[#0A0F1D] font-bold">Limit Exceeded Notice</div>
              <p className="text-zinc-500 leading-relaxed pl-4 border-l border-zinc-200">
                You may have exceeded the maximum allowed activations for your multi-user subscription. Contact billing to update seats allocations.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
