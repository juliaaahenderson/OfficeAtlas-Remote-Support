import type { Metadata } from "next";
import RemoteSupportHomepage from "@/components/remote-support/RemoteSupportHomepage";

export const metadata: Metadata = {
  title: "Microsoft Office Remote Support & Help | OfficeAtlas",
  description:
    "Get help with Microsoft Office and Microsoft 365 installation, activation, setup, updates, sign-in issues, and common troubleshooting problems.",
};

export default function Home() {
  return <RemoteSupportHomepage />;
}
