---
slug: manage-put-io-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan Put.io — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - tayson
description: "Pelajari cara menghubungkan Put.io ke RcloneView menggunakan OAuth, menjelajahi file cloud Anda, dan menyinkronkan konten media ke atau dari penyedia cloud lain dengan mudah."
keywords:
  - put.io RcloneView
  - put.io cloud sync
  - put.io backup
  - manage put.io files
  - put.io rclone GUI
  - put.io media management
  - cloud file transfer put.io
  - put.io sync cloud
tags:
  - putio
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan Put.io — Sinkronisasi dan Pencadangan File dengan RcloneView

> Put.io adalah layanan torrent dan unduhan cloud yang menyimpan konten yang diambil langsung di cloud — RcloneView memudahkan Anda menjelajah, menyinkronkan, dan mencadangkan file tersebut.

Put.io memungkinkan Anda mengambil torrent, tautan langsung, dan konten dari layanan hosting file premium langsung ke penyimpanan cloud, menjadikannya pilihan populer bagi penggemar media. Setelah file Anda tersimpan di Put.io, Anda membutuhkan cara yang andal untuk memindahkannya — ke drive lokal, cloud lain, atau arsip pribadi. RcloneView terhubung ke Put.io menggunakan login browser OAuth dan memberi Anda GUI lengkap untuk mengelola transfer tanpa perlu menyentuh command line.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Put.io ke RcloneView

Buka RcloneView dan navigasikan ke **Remote Manager**. Klik **New Remote**, gulir daftar penyedia, lalu pilih **Put.io**. RcloneView akan membuka browser Anda secara otomatis untuk autentikasi OAuth — masuk ke akun Put.io Anda dan berikan akses. Tidak perlu menyalin API key secara manual; alur OAuth menangani semuanya.

Setelah diotorisasi, remote akan muncul di Remote Manager Anda. Klik **Open** untuk membuka file explorer dan menjelajahi penyimpanan Put.io Anda. Anda akan melihat file yang tersimpan, folder yang diatur berdasarkan torrent atau tugas unduhan, dan direktori mana pun yang telah Anda buat secara manual.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Put.io remote in RcloneView" class="img-large img-center" />

## Menjelajahi dan Mengelola File Put.io

RcloneView File Explorer menampilkan konten Put.io Anda dalam tampilan pohon dan daftar yang familiar. Anda dapat menavigasi folder, memilih beberapa file, dan memulai transfer langsung dari panel. Jika Anda memiliki pustaka media besar — film, serial TV, file audio — tampilan thumbnail memberikan grid gambar untuk mengidentifikasi konten dengan cepat.

Untuk menyalin atau memindahkan file antara Put.io dan cloud lain (misalnya, Google Drive atau Backblaze B2), buka panel kedua yang mengarah ke remote tujuan Anda. Pilih file di panel Put.io, klik kanan, lalu pilih **Copy** atau **Move**. RcloneView menangani transfer tanpa mengunduh ke mesin lokal Anda terlebih dahulu saat melakukan operasi cloud-to-cloud.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Put.io to another provider" class="img-large img-center" />

## Menyiapkan Job Sinkronisasi untuk Put.io

Untuk pencadangan rutin atau sinkronisasi satu arah dari Put.io ke penyimpanan jangka panjang Anda, fitur **Job** lebih andal daripada transfer manual. Buka **Jobs**, klik **New Job**, dan pilih remote Put.io Anda sebagai sumber. Atur tujuan ke remote lain yang telah dikonfigurasi — Backblaze B2 adalah pilihan umum untuk pengarsipan media yang terjangkau.

Pada langkah konfigurasi job, Anda dapat mengaktifkan **Dry Run** untuk melihat pratinjau file mana yang akan ditransfer sebelum benar-benar dijalankan. Ini berguna ketika pustaka Put.io Anda besar dan Anda ingin memastikan cakupan sinkronisasi. Setelah meninjau, nonaktifkan Dry Run dan jalankan job tersebut. RcloneView mencatat setiap transfer dengan jumlah file, kecepatan, dan status di tab **Job History**.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Put.io sync job in RcloneView" class="img-large img-center" />

## Kasus Penggunaan: Alur Kerja Konten Media

Pengguna Put.io umumnya memiliki beberapa pola: mengarsipkan media yang diambil ke penyimpanan dingin, mencerminkan konten ke server rumah, atau menyinkronkan ke Google Drive untuk streaming melalui pemutar pihak ketiga. RcloneView mencakup semua kebutuhan ini. Anda dapat membuat job terpisah untuk subdirektori Put.io yang berbeda — satu job untuk film, satu lagi untuk serial TV — dan menjadwalkannya secara independen dengan lisensi PLUS.

Fitur **Folder Compare** sangat membantu ketika Anda tidak yakin apa yang sudah disalin. Buka folder Put.io dan tujuan Anda secara berdampingan, dan RcloneView akan menyoroti perbedaannya sehingga Anda hanya perlu mentransfer yang belum ada.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Put.io transfer logs in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka **Remote Manager**, klik **New Remote**, dan pilih **Put.io**.
3. Selesaikan login browser OAuth untuk mengotorisasi akses.
4. Buka remote Put.io di File Explorer dan konfigurasikan job sinkronisasi ke tujuan pilihan Anda.

RcloneView mengubah Put.io dari sekadar wadah unduhan pasif menjadi bagian aktif dari alur kerja penyimpanan cloud Anda.

---

**Panduan Terkait:**

- [Mencadangkan pCloud ke AWS S3 dengan RcloneView](https://rcloneview.com/support/blog/backup-pcloud-to-aws-s3-rcloneview)
- [Migrasi Cloud-to-Cloud dengan RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [Pemantauan Job History dan Log Transfer](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
