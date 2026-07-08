---
slug: manage-hidrive-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan HiDrive — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - tayson
description: "Pelajari cara menghubungkan, menyinkronkan, dan mencadangkan penyimpanan cloud HiDrive menggunakan RcloneView. Kelola semua file HiDrive Anda dari GUI tanpa perlu perintah CLI."
keywords:
  - HiDrive RcloneView
  - sinkronisasi cloud HiDrive
  - pencadangan HiDrive
  - manajemen STRATO HiDrive
  - transfer file HiDrive
  - GUI rclone HiDrive
  - alat sinkronisasi HiDrive
  - manajemen penyimpanan cloud HiDrive
tags:
  - RcloneView
  - hidrive
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan HiDrive — Sinkronisasi dan Pencadangan File dengan RcloneView

> RcloneView menghadirkan kontrol GUI penuh untuk HiDrive, memungkinkan Anda menjelajahi, menyinkronkan, mencadangkan, dan menjadwalkan transfer tanpa perlu membuka command line.

HiDrive, yang disediakan oleh STRATO dan dioperasikan di berbagai pusat data Eropa, menjadi pilihan populer bagi pengguna yang peduli privasi dan bisnis yang tunduk pada GDPR. Mengelola HiDrive secara programatik dengan rclone sebenarnya selalu memungkinkan, tetapi RcloneView membungkus kemampuan tersebut dalam antarmuka yang bersih — membuat transfer file, pencadangan terjadwal, dan sinkronisasi lintas cloud dapat diakses oleh siapa saja di Windows, macOS, atau Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan HiDrive ke RcloneView

Menambahkan HiDrive sebagai remote di RcloneView sangatlah mudah. Klik **Remote tab → New Remote**, gulir ke HiDrive dalam daftar penyedia, dan ikuti proses login OAuth melalui browser. RcloneView akan membuka browser default Anda, Anda melakukan autentikasi dengan kredensial STRATO Anda, dan remote tersebut akan disimpan secara otomatis — tanpa perlu menyalin token secara manual.

Setelah terhubung, folder HiDrive Anda akan langsung muncul di panel Explorer. Anda dapat membuka beberapa tab untuk membandingkan folder lokal dengan cadangan HiDrive Anda, atau membagi tampilan untuk menampilkan HiDrive berdampingan dengan cloud lain seperti Amazon S3.

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive as a new remote in RcloneView" class="img-large img-center" />

HiDrive mendukung operasi file standar melalui RcloneView: unggah, unduh, ganti nama, hapus, buat folder baru, dan pembuatan tautan publik. Seret dan lepas file dari Windows Explorer langsung ke panel Explorer HiDrive untuk mengunggah, atau seret antar-panel untuk memicu penyalinan cloud-ke-cloud.

## Menjadwalkan Pencadangan HiDrive Otomatis

Bagi bisnis yang menyimpan arsip proyek atau hasil kerja klien di HiDrive, pencadangan otomatis sangatlah penting. Job Manager RcloneView (lisensi PLUS) memungkinkan Anda mengonfigurasi jadwal bergaya crontab — misalnya, sinkronisasi malam hari dari folder lokal `D:\Projects` ke `hidrive:Backups/Projects` setiap hari pukul 02.00.

Wizard sinkronisasi 4 langkah akan memandu Anda melalui pemilihan sumber dan tujuan, pengaturan konkurensi transfer, filter file, dan jadwal. Aktifkan verifikasi checksum pada Langkah 2 untuk memastikan integritas file byte demi byte, alih-alih hanya mengandalkan waktu modifikasi — hal ini penting saat menyinkronkan ke server Eropa di mana perbedaan zona waktu dapat menyebabkan ketidakcocokan yang salah.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting up a scheduled HiDrive backup job in RcloneView" class="img-large img-center" />

Gunakan opsi Dry Run sebelum sinkronisasi langsung pertama untuk melihat pratinjau file mana yang akan disalin atau dihapus. Ini sangat berguna saat menyiapkan sinkronisasi satu arah di mana file tujuan dapat ditimpa.

## Memantau Transfer dan Riwayat Job

Tab **Transferring** di bagian bawah RcloneView memberikan visibilitas real-time atas transfer HiDrive yang sedang berlangsung: jumlah file, kecepatan transfer, byte yang dipindahkan, dan waktu yang telah berlalu. Jika sebuah job gagal karena gangguan jaringan, RcloneView akan mencoba ulang secara otomatis (default: 3 kali percobaan ulang).

Tab **Job History** menyimpan log lengkap dari semua proses sebelumnya — jenis eksekusi (manual atau terjadwal), waktu mulai, durasi, status, dan total ukuran yang ditransfer. Bagi tim kepatuhan yang perlu menunjukkan bukti aktivitas perlindungan data secara berkala, jejak audit ini sangat berguna.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing HiDrive backup job history in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka RcloneView dan klik **Remote tab → New Remote**, pilih HiDrive, dan selesaikan login OAuth.
3. Gunakan panel Explorer untuk menjelajahi folder HiDrive Anda dan memverifikasi koneksi.
4. Buka **Job Manager**, buat job Sync baru dari drive lokal Anda ke HiDrive, dan atur jadwalnya.

Dengan RcloneView, HiDrive menjadi bagian yang sepenuhnya terkelola dari strategi pencadangan Anda — dijadwalkan, dipantau, dan diverifikasi secara otomatis.

---

**Panduan Terkait:**

- [Kelola Penyimpanan OneDrive — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Kelola Jottacloud — Sinkronisasi Cloud dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Otomatiskan Pencadangan Cloud Harian dengan RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
