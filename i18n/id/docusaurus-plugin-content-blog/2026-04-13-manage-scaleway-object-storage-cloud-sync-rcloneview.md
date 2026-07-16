---
slug: manage-scaleway-object-storage-cloud-sync-rcloneview
title: "Kelola Scaleway Object Storage — Sinkronisasi Cloud dan Pencadangan dengan RcloneView"
authors:
  - tayson
description: "Hubungkan Scaleway Object Storage ke RcloneView menggunakan kredensial yang kompatibel dengan S3 dan sinkronkan bucket cloud Eropa Anda dengan penyedia lain dengan cepat."
keywords:
  - Scaleway object storage RcloneView
  - Scaleway S3 compatible sync
  - Scaleway cloud backup
  - Scaleway rclone GUI
  - European cloud storage sync
  - Scaleway bucket transfer
  - S3 compatible cloud sync
  - Scaleway rcloneview setup
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Scaleway Object Storage — Sinkronisasi Cloud dan Pencadangan dengan RcloneView

> Scaleway Object Storage adalah layanan cloud Eropa yang kompatibel dengan S3 — hubungkan ke RcloneView dalam hitungan menit menggunakan Access Key, Secret Key, dan endpoint URL.

Scaleway adalah penyedia cloud asal Prancis yang menawarkan object storage kompatibel S3 di berbagai wilayah Eropa. Ini adalah pilihan yang solid bagi tim yang membutuhkan penyimpanan yang sesuai GDPR dengan harga kompetitif. RcloneView mendukung penyedia mana pun yang kompatibel dengan S3, artinya Anda dapat menghubungkan Scaleway, menjelajahi bucket Anda, dan mengatur pekerjaan sinkronisasi bersama semua remote cloud lainnya — tanpa memerlukan CLI.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mendapatkan Kredensial Scaleway Anda

Sebelum menghubungkan di RcloneView, Anda memerlukan **Access Key** dan **Secret Key** dari konsol Scaleway. Masuk ke console.scaleway.com, buka **Credentials** di bawah proyek atau organisasi Anda, dan buat API key baru. Catat secret key tersebut — hanya ditampilkan sekali. Catat juga endpoint untuk wilayah Anda, yang mengikuti format `s3.{region}.scw.cloud` (misalnya, `s3.nl-ams.scw.cloud` untuk Amsterdam atau `s3.fr-par.scw.cloud` untuk Paris).

Ketiga nilai ini — Access Key, Secret Key, dan endpoint — adalah semua yang Anda butuhkan untuk mengonfigurasi Scaleway di RcloneView.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Scaleway S3-compatible remote in RcloneView" class="img-large img-center" />

## Menghubungkan Scaleway ke RcloneView

Buka RcloneView dan masuk ke **Remote Manager**. Klik **New Remote** dan pilih **S3 Compatible** dari daftar penyedia. Pada formulir konfigurasi, masukkan:

- **Provider**: Other (S3-compatible)
- **Access Key ID**: Access Key Scaleway Anda
- **Secret Access Key**: Secret Key Scaleway Anda
- **Endpoint**: endpoint wilayah Anda (misalnya, `s3.nl-ams.scw.cloud`)

Biarkan kolom region kosong atau masukkan kode wilayah Scaleway jika diminta. Simpan remote tersebut, dan akan muncul di Remote Manager Anda. Klik **Open** untuk menjelajahi bucket Scaleway Anda di File Explorer.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Scaleway transfer in real time" class="img-large img-center" />

## Menjelajahi Bucket dan Mentransfer File

File Explorer menampilkan bucket Scaleway Anda di level teratas. Masuk ke bucket mana pun untuk melihat objek dan prefix foldernya. Anda dapat memilih file dan direktori, lalu menyalin atau memindahkannya ke remote lain yang dibuka di panel kedua — baik itu AWS S3, Backblaze B2, atau direktori lokal.

Untuk dataset besar, klik kanan pada folder dan gunakan **Copy to** atau **Move to** untuk memulai transfer massal. RcloneView menampilkan progres secara real-time beserta kecepatan transfer dan estimasi waktu penyelesaian.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files between Scaleway and another cloud" class="img-large img-center" />

## Mengatur Pekerjaan Sinkronisasi Terjadwal

Untuk pencadangan otomatis atau pipeline data reguler antara Scaleway dan penyedia lain, sistem **Job** menanganinya secara andal. Buka **Jobs**, klik **New Job**, dan konfigurasikan Scaleway sebagai sumber atau tujuan. Pada opsi lanjutan pekerjaan, Anda dapat mengatur batas bandwidth, mengontrol konkurensi transfer, dan mengaktifkan verifikasi checksum untuk memastikan integritas data.

Dengan lisensi PLUS, Anda dapat menjadwalkan pekerjaan menggunakan sintaks bergaya cron — misalnya, sinkronisasi dari cloud lain ke Scaleway setiap malam pukul 2 pagi. Hasil pekerjaan dicatat di **Job History**, memberi Anda gambaran jelas tentang jumlah transfer dan setiap kesalahan per proses.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Kumpulkan Access Key, Secret Key, dan endpoint regional Scaleway Anda dari konsol Scaleway.
3. Buka **Remote Manager**, klik **New Remote**, pilih **S3 Compatible**, dan masukkan kredensial Anda.
4. Jelajahi bucket Anda dan buat pekerjaan sinkronisasi untuk mengotomatiskan pencadangan ke atau dari Scaleway.

Infrastruktur Eropa milik Scaleway berpadu baik dengan sistem pekerjaan multi-cloud RcloneView untuk alur kerja yang memperhatikan GDPR.

---

**Panduan Terkait:**

- [Sinkronkan Google Cloud Storage ke Wasabi dengan RcloneView](https://rcloneview.com/support/blog/sync-google-cloud-storage-to-wasabi-rcloneview)
- [Kelola Sinkronisasi dan Pencadangan Cloud IDrive E2](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [Migrasi Cloud Terverifikasi Checksum dengan RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
