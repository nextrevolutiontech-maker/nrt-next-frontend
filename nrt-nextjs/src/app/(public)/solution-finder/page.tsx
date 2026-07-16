import { Metadata } from "next";
import SolutionFinderClient from "@/components/pages/SolutionFinderClient";

export const metadata: Metadata = {
  title: "Business Solution Finder | Next Revolution Tech",
  description:
    "Answer 5 quick questions and get a custom AI & ERP digital transformation roadmap tailored to your industry, size, and operational challenges.",
  alternates: {
    canonical: "/solution-finder",
  },
  openGraph: {
    title: "Find Your Perfect Business Solution | NRT",
    description:
      "Get a personalized ERP & AI automation roadmap in under 2 minutes. Built for manufacturers, retailers, healthcare providers, and more.",
    url: "/solution-finder",
    type: "website",
  },
};

export default function SolutionFinderPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "NRT Business Solution Finder",
            description:
              "An interactive diagnostic tool that generates a custom AI & ERP digital transformation roadmap based on your business inputs.",
            url: "https://www.nextrevolutiontech.com/solution-finder",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          }),
        }}
      />
      <SolutionFinderClient />
    </>
  );
}
