---
slug: migrate-koofr-to-google-drive-rcloneview
title: "Migrasi Koofr ke Google Drive — Transfer File dengan RcloneView"
authors:
  - tayson
description: "Pindahkan file Anda dari Koofr ke Google Drive dengan RcloneView. Transfer data cloud langsung antar penyedia, menjaga struktur folder tanpa perlu mengunduh ke lokal."
keywords:
  - migrasi Koofr ke Google Drive
  - transfer Koofr ke Google Drive
  - migrasi RcloneView Koofr Google Drive
  - alat migrasi cloud ke cloud
  - GUI migrasi Koofr
  - pindahkan file Koofr Google Drive
  - migrasi cloud Koofr
  - impor Google Drive dari Koofr
  - migrasi cloud RcloneView
  - alat transfer file Koofr
tags:
  - koofr
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Koofr ke Google Drive — Transfer File dengan RcloneView

> RcloneView memindahkan file Koofr Anda langsung ke Google Drive — menjaga struktur folder, memverifikasi integritas data, dan tanpa memerlukan penyimpanan lokal perantara.

Penyimpanan Koofr yang berbasis Eropa dan berfokus pada privasi populer di kalangan pengguna yang mengutamakan kepatuhan GDPR dan residensi data. Ketika tim beralih ke Google Workspace dan perlu memindahkan konten Koofr mereka ke Google Drive, RcloneView menangani migrasi tersebut dengan bersih: menghubungkan ke kedua penyedia secara bersamaan dan mentransfer data melalui jalur langsung cloud ke cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Koofr dan Google Drive di RcloneView

Tambahkan kedua penyedia sebagai remote sebelum memulai migrasi. Untuk Koofr, buka tab Remote > New Remote, pilih Koofr, dan selesaikan koneksi menggunakan kredensial Koofr Anda. Untuk Google Drive, pilih Google Drive dan selesaikan autentikasi OAuth melalui browser — alur OAuth Google Drive sepenuhnya otomatis dan tidak memerlukan API key.

Setelah kedua remote dikonfigurasi, penjelajah dua panel memungkinkan Anda melihat Koofr di satu sisi dan Google Drive di sisi lainnya. Perbandingan visual ini membantu Anda merencanakan migrasi: memastikan struktur folder, mengidentifikasi direktori bertingkat, dan memutuskan apakah akan memigrasikan seluruh root Koofr atau subfolder tertentu.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Koofr and Google Drive remotes in RcloneView" class="img-large img-center" />

## Menyiapkan Job Sinkronisasi Migrasi

Buat job sinkronisasi bernama di RcloneView untuk migrasi yang terkendali dan dapat diulang:

1. **Sumber:** Pilih remote Koofr Anda (root atau folder tertentu)
2. **Tujuan:** Pilih remote Google Drive Anda dan folder target
3. **Nama job:** Gunakan nama yang deskriptif seperti `koofr-to-gdrive-migration`
4. **Mode:** Pilih Copy untuk memindahkan file tanpa menghapusnya dari Koofr

Bagi tim yang memigrasikan direktori bersama berukuran besar, filter **Max folder depth** dapat membantu Anda memigrasikan folder tingkat atas secara independen, memvalidasi setiap tingkat sebelum melanjutkan.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring cloud-to-cloud transfer from Koofr to Google Drive in RcloneView" class="img-large img-center" />

## Pratinjau dengan Dry Run Sebelum Transfer

Gunakan mode dry run RcloneView untuk melihat pratinjau cakupan migrasi tanpa memindahkan file apa pun. Output dry run mencantumkan setiap file yang akan disalin, diorganisasi berdasarkan folder — memberi Anda gambaran akurat tentang apa yang akan dilakukan job tersebut. Ini sangat berguna saat memigrasikan struktur folder Koofr bertingkat di mana Anda ingin memverifikasi tata letak tujuan sebelum menjalankannya.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Koofr to Google Drive migration in RcloneView" class="img-large img-center" />

## Memantau Progres Transfer dan Meninjau Riwayat

Tab Transfer RcloneView menampilkan progres langsung untuk migrasi Koofr ke Google Drive — file yang sedang ditransfer, kecepatan saat ini, dan total byte yang dipindahkan. Setelah selesai, Job History mencatat ringkasan lengkap: total ukuran transfer, durasi, jumlah file, dan error yang mungkin terjadi. Jika batas rate API Google Drive memperlambat transfer, log riwayat mencatat kejadian retry tersebut.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Koofr to Google Drive migration in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Koofr dan Google Drive sebagai remote di tab Remote > New Remote.
3. Buat job Copy atau Sync dari Koofr ke tujuan Google Drive Anda.
4. Jalankan dry run untuk pratinjau, lalu jalankan migrasinya.

Berpindah dari Koofr ke Google Drive adalah operasi cloud ke cloud yang sederhana di RcloneView — tanpa memerlukan ruang disk lokal, dan transparansi penuh atas setiap file yang ditransfer.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan Koofr — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Mengelola Penyimpanan Google Drive — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Koofr vs Jottacloud — Perbandingan Penyimpanan Cloud Eropa dengan RcloneView](https://rcloneview.com/support/blog/koofr-vs-jottacloud-european-cloud-storage-rcloneview)

<CloudSupportGrid />
