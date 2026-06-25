import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { NAP } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: `Are French Éclairs Gluten-Free? | ${NAP.businessName}`,
  description:
    'Traditional French éclairs contain gluten. Learn about the ingredients in choux pastry and contact Éclair Affaire Weston at (954) 225-1740 about your dietary needs.',
  alternates: { canonical: `${NAP.siteUrl}/are-french-eclairs-gluten-free/` },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [{ '@type': 'Question', name: 'Are French éclairs gluten-free?', acceptedAnswer: { '@type': 'Answer', text: 'No, traditional French éclairs are not gluten-free. Choux pastry dough is made with wheat flour. Guests with gluten sensitivities should contact Éclair Affaire Weston at (954) 225-1740 before visiting.' } }],
};

export default function GlutenFreePage() {
  return (
    <>
      <JsonLd data={schema} />
      <section className="bg-plum-900 py-16 px-6 text-center">
        <p className="text-teal-300 text-xs tracking-[0.35em] uppercase mb-4 font-semibold">Dietary Information</p>
        <h1 className="font-serif text-4xl md:text-5xl text-white leading-tight mb-4">
          Are French Éclairs Gluten-Free?
        </h1>
        <div className="w-16 h-0.5 bg-teal-400 mx-auto" />
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 prose-elegant">
        <p>
          Traditional French éclairs are <strong>not gluten-free</strong>. The choux pastry shell —
          the foundation of every éclair — is made from wheat flour, which contains gluten. This is
          fundamental to the recipe: the gluten structure in the flour is what allows the pastry to
          puff and maintain its shape during baking.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">What Contains Gluten in an Éclair?</h2>
        <p>
          In a classic éclair, the primary source of gluten is the choux pastry shell itself. The
          filling (pastry cream) and the glaze are typically gluten-free, though this can vary
          depending on the specific flavors and preparations used. At Éclair Affaire, we prepare
          our pastries in an environment where gluten-containing ingredients are regularly in use.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">Guests with Dietary Restrictions</h2>
        <p>
          If you have celiac disease, a gluten sensitivity, or other dietary restrictions, we encourage
          you to call us directly at{' '}
          <a href={`tel:${NAP.phone}`} className="text-teal-600 hover:underline">{NAP.phone}</a>{' '}
          before your visit so we can discuss what options may be available and inform you about
          our kitchen environment. We want every guest to enjoy their experience at Éclair Affaire
          safely.
        </p>
        <p>
          While we cannot guarantee a gluten-free environment, we are transparent about our
          ingredients and happy to discuss your needs directly. Our{' '}
          <Link href="/custom-french-pastry-orders-weston-fl/" className="text-teal-600 hover:underline">
            custom order service
          </Link>{' '}
          may also allow us to explore alternative preparations for private events — please inquire.
        </p>

        <h2 className="font-serif text-2xl text-plum-900 mt-8 mb-3">What We Can Offer</h2>
        <p>
          Our full menu extends well beyond éclairs. Many of our brunch items and light bites
          may accommodate different dietary needs. Call us at {NAP.phone} or visit our Weston
          café to explore options with our team.
        </p>

        <div className="bg-cream-100 border border-cream-200 p-6 mt-8">
          <p className="font-serif text-lg text-plum-900 mb-2">Questions About Allergens?</p>
          <p className="text-plum-700 text-sm mb-4">Call us directly — we are happy to help.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={`tel:${NAP.phone}`} className="btn-primary text-sm uppercase tracking-widest">{NAP.phone}</a>
            <Link href="/faq-french-eclairs-choux-pastry-bakery/" className="btn-outline text-sm uppercase tracking-widest">All FAQs</Link>
          </div>
        </div>
      </section>
    </>
  );
}
