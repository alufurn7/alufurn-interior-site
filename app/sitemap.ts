import { MetadataRoute } from 'next';
import { getPostSlugs } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.alufurn.com';

  // Get all blog post slugs
  const slugs = getPostSlugs();
  const blogPosts = slugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug.replace(/\.md$/, '')}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const routes = [
    '',
    '/aluminium-kitchen',
    '/aluminium-wardrobe',
    '/aluminium-vanity',
    '/aluminium-doors',
    '/aluminium-panels',
    '/experience',
    '/projects',
    '/quality',
    '/franchise',
    '/contact',
    '/catalog',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.9,
  }));

  return [...routes, ...blogPosts];
}
