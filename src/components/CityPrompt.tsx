'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { CITIES } from '@/data/site';
import { useCity } from './CityProvider';
import { CloseIcon, PinIcon } from './Icons';

/** Sapaan kunjungan pertama: bottom sheet di mobile, modal ringan di desktop. */
export default function CityPrompt() {
  const { showPrompt, dismissPrompt, setCity } = useCity();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!showPrompt) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && dismissPrompt();
    document.addEventListener('keydown', onKey);
    ref.current?.querySelector<HTMLElement>('button')?.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [showPrompt, dismissPrompt]);

  if (!showPrompt) return null;

  const pick = (key: 'jogja' | 'surabaya') => {
    setCity(key);
    dismissPrompt();
  };

  const cards = [
    { key: 'jogja' as const, img: '/assets/pao-1.png', count: '3 outlet' },
    { key: 'surabaya' as const, img: '/assets/pao-2.png', count: '1 outlet' },
  ];

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center">
      <div className="absolute inset-0 bg-cocoa/50" onClick={dismissPrompt} />
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby="city-prompt-title"
        className="relative w-full max-w-lg rounded-t-[24px] bg-cream p-6 shadow-warm-lg sm:rounded-card"
      >
        <button
          type="button"
          onClick={dismissPrompt}
          aria-label="Tutup pilihan kota"
          className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full text-cocoa"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <p className="eyebrow flex items-center gap-1.5 text-cocoa/70">
          <PinIcon className="h-3.5 w-3.5" /> HOPPAO
        </p>
        <h2 id="city-prompt-title" className="mt-2 text-[1.75rem]">
          Kamu di kota mana?
        </h2>
        <p className="mt-1 text-[15px] text-cocoa/75">
          Kami tampilkan platform pesan-antar yang benar untuk kotamu.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {cards.map((c) => (
            <button
              key={c.key}
              type="button"
              onClick={() => pick(c.key)}
              className="overflow-hidden rounded-card border-2 border-cocoa/15 bg-white text-left"
            >
              <span className="block h-24 overflow-hidden sm:h-28">
                <Image
                  src={c.img}
                  alt={`Bakpao HOPPAO di ${CITIES[c.key].label}`}
                  width={480}
                  height={270}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="block px-4 py-3">
                <span className="block font-display text-[1.125rem] font-semibold">
                  {CITIES[c.key].label}
                </span>
                <span className="block text-sm text-cocoa/70">{c.count}</span>
              </span>
            </button>
          ))}
        </div>

        <a
          href="#frozen"
          onClick={dismissPrompt}
          className="mt-3 flex min-h-[52px] items-center justify-between rounded-row border-2 border-cocoa/25 px-4 font-bold text-cocoa"
        >
          Kota lain, kirim frozen
          <span aria-hidden>→</span>
        </a>

        <button
          type="button"
          onClick={dismissPrompt}
          className="mt-3 w-full text-sm text-cocoa/60 underline underline-offset-4"
        >
          Nanti saja, tampilkan Jogja
        </button>
      </div>
    </div>
  );
}
