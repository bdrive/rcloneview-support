---
slug: fix-cloud-transfer-stalled-progress-rcloneview
title: "Mengatasi Progres Transfer Cloud yang Macet — Cara Memperbaikinya dengan RcloneView"
authors:
  - tayson
description: "Perbaiki transfer cloud yang macet atau berhenti di RcloneView — diagnosis pekerjaan sinkronisasi yang tersendat, atasi timeout, dan mulai ulang transfer tanpa kehilangan data."
keywords:
  - cloud transfer stuck
  - sync stalled fix
  - RcloneView transfer freeze
  - cloud upload stuck
  - fix stalled sync
  - rclone transfer timeout
  - cloud backup not progressing
  - resolve frozen transfer
  - cloud transfer hang
  - rclone timeout recovery
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengatasi Progres Transfer Cloud yang Macet — Cara Memperbaikinya dengan RcloneView

> Transfer yang menunjukkan 99% selama berjam-jam menandakan masalah mendasar tertentu — RcloneView memberi Anda alat pemantauan dan kontrol untuk mendiagnosis kemacetan tersebut dan memulai ulang dengan bersih tanpa kehilangan data.

Transfer cloud yang macet menjelang selesai, atau pekerjaan sinkronisasi yang berjalan tanpa henti tanpa pernah selesai, adalah salah satu masalah manajemen cloud yang paling mengganggu. Transfer yang macet biasanya disebabkan oleh file besar yang mencapai batas timeout API, gangguan jaringan yang tidak dapat dipulihkan oleh logika percobaan ulang (retry) rclone, atau pembatasan (throttling) dari sisi penyedia layanan yang menyebabkan koneksi menggantung. RcloneView menampilkan apa yang sedang terjadi dan memungkinkan Anda melakukan intervensi secara tepat.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mendiagnosis Kemacetan

Buka tab **Transferring** RcloneView di Info View bagian bawah. Panel ini menampilkan pekerjaan yang sedang aktif dengan progres secara real-time: kecepatan transfer, jumlah file, dan file spesifik yang sedang diproses. Kemacetan akan langsung terlihat di sini — kecepatan turun menjadi 0 B/s sementara file tertentu tidak menunjukkan perubahan progres.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView Transferring tab showing a stalled cloud transfer" class="img-large img-center" />

Beralih ke tab **Log** untuk melihat pesan error. Penyebab kemacetan yang umum muncul di sini beserta stempel waktunya:
- **"too many requests"** — pembatasan tingkat permintaan (rate limiting) API sedang membatasi transfer
- **"connection reset by peer"** — gangguan jaringan memutus sesi yang sedang aktif
- **"EOF"** atau pesan timeout — penyedia layanan menutup koneksi saat pengunggahan file besar berlangsung

Untuk file yang sangat besar (file video berukuran multi-GB, dump basis data), masalahnya sering kali adalah timeout sesi di sisi penyedia layanan selama proses penggabungan (assembly) unggahan multipart. Unggahan sebenarnya sudah selesai, tetapi sesi penyedia layanan berakhir sebelum mengonfirmasi bagian-bagian yang telah selesai, sehingga menyebabkan rclone menunggu tanpa batas waktu.

## Memulihkan Transfer yang Macet

Batalkan pekerjaan yang macet dengan mengklik **Cancel** pada pekerjaan aktif di tab Transferring. Pekerjaan sinkronisasi dan penyalinan RcloneView dirancang untuk dapat dimulai ulang dengan aman — saat Anda menjalankan pekerjaan yang sama lagi, rclone akan membandingkan apa yang sudah ada di tujuan dan melewati file yang berhasil ditransfer. Hanya file yang macet (dan file yang belum mulai) yang akan dicoba ulang.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Canceling and restarting a stalled transfer job in RcloneView" class="img-large img-center" />

Untuk kemacetan yang terus terjadi pada file besar tertentu ke backend yang kompatibel dengan S3, tingkatkan ukuran chunk di pengaturan flag rclone global RcloneView (Settings > Embedded Rclone > Global Rclone Flags): tambahkan `--s3-chunk-size 256M` untuk mengurangi jumlah total panggilan API yang diperlukan untuk penggabungan file besar.

## Mencegah Kemacetan di Masa Mendatang

Atur jumlah percobaan ulang di pengaturan Job (Step 2: Advanced Settings > **Retry entire sync if fails**) menjadi 3 atau lebih — ini memastikan masalah jaringan yang bersifat sementara memicu percobaan ulang otomatis alih-alih kegagalan pekerjaan secara langsung. Untuk transfer melalui koneksi yang lambat atau tidak stabil (VPN, hotspot seluler), mengurangi **Number of file transfers** (jumlah transfer bersamaan) mengurangi kontensi pada koneksi tersebut.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing recovered transfers after stall resolution in RcloneView" class="img-large img-center" />

Tab **Job History** menunjukkan pola dari waktu ke waktu — jika pekerjaan yang sama secara konsisten macet pada waktu tertentu dalam sehari, penyebabnya kemungkinan besar adalah pembatasan tingkat permintaan dari sisi penyedia layanan pada jam sibuk. Menyesuaikan jadwal Anda ke waktu di luar jam sibuk akan menyelesaikan masalah ini tanpa perlu mengubah konfigurasi apa pun.

## Memulai

1. Pantau transfer di **tab Transferring** — perhatikan kecepatan 0 B/s pada file tertentu.
2. Periksa **tab Log** untuk pesan error yang menunjukkan penyebab utamanya (timeout, rate limit, network reset).
3. Batalkan dan mulai ulang pekerjaan tersebut — rclone akan melanjutkan dari titik terakhir, melewati file yang sudah selesai.
4. Tingkatkan jumlah percobaan ulang dan sesuaikan ukuran chunk di Advanced Settings untuk mencegah kemacetan di masa mendatang.

Transfer yang macet hampir selalu dapat dipulihkan — kuncinya adalah mengidentifikasi apakah penyebabnya berasal dari sisi penyedia layanan, sisi jaringan, atau terkait konfigurasi, lalu menerapkan perbaikan yang tepat sasaran.

---

**Panduan Terkait:**

- [Memulihkan Transfer Cloud yang Terputus atau Gagal dengan RcloneView](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)
- [Mengatasi Unggahan Cloud yang Lambat — Optimasi Kecepatan dengan RcloneView](https://rcloneview.com/support/blog/fix-slow-cloud-uploads-speed-optimization-rcloneview)
- [Pemantauan Riwayat Pekerjaan dan Log Transfer dengan RcloneView](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
