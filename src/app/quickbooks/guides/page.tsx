"use client";

import { useState, useEffect, Suspense } from "react";
import { ArrowLeft, ArrowRight, Search, BookOpen, Clock, Sparkles, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface GuideArticle {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  desc: string;
  content: string[];
}

const guidesList: GuideArticle[] = [
  {
    slug: "how-to-start",
    title: "How to Get Started with QuickBooks Workspace Setup",
    category: "Getting Started",
    readTime: "12 min read",
    desc: "Complete layout instructions to configure business profiles, tax reporting forms, register credentials, and link charts of accounts.",
    content: [
      "Step 1: Set up your Company Profile. Enter legal business names, registration numbers, tax entity selections (LLC, S-Corp, etc.), and contact phone numbers.",
      "Step 2: Customize your Chart of Accounts. Create custom categories matching your business expense flows, asset tracking rules, and transaction accounts.",
      "Step 3: Establish security configurations. Implement multi-factor authentication (MFA) and assign workspace access privileges to administrative staff."
    ]
  },
  {
    slug: "bank-feeds-reconciliation",
    title: "Reconciling Bank Feeds and Imports",
    category: "Banking",
    readTime: "8 min read",
    desc: "How to match bank statement line entries, define rules parameters, clear exceptions records, and complete trial balancing audits.",
    content: [
      "Step 1: Securely connect your business checking cards and primary bank accounts via secure feeds.",
      "Step 2: Set up custom matching rules. Make QuickBooks auto-match recurring fuel, utilities, and vendor charges to their target expense types.",
      "Step 3: Process exceptions. Clean up mismatched accounts logs and perform the trial balancing checklist at the end of each fiscal month."
    ]
  },
  {
    slug: "custom-invoice-designs",
    title: "Designing and Customizing Digital Invoices",
    category: "Invoicing",
    readTime: "6 min read",
    desc: "Step-by-step styling tutorial to format invoicing layouts, custom data fields, payment link overlays, and email dispatch setups.",
    content: [
      "Step 1: Open the layouts editor and import your corporate logo. Set brand hex colors and select premium typefaces.",
      "Step 2: Add custom fields. Add terms boxes, customer purchase orders reference IDs, and payment deadline terms.",
      "Step 3: Attach direct transaction pathways. Enable card processing options and direct bank ACH links to outgoing templates."
    ]
  },
  {
    slug: "quarterly-taxes-reporting",
    title: "Quarterly Estimated Taxes Preparation Guide",
    category: "Taxes",
    readTime: "10 min read",
    desc: "Calculate estimated taxes liabilities schedules and export accounting summaries directly formatted for IRS compliance filing.",
    content: [
      "Step 1: Review operational reports. Pull P&L dashboards and confirm all deposits are fully categorized.",
      "Step 2: Generate estimated quarterly tax schedules inside your tax module workspace.",
      "Step 3: Export 1099 compliance tables and submit estimated balances through official electronic routes."
    ]
  },
  {
    slug: "employee-payroll-configurations",
    title: "Configuring Employees Payroll Paycheck Rules",
    category: "Payroll",
    readTime: "9 min read",
    desc: "Setting tax withholding formulas, custom bonus pay classifications, W-2 exports configurations, and payment profiles.",
    content: [
      "Step 1: Set up employee profile records, state tax forms registries, and routing numbers.",
      "Step 2: Configure overtime scales, vacation calculations, and standard work schedules.",
      "Step 3: Establish benefit plans, set up payroll runs calendar, and verify direct deposit clearance."
    ]
  }
];

function GuidesDirectoryContent() {
  const searchParams = useSearchParams();
  const guideQuery = searchParams.get("guide");

  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGuide, setSelectedGuide] = useState<GuideArticle | null>(null);

  // Sync guide slug from URL parameter
  useEffect(() => {
    if (guideQuery) {
      const matched = guidesList.find(g => g.slug === guideQuery);
      if (matched) {
        setSelectedGuide(matched);
      }
    }
  }, [guideQuery]);

  const categories = ["All", "Getting Started", "Banking", "Invoicing", "Taxes", "Payroll"];

  const filteredGuides = guidesList.filter((g) => {
    const matchesCategory = activeCategory === "All" || g.category === activeCategory;
    const matchesSearch = g.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          g.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
                QuickBooks Guides & Tutorials
              </h1>
              <p className="text-zinc-500 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
                Find step-by-step configuration workflows, accounting definitions, and management solutions.
              </p>
            </div>
            
            {/* SVG Illustration - Guides theme */}
            <div className="hidden lg:flex justify-end">
              <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Book base */}
                <rect x="80" y="30" width="240" height="140" rx="8" fill="white" stroke="#E4E7EC" strokeWidth="1.5"/>
                <line x1="200" y1="30" x2="200" y2="170" stroke="#E4E7EC" strokeWidth="1.5"/>
                {/* Page lines left */}
                <rect x="100" y="50" width="80" height="8" rx="2" fill="#0078D4" opacity="0.15"/>
                <rect x="100" y="68" width="70" height="6" rx="2" fill="#F3F4F6"/>
                <rect x="100" y="80" width="60" height="6" rx="2" fill="#F3F4F6"/>
                <rect x="100" y="92" width="75" height="6" rx="2" fill="#F3F4F6"/>
                
                {/* Page lines right */}
                <rect x="220" y="50" width="80" height="8" rx="2" fill="#0078D4" opacity="0.15"/>
                <rect x="220" y="68" width="65" height="6" rx="2" fill="#F3F4F6"/>
                <rect x="220" y="80" width="75" height="6" rx="2" fill="#F3F4F6"/>
                <rect x="220" y="92" width="60" height="6" rx="2" fill="#F3F4F6"/>
                
                {/* Small checklist mockup */}
                <rect x="220" y="112" width="10" height="10" rx="3" fill="#22C55E" opacity="0.2"/>
                <circle cx="225" cy="117" r="2" fill="#22C55E"/>
                <rect x="235" y="115" width="45" height="4" rx="1" fill="#E5E7EB"/>
                
                <rect x="220" y="128" width="10" height="10" rx="3" fill="#22C55E" opacity="0.2"/>
                <circle cx="225" cy="133" r="2" fill="#22C55E"/>
                <rect x="235" y="131" width="40" height="4" rx="1" fill="#E5E7EB"/>
                
                {/* Bookmark */}
                <path d="M190 30 L190 70 L195 65 L200 70 L200 30 Z" fill="#0078D4" opacity="0.8"/>
                <text x="200" y="190" textAnchor="middle" fill="#9CA3AF" fontSize="10" fontWeight="700" fontFamily="system-ui">Knowledge Hub</text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8">
        
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg shadow-zinc-900/5 border border-zinc-200/60 p-6 flex flex-col md:flex-row md:items-center justify-between gap-5 mb-10">
          {/* Filters */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#0A0F1D] text-white shadow-sm"
                    : "bg-zinc-50 border border-zinc-200/80 text-zinc-650 hover:bg-zinc-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:max-w-xs bg-zinc-50 border border-zinc-200/85 rounded-xl overflow-hidden flex items-center px-4">
            <Search className="w-4 h-4 text-zinc-400 shrink-0" />
            <input
              type="text"
              placeholder="Search guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-3.5 text-xs bg-transparent focus:outline-none font-medium text-[#0A0F1D]"
            />
          </div>
        </div>

        {/* Guides List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map((guide) => (
            <div 
              key={guide.slug}
              className="group bg-white border border-zinc-200/70 p-6 rounded-2xl flex flex-col justify-between hover:shadow-xl hover:shadow-zinc-900/[0.03] hover:-translate-y-1 transition-all duration-500"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#0078D4] bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider border border-blue-100">
                    {guide.category}
                  </span>
                  <span className="text-[11px] text-zinc-400 font-semibold">{guide.readTime}</span>
                </div>
                <h3 className="text-base font-semibold text-[#0A0F1D] group-hover:text-[#0078D4] transition-colors duration-300 leading-snug">
                  {guide.title}
                </h3>
                <p className="text-[13px] text-zinc-500 leading-relaxed font-normal">
                  {guide.desc}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-zinc-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedGuide(guide)}
                  className="text-xs font-bold text-[#0078D4] hover:text-[#002060] transition-colors inline-flex items-center gap-1"
                >
                  Read Guide <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Slide-over Drawer / Modal Panel for Reading Guide */}
      {selectedGuide && (
        <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
          <div className="absolute inset-0 overflow-hidden">
            {/* Backdrop filter blur overlay */}
            <div 
              onClick={() => setSelectedGuide(null)} 
              className="absolute inset-0 bg-[#0A0F1D]/40 backdrop-blur-sm transition-opacity" 
            />

            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <div className="pointer-events-auto w-screen max-w-xl">
                <div className="flex h-full flex-col bg-white shadow-2xl border-l border-zinc-200">
                  
                  {/* Drawer Header */}
                  <div className="px-6 py-5 border-b border-zinc-150 flex items-center justify-between bg-zinc-50">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0078D4] bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                      {selectedGuide.category}
                    </span>
                    <button 
                      onClick={() => setSelectedGuide(null)}
                      className="rounded-lg p-1.5 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-200/50 transition-all"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Drawer Body Scroll Content */}
                  <div className="flex-1 overflow-y-auto px-7 py-8 space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
                        <Clock className="w-3.5 h-3.5" />
                        {selectedGuide.readTime}
                      </div>
                      <h1 className="text-2xl font-semibold text-[#0A0F1D] leading-snug">
                        {selectedGuide.title}
                      </h1>
                    </div>

                    <p className="text-zinc-600 text-[15px] leading-relaxed border-l-2 border-zinc-200 pl-4 italic">
                      {selectedGuide.desc}
                    </p>

                    <div className="space-y-6 pt-4">
                      <h3 className="text-sm font-bold uppercase text-zinc-400 tracking-wider">Step-by-Step Instructions</h3>
                      <div className="space-y-4">
                        {selectedGuide.content.map((paragraph, index) => (
                          <div key={index} className="bg-zinc-50 rounded-xl p-5 border border-zinc-150/60 flex gap-4">
                            <div className="w-6 h-6 rounded-full bg-[#0078D4]/10 text-[#0078D4] flex items-center justify-center text-xs font-bold shrink-0">
                              {index + 1}
                            </div>
                            <p className="text-sm text-zinc-700 leading-relaxed font-normal pt-0.5">
                              {paragraph}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Drawer Footer */}
                  <div className="border-t border-zinc-150 px-6 py-5 bg-zinc-50 flex items-center justify-end">
                    <button
                      onClick={() => setSelectedGuide(null)}
                      className="px-5 py-3 text-xs font-bold bg-[#0A0F1D] text-white hover:bg-[#0078D4] rounded-xl transition-all duration-300"
                    >
                      Done Reading
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default function GuidesDirectory() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-zinc-400">Loading Guides...</div>}>
      <GuidesDirectoryContent />
    </Suspense>
  );
}
