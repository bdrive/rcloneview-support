---
slug: fix-bandwidth-throttle-slow-uploads-rcloneview
title: "Perbaiki Upload Cloud yang Lambat — Optimalkan Bandwidth dan Kecepatan Transfer dengan RcloneView"
authors:
  - tayson
description: "Diagnosis dan perbaiki kecepatan upload cloud yang lambat di RcloneView. Sesuaikan transfer bersamaan, batas bandwidth, dan flag rclone untuk memaksimalkan performa upload ke penyedia cloud manapun."
keywords:
  - fix slow cloud uploads RcloneView
  - cloud upload speed optimization
  - RcloneView bandwidth tuning
  - slow cloud transfer troubleshooting
  - rclone upload speed fix
  - increase cloud sync speed
  - RcloneView transfer performance
  - fix slow backup uploads
  - cloud upload optimization guide
  - rclone concurrent transfers tuning
tags:
  - troubleshooting
  - tips
  - performance
  - optimization
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Upload Cloud yang Lambat — Optimalkan Bandwidth dan Kecepatan Transfer dengan RcloneView

> Ketika upload cloud di RcloneView terasa lebih lambat dari yang diharapkan, beberapa perubahan pengaturan yang tepat sasaran dapat meningkatkan throughput secara signifikan — berikut cara mendiagnosis dan memperbaiki hambatan performa yang umum terjadi.

Kecepatan upload cloud yang lambat adalah salah satu keluhan paling umum bagi pengguna RcloneView. Penyebab utamanya jarang terlihat jelas: bisa jadi jumlah transfer bersamaan yang terlalu sedikit, batas bandwidth yang tidak sengaja aktif, endpoint API yang dibatasi (throttled), atau ketidakcocokan antara MTU jaringan Anda dengan persyaratan penyedia cloud. Panduan ini membahas setiap kemungkinan penyebab secara sistematis agar Anda dapat mengidentifikasi dan menyelesaikan masalah dengan cepat.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Periksa dan Tingkatkan Transfer Bersamaan

Pengaturan yang paling berpengaruh terhadap throughput upload adalah **jumlah transfer file bersamaan**. Secara default, rclone mentransfer file secara berurutan atau dengan konkurensi terbatas. Pada konfigurasi sync job RcloneView (Langkah 2: Advanced Settings), tingkatkan pengaturan **Number of file transfers** — coba nilai 8 hingga 16 untuk koneksi berbandwidth tinggi. Setiap transfer bersamaan menambah throughput secara independen, sehingga secara efektif melipatgandakan kecepatan upload Anda.

Untuk penyedia seperti Amazon S3 dan Cloudflare R2 yang mendukung multipart upload, tingkatkan juga **Number of multi-thread transfers** (default: 4) untuk memparalelkan upload setiap file besar menjadi beberapa bagian (chunk). Ini sangat bermanfaat saat mengupload file video besar atau dump database.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Adjusting concurrent transfer settings in RcloneView sync job" class="img-large img-center" />

## Hapus Batas Bandwidth yang Tidak Disengaja

RcloneView meneruskan Global Rclone Flags dari Settings > Embedded Rclone ke setiap operasi. Periksa apakah flag `--bwlimit` atau `--bwlimit-file` diatur di sana — flag ini membatasi kecepatan upload sesuai nilai yang ditentukan. Jika sebelumnya Anda mengatur batas bandwidth untuk menghindari saturasi koneksi dan lupa menghapusnya, flag tersebut akan diam-diam membatasi semua upload Anda.

Hapus atau ubah flag `--bwlimit` di Settings > Embedded Rclone > Global Rclone Flags, lalu jalankan ulang sync job Anda untuk melihat apakah kecepatannya membaik.

<img src="/support/images/en/blog/new-remote.png" alt="Checking global rclone flags that might limit upload bandwidth" class="img-large img-center" />

## Periksa Batas Rate API di Sisi Penyedia

Beberapa penyedia cloud menerapkan batas rate (rate limit) yang dapat membuat upload tampak lambat. Google Drive membatasi jumlah panggilan API per pengguna per detik. Dropbox membatasi aplikasi yang membuat terlalu banyak permintaan. Amazon S3 memiliki batas permintaan per-prefix. Jika Anda melihat upload berjalan lambat dengan banyak file kecil namun lebih cepat dengan file besar, pembatasan rate API sering menjadi penyebabnya.

Di tab Log RcloneView, cari pesan yang mengandung `429 Too Many Requests` atau `Rate limit exceeded`. Jika ditemukan, kurangi jumlah transfer bersamaan agar tetap berada dalam batas API penyedia. Khusus untuk Google Drive, kurangi transfer bersamaan menjadi 4 dan batasi jumlah checker menjadi 8 atau kurang.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring transfer speed and detecting rate limits in RcloneView" class="img-large img-center" />

## Sesuaikan Ukuran Chunk Multi-Part Upload

Untuk file besar yang diupload ke penyedia yang kompatibel dengan S3, ukuran chunk untuk multipart upload memengaruhi throughput. RcloneView memungkinkan Anda memasukkan flag rclone lanjutan pada pengaturan kustom sync job. Menambahkan `--s3-chunk-size 64M` (meningkat dari default 5MB) mengurangi overhead panggilan API untuk upload file besar dan dapat secara signifikan meningkatkan throughput pada koneksi berbandwidth tinggi.

Demikian pula, untuk Backblaze B2, gunakan `--b2-chunk-size 100M` untuk upload file besar. Flag-flag ini dapat ditambahkan melalui kolom custom rclone flags pada konfigurasi sync job RcloneView.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Advanced sync job settings for tuning upload performance in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Pada pengaturan lanjutan sync job Anda, tingkatkan transfer bersamaan menjadi 8–16.
3. Periksa Settings > Embedded Rclone untuk flag `--bwlimit` yang mungkin membatasi kecepatan.
4. Tinjau tab Log untuk error rate limit dan kurangi konkurensi jika diperlukan.

Mengoptimalkan kecepatan upload di RcloneView adalah proses menyesuaikan konkurensi, menghapus batas yang tidak disengaja, dan menyelaraskan pengaturan Anda dengan karakteristik API masing-masing penyedia.

---

**Panduan Terkait:**

- [Percepat Transfer Cloud Besar dengan RcloneView](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)
- [Perbaiki Progres Transfer Cloud yang Macet — Atasi Upload yang Tersendat dengan RcloneView](https://rcloneview.com/support/blog/fix-cloud-transfer-stalled-progress-rcloneview)
- [Custom Rclone Flags dan Opsi Lanjutan di RcloneView](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)

<CloudSupportGrid />
