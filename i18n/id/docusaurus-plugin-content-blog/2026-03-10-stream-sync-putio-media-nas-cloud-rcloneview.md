---
slug: stream-sync-putio-media-nas-cloud-rcloneview
title: "Streaming dan Sinkronisasi File Media Put.io ke NAS atau Cloud Drive Anda dengan RcloneView"
authors:
  - tayson
description: "Sinkronkan unduhan Put.io secara otomatis ke Synology NAS, pustaka Plex, atau Google Drive Anda — atur file media dan pastikan semuanya tercadangkan dengan RcloneView."
keywords:
  - putio sync nas
  - putio download manager
  - putio to google drive
  - putio file manager
  - putio rclone
  - putio media sync
  - putio backup tool
  - putio plex integration
  - putio to nas
  - putio automated download
tags:
  - putio
  - media
  - sync
  - nas
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Streaming dan Sinkronisasi File Media Put.io ke NAS atau Cloud Drive Anda dengan RcloneView

> Put.io sangat baik untuk pengunduhan cloud, tetapi mengatur file tersebut dan memindahkannya ke NAS atau server Plex Anda biasanya berarti transfer manual. RcloneView mengotomatiskan seluruh alur kerja tersebut.

Put.io adalah layanan cloud populer yang mengambilkan file untuk Anda — torrent, tautan langsung, dan lainnya — lalu menyimpannya di cloud untuk streaming instan. Namun setelah file berada di Put.io, sebagian besar pengguna mengunduhnya secara manual ke drive lokal atau NAS. RcloneView terhubung langsung ke Put.io dan mengotomatiskan seluruh alur kerja: sinkronkan unduhan baru ke Synology NAS, pustaka Plex, Google Drive, atau penyimpanan lainnya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Mengotomatiskan Sinkronisasi Put.io?

- **Unduhan manual itu merepotkan** — Setiap file baru berarti membuka browser, mengklik unduh, menunggu, dan memindahkan file.
- **Integrasi NAS/Plex** — File yang secara otomatis masuk ke folder pustaka Plex Anda berarti langsung tersedia untuk ditonton.
- **Manajemen penyimpanan** — Kapasitas penyimpanan Put.io terbatas. Sinkronisasi otomatis memungkinkan Anda mengosongkan ruang setelah file aman berada di tempat lain.
- **Pengiriman ke banyak tujuan** — Kirim media ke NAS, pencadangan cloud, dan drive portabel Anda secara bersamaan.

## Menghubungkan Put.io

1. Buka RcloneView dan klik **Add Remote**.
2. Pilih **Put.io** dari daftar penyedia.
3. Lakukan autentikasi melalui OAuth.
4. Simpan — file Put.io Anda kini dapat dijelajahi.

<img src="/support/images/en/blog/new-remote.png" alt="Add Put.io remote in RcloneView" class="img-large img-center" />

## Jelajahi dan Kelola File Put.io Anda

Lihat seluruh pustaka Put.io Anda di Explorer, berdampingan dengan drive lokal atau cloud lainnya:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Put.io files alongside NAS" class="img-large img-center" />

## Alur Kerja Sinkronisasi

### Put.io → Synology NAS (Plex/Jellyfin)

Kirim file media secara otomatis ke server media Anda:

1. Buat job Copy: Put.io → folder media NAS (mis., `/volume1/Plex/Movies`).
2. Jadwalkan untuk berjalan setiap jam — unduhan Put.io baru otomatis masuk ke Plex.
3. Plex mendeteksi file baru dan membuatnya tersedia untuk streaming.

### Put.io → Google Drive

Simpan pencadangan cloud dari unduhan Put.io Anda:

1. Buat job Copy: Put.io → folder Google Drive.
2. Akses media Anda dari mana saja melalui Google Drive.

### Put.io → External Drive

Pertahankan arsip media offline:

1. Buat job Copy: Put.io → jalur drive eksternal.
2. Jalankan secara manual saat Anda menyambungkan drive, atau jadwalkan jika selalu terhubung.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Put.io sync job" class="img-large img-center" />

## Otomatiskan Alur Kerja

1. **Jadwalkan sinkronisasi per jam** dengan [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).
2. **Gunakan Batch Jobs** untuk menyinkronkan Put.io ke beberapa tujuan secara berurutan.
3. **Dapatkan notifikasi** melalui [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control) saat file baru disinkronkan.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Put.io sync" class="img-large img-center" />

## Pantau Transfer

Amati file mengalir dari Put.io ke NAS Anda secara real time:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Put.io file transfers" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Put.io sync job history" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan Put.io** sebagai remote melalui OAuth.
3. **Tambahkan tujuan Anda** (NAS, Google Drive, drive eksternal).
4. **Buat job Copy** dan jadwalkan.
5. **Nikmati pengiriman media otomatis** — file berpindah dari Put.io ke pustaka Plex Anda tanpa perlu mengangkat jari.

Berhenti mengunduh file secara manual dari Put.io. RcloneView mengubahnya menjadi alur kerja media otomatis yang mengirimkan file tepat ke tempat yang Anda inginkan.

---

**Panduan Terkait:**

- [Tambah Remote melalui Login Berbasis Browser (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Jelajahi & Kelola Remote](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Buat Job Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Deteksi Otomatis dan Koneksi Synology NAS](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)

<CloudSupportGrid />
