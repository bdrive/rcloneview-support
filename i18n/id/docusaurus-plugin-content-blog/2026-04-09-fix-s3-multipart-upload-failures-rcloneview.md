---
slug: fix-s3-multipart-upload-failures-rcloneview
title: "Memperbaiki Kegagalan Upload Multipart S3 di RcloneView"
authors:
  - tayson
description: "Selesaikan masalah dan perbaiki kegagalan upload multipart S3 di RcloneView. Atasi upload yang tidak selesai, error ukuran part, dan sesi multipart yang terlantar."
keywords:
  - rcloneview
  - s3 multipart upload failure
  - fix s3 upload error
  - multipart upload incomplete
  - s3 upload timeout
  - s3 part size error
  - orphaned multipart upload
  - s3 upload troubleshooting
  - rclone s3 multipart
  - cloud upload fix
tags:
  - troubleshooting
  - amazon-s3
  - s3-compatible
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki Kegagalan Upload Multipart S3 di RcloneView

> Upload multipart S3 membagi file besar menjadi beberapa bagian untuk transfer paralel dan agar bisa dilanjutkan, tetapi kegagalan selama prosesnya dapat meninggalkan upload yang tidak selesai, memboroskan penyimpanan, dan menghambat transfer — berikut cara memperbaikinya di RcloneView.

Amazon S3 dan penyedia yang kompatibel dengan S3 (Wasabi, Backblaze B2 S3, Cloudflare R2, MinIO, DigitalOcean Spaces) mewajibkan upload multipart untuk file yang lebih besar dari 5 GB dan merekomendasikannya untuk file di atas 100 MB. File dibagi menjadi beberapa bagian (part) (default 5 MB hingga 5 GB masing-masing), diunggah secara paralel, lalu disatukan di sisi server. Ketika proses ini gagal di tengah jalan — akibat gangguan jaringan, timeout, atau konfigurasi ukuran part yang salah — hasilnya adalah upload yang tidak selesai, yang tetap menghabiskan penyimpanan tetapi tidak menghasilkan objek yang dapat digunakan.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Gejala Umum

- **Upload macet atau berhenti**: Transfer tampak berhenti di tengah proses untuk file besar. Monitoring RcloneView tidak menunjukkan progres dalam waktu yang lama.
- **Error "EntityTooSmall"**: Part yang diunggah lebih kecil dari ukuran minimum (5 MB untuk sebagian besar penyedia S3). Ini biasanya terjadi ketika konfigurasi ukuran chunk terlalu kecil dibandingkan ukuran file.
- **Error "EntityTooLarge"**: Satu part melebihi ukuran maksimum yang diizinkan (5 GB).
- **"InvalidPart" atau "InvalidPartOrder"**: Part diunggah tidak berurutan atau ada part yang rusak selama transfer. Server menolak permintaan penyelesaian upload.
- **Penggunaan penyimpanan bertambah tetapi file tidak muncul**: Upload multipart yang tidak selesai tetap menghabiskan penyimpanan. Part-part tersebut ada di server, tetapi objek akhirnya tidak pernah disatukan.

## Perbaikan 1: Sesuaikan Ukuran Chunk

Penyebab paling umum dari kegagalan multipart adalah ukuran chunk yang tidak sesuai dengan ukuran file. S3 mengizinkan maksimum 10.000 part per upload. Jika ukuran chunk Anda terlalu kecil untuk file besar, upload akan melebihi batas jumlah part dan gagal.

**Contoh**: File 500 GB dengan ukuran chunk default 5 MB akan membutuhkan 100.000 part — jauh melebihi batas 10.000 part.

Di RcloneView, sesuaikan ukuran chunk saat mengonfigurasi remote S3 Anda atau di opsi lanjutan pekerjaan (job). Aturan praktis yang baik: atur ukuran chunk minimal `file_size / 10.000`. Untuk file 500 GB, gunakan chunk minimal 50 MB. Untuk sebagian besar beban kerja, chunk 64 MB hingga 128 MB memberikan keseimbangan yang baik antara paralelisme dan keandalan.

Anda dapat mengatur ini dengan flag `--s3-chunk-size` di kolom custom flags RcloneView.

## Perbaikan 2: Tingkatkan Timeout Upload

Part berukuran besar pada koneksi yang lambat dapat melebihi batas timeout default. Jika koneksi Anda lebih lambat dari 10 Mbps, chunk 128 MB bisa membutuhkan lebih dari 100 detik untuk diunggah — mendekati batas timeout default.

Tingkatkan timeout dengan flag `--timeout`. Misalnya, `--timeout 300s` memberikan waktu hingga 5 menit untuk setiap part selesai diunggah. Anda juga dapat mengurangi ukuran chunk agar setiap part lebih cepat ditransfer.

## Perbaikan 3: Kurangi Konkurensi Transfer

Mengunggah terlalu banyak part secara bersamaan dapat membebani koneksi jaringan atau endpoint S3 Anda. Jika Anda sering mengalami timeout atau koneksi terputus saat upload multipart, kurangi jumlah transfer yang berjalan bersamaan.

Di konfigurasi job RcloneView, turunkan jumlah transfers dari default (4) menjadi 2 atau bahkan 1 untuk file yang sangat besar. Anda juga dapat menggunakan `--s3-upload-concurrency` untuk mengontrol berapa banyak part dari satu file yang diunggah secara paralel (default adalah 4).

## Perbaikan 4: Bersihkan Upload Multipart yang Terlantar

Upload multipart yang gagal meninggalkan part terlantar di server yang menghabiskan penyimpanan dan menimbulkan biaya. Part-part ini tidak terlihat sebagai objek — Anda tidak akan melihatnya saat menjelajahi bucket di RcloneView atau konsol AWS.

Untuk membersihkan upload yang terlantar:

- **AWS S3**: Konfigurasikan aturan lifecycle pada bucket untuk secara otomatis membatalkan upload multipart yang tidak selesai setelah sejumlah hari tertentu (misalnya, 7 hari). Ini dilakukan di konsol AWS pada tab Management bucket.
- **Menggunakan rclone**: Jalankan `rclone cleanup remote:bucket` dari terminal bawaan RcloneView. Ini membatalkan semua upload multipart yang tertunda pada bucket yang ditentukan.
- **Penyedia yang kompatibel dengan S3**: Sebagian besar penyedia mendukung aturan lifecycle atau perintah cleanup yang sama, tetapi periksa dokumentasi penyedia Anda untuk detailnya.

## Perbaikan 5: Aktifkan Retry Saat Gagal

Gangguan jaringan selama upload multipart dapat menyebabkan part individual gagal. RcloneView secara otomatis mencoba ulang operasi yang gagal (default 3 kali percobaan ulang dengan exponential backoff). Jika Anda sering mengalami kegagalan sementara, tingkatkan jumlah percobaan ulang dengan `--retries 5` atau `--retries 10` di custom flags.

Untuk koneksi yang sangat tidak stabil, atur juga `--low-level-retries 10` untuk mencoba ulang permintaan HTTP individual sebelum dianggap sebagai operasi yang gagal.

## Perbaikan 6: Gunakan Server-Side Copy Bila Memungkinkan

Jika Anda menyalin antara dua bucket yang kompatibel dengan S3 pada penyedia yang sama, server-side copy sepenuhnya menghindari masalah upload multipart — data berpindah di dalam jaringan penyedia tanpa melewati perangkat Anda. RcloneView secara otomatis menggunakan server-side copy ketika sumber dan tujuan berada pada penyedia S3 yang sama.

Untuk transfer lintas penyedia (misalnya, AWS S3 ke Cloudflare R2), data harus melewati perangkat Anda dan upload multipart berlaku di sisi tujuan.

## Mencegah Kegagalan di Masa Depan

- **Atur ukuran chunk secara proaktif**: Sebelum mengunggah file yang lebih besar dari 1 GB, hitung ukuran chunk yang dibutuhkan (`file_size / 10.000`) dan atur di custom flags.
- **Aktifkan pembersihan lifecycle**: Selalu konfigurasikan aturan lifecycle untuk membatalkan upload multipart yang tidak selesai. Ini mencegah part terlantar menumpuk.
- **Pantau transfer**: Gunakan monitoring real-time RcloneView untuk menangkap upload yang macet sejak dini. Menjeda dan melanjutkan transfer yang macet sering kali menyelesaikan masalah sementara.
- **Uji dengan dry run**: Untuk upload yang penting, gunakan mode dry run RcloneView untuk memverifikasi rencana transfer sebelum menjalankannya.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Konfigurasikan remote S3 Anda dengan ukuran chunk yang sesuai untuk file terbesar Anda.
3. Atur aturan lifecycle pada bucket Anda untuk membersihkan upload terlantar secara otomatis.
4. Pantau transfer secara real time dan sesuaikan konkurensi sesuai kebutuhan.

Kegagalan upload multipart adalah masalah paling umum saat bekerja dengan file besar di S3. Konfigurasi ukuran chunk yang tepat, pengaturan timeout, dan pembersihan upload terlantar menyelesaikan sebagian besar kasus.

---

**Panduan Terkait:**

- [Menambahkan AWS S3 dan yang Kompatibel dengan S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Monitoring Transfer Real-time](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Membuat Job Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
