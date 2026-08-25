"use client";

import { ArrowLeft, Download, Laptop, AlertTriangle } from "lucide-react";
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
    <div className="bg-[#FAFBFD] min-h-screen text-[#0A0F1D] pt-28 pb-20 px-6 md:px-10 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Back Link */}
        <Link 
          href="/quickbooks"
          className="text-xs font-bold text-[#0078D4] hover:text-[#002060] transition-colors inline-flex items-center gap-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to QuickBooks Hub
        </Link>

        {/* Header */}
        <div className="space-y-4 max-w-2xl border-b border-zinc-200/50 pb-8">
          <h1 className="text-4xl sm:text-[42px] font-sans font-semibold tracking-tight text-[#0A0F1D] leading-tight">Download & Installation Guide</h1>
          <p className="text-zinc-500 text-lg leading-relaxed font-medium">
            Step-by-step instructions to download and install QuickBooks products securely on your systems.
          </p>
        </div>

        {/* Setup Flow */}
        <div className="space-y-6">
          <h2 className="text-lg font-bold">Standard Installation Steps</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {downloadSteps.map((step, idx) => (
              <div key={idx} className="bg-white border border-zinc-200/80 p-6 rounded-xl space-y-3 shadow-sm">
                <div className="w-7 h-7 rounded-full bg-[#0A0F1D] text-white flex items-center justify-center text-xs font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-sm font-bold">{step.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Download Resources */}
        <div className="bg-zinc-50 border border-zinc-200/60 p-8 rounded-2xl space-y-6">
          <div className="space-y-2">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <Download className="w-5 h-5 text-[#0078D4]" />
              Official Download Access
            </h2>
            <p className="text-xs text-zinc-500 leading-relaxed font-medium">
              We strongly advise downloading installation packages exclusively from verified Intuit servers. Avoid unofficial third-party setup repositories.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="https://downloads.quickbooks.com/app/qbdt/products"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 text-xs font-bold text-white bg-[#0A0F1D] hover:bg-[#0078D4] rounded-lg transition-all text-center"
            >
              Access Intuit Download Page
            </a>
            <Link
              href="/quickbooks/troubleshooting"
              className="px-5 py-3 text-xs font-bold text-[#0A0F1D] bg-white hover:bg-zinc-50 border border-zinc-200 rounded-lg shadow-sm transition-all text-center"
            >
              Get Installation Help
            </Link>
          </div>
        </div>

        {/* System requirements */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Laptop className="w-5 h-5 text-zinc-500" />
            Before Installing
          </h2>
          <p className="text-xs text-zinc-500 leading-relaxed font-medium">
            Make sure your database server computer hosts and employee workstation computers comply with system requirements:
          </p>
          <ul className="space-y-2 text-xs text-zinc-600 font-semibold pl-4 list-disc">
            <li>Ensure active Windows server permissions are configured on sharing folder directories.</li>
            <li>Configure database ports exceptions inside firewalls settings rules to permit multiple connections.</li>
            <li>Back up any old company files (.QBW) prior to installing updates.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
