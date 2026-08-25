"use client";

import { useState, useEffect } from "react";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  onSearchClick: () => void;
}

export default function Navbar({ onSearchClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    if (pathname === "/") setActiveItem("Home");
    else if (pathname.startsWith("/about")) setActiveItem("About");
    else if (pathname.startsWith("/guides")) setActiveItem("Guides");
    else if (pathname.startsWith("/compare")) setActiveItem("Compare");
    else if (pathname.startsWith("/blog")) setActiveItem("Blogs");
    else if (pathname.startsWith("/quickbooks")) setActiveItem("QuickBooks");
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Guides", href: "/guides" },
    { name: "Compare", href: "/compare" },
    { name: "Blogs", href: "/blog" },
    { name: "QuickBooks", href: "/quickbooks" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#FCFCFC]/80 backdrop-blur-md border-b border-zinc-200/50 py-1.5 shadow-sm"
            : "bg-transparent py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <img 
              src="/office-atlas-logo.png" 
              alt="OfficeAtlas Logo" 
              className="h-20 w-auto object-contain group-hover:scale-102 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveItem(item.name);
                }}
                className={`relative py-1.5 text-[16px] font-semibold tracking-wide transition-colors duration-300 cursor-pointer ${
                  activeItem === item.name
                    ? "text-[#0078D4]"
                    : "text-[#0A0F1D]/70 hover:text-[#0A0F1D]"
                }`}
              >
                {item.name}
                {activeItem === item.name && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0078D4]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA / Utilities */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6.5 py-3 text-[14px] font-bold bg-[#0A0F1D] text-white rounded-lg hover:bg-[#0078D4] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center lg:hidden">

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#0A0F1D] hover:text-[#0078D4] transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 pt-24 px-6 bg-[#FCFCFC] lg:hidden flex flex-col justify-between pb-10 border-b border-zinc-200"
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.name}
                >
                  <Link
                    href={item.href}
                    onClick={() => {
                      setActiveItem(item.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-xl font-bold tracking-tight cursor-pointer ${
                      activeItem === item.name ? "text-[#0078D4]" : "text-[#0A0F1D]"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="flex flex-col gap-4">
              <a
                href="/products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#0078D4] text-white font-medium rounded-lg shadow-sm"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
