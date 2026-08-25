"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Cloud, Monitor, Building2, Puzzle, Clock, CreditCard, Sparkles } from "lucide-react";
import Link from "next/link";

interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  desc: string;
  pricing: string;
  features: string[];
  accent: string;
  iconBg: string;
}

const productsList: Product[] = [
  {
    id: "qb-online",
    slug: "online",
    name: "QuickBooks Online",
    category: "Cloud",
    tagline: "Accounting on the go.",
    desc: "Cloud-hosted business finances. Features automatic bank feeds, invoicing, expense tracking, tax estimates, and app integrations accessible from any browser or mobile app.",
    pricing: "$30/mo",
    features: ["Bank reconciliation", "Invoicing & payments", "Tax categorization", "Mobile receipt capture"],
    accent: "#0078D4",
    iconBg: "bg-blue-50 text-[#0078D4]",
  },
  {
    id: "qb-desktop",
    slug: "desktop",
    name: "QuickBooks Desktop",
    category: "On-Premise",
    tagline: "Robust offline file controls.",
    desc: "Traditional local operating license. Ideal for users prioritizing local inventory controls, comprehensive job costing matrices, and multiple company file operations without cloud reliance.",
    pricing: "Subscription",
    features: ["Job costing analytics", "Inventory tracking", "Offline file operations", "Multi-company database"],
    accent: "#7C3AED",
    iconBg: "bg-purple-50 text-purple-600",
  },
  {
    id: "qb-enterprise",
    slug: "enterprise",
    name: "QuickBooks Enterprise",
    category: "Enterprise",
    tagline: "Industrial-scale capabilities.",
    desc: "Engineered for complex inventory demands and scaling workforces. Supports custom permissions configurations, heavy data loads, warehouse operations, and up to 40 users.",
    pricing: "Custom",
    features: ["Advanced inventory tools", "Custom user roles", "Priority Circle support", "Hadoop-based file capacity"],
    accent: "#0F766E",
    iconBg: "bg-teal-50 text-teal-700",
  },
  {
    id: "qb-payroll",
    slug: "payroll",
    name: "QuickBooks Payroll",
    category: "Add-on",
    tagline: "Integrated paychecks & taxes.",
    desc: "Run payroll operations directly inside QuickBooks. Automated tax filing, direct deposits, compliance monitoring, and employee workspace features.",
    pricing: "$45 + $6/user",
    features: ["Next-day direct deposit", "Automatic payroll tax calculation", "W-2 & 1099 compliance", "Employee benefit plans"],
    accent: "#EA580C",
    iconBg: "bg-orange-50 text-orange-600",
  },
  {
    id: "qb-time",
    slug: "time",
    name: "QuickBooks Time",
    category: "Add-on",
    tagline: "Accurate schedule tracking.",
    desc: "Employee time clock tracking with geofencing capability. Simplifies payroll calculations, project job costing, and timecard sign-offs.",
    pricing: "$20 + $8/user",
    features: ["GPS tracking & geofencing", "Real-time clock-in metrics", "Schedule design sheets", "Timesheet approvals"],
    accent: "#0284C7",
    iconBg: "bg-sky-50 text-sky-600",
  },
  {
    id: "qb-payments",
    slug: "payments",
    name: "QuickBooks Payments",
    category: "Merchant",
    tagline: "Instant transaction processing.",
    desc: "Merchant services account integrations to accept credit cards, debit card swipes, e-checks, and bank transfers directly through digital invoice payments.",
    pricing: "Pay-as-you-go",
    features: ["Instant card deposits", "Direct invoice links", "E-check processing", "Automatic record matching"],
    accent: "#059669",
    iconBg: "bg-emerald-50 text-emerald-600",
  }
];

const categoryIcons: Record<string, React.ElementType> = {
  Cloud: Cloud,
  "On-Premise": Monitor,
  Enterprise: Building2,
  "Add-on": Puzzle,
  Merchant: CreditCard,
};

export default function ProductsDirectory() {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", "Cloud", "On-Premise", "Enterprise", "Add-on", "Merchant"];

  const filteredProducts = activeFilter === "All"
    ? productsList
    : productsList.filter(p => p.category === activeFilter);

  return (
    <div className="bg-[#FAFBFD] min-h-screen text-[#0A0F1D] font-sans">
      
      {/* Clean Light Hero Header */}
      <div className="relative pt-32 pb-14 px-6 md:px-10 overflow-hidden border-b border-zinc-200/60">
        {/* Subtle background accent gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FAFBFD] to-zinc-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full blur-3xl opacity-20" style={{ background: `radial-gradient(circle, #0078D420, transparent 70%)` }} />
        
        <div className="relative max-w-7xl mx-auto">
          <Link 
            href="/quickbooks"
            className="text-xs font-semibold text-[#0078D4] hover:text-[#002060] transition-colors inline-flex items-center gap-1.5 mb-8"
          >
            ← Back to QuickBooks Hub
          </Link>
          <div className="max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#0078D4] bg-[#0078D4]/5 px-3 py-1.5 rounded-full border border-[#0078D4]/15">
              <Sparkles className="w-3 h-3" />
              6 Products Available
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-sans font-semibold tracking-tight text-[#0A0F1D] leading-[1.12]">
              QuickBooks Product Suite
            </h1>
            <p className="text-zinc-500 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
              Find the right version of QuickBooks for your business workflows. Explore detailed plans, core features, and pricing structures.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8">
        
        {/* Floating Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg shadow-zinc-900/5 border border-zinc-200/60 px-6 py-4 flex flex-wrap items-center gap-2.5 mb-12">
          <span className="text-xs font-semibold text-zinc-400 mr-2 hidden sm:block">Filter:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-[#0A0F1D] text-white shadow-sm"
                  : "bg-zinc-50 border border-zinc-200/80 text-zinc-600 hover:bg-zinc-100 hover:text-[#0A0F1D]"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-xs text-zinc-400 font-medium hidden sm:block">{filteredProducts.length} results</span>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
          {filteredProducts.map((p) => {
            const CatIcon = categoryIcons[p.category] || Cloud;
            return (
              <div
                key={p.id}
                className="group relative bg-white rounded-2xl border border-zinc-200/70 overflow-hidden hover:shadow-xl hover:shadow-zinc-900/[0.06] hover:-translate-y-0.5 transition-all duration-500"
              >
                {/* Accent top bar */}
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${p.accent}, ${p.accent}88)` }} />
                
                <div className="p-7 sm:p-8 flex flex-col justify-between h-full">
                  <div className="space-y-5">
                    {/* Top row: Icon + Category + Pricing */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl ${p.iconBg} flex items-center justify-center`}>
                          <CatIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: p.accent }}>
                            {p.category}
                          </span>
                          <h2 className="text-lg font-semibold text-[#0A0F1D] leading-snug">{p.name}</h2>
                        </div>
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        <div className="text-sm font-bold text-[#0A0F1D]">{p.pricing}</div>
                        <div className="text-[10px] text-zinc-400 font-medium">starting</div>
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-[13px] text-zinc-400 font-medium italic -mt-1">{p.tagline}</p>

                    {/* Description */}
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {p.desc}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 pt-1">
                      <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Key Features</div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                        {p.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2 text-[12px] text-zinc-700 font-medium">
                            <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: p.accent }} />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-6 mt-6 border-t border-zinc-100">
                    <Link
                      href={`/quickbooks/product/${p.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-lg transition-all duration-300 group/btn"
                      style={{ 
                        backgroundColor: p.accent,
                        color: "#fff",
                      }}
                    >
                      View Details & Analysis
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
