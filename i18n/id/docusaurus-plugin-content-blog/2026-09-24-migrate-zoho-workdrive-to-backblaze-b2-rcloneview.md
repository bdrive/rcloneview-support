---
slug: migrate-zoho-workdrive-to-backblaze-b2-rcloneview
title: "Migrasi Zoho WorkDrive ke Backblaze B2 — Transfer File dengan RcloneView"
authors:
  - steve
description: "Pindahkan file dari Zoho WorkDrive ke Backblaze B2 langsung dengan RcloneView, menggunakan transfer cloud-ke-cloud, pratinjau Dry Run, dan penjadwalan tugas."
keywords:
  - migrasi Zoho WorkDrive ke Backblaze B2
  - cadangan Zoho WorkDrive
  - migrasi Backblaze B2
  - transfer cloud ke cloud
  - panduan migrasi RcloneView
  - Zoho WorkDrive ke B2
  - alat migrasi penyimpanan cloud
  - rclone Zoho WorkDrive
  - transfer file antar cloud
  - arsip cloud terjangkau
tags:
  - RcloneView
  - zoho
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Zoho WorkDrive ke Backblaze B2 — Transfer File dengan RcloneView

> Pindahkan file Zoho WorkDrive langsung ke Backblaze B2 tanpa harus melalui disk lokal terlebih dahulu.

Tim yang menggunakan Zoho WorkDrive untuk kolaborasi sehari-hari sering membutuhkan tingkat penyimpanan jangka panjang yang lebih murah untuk proyek yang sudah selesai dan folder klien lama — Backblaze B2 adalah pilihan umum untuk lapisan arsip tersebut. RcloneView menghubungkan kedua remote dalam satu jendela dan menyalin file secara cloud-ke-cloud, sehingga drive bersama yang penuh dokumen dan media tidak perlu diunduh lalu diunggah ulang melalui penyimpanan lokal laptop. RcloneView me-mount dan menyinkronkan lebih dari 90 penyedia dari satu jendela di Windows, macOS, dan Linux, sehingga menjelajahi Zoho WorkDrive dan mengarsipkan ke Backblaze B2 tidak pernah memerlukan perpindahan aplikasi.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Zoho WorkDrive dan Backblaze B2

Tambahkan Zoho WorkDrive sebagai remote melalui New Remote dan pilih penyiapan berbasis OAuth; karena Zoho WorkDrive membutuhkan pemilihan region saat konfigurasi, pilih data center yang sesuai dengan akun Anda sebelum menyelesaikan penyiapan. Backblaze B2 sebaliknya menggunakan input kredensial — masukkan Application Key ID dan Application Key dari halaman pengelolaan kunci B2, dan RcloneView akan memvalidasi koneksi sebelum menyimpannya. Kedua remote kemudian muncul sebagai tab di panel Explorer, siap dijelajahi berdampingan.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan Zoho WorkDrive dan Backblaze B2 sebagai remote di RcloneView" class="img-large img-center" />

Setelah terhubung, buka Remote Manager untuk memastikan kedua entri sudah benar dan sesuaikan pengaturan seperti cakupan folder sebelum transfer pertama.

## Menjalankan Transfer Cloud-ke-Cloud

Buka tata letak dua panel dengan Zoho WorkDrive di satu sisi dan bucket Backblaze B2 Anda di sisi lain, lalu tarik folder yang ingin Anda migrasikan — menyeret antara dua remote yang berbeda selalu melakukan penyalinan, membuat file asli Zoho WorkDrive tetap utuh sampai Anda siap membersihkannya. Untuk migrasi yang lebih besar, buat tugas Sync sebagai gantinya: pilih Zoho WorkDrive sebagai sumber dan bucket B2 sebagai tujuan, atur jumlah transfer file bersamaan di Advanced Settings, dan jalankan Dry Run terlebih dahulu untuk melihat persis file mana yang akan berpindah sebelum transfer sesungguhnya terjadi.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Tugas transfer cloud-ke-cloud dari Zoho WorkDrive ke Backblaze B2" class="img-large img-center" />

## Memverifikasi dan Menjadwalkan Migrasi

Aktifkan perbandingan checksum di Advanced Settings tugas sinkronisasi agar RcloneView memastikan file cocok berdasarkan hash dan ukuran, bukan hanya ukuran file, dan atur jumlah percobaan ulang untuk kasus batch besar mengalami error jaringan sementara. Setelah tugas selesai, periksa Job History untuk meninjau total file yang ditransfer, waktu yang dibutuhkan, dan item yang mengalami error sebelum mengarsipkan folder sumber.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History menunjukkan transfer Zoho WorkDrive ke Backblaze B2 yang selesai" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote Zoho WorkDrive Anda, pilih region yang benar.
3. Tambahkan remote Backblaze B2 Anda menggunakan Application Key ID dan Key Anda.
4. Jalankan Dry Run, lalu eksekusi tugas sinkronisasi atau penyalinan dan konfirmasi hasilnya di Job History.

Migrasi cloud-ke-cloud yang bersih membuat workspace Zoho WorkDrive Anda tetap ringkas, sekaligus memberi file yang sudah selesai tempat penyimpanan yang tahan lama dan lebih murah.

---

**Panduan Terkait:**

- [Mengelola Zoho WorkDrive — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Mengelola Backblaze B2 — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Menyinkronkan Zoho WorkDrive ke OneDrive — Cadangan Cloud dengan RcloneView](https://rcloneview.com/support/blog/sync-zoho-workdrive-to-onedrive-rcloneview)

<CloudSupportGrid />
