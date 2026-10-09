---
slug: fix-sugarsync-sync-errors-rcloneview
title: "Perbaiki Error Sinkronisasi SugarSync — Masalah Otorisasi, Transfer, dan File Hilang Diselesaikan dengan RcloneView"
authors:
  - morgan
description: "Atasi error sinkronisasi SugarSync seperti otorisasi gagal, transfer terputus, dan file hilang menggunakan log, riwayat job, dan Folder Compare di RcloneView."
keywords:
  - perbaiki error sinkronisasi SugarSync
  - error rclone SugarSync
  - otorisasi SugarSync gagal
  - upload SugarSync gagal
  - pemecahan masalah SugarSync
  - RcloneView SugarSync
  - remote SugarSync rclone
  - pemecahan masalah sinkronisasi cloud
  - SugarSync GUI
tags:
  - RcloneView
  - sugarsync
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Sinkronisasi SugarSync — Masalah Otorisasi, Transfer, dan File Hilang Diselesaikan dengan RcloneView

> Saat job SugarSync gagal, riwayat job, log DEBUG, dan Folder Compare di RcloneView menunjukkan apakah penyebabnya remote, beban transfer, atau file yang tidak pernah sampai.

Sinkronisasi SugarSync yang berhenti dengan error yang tidak jelas, atau selesai dengan folder yang tampak tidak lengkap, sulit didiagnosis hanya lewat command line. RcloneView menyatukan pemeriksaan remote, catatan job, log, dan perbandingan berdampingan dalam satu jendela, sehingga Anda bekerja berdasarkan bukti, bukan menjalankan ulang secara membabi buta. RcloneView melakukan mount dan sinkronisasi 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pastikan Remote Masih Terhubung

Jika job gagal dalam hitungan detik, curigai remote sebelum datanya. Buka Remote Manager dari tab Remote, edit remote SugarSync, lalu otorisasi ulang jika detail akun berubah. Setelah itu buka remote di panel Explorer dan telusuri folder root. Jika daftarnya tampil normal, koneksi sehat dan masalahnya ada di tempat lain.

Di tab Terminal bawaan, Anda juga dapat menjalankan `rclone about "remote:"` (ganti `remote` dengan nama remote Anda) untuk memeriksa dengan cepat apakah akun merespons.

<img src="/support/images/en/blog/new-remote.png" alt="Mengedit remote SugarSync di Remote Manager RcloneView" class="img-large img-center" />

## Baca Riwayat Job dan Aktifkan Logging DEBUG

Buka Job History dan periksa status, durasi, serta jumlah file dari eksekusi yang gagal. Job yang error di tengah jalan biasanya menunjuk pada file tertentu atau beban transfer, bukan kredensial.

Untuk melihat pesan persis per file, buka Settings > Embedded Rclone, aktifkan logging rclone, atur level ke DEBUG, lalu klik Restart Embedded Rclone. Reproduksi kegagalannya dan baca log di tab Log atau di folder log yang Anda atur.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Riwayat job RcloneView yang menampilkan job SugarSync yang error" class="img-large img-center" />

## Turunkan Konkurensi dan Pratinjau Eksekusi Ulang

Kegagalan upload yang terputus-putus sering mereda ketika lebih sedikit file yang dipindahkan sekaligus. Pada langkah 2 wizard sinkronisasi, kurangi jumlah transfer file dan atur equality checkers menjadi 4 atau kurang, sesuai panduan untuk backend yang lambat. Biarkan "Retry entire sync if fails" di angka 3 agar kegagalan sementara dicoba ulang hingga tiga kali.

Sebelum menjalankan ulang, gunakan Dry Run untuk meninjau file yang akan disalin atau dihapus, sehingga percobaan ulang tidak memberi kejutan.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menjalankan ulang job SugarSync dengan konkurensi yang dikurangi di RcloneView" class="img-large img-center" />

## Verifikasi dengan Folder Compare

Setelah dijalankan ulang, buka Compare dengan folder lokal di satu sisi dan SugarSync di sisi lain. Filter file yang hanya ada di kiri, hanya di kanan, dan yang berbeda untuk melihat apa yang masih hilang atau tidak cocok, lalu salin hanya item tersebut alih-alih mengulang seluruh job.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare yang menampilkan file yang hilang di SugarSync" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Otorisasi ulang remote SugarSync di Remote Manager dan pastikan folder root tampil.
3. Periksa Job History dan aktifkan logging DEBUG untuk job yang gagal.
4. Turunkan konkurensi, jalankan Dry Run, jalankan ulang, dan konfirmasi hasilnya dengan Folder Compare.

Setelah penyebabnya terlihat di log dan perbandingan, kegagalan SugarSync menjadi perbaikan yang singkat dan dapat diulang.

---

**Panduan Terkait:**

- [Kelola Penyimpanan SugarSync — Sinkronisasi dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-sugarsync-cloud-sync-backup-rcloneview)
- [Migrasikan SugarSync ke Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/migrate-sugarsync-to-backblaze-b2-rcloneview)
- [Perbaiki Error Sinkronisasi OpenDrive dengan RcloneView](https://rcloneview.com/support/blog/fix-opendrive-sync-errors-rcloneview)

<CloudSupportGrid />
