import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import { NAP } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: `Contact | ${NAP.businessName}`,
  description:
    'Contact Éclair Affaire Weston for general inquiries, custom orders, catering requests, or event bookings. Visit us at 1150 Weston Rd, Weston, FL 33326 or call (954) 225-1740.',
  alternates: { canonical: NAP.siteUrl + '/contact/' },
};

const CONTACT_PAGE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: `Contact ${NAP.businessName}`,
  url: NAP.siteUrl + '/contact/',
  mainEntity: {
    '@type': 'LocalBusiness',
    name: NAP.businessName,
    telephone: '+19542251740',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1150 Weston Rd',
      addressLocality: 'Weston',
      addressRegion: 'FL',
      postalCode: '33326',
      addressCountry: 'US',
    },
  },
};

const SUBJECT_OPTIONS = [
  'General Inquiry',
  'Custom Order',
  'Catering Request',
  'Event Booking',
  'Other',
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={CONTACT_PAGE_SCHEMA} />

      {/* ── Page Header ── */}
      <section className="bg-plum-900 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-teal-400 text-xs tracking-[0.3em] uppercase font-semibold mb-3">
            We&apos;d Love to Hear from You
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-cream-100 leading-tight mb-4">
            Get in Touch with Éclair Affaire Weston
          </h1>
          <div className="w-16 h-0.5 bg-teal-400 mx-auto" />
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* ── Contact Form ── */}
        <div>
          <p className="text-teal-600 text-xs tracking-[0.3em] uppercase font-semibold mb-3">Send a Message</p>
          <h2 className="section-heading mb-2">Contact Form</h2>
          <div className="teal-rule-left mb-6" />
          {/* Form action is a placeholder — will be replaced by Contact Form 7 on WP conversion */}
          <form action="#" className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-plum-800 mb-1.5">
                Name <span className="text-teal-600">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-cream-200 bg-cream-50 px-4 py-3 text-plum-900 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-plum-800 mb-1.5">
                Email <span className="text-teal-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-cream-200 bg-cream-50 px-4 py-3 text-plum-900 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-plum-800 mb-1.5">
                Phone{' '}
                <span className="text-plum-300 text-xs font-normal">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full border border-cream-200 bg-cream-50 px-4 py-3 text-plum-900 text-sm focus:outline-none focus:border-teal-500 transition-colors"
                placeholder="(954) 000-0000"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-plum-800 mb-1.5">
                Subject <span className="text-teal-600">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                required
                defaultValue=""
                className="w-full border border-cream-200 bg-cream-50 px-4 py-3 text-plum-900 text-sm focus:outline-none focus:border-teal-500 transition-colors"
              >
                <option value="" disabled>Select a subject…</option>
                {SUBJECT_OPTIONS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-plum-800 mb-1.5">
                Message <span className="text-teal-600">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full border border-cream-200 bg-cream-50 px-4 py-3 text-plum-900 text-sm focus:outline-none focus:border-teal-500 transition-colors resize-none"
                placeholder="Tell us how we can help…"
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full text-sm uppercase tracking-widest"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* ── NAP / Location Block ── */}
        <div>
          <p className="text-teal-600 text-xs tracking-[0.3em] uppercase font-semibold mb-3">Visit or Call Us</p>
          <h2 className="section-heading mb-2">Our Location &amp; Hours</h2>
          <div className="teal-rule-left mb-8" />

          <div className="space-y-8">
            <div>
              <p className="text-xs tracking-widest uppercase font-semibold text-teal-600 mb-2">Address</p>
              <address className="not-italic leading-relaxed">
                <p className="font-semibold text-plum-900 mb-1">{NAP.businessName}</p>
                <a
                  href="https://maps.google.com/?q=1150+Weston+Rd,+Weston,+FL+33326"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 hover:text-teal-500 transition-colors underline underline-offset-2 text-sm"
                >
                  {NAP.address}
                </a>
              </address>
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase font-semibold text-teal-600 mb-2">Phone</p>
              <a
                href="tel:+19542251740"
                className="text-plum-900 hover:text-teal-600 transition-colors font-semibold text-lg"
              >
                {NAP.phone}
              </a>
            </div>

            <div>
              <p className="text-xs tracking-widest uppercase font-semibold text-teal-600 mb-3">Hours</p>
              <div className="space-y-2 text-sm text-plum-800">
                <div className="flex justify-between">
                  <span>Monday – Wednesday</span>
                  <span className="font-semibold">9AM – 6PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Thursday – Saturday</span>
                  <span className="font-semibold">9AM – 7PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">9AM – 6PM</span>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=1150+Weston+Rd,+Weston,+FL+33326"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block text-sm uppercase tracking-widest"
            >
              Get Directions →
            </a>

            <div className="border-t border-cream-200 pt-6">
              <p className="text-sm text-plum-700 mb-4">
                Ready to order? Skip the line and order online through our Square store:
              </p>
              <a
                href={NAP.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block text-sm uppercase tracking-widest"
              >
                Order Online
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
