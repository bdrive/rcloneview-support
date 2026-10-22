---
slug: fix-cloudinary-sync-errors-rcloneview
title: "Perbaiki Error Sinkronisasi Cloudinary — Masalah Koneksi, Transfer, dan File Hilang Teratasi dengan RcloneView"
authors:
  - jay
description: "Perbaiki error sinkronisasi Cloudinary dengan RcloneView: periksa ulang remote, baca riwayat job dan log DEBUG, turunkan konkurensi, lalu verifikasi hasil dengan Folder Compare."
keywords:
  - perbaiki error sinkronisasi Cloudinary
  - sinkronisasi Cloudinary gagal
  - error rclone Cloudinary
  - pemecahan masalah RcloneView
  - file hilang di Cloudinary
  - log DEBUG rclone
  - perbandingan folder
  - pemecahan masalah sinkronisasi cloud
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-storage
  - dam
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Sinkronisasi Cloudinary — Masalah Koneksi, Transfer, dan File Hilang Teratasi dengan RcloneView

> Saat job Cloudinary gagal, riwayat job, log DEBUG, dan Folder Compare di RcloneView menunjukkan apakah penyebabnya adalah remote, beban transfer, atau file yang tidak pernah sampai.

Sinkronisasi Cloudinary yang berhenti dengan error yang tidak jelas, atau selesai dengan folder yang tampak tidak lengkap, sulit didiagnosis hanya dari command line. RcloneView menyatukan pemeriksaan remote, catatan job, log, dan perbandingan berdampingan dalam satu jendela, sehingga Anda dapat bekerja berdasarkan bukti, bukan menjalankan ulang secara asal. RcloneView me-mount dan menyinkronkan 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pastikan Remote Masih Terhubung

Jika job gagal dalam hitungan detik, curigai remote sebelum datanya. Buka Remote Manager dari tab Remote, edit remote Cloudinary, dan masukkan ulang kredensial jika telah berubah atau kedaluwarsa. Lalu buka remote tersebut di panel Explorer dan telusuri folder root. Jika daftar tampil normal, koneksi sehat dan masalahnya ada di tempat lain.

Di tab Terminal bawaan, Anda juga dapat menjalankan `rclone about "remote:"`, dengan mengganti `remote` dengan nama remote Anda, sebagai pemeriksaan cepat apakah akun merespons.

<img src="/support/images/en/blog/new-remote.png" alt="Mengedit remote Cloudinary di Remote Manager RcloneView" class="img-large img-center" />

## Baca Riwayat Job dan Aktifkan Logging DEBUG

Buka Job History dan periksa status, durasi, dan jumlah file dari proses yang gagal. Job yang error di tengah jalan biasanya menunjuk ke file tertentu atau beban transfer, bukan kredensial.

Untuk pesan persis per file, buka Settings > Embedded Rclone, aktifkan logging rclone, atur level ke DEBUG, lalu klik Restart Embedded Rclone. Reproduksi kegagalan dan baca log di tab Log atau di folder log yang Anda konfigurasi.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Riwayat job RcloneView yang menampilkan job Cloudinary yang error" class="img-large img-center" />

## Turunkan Konkurensi dan Pratinjau Proses Ulang

Kegagalan yang terjadi sesekali sering mereda saat lebih sedikit file yang dipindahkan sekaligus. Di Langkah 2 wizard sinkronisasi, kurangi jumlah transfer file dan atur equality checkers ke 4 atau kurang, yang merupakan panduan untuk backend lambat. Pertahankan "Retry entire sync if fails" pada 3 agar kegagalan sementara dicoba ulang hingga tiga kali.

Sebelum menjalankan ulang, gunakan Dry Run untuk meninjau file mana yang akan disalin atau dihapus, sehingga percobaan ulang tidak memberi kejutan.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menjalankan ulang job Cloudinary dengan konkurensi lebih rendah di RcloneView" class="img-large img-center" />

## Verifikasi dengan Folder Compare

Setelah dijalankan ulang, buka Compare dengan folder lokal di satu sisi dan Cloudinary di sisi lain. Filter file left-only, right-only, dan different untuk melihat apa yang masih hilang atau tidak cocok, lalu salin hanya item tersebut alih-alih mengulang seluruh job.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare yang mencantumkan file yang hilang di Cloudinary" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Periksa ulang remote Cloudinary di Remote Manager dan pastikan folder root tampil.
3. Periksa Job History dan aktifkan logging DEBUG untuk job yang gagal.
4. Turunkan konkurensi, jalankan Dry Run, jalankan ulang, dan konfirmasi hasilnya dengan Folder Compare.

Begitu penyebabnya terlihat di log dan perbandingan, kegagalan Cloudinary menjadi perbaikan yang singkat dan dapat diulang.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Cloudinary — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-cloudinary-cloud-sync-backup-rcloneview)
- [Perbaiki Error Sinkronisasi SugarSync dengan RcloneView](https://rcloneview.com/support/blog/fix-sugarsync-sync-errors-rcloneview)
- [Catat dan Debug Transfer Cloud — Atasi Masalah di RcloneView](https://rcloneview.com/support/blog/log-debug-troubleshoot-transfers-rcloneview)

<CloudSupportGrid />
