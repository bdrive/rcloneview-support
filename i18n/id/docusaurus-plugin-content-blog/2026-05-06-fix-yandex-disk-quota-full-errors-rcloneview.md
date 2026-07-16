---
slug: fix-yandex-disk-quota-full-errors-rcloneview
title: "Atasi Error Kuota Penuh Yandex Disk — Selesaikan Masalah Batas Penyimpanan dengan RcloneView"
authors:
  - tayson
description: "Atasi error kuota Yandex Disk yang terlampaui saat sinkronisasi dengan RcloneView. Temukan dan hapus file besar, migrasikan data untuk membebaskan ruang, dan cegah masalah kuota menghambat pencadangan."
keywords:
  - fix Yandex Disk quota exceeded
  - Yandex Disk storage full error RcloneView
  - Yandex Disk quota troubleshooting
  - resolve Yandex disk space limit
  - Yandex Disk sync error fix
  - RcloneView Yandex storage full
  - free up Yandex Disk space
  - Yandex Disk migration RcloneView
  - Yandex Disk backup error fix
  - storage quota exceeded cloud sync
tags:
  - yandex-disk
  - troubleshooting
  - tips
  - cleanup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Atasi Error Kuota Penuh Yandex Disk — Selesaikan Masalah Batas Penyimpanan dengan RcloneView

> Ketika error kuota Yandex Disk menghambat tugas sinkronisasi di RcloneView, solusinya adalah menemukan apa yang menghabiskan ruang, membersihkannya, atau memigrasikan data ke penyedia lain — semuanya dapat dikelola dari GUI.

Error kuota Yandex Disk yang terlampaui menghentikan tugas sinkronisasi dan pencadangan secara total. RcloneView menampilkan ini dengan jelas di log: `NOTICE: Yandex Disk quota exceeded` atau error umum 507 Insufficient Storage. Penyebabnya selalu sama — akun Yandex Disk Anda telah mencapai batas penyimpanannya. Berikut cara mendiagnosis dan menyelesaikannya tanpa harus keluar dari RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Identifikasi Apa yang Menghabiskan Ruang Yandex Disk

Langkah pertama adalah memahami di mana penyimpanan Anda digunakan. Buka remote Yandex Disk Anda di penjelajah file RcloneView, navigasikan ke root, lalu klik kanan pada folder tingkat atas untuk **Get Size**. Ini menghitung ukuran total setiap folder, membantu Anda mengidentifikasi penyumbang terbesar — sering kali berupa pencadangan video lama, koleksi foto duplikat, atau file arsip besar yang menumpuk seiring waktu.

Untuk analisis yang lebih sistematis, gunakan terminal bawaan RcloneView dan jalankan `rclone ncdu "your-yandex-remote:"` — ini akan membuka penampil penggunaan disk interaktif yang memungkinkan Anda menelusuri folder bersarang untuk menemukan item yang berukuran terlalu besar.

<img src="/support/images/en/blog/new-remote.png" alt="Browsing Yandex Disk storage in RcloneView to identify large folders" class="img-large img-center" />

## Hapus atau Pindahkan File Besar untuk Membebaskan Ruang

Setelah Anda mengidentifikasi folder yang berukuran besar, Anda memiliki dua pilihan: menghapus file yang tidak lagi diperlukan, atau memigrasikannya ke penyedia cloud lain untuk membebaskan ruang di Yandex Disk.

Untuk penghapusan: pilih file atau folder di penjelajah file RcloneView dan gunakan opsi Delete melalui klik kanan. RcloneView akan meminta konfirmasi sebelum menghapus, mencegah kehilangan data yang tidak disengaja.

Untuk migrasi: konfigurasikan tugas sinkronisasi untuk menyalin folder Yandex Disk yang besar ke penyedia sekunder (Google Drive, Backblaze B2, atau bucket yang kompatibel dengan S3). Setelah transfer selesai dan Anda telah memverifikasi tujuannya, hapus file asli di Yandex untuk mendapatkan kembali ruang penyimpanan.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating large Yandex Disk files to another provider in RcloneView" class="img-large img-center" />

## Sesuaikan Tugas Sinkronisasi untuk Mencegah Masalah Kuota di Masa Depan

Setelah ruang dibebaskan, cegah masalah kuota di masa depan dengan menambahkan filter **Max file size** pada tugas sinkronisasi Yandex Disk Anda. Di wizard sinkronisasi RcloneView (Langkah 3: Filtering), atur ukuran file maksimum dalam MB untuk mengecualikan file besar agar tidak disinkronkan ke Yandex Disk. Sebagai gantinya, arahkan file besar langsung ke penyedia object storage yang hemat biaya seperti Backblaze B2 atau Wasabi.

Filter **Video** yang telah ditentukan sebelumnya dapat mengecualikan file video secara khusus — sering kali menjadi penyumbang penyimpanan terbesar — sehingga Yandex Disk tetap dicadangkan untuk dokumen dan gambar.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring file size filters in Yandex Disk sync jobs in RcloneView" class="img-large img-center" />

## Pantau Penggunaan Penyimpanan dari Waktu ke Waktu

Setelah menyelesaikan masalah kuota, tambahkan pemantauan penyimpanan ke alur kerja Anda. Terminal RcloneView mendukung perintah `rclone about "your-yandex-remote:"`, yang melaporkan penggunaan saat ini, total kuota, dan ruang bebas. Jadwalkan pemeriksaan mingguan agar Anda tetap waspada terhadap batas penyimpanan sebelum memengaruhi tugas sinkronisasi Anda.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing resolved Yandex Disk sync after quota fix in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Gunakan fitur Get Size pada penjelajah file RcloneView untuk mengidentifikasi folder Yandex Disk yang besar.
3. Hapus file yang tidak diperlukan atau migrasikan konten besar ke penyedia sekunder.
4. Tambahkan filter Max file size pada tugas sinkronisasi Yandex Disk berikutnya untuk mencegah masalah berulang.

Mengelola kuota penyimpanan Yandex Disk sangatlah mudah di RcloneView — kombinasi antara penjelajahan visual, migrasi cloud-to-cloud, dan filter sinkronisasi memberikan Anda kendali penuh atas batas penyimpanan Anda.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Yandex Disk — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [Atasi Kuota Penyimpanan Google Drive yang Terlampaui dengan RcloneView](https://rcloneview.com/support/blog/fix-google-drive-storage-quota-exceeded-rcloneview)
- [Rclone About — Analisis Penggunaan Penyimpanan di RcloneView](https://rcloneview.com/support/blog/rclone-about-storage-usage-analysis-rcloneview)

<CloudSupportGrid />
