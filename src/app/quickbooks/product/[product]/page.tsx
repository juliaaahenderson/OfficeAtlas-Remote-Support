"use client";

import { use } from "react";
import { ArrowLeft, CheckCircle, AlertTriangle, Laptop, Shield, Zap, Users, ArrowRight, Star, ChevronRight } from "lucide-react";
import Link from "next/link";

interface ProductDetail {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  overview: string;
  whoItIsFor: string;
  features: string[];
  pricingPlans: { name: string; price: string; desc: string; highlighted?: boolean }[];
  advantages: string[];
  limitations: string[];
  systemReqs: string[];
  gettingStartedSteps: string[];
  accent: string;
}

const productDetailsData: Record<string, ProductDetail> = {
  online: {
    slug: "online",
    name: "QuickBooks Online",
    category: "Cloud Accounting",
    tagline: "Run your business from anywhere, at any time.",
    overview: "QuickBooks Online is a cloud-based software client designed to centralize and automate business accounting. It reconciles bank transactions, creates digital invoices, tracks expense entries, and provides real-time reports accessible from mobile devices and web browsers.",
    whoItIsFor: "Best for sole proprietors, startups, and small to mid-sized businesses seeking mobility, automated banking connections, and collaboration across multiple locations.",
    features: [
      "Automated Bank Feeds: Daily sync with bank checking accounts.",
      "Custom Digital Invoicing: Design and dispatch templates directly to customers.",
      "Expense Tracking: Take pictures of receipts with the mobile app for OCR classification.",
      "Tax Estimates: Quarterly estimated calculations for self-employed schedules."
    ],
    pricingPlans: [
      { name: "Simple Start", price: "$30/mo", desc: "Basic income and expense tracking for 1 user." },
      { name: "Essentials", price: "$60/mo", desc: "Adds bill management and time tracking for up to 3 users.", highlighted: true },
      { name: "Plus", price: "$90/mo", desc: "Includes inventory management and project profitability for up to 5 users." }
    ],
    advantages: [
      "Access data anywhere via web or mobile application.",
      "No manual software installation or database backups required.",
      "Automatic software updates with new features and tax compliance parameters."
    ],
    limitations: [
      "Requires active internet connection.",
      "Slower file calculations on large databases compared to native desktop engines.",
      "Recurring monthly subscription models can accrue heavy costs over time."
    ],
    systemReqs: [
      "Browser: Latest Chrome, Firefox, Edge, or Safari.",
      "Internet: Broadband connection (min 1.5 Mbps).",
      "Mobile: iOS 15.0+ or Android 7.0+."
    ],
    gettingStartedSteps: [
      "Create your company profile and input tax registry identification.",
      "Connect business credit cards and bank feeds for automatic synchronization.",
      "Create client profiles and customize invoice templates."
    ],
    accent: "#0078D4",
  },
  desktop: {
    slug: "desktop",
    name: "QuickBooks Desktop",
    category: "On-Premise Accounting",
    tagline: "Local control with a powerful, secure database engine.",
    overview: "QuickBooks Desktop is a native local system providing heavy-duty double-entry accounting tools. It features localized database speed, customizable industry profiles, manual file architecture management, and job-costing grids.",
    whoItIsFor: "Best for manufacturers, contractors, wholesalers, and legacy business operators requiring offline speed, multiple company files, and detailed job costing reports.",
    features: [
      "Local Processing Speed: Instant calculations without internet latency.",
      "Advanced Inventory: Manage assemblies, build workorders, and customize unit labels.",
      "Detailed Job Costing: Analyze estimates against actual costs item-by-item.",
      "Multi-Company Files: Operate multiple legal entities within a single desktop license."
    ],
    pricingPlans: [
      { name: "Pro Plus", price: "$649/yr", desc: "Essential local job costing and invoicing for up to 3 users." },
      { name: "Premier Plus", price: "$949/yr", desc: "Includes industry-specific templates and reporting for up to 5 users.", highlighted: true }
    ],
    advantages: [
      "High data speed on local machines, even with heavy transaction history.",
      "Complete physical custody and control of company files.",
      "Legacy workflow layouts familiar to accounting professionals."
    ],
    limitations: [
      "Requires manual server setups for multi-user collaboration.",
      "Requires physical storage backup plans (e.g., local external drives).",
      "Transitioning to subscription models with rising annual costs."
    ],
    systemReqs: [
      "OS: Windows 10/11 (64-bit) or macOS 12+.",
      "Processor: Intel Core i5 or equivalent (2.4 GHz min).",
      "RAM: 8 GB (16 GB recommended).",
      "Disk: 2.5 GB SSD space."
    ],
    gettingStartedSteps: [
      "Download the installer file matching your product purchase license.",
      "Enter your validation key and product code to authorize registration.",
      "Set up local company files and choose custom industry chart of accounts."
    ],
    accent: "#7C3AED",
  },
  enterprise: {
    slug: "enterprise",
    name: "QuickBooks Enterprise",
    category: "Enterprise ERP Solutions",
    tagline: "Scale operations with custom data controls and advanced tracking.",
    overview: "QuickBooks Enterprise is an on-premise ERP solution built to handle scaling databases, complex inventory controls, multiple warehouse locations, custom user roles, and up to 40 concurrent users.",
    whoItIsFor: "Best for scaling mid-market businesses, wholesale distributors, large contractors, and manufacturing companies requiring robust inventory control and custom permissions.",
    features: [
      "Advanced Inventory: Barcode scanning, bin location tracking, FIFO costing.",
      "Granular User Roles: Restrict user permissions to specific reports or functions.",
      "Heavy File Processing: Optimized database engine for large volume file capacities.",
      "Priority Circle: Direct access to specialized support teams and customized training."
    ],
    pricingPlans: [
      { name: "Silver", price: "$1,480/yr", desc: "Core database capacity and advanced reporting tools." },
      { name: "Platinum", price: "$2,200/yr", desc: "Includes advanced inventory and automated pricing rules.", highlighted: true },
      { name: "Diamond", price: "Custom", desc: "Adds full-service payroll, employee time tracking, and sales integrations." }
    ],
    advantages: [
      "Supports large database file sizes without query performance degradation.",
      "High-grade customizable permissions protect confidential accounts fields.",
      "Specialized Priority Circle engineering support included with subscription."
    ],
    limitations: [
      "Requires dedicated local database server infrastructure for multi-user environments.",
      "Steep initial pricing tiers require structured yearly budgets.",
      "Complex configuration features require accounting support."
    ],
    systemReqs: [
      "OS: Windows 10/11 or Server 2016/2019/2022.",
      "Processor: Core i5 or Xeon server-grade.",
      "RAM: 16 GB min (32 GB for servers).",
      "Disk: 10 GB SSD space."
    ],
    gettingStartedSteps: [
      "Deploy the Database Manager component on your central storage server host.",
      "Install client modules on workstation computers.",
      "Establish security parameters, create user roles, and link modules."
    ],
    accent: "#0F766E",
  }
};

export default function ProductDetailsPage({ params }: { params: Promise<{ product: string }> }) {
  const resolvedParams = use(params);
  const { product: slug } = resolvedParams;

  const product = productDetailsData[slug] || productDetailsData.online;

  return (
    <div className="bg-[#FAFBFD] min-h-screen text-[#0A0F1D] font-sans">
      
      {/* Clean Light Hero Header */}
      <div className="relative pt-32 pb-14 px-6 md:px-10 overflow-hidden border-b border-zinc-200/60">
        {/* Subtle background accent gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FAFBFD] to-zinc-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[400px] rounded-full blur-3xl opacity-30" style={{ background: `radial-gradient(circle, ${product.accent}12, transparent 70%)` }} />
        
        <div className="relative max-w-7xl mx-auto">
          <Link 
            href="/quickbooks/products"
            className="text-xs font-semibold text-[#0078D4] hover:text-[#002060] transition-colors inline-flex items-center gap-1.5 mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Products Directory
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border" style={{ 
              color: product.accent, 
              borderColor: `${product.accent}25`,
              backgroundColor: `${product.accent}08`
            }}>
              {product.category}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-sans font-semibold tracking-tight text-[#0A0F1D] leading-[1.12] mb-4">
            {product.name}
          </h1>
          <p className="text-zinc-500 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
            {product.tagline}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10">
        
        {/* Overview & Audience floating cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          <div className="bg-white rounded-2xl border border-zinc-200/70 p-7 shadow-lg shadow-zinc-900/[0.04] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${product.accent}10` }}>
                <Zap className="w-4.5 h-4.5" style={{ color: product.accent }} />
              </div>
              <h2 className="text-base font-semibold text-[#0A0F1D]">Product Overview</h2>
            </div>
            <p className="text-[15px] text-zinc-600 leading-relaxed">
              {product.overview}
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-zinc-200/70 p-7 shadow-lg shadow-zinc-900/[0.04] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${product.accent}10` }}>
                <Users className="w-4.5 h-4.5" style={{ color: product.accent }} />
              </div>
              <h2 className="text-base font-semibold text-[#0A0F1D]">Who It&apos;s For</h2>
            </div>
            <p className="text-[15px] text-zinc-600 leading-relaxed">
              {product.whoItIsFor}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-14">
          <h2 className="text-xl font-semibold text-[#0A0F1D] mb-6">Key Features & Modules</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {product.features.map((feat, idx) => {
              const [title, desc] = feat.split(":");
              return (
                <div key={title} className="group bg-white rounded-xl border border-zinc-200/70 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-400">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: `${product.accent}10` }}>
                      <CheckCircle className="w-4 h-4" style={{ color: product.accent }} />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-[#0A0F1D] mb-1.5">{title}</h3>
                      <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-14">
          <h2 className="text-xl font-semibold text-[#0A0F1D] mb-6">Available Tiers & Pricing</h2>
          <div className={`grid grid-cols-1 gap-5 ${product.pricingPlans.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
            {product.pricingPlans.map((plan) => (
              <div 
                key={plan.name} 
                className={`relative rounded-2xl p-7 transition-all duration-500 hover:-translate-y-0.5 ${
                  plan.highlighted 
                    ? 'bg-gradient-to-br from-[#0A0F1D] to-[#1E293B] text-white shadow-xl shadow-zinc-900/20' 
                    : 'bg-white border border-zinc-200/70 hover:shadow-lg'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white text-[#0A0F1D] shadow-sm border border-zinc-100 flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" /> Popular
                    </span>
                  </div>
                )}
                <div className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: plan.highlighted ? `${product.accent}` : '#9CA3AF' }}>
                  {plan.name}
                </div>
                <div className={`text-2xl font-bold mb-3 ${plan.highlighted ? 'text-white' : ''}`} style={{ color: plan.highlighted ? '#fff' : product.accent }}>
                  {plan.price}
                </div>
                <p className={`text-sm leading-relaxed ${plan.highlighted ? 'text-zinc-300' : 'text-zinc-500'}`}>
                  {plan.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Advantages & Limitations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          <div className="bg-emerald-50/50 rounded-2xl border border-emerald-100/80 p-7">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                <Shield className="w-4 h-4 text-emerald-600" />
              </div>
              <h2 className="text-base font-semibold text-emerald-800">Advantages</h2>
            </div>
            <ul className="space-y-3.5">
              {product.advantages.map((adv, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-emerald-900/80 leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                  <span>{adv}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-amber-50/50 rounded-2xl border border-amber-100/80 p-7">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
              </div>
              <h2 className="text-base font-semibold text-amber-800">Limitations</h2>
            </div>
            <ul className="space-y-3.5">
              {product.limitations.map((lim) => (
                <li key={lim} className="flex items-start gap-3 text-[15px] text-amber-900/80 leading-relaxed">
                  <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                  <span>{lim}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* System Requirements */}
        <div className="bg-white rounded-2xl border border-zinc-200/70 p-7 mb-14 shadow-sm">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center">
              <Laptop className="w-4 h-4 text-zinc-600" />
            </div>
            <h2 className="text-base font-semibold text-[#0A0F1D]">System Requirements</h2>
          </div>
          <div className={`grid grid-cols-1 gap-4 ${product.systemReqs.length >= 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-3'}`}>
            {product.systemReqs.map((req) => {
              const [title, desc] = req.split(":");
              return (
                <div key={title} className="bg-zinc-50/80 rounded-xl p-4 border border-zinc-100">
                  <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-1.5">{title}</div>
                  <div className="text-[15px] text-zinc-700 font-medium leading-relaxed">{desc}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Getting Started Roadmap */}
        <div className="mb-20">
          <h2 className="text-xl font-semibold text-[#0A0F1D] mb-6">Getting Started Roadmap</h2>
          <div className="space-y-4">
            {product.gettingStartedSteps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-5 group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white shrink-0 shadow-sm" style={{ backgroundColor: product.accent }}>
                    {idx + 1}
                  </div>
                  {idx < product.gettingStartedSteps.length - 1 && (
                    <div className="w-px h-8 bg-zinc-200 mt-1" />
                  )}
                </div>
                <div className="pt-2.5">
                  <p className="text-[15px] text-zinc-700 font-medium leading-relaxed">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-2xl p-8 sm:p-10 mb-20 text-center" style={{ background: `linear-gradient(135deg, ${product.accent}08, ${product.accent}15)`, border: `1px solid ${product.accent}20` }}>
          <h3 className="text-xl font-semibold text-[#0A0F1D] mb-2">Ready to get started with {product.name}?</h3>
          <p className="text-[15px] text-zinc-500 mb-6 max-w-lg mx-auto">Explore our complete product directory or jump straight to the download and activation guides.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/quickbooks/products"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl text-white transition-all duration-300 hover:opacity-90 shadow-sm"
              style={{ backgroundColor: product.accent }}
            >
              Explore All Products <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/quickbooks/compare"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-white border border-zinc-200 text-[#0A0F1D] hover:bg-zinc-50 transition-all duration-300"
            >
              Compare Editions <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
