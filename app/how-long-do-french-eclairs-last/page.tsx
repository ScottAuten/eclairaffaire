import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { NAP } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: `How Long Do French Éclairs Last? | ${NAP.businessName}`,
  description:
    'Find out how long French éclairs last and how to store them properly. The short answer: same-day is best. From Éclair Affaire Weston, FL.',
  alternates: { canonical: `${NAP.siteUrl}/how-long-do-french-eclairs-last/` },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [{ '@type': 'Question', name: 'How long do French éclairs last?', acceptedAnswer: { '@type': 'Answer', text: 'Filled French éclairs are best consumed the same day they are made. The choux shell absorbs moisture from the filling and softens after a few hours. Unfilled shells can be stored in an airtight container for 1–2 days.' } }],
};

export default function HowLongPage() {
  return (
    <>
      <JsonLd data={schema} />
      <section className="bg-plum-900 py-16 px-6 text-center">
        <p className="text-teal-300 text-xs tracking-[0.35em] uppercase mb-4 font-semibold">Storage &amp; Freshness</p>
        <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
          How Long Do French Éclairs Last?
        </h1>
        <div className="w-16 h-0.5 bg-teal-400 mx-auto" />
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 prose-elegant">
        <p>
          The honest answer is: not long — and that is entirely by design. A great French éclair is a
          fresh product. The choux shell is at its best the moment it comes out of the oven: crisp,
          light, and hollow. Once filled with pastry cream, the clock starts ticking.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">Same Day Is Always Best</h2>
        <p>
          Filled and glazed éclairs should ideally be consumed the same day they are made. Within a
          few hours of filling, the moisture from the pastry cream begins to soften the shell from
          the inside. By the next day, even refrigerated éclairs lose much of the textural contrast
          that makes them special — the shell becomes noticeably softer and the glaze can weep.
        </p>
        <p>
          This is why at Éclair Affaire, we bake every morning for that day&apos;s service. We would
          rather sell out than serve yesterday&apos;s pastry.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">Storage Tips for Filled Éclairs</h2>
        <ul className="list-none space-y-2 pl-0">
          {[
            'Refrigerate filled éclairs if not consuming immediately — pastry cream must be kept cold',
            'Store in a single layer in a loosely covered container to minimize condensation',
            'Consume within 24 hours for the best experience; 48 hours is the absolute maximum',
            'Do not freeze filled, glazed éclairs — the cream texture suffers significantly when thawed',
          ].map((item) => (
            <li key={item} className="flex gap-3 text-plum-700">
              <span className="text-teal-500 flex-shrink-0">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">Unfilled Shells</h2>
        <p>
          Unfilled choux shells can be stored in an airtight container at room temperature for 1–2
          days without significant quality loss. You can also re-crisp them in a 300°F oven for
          5–8 minutes before filling. For longer storage, unfilled shells can be frozen for up to
          one month — see our{' '}
          <Link href="/can-i-freeze-french-eclairs/" className="text-teal-600 hover:underline">
            guide to freezing éclairs
          </Link>{' '}
          for details.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">Why Our Éclairs Are Always Fresh</h2>
        <p>
          Because we bake daily in small batches, every éclair you buy from Éclair Affaire was
          made that morning. You never have to wonder about freshness when you visit our{' '}
          <Link href="/weston-fl-french-pastry-bakery/" className="text-teal-600 hover:underline">
            Weston french eclair choux pastry bakery
          </Link>
          . If anything, we sell out before the day ends — a problem we consider a quality guarantee.
        </p>

        <div className="bg-cream-100 border border-cream-200 p-6 mt-8">
          <p className="font-serif text-lg text-plum-900 mb-2">Order Fresh Today</p>
          <p className="text-plum-700 text-sm mb-4">Reserve yours online or call ahead — baked fresh every morning.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={NAP.orderUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm uppercase tracking-widest">Order Online</a>
            <Link href="/faq-french-eclairs-choux-pastry-bakery/" className="btn-outline text-sm uppercase tracking-widest">All FAQs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
