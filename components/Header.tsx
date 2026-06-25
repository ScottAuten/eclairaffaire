'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { NAP } from '@/lib/siteConfig';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/artisan-french-eclairs-weston-fl/', label: 'Artisan Éclairs' },
  { href: '/classic-choux-pastry-delights-weston-fl/', label: 'Choux Pastry' },
  { href: '/custom-french-pastry-orders-weston-fl/', label: 'Custom Orders & Catering' },
  { href: '/faq-french-eclairs-choux-pastry-bakery/', label: 'FAQ' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contact/', label: 'Visit Us' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-plum-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/eclair-affaire-logo-light.png"
            alt="Éclair Affaire Weston"
            width={64}
            height={46}
            unoptimized
            className="object-contain opacity-90 group-hover:opacity-100 transition-opacity"
          />
          <div className="flex flex-col leading-none">
            <span className="text-teal-300 font-serif text-lg tracking-widest uppercase group-hover:text-teal-200 transition-colors">
              Éclair Affaire
            </span>
            <span className="text-cream-200 text-xs tracking-[0.2em] uppercase opacity-70">
              Weston · Florida
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-cream-200 text-sm tracking-wide hover:text-teal-300 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={NAP.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 hover:bg-teal-400 text-white text-sm font-semibold px-4 py-2 tracking-wide transition-colors"
          >
            Order Now
          </a>
        </nav>

        <button
          className="md:hidden text-cream-200 p-3"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-current mb-1.5" />
          <div className="w-5 h-0.5 bg-current mb-1.5" />
          <div className="w-5 h-0.5 bg-current" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-plum-800 border-t border-plum-700 px-4 py-4 flex flex-col gap-3">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-cream-200 text-sm py-1 hover:text-teal-300 transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={NAP.orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 text-white text-sm font-semibold px-4 py-2 text-center mt-1"
          >
            Order Now
          </a>
        </div>
      )}
    </header>
  );
}
