const VARIANTS = [
  { name: 'Ayam Kecap', dot: '#D64545' },
  { name: 'Kacang Hijau', dot: '#7BA05B' },
  { name: 'Coklat Lava', dot: '#3D2418' },
  { name: 'Keju Susu', dot: '#FFC907' },
  { name: 'Daging Sapi', dot: '#E8A800' },
  { name: 'Custard Telur Asin', dot: '#9CC7DE' },
];

export default function Marquee() {
  const run = [...VARIANTS, ...VARIANTS];
  return (
    <section
      aria-label="Varian isian HOPPAO"
      className="overflow-hidden border-y border-cocoa/10 bg-cream py-5"
    >
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {run.map((v, i) => (
              <span key={`${copy}-${v.name}-${i}`} className="flex items-center">
                <span className="whitespace-nowrap px-5 font-display text-[1.375rem] text-cocoa">
                  {v.name}
                </span>
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{ background: v.dot }}
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
