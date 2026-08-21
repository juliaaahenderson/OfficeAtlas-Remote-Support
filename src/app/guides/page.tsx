"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  BookOpen, 
  Search, 
  Terminal, 
  Compass, 
  Scale, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  FileText,
  Clock,
  Check
} from "lucide-react";

interface GuideItem {
  id: string;
  title: string;
  category: "Core Apps" | "Collaboration" | "Security & Admin" | "AI & Innovation";
  level: "Beginner" | "Intermediate" | "Administrator";
  duration: string;
  description: string;
  targetProduct: string;
  steps: string[];
}

const guidesList: GuideItem[] = [
  {
    id: "word-layouts",
    title: "Mastering Advanced Document Layouts in Microsoft Word",
    category: "Core Apps",
    level: "Intermediate",
    duration: "10 min read",
    description: "Learn how to configure multi-section page numbers, custom header links, style hierarchies, and table of contents generation.",
    targetProduct: "Microsoft Word",
    steps: [
      "Define standard headings using Styles Gallery for automatic index sync.",
      "Insert Section Breaks instead of Page Breaks for independent margins.",
      "Double-click headers, disable 'Link to Previous' to unlink page sections.",
      "Navigate to References tab and generate a dynamic Table of Contents."
    ]
  },
  {
    id: "excel-formulas",
    title: "Excel Data Modeling: Dynamic Arrays & XLOOKUP Pipelines",
    category: "Core Apps",
    level: "Intermediate",
    duration: "12 min read",
    description: "Bypass old VLOOKUP rules. Master dynamic data spill zones, index lookup arrays, and nested sorting filters.",
    targetProduct: "Microsoft Excel",
    steps: [
      "Utilize XLOOKUP(lookup_value, lookup_array, return_array) for safer lookups.",
      "Deploy FILTER() to output multiple dynamic rows matching lookup parameters.",
      "Wrap arrays inside SORT() to structure calculations automatically.",
      "Verify calculations without referencing empty column arrays."
    ]
  },
  {
    id: "copilot-indexing",
    title: "Graph API Semantic Indexing Setup for Copilot",
    category: "AI & Innovation",
    level: "Administrator",
    duration: "18 min read",
    description: "Deep dive into configuring tenant-level context signals, semantic anchors, and search indexing compliance for Copilot trials.",
    targetProduct: "Microsoft Copilot",
    steps: [
      "Verify Microsoft Graph connectors license activation inside Admin Hub.",
      "Define metadata mappings to anchor custom corporate databases.",
      "Execute semantic index simulation tool to verify query permissions.",
      "Apply information barrier definitions to block restricted departments."
    ]
  },
  {
    id: "teams-webinar",
    title: "Configuring Large-scale Virtual Webinars in Teams",
    category: "Collaboration",
    level: "Intermediate",
    duration: "8 min read",
    description: "A checklist for configuring webinar presenter panels, custom registration templates, and dynamic attendee permissions.",
    targetProduct: "Microsoft Teams",
    steps: [
      "Schedule a new Webinar event inside the Teams Calendar interface.",
      "Build a custom registration form with required department questions.",
      "Edit meeting options to set presenter access policies (disable mics/cams).",
      "Export post-meeting telemetry sheets to track attendee duration."
    ]
  },
  {
    id: "onedrive-sync-rules",
    title: "OneDrive vs SharePoint: Silent Sync Deployment",
    category: "Security & Admin",
    level: "Administrator",
    duration: "15 min read",
    description: "Configure administrative templates (ADMX) to silently sync SharePoint document libraries and OneDrive paths to local directories.",
    targetProduct: "OneDrive",
    steps: [
      "Download current OneDrive administrative templates (OneDrive.admx).",
      "Configure 'Silently sign in users to OneDrive Sync client' in Group Policy.",
      "Find SharePoint Library ID using sync command parameters in web portal.",
      "Define the library ID inside 'Configure team site libraries to sync automatically'."
    ]
  },
  {
    id: "entra-conditional-access",
    title: "Deploying Entra ID Conditional Access Rules",
    category: "Security & Admin",
    level: "Administrator",
    duration: "20 min read",
    description: "Build robust conditional access policies to block legacy authentication protocols, enforce MFA, and mandate device enrollment status.",
    targetProduct: "Business Tools",
    steps: [
      "Access Microsoft Entra ID admin center, navigate to Protection > Conditional Access.",
      "Create a new policy targeting remote/external user security pools.",
      "Add application assignments for Office 365, Teams, and SharePoint.",
      "Enforce grant permissions: Require multifactor authentication and compliant device status."
    ]
  },
  {
    id: "click-to-run",
    title: "Click-to-Run (C2R) XML Deployment Configuration",
    category: "Security & Admin",
    level: "Administrator",
    duration: "14 min read",
    description: "Write custom XML configuration templates to deploy Office application packages silently across enterprise client workstations.",
    targetProduct: "Core Apps",
    steps: [
      "Navigate to config.office.com, construct your configuration XML template.",
      "Define target channel (Monthly Enterprise Channel) and application exclusions.",
      "Download deployment command executable (setup.exe).",
      "Run CLI: 'setup.exe /configure configuration.xml' on client machine."
    ]
  }
];

export default function GuidesHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [activeGuide, setActiveGuide] = useState<GuideItem | null>(null);

  const categories = ["All", "Core Apps", "Collaboration", "Security & Admin", "AI & Innovation"];
  const levels = ["All", "Beginner", "Intermediate", "Administrator"];

  const filteredGuides = guidesList.filter(guide => {
    const matchesCategory = selectedCategory === "All" || guide.category === selectedCategory;
    const matchesLevel = selectedLevel === "All" || guide.level === selectedLevel;
    const matchesSearch = 
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.targetProduct.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <div className="pt-24 pb-16 bg-[#FAFBFC] min-h-screen relative overflow-hidden font-sans text-slate-800">
      
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-50/50 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-50/40 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 space-y-12">
        
        {/* Page Hero Header */}
        <div className="space-y-4 max-w-3xl pt-8">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold tracking-widest text-[#0078D4] uppercase">
              DOCUMENTATION HUB
            </span>
            <span className="w-8 h-[1px] bg-[#0078D4]" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-sans font-semibold text-[#0A0F1D] tracking-tight leading-[1.08]">
            Guides & Implementation Manuals
          </h1>
          <p className="text-base sm:text-[17px] text-zinc-600 font-normal leading-relaxed max-w-2xl">
            Access deep-dive technical resources, step-by-step activation checklists, configuration guides, and command-line XML templates for Microsoft 365 tenant deployment.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.01)] flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Left search */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-450" />
            <input
              type="text"
              placeholder="Search guides, products, commands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all font-normal text-slate-800"
            />
          </div>

          {/* Right dropdown filter pills */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="space-y-1.5">
              <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-400 block px-0.5">Category</span>
              <div className="flex flex-wrap gap-1">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors border cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-[#0A0F1D] text-white border-[#0A0F1D]"
                        : "bg-slate-50 border-zinc-200 text-zinc-500 hover:text-zinc-800 hover:bg-slate-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-400 block px-0.5">Skill Level</span>
              <div className="flex flex-wrap gap-1">
                {levels.map(lvl => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(lvl)}
                    className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors border cursor-pointer ${
                      selectedLevel === lvl
                        ? "bg-[#0078D4] text-white border-[#0078D4]"
                        : "bg-slate-50 border-zinc-200 text-zinc-500 hover:text-zinc-800 hover:bg-slate-100"
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Guides Grid List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* List Column */}
          <div className={`${activeGuide ? "lg:col-span-6" : "lg:col-span-12"} space-y-4`}>
            <div className="flex justify-between items-center px-1">
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-zinc-400">
                Guides Available ({filteredGuides.length})
              </h4>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 ${activeGuide ? "max-h-[72vh] overflow-y-auto px-2 py-1 -mx-2 custom-scrollbar" : ""}`}>
              {filteredGuides.length > 0 ? (
                filteredGuides.map(guide => (
                  <button
                    key={guide.id}
                    onClick={() => setActiveGuide(guide)}
                    className={`text-left p-6 bg-white border rounded-2xl transition-all duration-300 flex flex-col gap-3 group relative cursor-pointer ${
                      activeGuide?.id === guide.id
                        ? "border-[#0078D4] shadow-md ring-1 ring-[#0078D4]/20"
                        : "border-zinc-200/80 hover:border-zinc-300 hover:shadow-sm"
                    }`}
                  >
                    <div className="flex justify-between items-start w-full">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-bold uppercase tracking-wider bg-blue-50 text-[#0078D4] px-2 py-0.5 rounded">
                          {guide.category}
                        </span>
                        <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          guide.level === "Beginner" ? "bg-green-50 text-green-600" :
                          guide.level === "Intermediate" ? "bg-amber-50 text-amber-600" :
                          "bg-purple-50 text-purple-600"
                        }`}>
                          {guide.level}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-[10px] text-zinc-400 font-semibold shrink-0">
                        <Clock className="w-3.5 h-3.5" /> {guide.duration}
                      </span>
                    </div>

                    <div className="space-y-1.5 flex-1">
                      <h3 className="text-lg font-sans font-semibold text-[#0A0F1D] group-hover:text-[#0078D4] transition-colors leading-snug">
                        {guide.title}
                      </h3>
                      <p className="text-zinc-500 text-sm font-normal leading-relaxed">
                        {guide.description}
                      </p>
                    </div>

                    <div className="flex justify-between items-center pt-3 border-t border-zinc-100 w-full mt-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        Target: {guide.targetProduct}
                      </span>
                      <span className="text-xs font-bold text-[#0078D4] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform duration-300">
                        Interactive Setup <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </button>
                ))
              ) : (
                <div className="col-span-full text-center py-16 bg-white border border-dashed border-zinc-200 rounded-2xl space-y-3">
                  <p className="text-sm text-zinc-450 font-semibold">No guides match your search parameters.</p>
                  <button 
                    onClick={() => { setSearchQuery(""); setSelectedCategory("All"); setSelectedLevel("All"); }}
                    className="text-xs font-bold text-[#0078D4] hover:underline"
                  >
                    Reset Filter Queries
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Detailed Guide Interactive Drawer Column */}
          <AnimatePresence>
            {activeGuide && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="lg:col-span-6 bg-white border border-zinc-200/80 rounded-2xl shadow-xl p-6 sm:p-8 space-y-6 sticky top-28"
              >
                {/* Drawer close button */}
                <div className="flex justify-between items-center border-b border-zinc-150 pb-4">
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-zinc-400">Step-by-step Deployment</span>
                    <h2 className="text-xl font-sans font-semibold text-[#0A0F1D]">
                      {activeGuide.targetProduct} Specification
                    </h2>
                  </div>
                  <button 
                    onClick={() => setActiveGuide(null)}
                    className="text-xs font-bold text-zinc-450 hover:text-zinc-700 bg-slate-50 border border-zinc-200 px-3 py-1.5 rounded-lg cursor-pointer transition-colors"
                  >
                    Close Panel
                  </button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-sans font-semibold text-[#0A0F1D] leading-snug">
                    {activeGuide.title}
                  </h3>
                  <p className="text-zinc-500 text-sm font-normal leading-relaxed">
                    {activeGuide.description}
                  </p>
                </div>

                {/* Steps Timeline block */}
                <div className="space-y-4 pt-2">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    Implementation Stages
                  </h4>

                  <div className="relative border-l border-zinc-150 ml-2 space-y-6">
                    {activeGuide.steps.map((step, idx) => (
                      <div key={idx} className="relative pl-6 flex items-start gap-4">
                        {/* Bullet step point */}
                        <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-[#0078D4] border border-white ring-4 ring-blue-50" />
                        <div className="space-y-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#0078D4] block font-mono">Stage {idx + 1}</span>
                          <span className="text-sm text-zinc-650 font-normal leading-relaxed block">{step}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Terminal info block if Administrator */}
                {activeGuide.level === "Administrator" && (
                  <div className="bg-[#0A0F1D] text-indigo-200 rounded-xl p-4 border border-slate-800 space-y-2">
                    <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-bold uppercase tracking-wider border-b border-slate-800/80 pb-2">
                      <Terminal className="w-3.5 h-3.5" /> deployment-console.sh
                    </div>
                    <pre className="font-mono text-[10px] sm:text-xs leading-normal select-all overflow-x-auto pt-1 cursor-pointer">
                      {activeGuide.id === "copilot-indexing" && "$ office-telemetry --connector verify --connector-id microsoft.graph.semantic --compliance max"}
                      {activeGuide.id === "onedrive-sync-rules" && "$ reg add \"HKLM\\Software\\Policies\\Microsoft\\OneDrive\" /v \"SilentAccountConfig\" /t REG_DWORD /d 1 /f"}
                      {activeGuide.id === "entra-conditional-access" && "$ azure-entra-cli policy create --name \"Enforce_MFA_Compliant_Devices\" --grant MFA,Compliant"}
                      {activeGuide.id === "click-to-run" && "$ setup.exe /configure configuration.xml"}
                    </pre>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
