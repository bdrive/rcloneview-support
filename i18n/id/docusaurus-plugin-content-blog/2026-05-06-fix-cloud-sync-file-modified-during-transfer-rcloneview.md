---
slug: fix-cloud-sync-file-modified-during-transfer-rcloneview
title: "Perbaiki File yang Dimodifikasi Selama Transfer — Selesaikan Konflik Sinkronisasi Cloud dengan RcloneView"
authors:
  - tayson
description: "Selesaikan error sinkronisasi cloud yang disebabkan oleh file yang dimodifikasi saat sedang ditransfer di RcloneView. Pelajari cara menangani konflik file-in-use, unggahan sebagian, dan inkonsistensi sinkronisasi."
keywords:
  - perbaiki file yang dimodifikasi selama transfer cloud
  - resolusi konflik sinkronisasi cloud RcloneView
  - error file dimodifikasi selama unggah
  - error rclone file in use
  - perbaikan transfer sinkronisasi cloud yang tidak lengkap
  - konflik sinkronisasi RcloneView
  - troubleshooting file terkunci selama sinkronisasi
  - perbaikan unggahan sebagian sinkronisasi cloud
  - rclone dimodifikasi selama transfer
  - resolusi konflik file pencadangan cloud
tags:
  - troubleshooting
  - tips
  - data-recovery
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki File yang Dimodifikasi Selama Transfer — Selesaikan Konflik Sinkronisasi Cloud dengan RcloneView

> Saat file berubah ketika RcloneView sedang menyinkronkannya, transfer bisa gagal, menghasilkan unggahan sebagian, atau membuat salinan cloud yang tidak konsisten — berikut cara mendeteksi dan menyelesaikan setiap skenario.

Sumber umum error sinkronisasi cloud adalah file yang dimodifikasi, terkunci, atau sedang ditulis saat proses sinkronisasi berlangsung. File database yang sedang ditulis oleh aplikasi, dokumen yang terbuka di Office, atau file log yang aktif ditambahkan oleh layanan yang berjalan, semuanya dapat menyebabkan unggahan sebagian atau kegagalan transfer. RcloneView menampilkan error ini dengan jelas di log-nya, dan rclone menyediakan beberapa flag untuk menanganinya dengan baik.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Identifikasi Error File-In-Use di Log RcloneView

Saat file terkunci atau dimodifikasi selama sinkronisasi, rclone biasanya melaporkan error seperti:
- `Failed to copy: file changed under us - trying again`
- `source file is being written to`
- `partial read detected`

Di RcloneView, error ini muncul di **tab Log** di bagian bawah antarmuka. Setelah tugas sinkronisasi selesai, periksa log untuk entri `ERROR` yang menunjukkan konflik modifikasi file. Tampilan **Job History** juga menampilkan status `Errored` untuk tugas di mana ada file yang gagal ditransfer.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing file transfer errors in RcloneView" class="img-large img-center" />

## Gunakan --ignore-errors dan Logika Percobaan Ulang

Secara default, tugas sinkronisasi RcloneView dikonfigurasi dengan jumlah percobaan ulang (default: 3) yang secara otomatis mencoba kembali transfer yang gagal. Untuk file yang terkunci sementara (misalnya, file yang sebentar dibuka dan ditutup oleh aplikasi), percobaan ulang sering berhasil pada percobaan berikutnya.

Untuk tugas sinkronisasi di mana beberapa file secara konsisten terkunci (misalnya, file database yang aktif), tambahkan `--ignore-errors` ke flag rclone kustom dalam konfigurasi tugas sinkronisasi Anda. Ini memberi tahu rclone untuk terus menyinkronkan file lain meskipun ada yang gagal, menyelesaikan sebanyak mungkin bagian sinkronisasi dan mencatat kegagalan untuk ditinjau.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring sync job settings to handle file-in-use errors in RcloneView" class="img-large img-center" />

## Kecualikan File Aplikasi Aktif dari Sinkronisasi

Perbaikan jangka panjang terbaik untuk konflik file-in-use adalah mengecualikan file yang selalu digunakan secara aktif dari cakupan tugas sinkronisasi. Pengaturan filter RcloneView (Langkah 3 dalam wizard sinkronisasi) mendukung aturan pengecualian kustom:

- Kecualikan database SQLite: tambahkan `*.db-journal` dan `*.db-wal` untuk mengecualikan write-ahead log yang aktif
- Kecualikan file sementara Office: tambahkan `~$*` untuk mengecualikan file kunci Word/Excel
- Kecualikan file log yang sedang ditulis: tambahkan `*.log` atau pola tertentu

Filter ini mencegah RcloneView mencoba menyinkronkan file yang dipastikan sedang digunakan selama tugas berlangsung, sehingga menghilangkan kategori error ini sepenuhnya.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Setting up file exclusion filters to avoid sync conflicts in RcloneView" class="img-large img-center" />

## Jalankan Dry Run untuk Memverifikasi Efektivitas Filter

Setelah menambahkan filter pengecualian, jalankan **dry run** dari tugas sinkronisasi untuk memastikan file yang difilter tidak lagi muncul dalam daftar transfer. Output dry run menampilkan setiap file yang akan disalin — verifikasi bahwa file database aktif, file kunci, dan dokumen yang terbuka tidak ada dalam daftar sebelum menjalankan sinkronisasi sebenarnya.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using dry run to verify filtered file list before syncing in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Setelah sinkronisasi gagal, periksa tab Log dan Job History untuk error modifikasi file.
3. Tambahkan filter pengecualian kustom di wizard sinkronisasi untuk file yang selalu digunakan.
4. Jalankan dry run untuk memastikan filter Anda bekerja, lalu jalankan kembali tugas sinkronisasi.

Menangani konflik file-in-use di RcloneView adalah tentang memahami file mana yang harus dikecualikan dan cara mengonfigurasi percobaan ulang — setelah dikonfigurasi dengan benar, tugas sinkronisasi Anda akan berjalan lancar setiap saat.

---

**Panduan Terkait:**

- [Perbaiki File yang Hilang Setelah Transfer Sinkronisasi Cloud — Selesaikan dengan RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)
- [Aturan Filter dan Sinkronisasi Selektif di RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Pulihkan Transfer yang Terputus atau Gagal dengan RcloneView](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)

<CloudSupportGrid />
