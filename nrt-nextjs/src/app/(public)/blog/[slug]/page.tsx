import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { getContentBySlug, getSlugsByType } from '@/core/content-engine/loader';
import { mdxComponents } from '@/components/mdx';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, ChevronRight } from 'lucide-react';
import { PreFooterCTA } from '@/components/PreFooterCTA';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { FOUNDER } from '@/config/brand';

// Configurable ISR (revalidate every 2 hours for blog posts)
export const revalidate = 7200; 

export async function generateStaticParams() {
  const slugs = getSlugsByType('article');
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const content = getContentBySlug(slug, 'article');
  
  if (!content) {
    return { title: 'Not Found' };
  }

  const { metadata } = content;
  
  return {
    title: `${metadata.title} | NRT Knowledge Hub`,
    description: metadata.description,
    alternates: {
      canonical: `https://www.nextrevolutiontech.tech/blog/${metadata.slug}`,
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: 'article',
      url: `https://www.nextrevolutiontech.tech/blog/${metadata.slug}`,
      publishedTime: metadata.publishedAt,
      authors: [metadata.author || FOUNDER.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getContentBySlug(slug, 'article');

  if (!article) {
    notFound();
  }

  const { metadata, content } = article;
  const publishDate = metadata.publishedAt || new Date().toISOString().split('T')[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": metadata.title,
    "description": metadata.description,
    "author": {
      "@type": "Person",
      "name": metadata.author || FOUNDER.name
    },
    "publisher": {
      "@id": "https://www.nextrevolutiontech.tech/#organization"
    },
    "datePublished": metadata.publishedAt,
    "dateModified": metadata.updatedAt || metadata.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.nextrevolutiontech.tech/blog/${metadata.slug}`
    }
  };

  const breadcrumbJsonLd = {
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": metadata.title,
        "item": `https://www.nextrevolutiontech.tech/blog/${metadata.slug}`
      }
    ]
  };

  let faqJsonLd = null;
  if (metadata.faqs && Array.isArray(metadata.faqs)) {
    faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": metadata.faqs.map((faq: any) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white text-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
        <div className="mx-auto max-w-4xl px-4 relative z-10">
          
          {/* Breadcrumb UI */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-900/50 hover:text-slate-900 mb-8 font-black uppercase text-xs tracking-widest transition-all">
            <Link href="/blog" className="flex items-center gap-1"><ArrowLeft className="w-4 h-4" /> Knowledge Hub</Link>
            {metadata.cluster && (
              <>
                <ChevronRight className="w-3 h-3 mx-1" />
                <span>{metadata.cluster}</span>
              </>
            )}
          </nav>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {metadata.contentStage && (
              <span className="bg-primary/10 text-primary border border-primary/20 rounded-full px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.2em]">
                {metadata.contentStage} Stage
              </span>
            )}
            <div className="flex items-center gap-4 text-slate-900/50 text-[9px] font-black uppercase tracking-widest">
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {publishDate}</span>
              {metadata.estimatedReadTime && (
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {metadata.estimatedReadTime} min read</span>
              )}
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight mb-8">
            {metadata.title}
          </h1>
          <div className="flex items-center gap-3 pt-6 border-t border-slate-200">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-300 shrink-0">
              <Image src={FOUNDER.imageUrl} alt={metadata.author || FOUNDER.name} width={40} height={40} className="w-full h-full object-cover object-center" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">{metadata.author || FOUNDER.name}</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{metadata.author ? "Domain Expert" : FOUNDER.title}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-8 px-4 relative z-20 flex-grow">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <article className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80">
              
              {metadata.aiSummary && (
                // @ts-ignore
                <mdxComponents.AIQuickAnswer 
                  summary={metadata.aiSummary} 
                  takeaways={metadata.keyTakeaways} 
                  readTime={metadata.estimatedReadTime} 
                  persona={typeof metadata.persona === 'string' ? [metadata.persona] : metadata.persona} 
                />
              )}
              
              <MDXRemote source={content} components={mdxComponents} />

              {/* @ts-ignore */}
              <mdxComponents.AskNRTAI topic={metadata.title} />
              {/* @ts-ignore */}
              <mdxComponents.ExploreTopic currentId={metadata.id} />
              
            </article>
          </ScrollReveal>
        </div>
      </section>

      <PreFooterCTA 
        headline="Ready to build a reliable custom system?"
        subtext="Book a free consultation and let's map out your digital transformation."
      />
    </div>
  );
}
