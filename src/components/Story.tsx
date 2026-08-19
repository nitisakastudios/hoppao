import Image from 'next/image';
import { MENU } from '@/data/site';
import Reveal from './Reveal';

/**
 * Bukan grid gambar+teks yang berulang di seksi lain. Judul berdiri sendiri
 * dengan ruang kosong, kolom teks digeser asimetris (bukan rata tengah), lalu
 * satu foto sinematik penuh lebar (bleed keluar dari `.shell`, menggemakan
 * Hero) dengan kutipan di atasnya. Statistik melebur jadi kalimat penutup,
 * bukan kartu angka atau daftar bertitik.
 */
export default function Story() {
  return (
    <section id="cerita" className="scroll-mt-24 overflow-hidden bg-cream py-24 lg:py-32">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-cocoa/60">Cerita Kami</p>
          <h2 className="mt-4 max-w-3xl">Bakpao yang baik tidak bisa diburu-buru.</h2>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <Reveal className="hidden lg:col-span-4 lg:block">
            <div className="relative aspect-[3/4] w-full max-w-[220px]">
              <Image
                src="/assets/pouch.png"
                alt="Kantong kertas kraft HOPPAO bergambar dua maskot bakpao"
                fill
                sizes="220px"
                loading="lazy"
                className="object-contain object-bottom"
              />
            </div>
          </Reveal>

          <Reveal className="space-y-5 text-cocoa/80 lg:col-span-7 lg:col-start-6">
            <p>
              HOPPAO lahir dari satu keyakinan sederhana itu. Kami melipat setiap adonan
              dengan tangan, memasak isian pagi itu juga, dan mengukusnya hanya ketika
              kamu siap menyantapnya.
            </p>
            <p>
              Dapur kami mulai jauh sebelum outlet buka. Adonan diistirahatkan sampai
              benar-benar mengembang, isian dimasak segar hari itu, lalu dilipat satu per
              satu tanpa cetakan, dengan titik warna kecil di puncaknya sebagai penanda
              isian, supaya kamu tak perlu membelah satu hanya untuk mencari yang kamu
              mau.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Foto sinematik penuh lebar, bleed keluar dari .shell.
          Posisi full-bleed dipegang wrapper statis ini, bukan Reveal,
          karena GSAP menulis transform-nya sendiri saat animasi berjalan. */}
      <div className="relative left-1/2 mt-16 h-[62vh] min-h-[360px] w-screen -translate-x-1/2 lg:mt-24 lg:h-[72vh]">
        <Reveal className="absolute inset-0">
          <Image
            src="/assets/pao-3.png"
            alt="Tangan melipat adonan bakpao HOPPAO di atas meja kerja dapur"
            fill
            sizes="100vw"
            loading="lazy"
            className="object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(61,36,24,.65), transparent 55%)' }}
          />
          <div className="shell absolute inset-0 flex items-end pb-10 lg:pb-14">
            <blockquote className="font-display text-[2rem] font-semibold leading-[1.2] text-cream lg:text-[2.75rem]">
              Dikukus pagi ini, bukan kemarin.
            </blockquote>
          </div>
        </Reveal>
      </div>

      <div className="shell mt-12 lg:mt-16">
        <Reveal>
          <p className="max-w-2xl text-cocoa/70">
            Kini HOPPAO ada di <strong className="text-cocoa">4 outlet</strong>, di{' '}
            <strong className="text-cocoa">2 kota</strong>, dengan{' '}
            <strong className="text-cocoa">{MENU.length} varian</strong>. Yang tidak berubah
            adalah
            caranya: dilipat tangan, dikukus setiap pagi, disajikan ketika masih hangat.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
