"use client";

import { use } from "react";
import { ArrowLeft, Clock, BookOpen, AlertCircle } from "lucide-react";
import Link from "next/link";

interface GuideArticleData {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  intro: string;
  sections: { title: string; paragraphs: string[] }[];
}

const guidesDataMap: Record<string, GuideArticleData> = {
  "how-to-start": {
    slug: "how-to-start",
    title: "How to Get Started with QuickBooks Workspace Setup",
    category: "Getting Started",
    readTime: "12 min read",
    date: "Aug 15, 2026",
    intro: "Setting up a clean QuickBooks profile parameters layout is the critical first stage in business record-keeping. Follow this step-by-step configuration checklist to organize your registers accounts, tax forms categories, and sync profiles.",
    sections: [
      {
        title: "1. Create Company Profile Details",
        paragraphs: [
          "Enter your legal business name, physical street address, and federal Employer Identification Number (EIN). Mismatches in company profile settings can trigger formatting issues on tax reports exports.",
          "Ensure you select the correct tax form structure (e.g. Schedule C, Form 1120S, or Form 1065) during database profile onboarding to align the default charts templates with tax schedule lines."
        ]
      },
      {
        title: "2. Define Your Chart of Accounts Setup",
        paragraphs: [
          "The Chart of Accounts acts as the organizational framework for transactions logs. Categorize registers into Assets, Liabilities, Equity, Revenue, and Operating Expenses.",
          "Minimize custom ledger accounts creation to prevent bloat. Rely on default register groupings where possible to keep reporting audits clean."
        ]
      },
      {
        title: "3. Connect Feeds & Credit Accounts",
        paragraphs: [
          "Link checking bank accounts, credit cards, and merchant transaction logs. Connecting feeds permits automatic daily matching logs imports, reducing manual ledger entry procedures."
        ]
      }
    ]
  },
  "bank-feeds-reconciliation": {
    slug: "bank-feeds-reconciliation",
    title: "Reconciling Bank Feeds and Imports",
    category: "Banking",
    readTime: "8 min read",
    date: "Aug 20, 2026",
    intro: "Reconciling imported bank statement feeds with your internal ledger balances ensures double-entry accounting records remain error-free. Learn how to verify transactions, manage rules parameters, and resolve reconciliation discrepancy logs.",
    sections: [
      {
        title: "1. Perform Daily Matches",
        paragraphs: [
          "Review imported transaction feeds daily. Match incoming payments to outstanding customer invoices, and match vendor expense charges to logged bills.",
          "Avoid duplicate entries by matching existing items instead of creating new transactions directly from the bank feed module."
        ]
      },
      {
        title: "2. Construct Automatic Processing Rules",
        paragraphs: [
          "Configure rules templates to automatically categorize recurring expenses (e.g. utilities, storage space rents). Ensure rules assign matching vendor records and description categories to avoid review queues."
        ]
      }
    ]
  }
};

export default function GuideDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const guide = guidesDataMap[slug] || guidesDataMap["how-to-start"];

  return (
    <div className="bg-[#FAFBFD] min-h-screen text-[#0A0F1D] pt-28 pb-20 px-6 md:px-10 font-sans">
      <div className="max-w-3xl mx-auto space-y-10">
        
        {/* Back Link */}
        <Link 
          href="/quickbooks/guides"
          className="text-xs font-bold text-[#0078D4] hover:text-[#002060] transition-colors inline-flex items-center gap-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Guides directory
        </Link>

        {/* Article Header */}
        <div className="space-y-4 border-b border-zinc-200/50 pb-8">
          <div className="flex items-center gap-3 text-xs font-semibold text-zinc-400">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {guide.readTime}
            </span>
            <span>•</span>
            <span>Published {guide.date}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-sans font-semibold tracking-tight text-[#0A0F1D] leading-tight">
            {guide.title}
          </h1>
          <p className="text-zinc-500 text-sm sm:text-base leading-relaxed font-medium pt-2">
            {guide.intro}
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10">
          {guide.sections.map((sect) => (
            <section key={sect.title} className="space-y-4">
              <h2 className="text-xl font-bold text-[#0A0F1D]">{sect.title}</h2>
              {sect.paragraphs.map((para, idx) => (
                <p key={idx} className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-medium">
                  {para}
                </p>
              ))}
            </section>
          ))}
        </div>

        {/* Related Help */}
        <div className="bg-zinc-50 border border-zinc-200/60 p-6 rounded-2xl flex items-start gap-4">
          <AlertCircle className="w-5 h-5 text-[#0078D4] shrink-0 mt-0.5" />
          <div className="space-y-1.5 text-xs">
            <h4 className="font-bold">Need Help Setting This Up?</h4>
            <p className="text-zinc-500 leading-relaxed font-medium">
              If you run into database synchronization errors or license validation loops while setting up your accounts, check out our dedicated troubleshooting logs or reach out to support.
            </p>
            <div className="pt-1.5 flex gap-4">
              <Link href="/quickbooks/troubleshooting" className="text-xs font-bold text-[#0078D4] hover:text-[#002060]">
                Troubleshooting Center →
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
