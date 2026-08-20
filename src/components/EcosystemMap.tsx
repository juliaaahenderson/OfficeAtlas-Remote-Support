"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Info, ArrowRight } from "lucide-react";
import Link from "next/link";

// Fluent style icons for all Microsoft 365 products loaded locally from the public directory
const FluentIcon = ({ id, className = "w-6 h-6" }: { id: string; className?: string }) => {
  return (
    <img 
      src={`/${id}.svg`} 
      alt={`${id} icon`} 
      className={`${className} object-contain`} 
      loading="lazy"
    />
  );
};

interface Product {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  details: string;
  iconBg: string;
  top: string;
  left: string;
  linePath: string;
}

const productsData: Product[] = [
  {
    id: "word",
    name: "Word",
    category: "Documents",
    shortDesc: "Professional document creation and editing.",
    details: "The core processor for formatting reports, documents, newsletters, and co-authoring scripts with automated editor helper utilities.",
    iconBg: "#185abd",
    top: "8%",
    left: "40%",
    linePath: "",
  },
  {
    id: "excel",
    name: "Excel",
    category: "Spreadsheets",
    shortDesc: "Data analysis and spreadsheet modeling.",
    details: "Calculate and visualize complex sheets, databases, custom pivot analytics, charts, and automate data processes.",
    iconBg: "#107c41",
    top: "8%",
    left: "60%",
    linePath: "",
  },
  {
    id: "powerpoint",
    name: "PowerPoint",
    category: "Presentations",
    shortDesc: "Rich visual slideshow slide design.",
    details: "Configure professional slide presentation layouts, transitions, morphing triggers, and presenter outlines.",
    iconBg: "#c43e1c",
    top: "19%",
    left: "74%",
    linePath: "",
  },
  {
    id: "outlook",
    name: "Outlook",
    category: "Mail & Calendar",
    shortDesc: "Unified emails, tasks, and calendar rules.",
    details: "Host custom domains emails, book appointments on calendar grids, organize focus categories, and sync contact databases.",
    iconBg: "#0078d4",
    top: "36%",
    left: "86%",
    linePath: "",
  },
  {
    id: "teams",
    name: "Teams",
    category: "Collaboration",
    shortDesc: "Team workspace for chat, calls, and files.",
    details: "Establish messaging channels, conduct video calls, collaborate on sharing documents, and sync teams.",
    iconBg: "#4f52b2",
    top: "56%",
    left: "86%",
    linePath: "",
  },
  {
    id: "defender",
    name: "Defender",
    category: "Security",
    shortDesc: "Threat safety firewall protection.",
    details: "Advanced cloud-managed protection against cyber threats, ransomware, phishing, and local system malware risks.",
    iconBg: "#008272",
    top: "84%",
    left: "60%",
    linePath: "",
  },
  {
    id: "publisher",
    name: "Publisher",
    category: "Page Layout",
    shortDesc: "High accuracy layouts for prints.",
    details: "Design professional marketing cards, newsletters, brochures, catalogs, and localized page layout designs.",
    iconBg: "#077568",
    top: "73%",
    left: "74%",
    linePath: "",
  },
  {
    id: "access",
    name: "Access",
    category: "Database",
    shortDesc: "Relational database client creation.",
    details: "Build database models, manage custom data entries, query SQL tables, and design relational tables.",
    iconBg: "#a4373a",
    top: "73%",
    left: "26%",
    linePath: "",
  },
  {
    id: "copilot",
    name: "Copilot",
    category: "AI Productivity",
    shortDesc: "Generative AI workspace companion.",
    details: "Use natural language rules to drafts emails, generate document outlines, query calculation sheets, and build templates.",
    iconBg: "#6E56CF",
    top: "84%",
    left: "40%",
    linePath: "",
  },
  {
    id: "sharepoint",
    name: "SharePoint",
    category: "Intranets",
    shortDesc: "Team information and document portals.",
    details: "Host organization directories, coordinate document storage access, sync local file paths, and publish news updates.",
    iconBg: "#0072c6",
    top: "56%",
    left: "14%",
    linePath: "",
  },
  {
    id: "onenote",
    name: "OneNote",
    category: "Note Taking",
    shortDesc: "Flexible visual notebook directories.",
    details: "Doodle, highlight, organize, type, and search handwritten outlines synced across web mobile apps directories.",
    iconBg: "#7719aa",
    top: "36%",
    left: "14%",
    linePath: "",
  },
  {
    id: "onedrive",
    name: "OneDrive",
    category: "Storage",
    shortDesc: "Secure folder syncing cloud backup.",
    details: "Synchronize local Documents, Pictures, and Desktop folders to centralized cloud locations.",
    iconBg: "#0078d4",
    top: "19%",
    left: "26%",
    linePath: "",
  }
];

export default function EcosystemMap() {
  const [selectedProduct, setSelectedProduct] = useState<Product>(productsData[0]);
  const [hoveredProduct, setHoveredProduct] = useState<Product | null>(null);

  const activeProduct = hoveredProduct || selectedProduct;

  return (
    <section id="products" className="py-24 bg-[#FAF9F6] border-y border-zinc-200/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Title and Intro Column (Span 5) */}
          <div className="lg:col-span-5 flex flex-col items-start justify-center order-2 lg:order-1">
            <h2 className="text-3xl sm:text-[42px] font-sans font-semibold text-[#0A0F1D] tracking-tight leading-tight mb-5">
              The Microsoft 365 <br />
              Ecosystem, Explained
            </h2>
            <p className="text-zinc-500 text-sm sm:text-[17px] leading-relaxed mb-8 max-w-sm">
              Powerful apps and intelligent services working together to help you achieve more in less time.
            </p>

            <Link
              href="/products"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-[#002060] bg-white border border-zinc-200 rounded-full hover:border-[#002060]/30 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
            >
              Explore All Products
              <ArrowRight className="w-4.5 h-4.5 text-[#002060]" />
            </Link>

            {/* Hover details display card */}
            <div className="mt-8 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white border border-zinc-200/70 p-5 rounded-2xl shadow-sm w-full min-h-[140px]"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div 
                      className="w-9 h-9 rounded flex items-center justify-center text-white shrink-0"
                      style={{ backgroundColor: activeProduct.iconBg }}
                    >
                      <FluentIcon id={activeProduct.id} className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest font-extrabold text-zinc-400">
                        {activeProduct.category}
                      </span>
                      <h4 className="text-base font-bold text-[#0A0F1D]">{activeProduct.name}</h4>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed font-medium">
                    {activeProduct.details}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Interactive Node Map (Span 7) */}
          <div className="lg:col-span-7 flex justify-center items-center order-1 lg:order-2 lg:translate-x-10">
            <div className="relative w-full max-w-[760px] aspect-[620/380] flex items-center justify-center select-none">
              
              {/* SVG Connecting Dotted Paths */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 620 380">
                {productsData.map((prod) => {
                  const isHovered = hoveredProduct?.id === prod.id;
                  const isSelected = selectedProduct.id === prod.id;
                  const isActive = isHovered || isSelected;

                  const leftVal = parseFloat(prod.left);
                  const topVal = parseFloat(prod.top);
                  const x = (leftVal / 100) * 620;
                  const y = (topVal / 100) * 380;
                  const linePath = `M ${x} ${y} L 310 190`;

                  return (
                    <motion.path
                      key={`line-${prod.id}`}
                      d={linePath}
                      fill="none"
                      stroke={isActive ? prod.iconBg : "#D1D5DB"}
                      strokeWidth={isActive ? "2" : "1.2"}
                      strokeDasharray="3,5"
                      animate={{
                        strokeDashoffset: isActive ? [-10, 0] : 0
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "linear"
                      }}
                    />
                  );
                })}
              </svg>
 
              {/* Central colorful Microsoft 365 brand hub logo ring */}
              <div className="absolute z-10 w-36 h-36 flex items-center justify-center">
                {/* Official WebP image representation of Microsoft 365 logo */}
                <img 
                  src="/Microsoft_365_(2022).svg.webp" 
                  alt="Microsoft 365 Logo" 
                  className="w-28 h-28 object-contain drop-shadow-md hover:scale-105 transition-transform duration-300 pointer-events-none select-none"
                />
              </div>
 
              {/* Pill Product Nodes positioned exactly matching screenshot */}
              {productsData.map((prod) => {
                const isSelected = selectedProduct.id === prod.id;
                const isHovered = hoveredProduct?.id === prod.id;
                const isActive = isHovered || isSelected;
 
                return (
                  <motion.button
                    key={prod.id}
                    onClick={() => setSelectedProduct(prod)}
                    onMouseEnter={() => setHoveredProduct(prod)}
                    onMouseLeave={() => setHoveredProduct(null)}
                    style={{
                      top: prod.top,
                      left: prod.left,
                      transform: "translate(-50%, -50%)",
                    }}
                    className={`absolute z-20 px-3 py-1.5 bg-white border rounded-2xl flex items-center gap-2 shadow-sm transition-all duration-300 ${
                      isActive 
                        ? "border-zinc-300 shadow-md scale-105" 
                        : "border-zinc-200/80 hover:border-zinc-300 hover:shadow-md hover:scale-105"
                    }`}
                  >
                    <div className="shrink-0 flex items-center justify-center w-9 h-9">
                      <FluentIcon id={prod.id} className="w-9 h-9" />
                    </div>
                    <span className="text-[15px] font-bold text-zinc-700 pr-1">
                      {prod.name}
                    </span>
                  </motion.button>
                );
              })}

            </div>
          </div>
        </div>

        {/* Bottom hover instruction */}
        <div className="flex items-center justify-center gap-1.5 text-xs text-zinc-400 mt-16 font-medium">
          <Info className="w-3.5 h-3.5" />
          <span>Hover over a product to learn more</span>
        </div>

      </div>
    </section>
  );
}
