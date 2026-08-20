"use client";

import { useEffect, useRef, useState } from "react";
import { X, Search, ArrowRight, CornerDownLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const popularSearches = [
    "Install Microsoft 365",
    "Microsoft 365 vs Office",
    "Activate Office",
    "Microsoft Teams guide",
    "Excel formulas",
  ];

  const suggestedTopics = [
    { title: "M365 Personal vs Family Comparison", category: "Compare" },
    { title: "Troubleshooting activation failures", category: "Guides" },
    { title: "Getting started with Copilot integrations", category: "Research" },
    { title: "Outlook email setup walkthrough", category: "Guides" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex flex-col bg-[#FCFCFC] p-6 sm:p-10 md:p-20 overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between w-full max-w-4xl mx-auto mb-10 md:mb-16">
            <span className="text-[12px] uppercase tracking-widest font-semibold text-[#0078D4]">
              Search Portal
            </span>
            <button
              onClick={onClose}
              className="flex items-center gap-2 group text-[#0A0F1D]/60 hover:text-[#0A0F1D] text-sm font-medium transition-colors"
            >
              Close
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-zinc-100 group-hover:bg-zinc-200 transition-colors">
                <X className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* Search Content */}
          <div className="w-full max-w-4xl mx-auto flex-1 flex flex-col justify-center">
            <div className="relative border-b border-zinc-300 pb-4 mb-10">
              <Search className="absolute left-0 top-3 text-zinc-400 w-7 h-7" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="What can we help you find?"
                className="w-full bg-transparent pl-10 pr-20 text-2xl sm:text-4xl md:text-5xl font-serif text-[#0A0F1D] outline-none placeholder-zinc-300 font-normal"
              />
              {query && (
                <div className="absolute right-0 top-4 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-100 text-zinc-500 text-[10px] uppercase font-bold tracking-wider">
                  Press Enter <CornerDownLeft className="w-2.5 h-2.5" />
                </div>
              )}
            </div>

            {/* Suggestions & Results Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              {/* Popular Searches */}
              <div className="md:col-span-5">
                <h3 className="text-[11px] uppercase tracking-wider font-bold text-zinc-400 mb-4">
                  Popular Searches
                </h3>
                <ul className="space-y-3">
                  {popularSearches.map((term, i) => (
                    <li key={i}>
                      <button
                        onClick={() => setQuery(term)}
                        className="text-base font-medium text-[#0A0F1D]/80 hover:text-[#0078D4] transition-colors flex items-center gap-2 group text-left"
                      >
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-[#0078D4]" />
                        {term}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Suggested Topics / Results */}
              <div className="md:col-span-7">
                <h3 className="text-[11px] uppercase tracking-wider font-bold text-zinc-400 mb-4">
                  {query ? `Search Results for "${query}"` : "Suggested Content"}
                </h3>
                <div className="space-y-4">
                  {suggestedTopics.map((topic, i) => (
                    <div
                      key={i}
                      className="p-4 rounded-lg bg-zinc-50 border border-zinc-100 hover:border-[#0078D4]/30 hover:bg-white transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div>
                          <span className="inline-block text-[10px] uppercase tracking-wider font-bold text-[#0078D4] mb-1.5">
                            {topic.category}
                          </span>
                          <h4 className="text-base font-semibold text-[#0A0F1D] group-hover:text-[#0078D4] transition-colors">
                            {topic.title}
                          </h4>
                        </div>
                        <span className="p-1.5 rounded-full bg-white border border-zinc-200 group-hover:bg-[#0078D4] group-hover:text-white transition-colors">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
