---
slug: sync-backblaze-b2-to-onedrive-rcloneview
title: "Sinkronisasi Backblaze B2 ke OneDrive — Pencadangan Cloud dengan RcloneView"
authors:
  - tayson
description: "Pelajari cara melakukan sinkronisasi atau migrasi file dari penyimpanan objek Backblaze B2 ke Microsoft OneDrive menggunakan RcloneView — pendekatan berbasis GUI dengan dukungan otomatisasi terjadwal."
keywords:
  - Backblaze B2 to OneDrive sync
  - migrate Backblaze B2 OneDrive RcloneView
  - Backblaze B2 OneDrive transfer
  - B2 to OneDrive migration guide
  - cloud storage sync tool
  - Backblaze B2 backup OneDrive
  - OneDrive from B2 migration
  - rclone B2 OneDrive GUI
tags:
  - RcloneView
  - backblaze-b2
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Backblaze B2 ke OneDrive — Pencadangan Cloud dengan RcloneView

> Tarik file terpilih dari penyimpanan dingin Backblaze B2 ke OneDrive untuk penggunaan aktif — atau migrasikan seluruh bucket B2 Anda ke OneDrive dengan satu job RcloneView.

Backblaze B2 adalah target arsip dan pencadangan yang sangat baik, tetapi API-nya yang kompatibel dengan S3 tidak dirancang untuk kolaborasi sehari-hari. Jika tim Anda perlu mengakses file di Microsoft 365, membagikan dokumen melalui SharePoint, atau sekadar memindahkan data dari B2 ke lokasi yang lebih mudah diakses, sinkronisasi ke OneDrive adalah jawabannya. RcloneView membuat transfer ini mudah dengan pembuat job visual dan pemantauan real-time.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Backblaze B2 dan OneDrive

Di RcloneView, buka **Remote tab → New Remote** dan tambahkan Backblaze B2 terlebih dahulu. Masukkan Application Key ID dan Application Key Anda, lalu tentukan nama bucket. Untuk OneDrive, pilih dari daftar provider dan selesaikan login OAuth melalui browser dengan akun Microsoft Anda. Setelah kedua remote tersimpan, buka keduanya berdampingan di dual-pane explorer.

Jelajahi bucket B2 Anda di sisi kiri dan OneDrive Anda di sisi kanan. Anda dapat menavigasi jauh ke dalam hierarki folder di kedua sisi dan membandingkan jumlah file sebelum memulai transfer apa pun. Langkah konfirmasi visual ini mencegah kejutan selama migrasi berskala besar.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Backblaze B2 and OneDrive remotes in RcloneView" class="img-large img-center" />

## Mengonfigurasi dan Menjalankan Job Sinkronisasi

Klik **Sync** di tab Home untuk membuka wizard job. Atur path Backblaze B2 sebagai sumber dan folder tujuan OneDrive sebagai target. Di Langkah 2, konfigurasikan jumlah transfer bersamaan — OneDrive memiliki batas laju API, jadi memulai dengan 4–8 transfer bersamaan lebih aman daripada memaksimalkannya. Aktifkan perbandingan checksum jika integritas data sangat penting untuk kasus penggunaan Anda.

Gunakan opsi **Dry Run** sebelum melakukan transfer penuh. Ini sangat berguna jika Anda melakukan sinkronisasi secara selektif — misalnya, hanya menarik file dari 90 hari terakhir dari B2 dengan mengatur filter **Max file age** di Langkah 3. Setelah hasil dry run terlihat benar, jalankan job secara langsung.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="B2 to OneDrive sync job in progress in RcloneView" class="img-large img-center" />

## Menjadwalkan Penarikan Berkala dari B2

Beberapa alur kerja membutuhkan sinkronisasi berulang dari B2 ke OneDrive — misalnya, menarik laporan yang baru diarsipkan dari B2 ke folder OneDrive setiap pagi agar anggota tim dapat mengaksesnya melalui antarmuka Microsoft 365. Dengan lisensi PLUS, penjadwal crontab RcloneView menangani ini secara otomatis. Atur jadwal di Langkah 4 pada wizard job, dengan memilih hari dan waktu yang sesuai dengan alur kerja Anda.

Tab **Job History** mencatat setiap eksekusi, sehingga Anda dapat memastikan setiap sinkronisasi terjadwal selesai dengan sukses dan memeriksa berapa banyak data yang dipindahkan.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Backblaze B2 to OneDrive sync" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Backblaze B2 (Application Key) dan OneDrive (OAuth) sebagai remote.
3. Buat job Sync dari B2 ke OneDrive dengan batas transfer yang sesuai.
4. Jadwalkan sinkronisasi berulang dengan lisensi PLUS untuk otomatisasi tanpa perlu campur tangan manual.

Memindahkan data dari arsip tahan lama B2 ke lingkungan kolaboratif OneDrive menjadi operasi rutin dan andal dengan RcloneView.

---

**Panduan Terkait:**

- [Sinkronisasi Backblaze B2 ke Azure Blob Storage dengan RcloneView](https://rcloneview.com/support/blog/sync-backblaze-b2-to-azure-blob-rcloneview)
- [Kelola Penyimpanan Cloud Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Migrasi OneDrive ke Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
