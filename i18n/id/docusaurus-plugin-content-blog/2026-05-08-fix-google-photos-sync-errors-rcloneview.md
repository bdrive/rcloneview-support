---
slug: fix-google-photos-sync-errors-rcloneview
title: "Perbaiki Error Sinkronisasi Google Photos — Cara Mengatasinya dengan RcloneView"
authors:
  - steve
description: "Atasi dan perbaiki error umum sinkronisasi Google Photos di RcloneView — termasuk batas kuota API, pembatasan unggah read-only, dan file media yang hilang."
keywords:
  - Google Photos sync errors RcloneView
  - fix Google Photos backup issues
  - Google Photos rclone errors
  - Google Photos API quota error
  - RcloneView Google Photos troubleshoot
  - Google Photos upload problems
  - fix cloud photo sync errors
  - Google Photos backup fix
tags:
  - google-photos
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Sinkronisasi Google Photos — Cara Mengatasinya dengan RcloneView

> Google Photos memiliki batasan API unik yang menyebabkan error sinkronisasi yang tidak terjadi pada penyedia lain. Berikut cara mengidentifikasi dan memperbaiki masalah paling umum di RcloneView.

Google Photos populer untuk penyimpanan foto pribadi, tetapi backend rclone-nya berperilaku berbeda dari cloud drive standar. Media yang sudah ada bersifat read-only (Anda dapat mengunggah foto baru tetapi tidak dapat menimpa atau menghapus melalui API), dan memiliki batas laju yang lebih ketat dibandingkan Google Drive. Memahami batasan ini adalah langkah pertama untuk mengatasi error saat menyinkronkan Google Photos dengan RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Error: "Failed to Upload" atau "403 Forbidden"

Penyebab paling umum kegagalan unggah ke Google Photos adalah melebihi kuota tulis API. Google menerapkan batas harian per pengguna untuk unggahan foto melalui API. Jika Anda mengunggah ribuan foto secara massal, Anda mungkin mencapai batas ini di tengah proses transfer.

Pada **tab Log** RcloneView, cari pesan yang mengandung `403` atau `userRateLimitExceeded`. Solusinya adalah mengurangi konkurensi transfer — buka Advanced Settings pada job Anda dan atur jumlah transfer file menjadi 2 atau 3. Aktifkan juga **Retry on failure** (atur retries ke 5 atau lebih) agar RcloneView secara otomatis mencoba ulang unggahan yang terkena throttle alih-alih menggagalkan seluruh job. Bagi unggahan batch besar ke beberapa hari jika diperlukan.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Google Photos upload rate in RcloneView" class="img-large img-center" />

## Error: "Can't Copy — Destination is Read Only"

Jika Anda melihat error tentang tujuan yang bersifat read-only, berarti Anda mencoba melakukan sinkronisasi dua arah atau menimpa foto yang sudah ada di Google Photos. API Google Photos tidak mengizinkan modifikasi atau penghapusan media yang sudah ada melalui rclone. RcloneView menghormati batasan ini.

Solusinya adalah mengonfigurasi job Anda sebagai **Copy** satu arah (bukan Sync) dari sumber Anda ke Google Photos. Ini akan mengunggah file baru tanpa mencoba menghapus atau menimpa apa pun di sisi Google Photos. Jika Anda perlu menghapus foto, lakukan secara manual di aplikasi web atau aplikasi mobile Google Photos.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring a Copy job to Google Photos in RcloneView" class="img-large img-center" />

## File Hilang Setelah Transfer

Google Photos mengatur media berdasarkan album dan tanggal pembuatan, bukan berdasarkan struktur folder asli. Ketika Anda menyinkronkan hierarki folder ke Google Photos, file akan masuk ke library tetapi mungkin tidak muncul di folder yang Anda harapkan. Ini adalah perilaku bawaan API Google Photos — struktur folder tidak dipertahankan.

Untuk mempertahankan organisasi folder Anda, pertimbangkan untuk menyinkronkan ke Google Drive, di mana subdirektori dipertahankan persis seperti di sumber Anda. Untuk keperluan arsip foto yang sesungguhnya, Backblaze B2 atau Amazon S3 dengan salinan struktur folder asli Anda merupakan solusi jangka panjang yang lebih andal.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing job history after a Google Photos sync attempt" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Periksa **tab Log** untuk kode error spesifik setelah sinkronisasi Google Photos gagal.
3. Untuk error batas laju, kurangi konkurensi menjadi 2–3 dan tingkatkan jumlah retry.
4. Gunakan tipe job **Copy**, bukan Sync, untuk menghindari error tujuan read-only.

Memahami batasan API Google Photos memungkinkan Anda mengonfigurasi RcloneView dengan benar sejak awal dan menghindari siklus percobaan ulang yang membuat frustrasi.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Cloud Google Photos dengan RcloneView](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)
- [Perbaiki Error Kuota dan Batas Laju Google Drive](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [Sinkronkan Google Photos ke Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/sync-google-photos-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
