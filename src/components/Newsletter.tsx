"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 bg-white font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Banner Box */}
        <div className="relative border border-blue-100/50 rounded-[2rem] p-8 md:py-10 md:px-12 overflow-hidden flex flex-col lg:flex-row items-center gap-8 shadow-sm min-h-[160px]">
          
          {/* Full Width Background Visual */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img 
              src="/blue-envelope.jpg" 
              alt="Modern Blue Envelope Illustration Background" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content Block (clearing the envelope visual on the left) */}
          <div className="relative z-10 flex-1 text-center lg:text-left space-y-2 lg:pl-[280px] xl:pl-[340px]">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0D1B3E] tracking-tight">
              Stay Ahead of the Microsoft 365 Ecosystem
            </h3>
            <p className="text-sm text-slate-500 max-w-md leading-relaxed font-semibold mx-auto lg:mx-0">
              Get the latest tips, updates, tutorials, and best practices delivered straight to your inbox.
            </p>
          </div>

          {/* Form / Actions Block */}
          <div className="relative z-10 flex-shrink-0 w-full lg:w-auto">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  onSubmit={handleSubmit}
                  className="w-full space-y-2.5"
                >
                  <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white border border-zinc-200 rounded-xl px-4.5 py-3 text-sm text-slate-800 placeholder-zinc-400 outline-none w-full sm:w-64 font-semibold shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                    />
                    <button
                      type="submit"
                      className="bg-[#1A44B6] hover:bg-[#133596] text-white text-sm font-bold px-6 py-3 rounded-xl transition-colors shrink-0 shadow-sm cursor-pointer"
                    >
                      Subscribe
                    </button>
                  </div>
                  
                  <span className="text-[11px] text-zinc-400 font-semibold block text-center sm:text-left">
                    No spam, unsubscribe anytime. Read our{" "}
                    <Link href="/privacy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>.
                  </span>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-5 rounded-2xl border border-emerald-100 bg-emerald-50/50 flex items-center justify-center gap-3 text-emerald-800 text-sm font-bold shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Subscription successful! Welcome to the Hub.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
