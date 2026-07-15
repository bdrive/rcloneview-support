---
id: wsbi2b5c92
title: Wasabi White Label Explorer (Pratinjau)
description: Pratinjau privat dari pengalaman desktop Wasabi Explorer yang sepenuhnya bermerek, didukung oleh RcloneView.
hide_title: true
hide_table_of_contents: true
unlisted: true
---
<meta name="robots" content="noindex" />

# Wasabi White Label Explorer (Pratinjau)

Halaman ini merupakan pratinjau privat tentang bagaimana RcloneView dapat dihadirkan sebagai aplikasi desktop **Wasabi Explorer** yang sepenuhnya bermerek untuk pengguna Anda.

Tujuan dari proposal white-label ini adalah untuk:

- Menjadikan **merek Wasabi sebagai pusat perhatian** di seluruh produk.
- Membuatnya **mudah bagi pengguna untuk menghubungkan akun Wasabi mereka** segera setelah instalasi.
- Memastikan **Wasabi menjadi pilihan pertama** dalam setiap alur kerja manajemen dan navigasi.
- Menyediakan **dukungan dan pemeliharaan prioritas** khusus untuk deployment bermerek Wasabi.

---

## 1. Brand Kit & Integrasi Visual

Kami menyediakan brand kit di mana Wasabi menjadi merek utama dan terlihat di seluruh produk. Semua branding RcloneView dihapus atau hanya dipertahankan jika secara hukum diwajibkan (misalnya, string versi internal).

Elemen utama:

- Nama aplikasi diatur menjadi **"Wasabi Explorer"** (atau label lain yang disepakati).
- Semua logo RcloneView diganti dengan **logo Wasabi**:
  - Shortcut desktop dan ikon taskbar.
  - Ikon installer.
  - Header dalam aplikasi dan ikon window.
- Aksen warna disesuaikan dengan palet merek Wasabi jika diperlukan.


<img src="/support/images/en/howto/remote-storage-connection-settings/wasabi-brandkit-example.png" alt="wasabi brandkit example" class="img-large img-center" />

---

## 2. Wizard Remote Wasabi Pasca-Instalasi

Segera setelah instalasi, pengguna dipandu untuk menghubungkan akun Wasabi mereka sehingga dapat langsung mulai menggunakan layanan tanpa langkah pengaturan tambahan.

Perilaku utama:

- Di akhir wizard pengaturan, membuka aplikasi akan menampilkan **"Add Wasabi Remote"** sebagai alur onboarding default.
- Wizard disederhanakan dan telah dikonfigurasi sebelumnya khusus untuk Wasabi:
  - Tipe provider telah dipilih sebelumnya sebagai **Wasabi**.
  - Hanya opsi khusus Wasabi yang ditampilkan secara default.
  - Opsi lanjutan tetap tersedia di balik tautan **"Show advanced options"**.

<img src="/support/images/en/howto/remote-storage-connection-settings/post-install-wasabi-remote-wizard.png" alt="post install wasabi remote wizard" class="img-large img-center" />


### Wizard Akses Cepat di Home

Jika pengguna melewati koneksi awal atau menutup wizard:

- Panel sebelah kanan pada layar home menampilkan **ubin Wasabi berukuran besar**.
- Mengklik ubin tersebut akan membuka kembali wizard **"Add Wasabi Remote"** kapan saja.

<img src="/support/images/en/howto/remote-storage-connection-settings/on-home-quick-access-wizard-for-wasabi.png" alt="on home quick access wizard for wasabi" class="img-large img-center" />

Ini memastikan bahwa menghubungkan Wasabi selalu menjadi tindakan berikutnya yang paling terlihat bagi pengguna baru maupun yang kembali.

---

## 3. Navigasi & Manajemen yang Mengutamakan Wasabi

Setelah remote Wasabi ditambahkan, UI dioptimalkan agar Wasabi tetap terlihat menonjol di semua layar navigasi dan manajemen utama.

### 3.1 Panel Wasabi Dipasangkan (Pinned) Saat Diluncurkan Kembali

Setelah remote Wasabi dikonfigurasi:

- Pada peluncuran berikutnya, UI terbuka dengan **panel Wasabi yang di-pin** secara default.
- Tata letak umum:
  - Sisi kiri: disk lokal atau sumber lainnya.
  - Sisi kanan: remote **MYWasabi** milik pengguna.
- Pengguna dapat dengan bebas menyusun ulang panel melalui drag-and-drop, sehingga panel Wasabi dapat dipindahkan antara sisi kiri dan kanan sesuai alur kerja yang mereka inginkan.
- Ini membuat operasi sinkronisasi atau salin berulang antara folder lokal dan Wasabi menjadi tindakan satu klik, terlepas dari sisi mana panel Wasabi saat ini berada.

<img src="/support/images/en/howto/remote-storage-connection-settings/wasabi-panel-pinned-on-re-launch.png" alt="wasabi panel pinned on re launch" class="img-large img-center" />


### 3.2 Wasabi Ditampilkan Pertama di "New Remote" & "Remote Manager"

Untuk menonjolkan Wasabi sebagai penyedia penyimpanan utama:

- Pada dialog **New Remote**:
  - Wasabi muncul di **bagian teratas daftar provider**.
  - Ubin Wasabi disorot secara visual untuk mendorong pemilihan.
- Pada **Remote Manager**:
  - Remote Wasabi (misalnya, `MYWasabi`) ditampilkan di **bagian teratas daftar remote**.
  - Baik pada tampilan list maupun card, remote Wasabi ditonjolkan secara visual untuk akses yang lebih cepat.

<img src="/support/images/en/howto/remote-storage-connection-settings/wasabi-first-in-management-dialog.png" alt="wasabi first in management dialog" class="img-large img-center" />


---

## 4. Dukungan & Pemeliharaan Prioritas untuk Wasabi

Untuk deployment white-label Wasabi, kami menyediakan jalur dukungan dan pemeliharaan khusus.

Layanan yang disertakan:

- **Dokumentasi khusus**  
  - Halaman manual terpisah khusus untuk pengguna **Wasabi Explorer**.  
  - Panduan langkah demi langkah untuk menghubungkan, melakukan sinkronisasi, dan troubleshooting dengan Wasabi.

- **Penanganan insiden prioritas**  
  - Masalah pengguna Wasabi diprioritaskan dalam antrean dukungan.  
  - **Respons darurat** untuk insiden kritis yang memengaruhi pengguna Wasabi (misalnya, kegagalan koneksi, masalah akses data).

- **Pembaruan produk berkelanjutan**  
  - Pembaruan klien desktop secara berkala termasuk dalam perjanjian pemeliharaan.  
  - Kemampuan untuk merilis fitur RcloneView baru di bawah branding Wasabi setelah persetujuan bersama.

---

## 5. Langkah Selanjutnya

Jika Anda ingin melanjutkan dengan produk white-label ini:

1. **Penyelarasan branding**
   - Konfirmasi panduan penggunaan logo Wasabi dan warna merek.
   - Tentukan nama produk final (misalnya, *Wasabi Explorer*).
2. **Definisi pengalaman**
   - Validasi alur onboarding dan perilaku mengutamakan Wasabi yang dijelaskan di atas.
   - Sesuaikan pengaturan default apa pun (misalnya, mode sinkronisasi default, path mount default).
3. **Build percontohan (pilot)**
   - Kami akan menyerahkan build pilot privat dan dokumentasi khusus Wasabi untuk pengujian internal.

Halaman ini beserta URL-nya diperuntukkan hanya bagi Wasabi dan pemangku kepentingan mitra, dan tidak akan muncul di navigasi publik atau hasil pencarian. Halaman ini dapat dibagikan dengan aman sebagai tautan langsung selama evaluasi dan diskusi pilot.
