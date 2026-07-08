---
slug: log-debug-troubleshoot-transfers-rcloneview
title: "Catat dan Debug Transfer Cloud — Atasi Masalah di RcloneView"
authors:
  - tayson
description: "Kuasai fitur logging dan debug RcloneView untuk mendiagnosis masalah transfer. Pelajari cara membaca log, mengaktifkan mode debug, dan menyelesaikan masalah sinkronisasi cloud secara sistematis."
keywords:
  - log transfer cloud
  - mode debug masalah transfer
  - pemecahan masalah transfer
  - logging rcloneview
  - debug sinkronisasi cloud
  - diagnosis error transfer
  - konfigurasi logging rclone
  - atasi masalah transfer cloud
tags:
  - RcloneView
  - feature
  - troubleshooting
  - monitoring
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Catat dan Debug Transfer Cloud — Atasi Masalah di RcloneView

> Kegagalan transfer membuat pengguna frustrasi, tetapi pesan error yang misterius membuat mereka lebih frustrasi lagi. Fitur logging dan debug RcloneView yang lengkap mengungkapkan dengan tepat apa yang salah dan cara memperbaikinya.

Sebuah transfer file berhenti di tengah jalan dengan pesan timeout yang membingungkan. Sebuah job sinkronisasi melaporkan berhasil tetapi file tetap tidak sinkron. Pencadangan terjadwal Anda terlewat tanpa peringatan. Tanpa visibilitas mengenai apa yang sebenarnya terjadi, pemecahan masalah menjadi tebak-tebakan. Kemampuan logging dan debug RcloneView mengubah ketidakjelasan menjadi kejelasan, menunjukkan dengan tepat file mana yang berhasil, mana yang gagal, dan alasan pastinya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengaktifkan Mode Debug di RcloneView

Mode debug menampilkan setiap operasi yang dilakukan RcloneView dan rclone. Akses melalui menu Preferences: Logging > Debug Level, lalu atur ke "DEBUG". Ini menangkap permintaan jaringan, alur autentikasi, perbandingan file, dan pemeriksaan izin pada tingkat verbositas maksimum.

Setelah diaktifkan, log RcloneView mencatat setiap transaksi. Jalankan transfer bermasalah Anda sekarang. Setiap panggilan API, pemeriksaan file, dan keputusan akan didokumentasikan. Verbositas ini membantu mendiagnosis masalah yang halus: masalah waktu autentikasi, penolakan izin, keanehan API khusus penyedia, kegagalan jaringan pada titik tertentu.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView preferences and logging configuration" class="img-large img-center" />

## Membaca dan Menafsirkan Log RcloneView

RcloneView menyimpan log di direktori konfigurasi pengguna Anda. Di Windows, temukan di `%APPDATA%/RcloneView/logs/`. Di Linux/Mac, lihat di `~/.config/rcloneview/logs/`. Setiap job membuat file log dengan stempel waktu. Buka log yang relevan di editor teks apa pun.

Bagian penting yang perlu diperiksa: "Authentication" menunjukkan apakah kredensial bekerja dengan benar. "File Enumeration" mengungkapkan file mana yang ditemukan RcloneView beserta propertinya. Log "Transfer" menunjukkan unggahan/unduhan file individual dengan jumlah byte dan durasi. Bagian "Errors" menyoroti masalah: izin ditolak, kuota tidak mencukupi, ketidakcocokan checksum, kejadian timeout.

Cari kata kunci yang sesuai dengan masalah Anda. Mencari error timeout? Cari "timeout" atau "deadline exceeded". Menyelidiki kegagalan izin? Cari "permission denied" atau "access denied". Sebagian besar error berulang secara konsisten, muncul beberapa kali dalam transfer yang sama.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing detailed transfer records" class="img-large img-center" />

## Debugging Lanjutan: Mode Verbose dan Trace Logging

Ketika mode debug standar kurang detail, aktifkan mode verbose (Logging > Verbose) bersamaan dengan tingkat debug. Mode verbose menampilkan header HTTP, isi permintaan, dan respons API mentah. Gunakan ini saat menyelidiki masalah khusus penyedia: mengapa Google Drive menolak file ini? Mengapa S3 membatasi laju (rate-limit) transfer Anda?

Untuk diagnosis tingkat ahli, aktifkan mode Trace (tingkat logging tertinggi). Trace menangkap setiap panggilan sistem, operasi memori, dan detail paket jaringan. Ini akan membuat file log membengkak dengan cepat, tetapi mengungkapkan masalah mendalam pada stack jaringan atau interaksi sistem file. Simpan mode trace untuk masalah yang dapat direproduksi dalam kondisi terkontrol.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView job configuration with logging options" class="img-large img-center" />

## Masalah Umum yang Terungkap oleh Log

Log menunjukkan masalah yang berulang dengan tepat. Error "Insufficient quota" berarti penyimpanan cloud Anda pada penyedia sudah penuh. "Rate limit exceeded" menandakan Anda mencapai batas panggilan API—kurangi jumlah thread paralel atau perbesar jeda antar permintaan. "Checksum mismatch" menunjukkan kerusakan file saat transit atau masalah caching pada penyedia.

Timeout jaringan muncul sebagai "context deadline exceeded" atau "connection reset by peer"—naikkan nilai timeout atau kurangi kecepatan transfer. Error izin "403 Forbidden" menandakan masalah kredensial atau izin folder yang tidak mencukupi. Setiap jenis error terpetakan ke solusi tertentu begitu Anda membaca log.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView real-time transfer monitoring with detailed metrics" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Aktifkan mode Debug melalui Preferences > Logging > Debug Level.
3. Jalankan transfer bermasalah Anda dan biarkan gagal secara alami.
4. Buka file log yang sesuai dan cari kata kunci error untuk mengidentifikasi akar masalahnya.

Berhentilah memperlakukan kegagalan transfer sebagai kotak hitam yang misterius. Logging RcloneView mengubah pemecahan masalah dari frustrasi menjadi penyelesaian masalah yang sistematis. Jawabannya ada di dalam log—Anda hanya perlu tahu di mana harus mencarinya.

---

**Panduan Terkait:**

- [Perbaiki Transfer Cloud yang Lambat — Optimalkan Kecepatan di RcloneView](https://rcloneview.com/support/blog/fix-slow-cloud-transfers-speed-rcloneview)
- [Perbaiki Sinkronisasi Cloud yang Macet atau Hang — Atasi Transfer yang Terhenti di RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-stuck-hanging-rcloneview)
- [Perbaiki Error Rate Limiting API Cloud — Atasi Pembatasan oleh Penyedia di RcloneView](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
