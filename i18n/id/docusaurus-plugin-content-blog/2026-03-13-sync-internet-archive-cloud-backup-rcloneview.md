---
slug: sync-internet-archive-cloud-backup-rcloneview
title: "Cara Mengunggah dan Mengelola Koleksi Internet Archive Menggunakan RcloneView"
authors:
  - tayson
description: "Internet Archive melestarikan konten digital secara gratis. Pelajari cara mengunggah koleksi, menyinkronkan arsip lokal, dan mengelola akun Internet Archive Anda menggunakan RcloneView."
keywords:
  - internet archive upload
  - internet archive rclone
  - upload to internet archive
  - internet archive backup
  - internet archive manager
  - internet archive file transfer
  - internet archive collections
  - archive.org upload tool
  - digital preservation cloud
  - internet archive sync
tags:
  - internet-archive
  - digital-preservation
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cara Mengunggah dan Mengelola Koleksi Internet Archive Menggunakan RcloneView

> Internet Archive di archive.org adalah perpustakaan digital gratis terbesar di dunia. Jika Anda melestarikan dokumen historis, media, atau dataset, RcloneView dapat mengelola unggahan Anda bersama penyimpanan cloud lainnya.

Internet Archive menawarkan penyimpanan gratis tanpa batas untuk konten digital yang dapat diakses publik — buku, audio, video, perangkat lunak, dan dataset. Banyak peneliti, pustakawan, dan pelestari digital menggunakannya untuk pengarsipan jangka panjang. RcloneView mendukung Internet Archive sebagai remote, memungkinkan Anda mengelola unggahan bersama penyimpanan cloud lainnya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Menggunakan Internet Archive?

- **Penyimpanan gratis** — Tidak ada biaya untuk konten yang dapat diakses publik.
- **Pelestarian permanen** — Dirancang untuk pelestarian digital jangka panjang.
- **Akses publik** — Konten tersedia secara gratis untuk semua orang.
- **Banyak format** — Mendukung audio, video, teks, gambar, perangkat lunak.
- **Dukungan DOI** — Referensi yang dapat disitasi untuk konten akademis.

## Menyiapkan Internet Archive di RcloneView

### Dapatkan kredensial API

1. Buat akun di [archive.org](https://archive.org/).
2. Dapatkan kunci API Anda dari [archive.org/account/s3.php](https://archive.org/account/s3.php).

### Tambahkan sebagai remote

1. Buka RcloneView dan klik **Add Remote**.
2. Pilih **Internet Archive** sebagai tipe.
3. Masukkan access key dan secret key Anda.

<img src="/support/images/en/blog/new-remote.png" alt="Add Internet Archive remote" class="img-large img-center" />

## Alur Kerja Umum

### Mengunggah koleksi lokal

Transfer buku yang telah didigitalkan, rekaman audio, atau dokumen historis dari penyimpanan lokal Anda ke Internet Archive:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Upload to Internet Archive" class="img-large img-center" />

### Mencadangkan dari cloud lain

Salin konten pelestarian digital dari Google Drive atau S3 ke Internet Archive untuk akses publik permanen.

### Unggahan terjadwal

Untuk proyek digitisasi yang berkelanjutan, jadwalkan unggahan secara berkala:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Internet Archive uploads" class="img-large img-center" />

### Verifikasi unggahan

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Internet Archive uploads" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan Internet Archive** dengan kunci API Anda.
3. **Unggah, sinkronkan, dan kelola** koleksi Anda.
4. **Jadwalkan unggahan** untuk proyek digitisasi yang berkelanjutan.

Lestarikan sejarah digital dengan alat yang terhubung ke segalanya.

---

**Panduan Terkait:**

- [Membuat Sync Jobs](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Penjadwalan Job](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Membandingkan Isi Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
