---
slug: manage-idrive-e2-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan IDrive E2 — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - tayson
description: "Hubungkan IDrive E2 ke RcloneView dan kelola bucket yang kompatibel dengan S3 menggunakan GUI. Sinkronkan IDrive E2 ke Google Drive, Amazon S3, dan cloud lainnya dengan mudah."
keywords:
  - IDrive E2
  - IDrive E2 sync
  - IDrive E2 backup
  - IDrive E2 RcloneView
  - IDrive E2 S3 compatible
  - IDrive E2 cloud management
  - IDrive E2 to S3
  - IDrive E2 to Google Drive
  - S3-compatible storage GUI
  - cloud storage sync
tags:
  - RcloneView
  - idrive-e2
  - s3-compatible
  - cloud-storage
  - backup
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan IDrive E2 — Sinkronisasi dan Pencadangan File dengan RcloneView

> Tambahkan IDrive E2 ke RcloneView dan kelola bucket yang kompatibel dengan S3 bersama Google Drive, Amazon S3, Backblaze B2, dan lebih dari 90 layanan penyimpanan cloud lainnya.

IDrive E2 adalah layanan object storage yang kompatibel dengan S3 dan hemat biaya, populer di kalangan developer dan bisnis yang mencari alternatif terjangkau untuk Amazon S3 dengan tetap mempertahankan kompatibilitas API. Dukungan RcloneView untuk penyedia yang kompatibel dengan S3 berarti Anda dapat menghubungkan bucket IDrive E2 Anda ke GUI dan menangani sinkronisasi, pencadangan, serta migrasi lintas-cloud tanpa perlu menulis skrip command-line.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menyiapkan IDrive E2 di RcloneView

IDrive E2 menggunakan kredensial standar yang kompatibel dengan S3: Access Key ID, Secret Access Key, dan endpoint URL yang terkait dengan region yang Anda pilih. Anda dapat membuat kredensial ini dari portal akun IDrive E2 Anda. Setelah memilikinya, buka RcloneView, buka tab Remote, dan klik New Remote. Pilih Amazon S3 sebagai jenis penyedia dan konfigurasikan dengan endpoint URL dan kredensial IDrive E2 Anda.

Setelah disimpan, remote IDrive E2 Anda akan muncul di File Explorer. Jelajahi bucket dan objek secara langsung, periksa ukuran file dan stempel waktu modifikasi, serta gunakan operasi klik kanan untuk menyalin, memindahkan, menghapus, atau mengunduh file. Bilah jalur breadcrumb menampilkan lokasi Anda saat ini di dalam sebuah bucket, dengan saran pelengkapan otomatis saat Anda menelusuri struktur folder yang lebih dalam.

<img src="/support/images/en/blog/new-remote.png" alt="Adding IDrive E2 as a remote in RcloneView" class="img-large img-center" />

## Menyinkronkan IDrive E2 ke Cloud Lain

Organisasi yang menggunakan IDrive E2 sebagai target pencadangan utama sering kali ingin mereplikasi bucket penting ke penyedia sekunder untuk redundansi geografis atau failover penyedia. RcloneView membuat hal ini menjadi mudah: buat job sinkronisasi dengan bucket IDrive E2 Anda sebagai sumber dan Amazon S3, Cloudflare R2, atau Google Drive sebagai tujuan.

Wizard sinkronisasi 4 langkah menangani konfigurasinya: pemilihan storage, pengaturan transfer lanjutan (transfer bersamaan, verifikasi checksum), aturan pemfilteran (mengecualikan file besar, ekstensi tertentu), dan penjadwalan opsional. Aktifkan verifikasi checksum untuk memastikan setiap objek ditransfer secara utuh — ini sangat penting untuk arsip biner dan dump database yang disimpan di IDrive E2.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing IDrive E2 bucket to Amazon S3 with RcloneView" class="img-large img-center" />

Scheduled sync (lisensi PLUS) menjalankan replikasi IDrive E2 Anda secara otomatis pada interval yang ditentukan. Job History mencatat waktu mulai, durasi, jumlah file yang ditransfer, dan status akhir setiap kali dijalankan — memberi Anda jejak audit yang persisten tanpa perlu memelihara skrip eksternal atau cron job.

## Memantau Transfer Aktif

Saat menjalankan sinkronisasi IDrive E2 berskala besar, tab Transferring di bagian bawah RcloneView menampilkan progres langsung: file yang sedang ditransfer, jumlah kumulatif, dan status sinkronisasi secara keseluruhan. Anda dapat membatalkan job yang sedang berjalan langsung dari tampilan ini jika diperlukan, dan tab Log mencatat entri berstempel waktu untuk membantu menelusuri kesalahan yang muncul.

Untuk beban kerja bervolume tinggi, menyesuaikan Number of File Transfers pada langkah Advanced Settings di wizard sinkronisasi mengontrol berapa banyak objek yang ditransfer secara bersamaan. Pengaturan multi-thread transfers (default: 4) menangani unggahan berpotongan (chunked) untuk objek yang lebih besar.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring IDrive E2 sync progress in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buat Access Key ID dan Secret Access Key IDrive E2 dari portal akun IDrive Anda.
3. Tambahkan remote baru yang kompatibel dengan S3 di RcloneView dengan endpoint dan kredensial IDrive E2 Anda.
4. Buat job sinkronisasi untuk mencadangkan bucket IDrive E2 ke penyimpanan sekunder Anda secara berkala sesuai jadwal.

Dengan RcloneView, bucket IDrive E2 Anda semudah penyimpanan cloud lainnya untuk dikelola — terlihat di file browser, dapat dikonfigurasi dengan job sinkronisasi, dan dapat diaudit melalui job history.

---

**Panduan Terkait:**

- [Sinkronkan IDrive E2 dengan Amazon S3 dan Google Drive menggunakan RcloneView](https://rcloneview.com/support/blog/sync-idrive-e2-s3-google-drive-rcloneview)
- [Kelola Sinkronisasi Cloud Cloudflare R2 dengan RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Sentralisasikan Penyimpanan S3, Wasabi, dan Cloudflare R2 dengan RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
