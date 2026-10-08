---
slug: migrate-hidrive-to-wasabi-rcloneview
title: "Migrasi HiDrive ke Wasabi — Transfer File dengan RcloneView"
authors:
  - morgan
description: "Pindahkan file dari HiDrive ke Wasabi object storage dengan RcloneView: hubungkan kedua remote, Dry Run, jalankan transfer, dan verifikasi dengan Folder Compare."
keywords:
  - migrasi HiDrive ke Wasabi
  - transfer HiDrive ke Wasabi
  - sinkronisasi HiDrive Wasabi
  - RcloneView HiDrive
  - migrasi Wasabi S3
  - transfer cloud ke cloud
  - pencadangan HiDrive ke S3
  - rclone HiDrive Wasabi
  - alat migrasi HiDrive
  - GUI Wasabi
tags:
  - RcloneView
  - hidrive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi HiDrive ke Wasabi — Transfer File dengan RcloneView

> Pindahkan arsip HiDrive ke Wasabi object storage dengan alur visual: hubungkan, pratinjau, transfer, verifikasi.

HiDrive berfungsi baik sebagai penyimpanan file pribadi atau tim, tetapi arsip jangka panjang sering lebih cocok di object storage bergaya S3 dengan akses API yang dapat diprediksi. RcloneView menghubungkan kedua layanan dalam satu jendela, sehingga Anda dapat menyalin folder dari cloud ke cloud tanpa mengunduh semuanya ke disk Anda terlebih dahulu.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan HiDrive dan Wasabi sebagai Remote

HiDrive menggunakan OAuth: RcloneView membuka browser Anda, Anda masuk, dan remote terhubung tanpa API key terpisah. Wasabi kompatibel dengan S3, jadi Anda memasukkan Access Key, Secret Key, dan endpoint untuk region bucket Anda.

Tambahkan keduanya dari tab Remote dengan New Remote. Lalu buka masing-masing di panel Explorer, satu di kiri dan satu di kanan, dan pastikan Anda dapat menelusuri folder HiDrive dan bucket Wasabi tujuan.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote HiDrive dan Wasabi di RcloneView" class="img-large img-center" />

## Rencanakan Transfer dengan Dry Run

Bayangkan sebuah studio desain memindahkan 800 GB folder proyek yang sudah selesai dari HiDrive. Sebelum menyentuh apa pun, buat transfer sebagai job. Pilih HiDrive sebagai sumber dan path bucket Wasabi sebagai tujuan, lalu gunakan mode One-way "Modifying destination only".

Jalankan Dry Run terlebih dahulu. Dry Run menampilkan daftar file yang akan disalin atau dihapus tanpa mengubah apa pun, sehingga menjadi cara andal untuk menangkap folder tujuan yang salah.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer cloud ke cloud dari HiDrive ke Wasabi di RcloneView" class="img-large img-center" />

## Sesuaikan Pengaturan dan Jalankan Job

Di Step 2 wizard, atur jumlah transfer file dan aktifkan perbandingan checksum jika Anda ingin verifikasi hash dan ukuran. Biarkan nilai percobaan ulang pada default 3 agar gangguan jaringan singkat tidak menghentikan seluruh proses. Gunakan filter Step 3 untuk melewati hal-hal seperti file sementara atau folder `.git/`.

Ketika pratinjau sudah benar, jalankan job dan pantau kecepatan, progres, dan jumlah file di tab Transferring.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Memantau transfer HiDrive ke Wasabi di tab Transferring" class="img-large img-center" />

## Verifikasi dengan Folder Compare

Setelah job selesai, buka Compare dengan HiDrive di satu sisi dan Wasabi di sisi lainnya. Filter file yang hanya ada di kiri untuk melihat apa yang belum sampai, lalu salin hanya item yang hilang. Job History menyimpan status, durasi, ukuran, dan jumlah file untuk log migrasi Anda.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare mengonfirmasi isi HiDrive dan Wasabi sama" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan HiDrive (login browser) dan Wasabi (Access Key, Secret Key, endpoint) sebagai remote.
3. Buat job satu arah dari HiDrive ke bucket Wasabi Anda dan jalankan Dry Run.
4. Jalankan transfer, lalu verifikasi dengan Folder Compare.

Migrasi yang dipratinjau dan diverifikasi menjaga file HiDrive Anda tetap utuh sampai Anda yakin semuanya telah sampai di Wasabi.

---

**Panduan Terkait:**

- [Sinkronkan HiDrive ke Amazon S3 dengan RcloneView](https://rcloneview.com/support/blog/sync-hidrive-to-amazon-s3-rcloneview)
- [Migrasi HiDrive ke Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/migrate-hidrive-to-backblaze-b2-rcloneview)
- [Kelola Penyimpanan Wasabi — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
