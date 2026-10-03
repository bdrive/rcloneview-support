---
slug: migrate-opendrive-to-backblaze-b2-rcloneview
title: "Migrasi OpenDrive ke Backblaze B2 — Transfer File dengan RcloneView"
authors:
  - tayson
description: "Pindahkan file dari OpenDrive ke Backblaze B2 dengan RcloneView: hubungkan kedua remote, simulasikan penyalinan dengan Dry Run, jalankan transfer, dan verifikasi dengan Folder Compare."
keywords:
  - migrasi OpenDrive ke Backblaze B2
  - transfer OpenDrive ke B2
  - migrasi OpenDrive
  - pencadangan Backblaze B2
  - transfer cloud ke cloud
  - RcloneView OpenDrive
  - RcloneView Backblaze B2
  - pindahkan file OpenDrive ke B2
tags:
  - RcloneView
  - opendrive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi OpenDrive ke Backblaze B2 — Transfer File dengan RcloneView

> Pindahkan pustaka OpenDrive ke bucket Backblaze B2 dengan transfer cloud ke cloud yang dapat dipratinjau dan diverifikasi, bukan mengunduh lalu mengunggah ulang secara manual.

Tim yang sudah melampaui akun berbagi file sering menginginkan object storage untuk arsip jangka panjang. Memindahkan data dari OpenDrive ke Backblaze B2 secara manual berarti mengunduh semuanya ke lokal terlebih dahulu. RcloneView menghubungkan kedua layanan dan mentransfer langsung di antara keduanya, dengan Dry Run dan langkah perbandingan agar Anda tahu apa saja yang sudah berpindah. Hubungkan S3, Azure, atau Backblaze B2 dengan akses baca/tulis penuh pada lisensi FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan Kedua Remote

Buka tab Remote dan pilih New Remote. Tambahkan OpenDrive sebagai satu remote dan Backblaze B2 sebagai remote lainnya. B2 menggunakan Application Key ID dan Application Key, yang Anda buat di halaman manajemen kunci Backblaze. Buat bucket tujuan di Backblaze terlebih dahulu agar Anda memiliki path target yang siap.

Setelah kedua remote muncul di Remote Manager, buka keduanya berdampingan di dua panel Explorer. Menelusuri tingkat teratas masing-masing memastikan kredensial berfungsi sebelum Anda memulai transfer besar.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote OpenDrive dan Backblaze B2 di RcloneView" class="img-large img-center" />

## Rencanakan Struktur Folder

Migrasi adalah saat yang tepat untuk menentukan bagaimana data ditempatkan di B2. Pola yang umum adalah satu bucket per tujuan, misalnya bucket arsip untuk proyek yang sudah selesai, dengan folder tingkat atas yang mencerminkan struktur OpenDrive Anda saat ini. Gunakan Get Size pada folder OpenDrive terbesar untuk memperkirakan volume, dan salin folder terpenting terlebih dahulu.

Jika beberapa jenis file perlu ditinggalkan, Langkah 3 wizard sinkronisasi memungkinkan Anda mengatur ukuran file maksimum, usia file maksimum, atau aturan pengecualian khusus seperti `.iso`.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer cloud ke cloud dari OpenDrive ke Backblaze B2 di RcloneView" class="img-large img-center" />

## Dry Run, Lalu Transfer

Buat job dengan OpenDrive sebagai sumber dan bucket B2 Anda sebagai tujuan. Untuk migrasi, job Copy adalah pilihan yang lebih aman karena tidak mengubah sumber; job Sync dapat menghapus file di tujuan agar sama dengan sumber. Jalankan Dry Run terlebih dahulu untuk melihat daftar file yang akan disalin.

Pada Langkah 2, biarkan "Retry entire sync if fails" pada nilai bawaan 3 dan pertimbangkan menurunkan jumlah transfer bersamaan jika sumber melakukan throttling. Lalu jalankan job dan pantau progres, kecepatan, dan jumlah file di tab Transferring.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menjalankan job OpenDrive ke B2 di RcloneView" class="img-large img-center" />

## Verifikasi Sebelum Menghentikan Sumber

Setelah job selesai, buka Job History untuk memastikan statusnya Completed dan tinjau ukuran total serta jumlah file. Kemudian gunakan Compare pada folder OpenDrive dan B2. File left-only adalah item yang tidak sampai; file different menunjukkan ketidakcocokan ukuran yang perlu disalin ulang. Simpan data OpenDrive sampai perbandingan tidak menunjukkan file left-only.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare antara OpenDrive dan Backblaze B2" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan OpenDrive dan Backblaze B2 sebagai remote dan buat bucket tujuan.
3. Buat job Copy, jalankan Dry Run, lalu jalankan transfer.
4. Verifikasi dengan Job History dan Folder Compare sebelum menonaktifkan sumber.

Salinan yang dipratinjau dan diverifikasi membuat perpindahan ke B2 dapat diprediksi, bahkan untuk pustaka yang besar.

---

**Panduan Terkait:**

- [Kelola Penyimpanan OpenDrive — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-opendrive-cloud-sync-backup-rcloneview)
- [Migrasi SugarSync ke Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/migrate-sugarsync-to-backblaze-b2-rcloneview)
- [Migrasi Koofr ke Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
