'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  CITIES,
  CITY_KEYS,
  PLATFORM_LOGO,
  PLATFORM_URL,
  SOCIALS,
  WA_TEXT,
  WHATSAPP_LOGO,
  waLink,
} from '@/data/site';
import FooterPao from './FooterPao';

const LINKS = [
  { href: '#menu', label: 'Menu' },
  { href: '#outlet', label: 'Outlet' },
  { href: '#cerita', label: 'Cerita Kami' },
  { href: '#pesanan-event', label: 'Pesanan Event' },
  { href: '#frozen', label: 'Frozen' },
];

/**
 * Kolom asimetris (bukan 4 kolom sama lebar), dengan nomor WhatsApp
 * dibesarkan sebagai pusat perhatian karena itu kanal konversi utama —
 * bukan diperlakukan setara dengan newsletter yang bukan prioritas.
 */
export default function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <footer className="bg-cocoa pt-16 text-cream">
      <div className="shell grid gap-x-10 gap-y-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          {/* Mark monokrom saffron: PNG dipakai sebagai mask agar warnanya murni token brand */}
          <span
            role="img"
            aria-label="Logo HOPPAO"
            className="block h-20 w-[150px] bg-saffron"
            style={{
              WebkitMaskImage: 'url(/assets/logo-nobg.png)',
              maskImage: 'url(/assets/logo-nobg.png)',
              WebkitMaskSize: 'contain',
              maskSize: 'contain',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskPosition: 'left center',
              maskPosition: 'left center',
            }}
          />
          <p className="mt-5 max-w-[26ch] font-display text-[1.25rem] leading-snug text-cream/80">
            Crafted with love, steamed to perfection
          </p>
          <p className="mt-4 text-sm text-cream/50">Yogyakarta · Surabaya</p>
        </div>

        <nav aria-label="Tautan cepat" className="lg:col-span-8 lg:col-start-5">
          <div className="flex flex-wrap gap-x-6 gap-y-2 border-b border-cream/10 pb-10">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="text-[15px] text-cream/75">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="group-label text-cream/50">WhatsApp</p>
              <div className="mt-4 grid grid-cols-2 gap-6">
                {CITY_KEYS.map((k) => {
                  const c = CITIES[k];
                  return (
                    <a
                      key={k}
                      href={waLink(c.whatsappIntl, WA_TEXT.umum(c.label))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <span className="block text-xs uppercase tracking-[0.16em] text-cream/50">
                        {c.label}
                      </span>
                      <span className="mt-1.5 flex items-center gap-2 font-display text-[1.5rem] font-semibold leading-none text-saffron">
                        <Image
                          src={WHATSAPP_LOGO}
                          alt=""
                          width={20}
                          height={20}
                          className="h-5 w-5 shrink-0"
                        />
                        {c.whatsappDisplay}
                      </span>
                    </a>
                  );
                })}
              </div>

              <p className="group-label mt-8 text-cream/50">Tersedia di</p>
              <div className="mt-3 space-y-3">
                {CITY_KEYS.map((k) => {
                  const c = CITIES[k];
                  return (
                    <div key={k}>
                      <span className="block text-xs text-cream/45">{c.label}</span>
                      <ul className="mt-1.5 flex flex-wrap gap-2">
                        {c.platforms.map((p) => (
                          <li key={p}>
                            <a
                              href={PLATFORM_URL[k][p]}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 rounded-full border border-cream/20 py-1.5 pl-1.5 pr-3 text-xs font-bold"
                            >
                              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cream p-1">
                                <Image
                                  src={PLATFORM_LOGO[p]}
                                  alt=""
                                  width={24}
                                  height={24}
                                  className="h-full w-full object-contain"
                                />
                              </span>
                              {p}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="group-label text-cream/50">Kabar HOPPAO</p>
              <form
                className="mt-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <label htmlFor="email-langganan" className="sr-only">
                  Alamat email
                </label>
                <div className="flex gap-2">
                  <input
                    id="email-langganan"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@kamu.com"
                    className="min-h-[44px] w-full min-w-0 rounded-full border-2 border-cream/25 bg-transparent px-4 text-sm text-cream placeholder:text-cream/45 focus:border-saffron"
                  />
                  <button
                    type="submit"
                    className="min-h-[44px] shrink-0 rounded-full bg-saffron px-4 text-sm font-bold text-cocoa"
                  >
                    Kirim
                  </button>
                </div>
                {sent && (
                  <p className="mt-2 text-sm text-saffron" role="status">
                    Terima kasih! Kami kabari lewat email.
                  </p>
                )}
              </form>

              <ul className="mt-5 flex gap-4">
                {SOCIALS.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cream/70"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="shell mt-12 flex flex-col gap-2 border-t border-cream/15 pt-6 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 HOPPAO</p>
        <p>NO PORK · NO LARD</p>
      </div>

      <FooterPao />
    </footer>
  );
}
