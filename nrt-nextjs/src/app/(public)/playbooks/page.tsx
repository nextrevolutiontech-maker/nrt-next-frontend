import { Metadata } from "next";
import PlaybooksCatalogClient from "@/components/playbooks/PlaybooksCatalogClient";
import { SITE_URL } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Executive Playbooks & Strategy Blueprints | Next Revolution Tech",
  description:
    "High-authority B2B intellectual assets, frameworks, and decision matrices designed for C-Level executives, CTOs, and operations leaders.",
  openGraph: {
    title: "Executive Playbooks & Strategy Blueprints | Next Revolution Tech",
    description:
      "High-authority B2B intellectual assets, frameworks, and decision matrices designed for decision makers.",
    url: `${SITE_URL}/playbooks`,
    siteName: "Next Revolution Tech",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/playbooks`,
  },
};

export default function PlaybooksCatalogPage() {
  return (
    <>
      <PlaybooksCatalogClient />
    </>
  );
}
