---
slug: fix-ftp-connection-errors-rcloneview
title: "Mengatasi Error Koneksi FTP — Pemecahan Masalah dengan RcloneView"
authors:
  - jay
description: "Atasi kegagalan koneksi FTP di RcloneView, mulai dari remote yang macet hingga error autentikasi, menggunakan terminal bawaan dan alat log."
keywords:
  - mengatasi error koneksi ftp
  - pemecahan masalah ftp rcloneview
  - autentikasi ftp gagal
  - error remote ftp rclone
  - koneksi ftp ditolak
  - remote ftp rcloneview
  - mengatasi error sinkronisasi ftp
  - masalah koneksi server ftp
  - diagnostik terminal rclone
  - masalah sinkronisasi cloud ftp
tags:
  - RcloneView
  - troubleshooting
  - tips
  - ftp
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengatasi Error Koneksi FTP — Pemecahan Masalah dengan RcloneView

> Saat remote FTP tidak mau terhubung atau tugas sinkronisasi terus gagal, telusuri dulu alat diagnostik bawaan RcloneView sebelum langsung menganggap server-nya bermasalah.

FTP masih menjadi tulang punggung banyak infrastruktur lama — hosting web, unit NAS lawas, server file internal — dan menghubungkannya ke RcloneView memungkinkan Anda memasukkan penyimpanan tersebut ke dalam rutinitas sinkronisasi dan pencadangan biasa. Namun remote FTP juga lebih sensitif terhadap kondisi jaringan dan salah ketik kredensial dibandingkan penyedia berbasis OAuth, sehingga error koneksi lebih sering muncul. Berikut cara mengisolasi penyebabnya, bukan sekadar menebak.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pastikan Pengaturan Remote Sudah Benar

Sebagian besar error "koneksi gagal" berasal dari host, port, atau path yang salah ketik dalam konfigurasi remote, bukan dari server itu sendiri. Buka **tab Remote > Remote Manager**, temukan remote FTP Anda, lalu buka untuk diedit guna memeriksa ulang alamat host dan kredensial login sesuai yang diberikan admin server Anda.

<img src="/support/images/en/blog/new-remote.png" alt="Memeriksa pengaturan koneksi remote FTP di RcloneView" class="img-large img-center" />

Jika pengaturan sudah terlihat benar tetapi koneksi tetap gagal, kemungkinan besar masalahnya ada di sisi jaringan: firewall yang memblokir port, VPN yang mengganggu jalur koneksi, atau server FTP itu sendiri yang tidak dapat dijangkau dari jaringan Anda saat ini.

## Uji Koneksi dari Terminal Bawaan

RcloneView juga menyertakan terminal rclone lengkap berdampingan dengan GUI-nya, bahkan pada lisensi FREE, sehingga Anda tidak perlu menginstal command-line terpisah untuk menelusuri masalah koneksi. Buka tab **Terminal** di Info View bagian bawah dan jalankan `rclone about "remote:"` terhadap remote FTP Anda — koneksi yang berfungsi akan langsung mengembalikan detail penyimpanan, sementara kegagalan akan menampilkan pesan error asli dari rclone alih-alih dialog RcloneView yang umum.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Menguji koneksi remote FTP dari terminal RcloneView" class="img-large img-center" />

Teks error mentah tersebut adalah cara cepat untuk membedakan penolakan autentikasi dari timeout, yang keduanya membutuhkan perbaikan yang sama sekali berbeda.

## Kumpulkan Log untuk Kegagalan yang Terus Berulang

Jika masalah tidak juga teratasi setelah memperbaiki kredensial, aktifkan logging detail: buka **Settings > Embedded Rclone**, aktifkan **rclone Logging**, atur level log ke **DEBUG**, lalu klik **Restart Embedded Rclone** dan ulangi sinkronisasi yang gagal tadi. File log yang dihasilkan mencatat seluruh proses handshake dengan server FTP dan jauh lebih berguna untuk diagnosis dibandingkan ringkasan yang ditampilkan di tab Log saja.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Memeriksa riwayat tugas setelah mengulang kegagalan koneksi FTP" class="img-large img-center" />

## Mulai Menggunakan

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Periksa ulang host, port, dan kredensial remote FTP Anda di Remote Manager.
3. Jalankan `rclone about "remote:"` di tab Terminal untuk melihat error koneksi mentah.
4. Aktifkan logging level DEBUG jika error masih berlanjut, lalu ulangi masalahnya.

Beberapa menit menggunakan terminal dan pengaturan log biasanya cukup untuk mengubah pesan "koneksi gagal" yang samar menjadi solusi yang bisa langsung Anda terapkan.

---

**Panduan Terkait:**

- [Mengelola Server FTP — Sinkronisasi dan Pencadangan Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-ftp-server-cloud-sync-backup-rcloneview)
- [Migrasi Server FTP ke Penyimpanan Cloud](https://rcloneview.com/support/blog/migrate-ftp-server-to-cloud-storage-rcloneview)
- [Mengatasi Error Koneksi SFTP Ditolak dan Timeout](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)

<CloudSupportGrid />
