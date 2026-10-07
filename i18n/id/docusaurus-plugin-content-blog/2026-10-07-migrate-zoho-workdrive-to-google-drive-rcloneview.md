---
slug: migrate-zoho-workdrive-to-google-drive-rcloneview
title: "Migrasi Zoho WorkDrive ke Google Drive — Transfer File dengan RcloneView"
authors:
  - kai
description: "Migrasi Zoho WorkDrive ke Google Drive dengan RcloneView: pilih region, hubungkan kedua remote, jalankan Dry Run, salin dari cloud ke cloud, dan verifikasi hasilnya."
keywords:
  - migrasi Zoho WorkDrive ke Google Drive
  - transfer Zoho WorkDrive
  - ekspor Zoho WorkDrive
  - pindahkan file Zoho ke Google Drive
  - migrasi cloud ke cloud
  - RcloneView
  - rclone GUI
  - pencadangan Zoho WorkDrive
  - sinkronisasi Google Drive
  - perbandingan folder
tags:
  - RcloneView
  - zoho
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Zoho WorkDrive ke Google Drive — Transfer File dengan RcloneView

> Salin folder tim dari Zoho WorkDrive ke Google Drive langsung antar cloud, dengan pratinjau dan pemeriksaan verifikasi.

Ketika perusahaan berpindah dari suite Zoho ke Google Workspace, folder tim di WorkDrive harus dipindahkan ke tempat baru. Mengunduh semuanya lalu mengunggah ulang itu lambat dan sulit diaudit. RcloneView menghubungkan kedua layanan dan mentransfer file dari cloud ke cloud, sehingga Anda dapat meninjau, menjalankan, dan memverifikasi migrasi dari satu jendela.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Zoho WorkDrive dan Google Drive

Zoho WorkDrive memerlukan satu pengaturan tambahan: Anda harus memilih **Region** saat membuat remote, dan harus sesuai dengan pusat data akun Zoho Anda. Google Drive menggunakan login OAuth melalui browser. Buka tab Remote, klik **New Remote**, lalu tambahkan masing-masing layanan secara bergantian.

Sinkronisasi dasar dan perbandingan folder tersedia dengan lisensi FREE.

<img src="/support/images/en/blog/new-remote.png" alt="Membuat remote Zoho WorkDrive dan Google Drive" class="img-large img-center" />

## Merencanakan Pemetaan Folder

Buka dua panel Explorer, dengan WorkDrive di kiri dan Google Drive di kanan. Telusuri folder tim dan tentukan tujuan masing-masing. Tim keuangan dengan 150 GB laporan kuartalan dapat dipetakan ke folder Shared Drive khusus, sementara file pribadi masuk ke My Drive.

Gunakan Get Size pada folder besar untuk memperkirakan waktu transfer. Pada langkah penyaringan wizard Sync, kecualikan folder atau jenis file yang tidak diperlukan, seperti arsip lama, menggunakan usia file maksimum atau filter khusus.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Zoho WorkDrive dan Google Drive berdampingan" class="img-large img-center" />

## Dry Run, Lalu Transfer

Buat job Copy dari WorkDrive ke Google Drive dan jalankan **Dry Run** terlebih dahulu. Dry Run mendaftar file yang akan disalin tanpa mengubah apa pun. Setelah pratinjau terlihat benar, jalankan job dan pantau progres di tab Transferring.

Jika terjadi kesalahan, job mencoba ulang hingga jumlah yang dikonfigurasi, dan Job History mencatat status, ukuran, dan jumlah file untuk setiap proses. Menjalankan ulang hanya menyalin file yang belum ada.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menjalankan job migrasi di RcloneView" class="img-large img-center" />

## Verifikasi dan Simpan Catatan

Buka **Compare** dari tab Home untuk membandingkan WorkDrive dengan Google Drive. Filter file yang hanya ada di kiri untuk menemukan yang belum tertransfer, lalu salin ke seberang. Job History memberi Anda catatan bertanda waktu yang dapat disimpan untuk persetujuan migrasi.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History untuk migrasi Zoho WorkDrive" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote Zoho WorkDrive (pilih Region yang benar) dan Google Drive.
3. Buat job Copy dan jalankan Dry Run untuk meninjau transfer.
4. Jalankan job dan verifikasi dengan Folder Compare sebelum menonaktifkan WorkDrive.

Menjaga sumber tetap utuh sampai perbandingan bersih membuat peralihan berisiko rendah.

---

**Panduan Terkait:**

- [Kelola Sinkronisasi Cloud Zoho WorkDrive](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Sinkronkan Zoho WorkDrive ke OneDrive](https://rcloneview.com/support/blog/sync-zoho-workdrive-to-onedrive-rcloneview)
- [Perbaiki Kesalahan Sinkronisasi Zoho WorkDrive](https://rcloneview.com/support/blog/fix-zoho-workdrive-sync-errors-rcloneview)

<CloudSupportGrid />
