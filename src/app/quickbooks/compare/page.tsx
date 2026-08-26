"use client";

import { useState } from "react";
import { ArrowLeft, Sparkles, Scale, Columns, Info, Check, HelpCircle } from "lucide-react";
import Link from "next/link";

interface FeatureComparison {
  feature: string;
  online: string;
  desktop: string;
  enterprise: string;
}

const comparisonMatrix: FeatureComparison[] = [
  { feature: "Access Location", online: "Cloud / Mobile App", desktop: "Single Local PC", enterprise: "Local server network" },
  { feature: "Multi-User Support", online: "Up to 25 users (varies)", desktop: "Up to 3 users", enterprise: "Up to 40 users" },
  { feature: "Reconciliation", online: "Real-time automatic sync", desktop: "Manual CSV / bank download", enterprise: "Manual or automated schedules" },
  { feature: "Job Costing", online: "Basic tracking", desktop: "Advanced estimates vs actuals", enterprise: "Heavy industry-specific modules" },
  { feature: "Inventory Tracking", online: "Basic FIFO", desktop: "Detailed inventory records", enterprise: "Advanced barcode, bin, FIFO costing" },
  { feature: "Custom User Permissions", online: "Limited configurations", desktop: "Standard roles", enterprise: "Granular folder-level custom security" },
  { feature: "Annual Costs", online: "Lower entry / monthly model", desktop: "Standard subscription", enterprise: "High annual cost tiers" }
];

export default function CompareHub() {
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
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-sans font-semibold tracking-tight text-[#0A0F1D] leading-[1.12]">
                QuickBooks Edition Comparisons
              </h1>
              <p className="text-zinc-500 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
                Examine core differences between QuickBooks Online, Desktop, and Enterprise. Compare specifications to identify the right deployment route.
              </p>
            </div>
            
            {/* SVG Illustration - Comparison / Balance theme */}
            <div className="hidden lg:flex justify-end">
              <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Comparison Columns grid mockup */}
                <rect x="50" y="30" width="300" height="135" rx="12" fill="white" stroke="#E4E7EC" strokeWidth="1.5"/>
                <line x1="140" y1="30" x2="140" y2="165" stroke="#E4E7EC" strokeWidth="1.2"/>
                <line x1="245" y1="30" x2="245" y2="165" stroke="#E4E7EC" strokeWidth="1.2"/>
                
                {/* Headers */}
                <text x="95" y="52" textAnchor="middle" fill="#0078D4" fontSize="10" fontWeight="800" fontFamily="system-ui">Online</text>
                <text x="192" y="52" textAnchor="middle" fill="#7C3AED" fontSize="10" fontWeight="800" fontFamily="system-ui">Desktop</text>
                <text x="297" y="52" textAnchor="middle" fill="#0F766E" fontSize="10" fontWeight="800" fontFamily="system-ui">Enterprise</text>
                
                {/* Row lines */}
                <line x1="50" y1="65" x2="350" y2="65" stroke="#E4E7EC" strokeWidth="1.2"/>
                <line x1="50" y1="98" x2="350" y2="98" stroke="#E4E7EC" strokeWidth="1.2"/>
                <line x1="50" y1="131" x2="350" y2="131" stroke="#E4E7EC" strokeWidth="1.2"/>
                
                {/* Row items checkpoints */}
                {/* Row 1 */}
                <circle cx="95" cy="81" r="5" fill="#22C55E" opacity="0.8"/>
                <path d="M92 81 L94 83 L98 79" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                <circle cx="192" cy="81" r="5" fill="#22C55E" opacity="0.8"/>
                <path d="M189 81 L191 83 L195 79" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                <circle cx="297" cy="81" r="5" fill="#22C55E" opacity="0.8"/>
                <path d="M294 81 L296 83 L300 79" stroke="white" strokeWidth="1" strokeLinecap="round"/>

                {/* Row 2 */}
                <circle cx="95" cy="114" r="5" fill="#EF4444" opacity="0.15"/>
                <line x1="92" y1="114" x2="98" y2="114" stroke="#EF4444" strokeWidth="1.2"/>
                <circle cx="192" cy="114" r="5" fill="#22C55E" opacity="0.8"/>
                <path d="M189 114 L191 116 L195 112" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                <circle cx="297" cy="114" r="5" fill="#22C55E" opacity="0.8"/>
                <path d="M294 114 L296 116 L300 112" stroke="white" strokeWidth="1" strokeLinecap="round"/>

                {/* Row 3 */}
                <circle cx="95" cy="148" r="5" fill="#EF4444" opacity="0.15"/>
                <line x1="92" y1="148" x2="98" y2="148" stroke="#EF4444" strokeWidth="1.2"/>
                <circle cx="192" cy="148" r="5" fill="#EF4444" opacity="0.15"/>
                <line x1="189" y1="148" x2="195" y2="148" stroke="#EF4444" strokeWidth="1.2"/>
                <circle cx="297" cy="148" r="5" fill="#22C55E" opacity="0.8"/>
                <path d="M294 148 L296 150 L300 146" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                
                <text x="200" y="190" textAnchor="middle" fill="#9CA3AF" fontSize="10" fontWeight="700" fontFamily="system-ui">Feature Checkpoints Matrix</text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8">
        
        {/* Interactive Comparison Matrix */}
        <div className="bg-white border border-zinc-200/70 rounded-2xl overflow-hidden shadow-lg shadow-zinc-900/[0.03] mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-50/50 border-b border-zinc-200/80 text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  <th className="p-6 text-zinc-400 font-bold">Feature Capability</th>
                  <th className="p-6 text-[#0078D4] font-bold">Online (Cloud)</th>
                  <th className="p-6 text-purple-600 font-bold">Desktop (Local)</th>
                  <th className="p-6 text-teal-700 font-bold">Enterprise (ERP)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200/50 text-[15px]">
                {comparisonMatrix.map((row) => (
                  <tr key={row.feature} className="hover:bg-zinc-50/50 transition-colors">
                    <td className="p-6 text-[#0A0F1D] font-semibold">{row.feature}</td>
                    <td className="p-6 text-zinc-600 font-medium">{row.online}</td>
                    <td className="p-6 text-zinc-600 font-medium">{row.desktop}</td>
                    <td className="p-6 text-zinc-600 font-medium">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Alternatives summary */}
        <div className="bg-white border border-zinc-200/70 p-8 rounded-2xl shadow-md shadow-zinc-900/[0.02] space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50/50 flex items-center justify-center border border-blue-100/60">
              <Info className="w-5 h-5 text-[#0078D4]" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#0A0F1D] leading-snug">QuickBooks vs Industry Alternatives</h2>
              <p className="text-xs text-zinc-400 font-medium">Evaluate other popular solutions based on your scale</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
            
            {/* Xero */}
            <div className="group relative bg-zinc-50/50 hover:bg-white rounded-xl p-5 border border-zinc-200/60 hover:border-[#0078D4]/30 hover:shadow-lg hover:shadow-zinc-900/[0.04] transition-all duration-300">
              <div className="absolute top-0 left-5 right-5 h-[2px] bg-[#0078D4]/60 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-sm font-bold text-[#0A0F1D] mb-1.5 flex items-center justify-between">
                Xero
                <span className="text-[10px] font-bold text-[#0078D4] bg-blue-50 px-2 py-0.5 rounded">Cloud</span>
              </h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed font-normal">
                Strong cloud alternative with user-friendly bank feed imports, popular in Australia, NZ, and UK.
              </p>
            </div>

            {/* FreshBooks */}
            <div className="group relative bg-zinc-50/50 hover:bg-white rounded-xl p-5 border border-zinc-200/60 hover:border-[#7C3AED]/30 hover:shadow-lg hover:shadow-zinc-900/[0.04] transition-all duration-300">
              <div className="absolute top-0 left-5 right-5 h-[2px] bg-[#7C3AED]/60 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-sm font-bold text-[#0A0F1D] mb-1.5 flex items-center justify-between">
                FreshBooks
                <span className="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded">Freelancers</span>
              </h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed font-normal">
                Excellent invoicing tool customized for freelancers, solopreneurs, and service-based agencies.
              </p>
            </div>

            {/* Sage 50 */}
            <div className="group relative bg-zinc-50/50 hover:bg-white rounded-xl p-5 border border-zinc-200/60 hover:border-[#0F766E]/30 hover:shadow-lg hover:shadow-zinc-900/[0.04] transition-all duration-300">
              <div className="absolute top-0 left-5 right-5 h-[2px] bg-[#0F766E]/60 opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-sm font-bold text-[#0A0F1D] mb-1.5 flex items-center justify-between">
                Sage 50
                <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">Enterprise</span>
              </h3>
              <p className="text-[13px] text-zinc-500 leading-relaxed font-normal">
                Traditional competitor offering robust manufacturing module costing for established enterprises.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
