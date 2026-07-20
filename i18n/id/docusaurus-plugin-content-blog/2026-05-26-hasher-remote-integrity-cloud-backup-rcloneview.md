---
slug: hasher-remote-integrity-cloud-backup-rcloneview
title: "Hasher Remote — Menambahkan Checksum Integritas File ke Penyimpanan Cloud Apa Pun di RcloneView"
authors:
  - robin
description: "Pelajari bagaimana Hasher remote milik RcloneView menambahkan verifikasi checksum ke backend cloud yang tidak memiliki dukungan hash native, melindungi setiap pencadangan dari kerusakan data yang tidak terlihat."
keywords:
  - RcloneView Hasher remote
  - verifikasi integritas file cloud
  - checksum pencadangan cloud rcloneview
  - panduan rclone hasher remote
  - verifikasi integritas transfer cloud
  - validasi checksum pencadangan cloud
  - deteksi kerusakan file sinkronisasi cloud
  - integritas data penyimpanan cloud rcloneview
  - verifikasi hash pencadangan cloud
  - rclone virtual remote hasher
tags:
  - RcloneView
  - feature
  - cloud-storage
  - backup
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Hasher Remote — Menambahkan Checksum Integritas File ke Penyimpanan Cloud Apa Pun di RcloneView

> Hasher virtual remote secara diam-diam menambahkan pelacakan checksum ke backend cloud yang tidak mendukungnya secara native, mengubah setiap sinkronisasi menjadi transfer yang terverifikasi dan tahan terhadap kerusakan data.

Tidak semua penyedia penyimpanan cloud menghitung dan menyimpan checksum file. Penyedia yang hanya mengandalkan ukuran file dan stempel waktu modifikasi untuk perbandingan dapat melewatkan kerusakan data yang tidak terlihat — jenis kerusakan yang terjadi saat file berhasil ditransfer sepenuhnya tetapi tiba dengan bit yang terbalik. Bagi arsiparis, sysadmin, dan bisnis dengan kebutuhan integritas data, ini adalah celah yang berarti. RcloneView mendukung Hasher remote milik rclone, sebuah virtual remote wrapper yang menambahkan pelacakan hash MD5, SHA-1, atau lainnya di atas backend cloud yang sudah ada tanpa mengubah cara Anda menyimpan atau mengambil file.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Apa Itu Hasher Remote dan Mengapa Ini Penting

Hasher remote adalah salah satu jenis virtual remote milik rclone — sebuah wrapper yang berada di depan remote yang sudah ada dan meningkatkan kemampuannya. Secara khusus, Hasher remote menyimpan checksum bersama file Anda, melakukan caching nilai hash sehingga operasi sinkronisasi berikutnya dapat membandingkan file berdasarkan konten, bukan hanya mengandalkan perbandingan ukuran saja. Hal ini paling penting ketika Anda melakukan sinkronisasi ke penyedia cloud yang tidak mengekspos API hash native, atau ketika Anda perlu mendeteksi kerusakan tingkat bit yang tidak akan mengubah ukuran file.

Contoh praktis: sebuah perusahaan produksi media yang mengarsipkan video 4K harian ke server penyimpanan berbasis WebDAV tidak memiliki dukungan hash native dari server tersebut. Tanpa checksum, rclone membandingkan file berdasarkan ukuran dan stempel waktu — tetapi file yang rusak secara halus dengan ukuran yang identik akan tampak tidak berubah. Membungkus WebDAV remote dengan Hasher remote menambahkan perbandingan hash ke setiap sinkronisasi, menangkap file yang rusak dan menandainya untuk ditinjau sebelum secara diam-diam menimpa salinan yang baik.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Hasher virtual remote in RcloneView's New Remote wizard" class="img-large img-center" />

## Menyiapkan Hasher Remote di RcloneView

Di RcloneView, virtual remote seperti Hasher dibuat melalui wizard New Remote yang sama seperti penyedia cloud lainnya. Dari tab Remote, klik New Remote, lalu gulir ke jenis virtual remote — Anda akan menemukan Hasher terdaftar bersama Crypt, Union, Combine, dan lainnya. Pilih remote dasar yang ingin Anda bungkus (misalnya, server WebDAV atau FTP Anda), pilih algoritma hash mana yang akan diaktifkan, lalu simpan. Hasher remote membungkus backend Anda secara transparan.

Setelah disimpan, Hasher remote muncul di Remote Manager seperti remote lainnya. Anda dapat membukanya di panel Explorer, menjelajahi file, dan menjalankan tugas sinkronisasi terhadapnya. Basis data hash dikelola secara otomatis — RcloneView dan rclone menangani pencatatannya, dan Anda berinteraksi dengan Hasher remote persis seperti Anda berinteraksi dengan penyimpanan dasarnya. Tidak diperlukan perubahan alur kerja di pihak Anda.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Running a checksum-verified sync transfer using the Hasher remote in RcloneView" class="img-large img-center" />

## Menjalankan Transfer yang Terverifikasi Integritasnya

Setelah Hasher remote dikonfigurasi, aktifkan opsi **Enable checksum** di Step 2 (Advanced Settings) pada wizard tugas sinkronisasi RcloneView. Ini memberi tahu rclone untuk membandingkan file menggunakan nilai hash yang di-cache, bukan hanya ukuran dan stempel waktu. Pada eksekusi pertama, hash dihitung dan disimpan. Eksekusi berikutnya membandingkan dengan hash yang tersimpan tersebut, melewati proses hashing ulang untuk file yang belum berubah — menjaga waktu sinkronisasi tetap cepat bahkan pada arsip besar.

Fitur Dry Run bekerja dengan mulus bersama Hasher remote. Sebelum menjalankan sinkronisasi arsip besar, jalankan dry run untuk melihat pratinjau file mana yang akan disalin, dimodifikasi, atau dilewati berdasarkan perbandingan hash. Ini sangat berharga sebelum menimpa rekaman arsip berbulan-bulan, dan tidak memerlukan biaya apa pun — tidak ada file yang dipindahkan sampai Anda mengonfirmasi.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing files with checksum verification enabled in RcloneView" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing integrity-verified backup runs completed in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Di tab Remote, klik New Remote dan pilih Hasher dari bagian virtual remote.
3. Bungkus cloud remote Anda yang sudah ada — WebDAV, FTP, atau backend apa pun tanpa checksum native — dengan Hasher remote.
4. Buat tugas sinkronisasi, aktifkan perbandingan checksum di Step 2 Advanced Settings, dan jalankan pencadangan pertama Anda yang terverifikasi integritasnya.

Melindungi arsip Anda dari kerusakan data yang tidak terlihat hanya membutuhkan waktu setup beberapa menit, dan Hasher remote membuat perlindungan tersebut tersedia untuk setiap backend yang didukung RcloneView.

---

**Panduan Terkait:**

- [Memeriksa dan Memverifikasi Integritas File Cloud dengan RcloneView](https://rcloneview.com/support/blog/check-verify-cloud-file-integrity-rcloneview)
- [Mengenkripsi Pencadangan Cloud dengan Crypt Remote di RcloneView](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [Virtual Remote: Combine, Union, dan Alias di RcloneView](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)

<CloudSupportGrid />
