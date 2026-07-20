---
slug: sync-google-photos-to-backblaze-b2-rcloneview
title: "Sinkronisasi Google Photos ke Backblaze B2 — Pencadangan Cloud dengan RcloneView"
authors:
  - tayson
description: "Cadangkan pustaka Google Photos Anda ke Backblaze B2 dengan RcloneView. Otomatiskan pengarsipan foto dari Google Photos langsung ke object storage — tanpa unduhan manual."
keywords:
  - sync Google Photos to Backblaze B2
  - Google Photos Backblaze B2 backup
  - RcloneView Google Photos backup
  - Google Photos to B2 transfer
  - backup Google Photos object storage
  - Google Photos archive B2
  - RcloneView photo backup
  - Google Photos cloud backup tool
  - Backblaze B2 photo archive
  - automated Google Photos backup
tags:
  - RcloneView
  - google-photos
  - backblaze-b2
  - cloud-to-cloud
  - backup
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Google Photos ke Backblaze B2 — Pencadangan Cloud dengan RcloneView

> RcloneView membuat jalur pencadangan otomatis dari Google Photos ke Backblaze B2 — menjaga keamanan pustaka foto Anda di object storage berbiaya rendah tanpa perlu usaha manual.

Google Photos adalah pustaka foto bagi miliaran pengguna, tetapi mengandalkan satu penyedia cloud saja untuk kenangan yang tak tergantikan membawa risiko nyata. Fotografer profesional, pengarsip keluarga, dan kreator konten yang menggunakan Google Photos sebagai pustaka utama mereka sangat diuntungkan dengan pencadangan sekunder otomatis ke Backblaze B2 — platform penyimpanan cloud yang hemat biaya. RcloneView menangani jalur ini secara otomatis, mensinkronkan foto baru dari Google Photos ke B2 sesuai jadwal yang Anda tentukan.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Google Photos dan Backblaze B2 di RcloneView

Kedua penyedia mudah ditambahkan di RcloneView. Untuk Google Photos, buka tab Remote > New Remote, pilih Google Photos, lalu selesaikan autentikasi OAuth berbasis browser. Untuk Backblaze B2, pilih Backblaze B2 dan masukkan Application Key ID serta Application Key dari konsol B2.

Integrasi Google Photos RcloneView menampilkan pustaka Anda yang terorganisir berdasarkan album dan tanggal. Anda dapat menelusuri folder tahun/bulan dan mengakses semua file media — foto dan video — dari file explorer.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Photos and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Mengonfigurasi Tugas Sinkronisasi Google Photos ke B2

Buat tugas sinkronisasi di RcloneView dengan remote Google Photos Anda sebagai sumber dan bucket Backblaze B2 sebagai tujuan. Studio fotografi yang mencadangkan 500GB hasil pemotretan klien dapat menargetkan album Google Photos tertentu sebagai folder sumber, mengarahkan setiap album ke struktur folder B2 yang sesuai.

Pada pengaturan lanjutan tugas sinkronisasi, aktifkan verifikasi **checksum** untuk memastikan setiap file foto dan video yang ditransfer ke B2 cocok dengan sumbernya. Ini sangat penting untuk arsip foto, di mana kerusakan data yang tidak terdeteksi dapat berakibat fatal.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Google Photos to Backblaze B2 in RcloneView" class="img-large img-center" />

## Menjadwalkan Pencadangan Foto Otomatis (PLUS)

Dengan lisensi PLUS, jadwalkan sinkronisasi Google Photos ke B2 agar berjalan secara otomatis. Sinkronisasi harian pukul 3 pagi menangkap foto dan video dari hari sebelumnya tanpa memengaruhi performa di siang hari. Sinkronisasi inkremental RcloneView hanya mentransfer file baru dan yang dimodifikasi, sehingga durasi tugas tetap singkat setelah pencadangan penuh awal selesai.

Filter **Max file age** dapat lebih menyempurnakan sinkronisasi inkremental — mengatur `Max file age: 7d` hanya mentransfer foto yang ditambahkan dalam seminggu terakhir, ideal untuk tugas sinkronisasi yang sering namun ringan.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Photos to Backblaze B2 backup in RcloneView" class="img-large img-center" />

## Memantau Progres dan Memverifikasi Kelengkapan Pencadangan

Tab Transfer RcloneView menampilkan progres pencadangan secara langsung: nama file, kecepatan transfer, dan total byte. Setelah setiap proses terjadwal selesai, Job History mencatat ringkasan lengkap. Untuk pustaka foto dengan ribuan file, log riwayat ini menjadi bukti kelengkapan pencadangan — sangat penting bagi fotografer yang perlu meyakinkan klien bahwa gambar mereka telah diarsipkan dengan aman.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Google Photos to Backblaze B2 sync progress in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Google Photos (OAuth) dan Backblaze B2 (Application Key) sebagai remote.
3. Buat tugas Sync dari Google Photos ke bucket B2 Anda dengan checksum diaktifkan.
4. Jadwalkan proses harian otomatis dengan PLUS dan pantau progresnya di Job History.

Dengan RcloneView mengotomatiskan jalur Google Photos ke Backblaze B2 Anda, pustaka foto Anda selalu terlindungi dalam arsip cloud sekunder yang independen.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan Google Photos — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)
- [Mengelola Penyimpanan Backblaze B2 — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Migrasi Google Photos ke OneDrive dengan RcloneView](https://rcloneview.com/support/blog/migrate-google-photos-to-onedrive-rcloneview)

<CloudSupportGrid />
