# Siaran Pers — PT Cyber International

Halaman web siaran pers resmi PT Cyber International — corporate-grade, dibuat menyerupai tampilan media profesional (gaya Kompas/CNN/Apple Newsroom).

## Isi
- **Judul:** Langkah Cepat PT Cyber International Tangani Gangguan Sistem Teknologi Informasi Internal
- **Tanggal:** Jakarta, 12 Juni 2020

## Struktur Proyek
```
PT-CYBER-INTERNATIONAL-PRESS-RELEASE/
│
├── index.html          # Halaman utama siaran pers
├── style.css            # Styling lengkap (header, quote box, kontak media, responsive, print)
├── script.js             # Print, Download PDF, Copy Link, Back to Top, animasi
│
├── logo.png              # Logo perusahaan — TINGGAL GANTI FILE INI, tanpa ubah kode
├── favicon.ico
│
├── assets/
│   ├── watermark.png    # Watermark background — ganti file ini untuk mengubah watermark
│   ├── bg.png            # Pola garis halus di background
│   └── icon.svg           # Ikon panah (back to top)
│
└── README.md
```

## Cara Mengganti Logo
Cukup timpa file `logo.png` dengan logo PNG Anda sendiri (disarankan rasio persegi, latar transparan). Tidak perlu mengubah baris kode apa pun — logo otomatis tampil di header.

Jika ingin watermark ikut berubah mengikuti logo baru, timpa juga `assets/watermark.png` dengan gambar yang sama.

## Fitur
- 🎨 Layout menyerupai mockup asli — header, garis gradasi ungu–oranye, tipografi berita, white space rapi
- 📰 Struktur siaran pers lengkap: eyebrow, headline, dateline, isi berita, quote box, bullet list, tentang perusahaan, kontak media, footer "AKHIR SIARAN PERS"
- 🖨 **Print** — cetak langsung dari browser (tombol di header & bawah artikel)
- 📄 **Download PDF** — via html2pdf.js (CDN), otomatis menyembunyikan tombol saat generate
- 🔗 **Copy Link** — salin URL halaman ke clipboard dengan notifikasi toast
- ⬆️ **Back to Top** — tombol melayang muncul saat scroll ke bawah
- 🖱 **Smooth Scroll** — navigasi halus di seluruh halaman
- 📱 Responsive penuh untuk HP & desktop
- 🌐 **SEO** — meta title, description, canonical URL
- 💬 **OpenGraph & Twitter Card** — preview otomatis saat dibagikan ke WhatsApp/Facebook/Twitter (judul, deskripsi, thumbnail logo)
- 🖼 Favicon dari logo perusahaan
- 💧 Watermark logo transparan di background (file terpisah, mudah diganti)
- ✨ Animasi reveal halus pada bullet list saat halaman dimuat

## Cara Pakai
1. Upload seluruh folder ini ke repository GitHub.
2. Aktifkan **GitHub Pages** (Settings → Pages → pilih branch `main` dan folder root).
3. Halaman akan aktif di `https://<username>.github.io/<nama-repo>/`.
4. (Opsional) Update URL `og:url`, `og:image`, dan `canonical` di `index.html` agar sesuai domain final Anda, supaya preview WhatsApp menampilkan link yang benar.

## Catatan
- Tombol Download PDF & font Inter membutuhkan koneksi internet (memuat dari CDN cdnjs.cloudflare.com dan fonts.googleapis.com).
- Ganti isi teks, tanggal, dan data kontak langsung di `index.html` sesuai kebutuhan rilis berikutnya.
- Preview WhatsApp/Facebook butuh domain publik yang bisa diakses (GitHub Pages sudah cukup) — preview tidak muncul saat file dibuka langsung dari komputer (`file://`).
