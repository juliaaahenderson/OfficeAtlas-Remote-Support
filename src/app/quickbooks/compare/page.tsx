"use client";

import { useState } from "react";
import { ArrowLeft, Sliders, CheckCircle } from "lucide-react";
import Link from "next/link";

interface FeatureComparison {
  feature: string;
  online: boolean | string;
  desktop: boolean | string;
  enterprise: boolean | string;
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
  const [selectedPlan, setSelectedPlan] = useState("all");

  return (
    <div className="bg-[#FAFBFD] min-h-screen text-[#0A0F1D] pt-28 pb-20 px-6 md:px-10 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Back Link */}
        <Link 
          href="/quickbooks"
          className="text-xs font-bold text-[#0078D4] hover:text-[#002060] transition-colors inline-flex items-center gap-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to QuickBooks Hub
        </Link>

        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-4xl sm:text-[42px] font-sans font-semibold tracking-tight text-[#0A0F1D] leading-tight">QuickBooks Edition Comparisons</h1>
          <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
            Examine core differences between QuickBooks Online, QuickBooks Desktop, and QuickBooks Enterprise. Compare specifications to identify the right deployment route.
          </p>
        </div>

        {/* Interactive Comparison Matrix */}
        <div className="bg-white border border-zinc-200/80 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-zinc-50/50 border-b border-zinc-200/60 text-xs font-bold text-[#0A0F1D] uppercase tracking-wider">
                  <th className="p-6">Feature Capability</th>
                  <th className="p-6">Online (Cloud)</th>
                  <th className="p-6">Desktop (Local)</th>
                  <th className="p-6">Enterprise (ERP)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200/50 text-xs">
                {comparisonMatrix.map((row) => (
                  <tr key={row.feature} className="hover:bg-zinc-50/20 font-semibold text-zinc-700">
                    <td className="p-6 text-[#0A0F1D] font-bold">{row.feature}</td>
                    <td className="p-6">{row.online}</td>
                    <td className="p-6">{row.desktop}</td>
                    <td className="p-6">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Alternatives summary */}
        <div className="bg-zinc-50 border border-zinc-200/60 p-8 rounded-2xl space-y-4">
          <h2 className="text-lg font-bold">QuickBooks vs Alternatives</h2>
          <p className="text-xs text-zinc-500 leading-relaxed font-medium">
            While QuickBooks controls the market, several alternatives exist depending on scale:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="space-y-1">
              <div className="text-xs font-bold">Xero</div>
              <p className="text-[11px] text-zinc-500 leading-relaxed">
                Strong cloud alternative with user-friendly bank feed imports, popular in Australia, NZ, and UK.
              </p>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-bold">FreshBooks</div>
              <p className="text-[11px] text-zinc-500 leading-relaxed">
                Excellent invoicing tool customized for freelancers and service-based agencies.
              </p>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-bold">Sage 50</div>
              <p className="text-[11px] text-zinc-500 leading-relaxed">
                Traditional competitor offering robust manufacturing module costing for established enterprises.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
