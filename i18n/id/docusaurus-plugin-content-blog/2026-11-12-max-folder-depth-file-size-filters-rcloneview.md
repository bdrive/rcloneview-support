---
slug: max-folder-depth-file-size-filters-rcloneview
title: "Filter Kedalaman Folder Maksimum dan Ukuran File Maksimum — Kendalikan Apa yang Disinkronkan di RcloneView"
authors:
  - kai
description: "Gunakan filter Max folder depth dan Max file size di RcloneView untuk melewati subfolder yang dalam dan file berukuran besar, sehingga job sinkronisasi cloud tetap cepat dan terarah."
keywords:
  - sinkronisasi kedalaman folder maksimum
  - filter ukuran file maksimum
  - rclone max depth GUI
  - lewati file besar saat sinkronisasi cloud
  - batasi tingkat folder sinkronisasi
  - filter sinkronisasi RcloneView
  - kecualikan file besar dari pencadangan
  - sinkronisasi cloud selektif
  - sinkronisasi folder dangkal
tags:
  - RcloneView
  - feature
  - filters
  - cloud-sync
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Filter Kedalaman Folder Maksimum dan Ukuran File Maksimum — Kendalikan Apa yang Disinkronkan di RcloneView

> Dua kolom angka di wizard sinkronisasi menentukan seberapa dalam sebuah job menjangkau dan seberapa besar sebuah file sebelum ditinggalkan.

Tidak setiap job sinkronisasi membutuhkan seluruh pohon folder. Tim desain mungkin hanya menginginkan folder pengiriman tingkat atas di Dropbox klien, bukan setiap folder kerja yang bersarang. Pengguna rumahan yang mencadangkan Documents ke OneDrive mungkin ingin melewatkan beberapa image disk berukuran 30 GB. RcloneView menangani kedua kasus ini di Langkah 3 wizard sinkronisasi dengan **Max folder depth** dan **Max file size**, dan keduanya tersedia di FREE License.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Max Folder Depth: Batasi Seberapa Dalam Job Menjangkau

Max folder depth menentukan berapa tingkat folder di bawah sumber yang diproses oleh job. Apa pun yang lebih dalam akan dilewati. Nilai yang kecil mengubah sumber yang besar dan bercabang menjadi sinkronisasi dangkal di tingkat-tingkat atas saja.

Ini membantu ketika file penting berada di dekat tingkat atas. Misalnya, folder `Clients/` milik sebuah agensi mungkin berisi satu folder per klien dengan hasil akhir, ditambah pohon `working/` dan `cache/` bersarang yang dalamnya mencapai sepuluh tingkat. Batas kedalaman mempertahankan hasil akhir dan melewati sisanya tanpa daftar aturan pengecualian yang panjang.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a remote in RcloneView before configuring a depth-limited sync job" class="img-large img-center" />

Batas kedalaman berlaku tanpa pemberitahuan. Batas kedalaman yang tertinggal dari uji coba akan membuat subfolder yang lebih dalam hilang dari sinkronisasi berikutnya tanpa pesan galat. Jika ada file yang hilang di tujuan, periksa kolom ini terlebih dahulu.

## Max File Size: Jauhkan File Berukuran Besar

Max file size diisi dalam MB, dan setiap file yang lebih besar dari nilai tersebut akan dikecualikan. Penggunaan umum:

- Kecualikan image ISO, disk VM, dan video mentah saat mencadangkan folder kerja.
- Jaga sinkronisasi ke akun gratis yang lebih kecil agar tetap dalam batasnya.
- Jaga job file kantor setiap malam tetap cepat dengan melewati file ekspor raksasa yang sesekali muncul.

Kolom ini hanya menetapkan batas atas. Untuk mengecualikan jenis file tertentu berapa pun ukurannya, tambahkan aturan kustom seperti `.iso` di langkah yang sama.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job with file size filters in RcloneView Job Manager" class="img-large img-center" />

## Kombinasikan dengan Filter Lain

Kedua kolom bekerja bersama opsi lain di Langkah 3: Max file age (satuan `y`, `d`, `h`, `m`, `s`), filter bawaan Music, Video, Image, Document, Google Docs, dan Box Docs, serta aturan kustom. Sebuah job dapat menyinkronkan hanya dokumen di bawah 50 MB, yang diubah dalam 30 hari terakhir, di dalam tiga tingkat folder teratas.

Filter mengubah apa yang dianggap sebagai bagian dari sumber oleh sinkronisasi satu arah, jadi jalankan **Dry Run** terlebih dahulu. Fitur ini menampilkan daftar file yang akan disalin dan dihapus, sehingga Anda dapat menemukan batas yang terlalu ketat sebelum ada yang berubah.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History in RcloneView showing file counts for filtered sync runs" class="img-large img-center" />

Setelah job dijalankan, Job History menampilkan jumlah file dan ukuran total setiap eksekusi. Penurunan mendadak biasanya berarti ada filter yang salah diatur.

## Memulai

RcloneView me-mount dan menyinkronkan 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux.

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka Sync, pilih sumber dan tujuan, lalu beri nama job.
3. Di Langkah 3, atur Max folder depth dan Max file size dalam MB.
4. Jalankan Dry Run, periksa daftar file, lalu simpan job di Job Manager.

Job yang lebih kecil dan terarah selesai lebih cepat, memakai lebih sedikit penyimpanan, dan lebih mudah diperiksa.

---

**Panduan Terkait:**

- [Filter Bawaan untuk Menyinkronkan Jenis File](https://rcloneview.com/support/blog/predefined-filters-sync-file-types-rcloneview)
- [Filter Berbasis Waktu Min Age dan Max Age](https://rcloneview.com/support/blog/min-age-max-age-time-based-filters-rcloneview)
- [Perbaiki Filter Sinkronisasi yang Tidak Mengecualikan File](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)

<CloudSupportGrid />
