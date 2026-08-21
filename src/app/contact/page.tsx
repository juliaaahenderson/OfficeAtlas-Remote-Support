"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  CheckCircle2, 
  ShieldCheck 
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "Technical Guide Setup",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", topic: "Technical Guide Setup", message: "" });
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-24 pb-16 bg-[#FAFBFC] min-h-screen relative overflow-hidden font-sans text-slate-800">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-50/50 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-50/40 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 space-y-12">
        
        {/* Navigation Back Link */}
        <div className="pt-4">
          <Link 
            href="/" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>

        {/* Page Hero Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold tracking-widest text-[#0078D4] uppercase">
              GET IN TOUCH
            </span>
            <span className="w-8 h-[1px] bg-[#0078D4]" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-[56px] font-sans font-semibold text-[#0A0F1D] tracking-tight leading-[1.08]">
            Let's Start a Conversation
          </h1>
          <p className="text-base sm:text-[17px] text-zinc-650 font-normal leading-relaxed max-w-2xl">
            Have questions about our OfficeAtlas manuals, licensing plans, or custom tenant configurations? Reach out to our technical support team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-4">
          
          {/* Left Column: Direct details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-zinc-200/80 rounded-2xl p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.01)] space-y-6">
              <h3 className="text-lg font-sans font-semibold text-[#0A0F1D]">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-xs font-semibold text-[#0A0F1D] uppercase tracking-wider">Email Us</h5>
                    <p className="text-sm font-normal text-zinc-600">support@officeatlas.com</p>
                    <div className="flex items-center gap-1.5 pt-1 text-[11px] text-[#0078D4] font-semibold">
                      <Clock className="w-3.5 h-3.5" /> Average response: &lt; 2 hours
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-xs font-semibold text-[#0A0F1D] uppercase tracking-wider">Call Support</h5>
                    <p className="text-sm font-normal text-zinc-600">+1 (800) 555-0199</p>
                    <p className="text-[11px] text-zinc-500 font-normal">Mon-Fri, 9am - 6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="text-xs font-semibold text-[#0A0F1D] uppercase tracking-wider">Headquarters</h5>
                    <p className="text-sm font-normal text-zinc-600 leading-relaxed">
                      One Microsoft Way<br />
                      Redmond, WA 98052
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-zinc-200 rounded-2xl p-6 sm:p-8 flex items-start gap-4">
              <ShieldCheck className="w-8 h-8 text-blue-600 shrink-0 mt-0.5" />
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-[#0A0F1D]">Data Privacy Shield</h4>
                <p className="text-sm text-zinc-500 font-normal leading-relaxed">
                  Your query details and email address are never shared. All messages are securely handled under OfficeAtlas information security parameters.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7 bg-white border border-zinc-200/80 rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-100/50">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <div className="border-b border-zinc-100 pb-4 mb-2">
                    <h3 className="text-lg font-sans font-semibold text-[#0A0F1D]">
                      Send Us a Message
                    </h3>
                    <p className="text-xs text-zinc-450 font-normal mt-1">
                      Fill out the form below and our response unit will contact you shortly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Name</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all font-normal text-slate-800"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email Address</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all font-normal text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Query Topic</label>
                    <select
                      name="topic"
                      value={formData.topic}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all font-semibold text-slate-850 cursor-pointer"
                    >
                      <option value="Technical Guide Setup">Technical Guide Setup</option>
                      <option value="License Comparison">License Comparison</option>
                      <option value="Product Feature Detail">Product Feature Detail</option>
                      <option value="Custom Enterprise Request">Custom Enterprise Request</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Message</label>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us what you need help with..."
                      className="w-full px-4 py-3 text-xs bg-slate-50 border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all font-normal text-slate-800 resize-none"
                    />
                  </div>

                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#0078D4] hover:bg-[#006cc1] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm disabled:bg-blue-300"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        Send Message <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2 max-w-sm">
                    <h3 className="text-2xl font-sans font-semibold text-[#0A0F1D]">
                      Message Sent!
                    </h3>
                    <p className="text-sm text-zinc-500 font-normal leading-relaxed">
                      Thank you for contacting us. A technical support agent will review your query and get back to you shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2 border border-zinc-200 hover:border-zinc-300 text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
}
