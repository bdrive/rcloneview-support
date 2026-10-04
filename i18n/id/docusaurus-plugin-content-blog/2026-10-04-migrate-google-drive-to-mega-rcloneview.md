---
slug: migrate-google-drive-to-mega-rcloneview
title: "Migrasi Google Drive ke Mega — Transfer File dengan RcloneView"
authors:
  - morgan
description: "Migrasi Google Drive ke Mega dengan RcloneView: salin antar-cloud, pratinjau dry run, filter, dan verifikasi dalam satu GUI, tanpa unduhan manual."
keywords:
  - migrasi Google Drive ke Mega
  - transfer Google Drive ke Mega
  - pindahkan file ke Mega
  - RcloneView
  - transfer antar-cloud
  - penyimpanan cloud Mega
  - migrasi Google Drive
  - rclone GUI
  - alat migrasi cloud
tags:
  - RcloneView
  - google-drive
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Google Drive ke Mega — Transfer File dengan RcloneView

> Pindahkan seluruh pustaka Google Drive ke Mega tanpa mengunduh dan mengunggah ulang apa pun secara manual.

Beralih dari Google Drive ke Mega biasanya berarti mengekspor arsip, menunggu unduhan, lalu mengunggah ulang. RcloneView menghubungkan kedua layanan sebagai remote dan menyalin di antara keduanya dari jendela dua panel, dengan dry run untuk melihat hasilnya sebelum satu file pun dipindahkan. RcloneView melakukan mount dan sinkronisasi 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan Kedua Remote

Google Drive menggunakan OAuth: RcloneView membuka browser Anda, Anda masuk, dan remote dibuat secara otomatis. Mega menggunakan email dan kata sandi yang dimasukkan langsung di dialog New Remote. Setelah kedua remote muncul di Remote Manager, Anda dapat membukanya berdampingan di dua panel Explorer.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote Google Drive dan Mega di RcloneView" class="img-large img-center" />

Bayangkan seorang freelancer dengan 300 GB folder proyek yang tersebar di Drive. Menjelajahi kedua akun di panel yang berdampingan memungkinkan mereka memastikan folder sumber dan tata letak tujuan sebelum memulai.

## Salin Antar-Cloud

Seret folder dari panel Google Drive ke panel Mega. Menyeret antar remote yang berbeda menjalankan penyalinan, sehingga data Drive Anda tetap utuh sampai Anda memutuskan lain. Untuk pekerjaan yang lebih besar, buat job Copy di Job Manager, yang menyediakan pemantauan progres dan riwayat tersimpan.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer antar-cloud dari Google Drive ke Mega" class="img-large img-center" />

Jika Anda tidak ingin menyertakan file Google Docs dalam transfer, filter bawaan "Google Docs" pada langkah pemfilteran akan mengecualikannya. Anda juga dapat membatasi ukuran atau usia file agar hanya data yang relevan yang dipindahkan.

## Pratinjau dan Pantau Job

Jalankan Dry Run terlebih dahulu. Fitur ini mencantumkan file yang akan disalin, sehingga Anda dapat menemukan folder sumber yang salah sebelum menghabiskan waktu berjam-jam. Kemudian mulai job dan pantau tab Transferring untuk kecepatan, jumlah file, dan progres. Jika proses yang panjang bermasalah, Anda dapat menyesuaikan jumlah transfer file bersamaan di Advanced Settings.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Memantau progres transfer di RcloneView" class="img-large img-center" />

## Verifikasi Hasil

Saat job selesai, buka Folder Compare pada folder Drive dan Mega. Fitur ini menyorot file yang hanya ada di kiri, hanya di kanan, dan yang berbeda, dan Anda dapat menyalin apa pun yang terlewat langsung dari tampilan perbandingan. Job History menyimpan status, durasi, dan ukuran setiap proses.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare antara Google Drive dan Mega" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** [rcloneview.com](https://rcloneview.com/src/download.html) dari tautan ini.
2. Tambahkan Google Drive (OAuth) dan Mega (email dan kata sandi) dari New Remote.
3. Buka kedua remote di dua panel dan jalankan Dry Run pada folder uji.
4. Buat job Copy untuk seluruh pustaka, lalu verifikasi dengan Folder Compare.

Migrasi visual tanpa skrip menjaga Drive Anda tetap utuh sampai Anda yakin Mega memiliki semuanya.

---

**Panduan Terkait:**

- [Migrasi Mega ke Google Drive](https://rcloneview.com/support/blog/migrate-mega-to-google-drive-onedrive-rcloneview)
- [Kelola Penyimpanan Cloud Mega](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [Dry Run: Pratinjau Sinkronisasi Sebelum Transfer](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
