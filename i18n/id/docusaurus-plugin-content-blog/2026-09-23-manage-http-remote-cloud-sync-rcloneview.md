---
slug: manage-http-remote-cloud-sync-rcloneview
title: "Mengelola Penyimpanan Remote HTTP — Menjelajah dan Menyinkronkan File dengan RcloneView"
authors:
  - alex
description: "Sambungkan indeks file HTTP yang hanya-baca ke RcloneView dan sinkronkan isinya ke Google Drive, S3, Backblaze B2, dan 90+ penyedia penyimpanan cloud."
keywords:
  - remote HTTP RcloneView
  - sinkronisasi server file HTTP
  - penyimpanan HTTP hanya-baca
  - sinkronisasi HTTP ke cloud
  - daftar direktori HTTP rclone
  - HTTP ke Google Drive
  - HTTP ke Amazon S3
  - mengarsipkan file HTTP
  - koneksi HTTP RcloneView
  - menjelajahi remote HTTP
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengelola Penyimpanan Remote HTTP — Menjelajah dan Menyinkronkan File dengan RcloneView

> RcloneView mengubah indeks file HTTP publik mana pun menjadi remote yang dapat dijelajahi, sehingga Anda dapat menarik isinya ke Google Drive, S3, atau 90+ penyedia cloud lainnya tanpa satu pun perintah wget.

Banyak dataset, arsip firmware, mirror riset, dan artefak build internal masih berada di balik daftar direktori HTTP sederhana — tanpa API, tanpa login, hanya folder dan file yang disajikan melalui URL. Mengunduh dari sumber-sumber ini biasanya berarti membuat skrip loop curl atau wget dan berharap struktur direktori tidak berubah di tengah proses. RcloneView terhubung ke endpoint HTTP mana pun sebagai remote hanya-baca dan memungkinkan Anda menjelajahinya di panel explorer yang sama dengan yang Anda gunakan untuk penyimpanan cloud, lalu menyalin apa yang Anda butuhkan ke tujuan backup yang tepat.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menyambungkan Remote HTTP di RcloneView

Buka tab **Remote** dan klik **New Remote**, lalu pilih HTTP dari daftar penyedia. Masukkan URL dasar dari indeks file yang ingin Anda jelajahi — RcloneView membaca daftar direktori server dan menampilkannya sebagai pohon folder biasa. Tidak ada alur OAuth dan tidak ada kredensial yang perlu dikelola karena remote HTTP bersifat hanya-baca sesuai desainnya: Anda dapat menampilkan daftar, menjelajahi, dan mengunduh file, tetapi tidak dapat mengunggah, mengganti nama, atau menghapus apa pun di server sumber.

Perbedaan ini penting untuk cara Anda menggunakan jenis remote ini. Berbeda dari alat yang hanya mendukung mount, RcloneView juga menyinkronkan dan membandingkan folder — bahkan dengan lisensi FREE — sehingga remote HTTP paling cocok digunakan sebagai sumber tempat Anda menarik data, dengan tujuan cloud atau lokal yang dapat ditulis di sisi lainnya.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote HTTP baru di RcloneView" class="img-large img-center" />

## Menjelajahi dan Mengunduh dari Indeks HTTP

Setelah tersambung, remote HTTP berperilaku seperti panel lain mana pun di explorer multi-panel RcloneView. Perluas pohon folder, periksa ukuran file dan tanggal modifikasi jika server melaporkannya, dan gunakan Ctrl+Klik atau Shift+Klik untuk memilih beberapa file atau subfolder sebelum mengunduh. Buka tujuan cloud — bucket Backblaze B2 atau folder Google Drive — di panel sebelahnya dan seret file ke sana untuk memulai transfer.

Ini adalah pola umum bagi tim yang mereplikasi arsip dataset publik, menarik image firmware dari titik distribusi HTTP vendor, atau mengarsipkan snapshot dari server build internal yang hanya menampilkan daftar direktori.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Menyalin file dari remote HTTP ke penyimpanan cloud di RcloneView" class="img-large img-center" />

## Menjadwalkan Penarikan Berulang dari Sumber HTTP

Jika indeks HTTP diperbarui secara berkala — build malam hari, pembaruan dataset mingguan — siapkan entri Job Manager dengan remote HTTP sebagai sumber dan penyimpanan cloud Anda sebagai tujuan. Jalankan **Dry Run** terlebih dahulu untuk memastikan file mana saja yang akan disalin, karena daftar direktori HTTP dapat bervariasi dalam jumlah metadata yang ditampilkan, dan Anda perlu memverifikasi bahwa pencocokan file berjalan sesuai harapan sebelum transfer sesungguhnya.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Menjadwalkan pekerjaan berulang untuk menarik file dari remote HTTP di RcloneView" class="img-large img-center" />

Dengan **lisensi PLUS**, lampirkan jadwal bergaya crontab ke pekerjaan tersebut sehingga file baru yang dipublikasikan di server HTTP masuk ke arsip cloud Anda sesuai jadwal itu, lalu periksa tab **Job History** setelahnya untuk memastikan jumlah transfer dan menemukan file yang sudah tidak lagi disediakan oleh server sumber.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka **Remote** > **New Remote** dan pilih HTTP dari daftar penyedia.
3. Masukkan URL dasar daftar direktori dan simpan remote tersebut.
4. Buka remote HTTP di satu panel dan tujuan cloud Anda di panel lainnya.
5. Gunakan **Job Manager** untuk mengatur pekerjaan sinkronisasi, jalankan Dry Run sebelum penarikan langsung pertama.

Setelah sumber HTTP tersambung, menarik file ke arsip cloud Anda berubah menjadi pekerjaan yang dapat diulang dan diaudit, alih-alih skrip sekali pakai yang harus Anda ingat untuk dijalankan ulang.

---

**Panduan Terkait:**

- [Connect Any WebDAV Server to RcloneView — Sync with Google Drive, S3, and 90+ Clouds](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [Connect Any SFTP Server to RcloneView — Sync Remote Servers with Cloud Storage](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Manage FTP Server Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-ftp-server-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
