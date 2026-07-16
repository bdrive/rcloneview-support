---
slug: migrate-cloudflare-r2-to-google-drive-rcloneview
title: "Migrasi Cloudflare R2 ke Google Drive — Transfer File dengan RcloneView"
authors:
  - jay
description: "Pelajari cara memigrasikan file dari Cloudflare R2 ke Google Drive menggunakan RcloneView — tanpa kejutan biaya egress, cukup alur transfer visual yang terpandu."
keywords:
  - cloudflare r2 to google drive
  - migrate r2 to google drive rcloneview
  - cloudflare r2 google drive transfer
  - rcloneview cloudflare r2 migration
  - object storage to google drive
  - r2 bucket to google drive rclone
  - cloudflare r2 backup google drive
  - cloud migration rcloneview
tags:
  - cloudflare-r2
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Cloudflare R2 ke Google Drive — Transfer File dengan RcloneView

> Pindahkan file dari bucket Cloudflare R2 ke Google Drive menggunakan antarmuka visual RcloneView — tanpa perlu CLI, tanpa biaya egress dari R2.

Cloudflare R2 populer di kalangan developer karena penyimpanan objeknya bebas biaya egress, tetapi tim sering kali perlu memindahkan data ke Google Drive untuk berbagi dengan rekan kerja non-teknis, mengintegrasikan dengan Google Workspace, atau menggabungkan akun penyimpanan. RcloneView menghubungkan kedua layanan tersebut melalui alur kerja point-and-click, sehingga Anda dapat memigrasikan bucket R2 ke Google Drive tanpa menulis satu perintah pun.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Cloudflare R2 dan Google Drive

Mulailah dengan menambahkan kedua layanan sebagai remote. Di tab **Remote**, klik **New Remote** dan pilih Cloudflare R2. Anda memerlukan **API Token**, **Account ID**, dan **Endpoint URL** Cloudflare Anda (dalam format `https://<account-id>.r2.cloudflarestorage.com`). RcloneView menggunakan backend rclone yang kompatibel dengan S3 untuk R2, sehingga API token R2 Anda langsung dipetakan ke kolom Access Key dan Secret Key.

Selanjutnya, tambahkan Google Drive sebagai remote kedua. RcloneView akan membuka jendela browser untuk autentikasi OAuth — masuk ke akun Google Anda dan berikan akses. Tidak diperlukan entri API key.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up Cloudflare R2 and Google Drive remotes in RcloneView" class="img-large img-center" />

Setelah kedua remote dikonfigurasi, Anda dapat menelusuri bucket R2 dan folder Google Drive Anda secara berdampingan di dual-panel explorer RcloneView.

## Menjalankan Migrasi

Klik **Sync** di tab Home untuk membuka wizard job 4 langkah. Pada Langkah 1, pilih bucket R2 Anda (atau subfolder tertentu di dalamnya) sebagai sumber, dan folder Google Drive sebagai tujuan. Beri nama job dengan jelas — sesuatu seperti `r2-to-gdrive-migration` akan membantu saat meninjau riwayat nanti.

Pada Langkah 2, aktifkan **checksum verification** untuk memastikan integritas file setelah setiap transfer. Ini sangat penting untuk file besar seperti video atau arsip, di mana kerusakan selama transfer jika tidak diperiksa dapat luput dari perhatian. Atur jumlah retry setidaknya 3 untuk menangani gangguan jaringan sementara secara otomatis.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a migration job from Cloudflare R2 to Google Drive in RcloneView" class="img-large img-center" />

Sebelum menjalankannya, lakukan **Dry Run** untuk melihat pratinjau file mana saja yang akan disalin. Ini menampilkan daftar transfer lengkap beserta ukuran file, sehingga Anda dapat memastikan cakupannya sebelum ada yang menyentuh Google Drive Anda.

## Memfilter dan Menangani Transfer Besar

Jika bucket R2 Anda berisi campuran berbagai jenis file, Langkah 3 memungkinkan Anda menerapkan filter. Tim desain yang memigrasikan bucket proyek mungkin ingin mengecualikan file `.psd` mentah berukuran di atas 500 MB sambil tetap menyertakan semua hasil ekspor siap web, menggunakan filter Max File Size. Filter **Max File Age** sama bergunanya untuk migrasi inkremental — hanya memindahkan file yang diubah dalam 30 hari terakhir, bukan seluruh dataset historis.

Untuk migrasi besar yang berlangsung berjam-jam, tab **Job History** mencatat kecepatan, jumlah file, dan status penyelesaian setiap eksekusi. Jika job terhenti di tengah jalan, menjalankannya kembali aman dilakukan — RcloneView akan melewati file yang sudah berhasil ditransfer dan melanjutkan dari titik terakhir.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Monitoring a Cloudflare R2 to Google Drive transfer job in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Cloudflare R2 sebagai remote menggunakan API Token, Account ID, dan Endpoint URL Anda.
3. Tambahkan Google Drive sebagai remote melalui login browser OAuth.
4. Buat job Copy atau Sync dari bucket R2 Anda ke folder Google Drive — jalankan Dry Run terlebih dahulu untuk memastikan cakupannya.

Model bebas egress Cloudflare R2 berarti memindahkan data keluar tidak dikenakan biaya di sisi R2, dan RcloneView menangani sisanya secara visual.

---

**Panduan Terkait:**

- [Migrasi Google Drive ke Cloudflare R2 dengan RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-cloudflare-r2-rcloneview)
- [Mengelola Cloudflare R2 — Sinkronisasi dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Mengelola Google Drive — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
