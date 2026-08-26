"use client";

import { use } from "react";
import { ArrowLeft, CheckCircle, AlertTriangle, Laptop, Shield, Zap, Users, ArrowRight, Star, ChevronRight } from "lucide-react";
import Link from "next/link";

interface ProductDetail {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  overview: string;
  whoItIsFor: string;
  features: string[];
  pricingPlans: { name: string; price: string; desc: string; highlighted?: boolean }[];
  advantages: string[];
  limitations: string[];
  systemReqs: string[];
  gettingStartedSteps: string[];
  accent: string;
}

const productDetailsData: Record<string, ProductDetail> = {
  online: {
    slug: "online",
    name: "QuickBooks Online",
    category: "Cloud Accounting",
    tagline: "Run your business from anywhere, at any time.",
    overview: "QuickBooks Online is a cloud-based software client designed to centralize and automate business accounting. It reconciles bank transactions, creates digital invoices, tracks expense entries, and provides real-time reports accessible from mobile devices and web browsers.",
    whoItIsFor: "Best for sole proprietors, startups, and small to mid-sized businesses seeking mobility, automated banking connections, and collaboration across multiple locations.",
    features: [
      "Automated Bank Feeds: Daily sync with bank checking accounts.",
      "Custom Digital Invoicing: Design and dispatch templates directly to customers.",
      "Expense Tracking: Take pictures of receipts with the mobile app for OCR classification.",
      "Tax Estimates: Quarterly estimated calculations for self-employed schedules."
    ],
    pricingPlans: [
      { name: "Simple Start", price: "$30/mo", desc: "Basic income and expense tracking for 1 user." },
      { name: "Essentials", price: "$60/mo", desc: "Adds bill management and time tracking for up to 3 users.", highlighted: true },
      { name: "Plus", price: "$90/mo", desc: "Includes inventory management and project profitability for up to 5 users." }
    ],
    advantages: [
      "Access data anywhere via web or mobile application.",
      "No manual software installation or database backups required.",
      "Automatic software updates with new features and tax compliance parameters."
    ],
    limitations: [
      "Requires active internet connection.",
      "Slower file calculations on large databases compared to native desktop engines.",
      "Recurring monthly subscription models can accrue heavy costs over time."
    ],
    systemReqs: [
      "Browser: Latest Chrome, Firefox, Edge, or Safari.",
      "Internet: Broadband connection (min 1.5 Mbps).",
      "Mobile: iOS 15.0+ or Android 7.0+."
    ],
    gettingStartedSteps: [
      "Create your company profile and input tax registry identification.",
      "Connect business credit cards and bank feeds for automatic synchronization.",
      "Create client profiles and customize invoice templates."
    ],
    accent: "#0078D4",
  },
  desktop: {
    slug: "desktop",
    name: "QuickBooks Desktop",
    category: "On-Premise Accounting",
    tagline: "Local control with a powerful, secure database engine.",
    overview: "QuickBooks Desktop is a native local system providing heavy-duty double-entry accounting tools. It features localized database speed, customizable industry profiles, manual file architecture management, and job-costing grids.",
    whoItIsFor: "Best for manufacturers, contractors, wholesalers, and legacy business operators requiring offline speed, multiple company files, and detailed job costing reports.",
    features: [
      "Local Processing Speed: Instant calculations without internet latency.",
      "Advanced Inventory: Manage assemblies, build workorders, and customize unit labels.",
      "Detailed Job Costing: Analyze estimates against actual costs item-by-item.",
      "Multi-Company Files: Operate multiple legal entities within a single desktop license."
    ],
    pricingPlans: [
      { name: "Pro Plus", price: "$649/yr", desc: "Essential local job costing and invoicing for up to 3 users." },
      { name: "Premier Plus", price: "$949/yr", desc: "Includes industry-specific templates and reporting for up to 5 users.", highlighted: true }
    ],
    advantages: [
      "High data speed on local machines, even with heavy transaction history.",
      "Complete physical custody and control of company files.",
      "Legacy workflow layouts familiar to accounting professionals."
    ],
    limitations: [
      "Requires manual server setups for multi-user collaboration.",
      "Requires physical storage backup plans (e.g., local external drives).",
      "Transitioning to subscription models with rising annual costs."
    ],
    systemReqs: [
      "OS: Windows 10/11 (64-bit) or macOS 12+.",
      "Processor: Intel Core i5 or equivalent (2.4 GHz min).",
      "RAM: 8 GB (16 GB recommended).",
      "Disk: 2.5 GB SSD space."
    ],
    gettingStartedSteps: [
      "Download the installer file matching your product purchase license.",
      "Enter your validation key and product code to authorize registration.",
      "Set up local company files and choose custom industry chart of accounts."
    ],
    accent: "#7C3AED",
  },
  enterprise: {
    slug: "enterprise",
    name: "QuickBooks Enterprise",
    category: "Enterprise ERP Solutions",
    tagline: "Scale operations with custom data controls and advanced tracking.",
    overview: "QuickBooks Enterprise is an on-premise ERP solution built to handle scaling databases, complex inventory controls, multiple warehouse locations, custom user roles, and up to 40 concurrent users.",
    whoItIsFor: "Best for scaling mid-market businesses, wholesale distributors, large contractors, and manufacturing companies requiring robust inventory control and custom permissions.",
    features: [
      "Advanced Inventory: Barcode scanning, bin location tracking, FIFO costing.",
      "Granular User Roles: Restrict user permissions to specific reports or functions.",
      "Heavy File Processing: Optimized database engine for large volume file capacities.",
      "Priority Circle: Direct access to specialized support teams and customized training."
    ],
    pricingPlans: [
      { name: "Silver", price: "$1,480/yr", desc: "Core database capacity and advanced reporting tools." },
      { name: "Platinum", price: "$2,200/yr", desc: "Includes advanced inventory and automated pricing rules.", highlighted: true },
      { name: "Diamond", price: "Custom", desc: "Adds full-service payroll, employee time tracking, and sales integrations." }
    ],
    advantages: [
      "Supports large database file sizes without query performance degradation.",
      "High-grade customizable permissions protect confidential accounts fields.",
      "Specialized Priority Circle engineering support included with subscription."
    ],
    limitations: [
      "Requires dedicated local database server infrastructure for multi-user environments.",
      "Steep initial pricing tiers require structured yearly budgets.",
      "Complex configuration features require accounting support."
    ],
    systemReqs: [
      "OS: Windows 10/11 or Server 2016/2019/2022.",
      "Processor: Core i5 or Xeon server-grade.",
      "RAM: 16 GB min (32 GB for servers).",
      "Disk: 10 GB SSD space."
    ],
    gettingStartedSteps: [
      "Deploy the Database Manager component on your central storage server host.",
      "Install client modules on workstation computers.",
      "Establish security parameters, create user roles, and link modules."
    ],
    accent: "#0F766E",
  },
  payroll: {
    slug: "payroll",
    name: "QuickBooks Payroll",
    category: "Add-on Module",
    tagline: "Integrated paychecks, automated tax filings, and employee benefits.",
    overview: "QuickBooks Payroll integrates seamlessly into your accounting dashboard to automate check runs, compute tax deductions, and file state/federal payroll forms. It supports direct deposits, automatic tax penalties protection, and employee time card syncing.",
    whoItIsFor: "Best for growing businesses with hourly or salaried employees looking to centralize accounting and payroll in a single unified ledger system.",
    features: [
      "Auto-Tax Filing: State and federal payroll taxes computed and paid automatically.",
      "Same-Day Deposits: Dispatch funds to employee bank accounts same-day.",
      "Time Sync: Automatically imports approved worker hours from QuickBooks Time.",
      "Benefits Integration: Configure health insurance and 401(k) plans within the console."
    ],
    pricingPlans: [
      { name: "Core", price: "$45/mo + $6/user", desc: "Automated payroll runs and next-day direct deposit." },
      { name: "Premium", price: "$80/mo + $8/user", desc: "Adds time tracking, worker comp admin, and same-day direct deposit.", highlighted: true },
      { name: "Elite", price: "$125/mo + $10/user", desc: "Includes a personal setup specialist and tax penalty protection." }
    ],
    advantages: [
      "No double-entry between independent payroll tools and core ledger books.",
      "Automated tax calculations reduce filing errors and compliance penalties.",
      "Integrated employee portal gives workers direct access to pay stubs and tax docs."
    ],
    limitations: [
      "Added monthly base cost plus per-employee fees can scale quickly.",
      "Out-of-state employee tax setups can sometimes require manual configuration.",
      "Limited advanced HR features compared to dedicated HR platforms."
    ],
    systemReqs: [
      "Platform: QuickBooks Online account or QuickBooks Desktop setup.",
      "Internet: Continuous connection for bank/ACH transmission.",
      "Documents: W-4, I-9, and state employer account details."
    ],
    gettingStartedSteps: [
      "Input company tax registrations (EIN, State ID) and employee banking details.",
      "Establish custom pay schedules, salary rates, and tax withholding percentages.",
      "Run a test check flow, verify ACH clearances, and schedule the first live payroll run."
    ],
    accent: "#EA580C",
  },
  time: {
    slug: "time",
    name: "QuickBooks Time",
    category: "Add-on Module",
    tagline: "Accurate schedule tracking with geofenced mobile check-ins.",
    overview: "QuickBooks Time (formerly TSheets) allows mobile employees to clock in/out with GPS tracking. It manages shift scheduling, maps project geofences to prevent clock-ins outside workspaces, and pushes real-time hours straight to payroll.",
    whoItIsFor: "Perfect for field services, construction contractors, landscaping teams, and businesses with mobile crews requiring precise project job-costing metrics.",
    features: [
      "GPS Geofencing: Reminds employees to clock in/out when entering/exiting job sites.",
      "Real-time Dashboard: View active workforce locations on a map in real time.",
      "Shift Scheduling: Drag-and-drop calendars to assign client tasks and dispatch alerts.",
      "Seamless Exports: Send employee time cards to payroll or client invoices in one click."
    ],
    pricingPlans: [
      { name: "Premium", price: "$20/mo + $8/user", desc: "Schedule tracking, mobile app, and real-time dashboard tracking." },
      { name: "Elite", price: "$40/mo + $10/user", desc: "Adds geofencing, project estimates vs. actuals, and timesheet signatures.", highlighted: true }
    ],
    advantages: [
      "Eliminates manual paper timesheets and human calculations.",
      "Stops buddy punching by checking location details at clock-in.",
      "Accelerates invoice creation by attaching exact hours worked to client files."
    ],
    limitations: [
      "Requires staff to install a tracking app on personal mobile devices.",
      "GPS tracking depends on constant cell service and drains phone batteries.",
      "Per-user monthly additions increase overhead costs."
    ],
    systemReqs: [
      "Mobile: iOS 14.0+ or Android 6.0+ with GPS enabled.",
      "Web: Desktop access for managers and administrators.",
      "Connectivity: Active cellular network or Wi-Fi."
    ],
    gettingStartedSteps: [
      "Configure project locations, set active geofence radii, and import job codes.",
      "Send download invitations to staff and configure manager approval permissions.",
      "Create shifts on the master calendar, dispatch alerts, and run weekly reports."
    ],
    accent: "#0284C7",
  },
  payments: {
    slug: "payments",
    name: "QuickBooks Payments",
    category: "Merchant Service",
    tagline: "Accept credit cards and ACH bank transfers directly on invoices.",
    overview: "QuickBooks Payments enables customers to click a link on digital invoices to pay instantly via card or bank transfer. Transactions are cleared, matched, and reconciled inside QuickBooks ledger automatically.",
    whoItIsFor: "Best for business owners looking to reduce payment cycle days, avoid manual cash reconciliation, and offer flexible checkout options.",
    features: [
      "Invoice Links: Auto-appends direct payment links to invoice emails.",
      "Card Swipes: Connect mobile card readers to tablets or phones for in-person transactions.",
      "Instant Deposits: Access settled customer payments within minutes on a brand debit card.",
      "Automatic Reconciliation: Matches deposits and processing fees to open invoices instantly."
    ],
    pricingPlans: [
      { name: "Pay-as-you-go", price: "Transaction Fees", desc: "Pay per transaction. 2.4% + 25¢ for swiped cards, 1% for ACH transfers.", highlighted: true }
    ],
    advantages: [
      "Saves hours of administrative ledger work with auto-reconciling transactions.",
      "Customers pay significantly faster with instant online payment checkout pathways.",
      "Transparent fee summaries categorized under operational expenses automatically."
    ],
    limitations: [
      "Standard card processing percentages can reduce margins on large invoices.",
      "High-value payments can occasionally trigger compliance verification holds.",
      "Lacks third-party custom shopping cart integrations out of the box."
    ],
    systemReqs: [
      "Account: Active QuickBooks subscription with approved merchant status.",
      "Hardware: Optional card swipe terminal for physical point-of-sale use.",
      "Compliance: PCI compliance is handled internally by QuickBooks systems."
    ],
    gettingStartedSteps: [
      "Apply for merchant services inside your QuickBooks settings pane.",
      "Link your business checking account to receive deposits and cover fees.",
      "Toggle card and ACH options on outgoing invoices to let customers pay instantly."
    ],
    accent: "#059669",
  }
};

export default function ProductDetailsPage({ params }: { params: Promise<{ product: string }> }) {
  const resolvedParams = use(params);
  const { product: slug } = resolvedParams;

  const product = productDetailsData[slug] || productDetailsData.online;

  return (
    <div className="bg-[#FAFBFD] min-h-screen text-[#0A0F1D] font-sans">
      
      {/* Clean Light Hero Header */}
      <div className="relative pt-28 pb-4 px-6 md:px-10 overflow-hidden border-b border-zinc-200/60">
        {/* Subtle background accent gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FAFBFD] to-zinc-50" />
        <div className="absolute top-0 right-0 w-[600px] h-[300px] rounded-full blur-3xl opacity-30" style={{ background: `radial-gradient(circle, ${product.accent}12, transparent 70%)` }} />
        
        <div className="relative max-w-7xl mx-auto">
          <Link 
            href="/quickbooks/products"
            className="text-xs font-semibold text-[#0078D4] hover:text-[#002060] transition-colors inline-flex items-center gap-1.5 mb-5"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Products Directory
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: Text */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border" style={{ 
                  color: product.accent, 
                  borderColor: `${product.accent}25`,
                  backgroundColor: `${product.accent}08`
                }}>
                  {product.category}
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-sans font-semibold tracking-tight text-[#0A0F1D] leading-[1.12] mb-3">
                {product.name}
              </h1>
              <p className="text-zinc-500 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                {product.tagline}
              </p>
            </div>

            {/* Right: Product-specific SVG Illustration */}
            <div className="hidden lg:flex justify-end">
              {slug === "online" && (
                <svg width="400" height="240" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Cloud shape */}
                  <ellipse cx="200" cy="80" rx="80" ry="45" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.5"/>
                  <ellipse cx="155" cy="90" rx="45" ry="30" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.5"/>
                  <ellipse cx="250" cy="88" rx="50" ry="32" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.5"/>
                  <rect x="110" y="78" width="185" height="35" fill="#EFF6FF"/>
                  {/* Cloud sync icon */}
                  <circle cx="200" cy="72" r="16" fill="#0078D4" opacity="0.12"/>
                  <path d="M193 72 L200 65 L207 72 M200 65 V80" stroke="#0078D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  
                  {/* Connection lines from cloud to devices */}
                  <line x1="145" y1="113" x2="90" y2="165" stroke="#0078D4" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.4"/>
                  <line x1="200" y1="115" x2="200" y2="165" stroke="#0078D4" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.4"/>
                  <line x1="255" y1="113" x2="310" y2="165" stroke="#0078D4" strokeWidth="1.2" strokeDasharray="4 4" opacity="0.4"/>
                  
                  {/* Sync pulse dots */}
                  <circle cx="118" cy="139" r="3" fill="#0078D4" opacity="0.5"/>
                  <circle cx="200" cy="140" r="3" fill="#0078D4" opacity="0.5"/>
                  <circle cx="283" cy="139" r="3" fill="#0078D4" opacity="0.5"/>
                  
                  {/* Laptop */}
                  <rect x="155" y="170" width="90" height="60" rx="6" fill="white" stroke="#D1D5DB" strokeWidth="1.5"/>
                  <rect x="162" y="177" width="76" height="42" rx="3" fill="#F8FAFC"/>
                  <text x="168" y="188" fill="#0078D4" fontSize="6" fontWeight="bold" fontFamily="system-ui">Dashboard</text>
                  <text x="168" y="196" fill="#9CA3AF" fontSize="5" fontFamily="system-ui">Net Profit: +24%</text>
                  <text x="168" y="203" fill="#9CA3AF" fontSize="5" fontFamily="system-ui">Active Feeds: OK</text>
                  <rect x="168" y="208" width="40" height="8" rx="2" fill="#22C55E" opacity="0.15"/>
                  <text x="172" y="214" fill="#22C55E" fontSize="5" fontWeight="bold" fontFamily="system-ui">Connected</text>
                  <rect x="140" y="230" width="120" height="5" rx="2" fill="#D1D5DB"/>
                  
                  {/* Phone */}
                  <rect x="60" y="170" width="55" height="85" rx="8" fill="white" stroke="#D1D5DB" strokeWidth="1.5"/>
                  <rect x="67" y="182" width="41" height="55" rx="2" fill="#F8FAFC"/>
                  <text x="71" y="191" fill="#22C55E" fontSize="5" fontWeight="bold" fontFamily="system-ui">Invoices</text>
                  <text x="71" y="198" fill="#9CA3AF" fontSize="4.5" fontFamily="system-ui">Drafts: 3</text>
                  <text x="71" y="204" fill="#9CA3AF" fontSize="4.5" fontFamily="system-ui">Sent: 12</text>
                  <circle cx="73" cy="213" r="2" fill="#0078D4"/>
                  <text x="78" y="215" fill="#4B5563" fontSize="4" fontFamily="system-ui">$150.00</text>
                  <circle cx="73" cy="221" r="2" fill="#22C55E"/>
                  <text x="78" y="223" fill="#4B5563" fontSize="4" fontFamily="system-ui">$2,400.00</text>
                  <circle cx="87" cy="248" r="4" fill="#D1D5DB"/>
                  
                  {/* Tablet */}
                  <rect x="285" y="170" width="75" height="85" rx="8" fill="white" stroke="#D1D5DB" strokeWidth="1.5"/>
                  <rect x="293" y="180" width="59" height="60" rx="3" fill="#F8FAFC"/>
                  <text x="298" y="189" fill="#F59E0B" fontSize="6.5" fontWeight="bold" fontFamily="system-ui">Summary</text>
                  <text x="298" y="196" fill="#9CA3AF" fontSize="5.5" fontFamily="system-ui">Assets: $42K</text>
                  <text x="298" y="202" fill="#9CA3AF" fontSize="5.5" fontFamily="system-ui">Liab: $14K</text>
                  {/* Mini chart in tablet */}
                  <rect x="300" y="212" width="8" height="18" rx="2" fill="#0078D4" opacity="0.3"/>
                  <rect x="312" y="218" width="8" height="12" rx="2" fill="#0078D4" opacity="0.5"/>
                  <rect x="324" y="208" width="8" height="22" rx="2" fill="#0078D4" opacity="0.7"/>
                  <rect x="336" y="214" width="8" height="16" rx="2" fill="#0078D4" opacity="0.4"/>
                  
                  {/* Labels */}
                  <text x="87" y="275" textAnchor="middle" fill="#9CA3AF" fontSize="11" fontWeight="700" fontFamily="system-ui">Mobile</text>
                  <text x="200" y="275" textAnchor="middle" fill="#9CA3AF" fontSize="11" fontWeight="700" fontFamily="system-ui">Browser</text>
                  <text x="322" y="275" textAnchor="middle" fill="#9CA3AF" fontSize="11" fontWeight="700" fontFamily="system-ui">Tablet</text>
                </svg>
              )}
              
              {slug === "desktop" && (
                <svg width="400" height="240" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Monitor */}
                  <rect x="60" y="20" width="280" height="190" rx="12" fill="white" stroke="#D1D5DB" strokeWidth="1.5"/>
                  <rect x="60" y="20" width="280" height="34" rx="12" fill="#F3F4F6"/>
                  <rect x="60" y="46" width="280" height="1" fill="#E5E7EB"/>
                  {/* Window controls */}
                  <circle cx="80" cy="37" r="4.5" fill="#EF4444" opacity="0.6"/>
                  <circle cx="95" cy="37" r="4.5" fill="#F59E0B" opacity="0.6"/>
                  <circle cx="110" cy="37" r="4.5" fill="#22C55E" opacity="0.6"/>
                  <rect x="150" y="32" width="80" height="10" rx="3" fill="#E5E7EB"/>
                  
                  {/* Sidebar */}
                  <rect x="60" y="47" width="65" height="163" fill="#F8FAFC"/>
                  <line x1="125" y1="47" x2="125" y2="210" stroke="#E5E7EB" strokeWidth="1"/>
                  <text x="68" y="60" fill="#7C3AED" fontSize="7.5" fontWeight="bold" fontFamily="system-ui">Company</text>
                  <text x="68" y="72" fill="#4B5563" fontSize="6" fontFamily="system-ui">Customers</text>
                  <text x="68" y="84" fill="#4B5563" fontSize="6" fontFamily="system-ui">Vendors</text>
                  <text x="68" y="96" fill="#4B5563" fontSize="6" fontFamily="system-ui">Employees</text>
                  <text x="68" y="108" fill="#4B5563" fontSize="6" fontFamily="system-ui">Banking</text>
                  <text x="68" y="120" fill="#4B5563" fontSize="6" fontFamily="system-ui">Reports</text>
                  
                  {/* Spreadsheet grid - the ledger */}
                  <rect x="135" y="56" width="195" height="20" fill="#F9FAFB"/>
                  <text x="140" y="69" fill="#4B5563" fontSize="6.5" fontWeight="bold" fontFamily="system-ui">Account</text>
                  <text x="190" y="69" fill="#4B5563" fontSize="6.5" fontWeight="bold" fontFamily="system-ui">Type</text>
                  <text x="240" y="69" fill="#4B5563" fontSize="6.5" fontWeight="bold" fontFamily="system-ui">Balance</text>
                  <text x="285" y="69" fill="#4B5563" fontSize="6.5" fontWeight="bold" fontFamily="system-ui">Status</text>
                  {/* Row lines */}
                  <line x1="135" y1="76" x2="330" y2="76" stroke="#F3F4F6" strokeWidth="1"/>
                  <line x1="135" y1="92" x2="330" y2="92" stroke="#F3F4F6" strokeWidth="1"/>
                  <line x1="135" y1="108" x2="330" y2="108" stroke="#F3F4F6" strokeWidth="1"/>
                  <line x1="135" y1="124" x2="330" y2="124" stroke="#F3F4F6" strokeWidth="1"/>
                  <line x1="135" y1="140" x2="330" y2="140" stroke="#F3F4F6" strokeWidth="1"/>
                  {/* Cell data */}
                  <text x="140" y="87" fill="#4B5563" fontSize="6.5" fontFamily="system-ui">Checking</text>
                  <text x="190" y="87" fill="#6B7280" fontSize="6" fontFamily="system-ui">Bank</text>
                  <text x="240" y="87" fill="#22C55E" fontSize="6" fontWeight="bold" fontFamily="system-ui">$14,230</text>
                  <text x="285" y="87" fill="#9CA3AF" fontSize="6.5" fontFamily="system-ui">Active</text>
                  
                  <text x="140" y="103" fill="#4B5563" fontSize="6.5" fontFamily="system-ui">AR Ledger</text>
                  <text x="190" y="103" fill="#6B7280" fontSize="6" fontFamily="system-ui">Assets</text>
                  <text x="240" y="103" fill="#EF4444" fontSize="6" fontWeight="bold" fontFamily="system-ui">-$1,400</text>
                  <text x="285" y="103" fill="#9CA3AF" fontSize="6.5" fontFamily="system-ui">Pending</text>
                  
                  <text x="140" y="119" fill="#4B5563" fontSize="6.5" fontFamily="system-ui">Sales Tax</text>
                  <text x="190" y="119" fill="#6B7280" fontSize="6" fontFamily="system-ui">Liab</text>
                  <text x="240" y="119" fill="#22C55E" fontSize="6" fontWeight="bold" fontFamily="system-ui">$3,150</text>
                  <text x="285" y="119" fill="#9CA3AF" fontSize="6.5" fontFamily="system-ui">Active</text>
                  
                  <text x="140" y="135" fill="#4B5563" fontSize="6.5" fontFamily="system-ui">Equipment</text>
                  <text x="190" y="135" fill="#6B7280" fontSize="6" fontFamily="system-ui">Assets</text>
                  <text x="240" y="135" fill="#22C55E" fontSize="6" fontWeight="bold" fontFamily="system-ui">$8,000</text>
                  <text x="285" y="135" fill="#9CA3AF" fontSize="6.5" fontFamily="system-ui">Active</text>
                  
                  {/* Bottom summary bar */}
                  <rect x="135" y="145" width="195" height="20" rx="4" fill="#7C3AED" opacity="0.06"/>
                  <text x="140" y="157" fill="#7C3AED" fontSize="7" fontWeight="bold" fontFamily="system-ui">Net Assets Summary:</text>
                  <text x="240" y="157" fill="#7C3AED" fontSize="8" fontWeight="bold" fontFamily="system-ui">$23,980.00</text>
                  
                  {/* Saved to disk icon */}
                  <circle cx="320" y="195" r="8" fill="#22C55E" opacity="0.12"/>
                  <path d="M316 195 L319 198 L324 192" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  
                  {/* Monitor stand */}
                  <rect x="175" y="210" width="50" height="8" rx="2" fill="#D1D5DB"/>
                  <rect x="155" y="218" width="90" height="6" rx="3" fill="#E5E7EB"/>
                  
                  {/* Hard drive icon */}
                  <rect x="30" y="245" width="50" height="30" rx="6" fill="white" stroke="#D1D5DB" strokeWidth="1"/>
                  <rect x="38" y="254" width="14" height="3" rx="1" fill="#7C3AED" opacity="0.5"/>
                  <circle cx="68" cy="260" r="3" fill="#22C55E" opacity="0.4"/>
                  <text x="55" y="290" textAnchor="middle" fill="#9CA3AF" fontSize="10" fontWeight="700" fontFamily="system-ui">Local Storage</text>
                  
                  {/* Connection line from drive to monitor */}
                  <path d="M80 260 Q 100 260 120 230" stroke="#D1D5DB" strokeWidth="1" strokeDasharray="3 3" fill="none"/>
                  
                  {/* File cabinet icon */}
                  <rect x="320" y="240" width="50" height="38" rx="6" fill="white" stroke="#D1D5DB" strokeWidth="1"/>
                  <line x1="325" y1="253" x2="365" y2="253" stroke="#E5E7EB" strokeWidth="1"/>
                  <line x1="325" y1="266" x2="365" y2="266" stroke="#E5E7EB" strokeWidth="1"/>
                  <rect x="340" y="244" width="10" height="4" rx="1" fill="#D1D5DB"/>
                  <rect x="340" y="257" width="10" height="4" rx="1" fill="#D1D5DB"/>
                  <rect x="340" y="270" width="10" height="4" rx="1" fill="#D1D5DB"/>
                  <text x="345" y="293" textAnchor="middle" fill="#9CA3AF" fontSize="10" fontWeight="700" fontFamily="system-ui">Company Files</text>
                </svg>
              )}
              
              {slug === "enterprise" && (
                <svg width="400" height="240" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Central server */}
                  <rect x="155" y="30" width="90" height="120" rx="10" fill="white" stroke="#D1D5DB" strokeWidth="1.5"/>
                  <rect x="165" y="45" width="70" height="12" rx="3" fill="#0F766E" opacity="0.1"/>
                  <circle cx="225" cy="51" r="3.5" fill="#22C55E"/>
                  <rect x="165" y="65" width="70" height="12" rx="3" fill="#0F766E" opacity="0.1"/>
                  <circle cx="225" cy="71" r="3.5" fill="#22C55E"/>
                  <rect x="165" y="85" width="70" height="12" rx="3" fill="#0F766E" opacity="0.1"/>
                  <circle cx="225" cy="91" r="3.5" fill="#F59E0B"/>
                  <rect x="165" y="105" width="70" height="12" rx="3" fill="#0F766E" opacity="0.1"/>
                  <circle cx="225" cy="111" r="3.5" fill="#22C55E"/>
                  <rect x="165" y="125" width="70" height="12" rx="3" fill="#0F766E" opacity="0.06"/>
                  <circle cx="225" cy="131" r="3.5" fill="#D1D5DB"/>
                  <text x="200" y="160" textAnchor="middle" fill="#9CA3AF" fontSize="11" fontWeight="700" fontFamily="system-ui">Database Server</text>
                  
                  {/* Connection lines from server to workstations */}
                  <line x1="155" y1="90" x2="60" y2="195" stroke="#0F766E" strokeWidth="1" strokeDasharray="4 3" opacity="0.35"/>
                  <line x1="200" y1="150" x2="200" y2="195" stroke="#0F766E" strokeWidth="1" strokeDasharray="4 3" opacity="0.35"/>
                  <line x1="245" y1="90" x2="340" y2="195" stroke="#0F766E" strokeWidth="1" strokeDasharray="4 3" opacity="0.35"/>
                  
                  {/* Data flow dots */}
                  <circle cx="108" cy="142" r="2.5" fill="#0F766E" opacity="0.4"/>
                  <circle cx="200" cy="175" r="2.5" fill="#0F766E" opacity="0.4"/>
                  <circle cx="292" cy="142" r="2.5" fill="#0F766E" opacity="0.4"/>
                  
                  {/* Workstation 1 */}
                  <rect x="20" y="195" width="80" height="50" rx="6" fill="white" stroke="#D1D5DB" strokeWidth="1"/>
                  <rect x="28" y="203" width="64" height="30" rx="3" fill="#F8FAFC"/>
                  <rect x="34" y="209" width="25" height="4" rx="1" fill="#0F766E" opacity="0.5"/>
                  <rect x="34" y="217" width="40" height="3" rx="1" fill="#E5E7EB"/>
                  <rect x="34" y="224" width="32" height="3" rx="1" fill="#E5E7EB"/>
                  <rect x="40" y="245" width="40" height="4" rx="1.5" fill="#D1D5DB"/>
                  <text x="60" y="266" textAnchor="middle" fill="#9CA3AF" fontSize="11" fontWeight="700" fontFamily="system-ui">Warehouse</text>
                  
                  {/* Workstation 2 */}
                  <rect x="160" y="195" width="80" height="50" rx="6" fill="white" stroke="#D1D5DB" strokeWidth="1"/>
                  <rect x="168" y="203" width="64" height="30" rx="3" fill="#F8FAFC"/>
                  <rect x="174" y="209" width="25" height="4" rx="1" fill="#0F766E" opacity="0.5"/>
                  <rect x="174" y="217" width="45" height="3" rx="1" fill="#E5E7EB"/>
                  <rect x="174" y="224" width="35" height="3" rx="1" fill="#E5E7EB"/>
                  <rect x="180" y="245" width="40" height="4" rx="1.5" fill="#D1D5DB"/>
                  <text x="200" y="266" textAnchor="middle" fill="#9CA3AF" fontSize="11" fontWeight="700" fontFamily="system-ui">Finance</text>
                  
                  {/* Workstation 3 */}
                  <rect x="300" y="195" width="80" height="50" rx="6" fill="white" stroke="#D1D5DB" strokeWidth="1"/>
                  <rect x="308" y="203" width="64" height="30" rx="3" fill="#F8FAFC"/>
                  <rect x="314" y="209" width="25" height="4" rx="1" fill="#0F766E" opacity="0.5"/>
                  <rect x="314" y="217" width="42" height="3" rx="1" fill="#E5E7EB"/>
                  <rect x="314" y="224" width="30" height="3" rx="1" fill="#E5E7EB"/>
                  <rect x="320" y="245" width="40" height="4" rx="1.5" fill="#D1D5DB"/>
                  <text x="340" y="266" textAnchor="middle" fill="#9CA3AF" fontSize="11" fontWeight="700" fontFamily="system-ui">Operations</text>
                  
                  {/* Shield/security badge */}
                  <path d="M370 35 L385 42 L385 58 Q385 70 370 78 Q355 70 355 58 L355 42 Z" fill="#0F766E" stroke="#0F766E" strokeWidth="1" opacity="0.3"/>
                  <path d="M365 53 L370 58 L378 48" stroke="#0F766E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                  <text x="370" y="92" textAnchor="middle" fill="#9CA3AF" fontSize="10" fontWeight="700" fontFamily="system-ui">40 Users</text>
                  
                  {/* Users count badge */}
                  <rect x="15" y="35" width="60" height="28" rx="8" fill="#0F766E" stroke="#0F766E" strokeWidth="0.8" opacity="0.2"/>
                  <circle cx="32" cy="46" r="4" fill="#0F766E" opacity="0.2"/>
                  <circle cx="42" cy="46" r="4" fill="#0F766E" opacity="0.3"/>
                  <circle cx="52" cy="46" r="4" fill="#0F766E" opacity="0.4"/>
                  <text x="45" y="76" textAnchor="middle" fill="#9CA3AF" fontSize="10" fontWeight="700" fontFamily="system-ui">Multi-User</text>
                  
                  {/* Bottom status bar */}
                  <rect x="100" y="280" width="200" height="12" rx="6" fill="#F3F4F6"/>
                  <rect x="100" y="280" width="140" height="12" rx="6" fill="#0F766E" opacity="0.15"/>
                  <text x="200" y="289" textAnchor="middle" fill="#9CA3AF" fontSize="10" fontWeight="700" fontFamily="system-ui">Server Capacity: 70%</text>
                </svg>
              )}
              
              {slug === "payroll" && (
                <svg width="400" height="240" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Central Payslip/Check document */}
                  <rect x="80" y="30" width="240" height="150" rx="12" fill="white" stroke="#D1D5DB" strokeWidth="1.5"/>
                  <rect x="80" y="30" width="240" height="34" rx="12" fill="#FFF7ED"/>
                  <rect x="80" y="64" width="240" height="1" fill="#E5E7EB"/>
                  <text x="96" y="52" fill="#EA580C" fontSize="9" fontWeight="700" fontFamily="system-ui">EARNINGS STATEMENT</text>
                  
                  {/* Ledger content */}
                  <rect x="96" y="80" width="80" height="8" rx="2" fill="#F3F4F6"/>
                  <rect x="96" y="96" width="60" height="6" rx="2" fill="#F3F4F6"/>
                  <rect x="96" y="108" width="70" height="6" rx="2" fill="#F3F4F6"/>
                  <rect x="96" y="120" width="50" height="6" rx="2" fill="#F3F4F6"/>
                  
                  <rect x="220" y="80" width="80" height="8" rx="2" fill="#E5E7EB"/>
                  <rect x="240" y="96" width="60" height="6" rx="2" fill="#E5E7EB"/>
                  <rect x="230" y="108" width="70" height="6" rx="2" fill="#E5E7EB"/>
                  <rect x="250" y="120" width="50" height="6" rx="2" fill="#E5E7EB"/>
                  
                  {/* Net Pay Box */}
                  <rect x="200" y="136" width="105" height="32" rx="6" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1"/>
                  <text x="210" y="155" fill="#22C55E" fontSize="12" fontWeight="700" fontFamily="system-ui">$4,850.00</text>
                  
                  {/* Deposit route lines */}
                  <path d="M200 180 L200 230" stroke="#EA580C" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" fill="none"/>
                  <circle cx="200" cy="205" r="3.5" fill="#EA580C" opacity="0.6"/>
                  
                  {/* Bank Vault (Direct Deposit recipient) */}
                  <rect x="150" y="230" width="100" height="40" rx="8" fill="white" stroke="#D1D5DB" strokeWidth="1.5"/>
                  <rect x="156" y="235" width="88" height="6" rx="2" fill="#E5E7EB"/>
                  <line x1="165" y1="247" x2="165" y2="265" stroke="#D1D5DB" strokeWidth="2"/>
                  <line x1="182" y1="247" x2="182" y2="265" stroke="#D1D5DB" strokeWidth="2"/>
                  <line x1="200" y1="247" x2="200" y2="265" stroke="#D1D5DB" strokeWidth="2"/>
                  <line x1="218" y1="247" x2="218" y2="265" stroke="#D1D5DB" strokeWidth="2"/>
                  <line x1="235" y1="247" x2="235" y2="265" stroke="#D1D5DB" strokeWidth="2"/>
                  <rect x="150" y="265" width="100" height="5" rx="1" fill="#9CA3AF"/>
                  <text x="200" y="288" textAnchor="middle" fill="#9CA3AF" fontSize="11" fontWeight="700" fontFamily="system-ui">Direct Deposit</text>
                </svg>
              )}

              {slug === "time" && (
                <svg width="400" height="240" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Clock circle */}
                  <circle cx="200" cy="110" r="70" fill="white" stroke="#D1D5DB" strokeWidth="2"/>
                  <circle cx="200" cy="110" r="62" fill="#F0F9FF" opacity="0.5"/>
                  <circle cx="200" cy="110" r="5" fill="#0284C7"/>
                  
                  {/* Clock Hands */}
                  <line x1="200" y1="110" x2="200" y2="65" stroke="#0284C7" strokeWidth="3.5" strokeLinecap="round"/>
                  <line x1="200" y1="110" x2="242" y2="125" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round"/>
                  
                  {/* Map Pin / Geofence outer ring */}
                  <circle cx="200" cy="110" r="95" stroke="#0284C7" strokeWidth="1" strokeDasharray="5 4" opacity="0.3"/>
                  
                  {/* Geofence marker tags */}
                  <rect x="290" y="65" width="70" height="24" rx="12" fill="white" stroke="#E5E7EB" strokeWidth="1"/>
                  <circle cx="302" cy="77" r="4.5" fill="#22C55E"/>
                  <text x="314" y="80" fill="#6B7280" fontSize="8" fontWeight="600" fontFamily="system-ui">In Geofence</text>
                  
                  {/* Mobile tracking dashboard screen */}
                  <rect x="70" y="190" width="260" height="70" rx="12" fill="white" stroke="#D1D5DB" strokeWidth="1.5"/>
                  <rect x="85" y="205" width="40" height="40" rx="20" fill="#E0F2FE"/>
                  {/* Time tracking play/pause state */}
                  <polygon points="102,219 102,231 112,225" fill="#0284C7"/>
                  <text x="140" y="222" fill="#0A0F1D" fontSize="11" fontWeight="700" fontFamily="system-ui">08:42:15</text>
                  <text x="140" y="235" fill="#9CA3AF" fontSize="8" fontFamily="system-ui">Project: Commercial Build A</text>
                  
                  {/* Location tracking tag */}
                  <rect x="245" y="210" width="70" height="28" rx="6" fill="#F0FDF4" stroke="#BBF7D0" strokeWidth="1"/>
                  <text x="280" y="227" textAnchor="middle" fill="#22C55E" fontSize="9" fontWeight="700" fontFamily="system-ui">Active GPS</text>
                  <text x="200" y="285" textAnchor="middle" fill="#9CA3AF" fontSize="11" fontWeight="700" fontFamily="system-ui">Shift Schedule &amp; Timecards</text>
                </svg>
              )}

              {slug === "payments" && (
                <svg width="400" height="240" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Digital invoice card */}
                  <rect x="50" y="30" width="160" height="210" rx="12" fill="white" stroke="#D1D5DB" strokeWidth="1.5"/>
                  <rect x="50" y="30" width="160" height="34" rx="12" fill="#F0FDF4"/>
                  <rect x="50" y="64" width="160" height="1" fill="#E5E7EB"/>
                  <text x="64" y="51" fill="#059669" fontSize="9" fontWeight="700" fontFamily="system-ui">INVOICE PAID</text>
                  <circle cx="186" cy="47" r="6" fill="#22C55E"/>
                  <path d="M183 47 L185 49 L189 45" stroke="white" strokeWidth="1" strokeLinecap="round"/>
                  
                  <rect x="66" y="80" width="50" height="6" rx="2" fill="#E5E7EB"/>
                  <rect x="66" y="94" width="128" height="4" rx="1" fill="#F3F4F6"/>
                  <rect x="66" y="104" width="110" height="4" rx="1" fill="#F3F4F6"/>
                  <rect x="66" y="114" width="120" height="4" rx="1" fill="#F3F4F6"/>
                  
                  <rect x="66" y="132" width="70" height="6" rx="2" fill="#E5E7EB"/>
                  <rect x="66" y="146" width="128" height="4" rx="1" fill="#F3F4F6"/>
                  <rect x="66" y="156" width="95" height="4" rx="1" fill="#F3F4F6"/>
                  
                  {/* Balance details */}
                  <rect x="66" y="180" width="50" height="8" rx="2" fill="#059669" opacity="0.3"/>
                  <rect x="144" y="180" width="50" height="8" rx="2" fill="#059669" opacity="0.8"/>
                  
                  {/* Swiped card terminal */}
                  <rect x="230" y="70" width="120" height="170" rx="16" fill="white" stroke="#D1D5DB" strokeWidth="1.5"/>
                  {/* Screen */}
                  <rect x="242" y="82" width="96" height="60" rx="6" fill="#111827"/>
                  <text x="290" y="110" textAnchor="middle" fill="#22C55E" fontSize="9" fontWeight="700" fontFamily="system-ui">INSERT / SWIPE</text>
                  <text x="290" y="125" textAnchor="middle" fill="#9CA3AF" fontSize="8" fontFamily="system-ui">$1,240.50</text>
                  
                  {/* Keypad */}
                  <rect x="250" y="155" width="22" height="12" rx="3" fill="#E5E7EB"/>
                  <rect x="279" y="155" width="22" height="12" rx="3" fill="#E5E7EB"/>
                  <rect x="308" y="155" width="22" height="12" rx="3" fill="#E5E7EB"/>
                  
                  <rect x="250" y="175" width="22" height="12" rx="3" fill="#E5E7EB"/>
                  <rect x="279" y="175" width="22" height="12" rx="3" fill="#E5E7EB"/>
                  <rect x="308" y="175" width="22" height="12" rx="3" fill="#E5E7EB"/>
                  
                  <rect x="250" y="195" width="22" height="12" rx="3" fill="#E5E7EB"/>
                  <rect x="279" y="195" width="22" height="12" rx="3" fill="#EF4444" opacity="0.6"/>
                  <rect x="308" y="195" width="22" height="12" rx="3" fill="#22C55E" opacity="0.6"/>
                  
                  {/* Swiped card visual */}
                  <rect x="220" y="44" width="105" height="42" rx="4" fill="#0A0F1D" opacity="0.9" transform="rotate(-15 220 44)"/>
                  <rect x="225" y="60" width="80" height="5" rx="1.5" fill="#E5E7EB" opacity="0.3" transform="rotate(-15 220 44)"/>
                  <circle cx="310" cy="62" r="5" fill="#EF4444" transform="rotate(-15 220 44)"/>
                  <circle cx="316" cy="62" r="5" fill="#F59E0B" opacity="0.8" transform="rotate(-15 220 44)"/>
                  
                  {/* Connect arrow */}
                  <path d="M218 135 L228 135" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M224 130 L229 135 L224 140" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <text x="200" y="285" textAnchor="middle" fill="#9CA3AF" fontSize="11" fontWeight="700" fontFamily="system-ui">Merchant Processing &amp; ACH</text>
                </svg>
              )}

              {/* Fallback for other products */}
              {!["online", "desktop", "enterprise", "payroll", "time", "payments"].includes(slug) && (
                <svg width="400" height="280" viewBox="0 0 400 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="50" y="30" width="300" height="200" rx="16" fill="white" stroke="#E4E7EC" strokeWidth="1.5"/>
                  <rect x="50" y="30" width="300" height="40" rx="16" fill="#F9FAFB"/>
                  <rect x="50" y="62" width="300" height="1" fill="#E4E7EC"/>
                  <circle cx="74" cy="50" r="5" fill="#EF4444" opacity="0.6"/>
                  <circle cx="92" cy="50" r="5" fill="#F59E0B" opacity="0.6"/>
                  <circle cx="110" cy="50" r="5" fill="#22C55E" opacity="0.6"/>
                  <rect x="75" y="82" width="120" height="10" rx="3" fill={product.accent} opacity="0.15"/>
                  <rect x="75" y="102" width="250" height="6" rx="2" fill="#F3F4F6"/>
                  <rect x="75" y="116" width="200" height="6" rx="2" fill="#F3F4F6"/>
                  <rect x="75" y="130" width="230" height="6" rx="2" fill="#F3F4F6"/>
                  <rect x="75" y="155" width="80" height="28" rx="8" fill={product.accent} opacity="0.1"/>
                  <rect x="87" y="165" width="55" height="8" rx="2" fill={product.accent} opacity="0.6"/>
                  <rect x="170" y="155" width="80" height="28" rx="8" fill="#F3F4F6"/>
                  <rect x="182" y="165" width="55" height="8" rx="2" fill="#D1D5DB"/>
                  <text x="200" y="250" textAnchor="middle" fill="#9CA3AF" fontSize="10" fontWeight="600" fontFamily="system-ui">{product.name}</text>
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-10">
        
        {/* Overview & Audience floating cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          <div className="bg-white rounded-2xl border border-zinc-200/70 p-7 shadow-lg shadow-zinc-900/[0.04] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${product.accent}10` }}>
                <Zap className="w-4.5 h-4.5" style={{ color: product.accent }} />
              </div>
              <h2 className="text-base font-semibold text-[#0A0F1D]">Product Overview</h2>
            </div>
            <p className="text-[15px] text-zinc-600 leading-relaxed">
              {product.overview}
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-zinc-200/70 p-7 shadow-lg shadow-zinc-900/[0.04] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${product.accent}10` }}>
                <Users className="w-4.5 h-4.5" style={{ color: product.accent }} />
              </div>
              <h2 className="text-base font-semibold text-[#0A0F1D]">Who It&apos;s For</h2>
            </div>
            <p className="text-[15px] text-zinc-600 leading-relaxed">
              {product.whoItIsFor}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-14">
          <h2 className="text-xl font-semibold text-[#0A0F1D] mb-6">Key Features & Modules</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {product.features.map((feat, idx) => {
              const [title, desc] = feat.split(":");
              return (
                <div key={title} className="group bg-white rounded-xl border border-zinc-200/70 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-400">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: `${product.accent}10` }}>
                      <CheckCircle className="w-4 h-4" style={{ color: product.accent }} />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-[#0A0F1D] mb-1.5">{title}</h3>
                      <p className="text-sm text-zinc-500 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-14">
          <h2 className="text-xl font-semibold text-[#0A0F1D] mb-6">Available Tiers & Pricing</h2>
          <div className={`grid grid-cols-1 gap-5 ${product.pricingPlans.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
            {product.pricingPlans.map((plan) => (
              <div 
                key={plan.name} 
                className={`relative rounded-2xl p-7 transition-all duration-500 hover:-translate-y-0.5 ${
                  plan.highlighted 
                    ? 'bg-gradient-to-br from-[#0A0F1D] to-[#1E293B] text-white shadow-xl shadow-zinc-900/20' 
                    : 'bg-white border border-zinc-200/70 hover:shadow-lg'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white text-[#0A0F1D] shadow-sm border border-zinc-100 flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500" /> Popular
                    </span>
                  </div>
                )}
                <div className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: plan.highlighted ? `${product.accent}` : '#9CA3AF' }}>
                  {plan.name}
                </div>
                <div className={`text-2xl font-bold mb-3 ${plan.highlighted ? 'text-white' : ''}`} style={{ color: plan.highlighted ? '#fff' : product.accent }}>
                  {plan.price}
                </div>
                <p className={`text-sm leading-relaxed ${plan.highlighted ? 'text-zinc-300' : 'text-zinc-500'}`}>
                  {plan.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Advantages & Limitations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          <div className="bg-emerald-50/50 rounded-2xl border border-emerald-100/80 p-7">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                <Shield className="w-4 h-4 text-emerald-600" />
              </div>
              <h2 className="text-base font-semibold text-emerald-800">Advantages</h2>
            </div>
            <ul className="space-y-3.5">
              {product.advantages.map((adv, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] text-emerald-900/80 leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                  <span>{adv}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-amber-50/50 rounded-2xl border border-amber-100/80 p-7">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
              </div>
              <h2 className="text-base font-semibold text-amber-800">Limitations</h2>
            </div>
            <ul className="space-y-3.5">
              {product.limitations.map((lim) => (
                <li key={lim} className="flex items-start gap-3 text-[15px] text-amber-900/80 leading-relaxed">
                  <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                  <span>{lim}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* System Requirements */}
        <div className="bg-white rounded-2xl border border-zinc-200/70 p-7 mb-14 shadow-sm">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center">
              <Laptop className="w-4 h-4 text-zinc-600" />
            </div>
            <h2 className="text-base font-semibold text-[#0A0F1D]">System Requirements</h2>
          </div>
          <div className={`grid grid-cols-1 gap-4 ${product.systemReqs.length >= 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-3'}`}>
            {product.systemReqs.map((req) => {
              const [title, desc] = req.split(":");
              return (
                <div key={title} className="bg-zinc-50/80 rounded-xl p-4 border border-zinc-100">
                  <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest mb-1.5">{title}</div>
                  <div className="text-[15px] text-zinc-700 font-medium leading-relaxed">{desc}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Getting Started Roadmap */}
        <div className="mb-20">
          <h2 className="text-xl font-semibold text-[#0A0F1D] mb-6">Getting Started Roadmap</h2>
          <div className="space-y-4">
            {product.gettingStartedSteps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-5 group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold text-white shrink-0 shadow-sm" style={{ backgroundColor: product.accent }}>
                    {idx + 1}
                  </div>
                  {idx < product.gettingStartedSteps.length - 1 && (
                    <div className="w-px h-8 bg-zinc-200 mt-1" />
                  )}
                </div>
                <div className="pt-2.5">
                  <p className="text-[15px] text-zinc-700 font-medium leading-relaxed">
                    {step}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-2xl p-8 sm:p-10 mb-20 text-center" style={{ background: `linear-gradient(135deg, ${product.accent}08, ${product.accent}15)`, border: `1px solid ${product.accent}20` }}>
          <h3 className="text-xl font-semibold text-[#0A0F1D] mb-2">Ready to get started with {product.name}?</h3>
          <p className="text-[15px] text-zinc-500 mb-6 max-w-lg mx-auto">Explore our complete product directory or jump straight to the download and activation guides.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/quickbooks/products"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl text-white transition-all duration-300 hover:opacity-90 shadow-sm"
              style={{ backgroundColor: product.accent }}
            >
              Explore All Products <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/quickbooks/compare"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-white border border-zinc-200 text-[#0A0F1D] hover:bg-zinc-50 transition-all duration-300"
            >
              Compare Editions <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
