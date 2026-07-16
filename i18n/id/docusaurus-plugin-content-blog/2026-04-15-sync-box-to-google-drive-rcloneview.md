---
slug: sync-box-to-google-drive-rcloneview
title: "Sinkronisasi Box ke Google Drive — Pencadangan Cloud dengan RcloneView"
authors:
  - tayson
description: "Sinkronkan Box ke Google Drive dengan RcloneView — transfer file, otomatiskan pencadangan, dan jaga kedua platform tetap ter-update menggunakan GUI cloud-to-cloud yang sederhana."
keywords:
  - Box to Google Drive sync
  - Box to Google Drive migration
  - cloud sync tool
  - RcloneView Box
  - Box backup
  - Google Drive archive
  - cloud-to-cloud sync
  - enterprise cloud transfer
  - Box Google Drive workflow
  - Box content migration
tags:
  - RcloneView
  - box
  - google-drive
  - cloud-to-cloud
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Box ke Google Drive — Pencadangan Cloud dengan RcloneView

> Box menangani kepatuhan enterprise dan berbagi file yang aman, sementara Google Drive menjadi tumpuan pengeditan kolaboratif — RcloneView menyinkronkan konten antara kedua platform secara langsung, tanpa perantara disk lokal.

Box banyak digunakan di lingkungan enterprise karena kontrol kepatuhannya dan berbagi file yang aman, sementara Google Drive mendukung alur kerja kolaboratif secara real-time. Ketika tim menggunakan kedua platform ini atau sedang beralih dari Box, menjaga konten tetap sinkron — atau memigrasikan file antar platform — memerlukan alat cloud-to-cloud yang andal. RcloneView menghubungkan Box dan Google Drive secara langsung, tanpa perlu mengunduh ke disk lokal.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Box dan Google Drive

Baik Box maupun Google Drive menggunakan autentikasi browser OAuth di RcloneView. Buka **Remote tab > New Remote**, pilih **Box**, dan selesaikan proses login browser. Ulangi proses yang sama untuk **Google Drive**. Kedua remote kemudian akan muncul sebagai tab di panel explorer, siap untuk langsung dijelajahi.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Google Drive remotes in RcloneView" class="img-large img-center" />

Untuk akun **Box for Business**, konfigurasikan pengaturan `box_sub_type` menjadi `enterprise` saat membuat remote. Ini memastikan RcloneView terhubung ke akun Box milik organisasi, bukan penyimpanan pribadi, sehingga memberikan akses ke folder bersama dan konten milik bisnis tersebut.

## Menjalankan Job Sinkronisasi

Di **Job Manager**, buat job sinkronisasi baru: sumbernya adalah folder Box Anda (atau subfolder tertentu seperti `/Projects/2026`), tujuannya adalah folder Google Drive target. Sinkronisasi RcloneView bersifat satu arah secara default — ia mencerminkan sumber ke tujuan tanpa mengubah konten sumber.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box to Google Drive sync job in RcloneView" class="img-large img-center" />

Untuk tim legal yang menyinkronkan file kasus yang telah selesai dari Box ke Google Drive untuk pengarsipan jangka panjang, memfilter berdasarkan usia file (Max File Age di Job settings Step 3) membatasi sinkronisasi hanya pada file yang baru saja dimodifikasi — sehingga ukuran transfer tetap terkendali. Pratinjau **Dry Run** memastikan dengan tepat file mana yang akan dipindahkan sebelum data benar-benar disentuh.

## Otomatisasi dan Pemantauan

Dengan lisensi PLUS, menjadwalkan sinkronisasi Box-ke-Google Drive memastikan kedua platform tetap terkini. Jadwal berbasis cron — misalnya, setiap hari Minggu tengah malam — menjalankan sinkronisasi secara otomatis tanpa perlu campur tangan pengguna.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Box to Google Drive sync in RcloneView" class="img-large img-center" />

Fitur **1:N synchronization** milik RcloneView bahkan memungkinkan Anda menyinkronkan satu folder Box ke beberapa tujuan Google Drive sekaligus — berguna untuk mencadangkan konten yang sama ke Team Drive bersama sekaligus folder arsip pribadi dalam satu job. **Job History** mencatat setiap eksekusi dengan statistik terperinci: jumlah file yang ditransfer, durasi, kecepatan, dan status.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote **Box** (OAuth) dan remote **Google Drive** (OAuth).
3. Buka **Job Manager** dan buat job sinkronisasi dari folder Box Anda ke Google Drive.
4. Aktifkan penjadwalan (PLUS) untuk mengotomatiskan sinkronisasi rutin.

Menyinkronkan Box ke Google Drive melalui RcloneView berarti konten Anda berpindah secara andal antar platform, sementara keduanya tetap terorganisir dan mudah diakses tanpa upaya manual.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Cloud Box — Sinkronisasi dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Migrasi Box ke Dropbox Tanpa Downtime dengan RcloneView](https://rcloneview.com/support/blog/zero-downtime-box-to-dropbox-rcloneview)
- [Migrasikan Box ke SharePoint dan OneDrive dengan RcloneView](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)

<CloudSupportGrid />
