"use client";

import { ArrowLeft, Download, Laptop, AlertTriangle, ChevronRight, HelpCircle, FileText, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function DownloadCenter() {
  const downloadSteps = [
    {
      title: "Confirm Licensing",
      desc: "Ensure you have your QuickBooks license numbers and product authorization codes accessible before initiating any downloads."
    },
    {
      title: "Select Product Version",
      desc: "Choose the correct product tier (Pro, Premier, Enterprise) and the release year matching your purchased subscription."
    },
    {
      title: "Initiate Download",
      desc: "Get the official installation executable files (.EXE for Windows or .DMG for macOS) from the central Intuit portal."
    },
    {
      title: "Run Installer",
      desc: "Double-click the downloaded setup package and follow the on-screen configuration options."
    }
  ];

  return (
    <div className="bg-[#FAFBFD] min-h-screen text-[#0A0F1D] font-sans pb-20">
      
      {/* Clean Light Compact Hero Header */}
      <div className="relative pt-28 pb-6 px-6 md:px-10 overflow-hidden border-b border-zinc-200/60">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FAFBFD] to-zinc-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[300px] rounded-full blur-3xl opacity-20" style={{ background: `radial-gradient(circle, #0078D420, transparent 70%)` }} />
        
        <div className="relative max-w-7xl mx-auto">
          <Link 
            href="/quickbooks"
            className="text-xs font-semibold text-[#0078D4] hover:text-[#002060] transition-colors inline-flex items-center gap-1.5 mb-5"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to QuickBooks Hub
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#0078D4] bg-[#0078D4]/5 px-3 py-1.5 rounded-full border border-[#0078D4]/15">
                <Download className="w-3.5 h-3.5" />
                Download Center
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-sans font-semibold tracking-tight text-[#0A0F1D] leading-[1.12]">
                Download & Installation Guide
              </h1>
              <p className="text-zinc-500 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
                Step-by-step instructions to download and install QuickBooks products securely on your systems.
              </p>
            </div>
            
            {/* SVG Illustration - Installation theme */}
            <div className="hidden lg:flex justify-end">
              <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Laptop outline */}
                <rect x="110" y="40" width="180" height="110" rx="8" fill="white" stroke="#E4E7EC" strokeWidth="1.5"/>
                <rect x="118" y="48" width="164" height="80" rx="4" fill="#FAFBFD"/>
                <rect x="90" y="150" width="220" height="8" rx="4" fill="#E4E7EC"/>
                
                {/* Arrow pointing down animation effect */}
                <circle cx="200" cy="85" r="22" fill="#0078D4" opacity="0.1"/>
                <path d="M200 70 L200 95 M190 87 L200 97 L210 87" stroke="#0078D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                
                {/* Install shield */}
                <path d="M255 105 L270 110 L270 122 Q270 132 255 138 Q240 132 240 122 L240 110 Z" fill="#22C55E" opacity="0.15" stroke="#22C55E" strokeWidth="1"/>
                <path d="M251 121 L254 124 L260 117" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                
                {/* Disk drive */}
                <rect x="130" y="105" width="28" height="20" rx="4" fill="white" stroke="#E4E7EC" strokeWidth="1"/>
                <line x1="135" y1="112" x2="145" y2="112" stroke="#D1D5DB" strokeWidth="1"/>
                <circle cx="152" cy="115" r="2" fill="#0078D4" opacity="0.6"/>

                <text x="200" y="185" textAnchor="middle" fill="#9CA3AF" fontSize="10" fontWeight="700" fontFamily="system-ui">Safe Deployment Setup</text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10">
        
        {/* Setup Flow */}
        <div className="space-y-6 mb-16">
          <h2 className="text-xl font-semibold text-[#0A0F1D]">Standard Installation Steps</h2>
          
          <div className="relative">
            {/* Horizontal Timeline Connector (visible on desktop) */}
            <div className="hidden md:block absolute top-[34px] left-[50px] right-[50px] h-[2px] bg-gradient-to-r from-[#0078D4]/30 via-purple-300/40 to-emerald-300/30 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
              {downloadSteps.map((step, idx) => {
                // Assign a color accent per card step for premium variety
                const colors = [
                  { text: "text-[#0078D4]", bg: "bg-blue-50/70", border: "hover:border-[#0078D4]/30", indicator: "bg-[#0078D4]" },
                  { text: "text-[#7C3AED]", bg: "bg-purple-50/70", border: "hover:border-[#7C3AED]/30", indicator: "bg-[#7C3AED]" },
                  { text: "text-[#0284C7]", bg: "bg-sky-50/70", border: "hover:border-[#0284C7]/30", indicator: "bg-[#0284C7]" },
                  { text: "text-[#10B981]", bg: "bg-emerald-50/70", border: "hover:border-[#10B981]/30", indicator: "bg-[#10B981]" }
                ];
                const current = colors[idx] || colors[0];

                return (
                  <div 
                    key={idx} 
                    className={`group relative bg-white border border-zinc-200/75 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-zinc-900/[0.03] hover:-translate-y-1.5 transition-all duration-500 ${current.border}`}
                  >
                    {/* Glowing Accent Corner Dot on Hover */}
                    <div className={`absolute top-3 right-3 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${current.indicator} animate-ping`} />
                    
                    {/* Step Number Circle */}
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300 ${current.bg} ${current.text}`}>
                      {idx + 1}
                    </div>

                    <h3 className="text-[15px] font-semibold text-[#0A0F1D] mb-2 group-hover:text-[#0A0F1D] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Download Resources & System pre-reqs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
          
          {/* Official Access Link Container */}
          <div className="bg-white border border-zinc-200/70 p-8 rounded-2xl shadow-sm space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50/50 flex items-center justify-center border border-blue-100/60">
                <Download className="w-5 h-5 text-[#0078D4]" />
              </div>
              <h2 className="text-lg font-semibold text-[#0A0F1D] leading-snug">
                Official Download Access
              </h2>
              <p className="text-[15px] text-zinc-500 leading-relaxed font-normal">
                We strongly advise downloading installation packages exclusively from verified Intuit servers. Avoid unofficial third-party setup repositories to prevent integrity issues.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://downloads.quickbooks.com/app/qbdt/products"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 text-xs font-bold text-white bg-[#0A0F1D] hover:bg-[#0078D4] rounded-xl transition-all duration-300 text-center flex items-center justify-center gap-1.5 shadow-sm"
              >
                Access Intuit Download Page
                <ChevronRight className="w-4 h-4" />
              </a>
              <Link
                href="/quickbooks/troubleshooting"
                className="px-6 py-3.5 text-xs font-bold text-[#0A0F1D] bg-white hover:bg-zinc-50 border border-zinc-200 rounded-xl shadow-sm transition-all duration-300 text-center"
              >
                Get Installation Help
              </Link>
            </div>
          </div>

          {/* System Requirements checklist card */}
          <div className="bg-white border border-zinc-200/70 p-8 rounded-2xl shadow-sm space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center border border-zinc-150">
                <Laptop className="w-5 h-5 text-zinc-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-[#0A0F1D] leading-snug">Before Installing</h2>
                <p className="text-xs text-zinc-400 font-medium">Verify system parameters prior to deployment</p>
              </div>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3.5 text-[15px] text-zinc-600 leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Ensure active Windows server permissions are configured on sharing folder directories.</span>
              </li>
              <li className="flex items-start gap-3.5 text-[15px] text-zinc-600 leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Configure database ports exceptions inside firewall setting rules to permit multiple connections.</span>
              </li>
              <li className="flex items-start gap-3.5 text-[15px] text-zinc-600 leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>Back up any existing company files (.QBW) prior to installing updates.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
