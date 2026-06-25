import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { NAP } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: `Artisan French Éclairs in Weston, FL | ${NAP.businessName}`,
  description:
    'Handcrafted artisan French éclairs baked fresh daily at Éclair Affaire Weston. Classic and seasonal glazed éclairs by pastry chef Sofia Chatzivasiloglou. Order online or visit us.',
  alternates: { canonical: `${NAP.siteUrl}/artisan-french-eclairs-weston-fl/` },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Artisan French Éclairs Crafted to Perfection in Weston, FL',
  provider: { '@type': 'LocalBusiness', name: NAP.businessName },
  areaServed: { '@type': 'City', name: 'Weston', addressRegion: 'FL' },
  description: 'Handcrafted artisan French éclairs — classic, seasonal, sweet, and savory — baked fresh daily in Weston, FL.',
};

export default function ArtisanEclairsPage() {
  return (
    <>
      <JsonLd data={schema} />

      <section className="relative h-[45vh] min-h-[320px] overflow-hidden">
        <Image
          src="/images/exlair-affaire-31.png"
          alt="Baker presenting a handcrafted French éclair at Éclair Affaire Weston"
          fill
          unoptimized
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-plum-900/70" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div>
            <p className="text-teal-300 text-xs tracking-[0.35em] uppercase mb-4 font-semibold">Our Signature</p>
            <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
              Artisan French Éclairs Crafted to Perfection in Weston, FL
            </h1>
            <div className="w-16 h-0.5 bg-teal-400 mx-auto" />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 prose-elegant">
        <p>
          At Éclair Affaire Weston, the French éclair is not simply a pastry — it is an obsession.
          Every éclair that leaves our kitchen is the result of years of refinement by Sofia
          Chatzivasiloglou, our founder and pastry chef, who has dedicated her craft to mastering
          the classical French technique that makes a great éclair truly unforgettable.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">What Makes an Artisan Éclair?</h2>
        <p>
          The word "artisan" is used loosely in the baking world. Here, it means something
          specific: every component is made in-house, by hand, from scratch, every single day.
          The choux dough is mixed fresh each morning. The pastry creams — vanilla bean, chocolate,
          praline, lemon curd — are cooked to order in small batches. The mirror glazes are poured
          at exactly the right temperature to achieve that signature glassy finish.
        </p>
        <p>
          No stabilizers. No pre-made fillings. No frozen shells. This is the french eclair choux
          pastry bakery standard that Sofia has maintained since day one, and it is the reason
          Éclair Affaire holds a 4.8-star rating across 364 Google reviews.
        </p>

        <div className="grid grid-cols-3 gap-4 my-8">
          <div className="relative h-48 overflow-hidden">
            <Image src="/images/66.jpg" alt="Lemon mirror-glaze éclair" width={578} height={654} unoptimized className="w-full h-full object-cover" />
          </div>
          <div className="relative h-48 overflow-hidden">
            <Image src="/images/4-1.jpg" alt="Savory prosciutto éclair" width={578} height={654} unoptimized className="w-full h-full object-cover" />
          </div>
          <div className="relative h-48 overflow-hidden">
            <Image src="/images/77.jpg" alt="Pistachio specialty dessert" width={578} height={654} unoptimized className="w-full h-full object-cover" />
          </div>
        </div>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">Sweet Éclairs — The Classics &amp; The Seasonal</h2>
        <p>
          Our sweet éclair collection begins with the classics that have defined French pastry
          for centuries. The chocolate éclair — choux shell, chocolate pastry cream, dark chocolate
          glaze — is our perpetual bestseller. The vanilla bean éclair, the coffee éclair, the
          praline éclair: each is a study in balance between the airy shell and the richly flavored cream.
        </p>
        <p>
          Beyond the classics, Sofia introduces seasonal éclairs that reflect both the ingredients
          available and the flavors that excite her: lemon-coconut with mirror glaze in the warmer
          months, pistachio with rose-water cream, caramel with fleur de sel, and more. These
          rotate regularly — another reason our regulars visit several times a week.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">Savory Éclairs — A French Tradition</h2>
        <p>
          Many guests are surprised to discover that the savory éclair is a genuine French tradition.
          The same choux pastry shell that holds chocolate cream can hold whipped goat cheese,
          prosciutto, caramelized pistachios, smoked salmon, or herbed cream cheese. At Éclair Affaire,
          Sofia has developed a savory éclair collection that pairs beautifully with our brunch menu —
          light, elegant, and deeply satisfying.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">The Craftsmanship Behind Every Shell</h2>
        <p>
          Choux pastry is deceptively simple — water, butter, flour, eggs — yet it is one of the
          most technically demanding preparations in the French repertoire. The dough must be worked
          to precisely the right consistency before piping. The oven temperature must be exact.
          The shells must dry until they are properly hollow, crisp on the outside, and light within.
        </p>
        <p>
          Sofia has baked thousands of éclair batches. She knows by texture and color when the dough
          is right, when the shells are ready, when the glaze has cooled to the ideal pouring
          temperature. This intuition — built over years — is what separates our{' '}
          <Link href="/weston-fl-french-pastry-bakery/" className="text-teal-600 hover:underline">french eclair choux pastry bakery</Link>{' '}
          from everything else in the region.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">Serving Weston and Broward County</h2>
        <p>
          We serve guests from Weston and throughout Broward County, including{' '}
          <Link href="/sunrise-fl-french-pastry-bakery/" className="text-teal-600 hover:underline">Éclair Affaire Weston french eclair choux pastry bakery</Link>{' '}
          visitors from Sunrise, Davie, Pembroke Pines, and beyond. Our location on Weston Road
          makes us easy to reach from anywhere in the area, and our online ordering through Square
          means you can reserve your éclairs before you arrive.
        </p>

        <div className="bg-cream-100 border border-cream-200 p-8 mt-10 text-center">
          <p className="font-serif text-xl text-plum-900 mb-2">Visit Us in Weston</p>
          <p className="text-plum-700 text-sm mb-1">{NAP.address}</p>
          <p className="text-plum-700 text-sm mb-4">{NAP.phone}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={NAP.orderUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm uppercase tracking-widest">
              Order Online
            </a>
            <Link href="/faq-french-eclairs-choux-pastry-bakery/" className="btn-outline text-sm uppercase tracking-widest">
              FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
