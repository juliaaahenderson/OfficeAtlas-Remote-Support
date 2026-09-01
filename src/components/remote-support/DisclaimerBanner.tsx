"use client";

import { ShieldAlert } from "lucide-react";

export default function DisclaimerBanner() {
  return (
    <section className="py-8 bg-[#FAF9F6] border-t border-zinc-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="bg-white border border-zinc-200/90 rounded-2xl p-5 sm:p-6 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-zinc-500 font-normal leading-relaxed">
          <div className="p-2 rounded-xl bg-amber-50 text-amber-700 border border-amber-200/60 shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-zinc-700">Disclaimer & Trademark Notice: </span>
            OfficeAtlas is an independent informational and research platform. Microsoft, Microsoft 365, Office, Word, Excel, PowerPoint, Outlook and other Microsoft product names and trademarks are the property of Microsoft Corporation. OfficeAtlas is not affiliated with, endorsed by, or sponsored by Microsoft.
          </div>
        </div>
      </div>
    </section>
  );
}
