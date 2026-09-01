"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  Monitor, 
  Wrench, 
  Key, 
  RefreshCw, 
  UserCheck
} from "lucide-react";

interface RemoteSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

const issueCategories = [
  { id: "install", label: "Office Installation & Setup", icon: Monitor },
  { id: "activate", label: "Product Key & Activation", icon: Key },
  { id: "account", label: "Microsoft 365 & Account Sign-in", icon: UserCheck },
  { id: "crash", label: "App Crashing & Errors (Word/Excel/Outlook)", icon: Wrench },
  { id: "update", label: "Office Update & Repair Issues", icon: RefreshCw },
  { id: "other", label: "General Office Technical Help", icon: HelpCircle },
];

export default function RemoteSupportModal({ isOpen, onClose, initialTopic }: RemoteSupportModalProps) {
  const [selectedIssue, setSelectedIssue] = useState(initialTopic || "install");
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setStep(1);
    setName("");
    setEmail("");
    setDescription("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0A0F1D]/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ type: "spring", duration: 0.4 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-zinc-200 font-sans"
        >
          {/* Header */}
          <div className="bg-[#0A0F1D] text-white px-6 sm:px-8 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#0078D4] flex items-center justify-center text-white">
                <Monitor className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold tracking-tight">Request Remote Support</h3>
                <p className="text-xs text-zinc-400">Microsoft Office Assistance Session</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 ? (
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-lg font-bold text-[#0A0F1D]">What do you need help with?</h4>
                      <p className="text-xs text-zinc-500 mt-1">Select the topic that best matches your Microsoft Office issue.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {issueCategories.map((cat) => {
                        const Icon = cat.icon;
                        const isSelected = selectedIssue === cat.id;
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => setSelectedIssue(cat.id)}
                            className={`flex items-center gap-3 p-3.5 rounded-2xl border text-left transition-all ${
                              isSelected
                                ? "border-[#0078D4] bg-blue-50/60 ring-2 ring-[#0078D4]/20 font-semibold text-[#0078D4]"
                                : "border-zinc-200 hover:border-zinc-300 text-zinc-700 bg-white hover:bg-slate-50"
                            }`}
                          >
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                              isSelected ? "bg-[#0078D4] text-white" : "bg-zinc-100 text-zinc-600"
                            }`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-medium leading-snug">{cat.label}</span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#0078D4] text-white text-xs font-bold rounded-xl hover:bg-[#006cc1] transition-colors"
                      >
                        Next: Contact Details <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-lg font-bold text-[#0A0F1D]">Enter Your Details</h4>
                      <p className="text-xs text-zinc-500 mt-1">Provide your contact info so a support technician can assist you.</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0078D4]/20 focus:border-[#0078D4] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="sarah@example.com"
                          className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0078D4]/20 focus:border-[#0078D4] transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-600 uppercase tracking-wider mb-1.5">
                          Brief Description of Issue (Optional)
                        </label>
                        <textarea
                          rows={3}
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder="e.g. Word gives an error when opening documents, or product key fails during activation..."
                          className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0078D4]/20 focus:border-[#0078D4] transition-all resize-none"
                        />
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-xs font-semibold text-zinc-500 hover:text-zinc-800 transition-colors"
                      >
                        ← Back to Issue Selection
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#0078D4] text-white text-xs font-bold rounded-xl hover:bg-[#006cc1] transition-colors disabled:opacity-50"
                      >
                        {isSubmitting ? "Submitting Request..." : "Connect With Support"}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            ) : (
              <div className="py-8 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-[#0A0F1D]">Support Request Received</h4>
                <p className="text-xs text-zinc-600 max-w-md leading-relaxed">
                  Thank you, <span className="font-semibold text-[#0A0F1D]">{name}</span>. A support specialist has received your request regarding <span className="font-semibold text-[#0078D4]">{issueCategories.find(c => c.id === selectedIssue)?.label}</span> and will reach out to <span className="font-semibold text-[#0A0F1D]">{email}</span> shortly.
                </p>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-zinc-100 text-zinc-800 text-xs font-bold rounded-xl hover:bg-zinc-200 transition-colors"
                  >
                    Close & Return to Homepage
                  </button>
                </div>
              </div>
            )}

            {/* Trust Footer */}
            <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> Secure 256-bit Connection
              </div>
              <div>Independent Support Platform</div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
