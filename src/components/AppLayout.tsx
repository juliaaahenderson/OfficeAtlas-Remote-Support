"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SearchModal from "./SearchModal";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <Navbar onSearchClick={() => setIsSearchOpen(true)} />
      {children}
      <Footer />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
