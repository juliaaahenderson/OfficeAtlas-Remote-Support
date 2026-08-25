"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Calendar, User, Clock } from "lucide-react";
import Link from "next/link";

interface BlogPost {
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
}

const blogsList: BlogPost[] = [
  {
    title: "Preparing for Year-End Closeout Procedures",
    category: "Tax Compliance",
    date: "Aug 24, 2026",
    author: "Elena Rostov",
    readTime: "10 min read",
    excerpt: "Detailed accounting checks to close your QuickBooks files cleanly. Learn how to verify vendor tax classifications, clear outstanding checks, match bank feeds, and format audit trails reports."
  },
  {
    title: "Fixing Bank Feed Duplication Issues",
    category: "Banking",
    date: "Aug 20, 2026",
    author: "Marcus Vance",
    readTime: "6 min read",
    excerpt: "How to resolve duplicate bank feeds without breaking previous months balance reconciliations sheets. Clean register ledger workflows."
  },
  {
    title: "Setting Up Custom Bonus Pay Rules",
    category: "Payroll",
    date: "Aug 18, 2026",
    author: "Sarah Jenkins",
    readTime: "8 min read",
    excerpt: "A tutorial to assign separate tax withholding parameters to single employee bonus checks inside QuickBooks Payroll modules."
  },
  {
    title: "Configuring Multi-User Mode Over LAN Hosting",
    category: "System Setup",
    date: "Aug 14, 2026",
    author: "David Vance",
    readTime: "12 min read",
    excerpt: "Setting correct server database configurations and folders permissions rules to allow multi-user access without H202 network faults."
  }
];

export default function BlogHub() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogsList.filter(
    (b) =>
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <h1 className="text-4xl sm:text-[42px] font-sans font-semibold tracking-tight text-[#0A0F1D] leading-tight">Latest Articles & Updates</h1>
          <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
            Read current strategies, billing alerts, payroll updates, and database configuration insights from our workspace editors.
          </p>
        </div>

        {/* Featured Card */}
        {filteredBlogs.length > 0 && searchQuery === "" && (
          <div className="bg-white border border-zinc-200/80 rounded-2xl overflow-hidden shadow-sm">
            <div className="p-8 space-y-4">
              <span className="text-[10px] text-zinc-400 font-extrabold uppercase tracking-wider block">
                FEATURED ARTICLE • {filteredBlogs[0].date}
              </span>
              <h2 className="text-2xl font-bold leading-tight text-[#0A0F1D]">
                {filteredBlogs[0].title}
              </h2>
              <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                {filteredBlogs[0].excerpt}
              </p>
              
              <div className="pt-4 border-t border-zinc-100 flex flex-wrap items-center gap-6 text-xs text-zinc-400 font-bold justify-between">
                <div className="flex gap-4">
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {filteredBlogs[0].author}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {filteredBlogs[0].readTime}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Standard Grid */}
        <div className="space-y-6 pt-4">
          <h2 className="text-lg font-bold">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredBlogs.slice(searchQuery === "" ? 1 : 0).map((blog) => (
              <div
                key={blog.title}
                className="bg-white border border-zinc-200/80 p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow duration-300"
              >
                <div className="space-y-2">
                  <div className="text-[9px] text-[#0078D4] font-extrabold uppercase">{blog.category}</div>
                  <h3 className="text-md font-bold leading-tight text-[#0A0F1D]">{blog.title}</h3>
                  <p className="text-xs text-zinc-500 leading-relaxed font-medium line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-400 font-semibold">
                  <span>{blog.date}</span>
                  <span>{blog.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
