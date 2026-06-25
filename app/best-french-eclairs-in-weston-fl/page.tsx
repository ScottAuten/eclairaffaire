import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { NAP, LOCAL_BUSINESS_SCHEMA } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: `Best French Éclairs in Weston, FL | ${NAP.businessName}`,
  description:
    'Looking for the best French éclairs in Weston, FL? Éclair Affaire Weston is rated 4.8 stars across 364 Google reviews — handcrafted by pastry chef Sofia, baked fresh daily.',
  alternates: { canonical: `${NAP.siteUrl}/best-french-eclairs-in-weston-fl/` },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [{ '@type': 'Question', name: 'Where can I find the best French éclairs in Weston, FL?', acceptedAnswer: { '@type': 'Answer', text: 'Éclair Affaire Weston is consistently ranked the top French éclair bakery in Weston, FL — 4.8 stars on Google across 364 reviews. Founded by pastry chef Sofia Chatzivasiloglou, baked fresh daily at 1150 Weston Rd, Weston, FL 33326.' } }],
};

export default function BestEclairsPage() {
  return (
    <>
      <JsonLd data={LOCAL_BUSINESS_SCHEMA} />
      <JsonLd data={schema} />

      <section className="bg-plum-900 py-16 px-6 text-center">
        <p className="text-teal-300 text-xs tracking-[0.35em] uppercase mb-4 font-semibold">Weston&apos;s Finest</p>
        <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
          The Best French Éclairs in Weston, FL
        </h1>
        <div className="w-16 h-0.5 bg-teal-400 mx-auto" />
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 prose-elegant">
        <p>
          If you have been searching for the best French éclairs in Weston, FL, the answer is
          consistent across hundreds of reviews: Éclair Affaire Weston. With a 4.8-star rating
          across 364 Google reviews, our artisan french eclair choux pastry bakery has established
          itself as the definitive destination for handcrafted French pastry in Broward County.
        </p>

        <div className="grid grid-cols-2 gap-4 my-8">
          <div className="relative h-56 overflow-hidden">
            <Image src="/images/exlair-affaire-30.png" alt="Best French éclairs in Weston FL — rose-decorated chocolate éclairs" fill unoptimized className="object-cover object-center" />
          </div>
          <div className="relative h-56 overflow-hidden">
            <Image src="/images/66.jpg" alt="Lemon mirror-glaze éclair — Éclair Affaire Weston" fill unoptimized className="object-cover object-center" />
          </div>
        </div>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">What Sets Our Éclairs Apart</h2>
        <p>
          The best éclair is not the flashiest one — it is the one where every element is executed
          correctly. At Éclair Affaire, that means choux shells baked fresh every morning by founder
          and pastry chef Sofia Chatzivasiloglou, pastry creams cooked in small batches the same day,
          and mirror glazes poured at precisely the right temperature for a perfect finish.
        </p>
        <p>
          Sofia&apos;s training in classical French pastry technique means she holds herself to the
          standard of the great Parisian pâtisseries — not the standard of a Florida strip-mall bakery.
          The difference is evident in every bite.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">What Our Guests Say</h2>
        <div className="space-y-4">
          {[
            '"The most exquisite éclairs I have ever had outside of Paris. Éclair Affaire is a genuine treasure in Weston."',
            '"Sofia&apos;s éclairs are perfection. The choux shell is crispy, the cream is silky, and the glaze is beautiful. Worth every penny."',
            '"We discovered Éclair Affaire by accident and now come every weekend. The seasonal flavors keep surprising us."',
          ].map((quote, i) => (
            <blockquote key={i} className="bg-cream-100 border-l-4 border-teal-500 pl-5 py-3 pr-4 italic text-plum-800 text-sm">
              {quote}
              <span className="block text-teal-600 text-xs mt-2 not-italic">★★★★★ Google Review</span>
            </blockquote>
          ))}
        </div>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">Our Éclair Collection</h2>
        <p>
          We offer a rotating menu of sweet and savory éclairs. Sweet options include classic
          chocolate, vanilla bean, coffee, praline, and seasonal creations like pistachio rose,
          lemon-coconut, and caramel fleur de sel. Savory options feature prosciutto with goat
          cheese, smoked salmon, and herbed cream cheese. See our full{' '}
          <Link href="/artisan-french-eclairs-weston-fl/" className="text-teal-600 hover:underline">
            artisan éclair collection →
          </Link>
        </p>

        <div className="bg-cream-100 border border-cream-200 p-8 mt-10">
          <div className="text-center mb-4">
            <p className="font-serif text-3xl text-teal-600 mb-1">4.8★</p>
            <p className="text-plum-700 text-sm">364 Google Reviews · Best Éclairs in Weston, FL</p>
          </div>
          <p className="text-center text-plum-700 text-sm mb-4">{NAP.address} · {NAP.phone}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={NAP.orderUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm uppercase tracking-widest">Order Online</a>
            <Link href="/" className="btn-outline text-sm uppercase tracking-widest">Visit Homepage</Link>
          </div>
        </div>
      </section>
    </>
  );
}
