---
slug: migrate-box-to-koofr-rcloneview
title: "Migrasi dari Box ke Koofr — Transfer File dengan RcloneView"
authors:
  - jay
description: "Migrasi dari Box ke Koofr dengan RcloneView: hubungkan kedua remote, jalankan Dry Run untuk transfer, salin dari cloud ke cloud, dan verifikasi hasilnya dengan Folder Compare."
keywords:
  - migrasi Box ke Koofr
  - transfer Box ke Koofr
  - migrasi Box Koofr
  - RcloneView Box
  - RcloneView Koofr
  - transfer cloud ke cloud
  - pindahkan file dari Box
  - Koofr penyimpanan cloud Eropa
  - migrasi rclone GUI
  - filter Box Docs
tags:
  - RcloneView
  - box
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi dari Box ke Koofr — Transfer File dengan RcloneView

> Pindahkan workspace Box ke Koofr tanpa perlu mengunduh apa pun ke disk Anda sendiri terlebih dahulu.

Tim meninggalkan Box karena berbagai alasan: proyek telah selesai, kontrak berakhir, atau lebih menyukai penyedia penyimpanan Eropa. Koofr adalah tujuan yang wajar, tetapi memindahkan folder bertahun-tahun secara manual lambat dan rawan kesalahan. RcloneView menghubungkan kedua layanan dalam satu jendela dan menjalankan penyalinan dari cloud ke cloud, dengan Dry Run dan langkah perbandingan untuk memastikan tidak ada yang terlewat. RcloneView melakukan mount DAN sinkronisasi untuk 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan Box dan Koofr sebagai Remote

Buka tab Remote dan pilih New Remote. Box masuk melalui OAuth: browser Anda terbuka, Anda menyetujui akses, dan RcloneView terhubung secara otomatis. Jika Anda memigrasikan akun perusahaan, Box for Business memerlukan pengaturan `box_sub_type = enterprise` pada konfigurasi remote.

Tambahkan Koofr sebagai remote kedua dengan cara yang sama. Setelah keduanya muncul di Remote Manager, buka berdampingan di dua panel Explorer sehingga Anda dapat menelusuri sumber dan tujuan sebelum memindahkan satu file pun.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote Box dan Koofr di RcloneView" class="img-large img-center" />

## Rencanakan Penyalinan dengan Filter dan Dry Run

Akun Box biasanya berisi lebih banyak dari file yang ingin Anda simpan. Langkah 3 wizard sinkronisasi memungkinkan Anda menetapkan ukuran file maksimum, usia file maksimum, atau batas kedalaman folder. Ada juga filter Box Docs bawaan, serta aturan kustom seperti mengecualikan folder `.git/` atau file `.iso`.

Sebelum menjalankan apa pun, gunakan Dry Run. Fitur ini mencantumkan file yang akan disalin dan dihapus tanpa mengubah kedua sisi. Untuk migrasi, pilih job Copy, bukan sinkronisasi mirroring, agar tidak ada yang dihapus di Koofr jika tujuan sudah berisi data.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer cloud ke cloud dari Box ke Koofr di RcloneView" class="img-large img-center" />

## Jalankan Transfer dan Pantau Progresnya

Mulai job dan ikuti di tab Transferring: progres, kecepatan, dan jumlah file ditampilkan secara langsung. Untuk pustaka yang besar, tingkatkan jumlah transfer file di Langkah 2, tetapi jaga jumlah equality checker tetap moderat jika salah satu backend merespons lambat. "Retry entire sync if fails" bawaannya adalah 3, yang membantu mengatasi error jaringan sementara.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Memantau transfer Box ke Koofr di tab Transferring" class="img-large img-center" />

## Verifikasi dengan Folder Compare

Setelah job selesai, buka Compare dengan Box di kiri dan Koofr di kanan. Filter untuk file yang hanya ada di kiri, hanya di kanan, dan yang berbeda menunjukkan dengan tepat apa yang tersisa. Gunakan aksi copy-right untuk mentransfer sisa file. Job History menyimpan status, ukuran, dan jumlah file dari setiap proses sebagai catatan migrasi.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Membandingkan folder Box dan Koofr setelah migrasi" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Box (OAuth) dan Koofr sebagai remote.
3. Buat job Copy dengan filter, lalu jalankan Dry Run.
4. Jalankan job, lalu konfirmasi hasilnya dengan Folder Compare.

Biarkan akun Box tetap utuh sampai Compare menunjukkan kedua sisi cocok.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Box — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Kelola Penyimpanan Koofr — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Migrasi dari Box ke Google Drive dengan RcloneView](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)

<CloudSupportGrid />
