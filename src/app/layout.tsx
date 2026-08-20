import type { Metadata } from "next";
import "./globals.css";
import AppLayout from "@/components/AppLayout";

export const metadata: Metadata = {
  title: "OfficeAtlas | Beyond the Basics",
  description: "An editorial, high-end technology research and blogging platform for Microsoft 365, Office apps, product comparisons, and integration guides.",
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
