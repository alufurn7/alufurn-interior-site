import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://alufurn.com/sitemap.xml',
    host: 'https://alufurn.com',
  };
}
