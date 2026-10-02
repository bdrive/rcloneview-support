---
slug: fix-gofile-sync-errors-rcloneview
title: "Perbaiki Error Sinkronisasi Gofile — Masalah Token, Unggahan, dan Daftar File Teratasi dengan RcloneView"
authors:
  - jay
description: "Atasi error sinkronisasi Gofile seperti token tidak valid, unggahan gagal, dan daftar kosong menggunakan riwayat job, log, dan terminal bawaan RcloneView."
keywords:
  - perbaiki error sinkronisasi Gofile
  - error Gofile rclone
  - token Gofile tidak valid
  - unggahan Gofile gagal
  - pemecahan masalah Gofile
  - RcloneView Gofile
  - token API akun Gofile
  - remote Gofile rclone
  - pemecahan masalah sinkronisasi cloud
  - Gofile GUI
tags:
  - RcloneView
  - gofile
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Sinkronisasi Gofile — Masalah Token, Unggahan, dan Daftar File Teratasi dengan RcloneView

> Sebagian besar kegagalan sinkronisasi Gofile berasal dari beberapa penyebab: token yang kedaluwarsa, folder root yang salah, atau transfer yang perlu dicoba ulang — dan RcloneView menampilkan masing-masing di riwayat job dan log.

Gofile mengautentikasi dengan Account API Token, bukan login browser, sehingga error biasanya muncul sebagai pesan "unauthorized" atau folder yang tampak kosong. Alih-alih menebak-nebak lewat command line, Anda dapat memakai riwayat job, log, dan terminal RcloneView untuk melihat dengan tepat langkah mana yang gagal. RcloneView melakukan mount dan sinkronisasi lebih dari 90 penyedia dari satu jendela, di Windows, macOS, dan Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mulai dari Account API Token

Kegagalan yang paling umum adalah token yang tidak valid atau sudah usang. Token Gofile dapat ditemukan di kolom Account API Token pada halaman profil Gofile Anda. Jika Anda membuat ulang token, atau menempelkannya dengan spasi di akhir, setiap permintaan akan ditolak.

Buka Remote Manager dari tab Remote, edit remote Gofile, lalu tempelkan token sekali lagi. Kemudian telusuri root remote di panel Explorer. Jika daftar berhasil dimuat, autentikasi sudah benar dan masalahnya ada di tempat lain.

<img src="/support/images/en/blog/new-remote.png" alt="Mengedit remote Gofile dan memasukkan ulang token API akun di RcloneView" class="img-large img-center" />

## Baca Riwayat Job dan Log

Ketika job terjadwal atau manual berakhir dengan status Errored, buka Job History. Setiap entri mencatat jenis eksekusi, durasi, status, ukuran, dan jumlah file, sehingga Anda dapat mengetahui apakah job gagal seketika (biasanya autentikasi) atau di tengah jalan (biasanya masalah jaringan atau tingkat file).

Untuk detail lebih dalam, aktifkan pencatatan log rclone di Settings > Embedded Rclone, atur level ke DEBUG, mulai ulang rclone bawaan, lalu ulangi kegagalan tersebut. Log menampilkan error persis yang dikembalikan untuk setiap file.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Riwayat job RcloneView yang menampilkan job sinkronisasi Gofile berstatus Errored" class="img-large img-center" />

## Isolasi Kegagalan Unggahan dengan Dry Run

Jika hanya sebagian file yang gagal, jalankan Dry Run terlebih dahulu. Dry Run mencantumkan apa yang akan disalin atau dihapus tanpa mengubah apa pun, sehingga Anda dapat memastikan sumber dan tujuan sudah sesuai. Lalu kurangi jumlah transfer file di Langkah 2 wizard sinkronisasi dan biarkan "Retry entire sync if fails" pada nilai bawaan 3. Mengurangi transfer paralel sering kali mengatasi error unggahan yang muncul sesekali.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menjalankan job sinkronisasi Gofile setelah menyesuaikan pengaturan transfer di RcloneView" class="img-large img-center" />

## Verifikasi dengan Folder Compare

Setelah dijalankan ulang, gunakan Compare untuk membandingkan folder lokal dengan folder Gofile secara berdampingan. Filter untuk file hanya di kiri, hanya di kanan, dan yang berbeda menunjukkan dengan tepat apa yang masih kurang, sehingga Anda tidak perlu mengunggah ulang semuanya.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Tampilan Folder Compare yang menyoroti file yang hilang di Gofile" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Masukkan ulang Account API Token Gofile Anda di Remote Manager dan pastikan folder root tampil.
3. Tinjau Job History dan aktifkan log DEBUG jika sebuah job berstatus Errored.
4. Jalankan Dry Run, kurangi transfer bersamaan, lalu verifikasi dengan Folder Compare.

Gambaran yang jelas tentang token, log, dan perbedaan mengubah kegagalan Gofile yang samar menjadi perbaikan yang cepat.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Gofile — Sinkronisasi dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [Perbaiki Error Sinkronisasi Put.io dengan RcloneView](https://rcloneview.com/support/blog/fix-put-io-sync-errors-rcloneview)
- [Perbaiki Sinkronisasi Cloud yang Macet dan Hang dengan RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-stuck-hanging-rcloneview)

<CloudSupportGrid />
