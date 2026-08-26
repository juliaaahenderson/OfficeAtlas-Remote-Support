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
      <div className="relative pt-28 pb-4 px-6 md:px-10 overflow-hidden border-b border-zinc-200/60">
        {/* Subtle background accent gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FAFBFD] to-zinc-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[300px] rounded-full blur-3xl opacity-20" style={{ background: `radial-gradient(circle, #0078D420, transparent 70%)` }} />
        
        <div className="relative max-w-7xl mx-auto">
          <Link 
            href="/quickbooks"
            className="text-xs font-semibold text-[#0078D4] hover:text-[#002060] transition-colors inline-flex items-center gap-1.5 mb-5"
          >
            ← Back to QuickBooks Hub
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: Text */}
            <div className="space-y-5">
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

            {/* Right: Premium SVG Product Grid Illustration */}
            <div className="hidden lg:flex justify-end">
              <svg width="420" height="240" viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Central hub circle */}
                <circle cx="210" cy="140" r="38" fill="#0078D4" stroke="#0078D4" strokeWidth="1.2" opacity="0.2"/>
                <circle cx="210" cy="140" r="20" fill="#0078D4" opacity="0.1"/>
                <text x="210" y="136" textAnchor="middle" fill="#0078D4" fontSize="10" fontWeight="800" fontFamily="system-ui">Quick</text>
                <text x="210" y="148" textAnchor="middle" fill="#0078D4" fontSize="10" fontWeight="800" fontFamily="system-ui">Books</text>
                
                {/* Connection lines to satellites */}
                <line x1="175" y1="120" x2="95" y2="60" stroke="#0078D4" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.25"/>
                <line x1="245" y1="120" x2="325" y2="60" stroke="#7C3AED" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.25"/>
                <line x1="175" y1="160" x2="85" y2="220" stroke="#0F766E" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.25"/>
                <line x1="245" y1="160" x2="335" y2="220" stroke="#EA580C" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.25"/>
                
                {/* Top-left: Invoicing */}
                <rect x="30" y="22" width="130" height="75" rx="12" fill="white" stroke="#E4E7EC" strokeWidth="1.2"/>
                <rect x="42" y="34" width="28" height="28" rx="7" fill="#EFF6FF"/>
                {/* Invoice icon */}
                <rect x="49" y="40" width="14" height="18" rx="2" fill="#0078D4" opacity="0.3"/>
                <rect x="52" y="44" width="8" height="2" rx="0.5" fill="#0078D4" opacity="0.6"/>
                <rect x="52" y="48" width="6" height="2" rx="0.5" fill="#0078D4" opacity="0.4"/>
                <rect x="52" y="52" width="8" height="2" rx="0.5" fill="#0078D4" opacity="0.6"/>
                <text x="78" y="46" fill="#0A0F1D" fontSize="11" fontWeight="800" fontFamily="system-ui">Invoicing</text>
                <text x="78" y="58" fill="#9CA3AF" fontSize="8" fontWeight="600" fontFamily="system-ui">Digital billing</text>
                <rect x="42" y="72" width="50" height="4" rx="1.5" fill="#0078D4" opacity="0.12"/>
                <rect x="42" y="72" width="35" height="4" rx="1.5" fill="#0078D4" opacity="0.4"/>
                <rect x="100" y="72" width="48" height="4" rx="1.5" fill="#F3F4F6"/>
                <text x="42" y="86" fill="#22C55E" fontSize="8.5" fontWeight="700" fontFamily="system-ui">$12,480 sent</text>

                {/* Top-right: Reports */}
                <rect x="260" y="22" width="130" height="75" rx="12" fill="white" stroke="#E4E7EC" strokeWidth="1.2"/>
                <rect x="272" y="34" width="28" height="28" rx="7" fill="#F5F3FF"/>
                {/* Chart icon */}
                <rect x="279" y="50" width="4" height="10" rx="1" fill="#7C3AED" opacity="0.4"/>
                <rect x="285" y="45" width="4" height="15" rx="1" fill="#7C3AED" opacity="0.6"/>
                <rect x="291" y="42" width="4" height="18" rx="1" fill="#7C3AED" opacity="0.8"/>
                <text x="308" y="46" fill="#0A0F1D" fontSize="11" fontWeight="800" fontFamily="system-ui">Reports</text>
                <text x="308" y="58" fill="#9CA3AF" fontSize="8" fontWeight="600" fontFamily="system-ui">P&amp;L analytics</text>
                {/* Mini line chart */}
                <path d="M272 82 L290 76 L308 80 L326 72 L344 74 L362 68 L378 70" stroke="#7C3AED" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>
                <circle cx="344" cy="74" r="2.5" fill="#7C3AED" opacity="0.7"/>
                <text x="272" y="96" fill="#7C3AED" fontSize="8.5" fontWeight="700" fontFamily="system-ui">+18% growth</text>

                {/* Bottom-left: Bank Sync */}
                <rect x="20" y="185" width="130" height="75" rx="12" fill="white" stroke="#E4E7EC" strokeWidth="1.2"/>
                <rect x="32" y="197" width="28" height="28" rx="7" fill="#F0FDFA"/>
                {/* Bank icon */}
                <rect x="39" y="210" width="14" height="10" rx="1" fill="#0F766E" opacity="0.3"/>
                <rect x="42" y="205" width="8" height="5" rx="1" fill="#0F766E" opacity="0.5"/>
                <line x1="38" y1="220" x2="54" y2="220" stroke="#0F766E" strokeWidth="1.5" opacity="0.4"/>
                <text x="68" y="209" fill="#0A0F1D" fontSize="11" fontWeight="800" fontFamily="system-ui">Bank Sync</text>
                <text x="68" y="221" fill="#9CA3AF" fontSize="8" fontWeight="600" fontFamily="system-ui">Auto-reconcile</text>
                {/* Transaction rows */}
                <rect x="32" y="235" width="106" height="6" rx="2" fill="#F3F4F6"/>
                <rect x="32" y="235" width="78" height="6" rx="2" fill="#0F766E" opacity="0.12"/>
                <circle cx="128" cy="238" r="3" fill="#22C55E" opacity="0.5"/>
                <rect x="32" y="245" width="106" height="6" rx="2" fill="#F3F4F6"/>
                <rect x="32" y="245" width="92" height="6" rx="2" fill="#0F766E" opacity="0.08"/>
                <circle cx="128" cy="248" r="3" fill="#22C55E" opacity="0.5"/>

                {/* Bottom-right: Payroll */}
                <rect x="270" y="185" width="130" height="75" rx="12" fill="white" stroke="#E4E7EC" strokeWidth="1.2"/>
                <rect x="282" y="197" width="28" height="28" rx="7" fill="#FFF7ED"/>
                {/* Dollar/payroll icon */}
                <circle cx="296" cy="211" r="8" fill="#EA580C" opacity="0.12"/>
                <text x="296" y="215" textAnchor="middle" fill="#EA580C" fontSize="10" fontWeight="700" fontFamily="system-ui" opacity="0.6">$</text>
                <text x="318" y="209" fill="#0A0F1D" fontSize="11" fontWeight="800" fontFamily="system-ui">Payroll</text>
                <text x="318" y="221" fill="#9CA3AF" fontSize="8" fontWeight="600" fontFamily="system-ui">Auto tax filing</text>
                {/* Employee rows */}
                <circle cx="290" cy="242" r="4" fill="#EA580C" opacity="0.15"/>
                <rect x="298" y="240" width="40" height="4" rx="1" fill="#E5E7EB"/>
                <rect x="345" y="240" width="20" height="4" rx="1" fill="#22C55E" opacity="0.3"/>
                <circle cx="290" cy="254" r="4" fill="#EA580C" opacity="0.15"/>
                <rect x="298" y="252" width="35" height="4" rx="1" fill="#E5E7EB"/>
                <rect x="345" y="252" width="24" height="4" rx="1" fill="#22C55E" opacity="0.3"/>
              </svg>
            </div>
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
