---
id: strj3b5c92
title: Storj White Label Explorer (Pratinjau)
description: Pratinjau privat dari pengalaman desktop Storj Explorer yang sepenuhnya bermerek dan didukung oleh RcloneView.
hide_title: true
hide_table_of_contents: true
unlisted: true
---
<meta name="robots" content="noindex" />

# Storj White Label Explorer (Pratinjau)

Halaman ini adalah pratinjau privat tentang bagaimana RcloneView dapat dihadirkan sebagai aplikasi desktop **Storj Explorer** yang sepenuhnya bermerek untuk pengguna Anda.

Tujuan dari proposal white-label ini adalah untuk:

- Menempatkan **merek Storj sebagai yang utama** di seluruh produk.
- Membuat **koneksi akun Storj menjadi mudah bagi pengguna** segera setelah instalasi.
- Memastikan **Storj menjadi pilihan pertama** dalam setiap alur kerja manajemen dan navigasi.
- Menyediakan **dukungan dan pemeliharaan prioritas** khusus untuk deployment bermerek Storj.

---

## 1. Brand Kit & Integrasi Visual

Kami menyediakan brand kit di mana Storj menjadi merek utama dan terlihat di seluruh produk. Semua branding RcloneView dihapus atau hanya dipertahankan jika secara hukum diwajibkan (misalnya, string versi internal).

Elemen utama:

- Nama aplikasi diatur menjadi **"Storj Explorer"** (atau label lain yang disepakati).
- Semua logo RcloneView diganti dengan **logo Storj**:
  - Pintasan desktop dan ikon taskbar.
  - Ikon installer.
  - Header dalam aplikasi dan ikon jendela.
- Aksen warna disesuaikan agar cocok dengan palet merek Storj bila memungkinkan.


<img src="/support/images/en/howto/remote-storage-connection-settings/storj-brandkit-example.png" alt="storj brandkit example" class="img-large img-center" />


---

## 2. Wizard Remote Storj Pasca-Instalasi

Segera setelah instalasi, pengguna dipandu untuk menghubungkan akun Storj mereka sehingga dapat langsung menggunakan layanan tanpa langkah pengaturan tambahan.

Perilaku utama:

- Di akhir wizard pengaturan, membuka aplikasi akan menampilkan **"Add Storj Remote"** sebagai alur onboarding default.
- Wizard disederhanakan dan dikonfigurasi terlebih dahulu untuk Storj:
  - Jenis provider dipilih terlebih dahulu sebagai **Storj**.
  - Hanya opsi khusus Storj yang ditampilkan secara default.
  - Opsi lanjutan tetap tersedia di balik tautan **"Show advanced options"**.

<img src="/support/images/en/howto/remote-storage-connection-settings/post-install-storj-remote-wizard.png" alt="post install storj remote wizard" class="img-large img-center" />

### Wizard Akses Cepat di Layar Home

Jika pengguna melewati koneksi awal atau menutup wizard:

- Panel sebelah kanan pada layar home menampilkan **ubin Storj berukuran besar**.
- Mengklik ubin tersebut akan membuka kembali wizard **"Add Storj Remote"** kapan saja.

<img src="/support/images/en/howto/remote-storage-connection-settings/on-home-quick-access-wizard-for-storj.png" alt="on home quick access wizard for storj" class="img-large img-center" />

Hal ini memastikan bahwa menghubungkan Storj selalu menjadi tindakan berikutnya yang paling terlihat bagi pengguna baru maupun pengguna lama.

---

## 3. Navigasi & Manajemen yang Mengutamakan Storj

Setelah remote Storj ditambahkan, UI dioptimalkan untuk membuat Storj tetap terlihat menonjol di semua layar navigasi dan manajemen utama.

### 3.1 Panel Storj Disematkan Saat Dibuka Kembali

Setelah remote Storj dikonfigurasi:

- Pada peluncuran berikutnya, UI terbuka dengan **panel Storj yang disematkan** secara default.
- Tata letak umum:
  - Sisi kiri: disk lokal atau sumber lainnya.
  - Sisi kanan: remote **MYStorj** milik pengguna.
- Pengguna dapat menyusun ulang panel secara bebas melalui drag-and-drop, sehingga panel Storj dapat dipindahkan antara sisi kiri dan kanan sesuai alur kerja yang mereka sukai.
- Hal ini membuat operasi sinkronisasi atau penyalinan berulang antara folder lokal dan Storj menjadi tindakan satu klik, terlepas dari sisi mana panel Storj berada saat itu.

<img src="/support/images/en/howto/remote-storage-connection-settings/storj-panel-pinned-on-re-launch.png" alt="storj panel pinned on re launch" class="img-large img-center" />


### 3.2 Storj Diutamakan pada "New Remote" & "Remote Manager"

Untuk menonjolkan Storj sebagai provider penyimpanan utama:

- Pada dialog **New Remote**:
  - Storj muncul di **bagian atas daftar provider**.
  - Ubin Storj disorot secara visual untuk mendorong pemilihan.
- Pada **Remote Manager**:
  - Remote Storj (misalnya, `MYStorj`) ditampilkan di **bagian atas daftar remote**.
  - Baik dalam tampilan daftar maupun kartu, remote Storj ditonjolkan secara visual untuk akses yang lebih cepat.



<img src="/support/images/en/howto/remote-storage-connection-settings/storj-first-in-management-dialog.png" alt="storj first in management dialog" class="img-large img-center" />

---

## 4. Dukungan & Pemeliharaan Prioritas untuk Storj

Untuk deployment white-label Storj, kami menyediakan jalur dukungan dan pemeliharaan khusus.

Layanan yang termasuk:

- **Dokumentasi khusus**  
  - Halaman panduan terpisah khusus untuk pengguna **Storj Explorer**.  
  - Panduan langkah demi langkah untuk menghubungkan, melakukan sinkronisasi, dan pemecahan masalah dengan Storj.

- **Penanganan insiden prioritas**  
  - Masalah pengguna Storj diprioritaskan dalam antrean dukungan.  
  - **Respons darurat** untuk insiden kritis yang memengaruhi pengguna Storj (misalnya, kegagalan koneksi, masalah akses data).

- **Pembaruan produk berkelanjutan**  
  - Pembaruan klien desktop secara berkala termasuk sebagai bagian dari perjanjian pemeliharaan.  
  - Kemampuan untuk merilis fitur baru RcloneView di bawah branding Storj setelah persetujuan bersama.

---

## 5. Langkah Selanjutnya

Jika Anda ingin melanjutkan dengan produk white-label ini:

1. **Penyelarasan branding**
   - Konfirmasi panduan penggunaan logo Storj dan warna merek.
   - Tentukan nama produk final (misalnya, *Storj Explorer*).
2. **Definisi pengalaman**
   - Validasi alur onboarding dan perilaku yang mengutamakan Storj seperti yang dijelaskan di atas.
   - Sesuaikan pengaturan default apa pun (misalnya, mode sinkronisasi default, path mount default).
3. **Build percontohan**
   - Kami menyediakan build percontohan privat dan dokumentasi khusus Storj untuk pengujian internal.

Halaman ini dan URL-nya hanya ditujukan untuk pemangku kepentingan Storj dan mitra, serta tidak akan muncul dalam navigasi publik atau pencarian. Halaman ini dapat dibagikan dengan aman sebagai tautan langsung selama evaluasi dan diskusi percontohan.

