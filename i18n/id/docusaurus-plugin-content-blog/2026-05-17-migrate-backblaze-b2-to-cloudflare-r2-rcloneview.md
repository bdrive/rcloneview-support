---
slug: migrate-backblaze-b2-to-cloudflare-r2-rcloneview
title: "Migrasi Backblaze B2 ke Cloudflare R2 — Transfer File dengan RcloneView"
authors:
  - alex
description: "Migrasikan penyimpanan objek Backblaze B2 Anda ke Cloudflare R2 dengan RcloneView. Panduan GUI langkah demi langkah dengan verifikasi checksum tanpa perlu perintah CLI."
keywords:
  - Backblaze B2 to Cloudflare R2 migration
  - migrate B2 to R2
  - Cloudflare R2 migration guide
  - RcloneView cloud migration
  - B2 to R2 transfer
  - object storage migration
  - Backblaze to Cloudflare
  - cloud storage migration tool
  - S3 compatible migration
  - transfer B2 bucket rcloneview
tags:
  - RcloneView
  - backblaze-b2
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Backblaze B2 ke Cloudflare R2 — Transfer File dengan RcloneView

> Memindahkan bucket B2 ke Cloudflare R2 adalah operasi cloud-to-cloud yang sederhana di RcloneView — tambahkan kedua remote, siapkan job copy, dan verifikasi integritas dengan perbandingan checksum.

Backblaze B2 dan Cloudflare R2 sama-sama merupakan platform penyimpanan objek yang kompatibel dengan S3 dan populer, dan banyak tim mendapati diri mereka perlu memindahkan data di antara keduanya seiring berkembangnya kebutuhan infrastruktur. Alih-alih mengunduh data secara lokal lalu mengunggahnya kembali, RcloneView menangani transfer di sisi server melalui mesin cloud-to-cloud milik rclone — memungkinkan Anda memigrasikan seluruh bucket melalui GUI tanpa menulis satu perintah pun.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menambahkan Backblaze B2 dan Cloudflare R2 sebagai Remote

Sebelum menjalankan migrasi, hubungkan kedua akun penyimpanan di RcloneView.

**Backblaze B2:** Buka **Remote** > **New Remote**, pilih Backblaze B2, lalu masukkan Application Key ID dan Application Key Anda. RcloneView akan menampilkan daftar bucket B2 Anda di explorer setelah disimpan.

**Cloudflare R2:** Tambahkan remote kedua, pilih Cloudflare R2, lalu masukkan API Token, Account ID, dan endpoint R2 Anda. Sama seperti B2, bucket R2 Anda akan langsung muncul di explorer.

Setelah kedua remote terhubung, Anda dapat menelusurinya berdampingan di antarmuka dual-pane RcloneView dan memastikan bucket sumber serta bucket tujuan sudah benar sebelum memulai migrasi.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 and Cloudflare R2 remotes in RcloneView" class="img-large img-center" />

## Menjalankan Migrasi Cloud-to-Cloud

Buka **Job Manager** dan buat job Copy atau Sync baru. Atur bucket Backblaze B2 Anda (atau prefix tertentu di dalamnya) sebagai sumber dan bucket Cloudflare R2 sebagai tujuan.

Pada langkah Advanced Settings, sesuaikan jumlah transfer file yang berjalan secara bersamaan (concurrent) dengan kapasitas jaringan Anda — nilai yang lebih tinggi mempercepat bucket dengan banyak file kecil, sementara arsip media berukuran besar diuntungkan dari transfer multi-thread. Aktifkan **verifikasi checksum** untuk memastikan B2 dan R2 memiliki kesamaan integritas file menggunakan perbandingan hash, bukan hanya mengandalkan ukuran dan waktu modifikasi.

Jalankan **Dry Run** sebelum transfer sesungguhnya. Pratinjau ini menampilkan setiap objek yang akan disalin, sehingga Anda dapat menangkap kecocokan filter yang tidak diinginkan atau ketidaksesuaian path sebelum benar-benar menjalankannya.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Backblaze B2 to Cloudflare R2 in RcloneView" class="img-large img-center" />

## Memantau Transfer secara Real Time

Setelah job dimulai, tab **Transferring** pada Info View di bagian bawah menampilkan progres secara langsung: kecepatan transfer per file, throughput keseluruhan, dan jumlah objek yang telah selesai dibandingkan yang tersisa. Untuk bucket B2 berukuran besar — misalnya arsip video dengan puluhan ribu file — tampilan real-time ini memudahkan Anda mengenali stall lebih awal dan membatalkan atau menyesuaikan jika diperlukan.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring during B2 to R2 migration in RcloneView" class="img-large img-center" />

Setelah transfer selesai, periksa tab **Job History** untuk ringkasan lengkap: total ukuran yang dipindahkan, kecepatan transfer, jumlah file, dan status akhir. Hasil yang diverifikasi checksum dengan nol error berarti bucket R2 Anda merupakan salinan yang identik byte demi byte dari data B2 sumber.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history confirming successful Backblaze B2 to Cloudflare R2 migration" class="img-large img-center" />

Dengan **lisensi PLUS**, Anda dapat menjadwalkan job sinkronisasi inkremental untuk menjaga R2 tetap diperbarui seiring penambahan objek baru ke B2 selama proses cutover bertahap — menjalankan migrasi dalam beberapa gelombang alih-alih satu batch besar.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan akun Backblaze B2 Anda melalui **Remote** > **New Remote** (Application Key ID + Application Key).
3. Tambahkan akun Cloudflare R2 Anda (API Token + Account ID + Endpoint).
4. Buka **Job Manager**, buat job Copy dari B2 ke R2, lalu aktifkan verifikasi checksum.
5. Jalankan Dry Run terlebih dahulu, lalu jalankan migrasi sesungguhnya dan tinjau hasilnya di Job History.

RcloneView menghilangkan kebutuhan akan keahlian CLI atau penyimpanan lokal perantara — data B2 Anda berpindah langsung ke R2 dengan verifikasi integritas penuh yang sudah terpasang.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Cloud Backblaze B2 — Sinkronisasi dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Kelola Penyimpanan Cloud Cloudflare R2 — Sinkronisasi dengan RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Migrasi Cloudflare R2 ke Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/migrate-cloudflare-r2-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
