---
id: mega-s4-m93a18
title: Mega S4 White Label Explorer (Preview)
description: Preview privat dari pengalaman desktop Mega S4 Explorer bermerek lengkap yang didukung oleh RcloneView.
hide_title: true
hide_table_of_contents: true
unlisted: true
---
<meta name="robots" content="noindex" />

# Mega S4 White Label Explorer (Preview)

Halaman ini adalah preview privat tentang bagaimana RcloneView dapat dihadirkan sebagai aplikasi desktop **Mega S4 Explorer** bermerek lengkap untuk pengguna Anda.

Tujuan dari proposal white-label ini adalah untuk:

- Menempatkan **merek Mega S4 di posisi paling depan** di seluruh produk.
- Membuatnya **mudah bagi pengguna untuk menghubungkan akun Mega S4 mereka** segera setelah instalasi.
- Memastikan **Mega S4 menjadi pilihan pertama** di setiap alur kerja manajemen dan navigasi.
- Menyediakan **dukungan dan pemeliharaan prioritas** khusus untuk deployment bermerek Mega S4.

---

## 1. Brand Kit & Integrasi Visual

Kami menyediakan brand kit di mana Mega S4 menjadi merek utama dan terlihat di seluruh produk. Semua branding RcloneView dihapus atau dipertahankan hanya jika secara hukum diwajibkan (misalnya, string versi internal).

Elemen utama:

- Nama aplikasi diatur menjadi **"Mega S4 Explorer"** (atau label lain yang disepakati).
- Semua logo RcloneView diganti dengan **logo Mega S4**:
  - Shortcut desktop dan ikon taskbar.
  - Ikon installer.
  - Header dalam aplikasi dan ikon window.
- Aksen warna disesuaikan agar sesuai dengan palet merek Mega S4 jika diperlukan.



<img src="/support/images/en/howto/remote-storage-connection-settings/mega-brandkit-example.png" alt="mega brandkit example" class="img-large img-center" />

---

## 2. Post‑Install Mega S4 Remote Wizard

Segera setelah instalasi, pengguna diarahkan untuk menghubungkan akun Mega S4 mereka sehingga mereka dapat mulai menggunakan layanan tanpa langkah pengaturan tambahan.

Perilaku utama:

- Di akhir wizard setup, membuka aplikasi akan menampilkan **"Add Mega S4 Remote"** sebagai alur onboarding default.
- Wizard disederhanakan dan telah dikonfigurasi sebelumnya untuk Mega S4:
  - Tipe provider dipilih sebelumnya sebagai **Mega S4**.
  - Hanya opsi khusus Mega S4 yang ditampilkan secara default.
  - Opsi lanjutan tetap tersedia di balik tautan **"Show advanced options"**.

<img src="/support/images/en/howto/remote-storage-connection-settings/post-install-mega-remote-wizard.png" alt="post install mega remote wizard" class="img-large img-center" />


### On-Home Quick Access Wizard

Jika pengguna melewati koneksi awal atau menutup wizard:

- Panel sisi kanan pada layar home menampilkan **tile Mega S4 berukuran besar**.
- Mengklik tile tersebut akan membuka kembali wizard **"Add Mega S4 Remote"** kapan saja.

<img src="/support/images/en/howto/remote-storage-connection-settings/on-home-quick-access-wizard-for-mega.png" alt="on home quick access wizard for mega" class="img-large img-center" />

 
Hal ini memastikan bahwa menghubungkan Mega S4 selalu menjadi aksi berikutnya yang paling terlihat bagi pengguna baru maupun yang kembali.

---

## 3. Navigasi & Manajemen yang Mengutamakan Mega S4

Setelah remote Mega S4 ditambahkan, UI dioptimalkan agar Mega S4 tetap terlihat menonjol di semua layar navigasi dan manajemen utama.

### 3.1 Panel Mega S4 Terpasang saat Peluncuran Ulang

Setelah remote Mega S4 dikonfigurasi:

- Pada peluncuran berikutnya, UI terbuka dengan **panel Mega S4 terpasang** secara default.
- Tata letak umum:
  - Sisi kiri: disk lokal atau sumber lainnya.
  - Sisi kanan: remote **MYMegaS4** milik pengguna.
- Pengguna dapat dengan bebas mengatur ulang panel melalui drag-and-drop, sehingga panel Mega S4 dapat dipindahkan antara sisi kiri dan kanan sesuai alur kerja yang mereka sukai.
- Ini membuat operasi sinkronisasi atau penyalinan berulang antara folder lokal dan Mega S4 menjadi aksi satu klik, terlepas dari sisi mana panel Mega S4 berada saat ini.

<img src="/support/images/en/howto/remote-storage-connection-settings/mega-panel-pinned-on-re-launch.png" alt="mega panel pinned on re launch" class="img-large img-center" />

### 3.2 Mega S4 Diutamakan di "New Remote" & "Remote Manager"

Untuk menonjolkan Mega S4 sebagai penyedia penyimpanan utama:

- Di dialog **New Remote**:
  - Mega S4 muncul di **bagian atas daftar provider**.
  - Tile Mega S4 disorot secara visual untuk mendorong pemilihan.
- Di **Remote Manager**:
  - Remote Mega S4 (misalnya, `MYMegaS4`) ditampilkan di **bagian atas daftar remote**.
  - Di tampilan daftar maupun kartu, remote Mega S4 ditekankan secara visual untuk akses yang lebih cepat.

<img src="/support/images/en/howto/remote-storage-connection-settings/maga-first-in-management-dialog.png" alt="maga first in management dialog" class="img-large img-center" />


---

## 4. Dukungan & Pemeliharaan Prioritas untuk Mega S4

Untuk deployment white-label Mega S4, kami menyediakan jalur dukungan dan pemeliharaan khusus.

Layanan yang termasuk:

- **Dokumentasi khusus**  
  - Halaman manual terpisah khusus untuk pengguna **Mega S4 Explorer**.  
  - Panduan langkah demi langkah untuk menghubungkan, melakukan sinkronisasi, dan troubleshooting dengan Mega S4.

- **Penanganan insiden prioritas**  
  - Masalah pengguna Mega S4 diprioritaskan dalam antrean dukungan.  
  - **Respons darurat** untuk insiden kritis yang memengaruhi pengguna Mega S4 (misalnya, kegagalan koneksi, masalah akses data).

- **Pembaruan produk berkelanjutan**  
  - Upgrade klien desktop rutin disertakan sebagai bagian dari perjanjian pemeliharaan.  
  - Kemampuan untuk merilis fitur RcloneView baru di bawah branding Mega S4 setelah persetujuan bersama.

---

## 5. Langkah Selanjutnya

Jika Anda ingin melanjutkan dengan produk white-label ini:

1. **Penyelarasan branding**
   - Konfirmasi panduan penggunaan logo Mega S4 dan warna merek.
   - Tentukan nama produk final (misalnya, *Mega S4 Explorer*).
2. **Definisi pengalaman**
   - Validasi alur onboarding dan perilaku yang mengutamakan Mega S4 seperti yang dijelaskan di atas.
   - Sesuaikan pengaturan default apa pun (misalnya, mode sinkronisasi default, path mount default).
3. **Build percontohan**
   - Kami akan menyerahkan build percontohan privat dan dokumentasi khusus Mega S4 untuk pengujian internal.

Halaman ini dan URL-nya ditujukan hanya untuk pemangku kepentingan Mega S4 dan mitra, serta tidak akan muncul di navigasi publik atau pencarian. Halaman ini dapat dibagikan dengan aman sebagai tautan langsung selama evaluasi dan diskusi percontohan.
