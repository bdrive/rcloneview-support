---
slug: fix-files-com-sync-errors-rcloneview
title: "Perbaiki Error Sinkronisasi Files.com — Masalah Koneksi, Transfer, dan File Hilang Teratasi dengan RcloneView"
authors:
  - steve
description: "Perbaiki error sinkronisasi Files.com dengan RcloneView: periksa ulang remote, baca riwayat job dan log DEBUG, turunkan konkurensi, lalu verifikasi hasil dengan Folder Compare."
keywords:
  - perbaiki error sinkronisasi Files.com
  - sinkronisasi Files.com gagal
  - error rclone Files.com
  - pemecahan masalah RcloneView
  - file hilang di Files.com
  - log DEBUG rclone
  - perbandingan folder
  - pemecahan masalah sinkronisasi cloud
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Sinkronisasi Files.com — Masalah Koneksi, Transfer, dan File Hilang Teratasi dengan RcloneView

> Saat job Files.com gagal, riwayat job, log DEBUG, dan Folder Compare di RcloneView menunjukkan apakah penyebabnya adalah remote, beban transfer, atau file yang tidak pernah sampai.

Sinkronisasi Files.com yang berhenti dengan error yang tidak jelas, atau selesai dengan folder yang tampak tidak lengkap, sulit didiagnosis hanya dari command line. RcloneView menyatukan pemeriksaan remote, catatan job, log, dan perbandingan berdampingan dalam satu jendela, sehingga Anda dapat bekerja berdasarkan bukti, bukan menjalankan ulang secara asal. RcloneView juga menyinkronkan dan membandingkan folder, dengan sinkronisasi dasar dan perbandingan folder tersedia pada lisensi FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pastikan Remote Masih Terhubung

Jika job gagal dalam hitungan detik, curigai remote sebelum datanya. Buka Remote Manager dari tab Remote, edit remote Files.com, dan masukkan ulang kredensial jika telah berubah atau kedaluwarsa. Lalu buka remote tersebut di panel Explorer dan telusuri folder root. Jika daftar tampil normal, koneksi sehat dan masalahnya ada di tempat lain.

Di tab Terminal bawaan, Anda juga dapat menjalankan `rclone about "remote:"`, dengan mengganti `remote` dengan nama remote Anda, sebagai pemeriksaan cepat apakah akun merespons.

<img src="/support/images/en/blog/new-remote.png" alt="Mengedit remote Files.com di Remote Manager RcloneView" class="img-large img-center" />

## Baca Riwayat Job dan Aktifkan Logging DEBUG

Buka Job History dan periksa status, durasi, dan jumlah file dari proses yang gagal. Job yang error di tengah jalan biasanya menunjuk ke file tertentu atau beban transfer, bukan kredensial.

Untuk pesan persis per file, buka Settings > Embedded Rclone, aktifkan logging rclone, atur level ke DEBUG, lalu klik Restart Embedded Rclone. Reproduksi kegagalan dan baca log di tab Log atau di folder log yang Anda konfigurasi.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Riwayat job RcloneView yang menampilkan job Files.com yang error" class="img-large img-center" />

## Turunkan Konkurensi dan Pratinjau Proses Ulang

Kegagalan yang terjadi sesekali sering mereda saat lebih sedikit file yang dipindahkan sekaligus. Di Langkah 2 wizard sinkronisasi, kurangi jumlah transfer file dan atur equality checkers ke 4 atau kurang, yang merupakan panduan untuk backend lambat. Pertahankan "Retry entire sync if fails" pada 3 agar kegagalan sementara dicoba ulang hingga tiga kali.

Sebelum menjalankan ulang, gunakan Dry Run untuk meninjau file mana yang akan disalin atau dihapus, sehingga percobaan ulang tidak memberi kejutan.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menjalankan ulang job Files.com dengan konkurensi lebih rendah di RcloneView" class="img-large img-center" />

## Verifikasi dengan Folder Compare

Setelah dijalankan ulang, buka Compare dengan folder lokal di satu sisi dan Files.com di sisi lain. Filter file left-only, right-only, dan different untuk melihat apa yang masih hilang atau tidak cocok, lalu salin hanya item tersebut alih-alih mengulang seluruh job.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare yang mencantumkan file yang hilang di Files.com" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Periksa ulang remote Files.com di Remote Manager dan pastikan folder root tampil.
3. Periksa Job History dan aktifkan logging DEBUG untuk job yang gagal.
4. Turunkan konkurensi, jalankan Dry Run, jalankan ulang, dan konfirmasi hasilnya dengan Folder Compare.

Begitu penyebabnya terlihat di log dan perbandingan, kegagalan Files.com menjadi perbaikan yang singkat dan dapat diulang.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Files.com — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-files-com-cloud-sync-backup-rcloneview)
- [Perbaiki Error Sinkronisasi SugarSync dengan RcloneView](https://rcloneview.com/support/blog/fix-sugarsync-sync-errors-rcloneview)
- [Catat dan Debug Transfer Cloud — Atasi Masalah di RcloneView](https://rcloneview.com/support/blog/log-debug-troubleshoot-transfers-rcloneview)

<CloudSupportGrid />
