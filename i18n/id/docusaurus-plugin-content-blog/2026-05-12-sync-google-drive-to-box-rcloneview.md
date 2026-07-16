---
slug: sync-google-drive-to-box-rcloneview
title: "Sinkronisasi Google Drive ke Box — Pencadangan Cloud dengan RcloneView"
authors:
  - kai
description: "Pelajari cara menyinkronkan Google Drive ke Box dengan RcloneView. Transfer file antar kedua platform, otomatiskan pencadangan lintas-cloud, dan jaga tim Anda tetap tersinkron."
keywords:
  - sinkronisasi Google Drive ke Box
  - Google Drive Box RcloneView
  - sinkronisasi cloud-ke-cloud RcloneView
  - pencadangan Google Drive Box
  - migrasi Google Drive Box
  - transfer lintas-cloud RcloneView
  - otomatisasi pencadangan Google Drive Box
  - sinkronisasi Google Workspace Box
  - pencadangan cloud Box RcloneView
  - transfer file Google Drive Box
tags:
  - RcloneView
  - google-drive
  - box
  - cloud-to-cloud
  - cloud-sync
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Google Drive ke Box — Pencadangan Cloud dengan RcloneView

> Ketika tim Anda menyimpan konten di Google Workspace dan Box, RcloneView menjembatani keduanya tanpa perlu scripting sama sekali.

Banyak organisasi menyimpan file aktif di Google Drive sementara Box berfungsi sebagai arsip kepatuhan, portal klien, atau berbagi departemen. Menjaga kedua platform tersebut tetap sinkron secara manual rentan kesalahan dan memakan waktu. RcloneView menyediakan alur kerja point-and-click untuk menarik konten dari Google Drive dan mendorongnya ke Box — baik untuk migrasi satu kali, pencadangan inkremental setiap malam, maupun salinan yang terus diperbarui untuk keperluan audit. Karena kedua layanan didukung secara native oleh rclone, transfer berjalan efisien dan terverifikasi checksum.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Google Drive dan Box ke RcloneView

Google Drive dan Box sama-sama menggunakan autentikasi browser OAuth di RcloneView, sehingga pengaturan hanya butuh waktu kurang dari dua menit per akun. Buka tab Remote, klik New Remote, lalu pilih Google Drive. Jendela browser akan terbuka agar Anda dapat masuk ke akun Google dan memberikan izin — tanpa perlu membuat API key secara manual. Ulangi langkah yang sama untuk Box: New Remote, pilih Box, lalu selesaikan alur OAuth browser.

Jika Anda bekerja dengan Google Shared Drive (Team Drive), aktifkan opsi `shared_with_me` saat pengaturan, atau tentukan Shared Drive ID sebagai folder root agar seluruh konten tim terlihat di panel Explorer. Untuk akun Box for Business, atur `box_sub_type = enterprise` saat membuat remote untuk membuka folder dan izin enterprise.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Box remotes in RcloneView" class="img-large img-center" />

## Menjalankan Transfer Cloud-ke-Cloud

Buka Google Drive di panel Explorer kiri dan Box di panel kanan. Navigasikan ke folder sumber di Google Drive — folder `Projects` bersama tim Anda atau direktori deliverable klien — lalu pilih item yang ingin Anda salin dan seret ke panel Box. RcloneView mengonfirmasi operasi penyalinan dan mengalirkan data langsung antar kedua layanan cloud, sementara komputer lokal Anda hanya berfungsi sebagai control plane, sehingga penggunaan bandwidth Anda sendiri tetap rendah.

Tab Transferring di bagian bawah layar menampilkan progres secara langsung: kecepatan saat ini, jumlah file, dan total byte yang dipindahkan. Untuk transfer besar yang mencakup file presentasi, aset video, dan spreadsheet, mesin multi-thread RcloneView memindahkan beberapa file secara bersamaan, yang secara signifikan mengurangi total waktu transfer dibandingkan penyalinan berurutan.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Google Drive to Box in RcloneView" class="img-large img-center" />

## Menyiapkan Sync Job untuk Pencadangan Berkelanjutan

Untuk pencadangan berulang, gunakan Job Manager untuk membuat Sync job. Pilih folder Google Drive sebagai sumber, folder Box sebagai tujuan, dan konfigurasikan aturan filtering — misalnya, mengecualikan file shortcut Google Docs `.gdoc` atau membatasi sinkronisasi hanya pada konten yang dimodifikasi dalam 30 hari terakhir. Mode sinkronisasi satu arah menulis perubahan ke Box tanpa mengubah konten Google Drive Anda, sehingga aman dijalankan pada workspace produksi yang aktif.

Sebelum menjalankan yang pertama secara langsung, gunakan opsi Dry Run untuk melihat pratinjau file mana saja yang akan disalin atau ditimpa. Job History mencatat setiap eksekusi dengan timestamp, ukuran transfer, dan status code, memberikan jejak audit yang jelas bagi tim kepatuhan.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Google Drive to Box sync job in RcloneView" class="img-large img-center" />

## Mengotomatiskan dengan Scheduled Sync (Lisensi PLUS)

Dengan lisensi PLUS, Anda dapat menjadwalkan sinkronisasi Google Drive → Box agar berjalan otomatis pada interval crontab apa pun — setiap tengah malam, setiap Senin pagi, atau pada jadwal khusus sesuai kebijakan IT Anda. Isi bidang Minute, Hour, dan Day-of-Week pada langkah Schedule di job wizard. Setiap eksekusi dicatat dalam Job History dengan timestamp dan status code, sehingga tim kepatuhan Anda dapat mengaudit dengan tepat kapan sinkronisasi berjalan dan apakah berhasil.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Google Drive to Box automated sync in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan akun Google Drive Anda melalui Remote tab > New Remote > Google Drive (login OAuth browser).
3. Tambahkan akun Box Anda melalui Remote tab > New Remote > Box (login OAuth browser).
4. Buka kedua remote berdampingan di panel Explorer, seret file untuk penyalinan langsung, atau buat Sync job di Job Manager untuk alur kerja yang dapat diulang.
5. Aktifkan penjadwalan (lisensi PLUS) untuk mengotomatiskan sinkronisasi secara berkala dan siapkan notifikasi penyelesaian.

Sinkronisasi Google Drive-ke-Box yang terjaga dengan baik membuat arsip kepatuhan Anda tetap terkini dan akses file lintas platform tetap konsisten — RcloneView menjadikannya pengaturan lima menit.

---

**Panduan Terkait:**

- [Kelola Sinkronisasi Cloud dan Pencadangan Google Drive dengan RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Kelola Sinkronisasi Cloud dan Pencadangan Box dengan RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Sinkronisasi Box ke Google Drive — Pencadangan Cloud dengan RcloneView](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)

<CloudSupportGrid />
