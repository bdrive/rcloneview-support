---
slug: manage-opendrive-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan Cloud OpenDrive — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - jay
description: "Hubungkan OpenDrive ke RcloneView dan kelola file Anda, otomatiskan pencadangan, dan sinkronkan data antar cloud dengan GUI yang tidak memerlukan pengetahuan command-line sama sekali."
keywords:
  - OpenDrive cloud storage RcloneView
  - OpenDrive sync GUI
  - manage OpenDrive files
  - OpenDrive backup tool
  - rclone OpenDrive GUI
  - OpenDrive file transfer
  - cloud storage management
  - OpenDrive desktop app
tags:
  - RcloneView
  - opendrive
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan Cloud OpenDrive — Sinkronisasi dan Pencadangan File dengan RcloneView

> Hubungkan OpenDrive ke RcloneView untuk manajemen file drag-and-drop, pencadangan terjadwal, dan transfer lintas cloud — tanpa memerlukan command line.

OpenDrive adalah platform penyimpanan cloud yang menawarkan paket personal dan bisnis dengan fokus pada berbagi file dan kolaborasi. Meskipun antarmuka webnya cukup untuk penggunaan santai, pengguna tingkat lanjut yang perlu memindahkan dataset besar, mengotomatiskan pencadangan, atau melakukan sinkronisasi ke cloud lain membutuhkan alat yang lebih mumpuni. RcloneView, didukung oleh backend OpenDrive milik rclone, menghadirkan GUI lengkap untuk akun OpenDrive Anda.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan OpenDrive ke RcloneView

Buka **Remote tab → New Remote** dan pilih OpenDrive dari daftar provider. Anda perlu melakukan autentikasi melalui OAuth — RcloneView akan membuka jendela browser agar Anda dapat masuk dengan kredensial OpenDrive dan memberikan akses. Setelah diotorisasi, remote akan tersimpan dan langsung tersedia di panel explorer Anda.

Explorer menampilkan folder dan file OpenDrive Anda beserta metadata lengkap: nama, ukuran, tanggal terakhir diubah, dan jenis file. Pohon folder di sebelah kiri memungkinkan Anda menjelajahi seluruh hierarki penyimpanan, sementara daftar file di sebelah kanan menampilkan isi folder yang dipilih dengan kolom yang dapat diurutkan. Tampilan thumbnail tersedia untuk folder yang berisi banyak gambar, sehingga memudahkan Anda menemukan apa yang dicari di pustaka foto atau aset.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring OpenDrive as a new remote in RcloneView" class="img-large img-center" />

## Mencadangkan File OpenDrive ke Drive Eksternal atau Cloud Lain

Bagi agensi desain kecil yang menyimpan file proyek klien di OpenDrive, memiliki salinan kedua di tempat lain sangatlah penting. RcloneView memudahkan pembuatan job pencadangan dari OpenDrive ke Amazon S3, Backblaze B2, atau bahkan drive eksternal lokal. Buka sumber (OpenDrive) di satu panel dan tujuan di panel lainnya, lalu gunakan Job Manager untuk mengonfigurasi job Sync.

Wizard job 4 langkah memungkinkan Anda mengatur jalur sumber dan tujuan, mengonfigurasi konkurensi transfer, mengaktifkan verifikasi checksum, dan menetapkan filter file (mengecualikan file sementara atau membatasi berdasarkan usia file). Dengan lisensi PLUS, Anda dapat menjadwalkan job untuk berjalan setiap malam atau sesuai jadwal crontab apa pun, memastikan data OpenDrive Anda selalu tercadangkan tanpa langkah manual apa pun.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling an OpenDrive backup job in RcloneView" class="img-large img-center" />

## Dry Run Sebelum Melakukan Sinkronisasi

Sebelum menjalankan operasi sinkronisasi berskala besar, gunakan mode **Dry Run** di RcloneView. Fitur ini mensimulasikan sinkronisasi dan menunjukkan file mana yang akan disalin, diperbarui, atau dihapus — tanpa melakukan perubahan sesungguhnya. Bagi tim yang memigrasikan pustaka OpenDrive besar ke provider baru, dry run sangat berharga untuk mendeteksi penghapusan file yang tidak diinginkan sebelum benar-benar terjadi.

Output dry run ditampilkan di tab Transferring dan tab Log, memberi Anda gambaran lengkap tentang operasi yang direncanakan. Setelah Anda yakin, jalankan sinkronisasi sesungguhnya hanya dengan satu klik.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring for an OpenDrive sync job" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka **Remote tab → New Remote**, pilih OpenDrive, dan selesaikan login OAuth.
3. Jelajahi dan kelola file OpenDrive Anda di explorer dual-pane.
4. Gunakan Job Manager untuk membuat pencadangan terjadwal ke tujuan pilihan Anda.

RcloneView menjadikan OpenDrive sebagai bagian utama dalam alur kerja cloud Anda, sejajar dengan Google Drive, S3, dan provider lain yang Anda gunakan.

---

**Panduan Terkait:**

- [Mencadangkan File OpenDrive ke AWS S3 dengan RcloneView](https://rcloneview.com/support/blog/backup-opendrive-aws-s3-external-storage-rcloneview)
- [Mengelola Beberapa Akun Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)
- [Mengotomatiskan Pencadangan Cloud Harian dengan RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
