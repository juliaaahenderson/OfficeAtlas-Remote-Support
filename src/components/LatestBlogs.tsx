"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  desc: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  hasPill?: boolean;
}

const blogPosts: Post[] = [
  {
    id: "m365-explained",
    title: "Microsoft 365 Explained: A Complete Beginner's Guide",
    desc: "Everything you need to know about Microsoft 365, plans, features, and getting started.",
    category: "GUIDE",
    date: "May 19, 2024",
    readTime: "8 min read",
    image: "/blog-m365-explained.png",
    author: "Microsoft 365 Team",
    hasPill: true
  },
  {
    id: "whats-new",
    title: "What's New in Microsoft 365 May 2024",
    desc: "Explore the latest features and updates across Microsoft 365 apps.",
    category: "UPDATES",
    date: "May 15, 2024",
    readTime: "6 min read",
    image: "/blog-whats-new.png",
    author: "Microsoft 365 Team"
  },
  {
    id: "excel-tips",
    title: "10 Excel Tips and Tricks You Should Know",
    desc: "Boost your productivity with these simple yet powerful Excel tips.",
    category: "TIPS",
    date: "May 12, 2024",
    readTime: "7 min read",
    image: "/blog-excel-tips.png",
    author: "Microsoft 365 Team"
  },
  {
    id: "teams-collab",
    title: "Microsoft Teams Collaboration: A Complete Guide",
    desc: "Master teamwork with channels, meetings, tasks, and more in Microsoft Teams.",
    category: "TEAMS",
    date: "May 10, 2024",
    readTime: "9 min read",
    image: "/blog-teams-collab.png",
    author: "Microsoft 365 Team"
  },
  {
    id: "onedrive-sharepoint",
    title: "OneDrive vs SharePoint: What's the Difference?",
    desc: "Understand the key differences and use cases to choose the right tool.",
    category: "SECURITY",
    date: "May 8, 2024",
    readTime: "6 min read",
    image: "/blog-onedrive-sharepoint.png",
    author: "Microsoft 365 Team",
    hasPill: true
  }
];

export default function LatestBlogs() {
  return (
    <section id="blog" className="py-24 bg-slate-50/50 border-t border-zinc-200/50 font-sans relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 md:px-10">
        
        {/* Symmetrical Header Block */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
              Latest Blog Articles
            </h2>
          </div>
          <Link 
            href="/blog?paper=m365-explained" 
            className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            View all articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-stretch">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog?paper=${post.id}`}
              className="group flex flex-col h-full bg-white border border-zinc-200/80 rounded-2xl overflow-hidden hover:shadow-lg hover:border-zinc-300 transition-all duration-300 cursor-pointer"
            >
              {/* Card Image */}
              <div className="h-44 relative bg-slate-50 overflow-hidden select-none border-b border-zinc-100 shrink-0">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {post.hasPill && (
                  <span className="absolute top-3 left-3 bg-[#0D121F]/80 backdrop-blur-md text-white text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded">
                    {post.category}
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-[15px] font-semibold text-slate-900 leading-snug mb-3 group-hover:text-blue-600 transition-colors duration-255">
                    {post.title}
                  </h4>
                  <p className="text-xs text-zinc-500 leading-relaxed font-semibold">
                    {post.desc}
                  </p>
                </div>

                {/* Card Footer Divider & Metadata */}
                <div className="border-t border-zinc-100 mt-5 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {/* Small Microsoft Logo Icon representation */}
                    <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                      <span className="text-[8px] font-extrabold text-blue-600 leading-none">M</span>
                    </div>
                    <div className="min-w-0">
                      <h5 className="text-[10px] font-extrabold text-slate-800 leading-none truncate">
                        {post.author}
                      </h5>
                      <p className="text-[9px] text-zinc-400 font-bold mt-1 leading-none">
                        {post.date}
                      </p>
                    </div>
                  </div>
                  
                  {/* Circular action button */}
                  <div className="w-8 h-8 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 bg-zinc-50 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
