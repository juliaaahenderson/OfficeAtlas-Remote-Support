"use client";

import { motion } from "framer-motion";
import { 
  Download, 
  Key, 
  Settings, 
  FileDown, 
  UserCheck, 
  Wrench 
} from "lucide-react";

interface QuickSupportNavProps {
  onSelectCategory?: (category: string) => void;
}

const navItems = [
  { id: "installation", label: "Office Installation", icon: Download, color: "text-blue-600 bg-blue-50" },
  { id: "activation", label: "Office Activation", icon: Key, color: "text-amber-600 bg-amber-50" },
  { id: "m365-setup", label: "Microsoft 365 Setup", icon: Settings, color: "text-[#0078D4] bg-blue-50" },
  { id: "download-help", label: "Download Help", icon: FileDown, color: "text-emerald-600 bg-emerald-50" },
  { id: "account-signin", label: "Account & Sign-in", icon: UserCheck, color: "text-purple-600 bg-purple-50" },
  { id: "troubleshooting", label: "Troubleshooting", icon: Wrench, color: "text-rose-600 bg-rose-50" },
];

export default function QuickSupportNav({ onSelectCategory }: QuickSupportNavProps) {
  const handleClick = (id: string) => {
    if (onSelectCategory) {
      onSelectCategory(id);
    }
    const element = document.getElementById("what-we-help");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="quick-nav" className="sticky top-[68px] z-30 bg-white/90 backdrop-blur-md border-y border-zinc-200/80 shadow-xs py-3.5 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between gap-4">
          
          {/* Horizontally Scrollable Bar */}
          <div className="flex-1 overflow-x-auto blog-scrollbar no-scrollbar flex items-center gap-3 py-1 px-1 justify-start md:justify-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleClick(item.id)}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-50 border border-zinc-200/80 hover:border-[#0078D4]/40 hover:bg-blue-50/40 text-zinc-700 hover:text-[#0078D4] text-xs font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 shadow-2xs"
                >
                  <div className={`p-1 rounded-md ${item.color}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span>{item.label}</span>
                </motion.button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
