"use client";

import { useState } from "react";
import { 
  motion, 
  AnimatePresence
} from "framer-motion";
import { 
  ArrowRight, 
  BookOpen, 
  HelpCircle, 
  Sliders, 
  Download, 
  Key, 
  Wrench, 
  TrendingUp, 
  Newspaper,
  Laptop,
  Smartphone,
  CheckCircle2,
  Users,
  BarChart3,
  Mail,
  Lock,
  Settings,
  AlertCircle,
  Compass,
  ArrowUpRight,
  Check,
  X,
  FileText,
  Terminal,
  Activity,
  Layers,
  Database,
  Shield,
  Zap,
  Globe,
  Clock,
  CreditCard,
  ChevronRight,
  Calendar
} from "lucide-react";
import Link from "next/link";

export default function QuickBooksHub() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [hoveredPill, setHoveredPill] = useState<number | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
    }
  };

  const navItems = [
    {
      name: "Products",
      href: "/quickbooks/products",
      icon: Compass,
      label: "PRODUCTS DIRECTORY",
      title: "Explore the QuickBooks Product Suite",
      desc: "Compare Online, Desktop, Enterprise, and Payroll editions. Find the right configuration matching your business size and accounting demands.",
      tag: "Explore Suite",
      accentBg: "bg-blue-50 text-blue-600",
      accentColor: "#0078D4",
      features: ["License specifications", "Pricing configurations", "Add-on modular checks"],
      image: "/qb-tab-products.png",
      metaLabel: "VERSIONS",
      metaValue: "4 Suites Available"
    },
    {
      name: "Compare",
      href: "/quickbooks/compare",
      icon: Sliders,
      label: "COMPARISONS HUB",
      title: "In-Depth Edition Matrix Comparisons",
      desc: "Analyze core functionality differences between QuickBooks Online (Cloud) and QuickBooks Desktop (On-Premise) to choose the right path.",
      tag: "Compare Editions",
      accentBg: "bg-emerald-50 text-emerald-600",
      accentColor: "#107C41",
      features: ["Feature comparison grids", "System licensing costs", "Integrations limitations"],
      image: "/qb-tab-compare.png",
      metaLabel: "PARAMETERS",
      metaValue: "18 Matrix Specs"
    },
    {
      name: "Download",
      href: "/quickbooks/download",
      icon: Download,
      label: "DOWNLOAD CENTER",
      title: "Get QuickBooks Software Installers",
      desc: "Access official setup download links, system guidelines requirements, and product installation roadmaps securely.",
      tag: "Get Installer",
      accentBg: "bg-purple-50 text-purple-600",
      accentColor: "#7719AA",
      features: ["Installer executables", "Workstations setups", "Server database setup"],
      image: "/qb-tab-download.png",
      metaLabel: "FORMAT",
      metaValue: "EXE / DMG Setup"
    },
    {
      name: "Activation",
      href: "/quickbooks/activation",
      icon: Key,
      label: "REGISTRATION PORTAL",
      title: "Activate Licenses & Subscriptions",
      desc: "Verify your license credential codes, register company files databases, and authorize multi-user seats validation profiles.",
      tag: "Activate Software",
      accentBg: "bg-amber-50 text-amber-600",
      accentColor: "#D83B01",
      features: ["Validation keys entry", "Registration checks", "Multi-user seats resets"],
      image: "/qb-tab-activation.png",
      metaLabel: "LICENSING",
      metaValue: "Multi-User Seat Validation"
    },
    {
      name: "Guides",
      href: "/quickbooks/guides",
      icon: BookOpen,
      label: "GUIDES & TUTORIALS",
      title: "Step-by-Step Accounting Guides",
      desc: "Detailed config workflows for importing bank feeds, customizing invoice templates, and running payroll paycheck rules.",
      tag: "Browse Guides",
      accentBg: "bg-sky-50 text-sky-600",
      accentColor: "#0078D4",
      features: ["Daily banking feed rules", "Custom invoice designs", "Payroll paycheck logs"],
      image: "/qb-tab-guides.png",
      metaLabel: "TUTORIALS",
      metaValue: "12 CPA Roadmaps"
    },
    {
      name: "Troubleshooting",
      href: "/quickbooks/troubleshooting",
      icon: Wrench,
      label: "TROUBLESHOOTING HELP DESK",
      title: "Solve QuickBooks Error Codes",
      desc: "Diagnose connection faults, network sharing blocks, validation loops, and server database hosting failures.",
      tag: "Solve Errors",
      accentBg: "bg-rose-50 text-rose-600",
      accentColor: "#A80000",
      features: ["H202 connection setup", "Error 1904 registration", "Bank feed sync resets"],
      image: "/qb-tab-troubleshooting.png",
      metaLabel: "INDEX CODES",
      metaValue: "200+ Solved Logs"
    },
    {
      name: "Research",
      href: "/quickbooks/research",
      icon: TrendingUp,
      label: "RESEARCH LABORATORY",
      title: "Independent Audits & Sunset Reports",
      desc: "Review independent audits analyzing Intuit fee structures, pricing growth, and the legacy QuickBooks Desktop sunset timeline.",
      tag: "View Audits",
      accentBg: "bg-violet-50 text-violet-650",
      accentColor: "#5C2D91",
      features: ["Billing structure reviews", "Sunset strategy roadmaps", "CPA insights records"],
      image: "/qb-tab-research.png",
      metaLabel: "AUDITED PLANS",
      metaValue: "Sunset Timelines"
    },
    {
      name: "Blog",
      href: "/quickbooks/blog",
      icon: Newspaper,
      label: "THE JOURNAL",
      title: "Latest QuickBooks News & Tips",
      desc: "Keep up with the latest software updates, compliance checklists, year-end procedures, and accounting strategies.",
      tag: "Read News",
      accentBg: "bg-lime-50 text-lime-600",
      accentColor: "#107C41",
      features: ["Year-end close checkouts", "Bank statement reconciliation", "Compliance guidelines audits"],
      image: "/qb-tab-blog.png",
      metaLabel: "READ TIME",
      metaValue: "5-8 Min Briefs"
    }
  ];

  const leftPills = [
    {
      title: "Comprehensive Suite",
      desc: "From startup accounting to robust enterprise-grade inventory ERP.",
      icon: Layers
    },
    {
      title: "Local & Cloud Sync",
      desc: "Deploy either local file servers or real-time web workspaces.",
      icon: Globe
    },
    {
      title: "Integrated Payroll",
      desc: "Seamless employee paycheck disbursements and IRS filing tools.",
      icon: Users
    },
    {
      title: "Secure Settlement",
      desc: "Industry-standard invoice processing and merchant payments.",
      icon: Shield
    }
  ];

  const orbitingProducts = [
    {
      name: "Online",
      desc: "Cloud bookkeeping feeds",
      icon: Globe,
      style: { top: "0px", left: "195px" },
      href: "/quickbooks/product/online",
      color: "text-[#2CA01C]"
    },
    {
      name: "Desktop",
      desc: "On-premise database system",
      icon: Laptop,
      style: { top: "100px", right: "15px" },
      href: "/quickbooks/product/desktop",
      color: "text-blue-500"
    },
    {
      name: "Enterprise",
      desc: "Scalable ERP solutions",
      icon: Database,
      style: { bottom: "100px", right: "15px" },
      href: "/quickbooks/product/enterprise",
      color: "text-purple-500"
    },
    {
      name: "Payroll",
      desc: "Direct tax deposits compliance",
      icon: Users,
      style: { bottom: "0px", left: "195px" },
      href: "/quickbooks/product/payroll",
      color: "text-pink-500"
    },
    {
      name: "Time",
      desc: "Mobile hour tracker log",
      icon: Clock,
      style: { bottom: "100px", left: "15px" },
      href: "/quickbooks/product/time",
      color: "text-emerald-500"
    },
    {
      name: "Payments",
      desc: "Merchant invoice settlement",
      icon: CreditCard,
      style: { top: "100px", left: "15px" },
      href: "/quickbooks/product/payments",
      color: "text-teal-500"
    }
  ];

  const qbProducts = [
    {
      name: "QuickBooks Online",
      desc: "Cloud accounting anytime, anywhere.",
      icon: "qb",
      iconBg: "bg-[#2CA01C] text-white",
      href: "/quickbooks/product/online"
    },
    {
      name: "QuickBooks Desktop",
      desc: "Robust desktop accounting with advanced features.",
      icon: "qb",
      iconBg: "bg-[#2CA01C] text-white",
      href: "/quickbooks/product/desktop"
    },
    {
      name: "QuickBooks Enterprise",
      desc: "Scalable solutions for growing and complex businesses.",
      icon: "qb",
      iconBg: "bg-[#2CA01C] text-white",
      href: "/quickbooks/product/enterprise"
    },
    {
      name: "QuickBooks Payroll",
      desc: "Payroll made simple with confidence and compliance.",
      icon: "users",
      iconBg: "bg-[#E91E63] text-white",
      href: "/quickbooks/product/payroll"
    },
    {
      name: "QuickBooks Time",
      desc: "Track time, manage projects, and boost productivity.",
      icon: "clock",
      iconBg: "bg-[#4CAF50] text-white",
      href: "/quickbooks/product/time"
    },
    {
      name: "QuickBooks Payments",
      desc: "Accept payments faster and get paid your way.",
      icon: "card",
      iconBg: "bg-[#009688] text-white",
      href: "/quickbooks/product/payments"
    }
  ];

  const currentTab = navItems[activeTab];

  // Dynamic visual preview renderer producing premium, coded, pixel-perfect SaaS mockups
  const renderTabVisual = (tabIdx: number) => {
    switch (tabIdx) {
      case 0: // Products (SaaS Product pricing mockup)
        return (
          <div className="w-full h-full flex flex-col justify-between p-5 text-[#0A0F1D] font-sans">
            <div className="space-y-3">
              <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">PRODUCT GRID SELECTOR</div>
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-zinc-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-[11px] font-bold">QuickBooks Online</span>
                  </div>
                  <span className="text-[10px] font-bold text-zinc-500">$90/mo</span>
                </div>
                <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-zinc-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-[11px] font-bold">QuickBooks Desktop</span>
                  </div>
                  <span className="text-[10px] font-bold text-zinc-500">$649/yr</span>
                </div>
                <div className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-zinc-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                    <span className="text-[11px] font-bold">QuickBooks Enterprise</span>
                  </div>
                  <span className="text-[10px] font-bold text-zinc-500">Contact</span>
                </div>
              </div>
            </div>
            <p className="text-[9px] text-zinc-400 font-semibold leading-relaxed">
              * Rates reflect Intuit official pricing indices.
            </p>
          </div>
        );
      case 1: // Compare (Comparison matrix table)
        return (
          <div className="w-full h-full flex flex-col justify-between p-5 text-[#0A0F1D] font-sans">
            <div className="space-y-3">
              <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">COMPARISON MATRIX</div>
              <div className="border border-zinc-200/80 rounded-xl overflow-hidden bg-white text-[10px] font-semibold">
                <div className="grid grid-cols-3 bg-zinc-50 border-b border-zinc-250/60 p-2 text-zinc-400 font-bold">
                  <span>Feature</span>
                  <span className="text-center">Online</span>
                  <span className="text-center">Desktop</span>
                </div>
                <div className="grid grid-cols-3 p-2 border-b border-zinc-100 items-center">
                  <span className="text-zinc-650 font-bold">Cloud Sync</span>
                  <span className="flex justify-center text-emerald-600"><Check className="w-3.5 h-3.5" /></span>
                  <span className="flex justify-center text-zinc-300"><X className="w-3.5 h-3.5" /></span>
                </div>
                <div className="grid grid-cols-3 p-2 border-b border-zinc-100 items-center">
                  <span className="text-zinc-650 font-bold">Multi-User</span>
                  <span className="text-center text-zinc-500">25 Max</span>
                  <span className="text-center text-zinc-500">Unlimited</span>
                </div>
                <div className="grid grid-cols-3 p-2 items-center">
                  <span className="text-zinc-650 font-bold">Inventory</span>
                  <span className="text-center text-zinc-400">Basic</span>
                  <span className="text-center text-emerald-600 font-bold">Advanced</span>
                </div>
              </div>
            </div>
            <p className="text-[9px] text-zinc-400 font-semibold leading-relaxed">
              Compare core capability differences side-by-side.
            </p>
          </div>
        );
      case 2: // Download (Static flat vector illustration)
        return (
          <div className="w-full h-full flex items-center justify-center p-4">
            <img 
              src="/qb-tab-download.png" 
              alt="Download installers illustration" 
              className="max-h-[90%] max-w-[90%] object-contain drop-shadow-sm"
            />
          </div>
        );
      case 3: // Activation (Static flat vector illustration)
        return (
          <div className="w-full h-full flex items-center justify-center p-4">
            <img 
              src="/qb-tab-activation.png" 
              alt="Activation license security illustration" 
              className="max-h-[90%] max-w-[90%] object-contain drop-shadow-sm"
            />
          </div>
        );
      case 4: // Guides (Step-by-step roadmap dashboard)
        return (
          <div className="w-full h-full flex flex-col justify-between p-5 text-[#0A0F1D] font-sans">
            <div className="space-y-3">
              <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">SETUP ROADMAP</div>
              <div className="space-y-3 pl-2 relative border-l border-zinc-200">
                <div className="relative">
                  <div className="absolute -left-[13px] top-0.5 w-2 h-2 rounded-full bg-emerald-500" />
                  <div className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                    1. Connect Bank Feeds <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                  </div>
                  <div className="text-[9px] text-zinc-400">Establish API handshake feeds</div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[13px] top-0.5 w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <div className="text-[11px] font-bold text-blue-600">
                    2. Config Chart of Accounts
                  </div>
                  <div className="text-[9px] text-zinc-400">Map expense ledger headers</div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[13px] top-0.5 w-2 h-2 rounded-full bg-zinc-300" />
                  <div className="text-[11px] font-bold text-zinc-400">
                    3. Align Tax Rules profiles
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[9px] text-zinc-400 font-semibold leading-relaxed">
              Step-by-step integration roadmaps.
            </p>
          </div>
        );
      case 5: // Troubleshooting (Terminal diagnostic logs)
        return (
          <div className="w-full h-full flex flex-col justify-between p-4 bg-zinc-900 rounded-xl text-zinc-300 font-mono text-[9px] leading-relaxed select-none">
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 border-b border-zinc-800 pb-2">
                <div className="w-2 h-2 rounded-full bg-rose-500" />
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-zinc-500 text-[8px] pl-2">DIAGNOSTIC TERMINAL</span>
              </div>
              <div className="space-y-1 pt-1 font-semibold text-[8px] sm:text-[9px]">
                <div><span className="text-blue-400">[INFO]</span> Connecting QuickBooks server...</div>
                <div><span className="text-amber-400">[WARN]</span> Firewall blocked ports detected</div>
                <div className="text-rose-400"><span className="text-rose-500 font-bold">[ERR]</span> Diagnostic Code: H202</div>
                <div className="text-zinc-400 pt-1 leading-normal">
                  Suggested fix: Open database server manager hosting on file host.
                </div>
              </div>
            </div>
            <div className="text-[8px] text-zinc-500 border-t border-zinc-800 pt-2 font-sans font-semibold">
              Diagnostic code logs database.
            </div>
          </div>
        );
      case 6: // Research (Minimalist line graph analytics chart)
        return (
          <div className="w-full h-full flex flex-col justify-between p-5 text-[#0A0F1D] font-sans">
            <div className="space-y-2.5">
              <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">SUBSCRIPTION GROWTH INDEX</div>
              <div className="relative h-24 w-full flex items-end justify-between border-b border-zinc-200 pb-1">
                {/* SVG Line Graph */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 90">
                  <defs>
                    <linearGradient id="chart-glow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0078D4" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#0078D4" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {/* Background Grid Lines */}
                  <line x1="0" y1="20" x2="280" y2="20" stroke="#f1f1f1" strokeWidth="1" />
                  <line x1="0" y1="50" x2="280" y2="50" stroke="#f1f1f1" strokeWidth="1" />
                  
                  {/* Graph path */}
                  <path 
                    d="M 10 75 Q 80 65 140 45 T 270 15" 
                    fill="none" 
                    stroke="#0078D4" 
                    strokeWidth="2" 
                  />
                  <path 
                    d="M 10 75 Q 80 65 140 45 T 270 15 L 270 90 L 10 90 Z" 
                    fill="url(#chart-glow)" 
                  />
                  {/* Active dot */}
                  <circle cx="270" cy="15" r="4.5" fill="#0078D4" stroke="#fff" strokeWidth="1.5" />
                </svg>
                <span className="text-[8px] text-zinc-400 relative z-10">2024</span>
                <span className="text-[8px] text-zinc-400 relative z-10">2025</span>
                <span className="text-[8px] text-zinc-400 relative z-10">2026 (Est)</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-[9px] font-bold">
              <span className="text-zinc-400">TRAJECTORY</span>
              <span className="text-rose-600">+18.4% YoY Hikes</span>
            </div>
          </div>
        );
      case 7: // Blog (Editorial news cards preview)
        return (
          <div className="w-full h-full flex flex-col justify-between p-5 text-[#0A0F1D] font-sans">
            <div className="space-y-3">
              <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">EDITORIAL BRIEF</div>
              <div className="bg-white p-3.5 rounded-xl border border-zinc-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] space-y-1.5">
                <span className="text-[8px] font-extrabold text-[#0078D4] bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wider">
                  TAX COMPLIANCE
                </span>
                <h4 className="text-xs font-bold leading-snug">
                  Reconciling QuickBooks Online Bank Feeds for Q4 Close
                </h4>
                <p className="text-[9px] text-zinc-400 leading-normal font-medium line-clamp-2">
                  Learn step-by-step procedures for matching ledger logs, identifying sync discrepancies, and exporting reports.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[9px] text-zinc-400 font-semibold">
              <div className="w-4 h-4 rounded-full bg-zinc-200 flex items-center justify-center font-bold text-[8px]">SJ</div>
              <span>Sarah Jenkins, CPA • Aug 2026</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#FAFBFD] min-h-screen text-[#0A0F1D] font-sans pt-24 overflow-x-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative py-20 px-6 md:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h1 className="text-4xl sm:text-[44px] lg:text-[46px] font-sans font-semibold tracking-tight text-[#0A0F1D] leading-[1.1] mb-8">
              Everything QuickBooks,<br />
              in one <span className="text-[#0078D4]">clear</span> place.
            </h1>
            <p className="text-base sm:text-[17px] text-zinc-600 font-normal leading-relaxed max-w-xl">
              Explore products, comparisons, guides, installation help, activation resources, troubleshooting, and independent research — without the noise.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/quickbooks/products"
                className="px-7 py-3.5 text-[14px] font-bold text-white bg-[#0078D4] hover:bg-[#002060] rounded-lg transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow"
              >
                Explore QuickBooks
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="/quickbooks/guides"
                className="px-7 py-3.5 text-[14px] font-bold text-[#0078D4] bg-white hover:bg-blue-50/20 border border-[#0078D4]/40 rounded-lg transition-all duration-300 shadow-sm"
              >
                Browse Guides
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-7 relative flex justify-center">
            <div className="relative w-full max-w-[640px] select-none flex items-center justify-center">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#0078D4]/5 to-transparent rounded-full blur-2xl" />
              <img 
                src="/quickbooks-dashboard-device-mockup.jpg" 
                alt="QuickBooks Ecosystem Visual Mockup" 
                className="w-full h-auto object-contain hover:scale-102 transition-transform duration-500 relative z-10 mix-blend-multiply"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Premium Tabbed Navigation Board (Animated layout representation) */}
      <section className="py-16 px-6 md:px-10 max-w-7xl mx-auto space-y-10">
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-[36px] font-sans font-semibold text-[#0A0F1D] tracking-tight leading-tight">
            Ecosystem Navigation Hub
          </h2>
          <p className="text-zinc-500 text-base font-medium max-w-xl leading-relaxed">
            Click on any module below to dynamically slide open detailed subpage features, pricing models, and guides.
          </p>
        </div>

        {/* Tab Selection Row */}
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-none border-b border-zinc-200/60 pb-0">
          {navItems.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={item.name}
                onClick={() => setActiveTab(idx)}
                className={`relative px-5 py-4 font-semibold text-sm tracking-normal transition-all duration-300 flex items-center gap-2.5 select-none shrink-0 border-b-2 ${
                  isActive ? "text-[#0078D4] border-[#0078D4]" : "text-zinc-400 border-transparent hover:text-zinc-700 hover:border-zinc-300"
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 transition-colors duration-300 ${isActive ? "text-[#0078D4]" : ""}`} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Feature Showcase Board */}
        <div className="bg-white border border-zinc-200/80 p-8 md:p-12 rounded-3xl shadow-sm min-h-[385px] flex flex-col justify-between relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full h-full"
            >
              {/* Left Column Content */}
              <div className="lg:col-span-7 space-y-6">
                <h3 className="text-2xl sm:text-3xl font-sans font-semibold text-[#0A0F1D] leading-tight">
                  {currentTab.title}
                </h3>
                <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-medium">
                  {currentTab.desc}
                </p>

                {/* Sub-features checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {currentTab.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-zinc-650">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href={currentTab.href}
                    className="px-6 py-3.5 text-xs font-bold text-white bg-[#0078D4] hover:bg-[#002060] rounded-lg transition-all inline-flex items-center gap-2 shadow-sm"
                  >
                    Go to {currentTab.name}
                    <ArrowRight className="w-4 h-4 text-white" />
                  </Link>
                </div>
              </div>

              {/* Right Column Interactive Visual Display Dashboard Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-[340px] aspect-[340/360] rounded-2xl bg-zinc-50/50 border border-zinc-200/80 flex flex-col justify-between p-5 relative overflow-hidden shadow-inner">
                  {/* Ambient Light color glow */}
                  <div 
                    className="absolute -right-12 -top-12 w-32 h-32 rounded-full opacity-20 blur-2xl animate-pulse"
                    style={{ backgroundColor: currentTab.accentColor }}
                  />

                  {/* Top Status Header */}
                  <div className="flex justify-between items-center relative z-10">
                    <span className="text-[9px] font-extrabold tracking-widest text-zinc-400 uppercase">ECOSYSTEM WIDGET</span>
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold bg-[#0078D4]/5 text-[#0078D4] px-2.5 py-0.5 rounded-full border border-[#0078D4]/10">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" /> Synchronized
                    </span>
                  </div>

                  {/* Middle Content Coded UI visual dashboard mock */}
                  <div className="flex-1 flex items-center justify-center my-4 h-36 relative z-10 w-full overflow-hidden bg-white/40 border border-zinc-200/50 rounded-xl shadow-sm">
                    {renderTabVisual(activeTab)}
                  </div>

                  {/* Bottom Console Metadata Panel */}
                  <div className="bg-white/90 backdrop-blur-sm border border-zinc-200/60 rounded-xl p-3 space-y-2 text-[10px] font-semibold text-zinc-650 relative z-10 shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-400 font-bold uppercase tracking-wider">{currentTab.metaLabel}</span>
                      <span className="text-[#0A0F1D] font-bold">{currentTab.metaValue}</span>
                    </div>
                    <div className="h-px bg-zinc-150/60" />
                    <div className="flex justify-between items-center text-[9px] text-zinc-400">
                      <span>Server Integration</span>
                      <span className="text-emerald-600 font-extrabold uppercase tracking-wide">SECURE SSL</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 3. Explore the QuickBooks Ecosystem (orbital layout adaptation with exact hexagonal shapes) */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 4 Wide Horizontal Pills */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-[42px] font-sans font-semibold text-[#0A0F1D] tracking-tight leading-[1.1] mb-4">
                Explore the QuickBooks ecosystem
              </h2>
              <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-lg">
                Explore unified integrations, automation engines, and reporting parameters designed to scale your operational compliance.
              </p>
            </div>

            <div className="space-y-4">
              {leftPills.map((pill, idx) => {
                const PillIcon = pill.icon;
                return (
                  <div
                    key={pill.title}
                    onMouseEnter={() => setHoveredPill(idx)}
                    onMouseLeave={() => setHoveredPill(null)}
                    className="bg-white border border-zinc-200/80 p-5 rounded-2xl flex items-start gap-4 hover:border-[#0078D4]/40 hover:shadow-sm transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0078D4] flex items-center justify-center shrink-0">
                      <PillIcon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1 text-xs">
                      <h4 className="font-bold text-[#0A0F1D]">{pill.title}</h4>
                      <p className="text-zinc-500 font-medium leading-relaxed">{pill.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="pt-2">
              <Link
                href="/quickbooks/products"
                className="text-xs font-bold text-[#0078D4] hover:text-[#002060] transition-colors inline-flex items-center gap-1"
              >
                View all products <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Circular Orbit Node Map Map with Hexagonal Clips */}
          <div className="lg:col-span-6 flex justify-center relative select-none">
            <div className="relative w-[540px] h-[540px] flex items-center justify-center scale-95 md:scale-100">
              
              {/* Outer Dashed Orbit Path */}
              <div className="absolute w-[440px] h-[440px] rounded-full border border-dashed border-zinc-250/50" />
              
              {/* Inner Circle Glow background */}
              <div className="absolute w-52 h-52 rounded-full bg-gradient-to-tr from-[#0078D4]/5 to-transparent blur-xl" />

              {/* Central Core Circle */}
              <div className="absolute w-32 h-32 rounded-full bg-white border border-zinc-200/80 shadow-md flex flex-col items-center justify-center gap-1 z-20">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#0078D4] to-blue-600 text-white flex items-center justify-center shadow-md">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-extrabold text-zinc-400 tracking-widest uppercase">CORE</span>
              </div>

              {/* Exact Hexagonal Orbit Nodes Mapping */}
              {orbitingProducts.map((p, idx) => {
                const NodeIcon = p.icon;
                const isHighlighted = hoveredProduct === idx || (hoveredPill !== null && (
                  (hoveredPill === 0 && idx < 3) || // Comprehensive Suite maps to Online, Desktop, Enterprise
                  (hoveredPill === 1 && idx === 0) || // Local & Cloud maps to Online
                  (hoveredPill === 2 && idx === 3) || // Payroll maps to Payroll
                  (hoveredPill === 3 && idx === 5)    // Payments maps to Payments
                ));
                return (
                  <Link
                    key={p.name}
                    href={p.href}
                    onMouseEnter={() => setHoveredProduct(idx)}
                    onMouseLeave={() => setHoveredProduct(null)}
                    style={p.style}
                    className={`absolute w-[145px] h-[160px] flex items-center justify-center transition-all duration-300 z-30 ${
                      isHighlighted ? "scale-105" : ""
                    }`}
                  >
                    {/* SVG Hexagon border container */}
                    <svg className={`absolute inset-0 w-full h-full transition-colors duration-300 ${
                      isHighlighted ? "text-[#0078D4] drop-shadow-md" : "text-zinc-200"
                    }`} viewBox="0 0 100 110" preserveAspectRatio="none">
                      <path 
                        d="M50 2 L98 28 L98 82 L50 108 L2 82 L2 28 Z" 
                        fill="#FFFFFF" 
                        stroke="currentColor" 
                        strokeWidth="1.5" 
                      />
                    </svg>

                    {/* Hexagon Inner Content */}
                    <div className="relative flex flex-col items-center text-center p-3.5 space-y-1.5 w-full">
                      <div className={`w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-150 flex items-center justify-center shrink-0 ${p.color}`}>
                        <NodeIcon className="w-4.5 h-4.5" />
                      </div>
                      <div className="space-y-0.5 px-1">
                        <h4 className="text-[11px] font-extrabold text-[#0A0F1D] leading-tight tracking-tight">{p.name}</h4>
                        <p className="text-[8px] text-zinc-400 font-semibold leading-relaxed line-clamp-2 max-w-[105px]">
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}

            </div>
          </div>

        </div>
      </section>

      {/* 4. Find What You Need (Interactive Premium columns) */}
      <section className="py-20 bg-zinc-50/50 border-y border-zinc-200/40">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-3 space-y-3">
            <h2 className="text-3xl font-sans font-semibold text-[#0A0F1D] tracking-tight leading-tight">
              Find what you need
            </h2>
            <p className="text-zinc-500 text-xs font-semibold leading-relaxed max-w-[240px]">
              Navigate straight to our most popular research indexes, diagnostic libraries, and guides.
            </p>
          </div>

          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* LEARN */}
            <div className="bg-white border border-zinc-200/80 p-6 rounded-2xl flex flex-col justify-between hover:border-zinc-300 hover:shadow-sm transition-all duration-300 min-h-[190px]">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0078D4] flex items-center justify-center shrink-0">
                    <BookOpen className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-[9px] font-extrabold text-zinc-400 tracking-wider">LEARN</span>
                </div>
                <div className="space-y-2 text-xs font-semibold text-zinc-650">
                  <Link href="/quickbooks/guides" className="group flex items-center justify-between hover:text-[#0078D4] transition-colors">
                    <span>Guides & Tutorials</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-[#0078D4]" />
                  </Link>
                  <div className="h-px bg-zinc-100" />
                  <Link href="/quickbooks/guides" className="group flex items-center justify-between hover:text-[#0078D4] transition-colors">
                    <span>How-to Articles</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-[#0078D4]" />
                  </Link>
                </div>
              </div>
              <div className="pt-4 border-t border-zinc-100/60">
                <Link href="/quickbooks/guides" className="text-[10px] font-extrabold text-[#0078D4] hover:text-[#002060] flex items-center gap-1 uppercase tracking-wide">
                  Getting Started <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* SOLVE */}
            <div className="bg-white border border-zinc-200/80 p-6 rounded-2xl flex flex-col justify-between hover:border-zinc-300 hover:shadow-sm transition-all duration-300 min-h-[190px]">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Wrench className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-[9px] font-extrabold text-zinc-400 tracking-wider">SOLVE</span>
                </div>
                <div className="space-y-2 text-xs font-semibold text-zinc-650">
                  <Link href="/quickbooks/download" className="group flex items-center justify-between hover:text-[#0078D4] transition-colors">
                    <span>Installation Roadmap</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-[#0078D4]" />
                  </Link>
                  <div className="h-px bg-zinc-100" />
                  <Link href="/quickbooks/activation" className="group flex items-center justify-between hover:text-[#0078D4] transition-colors">
                    <span>License Key Setup</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-[#0078D4]" />
                  </Link>
                </div>
              </div>
              <div className="pt-4 border-t border-zinc-100/60">
                <Link href="/quickbooks/troubleshooting" className="text-[10px] font-extrabold text-[#0078D4] hover:text-[#002060] flex items-center gap-1 uppercase tracking-wide">
                  Troubleshooting Desk <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* UNDERSTAND */}
            <div className="bg-white border border-zinc-200/80 p-6 rounded-2xl flex flex-col justify-between hover:border-zinc-300 hover:shadow-sm transition-all duration-300 min-h-[190px]">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-[9px] font-extrabold text-zinc-400 tracking-wider">UNDERSTAND</span>
                </div>
                <div className="space-y-2 text-xs font-semibold text-zinc-650">
                  <Link href="/quickbooks/compare" className="group flex items-center justify-between hover:text-[#0078D4] transition-colors">
                    <span>Compare Editions</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-[#0078D4]" />
                  </Link>
                  <div className="h-px bg-zinc-100" />
                  <Link href="/quickbooks/research" className="group flex items-center justify-between hover:text-[#0078D4] transition-colors">
                    <span>sunset & Fee Audits</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-[#0078D4]" />
                  </Link>
                </div>
              </div>
              <div className="pt-4 border-t border-zinc-100/60">
                <Link href="/quickbooks/products" className="text-[10px] font-extrabold text-[#0078D4] hover:text-[#002060] flex items-center gap-1 uppercase tracking-wide">
                  Product Insights <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Featured Guide & Solution Comparisons */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Featured Guide */}
        <div className="lg:col-span-7 space-y-6 bg-white border border-zinc-200/80 p-8 rounded-3xl flex flex-col justify-between shadow-sm">
          <div className="space-y-4">
            <h3 className="text-2xl font-sans font-semibold text-[#0A0F1D] tracking-tight">
              How to Get Started with QuickBooks
            </h3>
            <p className="text-zinc-500 text-xs sm:text-sm leading-relaxed font-medium">
              A simple step-by-step guide to help you set up your account, configure essential settings, and start managing your business with confidence.
            </p>
            
            {/* Monitor Illustration Checklist Visual */}
            <div className="bg-[#FAFBFD] border border-zinc-200/60 p-6 rounded-2xl flex items-center justify-between gap-6 max-w-md">
              <div className="space-y-2 font-semibold text-[11px] text-zinc-650">
                <div className="flex items-center gap-2 text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Create your company
                </div>
                <div className="flex items-center gap-2 text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Connect your bank
                </div>
                <div className="flex items-center gap-2 text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Add customers
                </div>
                <div className="flex items-center gap-2 text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Send your first invoice
                </div>
              </div>
              <div className="w-16 h-16 rounded-xl bg-emerald-500/10 flex items-center justify-center font-extrabold text-emerald-600 text-lg">
                QB
              </div>
            </div>

            <div className="flex items-center gap-4 text-[11px] text-zinc-400 font-bold">
              <span className="bg-zinc-50 px-2.5 py-1 rounded border border-zinc-150">Beginner Friendly</span>
              <span>10 min read</span>
            </div>
          </div>

          <div className="pt-4">
            <Link
              href="/quickbooks/guides/how-to-start"
              className="px-6 py-3.5 text-xs font-bold text-white bg-[#0078D4] hover:bg-[#002060] rounded-lg transition-all flex items-center gap-2 w-max"
            >
              Read Guide
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </div>

        {/* Right Column: Solution Comparison Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-sans font-semibold text-[#0A0F1D] tracking-tight">
              Choose the right QuickBooks solution
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white border border-zinc-200/80 p-5 rounded-2xl flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Laptop className="w-4 h-4" />
              </div>
              <div className="space-y-1.5 flex-1 text-xs">
                <h4 className="font-bold text-[#0A0F1D]">QuickBooks Online vs Desktop</h4>
                <p className="text-zinc-500 font-medium leading-relaxed">
                  Compare features, pricing, and ideal use cases.
                </p>
                <Link href="/quickbooks/compare" className="text-[#0078D4] hover:text-[#002060] font-bold inline-flex items-center gap-0.5 pt-1">
                  Compare now <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-zinc-200/80 p-5 rounded-2xl flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <BarChart3 className="w-4 h-4" />
              </div>
              <div className="space-y-1.5 flex-1 text-xs">
                <h4 className="font-bold text-[#0A0F1D]">Compare Online Plans</h4>
                <p className="text-zinc-500 font-medium leading-relaxed">
                  Find the plan that fits your business needs perfectly.
                </p>
                <Link href="/quickbooks/products" className="text-[#0078D4] hover:text-[#002060] font-bold inline-flex items-center gap-0.5 pt-1">
                  Compare now <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-zinc-200/80 p-5 rounded-2xl flex items-start gap-4">
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-650 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div className="space-y-1.5 flex-1 text-xs">
                <h4 className="font-bold text-[#0A0F1D]">Enterprise Comparisons</h4>
                <p className="text-zinc-500 font-medium leading-relaxed">
                  Compare editions and find the right fit for your team.
                </p>
                <Link href="/quickbooks/compare" className="text-[#0078D4] hover:text-[#002060] font-bold inline-flex items-center gap-0.5 pt-1">
                  Compare now <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/quickbooks/compare"
              className="text-xs font-bold text-[#0078D4] hover:text-[#002060] transition-colors inline-flex items-center gap-1"
            >
              View all comparisons <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Need help getting QuickBooks running? (Progress circles) */}
      <section className="py-24 bg-white border-y border-zinc-200/50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-[36px] font-sans font-semibold text-[#0A0F1D] tracking-tight text-center">
              Need help getting QuickBooks running?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center relative max-w-4xl mx-auto">
            {/* Download */}
            <div className="flex flex-col items-center text-center space-y-4 relative">
              <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shadow-sm">
                <Download className="w-6 h-6" />
              </div>
              <div className="space-y-1 text-xs max-w-[200px]">
                <h4 className="font-bold text-[#0A0F1D]">DOWNLOAD</h4>
                <p className="text-zinc-500 font-semibold leading-relaxed">
                  Find the right download and installation resources.
                </p>
                <Link href="/quickbooks/download" className="text-[#0078D4] font-bold inline-flex items-center gap-0.5 pt-1 hover:text-[#002060]">
                  Go to downloads <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Activate */}
            <div className="flex flex-col items-center text-center space-y-4 relative">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 shadow-sm">
                <Lock className="w-6 h-6" />
              </div>
              <div className="space-y-1 text-xs max-w-[200px]">
                <h4 className="font-bold text-[#0A0F1D]">ACTIVATE</h4>
                <p className="text-zinc-500 font-semibold leading-relaxed">
                  Learn how activation and account setup work.
                </p>
                <Link href="/quickbooks/activation" className="text-[#0078D4] font-bold inline-flex items-center gap-0.5 pt-1 hover:text-[#002060]">
                  Go to activation <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Troubleshoot */}
            <div className="flex flex-col items-center text-center space-y-4 relative">
              <div className="w-16 h-16 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100 shadow-sm">
                <Settings className="w-6 h-6" />
              </div>
              <div className="space-y-1 text-xs max-w-[200px]">
                <h4 className="font-bold text-[#0A0F1D]">TROUBLESHOOT</h4>
                <p className="text-zinc-500 font-semibold leading-relaxed">
                  Find solutions to common issues and errors.
                </p>
                <Link href="/quickbooks/troubleshooting" className="text-[#0078D4] font-bold inline-flex items-center gap-0.5 pt-1 hover:text-[#002060]">
                  Go to troubleshooting <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Research & Insights + Latest Articles (Interactive Premium Layout) */}
      <section className="py-24 px-6 md:px-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Research & Insights */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-sans font-semibold text-[#0A0F1D] tracking-tight">
              Research & Insights
            </h2>
            <p className="text-zinc-500 text-sm font-medium leading-relaxed">
              In-depth research, product analysis, pricing breakdowns, and expert perspectives.
            </p>
          </div>

          <div className="bg-white border border-zinc-200/80 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 space-y-6 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute -right-16 -top-16 w-36 h-36 rounded-full bg-purple-500/5 blur-2xl" />

            <div className="space-y-4">
              <span className="text-[9px] tracking-wider font-extrabold text-purple-600 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                FEATURED RESEARCH
              </span>
              <h3 className="text-xl font-bold text-[#0A0F1D] tracking-tight">
                Understanding QuickBooks Beyond the Basics
              </h3>
              <p className="text-xs text-zinc-500 leading-relaxed font-semibold">
                A deep dive into features, license costs, and year-over-year pricing trajectory audits.
              </p>
            </div>
            
            {/* Highly Polished Coded Bar Chart Illustration */}
            <div className="h-44 bg-zinc-50/50 border border-zinc-150/80 rounded-2xl flex flex-col justify-between p-5 relative overflow-hidden shadow-inner">
              <div className="flex-1 flex gap-4 items-end justify-center w-full pb-2 relative z-10">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-50">
                  <div className="h-px bg-zinc-200" />
                  <div className="h-px bg-zinc-200" />
                  <div className="h-px bg-zinc-200" />
                </div>

                <div className="flex flex-col items-center gap-1.5 w-12">
                  <span className="text-[8px] font-bold text-zinc-400">+12%</span>
                  <div className="w-full h-12 bg-blue-400/80 rounded-t-lg transition-transform hover:scale-x-105" />
                  <span className="text-[9px] font-bold text-zinc-500">2024</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 w-12">
                  <span className="text-[8px] font-bold text-zinc-400">+18%</span>
                  <div className="w-full h-20 bg-blue-500/85 rounded-t-lg transition-transform hover:scale-x-105" />
                  <span className="text-[9px] font-bold text-zinc-500">2025</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 w-12">
                  <span className="text-[8px] font-bold text-zinc-400">+25%</span>
                  <div className="w-full h-28 bg-[#0078D4] rounded-t-lg transition-transform hover:scale-x-105" />
                  <span className="text-[9px] font-bold text-zinc-500">2026</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 w-12">
                  <span className="text-[8px] font-bold text-purple-500">+32%</span>
                  <div className="w-full h-24 bg-purple-500/80 rounded-t-lg transition-transform hover:scale-x-105" />
                  <span className="text-[9px] font-bold text-zinc-500">Est</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs font-bold pt-4 border-t border-zinc-150/60">
              <span className="text-zinc-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> 8 min read
              </span>
              <Link href="/quickbooks/research" className="text-[#0078D4] hover:text-[#002060] font-bold inline-flex items-center gap-1">
                Explore research <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Latest Articles */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-sans font-semibold text-[#0A0F1D] tracking-tight">
              Latest Articles
            </h2>
            <p className="text-zinc-500 text-sm font-medium leading-relaxed">
              Practical tips, tutorials, and the latest QuickBooks updates.
            </p>
          </div>

          <div className="space-y-4">
            
            {/* Article 1 */}
            <Link 
              href="/quickbooks/blog"
              className="bg-white border border-zinc-200/80 p-5 rounded-2xl flex items-center gap-4 hover:border-[#0078D4]/40 hover:shadow-sm transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0078D4] flex items-center justify-center shrink-0 font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
                🛠️
              </div>
              <div className="flex-1 min-w-0 space-y-1">
                <span className="text-[8px] font-extrabold text-[#0078D4] bg-blue-50 px-2 py-0.5 rounded tracking-wider uppercase">TUTORIAL</span>
                <h4 className="text-xs font-extrabold text-[#0A0F1D] truncate group-hover:text-[#0078D4] transition-colors leading-snug">
                  How to Fix Common QuickBooks Installation Errors
                </h4>
                <div className="flex items-center gap-3 text-[9px] text-zinc-450 font-bold">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Aug 24, 2026</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-zinc-300 group-hover:text-[#0078D4] group-hover:translate-x-0.5 transition-all shrink-0" />
            </Link>

            {/* Article 2 */}
            <Link 
              href="/quickbooks/blog"
              className="bg-white border border-zinc-200/80 p-5 rounded-2xl flex items-center gap-4 hover:border-[#0078D4]/40 hover:shadow-sm transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-650 flex items-center justify-center shrink-0 font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
                📊
              </div>
              <div className="flex-1 min-w-0 space-y-1">
                <span className="text-[8px] font-extrabold text-emerald-650 bg-emerald-50 px-2 py-0.5 rounded tracking-wider uppercase">LEDGER ROUTINES</span>
                <h4 className="text-xs font-extrabold text-[#0A0F1D] truncate group-hover:text-[#0078D4] transition-colors leading-snug">
                  How to Reconcile Bank Accounts in QuickBooks
                </h4>
                <div className="flex items-center gap-3 text-[9px] text-zinc-450 font-bold">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Aug 20, 2026</span>
                  <span>•</span>
                  <span>6 min read</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-zinc-300 group-hover:text-[#0078D4] group-hover:translate-x-0.5 transition-all shrink-0" />
            </Link>

            {/* Article 3 */}
            <Link 
              href="/quickbooks/blog"
              className="bg-white border border-zinc-200/80 p-5 rounded-2xl flex items-center gap-4 hover:border-[#0078D4]/40 hover:shadow-sm transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-650 flex items-center justify-center shrink-0 font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
                🔑
              </div>
              <div className="flex-1 min-w-0 space-y-1">
                <span className="text-[8px] font-extrabold text-purple-650 bg-purple-50 px-2 py-0.5 rounded tracking-wider uppercase">LICENSE KEY</span>
                <h4 className="text-xs font-extrabold text-[#0A0F1D] truncate group-hover:text-[#0078D4] transition-colors leading-snug">
                  How to Activate QuickBooks Desktop Step by Step
                </h4>
                <div className="flex items-center gap-3 text-[9px] text-zinc-450 font-bold">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Aug 12, 2026</span>
                  <span>•</span>
                  <span>7 min read</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-zinc-300 group-hover:text-[#0078D4] group-hover:translate-x-0.5 transition-all shrink-0" />
            </Link>

          </div>

          <div className="pt-2">
            <Link
              href="/quickbooks/blog"
              className="text-xs font-bold text-[#0078D4] hover:text-[#002060] transition-colors inline-flex items-center gap-1"
            >
              View all articles <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </section>

      {/* 8. Stay Informed Card */}
      <section className="py-20 bg-zinc-50 border-t border-zinc-200/40">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="bg-white border border-zinc-200/80 p-8 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
            <div className="flex items-center gap-6">
              {/* Envelope illustration block */}
              <div className="w-16 h-16 rounded-2xl bg-blue-50/50 flex items-center justify-center font-bold text-2xl shrink-0">
                ✉️
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-[#0A0F1D]">Stay informed about QuickBooks</h3>
                <p className="text-xs text-zinc-500 font-medium max-w-md leading-relaxed">
                  Get useful guides, product updates, comparisons, and research from OfficeAtlas straight to your inbox.
                </p>
              </div>
            </div>

            {isSubscribed ? (
              <div className="px-6 py-4 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-xl border border-emerald-100">
                Subscription confirmed!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-4 py-3 text-xs bg-[#FAFBFD] border border-zinc-200 rounded-lg focus:outline-none focus:border-[#0078D4] font-medium min-w-[240px] flex-1"
                />
                <button
                  type="submit"
                  className="px-6 py-3 text-xs font-bold text-white bg-[#0078D4] hover:bg-[#002060] rounded-lg shadow-sm transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 9. Disclaimer */}
      <section id="disclaimer" className="py-12 bg-white border-t border-zinc-250/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-3 text-zinc-400">
            <AlertCircle className="w-5 h-5" />
          </div>
          <p className="text-[11px] text-zinc-400 leading-relaxed font-medium">
            OfficeAtlas is an independent informational and research platform. QuickBooks and related product names, logos, and trademarks are the property of Intuit Inc. OfficeAtlas is not affiliated with, endorsed by, or sponsored by Intuit.
          </p>
        </div>
      </section>

    </div>
  );
}
