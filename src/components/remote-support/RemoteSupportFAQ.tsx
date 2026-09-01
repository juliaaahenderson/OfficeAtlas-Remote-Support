"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  HelpCircle, 
  Sparkles, 
  CheckCircle2,
  MessageSquare,
  ShieldCheck
} from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  keyTakeaway: string;
}

const faqs: FAQItem[] = [
  {
    id: "how-it-works",
    question: "How does remote support work?",
    answer: "Remote support allows an OfficeAtlas technician to guide you through troubleshooting steps or securely assist with your Microsoft Office setup over an encrypted session. You retain full control over the session at all times.",
    keyTakeaway: "Fully transparent & user-controlled remote diagnostic sessions."
  },
  {
    id: "products-supported",
    question: "What Microsoft Office products can I get help with?",
    answer: "We assist with Microsoft 365 (Personal, Family, Business, Enterprise), Office 2024, Office 2021, Office 2019, and legacy desktop editions of Word, Excel, PowerPoint, Outlook, and OneNote.",
    keyTakeaway: "Complete coverage for all modern and perpetual Office versions."
  },
  {
    id: "install-help",
    question: "Can I get help installing Microsoft Office?",
    answer: "Yes. We help with downloading official installation files, resolving installer freeze errors (such as code 30088-4), selecting 32-bit vs 64-bit architecture, and setting up Office Deployment Tool (ODT) packages.",
    keyTakeaway: "Offline installer, ODT XML build, and architecture setup support."
  },
  {
    id: "activation-help",
    question: "Can you help with Office activation?",
    answer: "Yes. We troubleshoot 'Unlicensed Product' banners, expired KMS/MAK volume license tokens, product key redemption failures, and subscription sign-in validation issues.",
    keyTakeaway: "Scripted ospp.vbs key checks and token refresh procedures."
  },
  {
    id: "m365-setup",
    question: "Can you help with Microsoft 365 setup?",
    answer: "Yes. We assist with tenant user license assignments, OneDrive cloud sync setup, Outlook profile Autodiscover binding, and multi-device authentication.",
    keyTakeaway: "Tenant setup, OneDrive cloud sync, and Outlook email configuration."
  },
  {
    id: "office-not-opening",
    question: "What should I do if Office is not opening?",
    answer: "If Office apps crash on launch, we guide you through Safe Mode startup parameters (e.g., winword /safe), isolating corrupted COM add-ins, rebuilding template caches, or running Quick Repair via Control Panel.",
    keyTakeaway: "Safe Mode startup parameter diagnosis & COM add-in isolation."
  }
];

export default function RemoteSupportFAQ() {
  const [openId, setOpenId] = useState<string | null>("how-it-works");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-14 md:py-20 bg-[#FCFCFC] font-sans border-b border-zinc-200/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-semibold text-[#0A0F1D] tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed"
          >
            Find answers to common questions about OfficeAtlas remote support services and diagnostic procedures.
          </motion.p>
        </div>

        {/* Premium Asymmetrical FAQ Container (Light Mode Only) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: FAQ Quick Info Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-zinc-200/90 rounded-3xl p-7 shadow-sm space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0078D4] border border-blue-200/80 flex items-center justify-center shadow-xs">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#0A0F1D]">Have Questions?</h3>
                <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed">
                  Learn how our remote diagnostic workflows help clear installation stalls, activation errors, and app freezes.
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100 space-y-3">
                <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>256-Bit Encrypted Session Safety</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0078D4] shrink-0" />
                  <span>Transparent Resolution Steps</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Accordion */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-white border border-zinc-200/90 hover:border-[#0078D4]/40 rounded-2xl shadow-xs overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? "bg-blue-50 text-[#0078D4]" : "bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-[#0078D4]"
                      }`}>
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <span className="text-base sm:text-lg font-semibold text-[#0A0F1D] group-hover:text-[#0078D4] transition-colors">
                        {faq.question}
                      </span>
                    </div>
                    <div className={`w-8 h-8 rounded-full border border-zinc-200/80 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#0078D4] text-white border-[#0078D4]" : "bg-slate-50 text-zinc-500"
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0 space-y-3">
                          <p className="text-sm text-zinc-600 font-normal leading-relaxed">
                            {faq.answer}
                          </p>
                          <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100/80 flex items-center gap-2 text-xs text-blue-950 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-[#0078D4] shrink-0" />
                            <span>{faq.keyTakeaway}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
