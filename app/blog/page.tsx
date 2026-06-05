import React from 'react';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

export const metadata = {
  title: 'Aluminium Kitchen & Interior Design Blog — ALUFURN India',
  description: 'Expert insights, cost guides, and trends for aluminium modular kitchens, wardrobes, doors, and interiors in India. Straight from the ALUFURN design team.',
  alternates: {
    canonical: 'https://alufurn.com/blog',
  },
  openGraph: {
    type: 'website',
    url: 'https://alufurn.com/blog',
    title: 'Aluminium Kitchen & Interior Design Blog — ALUFURN India',
    description: 'Expert insights, cost guides, and trends for aluminium modular kitchens, wardrobes, and interiors in India.',
    siteName: 'ALUFURN',
    images: [{ url: 'https://alufurn.com/images/og-image.jpg', width: 1200, height: 630, alt: 'ALUFURN Blog' }],
  },
};

export default function BlogListingPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-brand-primary overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/80 to-brand-primary" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <span className="text-brand-gold text-[10px] uppercase tracking-[0.6em] mb-6 block font-bold">
            Insights & Guides
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter uppercase leading-none">
            The ALUFURN <br />
            <span className="text-brand-gold italic font-light">Journal.</span>
          </h1>
          <p className="text-white/80 text-lg font-light max-w-2xl mx-auto">
            Explore our latest articles on premium aluminium interiors, modern design trends, and comprehensive buyer guides.
          </p>
        </div>
      </section>

      {/* Blog Listing Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-brand-primary/60 text-xl font-light">New articles are coming soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {posts.map((post) => (
                <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col h-full bg-brand-light hover:bg-brand-primary transition-colors duration-500 shadow-lg hover:shadow-2xl">
                  {post.coverImage && (
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={post.coverImage} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  )}
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-brand-gold mb-4 text-xs font-bold uppercase tracking-widest">
                      <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-brand-primary group-hover:text-white mb-4 leading-tight transition-colors duration-500">
                      {post.title}
                    </h2>
                    
                    <p className="text-brand-primary/70 group-hover:text-white/70 font-light text-sm mb-8 flex-grow transition-colors duration-500">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold mt-auto">
                      Read Article
                      <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
