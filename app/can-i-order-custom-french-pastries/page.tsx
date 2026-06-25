import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { NAP } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: `Can I Order Custom French Pastries? | ${NAP.businessName}`,
  description:
    'Yes — Éclair Affaire Weston accepts custom French pastry orders for events, weddings, birthdays, and corporate catering. Learn how to place your order.',
  alternates: { canonical: `${NAP.siteUrl}/can-i-order-custom-french-pastries/` },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [{ '@type': 'Question', name: 'Can I order custom French pastries for events?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Éclair Affaire Weston accepts custom pastry orders for weddings, birthdays, corporate events, and more. Contact us at (954) 225-1740 at least one week in advance for most orders.' } }],
};

export default function CustomOrdersFaqPage() {
  return (
    <>
      <JsonLd data={schema} />
      <section className="bg-plum-900 py-16 px-6 text-center">
        <p className="text-teal-300 text-xs tracking-[0.35em] uppercase mb-4 font-semibold">Custom Orders</p>
        <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
          Can I Order Custom French Pastries for Events?
        </h1>
        <div className="w-16 h-0.5 bg-teal-400 mx-auto" />
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 prose-elegant">
        <p>
          Yes — custom French pastry orders are a cornerstone of what we do at Éclair Affaire Weston.
          Whether you are planning a wedding, a milestone birthday, a baby shower, a corporate event,
          or a client appreciation gift, George and Sofia bring the same artisan care to every
          custom arrangement they create.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">What Custom Orders Include</h2>
        <p>Our custom order service can accommodate:</p>
        <ul className="list-none space-y-2 pl-0">
          {[
            'Curated éclair collections in custom flavors, seasonal glazes, and event color palettes',
            'Cream puff towers and choux pyramids for weddings and milestone celebrations',
            'Savory choux platters for cocktail hours and corporate receptions',
            'Individually boxed pastry gifts for client appreciation and team events',
            'Mixed sweet and savory arrangements for brunch and afternoon gatherings',
          ].map((item) => (
            <li key={item} className="flex gap-3 text-plum-700">
              <span className="text-teal-500 flex-shrink-0">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">How to Place a Custom Order</h2>
        <p>
          The best way to start a custom order is to call us at{' '}
          <a href={`tel:${NAP.phone}`} className="text-teal-600 hover:underline">{NAP.phone}</a>{' '}
          during café hours and speak with George or Sofia directly. We will discuss your vision,
          the occasion, your preferred flavors, guest count, and any dietary requirements, then
          provide a quote and timeline.
        </p>
        <p>
          We recommend at least one week&apos;s notice for most orders and two to three weeks for large
          events or weddings. For our full{' '}
          <Link href="/custom-french-pastry-orders-weston-fl/" className="text-teal-600 hover:underline">
            custom French pastry catering service
          </Link>
          , visit the dedicated page for more details.
        </p>

        <div className="bg-teal-900 text-cream-100 p-8 mt-10 text-center">
          <p className="font-serif text-xl mb-2">Ready to Create Something Special?</p>
          <p className="text-cream-300 text-sm mb-4">Call us at <a href={`tel:${NAP.phone}`} className="text-teal-300 hover:underline">{NAP.phone}</a></p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/custom-french-pastry-orders-weston-fl/" className="btn-primary text-sm uppercase tracking-widest">Custom Orders</Link>
            <Link href="/faq-french-eclairs-choux-pastry-bakery/" className="inline-block border-2 border-teal-400 text-teal-300 hover:bg-teal-400 hover:text-plum-900 font-semibold px-6 py-3 tracking-widest text-sm uppercase transition-colors">All FAQs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
