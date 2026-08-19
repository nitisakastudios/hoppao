'use client';

import { CITIES, CITY_KEYS } from '@/data/site';
import { useCity } from './CityProvider';

/**
 * Pemilih kota gaya teks: "Jogja | Surabaya".
 * Kota aktif ditandai tebal + garis bawah saffron agar tetap terbaca
 * sebagai kontrol, bukan sekadar label.
 */
export default function CitySwitcher({ serif = true }: { serif?: boolean }) {
  const { cityKey, setCity } = useCity();

  return (
    <div
      role="group"
      aria-label="Pilih kota"
      className={[
        'inline-flex items-center text-[1.0625rem] text-cocoa',
        serif ? 'font-display' : 'font-body',
      ].join(' ')}
    >
      {CITY_KEYS.map((key, i) => {
        const active = key === cityKey;
        return (
          <span key={key} className="inline-flex items-center">
            {i > 0 && (
              <span aria-hidden className="px-1.5 text-cocoa/45">
                |
              </span>
            )}
            <button
              type="button"
              onClick={() => setCity(key)}
              aria-pressed={active}
              className={[
                'min-h-[44px] px-1',
                active
                  ? 'font-semibold text-cocoa underline decoration-cocoa decoration-2 underline-offset-[6px]'
                  : 'text-cocoa/55',
              ].join(' ')}
            >
              {CITIES[key].shortLabel}
            </button>
          </span>
        );
      })}
    </div>
  );
}
