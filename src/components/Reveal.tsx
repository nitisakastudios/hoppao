'use client';

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

/**
 * Scroll reveal: translateY(16px) + fade, 500ms, cubic-bezier(.16,1,.3,1),
 * stagger 60ms untuk anak langsung bila `stagger` aktif.
 * Otomatis nonaktif pada prefers-reduced-motion.
 */
export default function Reveal({
  children,
  stagger = false,
  className,
  as: Tag = 'div',
  delay = 0,
}: {
  children: React.ReactNode;
  stagger?: boolean;
  className?: string;
  as?: 'div' | 'section' | 'ul' | 'header';
  delay?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);

  // useLayoutEffect: pasang state awal sebelum paint agar tidak berkedip
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      gsap.set(el.classList.contains('reveal') ? el : el, { clearProps: 'all' });
      el.querySelectorAll<HTMLElement>('.reveal').forEach((n) => (n.style.opacity = '1'));
      el.style.opacity = '1';
      return;
    }

    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }

    const targets = stagger
      ? (Array.from(el.children) as HTMLElement[])
      : [el as HTMLElement];

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          delay,
          ease: 'power4.out',
          stagger: stagger ? 0.06 : 0,
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [stagger, delay]);

  return (
    // @ts-expect-error: ref polimorfik untuk tag yang dibatasi di atas
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
