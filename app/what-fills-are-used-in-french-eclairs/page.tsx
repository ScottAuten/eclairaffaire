import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { NAP } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: `What Fillings Are Used in French Éclairs? | ${NAP.businessName}`,
  description:
    'French éclair fillings range from classic vanilla pastry cream to chocolate, praline, seasonal flavors, and savory options. Learn about Éclair Affaire Weston\'s collection.',
  alternates: { canonical: `${NAP.siteUrl}/what-fills-are-used-in-french-eclairs/` },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [{ '@type': 'Question', name: 'What fillings are used in French éclairs?', acceptedAnswer: { '@type': 'Answer', text: 'French éclair fillings include vanilla bean pastry cream, chocolate pastry cream, coffee cream, praline mousseline, and seasonal specialties. Savory options may include goat cheese, smoked salmon, and herbed cream.' } }],
};

export default function FillingsPage() {
  return (
    <>
      <JsonLd data={schema} />
      <section className="bg-plum-900 py-16 px-6 text-center">
        <p className="text-teal-300 text-xs tracking-[0.35em] uppercase mb-4 font-semibold">Pastry Education</p>
        <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
          What Fillings Are Used in French Éclairs?
        </h1>
        <div className="w-16 h-0.5 bg-teal-400 mx-auto" />
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 prose-elegant">
        <p>
          The filling is the soul of a French éclair. It is what distinguishes a chocolate éclair
          from a vanilla one, what sets a praline masterpiece apart from a pedestrian cream puff,
          and what gives Sofia Chatzivasiloglou&apos;s seasonal creations their sense of discovery
          and delight. At Éclair Affaire Weston, every filling is made from scratch, in small
          batches, every single day.
        </p>

        <div className="grid grid-cols-3 gap-4 my-8">
          <div className="relative h-48 overflow-hidden">
            <Image src="/images/66.jpg" alt="Lemon mirror-glaze éclair filling" fill unoptimized className="object-cover object-center" />
          </div>
          <div className="relative h-48 overflow-hidden">
            <Image src="/images/4-1.jpg" alt="Savory éclair filling — prosciutto" fill unoptimized className="object-cover object-center" />
          </div>
          <div className="relative h-48 overflow-hidden">
            <Image src="/images/77.jpg" alt="Pistachio cream filling specialty pastry" fill unoptimized className="object-cover object-center" />
          </div>
        </div>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">Classic Sweet Fillings</h2>
        <p>
          The classic filling for a French éclair is crème pâtissière — pastry cream — a rich,
          egg-based custard cooked with milk and flavored with various ingredients. At Éclair Affaire,
          our standard sweet fillings include:
        </p>
        <ul className="list-none space-y-2 pl-0">
          {[
            'Vanilla Bean Pastry Cream — the purest expression, made with real vanilla bean',
            'Chocolate Pastry Cream — dark chocolate stirred into the hot custard for a deep, intense filling',
            'Coffee Cream — espresso-infused pastry cream with a subtle bitterness that balances the sweet glaze',
            'Praline Mousseline — pastry cream lightened with butter and loaded with praline paste',
            'Pistachio Cream — seasonal, made with high-quality pistachio paste and often paired with rose',
          ].map((item) => (
            <li key={item} className="flex gap-3 text-plum-700">
              <span className="text-teal-500 flex-shrink-0">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">Seasonal &amp; Specialty Fillings</h2>
        <p>
          Sofia&apos;s menu rotates with the seasons and with her own creative curiosity. Past seasonal
          fillings have included lemon curd with coconut chantilly, caramel with fleur de sel pastry
          cream, and mango-passion fruit curd. These limited-run flavors are a reason why regulars
          visit multiple times a week — they are not available for long.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">Savory Fillings</h2>
        <p>
          The savory éclair is a genuine French tradition, and Sofia has embraced it fully. Savory
          fillings at Éclair Affaire include:
        </p>
        <ul className="list-none space-y-2 pl-0">
          {[
            'Herbed cream cheese with chives and lemon zest',
            'Smoked salmon with whipped cream cheese and capers',
            'Prosciutto with whipped goat cheese and caramelized pistachios',
          ].map((item) => (
            <li key={item} className="flex gap-3 text-plum-700">
              <span className="text-teal-500 flex-shrink-0">→</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">The Importance of Quality Ingredients</h2>
        <p>
          A pastry cream is only as good as its components. Sofia sources quality dairy, real vanilla
          beans, and premium chocolate and nut pastes. There are no artificial flavorings, no
          stabilizers, and no shortcuts in the fillings at our{' '}
          <Link href="/artisan-french-eclairs-weston-fl/" className="text-teal-600 hover:underline">
            Weston french eclair choux pastry bakery
          </Link>
          . This commitment is what makes the difference — and what keeps our guests coming back.
        </p>

        <div className="bg-cream-100 border border-cream-200 p-6 mt-8">
          <p className="font-serif text-lg text-plum-900 mb-2">Taste Every Filling at Éclair Affaire</p>
          <p className="text-plum-700 text-sm mb-4">{NAP.address} · {NAP.phone}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={NAP.orderUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm uppercase tracking-widest">Order Online</a>
            <Link href="/faq-french-eclairs-choux-pastry-bakery/" className="btn-outline text-sm uppercase tracking-widest">All FAQs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
