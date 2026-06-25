import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { NAP, LOCAL_BUSINESS_SCHEMA } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: `French Éclair & Choux Pastry Bakery in Weston, FL | ${NAP.businessName}`,
  description:
    'Éclair Affaire Weston — your premier French éclair and choux pastry bakery in Weston, FL. Women-led, family-run. Artisan pastries baked fresh daily. Visit or order online.',
  alternates: {
    canonical: NAP.siteUrl + '/',
  },
};

export default function LongSlugPage() {
  return (
    <>
      <JsonLd data={LOCAL_BUSINESS_SCHEMA} />

      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <Image
          src="/images/eclair-affaire-store.jpg"
          alt="Éclair Affaire Weston — French éclair and choux pastry bakery interior"
          fill
          unoptimized
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-plum-900/75" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div>
            <p className="text-teal-300 text-xs tracking-[0.35em] uppercase mb-4 font-semibold">Weston · Florida</p>
            <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
              French Éclair &amp; Choux Pastry Bakery in Weston, FL
            </h1>
            <div className="w-16 h-0.5 bg-teal-400 mx-auto" />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose-elegant text-center mb-10">
          <p className="text-lg">
            Éclair Affaire Weston is the french eclair choux pastry bakery Weston, FL has been waiting for.
            Founded by Sofia Chatzivasiloglou and built alongside her husband George, this family-run,
            women-led bakery brings authentic Parisian pastry technique to Broward County — baked fresh
            daily, never compromised.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link href="/artisan-french-eclairs-weston-fl/" className="card-cream hover:border-teal-400 transition-colors group text-center">
            <h2 className="font-serif text-lg text-plum-900 mb-2 group-hover:text-teal-700 transition-colors">
              <Link href="/artisan-french-eclairs-weston-fl/" className="french eclair choux pastry bakery">Artisan French Éclairs</Link>
            </h2>
            <p className="text-plum-700 text-sm leading-relaxed">
              Classic and seasonal éclairs glazed to perfection by Sofia — the heart of our french eclair choux pastry bakery.
            </p>
          </Link>
          <Link href="/classic-choux-pastry-delights-weston-fl/" className="card-cream hover:border-teal-400 transition-colors group text-center">
            <h2 className="font-serif text-lg text-plum-900 mb-2 group-hover:text-teal-700 transition-colors">
              Choux Pastry Delights
            </h2>
            <p className="text-plum-700 text-sm leading-relaxed">
              Cream puffs, Paris-Brest, and more — <Link href="/classic-choux-pastry-delights-weston-fl/" className="text-teal-600 hover:underline">Weston French bakery</Link> classics done with care.
            </p>
          </Link>
          <Link href="/custom-french-pastry-orders-weston-fl/" className="card-cream hover:border-teal-400 transition-colors group text-center">
            <h2 className="font-serif text-lg text-plum-900 mb-2 group-hover:text-teal-700 transition-colors">
              Custom Orders
            </h2>
            <p className="text-plum-700 text-sm leading-relaxed">
              Bespoke pastry catering for events. The{' '}
              <Link href="/custom-french-pastry-orders-weston-fl/" className="text-teal-600 hover:underline">french eclair choux pastry bakery</Link>{' '}
              that comes to you.
            </p>
          </Link>
        </div>

        <div className="bg-cream-100 border border-cream-200 p-8 text-center">
          <p className="text-teal-600 text-xs tracking-widest uppercase font-semibold mb-3">Visit Us</p>
          <p className="font-serif text-xl text-plum-900 mb-2">{NAP.businessName}</p>
          <p className="text-plum-700 mb-1">{NAP.address}</p>
          <p className="text-plum-700 mb-4">
            <a href={`tel:${NAP.phone}`} className="hover:text-teal-600 transition-colors">{NAP.phone}</a>
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={NAP.orderUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm uppercase tracking-widest">
              Order Online
            </a>
            <Link href="/" className="btn-outline text-sm uppercase tracking-widest">
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
