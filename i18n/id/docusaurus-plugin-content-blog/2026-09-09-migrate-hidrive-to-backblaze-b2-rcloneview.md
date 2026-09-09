---
slug: migrate-hidrive-to-backblaze-b2-rcloneview
title: "Migrasi HiDrive ke Backblaze B2 — Transfer File dengan RcloneView"
authors:
  - kai
description: "Migrasikan file dari HiDrive ke Backblaze B2 dengan RcloneView — GUI lintas platform yang memindahkan data antara kedua penyedia tanpa menyimpan file secara lokal terlebih dahulu."
keywords:
  - migrasi HiDrive ke Backblaze B2
  - transfer HiDrive ke Backblaze B2
  - migrasi RcloneView HiDrive
  - alat pencadangan cloud HiDrive
  - GUI migrasi Backblaze B2
  - pindahkan file HiDrive ke B2
  - transfer cloud ke cloud RcloneView
  - sinkronisasi HiDrive B2
tags:
  - RcloneView
  - hidrive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi HiDrive ke Backblaze B2 — Transfer File dengan RcloneView

> Pindahkan file langsung dari HiDrive ke Backblaze B2 dengan RcloneView, tanpa perlu mengunduh ke drive lokal terlebih dahulu.

Tim yang telah melampaui kapasitas akun HiDrive sering beralih ke Backblaze B2 karena penyimpanan objek yang lebih murah dan model application key-nya, tetapi kedua layanan ini tidak dapat berkomunikasi secara langsung satu sama lain. RcloneView menjembatani keduanya dalam satu jendela: hubungkan keduanya sebagai remote, seret file antar panel, dan biarkan mesin rclone bawaan menangani transfer server-ke-server sejauh didukung oleh masing-masing penyedia. Tidak diperlukan ekspor manual atau folder penyimpanan sementara lokal untuk transfer itu sendiri.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan HiDrive dan Backblaze B2

Tambahkan HiDrive terlebih dahulu melalui **Remote tab → New Remote**. HiDrive menggunakan login browser OAuth, sehingga RcloneView akan membuka jendela browser agar Anda dapat masuk dan mengizinkan akses — tanpa perlu menyalin kunci API secara manual. Backblaze B2 disiapkan dengan cara berbeda: pilih Backblaze B2 sebagai jenis remote dan masukkan Application Key ID serta Application Key Anda, yang dibuat dari halaman manajemen kunci Backblaze. Setelah kedua remote muncul di Remote Manager, buka dua panel Explorer berdampingan — satu mengarah ke HiDrive, satu lagi ke bucket B2 Anda.

Berbeda dengan alat yang hanya mendukung mount, RcloneView juga melakukan sinkronisasi dan perbandingan folder antar remote seperti ini — dengan lisensi FREE.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote HiDrive di RcloneView" class="img-large img-center" />

## Menjalankan Transfer Sekali Jalan atau Sinkronisasi Berkala

Untuk migrasi sekali jalan, pilih folder di panel HiDrive, seret ke panel B2, lalu konfirmasi transfer — RcloneView memperlakukan seretan antar remote sebagai penyalinan, sehingga file asli di HiDrive tetap utuh sampai Anda yakin data telah sampai dengan benar. Untuk migrasi berkelanjutan di mana HiDrive terus menerima file baru selama masa transisi, buat pekerjaan Sync sebagai gantinya: pilih HiDrive sebagai sumber dan B2 sebagai tujuan dalam wizard 4 langkah, atur arah ke satu arah "Modifying destination only", dan jalankan secara manual setiap kali Anda ingin menyamakan perbedaannya.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Pekerjaan sinkronisasi cloud-ke-cloud dari HiDrive ke Backblaze B2" class="img-large img-center" />

Sebelum peralihan akhir, jalankan opsi Dry Run pekerjaan tersebut untuk melihat pratinjau file mana yang akan disalin dan file mana (jika ada) yang akan dihapus di sisi tujuan — pemeriksaan yang berguna sebelum mengarahkan alur kerja produksi ke bucket B2 yang baru.

## Memverifikasi dan Mengotomatiskan Perpindahan

Setelah migrasi awal selesai, gunakan Folder Compare untuk memeriksa kedua sisi file demi file, memastikan jumlah dan ukuran file cocok, alih-alih hanya mempercayai satu pesan status selesai. Jika migrasi perlu diulang sesuai jadwal — misalnya untuk mencerminkan unggahan baru ke HiDrive secara terus-menerus ke B2 selama masa transisi bertahap — lisensi PLUS membuka penjadwalan gaya crontab sehingga pekerjaan sinkronisasi dapat berjalan tanpa pengawasan pada interval yang sesuai dengan rencana peralihan.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Menjadwalkan pekerjaan sinkronisasi berkala dari HiDrive ke Backblaze B2" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan HiDrive melalui login browser OAuth di Remote Manager.
3. Tambahkan Backblaze B2 dengan Application Key ID dan Application Key Anda.
4. Jalankan Dry Run, lalu eksekusi pekerjaan transfer atau sinkronisasi antara kedua panel.

Setelah kedua remote dikonfigurasi, perpindahan dari HiDrive ke B2 hanyalah satu lagi tarik-dan-lepas atau pekerjaan terjadwal dalam antarmuka yang sama yang sudah Anda gunakan untuk pengelolaan file sehari-hari.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan HiDrive — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Mengelola Penyimpanan Backblaze B2 — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Menyinkronkan HiDrive ke Amazon S3 — Pencadangan Cloud dengan RcloneView](https://rcloneview.com/support/blog/sync-hidrive-to-amazon-s3-rcloneview)

<CloudSupportGrid />
