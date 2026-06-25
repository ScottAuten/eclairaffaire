import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { NAP } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: `How Is Choux Pastry Made? | ${NAP.businessName}`,
  description:
    'Learn how choux pastry is made — the classical French technique behind éclairs and cream puffs. From Éclair Affaire Weston, FL, where Sofia bakes it fresh every morning.',
  alternates: { canonical: `${NAP.siteUrl}/how-is-choux-pastry-made/` },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [{ '@type': 'Question', name: 'How is choux pastry made?', acceptedAnswer: { '@type': 'Answer', text: 'Choux pastry is made by cooking water, butter, flour, and eggs together into a smooth dough, then piping and baking it. The moisture in the dough creates steam that puffs the pastry into a hollow shell perfect for fillings like pastry cream.' } }],
};

export default function ChouxMadePage() {
  return (
    <>
      <JsonLd data={schema} />
      <section className="bg-plum-900 py-16 px-6 text-center">
        <p className="text-teal-300 text-xs tracking-[0.35em] uppercase mb-4 font-semibold">The Art of Choux</p>
        <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">How Is Choux Pastry Made?</h1>
        <div className="w-16 h-0.5 bg-teal-400 mx-auto" />
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 prose-elegant">
        <p>
          Choux pastry — the foundation of French éclairs, cream puffs, profiteroles, and Paris-Brest —
          is one of the most technically fascinating preparations in the French repertoire. Despite its
          elegant results, it requires just four ingredients: water, butter, flour, and eggs. The mastery
          lies entirely in the technique.
        </p>

        <div className="relative h-64 overflow-hidden my-8">
          <Image src="/images/eclair-affaire-bakery-2.jpg" alt="Choux pastry and éclair display at Éclair Affaire Weston" fill unoptimized className="object-cover object-center" />
        </div>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">The Classical Method</h2>
        <p>
          The process of making choux pastry (pâte à choux) begins on the stovetop. Water and butter
          are brought to a boil, then flour is added all at once and stirred vigorously over heat until
          the dough pulls away from the sides of the pan and forms a smooth ball. This step — the
          panade — partially cooks the starch in the flour and determines the ultimate structure of
          the pastry.
        </p>
        <p>
          Once the panade has cooled slightly, eggs are incorporated one at a time. This is where
          technique is critical: too few eggs produces a paste that will not puff properly; too many
          creates a batter that spreads rather than holds its shape when piped. The correct consistency
          is smooth, glossy, and drops from the spoon in a thick ribbon.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">Piping and Baking</h2>
        <p>
          The dough is piped through a pastry bag onto a baking sheet — in elongated lines for éclairs,
          round mounds for cream puffs. In the oven, the high moisture content of the paste creates
          steam, which causes the pastry to puff dramatically. The proteins and starches set around
          the steam, creating the characteristic hollow interior.
        </p>
        <p>
          Temperature management is essential. If the oven is opened too early, the shells collapse.
          If underbaked, they soften rapidly when cooled. Sofia Chatzivasiloglou, Éclair Affaire&apos;s
          founder and pastry chef, has baked thousands of choux batches and knows precisely when the
          shells are ready — by color, sound (a hollow knock), and texture.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">Filling and Glazing</h2>
        <p>
          Once baked and cooled, the shells are filled with pastry cream injected through a small hole
          in the base or piped through a split. Then comes the glaze — poured mirror glaze or dipped
          fondant applied at the right temperature for a smooth, glossy finish.
        </p>
        <p>
          This is why truly great choux must be eaten the same day it is made: the shells begin to absorb
          moisture from the filling within hours, losing their essential crispness. At our{' '}
          <Link href="/artisan-french-eclairs-weston-fl/" className="text-teal-600 hover:underline">
            Weston french eclair choux pastry bakery
          </Link>
          , everything is baked fresh every morning — and we would have it no other way.
        </p>

        <div className="bg-cream-100 border border-cream-200 p-6 mt-8">
          <p className="font-serif text-lg text-plum-900 mb-3">Taste the Difference — Visit Éclair Affaire</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={NAP.orderUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm uppercase tracking-widest">Order Online</a>
            <Link href="/faq-french-eclairs-choux-pastry-bakery/" className="btn-outline text-sm uppercase tracking-widest">All FAQs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
