---
slug: migrate-jottacloud-to-google-drive-rcloneview
title: "Migrasi Jottacloud ke Google Drive — Transfer File dengan RcloneView"
authors:
  - tayson
description: "Panduan langkah demi langkah untuk memigrasikan file dari Jottacloud ke Google Drive menggunakan transfer cloud-to-cloud RcloneView — siapkan kedua remote dan jalankan pekerjaan migrasi Anda."
keywords:
  - Migrasi Jottacloud
  - Jottacloud ke Google Drive
  - Migrasi RcloneView
  - Transfer cloud-to-cloud
  - Ekspor Jottacloud
  - Migrasi penyimpanan cloud
  - rclone Jottacloud
  - Impor Google Drive
tags:
  - jottacloud
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Jottacloud ke Google Drive — Transfer File dengan RcloneView

> Memindahkan file Anda dari Jottacloud ke Google Drive sangat mudah dengan RcloneView — hubungkan kedua remote dan transfer langsung di cloud tanpa perlu mengunduh semuanya terlebih dahulu.

Jottacloud adalah layanan penyimpanan cloud asal Norwegia yang populer karena menawarkan penyimpanan tanpa batas, namun kini banyak pengguna ingin bermigrasi ke platform yang lebih universal seperti Google Drive. Baik Anda pindah karena perubahan paket, harga, atau sekadar ingin menyatukan penyimpanan cloud, RcloneView membuat proses migrasi menjadi bersih dan andal. Anda tidak perlu mengunduh semua file secara lokal terlebih dahulu — RcloneView mentransfernya langsung dari Jottacloud ke Google Drive sebagai operasi cloud-to-cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menyiapkan Remote Jottacloud Anda

Klik **New Remote** di RcloneView dan pilih **Jottacloud** dari daftar penyedia. RcloneView akan memandu Anda melalui proses autentikasi — Jottacloud menggunakan alur login berbasis perangkat di mana Anda masuk melalui browser, dan token yang dihasilkan disimpan secara aman di RcloneView. Setelah autentikasi, akun Jottacloud Anda akan muncul di explorer, termasuk arsip pribadi, folder pencadangan, dan konten bersama apa pun.

Sebelum memulai migrasi, jelajahi struktur folder Jottacloud Anda untuk memahami bagaimana konten Anda diorganisasi. Perhatikan nama folder dengan karakter khusus atau struktur yang bertingkat dalam, karena hal ini terkadang dapat menyebabkan masalah selama migrasi berskala besar.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Jottacloud as a remote in RcloneView" class="img-large img-center" />

## Menambahkan Google Drive

Klik **New Remote** lagi dan pilih **Google Drive**. RcloneView membuka tab browser untuk otorisasi OAuth Google — masuk dengan akun Google Anda dan berikan izin yang diminta. Setelah otorisasi selesai, remote Google Drive akan tersedia di explorer.

Buat folder tujuan di Google Drive sebelum memulai migrasi — misalnya, `Jottacloud Import/` — agar file yang dimigrasikan tetap terorganisasi dan terpisah dari konten yang sudah ada. Ini memudahkan Anda memverifikasi hasil migrasi tanpa kebingungan mengenai file mana yang berasal dari mana.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Google Drive and Jottacloud open side by side in RcloneView" class="img-large img-center" />

## Menjalankan Pekerjaan Migrasi

Setelah kedua remote dikonfigurasi, buka **Job Wizard** di Job Manager. Atur Jottacloud sebagai sumber (pilih folder tingkat atas atau subfolder tertentu yang ingin Anda migrasikan) dan folder tujuan Google Drive sebagai target. Pilih mode **Copy** alih-alih mode **Sync** untuk migrasi — ini memastikan file disalin tanpa menghapus apa pun di sumber.

Selalu jalankan **dry run** terlebih dahulu untuk melihat dengan tepat file mana yang akan ditransfer. Untuk akun Jottacloud besar dengan ribuan file, hasil dry run membantu Anda mendeteksi potensi masalah sebelum melakukan transfer penuh. Setelah puas, jalankan pekerjaan secara langsung. **Job Manager** RcloneView menampilkan progres secara langsung, dan **Job History** mencatat jumlah transfer akhir serta error apa pun.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Jottacloud to Google Drive migration job in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Klik **New Remote** > **Jottacloud** dan selesaikan autentikasi browser.
3. Klik **New Remote** > **Google Drive** dan selesaikan otorisasi OAuth.
4. Buat folder tujuan di Google Drive untuk konten yang dimigrasikan.
5. Gunakan **Job Wizard** untuk membuat pekerjaan copy, jalankan dry run, lalu jalankan migrasi penuh.

Dengan RcloneView, migrasi dari Jottacloud ke Google Drive adalah pekerjaan sekali jalan yang hanya membutuhkan waktu beberapa menit untuk disiapkan dan berjalan secara otomatis hingga selesai.

---

**Panduan Terkait:**

- [Kelola Jottacloud — Sinkronisasi dan Pencadangan Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Kelola Google Drive — Sinkronisasi dan Pencadangan Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Migrasi Jottacloud ke Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/migrate-jottacloud-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
