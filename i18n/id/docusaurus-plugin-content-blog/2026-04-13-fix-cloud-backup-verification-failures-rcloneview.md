---
slug: fix-cloud-backup-verification-failures-rcloneview
title: "Mengatasi Kegagalan Verifikasi Pencadangan Cloud — Pastikan Integritas Data dengan RcloneView"
authors:
  - tayson
description: "Atasi ketidakcocokan checksum dan kegagalan verifikasi pencadangan cloud di RcloneView. Gunakan Folder Compare, periksa pengaturan, dan jalankan ulang transfer untuk memastikan integritas data."
keywords:
  - kegagalan verifikasi pencadangan cloud RcloneView
  - ketidakcocokan checksum sinkronisasi cloud
  - perbaiki error integritas pencadangan rclone
  - error checksum transfer cloud
  - pemeriksaan integritas data RcloneView
  - kegagalan verifikasi checksum rclone
  - perbaikan korupsi pencadangan rclone
  - pemecahan masalah verifikasi sinkronisasi cloud
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengatasi Kegagalan Verifikasi Pencadangan Cloud — Pastikan Integritas Data dengan RcloneView

> Ketidakcocokan checksum setelah transfer cloud dapat menandakan perbedaan penyedia layanan atau kerusakan data yang sebenarnya — memahami skenario mana yang sedang Anda hadapi menentukan perbaikan yang tepat.

Setelah pencadangan besar selesai, Anda mungkin mengalami kegagalan verifikasi: ketidakcocokan checksum, file yang ditandai berbeda padahal seharusnya identik, atau error pada alat perbandingan RcloneView. Kegagalan ini dapat memiliki beberapa penyebab, mulai dari perbedaan metadata penyedia yang tidak berbahaya hingga kerusakan data yang sesungguhnya. Panduan ini menjelaskan cara mendiagnosis setiap skenario dan menerapkan perbaikan yang tepat.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Memahami Jenis-Jenis Checksum

Penyedia cloud yang berbeda mendukung algoritme checksum yang berbeda pula. AWS S3 menggunakan MD5 (untuk unggahan standar) dan SHA-256 (untuk checksum). Google Drive menggunakan MD5. Backblaze B2 menggunakan SHA1. Dropbox menggunakan block hash khusus. Ketika rclone membandingkan file antara dua penyedia yang menggunakan algoritme hash berbeda, rclone akan beralih ke perbandingan ukuran dan waktu modifikasi, bukan perbandingan hash.

Artinya, "ketidakcocokan" pada tampilan Folder Compare RcloneView belum tentu menandakan kerusakan — bisa jadi itu menandakan bahwa kedua penyedia menggunakan jenis hash yang tidak kompatibel dan rclone hanya membandingkan berdasarkan ukuran. Kerusakan yang sesungguhnya ditunjukkan dengan ukuran yang cocok tetapi nilai hash berbeda pada algoritme yang sama.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to identify backup verification failures" class="img-large img-center" />

## Mengaktifkan Verifikasi Checksum pada Sync Job

Untuk mendeteksi kerusakan sesungguhnya saat transfer, aktifkan verifikasi checksum pada pengaturan sync job Anda. Di RcloneView, buka job tersebut lalu pergi ke langkah 2. Aktifkan opsi **checksum**. Dengan opsi ini aktif, rclone akan menghitung dan membandingkan hash selama transfer. Jika hash suatu file tidak cocok setelah diunggah, rclone akan mencoba ulang transfer tersebut.

Catatan: mengaktifkan verifikasi checksum sedikit meningkatkan penggunaan CPU dan waktu transfer, tetapi mampu mendeteksi kerusakan data yang jika tidak diaktifkan bisa saja luput terdeteksi.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Enabling checksum verification in RcloneView sync job settings" class="img-large img-center" />

## Menggunakan Folder Compare untuk Mendeteksi Ketidakcocokan

Setelah pencadangan selesai, buka **Folder Compare** di RcloneView. Arahkan satu sisi ke sumber Anda dan sisi lainnya ke tujuan pencadangan. RcloneView menampilkan file dalam tiga kategori:

- **Match**: sama di kedua sisi
- **Source only**: ada di sumber tetapi tidak ada di tujuan
- **Destination only**: ada di tujuan tetapi tidak ada di sumber
- **Different**: nama sama tetapi atribut berbeda (ukuran, hash, atau waktu modifikasi)

File dalam kategori "Different" perlu diperiksa lebih lanjut. Unduh dan bandingkan beberapa sampel untuk menentukan apakah kontennya benar-benar berbeda atau hanya artefak metadata dari penyedia layanan.

## Menjalankan Pemeriksaan melalui Terminal

Untuk pemeriksaan integritas yang lebih mendalam, tab **Terminal** RcloneView memungkinkan Anda menjalankan perintah rclone secara langsung. Gunakan `rclone check` untuk membandingkan sumber dan tujuan secara menyeluruh:

```
rclone check source:path destination:path --one-way
```

Perintah ini menampilkan daftar setiap file yang berbeda di antara kedua sisi, menggunakan hash terbaik yang tersedia untuk masing-masing penyedia. Output tersebut menunjukkan secara persis file mana yang tidak cocok, sehingga lebih mudah mengidentifikasi apakah masalahnya bersifat sistematis atau terisolasi.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running rclone check command in RcloneView Terminal" class="img-large img-center" />

## Menjalankan Ulang dengan Pengaturan Berbeda

Jika kegagalan verifikasi terus terjadi dan file memang benar-benar berbeda, jalankan ulang job pencadangan dengan:

- **Verifikasi checksum diaktifkan**: memastikan rclone mentransfer ulang dan memvalidasi
- **Ignore existing**: memaksa transfer ulang bahkan untuk file yang tampak sudah ada
- **Low level retries ditingkatkan**: memberi lebih banyak kesempatan untuk transfer yang berhasil

Untuk pencadangan lintas penyedia yang algoritme hash-nya berbeda, alihkan ke mode perbandingan **size and modification time** alih-alih perbandingan berbasis hash saja pada pengaturan lanjutan job. Ini mengurangi positif palsu akibat ketidakcocokan hash.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Aktifkan **verifikasi checksum** pada opsi transfer langkah 2 sync job Anda.
3. Setelah pencadangan selesai, gunakan **Folder Compare** untuk mengidentifikasi ketidaksesuaian.
4. Untuk analisis lebih mendalam, jalankan `rclone check` dari tab **Terminal**.

Verifikasi checksum yang sistematis dan perbandingan pasca-pencadangan memberi Anda keyakinan bahwa pencadangan cloud Anda akurat byte demi byte.

---

**Panduan Terkait:**

- [Mengatasi Ketidakcocokan Checksum Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-checksum-mismatch-rcloneview)
- [Migrasi Cloud Terverifikasi Checksum dengan RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [Mengatasi File Hilang pada Sinkronisasi Cloud Setelah Transfer](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
