---
slug: migrate-onedrive-to-cloudflare-r2-rcloneview
title: "Migrasi OneDrive ke Cloudflare R2 — Transfer File dengan RcloneView"
authors:
  - tayson
description: "Pindahkan file OneDrive ke Cloudflare R2 untuk alur kerja developer dan integrasi CDN menggunakan RcloneView. Hubungkan melalui OAuth dan API Token, terapkan filter, dan sinkronisasi."
keywords:
  - migrate OneDrive to Cloudflare R2
  - OneDrive R2 transfer RcloneView
  - OneDrive to Cloudflare R2 sync
  - cloud storage migration developer
  - Cloudflare R2 object storage
  - OneDrive alternative R2
  - S3 compatible storage migration
  - RcloneView OneDrive migration
tags:
  - RcloneView
  - onedrive
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi OneDrive ke Cloudflare R2 — Transfer File dengan RcloneView

> Cloudflare R2 terintegrasi secara native dengan pipeline CDN dan Workers — RcloneView menangani migrasi OneDrive ke R2 tanpa menyentuh komputer lokal Anda.

Developer dan tim yang memindahkan workload ke ekosistem Cloudflare sering perlu merelokasi aset yang tersimpan di OneDrive ke Cloudflare R2. R2 menyediakan penyimpanan object yang kompatibel dengan S3 dengan zero-egress yang terintegrasi langsung dengan Cloudflare Workers, Pages, dan CDN — menjadikannya ideal untuk aset statis, file media, dan build artifact. RcloneView menghubungkan OneDrive melalui OAuth dan Cloudflare R2 melalui API Token, lalu menjalankan migrasi sebagai job sinkronisasi cloud-to-cloud dengan aturan filter opsional.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan OneDrive

Buka RcloneView dan navigasikan ke **Remote Manager**. Klik **New Remote** dan pilih **OneDrive** dari daftar provider. RcloneView akan membuka browser Anda untuk autentikasi OAuth — masuk dengan akun Microsoft Anda dan berikan izin akses. Personal OneDrive, OneDrive for Business, dan SharePoint document library semuanya dapat diakses dengan cara ini.

Setelah otorisasi, buka remote tersebut di File Explorer. Navigasikan ke folder yang akan Anda migrasikan dan catat path-nya.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting OneDrive and Cloudflare R2 in RcloneView" class="img-large img-center" />

## Menghubungkan Cloudflare R2

Kembali ke **Remote Manager**, klik **New Remote** dan pilih **S3 Compatible**. Isi kredensial Cloudflare R2 Anda:

- **Access Key ID**: dari dashboard Cloudflare → R2 → Manage API Tokens (buat API token dengan izin Object Read & Write)
- **Secret Access Key**: secret dari token tersebut
- **Endpoint**: `https://{your-account-id}.r2.cloudflarestorage.com`

Simpan remote tersebut. Di File Explorer, navigasikan ke bucket tujuan (atau buat yang baru). Verifikasi akses dengan memastikan isi bucket muncul.

## Mengonfigurasi Job Migrasi dengan Filter

Buka **Jobs** dan klik **New Job**. Atur OneDrive sebagai sumber dan folder spesifik yang akan dimigrasikan. Atur Cloudflare R2 sebagai tujuan dan path bucket target Anda.

Pada langkah 2 dari job wizard, Anda dapat menerapkan **aturan filter** untuk mempersempit migrasi:

- Migrasikan hanya tipe file tertentu (misalnya, `--include "*.jpg"`, `--include "*.pdf"`)
- Kecualikan folder sistem atau file temp (misalnya, `--exclude ".DS_Store"`)
- Gunakan **Dry Run** untuk melihat pratinjau hasil yang telah difilter sebelum menjalankannya secara nyata

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud migration from OneDrive to Cloudflare R2" class="img-large img-center" />

## Menjalankan Migrasi

Nonaktifkan Dry Run dan jalankan job tersebut. RcloneView menampilkan progres secara real-time di panel transfer — file per detik, kecepatan saat ini, dan total data yang dipindahkan. OneDrive ke R2 adalah transfer server-to-server; komputer lokal Anda berperan sebagai orkestrator, bukan jalur data.

File besar menggunakan multipart upload secara otomatis. Jika ada file yang gagal di tengah transfer, tab Log akan menampilkan error spesifiknya. Menjalankan ulang job tersebut aman — file yang sudah ditransfer akan dilewati.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring OneDrive to Cloudflare R2 transfer in real time" class="img-large img-center" />

## Verifikasi Pasca-Migrasi

Gunakan **Folder Compare** untuk memeriksa kedua sisi setelah migrasi. Buka sumber OneDrive dan tujuan R2 di tampilan compare — RcloneView menyoroti file yang ada di satu sisi tetapi tidak di sisi lainnya. Untuk migrasi yang kritis, aktifkan verifikasi checksum di pengaturan job untuk memastikan akurasi tingkat byte.

Setelah terverifikasi, Anda dapat memperbarui binding Cloudflare Worker, aturan CDN, atau konfigurasi aplikasi agar mengarah ke bucket R2 alih-alih OneDrive.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Hubungkan OneDrive melalui OAuth di **Remote Manager**.
3. Hubungkan Cloudflare R2 menggunakan API Token dan endpoint Account ID Anda.
4. Buat job migrasi dengan filter opsional, jalankan Dry Run untuk pratinjau, lalu eksekusi.

Integrasi CDN yang erat dari Cloudflare R2 dan penagihan zero-egress menjadikannya tujuan yang menarik untuk konten yang sebelumnya berada di OneDrive.

---

**Panduan Terkait:**

- [Migrasi Dropbox ke Cloudflare R2 dengan RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-cloudflare-r2-rcloneview)
- [Migrasi Google Drive ke Cloudflare R2 dengan RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-cloudflare-r2-rcloneview)
- [Migrasi Azure Blob ke Cloudflare R2 dengan RcloneView](https://rcloneview.com/support/blog/migrate-azure-blob-to-cloudflare-r2-rcloneview)

<CloudSupportGrid />
