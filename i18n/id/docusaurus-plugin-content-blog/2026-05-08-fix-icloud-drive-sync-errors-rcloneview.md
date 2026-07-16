---
slug: fix-icloud-drive-sync-errors-rcloneview
title: "Perbaiki Error Sinkronisasi iCloud Drive — Cara Mengatasinya dengan RcloneView"
authors:
  - tayson
description: "Diagnosis dan perbaiki error sinkronisasi iCloud Drive di RcloneView — mencakup masalah autentikasi, persyaratan versi rclone, dan masalah koneksi umum di macOS."
keywords:
  - iCloud Drive sync errors RcloneView
  - fix iCloud Drive rclone errors
  - iCloud Drive authentication problem
  - RcloneView iCloud troubleshoot
  - iCloud Drive connection failed
  - rclone iCloud Drive setup
  - fix iCloud backup RcloneView
  - iCloud Drive macOS sync issues
tags:
  - RcloneView
  - macos
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Sinkronisasi iCloud Drive — Cara Mengatasinya dengan RcloneView

> Dukungan iCloud Drive di rclone memerlukan pengaturan khusus. Berikut cara mendiagnosis kegagalan autentikasi, ketidakcocokan versi, dan error koneksi saat menggunakan iCloud dengan RcloneView.

iCloud Drive adalah salah satu penyedia cloud yang lebih kompleks untuk dikonfigurasi dengan rclone karena autentikasi Apple bergantung pada kredensial Apple ID dan mungkin melibatkan tantangan autentikasi dua faktor. RcloneView menangani ini melalui backend rclone yang tertanam, tetapi agar iCloud berfungsi dengan benar diperlukan beberapa prasyarat. Panduan ini akan memandu Anda melalui titik-titik kegagalan yang paling umum.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Prasyarat: rclone v1.69 atau Lebih Baru Diperlukan

Dukungan iCloud Drive diperkenalkan di rclone v1.69. Jika Anda melihat error seperti `unknown provider type: iclouddrive` atau `remote type not found`, versi rclone tertanam Anda terlalu lama. Di RcloneView, periksa versi rclone saat ini di **footer bar** di bagian bawah jendela. Jika menunjukkan versi lebih lama dari v1.69.1, gunakan **Help tab → Check for Updates** untuk memperbarui ke rclone tertanam terbaru.

RcloneView dilengkapi dengan binary rclone tertanam yang modern, tetapi jika Anda menjalankan instalasi yang lebih lama, memicu pembaruan mandiri akan menyelesaikan jenis error ini sepenuhnya.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive as a new remote in RcloneView" class="img-large img-center" />

## Kegagalan Autentikasi dan 2FA Apple ID

Saat menambahkan iCloud Drive melalui **Remote tab → New Remote**, RcloneView akan meminta Apple ID (email) dan kata sandi Anda. Jika Anda menggunakan autentikasi dua faktor — yang kini diwajibkan Apple untuk sebagian besar akun — Anda juga akan diminta memasukkan kode 2FA yang muncul di perangkat Apple tepercaya Anda. Masukkan kode tersebut saat diminta selama wizard konfigurasi remote.

Error umum pada tahap ini meliputi `INVALID_EMAIL` (verifikasi alamat email Apple ID Anda sudah benar), `AUTHENTICATION_FAILED` (kata sandi khusus aplikasi mungkin diperlukan jika akun Apple Anda memiliki keamanan tingkat lanjut), dan error timeout jika prompt 2FA tidak segera dijawab. Jika Apple mewajibkan kata sandi khusus aplikasi untuk akun Anda, buat kata sandi tersebut di appleid.apple.com dan gunakan sebagai pengganti kata sandi biasa Anda.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Testing iCloud Drive connection in RcloneView" class="img-large img-center" />

## Listing Lambat atau Visibilitas File Sebagian

iCloud Drive menggunakan penyimpanan on-demand, artinya file mungkin hanya disimpan di iCloud dan belum diunduh secara lokal. Saat menelusuri melalui rclone, file yang belum di-cache secara lokal di Mac mungkin muncul dengan metadata terbatas atau membutuhkan waktu lebih lama untuk ditampilkan (list). Ini adalah perilaku normal — iCloud harus mengambil metadata file dari server Apple.

Jika daftar folder tampak tidak lengkap, coba muat ulang panel (F5 atau **Reload** dari menu klik kanan). Untuk pustaka iCloud yang besar, atur **Number of equality checkers** ke nilai yang lebih rendah (2–4) di pengaturan job untuk mengurangi laju rclone dalam membebani API iCloud selama operasi perbandingan.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="iCloud Drive transfer monitoring in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Verifikasi versi rclone tertanam Anda adalah v1.69.1 atau lebih baru melalui footer bar.
3. Gunakan Apple ID dan kode 2FA Anda (atau kata sandi khusus aplikasi) saat mengonfigurasi remote.
4. Kurangi konkurensi checker jika Anda mengalami listing lambat atau timeout.

Setelah dikonfigurasi dengan benar, iCloud Drive akan terintegrasi dengan lancar ke dalam alur kerja RcloneView Anda untuk pencadangan dan transfer lintas cloud.

---

**Panduan Terkait:**

- [Kelola Sinkronisasi Cloud iCloud Drive dengan RcloneView](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [Perbaiki Error Too Many Open Files di macOS pada RcloneView](https://rcloneview.com/support/blog/fix-macos-too-many-open-files-rcloneview)
- [RcloneView di macOS Sonoma — Sinkronisasi Cloud dan Pencadangan](https://rcloneview.com/support/blog/rcloneview-macos-sonoma-cloud-sync)

<CloudSupportGrid />
