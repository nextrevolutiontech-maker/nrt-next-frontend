import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ChevronRight } from "lucide-react";
import { SEO } from "../components/SEO";
import { PreFooterCTA } from "../components/PreFooterCTA";
import { FOUNDER } from "../../config/brand";
import { MDXProvider } from '@mdx-js/react';
import { getContentBySlug } from '../../core/content-engine/loader';
import { mdxComponents } from '../../components/mdx';
import { ScrollReveal } from '../components/ui/ScrollReveal';

export function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadArticle = async () => {
      setLoading(true);
      if (slug) {
        // Load from the articles folder via our content engine
        const fetchedContent = await getContentBySlug(slug, 'article');
        setContent(fetchedContent);
      }
      setLoading(false);
    };
    loadArticle();
  }, [slug]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-primary font-bold">Loading Knowledge Asset...</div>;
  }

  if (!content) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-slate-900 p-6">
        <h1 className="text-4xl font-black mb-4">Article Not Found</h1>
        <p className="text-lg mb-8 text-slate-900/60">The article you are looking for does not exist or has been relocated.</p>
        <Link to="/resources" className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-all">
          <ArrowLeft className="w-5 h-5" /> Back to Knowledge Hub
        </Link>
      </div>
    );
  }

  const { metadata, MDXComponent } = content;
  const publishDate = metadata.publishedAt || new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden flex flex-col">
      <SEO
        title={`${metadata.title} | NRT Knowledge Hub`}
        description={metadata.description}
        schemaType="TechArticle"
        schemaData={{
          title: metadata.title,
          description: metadata.description,
          datePublished: publishDate,
          dateModified: metadata.updatedAt || publishDate,
          author: metadata.author || FOUNDER.name,
          image: metadata.heroImage ? `https://www.nextrevolutiontech.tech${metadata.heroImage}` : undefined
        }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white text-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('/noise.svg')]" />
        <div className="mx-auto max-w-4xl px-4 relative z-10">
          <nav className="flex items-center gap-2 text-slate-900/50 hover:text-slate-900 mb-8 font-black uppercase text-xs tracking-widest transition-all">
            <Link to="/resources"><ArrowLeft className="w-4 h-4 inline" /> Knowledge Hub</Link>
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
              <img src={FOUNDER.imageUrl} alt={metadata.author || FOUNDER.name} className="w-full h-full object-cover object-center" />
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
            {/* MDX Content wrapper */}
            <article className="prose prose-lg prose-slate max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80">
              <MDXProvider components={mdxComponents}>
                {metadata.aiSummary && (
                  <mdxComponents.AIQuickAnswer 
                    summary={metadata.aiSummary} 
                    takeaways={metadata.keyTakeaways} 
                    readTime={metadata.estimatedReadTime} 
                    persona={metadata.persona} 
                  />
                )}
                
                <MDXComponent />

                <mdxComponents.AskNRTAI topic={metadata.title} />
                
                <mdxComponents.ExploreTopic currentId={metadata.id} />
              </MDXProvider>
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
