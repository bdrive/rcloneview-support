---
slug: manage-hetzner-storage-box-sync-rcloneview
title: "Kelola Hetzner Storage Box — Sinkronisasi dan Pencadangan dengan RcloneView"
authors:
  - tayson
description: "Pelajari cara menghubungkan Hetzner Storage Box ke RcloneView dengan aman dan menyinkronkan file antar cloud menggunakan protokol SFTP dan WebDAV untuk pencadangan cloud Eropa."
keywords:
  - Hetzner Storage Box
  - pencadangan SFTP
  - sinkronisasi cloud WebDAV
  - penyimpanan cloud Eropa
  - RcloneView
  - sinkronisasi file yang aman
  - pencadangan cloud Eropa
  - Hetzner SFTP
  - pencadangan hybrid cloud
  - penyimpanan cloud yang sesuai GDPR
tags:
  - RcloneView
  - hetzner
  - european-cloud
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Hetzner Storage Box — Sinkronisasi dan Pencadangan dengan RcloneView

> Penyimpanan cloud Eropa bertemu fleksibilitas multi-cloud. Hetzner Storage Box menawarkan harga yang kompetitif dan kepatuhan GDPR—kini kelola dengan mudah bersama akun cloud lainnya di RcloneView.

Hetzner Storage Box adalah pilihan tepercaya bagi bisnis Eropa yang mencari pencadangan cloud yang andal dan terjangkau. Baik Anda menggunakan SFTP atau WebDAV, RcloneView menghubungkan akun Hetzner Anda ke seluruh ekosistem cloud Anda, memungkinkan Anda melakukan sinkronisasi, pencadangan, dan pengarsipan tanpa meninggalkan dasbor Anda.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Hetzner Storage Box melalui SFTP

Menambahkan remote Hetzner Storage Box sangat mudah di RcloneView. SFTP memberi Anda akses langsung ke server dengan enkripsi standar industri.

1. Buka RcloneView dan klik **Add Remote**
2. Pilih **SFTP** dari daftar penyedia
3. Masukkan kredensial Hetzner Anda:
   - **Host**: `u[account-id].your-storagebox.de`
   - **Username**: Login Hetzner Anda
   - **Password**: Password Hetzner atau SSH key Anda
4. Atur port ke **22** (SFTP standar)
5. Klik **Test Connection** untuk memverifikasi

![New Remote Setup](/images/en/blog/new-remote.png)

## Menyinkronkan Hetzner ke AWS S3 atau Cloud Lainnya

Setelah Hetzner Storage Box Anda terhubung, Anda dapat membuat pekerjaan sinkronisasi cloud-to-cloud secara instan.

**Kasus penggunaan:**
- **Pencadangan ke S3**: Arsipkan file yang sering diakses dari Hetzner ke Amazon S3 Glacier untuk penyimpanan jangka panjang
- **Redundansi multi-cloud**: Cerminkan data antara Hetzner dan Backblaze B2
- **Alur kerja hybrid**: Sinkronkan Hetzner Storage Box dengan Google Drive untuk akses tim

![Cloud to Cloud Transfer](/images/en/blog/cloud-to-cloud-transfer-default.png)

## Pemantauan dan Penjadwalan Real-Time

Penjadwal pekerjaan RcloneView memungkinkan Anda mengotomatiskan pencadangan Hetzner sesuai jadwal Anda. Pantau kecepatan transfer, tingkat kesalahan, dan jumlah file secara real-time.

![Job History and Monitoring](/images/en/howto/rcloneview-basic/job-history.png)

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buat akun Hetzner Storage Box (jika Anda belum memilikinya) di [hetzner.com](https://www.hetzner.com/storage/storage-box).
3. Tambahkan remote Hetzner Anda menggunakan kredensial SFTP atau WebDAV di RcloneView.
4. Buat pekerjaan sinkronisasi atau pencadangan pertama Anda ke penyedia cloud lain.
5. Jadwalkan pekerjaan berulang atau jalankan transfer satu kali sesuai kebutuhan.

Kelola penyimpanan cloud Eropa Anda dengan percaya diri—RcloneView menangani kerumitannya sehingga Anda dapat fokus pada data Anda.

---

**Panduan Terkait:**

- [Kelola Server SFTP — Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Menghubungkan Server WebDAV — Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [Kelola OVH Cloud Object Storage — Sinkronisasi dengan RcloneView](https://rcloneview.com/support/blog/manage-ovh-cloud-object-storage-sync-rcloneview)

<CloudSupportGrid />
