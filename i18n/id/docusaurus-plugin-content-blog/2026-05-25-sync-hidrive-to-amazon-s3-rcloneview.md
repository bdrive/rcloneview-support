---
slug: sync-hidrive-to-amazon-s3-rcloneview
title: "Sinkronisasi HiDrive ke Amazon S3 — Pencadangan Cloud dengan RcloneView"
authors:
  - morgan
description: "Pelajari cara menyinkronkan dan mencadangkan file HiDrive ke Amazon S3 dengan RcloneView. Transfer file antara penyimpanan cloud Eropa dan global menggunakan GUI yang sederhana."
keywords:
  - HiDrive to Amazon S3
  - RcloneView HiDrive backup
  - sync HiDrive S3
  - HiDrive cloud backup
  - transfer HiDrive to AWS
  - cloud-to-cloud backup RcloneView
  - HiDrive migration to S3
  - Amazon S3 backup tool
  - cross-cloud file transfer
  - HiDrive file sync
tags:
  - hidrive
  - amazon-s3
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi HiDrive ke Amazon S3 — Pencadangan Cloud dengan RcloneView

> Cadangkan penyimpanan HiDrive Anda ke Amazon S3 menggunakan alat sinkronisasi visual RcloneView — tanpa perlu CLI, dengan penjadwalan, pemfilteran, dan pemantauan transfer langsung yang sudah terintegrasi.

HiDrive, platform cloud Eropa milik Strato, populer di kalangan bisnis yang mengutamakan penyimpanan yang sesuai dengan GDPR. Sementara itu, Amazon S3 menjadi tolok ukur untuk daya tahan penyimpanan objek dan integrasi ekosistem — tujuan pencadangan sekunder yang alami untuk segala sesuatu yang bersifat mission-critical. Dengan menggunakan RcloneView, Anda dapat menghubungkan kedua penyedia dalam satu antarmuka dan menjalankan pekerjaan sinkronisasi otomatis dan terfilter yang menjaga bucket S3 Anda selaras dengan folder HiDrive tanpa menulis satu perintah pun.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan HiDrive dan Amazon S3 di RcloneView

HiDrive menggunakan OAuth untuk autentikasi, artinya RcloneView akan membuka tab browser tempat Anda masuk ke akun Strato Anda dan memberikan akses — tanpa perlu mengelola API key. Buka **Remote > New Remote**, pilih **HiDrive**, lalu selesaikan proses login melalui browser. Struktur folder HiDrive Anda akan langsung muncul di file explorer.

Untuk Amazon S3, buka kembali **Remote > New Remote**, pilih **Amazon S3**, lalu masukkan AWS Access Key ID, Secret Access Key, dan region tujuan Anda. Jika Anda menginginkan akses dengan hak akses minimal, buat pengguna IAM khusus di konsol AWS dengan izin tulis yang dibatasi hanya pada bucket tujuan, lalu masukkan kredensial tersebut di RcloneView.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting HiDrive and Amazon S3 as remotes in RcloneView" class="img-large img-center" />

Setelah kedua remote terdaftar, buka dua panel berdampingan di dual-pane explorer RcloneView — HiDrive di kiri, S3 di kanan — untuk membandingkan isi folder secara visual sebelum menjalankan sinkronisasi penuh.

## Membuat Pekerjaan Sinkronisasi HiDrive ke S3

Setelah kedua remote terhubung, buka **Home > Sync** untuk membuka wizard pekerjaan. Tetapkan folder HiDrive Anda sebagai sumber dan bucket S3 Anda (dengan prefix subfolder opsional) sebagai tujuan. Pada langkah Advanced Settings, atur jumlah thread transfer bersamaan sesuai dengan bandwidth yang tersedia — nilai yang lebih tinggi mempercepat transfer massal untuk struktur file datar, sementara nilai yang lebih rendah lebih aman pada koneksi dengan batasan rate yang ketat.

Pada langkah Filtering, Anda dapat mengecualikan file yang tidak relevan berdasarkan jenis (misalnya, `.tmp`, `.part`) atau berdasarkan usia — misalnya, hanya menyinkronkan file yang dimodifikasi dalam 90 hari terakhir menggunakan filter **Max file age** (`90d`). Ini menjaga pekerjaan tetap fokus dan mengurangi panggilan API yang tidak perlu ke kedua endpoint.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a HiDrive to Amazon S3 sync job in RcloneView" class="img-large img-center" />

Sebelum menjalankan untuk pertama kalinya, selalu klik **Dry Run** untuk melihat pratinjau daftar file yang akan ditransfer atau dihapus — langkah penting saat menyinkronkan dari akun HiDrive yang sudah terisi ke bucket S3 baru, di mana arah sinkronisasi satu arah harus sudah benar sebelum ada data yang berpindah.

## Menjadwalkan Pencadangan Otomatis

Untuk perlindungan berkelanjutan, pengguna lisensi PLUS dapat menjadwalkan pekerjaan HiDrive-ke-S3 agar berjalan otomatis dengan jadwal bergaya crontab. Konfigurasi umum meliputi sinkronisasi penuh setiap malam pukul 2 pagi dan proses inkremental setiap jam selama jam kerja. Simulator jadwal pada Langkah 4 dari wizard pekerjaan menampilkan pratinjau 10 waktu eksekusi berikutnya sebelum Anda menyimpannya.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated HiDrive to S3 backup in RcloneView" class="img-large img-center" />

Setelah berjalan tanpa pengawasan, tab **Transferring** menampilkan kecepatan transfer langsung dan jumlah file untuk setiap eksekusi terjadwal, sementara **Job History** mencatat setiap proses beserta hasilnya, jumlah byte yang ditransfer, dan detail error jika ada — sebuah jejak audit lengkap untuk akuntabilitas pencadangan.

## Memvalidasi Kelengkapan Sinkronisasi dengan Folder Compare

Setelah sinkronisasi pertama selesai, gunakan fitur **Folder Compare** RcloneView untuk memverifikasi bahwa HiDrive dan S3 benar-benar sinkron. Buka kedua folder di tampilan compare; RcloneView akan menyoroti file yang hanya ada di kiri, hanya ada di kanan, dan yang berbeda ukurannya — memungkinkan Anda menemukan item yang hilang atau tidak cocok tanpa perlu memeriksa daftar file secara manual. Untuk arsip dengan risiko tinggi, aktifkan perbandingan **checksum** pada Advanced Settings pekerjaan sinkronisasi untuk memverifikasi integritas file berdasarkan hash, bukan hanya ukuran.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing HiDrive and Amazon S3 folder contents in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan akun HiDrive Anda melalui **Remote > New Remote > HiDrive** menggunakan login browser OAuth.
3. Tambahkan bucket Amazon S3 Anda melalui **Remote > New Remote > Amazon S3** dengan kredensial IAM Anda.
4. Buat pekerjaan sinkronisasi dari HiDrive ke S3 di **Home > Sync**, jalankan Dry Run terlebih dahulu, lalu eksekusi.

Dengan penjadwalan otomatis diaktifkan, file HiDrive Anda akan mengalir ke S3 sesuai jadwal Anda — memberi Anda pencadangan lintas penyedia tanpa upaya manual yang berkelanjutan.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan Cloud HiDrive — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Mengelola Amazon S3 — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Sinkronisasi HiDrive ke Google Drive — Pencadangan Cloud dengan RcloneView](https://rcloneview.com/support/blog/sync-hidrive-to-google-drive-rcloneview)

<CloudSupportGrid />
