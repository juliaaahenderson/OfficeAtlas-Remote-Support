"use client";

import { ArrowLeft, ArrowRight, FileText, BarChart, BookOpen } from "lucide-react";
import Link from "next/link";

export default function ResearchCenter() {
  const articles = [
    {
      title: "Analyzing Intuit's Billing Structure & Add-On Fees",
      desc: "Our independent evaluation reviews the rising costs of QuickBooks subscription licensing. Discover how add-on fees, payroll subscriptions, and direct deposit transactions fees accumulate, and how they compare with traditional local licensing pricing modules.",
      readTime: "15 min read",
      author: "OfficeAtlas Research",
      date: "Aug 10, 2026",
      metric: "Avg Cost Growth: +14% YoY"
    },
    {
      title: "The Legacy Desktop Sunsetting Timeline: Strategy Report",
      desc: "Intuit continues transition strategies from on-premise products to subscription service plans. Discover how support policies are changing, compatibility constraints with current systems, and options for companies managing offline ledger databases.",
      readTime: "10 min read",
      author: "OfficeAtlas Research",
      date: "Aug 05, 2026",
      metric: "Support Sunset: May 2027"
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
          <h1 className="text-4xl sm:text-[42px] font-sans font-semibold tracking-tight text-[#0A0F1D] leading-tight">Independent Research & Audits</h1>
          <p className="text-zinc-500 text-lg leading-relaxed font-medium">
            Strategic pricing comparisons, feature analyses, sunset roadmaps, and software performance audits conducted by OfficeAtlas.
          </p>
        </div>

        {/* Big Featured Study */}
        <div className="space-y-8">
          <h2 className="text-lg font-bold">Featured Studies</h2>
          <div className="space-y-8">
            {articles.map((art, idx) => (
              <div 
                key={idx}
                className="bg-white border border-zinc-200/80 p-8 rounded-2xl space-y-4 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-zinc-400">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-extrabold text-purple-600 bg-purple-50 px-2.5 py-1 rounded uppercase">
                      Analysis Report
                    </span>
                    <span>•</span>
                    <span>{art.date}</span>
                  </div>
                  <span className="text-[10px] font-extrabold text-emerald-600 uppercase bg-emerald-50 px-2 py-0.5 rounded">
                    {art.metric}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0A0F1D]">{art.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                  {art.desc}
                </p>

                <div className="pt-2 flex justify-between items-center text-xs text-zinc-400 font-bold border-t border-zinc-100">
                  <span>Written by {art.author}</span>
                  <span>{art.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology */}
        <div className="bg-zinc-50 border border-zinc-200/60 p-6 rounded-xl flex items-start gap-4">
          <BarChart className="w-5 h-5 text-[#0078D4] shrink-0 mt-0.5" />
          <div className="space-y-1.5 text-xs">
            <h4 className="font-bold">Our Research Methodology</h4>
            <p className="text-zinc-500 leading-relaxed font-medium">
              We compile data sheets through interviews with professional CPAs, public Intuit release manuals, current fee schedules auditing, and direct software testing. All audits are independent of Intuit.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
