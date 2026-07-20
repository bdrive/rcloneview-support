---
slug: migrate-jottacloud-to-backblaze-b2-rcloneview
title: "Migrasi Jottacloud ke Backblaze B2 — Transfer File dengan RcloneView"
authors:
  - tayson
description: "Migrasikan file dari Jottacloud ke Backblaze B2 dengan RcloneView. Pindahkan penyimpanan cloud asal Norwegia Anda ke object storage S3-compatible yang terjangkau secara langsung."
keywords:
  - Jottacloud to Backblaze B2
  - migrate Jottacloud
  - Jottacloud migration
  - Backblaze B2 migration
  - cloud-to-cloud transfer
  - Jottacloud RcloneView
  - Backblaze B2 backup
  - cloud storage migration
  - Norwegian cloud storage
  - RcloneView transfer
tags:
  - RcloneView
  - jottacloud
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Jottacloud ke Backblaze B2 — Transfer File dengan RcloneView

> Pindahkan file Jottacloud Anda ke object storage Backblaze B2 dengan RcloneView — migrasi cloud-to-cloud langsung tanpa perlu mengunduh ke perantara lokal.

Jottacloud adalah layanan penyimpanan cloud asal Norwegia dengan fokus kuat pada privasi, digunakan oleh individu maupun bisnis di seluruh Skandinavia dan Eropa. Seiring bertambahnya kebutuhan penyimpanan, sebagian pengguna bermigrasi ke Backblaze B2 karena API-nya yang S3-compatible, akses programatik, dan opsi penyimpanan bertingkat yang lebih cocok untuk arsip besar atau alur kerja developer. RcloneView menghubungkan kedua layanan ini dan menangani transfer secara langsung — tanpa memerlukan hard drive lokal sebagai perantara.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menyiapkan Jottacloud dan Backblaze B2

Menambahkan kedua remote ke RcloneView hanya membutuhkan waktu beberapa menit. Untuk Jottacloud, buka tab Remote, klik New Remote, lalu pilih Jottacloud dari daftar provider. Proses setup menggunakan kredensial akun Jottacloud Anda. Untuk Backblaze B2, pilih Backblaze B2 dan masukkan Application Key ID serta Application Key Anda — yang dibuat dari akun Backblaze Anda di bagian App Keys. Kedua remote kemudian akan muncul sebagai file tree yang dapat diakses di panel Explorer.

Jelajahi folder Jottacloud Anda untuk memetakan konten yang ingin dipindahkan. Jottacloud mengorganisasi file ke dalam device dan folder — pahami strukturnya sebelum membuat job migrasi agar Anda memilih source path yang tepat.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Jottacloud and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Menjalankan Migrasi

Buat job sinkronisasi dengan folder Jottacloud sebagai source dan bucket Backblaze B2 sebagai destination. Jika Anda belum memiliki bucket destination, Anda bisa membuatnya langsung di konsol Backblaze sebelum menjalankan migrasi. Langkah Advanced Settings pada Sync wizard memungkinkan Anda mengonfigurasi transfer file konkuren dan mengaktifkan verifikasi checksum — yang terakhir ini memastikan setiap file tiba dengan utuh, yang sangat berguna untuk arsip foto atau video berukuran besar.

Bagi seorang fotografer yang memigrasikan 500GB file RAW Jottacloud ke Backblaze B2, langkah Filtering membuat migrasi bertahap lebih mudah dikelola. Filter berdasarkan ekstensi file (`.raw`, `.cr3`, `.arw`) untuk memigrasikan file kamera terlebih dahulu, lalu tangani jenis aset lain di job-job berikutnya. Filter usia file maksimum memungkinkan Anda memprioritaskan pekerjaan terbaru sebelum mengarsipkan materi yang lebih lama.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Jottacloud files to Backblaze B2 with RcloneView" class="img-large img-center" />

Selalu gunakan Dry Run sebelum memulai migrasi produksi. Simulasi ini menampilkan daftar setiap file yang akan disalin atau dihapus, sehingga Anda dapat memverifikasi cakupannya sesuai dengan yang dimaksud sebelum benar-benar menjalankannya.

## Memvalidasi Migrasi yang Telah Selesai

Setelah transfer selesai, gunakan Folder Compare untuk memvalidasi kelengkapannya. Pilih folder source Jottacloud dan destination Backblaze B2, dan tampilan perbandingan akan menyoroti file mana saja yang hanya ada di satu sisi atau berbeda ukurannya. Ini membantu menangkap file yang terlewat atau transfer yang terpotong yang mungkin tidak terlihat pada migrasi berskala besar.

Panel Job History menampilkan waktu, jumlah file, total data yang dipindahkan, dan status akhir dari setiap proses migrasi. Jika suatu proses terganggu — karena masalah jaringan atau sistem yang sleep — Anda bisa menjalankan ulang job sinkronisasi tersebut, dan perilaku inkremental rclone memastikan hanya file yang hilang atau berubah yang akan ditransfer ulang.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Jottacloud to Backblaze B2 migration job history in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Jottacloud sebagai remote menggunakan kredensial akun Jottacloud Anda.
3. Tambahkan Backblaze B2 menggunakan Application Key ID dan Application Key Anda.
4. Jalankan Dry Run untuk pratinjau, lalu eksekusi sinkronisasi untuk memigrasikan file ke bucket B2 Anda.

Migrasi dari Jottacloud ke Backblaze B2 melalui RcloneView bersifat inkremental, dapat dilanjutkan kembali, dan sepenuhnya berbasis GUI — tanpa perlu scripting.

---

**Panduan Terkait:**

- [Kelola Sinkronisasi dan Pencadangan Cloud Jottacloud dengan RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Pencadangan Dropbox ke Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [Migrasi Wasabi ke Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/migrate-wasabi-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
