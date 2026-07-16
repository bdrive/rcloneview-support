---
slug: sync-hidrive-to-google-drive-rcloneview
title: "Sinkronisasi HiDrive ke Google Drive — Pencadangan Cloud dengan RcloneView"
authors:
  - tayson
description: "Sinkronisasi penyimpanan Strato HiDrive Anda ke Google Drive dengan RcloneView. Otomatiskan pencadangan cloud, transfer file langsung antar penyedia, dan jaga kedua akun tetap sinkron."
keywords:
  - sync HiDrive to Google Drive
  - HiDrive Google Drive sync RcloneView
  - Strato HiDrive backup to Google Drive
  - HiDrive cloud migration
  - move files HiDrive Google Drive
  - HiDrive sync tool GUI
  - Google Drive backup from HiDrive
  - RcloneView HiDrive sync
  - HiDrive file transfer tool
  - cloud to cloud sync HiDrive
tags:
  - hidrive
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi HiDrive ke Google Drive — Pencadangan Cloud dengan RcloneView

> RcloneView menjaga Strato HiDrive dan Google Drive Anda tetap sinkron secara otomatis — transfer cloud-to-cloud langsung dengan tugas terjadwal dan pemantauan transfer yang lengkap.

Strato HiDrive banyak digunakan di negara-negara berbahasa Jerman untuk penyimpanan cloud yang aman dengan kepatuhan GDPR yang kuat. Tim yang menggunakan HiDrive bersama Google Workspace sering perlu menyinkronkan konten antara kedua platform tersebut — menjaga file proyek tetap dapat diakses dari kedua lingkungan. RcloneView menangani sinkronisasi ini dengan andal, terhubung ke kedua penyedia dan menjalankan transfer otomatis sesuai jadwal apa pun yang Anda tentukan.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan HiDrive dan Google Drive di RcloneView

Baik HiDrive maupun Google Drive menggunakan autentikasi berbasis OAuth di RcloneView. Buka tab Remote > New Remote:

- **HiDrive:** Pilih HiDrive dan selesaikan login OAuth dengan kredensial Strato HiDrive Anda
- **Google Drive:** Pilih Google Drive dan selesaikan autentikasi OAuth berbasis browser

RcloneView menyimpan token dengan aman dan menyegarkannya secara otomatis saat kedaluwarsa. Buka kedua remote di penjelajah panel ganda untuk melihat apa yang ada di masing-masing sisi sebelum mengonfigurasi sinkronisasi.

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive and Google Drive remotes in RcloneView" class="img-large img-center" />

## Mengonfigurasi Tugas Sinkronisasi HiDrive ke Google Drive

Buat tugas sinkronisasi di wizard RcloneView dengan HiDrive sebagai sumber dan folder Google Drive sebagai tujuan. Untuk sebuah perusahaan konsultan yang menyimpan hasil kerja klien di HiDrive dan membagikannya melalui Google Workspace, tugas sinkronisasi harian memastikan salinan di Google Drive tetap terkini setelah setiap hari kerja.

Di pengaturan lanjutan, atur jumlah transfer bersamaan agar sesuai dengan bandwidth Anda, dan aktifkan verifikasi **checksum** jika integritas data lintas akun sangat penting. Opsi filter yang telah ditentukan dapat mengecualikan jenis file tertentu (misalnya, cache thumbnail HiDrive atau file sementara) dari sinkronisasi.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring HiDrive to Google Drive sync in RcloneView" class="img-large img-center" />

## Menjadwalkan Sinkronisasi Otomatis (PLUS)

Dengan lisensi PLUS, jadwalkan tugas sinkronisasi HiDrive-ke-Google Drive agar berjalan secara otomatis. Contoh pengaturan umum: sinkronkan HiDrive ke Google Drive setiap malam pukul 19.00 untuk menangkap hasil kerja hari itu. Gunakan fitur **Simulate schedule** untuk memverifikasi bahwa ekspresi cron Anda menghasilkan waktu jalan yang diharapkan sebelum mengaktifkannya.

Opsi Auto Start Schedule on Startup memastikan tugas terjadwal dilanjutkan setelah mesin dinyalakan ulang — penting untuk tugas sinkronisasi yang berjalan pada workstation bersama.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling HiDrive to Google Drive sync in RcloneView" class="img-large img-center" />

## Memantau Status dan Riwayat Sinkronisasi

Tab Transfer RcloneView menampilkan progres sinkronisasi secara langsung. Setelah setiap sinkronisasi selesai, Job History mencatat proses tersebut: file yang ditransfer, byte yang dipindahkan, kecepatan, dan durasi. Jika API Google Drive membatasi permintaan selama sinkronisasi besar, log menampilkan peristiwa percobaan ulang — membantu Anda menyesuaikan pengaturan transfer bersamaan untuk tugas di masa mendatang.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for HiDrive to Google Drive sync in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan HiDrive dan Google Drive sebagai remote OAuth di tab Remote > New Remote.
3. Buat tugas Sync atau Copy dari HiDrive ke folder Google Drive Anda.
4. Jadwalkan proses otomatis dengan lisensi PLUS dan pantau progres di Job History.

Menjaga HiDrive dan Google Drive tetap sinkron menjadi mudah dengan mesin sinkronisasi otomatis RcloneView — data berpindah langsung di cloud tanpa langkah manual yang diperlukan.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan HiDrive — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Mengelola Penyimpanan Google Drive — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Sinkronisasi HiDrive ke OneDrive dengan RcloneView](https://rcloneview.com/support/blog/sync-hidrive-to-onedrive-rcloneview)

<CloudSupportGrid />
