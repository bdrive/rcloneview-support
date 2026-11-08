---
slug: migrate-dropbox-to-koofr-rcloneview
title: "Migrasi Dropbox ke Koofr — Transfer File dengan RcloneView"
authors:
  - robin
description: "Migrasikan Dropbox ke Koofr dengan RcloneView: hubungkan kedua remote, jalankan Dry Run, salin dari cloud ke cloud, dan verifikasi hasilnya dengan Folder Compare."
keywords:
  - migrasi Dropbox ke Koofr
  - transfer Dropbox ke Koofr
  - migrasi Dropbox Koofr
  - RcloneView Dropbox
  - RcloneView Koofr
  - transfer cloud ke cloud
  - memindahkan file dari Dropbox
  - penyimpanan cloud Eropa Koofr
  - migrasi rclone GUI
  - migrasi Dropbox for Business
tags:
  - RcloneView
  - dropbox
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Dropbox ke Koofr — Transfer File dengan RcloneView

> Pindahkan akun Dropbox ke Koofr dari cloud ke cloud, dengan pratinjau sebelum apa pun disalin dan perbandingan sesudahnya.

Sebuah agensi desain menutup akun klien, atau seorang freelancer ingin arsipnya dihosting oleh penyedia Eropa. Dalam kedua kasus, menyeret ribuan folder Dropbox melalui laptop itu lambat dan mudah salah. RcloneView menghubungkan Dropbox dan Koofr dalam satu jendela, menjalankan penyalinan di antara keduanya, dan menyediakan Dry Run serta Folder Compare untuk memastikan hasilnya. RcloneView mem-mount DAN menyinkronkan 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan Dropbox dan Koofr sebagai Remote

Buka tab Remote dan pilih New Remote. Dropbox masuk melalui OAuth: browser Anda terbuka, Anda menyetujui akses, dan RcloneView terhubung secara otomatis. Untuk akun perusahaan, Dropbox for Business memerlukan pengaturan `dropbox_business = true` pada konfigurasi remote.

Tambahkan Koofr sebagai remote kedua. Setelah keduanya muncul di Remote Manager, buka keduanya berdampingan di dua panel Explorer. Telusuri pohon sumber dan tujuan sebelum memindahkan apa pun, agar Anda tahu folder mana yang penting.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote Dropbox dan Koofr di RcloneView" class="img-large img-center" />

## Rencanakan Penyalinan dengan Filter dan Dry Run

Sebagian besar akun Dropbox berisi file sementara yang tidak ingin Anda bawa. Langkah 3 pada wizard job menawarkan ukuran file maksimum, usia file maksimum, dan batas kedalaman folder. Filter bawaan mencakup file Music, Video, Image, dan Document, dan aturan kustom dapat mengecualikan pola seperti folder `.git/` atau file `.iso`.

Jalankan Dry Run sebelum job yang sebenarnya. Dry Run menampilkan daftar file yang akan disalin atau dihapus tanpa mengubah kedua sisi. Untuk migrasi, pilih job Copy dan bukan sinkronisasi mirroring, sehingga tidak ada yang sudah tersimpan di Koofr yang dihapus.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer cloud ke cloud dari Dropbox ke Koofr di RcloneView" class="img-large img-center" />

## Jalankan Transfer dan Pantau Progres

Mulai job dan ikuti di tab Transferring, yang menampilkan progres, kecepatan, dan jumlah file. Untuk pustaka yang besar, naikkan jumlah transfer file pada Langkah 2, tetapi pertahankan jumlah equality checker tetap sedang jika salah satu layanan merespons lambat. "Retry entire sync if fails" bernilai default 3, yang meredam error jaringan sementara.

Jika pustaka terlalu besar untuk satu sesi, simpan job di Job Manager dan jalankan lagi nanti. Job Copy hanya mentransfer file yang hilang atau berbeda, sehingga proses kedua melanjutkan dari tempat proses pertama berhenti.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Memantau transfer Dropbox ke Koofr di tab Transferring" class="img-large img-center" />

## Verifikasi dengan Folder Compare

Setelah job selesai, buka Compare dengan Dropbox di kiri dan Koofr di kanan. Filter untuk file hanya di kiri, hanya di kanan, dan berbeda menunjukkan apa yang tersisa. Aksi salin ke kanan mentransfer sisa file. Job History mencatat status, ukuran, kecepatan, dan jumlah file untuk setiap proses, yang berguna sebagai dokumentasi migrasi.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History menampilkan migrasi Dropbox ke Koofr yang selesai" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Dropbox (OAuth) dan Koofr sebagai remote.
3. Buat job Copy dengan filter, lalu jalankan Dry Run.
4. Jalankan job, lalu konfirmasi hasilnya dengan Folder Compare.

Biarkan akun Dropbox tidak tersentuh sampai Compare menunjukkan kedua sisi cocok.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Koofr — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Migrasi Koofr ke Dropbox dengan RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-dropbox-rcloneview)
- [Migrasi Dropbox ke pCloud dengan RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-pcloud-rcloneview)

<CloudSupportGrid />
