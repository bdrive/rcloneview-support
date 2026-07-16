---
slug: migrate-box-to-backblaze-b2-rcloneview
title: "Migrasi Box ke Backblaze B2 — Transfer File dengan RcloneView"
authors:
  - steve
description: "Pindahkan penyimpanan cloud Box Anda ke penyimpanan objek Backblaze B2 menggunakan RcloneView. Panduan lengkap untuk migrasi file, verifikasi transfer, dan otomatisasi pencadangan di masa depan."
keywords:
  - Migrasi Box ke Backblaze B2
  - migrasi Box Backblaze B2 RcloneView
  - transfer file Box Backblaze B2
  - beralih dari Box ke penyimpanan B2
  - migrasi penyimpanan cloud Box
  - pencadangan Box Backblaze B2
  - migrasi Box ke S3
  - rclone Box B2 GUI
tags:
  - box
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Box ke Backblaze B2 — Transfer File dengan RcloneView

> Pindahkan seluruh workspace Box Anda ke penyimpanan objek Backblaze B2 — atau buat salinan pencadangan sekunder — menggunakan alur kerja migrasi berbasis GUI dari RcloneView.

Box adalah platform kolaborasi enterprise yang banyak digunakan, tetapi untuk keperluan arsip dan pencadangan, biaya penyimpanannya bisa cukup signifikan dibandingkan dengan penyimpanan objek yang memang dirancang khusus seperti Backblaze B2. Tim yang ingin memindahkan data arsip dari Box, atau membuat salinan pencadangan konten Box ke tingkat penyimpanan yang lebih hemat biaya, dapat menggunakan RcloneView untuk melakukan migrasi secara langsung — tanpa perlu mengunduh apa pun ke penyimpanan lokal terlebih dahulu.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Box dan Backblaze B2

Untuk Box, buka **tab Remote → New Remote**, pilih Box, dan selesaikan autentikasi OAuth dengan akun Box Anda. Pengguna Box for Business juga sebaiknya mengatur `box_sub_type = enterprise` pada konfigurasi remote agar mendapatkan akses penuh ke workspace. Untuk Backblaze B2, masukkan Application Key ID dan Application Key Anda saat pengaturan remote.

Setelah kedua remote dikonfigurasi, letakkan Box di panel explorer kiri dan B2 di panel kanan. Telusuri folder Box tertentu yang ingin Anda migrasikan dan pastikan bucket B2 tujuan sudah diberi nama dengan benar serta dapat diakses sebelum memulai transfer apa pun.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up Box and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Mengonfigurasi Pekerjaan Migrasi

Gunakan tombol **Sync** di tab Home untuk membuat pekerjaan migrasi. Atur folder Box sebagai sumber dan bucket B2 (atau subfolder di dalamnya) sebagai tujuan. Pada Langkah 2, aktifkan **Checksum** untuk memverifikasi integritas setiap file selama transfer. Atur jumlah percobaan ulang (retry) menjadi 5 atau lebih tinggi — API B2 terkadang dapat membatasi (throttle) permintaan selama transfer massal berskala besar, dan percobaan ulang otomatis memastikan migrasi selesai tanpa perlu campur tangan manual.

Sebelum migrasi sesungguhnya dijalankan, lakukan **Dry Run** untuk melihat daftar lengkap file yang akan ditransfer. Ini sangat penting untuk migrasi Box, di mana file yang dibagikan (shared) atau Box Notes (format `.boxnote`) mungkin tidak tertransfer sesuai harapan — output dry run akan menyoroti file mana pun yang gagal sebelum memengaruhi data produksi Anda.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box to Backblaze B2 migration job in RcloneView" class="img-large img-center" />

## Menangani Box Notes dan Jenis File Khusus

Box Notes adalah format kepemilikan (`.boxnote`) yang mungkin tidak dapat ditampilkan dengan benar di luar Box. Sebelum melakukan migrasi, ekspor terlebih dahulu Box Notes yang perlu Anda simpan ke format standar (seperti `.docx` atau `.pdf`) melalui antarmuka web Box. RcloneView akan memigrasikan file `.boxnote` sebagai data biner, tetapi file tersebut tidak akan dapat diedit di B2 atau di klien non-Box mana pun.

Untuk folder bersama dan konten dari kolaborator eksternal, pastikan akun Box Anda memiliki akses ke seluruh konten yang ingin Anda migrasikan. **Tab Log** di RcloneView akan menampilkan kesalahan izin (permission errors) untuk setiap file yang tidak dapat diakses oleh akun Anda.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Box to B2 migration progress in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Box (OAuth) dan Backblaze B2 (Application Key) sebagai remote.
3. Jalankan dry run untuk melihat pratinjau migrasi sebelum benar-benar mengeksekusinya.
4. Jalankan migrasi sesungguhnya dengan verifikasi checksum diaktifkan.

Migrasi dari Box ke Backblaze B2 dengan RcloneView adalah proses yang bersih dan dapat diverifikasi, yang memberikan Anda penyimpanan yang hemat biaya dan tahan lama untuk konten arsip Anda.

---

**Panduan Terkait:**

- [Migrasi Box ke AWS S3 dengan RcloneView](https://rcloneview.com/support/blog/migrate-box-to-aws-s3-rcloneview)
- [Kelola Penyimpanan Cloud Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Arsip Box ke S3 Glacier dengan RcloneView](https://rcloneview.com/support/blog/box-to-s3-glacier-archive-rcloneview)

<CloudSupportGrid />
