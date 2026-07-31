---
slug: fix-idrive-e2-sync-errors-rcloneview
title: "Memperbaiki Error Sinkronisasi IDrive e2 — Atasi Masalah Penyimpanan Kompatibel S3 dengan RcloneView"
authors:
  - kai
description: "Perbaiki error sinkronisasi IDrive e2 yang umum terjadi di RcloneView, mulai dari masalah access key hingga transfer macet dan file yang tidak cocok, dengan solusi langkah demi langkah yang jelas."
keywords:
  - error sinkronisasi idrive e2
  - perbaiki idrive e2 rcloneview
  - error access key idrive e2
  - koneksi timeout idrive e2
  - upload gagal idrive e2
  - pemecahan masalah rcloneview
  - sinkronisasi s3 idrive e2
  - error pencadangan idrive e2
  - error penyimpanan kompatibel s3
  - pemecahan masalah penyimpanan cloud
tags:
  - RcloneView
  - idrive-e2
  - troubleshooting
  - tips
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki Error Sinkronisasi IDrive e2 — Atasi Masalah Penyimpanan Kompatibel S3 dengan RcloneView

> Pekerjaan sinkronisasi IDrive e2 menolak kredensial, macet di tengah transfer, atau meninggalkan file yang tidak cocok? **RcloneView** memberi Anda visibilitas untuk mengisolasi penyebabnya dan membuat transfer berjalan lagi.

IDrive e2 adalah layanan penyimpanan objek yang kompatibel dengan S3, sehingga sebagian besar masalah sinkronisasi berujung pada beberapa penyebab yang sama: pasangan Access Key yang salah, endpoint region yang keliru, atau transfer yang mengalami gangguan jaringan di tengah jalan. RcloneView terhubung ke IDrive e2 dengan akses baca/tulis penuh bahkan pada lisensi FREE, dan alat Job History, tab Log, serta Dry Run memungkinkan Anda menemukan persis di mana suatu pekerjaan gagal alih-alih menjalankannya ulang secara membabi buta. Panduan ini membahas error sinkronisasi IDrive e2 yang paling umum dan cara mengatasi masing-masing dari dalam RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Access Key atau Autentikasi Ditolak

Jika remote IDrive e2 tiba-tiba mengembalikan error autentikasi, penyebab paling umum adalah Access Key ID atau Secret Access Key yang dibuat ulang atau dicabut di sisi IDrive e2 setelah remote dikonfigurasi di RcloneView, atau URL endpoint yang tidak lagi cocok dengan region akun tersebut.

**Cara memperbaikinya:**

Buka Remote Manager, pilih remote IDrive e2, lalu masukkan ulang Access Key ID dan Secret Access Key terkini dari dasbor IDrive e2 Anda. Periksa kembali apakah kolom endpoint sudah sesuai dengan region yang tepat sebagaimana ditampilkan di akun IDrive e2 Anda, karena endpoint yang tidak sesuai menghasilkan penolakan yang sama seperti kunci yang salah. Jika remote masih gagal, hapus dan buat ulang melalui wizard New Remote untuk mendapatkan konfigurasi yang bersih.

<img src="/support/images/en/blog/new-remote.png" alt="Reconfiguring an IDrive e2 remote in RcloneView" class="img-large img-center" />

## Pekerjaan Sinkronisasi Macet atau Error di Job History

Pekerjaan yang menyalin sebagian bucket lalu menampilkan "Errored", atau yang tampak membeku di tengah jalan, biasanya disebabkan oleh gangguan jaringan sementara, batas kecepatan sementara dari endpoint S3, atau satu objek dengan nama bermasalah yang memblokir sisa batch.

**Cara memperbaikinya:**

Periksa Job History dan saring berdasarkan "Errored" untuk melihat persis proses dan stempel waktu mana yang gagal. Naikkan hitungan "Retry entire sync if fails" di Step 2 wizard pekerjaan — nilai default 3 memulihkan sebagian besar kegagalan sementara secara otomatis. Jika objek tertentu terus gagal, kecualikan dengan aturan filter khusus di Step 3 dan pastikan sisa transfer selesai.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Adjusting retry settings for an IDrive e2 sync job in RcloneView" class="img-large img-center" />

## Unggahan Lambat atau Terbatas (Throttled)

Endpoint penyimpanan objek terkadang membatasi koneksi yang membuka terlalu banyak stream secara bersamaan, yang muncul sebagai unggahan yang merayap jauh di bawah kecepatan yang diharapkan alih-alih gagal total.

**Cara memperbaikinya:**

Turunkan nilai "Number of file transfers" dan "Number of multi-thread transfers" di Step 2 wizard sinkronisasi — jumlah bersamaan yang tinggi dapat memicu pembatasan pada beberapa backend yang kompatibel dengan S3. Amati tab Transferring untuk memastikan kecepatan stabil setelah perubahan, dan aktifkan perbandingan checksum agar file yang dicoba ulang tidak ditransfer ulang secara tidak perlu.

## File Tidak Cocok Setelah Sinkronisasi

Jika jumlah atau ukuran objek di IDrive e2 tidak cocok dengan sumber setelah sinkronisasi selesai, hal ini biasanya disebabkan oleh kesalahan arah sinkronisasi atau aturan filter yang mengecualikan lebih banyak dari yang dimaksudkan, bukan bug di sisi penyimpanan.

**Cara memperbaikinya:**

Jalankan Dry Run sebelum sinkronisasi sesungguhnya untuk melihat pratinjau persis apa yang akan disalin atau dihapus, sehingga menangkap kesalahan arah sebelum memengaruhi bucket Anda. Kemudian gunakan Folder Compare antara sumber dan remote IDrive e2 — alat deteksi perubahan ukuran pada Folder Compare dengan cepat menunjukkan folder mana yang berbeda, dan baik sinkronisasi maupun perbandingan tersedia pada lisensi FREE RcloneView.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing source and IDrive e2 bucket contents in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Masukkan ulang atau buat ulang remote IDrive e2 Anda jika autentikasi gagal.
3. Periksa Job History untuk menemukan titik kegagalan yang tepat dan sesuaikan pengaturan retry, filter, atau thread.
4. Jalankan Dry Run dan Folder Compare setelah setiap perbaikan untuk memastikan sinkronisasi selanjutnya berjalan bersih.

Rutinitas diagnostik singkat — Job History terlebih dahulu, lalu Dry Run, kemudian Compare — menyelesaikan sebagian besar masalah sinkronisasi IDrive e2 tanpa perlu membuka terminal.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan IDrive e2 — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [Mengelola IDrive e2 sebagai Pencadangan Cloud Kompatibel S3 — RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-s3-cloud-backup-rcloneview)
- [Memperbaiki Kegagalan Upload Multipart S3 dengan RcloneView](https://rcloneview.com/support/blog/fix-s3-multipart-upload-failures-rcloneview)

<CloudSupportGrid />
