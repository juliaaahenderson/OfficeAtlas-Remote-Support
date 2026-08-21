import type { Metadata } from "next";
import "./globals.css";
import AppLayout from "@/components/AppLayout";
export const metadata: Metadata = {
  title: "OfficeAtlas | Beyond the Basics",
  description: "An editorial, high-end technology research and blogging platform for Microsoft 365, Office apps, product comparisons, and integration guides.",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.png", sizes: "144x144", type: "image/png" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#FCFCFC] text-[#0A0F1D]">
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}
