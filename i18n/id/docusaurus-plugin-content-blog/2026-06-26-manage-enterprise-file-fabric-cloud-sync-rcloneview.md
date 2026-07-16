---
slug: manage-enterprise-file-fabric-cloud-sync-rcloneview
title: "Kelola Penyimpanan Enterprise File Fabric — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - morgan
description: "Hubungkan, sinkronkan, dan cadangkan penyimpanan Enterprise File Fabric menggunakan RcloneView — GUI multi-cloud lintas platform berbasis rclone untuk Windows, macOS, dan Linux."
keywords:
  - Enterprise File Fabric RcloneView
  - sinkronisasi Enterprise File Fabric
  - sinkronisasi cloud Enterprise File Fabric
  - pencadangan Enterprise File Fabric
  - kelola file Enterprise File Fabric
  - manajemen penyimpanan cloud enterprise
  - RcloneView penyimpanan enterprise
  - klien GUI Enterprise File Fabric
tags:
  - RcloneView
  - enterprise
  - cloud-storage
  - cloud-sync
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan Enterprise File Fabric — Sinkronisasi dan Pencadangan File dengan RcloneView

> RcloneView terhubung langsung ke Enterprise File Fabric, memungkinkan Anda menjelajahi, menyinkronkan, dan mencadangkan penyimpanan file terkelola organisasi Anda tanpa menulis satu pun perintah CLI.

Enterprise File Fabric adalah platform layanan konten cloud yang digunakan oleh organisasi yang perlu menggabungkan berbagai backend penyimpanan yang berbeda di bawah satu lapisan tata kelola. Baik tim Anda menyimpan file proyek, catatan kepatuhan, atau aset digital bersama di sana, menjaga konten tersebut tetap tersinkronisasi dan tercadangkan memerlukan alat yang andal dan mampu bekerja lintas cloud. RcloneView — klien GUI berbasis Flutter yang dibangun di atas rclone — menangani Enterprise File Fabric bersama dengan lebih dari 90 penyedia cloud lainnya dari satu antarmuka terpadu di Windows, macOS, dan Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Enterprise File Fabric di RcloneView

Menambahkan Enterprise File Fabric sebagai remote hanya membutuhkan waktu beberapa menit melalui wizard remote baru bawaan RcloneView. Buka tab **Remote**, klik **New Remote**, lalu pilih Enterprise File Fabric dari daftar penyedia. Masukkan URL endpoint dan token API Anda — kredensial yang sama yang digunakan organisasi Anda untuk akses API — lalu simpan. Remote akan langsung muncul di panel explorer, tempat Anda dapat menjelajahi folder, melihat jumlah dan ukuran file, serta menyalin path langsung dari breadcrumb bar.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Enterprise File Fabric remote in RcloneView" class="img-large img-center" />

Berbeda dengan alat yang hanya melakukan mount, RcloneView juga dapat menyinkronkan dan membandingkan folder pada lisensi FREE, sehingga Anda dapat melangkah lebih jauh dari sekadar pemetaan drive dan mengelola konten Enterprise File Fabric secara aktif di seluruh lingkungan cloud Anda.

## Menyinkronkan Enterprise File Fabric ke Tujuan Cloud Lain

Skenario umum Enterprise File Fabric adalah mereplikasi konten terkelola ke tujuan cloud sekunder untuk pemulihan bencana atau pengarsipan jangka panjang. Di wizard sinkronisasi RcloneView, atur Enterprise File Fabric sebagai sumber dan pilih tujuan apa pun — Amazon S3, Backblaze B2, Google Drive, atau server SFTP on-premises. Wizard 4 langkah ini memandu Anda melalui konkurensi transfer, verifikasi checksum, dan filter usia file sehingga Anda hanya memindahkan apa yang Anda butuhkan.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job from Enterprise File Fabric in RcloneView" class="img-large img-center" />

Selalu jalankan **Dry Run** sebelum transfer sesungguhnya. RcloneView akan menampilkan daftar file yang akan disalin atau dilewati, sehingga Anda dapat menyempurnakan aturan filter sebelum satu byte pun dipindahkan. Untuk replikasi 1:N — menduplikasi folder Enterprise File Fabric yang sama ke beberapa tujuan secara bersamaan — cukup tambahkan path tujuan tambahan di Langkah 1. Fitur ini tersedia pada lisensi FREE tanpa batasan jumlah tujuan.

## Menjadwalkan Pencadangan Otomatis

Organisasi yang menggunakan Enterprise File Fabric sering kali memerlukan jendela pencadangan malam atau mingguan yang berjalan tanpa campur tangan manusia. **Lisensi PLUS** membuka penjadwalan bergaya crontab langsung di dalam RcloneView. Konfigurasikan bidang menit, jam, hari-dalam-minggu, dan bulan untuk menjalankan tugas sinkronisasi Enterprise File Fabric Anda pada interval apa pun. Alat **Simulate schedule** bawaan menampilkan pratinjau beberapa waktu eksekusi berikutnya sehingga Anda dapat memastikan waktunya sebelum menerapkannya.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling an Enterprise File Fabric backup job in RcloneView" class="img-large img-center" />

Notifikasi penyelesaian tugas membuat tim operasi tetap mendapat informasi bahkan ketika aplikasi berjalan diminimalkan di system tray.

## Memantau Riwayat Transfer dan Jejak Audit

Setiap tugas sinkronisasi Enterprise File Fabric dicatat di tampilan **Job History** RcloneView beserta waktu mulai, durasi, kecepatan transfer, jumlah file, dan status akhir. Saring riwayat berdasarkan rentang tanggal atau hasil untuk memverifikasi kepatuhan SLA dan mengaudit pergerakan data — praktis untuk organisasi dengan persyaratan retensi atau tata kelola seputar platform penyimpanan file terkelola mereka.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Enterprise File Fabric transfers in RcloneView" class="img-large img-center" />

Tab terminal rclone di dalam RcloneView juga memungkinkan pengguna tingkat lanjut menjalankan perintah `rclone` khusus terhadap remote Enterprise File Fabric mereka tanpa meninggalkan GUI — berguna untuk kueri ad-hoc atau operasi satu kali.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka tab **Remote** dan klik **New Remote**, lalu pilih Enterprise File Fabric.
3. Masukkan URL endpoint dan token API Enterprise File Fabric Anda, lalu simpan remote tersebut.
4. Buat tugas sinkronisasi, tetapkan tujuan pencadangan pilihan Anda, dan jalankan **Dry Run** terlebih dahulu.
5. (PLUS) Aktifkan eksekusi terjadwal untuk mengotomatiskan pencadangan berkelanjutan dengan peringatan email atau Slack.

Memusatkan manajemen Enterprise File Fabric di dalam RcloneView menghilangkan penyebaran alat yang berlebihan dan memberi tim Anda satu catatan tunggal yang dapat diaudit untuk setiap pergerakan data cloud.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan SharePoint dengan RcloneView](https://rcloneview.com/support/blog/manage-sharepoint-cloud-sync-backup-rcloneview)
- [Mengelola Azure Files dengan RcloneView](https://rcloneview.com/support/blog/manage-azure-files-cloud-sync-rcloneview)
- [Penyimpanan Cloud untuk Tim DevOps & Software dengan RcloneView](https://rcloneview.com/support/blog/cloud-storage-devops-software-teams-rcloneview)

<CloudSupportGrid />
