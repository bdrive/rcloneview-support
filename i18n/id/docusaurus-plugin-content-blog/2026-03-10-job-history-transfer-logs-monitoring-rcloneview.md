---
slug: job-history-transfer-logs-monitoring-rcloneview
title: "Lacak Transfer Cloud dengan Riwayat Job dan Log — Pantau Setiap Sinkronisasi dan Pencadangan di RcloneView"
authors:
  - tayson
description: "Pantau setiap job sinkronisasi, penyalinan, dan pencadangan cloud dengan riwayat job dan log transfer RcloneView. Pantau keberhasilan, kegagalan, dan performa dari waktu ke waktu."
keywords:
  - riwayat transfer cloud
  - log job sinkronisasi
  - pemantauan pencadangan cloud
  - log transfer cloud
  - riwayat job rclone
  - pemantauan sinkronisasi cloud
  - pelacakan job pencadangan
  - status transfer cloud
  - log transfer rclone
  - alat pemantauan job cloud
tags:
  - monitoring
  - job-history
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Lacak Transfer Cloud dengan Riwayat Job dan Log — Pantau Setiap Sinkronisasi dan Pencadangan di RcloneView

> Anda menjadwalkan pencadangan minggu lalu. Apakah benar-benar berjalan? Apakah selesai dengan sukses? Berapa banyak file yang ditransfer? Tanpa riwayat job, Anda hanya menerka-nerka. Dengan RcloneView, setiap job meninggalkan jejak.

Menyiapkan sinkronisasi cloud adalah langkah pertama. Mengetahui bahwa itu berjalan dengan andal adalah langkah kedua — dan bisa dibilang lebih penting. Riwayat job RcloneView melacak setiap eksekusi: kapan dijalankan, berapa lama waktunya, berapa banyak file yang ditransfer, dan apakah terjadi error.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Riwayat Job Penting

### Kegagalan diam-diam

Kegagalan pencadangan terburuk adalah yang tidak Anda ketahui. Masalah diam-diam yang umum:

- **Token OAuth kedaluwarsa** — Penyedia cloud mencabut akses, job gagal tanpa peringatan.
- **Disk penuh** — Tujuan kehabisan ruang di tengah transfer.
- **Rate limit** — Penyedia membatasi transfer, beberapa file terlewat.
- **Timeout jaringan** — Konektivitas terputus-putus menyebabkan transfer sebagian.

Tanpa riwayat job, masalah ini tidak disadari sampai Anda perlu memulihkan data — dan menemukan bahwa "pencadangan" Anda sudah berumur berbulan-bulan.

### Kepatuhan dan audit

Beberapa industri membutuhkan bukti terdokumentasi bahwa pencadangan telah dilakukan. Riwayat job menyediakan:

- Timestamp untuk setiap eksekusi job.
- Jumlah file dan volume transfer.
- Status berhasil/gagal.
- Detail error untuk pemecahan masalah.

## Riwayat Job di RcloneView

### Lihat eksekusi sebelumnya

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history view" class="img-large img-center" />

Setiap entri menampilkan:

- **Nama job** — Job sinkronisasi/salin/pindah mana yang dijalankan.
- **Waktu mulai** — Kapan eksekusi dimulai.
- **Durasi** — Berapa lama waktunya.
- **Status** — Berhasil, sebagian, atau gagal.
- **File yang ditransfer** — Jumlah file yang dipindahkan.
- **Volume data** — Total byte yang ditransfer.
- **Error** — Jumlah error (jika ada).

### Kenali tren

Seiring waktu, riwayat job mengungkap pola:

- **Durasi meningkat** — Dataset Anda bertambah besar atau performa menurun.
- **Kegagalan sesekali** — Masalah jaringan atau penyedia pada hari-hari tertentu.
- **Transfer nol** — Tidak ada perubahan (wajar untuk sinkronisasi incremental) atau job tidak berfungsi.
- **Lonjakan error** — Rate limit, masalah izin, atau penyimpanan penuh.

## Pemantauan Transfer Real-Time

Saat job sedang berjalan, pantau progresnya secara langsung:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring" class="img-large img-center" />

Pemantauan langsung menampilkan:

- **Kecepatan saat ini** — MB/s atau GB/s.
- **Transfer aktif** — Jumlah operasi file paralel.
- **Progres** — Persentase selesai.
- **ETA** — Perkiraan waktu tersisa.
- **Error** — Jumlah error secara real-time.

## Notifikasi untuk Kegagalan

v1.3 menambahkan notifikasi Slack, Discord, dan Telegram. Konfigurasikan peringatan agar Anda langsung tahu saat:

- Job terjadwal gagal.
- Job selesai dengan error.
- Job selesai dengan sukses (konfirmasi opsional).

Inilah perbedaan antara "pencadangan saya mungkin sudah berjalan" dan "pencadangan saya pasti sudah berjalan — saya mendapat pesan Slack."

## Pemecahan Masalah dengan Log

Saat job gagal, log transfer memberi tahu Anda alasan pastinya:

- **403 Forbidden** — Masalah rate limit atau izin.
- **404 Not Found** — File sumber dihapus selama transfer.
- **429 Too Many Requests** — Pembatasan oleh penyedia.
- **Timeout** — Masalah konektivitas jaringan.
- **Disk full** — Tujuan kehabisan ruang.

## Praktik Terbaik

### Tinjau riwayat job setiap minggu

Luangkan 2 menit setiap Senin untuk meninjau eksekusi job minggu sebelumnya. Tangkap masalah sebelum menjadi krisis.

### Siapkan peringatan kegagalan

Jangan mengandalkan pemeriksaan manual. Konfigurasikan notifikasi Slack atau Discord untuk kegagalan job.

### Verifikasi setelah error

Ketika job melaporkan error, tindak lanjuti dengan Folder Comparison untuk mengidentifikasi dengan tepat file mana yang hilang atau berbeda:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify after job errors" class="img-large img-center" />

### Coba ulang transfer yang gagal

Fitur retry v1.3 dapat secara otomatis menjalankan ulang transfer file yang gagal. Untuk kegagalan yang terus berulang, selidiki akar masalahnya menggunakan log.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Buat dan jadwalkan job sinkronisasi/pencadangan Anda**.
3. **Pantau eksekusi** melalui riwayat job.
4. **Siapkan notifikasi** untuk peringatan kegagalan.
5. **Tinjau setiap minggu** — percaya tapi tetap verifikasi.

Pencadangan yang tidak Anda pantau adalah pencadangan yang tidak bisa Anda percayai.

---

**Panduan Terkait:**

- [Membuat Job Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Penjadwalan Job](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Membandingkan Isi Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
