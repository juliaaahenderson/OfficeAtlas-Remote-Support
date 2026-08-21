"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  BookOpen, 
  Compass, 
  Scale, 
  ShieldCheck, 
  GraduationCap, 
  Users, 
  Layers, 
  GitCompare, 
  Database, 
  Lightbulb, 
  Newspaper, 
  Search, 
  RefreshCw, 
  UserCheck, 
  Heart,
  Check
} from "lucide-react";

export default function AboutPage() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail("");
    }, 3000);
  };
  return (
    <div className="pt-24 pb-16 bg-[#FAFBFC] min-h-screen relative overflow-hidden font-sans text-slate-800">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-50/50 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-50/40 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 space-y-24">
        
        {/* ================= HERO SECTION ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
          {/* Hero Left */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold tracking-widest text-[#0078D4] uppercase">
                ABOUT US
              </span>
              <span className="w-8 h-[1px] bg-[#0078D4]" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-[56px] font-sans font-semibold tracking-tight text-[#0A0F1D] leading-[1.08]">
              Your Trusted Guide to the <br />
              <span className="text-[#0078D4]">Microsoft 365 Ecosystem</span>
            </h1>
            <p className="text-base sm:text-[17px] text-zinc-600 font-normal leading-relaxed max-w-2xl">
              OfficeAtlas is your all-in-one knowledge hub for Microsoft 365. We simplify the complexity of Microsoft&apos;s powerful suite of products and help you make informed decisions with researched insights, comparisons, and practical guides.
            </p>

            {/* Pills row */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[#0078D4]">
                  <Search className="w-3.5 h-3.5" />
                </div>
                <span className="text-[12px] font-semibold text-slate-800">In-Depth Research</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[#0078D4]">
                  <Scale className="w-3.5 h-3.5" />
                </div>
                <span className="text-[12px] font-semibold text-slate-800">Honest Comparisons</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[#0078D4]">
                  <Compass className="w-3.5 h-3.5" />
                </div>
                <span className="text-[12px] font-semibold text-slate-800">Practical Guides</span>
              </div>
            </div>
          </div>

          {/* Hero Right - Futuristic Holographic Workspace Globe */}
          <div className="lg:col-span-5 flex justify-center items-center relative h-[380px] lg:h-[450px] select-none">
            <img 
              src="/futuristic-holographic-workspace-globe.jpg" 
              alt="Futuristic Holographic Workspace Globe" 
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>
        </section>

        {/* ================= SECTION 2: MISSION & VALUES ================= */}
        <section className="bg-white border border-zinc-200/80 rounded-3xl p-8 sm:p-12 shadow-sm space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Mission */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold tracking-widest text-[#0078D4] uppercase">
                  OUR MISSION
                </span>
                <span className="w-6 h-[1px] bg-[#0078D4]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-sans font-semibold text-[#0A0F1D] tracking-tight leading-tight">
                Empowering Productivity. <br />
                <span className="text-[#0078D4]">Enabling Better Decisions.</span>
              </h2>
              <p className="text-[#0A0F1D]/70 text-sm leading-relaxed font-normal">
                We believe knowledge leads to better tools, better tools drive productivity, and productivity creates impact. That&apos;s the cycle we are here to accelerate.
              </p>
              <div className="pt-2">
                <Link 
                  href="/products" 
                  className="inline-flex items-center gap-1.5 px-6 py-3 text-[14px] font-bold bg-[#0A0F1D] hover:bg-[#0078D4] text-white rounded-lg transition-colors shadow-sm"
                >
                  Explore Our Content <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Values */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold tracking-widest text-[#0078D4] uppercase">
                  WHAT DRIVES US
                </span>
                <span className="w-6 h-[1px] bg-[#0078D4]" />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Value 1 */}
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0078D4]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-sans font-semibold text-[#0A0F1D]">Unbiased & Independent</h4>
                  <p className="text-zinc-500 text-xs font-normal leading-relaxed">
                    We provide objective insights to help you choose what truly fits your needs.
                  </p>
                </div>

                {/* Value 2 */}
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0078D4]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-sans font-semibold text-[#0A0F1D]">Well Researched Content</h4>
                  <p className="text-zinc-500 text-xs font-normal leading-relaxed">
                    Every piece of content is carefully researched and kept up to date.
                  </p>
                </div>

                {/* Value 3 */}
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0078D4]">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-sans font-semibold text-[#0A0F1D]">For Everyone, From Anywhere</h4>
                  <p className="text-zinc-500 text-xs font-normal leading-relaxed">
                    Whether you&apos;re a student, professional, or organization, we&apos;re here for you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[1px] bg-zinc-100" />

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-2">
            {/* Stat 1 */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-zinc-150 flex items-center justify-center text-[#0078D4] shrink-0 shadow-sm">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-sans font-semibold text-[#0A0F1D] leading-none">15+</h3>
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mt-1.5">Products Covered</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-zinc-150 flex items-center justify-center text-[#0078D4] shrink-0 shadow-sm">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-sans font-semibold text-[#0A0F1D] leading-none">100+</h3>
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mt-1.5">In-Depth Guides</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-zinc-150 flex items-center justify-center text-[#0078D4] shrink-0 shadow-sm">
                <GitCompare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-sans font-semibold text-[#0A0F1D] leading-none">25+</h3>
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mt-1.5">Detailed Comparisons</p>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-zinc-150 flex items-center justify-center text-[#0078D4] shrink-0 shadow-sm">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-sans font-semibold text-[#0A0F1D] leading-none">10K+</h3>
                <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mt-1.5">Readers & Learners</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: OUR STORY ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Story Left */}
          <div className="lg:col-span-7 space-y-5 order-2 lg:order-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold tracking-widest text-[#0078D4] uppercase">
                OUR STORY
              </span>
              <span className="w-6 h-[1px] bg-[#0078D4]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-semibold text-[#0A0F1D] tracking-tight leading-tight">
              Built from Curiosity. <br />
              <span className="text-[#0078D4]">Driven by Purpose.</span>
            </h2>
            <div className="text-[#0A0F1D]/70 text-sm leading-relaxed font-normal space-y-4">
              <p>
                OfficeAtlas started with a simple question: &quot;Why is it so hard to find clear, unbiased information about Microsoft 365?&quot;
              </p>
              <p>
                We noticed that users—whether individuals, students, or businesses—struggled to understand which tools to use, how they differ, and which plan truly fits their needs.
              </p>
              <p>
                So, we built OfficeAtlas to change that.
              </p>
              <p>
                What began as a passion project is now a growing platform trusted by thousands of learners and professionals around the world.
              </p>
            </div>
          </div>

          {/* Story Right - Minimal Workspace Illustration */}
          <div className="lg:col-span-5 flex justify-center items-center relative h-[320px] order-1 lg:order-2 select-none">
            <img 
              src="/office-atlas-minimal-workspace.jpg" 
              alt="OfficeAtlas Minimal Workspace" 
              className="w-full h-full object-contain rounded-2xl shadow-lg border border-zinc-200/50"
            />
          </div>
        </section>

        {/* ================= SECTION 4: WHAT WE COVER ================= */}
        <section className="space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="text-[10px] font-bold tracking-widest text-[#0078D4] uppercase">
                WHAT WE COVER
              </span>
              <span className="w-6 h-[1px] bg-[#0078D4]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-semibold text-[#0A0F1D] tracking-tight leading-tight">
              Everything Microsoft 365. <br />
              <span className="text-[#0078D4]">Clearly Explained.</span>
            </h2>
            <p className="text-zinc-500 text-sm font-normal leading-relaxed">
              From individual apps to enterprise solutions, we cover it all.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-zinc-200/80 p-6 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.01)] hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50/80 flex items-center justify-center text-[#0078D4] shrink-0 shadow-inner">
                <Layers className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-sans font-semibold text-[#0A0F1D]">App Guides</h4>
                <p className="text-zinc-550 text-xs font-normal leading-relaxed">
                  In-depth guides for all Microsoft 365 apps and services.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-zinc-200/80 p-6 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.01)] hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50/80 flex items-center justify-center text-emerald-600 shrink-0 shadow-inner">
                <GitCompare className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-sans font-semibold text-[#0A0F1D]">Comparisons</h4>
                <p className="text-zinc-550 text-xs font-normal leading-relaxed">
                  Side-by-side comparisons to help you choose smarter.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-zinc-200/80 p-6 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.01)] hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-50/80 flex items-center justify-center text-[#4B53BC] shrink-0 shadow-inner">
                <Database className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-sans font-semibold text-[#0A0F1D]">Research</h4>
                <p className="text-zinc-550 text-xs font-normal leading-relaxed">
                  Well-researched insights based on real-world data and use cases.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-zinc-200/80 p-6 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.01)] hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50/80 flex items-center justify-center text-amber-500 shrink-0 shadow-inner">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-sans font-semibold text-[#0A0F1D]">How-To Tutorials</h4>
                <p className="text-zinc-550 text-xs font-normal leading-relaxed">
                  Step-by-step tutorials to help you get the most out of Microsoft 365.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white border border-zinc-200/80 p-6 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.01)] hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-rose-50/80 flex items-center justify-center text-rose-500 shrink-0 shadow-inner">
                <Newspaper className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-sans font-semibold text-[#0A0F1D]">Articles & News</h4>
                <p className="text-zinc-550 text-xs font-normal leading-relaxed">
                  Latest updates, tips, and trends from the Microsoft 365 world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: WHY TRUST US ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Why Trust Left */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold tracking-widest text-[#0078D4] uppercase">
                WHY TRUST US
              </span>
              <span className="w-6 h-[1px] bg-[#0078D4]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-semibold text-[#0A0F1D] tracking-tight leading-tight">
              Because Trust <br />
              <span className="text-[#0078D4]">Builds Better Knowledge.</span>
            </h2>
            <p className="text-[#0A0F1D]/70 text-sm font-normal leading-relaxed">
              We don&apos;t promote. We don&apos;t prefer. We simply research, analyze, and present the facts—so you can decide what&apos;s best for you.
            </p>
          </div>

          {/* Why Trust Right */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-2">
            {/* Trust point 1 */}
            <div className="text-center sm:text-left space-y-3">
              <div className="w-12 h-12 rounded-full bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#0078D4] mx-auto sm:mx-0 shadow-sm">
                <Search className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-sans font-semibold text-[#0A0F1D]">Transparent</h4>
                <p className="text-zinc-500 text-xs font-normal leading-relaxed">
                  We cite sources and keep our content open and honest.
                </p>
              </div>
            </div>

            {/* Trust point 2 */}
            <div className="text-center sm:text-left space-y-3">
              <div className="w-12 h-12 rounded-full bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#0078D4] mx-auto sm:mx-0 shadow-sm">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-sans font-semibold text-[#0A0F1D]">Always Updated</h4>
                <p className="text-zinc-500 text-xs font-normal leading-relaxed">
                  Our content is reviewed regularly to stay accurate and relevant.
                </p>
              </div>
            </div>

            {/* Trust point 3 */}
            <div className="text-center sm:text-left space-y-3">
              <div className="w-12 h-12 rounded-full bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#0078D4] mx-auto sm:mx-0 shadow-sm">
                <UserCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-sans font-semibold text-[#0A0F1D]">User First</h4>
                <p className="text-zinc-500 text-xs font-normal leading-relaxed">
                  Your goals come first. Everything we create is designed for you.
                </p>
              </div>
            </div>

            {/* Trust point 4 */}
            <div className="text-center sm:text-left space-y-3">
              <div className="w-12 h-12 rounded-full bg-blue-50/80 border border-blue-100 flex items-center justify-center text-[#0078D4] mx-auto sm:mx-0 shadow-sm">
                <Heart className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-sans font-semibold text-[#0A0F1D]">Community</h4>
                <p className="text-zinc-500 text-xs font-normal leading-relaxed">
                  We value feedback and constantly improve with our community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: NEWSLETTER ================= */}
        <section 
          className="p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 border border-blue-900/10 text-white"
          style={{
            backgroundImage: "linear-gradient(to right, rgba(10, 15, 30, 0.65), rgba(10, 15, 30, 0.45)), url('/blue-envelope-global-message.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >

          {/* Left Text */}
          <div className="space-y-3 relative z-10 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-sans font-semibold text-white">
              Join a growing community of <br className="hidden sm:inline" />
              learners and professionals.
            </h3>
            <p className="text-zinc-200 text-xs sm:text-sm font-normal max-w-md leading-relaxed">
              Stay updated with the latest guides, comparisons, and Microsoft 365 insights.
            </p>
          </div>

          {/* Form & Illustration */}
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto relative z-10">
            <input 
              required
              type="email" 
              placeholder="Enter your email address" 
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="w-full sm:w-64 px-4 py-3 text-xs bg-white border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-sm font-normal text-slate-800"
            />
            <button 
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-7 py-3.5 text-[14px] font-bold bg-[#0A0F1D] hover:bg-[#0078D4] text-white rounded-lg transition-all shadow-md shrink-0 cursor-pointer disabled:bg-emerald-600"
              disabled={subscribed}
            >
              {subscribed ? (
                <>Subscribed! <Check className="w-4 h-4" /></>
              ) : (
                <>Subscribe to newsletter <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
          </form>
        </section>

      </div>
    </div>
  );
}
