'use client';

import Image from 'next/image';
import { WA_TEXT, waLink } from '@/data/site';
import { useCity } from './CityProvider';
import Reveal from './Reveal';

const STEPS = [
  { t: 'Pilih varian favoritmu', d: 'Semua varian tersedia dalam bentuk frozen.' },
  { t: 'Tulis "FROZEN" di catatan pesanan', d: 'atau konfirmasi lewat WA kami.' },
  { t: 'Kukus 10 menit di rumah', d: 'langsung dari freezer, tanpa perlu dicairkan.' },
];

/**
 * Kolom 5/7 asimetris (bukan 50/50 seperti seksi lain), nomor langkah pakai
 * angka besar pudar (menggemakan Proses) bukan bulatan bernomor, dan foto
 * tanpa bingkai kartu+shadow.
 */
export default function Frozen() {
  const { city } = useCity();
  return (
    <section id="frozen" className="scroll-mt-24 bg-dough py-24 lg:py-32">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow text-cocoa/60">Frozen</p>
          <h2 className="mt-4">Bawa HOPPAO pulang</h2>
          <p className="mt-4 text-cocoa/80">
            Bakpao frozen bisa disimpan di freezer dan dikukus kapan pun kamu mau.
          </p>

          <ol className="mt-10 space-y-6">
            {STEPS.map((s, i) => (
              <li key={s.t} className="flex gap-4">
                <span className="w-8 shrink-0 font-display text-[1.75rem] font-semibold leading-none text-cocoa/30">
                  0{i + 1}
                </span>
                <div>
                  <p className="font-display text-[1.0625rem] font-semibold">{s.t}</p>
                  <p className="mt-0.5 text-[15px] text-cocoa/75">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 border-t border-cocoa/15 pt-6">
            <p className="text-cocoa/80">
              Di luar Jogja &amp; Surabaya? Kami melayani pengiriman ke kota lain. WA kami
              untuk info ongkir.
            </p>
            <a
              href={waLink(city.whatsappIntl, WA_TEXT.frozen())}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-4"
            >
              WA kami · {city.shortLabel}
            </a>
          </div>
        </Reveal>

        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-card bg-dough lg:col-span-7 lg:aspect-auto">
          <Image
            src="/assets/box.png"
            alt="Kotak kemasan frozen HOPPAO, siap disimpan di freezer"
            fill
            sizes="(min-width: 1024px) 58vw, 100vw"
            loading="lazy"
            className="object-contain p-10 sm:p-14"
          />
        </Reveal>
      </div>
    </section>
  );
}
