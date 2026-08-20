"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, BarChart2, ArrowUpRight } from "lucide-react";

export default function FeaturedGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#0A0F1D] tracking-tight">
            Explore the Tools That Power Modern Work
          </h2>
        </div>

        {/* Asymmetric Magazine-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Card 1: Large Featured Word Block (Span 7, Row-span 2) */}
          <Link href="/products/word" className="md:col-span-7 md:row-span-2 block">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full h-full group border border-zinc-200/80 rounded-xl overflow-hidden shadow-sm hover:shadow-lg flex flex-col justify-between p-8 bg-zinc-50/50 hover:bg-white transition-all duration-300 cursor-pointer"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#0078D4] bg-[#0078D4]/5 px-2.5 py-1 rounded">
                    Documents
                  </span>
                  <span className="text-zinc-400 group-hover:text-[#0078D4] transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-[#0A0F1D] mb-4">
                  Mastering Document Layouts and Collaborative Design in Word
                </h3>
                <p className="text-[#0A0F1D]/70 text-sm leading-relaxed max-w-lg mb-8">
                  Explore advanced typography, section formatting, style hierarchies, and real-time co-authoring tools designed to make business communications professional.
                </p>
              </div>
              
              <div className="flex items-end justify-between border-t border-zinc-200/50 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#2B579A] text-white flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0A0F1D]">Microsoft Word</h4>
                    <p className="text-[10px] text-zinc-400">Advanced Guide</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#0078D4] group-hover:underline">
                  Read Guide
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Card 2: Tall Excel Feature (Span 5, Row-span 3) */}
          <Link href="/products/excel" className="md:col-span-5 md:row-span-3 block">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full h-full group border border-zinc-200/80 rounded-xl overflow-hidden shadow-sm hover:shadow-lg flex flex-col justify-between p-8 bg-zinc-50/50 hover:bg-white transition-all duration-300 cursor-pointer"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#107C41] bg-[#107C41]/5 px-2.5 py-1 rounded">
                    Spreadsheets
                  </span>
                  <span className="text-zinc-400 group-hover:text-[#107C41] transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-semibold text-[#0A0F1D] mb-4">
                  The Excel Power User Roadmap
                </h3>
                <p className="text-[#0A0F1D]/70 text-sm leading-relaxed mb-6">
                  From logical functions and XLOOKUP to Pivot Tables and power queries. Uncover calculation pipelines that turn massive data grids into simple, clear business insights.
                </p>
                
                {/* Visual Premium Dashboard Graph */}
                <div className="mt-6 relative bg-zinc-950 rounded-xl border border-zinc-800 p-5 overflow-hidden shadow-inner">
                  {/* Grid Lines in background */}
                  <div className="absolute inset-x-0 top-10 border-t border-zinc-900 border-dashed" />
                  <div className="absolute inset-x-0 top-20 border-t border-zinc-900 border-dashed" />

                  {/* Chart Header Info */}
                  <div className="flex justify-between items-center mb-4 relative z-10">
                    <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider">Formula Compute Rate</span>
                    <span className="text-xs font-mono font-bold text-[#107C41]">+38.2%</span>
                  </div>

                  {/* Bar Columns Container */}
                  <div className="h-24 flex items-end justify-between gap-3 relative z-10 px-1">
                    {[40, 65, 50, 85, 70, 95].map((h, i) => (
                      <motion.div 
                        key={i} 
                        className="w-full bg-gradient-to-t from-[#107C41] to-[#21A366] rounded-t-sm"
                        style={{ height: `${h}%` }}
                        whileHover={{ height: `${Math.min(h + 12, 100)}%` }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      />
                    ))}
                  </div>
                </div>

                {/* Tags to fill space below graph */}
                <div className="mt-6 flex flex-wrap gap-2 justify-center text-[10px] font-extrabold text-zinc-500 uppercase tracking-wider">
                  <span className="bg-zinc-100 px-2.5 py-1 rounded">XLOOKUP</span>
                  <span className="bg-zinc-100 px-2.5 py-1 rounded">Pivot Tables</span>
                  <span className="bg-zinc-100 px-2.5 py-1 rounded">Power Query</span>
                </div>
              </div>

              <div className="flex items-end justify-between border-t border-zinc-200/50 pt-6 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#107C41] text-white flex items-center justify-center">
                    <BarChart2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0A0F1D]">Microsoft Excel</h4>
                    <p className="text-[10px] text-zinc-400">Tutorial Series</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#107C41] group-hover:underline">
                  Unlock Insights
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Card 3: Smaller PowerPoint (Span 4) */}
          <Link href="/products/powerpoint" className="md:col-span-4 block">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full h-full group border border-zinc-200/80 rounded-xl overflow-hidden shadow-sm hover:shadow-lg flex flex-col justify-between p-6 bg-zinc-50/50 hover:bg-white transition-all duration-300 cursor-pointer"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-[#D83B01] bg-[#D83B01]/5 px-2 py-0.5 rounded">
                    Presentations
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#D83B01] transition-colors" />
                </div>
                <h4 className="text-lg font-bold text-[#0A0F1D] mb-2">Dynamic Morph Transitions</h4>
                <p className="text-xs text-[#0A0F1D]/75 leading-relaxed">
                  Create seamless animations across presentation slides with the smart Morph engine.
                </p>
              </div>
              <div className="flex items-center justify-end mt-6 border-t border-zinc-200/40 pt-4">
                <span className="text-xs font-bold text-[#D83B01] group-hover:underline">
                  Explore Designs
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Card 4: Smaller Teams (Span 3) */}
          <Link href="/products/teams" className="md:col-span-3 block">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full h-full group border border-zinc-200/80 rounded-xl overflow-hidden shadow-sm hover:shadow-lg flex flex-col justify-between p-6 bg-zinc-50/50 hover:bg-white transition-all duration-300 cursor-pointer"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[9px] uppercase font-bold tracking-wider text-[#464EB8] bg-[#464EB8]/5 px-2 py-0.5 rounded">
                    Collaboration
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#464EB8] transition-colors" />
                </div>
                <h4 className="text-lg font-bold text-[#0A0F1D] mb-2">Teams Channels</h4>
                <p className="text-xs text-[#0A0F1D]/75 leading-relaxed">
                  Build structured work environments using channels and custom tabs.
                </p>
              </div>
              <div className="flex items-center justify-end mt-6 border-t border-zinc-200/40 pt-4">
                <span className="text-xs font-bold text-[#464EB8] group-hover:underline">
                  Optimize Setup
                </span>
              </div>
            </motion.div>
          </Link>

          {/* Card 5: Horizontal Outlook Feature (Span 7) */}
          <Link href="/products/outlook" className="md:col-span-7 block">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full h-full group border border-zinc-200/80 rounded-xl overflow-hidden shadow-sm hover:shadow-lg flex flex-col sm:flex-row justify-between p-8 bg-zinc-50/50 hover:bg-white transition-all duration-300 gap-6 cursor-pointer"
            >
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <span className="inline-block text-[9px] uppercase font-bold tracking-wider text-[#0078D4] bg-[#0078D4]/5 px-2 py-0.5 rounded mb-4">
                    Organization
                  </span>
                  <h4 className="text-xl font-serif font-bold text-[#0A0F1D] mb-2">Inbox Zen: Outlook Rules & Scheduling</h4>
                  <p className="text-xs text-[#0A0F1D]/75 leading-relaxed">
                    Automate incoming mail categories and keep calendar booking pages organized with smart scheduling rules.
                  </p>
                </div>
                <div className="flex items-center justify-end mt-6 sm:mt-0 border-t border-zinc-200/40 pt-4">
                  <span className="text-xs font-bold text-[#0078D4] group-hover:underline">
                    Organize Inbox
                  </span>
                </div>
              </div>
              
              <div className="w-full sm:w-1/3 flex items-center justify-center border-t sm:border-t-0 sm:border-l border-zinc-200/50 pt-4 sm:pt-0 sm:pl-6">
                <div className="text-center">
                  <span className="text-3xl font-serif font-extrabold text-[#0078D4]">10x</span>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold mt-1">Faster Inbox Sorting</p>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Card 6: New OneDrive Card (Span 5) */}
          <Link href="/products/onedrive" className="md:col-span-5 block">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full h-full group border border-zinc-200/80 rounded-xl overflow-hidden shadow-sm hover:shadow-lg flex flex-col justify-between p-8 bg-zinc-50/50 hover:bg-white transition-all duration-300 gap-6 cursor-pointer"
            >
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <span className="inline-block text-[9px] uppercase font-bold tracking-wider text-[#00A2ED] bg-[#00A2ED]/5 px-2 py-0.5 rounded mb-4">
                    Cloud Storage
                  </span>
                  <h4 className="text-xl font-serif font-bold text-[#0A0F1D] mb-2">Secure Cloud Infrastructure</h4>
                  <p className="text-xs text-[#0A0F1D]/75 leading-relaxed">
                    Keep folders fully synchronized and collaborate on document versions in secure, real-time shared storage.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-6 border-t border-zinc-200/40 pt-4">
                  <div className="text-center text-left">
                    <span className="text-xl font-bold text-[#00A2ED]">1 TB</span>
                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest ml-1.5">Storage</span>
                  </div>
                  <span className="text-xs font-bold text-[#00A2ED] group-hover:underline">
                    Manage Files
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>

        </div>
      </div>
    </section>
  );
}
