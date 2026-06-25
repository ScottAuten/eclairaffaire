import type { Metadata } from 'next';
import Link from 'next/link';
import { NAP } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: `Blog | ${NAP.businessName}`,
  description:
    "Recipes, stories, and sweet inspiration from Sofia's kitchen at Éclair Affaire Weston. Read about French pastry, éclair technique, and life at our Weston bakery.",
  alternates: { canonical: NAP.siteUrl + '/blog/' },
};

const PLACEHOLDER_POSTS = [
  {
    title: 'The Art of the Perfect Éclair: From Choux Shell to Mirror Glaze',
    date: 'June 10, 2026',
    excerpt:
      'Sofia walks through every step of the éclair-making process — from the delicate choux pastry that must puff perfectly in the oven, to the silky pastry cream, to the mirror glaze that gives each éclair its signature sheen.',
    category: 'Technique',
  },
  {
    title: "Why Sofia Chose Weston: A Story of Pastry and Community",
    date: 'May 22, 2026',
    excerpt:
      'What does it take to open a French patisserie in South Florida? Sofia shares the story behind Éclair Affaire — from her first kitchen experiments to finding the perfect home on Weston Road.',
    category: 'Our Story',
  },
  {
    title: 'Custom Pastry for Every Occasion: Behind the Scenes at Éclair Affaire',
    date: 'May 5, 2026',
    excerpt:
      "Weddings, birthdays, corporate lunches — no two custom orders are alike. Take a behind-the-scenes look at how George and Sofia design bespoke pastry arrangements for Weston's most memorable events.",
    category: 'Custom Orders',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <section className="bg-plum-900 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-teal-400 text-xs tracking-[0.3em] uppercase font-semibold mb-3">Sweet Reads</p>
          <h1 className="font-serif text-4xl md:text-5xl text-cream-100 leading-tight mb-4">
            From the Éclair Affaire Kitchen
          </h1>
          <div className="w-16 h-0.5 bg-teal-400 mx-auto mb-5" />
          <p className="text-cream-300 text-lg max-w-xl mx-auto leading-relaxed">
            Recipes, stories, and sweet inspiration from Sofia&apos;s kitchen
          </p>
        </div>
      </section>

      {/* ── Coming Soon Banner ── */}
      <section className="bg-teal-50 border-b border-teal-100 py-4 px-6 text-center">
        <p className="text-teal-700 text-sm font-medium">
          New posts are on the way — check back soon for recipes, stories, and more from our kitchen.
        </p>
      </section>

      {/* ── Post Cards ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLACEHOLDER_POSTS.map((post) => (
            <article key={post.title} className="border border-cream-200 bg-cream-50 flex flex-col">
              <div className="bg-cream-200 h-44 flex items-center justify-center">
                <p className="text-plum-300 text-sm italic">Photo coming soon</p>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-teal-100 text-teal-700 text-xs font-semibold px-2 py-0.5 tracking-wide uppercase">
                    {post.category}
                  </span>
                  <time className="text-plum-300 text-xs">{post.date}</time>
                </div>
                <h2 className="font-serif text-lg text-plum-900 leading-snug mb-3">
                  {post.title}
                </h2>
                <p className="text-plum-700 text-sm leading-relaxed mb-5 flex-1">
                  {post.excerpt}
                </p>
                <span className="inline-block text-teal-600 text-sm font-semibold tracking-wide border-b border-teal-400 pb-0.5 self-start opacity-50 cursor-default">
                  Coming Soon
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* ── Stay Connected ── */}
        <div className="mt-14 text-center bg-cream-100 border border-cream-200 py-12 px-6">
          <p className="text-teal-600 text-xs tracking-[0.3em] uppercase font-semibold mb-3">More Coming Soon</p>
          <h2 className="font-serif text-2xl md:text-3xl text-plum-900 mb-3 leading-tight">
            Stay Connected with Éclair Affaire
          </h2>
          <div className="w-12 h-0.5 bg-teal-500 mx-auto mb-5" />
          <p className="text-plum-700 text-sm max-w-md mx-auto mb-8 leading-relaxed">
            In the meantime, visit us at 1150 Weston Rd or explore our pastry menu — fresh from
            Sofia&apos;s kitchen every morning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="btn-primary text-sm uppercase tracking-widest">
              Get in Touch
            </Link>
            <Link
              href="/artisan-french-eclairs-weston-fl/"
              className="inline-block border-2 border-plum-700 text-plum-700 hover:bg-plum-700 hover:text-white font-semibold px-6 py-3 tracking-widest text-sm uppercase transition-colors"
            >
              See Our Éclairs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
