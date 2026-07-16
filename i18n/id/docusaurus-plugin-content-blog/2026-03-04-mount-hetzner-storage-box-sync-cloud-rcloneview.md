---
slug: mount-hetzner-storage-box-sync-cloud-rcloneview
title: "Mount Hetzner Storage Box sebagai Local Drive dan Sinkronisasi ke Cloud Apa Pun dengan RcloneView"
authors:
  - tayson
description: "Akses Hetzner Storage Box Anda seperti folder lokal — mount melalui SFTP, jelajahi file secara visual, dan sinkronisasi atau pencadangan ke AWS S3, Google Drive, atau cloud apa pun menggunakan RcloneView."
keywords:
  - hetzner storage box mount
  - hetzner storage box sync
  - hetzner storage box backup
  - hetzner sftp mount local drive
  - hetzner storage box rclone
  - hetzner storage box gui
  - hetzner to s3
  - hetzner cloud backup
  - hetzner storage box file manager
  - mount sftp as local drive
tags:
  - hetzner
  - sftp
  - mount
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mount Hetzner Storage Box sebagai Local Drive dan Sinkronisasi ke Cloud Apa Pun dengan RcloneView

> Hetzner Storage Box menawarkan harga per terabyte terbaik di Eropa, tetapi mengelola file melalui FTP atau SCP terasa merepotkan. RcloneView melakukan mount sebagai local drive dan sinkronisasi ke cloud apa pun — secara visual.

Hetzner Storage Box adalah salah satu solusi penyimpanan bernilai terbaik di Eropa — andal, terjangkau, dan dapat diakses melalui SFTP, FTP, SMB, dan WebDAV. Namun tanpa aplikasi desktop native, mengelola file berarti menggunakan tools command-line atau klien FTP dasar. RcloneView mengubah ini dengan menghubungkan melalui SFTP, memungkinkan Anda melakukan mount Storage Box sebagai local drive, menjelajahi file di explorer dua panel, dan sinkronisasi ke AWS S3, Google Drive, atau cloud lainnya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Menggunakan RcloneView dengan Hetzner Storage Box?

- **Tidak ada klien desktop native** — Hetzner menyediakan protokol mentah (SFTP, FTP, SMB) tetapi tidak ada aplikasi sinkronisasi.
- **Mount sebagai local drive** — Akses Storage Box Anda seperti folder biasa di desktop Anda.
- **Sinkronisasi lintas cloud** — Replikasi otomatis data Storage Box ke S3, Google Drive, atau OneDrive.
- **Manajemen file visual** — Jelajahi, drag-and-drop, bandingkan, dan atur tanpa CLI.

## Menghubungkan Hetzner Storage Box melalui SFTP

1. Buka RcloneView dan klik **Add Remote**.
2. Pilih **SFTP** dari daftar provider.
3. Masukkan kredensial Hetzner Anda:
   - **Host**: `uXXXXXX.your-storagebox.de` (dari panel Hetzner Robot Anda)
   - **Port**: `23` (Hetzner menggunakan port SFTP non-standar)
   - **Username**: Username Storage Box Anda (misalnya, `u123456`)
   - **Password**: Password Storage Box Anda
4. Simpan — direktori Storage Box Anda kini dapat dijelajahi.

<img src="/support/images/en/blog/new-remote.png" alt="Add Hetzner Storage Box via SFTP" class="img-large img-center" />

## Mount sebagai Local Drive

Setelah terhubung, mount Storage Box Anda sebagai folder lokal:

1. Jelajahi remote SFTP Anda di Explorer.
2. Klik kanan folder yang ingin Anda mount → pilih **Mount**.
3. Pilih titik mount lokal (drive letter di Windows, path di Mac/Linux).
4. Storage Hetzner Anda muncul sebagai folder native.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount Hetzner Storage Box as local drive" class="img-large img-center" />

Sekarang Anda dapat membuka file, drag-and-drop, dan bekerja dengan data Storage Box Anda menggunakan aplikasi desktop apa pun — seolah-olah itu adalah penyimpanan lokal.

## Jelajahi dan Kelola File

Explorer dua panel memungkinkan Anda mengelola storage Hetzner bersama remote lainnya:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Hetzner Storage Box alongside cloud" class="img-large img-center" />

- Navigasi hierarki folder
- Drag and drop file antara Hetzner dan cloud
- Buat, ganti nama, dan hapus file serta folder
- Periksa ukuran dan tanggal file

## Sinkronisasi ke Cloud Provider

### Hetzner → AWS S3 (Pencadangan Offsite)

Tambahkan lapisan redundansi cloud ke storage Hetzner Anda yang sudah andal:

1. Buat job Sync: Hetzner SFTP → S3 bucket.
2. Jadwalkan setiap malam dengan [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).
3. Gunakan S3 Glacier untuk arsip dingin yang hemat biaya.

### Hetzner → Google Drive (Berbagi Tim)

Buat data Hetzner dapat diakses oleh pengguna Google Workspace:

1. Buat job Copy: Hetzner → folder Google Drive.
2. Gunakan [filter rules](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview) untuk menyinkronkan hanya folder tertentu.

### Cloud → Hetzner (Tujuan Pencadangan Offsite)

Gunakan Hetzner sebagai target pencadangan offsite yang terjangkau:

1. Buat job Sync: Google Drive → Hetzner Storage Box.
2. Jadwalkan setiap hari — harga per TB Hetzner membuat ini sangat hemat biaya.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Hetzner sync job" class="img-large img-center" />

## Verifikasi dan Pantau

### Perbandingan Folder

Verifikasi kelengkapan sinkronisasi antara Hetzner dan pencadangan cloud Anda:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Hetzner with cloud backup" class="img-large img-center" />

### Otomatisasi Terjadwal

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Hetzner backup jobs" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan Hetzner Storage Box** melalui SFTP (port 23).
3. **Mount** sebagai local drive atau jelajahi di Explorer.
4. **Sinkronisasi** ke S3, Google Drive, atau cloud lainnya.
5. **Jadwalkan** untuk pencadangan harian otomatis.

Hetzner Storage Box adalah salah satu rahasia penyimpanan terbaik di Eropa. RcloneView memberikan klien desktop yang layak diperolehnya — ditambah sinkronisasi multi-cloud.

---

**Panduan Terkait:**

- [Mount SFTP dan SMB sebagai Local Drive](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [Mount Penyimpanan Cloud sebagai Local Drive](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Bandingkan Isi Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Filter Rules untuk Sinkronisasi Selektif](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
