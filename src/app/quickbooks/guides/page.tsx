"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Search, BookOpen } from "lucide-react";
import Link from "next/link";

interface GuideArticle {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  desc: string;
}

const guidesList: GuideArticle[] = [
  {
    slug: "how-to-start",
    title: "How to Get Started with QuickBooks Workspace Setup",
    category: "Getting Started",
    readTime: "12 min read",
    desc: "Complete layout instructions to configure business profiles, tax reporting forms, register credentials, and link charts of accounts."
  },
  {
    slug: "bank-feeds-reconciliation",
    title: "Reconciling Bank Feeds and Imports",
    category: "Banking",
    readTime: "8 min read",
    desc: "How to match bank statement line entries, define rules parameters, clear exceptions records, and complete trial balancing audits."
  },
  {
    slug: "custom-invoice-designs",
    title: "Designing and Customizing Digital Invoices",
    category: "Invoicing",
    readTime: "6 min read",
    desc: "Step-by-step styling tutorial to format invoicing layouts, custom data fields, payment link overlays, and email dispatch setups."
  },
  {
    slug: "quarterly-taxes-reporting",
    title: "Quarterly Estimated Taxes Preparation Guide",
    category: "Taxes",
    readTime: "10 min read",
    desc: "Calculate estimated taxes liabilities schedules and export accounting summaries directly formatted for IRS compliance filing."
  },
  {
    slug: "employee-payroll-configurations",
    title: "Configuring Employees Payroll Paycheck Rules",
    category: "Payroll",
    readTime: "9 min read",
    desc: "Setting tax withholding formulas, custom bonus pay classifications, W-2 exports configurations, and payment profiles."
  }
];

export default function GuidesDirectory() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Getting Started", "Banking", "Invoicing", "Taxes", "Payroll"];

  const filteredGuides = guidesList.filter((g) => {
    const matchesCategory = activeCategory === "All" || g.category === activeCategory;
    const matchesSearch = g.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          g.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
          <h1 className="text-4xl sm:text-[42px] font-sans font-semibold tracking-tight text-[#0A0F1D] leading-tight">QuickBooks Guides & Tutorials</h1>
          <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
            Find step-by-step configuration workflows, accounting definitions, and management solutions. Search or select a topic to begin.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm flex items-center px-4">
          <Search className="w-4 h-4 text-zinc-400 shrink-0" />
          <input
            type="text"
            placeholder="Search guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-3 text-xs bg-transparent focus:outline-none font-medium text-[#0A0F1D]"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 border-b border-zinc-200/50 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#0A0F1D] text-white"
                  : "bg-white border border-zinc-200 text-[#0A0F1D] hover:bg-zinc-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Guides Grid */}
        <div className="space-y-6">
          {filteredGuides.length > 0 ? (
            filteredGuides.map((guide) => (
              <div
                key={guide.slug}
                className="bg-white border border-zinc-200/80 p-8 rounded-2xl flex flex-col sm:flex-row justify-between sm:items-center gap-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-3 text-xs font-semibold text-zinc-400">
                    <span className="text-[9px] font-extrabold text-[#0078D4] bg-blue-50 px-2 py-0.5 rounded uppercase">
                      {guide.category}
                    </span>
                    <span>•</span>
                    <span>{guide.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-[#0A0F1D]">{guide.title}</h2>
                  <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                    {guide.desc}
                  </p>
                </div>
                
                <Link
                  href={`/quickbooks/guides/${guide.slug}`}
                  className="px-4 py-2.5 text-xs font-bold text-white bg-[#0A0F1D] hover:bg-[#0078D4] rounded-lg transition-all inline-flex items-center gap-1.5 shrink-0"
                >
                  Read Guide
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white border border-zinc-200/80 rounded-2xl text-zinc-500 font-semibold text-xs">
              No matching guides found. Try adjusting your category filter or search query.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
