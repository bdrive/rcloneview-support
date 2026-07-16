---
slug: migrate-onedrive-to-wasabi-rcloneview
title: "Migrasikan OneDrive ke Wasabi — Pencadangan Cloud dengan RcloneView"
authors:
  - tayson
description: "Pindahkan file dari Microsoft OneDrive ke penyimpanan cloud hot Wasabi menggunakan RcloneView. Panduan langkah demi langkah untuk migrasi OneDrive ke Wasabi tanpa perintah CLI."
keywords:
  - migrate OneDrive to Wasabi
  - OneDrive Wasabi transfer
  - OneDrive to S3 migration
  - Wasabi cloud backup from OneDrive
  - rclone OneDrive Wasabi
  - cloud-to-cloud migration OneDrive
  - move Microsoft OneDrive files to Wasabi
  - RcloneView OneDrive migration
tags:
  - RcloneView
  - onedrive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasikan OneDrive ke Wasabi — Pencadangan Cloud dengan RcloneView

> Gunakan RcloneView untuk mentransfer file dari Microsoft OneDrive ke penyimpanan cloud hot Wasabi yang kompatibel dengan S3 — langsung dari cloud ke cloud, tanpa perlu unduhan perantara.

Organisasi sering memulai dengan OneDrive yang dibundel dalam Microsoft 365, lalu menyadari mereka membutuhkan tingkat pencadangan khusus yang hemat biaya seiring bertambahnya volume data. Penyimpanan cloud hot Wasabi yang kompatibel dengan S3 menjadi tujuan populer: penyimpanan dengan tarif tetap yang dapat diprediksi tanpa biaya egress. RcloneView menjembatani kedua layanan tersebut melalui backend rclone, memungkinkan Anda memigrasikan konten OneDrive ke bucket Wasabi melalui antarmuka visual — tanpa perlu scripting.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan OneDrive dan Wasabi

Tambahkan OneDrive terlebih dahulu: **Remote tab → New Remote → Microsoft OneDrive**, autentikasi melalui login OAuth di browser, dan konfirmasi bahwa remote telah tersimpan. Untuk OneDrive pribadi, prosesnya instan. Untuk OneDrive for Business, Anda mungkin perlu memilih tenant yang tepat saat autentikasi.

Selanjutnya tambahkan Wasabi: **New Remote → Amazon S3 Compatible → Wasabi**. Masukkan access key dan secret key Wasabi Anda, lalu pilih endpoint yang sesuai dengan region bucket Anda (misalnya, `s3.us-east-1.wasabisys.com`). API S3 milik Wasabi kompatibel dengan backend S3 rclone tanpa konfigurasi khusus apa pun.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up OneDrive and Wasabi remotes in RcloneView" class="img-large img-center" />

## Merencanakan Cakupan Migrasi

Buka Explorer dalam tata letak dua panel — OneDrive di sebelah kiri, Wasabi di sebelah kanan. Jelajahi struktur folder OneDrive untuk mengidentifikasi folder yang ingin Anda migrasikan. Sebuah departemen legal mungkin memindahkan arsip `Contracts/2020-2024/`; sebuah agensi desain mungkin memigrasikan folder `Client-Assets/` berisi 500 GB file berlapis.

Gunakan opsi klik-kanan **Get Size** di RcloneView pada folder sumber untuk menghitung total volume data sebelum melanjutkan transfer. Untuk migrasi berskala besar, atur job agar berjalan semalaman jika bandwidth digunakan bersama pengguna atau layanan lain.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Viewing OneDrive to Wasabi transfer in RcloneView" class="img-large img-center" />

## Menjalankan Job Sinkronisasi dengan Verifikasi

Buat job Sync di Job Manager: sumbernya adalah path OneDrive Anda, tujuannya adalah path bucket Wasabi Anda. Pada Langkah 2, aktifkan **verifikasi checksum** untuk memvalidasi hash setiap file setelah transfer — penting untuk arsip yang sensitif terhadap kepatuhan (compliance). Atur jumlah transfer bersamaan menjadi 6–8 untuk keseimbangan antara kecepatan dan stabilitas API.

Jalankan Dry Run terlebih dahulu untuk melihat pratinjau daftar operasi. Item OneDrive dengan karakter khusus dalam nama file (umum pada konten buatan pengguna) akan ditandai untuk penyesuaian encoding. Tinjau tab Log setelah dry run untuk menangkap masalah sebelum transfer sesungguhnya dijalankan.

Setelah migrasi, gunakan fitur **Folder Compare** di RcloneView untuk membandingkan secara visual sumber OneDrive dengan tujuan Wasabi — memastikan jumlah dan ukuran file sudah cocok sebelum menonaktifkan salinan OneDrive.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing OneDrive and Wasabi folders after migration in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan OneDrive melalui login OAuth dan Wasabi melalui kredensial S3 di wizard New Remote.
3. Gunakan Folder Compare untuk menilai cakupan migrasi, lalu buat job Sync di Job Manager.
4. Aktifkan verifikasi checksum, jalankan Dry Run, lalu jalankan migrasi secara penuh.

Memindahkan dari OneDrive ke Wasabi dengan RcloneView memberi Anda jejak migrasi yang terverifikasi dan dapat diaudit — dengan riwayat job dan log transfer yang tersimpan secara otomatis.

---

**Panduan Terkait:**

- [Migrasikan OneDrive ke Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)
- [Migrasikan OneDrive ke Google Drive dengan RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [Kelola Sinkronisasi dan Pencadangan Cloud OneDrive dengan RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
