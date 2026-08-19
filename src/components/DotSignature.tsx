import { MENU } from '@/data/site';
import Reveal from './Reveal';

/**
 * Bukan foto+daftar dalam kartu (pola yang berulang di seksi lain). Titik
 * warna dijadikan perangkat visual utama: dinding swatch besar, karena titik
 * itu sendiri adalah pembeda HOPPAO, bukan sekadar ilustrasi pendukung.
 */
export default function DotSignature() {
  return (
    <section className="bg-dough py-24 lg:py-32">
      <div className="shell">
        <Reveal className="max-w-xl">
          <p className="eyebrow text-cocoa/60">Penanda Isian</p>
          <h2 className="mt-4">Kenapa ada titik warna di atasnya?</h2>
          <p className="mt-4 text-cocoa/80">
            Semua bakpao kami putih dan tampak serupa. Titik kecil di puncaknya adalah
            penanda isian, supaya kamu tak perlu menebak, dan tak perlu membelah satu
            untuk mencari yang kamu mau.
          </p>
        </Reveal>

        <Reveal
          as="ul"
          stagger
          className="mt-16 flex flex-wrap gap-x-10 gap-y-10 sm:gap-x-14"
        >
          {MENU.map((m) => (
            <li key={m.slug} className="flex w-20 flex-col items-center gap-3 text-center">
              <span
                className="h-16 w-16 rounded-full ring-[6px] ring-cream"
                style={{ background: m.dot, boxShadow: '0 10px 24px rgba(61,36,24,.14)' }}
                aria-hidden
              />
              <span className="w-full">
                <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-cocoa/55">
                  {m.dotName}
                </span>
                <span className="mt-0.5 block font-display text-[1rem] leading-tight">
                  {m.name}
                </span>
              </span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
