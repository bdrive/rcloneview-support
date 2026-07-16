---
slug: manage-bunny-cdn-storage-sync-rcloneview
title: "Kelola Penyimpanan Bunny CDN — Sinkronisasi dan Deploy Konten dengan RcloneView"
authors:
  - tayson
description: "Bunny.net menawarkan penyimpanan CDN yang cepat dan terjangkau. Gunakan RcloneView untuk mengelola zona Bunny Storage, menyinkronkan konten dari cloud lain, dan mengotomatiskan deployment CDN."
keywords:
  - bunny cdn storage
  - bunny net rclone
  - bunny storage sync
  - bunny cdn file manager
  - bunny storage gui
  - cdn storage management
  - bunny net sync tool
  - bunny cdn deploy
  - bunny storage backup
  - cdn content sync
tags:
  - sync
  - s3-compatible
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan Bunny CDN — Sinkronisasi dan Deploy Konten dengan RcloneView

> Penyimpanan Bunny.net cepat dan murah untuk konten CDN. Namun mengelola zona penyimpanan melalui dashboard web terasa merepotkan untuk operasi massal. RcloneView memberi Anda file manager yang layak untuk aset CDN Anda.

Bunny.net telah menjadi pilihan CDN yang populer karena performa dan harganya. Edge Storage-nya menyediakan zona penyimpanan yang kompatibel dengan S3 dan menyajikan konten melalui jaringan CDN. Namun, mengelola file melalui antarmuka web Bunny terasa lambat untuk unggahan massal, tidak memiliki kemampuan sinkronisasi, dan tidak ada penjadwalan. RcloneView terhubung ke Bunny Storage melalui endpoint FTP atau HTTP-nya dan menyediakan manajemen file yang lengkap.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Bunny Storage ke RcloneView

<img src="/support/images/en/blog/new-remote.png" alt="Add Bunny CDN remote" class="img-large img-center" />

Tambahkan zona Bunny Storage Anda sebagai remote FTP menggunakan kredensial dari dashboard Bunny.net Anda.

## Alur Kerja Utama

### Deploy konten ke CDN

Unggah aset situs web, gambar, atau media dari penyimpanan cloud utama Anda ke Bunny CDN:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Deploy to Bunny CDN" class="img-large img-center" />

### Sinkronisasi dari penyimpanan produksi

Jaga agar zona penyimpanan CDN Anda tetap sinkron dengan penyimpanan aset produksi Anda di S3 atau Google Drive:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Sync to Bunny Storage" class="img-large img-center" />

### Menjadwalkan deployment otomatis

Perbarui konten CDN secara otomatis sesuai jadwal:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule CDN deployment" class="img-large img-center" />

### Memverifikasi konten CDN

Bandingkan penyimpanan sumber Anda dengan Bunny CDN untuk memastikan konten yang di-deploy sudah terbaru:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify CDN content" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan Bunny Storage** sebagai remote FTP.
3. **Sinkronkan konten** dari penyimpanan utama Anda.
4. **Jadwalkan deployment** untuk pembaruan otomatis.

CDN yang cepat pantas mendapatkan alat manajemen yang cepat pula.

---

**Panduan Terkait:**

- [Sinkronisasi Vultr Object Storage](https://rcloneview.com/support/blog/sync-vultr-object-storage-s3-google-drive-rcloneview)
- [Membuat Sync Job](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Penjadwalan Job](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
