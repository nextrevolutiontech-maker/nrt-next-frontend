import { Metadata } from "next";
import PlaybookViewer from "@/components/playbooks/PlaybookViewer";
import { SITE_URL } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "AI Operations Playbook 2026 | Next Revolution Tech",
  description:
    "How Modern Operations Teams Reduce Manual Work and Scale Smarter with Agentic AI. A 14-page Executive Playbook by Next Revolution Tech.",
  openGraph: {
    title: "AI Operations Playbook 2026 | Next Revolution Tech",
    description:
      "How Modern Operations Teams Reduce Manual Work and Scale Smarter with Agentic AI.",
    url: `${SITE_URL}/playbooks/ai-operations-2026`,
    siteName: "Next Revolution Tech",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/playbooks/ai-operations-2026`,
  },
};

export default function PlaybookPage() {
  return (
    <>
      <PlaybookViewer />
    </>
  );
}
