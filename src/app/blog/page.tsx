"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, Clock, Calendar, User, BookOpen, ChevronRight, Search, Newspaper, FileText, Globe } from "lucide-react";
import { motion } from "framer-motion";

interface ResearchPaper {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  role: string;
  visual: string;
  summary: string;
  content: string[];
  tabGroup: "microsoft" | "quickbooks";
}

const researchPapers: ResearchPaper[] = [
  // 5 Microsoft Blog Articles
  {
    id: "m365-explained",
    title: "Microsoft 365 Explained: A Complete Beginner's Guide",
    category: "GUIDE",
    date: "May 19, 2024",
    readTime: "8 min read",
    author: "Microsoft 365 Team",
    role: "Official Publication",
    visual: "/blog-m365-explained.png",
    summary: "Everything you need to know about Microsoft 365, plans, features, and getting started.",
    content: [
      "Microsoft 365 is a cloud-based subscription service that brings together the best tools for the way people work today. By combining best-in-class apps like Excel and Outlook with powerful cloud services like OneDrive and Microsoft Teams, Microsoft 365 lets anyone create and collaborate anywhere, on any device.",
      "This foundational guide explains the difference between various license packages (Personal, Family, Business, and Enterprise), details step-by-step setup guides, and discusses custom system deployment strategies to get you up and running.",
      "The Personal plan is designed for individual users who need core Office applications alongside 1 TB of OneDrive cloud storage. It includes Word, Excel, PowerPoint, and Outlook across all devices — desktop, tablet, and mobile. For households, the Family plan extends these benefits to up to six users, each receiving their own 1 TB of storage and full app access.",
      "Business plans introduce a new tier of capabilities. Microsoft 365 Business Basic provides web and mobile versions of Office apps alongside Teams, SharePoint, and Exchange Online — ideal for organizations that operate primarily in the cloud. Business Standard adds desktop app installations, while Business Premium layers on advanced security features such as Intune device management and Azure Information Protection.",
      "Enterprise licensing (E1, E3, E5) scales for organizations with hundreds or thousands of users. E3 includes full desktop apps, advanced compliance tools, and eDiscovery capabilities. E5 adds Power BI Pro, advanced threat protection, and audio conferencing — making it the most comprehensive package for large-scale deployments.",
      "Setting up Microsoft 365 begins with configuring your tenant — the dedicated instance of Azure Active Directory (now Microsoft Entra ID) that houses your organization's identity and access management. From there, administrators assign licenses, configure security defaults, and establish conditional access policies that govern how and where users authenticate.",
      "By syncing files to OneDrive, configuring shared folders, and setting up collaborative channels in Teams, you establish a unified, secure workstation capable of handling modern work demands. The integration between these services means that a file created in Word can be instantly shared via Teams, co-edited in real-time, and stored with version history in SharePoint — all without leaving the Microsoft 365 ecosystem.",
      "For IT administrators, the Microsoft 365 Admin Center provides a centralized dashboard for managing users, monitoring service health, and configuring organization-wide settings. The Security & Compliance Center offers granular control over data loss prevention policies, retention labels, and audit logging — ensuring your deployment meets regulatory requirements from day one."
    ],
    tabGroup: "microsoft"
  },
  {
    id: "whats-new",
    title: "What's New in Microsoft 365 May 2024",
    category: "UPDATES",
    date: "May 15, 2024",
    readTime: "6 min read",
    author: "Microsoft 365 Team",
    role: "Official Publication",
    visual: "/blog-whats-new.png",
    summary: "Explore the latest features and updates across Microsoft 365 apps.",
    content: [
      "The May 2024 update brings several powerful features to Microsoft 365 apps, focusing heavily on AI-assisted workflows and improved cross-app collaboration.",
      "Microsoft Teams introduces collaborative notes during meetings, allowing participants to co-create agendas and action items in real-time. This feature replaces the previous meeting notes experience with a Loop-powered component that syncs instantly across all attendees. Notes persist after the meeting ends and can be accessed from the meeting chat, calendar event, or directly within the Loop app.",
      "Outlook enhances scheduling tools to help users book calendar spaces with automated location considerations. The new scheduling assistant now factors in room capacity, equipment availability, and attendee travel time between buildings — reducing the back-and-forth typically required to coordinate in-person meetings across large campuses.",
      "Excel receives a significant update to its formula bar with the introduction of formula suggestions powered by Copilot. As users begin typing formulas, the system analyzes surrounding data patterns and offers contextually relevant completions. This feature supports over 400 Excel functions and adapts its suggestions based on the user's historical formula usage.",
      "Word introduces a redesigned commenting experience with threaded conversations, @mentions that trigger email notifications, and the ability to assign action items directly from comment threads. Resolved comments now collapse automatically, keeping documents clean while preserving the full conversation history for compliance and audit purposes.",
      "PowerPoint adds an automatic slide design engine that analyzes content as it's added and suggests professional layouts, color schemes, and typography pairings. The engine draws from a library of over 10,000 design templates and adapts recommendations based on brand guidelines configured in the organization's SharePoint brand center.",
      "Furthermore, security updates introduce tenant-wide information barrier protocols to separate department-level files automatically within SharePoint hubs, ensuring compliance without administrative hassle. These barriers are configured through the Microsoft Purview compliance portal and can be applied based on Azure AD attributes such as department, title, or custom security groups.",
      "On the administrative side, the Microsoft 365 Admin Center introduces a new health dashboard that provides real-time visibility into service incidents, planned maintenance windows, and feature deployment timelines. Administrators can now subscribe to targeted notifications for specific services and configure escalation paths for critical outages."
    ],
    tabGroup: "microsoft"
  },
  {
    id: "excel-tips",
    title: "10 Excel Tips and Tricks You Should Know",
    category: "TIPS",
    date: "May 12, 2024",
    readTime: "7 min read",
    author: "Microsoft 365 Team",
    role: "Official Publication",
    visual: "/blog-excel-tips.png",
    summary: "Boost your productivity with these simple yet powerful Excel tips.",
    content: [
      "Spreadsheet management doesn't have to be tedious. By masterfully utilizing Excel's built-in calculation pipelines, you can transform data tables into visual reporting dashboards that update in real-time and communicate insights at a glance.",
      "Tip 1: XLOOKUP replaces the aging VLOOKUP and HLOOKUP functions with a single, more flexible formula. Unlike its predecessors, XLOOKUP can search both left and right, supports exact and approximate matches, and handles errors gracefully with a built-in if_not_found parameter. The syntax =XLOOKUP(lookup_value, lookup_array, return_array) is intuitive and eliminates the column index number that caused countless VLOOKUP errors.",
      "Tip 2: Dynamic arrays fundamentally change how Excel handles formulas that return multiple results. Functions like FILTER, SORT, SORTBY, and UNIQUE automatically spill results into adjacent cells without requiring Ctrl+Shift+Enter. For example, =FILTER(A2:D100, C2:C100>1000) instantly extracts all rows where column C exceeds 1000, and the results update automatically as source data changes.",
      "Tip 3: Pivot Tables remain the most powerful summarization tool in Excel. To create one, select your data range, navigate to Insert > PivotTable, and drag fields into the Rows, Columns, Values, and Filters areas. Use calculated fields for custom metrics, and apply conditional formatting to highlight outliers. Refreshing a Pivot Table after data changes is as simple as right-clicking and selecting Refresh.",
      "Tip 4: Flash Fill uses pattern recognition to parse and transform data without formulas. Type the desired output for the first few rows, then press Ctrl+E — Excel detects the pattern and fills the remaining cells. This works for splitting names, reformatting phone numbers, extracting domains from email addresses, and dozens of other common data cleaning tasks.",
      "Tip 5: Custom number formats let you display data in context-appropriate ways without changing underlying values. For example, the format code #,##0.0,\"K\" displays 45000 as 45.0K, while [Green]#,##0;[Red]-#,##0 colors positive numbers green and negative numbers red. These formats are applied via Format Cells > Custom and can be combined with conditional formatting for layered visual cues.",
      "Tip 6: Named ranges make formulas dramatically more readable. Instead of =SUM(B2:B500), define the range as 'MonthlySales' and write =SUM(MonthlySales). Named ranges also make it easier to manage complex workbooks, as they appear in the Name Manager (Ctrl+F3) and can be scoped to individual sheets or the entire workbook.",
      "We also discuss advanced formula auditing pipelines to debug logical errors, helping you build cleaner, more readable, and highly accurate sheets for enterprise operations. The Evaluate Formula tool (found under Formulas > Evaluate Formula) steps through complex nested formulas one operation at a time, revealing exactly where calculations diverge from expectations. Trace Precedents and Trace Dependents draw visual arrows between cells, mapping the flow of data through your workbook.",
      "Finally, we recommend establishing naming conventions, documentation sheets, and version control practices for shared workbooks. Using Excel Tables (Ctrl+T) instead of raw ranges ensures that formulas automatically expand as new data is added, and structured references like =SUM(SalesTable[Revenue]) remain readable even in the most complex financial models."
    ],
    tabGroup: "microsoft"
  },
  {
    id: "teams-collab",
    title: "Microsoft Teams Collaboration: A Complete Guide",
    category: "TEAMS",
    date: "May 10, 2024",
    readTime: "9 min read",
    author: "Microsoft 365 Team",
    role: "Official Publication",
    visual: "/blog-teams-collab.png",
    summary: "Master teamwork with channels, meetings, tasks, and more in Microsoft Teams.",
    content: [
      "Microsoft Teams is more than a simple chat application; it is a unified digital workspace designed for team communication, project management, and department-wide organization. With over 320 million monthly active users, Teams has become the central hub for modern workplace collaboration.",
      "This complete guide covers setting up public and private channels, configuring notifications to reduce context switching, integrating planner tasks directly into tabs, and setting up collaborative channels. Each channel type serves a distinct purpose: Standard channels are visible to all team members, Private channels restrict access to a subset of the team, and Shared channels enable cross-organization collaboration without requiring guest accounts.",
      "Notification management is critical for maintaining productivity in busy Teams environments. We recommend configuring banner notifications only for @mentions and urgent messages, while routing channel activity to the Activity feed. The 'Quiet hours' and 'Quiet days' settings prevent after-hours interruptions, and per-channel notification overrides let users stay closely connected to high-priority projects while muting lower-priority discussions.",
      "Microsoft Planner integration transforms Teams channels into lightweight project management hubs. By adding a Planner tab to any channel, teams can create task boards with customizable columns (To Do, In Progress, Done), assign tasks to specific members, set due dates, and attach relevant files. Tasks created in Planner also appear in the user's personal To Do app, creating a unified task management experience.",
      "Meeting experiences in Teams have evolved significantly with features like Together Mode, which places participants in a shared virtual background to reduce video fatigue. Breakout rooms allow meeting organizers to split attendees into smaller groups for focused discussions, while live reactions (applause, heart, laugh, surprised) provide non-verbal feedback without interrupting the speaker.",
      "For large-scale events, Teams Webinars support up to 1,000 interactive participants or 10,000 view-only attendees. Organizers can configure registration pages, customize email confirmations, and access post-event analytics including attendance duration, engagement scores, and poll responses. Town halls scale even further, supporting up to 20,000 attendees with producer controls for managing presenters and content.",
      "We explore optimization rules to schedule virtual webinars, configure webinar presenters, and manage recording files inside safe cloud storage paths. Meeting recordings are automatically saved to OneDrive (for ad-hoc meetings) or SharePoint (for channel meetings), with configurable retention policies that comply with organizational data governance requirements.",
      "App integrations extend Teams functionality through a marketplace of over 2,000 third-party and custom applications. From project management tools like Jira and Asana to CRM platforms like Salesforce and HubSpot, these integrations bring external workflows directly into the Teams interface. Custom apps can be built using the Teams Toolkit for Visual Studio Code, enabling organizations to create tailored solutions that address specific business needs."
    ],
    tabGroup: "microsoft"
  },
  {
    id: "onedrive-sharepoint",
    title: "OneDrive vs SharePoint: What's the Difference?",
    category: "SECURITY",
    date: "May 8, 2024",
    readTime: "6 min read",
    author: "Microsoft 365 Team",
    role: "Official Publication",
    visual: "/blog-onedrive-sharepoint.png",
    summary: "Understand the key differences and use cases to choose the right tool.",
    content: [
      "While both OneDrive and SharePoint Online leverage the same cloud infrastructure, they serve distinct collaborative and storage purposes in Microsoft 365. Understanding these differences is essential for IT administrators and end users alike to make informed decisions about where to store, share, and manage organizational content.",
      "OneDrive acts as a private, user-specific cloud cabinet designed for personal file syncs, draft editing, and individual sharing. Each user receives between 1 TB and 5 TB of storage (depending on the license tier), and files are accessible from any device through the OneDrive sync client, web browser, or mobile app. The sync client uses differential sync technology, uploading only the changed portions of files to minimize bandwidth usage.",
      "Conversely, SharePoint serves as a public library meant for department-wide communication portals, document storage, and team sharing. SharePoint sites function as collaborative workspaces with document libraries, lists, pages, and web parts that can be customized to match departmental workflows. Each site receives 25 TB of base storage plus 10 GB per licensed user.",
      "File sharing workflows differ significantly between the two platforms. OneDrive sharing is user-initiated — individuals choose specific files or folders and generate sharing links with configurable permissions (View, Edit, or Review). SharePoint sharing is typically site-based, with permissions inherited from the site's membership groups (Owners, Members, Visitors). This inheritance model simplifies access management for large teams but requires careful planning to prevent over-sharing.",
      "Version history is available on both platforms, with SharePoint supporting up to 50,000 major versions per file and OneDrive maintaining 500 versions by default. Both platforms support co-authoring in Office applications, allowing multiple users to edit Word, Excel, and PowerPoint files simultaneously with changes synced in near real-time.",
      "From a compliance perspective, SharePoint offers more granular controls. Sensitivity labels, retention policies, and Data Loss Prevention (DLP) rules can be applied at the site, library, or individual document level. OneDrive supports these same policies but applies them at the user or file level. Organizations subject to regulatory requirements (HIPAA, SOX, GDPR) typically use SharePoint for regulated content and OneDrive for day-to-day personal productivity.",
      "Understanding these parameters allows system administrators to deploy correct access policies, secure file sharing, and reduce data leakage risks. We recommend a hybrid approach: use OneDrive for work-in-progress documents and personal files, and migrate finalized content to SharePoint document libraries where it benefits from team-level governance, search discoverability, and structured metadata.",
      "Migration between OneDrive and SharePoint is straightforward using the SharePoint Migration Tool (SPMT) or the Mover service for larger transfers. Both tools support mapping user-level OneDrive content to SharePoint libraries while preserving permissions, version history, and metadata — ensuring a seamless transition as organizational needs evolve."
    ],
    tabGroup: "microsoft"
  },
  // 4 Microsoft Research Papers
  {
    id: "copilot-future",
    title: "Microsoft Copilot and the Future of Work",
    category: "AI & Productivity",
    date: "Aug 18, 2026",
    readTime: "14 min read",
    author: "David A. Sterling",
    role: "Lead AI Analyst",
    visual: "/blog-copilot-future.png",
    summary: "An empirical evaluation of semantic indexing architectures and actual performance metrics of active copilot trials in corporate structures.",
    content: [
      "Generative AI companion platforms are rapidly shifting workspace operations. This research paper evaluates semantic indexing architectures, Large Language Model prompt frameworks inside core Office applications, and actual performance metrics of active copilot trials in enterprise environments.",
      "By utilizing the Microsoft Graph API, Copilot securely parses tenant-level signals (emails, calendar entries, chats, and documents) to compile highly contextualized reference anchors. This system ensures that all generated answers respect existing Active Directory compliance policies, providing high security alongside productivity enhancements.",
      "The semantic indexing layer operates as a retrieval-augmented generation (RAG) pipeline. When a user issues a prompt — for example, 'Summarize last quarter's revenue discussion' — Copilot first queries the Microsoft Graph to identify relevant emails, meeting transcripts, and SharePoint documents. These source materials are then chunked, embedded into vector representations, and ranked by relevance before being passed to the language model as grounding context.",
      "This architecture solves a fundamental challenge in enterprise AI: hallucination control. By constraining the model's knowledge to verified organizational data rather than its general training corpus, Copilot reduces the risk of generating factually incorrect responses. Our testing across 12 enterprise tenants showed a 94% factual accuracy rate when Copilot had access to well-organized SharePoint libraries, compared to 67% accuracy when relying solely on email and chat data.",
      "Performance metrics from our six-month pilot across 2,400 users reveal compelling productivity gains. Email drafting time decreased by an average of 38%, with users reporting that Copilot's initial drafts required only minor tone and detail adjustments. Meeting summarization — previously a 15-minute post-meeting task — was reduced to under 2 minutes, with summaries automatically capturing action items, decisions, and open questions.",
      "Excel Copilot demonstrated particularly strong results in data analysis workflows. Users could describe analysis goals in natural language ('Show me monthly revenue trends by region with year-over-year comparison') and receive complete Pivot Tables, charts, and formula-driven analyses. This capability reduced the time required for routine data analysis from an average of 45 minutes to approximately 8 minutes.",
      "However, our research also identifies significant adoption barriers. Users with poorly organized file systems and inconsistent naming conventions experienced lower Copilot accuracy, as the RAG pipeline struggled to identify relevant source documents. Organizations that invested in SharePoint metadata governance, consistent folder structures, and document tagging saw markedly better results.",
      "Our telemetry indicates a significant reduction in time-to-draft metrics for communications (up to 38%) and a marked acceleration in meeting summarizations. We conclude that tenant-level context injection is the single most critical factor in driving user satisfaction with workspace AI companions.",
      "Looking ahead, we anticipate that the next generation of workspace AI will move beyond reactive assistance toward proactive intelligence — surfacing relevant documents before meetings, flagging conflicting calendar commitments, and automatically generating weekly status reports from project activity. Organizations that establish strong data governance foundations today will be best positioned to capitalize on these capabilities."
    ],
    tabGroup: "microsoft"
  },
  {
    id: "modern-collaboration",
    title: "How Microsoft 365 Changed Modern Collaboration",
    category: "Collaboration",
    date: "Aug 02, 2026",
    readTime: "6 min read",
    author: "Elena Rostova",
    role: "Workplace Telemetry Expert",
    visual: "/collaboration-visual.png",
    summary: "An empirical look at real-time telemetry changes in virtual teamwork layouts and network socket sync models over the last five years.",
    content: [
      "Modern virtual collaboration is built on real-time data streaming and instant synchronization. This paper traces the architectural pivot from local document locking to real-time co-authoring tools in Word, shared Channels in Microsoft Teams, and centralized document version control within SharePoint Online.",
      "Using web socket connections and conflict-free replicated data types (CRDTs), multiple active users can make concurrent adjustments to spreadsheets or document structures without triggering version collisions. Our study analyzes these packet synchronization pipelines under varied network latencies.",
      "The evolution of collaboration technology within Microsoft 365 can be traced through three distinct phases. Phase one (2015–2018) introduced basic co-authoring in Office Online, allowing multiple users to edit web-based documents simultaneously. However, desktop applications still relied on file locking, creating friction for teams that preferred native apps. Phase two (2019–2022) brought real-time co-authoring to desktop Word, Excel, and PowerPoint, synchronized through OneDrive and SharePoint backends.",
      "Phase three (2023–present) represents the convergence era, where collaboration is no longer confined to individual documents. Microsoft Loop introduces portable components — tables, task lists, and notes — that live simultaneously across Teams chats, Outlook emails, and Loop workspaces. Changes made in any surface propagate instantly to all others, eliminating the concept of a 'master copy' entirely.",
      "Our network telemetry analysis reveals that the average co-authoring session now involves 3.2 concurrent editors, up from 1.8 in 2021. Median sync latency has decreased from 2.3 seconds to 340 milliseconds over the same period, largely due to Microsoft's investment in edge caching and regional data center expansion. These improvements have made real-time collaboration indistinguishable from local editing for most users.",
      "The impact on meeting culture is equally significant. Our data shows that organizations using Teams collaborative features (shared notes, whiteboarding, breakout rooms) conduct 23% fewer follow-up meetings compared to organizations relying on traditional video-only calls. The ability to capture decisions, assign tasks, and share reference materials within the meeting context reduces the need for post-meeting alignment conversations.",
      "Ultimately, we find that reducing transaction sync times directly correlates with higher collaborative group performance. By removing file check-out structures and replacing them with cloud-first shared editing workspaces, team workflow friction was decreased by approximately 45%.",
      "Cross-organizational collaboration has also been transformed through Teams Connect shared channels and Azure B2B guest access. Our research shows that 67% of enterprise Teams tenants now have active external collaborators, compared to just 31% in 2021. Shared channels in particular have reduced the administrative overhead of external collaboration by eliminating the need for guest account provisioning and separate authentication flows.",
      "We recommend that organizations seeking to maximize collaborative productivity focus on three key areas: reducing sync latency through proper network configuration, establishing governance frameworks that enable rather than restrict sharing, and investing in user training that emphasizes asynchronous collaboration patterns alongside real-time co-authoring."
    ],
    tabGroup: "microsoft"
  },
  {
    id: "cloud-productivity",
    title: "Cloud Productivity: Security Benefits and Compliance Challenges",
    category: "Compliance & Cloud",
    date: "Aug 10, 2026",
    readTime: "12 min read",
    author: "Marcus Vance",
    role: "Enterprise Infrastructure Director",
    visual: "/blog-cloud-security.png",
    summary: "Analyzing data protection rules, sovereignty compliance guidelines, and conditional access policies in Teams and SharePoint hubs.",
    content: [
      "Deploying productivity suites in the cloud introduces complex regulatory compliance frameworks (such as GDPR, HIPAA, and sovereign cloud data regulations). This publication investigates how SharePoint Online and Teams encrypt and isolate organizational data pools in multi-tenant cloud ecosystems.",
      "We detail the configuration of Data Loss Prevention (DLP) rules, conditional access policies, and Azure Information Protection (AIP) labels. These safeguards prevent accidental sharing of sensitive fields (PII, financial keys) outside of tenant-approved boundaries.",
      "Microsoft 365's security architecture operates on a zero-trust model, where every access request is verified regardless of its origin. Azure Active Directory Conditional Access evaluates signals including user identity, device compliance state, geographic location, and risk score before granting access to any resource. High-risk sign-ins trigger multi-factor authentication challenges or are blocked entirely, while compliant devices from trusted locations receive seamless single sign-on.",
      "Data encryption in Microsoft 365 operates at multiple layers. At rest, all customer data is encrypted using BitLocker (volume-level) and per-file encryption using unique AES-256 keys managed by the Microsoft Key Management Service. In transit, all communications between client applications and Microsoft data centers use TLS 1.2 or higher. For organizations requiring additional control, Customer Key allows tenants to manage their own encryption keys through Azure Key Vault, providing a cryptographic guarantee that Microsoft cannot access customer data without explicit authorization.",
      "Data Loss Prevention policies in Microsoft 365 scan content across Exchange Online, SharePoint, OneDrive, and Teams in real-time. Pre-built sensitive information types detect patterns matching credit card numbers, social security numbers, passport numbers, and over 200 other regulatory identifiers. Custom sensitive information types can be defined using regular expressions, keyword dictionaries, or trainable classifiers that learn from sample documents. When a policy match is detected, the system can notify the user, block the sharing action, or escalate to a compliance officer.",
      "Retention policies and retention labels govern the lifecycle of organizational content, ensuring that documents are preserved for required regulatory periods and disposed of when no longer needed. Litigation holds freeze content in place regardless of user actions, preserving a complete audit trail for legal discovery. The Microsoft Purview Compliance Portal provides a unified interface for configuring these policies across all Microsoft 365 workloads.",
      "While cloud infrastructure significantly lowers local hardware maintenance costs and supports remote workforce access, it requires rigorous cloud administration. We suggest establishing strict conditional access parameters based on device health and geographic location.",
      "Data residency requirements present a growing challenge for multinational organizations. Microsoft 365 Multi-Geo capabilities allow tenants to specify the geographic location where each user's data is stored, ensuring compliance with data sovereignty regulations like the EU's GDPR, Australia's Privacy Act, and Brazil's LGPD. However, multi-geo configurations introduce complexity in search, eDiscovery, and cross-region collaboration that must be carefully managed.",
      "Our research concludes that organizations achieving the highest security postures treat Microsoft 365 security as a continuous program rather than a one-time configuration. Regular access reviews, quarterly DLP policy audits, monthly conditional access assessments, and ongoing user security awareness training form the foundation of a mature cloud security practice."
    ],
    tabGroup: "microsoft"
  },
  {
    id: "office-evolution",
    title: "The Evolution from MS Office to Microsoft 365",
    category: "SaaS Evolution",
    date: "Aug 14, 2026",
    readTime: "8 min read",
    author: "Dr. Sarah Jenkins",
    role: "Software Architecture Historian",
    visual: "/blog-evolution-office.png",
    summary: "Tracing the structural pivot from localized MSI application suite bundles to cloud-integrated continuous delivery SaaS systems.",
    content: [
      "For decades, personal computing productivity was bound to local machine environments through physical media installations (CD-ROMs containing Office 97, 2003 MSI files). This paper explores the transition to SaaS subscription licensing, Click-to-Run (C2R) deployment networks, and continuous cloud feature updates.",
      "The history of Microsoft Office begins in 1989 with the release of Office 1.0 for Macintosh, bundling Word, Excel, and PowerPoint into a single package for the first time. The Windows version followed in 1990, and subsequent releases (Office 95, 97, 2000, XP, 2003) established a predictable three-year release cadence. Each major version required organizations to plan, test, and execute enterprise-wide deployment projects — a process that typically consumed 6 to 18 months and significant IT resources.",
      "The introduction of Office 365 in 2011 marked the beginning of the SaaS transformation. Initial adoption was cautious, with many organizations treating cloud subscriptions as supplements to their on-premises installations rather than replacements. Exchange Online was the first workload to gain widespread cloud adoption, driven by the compelling economics of eliminating on-premises mail server infrastructure.",
      "The switch to cloud-bound installations allows Microsoft to push security definitions and application enhancements incrementally, eliminating the traditional multi-year product update cycle. Licensing is validated dynamically against Azure Active Directory (Microsoft Entra ID). The Click-to-Run deployment model streams application updates in the background, applying them silently during the next application restart. Organizations can choose between Current Channel (immediate updates), Monthly Enterprise Channel (monthly updates with a two-week preview period), and Semi-Annual Enterprise Channel (updates every six months) — balancing access to new features against stability requirements.",
      "The rebranding from Office 365 to Microsoft 365 in April 2020 signaled a broader strategic vision. The platform was no longer just a suite of productivity applications — it had evolved into a comprehensive workplace platform encompassing communication (Teams), knowledge management (Viva), security (Defender, Purview), and identity (Entra). This expansion reflected the post-pandemic reality that organizations needed integrated solutions for remote work, not just document editing tools.",
      "This architecture guarantees that client software is perpetually up-to-date, lowering organizational maintenance overhead while introducing continuous access to cloud-linked capabilities like real-time search, cloud storage, and AI processing.",
      "The economic model shift from perpetual licensing to subscriptions has had profound implications for both Microsoft and its customers. For Microsoft, recurring revenue provides predictable cash flow and reduces the pressure to deliver blockbuster releases. For organizations, subscriptions lower the initial capital expenditure but require ongoing operational budget commitments. Our analysis of total cost of ownership (TCO) across 50 enterprise deployments shows that Microsoft 365 subscriptions cost approximately 15% more over a five-year period compared to perpetual licenses — but deliver significantly more value through continuous feature updates, cloud services, and reduced IT management overhead.",
      "The integration of Copilot AI capabilities in 2023 represents the latest evolutionary leap. By embedding large language models directly into Word, Excel, PowerPoint, Outlook, and Teams, Microsoft has positioned Microsoft 365 as an AI-first platform. This development would have been architecturally impossible under the old perpetual license model, as it requires continuous cloud connectivity, real-time data processing, and frequent model updates that can only be delivered through a SaaS infrastructure.",
      "Looking forward, the trajectory suggests further convergence between productivity tools, communication platforms, and AI assistants. The distinction between 'applications' is blurring as Loop components, Copilot agents, and collaborative canvases create fluid work experiences that transcend traditional application boundaries. Microsoft 365 is no longer a software suite — it is an evolving workplace operating system."
    ],
    tabGroup: "microsoft"
  },
  // 4 QuickBooks Blog Articles
  {
    id: "qb-yearend-close",
    title: "Preparing for Year-End Closeout Procedures",
    category: "TAX COMPLIANCE",
    date: "Aug 24, 2026",
    readTime: "10 min read",
    author: "Elena Rostov",
    role: "Senior Accountant",
    visual: "/blog-qb-yearend-close.png",
    summary: "Detailed accounting checks to close your QuickBooks files cleanly. Learn how to verify vendor tax classifications, clear outstanding checks, match bank feeds, and format audit trails reports.",
    content: [
      "Closing fiscal books requires detailed precision to prevent year-end auditing problems. QuickBooks streamlines this process by automating ledger resets, but human oversight remains critical.",
      "First, review your vendor classifications. Make sure all independent contractors have their W-9 tax IDs inputted and are flagged for 1099 compilation. Generating these lists early blocks January filing bottlenecks.",
      "Second, reconcile all outstanding bank feed imports. Ensure there are no duplicate sync rows and that all deposits are classified. Run a test balance sheet to verify physical cash against QuickBooks checking register listings."
    ],
    tabGroup: "quickbooks"
  },
  {
    id: "qb-duplicate-feeds",
    title: "Fixing Bank Feed Duplication Issues",
    category: "BANKING",
    date: "Aug 20, 2026",
    readTime: "6 min read",
    author: "Marcus Vance",
    role: "Merchant Integration Lead",
    visual: "/blog-qb-duplicate-feeds.png",
    summary: "How to resolve duplicate bank feeds without breaking previous months balance reconciliations sheets. Clean register ledger workflows.",
    content: [
      "Bank feed duplications can easily happen after bank migrations or sync updates. When these duplicates appear, they can distort net asset metrics.",
      "To resolve this, navigate to your banking sync ledger. Sort by date and reference ID, identify duplicate blocks, and click 'Exclude' rather than delete to preserve transaction records histories.",
      "Perform a physical statement audit for the target period. Validate bank statement ending cash matches register ledgers accurately before final reconciliation locking."
    ],
    tabGroup: "quickbooks"
  },
  {
    id: "qb-bonus-rules",
    title: "Setting Up Custom Bonus Pay Rules",
    category: "PAYROLL",
    date: "Aug 18, 2026",
    readTime: "8 min read",
    author: "Sarah Jenkins",
    role: "HR Systems Analyst",
    visual: "/blog-qb-bonus-rules.png",
    summary: "A tutorial to assign separate tax withholding parameters to single employee bonus checks inside QuickBooks Payroll modules.",
    content: [
      "QuickBooks Payroll handles standard wage calculations automatically. However, custom bonus checks require special tax handling to satisfy IRS guidelines.",
      "First, create a new Earnings Type in your Payroll preferences panel and label it 'Supplemental Bonus'. Set specific flat withholding tax parameters (typically 22% for IRS compliance).",
      "Assign workers to the run, enter wage metrics, and process as a supplemental run to keep deductions separate from base monthly salaries runs."
    ],
    tabGroup: "quickbooks"
  },
  {
    id: "qb-lan-hosting",
    title: "Configuring Multi-User Mode Over LAN Hosting",
    category: "SYSTEM SETUP",
    date: "Aug 14, 2026",
    readTime: "12 min read",
    author: "David Vance",
    role: "Database Administrator",
    visual: "/blog-qb-lan-hosting.png",
    summary: "Setting correct server database configurations and folders permissions rules to allow multi-user access without H202 network faults.",
    content: [
      "QuickBooks H202 error messages indicate multi-user connectivity blocks. By establishing proper host server configurations, you can resolve these LAN bugs.",
      "Ensure the QuickBooks Database Server Manager is active on your host system. Scan company folders to allow multi-user monitoring.",
      "Adjust local security tools and firewall settings rules to permit database ports connectivity to client workstations laptops."
    ],
    tabGroup: "quickbooks"
  }
];

function ResearchHubContent() {
  const searchParams = useSearchParams();
  const paperQuery = searchParams.get("paper");
  const tabParam = searchParams.get("tab");
  
  // Set default tab group depending on parameters or default to microsoft
  const [activeTabGroup, setActiveTabGroup] = useState<"microsoft" | "quickbooks">("microsoft");
  const [activePaperId, setActivePaperId] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Sync parameters to states
  useEffect(() => {
    if (tabParam === "quickbooks") {
      setActiveTabGroup("quickbooks");
    } else {
      setActiveTabGroup("microsoft");
    }
  }, [tabParam]);

  // Sync active paper selections based on active tab group
  useEffect(() => {
    const groupPapers = researchPapers.filter(p => p.tabGroup === activeTabGroup);
    if (paperQuery && researchPapers.some(p => p.id === paperQuery && p.tabGroup === activeTabGroup)) {
      setActivePaperId(paperQuery);
    } else if (groupPapers.length > 0) {
      setActivePaperId(groupPapers[0].id);
    }
  }, [paperQuery, activeTabGroup]);

  // Categories based on selected tab group
  const groupPapersAll = researchPapers.filter(p => p.tabGroup === activeTabGroup);
  const categories = ["All", ...Array.from(new Set(groupPapersAll.map(p => p.category)))];

  // Filtering
  const filteredPapers = groupPapersAll.filter(paper => {
    const matchesCategory = selectedCategory === "All" || paper.category === selectedCategory;
    const matchesSearch = 
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const activePaper = researchPapers.find(p => p.id === activePaperId) || groupPapersAll[0];

  return (
    <div className="pt-32 pb-24 bg-slate-50/50 min-h-screen relative overflow-hidden font-sans text-slate-800">
      
      {/* Ambient Premium Light Glows */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute top-10 left-1/3 w-[600px] h-[600px] rounded-full bg-blue-100/20 blur-[130px]" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] rounded-full bg-indigo-100/20 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Navigation & Header */}
        <div className="space-y-6 mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                Knowledge Hub & Publications
              </h1>
              <p className="text-zinc-500 text-sm sm:text-base leading-relaxed font-normal">
                Explore in-depth technical analyses, case studies, updates, and tutorials from our editors.
              </p>
            </div>

            {/* Product Switch Tabs */}
            <div className="bg-white border border-zinc-200/80 p-1.5 rounded-2xl shadow-sm flex items-center gap-1.5 shrink-0 self-start md:self-auto">
              <button
                onClick={() => { setActiveTabGroup("microsoft"); setSelectedCategory("All"); }}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2 ${
                  activeTabGroup === "microsoft"
                    ? "bg-[#0A0F1D] text-white shadow-sm"
                    : "text-zinc-650 hover:bg-zinc-50"
                }`}
              >
                <Globe className="w-4 h-4" />
                Microsoft 365
              </button>
              <button
                onClick={() => { setActiveTabGroup("quickbooks"); setSelectedCategory("All"); }}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2 ${
                  activeTabGroup === "quickbooks"
                    ? "bg-[#0A0F1D] text-white shadow-sm"
                    : "text-zinc-650 hover:bg-zinc-50"
                }`}
              >
                <Newspaper className="w-4 h-4" />
                QuickBooks
              </button>
            </div>
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column - Paper Selectors List (Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center px-1">
                <h4 className="text-[10px] uppercase tracking-widest font-extrabold text-zinc-400">
                  Select Article ({filteredPapers.length})
                </h4>
              </div>

              {/* Search input */}
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-450" />
                <input
                  type="text"
                  placeholder="Search articles & publications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 text-xs font-medium bg-white/60 border border-zinc-200/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all shadow-sm"
                />
              </div>

              {/* Categories wrapped selection */}
              <div className="flex flex-wrap gap-1.5 px-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all border ${
                      selectedCategory === cat
                        ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                        : "bg-white border-zinc-200 text-zinc-500 hover:text-zinc-800 hover:border-zinc-300"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3 py-1 pr-1 max-h-[calc(100vh-320px)] overflow-y-auto blog-scrollbar">
              {filteredPapers.length > 0 ? (
                filteredPapers.map((paper) => {
                  const isActive = activePaperId === paper.id;
                  return (
                    <button
                      key={paper.id}
                      onClick={() => setActivePaperId(paper.id)}
                      className={`w-full text-left flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 relative group cursor-pointer ${
                        isActive 
                          ? "bg-white border-blue-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] scale-[1.01]" 
                          : "bg-white/40 border-zinc-200/60 hover:bg-white hover:border-zinc-300/80 hover:shadow-sm"
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-extrabold text-blue-600 uppercase tracking-wider">
                            {paper.category}
                          </span>
                          {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />}
                        </div>
                        <h3 className="text-sm font-extrabold text-slate-900 mt-1 line-clamp-2 leading-snug">
                          {paper.title}
                        </h3>
                        <p className="text-xs text-zinc-400 mt-1.5 line-clamp-1 font-semibold">
                          {paper.summary}
                        </p>
                      </div>

                      <ChevronRight className={`w-4 h-4 text-zinc-300 transition-transform duration-300 self-center shrink-0 ${
                        isActive ? "translate-x-1 text-blue-500" : "group-hover:translate-x-0.5"
                      }`} />
                    </button>
                  );
                })
              ) : (
                <div className="text-center py-12 px-4 bg-white/30 border border-dashed border-zinc-200 rounded-2xl">
                  <p className="text-sm text-zinc-455 font-semibold">No publications match your search criteria.</p>
                  <button 
                    onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                    className="mt-3 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors underline"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Active Paper Deep-Dive Content (Span 7) */}
          <div className="lg:col-span-7 bg-white border border-zinc-200/80 rounded-2xl shadow-xl shadow-slate-100/50 overflow-hidden">
            {activePaper ? (
              <>
                {/* Visual Cover Header */}
                <div className="h-64 relative bg-[#070F1E] overflow-hidden select-none border-b border-zinc-200/20">
                  {/* Image with fallback */}
                  {activePaper.visual ? (
                    <img 
                      src={activePaper.visual} 
                      alt={activePaper.title} 
                      className="w-full h-full object-cover opacity-90 relative z-10"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 flex items-center justify-center">
                    <div className="opacity-15 w-full h-full absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-300 via-slate-950 to-slate-950" />
                    <BookOpen className="w-20 h-20 text-white opacity-20" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-20" />
                  <span className="absolute bottom-4 left-6 bg-blue-600 text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded z-30">
                    {activePaper.category}
                  </span>
                </div>

                {/* Content Details */}
                <div className="p-8 md:p-10 space-y-8">
                  
                  {/* Meta information row */}
                  <div className="flex flex-wrap items-center gap-6 text-xs text-zinc-400 font-bold border-b border-zinc-100 pb-6">
                    <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {activePaper.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {activePaper.readTime}</span>
                    <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> By {activePaper.author}</span>
                  </div>

                  {/* Publication Header Title */}
                  <div className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                      {activePaper.title}
                    </h2>
                    <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-zinc-200/40">
                      <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-slate-800">{activePaper.author}</h5>
                        <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">{activePaper.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Research Text Content */}
                  <div className="space-y-5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {activePaper.content.map((paragraph, pIdx) => (
                      <p key={pIdx}>
                        {paragraph}
                      </p>
                    ))}
                  </div>

                </div>
              </>
            ) : (
              <div className="p-10 text-center text-zinc-450">Please select an article to read.</div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}

export default function ResearchHub() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-zinc-400">Loading Knowledge Hub...</div>}>
      <ResearchHubContent />
    </Suspense>
  );
}
