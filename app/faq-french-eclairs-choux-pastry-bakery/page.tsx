import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { NAP } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: `FAQ — French Éclairs & Choux Pastry Bakery in Weston, FL | ${NAP.businessName}`,
  description:
    'Answers to your most common questions about French éclairs and choux pastry — from what they are to how to store them. Éclair Affaire Weston, FL.',
  alternates: { canonical: `${NAP.siteUrl}/faq-french-eclairs-choux-pastry-bakery/` },
};

const FAQS = [
  {
    q: 'What are French éclairs?',
    a: 'A French éclair is an elongated pastry made from choux dough, filled with pastry cream, and topped with a mirror glaze or fondant. The name means "lightning" in French — referencing how quickly they disappear.',
    href: '/what-are-french-eclairs/',
  },
  {
    q: 'How is choux pastry made?',
    a: 'Choux pastry is a cooked dough made from water, butter, flour, and eggs. The high moisture content creates steam in the oven, puffing the pastry into a hollow shell ideal for fillings.',
    href: '/how-is-choux-pastry-made/',
  },
  {
    q: 'What are the best French éclairs in Weston, FL?',
    a: 'Éclair Affaire Weston is consistently rated the top French éclair destination in Weston and Broward County — 4.8 stars on Google across 364 reviews.',
    href: '/best-french-eclairs-in-weston-fl/',
  },
  {
    q: 'Can I order custom French pastries for events?',
    a: 'Yes. We create bespoke éclair and choux pastry arrangements for weddings, birthdays, corporate events, and more. Contact us at least one week in advance.',
    href: '/can-i-order-custom-french-pastries/',
  },
  {
    q: 'Are French éclairs gluten-free?',
    a: 'Traditional éclairs are not gluten-free as choux dough contains flour. Please contact us at (954) 225-1740 to discuss allergen requirements before visiting.',
    href: '/are-french-eclairs-gluten-free/',
  },
  {
    q: 'How long do French éclairs last?',
    a: 'Filled éclairs are best consumed the day they are made. Unfilled shells can last 1–2 days in an airtight container. At Éclair Affaire, everything is baked fresh daily for peak quality.',
    href: '/how-long-do-french-eclairs-last/',
  },
  {
    q: 'What fillings are used in French éclairs?',
    a: 'Classic fillings include vanilla bean pastry cream, chocolate pastry cream, coffee cream, and praline mousseline. Sofia also creates seasonal and savory variations.',
    href: '/what-fills-are-used-in-french-eclairs/',
  },
  {
    q: 'Can I freeze French éclairs?',
    a: 'Unfilled shells can be frozen for up to 1 month and re-crisped in the oven. Filled, glazed éclairs do not freeze well — the cream and glaze suffer significantly. Always best fresh.',
    href: '/can-i-freeze-french-eclairs/',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function FaqHubPage() {
  return (
    <>
      <JsonLd data={schema} />

      <section className="bg-plum-900 py-16 px-6 text-center">
        <p className="text-teal-300 text-xs tracking-[0.35em] uppercase mb-4 font-semibold">Knowledge Centre</p>
        <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
          French Éclair &amp; Choux Pastry Bakery — Your Questions Answered
        </h1>
        <div className="w-16 h-0.5 bg-teal-400 mx-auto" />
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-4">
          {FAQS.map((faq) => (
            <Link
              key={faq.href}
              href={faq.href}
              className="block bg-cream-50 border border-cream-200 p-6 hover:border-teal-400 hover:bg-cream-100 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <span className="text-teal-500 text-xl flex-shrink-0 mt-0.5">Q.</span>
                <div>
                  <h2 className="font-serif text-lg text-plum-900 mb-2 group-hover:text-teal-700 transition-colors">
                    {faq.q}
                  </h2>
                  <p className="text-plum-700 text-sm leading-relaxed mb-2">{faq.a}</p>
                  <span className="text-teal-500 text-xs tracking-widest uppercase">Read More →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="bg-cream-100 border border-cream-200 p-8 mt-10 text-center">
          <p className="font-serif text-xl text-plum-900 mb-2">Still Have Questions?</p>
          <p className="text-plum-700 text-sm mb-4">Call us or stop in — we love talking pastry.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${NAP.phone}`} className="btn-primary text-sm uppercase tracking-widest">
              {NAP.phone}
            </a>
            <a href={NAP.orderUrl} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm uppercase tracking-widest">
              Order Online
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
