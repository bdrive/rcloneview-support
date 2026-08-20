---
slug: fix-zoho-workdrive-sync-errors-rcloneview
title: "Memperbaiki Error Sinkronisasi Zoho WorkDrive — Panduan Pemecahan Masalah untuk RcloneView"
authors:
  - tayson
description: "Atasi ketidakcocokan region, koneksi terputus, dan kegagalan sinkronisasi Zoho WorkDrive di RcloneView dengan solusi praktis langkah demi langkah."
keywords:
  - error sinkronisasi Zoho WorkDrive
  - perbaiki Zoho WorkDrive RcloneView
  - pengaturan region Zoho WorkDrive
  - koneksi Zoho WorkDrive gagal
  - pemecahan masalah Zoho WorkDrive
  - error sinkronisasi RcloneView
  - perbaikan pencadangan Zoho WorkDrive
  - debug logging rclone
  - autentikasi Zoho WorkDrive
tags:
  - RcloneView
  - troubleshooting
  - tips
  - zoho
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki Error Sinkronisasi Zoho WorkDrive — Panduan Pemecahan Masalah untuk RcloneView

> Sebagian besar kegagalan sinkronisasi Zoho WorkDrive di RcloneView berasal dari pengaturan region yang tidak cocok atau token OAuth yang kedaluwarsa — bukan dari tugas transfer yang rusak.

Zoho WorkDrive adalah layanan berbasis region, sehingga remote yang Anda konfigurasi harus mengarah tepat ke pusat data tempat akun Anda sebenarnya berada, dan ketidakcocokan di sana menghasilkan error koneksi yang membingungkan dan tampak tidak berhubungan dengan penyebab sebenarnya. RcloneView menampilkan detail yang Anda butuhkan untuk mengisolasi masalah di Job History dan tab Log, mengubah pesan "sinkronisasi gagal" yang samar menjadi perbaikan yang bisa langsung ditindaklanjuti.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Ketidakcocokan Region dan Kegagalan Koneksi

Zoho WorkDrive mengharuskan pemilihan region saat penyiapan remote, dan memilih region yang salah adalah penyebab paling umum dari remote yang terhubung sebentar lalu gagal di setiap operasi berikutnya. Buka Remote Manager, edit remote Zoho WorkDrive, dan pastikan region cocok dengan pusat data yang ditampilkan di pengaturan akun Zoho Anda — remote yang dibuat dengan region yang salah sering kali berhasil autentikasi sekali, tetapi gagal saat menampilkan daftar folder atau saat transfer.

<img src="/support/images/en/blog/new-remote.png" alt="Editing Zoho WorkDrive region setting in RcloneView Remote Manager" class="img-large img-center" />

RcloneView me-mount dan menyinkronkan Zoho WorkDrive dari jendela yang sama di Windows, macOS, dan Linux, sehingga setelah region diperbaiki, perbaikan tersebut berlaku untuk setiap tugas dan mount yang dibangun berdasarkan remote itu tanpa perlu konfigurasi ulang khusus platform.

## Kedaluwarsanya Token OAuth di Tengah Sinkronisasi

Karena Zoho WorkDrive terhubung melalui login OAuth berbasis browser, sinkronisasi yang berhasil kemarin tetapi gagal hari ini biasanya berarti token yang tersimpan telah kedaluwarsa atau dicabut dari sisi akun Zoho. Autentikasi ulang remote di Remote Manager untuk memicu login browser baru, lalu jalankan kembali tugas tersebut alih-alih langsung menganggap konfigurasi sinkronisasi itu sendiri yang bermasalah.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Re-running a Zoho WorkDrive sync job after re-authentication in RcloneView" class="img-large img-center" />

## Membaca Job History dan Mengaktifkan Log Debug

Job History mencatat apakah setiap proses Completed, Errored, atau Canceled beserta waktu berhenti yang tepat, yang merupakan cara andal untuk mengaitkan kegagalan dengan file tertentu atau respons API, alih-alih menebak dari dialog ringkasan.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Zoho WorkDrive job history status in RcloneView" class="img-large img-center" />

Untuk kegagalan yang tetap terjadi setelah memperbaiki region dan token, aktifkan rclone Logging di Settings, atur level log ke DEBUG, mulai ulang proses rclone bawaan, dan ulangi sinkronisasi. Log yang dihasilkan mengisolasi panggilan API pasti yang gagal, yang jauh lebih akurat daripada hanya menafsirkan dialog error.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html) jika belum melakukannya.
2. Verifikasi bahwa pengaturan region pada remote Zoho WorkDrive Anda cocok dengan pusat data akun Anda yang sebenarnya.
3. Autentikasi ulang remote jika kegagalan tiba-tiba dimulai setelah sebelumnya berjalan normal.
4. Aktifkan logging DEBUG dan ulangi masalahnya jika sinkronisasi masih gagal setelah region dan token dikonfirmasi benar.

Setelah region dan autentikasi selaras, sinkronisasi Zoho WorkDrive di RcloneView berperilaku sama seperti remote lainnya — dapat diprediksi, tercatat dalam log, dan mudah dicoba ulang.

---

**Panduan Terkait:**

- [Mengelola File Zoho WorkDrive dan Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Menyinkronkan Zoho WorkDrive ke OneDrive dengan RcloneView](https://rcloneview.com/support/blog/sync-zoho-workdrive-to-onedrive-rcloneview)
- [Mencadangkan Zoho WorkDrive ke Google Drive dan S3 dengan RcloneView](https://rcloneview.com/support/blog/backup-zoho-workdrive-google-drive-s3-rcloneview)

<CloudSupportGrid />
