"use client";

import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsOfService() {
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
            <FileText className="w-4 h-4 text-[#0078D4]" />
            <span className="text-[11px] font-bold tracking-widest text-[#0078D4] uppercase">
              LEGAL DOCUMENT
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-sans font-semibold text-[#0A0F1D] tracking-tight leading-[1.1]">
            Terms of Service
          </h1>
          <p className="text-sm text-zinc-500 font-normal">
            Last Updated: August 21, 2026
          </p>
        </div>

        {/* Main Content Area */}
        <div className="bg-white border border-zinc-200/80 rounded-3xl p-8 sm:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.01)] space-y-8 text-sm sm:text-base leading-relaxed text-slate-650 font-normal">
          
          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-[#0A0F1D]">1. Intellectual Property</h3>
            <p>
              All manuals, comparative tables, and layout templates created by OfficeAtlas remain the intellectual property of this site. Users are authorized to use these resources for personal configuration and educational purposes. Redistribution or scraping of content to populate competing documentation sites is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-[#0A0F1D]">2. Accuracy of Material</h3>
            <p>
              While we update our registry guides and array formulas periodically, technical configurations in Microsoft 365 can change rapidly. We cannot guarantee that all manuals represent real-time tenant settings. Users execute command scripts at their own discretion.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-[#0A0F1D]">3. Limitation of Liability</h3>
            <p>
              OfficeAtlas will not be held liable for security policy misconfigurations, mailbox data loss, sync parameters failure, or license mismatches resulting from instructions in our Guides or Compare database columns.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-[#0A0F1D]">4. Governing Law</h3>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of Washington, USA, without reference to its conflict of law provisions.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
