"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ChevronRight,
  Shield
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isQuickbooks = pathname === "/quickbooks" || pathname?.startsWith("/quickbooks/");

  return (
    <footer className="bg-[#070C16] text-[#A0AEC0] pt-12 pb-8 border-t border-zinc-900 relative overflow-hidden font-sans">
      
      {/* Subtle right-side ambient grid glow */}
      <div className="absolute right-0 bottom-0 w-80 h-80 opacity-[0.08] pointer-events-none select-none">
        <svg width="300" height="300" viewBox="0 0 300 300" fill="none" className="stroke-blue-500" strokeWidth="1">
          <path d="M0,300 C100,200 200,100 300,0" />
          <path d="M0,280 C90,190 180,90 280,0" />
          <path d="M0,260 C80,180 160,80 260,0" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-10 items-start">
          
          {/* Column 1: Brand & Contact (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="/office-atlas-logo-dark.png" 
                alt="OfficeAtlas Logo" 
                className="h-20 w-auto object-contain"
              />
            </Link>
            
            <p className="text-[#8A99AD] text-sm sm:text-base font-normal leading-relaxed max-w-sm">
              OfficeAtlas helps teams work smarter with powerful tools, insights, and templates. All in one place.
            </p>
          </div>

          {/* Vertical dividers & Link Columns (lg:col-span-7) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Column 2: Explore */}
            <div className="space-y-6 md:pr-4 md:border-r md:border-zinc-800/80">
              <div className="space-y-2">
                <h4 className="text-white text-sm font-bold uppercase tracking-widest">
                  Explore
                </h4>
                <div className="w-6 h-[2px] bg-[#0078D4]" />
              </div>
              
              <ul className="space-y-4 text-sm">
                <li>
                  <Link href="/products" className="flex items-center gap-2 text-[#A0AEC0] hover:text-white transition-colors duration-250 font-normal">
                    <ChevronRight className="w-3.5 h-3.5 text-[#0078D4]" /> M365 Products
                  </Link>
                </li>
                <li>
                  <Link href="/quickbooks/products" className="flex items-center gap-2 text-[#A0AEC0] hover:text-white transition-colors duration-250 font-normal">
                    <ChevronRight className="w-3.5 h-3.5 text-[#0078D4]" /> QuickBooks Products
                  </Link>
                </li>
                <li>
                  <Link href="/compare" className="flex items-center gap-2 text-[#A0AEC0] hover:text-white transition-colors duration-250 font-normal">
                    <ChevronRight className="w-3.5 h-3.5 text-[#0078D4]" /> M365 Compare
                  </Link>
                </li>
                <li>
                  <Link href="/quickbooks/compare" className="flex items-center gap-2 text-[#A0AEC0] hover:text-white transition-colors duration-250 font-normal">
                    <ChevronRight className="w-3.5 h-3.5 text-[#0078D4]" /> QuickBooks Compare
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="flex items-center gap-2 text-[#A0AEC0] hover:text-white transition-colors duration-250 font-normal">
                    <ChevronRight className="w-3.5 h-3.5 text-[#0078D4]" /> M365 Guides
                  </Link>
                </li>
                <li>
                  <Link href="/quickbooks/guides" className="flex items-center gap-2 text-[#A0AEC0] hover:text-white transition-colors duration-250 font-normal">
                    <ChevronRight className="w-3.5 h-3.5 text-[#0078D4]" /> QuickBooks Guides
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="flex items-center gap-2 text-[#A0AEC0] hover:text-white transition-colors duration-250 font-normal">
                    <ChevronRight className="w-3.5 h-3.5 text-[#0078D4]" /> Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="space-y-6 md:px-4 md:border-r md:border-zinc-800/80">
              <div className="space-y-2">
                <h4 className="text-white text-sm font-bold uppercase tracking-widest">
                  Company
                </h4>
                <div className="w-6 h-[2px] bg-[#0078D4]" />
              </div>
              
              <ul className="space-y-4 text-sm">
                <li>
                  <Link href="/about" className="flex items-center gap-2 text-[#A0AEC0] hover:text-white transition-colors duration-250 font-normal">
                    <ChevronRight className="w-3.5 h-3.5 text-[#0078D4]" /> About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="flex items-center gap-2 text-[#A0AEC0] hover:text-white transition-colors duration-250 font-normal">
                    <ChevronRight className="w-3.5 h-3.5 text-[#0078D4]" /> Contact
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="flex items-center gap-2 text-[#A0AEC0] hover:text-white transition-colors duration-250 font-normal">
                    <ChevronRight className="w-3.5 h-3.5 text-[#0078D4]" /> Publications
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div className="space-y-6 md:pl-4">
              <div className="space-y-2">
                <h4 className="text-white text-sm font-bold uppercase tracking-widest">
                  Legal
                </h4>
                <div className="w-6 h-[2px] bg-[#0078D4]" />
              </div>
              
              <ul className="space-y-4 text-sm">
                <li>
                  <Link href="/privacy" className="flex items-center gap-2 text-[#A0AEC0] hover:text-white transition-colors duration-250 font-normal">
                    <ChevronRight className="w-3.5 h-3.5 text-[#0078D4]" /> Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="flex items-center gap-2 text-[#A0AEC0] hover:text-white transition-colors duration-250 font-normal">
                    <ChevronRight className="w-3.5 h-3.5 text-[#0078D4]" /> Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="flex items-center gap-2 text-[#A0AEC0] hover:text-white transition-colors duration-250 font-normal">
                    <ChevronRight className="w-3.5 h-3.5 text-[#0078D4]" /> Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

          </div>

        </div>
        {/* Bottom Bar Divider & Disclaimer / Copyright Row */}
        <div className="border-t border-zinc-900 pt-6 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          {/* Disclaimer on the left */}
          <div className="max-w-3xl">
            {isQuickbooks ? (
              <p className="text-xs text-[#8A99AD] leading-relaxed font-normal">
                Disclaimer: OfficeAtlas is an independent informational and research platform. QuickBooks and related product names, logos, and trademarks are the property of Intuit Inc. Product information, pricing, availability, and features may change and should be verified with official sources.
              </p>
            ) : (
              <p className="text-xs text-[#8A99AD] leading-relaxed font-normal">
                Disclaimer: OfficeAtlas is an independent educational database and research platform providing tutorials, configuration manuals, and comparisons for Microsoft 365 services. All Microsoft product names, logos, and brands are property of their respective owners.
              </p>
            )}
          </div>

          {/* Copyright on the right */}
          <div className="text-xs text-[#8A99AD] font-semibold shrink-0">
            &copy; {currentYear} OfficeAtlas. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
