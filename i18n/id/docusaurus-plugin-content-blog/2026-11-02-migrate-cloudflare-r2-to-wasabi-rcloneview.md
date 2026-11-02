---
slug: migrate-cloudflare-r2-to-wasabi-rcloneview
title: "Migrasi Cloudflare R2 ke Wasabi — Transfer File dengan RcloneView"
authors:
  - robin
description: "Pindahkan bucket dari Cloudflare R2 ke Wasabi dengan RcloneView: hubungkan dua remote kompatibel S3, Dry Run, salin bucket ke bucket, dan verifikasi dengan Folder Compare."
keywords:
  - migrasi Cloudflare R2 ke Wasabi
  - transfer R2 ke Wasabi
  - pindahkan bucket R2 ke Wasabi
  - migrasi bucket kompatibel S3
  - transfer cloud ke cloud
  - RcloneView Cloudflare R2
  - RcloneView Wasabi
  - migrasi object storage dengan GUI
tags:
  - RcloneView
  - cloudflare-r2
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Cloudflare R2 ke Wasabi — Transfer File dengan RcloneView

> Salin bucket Cloudflare R2 ke Wasabi dari satu jendela, dengan Dry Run terlebih dahulu dan pemeriksaan visual setelahnya.

Cloudflare R2 dan Wasabi sama-sama menggunakan protokol S3, sehingga memindahkan data di antara keduanya secara konsep sederhana — tetapi dengan flag CLI mentah Anda harus mengatur dua endpoint, dua set kredensial, dan tidak ada cara mudah untuk memastikan apa yang sudah masuk. RcloneView menghubungkan keduanya sebagai remote dan memungkinkan Anda menyalin, memantau, dan memverifikasi lewat GUI. Hubungkan layanan kompatibel S3 dengan akses baca/tulis penuh pada lisensi FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan Kedua Remote Kompatibel S3

Buka dialog New Remote dan tambahkan Cloudflare R2 terlebih dahulu. R2 memerlukan API token, Account ID Anda, dan endpoint dengan format `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`. Buat token di dashboard Cloudflare setelah membuat bucket; pengaturan R2 di RcloneView mengharuskan token memiliki izin Admin Read & Write.

Selanjutnya tambahkan Wasabi. Masukkan Access Key dan Secret Key dari konsol Wasabi Anda, lalu pilih endpoint yang sesuai dengan region tempat bucket tujuan berada. Buat bucket tujuan di Wasabi sebelumnya, atau buat folder dari panel Explorer.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote Cloudflare R2 dan Wasabi di RcloneView" class="img-large img-center" />

## Rencanakan Penyalinan di Dua Panel

Buka remote R2 di panel Explorer kiri dan remote Wasabi di panel kanan. Telusuri ke bucket atau prefix yang ingin dipindahkan. Untuk studio dengan arsip media berukuran beberapa terabyte, Anda bisa memigrasikan satu prefix proyek terlebih dahulu untuk memastikan izin dan penamaan sebelum memindahkan seluruh bucket.

Karena kedua ujungnya adalah remote, RcloneView menjalankannya sebagai transfer cloud ke cloud antara kedua remote, sehingga Anda tidak perlu mengelola sendiri langkah unduh lalu unggah secara manual. Drag antar panel menyalin secara default ketika remote berbeda; atau buat job Copy di wizard Sync untuk eksekusi yang dapat diulang.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer cloud ke cloud antara dua panel di RcloneView" class="img-large img-center" />

## Dry Run, Atur, dan Jalankan

Sebelum transfer sesungguhnya, aktifkan Dry Run di wizard job. Dry Run menampilkan dengan tepat file mana yang akan disalin, sehingga Anda dapat menemukan prefix yang salah sebelum ada data yang berpindah. Di Advanced Settings, tingkatkan jumlah transfer file untuk bucket dengan banyak objek kecil, dan aktifkan perbandingan checksum jika Anda ingin pencocokan berdasarkan hash dan ukuran, bukan hanya ukuran. Gunakan langkah filter untuk melewati folder sementara atau membatasi berdasarkan usia file.

Mulai job dari Job Manager dan pantau kemajuan di tab Transferring: kecepatan, jumlah file, dan byte yang dipindahkan diperbarui secara langsung.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menjalankan job migrasi dari Job Manager di RcloneView" class="img-large img-center" />

## Verifikasi dengan Folder Compare

Setelah job selesai, buka Compare dengan R2 di kiri dan Wasabi di kanan. Filter ke file left-only untuk melihat apa yang hilang, atau file different untuk menemukan ketidakcocokan ukuran. Jika masih ada yang tersisa, gunakan Copy right untuk menutup kekurangan, lalu bandingkan ulang hingga hasilnya bersih. Periksa Job History untuk status, durasi, dan total file dari eksekusi tersebut.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare memverifikasi migrasi bucket di RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote Cloudflare R2 dan Wasabi Anda dari New Remote.
3. Buka keduanya di panel berdampingan dan jalankan job Copy dengan Dry Run.
4. Jalankan job, lalu konfirmasi hasilnya dengan Folder Compare.

Biarkan R2 tidak tersentuh sampai Compare menunjukkan kecocokan yang bersih, dan Anda dapat berpindah penyimpanan dengan percaya diri.

---

**Panduan Terkait:**

- [Migrasi Wasabi ke Cloudflare R2](https://rcloneview.com/support/blog/migrate-wasabi-to-cloudflare-r2-rcloneview)
- [Mengelola Penyimpanan Wasabi dengan RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Mengelola Cloudflare R2 dengan RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)

<CloudSupportGrid />
