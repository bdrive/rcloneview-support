---
slug: manage-google-photos-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan Google Photos — Sinkronisasi dan Pencadangan Foto dengan RcloneView"
authors:
  - tayson
description: "Hubungkan Google Photos ke RcloneView dan cadangkan pustaka foto Anda ke penyimpanan lokal atau penyedia cloud lain. Kelola Google Photos tanpa kehilangan file asli."
keywords:
  - Google Photos RcloneView backup
  - download Google Photos local backup
  - Google Photos cloud sync
  - rclone Google Photos GUI
  - backup Google Photos external drive
  - Google Photos to S3 backup
  - manage Google Photos storage
  - RcloneView Google Photos
tags:
  - google-photos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan Google Photos — Sinkronisasi dan Pencadangan Foto dengan RcloneView

> RcloneView terhubung ke Google Photos melalui OAuth, memungkinkan Anda menjelajahi pustaka foto, mencadangkan file asli ke penyimpanan lokal atau penyedia cloud lain, dan menjalankan ekspor terjadwal.

Google Photos adalah solusi pencadangan foto standar bagi miliaran pengguna Android — tetapi ini bukan pencadangan itu sendiri. Jika akun Google Anda diretas, kuota penyimpanan terlampaui, atau ketentuan layanan berubah, pustaka foto Anda berisiko hilang. RcloneView terhubung ke Google Photos sebagai remote terpisah dari Google Drive, memberi Anda akses langsung ke pustaka foto untuk diunduh dan dicadangkan ke drive eksternal, perangkat NAS, atau penyimpanan cloud dingin seperti Amazon S3 atau Backblaze B2.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menyiapkan Google Photos di RcloneView

Google Photos muncul sebagai penyedia terpisah dalam pengaturan remote RcloneView. Buka **Tab Remote → Remote Baru → Google Photos** dan autentikasi melalui login browser OAuth. Anda akan diminta memberikan RcloneView (melalui rclone) akses baca ke foto Anda — setelah otorisasi, pustaka Anda akan muncul di panel Explorer yang tersusun berdasarkan tahun dan album.

Perlu diketahui bahwa API Google Photos menampilkan foto dalam struktur tertentu: berdasarkan album atau folder berbasis tanggal. Anda tidak dapat mengatur ulang foto melalui API, tetapi Anda dapat menjelajahi dan mengunduh file asli dalam resolusi penuh — termasuk file RAW yang diunggah dari kamera jika Anda memiliki penyimpanan Google One.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Google Photos as a remote in RcloneView" class="img-large img-center" />

## Mencadangkan Google Photos ke Penyimpanan Lokal

Kasus penggunaan paling umum adalah mengunduh seluruh pustaka Google Photos ke drive eksternal atau NAS. Buat job Copy di Job Manager dengan Google Photos sebagai sumber dan drive eksternal lokal (atau path NAS) Anda sebagai tujuan. Aktifkan **skip existing files** agar proses berikutnya menjadi inkremental — hanya foto baru sejak pencadangan terakhir yang diunduh.

Untuk keluarga dengan 10 tahun foto di 50.000 gambar dengan total 150 GB, unduhan awal akan memakan waktu beberapa jam. Jalankan semalaman dengan jadwal diatur untuk dieksekusi sekali. Proses berikutnya, yang dijadwalkan mingguan, hanya menambahkan foto baru yang diunggah minggu itu — menjaga pencadangan lokal Anda tetap terkini tanpa mentransfer ulang semuanya.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Backing up Google Photos library to local storage in RcloneView" class="img-large img-center" />

## Pencadangan Lintas-Cloud: Google Photos ke S3 atau Backblaze B2

Untuk pencadangan cloud-ke-cloud, atur Google Photos sebagai sumber dan Amazon S3 atau Backblaze B2 sebagai tujuan. Ini membuat pencadangan independen dari pustaka foto Anda di penyedia cloud terpisah — perlindungan terhadap masalah akun Google tanpa memerlukan kapasitas penyimpanan lokal.

Gunakan aturan filter di Langkah 3 pada wizard sinkronisasi untuk hanya menyertakan jenis file tertentu (`.jpg`, `.heic`, `.mp4`, `.raw`) dan mengecualikan file sidecar JSON metadata Google jika tidak diperlukan. Atur filter max-file-age untuk hanya mencadangkan foto dari 12 bulan terakhir dalam job rutin Anda, dengan job satu kali terpisah untuk arsip historis.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Photos to Backblaze B2 cross-cloud backup in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Google Photos sebagai remote melalui autentikasi browser OAuth di wizard Remote Baru.
3. Buat job Copy dari Google Photos ke drive eksternal atau bucket pencadangan cloud Anda.
4. Jadwalkan proses inkremental mingguan untuk menangkap foto baru secara otomatis.

Dengan RcloneView, Google Photos menjadi sumber yang dapat Anda cadangkan secara andal — memastikan kenangan berharga Anda memiliki salinan yang independen dari infrastruktur Google.

---

**Panduan Terkait:**

- [Cadangkan Google Photos ke Drive Eksternal dan NAS dengan RcloneView](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)
- [Rapikan Pustaka Foto Cloud Anda dengan RcloneView](https://rcloneview.com/support/blog/declutter-cloud-photo-library-rcloneview)
- [Kelola Sinkronisasi dan Pencadangan Cloud Google Drive dengan RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
