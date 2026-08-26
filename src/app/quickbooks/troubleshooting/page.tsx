"use client";

import { useState } from "react";
import { ArrowLeft, Search, AlertCircle, HelpCircle, AlertTriangle, ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react";
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
  const [expandedTicket, setExpandedTicket] = useState<string | null>(null);

  const categories = ["All", "Installation", "Company Files", "Banking", "Activation"];

  const filteredTickets = troubleTickets.filter((ticket) => {
    const matchesCategory = activeCategory === "All" || ticket.category === activeCategory;
    const matchesSearch = ticket.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          ticket.resolution.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleTicket = (id: string) => {
    setExpandedTicket(expandedTicket === id ? null : id);
  };

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
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-sans font-semibold tracking-tight text-[#0A0F1D] leading-[1.12]">
                Troubleshooting Help Desk
              </h1>
              <p className="text-zinc-500 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
                Diagnose multi-user network parameters, bank connection faults, and database registry errors.
              </p>
            </div>
            
            {/* SVG Illustration - Help Desk theme */}
            <div className="hidden lg:flex justify-end">
              <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Desk dashboard window mockup */}
                <rect x="50" y="30" width="300" height="135" rx="12" fill="white" stroke="#E4E7EC" strokeWidth="1.5"/>
                <rect x="50" y="30" width="300" height="30" rx="12" fill="#FFF5F5"/>
                <rect x="50" y="59" width="300" height="1" fill="#E4E7EC"/>
                
                {/* Search bar mock */}
                <rect x="70" y="72" width="260" height="26" rx="6" fill="#F8FAFC" stroke="#E4E7EC" strokeWidth="1"/>
                <circle cx="85" cy="85" r="4.5" stroke="#9CA3AF" strokeWidth="1.5"/>
                <line x1="88.5" y1="88.5" x2="94" y2="94" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round"/>
                <text x="102" y="89" fill="#9CA3AF" fontSize="9.5" fontWeight="600" fontFamily="system-ui">Search active log files...</text>
                
                {/* Alert issue row */}
                <rect x="70" y="112" width="260" height="38" rx="8" fill="#FFF5F5" stroke="#FEE2E2" strokeWidth="1"/>
                <circle cx="90" cy="131" r="8" fill="#EF4444" opacity="0.12"/>
                <path d="M90 126 L90 132 M90 135 L90 135" stroke="#EF4444" strokeWidth="2" strokeLinecap="round"/>
                <text x="110" y="128" fill="#E11D48" fontSize="10.5" fontWeight="bold" fontFamily="system-ui">Error: Connection Timeout (H202)</text>
                <text x="110" y="141" fill="#9CA3AF" fontSize="9" fontWeight="600" fontFamily="system-ui">Server host database port blocked by local firewall</text>

                <text x="200" y="188" textAnchor="middle" fill="#9CA3AF" fontSize="11" fontWeight="700" fontFamily="system-ui">System Diagnosis & Logs</text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8">
        
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg shadow-zinc-900/5 border border-zinc-200/60 p-6 flex flex-col md:flex-row md:items-center justify-between gap-5 mb-10">
          {/* Filters */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#0A0F1D] text-white shadow-sm"
                    : "bg-zinc-50 border border-zinc-200/80 text-zinc-600 hover:bg-zinc-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:max-w-xs bg-zinc-50 border border-zinc-200/85 rounded-xl overflow-hidden flex items-center px-4">
            <Search className="w-4 h-4 text-zinc-400 shrink-0" />
            <input
              type="text"
              placeholder="Search troubleshoot topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-3.5 text-xs bg-transparent focus:outline-none font-medium text-[#0A0F1D]"
            />
          </div>
        </div>

        {/* Trouble Tickets */}
        <div className="space-y-4">
          {filteredTickets.length > 0 ? (
            filteredTickets.map((ticket) => {
              const isExpanded = expandedTicket === ticket.id;
              return (
                <div
                  key={ticket.id}
                  className="group bg-white border border-zinc-200/70 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-zinc-900/[0.03] transition-all duration-500"
                >
                  {/* Summary/Header row */}
                  <div 
                    onClick={() => toggleTicket(ticket.id)}
                    className="p-6 sm:p-8 flex items-center justify-between gap-6 cursor-pointer select-none"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-xs font-medium">
                        <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full uppercase tracking-wider border border-rose-100">
                          {ticket.category}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-[#0A0F1D] group-hover:text-[#0078D4] transition-colors duration-300">
                        {ticket.problem}
                      </h3>
                    </div>
                    <button 
                      className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all duration-300 flex items-center gap-1 shrink-0 ${
                        isExpanded 
                          ? "bg-zinc-100 text-zinc-700" 
                          : "bg-[#0A0F1D] text-white hover:bg-[#0078D4]"
                      }`}
                    >
                      {isExpanded ? "Hide Resolution" : "View Resolution"}
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-500 ${isExpanded ? "rotate-90" : "group-hover:translate-x-0.5"}`} />
                    </button>
                  </div>

                  {/* Expandable Resolution panel */}
                  <div 
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpanded ? "max-h-[300px] opacity-100 border-t border-zinc-150" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 sm:p-8 bg-zinc-50/50 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-rose-50/60 border border-rose-100 flex items-center justify-center shrink-0">
                        <AlertCircle className="w-5 h-5 text-rose-500" />
                      </div>
                      <div className="space-y-1.5">
                        <h4 className="text-xs font-bold uppercase text-zinc-400 tracking-wider">Resolution Step-by-Step</h4>
                        <p className="text-sm sm:text-[15px] text-zinc-600 leading-relaxed font-normal">
                          {ticket.resolution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-16 bg-white border border-zinc-200/70 rounded-2xl text-zinc-400 font-medium text-sm">
              No matching troubleshooting tickets found. Try searching different keywords.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
