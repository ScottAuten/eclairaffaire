import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { NAP, LOCAL_BUSINESS_SCHEMA } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: `French Pastry Bakery Serving Sunrise, FL | ${NAP.businessName}`,
  description:
    'Éclair Affaire Weston serves the Sunrise, FL community with artisan French éclairs and choux pastry. Just minutes from Sunrise — order online or visit our Weston café.',
  alternates: { canonical: `${NAP.siteUrl}/sunrise-fl-french-pastry-bakery/` },
};

export default function SunriseGeoPage() {
  return (
    <>
      <JsonLd data={LOCAL_BUSINESS_SCHEMA} />

      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <Image src="/images/exlair-affaire-30.png" alt="French éclair pastry bakery serving Sunrise FL" fill unoptimized priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-plum-900/75" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div>
            <p className="text-teal-300 text-xs tracking-[0.35em] uppercase mb-4 font-semibold">Serving Broward County</p>
            <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight">
              Sunrise, FL&apos;s Premier French Éclair &amp; Choux Pastry Bakery Experience
            </h1>
            <div className="w-16 h-0.5 bg-teal-400 mx-auto mt-4" />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 prose-elegant">
        <p>
          If you are in Sunrise, FL and searching for an exceptional French éclair and choux pastry
          bakery, Éclair Affaire Weston is your destination. Located just minutes from Sunrise on
          Weston Road, our artisan bakery is worth the short drive — as our 4.8-star Google rating
          and 364 reviews consistently confirm.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">Why Sunrise Guests Choose Éclair Affaire</h2>
        <p>
          Sunrise has no shortage of bakeries. What it lacks — or lacked, until Éclair Affaire arrived
          nearby — is a true French pastry destination: one that brings the sophistication of Parisian
          patisserie to Broward County without pretension, one that is family-run and women-led, one
          that bakes fresh every morning and maintains the same exacting standards day after day.
        </p>
        <p>
          Sofia Chatzivasiloglou, our founder and pastry chef, has built the kind of reputation in
          Weston that brings guests from Sunrise, Davie, Pembroke Pines, and beyond. When you
          visit{' '}
          <Link href="/artisan-french-eclairs-weston-fl/" className="text-teal-600 hover:underline">
            Éclair Affaire Weston french eclair choux pastry bakery
          </Link>
          , you experience the difference between a chain bakery and an artisan one.
        </p>

        <div className="relative h-64 overflow-hidden my-8">
          <Image src="/images/eclaire-affaire-12.jpg" alt="Brunch and pastry at Éclair Affaire — Sunrise FL guests welcome" fill unoptimized className="object-cover object-center" />
        </div>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">What Sunrise Guests Love Most</h2>
        <p>
          Sunrise guests who make the trip to our{' '}
          <Link href="/weston-fl-french-pastry-bakery/" className="text-teal-600 hover:underline">
            french eclair choux pastry bakery
          </Link>{' '}
          most often rave about three things: the interior (the Art Deco café atmosphere genuinely
          transports you), the éclairs themselves (the seasonal glazes and perfect choux shells), and
          the overall experience of being somewhere that clearly cares about every detail.
        </p>
        <p>
          Many Sunrise visitors make Éclair Affaire a weekend ritual: a drive to Weston, a few hours
          in our café with coffee and pastry, and a box to take home. We accommodate this warmly —
          our café is designed for lingering, not rushing.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">Our Full Menu for Sunrise Visitors</h2>
        <p>
          When you visit from Sunrise, you have access to our full menu:
        </p>
        <ul className="list-none space-y-2 pl-0">
          {[
            { href: '/artisan-french-eclairs-weston-fl/', text: 'Éclair Affaire Weston french eclair choux pastry bakery', desc: ' — sweet, savory, classic, and seasonal' },
            { href: '/classic-choux-pastry-delights-weston-fl/', text: 'french eclair choux pastry bakery', desc: ' choux collection — cream puffs, Paris-Brest, and specialty creations' },
            { href: '/custom-french-pastry-orders-weston-fl/', text: 'Éclair Affaire Weston french eclair choux pastry bakery', desc: ' custom and catering orders — perfect for Sunrise events and celebrations' },
          ].map((item) => (
            <li key={item.href} className="flex gap-3 text-plum-700">
              <span className="text-teal-500 flex-shrink-0">→</span>
              <span><Link href={item.href} className="text-teal-600 hover:underline">{item.text}</Link>{item.desc}</span>
            </li>
          ))}
          <li className="flex gap-3 text-plum-700">
            <span className="text-teal-500 flex-shrink-0">→</span>
            <span>Full brunch menu — pancakes, croissant galettes, coffee, juices</span>
          </li>
        </ul>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">Getting to Éclair Affaire from Sunrise</h2>
        <p>
          We are located at {NAP.address}, easily reachable from Sunrise via
          I-75 or Weston Road. The drive takes approximately 10–15 minutes from most parts of
          Sunrise. Parking is available at our location, and curbside pickup is available if you
          order online in advance through our Square store.
        </p>

        <div className="bg-cream-100 border border-cream-200 p-8 mt-10 text-center">
          <p className="font-serif text-xl text-plum-900 mb-2">Sunrise Guests: We&apos;re Just Minutes Away</p>
          <p className="text-plum-700 text-sm mb-1">{NAP.address}</p>
          <p className="text-plum-700 text-sm mb-4">
            <a href={`tel:${NAP.phone}`} className="hover:text-teal-600 transition-colors">{NAP.phone}</a>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={NAP.orderUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm uppercase tracking-widest">
              Order Ahead
            </a>
            <a href={`tel:${NAP.phone}`} className="btn-outline text-sm uppercase tracking-widest">
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
