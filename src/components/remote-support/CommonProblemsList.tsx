"use client";

import { motion } from "framer-motion";
import { 
  AlertCircle, 
  Lightbulb
} from "lucide-react";

const problems = [
  {
    title: "Office won't install",
    subtitle: "Installer freezes or returns error codes 30088-4 or 0-2031.",
    quickTip: "Clear %temp% directory and launch setup via Office Deployment Tool (ODT).",
    topic: "install"
  },
  {
    title: "Office won't activate",
    subtitle: "'Unlicensed Product' bar or product key redemption failure.",
    quickTip: "Run ospp.vbs /dstatus script to verify active KMS/MAK key licenses.",
    topic: "activate"
  },
  {
    title: "Microsoft 365 sign-in problem",
    subtitle: "Looping login prompts or authentication credential validation error.",
    quickTip: "Clear cached Microsoft credentials in Windows Credential Manager.",
    topic: "account"
  },
  {
    title: "Word is not opening",
    subtitle: "Application closes immediately upon launch or hangs on startup screen.",
    topic: "Word",
    quickTip: "Launch with winword /safe parameter to bypass corrupted add-ins."
  },
  {
    title: "Excel is crashing",
    subtitle: "Workbook freezes during formula calculation or large dataset load.",
    topic: "Excel",
    quickTip: "Disable hardware graphics acceleration in Excel Display settings."
  },
  {
    title: "Outlook is not working",
    subtitle: "Emails stuck in Outbox, PST file corruption, or connection server error.",
    topic: "Outlook",
    quickTip: "Run SCANPST.exe or construct a new Outlook profile in Control Panel."
  },
  {
    title: "Office update failed",
    subtitle: "Click-to-Run updater fails to fetch current builds.",
    topic: "update",
    quickTip: "Restart 'Microsoft Office Click-to-Run Service' in services.msc."
  },
  {
    title: "Product key / activation issue",
    subtitle: "Purchased key not recognized by Microsoft account portal.",
    topic: "activate",
    quickTip: "Redeem retail keys directly at setup.office.com under authentic MSA."
  }
];

export default function CommonProblemsList() {
  return (
    <section className="py-14 md:py-20 bg-[#FAF9F6] font-sans">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0A0F1D] tracking-tight">
            Having Trouble With Office?
          </h2>
          <p className="text-base text-zinc-600 font-normal leading-relaxed">
            Review instant diagnostic quick tips below for common Microsoft Office error scenarios.
          </p>
        </div>

        {/* Clean Structured Informative List */}
        <div className="bg-white border border-zinc-200/90 rounded-3xl shadow-sm overflow-hidden divide-y divide-zinc-100">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-zinc-100">
            
            {/* Left Column Items */}
            <div className="divide-y divide-zinc-100">
              {problems.slice(0, 4).map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="p-5 sm:p-6 space-y-3"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                        <AlertCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-semibold text-[#0A0F1D]">
                          {item.title}
                        </h3>
                        <p className="text-xs text-zinc-500 font-normal mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Informative Quick Tip Pill */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 font-medium">
                      <Lightbulb className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item.quickTip}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column Items */}
            <div className="divide-y divide-zinc-100">
              {problems.slice(4, 8).map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="p-5 sm:p-6 space-y-3"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                        <AlertCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-semibold text-[#0A0F1D]">
                          {item.title}
                        </h3>
                        <p className="text-xs text-zinc-500 font-normal mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Informative Quick Tip Pill */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-1.5 text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 font-medium">
                      <Lightbulb className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item.quickTip}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
