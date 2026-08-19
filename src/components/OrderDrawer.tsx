'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import {
  PLATFORM_LOGO,
  PLATFORM_URL,
  SURABAYA_NOTICE,
  WA_TEXT,
  WHATSAPP_LOGO,
  waLink,
  type Platform,
} from '@/data/site';
import { useCity } from './CityProvider';
import CitySwitcher from './CitySwitcher';
import { ChevronRight, CloseIcon, PinIcon, SnowflakeIcon } from './Icons';

function Row({
  href,
  onClick,
  label,
  logoSrc,
  logoAlt,
  icon,
}: {
  href?: string;
  onClick?: () => void;
  label: string;
  logoSrc?: string;
  logoAlt?: string;
  icon?: React.ReactNode;
}) {
  const inner = (
    <>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-[10px]">
        {icon ??
          (logoSrc && (
            <Image
              src={logoSrc}
              alt={logoAlt ?? ''}
              width={36}
              height={36}
              className="h-full w-full object-contain"
            />
          ))}
      </span>
      <span className="flex-1 text-center text-[15px] font-bold text-cocoa">{label}</span>
      <ChevronRight className="h-5 w-5 shrink-0 text-cocoa/50" />
    </>
  );
  const cls =
    'flex h-16 w-full items-center gap-2 rounded-row bg-white px-4';
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {inner}
    </a>
  ) : (
    <button type="button" onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}

export default function OrderDrawer() {
  const { drawerOpen, setDrawerOpen, city } = useCity();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  /* Kunci scroll, fokus awal, Esc, dan focus trap */
  useEffect(() => {
    if (!drawerOpen) return;
    const prevFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDrawerOpen(false);
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      prevFocus?.focus();
    };
  }, [drawerOpen, setDrawerOpen]);

  const showNotice = city.key === 'surabaya';

  return (
    <div
      aria-hidden={!drawerOpen}
      className={[
        'fixed inset-0 z-50',
        drawerOpen ? 'pointer-events-auto' : 'pointer-events-none',
      ].join(' ')}
    >
      {/* Latar gelap */}
      <div
        onClick={() => setDrawerOpen(false)}
        className={[
          'absolute inset-0 bg-cocoa/50 transition-opacity duration-300',
          drawerOpen ? 'opacity-100' : 'opacity-0',
        ].join(' ')}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Pilih cara memesan"
        className={[
          'absolute bg-dough shadow-warm-lg transition-transform duration-300 ease-brand',
          /* mobile: bottom sheet; desktop: right sheet */
          'inset-x-0 bottom-0 max-h-[88vh] overflow-y-auto rounded-t-[24px]',
          'sm:inset-y-0 sm:left-auto sm:right-0 sm:h-full sm:max-h-none sm:w-[420px] sm:rounded-none',
          drawerOpen ? 'translate-y-0 sm:translate-x-0' : 'translate-y-full sm:translate-y-0 sm:translate-x-full',
        ].join(' ')}
      >
        <div className="flex items-center justify-between px-5 pb-2 pt-5">
          <h2 className="text-[1.5rem]">Pesan HOPPAO</h2>
          <button
            ref={closeRef}
            type="button"
            onClick={() => setDrawerOpen(false)}
            aria-label="Tutup panel pemesanan"
            className="grid h-11 w-11 place-items-center rounded-full text-cocoa"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-6 px-5 pb-10">
          {/* 1. Kota */}
          <div>
            <p className="group-label mb-2 flex items-center gap-1.5 text-cocoa/70">
              <PinIcon className="h-3.5 w-3.5" /> Kota kamu
            </p>
            <CitySwitcher />
          </div>

          {/* 2. Pesan online */}
          <div>
            <p className="group-label mb-2 flex items-center gap-1.5 text-cocoa/70">
              <PinIcon className="h-3.5 w-3.5" /> Pesan online
            </p>
            <div className="space-y-2">
              {city.platforms.map((p: Platform) => (
                <Row
                  key={p}
                  href={PLATFORM_URL[city.key][p]}
                  label={p}
                  logoSrc={PLATFORM_LOGO[p]}
                  logoAlt={`Logo ${p}`}
                />
              ))}
            </div>
            {showNotice && (
              <p className="mt-3 rounded-row bg-saffron/40 px-4 py-3 text-sm text-cocoa">
                {SURABAYA_NOTICE}
              </p>
            )}
          </div>

          {/* 3. Chat langsung */}
          <div>
            <p className="group-label mb-2 flex items-center gap-1.5 text-cocoa/70">
              <PinIcon className="h-3.5 w-3.5" /> Chat langsung
            </p>
            <Row
              href={waLink(city.whatsappIntl, WA_TEXT.umum(city.label))}
              label={`${city.whatsappLabel} · ${city.whatsappDisplay}`}
              logoSrc={WHATSAPP_LOGO}
              logoAlt="Logo WhatsApp"
            />
          </div>

          {/* 4. Kirim ke kota lain */}
          <div>
            <p className="group-label mb-2 flex items-center gap-1.5 text-cocoa/70">
              <PinIcon className="h-3.5 w-3.5" /> Kirim ke kota lain
            </p>
            <Row
              onClick={() => {
                setDrawerOpen(false);
                document.getElementById('frozen')?.scrollIntoView({ behavior: 'smooth' });
              }}
              label="Pengiriman frozen ke luar kota"
              icon={<SnowflakeIcon className="h-5 w-5 text-leaf" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
