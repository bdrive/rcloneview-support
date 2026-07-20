---
sidebar_position: 11
description: "Lacak operasi file yang sedang berlangsung dan yang telah selesai seperti Sync, Copy, dan Delete di RcloneView menggunakan antarmuka Job Monitor."
keywords:
  - rcloneview
  - Job Monitor
  - Transfer Log
  - Rclone API Logs
  - transfer file
  - progres sinkronisasi
  - job logs
tags:
  - RcloneView
  - Job-Management
  - Monitoring
  - Transfer-log
  - Completed-log
  - API-log
  - Sync
date: 2025-06-22
author: Jay
---
# Job Monitor

RcloneView menyediakan antarmuka **Job Monitor** untuk membantu pengguna melacak, meninjau, dan mengelola status operasi file yang sedang berlangsung maupun yang telah selesai, seperti Sync, Copy, dan Delete. Antarmuka ini terdiri dari tiga tab utama:

## Tab Transfer - Job yang Sedang Berlangsung

<img src="/support/images/en/howto/rcloneview-basic/transfer-log.png" alt="transfer log" class="img-medium img-center" />
Tab ini menampilkan semua job transfer file yang sedang aktif.

**Kolom:**
- **Job**: Menunjukkan jenis operasi (misalnya, Sync, Copy, Delete).
- **Source / Destination**: Menampilkan path asal dan tujuan.
- **Received Size**: Jumlah data yang telah ditransfer / total ukuran.
- **Speed**: Kecepatan transfer saat ini.
- **Progress**: Bilah progres visual dari job yang sedang berjalan.
- **Percentage**: Persentase penyelesaian transfer.
- **Time Left**: Perkiraan waktu yang tersisa.
- **Job ID**: ID internal yang digunakan untuk merujuk job ini.
- **Cancel**: Klik ikon ❌ untuk membatalkan job yang sedang berlangsung.

## Tab Completed - Riwayat Job

<img src="/support/images/en/howto/rcloneview-basic/completed-log.png" alt="completed log" class="img-medium img-center" />
Tab ini menampilkan daftar semua job yang telah dijalankan sebelumnya beserta hasilnya.

**Kolom:**
- **Job**: Jenis operasi (Sync, Copy, Delete, dll.).
- **Source / Destination**: Path sumber dan tujuan.
- **Status**: Status hasil (misalnya, Success, Errors).
- **Started At**: Waktu mulai job.
- **Time Spent**: Total durasi job.
- **Files**: Jumlah file yang ditransfer.
- **Size**: Total ukuran data.
- **Speed**: Kecepatan transfer rata-rata.
- **Job ID**: Referensi internal job.
- **Delete**: Ikon <img src="/support/icons/delete-files.png" alt="delete files" class="inline-icon" /> untuk menghapus catatan.

## Tab Log - Log Komunikasi API

<img src="/support/images/en/howto/rcloneview-basic/log-tab.png" alt="log tab" class="img-medium img-center" />

Tab ini menampilkan log backend dari komunikasi RcloneView dengan Rclone API.

**Kolom:**
- **Time**: Stempel waktu permintaan operasi.
- **Event Type**: Level log (misalnya, INFO, ERROR).
- **Job Type**: Jenis operasi (Sync, Copy, Delete, dll.).
- **Message**: Hasil dari operasi.
- **Details**: Metadata internal tambahan (misalnya, job ID dalam format JSON).

Gunakan tab ini untuk pemecahan masalah atau meninjau interaksi pada level sistem.

:::tip
- Setiap catatan job dihubungkan antar tab melalui **Job ID**-nya.
- Log diperbarui secara otomatis secara real-time.
- Tab Completed dan Log tetap menyimpan riwayat meskipun aplikasi dimulai ulang, kecuali dihapus secara manual.
:::
