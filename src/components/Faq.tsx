'use client';

import { useState } from 'react';
import { FAQ, WA_TEXT, waLink } from '@/data/site';
import { useCity } from './CityProvider';
import { MinusIcon, PinIcon, PlusIcon } from './Icons';
import Reveal from './Reveal';

/**
 * Baris alamat outlet di jawaban FAQ ditandai "📍 " pada data (menjaga copy
 * asli tetap verbatim). Saat dirender, penanda itu diganti PinIcon line-art
 * milik sistem ikon situs, bukan emoji, supaya konsisten dengan seksi Outlet.
 */
function Answer({ text }: { text: string }) {
  return (
    <div className="space-y-1 text-[15px] text-cocoa/80">
      {text.split('\n').map((line, i) => {
        if (line.startsWith('📍')) {
          return (
            <p key={i} className="flex items-start gap-2 py-0.5">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-chili" />
              <span>{line.replace(/^📍\s*/u, '')}</span>
            </p>
          );
        }
        if (line === '') return <div key={i} className="h-3" aria-hidden />;
        if (line === line.toUpperCase() && line.length < 20) {
          return (
            <p key={i} className="pt-1 text-xs font-bold uppercase tracking-[0.14em] text-cocoa/50">
              {line}
            </p>
          );
        }
        return <p key={i}>{line}</p>;
      })}
    </div>
  );
}

/**
 * Kolom 4/8 asimetris (bukan satu kolom tengah generik) supaya ada jalur
 * keluar ke WhatsApp bagi yang tidak menemukan jawabannya di daftar.
 */
export default function Faq() {
  const { city } = useCity();
  const [open, setOpen] = useState(0); // item pertama terbuka

  return (
    <section className="bg-dough py-24 lg:py-32">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow text-cocoa/60">FAQ</p>
          <h2 className="mt-4">Pertanyaan yang sering ditanyakan</h2>
          <p className="mt-4 text-cocoa/75">
            Enggak nemu jawabannya di sini? Chat langsung, kami balas cepat.
          </p>
          <a
            href={waLink(city.whatsappIntl, WA_TEXT.umum(city.label))}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-cocoa mt-6"
          >
            Chat via WhatsApp
          </a>
        </Reveal>

        <div className="lg:col-span-8">
          <div className="border-t border-cocoa/20">
            {FAQ.map((item, i) => {
              const isOpen = open === i;
              const panelId = `faq-panel-${i}`;
              return (
                <div key={item.q} className="border-b border-cocoa/20">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-[1.125rem] font-semibold text-cocoa"
                    >
                      {item.q}
                      {isOpen ? (
                        <MinusIcon className="h-5 w-5 shrink-0" />
                      ) : (
                        <PlusIcon className="h-5 w-5 shrink-0" />
                      )}
                    </button>
                  </h3>
                  <div id={panelId} hidden={!isOpen} className="pb-6">
                    <Answer text={item.a} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
