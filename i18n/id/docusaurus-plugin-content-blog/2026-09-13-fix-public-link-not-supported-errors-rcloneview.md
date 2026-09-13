---
slug: fix-public-link-not-supported-errors-rcloneview
title: "Memperbaiki Error Tautan Publik Tidak Didukung — Bagikan File dengan Benar Menggunakan RcloneView"
authors:
  - tayson
description: "Perbaiki error Get Public Link di RcloneView, pelajari remote mana yang mendukung tautan yang dapat dibagikan, dan gunakan solusi alternatif yang aman untuk sisanya."
keywords:
  - RcloneView
  - error tautan publik
  - tautan publik tidak didukung
  - bagikan file cloud
  - tautan publik rclone
  - berbagi penyimpanan cloud
  - perbaikan tautan berbagi
  - pemecahan masalah berbagi file cloud
  - remote manager
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-storage
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki Error Tautan Publik Tidak Didukung — Bagikan File dengan Benar Menggunakan RcloneView

> Anda klik kanan Get Public Link dan tidak terjadi apa-apa — berikut alasannya, dan apa yang harus dilakukan sebagai gantinya.

Panel Explorer RcloneView menyediakan perintah **Get Public Link** di menu klik kanan, tetapi ini hanya berfungsi pada remote yang backend-nya menyediakan API berbagi native. Jika dicoba pada koneksi protokol murni atau penyedia yang tidak didukung, permintaan akan gagal atau mengembalikan error, bukan URL. Remote Manager dan Explorer dua panel RcloneView memudahkan Anda melihat remote mana yang sedang digunakan, dan memindahkan file ke lokasi yang mendukung tautan sebagai gantinya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Get Public Link Gagal pada Beberapa Remote

Pembuatan tautan publik bergantung pada apa yang didukung oleh backend penyimpanan yang mendasarinya. Penyedia dengan API berbagi native — termasuk Google Drive, Dropbox, Microsoft OneDrive, Box, dan pCloud — mengembalikan URL yang dapat dibagikan karena rclone memanggil endpoint tautan milik penyedia tersebut. Koneksi berbasis protokol seperti SFTP, FTP, WebDAV, dan SMB/CIFS sama sekali tidak memiliki konsep ini; keduanya adalah protokol transfer file murni, bukan platform berbagi, sehingga tidak ada yang bisa dipanggil oleh perintah tersebut. Endpoint yang kompatibel dengan S3 (Amazon S3, Wasabi, Backblaze B2, Cloudflare R2) menangani akses publik melalui kebijakan bucket atau URL pra-tanda tangan yang diatur di konsol penyedia itu sendiri.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView new remote screen showing different provider types" class="img-large img-center" />

Sebelum menganggapnya sebagai bug, periksa kategori mana yang sesuai dengan remote Anda. Buka Remote Manager dari tab Remote dan konfirmasikan jenis remote — sekilas pandang sering kali langsung menjelaskan penyebab kegagalannya.

## Memastikan Remote dan Pengaturan Izin

Jika remote tersebut adalah penyedia berbasis OAuth yang seharusnya mendukung tautan, langkah berikutnya adalah memverifikasi bahwa akun memiliki izin untuk membagikan file atau folder tersebut. Varian bisnis dan enterprise dari remote ini terkadang membatasi berbagi eksternal di tingkat organisasi, yang muncul di RcloneView sebagai permintaan gagal yang sama. Autentikasi ulang remote melalui Remote Manager jika token terlihat kedaluwarsa, dan coba lagi pada file yang Anda tahu dapat dibagikan dari antarmuka web penyedia itu sendiri.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView folder compare view for verifying file locations before sharing" class="img-large img-center" />

Berbeda dengan alat yang hanya mendukung mount, RcloneView juga mendukung sinkronisasi dan perbandingan folder — pada lisensi FREE — sehingga Anda bisa dengan cepat menyalin file dari remote yang tidak mendukung tautan ke remote yang mendukung berbagi, alih-alih terus memecahkan masalah.

## Solusi Alternatif yang Aman Saat Remote Tidak Mendukung Tautan

Untuk SFTP, FTP, WebDAV, SMB, dan sebagian besar bucket yang kompatibel dengan S3, solusi praktisnya adalah menyalin file ke remote yang mendukung tautan native, atau menyerahkan distribusi melalui konsol penyedia itu sendiri (kebijakan bucket, URL pra-tanda tangan, atau berbagi sisi NAS). Gunakan seret dan lepas RcloneView di antara dua panel Explorer yang terbuka untuk memindahkan salinan, lalu jalankan Get Public Link pada remote tujuan.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView job scheduling for repeatable copy-and-share workflows" class="img-large img-center" />

Jika ini merupakan kebutuhan yang berulang, simpan langkah penyalinan ini sebagai Job di Job Manager sehingga file yang sama otomatis masuk ke remote yang mendukung tautan setelah setiap sinkronisasi.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka Remote Manager untuk memastikan jenis backend apa yang sebenarnya digunakan oleh remote yang bermasalah.
3. Autentikasi ulang remote OAuth yang token-nya mungkin sudah kedaluwarsa, lalu coba lagi tautan pada file yang diketahui dapat dibagikan.
4. Untuk remote berbasis protokol atau kompatibel S3, salin file ke remote yang mendukung tautan menggunakan seret dan lepas, lalu buat tautan di sana.

Mengetahui remote mana yang dapat membagikan tautan sebelum Anda membutuhkannya akan menghemat satu tiket dukungan di kemudian hari.

---

**Panduan Terkait:**

- [Dapatkan Tautan Publik yang Dapat Dibagikan untuk File Cloud dengan RcloneView](https://rcloneview.com/support/blog/link-public-shared-links-cloud-rcloneview)
- [Kelola Penyimpanan Google Drive — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Perbaiki Error Izin Ditolak pada Transfer Cloud dengan RcloneView](https://rcloneview.com/support/blog/fix-cloud-transfer-permission-denied-errors-rcloneview)

<CloudSupportGrid />
