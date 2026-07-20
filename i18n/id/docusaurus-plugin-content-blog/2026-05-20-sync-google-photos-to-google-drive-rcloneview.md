---
slug: sync-google-photos-to-google-drive-rcloneview
title: "Sinkronisasi Google Photos ke Google Drive — Atur dan Cadangkan Pustaka Foto Anda dengan RcloneView"
authors:
  - kai
description: "Pelajari cara menyinkronkan Google Photos ke Google Drive secara otomatis menggunakan RcloneView. Transfer, atur, dan cadangkan seluruh pustaka foto Anda di berbagai akun cloud."
keywords:
  - sync Google Photos to Google Drive
  - backup Google Photos to Google Drive RcloneView
  - Google Photos Google Drive transfer
  - RcloneView Google Photos sync
  - cloud photo library backup
  - automated Google Photos backup
  - photo file management cloud
  - Google Photos cloud sync
  - transfer photos between Google services
  - cloud photo organization tool
tags:
  - RcloneView
  - google-photos
  - google-drive
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Google Photos ke Google Drive — Atur dan Cadangkan Pustaka Foto Anda dengan RcloneView

> Google Photos dan Google Drive adalah remote cloud terpisah di rclone—RcloneView memungkinkan Anda menyinkronkan seluruh pustaka foto di antara keduanya hanya dengan beberapa klik dan menjadwalkannya agar berjalan secara otomatis.

Banyak fotografer dan tim menggunakan Google Photos sebagai alat utama untuk mengambil dan mengorganisir foto, sementara mengandalkan Google Drive untuk berbagi file yang terstruktur dan kolaborasi. Masalahnya: keduanya adalah dua layanan cloud yang berbeda di rclone, dan konten tidak otomatis mengalir di antara keduanya. Seorang fotografer pernikahan yang mengelola puluhan ribu gambar hasil olahan di Google Photos mungkin memerlukan file-file tersebut dapat diakses dalam folder Google Drive yang terstruktur untuk keperluan pengiriman ke klien dan pengarsipan jangka panjang. RcloneView menghubungkan kedua layanan tersebut dari antarmuka yang sama, sehingga mudah untuk mentransfer, menyinkronkan, dan menjadwalkan migrasi foto di antara keduanya tanpa perlu menggunakan command-line.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Google Photos dan Google Drive di RcloneView

Google Photos dan Google Drive sama-sama menggunakan autentikasi OAuth berbasis browser. Di RcloneView, buka tab Remote lalu klik New Remote, kemudian pilih Google Photos dan selesaikan proses masuk melalui browser. Ulangi proses tersebut untuk menambahkan Google Drive sebagai remote kedua. Dalam beberapa menit, kedua akun akan muncul sebagai panel terpisah di dual-pane file explorer.

Dengan kedua remote terlihat berdampingan, Anda dapat menjelajahi pustaka Google Photos Anda beserta struktur folder Google Drive dalam jendela yang sama. Tampilan paralel ini memudahkan untuk melihat album foto atau rentang tanggal mana yang belum ditransfer, serta menyeret folder tertentu untuk penyalinan cepat satu kali. Popup konfirmasi drag-and-drop (dapat diaktifkan/nonaktifkan di Settings) mencegah pemindahan yang tidak disengaja saat bekerja dengan pustaka besar.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Photos and Google Drive as remotes in RcloneView" class="img-large img-center" />

## Menyiapkan Job Sinkronisasi untuk Mentransfer Pustaka Foto Anda

Untuk transfer massal, gunakan Job Manager untuk membuat job sinkronisasi khusus. Klik tombol Sync dari tab Home, pilih folder Google Photos Anda sebagai sumber, lalu pilih folder tujuan di Google Drive sebagai destinasi. Wizard 4 langkah memungkinkan Anda mengonfigurasi jumlah aliran transfer bersamaan, mengaktifkan verifikasi checksum untuk mendeteksi file yang rusak selama proses transfer, serta menerapkan filter ukuran atau usia file jika Anda ingin mengecualikan video atau hanya mengambil foto dari periode tertentu.

Sebelum menjalankan transfer penuh, gunakan fitur Dry Run untuk melihat pratinjau file mana saja yang akan disalin—hal ini penting saat menyinkronkan arsip besar di mana Anda ingin menghindari penimpaan tidak sengaja pada folder Drive yang sudah terorganisir dengan file duplikat. Dry run menampilkan daftar lengkap operasi yang direncanakan tanpa melakukan perubahan apa pun.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud sync job between Google Photos and Google Drive in RcloneView" class="img-large img-center" />

Tab Transferring di bagian bawah layar menyediakan pemantauan transfer secara langsung—persentase progres, kecepatan transfer saat ini, dan jumlah file—sehingga Anda dapat memantau migrasi foto besar tanpa perlu menebak-nebak berapa banyak yang tersisa.

## Menjadwalkan Sinkronisasi Foto Otomatis (Lisensi PLUS)

Bagi fotografer atau tim yang terus-menerus mengunggah ke Google Photos, transfer satu kali saja tidak cukup. Dengan lisensi PLUS, Anda dapat menjadwalkan job sinkronisasi berulang menggunakan penjadwalan bergaya crontab. Konfigurasikan job malam hari untuk menarik foto Google Photos yang baru ditambahkan ke folder Google Drive yang sesuai, sehingga kedua akun tetap sinkron tanpa intervensi manual. Scheduler mendukung interval yang sangat rinci: dijalankan per menit, jam, hari dalam seminggu, tanggal dalam bulan, atau bulan.

Job History mencatat setiap eksekusi—kapan dijalankan, berapa banyak file yang ditransfer, total ukuran data, kecepatan, dan apakah selesai atau mengalami error. Jika ada gangguan jaringan yang menghentikan sesi, RcloneView akan mencoba ulang secara otomatis (default 3 kali percobaan) dan mencatat hasilnya agar dapat Anda tinjau nanti.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Google Photos to Google Drive sync transfers" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Google Photos melalui Remote tab > New Remote > Google Photos, lalu autentikasi melalui browser.
3. Tambahkan Google Drive sebagai remote kedua dengan cara yang sama.
4. Buat job Sync di Job Manager, pilih Google Photos sebagai sumber dan folder Google Drive sebagai destinasi, jalankan Dry Run terlebih dahulu, lalu jalankan transfer penuh.

Menyinkronkan pustaka Google Photos Anda ke Google Drive hanya membutuhkan waktu beberapa menit untuk dikonfigurasi dengan RcloneView, memberikan Anda akses file yang terstruktur dan salinan cadangan yang andal untuk seluruh koleksi foto Anda.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Google Photos — Sinkronisasi dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)
- [Kelola Penyimpanan Google Drive — Sinkronisasi dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Cadangkan Google Photos ke External Drive dan NAS dengan RcloneView](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)

<CloudSupportGrid />
