import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { NAP } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: `Classic Choux Pastry Delights in Weston, FL | ${NAP.businessName}`,
  description:
    'Classic choux pastry baked fresh daily at Éclair Affaire Weston — cream puffs, Paris-Brest, and artisan choux creations by pastry chef Sofia. Women-led French bakery in Weston, FL.',
  alternates: { canonical: `${NAP.siteUrl}/classic-choux-pastry-delights-weston-fl/` },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Classic Choux Pastry Delights Baked Fresh Daily in Weston, FL',
  provider: { '@type': 'LocalBusiness', name: NAP.businessName },
};

export default function ChouxPastryPage() {
  return (
    <>
      <JsonLd data={schema} />

      <section className="relative h-[45vh] min-h-[320px] overflow-hidden">
        <Image
          src="/images/eclair-affaire-bakery-2.jpg"
          alt="Classic French choux pastry and full menu at Éclair Affaire Weston"
          fill
          unoptimized
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-plum-900/70" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div>
            <p className="text-teal-300 text-xs tracking-[0.35em] uppercase mb-4 font-semibold">Heritage &amp; Tradition</p>
            <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
              Classic Choux Pastry Delights Baked Fresh Daily in Weston, FL
            </h1>
            <div className="w-16 h-0.5 bg-teal-400 mx-auto" />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 prose-elegant">
        <p>
          Choux pastry is one of the great cornerstones of French baking. Light, hollow, golden —
          it has served as the foundation for some of the most iconic pastries in the world: the éclair,
          the cream puff, the Paris-Brest, the religieuse. At Éclair Affaire Weston, pastry chef and
          founder Sofia Chatzivasiloglou honors this heritage every morning with choux baked fresh,
          filled to order, and glazed with the kind of care that only a family business can sustain.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">The Choux Tradition at Éclair Affaire</h2>
        <p>
          Choux pastry (pronounced "shoo") is a cooked paste made from water, butter, flour, and eggs.
          What makes it remarkable is what happens in the oven: the high water content creates steam
          that puffs the paste into a light, airy shell — creating a hollow interior perfectly designed
          to hold a rich cream filling. Sofia has been baking choux for years, and her technique reflects
          that accumulated mastery.
        </p>
        <p>
          Every batch at our <Link href="/weston-fl-french-pastry-bakery/" className="text-teal-600 hover:underline">Weston French bakery</Link>{' '}
          is made from scratch: the paste cooked on the stovetop, cooled carefully, piped by hand,
          and baked to exactly the right color and crispness. No pre-made shells. No shortcuts.
          This is what makes the difference between a memorable pastry and a forgettable one.
        </p>

        <div className="relative h-72 overflow-hidden my-8">
          <Image
            src="/images/eclaire-affaire-13.jpg"
            alt="Choux pastry catering display — pistachio cannoli and cream puffs"
            fill
            unoptimized
            className="object-cover object-center"
          />
        </div>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">Cream Puffs — A Timeless Classic</h2>
        <p>
          The cream puff (choux à la crème) is perhaps the most beloved choux creation in the world.
          A perfectly baked round shell, split and filled with chantilly cream or pastry cream, sometimes
          dusted with powdered sugar, sometimes glazed — simple on the surface, demanding in execution.
          Sofia&apos;s cream puffs achieve that elusive quality: a shell that is crisp on the outside,
          yielding within, and a cream filling that is light without being bland.
        </p>
        <p>
          Our cream puff flavors rotate with the season, but you will almost always find vanilla bean
          chantilly, chocolate pastry cream, and pistachio praline in the display case.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">Beyond the Éclair — Our Full Choux Collection</h2>
        <p>
          While our french eclair choux pastry bakery identity is rooted in the éclair, Sofia&apos;s
          choux repertoire extends well beyond it. The Paris-Brest — a ring of choux filled with
          praline mousseline cream — is a showstopper on any table. Bite-sized profiteroles make
          an elegant finish to any catering arrangement. The religieuse, two stacked choux puffs
          with cream and fondant, is a French classics that is rare to find in South Florida.
        </p>
        <p>
          We also offer choux-based savory preparations: gougères (cheese puffs), mini choux bites
          filled with herbed cream cheese or smoked salmon, and our signature savory brunch items
          that pair choux technique with the Florida ingredients our guests love.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">Why Freshness Is Non-Negotiable</h2>
        <p>
          Choux pastry does not hold well. The shells absorb moisture from cream fillings and begin
          to soften after a few hours. This is precisely why great choux must be baked fresh and
          assembled close to service. At Éclair Affaire, we bake every morning for that day&apos;s service.
          If we sell out, we sell out — because we will not compromise the quality of what we serve
          by baking too far in advance.
        </p>
        <p>
          This commitment to freshness means that our{' '}
          <Link href="/sunrise-fl-french-pastry-bakery/" className="text-teal-600 hover:underline">/sunrise-fl-french-pastry-bakery/</Link>{' '}
          and Weston guests experience the same product that Sofia would serve at her own table.
          It is the standard that a family-run bakery demands of itself.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">Choux Pastry for Every Occasion</h2>
        <p>
          Whether you are looking for a single exceptional cream puff to enjoy with your morning coffee
          or a tower of choux puffs for a bridal shower, Éclair Affaire has you covered. Our{' '}
          <Link href="/custom-french-pastry-orders-weston-fl/" className="text-teal-600 hover:underline">french eclair choux pastry bakery</Link>{' '}
          custom order service allows you to request specific choux preparations for events, with
          advance notice recommended for larger quantities. Call us at {NAP.phone} or order online
          to discuss your requirements.
        </p>

        <div className="bg-cream-100 border border-cream-200 p-8 mt-10 text-center">
          <p className="font-serif text-xl text-plum-900 mb-2">Experience the Freshest Choux in Weston</p>
          <p className="text-plum-700 text-sm mb-1">{NAP.address}</p>
          <p className="text-plum-700 text-sm mb-4">{NAP.phone}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={NAP.orderUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm uppercase tracking-widest">
              Order Online
            </a>
            <Link href="/artisan-french-eclairs-weston-fl/" className="btn-outline text-sm uppercase tracking-widest">
              See Our Éclairs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
