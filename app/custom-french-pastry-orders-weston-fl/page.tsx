import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { NAP } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: `Custom French Pastry Orders & Catering in Weston, FL | ${NAP.businessName}`,
  description:
    'Custom French pastry orders and event catering by Éclair Affaire Weston. Weddings, birthdays, corporate events — artisan éclairs and choux pastry designed by Sofia. Call or order online.',
  alternates: { canonical: `${NAP.siteUrl}/custom-french-pastry-orders-weston-fl/` },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Custom French Pastry Orders & Catering in Weston, FL',
  provider: { '@type': 'LocalBusiness', name: NAP.businessName },
};

export default function CustomOrdersPage() {
  return (
    <>
      <JsonLd data={schema} />

      <section className="relative h-[45vh] min-h-[320px] overflow-hidden">
        <Image
          src="/images/exlair-affaire-32.png"
          alt="Elegant catering — savory cream puffs with salmon and microgreens"
          fill
          unoptimized
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-plum-900/70" />
        <div className="relative h-full flex items-center justify-center text-center px-6">
          <div>
            <p className="text-teal-300 text-xs tracking-[0.35em] uppercase mb-4 font-semibold">Personalized &amp; Bespoke</p>
            <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
              Custom French Pastry Orders &amp; Catering in Weston, FL
            </h1>
            <div className="w-16 h-0.5 bg-teal-400 mx-auto" />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 prose-elegant">
        <p>
          Some occasions call for something genuinely special. At Éclair Affaire Weston, George and
          Sofia bring the same family care and artisan craftsmanship to custom orders that they bring
          to every éclair behind the counter. Whether you are planning a wedding, a milestone birthday,
          a baby shower, or a corporate event, our bespoke French pastry arrangements will make the
          moment unforgettable.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">What Custom Orders at Éclair Affaire Include</h2>
        <p>
          Every custom order begins with a conversation. You tell us your vision — the occasion, the
          guest count, the flavor preferences, any dietary requirements — and Sofia designs a pastry
          arrangement that fits. From intimate gatherings of 10 to corporate events for hundreds,
          we scale without compromising the artisan quality that defines our french eclair choux
          pastry bakery.
        </p>
        <p>
          Custom orders can include:
        </p>
        <ul className="list-none space-y-2 pl-0">
          {[
            'Curated éclair collections in custom flavors and seasonal glazes',
            'Cream puff towers and choux pyramids for weddings and celebrations',
            'Savory choux bites and mini éclairs for cocktail hours and corporate events',
            'Mixed sweet and savory platters for brunch and afternoon gatherings',
            'Individually boxed pastry gifts for client appreciation and corporate gifting',
            'Themed arrangements with custom color glazes for themed events',
          ].map((item) => (
            <li key={item} className="flex gap-3 text-plum-700 text-base">
              <span className="text-teal-500 flex-shrink-0">✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 gap-4 my-8">
          <div className="relative h-64 overflow-hidden">
            <Image src="/images/eclaire-affaire-13.jpg" alt="Catering display — pistachio cannoli and cream puffs" fill unoptimized className="object-cover" />
          </div>
          <div className="relative h-64 overflow-hidden">
            <Image src="/images/eclaire-affaire-110.jpg" alt="Premium catering — caviar blini plating" fill unoptimized className="object-cover" />
          </div>
        </div>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">Weddings &amp; Special Celebrations</h2>
        <p>
          A French pastry display is an elegant alternative — or complement — to a traditional wedding
          cake. Sofia creates stunning multi-tier choux towers, éclair collections in the wedding color
          palette, and cream puff pyramids that photograph beautifully and taste even better. Our clients
          consistently tell us that the pastry display becomes one of the most talked-about elements
          of their reception.
        </p>
        <p>
          For birthday celebrations, our custom éclair boxes — each filled with a selection of the
          guest of honor&apos;s preferred flavors, personalized glazes, and elegant packaging — make
          the kind of gift that people remember long after the candles have been blown out.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">Corporate Events &amp; Client Gifting</h2>
        <p>
          Éclair Affaire serves corporate clients throughout Broward County, providing pastry catering
          for launches, team events, client meetings, and appreciation gifts. The association between
          your brand and the elegance of handcrafted French pastry makes a lasting impression — and
          our{' '}
          <Link href="/weston-fl-french-pastry-bakery/" className="text-teal-600 hover:underline">french eclair choux pastry bakery</Link>{' '}
          can accommodate large-volume orders with sufficient advance notice.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">How to Place a Custom Order</h2>
        <p>
          We recommend contacting us at least one week in advance for most custom orders, and
          two to three weeks for large events or weddings. Call us at{' '}
          <a href={`tel:${NAP.phone}`} className="text-teal-600 hover:underline">{NAP.phone}</a>{' '}
          to discuss your requirements, or place a preliminary order through our online store and
          include your event details in the notes.
        </p>
        <p>
          For an estimate on your order, we are happy to discuss options during our normal café hours.
          George and Sofia take pride in making every custom arrangement a personal experience — not
          a transaction.{' '}
          <Link href="/sunrise-fl-french-pastry-bakery/" className="text-teal-600 hover:underline">french eclair choux pastry bakery</Link>{' '}
          clients from across Broward County are welcome to visit our Weston location to sample
          flavors before committing to a custom order.
        </p>

        <div className="bg-teal-900 text-cream-100 p-8 mt-10 text-center">
          <p className="text-teal-300 text-xs tracking-widest uppercase font-semibold mb-3">Ready to Order?</p>
          <p className="font-serif text-xl mb-2">Let&apos;s Create Something Exceptional Together</p>
          <p className="text-cream-300 text-sm mb-4">
            Call us at <a href={`tel:${NAP.phone}`} className="text-teal-300 hover:underline">{NAP.phone}</a>{' '}
            or order online to begin your custom pastry journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={NAP.orderUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm uppercase tracking-widest">
              Order Online
            </a>
            <a href={`tel:${NAP.phone}`} className="inline-block border-2 border-teal-400 text-teal-300 hover:bg-teal-400 hover:text-plum-900 font-semibold px-6 py-3 tracking-widest text-sm uppercase transition-colors">
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
