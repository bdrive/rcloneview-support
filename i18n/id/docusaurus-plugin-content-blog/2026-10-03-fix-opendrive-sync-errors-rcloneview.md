---
slug: fix-opendrive-sync-errors-rcloneview
title: "Perbaiki Error Sinkronisasi OpenDrive — Masalah Login, Upload, dan Listing Teratasi dengan RcloneView"
authors:
  - kai
description: "Atasi error sinkronisasi OpenDrive seperti login gagal, upload terputus, dan file hilang menggunakan riwayat job, log, dan Folder Compare di RcloneView."
keywords:
  - perbaiki error sinkronisasi OpenDrive
  - error rclone OpenDrive
  - login OpenDrive gagal
  - upload OpenDrive gagal
  - pemecahan masalah OpenDrive
  - RcloneView OpenDrive
  - remote OpenDrive rclone
  - pemecahan masalah sinkronisasi cloud
  - OpenDrive GUI
tags:
  - RcloneView
  - opendrive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Sinkronisasi OpenDrive — Masalah Login, Upload, dan Listing Teratasi dengan RcloneView

> Saat sinkronisasi OpenDrive gagal, riwayat job, log, dan Folder Compare di RcloneView menunjukkan apakah penyebabnya kredensial, beban transfer, atau file yang tidak pernah sampai.

Sinkronisasi yang gagal jarang menjelaskan dirinya sendiri. Sebuah job bisa langsung berhenti, selesai dengan beberapa file hilang, atau meninggalkan folder yang tampak tidak lengkap. Alih-alih menjalankan ulang secara membabi buta, Anda bisa membaca riwayat job RcloneView, mengaktifkan logging DEBUG, dan membandingkan kedua sisi untuk menemukan penyebab sebenarnya. RcloneView me-mount dan menyinkronkan lebih dari 90 penyedia dari satu jendela, di Windows, macOS, dan Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Singkirkan Masalah Koneksi dan Kredensial

Jika sebuah job gagal dalam hitungan detik, curigai remote itu sendiri. Buka Remote Manager dari tab Remote, edit remote OpenDrive, dan masukkan ulang detail akun. Lalu buka remote tersebut di panel Explorer dan telusuri folder root. Jika daftarnya tampil normal, koneksi sehat dan kegagalan ada di tempat lain.

Anda juga dapat menjalankan `rclone about "remote:"` di tab Terminal bawaan, dengan mengganti `remote` dengan nama remote Anda, untuk memastikan akun merespons.

<img src="/support/images/en/blog/new-remote.png" alt="Mengedit remote OpenDrive di Remote Manager RcloneView" class="img-large img-center" />

## Baca Riwayat Job dan Aktifkan Log DEBUG

Buka Job History dan lihat status, durasi, dan jumlah file dari proses yang gagal. Job yang berhenti dengan error di tengah jalan biasanya menunjuk ke file tertentu atau masalah beban transfer, bukan login yang salah.

Untuk melihat pesan persis per file, buka Settings > Embedded Rclone, aktifkan logging rclone, atur level ke DEBUG, lalu restart rclone bawaan. Reproduksi kegagalannya, lalu baca log di tab Log atau di folder log yang Anda atur.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Riwayat job RcloneView dengan job OpenDrive yang error" class="img-large img-center" />

## Kurangi Beban pada Transfer yang Terputus

Upload yang gagal secara sporadis sering membaik ketika lebih sedikit file yang dipindahkan sekaligus. Pada Langkah 2 wizard sinkronisasi, turunkan jumlah transfer file dan equality checker (panduan untuk backend yang lambat adalah 4 atau kurang). Biarkan "Retry entire sync if fails" di angka 3 agar kegagalan sementara dicoba ulang secara otomatis.

Gunakan Dry Run sebelum menjalankan ulang untuk memastikan daftar file yang akan disalin atau dihapus sesuai harapan Anda.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menjalankan ulang job OpenDrive dengan konkurensi lebih rendah di RcloneView" class="img-large img-center" />

## Verifikasi dengan Folder Compare

Setelah menjalankan ulang, buka Compare dengan folder lokal di satu sisi dan OpenDrive di sisi lain. Filter file left-only, right-only, dan different untuk melihat dengan tepat apa yang masih hilang atau tidak cocok, lalu salin hanya item tersebut alih-alih mengulang seluruh job.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare menampilkan file yang hilang di OpenDrive" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Masukkan ulang kredensial OpenDrive di Remote Manager dan pastikan folder root tampil.
3. Periksa Job History dan aktifkan logging DEBUG untuk job yang gagal.
4. Turunkan konkurensi, jalankan Dry Run, jalankan ulang, dan konfirmasi dengan Folder Compare.

Setelah penyebabnya diketahui dari log dan perbandingan, kegagalan OpenDrive menjadi perbaikan yang singkat dan dapat diulang.

---

**Panduan Terkait:**

- [Kelola Penyimpanan OpenDrive — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-opendrive-cloud-sync-backup-rcloneview)
- [Perbaiki Error Sinkronisasi Gofile dengan RcloneView](https://rcloneview.com/support/blog/fix-gofile-sync-errors-rcloneview)
- [Perbaiki Sinkronisasi Cloud yang Macet dan Menggantung dengan RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-stuck-hanging-rcloneview)

<CloudSupportGrid />
