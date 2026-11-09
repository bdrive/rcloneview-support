---
slug: fix-slow-s3-bucket-listing-many-small-files-rcloneview
title: "Mengatasi Listing Bucket S3 dan Sinkronisasi yang Lambat pada File Kecil Berjumlah Banyak — Tuning dengan RcloneView"
authors:
  - morgan
description: "Atasi sinkronisasi dan listing S3 yang lambat pada bucket dengan banyak file kecil. Atur checker, transfer, dan filter di RcloneView lalu verifikasi dengan Dry Run."
keywords:
  - sinkronisasi S3 lambat file kecil banyak
  - listing bucket S3 lambat
  - tuning checkers rclone
  - sinkronisasi S3 jutaan file
  - RcloneView S3
  - mempercepat sinkronisasi S3
  - transfer file kecil lambat
  - performa sinkronisasi S3 compatible
tags:
  - RcloneView
  - troubleshooting
  - tips
  - s3
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengatasi Listing Bucket S3 dan Sinkronisasi yang Lambat pada File Kecil Berjumlah Banyak — Tuning dengan RcloneView

> Bucket dengan ratusan ribu file kecil lambat disinkronkan karena overhead per objek, bukan bandwidth, dan beberapa pengaturan job dapat mengubahnya.

Folder proxy milik fotografer atau arsip log aplikasi bisa berisi objek kecil dalam jumlah sangat besar. Setiap objek memerlukan entri listing, perbandingan, dan satu request, sehingga sinkronisasi merayap meskipun jaringan sedang lengang. RcloneView menyediakan pengaturan rclone yang relevan di wizard job, sehingga Anda dapat menyetelnya tanpa menulis flag. Hubungkan S3, Azure, atau Backblaze B2 dengan akses baca/tulis penuh pada lisensi FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa File Kecil Lambat

Pada file besar, throughput yang dominan. Pada file kecil, jumlah request yang dominan: setiap objek di-list, dibandingkan berdasarkan ukuran, waktu, atau checksum, lalu diunggah satu per satu. Kelambatan di sini biasanya disebabkan oleh latensi per request dan pembatasan rate dari sisi penyedia, sehingga menambah bandwidth tidak membantu.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Tab Transferring yang menampilkan jumlah file dan kecepatan" class="img-large img-center" />

Buka tab Transferring saat job berjalan. Jika kecepatan rendah tetapi jumlah file terus bertambah secara stabil, hambatannya ada pada request, bukan bandwidth.

## Setel Pengaturan Job

Pada Langkah 2 wizard sinkronisasi, naikkan jumlah transfer file agar lebih banyak objek berpindah secara paralel. Equality checkers bernilai default 8; pada backend yang lambat atau dibatasi, panduannya adalah menggunakan 4 atau kurang, karena terlalu banyak pemeriksaan bersamaan dapat memicu pembatasan dan memperburuk keadaan. Ubah satu nilai pada satu waktu lalu jalankan ulang.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Pengaturan lanjutan job untuk transfer dan checker" class="img-large img-center" />

Mengaktifkan perbandingan checksum menambah pekerjaan hash di atas pemeriksaan ukuran, jadi gunakan hanya ketika integritas lebih penting daripada kecepatan. Biarkan pengaturan percobaan ulang pada nilai default 3 agar error sementara tidak menghentikan job yang panjang.

## Perkecil Beban Kerja

Filter pada Langkah 3 mengurangi beban listing. Gunakan usia file maksimum untuk melewati objek lama, kecualikan folder yang tidak diperlukan, dan gunakan filter bawaan untuk mengecualikan tipe file tertentu. Memecah satu job raksasa menjadi job per prefiks juga memudahkan isolasi kegagalan dan menjalankannya ulang.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menjalankan job sinkronisasi yang telah disetel di RcloneView" class="img-large img-center" />

Selalu jalankan Dry Run setelah mengubah filter, agar Anda melihat dengan tepat file mana yang akan disalin atau dihapus sebelum eksekusi sebenarnya.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka job yang lambat dan perhatikan tab Transferring untuk memastikan hambatannya ada pada request.
3. Sesuaikan transfer dan checker satu per satu, dan tambahkan filter untuk memperkecil cakupan.
4. Bandingkan waktu di Job History dan pertahankan pengaturan dengan hasil terbaik.

Perubahan kecil yang metodis mengubah sinkronisasi semalaman menjadi tugas rutin.

---

**Panduan Terkait:**

- [Atasi Kegagalan Unggah Multipart S3](https://rcloneview.com/support/blog/fix-s3-multipart-upload-failures-rcloneview)
- [Atasi Kecepatan Transfer Cloud yang Lambat](https://rcloneview.com/support/blog/fix-slow-cloud-transfers-speed-rcloneview)
- [Atasi Error Pembatasan Rate API Cloud](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
