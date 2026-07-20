---
slug: manage-synology-c2-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan Synology C2 — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - tayson
description: "Hubungkan Synology C2 ke RcloneView dan kelola pencadangan cloud Anda dengan mudah. Sinkronkan file, jadwalkan tugas, dan pantau transfer melalui GUI desktop yang rapi."
keywords:
  - Synology C2 RcloneView
  - pencadangan Synology C2
  - kelola penyimpanan Synology C2
  - Synology C2 rclone GUI
  - sinkronisasi cloud kompatibel S3
  - pencadangan penyimpanan cloud Synology
  - otomatisasi sinkronisasi Synology C2
  - pengaturan S3 RcloneView
  - transfer file Synology C2
  - pencadangan terjadwal Synology C2
tags:
  - RcloneView
  - synology
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan Synology C2 — Sinkronisasi dan Pencadangan File dengan RcloneView

> Synology C2 adalah penyimpanan cloud yang dirancang khusus oleh Synology — dan dengan RcloneView Anda dapat mengelolanya dari antarmuka visual tanpa menulis satu pun perintah.

Synology C2 adalah layanan penyimpanan cloud yang dirancang untuk memperluas ekosistem pemilik Synology NAS, menawarkan penyimpanan objek yang kompatibel dengan S3 dan terintegrasi mulus dengan alat berbasis rclone. Baik Anda menjalankan DiskStation di rumah, mengelola server file bisnis kecil, atau membutuhkan lapisan pencadangan off-site tambahan, RcloneView memudahkan Anda menjelajahi, menyinkronkan, dan mengotomatiskan transfer ke dan dari Synology C2. Karena Synology C2 menyediakan API standar yang kompatibel dengan S3, Anda mendapatkan performa rclone yang andal seperti yang Anda harapkan dari penyedia penyimpanan objek besar mana pun — dibungkus dalam GUI desktop yang bersih.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Synology C2 sebagai Remote yang Kompatibel dengan S3

Synology C2 Object Storage menggunakan API standar yang kompatibel dengan S3, sehingga Anda menghubungkannya di dalam RcloneView dengan memilih Amazon S3 sebagai jenis remote dan mengarahkannya ke endpoint Synology C2. Buka tab Remote, klik New Remote, dan pilih Amazon S3 sebagai provider. Masukkan Access Key ID C2, Secret Access Key, dan endpoint regional untuk akun C2 Anda — tersedia di portal Synology C2 setelah Anda membuat penyimpanan dan menghasilkan pasangan kunci akses. Atur kolom region agar sesuai dengan region C2 Anda lalu simpan.

Setelah remote dibuat, remote tersebut akan muncul di panel Explorer Anda seperti penyimpanan cloud lainnya. Anda dapat menjelajahi bucket dan folder, memeriksa ukuran file dan tanggal modifikasi, serta menavigasi struktur direktori bertingkat tanpa meninggalkan GUI.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Synology C2 S3-compatible remote in RcloneView" class="img-large img-center" />

## Menjelajahi dan Mentransfer File

Dengan remote Synology C2 Anda terbuka di satu panel Explorer dan drive lokal atau cloud lain di panel sebelahnya, Anda dapat menyeret file di antara keduanya untuk memulai transfer secara langsung. RcloneView mengonfirmasi operasi tersebut sebelum menyentuh apa pun, dan tab Transferring di bagian bawah layar menampilkan progres langsung: jumlah file, byte yang ditransfer, dan throughput saat ini.

Untuk volume besar — misalnya studio fotografi yang mencadangkan 2 TB file RAW — mesin multi-thread RcloneView memindahkan banyak file secara paralel. Anda dapat mengonfigurasi jumlah stream transfer bersamaan di Advanced Settings tugas untuk memaksimalkan throughput tanpa membebani koneksi jaringan Anda.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files into Synology C2 storage in RcloneView" class="img-large img-center" />

## Membuat Tugas Sinkronisasi untuk Pencadangan Berkelanjutan

Selain transfer sekali jalan, Job Manager RcloneView memungkinkan Anda mendefinisikan tugas Sync yang menjaga folder sumber tetap tercermin ke bucket Synology C2 sesuai permintaan atau jadwal. Pilih Sync sebagai jenis tugas, pilih sumber Anda — folder lokal, remote Synology NAS, atau cloud lain — arahkan tujuan ke bucket C2 Anda, dan konfigurasikan preferensi penyaringan: batas usia file, batas ukuran, dan pengecualian ekstensi semuanya dapat dikonfigurasi tanpa mengedit file konfigurasi apa pun.

Sebelum sinkronisasi langsung pertama, jalankan Dry Run bawaan. Fitur ini menunjukkan dengan tepat file mana yang akan disalin atau dihapus sehingga tidak ada kejutan ketika ribuan file terlibat. Job History mencatat setiap eksekusi dengan stempel waktu, jumlah file, ukuran transfer, dan kode status untuk jejak audit lengkap.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Synology C2 in RcloneView" class="img-large img-center" />

## Menjadwalkan Pencadangan Otomatis (Lisensi PLUS)

Untuk perlindungan data tanpa perlu campur tangan manual, lisensi PLUS RcloneView membuka penjadwalan bergaya crontab. Atur tugas sinkronisasi Synology C2 untuk berjalan setiap malam, mingguan, atau pada interval kustom apa pun dengan mengisi kolom Minute, Hour, dan Day-of-Week di langkah Schedule pada wizard tugas. RcloneView menjalankan transfer pada waktu yang dikonfigurasi dan mencatat hasilnya di Job History — memberi Anda jejak audit lengkap untuk memverifikasi bahwa pencadangan telah berjalan dan mengonfirmasi persis file mana yang ditransfer, bahkan ketika Anda sedang jauh dari mesin tersebut.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Synology C2 backup job in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Di portal Synology C2, buat storage bucket dan hasilkan pasangan kunci akses.
3. Di RcloneView, buka tab Remote > New Remote, pilih Amazon S3, dan masukkan Access Key ID C2, Secret Access Key, dan endpoint regional Anda.
4. Buka bucket C2 di panel Explorer berdampingan dengan sumber Anda, buat tugas Sync di Job Manager, dan jalankan Dry Run terlebih dahulu.
5. Aktifkan penjadwalan (lisensi PLUS) untuk mengotomatiskan pencadangan malam hari atau mingguan tanpa intervensi manual.

Synology C2 memberi Anda lapisan pencadangan off-site yang terintegrasi erat — RcloneView mengubahnya menjadi alur kerja terjadwal dan termonitor yang dapat Anda siapkan dalam hitungan menit.

---

**Panduan Terkait:**

- [Mencadangkan NAS ke Beberapa Cloud dengan RcloneView](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)
- [Mengelola Sinkronisasi dan Pencadangan Wasabi Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Mencadangkan Synology Tanpa Hyper Backup — RcloneView](https://rcloneview.com/support/blog/backup-synology-without-hyper-backup-rcloneview)

<CloudSupportGrid />
