"use client";

import Link from "next/link";
import { ArrowLeft, Cookie } from "lucide-react";

export default function CookiePolicy() {
  return (
    <div className="pt-24 pb-16 bg-[#FAFBFC] min-h-screen relative overflow-hidden font-sans text-slate-800">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-50/50 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-50/40 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 space-y-12">
        
        {/* Navigation Back Link */}
        <div className="pt-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>

        {/* Page Hero Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Cookie className="w-4 h-4 text-[#0078D4]" />
            <span className="text-[11px] font-bold tracking-widest text-[#0078D4] uppercase">
              LEGAL DOCUMENT
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-sans font-semibold text-[#0A0F1D] tracking-tight leading-[1.1]">
            Cookie Policy
          </h1>
          <p className="text-sm text-zinc-500 font-normal">
            Last Updated: August 21, 2026
          </p>
        </div>

        {/* Main Content Area */}
        <div className="bg-white border border-zinc-200/80 rounded-3xl p-8 sm:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.01)] space-y-8 text-sm sm:text-base leading-relaxed text-slate-650 font-normal">
          
          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-[#0A0F1D]">1. What are Cookies?</h3>
            <p>
              Cookies are small text data fragments stored in your browser when you access websites. They act as identifier memory, helping browser scripts remember layout states, user preferences, and filter configurations dynamically.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-[#0A0F1D]">2. How We Use Cookies</h3>
            <p>
              OfficeAtlas utilizes cookie nodes to track active catalog selections, comparison tabs choices, and interface settings. These configurations are used to customize layouts and optimize response load speeds.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-[#0A0F1D]">3. Managing Cookies</h3>
            <p>
              By default, most web browsers allow cookies configuration automatic detection. You can block or delete cookies within your browser's security/privacy tab. Disabling cookies will disable saved interface presets, but will not block documentation exploration.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
