---
slug: rcloneview-windows-11-cloud-sync
title: "RcloneView di Windows 11 — Sinkronisasi dan Pencadangan Penyimpanan Cloud"
authors:
  - morgan
description: "Instal dan jalankan RcloneView di Windows 11 untuk mount, sinkronisasi, dan mencadangkan 90+ penyedia penyimpanan cloud dari satu aplikasi desktop."
keywords:
  - rcloneview windows 11
  - sinkronisasi penyimpanan cloud windows 11
  - mount drive cloud windows 11
  - pencadangan cloud windows 11
  - rclone gui windows 11
  - windows 11 file explorer cloud
  - desktop multi-cloud windows
  - software sinkronisasi cloud windows
tags:
  - RcloneView
  - windows
  - cloud-sync
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView di Windows 11 — Sinkronisasi dan Pencadangan Penyimpanan Cloud

> Windows 11 memperketat file explorer dan model izinnya dibandingkan versi sebelumnya — berikut cara menjalankan RcloneView dengan lancar di sistem ini untuk mounting, sinkronisasi, dan pencadangan penyimpanan cloud.

Shell Windows 11 yang dirancang ulang dan postur keamanan default yang lebih ketat mengubah beberapa hal bagi aplikasi desktop yang berhubungan dengan penyimpanan dan huruf drive. **RcloneView** berjalan secara native di Windows 11 sebagai aplikasi desktop standar, memberikan satu antarmuka untuk menjelajah, sinkronisasi, dan mount lebih dari 90 penyedia penyimpanan cloud, alih-alih harus berpindah-pindah aplikasi vendor terpisah untuk Google Drive, OneDrive, Dropbox, dan penyimpanan yang kompatibel dengan S3.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menginstal RcloneView di Windows 11

RcloneView didistribusikan sebagai installer Inno Setup (`setup_rclone_view-{version}.exe`) yang dibuat untuk sistem x86-64 — tidak ada build Windows ARM64, sehingga panduan ini berlaku untuk PC dan laptop Windows 11 standar. Unduh installer dari [rcloneview.com](https://rcloneview.com/src/download.html), jalankan, dan selesaikan wizard instalasi.

Windows 11 memerlukan VC++ 2015-2022 Redistributable, yang akan diminta oleh installer jika belum ada. RcloneView dilengkapi dengan binary rclone bawaan, sehingga tidak diperlukan langkah instalasi rclone terpisah — aplikasi berkomunikasi secara default dengan instance rclone bawaannya melalui `http://127.0.0.1:5582`.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote cloud baru di RcloneView" class="img-large img-center" />

## Melakukan Mount Penyimpanan Cloud sebagai Huruf Drive

Salah satu fitur paling berguna dari RcloneView di Windows 11 adalah melakukan mount remote cloud sebagai drive lokal. Dari panel Remote Explorer, pilih remote yang ingin di-mount, klik ikon Mount di toolbar panel, pilih huruf drive otomatis atau manual, lalu klik Save and mount. Remote tersebut kemudian akan muncul di File Explorer seperti disk fisik.

Windows 11 menggunakan tipe mount `cmount` secara default. Anda juga dapat mengonfigurasi mount agar muncul sebagai network drive alih-alih disk lokal, dan menyesuaikan mode cache VFS (off, minimal, writes, atau full) tergantung apakah Anda memprioritaskan responsivitas atau akses offline ke file yang baru digunakan.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Melakukan mount remote dari Mount Manager di RcloneView" class="img-large img-center" />

## Sinkronisasi dan Pencadangan File

Selain mounting, wizard Sync RcloneView memungkinkan Anda mengonfigurasi tugas sinkronisasi satu arah antara dua remote yang terhubung, atau antara folder lokal Windows 11 dan penyedia cloud. Hubungkan S3, Azure, atau Backblaze B2 dengan akses baca/tulis penuh pada lisensi FREE, lalu atur tugas pencadangan terjadwal agar folder Documents atau proyek Anda otomatis dicerminkan ke penyimpanan cloud.

Wizard sinkronisasi empat langkah ini mencakup pemilihan sumber dan tujuan, konkurensi transfer, aturan pemfilteran (ukuran file, usia file, kedalaman folder), dan — pada lisensi PLUS — penjadwalan bergaya crontab. Opsi Dry Run menampilkan pratinjau persis apa yang akan disalin atau dihapus sebelum perubahan sebenarnya terjadi.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Mengonfigurasi tugas transfer cloud-ke-cloud di RcloneView" class="img-large img-center" />

## Memantau Tugas dari System Tray

RcloneView akan meminimalkan diri ke system tray Windows 11, tempat Anda dapat melihat drive yang di-mount, mengaktifkan atau menonaktifkan mount, dan memulai mount baru tanpa membuka kembali jendela penuh. Transfer yang sedang berlangsung muncul di tab Transferring pada bagian bawah jendela utama, menampilkan persentase kemajuan, kecepatan, dan jumlah file secara langsung.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html) dan jalankan installer Windows.
2. Tambahkan remote cloud pertama Anda melalui tab Remote > New Remote.
3. Mount sebagai huruf drive atau konfigurasikan tugas sinkronisasi ke folder lokal Windows 11.
4. Periksa panel Job History untuk memastikan transfer pertama Anda selesai dengan sukses.

Dengan RcloneView terpasang, Windows 11 mendapatkan satu cara yang konsisten untuk menjangkau puluhan penyedia cloud tanpa harus menginstal klien sinkronisasi terpisah untuk masing-masing.

---

**Panduan Terkait:**

- [RcloneView di Windows 10 — Sinkronisasi Penyimpanan Cloud](https://rcloneview.com/support/blog/rcloneview-windows-10-cloud-sync)
- [RcloneView di Windows Server — Pencadangan Cloud](https://rcloneview.com/support/blog/rcloneview-on-windows-server-cloud-backup-rcloneview)
- [Mengatasi Konflik Huruf Drive Mount di Windows](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)

<CloudSupportGrid />
