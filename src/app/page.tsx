import DotSignature from '@/components/DotSignature';
import EventOrder from '@/components/EventOrder';
import Faq from '@/components/Faq';
import Frozen from '@/components/Frozen';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import MenuGrid from '@/components/MenuGrid';
import Outlets from '@/components/Outlets';
import Process from '@/components/Process';
import Reveal from '@/components/Reveal';
import Story from '@/components/Story';
import Testimonials from '@/components/Testimonials';
import { faqSchema, JsonLd, productSchema } from '@/lib/schema';

/**
 * Satu halaman panjang: Hero (hook) → Marquee (ragam varian) → Cerita (kenapa)
 * → Proses (bagaimana) → Titik warna (pembeda) → Menu (apa, konversi utama)
 * → Testimoni (bukti sosial) → Outlet (di mana) → Frozen (jangkauan lebih luas)
 * → Pesanan Event (B2B) → FAQ (tutup keberatan) → Footer.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Story />
      <Process />
      <DotSignature />

      <section id="menu" className="scroll-mt-24 bg-cream py-20 lg:py-28">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-cocoa/60">Menu</p>
            <h2 className="mt-3">Pilih isian favoritmu</h2>
            <p className="mt-3 max-w-xl text-cocoa/80">
              Setiap varian punya titik warna di puncaknya, jadi kamu tak perlu membelah
              untuk tahu isinya. Ketuk kartunya untuk lihat komposisi, alergen, dan berat.
            </p>
          </Reveal>
          <div className="mt-8">
            <MenuGrid withModal />
          </div>
        </div>
      </section>

      <Testimonials />
      <Outlets />
      <Frozen />
      <EventOrder />
      <Faq />

      <JsonLd data={faqSchema()} />
      <JsonLd data={productSchema()} />
    </>
  );
}
