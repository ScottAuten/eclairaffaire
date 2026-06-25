import Link from 'next/link';
import Image from 'next/image';
import { NAP } from '@/lib/siteConfig';

const SERVICE_LINKS = [
  { href: '/artisan-french-eclairs-weston-fl/', label: 'Artisan French Éclairs' },
  { href: '/classic-choux-pastry-delights-weston-fl/', label: 'Choux Pastry Delights' },
  { href: '/custom-french-pastry-orders-weston-fl/', label: 'Custom Pastry Orders' },
];

const GEO_LINKS = [
  { href: '/weston-fl-french-pastry-bakery/', label: 'Weston FL' },
  { href: '/sunrise-fl-french-pastry-bakery/', label: 'Sunrise FL' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="bg-plum-950 text-cream-200">
      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="mb-4">
            <Image
              src="/images/eclair-affaire-logo.png"
              alt="Éclair Affaire Weston"
              width={80}
              height={58}
              unoptimized
              className="object-contain brightness-0 invert opacity-80"
            />
          </div>
          <address className="not-italic text-sm leading-relaxed text-cream-300 space-y-1">
            <p className="font-semibold text-cream-100">{NAP.businessName}</p>
            <p>{NAP.address}</p>
            <p>
              <a href={`tel:${NAP.phone}`} className="hover:text-teal-300 transition-colors">
                {NAP.phone}
              </a>
            </p>
          </address>
          <div className="mt-4">
            <a
              href={NAP.orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold px-4 py-2 tracking-widest uppercase transition-colors"
            >
              Order Online
            </a>
          </div>
        </div>

        <div>
          <p className="text-teal-400 text-xs tracking-widest uppercase mb-4 font-semibold">Our Pastries</p>
          <ul className="space-y-2">
            {SERVICE_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-cream-300 hover:text-teal-300 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-teal-400 text-xs tracking-widest uppercase mb-4 font-semibold">Hours</p>
          <ul className="space-y-2">
            <li className="text-sm">
              <span className="text-cream-100">Mon – Wed, Sunday</span>
              <br />
              <span className="text-cream-300">9AM – 6PM</span>
            </li>
            <li className="text-sm">
              <span className="text-cream-100">Thu – Saturday</span>
              <br />
              <span className="text-cream-300">9AM – 7PM</span>
            </li>
          </ul>
          <p className="mt-4 text-xs text-cream-300 leading-relaxed">
            Dine-in · Curbside · No-contact delivery
          </p>
        </div>

        <div>
          <p className="text-teal-400 text-xs tracking-widest uppercase mb-4 font-semibold">Service Areas</p>
          <ul className="space-y-2">
            {GEO_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-cream-300 hover:text-teal-300 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-1 text-xs text-cream-300 leading-relaxed">
            <p>Women-owned · LGBTQ+ friendly</p>
            <p className="text-teal-400">★ 4.8 / 364 Google reviews</p>
          </div>
        </div>
      </div>

      <div className="border-t border-plum-800 py-5">
        <p className="text-center text-xs text-cream-300 tracking-wide">
          © {year} {NAP.businessName} · 1150 Weston Rd, Weston, FL 33326 · {NAP.phone}
        </p>
      </div>
    </footer>
  );
}
