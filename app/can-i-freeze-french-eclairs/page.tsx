import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { NAP } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: `Can I Freeze French Éclairs? | ${NAP.businessName}`,
  description:
    'Can you freeze French éclairs? Unfilled shells yes; filled and glazed éclairs no. Learn the right approach to freezing choux pastry from Éclair Affaire Weston, FL.',
  alternates: { canonical: `${NAP.siteUrl}/can-i-freeze-french-eclairs/` },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [{ '@type': 'Question', name: 'Can I freeze French éclairs?', acceptedAnswer: { '@type': 'Answer', text: 'Unfilled choux shells can be frozen for up to 1 month and re-crisped in the oven. Filled, glazed éclairs should not be frozen — the cream texture and glaze deteriorate significantly when thawed. Always best fresh.' } }],
};

export default function FreezeEclairsPage() {
  return (
    <>
      <JsonLd data={schema} />
      <section className="bg-plum-900 py-16 px-6 text-center">
        <p className="text-teal-300 text-xs tracking-[0.35em] uppercase mb-4 font-semibold">Storage Guide</p>
        <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
          Can I Freeze French Éclairs?
        </h1>
        <div className="w-16 h-0.5 bg-teal-400 mx-auto" />
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 prose-elegant">
        <p>
          The answer depends on what stage of the éclair you want to freeze. The short version:
          unfilled choux shells freeze well; filled and glazed éclairs do not. Understanding why
          helps you get the best out of your pastry — and underscores why freshness matters so much.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">Freezing Unfilled Choux Shells — Yes</h2>
        <p>
          Baked, unfilled choux shells freeze very well for up to one month. Once fully cooled,
          place them in a single layer in an airtight freezer-safe bag or container (avoid stacking
          before frozen, or they will stick together). When you are ready to use them, thaw at
          room temperature and then place in a 300°F oven for 5–8 minutes to re-crisp the shells
          before filling and glazing.
        </p>
        <p>
          This is actually how many professional pastry kitchens manage high-volume production:
          bake shells in quantity, freeze, and thaw-to-order. The technique works because the
          shell has not yet been compromised by filling moisture.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">Freezing Filled, Glazed Éclairs — Not Recommended</h2>
        <p>
          Once an éclair has been filled with pastry cream and glazed, freezing is not recommended.
          Pastry cream does not freeze well — the egg-and-starch emulsion breaks during freezing,
          resulting in a grainy, weeping texture when thawed. The mirror glaze or fondant top
          also deteriorates significantly, losing its shiny finish and developing condensation marks.
        </p>
        <p>
          If you have leftover filled éclairs, refrigerate them and consume within 24 hours. For
          the best experience, follow our{' '}
          <Link href="/how-long-do-french-eclairs-last/" className="text-teal-600 hover:underline">
            guide on how long éclairs last
          </Link>
          {' '}and plan accordingly.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">The Best Approach: Buy Fresh</h2>
        <p>
          At Éclair Affaire Weston, we bake every morning for the same day&apos;s service. The reason
          we do not try to extend shelf life is that we believe in serving our pastry at its best —
          not managing its decline. If you want the finest possible éclair experience, visit our{' '}
          <Link href="/weston-fl-french-pastry-bakery/" className="text-teal-600 hover:underline">
            Weston french eclair choux pastry bakery
          </Link>{' '}
          and enjoy what was baked that morning.
        </p>
        <p>
          If you are ordering for an event and need to plan ahead, our{' '}
          <Link href="/custom-french-pastry-orders-weston-fl/" className="text-teal-600 hover:underline">
            custom order service
          </Link>{' '}
          allows us to time production to your event date — so everything arrives at peak freshness.
        </p>

        <div className="bg-cream-100 border border-cream-200 p-6 mt-8">
          <p className="font-serif text-lg text-plum-900 mb-2">Order Fresh for Your Event</p>
          <p className="text-plum-700 text-sm mb-4">Call us to plan your order timing perfectly.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={NAP.orderUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm uppercase tracking-widest">Order Online</a>
            <Link href="/faq-french-eclairs-choux-pastry-bakery/" className="btn-outline text-sm uppercase tracking-widest">All FAQs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
