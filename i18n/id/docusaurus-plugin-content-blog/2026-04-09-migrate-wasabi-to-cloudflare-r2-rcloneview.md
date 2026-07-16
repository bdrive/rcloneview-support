---
slug: migrate-wasabi-to-cloudflare-r2-rcloneview
title: "Migrasi Wasabi ke Cloudflare R2 dengan RcloneView"
authors:
  - tayson
description: "Migrasi dari Wasabi ke Cloudflare R2 dengan RcloneView. Bandingkan harga, siapkan kedua remote yang kompatibel dengan S3, transfer data, dan verifikasi migrasi langkah demi langkah."
keywords:
  - rcloneview
  - wasabi to cloudflare r2
  - migrate wasabi to r2
  - cloudflare r2 migration
  - wasabi migration tool
  - s3 compatible migration
  - cloud storage migration
  - r2 no egress fees
  - wasabi data transfer
  - object storage migration gui
tags:
  - wasabi
  - cloudflare-r2
  - migration
  - cloud-migration
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Wasabi ke Cloudflare R2 dengan RcloneView

> Baik Wasabi maupun Cloudflare R2 kompatibel dengan S3 dan dipasarkan sebagai alternatif berbiaya rendah untuk AWS S3, tetapi model harga keduanya berbeda dalam hal-hal penting — **RcloneView** menangani migrasi di antara keduanya dengan antarmuka visual.

Wasabi menawarkan penyimpanan cloud hot dengan harga $6.99/TB/bulan tanpa biaya egress, tetapi menerapkan durasi penyimpanan minimum 90 hari dan biaya bulanan minimum. Cloudflare R2 mengenakan biaya $0.015/GB/bulan (sekitar $15.36/TB) dengan biaya egress nol dan tanpa durasi penyimpanan minimum. Untuk beban kerja dengan pengambilan data yang sering atau objek berumur pendek, R2 bisa jauh lebih murah. RcloneView terhubung ke keduanya sebagai remote yang kompatibel dengan S3 dan menyediakan jalur migrasi yang mudah.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Migrasi dari Wasabi ke Cloudflare R2

Kedua penyedia menghilangkan biaya egress, yang merupakan nilai jual utama mereka dibandingkan AWS S3. Keputusan untuk migrasi biasanya bergantung pada:

- **Durasi penyimpanan minimum**: Wasabi mengenakan biaya untuk penyimpanan minimal 90 hari per objek, bahkan jika Anda menghapusnya lebih cepat. R2 tidak memiliki minimum, sehingga lebih baik untuk data yang bersifat sementara atau sering diganti.
- **Integrasi CDN**: R2 terintegrasi secara native dengan jaringan CDN Cloudflare, memungkinkan akses publik instan ke objek yang disimpan melalui domain Cloudflare tanpa konfigurasi tambahan.
- **Integrasi Workers**: Jika aplikasi Anda menggunakan Cloudflare Workers, R2 menyediakan akses tanpa latensi dari edge compute.
- **Harga dalam skala besar**: Untuk beban kerja dengan penyimpanan besar, tarif flat per-TB Wasabi mungkin lebih murah. Untuk beban kerja dengan volume panggilan API tinggi, model harga R2 (gratis untuk 10 juta permintaan Class B pertama per bulan) mungkin lebih unggul.

## Menyiapkan Kedua Remote

### Remote Wasabi

Buka Remote Manager RcloneView dan tambahkan remote yang kompatibel dengan S3. Pilih **Wasabi** sebagai penyedia, masukkan Access Key dan Secret Key Wasabi Anda, dan tentukan endpoint wilayah (misalnya, `s3.us-east-1.wasabisys.com`). Pilih bucket yang ingin Anda migrasikan.

### Remote Cloudflare R2

Tambahkan remote lain yang kompatibel dengan S3 dan pilih **Cloudflare R2** sebagai penyedia. Masukkan R2 Access Key ID dan Secret Access Key Anda (dihasilkan dari dashboard Cloudflare di bawah R2 > Manage R2 API Tokens). Endpoint mengikuti format `https://<account-id>.r2.cloudflarestorage.com`. Buat bucket target di dashboard Cloudflare atau biarkan RcloneView membuatnya selama proses penyiapan.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Wasabi and Cloudflare R2 remotes in RcloneView" class="img-large img-center" />

## Menjalankan Migrasi

Buka Wasabi di panel kiri dan R2 di panel kanan. Navigasikan ke bucket sumber di Wasabi dan bucket target di R2.

Karena kedua penyedia menggunakan API S3, transfer metadata menjadi mudah — content type, header cache-control, dan metadata kustom ikut terbawa. RcloneView menggunakan metadata sisi server selama transfer, mempertahankan properti objek tanpa konfigurasi tambahan.

Untuk migrasi awal, gunakan copy job. RcloneView membandingkan file menggunakan checksum MD5 (baik Wasabi maupun R2 mengembalikan ETag MD5 standar untuk unggahan non-multipart) dan hanya mentransfer file yang baru atau berubah. Transfer multi-thread dengan konkurensi yang dapat dikonfigurasi menjaga migrasi tetap efisien — atur transfers ke 8-16 untuk migrasi bucket besar.

Perhatikan durasi penyimpanan minimum Wasabi: jika objek diunggah baru-baru ini (dalam 90 hari terakhir), Anda tetap akan dikenai biaya untuk 90 hari penuh di Wasabi meskipun sudah menghapusnya. Rencanakan jadwal migrasi Anda dengan tepat — migrasikan terlebih dahulu, verifikasi, lalu hapus dari Wasabi setelah periode 90 hari berlalu.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Wasabi to Cloudflare R2 in RcloneView" class="img-large img-center" />

## Memverifikasi Migrasi

Setelah transfer, gunakan fitur compare RcloneView untuk memverifikasi bahwa setiap objek telah sampai di R2. Pilih sumber Wasabi dan tujuan R2, lalu jalankan perbandingan folder. Objek yang identik akan ditandai cocok; objek yang hilang atau berbeda akan disorot untuk ditinjau.

Untuk keyakinan tambahan, jalankan operasi check yang menghitung checksum di kedua sisi. Ini memverifikasi integritas data pada tingkat byte.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Wasabi to R2 migration in RcloneView" class="img-large img-center" />

## Pembersihan Pasca-Migrasi

Setelah Anda memverifikasi migrasi:

1. Perbarui konfigurasi aplikasi agar mengarah ke endpoint R2 alih-alih Wasabi.
2. Uji akses aplikasi untuk memastikan semuanya berfungsi dengan R2.
3. Tunggu periode penyimpanan minimum 90 hari berlalu di Wasabi sebelum menghapus objek, untuk menghindari biaya penghapusan dini.
4. Hapus bucket Wasabi dan nonaktifkan access key Wasabi.

Jika Anda perlu menjalankan kedua penyedia secara paralel selama masa transisi, jadwalkan sync job harian di RcloneView agar R2 tetap terbarui dengan objek baru yang ditambahkan ke Wasabi.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling sync from Wasabi to R2 during transition" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Wasabi dan Cloudflare R2 sebagai remote yang kompatibel dengan S3.
3. Jalankan copy job dari Wasabi ke R2.
4. Verifikasi dengan operasi compare dan check.
5. Perbarui endpoint aplikasi dan bersihkan Wasabi setelah periode retensi.

Baik Wasabi maupun R2 adalah pilihan kompatibel S3 yang kuat, tetapi ketika profil beban kerja Anda berubah, RcloneView membuat migrasi menjadi tanpa hambatan.

---

**Panduan Terkait:**

- [Tambahkan AWS S3 dan yang Kompatibel dengan S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Bandingkan Isi Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Buat Sync Job](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
