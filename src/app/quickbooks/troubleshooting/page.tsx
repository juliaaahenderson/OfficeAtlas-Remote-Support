"use client";

import { useState } from "react";
import { ArrowLeft, Search, AlertCircle, HelpCircle } from "lucide-react";
import Link from "next/link";

interface TroubleTicket {
  id: string;
  category: string;
  problem: string;
  resolution: string;
}

const troubleTickets: TroubleTicket[] = [
  {
    id: "err-installation",
    category: "Installation",
    problem: "QuickBooks Installation Error Code 1904",
    resolution: "This error usually highlights issues registering digital file components during setup. Verify you are logged into your workstation with Administrator rights. Re-run setup after registering manual MSXML components via command prompt."
  },
  {
    id: "err-multiuser",
    category: "Company Files",
    problem: "H202 Multi-User Mode Connection Blocked",
    resolution: "This means client computers cannot connect to the server database manager host. Test database service connections inside local firewalls rules. Ensure the QuickBooks Database Server Manager utility is active and hosting on the server."
  },
  {
    id: "err-bankfeeds",
    category: "Banking",
    problem: "OL-301 Banking Feed Sync Fault",
    resolution: "This highlights verification communication issues between Intuit servers and your bank bank account server. Re-authorize account logins. If bank feeds remain blocked, clear cache files or perform manual transaction downloads in Web Connect format."
  },
  {
    id: "err-activation",
    category: "Activation",
    problem: "Validation Key Registration Loops",
    resolution: "Ensure your computer clock settings are synced to standard network times. If license loops continue, delete the local Intuit Entitlement Client folder to reset the product authorization state."
  }
];

export default function TroubleshootingCenter() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Installation", "Company Files", "Banking", "Activation"];

  const filteredTickets = troubleTickets.filter((ticket) => {
    const matchesCategory = activeCategory === "All" || ticket.category === activeCategory;
    const matchesSearch = ticket.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ticket.resolution.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
        <div className="space-y-4 max-w-2xl">
          <h1 className="text-4xl sm:text-[42px] font-sans font-semibold tracking-tight text-[#0A0F1D] leading-tight">Troubleshooting Help Desk</h1>
          <p className="text-zinc-500 text-sm sm:text-base leading-relaxed">
            Diagnose multi-user network parameters, bank connection faults, and database registry errors. Search or select a category below.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm flex items-center px-4">
          <Search className="w-4 h-4 text-zinc-400 shrink-0" />
          <input
            type="text"
            placeholder="Describe your QuickBooks problem..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-3 text-xs bg-transparent focus:outline-none font-medium text-[#0A0F1D]"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 border-b border-zinc-200/50 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#0A0F1D] text-white"
                  : "bg-white border border-zinc-200 text-[#0A0F1D] hover:bg-zinc-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Trouble Tickets */}
        <div className="space-y-6">
          {filteredTickets.length > 0 ? (
            filteredTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-white border border-zinc-200/80 p-8 rounded-2xl space-y-4 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[9px] font-extrabold text-[#0078D4] bg-blue-50 px-2 py-0.5 rounded uppercase">
                    {ticket.category}
                  </span>
                </div>
                <h3 className="text-md font-bold text-[#0A0F1D]">{ticket.problem}</h3>
                
                <div className="bg-zinc-50 border border-zinc-200/50 p-6 rounded-xl flex items-start gap-3">
                  <AlertCircle className="w-4.5 h-4.5 text-[#0078D4] shrink-0 mt-0.5" />
                  <div className="space-y-1 text-xs">
                    <div className="font-bold text-[#0A0F1D]">Resolution Guide:</div>
                    <p className="text-zinc-500 leading-relaxed font-medium">
                      {ticket.resolution}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white border border-zinc-200/80 rounded-2xl text-zinc-500 font-semibold text-xs">
              No matching issues found. Try search guidelines adjustments.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
