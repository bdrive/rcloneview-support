---
slug: migrate-citrix-sharefile-to-box-rcloneview
title: "Migrasi Citrix ShareFile ke Box — Transfer File dengan RcloneView"
authors:
  - morgan
description: "Migrasikan Citrix ShareFile ke Box dengan RcloneView. Hubungkan kedua remote, tinjau dengan Dry Run, salin folder antar-cloud, dan verifikasi dengan Folder Compare."
keywords:
  - migrasi Citrix ShareFile ke Box
  - migrasi ShareFile ke Box
  - transfer Citrix ShareFile Box
  - alat migrasi cloud ke cloud
  - RcloneView ShareFile
  - migrasi Box for Business
  - GUI migrasi file perusahaan
  - pindahkan folder ShareFile ke Box
  - rclone ShareFile Box
tags:
  - RcloneView
  - sharefile
  - box
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Citrix ShareFile ke Box — Transfer File dengan RcloneView

> Pindahkan pohon folder ShareFile ke Box secara cloud-ke-cloud, tinjau setiap perubahan terlebih dahulu, dan verifikasi hasilnya berdampingan — semuanya dari satu GUI.

Saat organisasi beralih sepenuhnya ke Box, arsip ShareFile berisi kontrak, hasil kerja untuk klien, dan folder proyek harus ikut dipindahkan. Mengunduh semuanya ke laptop lalu mengunggahnya kembali lambat dan rawan kesalahan. RcloneView menghubungkan kedua layanan sebagai remote dan menjalankan transfer melalui rclone, sehingga file berpindah langsung antara kedua cloud sementara Anda memantau progres di satu jendela.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan Citrix ShareFile dan Box

Buka **Remote tab > New Remote** dan pilih Citrix ShareFile. Selain masuk, ShareFile memerlukan **Root Folder ID**, yang memberi tahu rclone folder mana yang diperlakukan sebagai puncak remote. Jika Anda berencana bermigrasi per departemen, remote terpisah untuk setiap folder root membuat setiap job tetap kecil dan mudah diaudit.

Berikutnya, tambahkan Box. Box menggunakan OAuth: RcloneView membuka browser Anda, Anda masuk, dan koneksi disimpan tanpa kunci API yang perlu disalin. Jika organisasi Anda menggunakan Box for Business, atur `box_sub_type = enterprise` saat penyiapan agar remote menargetkan akun enterprise.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Citrix ShareFile and Box remotes in RcloneView" class="img-large img-center" />

Buka ShareFile di panel kiri dan Box di panel kanan. Menjelajahi keduanya berdampingan adalah pemeriksaan cepat bahwa Anda melihat folder yang diharapkan sebelum apa pun dipindahkan.

## Rencanakan Transfer dan Tinjau Terlebih Dahulu

Untuk migrasi sekali jalan, job **Copy** adalah pilihan yang hati-hati: job ini menambahkan file ke Box tanpa menghapus apa pun yang sudah ada di sana. Buat dari **Home tab > Sync** atau Job Manager, pilih folder ShareFile sebagai sumber dan folder Box sebagai tujuan, lalu beri nama job seperti `sharefile-legal-to-box`.

Pada langkah Advanced Settings, biarkan checksum nonaktif untuk pasangan ini: perbandingan checksum memerlukan jenis hash yang dimiliki kedua sisi, sedangkan ShareFile (MD5) dan Box (SHA-1) menggunakan jenis yang berbeda, sehingga rclone membandingkan berdasarkan ukuran dan waktu modifikasi. Jaga jumlah equality checker tetap moderat jika proses listing terasa lambat. Pada langkah Filtering, Anda dapat mengecualikan installer besar (`.iso`) atau folder lama yang sudah diputuskan untuk tidak disimpan.

Sebelum menjalankan, gunakan **Dry Run**. Fitur ini menampilkan daftar file yang akan disalin tanpa mentransfer apa pun, sehingga kantor hukum yang memindahkan 40.000 dokumen klien dapat memastikan cakupannya terlebih dahulu.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Citrix ShareFile to Box in RcloneView" class="img-large img-center" />

## Jalankan, Pantau, dan Verifikasi

Mulai job dan pantau progres, kecepatan, serta jumlah file di tab **Transferring**. Migrasi besar dapat dipecah menjadi beberapa job, satu per folder tingkat atas, sehingga satu kegagalan tidak menghambat yang lain. Setiap eksekusi dicatat di **Job History** beserta status, ukuran total, dan jumlah file, yang memberi Anda jejak audit untuk migrasi.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing completed ShareFile to Box migration runs" class="img-large img-center" />

Setelah job selesai, buka **Folder Compare** pada sumber dan tujuan. Filter file left-only untuk menemukan apa pun yang belum sampai, lalu gunakan Copy right untuk mengisi kekurangannya.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying ShareFile and Box contents" class="img-large img-center" />

## Memulai

RcloneView berjalan di Windows, macOS, dan Linux, serta dapat melakukan mount dan sinkronisasi 90+ penyedia dari satu jendela.

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Citrix ShareFile (dengan Root Folder ID-nya) dan Box sebagai remote.
3. Buat job Copy dari ShareFile ke Box dan jalankan Dry Run terlebih dahulu.
4. Jalankan job, lalu konfirmasi hasilnya dengan Folder Compare dan Job History.

Migrasi yang terencana dan terverifikasi membuat tim Anda dapat beralih ke Box tanpa khawatir ada folder yang tertinggal.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Citrix ShareFile — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-citrix-sharefile-cloud-sync-backup-rcloneview)
- [Kelola Penyimpanan Box — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Migrasi Citrix ShareFile ke Google Drive dengan RcloneView](https://rcloneview.com/support/blog/migrate-citrix-sharefile-to-google-drive-rcloneview)

<CloudSupportGrid />
