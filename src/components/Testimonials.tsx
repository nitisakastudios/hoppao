import { TESTIMONIALS } from '@/data/site';
import Reveal from './Reveal';

/**
 * Daftar kutipan editorial, bukan kartu putih+shadow dengan avatar bulat
 * berisi inisial dan rating bintang, pola testimoni generik yang muncul di
 * hampir semua situs.
 */
export default function Testimonials() {
  return (
    <section className="bg-cream pb-24 lg:pb-32">
      <div className="shell max-w-3xl">
        <Reveal>
          <p className="eyebrow text-cocoa/60">Kata Mereka</p>
          <h2 className="mt-4">Yang sudah mencoba</h2>
        </Reveal>

        <Reveal
          as="ul"
          stagger
          className="mt-12 divide-y divide-cocoa/10 border-t border-cocoa/10"
        >
          {TESTIMONIALS.map((t) => (
            <li key={t.name} className="py-8">
              <p className="font-display text-[1.375rem] leading-snug text-cocoa">
                “{t.quote}”
              </p>
              <p className="mt-4 text-sm text-cocoa/60">
                {t.name} <span className="text-cocoa/35">·</span> {t.source}
              </p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
