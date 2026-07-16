---
slug: migrate-koofr-to-backblaze-b2-rcloneview
title: "Migrasi Koofr ke Backblaze B2 — Transfer File dengan RcloneView"
authors:
  - tayson
description: "Pelajari cara memigrasikan file dari penyimpanan cloud Koofr ke object storage Backblaze B2 menggunakan RcloneView — dengan verifikasi checksum dan percobaan ulang otomatis untuk transfer besar."
keywords:
  - Koofr to Backblaze B2 migration
  - migrate Koofr B2 RcloneView
  - Koofr Backblaze B2 transfer
  - switch Koofr to B2 storage
  - cloud migration Koofr
  - Koofr backup Backblaze B2
  - Koofr to S3 migration guide
  - rclone Koofr B2 GUI
tags:
  - koofr
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Koofr ke Backblaze B2 — Transfer File dengan RcloneView

> Pindahkan pustaka penyimpanan cloud Koofr Anda ke object storage Backblaze B2 dalam satu tugas RcloneView — terverifikasi, terpantau, dan dapat dilanjutkan jika terputus.

Koofr adalah layanan penyimpanan cloud asal Eropa yang berfokus pada privasi dan juga berfungsi sebagai hub yang menghubungkan akun cloud lain. Jika Anda ingin konsolidasi ke Backblaze B2 untuk keperluan pengarsipan atau alasan biaya, RcloneView menangani migrasi langsung antara kedua penyedia — tanpa perlu mengunduh ke lokal. File dialirkan dari backend berbasis WebDAV milik Koofr melalui mesin transfer rclone langsung ke bucket B2 Anda.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menyiapkan Remote Koofr dan Backblaze B2

Untuk Koofr, buka **tab Remote → New Remote** dan pilih Koofr dari daftar penyedia. Koofr mendukung login OAuth — RcloneView akan membuka jendela browser agar Anda dapat mengautentikasi dengan akun Koofr Anda. Sebagai alternatif, jika Anda lebih memilih akses berbasis kata sandi, Anda dapat membuat app password di pengaturan akun Koofr dan menggunakannya bersama email Koofr Anda.

Untuk Backblaze B2, masukkan Application Key ID dan Application Key yang dihasilkan dari konsol B2. Tentukan nama bucket dalam konfigurasi. Setelah kedua remote tersimpan, tempatkan Koofr di panel penjelajah kiri dan B2 di panel kanan untuk memastikan keduanya dapat dijelajahi.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Koofr and Backblaze B2 in RcloneView" class="img-large img-center" />

## Menjalankan Migrasi

Klik **Sync** di tab Home dan konfigurasikan tugasnya: folder Koofr sebagai sumber, bucket B2 sebagai tujuan. Di Advanced Settings, aktifkan **Checksum** untuk verifikasi integritas. Koofr menggunakan WebDAV secara internal, yang berarti pendaftaran file mungkin sedikit lebih lambat dibandingkan S3 native, jadi atur jumlah checker ke 4 agar tidak membebani API Koofr secara berlebihan.

Jalankan **Dry Run** terlebih dahulu untuk melihat daftar lengkap file yang akan ditransfer. Ini sangat berguna untuk pustaka Koofr besar di mana Koofr juga menggabungkan file dari akun lain yang terhubung (Google Drive, Dropbox, dll.) — dry run membantu Anda memastikan bahwa yang dimigrasikan hanya penyimpanan Koofr Anda yang sebenarnya, bukan tampilan cerminan dari penyedia lain.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Koofr to Backblaze B2 migration in progress in RcloneView" class="img-large img-center" />

## Menangani Transfer yang Terputus

Jika migrasi terputus (koneksi jaringan terputus, komputer tidur, dll.), mode sync RcloneView pada dasarnya dapat dilanjutkan. Saat Anda menjalankan ulang tugas Sync yang sama, rclone akan membandingkan sumber dan tujuan lalu hanya mentransfer file yang belum ada atau berbeda di sisi B2. File yang sudah ditransfer tidak perlu dikirim ulang.

Setelah migrasi selesai, gunakan **Folder Compare** untuk memverifikasi bahwa sumber Koofr dan tujuan B2 telah sesuai. Tampilan compare akan menyoroti file mana pun yang ada di Koofr tetapi hilang dari B2, memberi Anda daftar periksa yang jelas untuk hal-hal yang perlu dicoba ulang.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Koofr to B2 migration runs" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Koofr (OAuth) dan Backblaze B2 (Application Key) sebagai remote.
3. Jalankan dry run untuk memastikan cakupannya, lalu jalankan migrasi dengan checksum diaktifkan.
4. Gunakan Folder Compare setelah selesai untuk memverifikasi bahwa migrasi sepenuhnya berhasil.

Memigrasikan dari Koofr ke Backblaze B2 dengan RcloneView adalah proses yang andal dan dapat dilanjutkan, yang menjaga integritas data Anda di sepanjang prosesnya.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan Cloud Koofr dengan RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Migrasi Koofr ke Google Drive dengan RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)
- [Mengelola Penyimpanan Cloud Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
