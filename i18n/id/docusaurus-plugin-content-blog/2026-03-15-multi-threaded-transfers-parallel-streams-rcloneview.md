---
slug: multi-threaded-transfers-parallel-streams-rcloneview
title: "Percepat Transfer Cloud — Unggahan Multi-Thread dan Parallel Streams di RcloneView"
authors:
  - tayson
description: "Transfer cloud tidak harus lambat. Pelajari cara menggunakan unggahan multi-thread, transfer file paralel, dan pengaturan optimasi transfer di RcloneView untuk memaksimalkan throughput."
keywords:
  - multi threaded cloud upload
  - parallel cloud transfer
  - speed up cloud sync
  - rclone parallel transfers
  - fast cloud upload
  - cloud transfer optimization
  - rcloneview transfer speed
  - concurrent cloud uploads
  - multi stream upload
  - maximize cloud transfer speed
tags:
  - performance
  - feature
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Percepat Transfer Cloud — Unggahan Multi-Thread dan Parallel Streams di RcloneView

> Mengunggah 500 GB ke S3 satu file dalam satu waktu bisa memakan waktu berhari-hari. Dengan transfer paralel dan unggahan multi-thread, waktunya hanya berjam-jam. Berikut cara mengonfigurasi RcloneView untuk kecepatan maksimal.

Secara default, alat transfer cloud memproses file secara berurutan dan mengunggah setiap file dalam satu stream saja. Cara ini nyaris tidak memanfaatkan kemampuan jaringan Anda dan penyedia cloud secara maksimal. RcloneView, yang didukung oleh rclone, mendukung transfer file paralel (banyak file secara bersamaan) sekaligus unggahan multi-thread (memecah file besar menjadi beberapa stream yang berjalan bersamaan). Mengonfigurasi kedua hal ini dengan benar dapat mengurangi waktu transfer secara signifikan.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dua Jenis Paralelisme

### Transfer file paralel

Mentransfer beberapa file secara bersamaan. Alih-alih mengunggah file 1, lalu file 2, lalu file 3 — unggah ketiganya secara bersamaan. Ini dikendalikan oleh pengaturan `--transfers` (default: 4).

### Unggahan multi-thread untuk satu file

Memecah satu file besar menjadi beberapa bagian dan mengunggahnya secara bersamaan. File video 10 GB dipecah menjadi beberapa bagian, masing-masing diunggah secara paralel, lalu digabungkan kembali di tujuan. Ini dikendalikan oleh `--multi-thread-streams` (default: 4).

## Cara Mengonfigurasi di RcloneView

### Menyesuaikan transfer paralel

Di pengaturan job atau melalui terminal RcloneView, atur jumlah transfer file yang berjalan bersamaan:

- **4 transfers** (default) — aman untuk sebagian besar situasi
- **8-16 transfers** — cocok untuk koneksi cepat dengan banyak file kecil
- **2-4 transfers** — lebih baik untuk koneksi lambat atau penyedia dengan batas rate yang ketat

### Menyesuaikan multi-thread streams

Untuk unggahan file besar, tingkatkan jumlah stream:

- **4 streams** (default) — performa seimbang
- **8-16 streams** — optimal untuk file besar pada koneksi cepat
- **1 stream** — gunakan untuk penyedia yang tidak mendukung unggahan multi-part

## Pantau Dampaknya

Amati kecepatan transfer secara real-time untuk melihat efek dari perubahan yang Anda buat:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer speed" class="img-large img-center" />

## Pengaturan Optimal Berdasarkan Skenario

| Skenario | Transfers | Streams | Alasan |
|----------|-----------|---------|-----|
| Banyak file kecil (foto, dokumen) | 16 | 1 | Overhead file mendominasi; lebih banyak file paralel membantu |
| Sedikit file besar (video, pencadangan) | 2-4 | 8-16 | Kecepatan file tunggal penting; lebih banyak stream membantu |
| Ukuran file campuran | 8 | 4 | Pendekatan seimbang |
| Jaringan lambat (< 50 Mbps) | 2-4 | 2-4 | Hindari membebani koneksi secara berlebihan |
| Jaringan cepat (> 500 Mbps) | 16+ | 8-16 | Gunakan seluruh bandwidth yang tersedia |
| Penyedia dengan batas rate | 2-4 | 4 | Tetap di bawah batas API |

## Tips Khusus per Penyedia

### Google Drive
Google menerapkan batas unggahan harian (750 GB) dan batas API per detik. Jaga transfers pada tingkat moderat (4-8) dan gunakan `--tpslimit` agar tetap di bawah batas rate.

### S3 / S3-Compatible
S3 menangani paralelisme tinggi dengan baik. Dorong transfers hingga 16+ dan streams hingga 8-16 untuk throughput maksimal.

### OneDrive
OneDrive bisa sensitif terhadap konkurensi tinggi. Mulai dengan 4 transfers dan tingkatkan secara bertahap.

### Backblaze B2
B2 menangani unggahan multi-part dengan baik. Gunakan 4-8 transfers dengan 4-8 streams.

## Menggunakan Terminal RcloneView untuk Penyetelan Lanjutan

Untuk penyetelan tingkat lanjut, gunakan terminal bawaan untuk menjalankan perintah rclone dengan flag tertentu. Uji berbagai konfigurasi dan ukur hasilnya dengan pemantauan real-time.

## Periksa Riwayat Job untuk Melihat Hasilnya

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Review transfer performance" class="img-large img-center" />

Bandingkan durasi job sebelum dan sesudah optimasi. Riwayat job menampilkan total waktu, jumlah file yang ditransfer, dan kecepatan rata-rata.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Mulai dengan pengaturan default** (4 transfers, 4 streams).
3. **Pantau kecepatan** selama transfer berlangsung.
4. **Tingkatkan secara bertahap** sesuai jaringan dan penyedia Anda.
5. **Bandingkan riwayat job** untuk mengukur peningkatan.

Semakin banyak paralelisme berarti transfer semakin cepat — hingga batas jaringan dan penyedia Anda.

---

**Panduan Terkait:**

- [Mengatasi Unggahan Cloud yang Lambat](https://rcloneview.com/support/blog/fix-slow-cloud-uploads-speed-optimization-rcloneview)
- [Mengatur Batas Bandwidth](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [Riwayat Job dan Log Transfer](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
