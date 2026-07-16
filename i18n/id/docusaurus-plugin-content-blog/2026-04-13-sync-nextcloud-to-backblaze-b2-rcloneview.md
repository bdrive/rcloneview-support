---
slug: sync-nextcloud-to-backblaze-b2-rcloneview
title: "Sinkronisasi Nextcloud ke Backblaze B2 — Pencadangan Offsite dengan RcloneView"
authors:
  - tayson
description: "Cadangkan data Nextcloud self-hosted Anda ke Backblaze B2 menggunakan RcloneView. Hubungkan melalui WebDAV dan App Key, lalu jadwalkan pencadangan offsite otomatis."
keywords:
  - Nextcloud Backblaze B2 backup
  - Nextcloud offsite backup RcloneView
  - Nextcloud WebDAV sync B2
  - self-hosted Nextcloud backup
  - Backblaze B2 Nextcloud cloud backup
  - automated Nextcloud backup
  - Nextcloud disaster recovery
  - RcloneView WebDAV backup
tags:
  - nextcloud
  - backblaze-b2
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Nextcloud ke Backblaze B2 — Pencadangan Offsite dengan RcloneView

> Nextcloud sangat baik untuk kolaborasi self-hosted, tetapi tanpa pencadangan offsite, satu kegagalan server saja dapat berarti kehilangan data permanen — RcloneView menyinkronkannya secara otomatis ke Backblaze B2.

Meng-hosting Nextcloud sendiri memberi Anda kendali penuh atas data Anda, tetapi kendali ini datang bersama tanggung jawab. Jika server Anda rusak, terkena ransomware, atau dinonaktifkan tanpa pencadangan yang tepat, tidak ada jaring pengaman. Backblaze B2 menyediakan penyimpanan objek offsite yang terjangkau dan tahan lama, yang sangat cocok dipasangkan dengan Nextcloud. RcloneView menghubungkan Nextcloud melalui WebDAV dan B2 melalui Application Key, memberikan Anda GUI untuk mengatur dan menjadwalkan pencadangan berulang.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Nextcloud melalui WebDAV

Buka RcloneView dan pergi ke **Remote Manager**. Klik **New Remote** dan pilih **WebDAV**. Nextcloud mengekspos file-nya melalui WebDAV pada path standar. Isi:

- **URL**: `https://your-nextcloud-domain/remote.php/dav/files/your-username/`
- **Vendor**: Nextcloud
- **User**: nama pengguna Nextcloud Anda
- **Password**: kata sandi akun Nextcloud Anda (atau app password jika Anda mengaktifkan 2FA)

Simpan remote dan buka di File Explorer untuk memastikan file Nextcloud Anda muncul. Navigasi beberapa folder untuk memverifikasi akses.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Nextcloud WebDAV remote in RcloneView" class="img-large img-center" />

## Menghubungkan Backblaze B2

Kembali ke **Remote Manager**, klik **New Remote** dan pilih **Backblaze B2**. Di konsol Backblaze, pergi ke **App Keys** dan buat key dengan akses baca/tulis ke bucket pencadangan Anda. Masukkan **Application Key ID** dan **Application Key** di RcloneView. Simpan remote dan buka untuk memverifikasi bucket B2 Anda dapat diakses.

Buat bucket tujuan jika Anda belum melakukannya — untuk pencadangan Nextcloud, bucket khusus (misalnya, `nextcloud-backup`) menjaga segalanya tetap terorganisir.

## Mengatur Job Pencadangan

Pergi ke **Jobs** dan klik **New Job**. Konfigurasikan:

- **Source**: remote WebDAV Nextcloud Anda, mengarah ke root atau direktori tertentu
- **Destination**: remote Backblaze B2 Anda dan bucket pencadangan

Pada langkah 2 dari wizard job, opsi yang direkomendasikan untuk pencadangan Nextcloud:

- Atur **transfers** ke 4 (WebDAV memiliki overhead per koneksi, sehingga konkurensi yang lebih rendah lebih stabil)
- Aktifkan **checksum verification** untuk jaminan integritas
- Aktifkan **Dry Run** pada eksekusi pertama untuk meninjau cakupan sebelum menjalankannya secara nyata

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Nextcloud to Backblaze B2 backup job in RcloneView" class="img-large img-center" />

## Menjadwalkan Pencadangan Otomatis

Dengan lisensi PLUS, tambahkan jadwal pada langkah 3 dari wizard job menggunakan sintaks cron. Untuk pencadangan harian pukul 1 pagi: `0 1 * * *`. Untuk mingguan: `0 1 * * 0`. RcloneView menjalankan job secara diam-diam di latar belakang pada waktu yang dijadwalkan dan mencatat hasilnya di **Job History**.

Setiap entri Job History menampilkan: file yang diperiksa, file yang ditransfer (hanya file yang berubah yang dikirim ulang), volume data, durasi, dan kesalahan apa pun. Ini memungkinkan Anda dengan cepat memastikan pencadangan malam hari berjalan dengan sukses tanpa perlu membuka aplikasi secara manual.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Nextcloud to Backblaze B2 backup in RcloneView" class="img-large img-center" />

## Catatan Strategi Pencadangan

- Job sinkronisasi RcloneView bersifat incremental secara default — hanya file baru atau yang berubah yang ditransfer setelah eksekusi awal
- Pertimbangkan untuk mempertahankan versioning gaya **--backup-dir** jika Anda ingin menyimpan file yang terhapus di B2
- Untuk pencadangan database Nextcloud, itu perlu ditangani secara terpisah (mysqldump atau serupa), tetapi semua data file di direktori data Nextcloud tersinkronisasi dengan bersih melalui WebDAV

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Hubungkan Nextcloud melalui WebDAV di **Remote Manager** menggunakan URL server dan kredensial Anda.
3. Hubungkan Backblaze B2 menggunakan Application Key ID dan Application Key Anda.
4. Buat dan jadwalkan job sinkronisasi dari Nextcloud ke B2 untuk pencadangan offsite malam hari secara otomatis.

Pencadangan otomatis Nextcloud → Backblaze B2 yang berjalan setiap malam berarti data self-hosted Anda memiliki redundansi setara perusahaan (enterprise-grade) dengan biaya minimal.

---

**Panduan Terkait:**

- [Sinkronisasi Nextcloud ke Google Drive dan S3 dengan RcloneView](https://rcloneview.com/support/blog/sync-nextcloud-google-drive-s3-rcloneview)
- [Pencadangan Nextcloud WebDAV dengan RcloneView](https://rcloneview.com/support/blog/backup-nextcloud-webdav-with-rcloneview)
- [Otomatisasi Pencadangan Cloud Harian dengan RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
