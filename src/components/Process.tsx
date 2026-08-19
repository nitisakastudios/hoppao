import Image from 'next/image';
import { PROCESS } from '@/data/site';
import { PROCESS_ICONS } from './Icons';
import Reveal from './Reveal';

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-saffron py-20 grain lg:py-28">
      <Image
        src="/assets/logo-nobg.png"
        alt=""
        aria-hidden
        width={140}
        height={140}
        loading="lazy"
        className="pointer-events-none absolute right-6 top-6 h-14 w-auto opacity-90 sm:right-10 sm:top-10 sm:h-20 lg:h-24"
      />

      <div className="shell relative">
        <Reveal>
          <p className="eyebrow text-cocoa/70">Proses</p>
          <h2 className="mt-3">Steamed to perfection</h2>
          <p className="mt-2 text-cocoa/80">Empat langkah yang tidak kami potong.</p>
        </Reveal>

        <Reveal
          as="ul"
          stagger
          className="mt-12 grid gap-8 border-cocoa/15 lg:grid-cols-4 lg:gap-6"
        >
          {PROCESS.map((step, i) => {
            const Icon = PROCESS_ICONS[i];
            return (
              <li
                key={step.title}
                className="relative flex gap-4 border-l-2 border-cocoa/15 pl-5 lg:block lg:border-l-0 lg:border-t-2 lg:pl-0 lg:pt-6"
              >
                <Icon className="h-9 w-9 shrink-0 text-cocoa" />
                <div className="lg:mt-4">
                  <p className="font-display text-[2rem] font-semibold leading-none text-cocoa/35">
                    0{i + 1}
                  </p>
                  <h3 className="mt-2 text-[1.25rem]">{step.title}</h3>
                  <p className="mt-1 text-[15px] text-cocoa/80">{step.body}</p>
                </div>
              </li>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
