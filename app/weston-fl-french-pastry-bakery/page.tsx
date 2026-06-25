import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { NAP, LOCAL_BUSINESS_SCHEMA } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: `French Éclair & Choux Pastry Bakery in Weston, FL | ${NAP.businessName}`,
  description:
    'Your neighborhood French éclair and choux pastry bakery in Weston, FL. Éclair Affaire Weston offers artisan éclairs, cream puffs, and brunch — baked fresh daily. 4.8★ on Google.',
  alternates: { canonical: `${NAP.siteUrl}/weston-fl-french-pastry-bakery/` },
};

export default function WestonGeoPage() {
  return (
    <>
      <JsonLd data={LOCAL_BUSINESS_SCHEMA} />

      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <Image src="/images/eclair-affaire-store.jpg" alt="Éclair Affaire Weston — your neighborhood French pastry bakery" fill unoptimized priority className="object-cover object-center" />
        <div className="absolute inset-0 bg-plum-900/70" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div>
            <p className="text-teal-300 text-xs tracking-[0.35em] uppercase mb-4 font-semibold">Community-Focused</p>
            <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight">
              Your Neighborhood French Éclair &amp; Choux Pastry Bakery in Weston, FL
            </h1>
            <div className="w-16 h-0.5 bg-teal-400 mx-auto mt-4" />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 prose-elegant">
        <p>
          Weston is not the kind of city that settles for ordinary. A planned community built on
          the standards of its residents, Weston has long attracted families who value quality,
          beauty, and community connection. Éclair Affaire Weston was built in that spirit — a
          neighborhood french eclair choux pastry bakery that takes its responsibility to the
          community seriously.
        </p>

        <p>
          Founded by Sofia Chatzivasiloglou and built alongside her husband George, Éclair Affaire
          has become the go-to destination for Weston residents seeking authentic French pastry:
          the kind made by hand, baked fresh every morning, and served with genuine warmth. Our
          4.8-star rating across 364 Google reviews reflects not just the food, but the experience
          of feeling genuinely welcome.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">Weston&apos;s Premier French Pastry Experience</h2>
        <p>
          Éclair Affaire is located at {NAP.address} — easily accessible from anywhere
          in Weston. Our café is designed to be a true destination: the Art Deco interior with
          blush velvet and navy velvet armchairs, the fresh flowers on every table, the quiet
          elegance of the space invite you to slow down and savor.
        </p>
        <p>
          We are open Monday through Sunday, with hours extended Thursday through Saturday until
          7PM. Whether you come for a quick morning éclair on your way to work or a leisurely
          weekend brunch with family, Éclair Affaire has something to offer.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">What We Serve</h2>
        <p>
          Our menu centers on classic and seasonal French pastry, but we are far more than an
          éclair shop. The full menu includes:
        </p>
        <ul className="list-none space-y-2 pl-0">
          {[
            { l: '/artisan-french-eclairs-weston-fl/', t: 'Éclair Affaire Weston french eclair choux pastry bakery collection', d: '— sweet and savory, classic and seasonal' },
            { l: '/classic-choux-pastry-delights-weston-fl/', t: 'Choux pastry Weston', d: '— cream puffs, Paris-Brest, and specialty creations' },
            { l: '/custom-french-pastry-orders-weston-fl/', t: 'french eclair choux pastry bakery', d: 'custom orders for events, weddings, and catering' },
          ].map((item) => (
            <li key={item.l} className="flex gap-3 text-plum-700 text-base">
              <span className="text-teal-500 flex-shrink-0">→</span>
              <span><Link href={item.l} className="text-teal-600 hover:underline">{item.t}</Link> {item.d}</span>
            </li>
          ))}
          <li className="flex gap-3 text-plum-700 text-base">
            <span className="text-teal-500 flex-shrink-0">→</span>
            <span>Brunch menu — pancakes, croissant galettes, savory éclairs, coffee</span>
          </li>
        </ul>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">A Weston Institution</h2>
        <p>
          In a few short years, Éclair Affaire has built a loyal following in Weston and throughout
          Broward County. Regulars visit multiple times per week. New guests routinely become regulars
          after their first éclair. The combination of Sofia&apos;s exceptional pastry skill and the
          welcoming atmosphere that George and Sofia have cultivated together creates something
          genuinely rare: a neighborhood bakery that also happens to be world-class.
        </p>
        <p>
          We are proudly women-owned and LGBTQ+-friendly. Everyone is welcome at Éclair Affaire —
          and everyone leaves with something worth coming back for.
        </p>

        <div className="bg-cream-100 border border-cream-200 p-8 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="font-serif text-3xl text-teal-600 mb-1">4.8★</p>
              <p className="text-plum-700 text-sm">364 Google Reviews</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-teal-600 mb-1">{NAP.phone}</p>
              <p className="text-plum-700 text-sm">Call or Visit</p>
            </div>
            <div>
              <p className="font-serif text-lg text-teal-600 mb-1">Mon–Sun</p>
              <p className="text-plum-700 text-sm">9AM–6PM / 7PM Thu–Sat</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a href={NAP.orderUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm uppercase tracking-widest">
              Order Online
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
