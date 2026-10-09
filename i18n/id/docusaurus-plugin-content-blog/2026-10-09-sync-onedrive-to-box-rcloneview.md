---
slug: sync-onedrive-to-box-rcloneview
title: "Sinkronkan OneDrive ke Box — Pencadangan Cloud dengan RcloneView"
authors:
  - alex
description: "Sinkronkan OneDrive ke Box dengan RcloneView: hubungkan keduanya lewat OAuth, pratinjau dengan Dry Run, jalankan sinkronisasi cloud-ke-cloud, lalu verifikasi dengan Folder Compare."
keywords:
  - sinkronkan OneDrive ke Box
  - cadangan OneDrive ke Box
  - alat sinkronisasi OneDrive Box
  - salin OneDrive ke Box
  - sinkronisasi cloud ke cloud
  - migrasi OneDrive Box
  - RcloneView
  - rclone GUI
  - perbandingan folder
  - sinkronisasi cloud terjadwal
tags:
  - RcloneView
  - onedrive
  - box
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronkan OneDrive ke Box — Pencadangan Cloud dengan RcloneView

> Simpan salinan kedua file OneDrive Anda di Box, dipindahkan langsung di antara kedua cloud.

Tim sering memakai OneDrive secara internal, sementara klien, mitra, atau proses kepatuhan mengharapkan file berada di Box. Mengunduh semuanya lalu mengunggah ulang itu lambat dan membutuhkan ruang disk lokal yang mungkin tidak Anda miliki. RcloneView menghubungkan kedua layanan dan menyinkronkan secara cloud-ke-cloud, dengan Dry Run sebelumnya dan perbandingan visual sesudahnya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan OneDrive dan Box

Kedua layanan menggunakan login browser OAuth. Di tab Remote, klik **New Remote**, pilih Microsoft OneDrive, lalu masuk. Ulangi untuk Box. Untuk akun Box Business atau Enterprise, atur `box_sub_type = enterprise` saat konfigurasi.

RcloneView dapat melakukan mount dan sinkronisasi 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux. Setelah kedua remote dibuat, buka keduanya berdampingan di dua panel Explorer.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote OneDrive dan Box di RcloneView" class="img-large img-center" />

## Pilih Copy atau Sync, Lalu Dry Run

Buka wizard Sync dan pilih OneDrive sebagai sumber serta sebuah folder Box sebagai tujuan. Sinkronisasi satu arah hanya mengubah tujuan, sehingga file yang dihapus dari OneDrive juga akan dihapus dari Box. Jika Anda menginginkan jaring pengaman, bukan cermin, gunakan job Copy.

Jalankan **Dry Run** terlebih dahulu. Fitur ini menampilkan daftar file yang akan disalin dan dihapus tanpa mengubah apa pun. Misalnya, tim akuntansi yang menyinkronkan folder "Clients" berukuran 150 GB dapat memastikan struktur folder dan menemukan file sementara yang tidak perlu sebelum eksekusi sesungguhnya.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sinkronisasi cloud-ke-cloud dari OneDrive ke Box" class="img-large img-center" />

## Filter dan Atur Job

Step 2 pada wizard mengatur jumlah transfer file, transfer multi-thread, dan equality checker. Aktifkan perbandingan checksum jika Anda ingin memakai hash ditambah ukuran, bukan hanya ukuran dan waktu. Step 3 memungkinkan Anda mengecualikan file berdasarkan ukuran maksimum, usia, atau aturan kustom, atau menggunakan filter bawaan untuk dokumen atau gambar. Box memiliki batas ukuran unggah sendiri yang bergantung pada paket Anda, jadi periksa akun Anda sebelum menyinkronkan file yang sangat besar.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Memulai job sinkronisasi OneDrive ke Box" class="img-large img-center" />

## Pantau, Bandingkan, dan Jadwalkan

Pantau progres di tab Transferring, yang menampilkan kecepatan, jumlah file, dan ukuran. Setelahnya, buka **Compare** dengan OneDrive di kiri dan Box di kanan, lalu filter file yang hanya ada di kiri atau yang berbeda. Job History menyimpan status, durasi, dan ukuran dari setiap eksekusi.

Dengan lisensi PLUS, Anda dapat menambahkan jadwal bergaya crontab di Step 4 agar sinkronisasi berulang setiap malam selama RcloneView berjalan di system tray.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare antara OneDrive dan Box" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote OneDrive dan Box di tab Remote.
3. Buat job Sync atau Copy dari OneDrive ke Box lalu jalankan Dry Run.
4. Jalankan job, lalu verifikasi dengan Folder Compare dan Job History.

Salinan kedua yang telah diverifikasi di Box memberi Anda cadangan yang andal, apa pun platform yang digunakan tim Anda berikutnya.

---

**Panduan Terkait:**

- [Kelola Penyimpanan OneDrive — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Kelola Penyimpanan Box — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Migrasi Box ke OneDrive — Transfer File dengan RcloneView](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)

<CloudSupportGrid />
