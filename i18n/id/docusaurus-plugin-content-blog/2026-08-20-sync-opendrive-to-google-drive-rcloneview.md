---
slug: sync-opendrive-to-google-drive-rcloneview
title: "Menyinkronkan OpenDrive ke Google Drive — Pencadangan Cloud dengan RcloneView"
authors:
  - kai
description: "Sinkronkan folder OpenDrive ke Google Drive dengan RcloneView, menggunakan Folder Compare dan tugas terjadwal agar kedua cloud tetap selaras."
keywords:
  - sinkronkan OpenDrive ke Google Drive
  - pencadangan OpenDrive Google Drive
  - sinkronisasi RcloneView OpenDrive
  - pencadangan cloud OpenDrive
  - sinkronisasi cloud ke cloud
  - OpenDrive Google Drive RcloneView
  - alat pencadangan multi-cloud
  - perbandingan folder OpenDrive
tags:
  - RcloneView
  - opendrive
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Menyinkronkan OpenDrive ke Google Drive — Pencadangan Cloud dengan RcloneView

> Jaga agar folder OpenDrive tetap tercermin di Google Drive tanpa perlu mengunduh apa pun ke disk lokal terlebih dahulu.

Tim yang menyimpan file kerja di OpenDrive tetapi berkolaborasi dengan klien atau mitra di Google Drive biasanya akhirnya menyalin file secara manual bolak-balik, yang membuat keduanya tidak lagi selaras begitu salah satu sisi berubah. RcloneView menghubungkan kedua remote dalam satu jendela dan menyinkronkan langsung di antara keduanya, sehingga transfer berjalan cloud-ke-cloud, bukan melalui folder lokal. Berbeda dengan alat yang hanya mendukung mount, RcloneView juga menyinkronkan dan membandingkan folder — pada lisensi FREE sekalipun.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menyiapkan Remote OpenDrive dan Google Drive

Tambahkan OpenDrive sebagai remote terlebih dahulu di Remote Manager, lalu tambahkan Google Drive menggunakan login OAuth berbasis browser — setelah dikonfigurasi, kedua remote akan muncul sebagai tab terpisah di File Explorer, sehingga Anda dapat menelusuri masing-masing sisi secara independen sebelum membangun tugas sinkronisasi. Pastikan Anda dapat menampilkan daftar folder di kedua remote sebelum melanjutkan ke wizard sinkronisasi — remote yang gagal saat ditelusuri juga akan gagal di tengah sinkronisasi, dan lebih mudah menangkap masalah tersebut sejak awal.

<img src="/support/images/en/blog/new-remote.png" alt="Adding OpenDrive and Google Drive remotes in RcloneView" class="img-large img-center" />

## Mengonfigurasi Tugas Sinkronisasi Satu Arah

Di wizard sinkronisasi, pilih folder OpenDrive sebagai sumber dan folder Google Drive target sebagai tujuan, lalu pilih sinkronisasi satu arah sehingga OpenDrive tetap menjadi sumber kebenaran. Atur jumlah transfer file dan pemeriksa kesetaraan di Advanced Settings sesuai ukuran folder — nilai default cocok untuk sebagian besar kasus, tetapi folder dengan puluhan ribu file kecil akan diuntungkan dengan jumlah pemeriksa kesetaraan yang lebih rendah jika OpenDrive merespons permintaan metadata dengan lambat.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from OpenDrive to Google Drive in RcloneView" class="img-large img-center" />

Jalankan Dry Run sebelum sinkronisasi nyata pertama untuk melihat pratinjau file mana yang akan disalin — ini mencegah transfer seluruh folder yang tidak diinginkan sebelum terjadi, terutama berguna saat pertama kali mengarahkan tugas ke folder OpenDrive yang sudah ada.

## Memverifikasi Hasil dengan Folder Compare

Setelah sinkronisasi awal selesai, buka Folder Compare dan arahkan ke kedua folder yang sama untuk memastikan kedua sisi cocok. Folder Compare menyoroti file yang hanya ada di satu sisi atau berbeda ukurannya, yang merupakan cara lebih cepat untuk menemukan transfer sebagian dibandingkan menelusuri Job History untuk mencari error.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing OpenDrive and Google Drive folders after sync in RcloneView" class="img-large img-center" />

## Menjadwalkan Sinkronisasi Berkelanjutan

Setelah sinkronisasi awal diverifikasi, simpan tugas di Job Manager dan konfigurasikan penjadwalan bergaya crontab — tersedia dengan lisensi PLUS — sehingga perubahan OpenDrive disebarkan ke Google Drive pada interval tetap alih-alih memerlukan eksekusi manual setiap kali. Job History menyimpan catatan setiap eksekusi terjadwal, termasuk ukuran transfer dan jumlah file, sehingga Anda dapat memastikan jadwal tersebut benar-benar berjalan sesuai harapan.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring OpenDrive to Google Drive sync job in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan OpenDrive dan Google Drive sebagai remote di Remote Manager.
3. Buat tugas sinkronisasi satu arah dengan Dry Run terlebih dahulu, lalu jalankan secara nyata.
4. Verifikasi dengan Folder Compare, dan jika perlu, simpan tugas dengan jadwal untuk pencadangan berkelanjutan.

Dengan kedua remote terlihat berdampingan, menjaga OpenDrive dan Google Drive tetap selaras menjadi tugas sinkronisasi rutin, bukan lagi pekerjaan manual.

---

**Panduan Terkait:**

- [Mengelola File OpenDrive dan Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-opendrive-cloud-sync-backup-rcloneview)
- [Mencadangkan OpenDrive ke AWS S3 dan Penyimpanan Eksternal dengan RcloneView](https://rcloneview.com/support/blog/backup-opendrive-aws-s3-external-storage-rcloneview)
- [Menyinkronkan Box ke Google Drive dengan RcloneView](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)

<CloudSupportGrid />
