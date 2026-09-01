"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Package, 
  GitCompare, 
  BookOpen, 
  Newspaper, 
  ArrowRight,
  Sparkles
} from "lucide-react";

const links = [
  {
    title: "Office Products Catalog",
    description: "Browse version specifications, system requirements, and plan breakdowns.",
    href: "/products",
    icon: Package,
    badge: "Catalog",
    pillTag: "M365 & Legacy Plans",
    actionLabel: "Browse Catalog",
    accentBg: "bg-blue-50 text-[#0078D4] border-blue-200/80",
    pillBg: "bg-blue-100/70 text-[#0078D4]"
  },
  {
    title: "Compare Product Plans",
    description: "Side-by-side feature matrix of Home, Personal, Business, and Enterprise plans.",
    href: "/compare",
    icon: GitCompare,
    badge: "Matrix",
    pillTag: "Feature & Price Matrix",
    actionLabel: "Compare Plans",
    accentBg: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
    pillBg: "bg-emerald-100/70 text-emerald-700"
  },
  {
    title: "Technical Setup Guides",
    description: "Step-by-step documentation, configuration manuals, and setup workflows.",
    href: "/guides",
    icon: BookOpen,
    badge: "Docs",
    pillTag: "Configuration Manuals",
    actionLabel: "Read Technical Guides",
    accentBg: "bg-indigo-50 text-indigo-600 border-indigo-200/80",
    pillBg: "bg-indigo-100/70 text-indigo-700"
  },
  {
    title: "Office Knowledge Base",
    description: "In-depth insights, update announcements, and productivity tip analysis.",
    href: "/blog",
    icon: Newspaper,
    badge: "Articles",
    pillTag: "Publications & Updates",
    actionLabel: "Read Publications",
    accentBg: "bg-purple-50 text-purple-600 border-purple-200/80",
    pillBg: "bg-purple-100/70 text-purple-700"
  }
];

export default function ExistingResourcesLinks() {
  return (
    <section className="py-14 md:py-20 bg-[#F8FAFC] font-sans border-b border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-semibold text-[#0A0F1D] tracking-tight"
            >
              Explore More Office Resources
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-zinc-600 max-w-md font-normal leading-relaxed"
          >
            Access our complete research database, product comparisons, and technical manuals.
          </motion.p>
        </div>

        {/* Premium Resource Grid (Light Mode Only) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {links.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <Link
                  href={item.href}
                  className="group bg-white border border-zinc-200/90 hover:border-[#0078D4]/50 rounded-3xl p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full cursor-pointer"
                >
                  <div className="space-y-5">
                    {/* Top Row: Icon Container & Pill Tag */}
                    <div className="flex items-center justify-between">
                      <div className={`w-13 h-13 rounded-2xl border ${item.accentBg} flex items-center justify-center transition-transform group-hover:scale-105 duration-300 shadow-2xs`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${item.pillBg}`}>
                        {item.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-[#0A0F1D] group-hover:text-[#0078D4] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Action Link Footer */}
                  <div className="pt-5 mt-5 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-[#0078D4] group-hover:text-[#005a9e] transition-colors">
                    <span>{item.actionLabel}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
