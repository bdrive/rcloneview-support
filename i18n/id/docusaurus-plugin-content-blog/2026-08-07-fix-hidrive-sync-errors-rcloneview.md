---
slug: fix-hidrive-sync-errors-rcloneview
title: "Memperbaiki Error Sinkronisasi HiDrive — Cadangan Cloud yang Andal dengan RcloneView"
authors:
  - jay
description: "Diagnosis dan perbaiki error sinkronisasi HiDrive yang umum terjadi — token kedaluwarsa, timeout, dan transfer gagal — menggunakan alat retry dan logging bawaan RcloneView."
keywords:
  - error sinkronisasi HiDrive
  - perbaiki error koneksi HiDrive
  - cadangan HiDrive gagal
  - pemecahan masalah sinkronisasi cloud HiDrive
  - HiDrive RcloneView
  - token OAuth HiDrive kedaluwarsa
  - unggah HiDrive gagal
  - masalah sinkronisasi HiDrive Strato
  - pemecahan masalah penyimpanan cloud
  - HiDrive rclone
tags:
  - RcloneView
  - troubleshooting
  - tips
  - hidrive
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki Error Sinkronisasi HiDrive — Cadangan Cloud yang Andal dengan RcloneView

> Unggahan yang macet, sesi kedaluwarsa, dan kegagalan sinkronisasi yang tidak terdeteksi di HiDrive biasanya berasal dari beberapa penyebab yang bisa diperbaiki — berikut cara mendiagnosis dan menyelesaikannya di RcloneView.

Pengguna HiDrive yang mencadangkan foto, dokumen, atau file bisnis sering mengalami tugas sinkronisasi yang berhenti di tengah transfer atau gagal melakukan autentikasi setelah berminggu-minggu tidak aktif. Masalah ini jarang disebabkan oleh penyimpanan itu sendiri — hampir selalu berupa ketidakcocokan token, waktu, atau pengaturan filter, yang dapat dideteksi dan diperbaiki langsung oleh RcloneView dari antarmukanya. RcloneView juga menyinkronkan dan membandingkan folder di HiDrive — dengan lisensi FREE, tanpa perlu upgrade.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mendiagnosis Penyebab Utama

HiDrive terhubung ke RcloneView melalui login browser OAuth, dan sebagian besar error sinkronisasi masuk ke dalam tiga kategori: otorisasi kedaluwarsa, gangguan jaringan sementara, atau kesalahan konfigurasi filter. Mulailah dengan membuka panel **Job History** di Job Manager — setiap proses yang gagal mencatat statusnya sebagai Completed, Errored, atau Canceled, beserta waktu yang tepat dan file yang ditransfer sebelum kegagalan terjadi.

Jika error muncul tepat di awal tugas, biasanya itu adalah masalah otorisasi. Jika file sempat sebagian tertransfer sebelum berhenti, kemungkinan besar itu adalah timeout jaringan atau gangguan pada file besar. Memeriksa pola mana yang Anda lihat akan sangat mempersempit perbaikan sebelum Anda menyentuh pengaturan apa pun.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Panel Job History RcloneView menampilkan status eksekusi dan error sinkronisasi HiDrive" class="img-large img-center" />

## Melakukan Autentikasi Ulang dan Menyesuaikan Perilaku Retry

Ketika sesi HiDrive kedaluwarsa, menambahkan kembali remote melalui Remote Manager dan menyelesaikan login browser lagi akan memulihkan koneksi tanpa menghapus konfigurasi tugas yang sudah ada. Setelah terhubung kembali, kunjungi ulang **Step 2: Advanced Settings** pada wizard sinkronisasi dan pastikan **Retry entire sync if fails** diatur di atas 1 — nilai default 3 akan otomatis mencoba ulang tugas yang gagal alih-alih membiarkannya macet dalam status error.

Untuk folder dengan banyak file kecil, turunkan juga **Number of equality checkers** menjadi 4 atau lebih rendah, karena backend yang lebih lambat seperti HiDrive dapat mengalami timeout saat RcloneView memeriksa terlalu banyak file secara bersamaan. Mengaktifkan perbandingan **checksum** alih-alih hanya mengandalkan waktu modifikasi juga mencegah error "file berubah" positif palsu yang memicu pengunggahan ulang yang tidak perlu.

<img src="/support/images/en/blog/new-remote.png" alt="Menghubungkan kembali remote HiDrive di RcloneView setelah error otorisasi" class="img-large img-center" />

## Menjalankan Dry Run Sebelum Menerapkan Perubahan

Sebelum menjalankan ulang sinkronisasi HiDrive berskala besar setelah perbaikan, gunakan **Dry Run** untuk mensimulasikan tugas tersebut. Fitur ini menampilkan daftar pasti file mana yang akan disalin atau dihapus tanpa membuat perubahan apa pun, yang merupakan cara tercepat untuk memastikan pengaturan retry dan filter Anda benar-benar menyelesaikan error tersebut, bukan sekadar menutupinya. Langkah ini sangat berguna setelah menyesuaikan usia file maksimum atau aturan filter kustom, karena filter yang salah konfigurasi dapat diam-diam mengecualikan file yang Anda harapkan untuk disinkronkan.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Mengonfigurasi pengaturan tugas sinkronisasi dan filter untuk cadangan HiDrive di RcloneView" class="img-large img-center" />

Jika error masih berlanjut setelah langkah-langkah ini, aktifkan rclone Logging di Settings > Embedded Rclone, atur level log ke DEBUG, mulai ulang proses rclone bawaan, dan reproduksi kegagalan tersebut — file log yang dihasilkan akan menunjukkan dengan tepat respons API yang dikembalikan HiDrive.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka Job History dan identifikasi apakah error HiDrive terjadi di awal atau di tengah transfer.
3. Lakukan autentikasi ulang pada remote HiDrive dan sesuaikan pengaturan retry, checksum, dan equality checker.
4. Jalankan Dry Run untuk memastikan perbaikan sebelum menjalankan sinkronisasi penuh.

Rutinitas cadangan HiDrive yang andal bermuara pada mendeteksi kesalahan konfigurasi kecil ini sejak dini, dan alat job history serta dry run milik RcloneView membuat diagnosis tersebut menjadi mudah.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan HiDrive — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Memperbaiki Token OAuth Cloud Kedaluwarsa — Cara Mengatasinya dengan RcloneView](https://rcloneview.com/support/blog/fix-oauth-token-expired-cloud-sync-rcloneview)
- [Mengatasi Error Rclone — Cara Mengatasinya dengan RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
