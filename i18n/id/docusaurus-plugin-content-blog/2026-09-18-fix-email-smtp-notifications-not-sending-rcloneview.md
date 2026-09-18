---
slug: fix-email-smtp-notifications-not-sending-rcloneview
title: "Mengatasi Notifikasi Email SMTP yang Tidak Terkirim — Panduan Troubleshooting untuk RcloneView"
authors:
  - morgan
description: "Atasi notifikasi email SMTP RcloneView yang gagal terkirim. Selesaikan masalah pemblokiran port, kesalahan autentikasi, dan kesalahan konfigurasi ambang batas untuk peringatan tugas."
keywords:
  - mengatasi notifikasi email RcloneView
  - notifikasi SMTP tidak terkirim
  - kesalahan peringatan email RcloneView
  - autentikasi SMTP gagal
  - troubleshooting notifikasi tugas sinkronisasi
  - port 587 diblokir SMTP
  - peringatan pencadangan tidak diterima
  - notifikasi RcloneView PLUS
tags:
  - RcloneView
  - troubleshooting
  - automation
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengatasi Notifikasi Email SMTP yang Tidak Terkirim — Panduan Troubleshooting untuk RcloneView

> Ketika notifikasi email RcloneView berhenti masuk, penyebabnya hampir selalu konfigurasi SMTP, pemblokiran port, atau ambang batas transfer yang diatur terlalu tinggi — berikut cara mendiagnosis dan memperbaiki masing-masing.

Peringatan email hanya berguna jika benar-benar sampai. Ketika pencadangan terjadwal gagal secara diam-diam dan notifikasi tidak pernah masuk ke kotak masuk Anda, seluruh tujuan pemantauan tanpa pengawasan pun hilang. Sistem notifikasi SMTP RcloneView bergantung pada beberapa pengaturan yang mudah salah dikonfigurasi, dan panduan ini membahas titik-titik kegagalan paling umum agar peringatan tugas Anda kembali bekerja dengan andal.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Kesalahan Autentikasi dan Host

Penyebab paling umum kegagalan notifikasi secara diam-diam adalah autentikasi SMTP yang salah. Jika penyedia email Anda memerlukan kata sandi khusus aplikasi (umum pada akun Gmail dan Microsoft 365 dengan autentikasi dua faktor aktif), memasukkan kata sandi akun biasa akan menggagalkan koneksi meskipun kolom tersebut menerima nilai tanpa kesalahan yang jelas. Buat kata sandi aplikasi dari pengaturan keamanan penyedia Anda dan gunakan itu sebagai gantinya.

Periksa kembali kolom **SMTP Host** — kesalahan ketik seperti `smtp.gmial.com` atau menggunakan host IMAP penyedia Anda alih-alih host SMTP akan menyebabkan koneksi gagal. Setelah memperbaiki kredensial, selalu gunakan tombol **Test** sebelum mengandalkan konfigurasi tersebut untuk tugas sungguhan; ini memisahkan masalah autentikasi dari masalah konfigurasi di tingkat tugas.

<img src="/support/images/en/blog/new-remote.png" alt="Testing SMTP authentication settings in RcloneView notification configuration" class="img-large img-center" />

## Pemblokiran Port dan Masalah Jaringan

RcloneView merekomendasikan **port 587** dengan STARTTLS untuk pengiriman SMTP. Jika Anda menjalankan RcloneView pada jaringan dengan aturan firewall keluar yang ketat — umum pada jaringan perusahaan, beberapa penyedia VPS, dan ISP rumahan tertentu — port 587 (dan terutama port 25) mungkin diblokir sepenuhnya, menyebabkan email uji coba mengalami waktu habis alih-alih gagal dengan kesalahan yang jelas.

Jika uji coba terus-menerus mengalami waktu habis alih-alih mengembalikan kesalahan autentikasi, masalahnya hampir pasti berada di tingkat jaringan, bukan tingkat kredensial. Coba beralih ke port 465 (SSL) jika penyedia Anda mendukungnya, atau periksa dengan administrator jaringan Anda apakah lalu lintas SMTP keluar diizinkan. Jika Anda terhubung ke instance rclone eksternal pada server jarak jauh atau kontainer Docker, pastikan aturan keluar server tersebut juga mengizinkan lalu lintas SMTP, karena koneksi berasal dari tempat rclone benar-benar berjalan.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Reviewing job notification settings after an SMTP connection failure" class="img-large img-center" />

## Kesalahan Konfigurasi Ambang Batas dan Penerima

Jika SMTP terhubung dan uji coba berhasil, tetapi notifikasi untuk tugas sungguhan tidak pernah masuk, periksa ambang batas notifikasi di tingkat tugas. RcloneView memungkinkan Anda mengatur ukuran transfer minimum (dalam MB atau GB) sebelum notifikasi dikirim — ini berguna untuk mengurangi kelelahan akibat peringatan pada tugas yang sering berjalan dengan sedikit atau tanpa pergerakan data, tetapi ini juga berarti tugas yang hanya mentransfer beberapa berkas mungkin berada di bawah ambang batas dan tidak menghasilkan email sama sekali. Turunkan atau hapus ambang batas untuk sementara guna memastikan apakah ini penyebabnya.

Verifikasi juga bahwa alamat penerima dimasukkan dengan benar di tingkat tugas, bukan hanya di pengaturan SMTP global — RcloneView mengharuskan penerima notifikasi dikonfigurasi per tugas, sehingga koneksi SMTP yang berfungsi secara global namun tanpa penerima yang ditetapkan untuk tugas tertentu tidak akan pernah mengirim peringatan untuk tugas tersebut. Notifikasi email adalah fitur lisensi PLUS, jadi jika SMTP, penerima, dan ambang batas semuanya sudah benar tetapi peringatan tetap tidak masuk, periksa tingkat lisensi Anda sebelum melanjutkan pemecahan masalah.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Checking job history and notification recipients for a completed sync job" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html) jika belum, lalu buka Pengaturan Notifikasi.
2. Masukkan kembali kredensial SMTP menggunakan kata sandi khusus aplikasi jika penyedia Anda mengharuskannya, lalu klik **Test**.
3. Jika uji coba mengalami waktu habis, beralih dari port 587 ke port 465 atau periksa aturan firewall yang memblokir SMTP keluar.
4. Tinjau ambang batas notifikasi dan daftar penerima setiap tugas untuk memastikan konfigurasinya sesuai harapan.

Setelah kredensial SMTP, akses jaringan, dan pengaturan tingkat tugas semuanya terverifikasi, notifikasi email menjadi jaring pengaman yang andal untuk setiap sinkronisasi terjadwal yang berjalan di latar belakang.

---

**Panduan Terkait:**

- [Notifikasi Email SMTP untuk Job — Selalu Terinformasi Status Sinkronisasi di RcloneView](https://rcloneview.com/support/blog/email-smtp-job-notifications-rcloneview)
- [Menyiapkan Notifikasi dan Peringatan untuk Sinkronisasi Cloud di RcloneView](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [Mengatasi Sinkronisasi Terjadwal yang Tidak Berjalan — Troubleshoot Tugas Cloud Otomatis di RcloneView](https://rcloneview.com/support/blog/fix-scheduled-sync-not-running-rcloneview)

<CloudSupportGrid />
