import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAllContent } from "@/core/content-engine/loader";
import { PreFooterCTA } from "@/components/PreFooterCTA";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { FOUNDER } from "@/config/brand";

export const metadata: Metadata = {
  title: "Engineering Blog & Technical Insights | Next Revolution Tech",
  description: "Explore practical guides, architecture deep dives, and expert insights on ERP systems, AI automation, SaaS development, and modern software engineering.",
  alternates: {
    canonical: "https://www.nextrevolutiontech.tech/blog",
  },
  openGraph: {
    title: "Engineering Blog & Technical Insights | Next Revolution Tech",
    description: "Explore practical guides, architecture deep dives, and expert insights on ERP systems, AI automation, SaaS development, and modern software engineering.",
    url: "https://www.nextrevolutiontech.tech/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const allContent = getAllContent();
  // Filter for blog articles (excluding case-studies)
  const articles = allContent.filter(item => !item.path.includes("case-studies"));

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Engineering Blog & Technical Insights | Next Revolution Tech",
    "description": "Explore practical guides, architecture deep dives, and expert insights on ERP systems, AI automation, SaaS development, and modern software engineering.",
    "url": "https://www.nextrevolutiontech.tech/blog",
    "publisher": {
      "@id": "https://www.nextrevolutiontech.tech/#organization"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.nextrevolutiontech.tech"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.nextrevolutiontech.tech/blog"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Banner */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-12 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-600 mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4" /> Knowledge Hub & Engineering Blog
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tighter leading-tight mb-6">
            Insights on ERP, AI & Scalable Software Architecture
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed mb-8">
            Deep dives, practical implementation guides, and technical breakdowns from our engineering architects to help you scale operations with zero friction.
          </p>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-12 bg-slate-50 flex-grow">
        <div className="mx-auto max-w-7xl">
          {articles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-slate-500 font-medium">No blog posts found at the moment. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => {
                const publishDate = article.metadata.publishedAt || "Recently Published";
                return (
                  <ScrollReveal key={article.slug}>
                    <article className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between h-full group">
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-4">
                          {article.metadata.cluster && (
                            <span className="bg-orange-50 text-orange-600 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-orange-200">
                              {article.metadata.cluster}
                            </span>
                          )}
                          <div className="flex items-center gap-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-auto">
                            {article.metadata.estimatedReadTime && (
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" /> {article.metadata.estimatedReadTime} min
                              </span>
                            )}
                          </div>
                        </div>

                        <h2 className="text-xl font-black tracking-tight text-slate-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                          <Link href={`/blog/${article.slug}`}>
                            {article.metadata.title}
                          </Link>
                        </h2>

                        <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6 line-clamp-3">
                          {article.metadata.description}
                        </p>
                      </div>

                      <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full overflow-hidden border border-slate-200 relative shrink-0">
                            <Image
                              src={FOUNDER.imageUrl}
                              alt={article.metadata.author || FOUNDER.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="text-xs font-bold text-slate-700">
                            {article.metadata.author || FOUNDER.name}
                          </span>
                        </div>

                        <Link
                          href={`/blog/${article.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-black text-orange-600 uppercase tracking-wider hover:gap-2 transition-all"
                        >
                          Read <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <PreFooterCTA
        headline="Looking to implement custom ERP or AI solutions?"
        subtext="Talk with our engineering leads and map out your transformation roadmap today."
      />
    </div>
  );
}
