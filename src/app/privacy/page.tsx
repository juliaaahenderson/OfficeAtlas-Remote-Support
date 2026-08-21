"use client";

import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPolicy() {
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
            <Shield className="w-4 h-4 text-[#0078D4]" />
            <span className="text-[11px] font-bold tracking-widest text-[#0078D4] uppercase">
              LEGAL DOCUMENT
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-sans font-semibold text-[#0A0F1D] tracking-tight leading-[1.1]">
            Privacy Policy
          </h1>
          <p className="text-sm text-zinc-500 font-normal">
            Last Updated: August 21, 2026
          </p>
        </div>

        {/* Main Content Area */}
        <div className="bg-white border border-zinc-200/80 rounded-3xl p-8 sm:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.01)] space-y-8 text-sm sm:text-base leading-relaxed text-slate-650 font-normal">
          
          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-[#0A0F1D]">1. Information We Collect</h3>
            <p>
              OfficeAtlas is an educational database dedicated to Microsoft 365. We do not require account registration or user profiling to explore our tutorials. The only data we process is:
            </p>
            <ul className="list-disc pl-6 space-y-1.5">
              <li>Information provided voluntarily via our Contact Form (Name, Email Address, and Message content).</li>
              <li>Anonymized technical data (cookies, IP addresses, browser types) gathered to optimize site performance.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-[#0A0F1D]">2. How We Use Your Data</h3>
            <p>
              We process your parameters exclusively to respond to support inquiries, clarify deployment guides, or coordinate licensing queries. We do not sell, rent, or distribute your email records to third-party advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-[#0A0F1D]">3. Data Security</h3>
            <p>
              We implement industry-standard encryption protocols (SSL/TLS) to secure data transmitted via our systems. Our hosting environment is regularly monitored for vulnerabilities, ensuring that your communication signals remain private.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-semibold text-[#0A0F1D]">4. Microsoft Disclaimer</h3>
            <p>
              Please note that OfficeAtlas is an independent resource platform. Microsoft 365, Word, Excel, Teams, and other Office applications are trademarks owned by Microsoft Corporation. Content hosted here is for educational research purposes and has not been officially sponsored or approved by Microsoft.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
