'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ALL_ITEMS,
  FILTERS,
  WA_TEXT,
  waLink,
  type Category,
  type MenuItem,
} from '@/data/site';
import { useCity } from './CityProvider';
import { CloseIcon } from './Icons';

/**
 * Kartu minimal: foto dengan banyak ruang kosong di sekitarnya, satu baris
 * keterangan kecil (titik + nama) dan pil harga gelap. Klik kartu = buka
 * detail (atau langsung buka drawer pesan bila tak ada modal).
 */
function Card({
  item,
  onOpen,
}: {
  item: MenuItem;
  onOpen?: (i: MenuItem) => void;
}) {
  const { setDrawerOpen } = useCity();
  return (
    <button
      type="button"
      onClick={() => (onOpen ? onOpen(item) : setDrawerOpen(true))}
      className="group block w-full text-left"
    >
      <div className="relative aspect-square overflow-hidden rounded-[4px] bg-dough">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(min-width: 1280px) 280px, (min-width: 768px) 33vw, 90vw"
          loading="lazy"
          className="object-contain p-6"
        />
      </div>

      <div className="mt-3 flex items-center gap-1.5">
        <span
          className="h-2 w-2 shrink-0 rounded-full"
          style={{ background: item.dot }}
          aria-hidden
        />
        <span className="truncate text-[11px] font-bold uppercase tracking-[0.08em] text-cocoa/60">
          {item.name}
        </span>
      </div>
    </button>
  );
}

function Modal({ item, onClose }: { item: MenuItem; onClose: () => void }) {
  const { city } = useCity();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    ref.current?.querySelector<HTMLElement>('button')?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center">
      <div className="absolute inset-0 bg-cocoa/50" onClick={onClose} />
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={`Detail ${item.name}`}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-[24px] bg-cream shadow-warm-lg sm:rounded-card"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup detail varian"
          className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-cream text-cocoa"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <div className="grid sm:grid-cols-2">
          <div className="relative aspect-square bg-dough sm:aspect-auto">
            <Image
              src={item.image}
              alt={item.alt}
              fill
              sizes="50vw"
              className="object-contain p-8"
            />
          </div>
          <div className="p-6">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: item.dot }}
              aria-hidden
            />
            <h2 className="mt-2 text-[1.75rem]">{item.name}</h2>
            <p className="mt-1 text-cocoa/75">{item.desc}</p>
            <p className="mt-3 text-sm text-cocoa/60">
              {item.weight}
              {item.frozenFriendly && ' · Tersedia frozen'}
            </p>

            <dl className="mt-5 space-y-3 text-sm">
              <div>
                <dt className="group-label text-cocoa/50">Komposisi</dt>
                <dd className="mt-1 text-cocoa/80">{item.composition}</dd>
              </div>
              <div>
                <dt className="group-label text-cocoa/50">Alergen</dt>
                <dd className="mt-1 text-cocoa/80">{item.allergens}</dd>
              </div>
            </dl>

            <a
              href={waLink(city.whatsappIntl, WA_TEXT.umum(city.label))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-6 w-full"
            >
              Pesan via WhatsApp ({city.shortLabel})
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MenuGrid({ withModal = false }: { withModal?: boolean }) {
  const [filter, setFilter] = useState<'semua' | Category>('semua');
  const [active, setActive] = useState<MenuItem | null>(null);

  const items = useMemo(
    () =>
      filter === 'semua'
        ? ALL_ITEMS
        : ALL_ITEMS.filter((i) => i.categories.includes(filter)),
    [filter],
  );

  return (
    <>
      <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {FILTERS.map((f) => {
          const on = f.key === filter;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={on}
              className={[
                'min-h-[44px] shrink-0 rounded-full border-2 px-5 text-sm font-bold transition-colors duration-200',
                on
                  ? 'border-cocoa bg-cocoa text-cream'
                  : 'border-cocoa/25 bg-transparent text-cocoa',
              ].join(' ')}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <Card key={item.slug} item={item} onOpen={withModal ? setActive : undefined} />
        ))}
      </div>

      {withModal && active && <Modal item={active} onClose={() => setActive(null)} />}
    </>
  );
}
