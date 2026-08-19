'use client';

import { useState } from 'react';
import { CITIES, CITY_KEYS, WA_TEXT, waLink, type CityKey } from '@/data/site';
import { ChevronRight, PinIcon } from './Icons';
import Reveal from './Reveal';

/**
 * Baris direktori dengan pembatas garis, bukan kartu putih+shadow yang
 * diulang untuk setiap outlet. Peta jadi thumbnail kecil, bukan elemen
 * dominan, karena informasi yang dicari orang adalah alamat dan jam buka.
 */
function CityColumn({ cityKey }: { cityKey: CityKey }) {
  const city = CITIES[cityKey];
  return (
    <div>
      <div className="mb-1 flex items-center gap-3">
        <h3 className="text-[1.5rem]">{city.label}</h3>
        <span className="rounded-full bg-saffron px-3 py-1 text-xs font-bold text-cocoa">
          {city.outlets.length} outlet
        </span>
      </div>

      <ul className="divide-y divide-cocoa/10 border-t border-cocoa/10">
        {city.outlets.map((o) => (
          <li key={o.name} className="flex gap-4 py-5">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[14px] bg-dough sm:h-24 sm:w-24">
              <iframe
                title={`Peta lokasi ${o.name}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(o.mapsQuery)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-saffron/40"
                style={{ mixBlendMode: 'multiply' }}
                aria-hidden
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="font-display text-[1.0625rem] font-semibold leading-snug">
                {o.name}
              </p>
              <p className="mt-0.5 text-sm text-cocoa/70">{o.address}</p>
              {/* PLACEHOLDER jam buka: lihat src/data/site.ts */}
              <p className="mt-1 text-xs text-cocoa/50">
                {o.hours} <span className="font-bold text-chili">(placeholder)</span>
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
                <a
                  href={waLink(city.whatsappIntl, WA_TEXT.outlet(o.name, city.label))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-cocoa underline underline-offset-4"
                >
                  Pesan dari sini
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.mapsQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-0.5 text-sm text-cocoa/60"
                >
                  Petunjuk arah
                  <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Outlets() {
  const [tab, setTab] = useState<CityKey>('jogja');

  return (
    <section id="outlet" className="bg-cream py-24 lg:py-32">
      <div className="shell">
        <Reveal className="flex items-start gap-2">
          <PinIcon className="mt-1 h-5 w-5 shrink-0 text-cocoa/50" />
          <div>
            <p className="eyebrow text-cocoa/60">Outlet</p>
            <h2 className="mt-4">Temui kami di 4 lokasi</h2>
            <p className="mt-2 max-w-lg text-cocoa/80">
              Dua kota, empat outlet. Semua kami tampilkan sekaligus, tak perlu ganti kota
              untuk melihatnya.
            </p>
          </div>
        </Reveal>

        {/* Mobile: tab */}
        <div className="mt-10 flex gap-2 lg:hidden">
          {CITY_KEYS.map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setTab(k)}
              aria-pressed={tab === k}
              className={[
                'min-h-[44px] flex-1 rounded-full border-2 px-4 text-sm font-bold',
                tab === k ? 'border-cocoa bg-cocoa text-cream' : 'border-cocoa/15 text-cocoa',
              ].join(' ')}
            >
              {CITIES[k].label} · {CITIES[k].outlets.length}
            </button>
          ))}
        </div>

        <div className="mt-6 lg:hidden">
          <CityColumn cityKey={tab} />
        </div>

        {/* Desktop: dua kota berdampingan */}
        <div className="mt-14 hidden gap-16 lg:grid lg:grid-cols-2">
          {CITY_KEYS.map((k) => (
            <CityColumn key={k} cityKey={k} />
          ))}
        </div>
      </div>
    </section>
  );
}
