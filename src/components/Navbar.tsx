'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import CitySwitcher from './CitySwitcher';
import { useCity } from './CityProvider';
import { CloseIcon, MenuIcon } from './Icons';

const LINKS = [
  { href: '#menu', label: 'Menu' },
  { href: '#cerita', label: 'Cerita Kami' },
  { href: '#outlet', label: 'Outlet' },
  { href: '#frozen', label: 'Frozen' },
  { href: '#pesanan-event', label: 'Pesanan Event' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { setDrawerOpen } = useCity();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-40 transition-colors duration-300',
        scrolled ? 'bg-cream shadow-warm' : 'bg-transparent',
      ].join(' ')}
    >
      <nav
        aria-label="Navigasi utama"
        className="shell flex h-[60px] items-center justify-between gap-4 lg:h-[72px]"
      >
        {/* Kiri: tautan (desktop) / hamburger (mobile) */}
        <div className="flex flex-1 items-center gap-6">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            className="grid h-11 w-11 place-items-center rounded-full text-cocoa lg:hidden"
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
          <ul className="hidden items-center gap-6 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-display text-[1.0625rem] text-cocoa"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Tengah: logo */}
        <Link href="/" aria-label="Beranda HOPPAO" className="shrink-0">
          <Image
            src="/assets/logo-nobg.png"
            alt="Logo HOPPAO: bakpao garis cokelat dengan wordmark HOPPAO"
            width={120}
            height={120}
            priority
            className="h-[44px] w-auto lg:h-[56px]"
          />
        </Link>

        {/* Kanan: kota + pesan */}
        <div className="flex flex-1 items-center justify-end gap-3">
          <CitySwitcher />
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="btn btn-outline-cocoa hidden rounded-[14px] font-display sm:inline-flex"
          >
            Pesan Sekarang
          </button>
        </div>
      </nav>

      {/* Panel mobile */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-cocoa/10 bg-cream px-5 pb-6 pt-2 shadow-warm lg:hidden"
      >
        <ul className="flex flex-col">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex min-h-[52px] items-center border-b border-cocoa/10 font-display text-[1.125rem] text-cocoa"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => {
            setOpen(false);
            setDrawerOpen(true);
          }}
          className="btn btn-outline-cocoa mt-4 w-full rounded-[14px] font-display"
        >
          Pesan Sekarang
        </button>
      </div>
    </header>
  );
}
