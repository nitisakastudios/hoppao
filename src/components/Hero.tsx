'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { DIETARY } from '@/data/site';
import { useCity } from './CityProvider';

const HERO_SLIDES = [
  {
    src: '/assets/pao-1.png',
    alt: 'Bakpao putih lipat tangan mengepul di dalam kukusan bambu dengan latar saffron',
  },
  {
    src: '/assets/pao-2.png',
    alt: 'Bakpao HOPPAO bertitik hijau di puncaknya, mengepul baru diangkat dari kukusan',
  },
  {
    src: '/assets/pao-3.png',
    alt: 'Bakpao HOPPAO bertitik amber di puncaknya di atas kukusan bambu',
  },
];

/**
 * Hero: foto cover penuh layar (boleh terpotong/zoom di semua ukuran).
 * Bergantian setiap 5 detik di antara tiga foto produk (crossfade), berhenti
 * pada prefers-reduced-motion.
 * Desktop: teks menumpang di sepertiga kiri foto.
 * Mobile: teks menumpang di dasar foto dengan scrim gelap.
 */
export default function Hero() {
  const { setDrawerOpen } = useCity();
  const copyRef = useRef<HTMLDivElement>(null);
  const [slide, setSlide] = useState(0);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.from('[data-hero-item]', {
        y: 18,
        autoAlpha: 0,
        duration: 0.6,
        ease: 'power4.out',
        stagger: 0.07,
        delay: 0.1,
      });
    }, copyRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => {
      setSlide((s) => (s + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative flex h-[100dvh] min-h-[600px] flex-col justify-end overflow-hidden bg-saffron pt-[60px] lg:justify-center lg:pt-0">
      {/* Mobile: cover penuh layar (boleh terpotong/zoom) agar foto terasa
          besar, titik fokus atas menjaga bakpao tetap dalam bingkai.
          Desktop: cover juga, fokus 45% menjaga bakpao & kukusan utuh. */}
      {HERO_SLIDES.map((s, i) => (
        <Image
          key={s.src}
          src={s.src}
          alt={s.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          className={[
            'object-cover object-top transition-opacity duration-1000 ease-in-out lg:object-[center_45%]',
            i === slide ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
        />
      ))}

      {/* Scrim bawah (mobile): menggelapkan bidang teks di dasar layar */}
      <div
        className="pointer-events-none absolute inset-0 lg:hidden"
        style={{
          background:
            'linear-gradient(to top, rgba(61,36,24,.75) 0%, rgba(61,36,24,.35) 38%, transparent 60%)',
        }}
      />

      {/* Scrim kiri (desktop): menggelapkan bidang teks tanpa menyentuh bakpao */}
      <div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          background:
            'linear-gradient(to right, rgba(61,36,24,.66) 0%, rgba(61,36,24,.40) 26%, transparent 48%)',
        }}
      />

      <div className="shell relative pb-14 pt-8 lg:pb-0 lg:pt-0">
        <div ref={copyRef} className="max-w-[30rem]">
          <p data-hero-item className="eyebrow text-cream/80">
            Crafted with love, steamed to perfection
          </p>

          <h1 data-hero-item className="mt-4 text-cream">
            Bakpao kukus,
            <br />
            dibuat dengan hati.
          </h1>

          <p data-hero-item className="mt-5 max-w-sm text-cream/90">
            Dilipat tangan, dikukus setiap pagi di Jogja &amp; Surabaya.
          </p>

          <div data-hero-item className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="btn btn-primary rounded-[14px]"
            >
              Pesan Sekarang
            </button>
            <Link
              href="#menu"
              className="btn rounded-[14px] border-2 border-cream text-cream"
            >
              Lihat Menu
            </Link>
          </div>

          <p
            data-hero-item
            className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-cream/75"
          >
            <span className="inline-flex items-center rounded-[6px] border border-cream/55 px-2 py-1 text-[11px] font-bold tracking-[0.14em] text-cream">
              {DIETARY.badge}
            </span>
            <span>Tanpa pengawet · Dikukus setiap pagi · Tersedia frozen</span>
          </p>
        </div>
      </div>
    </section>
  );
}
