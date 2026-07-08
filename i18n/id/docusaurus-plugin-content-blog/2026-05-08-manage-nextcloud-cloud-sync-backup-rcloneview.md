---
slug: manage-nextcloud-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan Nextcloud — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - jay
description: "Hubungkan instance Nextcloud self-hosted atau terkelola Anda ke RcloneView melalui WebDAV untuk manajemen file berbasis GUI, sinkronisasi lintas cloud, dan pencadangan otomatis."
keywords:
  - Nextcloud RcloneView sync
  - kelola file Nextcloud GUI
  - Nextcloud WebDAV RcloneView
  - pencadangan penyimpanan cloud Nextcloud
  - sinkronisasi Nextcloud ke Google Drive
  - pencadangan Nextcloud ke S3
  - sinkronisasi cloud self-hosted RcloneView
  - manajemen file Nextcloud desktop
tags:
  - RcloneView
  - nextcloud
  - cloud-storage
  - cloud-sync
  - backup
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan Nextcloud — Sinkronisasi dan Pencadangan File dengan RcloneView

> Hubungkan RcloneView ke instance Nextcloud Anda melalui WebDAV dan kelola file, otomatiskan pencadangan lintas cloud, serta sinkronisasi data ke S3 atau Google Drive — semuanya dari GUI desktop yang rapi.

Klien sinkronisasi bawaan Nextcloud sangat baik untuk menjaga folder lokal tetap tersinkronisasi, tetapi tidak banyak membantu ketika Anda perlu memigrasikan data ke cloud lain, mengotomatiskan pencadangan lintas penyedia, atau menelusuri file Nextcloud Anda bersama sistem penyimpanan lain. RcloneView terhubung ke Nextcloud melalui WebDAV — protokol standar yang diekspos Nextcloud — dan memperlakukannya seperti remote cloud lainnya di file explorer dua panel.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Nextcloud ke RcloneView melalui WebDAV

Nextcloud mengekspos WebDAV pada path URL standar di server Anda. Di RcloneView, buka **Remote tab → New Remote** dan pilih **WebDAV** sebagai tipe provider. Masukkan URL WebDAV Nextcloud Anda (biasanya `https://your-nextcloud.example.com/remote.php/dav/files/USERNAME/`), username Nextcloud, dan password. Atur opsi **Vendor** ke Nextcloud untuk mengaktifkan optimisasi khusus Nextcloud pada backend WebDAV rclone.

Setelah disimpan, file Nextcloud Anda akan muncul di panel explorer dengan antarmuka yang sama seperti provider lainnya — pohon folder, daftar file yang dapat diurutkan, dan navigasi breadcrumb. Anda dapat menelusuri, mengganti nama, menyalin, menghapus, dan menyeret file ke dan dari Nextcloud sama seperti dengan Google Drive atau Dropbox.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Nextcloud to RcloneView via WebDAV" class="img-large img-center" />

## Mencadangkan Nextcloud ke S3 atau Backblaze B2

Server Nextcloud self-hosted memerlukan strategi pencadangan offsite. Dengan menggunakan Job Manager RcloneView, Anda dapat membuat job Sync dari remote Nextcloud Anda ke Amazon S3, Backblaze B2, atau penyedia cloud lainnya. Ini memberi Anda salinan redundan dari semua data Nextcloud yang disimpan secara eksternal, melindungi dari kegagalan server atau masalah pada penyedia hosting.

Konfigurasikan job dengan **Enable Checksum** untuk jaminan integritas data, dan gunakan filter **Max file age** jika Anda hanya perlu mencadangkan file yang baru-baru ini dimodifikasi. Dengan lisensi PLUS, jadwalkan job ini setiap malam sehingga pencadangan selalu mencerminkan kondisi terkini data Nextcloud Anda.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Nextcloud backup to S3 in RcloneView" class="img-large img-center" />

## Menyinkronkan File Nextcloud ke Google Drive atau OneDrive

Banyak organisasi menjalankan Nextcloud secara internal karena alasan privasi, tetapi perlu membagikan file tertentu secara eksternal melalui Google Drive atau OneDrive untuk kolaborasi. RcloneView menjadikan ini proses yang terdefinisi dan dapat diulang: buat job Copy atau Sync dari folder Nextcloud tertentu ke Google Drive Shared Drive atau folder OneDrive, lalu jadwalkan untuk berjalan setiap kali Anda perlu mempublikasikan pembaruan.

Pola ini umum digunakan oleh tim yang memakai Nextcloud sebagai sistem manajemen dokumen internal dan Google Drive sebagai lapisan kolaborasi yang menghadap eksternal. Fitur Folder Compare memungkinkan Anda memverifikasi bahwa salinan Nextcloud dan Google Drive cocok sebelum dan sesudah setiap sinkronisasi.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Nextcloud files to Google Drive using RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan URL WebDAV Nextcloud Anda sebagai remote baru di **Remote tab**.
3. Telusuri file Nextcloud di explorer dua panel bersama penyedia cloud lainnya.
4. Buat job pencadangan terjadwal ke S3 atau Backblaze B2 untuk perlindungan offsite.

RcloneView menghadirkan kemampuan manajemen desktop lengkap untuk instance Nextcloud Anda — baik itu server pribadi, paket hosting, maupun deployment enterprise.

---

**Panduan Terkait:**

- [Mencadangkan Nextcloud melalui WebDAV dengan RcloneView](https://rcloneview.com/support/blog/backup-nextcloud-webdav-with-rcloneview)
- [Menyinkronkan Nextcloud ke Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)
- [Memigrasikan Nextcloud ke Google Drive dengan RcloneView](https://rcloneview.com/support/blog/migrate-nextcloud-to-google-drive-rcloneview)

<CloudSupportGrid />
