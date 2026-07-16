import { Metadata } from "next";
import { notFound } from "next/navigation";
import AuthorProfileClient from "@/components/pages/AuthorProfileClient";
import { AUTHORS } from "@/data/authors";

export async function generateStaticParams() {
  return Object.keys(AUTHORS).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const author = AUTHORS[resolvedParams.slug];
  
  if (!author) {
    return { title: "Author Not Found" };
  }

  return {
    title: `${author.name} - ${author.role}`,
    description: author.bio,
    openGraph: {
      title: `${author.name} - ${author.role}`,
      description: author.bio,
      url: `/author/${resolvedParams.slug}`,
      images: [
        {
          url: author.image,
          width: 800,
          height: 800,
          alt: author.name,
        }
      ],
      type: "profile",
    },
    alternates: {
      canonical: `/author/${resolvedParams.slug}`,
    }
  };
}

export default async function AuthorPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  console.log("SLUG ACCESSED:", resolvedParams.slug);
  const author = AUTHORS[resolvedParams.slug];

  if (!author) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": author.name,
            "jobTitle": author.role,
            "description": author.bio,
            "image": `https://www.nextrevolutiontech.com${author.image}`,
            "url": `https://www.nextrevolutiontech.com/author/${resolvedParams.slug}`,
            "sameAs": [
              author.linkedin
            ],
            "worksFor": {
              "@type": "Organization",
              "name": "Next Revolution Tech"
            }
          })
        }}
      />
      <AuthorProfileClient slug={resolvedParams.slug} />
    </>
  );
}
