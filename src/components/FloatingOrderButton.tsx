'use client';

import { useCity } from './CityProvider';
import { BowlIcon } from './Icons';

export default function FloatingOrderButton() {
  const { city, setDrawerOpen, drawerOpen } = useCity();
  return (
    <button
      type="button"
      onClick={() => setDrawerOpen(true)}
      aria-label={`Buka panel pemesanan untuk ${city.label}`}
      className={[
        'fixed bottom-5 right-5 z-30 inline-flex min-h-[52px] items-center gap-2 rounded-[14px] bg-cocoa px-5 text-[15px] font-bold text-saffron shadow-warm-lg',
        drawerOpen ? 'pointer-events-none opacity-0' : 'opacity-100',
      ].join(' ')}
    >
      <BowlIcon className="h-6 w-6" />
      Pesan · {city.shortLabel}
    </button>
  );
}
