import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE = 'https://eclairaffaire.com';

const SLUGS = [
  '',
  'french-eclair-choux-pastry-bakery-weston-fl',
  'artisan-french-eclairs-weston-fl',
  'classic-choux-pastry-delights-weston-fl',
  'custom-french-pastry-orders-weston-fl',
  'weston-fl-french-pastry-bakery',
  'sunrise-fl-french-pastry-bakery',
  'faq-french-eclairs-choux-pastry-bakery',
  'what-are-french-eclairs',
  'how-is-choux-pastry-made',
  'best-french-eclairs-in-weston-fl',
  'can-i-order-custom-french-pastries',
  'are-french-eclairs-gluten-free',
  'how-long-do-french-eclairs-last',
  'what-fills-are-used-in-french-eclairs',
  'can-i-freeze-french-eclairs',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return SLUGS.map((slug) => ({
    url: slug ? `${BASE}/${slug}/` : `${BASE}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: slug === '' ? 1 : slug.startsWith('artisan') || slug.startsWith('classic') || slug.startsWith('custom') ? 0.8 : 0.6,
  }));
}
