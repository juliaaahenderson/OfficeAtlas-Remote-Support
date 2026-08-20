"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

export default function ResearchInsights() {
  return (
    <section id="research" className="py-24 relative overflow-hidden font-sans border-y border-zinc-200/50">

      {/* Full Width Background Image in Original Colors */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/minimal-glassmorphic.jpg"
          alt="Minimal Glassmorphic Tech Composition"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* Symmetrical Header Block */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
              Research & Insights
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            View all research
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Main Large Featured Article Column (Span 7) */}
          <Link href="/blog?paper=copilot-future" className="lg:col-span-7 block group relative z-10">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="relative w-full h-full rounded-3xl bg-[#070F1E] p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-lg cursor-pointer min-h-[440px]"
            >
              {/* Background Cover Image for the Card in Original Colors */}
              <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <img
                  src="/neon-holographic.jpg"
                  alt="Neon Holographic Geometry"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Glowing Ambient Backdrop Spot */}
              <div className="absolute top-1/2 right-12 w-48 h-48 rounded-full bg-blue-500/10 blur-[80px] pointer-events-none" />

              {/* Text Container */}
              <div className="max-w-md relative z-10 flex flex-col justify-between h-full min-h-[260px]">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug tracking-tight mb-4">
                    Microsoft Copilot <br />
                    and the Future <br />
                    of Work
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                    Evaluating semantic indexing architectures, Large Language Model prompt frameworks inside core Office apps, and actual performance metrics of active Copilot trials in enterprise networks.
                  </p>

                  {/* Unique Technical Tag Badges */}
                  <div className="mt-5 flex flex-wrap gap-2.5 relative z-25">
                    <span className="text-[11px] font-extrabold text-blue-400 bg-blue-950/50 border border-blue-900/60 px-3.5 py-1 rounded-full uppercase tracking-wider">#EnterpriseAI</span>
                    <span className="text-[11px] font-extrabold text-purple-400 bg-purple-950/50 border border-purple-900/60 px-3.5 py-1 rounded-full uppercase tracking-wider">#Security</span>
                    <span className="text-[11px] font-extrabold text-emerald-400 bg-emerald-950/50 border border-emerald-900/60 px-3.5 py-1 rounded-full uppercase tracking-wider">#Telemetry</span>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="flex justify-between items-end mt-8">
                  <span className="flex items-center gap-1.5 text-xs text-zinc-400 font-bold">
                    <Clock className="w-4 h-4 text-zinc-400" />
                    6 min read
                  </span>

                  <div className="w-11 h-11 rounded-full border border-white/25 bg-white/5 flex items-center justify-center text-white opacity-90 group-hover:opacity-100 group-hover:scale-105 group-hover:bg-white group-hover:text-[#070F1E] group-hover:border-white transition-all duration-300 shrink-0 shadow-sm">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Vertical List Column (Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 py-2">

            {/* Item 1 */}
            <Link href="/blog?paper=modern-collaboration" className="flex items-center gap-5 cursor-pointer group">
              <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 bg-white border border-zinc-200/50 flex items-center justify-center p-1.5 shadow-sm">
                <img
                  src="/collaboration-visual.png"
                  alt="Microsoft 365 Collaboration"
                  className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-sm sm:text-[15px] font-extrabold text-slate-800 leading-snug group-hover:text-blue-600 transition-colors">
                  How Microsoft 365 Changed Modern Collaboration
                </h4>
                <span className="flex items-center gap-1.5 text-[11px] text-zinc-400 font-bold mt-1.5">
                  <Clock className="w-3.5 h-3.5 text-zinc-400" />
                  4 min read
                </span>
              </div>
            </Link>

            {/* Item 2 */}
            <Link href="/blog?paper=cloud-productivity" className="flex items-center gap-5 cursor-pointer group">
              <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 bg-white border border-zinc-200/50 flex items-center justify-center p-1.5 shadow-sm">
                <img
                  src="/cloud-productivity.png"
                  alt="Cloud Productivity"
                  className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-sm sm:text-[15px] font-extrabold text-slate-800 leading-snug group-hover:text-blue-600 transition-colors">
                  Cloud Productivity: Benefits and Challenges
                </h4>
                <span className="flex items-center gap-1.5 text-[11px] text-zinc-400 font-bold mt-1.5">
                  <Clock className="w-3.5 h-3.5 text-zinc-400" />
                  7 min read
                </span>
              </div>
            </Link>

            {/* Item 3 */}
            <Link href="/blog?paper=office-evolution" className="flex items-center gap-5 cursor-pointer group">
              <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 bg-white border border-zinc-200/50 flex items-center justify-center p-1.5 shadow-sm">
                <img
                  src="/evolution-visual.png"
                  alt="Office Evolution"
                  className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-sm sm:text-[15px] font-extrabold text-slate-800 leading-snug group-hover:text-blue-600 transition-colors">
                  The Evolution from MS Office to Microsoft 365
                </h4>
                <span className="flex items-center gap-1.5 text-[11px] text-zinc-400 font-bold mt-1.5">
                  <Clock className="w-3.5 h-3.5 text-zinc-400" />
                  5 min read
                </span>
              </div>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
