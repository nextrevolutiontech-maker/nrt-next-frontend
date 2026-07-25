import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { getContentBySlug, getSlugsByType } from '@/core/content-engine/loader';
import { mdxComponents } from '@/components/mdx';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ChevronRight, BarChart } from 'lucide-react';
import { PreFooterCTA } from '@/components/PreFooterCTA';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { FOUNDER } from '@/config/brand';

// Configurable ISR (revalidate every 24 hours for case studies)
export const revalidate = 86400; 

export async function generateStaticParams() {
  const slugs = getSlugsByType('case-study');
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const content = getContentBySlug(slug, 'case-study');
  if (!content) return { title: 'Not Found' };

  const { metadata } = content;
  
  return {
    title: `${metadata.title} | NRT Case Studies`,
    description: metadata.description,
    alternates: {
      canonical: `https://www.nextrevolutiontech.tech/case-studies/${metadata.slug}`,
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: 'article',
      url: `https://www.nextrevolutiontech.tech/case-studies/${metadata.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getContentBySlug(slug, 'case-study');
  if (!article) notFound();

  const { metadata, content } = article;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Article", "CreativeWork"],
    "headline": metadata.title,
    "description": metadata.description,
    "author": {
      "@id": "https://www.nextrevolutiontech.tech/#organization"
    },
    "publisher": {
      "@id": "https://www.nextrevolutiontech.tech/#organization"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.nextrevolutiontech.tech/case-studies/${metadata.slug}`
    }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.nextrevolutiontech.tech" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.nextrevolutiontech.tech/case-studies" },
      { "@type": "ListItem", "position": 3, "name": metadata.title, "item": `https://www.nextrevolutiontech.tech/case-studies/${metadata.slug}` }
    ]
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      
      <section className="pt-32 pb-16 bg-slate-50 text-slate-900 border-b border-slate-200 relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 relative z-10">
          
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-900/50 hover:text-slate-900 mb-8 font-black uppercase text-xs tracking-widest transition-all">
            <Link href="/case-studies" className="flex items-center gap-1"><ArrowLeft className="w-4 h-4" /> Case Studies</Link>
            <ChevronRight className="w-3 h-3 mx-1" />
            <span>{metadata.client || "Client Story"}</span>
          </nav>
          
          <div className="flex flex-wrap items-center gap-4 mb-6 text-orange-600 font-bold uppercase tracking-wider text-xs">
             <span className="flex items-center gap-2"><BarChart className="w-4 h-4" /> Business Transformation</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight mb-8 max-w-4xl">
            {metadata.title}
          </h1>
          
          <p className="text-xl sm:text-2xl font-medium text-slate-900/60 leading-relaxed max-w-3xl mb-12">
            {metadata.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-slate-200 pt-8">
             {metadata.industry && (
               <div>
                 <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Industry</div>
                 <div className="font-bold">{metadata.industry}</div>
               </div>
             )}
             {metadata.clientSize && (
               <div>
                 <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Company Size</div>
                 <div className="font-bold">{metadata.clientSize}</div>
               </div>
             )}
             {metadata.duration && (
               <div>
                 <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Duration</div>
                 <div className="font-bold">{metadata.duration}</div>
               </div>
             )}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 relative z-20 flex-grow">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <article className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-orange-600 hover:prose-a:text-orange-700">
              <MDXRemote source={content} components={mdxComponents} />
            </article>
          </ScrollReveal>
        </div>
      </section>

      <PreFooterCTA 
        headline="Ready to achieve similar results?"
        subtext="Let's build the system your business needs to scale efficiently."
      />
    </div>
  );
}
