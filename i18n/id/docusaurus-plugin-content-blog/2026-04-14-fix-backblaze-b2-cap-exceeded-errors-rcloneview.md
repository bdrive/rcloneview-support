---
slug: fix-backblaze-b2-cap-exceeded-errors-rcloneview
title: "Perbaiki Error Cap Exceeded Backblaze B2 — Selesaikan dengan RcloneView"
authors:
  - tayson
description: "Pelajari cara mendiagnosis dan memperbaiki error cap exceeded Backblaze B2 di RcloneView. Kendalikan kecepatan transfer, kelola batas harian, dan jaga pencadangan B2 Anda tetap berjalan dengan andal."
keywords:
  - Backblaze B2 cap exceeded error
  - B2 daily cap limit rclone
  - fix Backblaze B2 errors RcloneView
  - B2 transfer cap exceeded
  - Backblaze B2 troubleshooting
  - rclone B2 rate limit
  - Backblaze B2 backup errors
  - B2 upload cap fix
tags:
  - troubleshooting
  - backblaze-b2
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Cap Exceeded Backblaze B2 — Selesaikan dengan RcloneView

> Batas unduhan harian Backblaze B2 dapat menghentikan transfer di tengah sinkronisasi. Berikut cara mendiagnosis error cap exceeded di RcloneView dan mengonfigurasi job Anda agar tetap berada dalam batas.

Backblaze B2 menawarkan egress gratis yang cukup besar ke jaringan yang terhubung dengan Cloudflare (Cloudflare-peered), tetapi unduhan ke tujuan yang tidak terhubung akan mengurangi batas harian. Ketika batas tersebut tercapai, B2 mengembalikan error HTTP 403 dengan pesan "cap exceeded", yang menyebabkan job sinkronisasi RcloneView gagal atau berhenti. Panduan ini akan memandu Anda mengidentifikasi error, menyesuaikan konfigurasi transfer, dan menjadwalkan job agar tetap berada dalam batas harian akun B2 Anda.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengidentifikasi Error Cap Exceeded

Ketika batas B2 terlampaui, RcloneView menampilkan error tersebut di **tab Log** di bagian bawah antarmuka. Anda akan melihat entri yang berisi `403 Forbidden` dan pesan `Transaction cap exceeded` atau `Download cap exceeded`. Monitor transfer di tab Transferring menunjukkan job yang terpengaruh berhenti di 0 B/s.

Buka Rclone Terminal (tab Terminal) dan jalankan `rclone about b2-remote:` untuk memeriksa penggunaan penyimpanan dan transaksi Anda saat ini. Meskipun terminal tidak akan menampilkan batas cap yang pasti (itu diatur di konsol Backblaze), perintah ini memastikan remote dapat dijangkau dan menunjukkan status akun secara keseluruhan.

<img src="/support/images/en/blog/new-remote.png" alt="Checking Backblaze B2 remote configuration in RcloneView" class="img-large img-center" />

## Menyesuaikan Pengaturan Transfer untuk Menghindari Cap Exceeded

Perbaikan paling efektif adalah membatasi bandwidth transfer untuk menyebarkan unduhan ke beberapa hari. Di Global Rclone Flags RcloneView (tab Settings → Embedded Rclone → Global Rclone Flags), tambahkan `--bwlimit 10M` untuk membatasi bandwidth hingga 10 MB/s. Ini mengurangi konsumsi data harian dan menjaga transfer tetap dalam batas B2 Anda saat menjalankan sinkronisasi atau pemulihan berskala besar.

Untuk job yang dipicu oleh scheduler, sebar jadwalnya sepanjang hari. Alih-alih menjalankan pemulihan 200 GB pukul 6 pagi, bagi job tersebut berdasarkan kedalaman folder — gunakan aturan filter untuk memproses `Archive/2023/` terlebih dahulu, kemudian `Archive/2024/` dalam job terpisah pada siang hari. Aturan filter khusus RcloneView pada Langkah 3 dari wizard sinkronisasi memudahkan hal ini: gunakan pengecualian jalur folder untuk memisahkan setiap batch.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Backblaze B2 jobs to avoid daily cap in RcloneView" class="img-large img-center" />

## Memulihkan Sinkronisasi yang Gagal Setelah Cap Direset

Batas Backblaze B2 direset setiap hari pada tengah malam waktu Pasifik. Jika sebuah job gagal karena error cap exceeded, sinkronisasi RcloneView bersifat idempoten — ketika Anda menjalankan job yang sama lagi setelah reset, job tersebut akan melanjutkan dari titik terakhir, melewati file yang sudah ditransfer. Fitur Folder Compare memungkinkan Anda memverifikasi file mana yang sudah selesai sebelum kegagalan dengan membandingkan sumber dengan tujuan.

Untuk lebih amannya, aktifkan **Retry entire sync if fails** pada Langkah 2 dari wizard job (atur ke 3 kali percobaan ulang), dan pastikan interval percobaan ulang cukup panjang agar batas dapat direset. Periksa tab Job History secara berkala untuk menangkap kegagalan lebih awal dan tinjau status cap sebelum menjadwalkan transfer baru.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Backblaze B2 job failure history in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Periksa tab Log untuk error `403 cap exceeded` setelah job B2 gagal.
3. Tambahkan `--bwlimit` ke Global Rclone Flags untuk membatasi konsumsi data harian.
4. Jalankan ulang job sinkronisasi setelah batas harian direset — RcloneView secara otomatis melewati file yang sudah ditransfer.

Dengan penjadwalan yang cermat dan pembatasan bandwidth, Backblaze B2 tetap menjadi target pencadangan yang hemat biaya bahkan ketika bekerja dalam batasan cap harian.

---

**Panduan Terkait:**

- [Migrasi Backblaze B2 ke AWS S3 dengan RcloneView](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [Perbaiki Sinkronisasi Cloud yang Terputus dengan Retry Jaringan menggunakan RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-interrupted-network-retry-rcloneview)
- [Flag Rclone Kustom dan Opsi Lanjutan di RcloneView](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)

<CloudSupportGrid />
