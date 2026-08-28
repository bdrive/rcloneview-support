---
slug: fix-citrix-sharefile-sync-errors-rcloneview
title: "Memperbaiki Kesalahan Sinkronisasi Citrix ShareFile — Menyelesaikan Masalah Koneksi dengan RcloneView"
authors:
  - kai
description: "Selesaikan masalah koneksi dan sinkronisasi Citrix ShareFile di RcloneView, mulai dari kesalahan konfigurasi Root Folder ID hingga waktu habis autentikasi."
keywords:
  - kesalahan citrix sharefile
  - sinkronisasi sharefile gagal
  - memperbaiki koneksi sharefile
  - sharefile root folder id
  - kesalahan autentikasi sharefile
  - pemecahan masalah rcloneview sharefile
  - kesalahan sharefile rclone
  - kesalahan sinkronisasi file enterprise
  - citrix sharefile rclone gui
  - menyelesaikan masalah sinkronisasi sharefile
tags:
  - RcloneView
  - sharefile
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki Kesalahan Sinkronisasi Citrix ShareFile — Menyelesaikan Masalah Koneksi dengan RcloneView

> Persyaratan Root Folder ID Citrix ShareFile dan penanganan sesi enterprise menyebabkan sebagian besar kegagalan koneksi dan sinkronisasi — berikut cara mendiagnosis dan memperbaikinya di RcloneView.

Citrix ShareFile dikonfigurasi secara berbeda dari sebagian besar remote penyimpanan cloud, dan langkah pengaturan tambahan itulah yang menjadi sumber sebagian besar masalah koneksi. Daftar folder kosong, pekerjaan sinkronisasi yang gagal di tengah jalan, dan remote yang diam-diam berhenti melakukan autentikasi hampir selalu dapat ditelusuri ke salah satu dari beberapa penyebab. RcloneView menampilkan cukup detail di tab Log dan Job History untuk memastikan penyebab mana yang sedang terjadi.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mendiagnosis Kesalahan Konfigurasi Root Folder ID

Berbeda dengan remote khusus OAuth seperti Google Drive atau Dropbox, remote Citrix ShareFile di RcloneView memerlukan Root Folder ID yang dimasukkan saat pengaturan. Jika nilai ini salah, hilang, atau menunjuk ke folder yang akunnya sudah tidak memiliki akses lagi, remote sering kali berhasil terhubung tetapi mengembalikan daftar file kosong, yang terlihat seperti kegagalan sinkronisasi padahal koneksinya sendiri baik-baik saja. Buka Remote Manager, edit remote ShareFile, dan verifikasi ulang Root Folder ID terhadap nilai yang ditampilkan di konsol admin ShareFile Anda sebelum menganggap pekerjaan sinkronisasi itu sendiri yang bermasalah.

<img src="/support/images/en/blog/new-remote.png" alt="Mengedit pengaturan Root Folder ID remote Citrix ShareFile di RcloneView" class="img-large img-center" />

Memasukkan kembali ID yang benar dan memuat ulang panel Explorer (F5 / Cmd+R) biasanya sudah cukup untuk memastikan apakah masalahnya ada pada konfigurasi atau pada sesuatu yang lebih jauh di dalam pipeline sinkronisasi.

## Memperbaiki Kesalahan Autentikasi dan Waktu Habis Sesi

Tenant ShareFile enterprise sering kali menerapkan masa berlaku sesi yang lebih singkat dibandingkan layanan cloud konsumen, sehingga remote yang berfungsi normal kemarin dapat tiba-tiba melaporkan kesalahan autentikasi di tengah transfer. Jika ini terjadi, lakukan autentikasi ulang pada remote dari Remote Manager alih-alih memulai ulang seluruh pekerjaan — RcloneView akan memperbarui kredensial dan melanjutkan transfer. Jika waktu habis terus berulang pada folder besar yang sama, periksa apakah admin ShareFile Anda menerapkan kebijakan sesi idle yang ketat, karena ini adalah pengaturan di sisi tenant yang tidak dapat diatasi dengan konfigurasi klien apa pun.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Meninjau riwayat pekerjaan Citrix ShareFile untuk kesalahan autentikasi di RcloneView" class="img-large img-center" />

## Menyelesaikan Kegagalan Pekerjaan Sinkronisasi pada Folder Tim Bersama

Folder bersama dan folder yang dikelola admin di ShareFile terkadang memiliki batasan izin yang berbeda dari ruang pribadi pengguna, sehingga menyebabkan file individual gagal dalam pekerjaan sinkronisasi yang sebenarnya berjalan normal, sementara sisanya selesai dengan baik. Menjalankan Dry Run terlebih dahulu menunjukkan dengan tepat file mana yang akan diproses oleh pekerjaan tersebut, sehingga memudahkan menemukan celah izin folder bersama sebelum mengganggu transfer yang sedang berlangsung. Berbeda dengan alat yang hanya mendukung mount, RcloneView juga menyinkronkan dan membandingkan folder — pada lisensi FREE — sehingga Anda dapat memadukan Dry Run dengan Folder Compare untuk mengisolasi dengan tepat jalur mana yang menyebabkan ketidaksesuaian.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Membandingkan folder Citrix ShareFile untuk mengisolasi kesalahan sinkronisasi di RcloneView" class="img-large img-center" />

Jika percobaan ulang terus gagal pada subset file yang sama, mempersempit cakupan pekerjaan dengan filter khusus dan menjalankannya ulang secara terpisah dari sinkronisasi massal akan mengisolasi folder bermasalah tanpa menghalangi transfer lainnya.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Pastikan Root Folder ID pada remote ShareFile Anda cocok dengan konsol admin ShareFile Anda.
3. Lakukan autentikasi ulang pada remote jika Anda melihat kesalahan autentikasi di tengah transfer.
4. Jalankan Dry Run pada pekerjaan sinkronisasi yang terpengaruh untuk mengidentifikasi file atau folder spesifik mana yang gagal.

Sebagian besar kesalahan sinkronisasi Citrix ShareFile berakar pada konfigurasi atau izin, bukan pada mesin transfer itu sendiri, dan pemeriksaan cepat melalui langkah-langkah ini menyelesaikan sebagian besar kasus.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan Citrix ShareFile — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-citrix-sharefile-cloud-sync-backup-rcloneview)
- [Migrasi Citrix ShareFile ke OneDrive dan SharePoint — Transfer File dengan RcloneView](https://rcloneview.com/support/blog/migrate-citrix-sharefile-onedrive-sharepoint-rcloneview)
- [Menyelesaikan Konflik Sinkronisasi Cloud — Cara Menyelesaikannya dengan RcloneView](https://rcloneview.com/support/blog/resolve-cloud-sync-conflicts-rcloneview)

<CloudSupportGrid />
