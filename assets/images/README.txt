PANDUAN FOTO — WEBSITE EXPO CAMPUS SMANLI (ECS)
==================================================

Semua foto di website ini sudah punya "slot" masing-masing dengan nama file
tertentu. Kalau kamu memasukkan foto dengan nama & lokasi yang SAMA PERSIS
seperti daftar di bawah, foto otomatis muncul menggantikan kotak placeholder
putus-putus. Tidak perlu edit kode sama sekali.

Kalau nama file belum sesuai / foto belum ada, area tersebut akan otomatis
menampilkan kotak placeholder rapi berisi keterangan nama file yang
dibutuhkan — jadi tampilan tetap enak dilihat sementara foto belum lengkap.

------------------------------------------------------------
1) LOGO
------------------------------------------------------------
assets/images/logo/logo-ecs.png     -> sudah terisi (dari file yang kamu kirim)

------------------------------------------------------------
2) HERO SLIDER (foto geser di paling atas halaman utama)
------------------------------------------------------------
assets/images/hero/hero-1.jpg   (disarankan 1920x1080 / rasio 16:9, landscape)
assets/images/hero/hero-2.jpg
assets/images/hero/hero-3.jpg
assets/images/hero/hero-4.jpg

Mau nambah/kurangi jumlah foto slider? Buka index.html, cari komentar
"HERO SLIDER", lalu duplikasi/hapus blok <div class="hero__slide">...</div>
sesuai kebutuhan. Dot navigasi di bawah slider akan menyesuaikan otomatis.

------------------------------------------------------------
3) ABOUT (foto di bagian penjelasan ECS)
------------------------------------------------------------
assets/images/about/about-1.jpg   (rasio 4:5, potrait)

------------------------------------------------------------
4) SPONSOR & MEDIA PARTNER
------------------------------------------------------------
assets/images/sponsor/sponsor-1.png  ...  sponsor-4.png   (PNG transparan disarankan)
assets/images/partner/partner-1.png  ...  partner-4.png

Mau tambah logo lagi? Duplikasi blok <div class="sponsor__logo">...</div>
di index.html pada bagian SPONSOR, lalu ganti nomor urut nama filenya.

------------------------------------------------------------
5) HALAMAN EVENT — FOTO PANITIA (rasio 4:5, potrait, wajib konsisten)
------------------------------------------------------------
Formatnya: assets/images/team/{TAHUN}/{slug-jabatan}-{nomor}.jpg

Contoh untuk tahun 2027 (sama pola untuk 2024, 2025, 2026):
  team/2027/lead-ketua-pelaksana-1.jpg
  team/2027/lead-wakil-ketua-pelaksana-2.jpg
  team/2027/lead-sekretaris-3.jpg
  team/2027/lead-bendahara-4.jpg
  team/2027/lead-koordinator-acara-5.jpg
  team/2027/lead-koordinator-humas-publikasi-6.jpg
  team/2027/staff-staf-acara-1.jpg
  team/2027/staff-staf-humas-publikasi-2.jpg
  team/2027/staff-staf-perlengkapan-dekorasi-3.jpg
  team/2027/staff-staf-konsumsi-4.jpg
  team/2027/staff-staf-dokumentasi-5.jpg
  team/2027/staff-staf-keamanan-6.jpg

Nama file lengkap untuk tiap kartu bisa dilihat langsung di event.html
(tertulis di atribut data-label & src tiap kartu), atau buka websitenya
di browser lalu lihat tulisan kecil di kotak placeholder-nya.

Selain foto, jangan lupa ganti juga di event.html:
  - "Nama Panitia"            -> nama asli
  - "Universitas / Institut"  -> kampus/tujuan
  - "@username"                -> instagram panitia
  (Angkatan otomatis mengikuti tahun kepanitiaan, tinggal disesuaikan bila perlu)

------------------------------------------------------------
6) HALAMAN EVENT — DOKUMENTASI ACARA
------------------------------------------------------------
Formatnya: assets/images/dokumentasi/{TAHUN}/doc-{nomor}.jpg  (1 s/d 8)

Contoh: dokumentasi/2027/doc-1.jpg ... dokumentasi/2027/doc-8.jpg

------------------------------------------------------------
TIPS
------------------------------------------------------------
- Kompres foto dulu (contoh: squoosh.app / tinypng.com) supaya website tetap
  ringan & cepat diakses, terutama untuk foto hero dan dokumentasi.
- Jaga rasio foto sesuai keterangan (16:9 untuk hero, 4:5 untuk about &
  panitia) supaya hasil crop tetap rapi.
