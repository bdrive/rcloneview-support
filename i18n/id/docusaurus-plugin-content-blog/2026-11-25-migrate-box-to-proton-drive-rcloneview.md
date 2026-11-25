---
slug: migrate-box-to-proton-drive-rcloneview
title: "Migrasi Box ke Proton Drive — Transfer File dengan RcloneView"
authors:
  - casey
description: "Pindahkan file dari Box ke Proton Drive dengan RcloneView. Hubungkan kedua cloud, pratinjau dengan Dry Run, salin folder, dan verifikasi migrasi dengan Folder Compare."
keywords:
  - migrasi box ke proton drive
  - transfer box ke proton drive
  - pindahkan file dari box ke proton drive
  - alat migrasi box
  - migrasi proton drive
  - migrasi cloud ke cloud
  - migrasi penyimpanan cloud terenkripsi
  - RcloneView box
  - RcloneView proton drive
tags:
  - RcloneView
  - box
  - proton-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Box ke Proton Drive — Transfer File dengan RcloneView

> Pindahkan folder Box Anda ke penyimpanan terenkripsi end-to-end milik Proton Drive tanpa harus mengunduh semuanya ke laptop terlebih dahulu.

Tim dan pekerja lepas sering memulai di Box karena fitur kolaborasinya, lalu memindahkan arsip sensitif ke Proton Drive karena fokusnya pada privasi. Melakukannya secara manual berarti mengunduh berpuluh gigabyte dari Box lalu mengunggahnya kembali melalui browser. RcloneView menghubungkan kedua layanan dalam satu jendela sehingga Anda dapat menyalin folder secara langsung, memeriksa hasilnya, dan menyimpan tugas yang dapat diulang untuk apa pun yang ditambahkan kemudian.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan Box dan Proton Drive

Buka **Remote tab > New Remote** dan tambahkan Box terlebih dahulu. Box menggunakan OAuth, jadi jendela browser akan terbuka agar Anda masuk dan menyetujui akses — tanpa perlu menyalin kunci API. Jika organisasi Anda menggunakan Box for Business, atur `box_sub_type = enterprise` di pengaturan remote agar RcloneView dapat melihat folder enterprise Anda.

Selanjutnya, tambahkan Proton Drive dengan email dan kata sandi Proton Anda, ditambah kode 2FA jika akun Anda mengaktifkannya. Dukungan Proton Drive memerlukan rclone v1.69 atau lebih baru; rclone tertanam yang dibundel dengan RcloneView memenuhi syarat tersebut, dan footer menampilkan versi yang digunakan.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote Box dan Proton Drive di RcloneView" class="img-large img-center" />

## Rencanakan Transfer

Buka Box di panel Explorer kiri dan Proton Drive di panel kanan. Gunakan **Get Size** pada folder Box tingkat atas untuk melihat berapa banyak data yang akan dipindahkan, lalu buat struktur folder tujuan di Proton Drive yang mencerminkan struktur yang ingin Anda pertahankan.

Box Notes dan dokumen asli Box lainnya bukan file biasa. Di **Filtering Settings** pada wizard sinkronisasi, filter bawaan **Box Docs** membantu Anda menanganinya dengan sengaja alih-alih baru menemukannya di tengah transfer. Ekspor apa pun yang Anda perlukan dari format tersebut di dalam Box sebelum migrasi.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box dan Proton Drive berdampingan untuk transfer cloud ke cloud di RcloneView" class="img-large img-center" />

## Jalankan Migrasi

Untuk sejumlah kecil folder, seret folder dari panel Box ke panel Proton Drive — menyeret antar remote yang berbeda akan menyalin data. Untuk migrasi penuh, buat tugas **Sync** dengan Box sebagai sumber dan Proton Drive sebagai tujuan. Proton Drive mengenkripsi file di sisi klien, jadi konkurensi sedang adalah titik awal yang wajar; Anda dapat menurunkan jumlah transfer file di Advanced Settings jika muncul error.

Selalu klik **Dry Run** terlebih dahulu. Fitur ini mencantumkan apa yang akan disalin dan apa yang akan dihapus, sehingga melindungi konten Proton Drive yang sudah ada dari pencerminan yang tidak disengaja. Kemudian jalankan tugas dan pantau progres, kecepatan, serta jumlah file di tab **Transferring**.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Memantau transfer Box ke Proton Drive di tab Transferring RcloneView" class="img-large img-center" />

## Verifikasi Sebelum Berhenti Berlangganan Box

Setelah tugas selesai, buka **Compare** dengan folder Box di satu sisi dan folder Proton Drive di sisi lain. File yang hanya ada di kiri menunjukkan apa pun yang belum berhasil dipindahkan; gunakan Copy right untuk mengisi kekurangannya. Job History mencatat setiap eksekusi beserta status, ukuran, dan jumlah file untuk arsip Anda.

RcloneView me-mount dan menyinkronkan 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux, sehingga pengaturan yang sama dapat dipakai untuk perpindahan Anda berikutnya.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History mengonfirmasi migrasi Box ke Proton Drive yang telah selesai" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Box melalui login browser dan Proton Drive dengan email, kata sandi, serta 2FA opsional.
3. Buat tugas Sync dari Box ke Proton Drive dan pratinjau dengan Dry Run.
4. Jalankan tugas, lalu konfirmasi hasilnya dengan Folder Compare sebelum menutup akun Box Anda.

Migrasi yang cermat dan terverifikasi memungkinkan Anda pindah ke penyimpanan terenkripsi dengan yakin bahwa tidak ada yang tertinggal.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Box — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Kelola Proton Drive — Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Migrasi Dropbox ke Proton Drive dengan RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-proton-drive-rcloneview)

<CloudSupportGrid />
