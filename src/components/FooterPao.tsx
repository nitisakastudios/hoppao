'use client';

import Image from 'next/image';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Bakpao berkemasan yang muncul naik dari dasar footer saat pengunjung
 * menggulir sampai ke bawah. Nonaktif pada prefers-reduced-motion.
 */
export default function FooterPao() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set(img, { y: 0, autoAlpha: 1 });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        img,
        { y: '38%', autoAlpha: 0 },
        {
          y: '0%',
          autoAlpha: 1,
          duration: 0.9,
          ease: 'power4.out',
          scrollTrigger: { trigger: wrap, start: 'top 95%', once: true },
        },
      );
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className="mt-14 flex justify-center overflow-hidden px-6">
      {/* Lebih besar dari lebar kontainer, tinggi dipangkas agar bagian
          bawah kemasan sengaja terpotong oleh tepi footer. */}
      <div
        ref={imgRef}
        className="relative aspect-[100/72] w-full max-w-[480px] sm:max-w-[620px] lg:max-w-[760px]"
      >
        <Image
          src="/assets/pao-with-packaging.png"
          alt="Bakpao HOPPAO menyembul dari kemasan kertas saffron bertuliskan HOPPAO"
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 760px, 90vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
