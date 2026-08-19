# HOPPAO: Website

Next.js (App Router) + Tailwind CSS + GSAP. Seluruh copy di situs berbahasa Indonesia;
satu-satunya string Inggris adalah nama brand `HOPPAO` dan tagline
`Crafted with love, steamed to perfection`.

## Menjalankan

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Struktur

```
src/
  app/
    layout.tsx          navbar, footer, drawer, prompt kota, FAB, schema Restaurant
    page.tsx            beranda (semua seksi)
    menu/               katalog penuh + modal produk
    outlet/             4 outlet + peta
    pesanan-event/      landing B2B + form WhatsApp
    cerita/             cerita brand panjang
  components/           komponen UI (semua seksi beranda)
  data/site.ts          SUMBER DATA TUNGGAL (kota, WA, menu, FAQ, proses)
  lib/schema.tsx        JSON-LD: Restaurant + LocalBusiness, FAQPage, Product
public/assets/          logo, foto bakpao, hero.mp4
```

## ⚠️ Data yang masih placeholder

Semuanya terkumpul di **`src/data/site.ts`** dan ditandai komentar `PLACEHOLDER`:

1. **Harga per varian**: `MENU[].price`
2. **Harga bundling 6 & 12 pcs**: `BUNDLES[].price` / `.strikePrice`
3. **Jam buka per outlet**: `HOURS_PLACEHOLDER` (dipakai keempat outlet)

Tambahan yang perlu dikonfirmasi klien:
- `PLATFORM_URL`: tautan merchant GoFood / GrabFood / ShopeeFood yang asli
- `SOCIALS`: akun Instagram & TikTok
- Paket event di `src/components/EventOrder.tsx` (`PACKAGES`): harga masih dummy

Di UI, angka placeholder ditandai kata **(placeholder)** berwarna chili supaya tidak
terlanjur dianggap final.

## Aturan bisnis yang sudah tertanam di kode

- **Kota menentukan channel.** Surabaya hanya menampilkan ShopeeFood, disertai catatan
  `GoFood & GrabFood segera hadir di Surabaya. Sementara ini bisa WA kami.`
- **Tidak ada nomor WA bersama.** Setiap tautan WhatsApp mengikuti kota aktif
  (Jogja `6282261216121`, Surabaya `6288261216121`).
- **Seksi Outlet selalu menampilkan kedua kota** (berdampingan di desktop, tab di mobile).
  Sengaja tidak mengikuti city switcher.
- **Tidak ada klaim halal.** Klaim yang dipakai hanya `NO PORK · NO LARD`.
- Pilihan kota disimpan di `localStorage` (`hoppao.city`); prompt kunjungan pertama
  disimpan di `hoppao.cityPromptSeen`. Default: Jogja.

## Aset

`public/assets/hero.mp4` dipakai sebagai hero, dengan `pao-1.png` sebagai poster
sekaligus elemen LCP yang di-preload. Pada `prefers-reduced-motion: reduce` video
dihentikan dan hanya poster yang tampil.

Untuk mengganti foto, timpa berkas di `public/assets/` atau ubah path pada
`src/data/site.ts`. Markup tidak perlu disentuh. Semua `alt` sudah berbahasa Indonesia.

## Aksesibilitas & motion

- Fokus terlihat (`outline: 2px solid var(--cocoa)`), target sentuh ≥44px, `lang="id"`.
- Drawer dan modal: `role="dialog"`, `aria-modal`, focus trap, tutup dengan Esc.
- Akordeon FAQ: `aria-expanded` + `aria-controls`, item pertama terbuka.
- `prefers-reduced-motion: reduce` mematikan uap, marquee, dan reveal GSAP.
