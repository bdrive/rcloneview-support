---
slug: migrate-onedrive-to-amazon-s3-rcloneview
title: "Migrasi OneDrive ke Amazon S3 — Transfer File dengan RcloneView"
authors:
  - tayson
description: "Migrasikan OneDrive ke Amazon S3 dengan RcloneView — transfer file cloud-to-cloud, arsipkan dokumen, dan kurangi ketergantungan pada penyimpanan Microsoft menggunakan GUI."
keywords:
  - OneDrive to Amazon S3 migration
  - OneDrive to S3 transfer
  - cloud migration tool
  - RcloneView OneDrive
  - S3 archive
  - OneDrive export
  - Microsoft to AWS migration
  - cloud-to-cloud transfer
  - OneDrive S3 backup
  - reduce OneDrive costs
tags:
  - onedrive
  - amazon-s3
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi OneDrive ke Amazon S3 — Transfer File dengan RcloneView

> OneDrive cocok untuk alur kerja Microsoft 365, tetapi S3 unggul dalam pengarsipan yang hemat biaya dan integrasi AWS — RcloneView memigrasikan konten OneDrive Anda langsung ke S3 tanpa perlu mengunduh ke lokal.

OneDrive terintegrasi secara alami ke dalam lingkungan Microsoft 365, tetapi organisasi yang mengurangi biaya lisensi Microsoft, mengonsolidasikan infrastruktur ke AWS, atau membutuhkan pengarsipan native S3 terkadang perlu memindahkan konten OneDrive ke Amazon S3. RcloneView menyediakan jalur migrasi cloud-to-cloud langsung — menghubungkan OneDrive dan S3 secara bersamaan dan mengalirkan data di antara keduanya tanpa memakan ruang disk lokal.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan OneDrive dan Amazon S3

Tambahkan **Microsoft OneDrive** di RcloneView melalui autentikasi browser OAuth — **Remote tab > New Remote > Microsoft OneDrive**. Kemudian tambahkan **Amazon S3** dengan Access Key ID, Secret Access Key, dan AWS Region Anda. Untuk akun OneDrive for Business, konfigurasikan remote agar menargetkan tenant organisasi Anda dan pustaka (library) yang sesuai.

<img src="/support/images/en/blog/new-remote.png" alt="Adding OneDrive and Amazon S3 remotes in RcloneView" class="img-large img-center" />

Setelah kedua remote aktif, jelajahi keduanya secara berdampingan di dual-panel explorer RcloneView — hierarki folder OneDrive di sebelah kiri, struktur bucket S3 Anda di sebelah kanan. Tampilan ini membantu Anda merencanakan pemetaan migrasi: folder OneDrive mana yang akan masuk ke prefix S3 yang mana.

## Mentransfer File

Di **Job Manager**, buat job **Copy** dari folder OneDrive Anda ke path bucket S3 tujuan. Untuk perusahaan yang memigrasikan 1,5 TB file proyek yang diarsipkan dari OneDrive ke S3, Copy (bukan Sync) adalah jenis job yang tepat — ini mempertahankan file sumber selama jendela migrasi berlangsung sambil menyalin semuanya ke S3, memberikan waktu untuk verifikasi sebelum penghapusan.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to Amazon S3 migration job in RcloneView" class="img-large img-center" />

Transfer multi-thread dan pengaturan jumlah file konkuren di Advanced Settings memaksimalkan throughput. Rclone yang menjadi dasar RcloneView menangani pembatasan (throttling) API OneDrive dan percobaan ulang otomatis — migrasi terus berjalan tanpa intervensi manual bahkan ketika penyedia layanan sementara membatasi laju permintaan (rate-limit).

## Verifikasi dan Pembersihan

Setelah migrasi, gunakan **Folder Compare** untuk memastikan semua file berhasil ditransfer dengan benar. Bandingkan sumber OneDrive dengan tujuan S3 — tampilan perbandingan menunjukkan file yang unik di masing-masing sisi dan file yang cocok, memberi Anda daftar periksa yang pasti sebelum menghapus konten OneDrive.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying OneDrive to S3 migration with Folder Compare in RcloneView" class="img-large img-center" />

Setelah dikonfirmasi, konten OneDrive dapat diarsipkan atau dihapus secara bertahap. Log **Job History** menyediakan catatan permanen migrasi — apa yang ditransfer, kapan, dan berapa banyak data yang dipindahkan — berguna untuk dokumentasi kepatuhan (compliance) saat menonaktifkan langganan Microsoft 365.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote **OneDrive** (OAuth) dan remote **Amazon S3** (kredensial Access Key).
3. Buat job **Copy** di Job Manager dari OneDrive ke bucket S3 Anda.
4. Gunakan **Folder Compare** untuk memverifikasi semua file telah ditransfer sebelum menghapus konten OneDrive.

Migrasi dari OneDrive ke Amazon S3 dengan RcloneView mengubah proyek IT yang rumit menjadi job otomatis yang terpantau dengan baik — dengan visibilitas dan verifikasi penuh di setiap langkah.

---

**Panduan Terkait:**

- [Migrasi OneDrive ke Google Drive dengan RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [Migrasi OneDrive ke Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)
- [Mengelola Penyimpanan Cloud OneDrive — Sinkronisasi dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
