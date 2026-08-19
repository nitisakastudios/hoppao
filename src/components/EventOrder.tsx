'use client';

import { useState } from 'react';
import { WA_TEXT, waLink } from '@/data/site';
import { useCity } from './CityProvider';
import Reveal from './Reveal';

export default function EventOrder() {
  const { city } = useCity();
  const [form, setForm] = useState({ nama: '', pax: '', tanggal: '', kota: '' });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = WA_TEXT.event({ ...form, kota: form.kota || city.label });
    window.open(waLink(city.whatsappIntl, text), '_blank', 'noopener,noreferrer');
  };

  const field =
    'mt-1 w-full min-h-[48px] rounded-row border-2 border-cream/25 bg-cocoa px-4 text-cream placeholder:text-cream/45 focus:border-saffron';

  return (
    <section id="pesanan-event" className="scroll-mt-24 bg-cocoa py-20 text-cream lg:py-28">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-cream/60">Pesanan Event</p>
          <h2 className="mt-3 text-cream">Pesanan untuk acaramu</h2>
          <p className="mt-4 max-w-lg text-cream/85">
            Event, meeting, gathering, hampers, atau konsumsi kantor. Kami siapkan sesuai
            jumlah dan waktumu.
          </p>
        </Reveal>
      </div>

      <div className="shell mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow text-cream/60">Hubungi langsung</p>
          <a
            href={waLink(city.whatsappIntl, WA_TEXT.umum(city.label))}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block font-display text-[clamp(2rem,5vw,3.25rem)] font-semibold leading-none text-saffron"
          >
            {city.whatsappDisplay}
          </a>
          <p className="mt-3 text-sm text-cream/65">
            Nomor {city.label}. Di Surabaya? Ganti kota di atas.
          </p>
        </Reveal>

        <Reveal>
          <form onSubmit={submit} className="rounded-card border border-cream/15 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="text-sm">
                <span className="group-label text-cream/70">Nama</span>
                <input
                  required
                  value={form.nama}
                  onChange={(e) => setForm({ ...form, nama: e.target.value })}
                  placeholder="Nama kamu"
                  className={field}
                />
              </label>
              <label className="text-sm">
                <span className="group-label text-cream/70">Jumlah pax</span>
                <input
                  required
                  inputMode="numeric"
                  value={form.pax}
                  onChange={(e) => setForm({ ...form, pax: e.target.value })}
                  placeholder="mis. 200"
                  className={field}
                />
              </label>
              <label className="text-sm">
                <span className="group-label text-cream/70">Tanggal acara</span>
                <input
                  required
                  type="date"
                  value={form.tanggal}
                  onChange={(e) => setForm({ ...form, tanggal: e.target.value })}
                  className={field}
                />
              </label>
              <label className="text-sm">
                <span className="group-label text-cream/70">Kota</span>
                <input
                  value={form.kota}
                  onChange={(e) => setForm({ ...form, kota: e.target.value })}
                  placeholder={city.label}
                  className={field}
                />
              </label>
            </div>
            <button type="submit" className="btn btn-saffron mt-5 w-full">
              Kirim via WhatsApp
            </button>
            <p className="mt-3 text-xs text-cream/55">
              Formulir ini membuka WhatsApp dengan pesan yang sudah terisi. Tidak ada data
              yang kami simpan di situs.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
