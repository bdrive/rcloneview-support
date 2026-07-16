---
slug: fix-mega-connection-quota-errors-rcloneview
title: "Perbaiki Kesalahan Koneksi dan Kuota Mega — Selesaikan dengan RcloneView"
authors:
  - tayson
description: "Perbaiki kesalahan sinkronisasi Mega di RcloneView termasuk overquota, kegagalan koneksi, dan masalah autentikasi. Panduan pemecahan masalah langkah demi langkah untuk masalah penyimpanan cloud Mega."
keywords:
  - Mega connection error
  - Mega overquota error
  - fix Mega sync
  - Mega RcloneView troubleshooting
  - Mega quota exceeded
  - Mega authentication error
  - fix Mega cloud storage
  - RcloneView Mega error
  - Mega sync problem
  - cloud sync troubleshooting
tags:
  - RcloneView
  - mega
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Kesalahan Koneksi dan Kuota Mega — Selesaikan dengan RcloneView

> Atasi kegagalan sinkronisasi Mega di RcloneView — selesaikan kesalahan overquota, masalah autentikasi, dan connection timeout saat menyinkronkan atau mentransfer file Mega.

Mega adalah layanan penyimpanan cloud yang dikenal dengan enkripsi end-to-end dan kapasitas penyimpanan gratis yang besar. Meskipun bekerja dengan baik untuk akses file manual, menyinkronkan data dalam jumlah besar melalui Mega menggunakan RcloneView dapat memunculkan kondisi kesalahan tertentu: throttling overquota, kegagalan autentikasi setelah sesi berakhir, dan gangguan koneksi. Panduan ini membahas kesalahan Mega yang paling umum ditemui di RcloneView beserta langkah-langkah untuk menyelesaikannya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Kesalahan Mega Overquota (Batas Bandwidth Terlampaui)

Mega menerapkan batas bandwidth unduhan — terutama pada akun gratis — dan jika batas tersebut terlampaui, akan memicu throttling yang muncul sebagai kesalahan "overquota" atau kecepatan transfer yang menurun drastis. Ketika ini terjadi selama proses sinkronisasi di RcloneView, Anda mungkin melihat kesalahan yang berisi `EOVERQUOTA` atau kode serupa di tab Log.

**Perbaikan segera:**
- **Tunggu hingga jendela kuota direset.** Batas bandwidth Mega diatur ulang dalam jendela waktu bergulir, biasanya beberapa jam. Menjeda sinkronisasi dan mencoba lagi nanti sering kali menyelesaikan masalah tanpa perubahan lain.
- **Kurangi jumlah transfer bersamaan.** Di Advanced Settings pada job sinkronisasi, turunkan Number of File Transfers menjadi 1 atau 2. Koneksi bersamaan yang lebih sedikit mengurangi laju konsumsi bandwidth, membantu Anda tetap berada di bawah ambang batas kuota.
- **Gunakan langkah Filtering** untuk membatasi setiap proses sinkronisasi pada sebagian file saja, guna menghindari transfer dalam jumlah besar yang cepat menghabiskan bandwidth.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Mega sync settings to avoid overquota errors in RcloneView" class="img-large img-center" />

## Kesalahan Autentikasi dan Login

Mega menggunakan autentikasi email dan kata sandi di rclone. Kesalahan autentikasi biasanya muncul sebagai kegagalan login atau pesan sesi berakhir. Penyebab umum:

**Kredensial salah:** Verifikasi email dan kata sandi Mega Anda di Remote Manager. Jika Anda baru saja mengubah kata sandi Mega, edit remote di RcloneView dan perbarui kredensialnya. Buka tab Remote > Remote Manager, pilih remote Mega Anda, lalu klik Edit.

**Autentikasi dua faktor (2FA):** Jika 2FA diaktifkan pada akun Mega Anda, rclone mungkin mengalami kesulitan dengan login email/kata sandi standar. Periksa dokumentasi Mega apakah akses API dengan 2FA aktif memerlukan token khusus atau konfigurasi app password.

**Sesi berakhir:** Operasi sinkronisasi yang berjalan lama dapat melampaui masa berlaku token sesi. Jika sebuah job gagal di tengah proses dengan kesalahan autentikasi, mengedit ulang remote untuk memicu autentikasi ulang lalu melanjutkan sinkronisasi akan menyelesaikan masalah ini.

<img src="/support/images/en/blog/new-remote.png" alt="Re-authenticating Mega remote in RcloneView" class="img-large img-center" />

## Connection Timeout dan Transfer Terputus

Koneksi Mega dapat mengalami timeout selama transfer besar akibat ketidakstabilan jaringan atau pembatasan laju di sisi server Mega. Mesin sinkronisasi RcloneView secara otomatis mencoba ulang operasi yang gagal (default: 3 kali percobaan ulang), sehingga kegagalan sementara sering kali pulih tanpa perlu campur tangan. Jika sebuah job terus-menerus gagal setelah semua percobaan ulang, periksa tab Log untuk pesan kesalahan spesifik.

Untuk masalah timeout yang terus berulang, tambahkan flag `--timeout` dan `--contimeout` melalui Settings > Embedded Rclone > Global Rclone Flags untuk memperpanjang nilai connection timeout. Ini memberi API Mega lebih banyak waktu untuk merespons sebelum rclone menyatakan kegagalan.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Mega sync error logs and job history in RcloneView" class="img-large img-center" />

## Melanjutkan Job Sinkronisasi Mega yang Terputus

Jika sinkronisasi Mega berskala besar terputus — baik karena overquota, timeout, atau sistem yang masuk mode sleep — menjalankan ulang job sinkronisasi yang sama di RcloneView akan melanjutkan dari titik terakhir. Perilaku sinkronisasi inkremental rclone membandingkan sumber dan tujuan, lalu hanya mentransfer file yang hilang atau berbeda, sambil melewati semua file yang sudah berhasil ditransfer.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Aktifkan logging DEBUG (Settings > Embedded Rclone > Log Level: DEBUG) untuk menangkap output kesalahan terperinci dari operasi Mega.
3. Kurangi jumlah transfer bersamaan di Advanced Settings pada job sinkronisasi Anda jika terjadi kesalahan overquota.
4. Edit ulang remote Mega di Remote Manager untuk memperbarui kredensial jika kesalahan autentikasi terus berlanjut.

Memahami keterbatasan bandwidth dan sesi Mega membantu Anda mengonfigurasi job sinkronisasi yang selesai secara andal tanpa mengalami kondisi kesalahan umum ini.

---

**Panduan Terkait:**

- [Mencadangkan Mega ke OneDrive dengan RcloneView](https://rcloneview.com/support/blog/backup-mega-to-onedrive-with-rcloneview)
- [Mengenkripsi dan Menyinkronkan File Mega dengan RcloneView](https://rcloneview.com/support/blog/encrypt-sync-protect-mega-files-rcloneview)
- [Mengotomatiskan Pencadangan Mega ke Google Drive dengan RcloneView](https://rcloneview.com/support/blog/automate-mega-to-google-drive-backup)

<CloudSupportGrid />
