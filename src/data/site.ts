/* =========================================================================
   HOPPAO: sumber data tunggal.
   ⚠️ PLACEHOLDER: harga varian, harga bundling, dan jam buka outlet
   BELUM dikonfirmasi klien. Semua nilai sementara ditandai `PLACEHOLDER`
   di bawah dan hanya perlu diubah di file ini.
   ========================================================================= */

export type CityKey = 'jogja' | 'surabaya';
export type Platform = 'GoFood' | 'GrabFood' | 'ShopeeFood';

export type Outlet = {
  name: string;
  address: string;
  /** PLACEHOLDER: menunggu data klien */
  hours: string;
  mapsQuery: string;
};

export type City = {
  key: CityKey;
  label: string;
  shortLabel: string;
  whatsappLabel: string;
  whatsappDisplay: string;
  whatsappIntl: string;
  platforms: Platform[];
  outlets: Outlet[];
};

/** PLACEHOLDER jam buka. Ganti seluruhnya bila klien sudah mengirim data. */
export const HOURS_PLACEHOLDER = '10.00 – 21.00 WIB (sementara)';

export const CITIES: Record<CityKey, City> = {
  jogja: {
    key: 'jogja',
    label: 'Yogyakarta',
    shortLabel: 'Jogja',
    whatsappLabel: 'WhatsApp (Jogja)',
    whatsappDisplay: '0822 6121 6121',
    whatsappIntl: '6282261216121',
    platforms: ['GoFood', 'GrabFood', 'ShopeeFood'],
    outlets: [
      {
        name: 'Peppermint Natural & Organics',
        address: 'Jl. Diponegoro 86, Yogyakarta',
        hours: HOURS_PLACEHOLDER,
        mapsQuery: 'Peppermint Natural & Organics Jl. Diponegoro 86 Yogyakarta',
      },
      {
        name: 'Pakuwon Mall Jogja',
        address: 'LG Floor',
        hours: HOURS_PLACEHOLDER,
        mapsQuery: 'Pakuwon Mall Jogja',
      },
      {
        name: 'Plaza Ambarrukmo',
        address: 'LG Floor',
        hours: HOURS_PLACEHOLDER,
        mapsQuery: 'Plaza Ambarrukmo Yogyakarta',
      },
    ],
  },
  surabaya: {
    key: 'surabaya',
    label: 'Surabaya',
    shortLabel: 'Surabaya',
    whatsappLabel: 'WhatsApp (Surabaya)',
    whatsappDisplay: '0882 6121 6121',
    whatsappIntl: '6288261216121',
    platforms: ['ShopeeFood'],
    outlets: [
      {
        name: 'Pakuwon Mall Surabaya',
        address: 'Studio Food Court, 1st Floor',
        hours: HOURS_PLACEHOLDER,
        mapsQuery: 'Pakuwon Mall Surabaya',
      },
    ],
  },
};

export const CITY_KEYS: CityKey[] = ['jogja', 'surabaya'];

export const DIETARY = { badge: 'NO PORK · NO LARD' };

export const SURABAYA_NOTICE =
  'GoFood & GrabFood segera hadir di Surabaya. Sementara ini bisa WA kami.';

/* ------------------------------- Menu ---------------------------------- */

export type Category = 'gurih' | 'manis' | 'frozen';

export type MenuItem = {
  slug: string;
  name: string;
  desc: string;
  /** warna titik penanda isian */
  dot: string;
  dotName: string;
  /** PLACEHOLDER harga (Rupiah) */
  price: number;
  /** PLACEHOLDER harga coret untuk bundling */
  strikePrice?: number;
  categories: Category[];
  image: string;
  alt: string;
  composition: string;
  allergens: string;
  weight: string;
  frozenFriendly: boolean;
};

/**
 * PLACEHOLDER harga satuan & bundling. Semua angka di bawah masih dummy.
 * Foto memakai aset asli di assets/variants/ (14 varian nyata HOPPAO).
 * Deskripsi ditulis dari pengamatan visual foto karena resep pasti belum
 * dikonfirmasi klien — sesuaikan bila ada detail komposisi resmi.
 */
export const MENU: MenuItem[] = [
  {
    slug: 'beef-special',
    name: 'Beef Special',
    desc: 'Sapi cincang berbumbu kecap, gurih pekat',
    dot: '#D64545',
    dotName: 'Merah',
    price: 20000,
    categories: ['gurih', 'frozen'],
    image: '/assets/variants/beef-special.png',
    alt: 'Bakpao Beef Special dibelah memperlihatkan isian sapi cincang berbumbu kecap',
    composition: 'Sapi cincang, bawang, kecap manis, kulit bakpao.',
    allergens: 'Gandum, kedelai.',
    weight: '±80 g / pcs',
    frozenFriendly: true,
  },
  {
    slug: 'savoury-chicken',
    name: 'Savoury Chicken',
    desc: 'Ayam cincang gurih dengan sedikit lada',
    dot: '#E8A800',
    dotName: 'Amber',
    price: 18000,
    categories: ['gurih', 'frozen'],
    image: '/assets/variants/savoury-chicken.png',
    alt: 'Bakpao Savoury Chicken dibelah memperlihatkan isian ayam cincang gurih',
    composition: 'Ayam cincang, bawang putih, kecap asin, lada, kulit bakpao.',
    allergens: 'Gandum, kedelai.',
    weight: '±80 g / pcs',
    frozenFriendly: true,
  },
  {
    slug: 'oriental-chicken',
    name: 'Oriental Chicken',
    desc: 'Ayam suwir berbumbu rempah oriental',
    dot: '#C1652E',
    dotName: 'Terakota',
    price: 19000,
    categories: ['gurih', 'frozen'],
    image: '/assets/variants/oriental-chicken.png',
    alt: 'Bakpao Oriental Chicken dibelah memperlihatkan isian ayam suwir berbumbu',
    composition: 'Ayam suwir, daun bawang, merica, bumbu oriental, kulit bakpao.',
    allergens: 'Gandum, kedelai.',
    weight: '±80 g / pcs',
    frozenFriendly: true,
  },
  {
    slug: 'chicken-charsiu',
    name: 'Chicken Charsiu',
    desc: 'Ayam charsiu manis gurih ala dim sum',
    dot: '#8C3A2B',
    dotName: 'Bata',
    price: 19000,
    categories: ['gurih', 'frozen'],
    image: '/assets/variants/chicken-charsiu.png',
    alt: 'Bakpao Chicken Charsiu dibelah memperlihatkan isian ayam charsiu merah gurih manis',
    composition: 'Ayam, saus charsiu, bawang bombay, kulit bakpao.',
    allergens: 'Gandum, kedelai.',
    weight: '±80 g / pcs',
    frozenFriendly: true,
  },
  {
    slug: 'ham-and-cheese',
    name: 'Ham & Cheese',
    desc: 'Ham cincang dan keju leleh, favorit klasik',
    dot: '#C99A2E',
    dotName: 'Mustard',
    price: 20000,
    categories: ['gurih', 'frozen'],
    image: '/assets/variants/ham-and-cheese.png',
    alt: 'Bakpao Ham & Cheese dibelah memperlihatkan isian ham cincang dan keju leleh',
    composition: 'Ham cincang, keju cheddar, kulit bakpao.',
    allergens: 'Gandum, susu.',
    weight: '±80 g / pcs',
    frozenFriendly: true,
  },
  {
    slug: 'cheese',
    name: 'Cheese',
    desc: 'Krim keju lumer, lembut di setiap suapan',
    dot: '#FFC907',
    dotName: 'Kuning',
    price: 18000,
    categories: ['gurih', 'manis', 'frozen'],
    image: '/assets/variants/cheese.png',
    alt: 'Bakpao Cheese dibelah memperlihatkan isian krim keju lumer',
    composition: 'Krim keju, susu, mentega, kulit bakpao.',
    allergens: 'Gandum, susu.',
    weight: '±80 g / pcs',
    frozenFriendly: true,
  },
  {
    slug: 'almond-og',
    name: 'Almond OG',
    desc: 'Isian gurih berpadu almond, resep andalan kami',
    dot: '#A9743A',
    dotName: 'Karamel',
    price: 20000,
    categories: ['gurih', 'frozen'],
    image: '/assets/variants/almond-og.png',
    alt: 'Bakpao Almond OG dibelah memperlihatkan isian berpadu potongan almond',
    composition: 'Isian gurih, potongan almond, kulit bakpao.',
    allergens: 'Gandum, kacang pohon (almond), kedelai.',
    weight: '±80 g / pcs',
    frozenFriendly: true,
  },
  {
    slug: 'almond-choco',
    name: 'Almond Choco',
    desc: 'Coklat pekat bertabur potongan almond panggang',
    dot: '#6B7A3A',
    dotName: 'Zaitun',
    price: 19000,
    categories: ['manis', 'frozen'],
    image: '/assets/variants/almond-choco.png',
    alt: 'Bakpao Almond Choco dibelah memperlihatkan isian coklat dengan potongan almond',
    composition: 'Cokelat, potongan almond panggang, kulit bakpao.',
    allergens: 'Gandum, kacang pohon (almond), susu.',
    weight: '±80 g / pcs',
    frozenFriendly: true,
  },
  {
    slug: 'mung-bean',
    name: 'Mung Bean',
    desc: 'Kacang hijau kupas, manisnya pas',
    dot: '#7BA05B',
    dotName: 'Hijau',
    price: 15000,
    categories: ['manis', 'frozen'],
    image: '/assets/variants/mung-bean.png',
    alt: 'Bakpao Mung Bean dibelah memperlihatkan isian kacang hijau',
    composition: 'Kacang hijau kupas, gula, kulit bakpao.',
    allergens: 'Gandum.',
    weight: '±80 g / pcs',
    frozenFriendly: true,
  },
  {
    slug: 'ogura-red-bean',
    name: 'Ogura Red Bean',
    desc: 'Kacang merah Jepang, manis lembut khas ogura',
    dot: '#7A4B5E',
    dotName: 'Plum',
    price: 17000,
    categories: ['manis', 'frozen'],
    image: '/assets/variants/ogura-red-bean.png',
    alt: 'Bakpao Ogura Red Bean dibelah memperlihatkan isian kacang merah',
    composition: 'Kacang merah ogura, gula, kulit bakpao.',
    allergens: 'Gandum.',
    weight: '±80 g / pcs',
    frozenFriendly: true,
  },
  {
    slug: 'chocolate',
    name: 'Chocolate',
    desc: 'Coklat leleh klasik yang meluber saat dibelah',
    dot: '#3D2418',
    dotName: 'Cokelat',
    price: 18000,
    categories: ['manis', 'frozen'],
    image: '/assets/variants/chocolate.png',
    alt: 'Bakpao Chocolate dibelah dengan isian coklat leleh yang meluber',
    composition: 'Cokelat couverture, susu, mentega, kulit bakpao.',
    allergens: 'Gandum, susu, kedelai.',
    weight: '±80 g / pcs',
    frozenFriendly: true,
  },
  {
    slug: 'nutella',
    name: 'Nutella',
    desc: 'Krim coklat hazelnut yang creamy',
    dot: '#C9707A',
    dotName: 'Merah Muda',
    price: 20000,
    categories: ['manis', 'frozen'],
    image: '/assets/variants/nutella.png',
    alt: 'Bakpao Nutella dibelah memperlihatkan isian krim coklat hazelnut',
    composition: 'Krim coklat hazelnut, kulit bakpao.',
    allergens: 'Gandum, kacang pohon (hazelnut), susu.',
    weight: '±80 g / pcs',
    frozenFriendly: true,
  },
  {
    slug: 'milky-cheese',
    name: 'Milky Cheese',
    desc: 'Keju lembut dengan sentuhan susu manis',
    dot: '#9CC7DE',
    dotName: 'Biru Muda',
    price: 18000,
    categories: ['manis', 'frozen'],
    image: '/assets/variants/milky-cheese.png',
    alt: 'Bakpao Milky Cheese dibelah memperlihatkan isian krim keju susu',
    composition: 'Krim keju, susu kental manis, kulit bakpao.',
    allergens: 'Gandum, susu.',
    weight: '±80 g / pcs',
    frozenFriendly: true,
  },
  {
    slug: 'crunchy-peanut',
    name: 'Crunchy Peanut',
    desc: 'Kacang tanah renyah berbalut karamel gurih',
    dot: '#A3AE8E',
    dotName: 'Sage',
    price: 17000,
    categories: ['manis', 'frozen'],
    image: '/assets/variants/crunchy-peanut.png',
    alt: 'Bakpao Crunchy Peanut dibelah memperlihatkan isian kacang tanah renyah',
    composition: 'Kacang tanah cincang, karamel, kulit bakpao.',
    allergens: 'Gandum, kacang tanah.',
    weight: '±80 g / pcs',
    frozenFriendly: true,
  },
];

export const ALL_ITEMS: MenuItem[] = MENU;

export const FILTERS: { key: 'semua' | Category; label: string }[] = [
  { key: 'semua', label: 'Semua' },
  { key: 'gurih', label: 'Gurih' },
  { key: 'manis', label: 'Manis' },
  { key: 'frozen', label: 'Frozen' },
];

export const rupiah = (n: number) =>
  'Rp' + n.toLocaleString('id-ID', { maximumFractionDigits: 0 });

/* ------------------------------- Proses --------------------------------- */

export const PROCESS = [
  { title: 'Adonan diistirahatkan', body: 'Didiamkan sampai mengembang sempurna, bukan dipaksa cepat.' },
  { title: 'Isian dimasak segar', body: 'Dimasak pagi itu juga, tidak disimpan semalam.' },
  { title: 'Dilipat tangan', body: '18 lipatan, satu per satu, tanpa cetakan.' },
  { title: 'Dikukus 12 menit', body: 'Sampai kulitnya lembut dan mengilap.' },
];

/* ---------------------------- Testimoni --------------------------------- */

export const TESTIMONIALS = [
  { quote: 'Kulitnya lembut banget, isiannya nggak pelit.', name: 'Rani', source: 'GoFood' },
  { quote: 'Beli frozen buat stok di rumah, praktis.', name: 'Dimas', source: 'Instagram' },
  { quote: 'Pesan 200 pcs buat acara kantor, on time.', name: 'Sarah', source: 'WhatsApp' },
];

/* -------------------------------- FAQ ----------------------------------- */

export const FAQ: { q: string; a: string }[] = [
  {
    q: 'HOPPAO saat ini tersedia di mana saja?',
    a: `Saat ini HOPPAO tersedia di kota Yogyakarta & Surabaya.

YOGYAKARTA
📍 Peppermint Natural & Organics, Jl. Diponegoro 86 Jogja
📍 Pakuwon Mall Jogja, LG Floor
📍 Plaza Ambarrukmo, LG Floor

SURABAYA
📍 Pakuwon Mall Surabaya, Studio Food Court 1st Floor

Kami juga menerima pengiriman / pesanan untuk dikirim ke kota lain, untuk informasi lebih lanjut silakan WA kami.`,
  },
  {
    q: 'Apakah menerima pesanan?',
    a: 'Ya, kami menerima pesanan untuk segala acara (event, meeting, gathering, dll), silakan hubungi WA kami di 0822 6121 6121 (Jogja) atau 0882 6121 6121 (Surabaya) untuk informasi lebih lanjut.',
  },
  {
    q: 'Tersedia dalam bentuk frozen?',
    a: 'Tentu saja, silakan beri keterangan "FROZEN" di online order atau bisa WA kami untuk konfirmasi.',
  },
  {
    q: 'Apakah produk HOPPAO mengandung babi?',
    a: 'Tidak. Seluruh produk HOPPAO dibuat tanpa daging babi dan tanpa lemak babi (no pork, no lard).',
  },
];

/* ------------------------------ WhatsApp -------------------------------- */

export const waLink = (intl: string, text: string) =>
  `https://wa.me/${intl}?text=${encodeURIComponent(text)}`;

export const WA_TEXT = {
  umum: (city: string) =>
    `Halo HOPPAO ${city}, saya mau pesan bakpao. Boleh dibantu?`,
  frozen: () =>
    'Halo HOPPAO, saya mau pesan bakpao frozen untuk dikirim ke luar Jogja & Surabaya. Boleh info ongkir dan cara pesannya?',
  outlet: (outlet: string, city: string) =>
    `Halo HOPPAO ${city}, saya mau pesan dari outlet ${outlet}. Boleh dibantu?`,
  event: (d: { nama: string; pax: string; tanggal: string; kota: string }) =>
    `Halo HOPPAO, saya mau pesan untuk acara.\n\nNama: ${d.nama}\nJumlah pax: ${d.pax}\nTanggal acara: ${d.tanggal}\nKota: ${d.kota}\n\nMohon info paket dan harganya. Terima kasih.`,
};

/* ------------------------- Sosial & platform ---------------------------- */

export const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/hoppao.id' },
  { label: 'TikTok', href: 'https://tiktok.com/@hoppao.id' },
];

export const PLATFORM_COLOR: Record<Platform, string> = {
  GoFood: '#D64545',
  GrabFood: '#7BA05B',
  ShopeeFood: '#E8A800',
};

export const PLATFORM_LOGO: Record<Platform, string> = {
  GoFood: '/assets/logos/gofood-icon.png',
  GrabFood: '/assets/logos/grabfood-icon.png',
  ShopeeFood: '/assets/logos/shopeefood-icon.png',
};

export const WHATSAPP_LOGO = '/assets/logos/whatsapp.png';

/** Tautan merchant asli per kota (GoFood & GrabFood hanya ada di Jogja). */
export const PLATFORM_URL: Record<CityKey, Partial<Record<Platform, string>>> = {
  jogja: {
    GoFood: 'https://gofood.link/a/P3Gt69G',
    GrabFood: 'https://r.grab.com/g/2-1-6-C6W3LUBCVRLUWE',
    ShopeeFood:
      'https://shopee.co.id/universal-link/now-food/shop/21837414?deep_and_deferred=1&shareChannel=copy_info',
  },
  surabaya: {
    ShopeeFood:
      'https://shopee.co.id/universal-link/now-food/shop/22574183?deep_and_deferred=1&shareChannel=copy_link',
  },
};
