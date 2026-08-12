---
slug: fix-proton-drive-sync-errors-rcloneview
title: "Memperbaiki Kesalahan Sinkronisasi Proton Drive — Panduan Pemecahan Masalah RcloneView"
authors:
  - tayson
description: "Atasi masalah autentikasi, 2FA, dan kegagalan sinkronisasi Proton Drive di RcloneView dengan perbaikan praktis dan langkah pencatatan log."
keywords:
  - kesalahan sinkronisasi Proton Drive
  - perbaiki Proton Drive RcloneView
  - autentikasi Proton Drive gagal
  - login 2FA Proton Drive
  - pemecahan masalah Proton Drive
  - kesalahan sinkronisasi RcloneView
  - masalah koneksi Proton Drive
  - perbaiki pencadangan Proton Drive
  - debug log rclone
tags:
  - RcloneView
  - troubleshooting
  - tips
  - proton-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki Kesalahan Sinkronisasi Proton Drive — Panduan Pemecahan Masalah RcloneView

> Ketika sinkronisasi Proton Drive macet atau gagal melakukan autentikasi, penyebabnya biasanya ada pada pengaturan kredensial atau log tugas — bukan bug pada transfer itu sendiri.

Proton Drive terhubung ke RcloneView menggunakan email, kata sandi, dan kode dua faktor opsional, bukan melalui alur OAuth browser, sehingga sebagian besar kegagalan sinkronisasi berasal dari proses pertukaran kredensial tersebut atau dari tugas yang belum diuji ulang sejak pengaturan akun Proton Anda berubah. RcloneView menampilkan kegagalan ini di Job History dan tab Log, sehingga memudahkan mengisolasi penyebab sebenarnya begitu Anda tahu ke mana harus melihat.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Kegagalan Autentikasi dan 2FA

Jika remote Proton Drive gagal terhubung, periksa kembali email dan kata sandi yang dimasukkan di Remote Manager terlebih dahulu — tidak seperti penyedia OAuth, tidak ada login ulang lewat browser sebagai cadangan, sehingga kata sandi Proton yang berubah akan membuat remote gagal secara diam-diam sampai Anda mengeditnya. Jika autentikasi dua faktor diaktifkan pada akun Proton Anda, pastikan kode dimasukkan dengan cepat, karena kode 2FA cepat kedaluwarsa dan kode yang sudah kedaluwarsa menghasilkan kesalahan autentikasi umum yang sama seperti kata sandi yang salah.

<img src="/support/images/en/blog/new-remote.png" alt="Mengedit kredensial Proton Drive di Remote Manager RcloneView" class="img-large img-center" />

RcloneView me-mount dan menyinkronkan Proton Drive dari jendela yang sama di Windows, macOS, dan Linux — sehingga perbaikan kredensial berlaku di mana pun remote tersebut telah dikonfigurasi, tanpa perlu mengonfigurasi ulang per platform.

## Tugas Sinkronisasi Macet atau Gagal di Tengah Transfer

Tugas yang dimulai tetapi tidak pernah selesai sering menunjukkan aturan filter yang mengecualikan lebih banyak dari yang dimaksudkan, atau jumlah percobaan ulang yang disetel terlalu rendah untuk koneksi yang tidak stabil. Buka Advanced Settings tugas tersebut dan periksa jumlah percobaan ulang — nilai default 3 kali percobaan mampu menangani gangguan jaringan singkat, tetapi menurunkannya ke 1 akan menghilangkan jaring pengaman itu sepenuhnya. Jalankan Dry Run sebelum menjalankan ulang tugas untuk melihat persis file mana yang akan disentuh.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menjalankan Dry Run sebelum mencoba ulang tugas sinkronisasi Proton Drive" class="img-large img-center" />

## Membaca Job History dan Mengaktifkan Log Debug

Job History mencatat apakah suatu proses Completed, Errored, atau Canceled, beserta waktu tepat saat proses berhenti — stempel waktu tersebut adalah cara yang andal untuk mengaitkan kegagalan dengan file atau peristiwa jaringan tertentu.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Meninjau status riwayat tugas Proton Drive di RcloneView" class="img-large img-center" />

Untuk kegagalan yang terus terjadi atau tidak jelas penyebabnya, aktifkan rclone Logging di Settings, atur level log ke DEBUG, mulai ulang proses rclone bawaan, dan reproduksi sinkronisasi tersebut. File log yang dihasilkan menunjukkan dengan tepat panggilan API mana yang gagal, yang jauh lebih berguna daripada hanya menebak dari kotak dialog kesalahan.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html) jika belum melakukannya.
2. Masukkan kembali email dan kata sandi Proton Drive Anda di Remote Manager, lalu selesaikan 2FA dengan cepat jika diminta.
3. Jalankan Dry Run pada tugas sinkronisasi yang terpengaruh untuk memastikan file mana saja yang tercakup.
4. Aktifkan log DEBUG dan reproduksi masalahnya jika tidak terselesaikan dengan pembaruan kredensial.

Sebagian besar kesalahan sinkronisasi Proton Drive akan teratasi setelah kredensial dan pengaturan percobaan ulang diverifikasi — untuk sisanya, log akan membantu.

---

**Panduan Terkait:**

- [Mengelola File Proton Drive dan Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Enkripsi & Cadangkan Hard Drive Anda ke Proton Drive dengan RcloneView](https://rcloneview.com/support/blog/hard-drive-to-proton-drive-with-rcloneview)
- [Proton Drive Bertemu Cloud Anda — Cadangkan & Sinkronkan dengan Mudah bersama RcloneView](https://rcloneview.com/support/blog/proton-drive-multi-cloud-sync-with-rcloneview)

<CloudSupportGrid />
