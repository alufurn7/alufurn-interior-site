import React from 'react';
import { notFound } from 'next/navigation';
import { getPostBySlug, getPostSlugs } from '@/lib/blog';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import type { Metadata } from 'next';

const BASE_URL = 'https://alufurn.com';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ''),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  try {
    const post = getPostBySlug(resolvedParams.slug);
    const canonicalUrl = `${BASE_URL}/blog/${resolvedParams.slug}`;
    const ogImage = post.coverImage || `${BASE_URL}/images/og-image.jpg`;

    return {
      title: post.title,
      description: post.excerpt,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        type: 'article',
        url: canonicalUrl,
        title: post.title,
        description: post.excerpt,
        siteName: 'ALUFURN',
        publishedTime: post.date,
        authors: [post.author || 'ALUFURN Design Team'],
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt,
        images: [ogImage],
      },
    };
  } catch (e) {
    return {
      title: 'Post Not Found',
    };
  }
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;

  let post;
  try {
    post = getPostBySlug(resolvedParams.slug);
  } catch (e) {
    notFound();
  }

  const canonicalUrl = `${BASE_URL}/blog/${resolvedParams.slug}`;
  const ogImage = post.coverImage || `${BASE_URL}/images/og-image.jpg`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${canonicalUrl}#article`,
        headline: post.title,
        description: post.excerpt,
        url: canonicalUrl,
        datePublished: post.date,
        dateModified: post.date,
        author: {
          '@type': 'Organization',
          '@id': `${BASE_URL}/#organization`,
          name: post.author || 'ALUFURN Design Team',
        },
        publisher: {
          '@id': `${BASE_URL}/#organization`,
        },
        image: {
          '@type': 'ImageObject',
          url: ogImage,
          width: 1200,
          height: 630,
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl,
        },
        ...(post.tags && post.tags.length > 0 && { keywords: post.tags.join(', ') }),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: canonicalUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article className="bg-white min-h-screen pb-32">
        {/* Article Header */}
        <header className="relative pt-40 pb-20 bg-brand-primary overflow-hidden">
          {post.coverImage && (
            <div className="absolute inset-0 z-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/90 to-brand-primary" />
            </div>
          )}

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <Link href="/blog" className="inline-flex items-center text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-10 hover:text-white transition-colors">
              <ArrowLeft size={14} className="mr-2" /> Back to Journal
            </Link>

            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-6 text-white/60 text-xs font-bold uppercase tracking-widest mb-6">
                <span className="flex items-center gap-2"><Calendar size={14} className="text-brand-gold" /> {post.date}</span>
                <span className="flex items-center gap-2"><User size={14} className="text-brand-gold" /> {post.author}</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-white/80 font-light leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="container mx-auto px-6 md:px-12 mt-16">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-slate max-w-none
              prose-headings:text-brand-primary prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-brand-primary/80 prose-p:leading-relaxed prose-p:font-light
              prose-a:text-brand-gold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-brand-primary prose-strong:font-bold
              prose-ul:text-brand-primary/80 prose-ul:font-light
              prose-li:marker:text-brand-gold
              prose-img:rounded-xl prose-img:shadow-2xl prose-img:my-12"
            >
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

