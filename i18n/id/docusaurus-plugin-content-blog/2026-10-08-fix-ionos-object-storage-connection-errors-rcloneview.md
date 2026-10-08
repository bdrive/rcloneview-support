---
slug: fix-ionos-object-storage-connection-errors-rcloneview
title: "Atasi Error Koneksi IONOS Object Storage — Masalah Endpoint dan Kunci Teratasi dengan RcloneView"
authors:
  - casey
description: "Atasi error koneksi IONOS Object Storage seperti endpoint salah, kunci ditolak, dan gagal menampilkan daftar menggunakan log RcloneView dan terminal bawaan."
keywords:
  - atasi error IONOS Object Storage
  - error koneksi IONOS S3
  - endpoint region IONOS
  - kunci akses IONOS ditolak
  - RcloneView IONOS
  - pemecahan masalah penyimpanan kompatibel S3
  - rclone IONOS
  - daftar bucket IONOS
  - GUI object storage
  - pemecahan masalah sinkronisasi cloud
tags:
  - RcloneView
  - troubleshooting
  - tips
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Atasi Error Koneksi IONOS Object Storage — Masalah Endpoint dan Kunci Teratasi dengan RcloneView

> Sebagian besar kegagalan koneksi IONOS Object Storage berasal dari endpoint, region, atau pasangan kunci — dan RcloneView menyediakan cara berbasis GUI untuk memeriksa masing-masing.

IONOS Object Storage diakses melalui protokol S3 rclone, sehingga satu endpoint yang salah ketik atau kunci yang tertukar dapat menimbulkan error yang tampak tidak berhubungan. RcloneView memungkinkan Anda memeriksa remote, membaca log, dan menguji perintah di terminal bawaan tanpa keluar dari aplikasi.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Periksa Endpoint dan Region Terlebih Dahulu

Penyedia yang kompatibel dengan S3 memerlukan Access Key, Secret Key, dan endpoint. Jika endpoint tidak cocok dengan region tempat bucket dibuat, permintaan akan gagal meskipun kuncinya benar. Gejala umumnya adalah timeout, pesan "no such host", atau bucket yang tidak ditemukan.

Buka Remote Manager dari tab Remote, edit remote IONOS, lalu bandingkan endpoint dengan yang ditampilkan di panel kontrol IONOS Anda untuk region bucket tersebut.

<img src="/support/images/en/blog/new-remote.png" alt="Mengedit endpoint remote IONOS Object Storage di RcloneView" class="img-large img-center" />

## Masukkan Ulang dan Uji Pasangan Kunci

Error akses ditolak atau signature biasanya berarti Access Key atau Secret Key tertempel dengan spasi tambahan, atau kunci telah dibuat ulang. Masukkan ulang kedua nilai, simpan, lalu telusuri root remote di panel Explorer.

Jika Anda lebih suka command line, buka tab Terminal dan jalankan `rclone listremotes`, lalu `rclone about "yourremote:"` untuk memastikan remote merespons. Terminal menggunakan konfigurasi yang sama dengan GUI, sehingga hasilnya menunjukkan persis apa yang dilihat aplikasi.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Menelusuri remote IONOS di panel Explorer RcloneView" class="img-large img-center" />

## Tangkap Log untuk Error yang Membandel

Jika penyebabnya masih belum jelas, buka Settings > Embedded Rclone, aktifkan rclone Logging, atur level ke DEBUG, lalu restart embedded rclone. Reproduksi kegagalan dan baca lognya: log menampilkan permintaan persis dan kode responsnya. Periksa juga Global Rclone Flags di halaman pengaturan yang sama, karena flag yang tertinggal dapat mengubah perilaku koneksi.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History menampilkan job sinkronisasi IONOS Object Storage yang gagal" class="img-large img-center" />

## Konfirmasi Pemulihan dengan Dry Run

Setelah remote tampil dengan benar, jalankan ulang job sinkronisasi Anda dengan Dry Run untuk melihat pratinjau penyalinan dan penghapusan. Kurangi transfer bersamaan di Step 2 jika error hanya muncul saat beban berat, dan biarkan percobaan ulang pada nilai default 3.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menjalankan job IONOS Object Storage yang telah diverifikasi di RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Pastikan endpoint IONOS cocok dengan region bucket Anda di Remote Manager.
3. Masukkan ulang Access Key dan Secret Key, lalu uji dengan `rclone about` di tab Terminal.
4. Aktifkan logging DEBUG jika perlu, lalu konfirmasi dengan Dry Run.

Memeriksa endpoint, kunci, dan log secara berurutan mengubah error koneksi yang membingungkan menjadi daftar periksa singkat.

---

**Panduan Terkait:**

- [Kelola IONOS Object Storage — Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)
- [Atasi Error Izin Akses Ditolak S3 dengan RcloneView](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)
- [Atasi Error Koneksi dan Autentikasi MinIO dengan RcloneView](https://rcloneview.com/support/blog/fix-minio-connection-authentication-errors-rcloneview)

<CloudSupportGrid />
