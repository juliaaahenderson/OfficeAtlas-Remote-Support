"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, Clock, Calendar, User, BookOpen, ChevronRight, Search } from "lucide-react";
import { motion } from "framer-motion";

interface ResearchPaper {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  role: string;
  visual: string;
  summary: string;
  content: string[];
}

const researchPapers: ResearchPaper[] = [
  // 5 Blog Articles
  {
    id: "m365-explained",
    title: "Microsoft 365 Explained: A Complete Beginner's Guide",
    category: "GUIDE",
    date: "May 19, 2024",
    readTime: "8 min read",
    author: "Microsoft 365 Team",
    role: "Official Publication",
    visual: "/blog-m365-explained.png",
    summary: "Everything you need to know about Microsoft 365, plans, features, and getting started.",
    content: [
      "Microsoft 365 is a cloud-based subscription service that brings together the best tools for the way people work today. By combining best-in-class apps like Excel and Outlook with powerful cloud services like OneDrive and Microsoft Teams, Microsoft 365 lets anyone create and collaborate anywhere, on any device.",
      "This foundational guide explains the difference between various license packages (Personal, Family, Business, and Enterprise), details step-by-step setup guides, and discusses custom system deployment strategies to get you up and running.",
      "By syncing files to OneDrive, configuring shared folders, and setting up collaborative channels in Teams, you establish a unified, secure workstation capable of handling modern work demands."
    ]
  },
  {
    id: "whats-new",
    title: "What's New in Microsoft 365 May 2024",
    category: "UPDATES",
    date: "May 15, 2024",
    readTime: "6 min read",
    author: "Microsoft 365 Team",
    role: "Official Publication",
    visual: "/blog-whats-new.png",
    summary: "Explore the latest features and updates across Microsoft 365 apps.",
    content: [
      "The May 2024 update brings several powerful features to Microsoft 365 apps, focusing heavily on AI-assisted workflows and improved cross-app collaboration.",
      "Microsoft Teams introduces collaborative notes during meetings, allowing participants to co-create agendas and action items in real-time. Outlook enhances scheduling tools to help users book calendar spaces with automated location considerations.",
      "Furthermore, security updates introduce tenant-wide information barrier protocols to separate department-level files automatically within SharePoint hubs, ensuring compliance without administrative hassle."
    ]
  },
  {
    id: "excel-tips",
    title: "10 Excel Tips and Tricks You Should Know",
    category: "TIPS",
    date: "May 12, 2024",
    readTime: "7 min read",
    author: "Microsoft 365 Team",
    role: "Official Publication",
    visual: "/blog-excel-tips.png",
    summary: "Boost your productivity with these simple yet powerful Excel tips.",
    content: [
      "Spreadsheet management doesn't have to be tedious. By masterfully utilizing Excel's built-in calculation pipelines, you can transform data tables into visual reporting dashboards.",
      "This article reviews 10 essential tips, including lookup functions (XLOOKUP), Pivot Tables for swift summaries, data parsing techniques using Flash Fill, and custom formatting matrices.",
      "We also discuss advanced formula auditing pipelines to debug logical errors, helping you build cleaner, more readable, and highly accurate sheets for enterprise operations."
    ]
  },
  {
    id: "teams-collab",
    title: "Microsoft Teams Collaboration: A Complete Guide",
    category: "TEAMS",
    date: "May 10, 2024",
    readTime: "9 min read",
    author: "Microsoft 365 Team",
    role: "Official Publication",
    visual: "/blog-teams-collab.png",
    summary: "Master teamwork with channels, meetings, tasks, and more in Microsoft Teams.",
    content: [
      "Microsoft Teams is more than a simple chat application; it is a unified digital workspace designed for team communication and department organization.",
      "This complete guide covers setting up public and private channels, configuring notifications to reduce context switching, integrating planner tasks directly into tabs, and setting up collaborative channels.",
      "We explore optimization rules to schedule virtual webinars, configure webinar presenters, and manage recording files inside safe cloud storage paths."
    ]
  },
  {
    id: "onedrive-sharepoint",
    title: "OneDrive vs SharePoint: What's the Difference?",
    category: "SECURITY",
    date: "May 8, 2024",
    readTime: "6 min read",
    author: "Microsoft 365 Team",
    role: "Official Publication",
    visual: "/blog-onedrive-sharepoint.png",
    summary: "Understand the key differences and use cases to choose the right tool.",
    content: [
      "While both OneDrive and SharePoint Online leverage the same cloud infrastructure, they serve distinct collaborative and storage purposes in Microsoft 365.",
      "OneDrive acts as a private, user-specific cloud cabinet designed for personal file syncs, draft editing, and individual sharing. Conversely, SharePoint serves as a public library meant for department-wide communication portals, document storage, and team sharing.",
      "Understanding these parameters allows system administrators to deploy correct access policies, secure file sharing, and reduce data leakage risks."
    ]
  },
  // 4 Research Papers
  {
    id: "copilot-future",
    title: "Microsoft Copilot and the Future of Work",
    category: "AI & Productivity",
    date: "Aug 18, 2026",
    readTime: "14 min read",
    author: "David A. Sterling",
    role: "Lead AI Analyst",
    visual: "/neon-holographic.jpg",
    summary: "An empirical evaluation of semantic indexing architectures and actual performance metrics of active copilot trials in corporate structures.",
    content: [
      "Generative AI companion platforms are rapidly shifting workspace operations. This research paper evaluates semantic indexing architectures, Large Language Model prompt frameworks inside core Office applications, and actual performance metrics of active copilot trials in enterprise environments.",
      "By utilizing the Microsoft Graph API, Copilot securely parses tenant-level signals (emails, calendar entries, chats, and documents) to compile highly contextualized reference anchors. This system ensures that all generated answers respect existing Active Directory compliance policies, providing high security alongside productivity enhancements.",
      "Our telemetry indicates a significant reduction in time-to-draft metrics for communications (up to 38%) and a marked acceleration in meeting summarizations. We conclude that tenant-level context injection is the single most critical factor in driving user satisfaction with workspace AI companions."
    ]
  },
  {
    id: "modern-collaboration",
    title: "How Microsoft 365 Changed Modern Collaboration",
    category: "Collaboration",
    date: "Aug 02, 2026",
    readTime: "6 min read",
    author: "Elena Rostova",
    role: "Workplace Telemetry Expert",
    visual: "/collaboration-visual.png",
    summary: "An empirical look at real-time telemetry changes in virtual teamwork layouts and network socket sync models over the last five years.",
    content: [
      "Modern virtual collaboration is built on real-time data streaming and instant synchronization. This paper traces the architectural pivot from local document locking to real-time co-authoring tools in Word, shared Channels in Microsoft Teams, and centralized document version control within SharePoint Online.",
      "Using web socket connections and conflict-free replicated data types (CRDTs), multiple active users can make concurrent adjustments to spreadsheets or document structures without triggering version collisions. Our study analyzes these packet synchronization pipelines under varied network latencies.",
      "Ultimately, we find that reducing transaction sync times directly correlates with higher collaborative group performance. By removing file check-out structures and replacing them with cloud-first shared editing workspaces, team workflow friction was decreased by approximately 45%."
    ]
  },
  {
    id: "cloud-productivity",
    title: "Cloud Productivity: Security Benefits and Compliance Challenges",
    category: "Compliance & Cloud",
    date: "Aug 10, 2026",
    readTime: "12 min read",
    author: "Marcus Vance",
    role: "Enterprise Infrastructure Director",
    visual: "/cloud-productivity.png",
    summary: "Analyzing data protection rules, sovereignty compliance guidelines, and conditional access policies in Teams and SharePoint hubs.",
    content: [
      "Deploying productivity suites in the cloud introduces complex regulatory compliance frameworks (such as GDPR, HIPAA, and sovereign cloud data regulations). This publication investigates how SharePoint Online and Teams encrypt and isolate organizational data pools in multi-tenant cloud ecosystems.",
      "We detail the configuration of Data Loss Prevention (DLP) rules, conditional access policies, and Azure Information Protection (AIP) labels. These safeguards prevent accidental sharing of sensitive fields (PII, financial keys) outside of tenant-approved boundaries.",
      "While cloud infrastructure significantly lowers local hardware maintenance costs and supports remote workforce access, it requires rigorous cloud administration. We suggest establishing strict conditional access parameters based on device health and geographic location."
    ]
  },
  {
    id: "office-evolution",
    title: "The Evolution from MS Office to Microsoft 365",
    category: "SaaS Evolution",
    date: "Aug 14, 2026",
    readTime: "8 min read",
    author: "Dr. Sarah Jenkins",
    role: "Software Architecture Historian",
    visual: "/evolution-visual.png",
    summary: "Tracing the structural pivot from localized MSI application suite bundles to cloud-integrated continuous delivery SaaS systems.",
    content: [
      "For decades, personal computing productivity was bound to local machine environments through physical media installations (CD-ROMs containing Office 97, 2003 MSI files). This paper explores the transition to SaaS subscription licensing, Click-to-Run (C2R) deployment networks, and continuous cloud feature updates.",
      "The switch to cloud-bound installations allows Microsoft to push security definitions and application enhancements incrementally, eliminating the traditional multi-year product update cycle. Licensing is validated dynamically against Azure Active Directory (Microsoft Entra ID).",
      "This architecture guarantees that client software is perpetually up-to-date, lowering organizational maintenance overhead while introducing continuous access to cloud-linked capabilities like real-time search, cloud storage, and AI processing."
    ]
  }
];

function ResearchHubContent() {
  const searchParams = useSearchParams();
  const paperQuery = searchParams.get("paper");
  const [activePaperId, setActivePaperId] = useState(researchPapers[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    if (paperQuery && researchPapers.some(p => p.id === paperQuery)) {
      setActivePaperId(paperQuery);
    }
  }, [paperQuery]);

  const categories = ["All", ...Array.from(new Set(researchPapers.map(p => p.category)))];

  const filteredPapers = researchPapers.filter(paper => {
    const matchesCategory = selectedCategory === "All" || paper.category === selectedCategory;
    const matchesSearch = 
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const activePaper = researchPapers.find(p => p.id === activePaperId) || researchPapers[0];

  return (
    <div className="pt-32 pb-24 bg-slate-50/50 min-h-screen relative overflow-hidden font-sans text-slate-800">
      
      {/* Ambient Premium Light Glows */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-10 left-1/3 w-[600px] h-[600px] rounded-full bg-blue-100/20 blur-[130px]" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] rounded-full bg-indigo-100/20 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Navigation & Header */}
        <div className="space-y-6 mb-16">
          <Link 
            href="/" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-4">
              Blog & Research Publications
            </h1>
            <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
              Explore in-depth technical analyses, case studies, updates, and tutorials regarding Microsoft 365 applications, cloud infrastructure, and collaborative workflows.
            </p>
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column - Paper Selectors List (Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center px-1">
                <h4 className="text-[10px] uppercase tracking-widest font-extrabold text-zinc-400">
                  Select Article ({filteredPapers.length})
                </h4>
              </div>

              {/* Search input */}
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-450" />
                <input
                  type="text"
                  placeholder="Search articles & publications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs font-medium bg-white/60 border border-zinc-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all shadow-sm"
                />
              </div>

              {/* Categories wrapped selection */}
              <div className="flex flex-wrap gap-1.5 px-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all border ${
                      selectedCategory === cat
                        ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                        : "bg-white border-zinc-200 text-zinc-500 hover:text-zinc-800 hover:border-zinc-300"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3 max-h-[70vh] overflow-y-auto px-2 py-1 -mx-2 custom-scrollbar">
              {filteredPapers.length > 0 ? (
                filteredPapers.map((paper) => {
                  const isActive = activePaperId === paper.id;
                  return (
                    <button
                      key={paper.id}
                      onClick={() => setActivePaperId(paper.id)}
                      className={`w-full text-left flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 relative group cursor-pointer ${
                        isActive 
                          ? "bg-white border-blue-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] scale-[1.01]" 
                          : "bg-white/40 border-zinc-200/60 hover:bg-white hover:border-zinc-300/80 hover:shadow-sm"
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-extrabold text-blue-600 uppercase tracking-wider">
                            {paper.category}
                          </span>
                          {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />}
                        </div>
                        <h3 className="text-sm font-extrabold text-slate-900 mt-1 line-clamp-2 leading-snug">
                          {paper.title}
                        </h3>
                        <p className="text-xs text-zinc-400 mt-1.5 line-clamp-1 font-semibold">
                          {paper.summary}
                        </p>
                      </div>

                      <ChevronRight className={`w-4 h-4 text-zinc-300 transition-transform duration-300 self-center shrink-0 ${
                        isActive ? "translate-x-1 text-blue-500" : "group-hover:translate-x-0.5"
                      }`} />
                    </button>
                  );
                })
              ) : (
                <div className="text-center py-12 px-4 bg-white/30 border border-dashed border-zinc-200 rounded-2xl">
                  <p className="text-sm text-zinc-450 font-semibold">No publications match your search criteria.</p>
                  <button 
                    onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                    className="mt-3 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors underline"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Active Paper Deep-Dive Content (Span 7) */}
          <div className="lg:col-span-7 bg-white border border-zinc-200/80 rounded-2xl shadow-xl shadow-slate-100/50 overflow-hidden">
            
            {/* Visual Cover Header */}
            <div className="h-64 relative bg-[#070F1E] overflow-hidden select-none border-b border-zinc-200/20">
              <img 
                src={activePaper.visual} 
                alt={activePaper.title} 
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <span className="absolute bottom-4 left-6 bg-blue-600 text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded">
                {activePaper.category}
              </span>
            </div>

            {/* Content Details */}
            <div className="p-8 md:p-10 space-y-8">
              
              {/* Meta information row */}
              <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-400 font-bold border-b border-zinc-100 pb-6">
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {activePaper.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {activePaper.readTime}</span>
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> By {activePaper.author}</span>
              </div>

              {/* Publication Header Title */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  {activePaper.title}
                </h2>
                <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-zinc-200/40">
                  <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">{activePaper.author}</h5>
                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">{activePaper.role}</p>
                  </div>
                </div>
              </div>

              {/* Research Text Content */}
              <div className="space-y-5 text-sm sm:text-base text-slate-650 leading-relaxed font-medium">
                {activePaper.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>
                    {paragraph}
                  </p>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default function ResearchHub() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-zinc-400">Loading Research Hub...</div>}>
      <ResearchHubContent />
    </Suspense>
  );
}
