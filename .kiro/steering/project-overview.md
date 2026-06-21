# Martensite Workwear — Project Overview

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Font**: Inter (Google Fonts)
- **React**: v19

## Tentang Bisnis
**Martensite Workwear** adalah workshop produksi celana yang melayani local brand skala kecil.
- Minimum Order Quantity (MOQ): **24 pcs per artikel**
- Spesialisasi: **pants production** (baggy pants, board shorts, jorts)
- WhatsApp bisnis: `+6285777557575` → `https://wa.me/6285777557575`
- Instagram: `@martensite.workwear`
- Email: `martensiteworkwear@gmail.com`

---

## Struktur Halaman

| Route | File | Keterangan |
|---|---|---|
| `/` | `app/page.tsx` | Homepage: hero slideshow, why choose us, client marquee, about, services preview, archives |
| `/profile` | `app/profile/page.tsx` | Profil perusahaan, visi & misi, foto workshop |
| `/portfolio` | `app/portfolio/page.tsx` | Grid klien dengan modal gallery + carousel |
| `/services` | `app/services/page.tsx` | Daftar layanan + form kontak WhatsApp |
| `/archive` | `app/archive/page.tsx` | Placeholder "Coming Soon" (gallery di-comment) |
| `/contact` | `app/contact/page.tsx` | Why Choose Us + form kontak WhatsApp |

## Shared Components
- `app/components/Navbar.tsx` — sticky, animated pill indicator, hide on scroll (>150px), mobile hamburger
- `app/components/Footer.tsx` — 3 kolom: logo+deskripsi, contact info, nav links
- `app/layout.tsx` — wraps semua halaman dengan Navbar + Footer

---

## Warna & Tema
- Primary / background: `#EEE8D0` (krem) → defined sebagai `--color-primary` dan `--background`
- Foreground: `#171717`
- Dark section: `#1E1E1E`
- CSS global: `app/globals.css`

---

## Portfolio — Klien & File Gambar

### 1. CHMB (id: 1)
- **Category**: Contemporary Casual
- **Logo**: `/assets/img/product/chmblogo.jpg`
- **Produk**: chmbpants1.jpeg, chmbpants2.jpeg, chmbpants3.webp, chmbpants4.webp, chmbpants5.webp, chmbpants6.webp, chmbpants7.jpeg, chmbpants8.jpeg, chmbpants9.jpeg, chmbpants10.jpeg, chmbpants11.jpeg, chmbpants12.jpeg, chmbpants13.jpeg, chmbpants14.jpeg, chmbpants15.jpeg, chmbpants16.jpeg, chmbpants17.jpeg

### 2. SOULEVE (id: 2)
- **Category**: Outdoor & Heavy Duty
- **Logo**: `/assets/img/product/soulevelogo.jpg`
- **Produk**: soulevebsh.jpg, soulevebs.jpg

### 3. LAMERENCE (id: 3)
- **Category**: Premium Workwear
- **Logo**: `/assets/img/product/lamerencelogo.jpg`
- **Produk**: lamerenceb.jpeg, lamerenceb2.jpeg, lamerencej.jpeg, lamerencej2.jpeg

### 4. MAISON MONTAIRE (id: 4)
- **Category**: Premium Fashion
- **Logo**: `/assets/img/product/maisonlogo.jpeg`
- **Produk**: maisonpants1.jpeg, maisonpants2.jpeg

---

## Portfolio Modal — Cara Kerja
- Klik kartu → buka modal fullscreen
- `galleryImages[0]` = logo (tidak masuk carousel produk)
- `galleryImages.slice(1)` = foto produk yang ditampilkan di carousel
- Navigasi: tombol prev/next + thumbnail strip + counter "X / total"
- Close: tombol X, klik overlay, atau tekan Escape

---

## Aturan Penting Saat Menambah Konten

### Menambah brand baru ke Portfolio:
1. Taruh file gambar di `public/assets/img/product/`
2. Tambah entry baru di array `portfolioItems` di `app/portfolio/page.tsx`
3. Gunakan `id` berikutnya secara berurutan
4. `galleryImages[0]` harus berisi logo brand
5. Selanjutnya isi dengan foto produk
6. **Perhatikan ekstensi file** — selalu cek ekstensi asli file (`.jpg`, `.jpeg`, `.webp`), jangan asumsikan

### Menambah gambar produk ke brand yang sudah ada:
- Tambahkan entry baru di array `galleryImages` milik brand tersebut
- Ikuti pola: `{ image: "/assets/img/product/namafile.ext", description: "..." }`

---

## File Aset Lain
- Logo app: `public/assets/logomarten.svg`
- Profile photos: `public/assets/img/profile/profile1.jpeg`, `profile2.jpeg`
- Hero images di homepage: chmbpants1.jpeg, lamerenceb.jpeg, soulevebsh.jpg
