import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import { NAP, LOCAL_BUSINESS_SCHEMA } from '@/lib/siteConfig';

export const metadata: Metadata = {
  title: `Discover the Finest French Éclairs & Choux Pastry Bakery in Weston, FL | ${NAP.businessName}`,
  description:
    'Éclair Affaire Weston — the premier French éclair and choux pastry bakery in Weston, FL. Family-run, women-led. Handcrafted Parisian pastries in an elegant Art Deco café. 4.8★ / 364 Google reviews.',
  alternates: {
    canonical: NAP.siteUrl + '/',
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={LOCAL_BUSINESS_SCHEMA} />

      {/* ── Hero ── */}
      <section className="relative h-[85vh] min-h-[560px] overflow-hidden">
        <Image
          src="/images/eclair-affaire-store.jpg"
          alt="Éclair Affaire Weston interior — Art Deco café with pink and navy velvet armchairs"
          fill
          unoptimized
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-plum-950/90 via-plum-900/70 to-transparent" />
        <div className="relative h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="max-w-xl">
              <p className="text-teal-300 text-xs tracking-[0.35em] uppercase mb-5 font-semibold">
                Weston · Florida
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-5">
                Discover the Finest French Éclairs &amp; Choux Pastry Bakery in Weston, FL
              </h1>
              <div className="w-16 h-0.5 bg-teal-400 mb-5" />
              <p className="text-cream-200 text-lg leading-relaxed mb-4">
                Where Paris meets Miami. Handcrafted éclairs, delicate choux pastry, and a café that
                transports you — in the heart of Weston, FL.
              </p>
              <p className="text-teal-300 text-sm mb-8">
                ★★★★★ 4.8 / 364 Google reviews &nbsp;·&nbsp; Women-owned &nbsp;·&nbsp; LGBTQ+ friendly
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={NAP.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm uppercase tracking-widest"
                >
                  Order Online
                </a>
                <Link href="#location" className="btn-outline text-sm uppercase tracking-widest border-teal-400 text-teal-300 hover:bg-teal-500 hover:text-white hover:border-teal-500">
                  Visit Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tagline Strip ── */}
      <section className="bg-teal-600 py-4">
        <p className="text-center text-white text-sm font-semibold tracking-widest uppercase">
          Dine-in &nbsp;·&nbsp; Curbside Pickup &nbsp;·&nbsp; No-Contact Delivery &nbsp;·&nbsp; Custom Orders Welcome
        </p>
      </section>

      {/* ── About / Family Story ── */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <div className="prose-elegant order-2 md:order-1">
          <p className="text-teal-600 text-xs tracking-[0.3em] uppercase font-semibold mb-3">Our Story</p>
          <h2 className="section-heading mb-2">Paris Meets Miami</h2>
          <div className="teal-rule-left" />
          <p>
            Éclair Affaire Weston is the creation of Sofia Chatzivasiloglou — a passionate pastry chef
            whose reverence for French patisserie brought a genuine taste of Paris to Broward County.
            Built alongside her husband George, this family-run, women-led bakery blends Sofia&apos;s artisan
            craft with a deeply personal vision of what a neighborhood café can be.
          </p>
          <p>
            Every éclair and choux pastry that leaves Sofia&apos;s kitchen carries the same precision
            and soul that you would find in the finest boulangeries of Paris — yet infused with the
            warmth and vibrancy that makes Weston home. Guests come for a single éclair and stay for
            hours: lingering over coffee, sharing pastry with friends, and slowing down in a space
            designed for real connection.
          </p>
          <p>
            The menu spans light bites, brunch, desserts, and exceptional coffee alongside the
            signature éclair collection — all baked fresh daily in small batches, never compromised.
          </p>
          <p className="text-plum-700 font-serif text-lg italic">
            "A family affair, a Parisian dream, a Weston institution."
          </p>
        </div>
        <div className="order-1 md:order-2 relative">
          <Image
            src="/images/sofia-chatzivasiloglou-792x1024.jpg"
            alt="Sofia Chatzivasiloglou — founder and pastry chef of Éclair Affaire Weston"
            width={792}
            height={1024}
            unoptimized
            className="object-cover w-full max-h-[520px] object-top"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-plum-900/85 text-cream-100 px-4 py-3 text-sm">
            <p className="font-semibold">Sofia Chatzivasiloglou</p>
            <p className="text-teal-300 text-xs tracking-wide">Founder &amp; Pastry Chef</p>
          </div>
        </div>
      </section>

      {/* ── Product Showcase ── */}
      <section className="bg-cream-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-teal-600 text-xs tracking-[0.3em] uppercase font-semibold mb-3">Handcrafted Daily</p>
            <h2 className="section-heading">Artisan Pastry. No Shortcuts.</h2>
            <div className="teal-rule" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden group">
              <Image
                src="/images/exlair-affaire-30.png"
                alt="Rose-decorated chocolate éclairs — Éclair Affaire Weston signature"
                width={936}
                height={1017}
                unoptimized
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 bg-plum-900/80 px-4 py-3">
                <p className="text-cream-100 font-serif text-sm">Signature Éclairs</p>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <Image
                src="/images/66.jpg"
                alt="Lemon mirror-glaze éclair with snowflake decoration"
                width={578}
                height={654}
                unoptimized
                className="w-full h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 bg-plum-900/80 px-4 py-3">
                <p className="text-cream-100 font-serif text-sm">Sweet Éclairs</p>
              </div>
            </div>
            <div className="relative overflow-hidden group">
              <Image
                src="/images/4-1.jpg"
                alt="Savory prosciutto and pistachio éclair"
                width={578}
                height={654}
                unoptimized
                className="w-full h-72 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 bg-plum-900/80 px-4 py-3">
                <p className="text-cream-100 font-serif text-sm">Savory Éclairs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-teal-600 text-xs tracking-[0.3em] uppercase font-semibold mb-3">What We Offer</p>
          <h2 className="section-heading">Our Signature Pastry Services</h2>
          <div className="teal-rule" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/artisan-french-eclairs-weston-fl/" className="group card-dark hover:bg-plum-800 transition-colors">
            <div className="mb-4 overflow-hidden h-40">
              <Image
                src="/images/exlair-affaire-31.png"
                alt="Baker presenting a handcrafted French éclair"
                width={936}
                height={1017}
                unoptimized
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-serif text-xl text-cream-100 mb-3 group-hover:text-teal-300 transition-colors">
              Artisan French Éclairs
            </h3>
            <p className="text-cream-300 text-sm leading-relaxed mb-4">
              Each éclair is a testament to classical French pastry technique — light choux shells,
              silky cream fillings, and mirror glazes perfected by Sofia. Discover the rotating
              seasonal collection.
            </p>
            <span className="text-teal-400 text-sm tracking-widest uppercase">
              Explore →
            </span>
          </Link>

          <Link href="/classic-choux-pastry-delights-weston-fl/" className="group card-dark hover:bg-plum-800 transition-colors">
            <div className="mb-4 overflow-hidden h-40">
              <Image
                src="/images/eclair-affaire-bakery-2.jpg"
                alt="Full menu spread — éclairs, cream puffs, salads, and brunch at Éclair Affaire"
                width={1278}
                height={852}
                unoptimized
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-serif text-xl text-cream-100 mb-3 group-hover:text-teal-300 transition-colors">
              Classic Choux Pastry
            </h3>
            <p className="text-cream-300 text-sm leading-relaxed mb-4">
              From cream puffs to Paris-Brest, Sofia&apos;s choux collection honors centuries of French
              baking tradition. Baked fresh every morning, never compromised on quality or texture.
            </p>
            <span className="text-teal-400 text-sm tracking-widest uppercase">
              Explore →
            </span>
          </Link>

          <Link href="/custom-french-pastry-orders-weston-fl/" className="group card-dark hover:bg-plum-800 transition-colors">
            <div className="mb-4 overflow-hidden h-40">
              <Image
                src="/images/exlair-affaire-32.png"
                alt="Elegant savory catering — salmon cream puffs for events"
                width={936}
                height={1017}
                unoptimized
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-serif text-xl text-cream-100 mb-3 group-hover:text-teal-300 transition-colors">
              Custom Orders &amp; Catering
            </h3>
            <p className="text-cream-300 text-sm leading-relaxed mb-4">
              Elevate any occasion with a bespoke French pastry arrangement. Weddings, birthdays,
              corporate gatherings — George and Sofia bring the same family care to every custom order.
            </p>
            <span className="text-teal-400 text-sm tracking-widest uppercase">
              Explore →
            </span>
          </Link>
        </div>
      </section>

      {/* ── Brunch Lifestyle Banner ── */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/eclaire-affaire-11.jpg"
          alt="Brunch at Éclair Affaire Weston — pancakes, cocktails, and croissants"
          width={800}
          height={1200}
          unoptimized
          className="w-full h-[50vh] object-cover object-center"
        />
        <div className="absolute inset-0 bg-plum-900/75" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="text-teal-300 text-xs tracking-[0.3em] uppercase font-semibold mb-4">More Than Pastry</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4 leading-tight">
              A Destination Café Experience
            </h2>
            <p className="text-cream-200 max-w-xl mx-auto mb-6 leading-relaxed">
              Our guests spend 30 minutes to 3½ hours with us. Brunch, coffee, desserts, light bites —
              Éclair Affaire is the kind of place you come back to again and again.
            </p>
            <Link href="#location" className="btn-primary text-sm uppercase tracking-widest">
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-cream-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-teal-600 text-xs tracking-[0.3em] uppercase font-semibold mb-3">The Éclair Affaire Difference</p>
            <h2 className="section-heading">Why Weston Chooses Us</h2>
            <div className="teal-rule" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-8">
              {[
                {
                  icon: '✦',
                  title: 'Authentic French Technique',
                  body: 'Sofia trained in the classical French pastry tradition. Every choux shell, every pastry cream, every mirror glaze reflects the discipline of a true artisan — not a shortcut in sight.',
                },
                {
                  icon: '❧',
                  title: 'Baked Fresh Every Morning',
                  body: 'Nothing leaves the kitchen that was not made that day. Small-batch baking means higher quality, more seasonal variety, and pastries that taste the way they should.',
                },
                {
                  icon: '◈',
                  title: 'Family-Run, Women-Led',
                  body: 'George and Sofia built Éclair Affaire together — a husband-and-wife team where Sofia leads the kitchen and the creative vision. When you visit, you are supporting a real family\'s passion project.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="text-teal-500 text-2xl flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="font-serif text-lg text-plum-900 mb-2">{item.title}</h3>
                    <p className="text-plum-700 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-8">
              {[
                {
                  icon: '★',
                  title: '4.8 Stars · 364 Google Reviews',
                  body: 'Weston and Broward County have voted with their feet — and their reviews. Éclair Affaire earns this rating every single day through consistency, quality, and genuine hospitality.',
                },
                {
                  icon: '◇',
                  title: 'Welcoming to Everyone',
                  body: 'Proudly women-owned and LGBTQ+-friendly. Éclair Affaire is a space where everyone belongs — a café designed for joy, not just pastry.',
                },
                {
                  icon: '✿',
                  title: 'Custom Orders for Every Occasion',
                  body: 'From intimate birthday gatherings to corporate events, Sofia designs bespoke pastry arrangements with the same care she brings to every éclair behind the counter.',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="text-teal-500 text-2xl flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <h3 className="font-serif text-lg text-plum-900 mb-2">{item.title}</h3>
                    <p className="text-plum-700 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews Banner ── */}
      <section className="bg-teal-900 py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-teal-300 tracking-widest text-xs uppercase font-semibold mb-6">What Our Guests Say</p>
          <blockquote className="font-serif text-2xl md:text-3xl text-cream-100 italic leading-relaxed mb-6">
            "The most exquisite éclairs I have ever had outside of Paris. Éclair Affaire is a genuine
            treasure in Weston — the atmosphere, the quality, and the warmth are unmatched."
          </blockquote>
          <p className="text-teal-400 text-sm tracking-wide mb-10">
            ★★★★★ &nbsp;·&nbsp; Verified Google Review
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={NAP.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm uppercase tracking-widest"
            >
              Order Online
            </a>
            <Link href="/artisan-french-eclairs-weston-fl/" className="inline-block border-2 border-teal-400 text-teal-300 hover:bg-teal-400 hover:text-plum-900 font-semibold px-6 py-3 tracking-widest text-sm uppercase transition-colors">
              See Our Éclairs
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ Teaser ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <p className="text-teal-600 text-xs tracking-[0.3em] uppercase font-semibold mb-3">Learn More</p>
          <h2 className="section-heading">Common Questions About Our French Éclairs &amp; Choux Pastry Bakery</h2>
          <div className="teal-rule" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {[
            { href: '/what-are-french-eclairs/', q: 'What are French éclairs?' },
            { href: '/how-is-choux-pastry-made/', q: 'How is choux pastry made?' },
            { href: '/can-i-order-custom-french-pastries/', q: 'Can I order custom French pastries for events?' },
            { href: '/are-french-eclairs-gluten-free/', q: 'Are French éclairs gluten-free?' },
            { href: '/how-long-do-french-eclairs-last/', q: 'How long do French éclairs last?' },
            { href: '/what-fills-are-used-in-french-eclairs/', q: 'What fillings are used in French éclairs?' },
          ].map(({ href, q }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 p-4 bg-cream-100 border border-cream-200 hover:border-teal-400 hover:bg-cream-50 transition-colors group"
            >
              <span className="text-teal-500 text-lg flex-shrink-0">→</span>
              <span className="text-plum-800 text-sm font-medium group-hover:text-teal-700 transition-colors">{q}</span>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link href="/faq-french-eclairs-choux-pastry-bakery/" className="btn-primary text-sm uppercase tracking-widest">
            View All FAQs
          </Link>
        </div>
      </section>

      {/* ── Location / Hours ── */}
      <section id="location" className="bg-plum-900 py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-teal-400 text-xs tracking-[0.3em] uppercase font-semibold mb-3">Find Us</p>
            <h2 className="font-serif text-3xl text-cream-100 mb-4">Visit Éclair Affaire Weston</h2>
            <div className="w-16 h-0.5 bg-teal-500 mb-6" />
            <address className="not-italic text-cream-200 space-y-3 text-sm leading-relaxed mb-6">
              <p className="font-semibold text-cream-100 text-base">{NAP.businessName}</p>
              <p>{NAP.address}</p>
              <p>
                <a href={`tel:${NAP.phone}`} className="hover:text-teal-300 transition-colors">
                  {NAP.phone}
                </a>
              </p>
            </address>
            <div className="mb-6">
              <p className="text-teal-400 text-xs tracking-widest uppercase mb-3 font-semibold">Hours</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-cream-200">
                  <span>Mon – Wed, Sunday</span>
                  <span className="text-cream-100">9AM – 6PM</span>
                </div>
                <div className="flex justify-between text-cream-200">
                  <span>Thursday – Saturday</span>
                  <span className="text-cream-100">9AM – 7PM</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={NAP.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm uppercase tracking-widest"
              >
                Order Online
              </a>
              <a
                href={`tel:${NAP.phone}`}
                className="inline-block border-2 border-teal-500 text-teal-300 hover:bg-teal-500 hover:text-white font-semibold px-6 py-3 tracking-widest text-sm uppercase transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
          <div className="bg-plum-800 p-8 border border-plum-700">
            <p className="text-teal-400 text-xs tracking-[0.3em] uppercase font-semibold mb-4">Also Serving</p>
            <ul className="space-y-3 text-sm text-cream-200">
              <li>
                <Link href="/weston-fl-french-pastry-bakery/" className="hover:text-teal-300 transition-colors">
                  → French Éclair &amp; Choux Pastry Bakery in Weston FL
                </Link>
              </li>
              <li>
                <Link href="/sunrise-fl-french-pastry-bakery/" className="hover:text-teal-300 transition-colors">
                  → French Pastry Bakery serving Sunrise FL
                </Link>
              </li>
            </ul>
            <div className="mt-8 pt-8 border-t border-plum-700">
              <p className="text-cream-300 text-xs leading-relaxed">
                Located on Weston Road in the heart of Weston, easily accessible from
                Sunrise, Davie, Pembroke Pines, and greater Broward County.
                Curbside pickup available at our storefront.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
