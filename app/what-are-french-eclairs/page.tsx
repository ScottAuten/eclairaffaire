import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { NAP } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: `What Are French Éclairs? | ${NAP.businessName}`,
  description:
    'Learn what French éclairs are — their history, how they are made, and what distinguishes a great éclair from an average one. From Éclair Affaire Weston, FL.',
  alternates: { canonical: `${NAP.siteUrl}/what-are-french-eclairs/` },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [{ '@type': 'Question', name: 'What are French éclairs?', acceptedAnswer: { '@type': 'Answer', text: 'A French éclair is an elongated pastry made from choux dough, filled with a flavored pastry cream, and finished with a shiny glaze or fondant. The name means "lightning" in French — for how quickly they are eaten.' } }],
};

export default function WhatAreEclairsPage() {
  return (
    <>
      <JsonLd data={schema} />

      <section className="bg-plum-900 py-16 px-6 text-center">
        <p className="text-teal-300 text-xs tracking-[0.35em] uppercase mb-4 font-semibold">French Pastry Education</p>
        <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
          What Are French Éclairs?
        </h1>
        <div className="w-16 h-0.5 bg-teal-400 mx-auto" />
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 prose-elegant">
        <p>
          A French éclair — pronounced "ay-CLAIR" — is one of the most celebrated pastries in the
          classical French tradition. At its core, it is an elongated pastry made from choux dough,
          split or piped with a rich cream filling, and finished with a shiny glaze that gives it
          its characteristic elegance. The name comes from the French word for "lightning," which
          some culinary historians attribute to how quickly the pastry disappears from the plate.
        </p>

        <div className="relative h-64 overflow-hidden my-8">
          <Image src="/images/exlair-affaire-30.png" alt="Rose-decorated French éclairs at Éclair Affaire Weston" fill unoptimized className="object-cover object-center" />
        </div>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">The Three Components of a French Éclair</h2>
        <p>
          Every éclair has three essential parts — and getting each one right requires different skills:
        </p>
        <ul className="list-none space-y-3 pl-0">
          {[
            { t: 'The Choux Shell', d: 'Baked from pâte à choux (choux pastry dough), the shell must be crisp on the outside, hollow within, and light enough that it does not overwhelm the filling. It is piped into an elongated shape before baking.' },
            { t: 'The Filling', d: 'Traditionally crème pâtissière (pastry cream) — a cooked egg-and-milk custard flavored with vanilla, chocolate, coffee, or other ingredients. At Éclair Affaire, Sofia also creates praline, pistachio, lemon curd, and seasonal fillings.' },
            { t: 'The Glaze', d: 'Usually fondant (a sugar-based glaze) or a mirror glaze that creates the shiny, jewel-like top coat. The glaze is both decorative and functional — it seals the filling and signals the flavor within.' },
          ].map((item) => (
            <li key={item.t} className="flex gap-3">
              <span className="text-teal-500 flex-shrink-0">✦</span>
              <div><strong className="text-plum-900">{item.t}:</strong> <span className="text-plum-700">{item.d}</span></div>
            </li>
          ))}
        </ul>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">Sweet vs. Savory Éclairs</h2>
        <p>
          While sweet éclairs with pastry cream are the most familiar, the savory éclair is a
          genuine French tradition. The same choux shell that holds chocolate cream can hold whipped
          goat cheese, smoked salmon, herbed cream, or prosciutto. At Éclair Affaire, both
          traditions are honored — our{' '}
          <Link href="/artisan-french-eclairs-weston-fl/" className="text-teal-600 hover:underline">
            artisan éclair collection
          </Link>{' '}
          spans sweet, savory, classic, and seasonal.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">What Distinguishes a Great Éclair?</h2>
        <p>
          The difference between an average éclair and an exceptional one comes down to freshness and
          technique. A truly great éclair is made from scratch every day: the dough freshly cooked,
          the pastry cream freshly made, the glaze freshly poured. At Éclair Affaire, pastry chef
          Sofia Chatzivasiloglou follows this standard without exception — which is why our guests
          describe our éclairs as the finest they have had outside of Paris.
        </p>

        <div className="bg-cream-100 border border-cream-200 p-6 mt-8">
          <p className="font-serif text-lg text-plum-900 mb-3">Experience the Finest Éclairs in Weston, FL</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={NAP.orderUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm uppercase tracking-widest">Order Online</a>
            <Link href="/faq-french-eclairs-choux-pastry-bakery/" className="btn-outline text-sm uppercase tracking-widest">All FAQs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
