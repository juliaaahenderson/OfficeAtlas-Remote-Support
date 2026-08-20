"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Explore",
      links: [
        { label: "Products", href: "#products" },
        { label: "Comparisons", href: "#compare" },
        { label: "Guides", href: "#guides" },
        { label: "Blog", href: "#blog" },
        { label: "Research", href: "#research" }
      ]
    },
    {
      title: "Products",
      links: [
        { label: "Word", href: "#products" },
        { label: "Excel", href: "#products" },
        { label: "PowerPoint", href: "#products" },
        { label: "Teams", href: "#products" },
        { label: "Outlook", href: "#products" },
        { label: "OneDrive", href: "#products" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Installation Guide", href: "#guides" },
        { label: "Activation Guide", href: "#guides" },
        { label: "Troubleshooting", href: "#guides" },
        { label: "FAQs", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Privacy Policy", href: "#" }
      ]
    }
  ];

  return (
    <footer id="footer" className="bg-[#0A0F1D] text-zinc-400 py-16 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3 text-sm">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a 
                      href={link.href} 
                      className="hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal Disclaimer & Brand Area */}
        <div className="border-t border-zinc-900 pt-8 mt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="max-w-md">
            <div className="flex items-center gap-2.5 mb-4">
              <img 
                src="/office-atlas-logo-dark.png" 
                alt="OfficeAtlas Logo" 
                className="h-15 w-auto object-contain" 
              />
            </div>
            <p className="text-[11px] text-zinc-500 leading-relaxed">
              Disclaimer: This website is an independent educational and research resource and is not officially affiliated with, authorized, sponsored, or otherwise approved by Microsoft Corporation.
            </p>
          </div>

          <div className="text-xs text-zinc-500 font-medium">
            &copy; {currentYear} OfficeAtlas. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
