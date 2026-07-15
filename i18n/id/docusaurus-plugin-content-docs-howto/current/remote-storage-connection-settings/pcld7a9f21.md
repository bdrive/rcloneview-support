---
id: pcld7a9f21
title: pCloud White Label Explorer (Pratinjau)
description: Pratinjau privat dari pengalaman desktop pCloud Explorer bermerek penuh yang didukung oleh RcloneView.
hide_title: true
hide_table_of_contents: true
unlisted: true
---
<meta name="robots" content="noindex" />

# pCloud White Label Explorer (Pratinjau)

Halaman ini adalah pratinjau privat tentang bagaimana RcloneView dapat dihadirkan sebagai aplikasi desktop **pCloud Explorer** yang bermerek penuh untuk pengguna Anda.

Tujuan dari proposal white-label ini adalah untuk:

- Menempatkan **merek pCloud sebagai pusat perhatian** di seluruh produk.
- Membuat proses **menghubungkan akun pCloud pengguna menjadi mudah** segera setelah instalasi.
- Memastikan **pCloud menjadi pilihan pertama** dalam setiap alur kerja manajemen dan navigasi.
- Menyediakan **dukungan dan pemeliharaan prioritas** khusus untuk penerapan bermerek pCloud.

---

## 1. Brand Kit & Integrasi Visual

Kami menyediakan brand kit di mana pCloud menjadi merek utama dan terlihat di seluruh produk. Semua branding RcloneView dihapus atau hanya dipertahankan jika secara hukum diwajibkan (misalnya, string versi internal).

Elemen utama:

- Nama aplikasi diatur menjadi **"pCloud Explorer"** (atau label lain yang disepakati).
- Semua logo RcloneView diganti dengan **logo pCloud**:
  - Shortcut desktop dan ikon taskbar.
  - Ikon installer.
  - Header dalam aplikasi dan ikon jendela.
- Aksen warna disesuaikan agar cocok dengan palet merek pCloud jika diperlukan.

<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-brandkit-examples.png" alt="pcloud brandkit examples" class="img-large img-center" />


---

## 2. Wizard Remote pCloud Pasca-Instalasi

Segera setelah instalasi, pengguna dipandu untuk menghubungkan akun pCloud mereka sehingga mereka dapat mulai menggunakan layanan tanpa langkah pengaturan tambahan.

Perilaku utama:

- Di akhir wizard pengaturan, membuka aplikasi akan menampilkan **"Add pCloud Remote"** sebagai alur onboarding default.
- Wizard disederhanakan dan telah dikonfigurasi sebelumnya untuk pCloud:
  - Tipe provider telah dipilih sebelumnya sebagai **pCloud**.
  - Hanya opsi khusus pCloud yang ditampilkan secara default.
  - Opsi lanjutan tetap tersedia di balik tautan **"Show advanced options"**.

<img src="/support/images/en/howto/remote-storage-connection-settings/post-install-pcloud-remote-wizard.png" alt="post install pcloud remote wizard" class="img-large img-center" />

### Wizard Akses Cepat di Halaman Utama

Jika pengguna melewati koneksi awal atau menutup wizard:

- Panel sebelah kanan pada layar utama menampilkan **tile pCloud berukuran besar**.
- Mengklik tile tersebut akan membuka kembali wizard **"Add pCloud Remote"** kapan saja.

<img src="/support/images/en/howto/remote-storage-connection-settings/on-home-quick-access-wizard.png" alt="on home quick access wizard" class="img-large img-center" />


Hal ini memastikan bahwa menghubungkan pCloud selalu menjadi tindakan berikutnya yang paling terlihat bagi pengguna baru maupun yang kembali.

---

## 3. Navigasi & Manajemen yang Mengutamakan pCloud

Setelah remote pCloud ditambahkan, UI dioptimalkan agar pCloud tetap menonjol di seluruh layar navigasi dan manajemen utama.

### 3.1 pCloud Drive di RcloneView Explorer

Ketika remote pCloud di-mount sebagai drive lokal:

- Drive pCloud (misalnya, `pCloud Drive (P:/)`) ditampilkan di **bagian atas daftar remote lokal RcloneView**.
- Drive tersebut menggunakan **ikon pCloud** sehingga terlihat berbeda secara visual dari drive lainnya.

<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-first-in-explorer.png" alt="pcloud first in explorer" class="img-medium img-center" />

### 3.2 Panel pCloud Disematkan Saat Dibuka Kembali

Setelah remote pCloud dikonfigurasi:

- Pada peluncuran berikutnya, UI akan terbuka dengan **panel pCloud tersemat** secara default.
- Tata letak umum:
  - Sisi kiri: disk lokal atau sumber lainnya.
  - Sisi kanan: remote **MYpCloud** milik pengguna.
- Hal ini membuat operasi sinkronisasi atau penyalinan berulang antara folder lokal dan pCloud menjadi tindakan satu klik.

<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-panel-pinned-on-re-launch.png" alt="pcloud panel pinned on re launch" class="img-large img-center" />


### 3.3 pCloud Diutamakan di "New Remote" & "Remote Manager"

Untuk menonjolkan pCloud sebagai penyedia penyimpanan utama:

- Di dialog **New Remote**:
  - pCloud muncul di **bagian atas daftar provider**.
  - Tile pCloud ditonjolkan secara visual untuk mendorong pemilihan.
- Di **Remote Manager**:
  - Remote pCloud (misalnya, `MYpCloud`) ditampilkan di **bagian atas daftar remote**.
  - Baik dalam tampilan daftar maupun kartu, remote pCloud ditonjolkan secara visual agar lebih cepat diakses.


<img src="/support/images/en/howto/remote-storage-connection-settings/pcloud-first-in-management-dialog.png" alt="pcloud first in management-dialog" class="img-large img-center" />

---

## 4. Dukungan & Pemeliharaan Prioritas untuk pCloud

Untuk penerapan white-label pCloud, kami menyediakan jalur dukungan dan pemeliharaan khusus.

Layanan yang termasuk:

- **Dokumentasi khusus**  
  - Halaman manual terpisah khusus untuk pengguna **pCloud Explorer**.  
  - Panduan langkah demi langkah untuk menghubungkan, menyinkronkan, dan mengatasi masalah dengan pCloud.

- **Penanganan insiden prioritas**  
  - Masalah pengguna pCloud diprioritaskan dalam antrean dukungan.  
  - **Respons darurat** untuk insiden kritis yang memengaruhi pengguna pCloud (misalnya, kegagalan koneksi, masalah akses data).

- **Pembaruan produk berkelanjutan**  
  - Peningkatan klien desktop secara berkala termasuk dalam perjanjian pemeliharaan.  
  - Kemampuan untuk meluncurkan fitur RcloneView baru dengan branding pCloud setelah mendapat persetujuan bersama.

---

## 5. Langkah Selanjutnya

Jika Anda ingin melanjutkan dengan produk white-label ini:

1. **Penyelarasan branding**
   - Konfirmasi pedoman penggunaan logo pCloud dan warna merek.
   - Tentukan nama produk final (misalnya, *pCloud Explorer*).
2. **Definisi pengalaman**
   - Validasi alur onboarding dan perilaku yang mengutamakan pCloud seperti dijelaskan di atas.
   - Sesuaikan pengaturan default apa pun (misalnya, mode sinkronisasi default, jalur mount default).
3. **Build percontohan**
   - Kami akan menyediakan build percontohan privat dan dokumentasi khusus pCloud untuk pengujian internal.

Halaman ini dan URL-nya ditujukan hanya untuk pCloud dan pemangku kepentingan mitra, dan tidak akan muncul dalam navigasi atau pencarian publik. Halaman ini dapat dibagikan dengan aman sebagai tautan langsung selama evaluasi dan diskusi percontohan.
