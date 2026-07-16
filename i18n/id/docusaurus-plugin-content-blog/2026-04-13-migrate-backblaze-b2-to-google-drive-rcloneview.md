---
slug: migrate-backblaze-b2-to-google-drive-rcloneview
title: "Migrasi Backblaze B2 ke Google Drive — Transfer File dengan RcloneView"
authors:
  - tayson
description: "Pindahkan file dari Backblaze B2 ke Google Drive tanpa mengunduh ke perangkat lokal. RcloneView memungkinkan transfer langsung cloud-ke-cloud dengan pemantauan progres dan filter."
keywords:
  - Backblaze B2 ke Google Drive
  - migrasi B2 ke Google Drive
  - migrasi Backblaze B2
  - transfer cloud-ke-cloud
  - B2 ke GDrive RcloneView
  - transfer file Backblaze
  - migrasi penyimpanan cloud
  - sinkronisasi Backblaze B2
  - impor Google Drive
  - migrasi RcloneView
tags:
  - backblaze-b2
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Backblaze B2 ke Google Drive — Transfer File dengan RcloneView

> Transfer file dari bucket Backblaze B2 langsung ke Google Drive dengan RcloneView — tanpa penyimpanan lokal perantara, dengan pelacakan progres secara langsung dan dukungan filter.

Backblaze B2 adalah solusi object storage yang mumpuni, tetapi tim yang sangat bergantung pada Google Workspace mungkin merasa lebih praktis untuk mengonsolidasikan file kerja mereka di Google Drive demi kolaborasi yang lebih mudah. Migrasi data arsip B2 selama bertahun-tahun ke Google Drive dulunya mengharuskan pengunduhan semua data ke lokal terlebih dahulu — proses yang lambat dan menghabiskan ruang penyimpanan. RcloneView memungkinkan transfer langsung cloud-ke-cloud antara B2 dan Google Drive melalui mesin sinkronisasinya, mengalirkan data antara kedua penyedia layanan tanpa menyentuh disk lokal Anda.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menyiapkan Kedua Remote

Sebelum melakukan migrasi, tambahkan Backblaze B2 dan Google Drive sebagai remote di RcloneView. Untuk Backblaze B2, buka tab Remote, klik New Remote, lalu pilih Backblaze B2. Masukkan Application Key ID dan Application Key Anda — keduanya dibuat dari akun Backblaze Anda di bagian App Keys. Untuk Google Drive, pilih Google Drive dari daftar penyedia; sebuah jendela browser akan terbuka untuk autentikasi OAuth. Masuk dengan akun Google Anda dan berikan izin akses.

Setelah kedua remote dikonfigurasi, Anda dapat membukanya berdampingan di File Explorer dual-panel RcloneView. Telusuri bucket B2 Anda di satu sisi dan folder Google Drive Anda di sisi lain, memberikan referensi visual untuk struktur migrasi yang ingin Anda susun.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 and Google Drive remotes in RcloneView" class="img-large img-center" />

## Menjalankan Migrasi

Setelah kedua remote terhubung, gunakan wizard Sync untuk mengonfigurasi transfer. Pilih bucket Backblaze B2 Anda (atau path tertentu di dalamnya) sebagai sumber dan folder tujuan Google Drive Anda. Pada langkah Advanced Settings, verifikasi checksum memastikan setiap file ditransfer dengan benar — penting untuk arsip besar di mana kerusakan data yang tidak terdeteksi dapat terjadi secara diam-diam.

Langkah Filtering berguna untuk bucket B2 berukuran besar: gunakan filter usia file untuk memigrasikan hanya file yang lebih lama dari tanggal tertentu, mengecualikan ekstensi tertentu (seperti file sementara `.tmp`), atau membatasi ukuran file maksimum untuk membagi migrasi menjadi beberapa tahap. Ini sangat membantu ketika memigrasikan 3TB arsip proyek milik agensi desain — filter berdasarkan jenis file dan kedalaman folder untuk mengontrol apa yang dipindahkan pada setiap batch.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Backblaze B2 files to Google Drive with RcloneView" class="img-large img-center" />

Sebelum menjalankan migrasi penuh, jalankan mode Dry Run untuk melihat pratinjau file mana saja yang akan disalin. Simulasi ini menampilkan daftar lengkap operasi yang direncanakan tanpa melakukan perubahan apa pun — langkah keamanan penting saat memigrasikan data produksi.

## Memantau dan Memvalidasi Transfer

Tab Transferring di bagian bawah RcloneView menampilkan progres pekerjaan secara langsung: jumlah file, status transfer, dan error yang ditemukan. Untuk migrasi besar yang berjalan selama berjam-jam, Job History mencatat setiap eksekusi beserta waktu mulai, durasi, total data yang dipindahkan, dan status akhirnya.

Setelah transfer selesai, gunakan Folder Compare untuk memvalidasi bahwa Google Drive kini berisi semua data dari sumber B2. Perbandingan ini menyoroti file mana saja yang hanya ada di satu sisi atau memiliki perbedaan ukuran, sehingga memudahkan Anda mengidentifikasi dan mentransfer ulang apa pun yang belum berhasil selesai.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Viewing migration job history for B2 to Google Drive transfer in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Backblaze B2 menggunakan Application Key ID dan Application Key Anda.
3. Tambahkan Google Drive melalui alur autentikasi browser OAuth.
4. Gunakan wizard Sync dengan Dry Run untuk melihat pratinjau migrasi sebelum menjalankan transfer penuh.

Migrasi langsung cloud-ke-cloud menghilangkan hambatan penyimpanan perantara lokal dan menjaga transfer B2-ke-Google Drive Anda berjalan pada throughput sisi penyedia layanan.

---

**Panduan Terkait:**

- [Migrasi Backblaze B2 ke Amazon S3 dengan RcloneView](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [Kelola Sinkronisasi dan Pencadangan Cloud Google Drive dengan RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Cadangkan Dropbox ke Backblaze B2, Penyimpanan Terjangkau dengan RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />
