---
slug: fix-icloud-photos-sync-errors-rcloneview
title: "Memperbaiki Kesalahan Sinkronisasi iCloud Photos — Cara Mengatasinya dengan RcloneView"
authors:
  - tayson
description: "Atasi kesalahan sinkronisasi iCloud Photos di RcloneView, mulai dari kegagalan autentikasi library hingga pemuatan daftar yang lambat, agar pencadangan foto Anda berjalan andal."
keywords:
  - kesalahan sinkronisasi iCloud Photos
  - memperbaiki iCloud Photos RcloneView
  - autentikasi iCloud Photos gagal
  - pemecahan masalah RcloneView iCloud Photos
  - masalah pencadangan iCloud Photos
  - kesalahan koneksi iCloud Photos
  - perbaikan sinkronisasi Apple Photos
  - pemuatan daftar iCloud Photos lambat
tags:
  - RcloneView
  - troubleshooting
  - tips
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki Kesalahan Sinkronisasi iCloud Photos — Cara Mengatasinya dengan RcloneView

> iCloud Photos dikonfigurasi sebagai jenis remote terpisah dari iCloud Drive, dan struktur berbasis library-nya menyebabkan sejumlah masalah sinkronisasi tersendiri. Berikut cara mengatasi masalah paling umum di RcloneView.

iCloud Photos ditangani oleh rclone sebagai paket remote khusus tersendiri, terpisah dari iCloud Drive, karena Apple mengekspos library foto melalui API yang berbeda dari penyimpanan file umum. Perbedaan ini membuat kesalahan yang Anda alami — dan cara mengatasinya — berbeda dari pengaturan iCloud Drive standar. Panduan ini membahas masalah autentikasi, pemuatan daftar, dan sinkronisasi yang khusus terjadi pada iCloud Photos saat menggunakan RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Kesalahan Autentikasi Saat Menambahkan Remote

Saat Anda membuat remote iCloud Photos baru melalui **Remote tab → New Remote**, RcloneView akan meminta email dan kata sandi Apple ID Anda, lalu kode autentikasi dua faktor jika akun Anda mengaktifkan 2FA (yang kini diwajibkan Apple untuk sebagian besar akun). Jika remote gagal terautentikasi, periksa dulu apakah ada kesalahan ketik pada email Apple ID — ini adalah penyebab paling umum. Jika akun Anda memerlukan kata sandi khusus aplikasi karena pengaturan keamanan yang ditingkatkan, buat kata sandi tersebut di appleid.apple.com dan gunakan itu, bukan kata sandi biasa Anda, saat diminta.

<img src="/support/images/en/blog/new-remote.png" alt="Mengonfigurasi remote iCloud Photos di RcloneView" class="img-large img-center" />

Sesi yang kedaluwarsa adalah penyebab umum lain dari kegagalan autentikasi khusus pada iCloud Photos, karena sesi library foto Apple cenderung lebih cepat kedaluwarsa dibandingkan sesi iCloud Drive. Jika remote yang sebelumnya berfungsi tiba-tiba mulai menampilkan kesalahan autentikasi, hapus dan tambahkan kembali remote tersebut melalui Remote Manager alih-alih mencoba memperbaiki konfigurasi yang ada.

## Album Hilang atau Daftar Foto Tidak Lengkap

Karena iCloud Photos mengatur konten ke dalam album, album bersama, dan album pintar alih-alih struktur folder biasa, beberapa struktur folder mungkin tidak muncul seperti yang diharapkan saat menjelajahi remote di panel Explorer. Jika sebuah album tampak hilang sepenuhnya, segarkan panel dengan F5 atau **Reload** dari menu klik kanan — daftar iCloud Photos dapat tertinggal dari perubahan terbaru yang dilakukan dari iPhone atau iPad. Untuk library yang sangat besar, file asli beresolusi tinggi yang hanya disimpan di iCloud (belum di-cache ke perangkat) juga dapat memperlambat respons pemuatan daftar secara signifikan.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Memuat ulang daftar remote iCloud Photos di RcloneView" class="img-large img-center" />

## Transfer Lambat atau Terhenti Selama Pencadangan

Saat mencadangkan library iCloud Photos ke cloud lain atau drive lokal, transfer dapat tampak terhenti pada library besar karena setiap permintaan foto diproses satu per satu melalui server Apple, bukan secara massal. Menurunkan **Number of file transfers** dan **Number of equality checkers** pada langkah Advanced Settings di pekerjaan sinkronisasi akan mengurangi seberapa agresif RcloneView melakukan polling ke API iCloud Photos, yang dalam praktiknya menghasilkan transfer yang lebih stabil — meski sedikit lebih lambat — dibandingkan membiarkan kedua pengaturan pada nilai default untuk jenis remote khusus ini.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Memantau transfer pencadangan iCloud Photos di RcloneView" class="img-large img-center" />

RcloneView melakukan mount dan sinkronisasi lebih dari 90 penyedia dari satu jendela di Windows, macOS, dan Linux, sehingga begitu remote iCloud Photos stabil, mencadangkannya ke cloud pendukung lain menggunakan alur kerja sinkronisasi yang sama seperti penyedia lainnya.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Verifikasi ulang email Apple ID Anda dan buat kata sandi khusus aplikasi jika 2FA atau pengaturan keamanan yang ditingkatkan diaktifkan.
3. Muat ulang panel remote jika album tampak hilang, alih-alih menganggapnya sebagai kehilangan data.
4. Kurangi konkurensi transfer file dan checker untuk library besar guna menghindari transfer yang terhenti.

Dengan pengaturan autentikasi dan konkurensi yang disesuaikan dengan benar, iCloud Photos menjadi sumber andal lainnya dalam rutinitas pencadangan RcloneView Anda.

---

**Panduan Terkait:**

- [Mengelola iCloud Photos — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-icloud-photos-cloud-sync-rcloneview)
- [Memperbaiki Kesalahan Sinkronisasi iCloud Drive — Cara Mengatasinya dengan RcloneView](https://rcloneview.com/support/blog/fix-icloud-drive-sync-errors-rcloneview)
- [RcloneView di macOS Sonoma — Sinkronisasi dan Pencadangan Penyimpanan Cloud](https://rcloneview.com/support/blog/rcloneview-macos-sonoma-cloud-sync)

<CloudSupportGrid />
