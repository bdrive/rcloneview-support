---
slug: sync-idrive-e2-s3-google-drive-rcloneview
title: "Sinkronisasi Penyimpanan Objek IDrive e2 ke AWS S3 atau Google Drive dengan RcloneView"
authors:
  - tayson
description: "Kelola penyimpanan objek IDrive e2 secara visual — jelajahi bucket, sinkronkan ke AWS S3 atau Google Drive, dan jadwalkan pencadangan menggunakan koneksi S3-compatible dari RcloneView."
keywords:
  - idrive e2 sync
  - idrive e2 backup
  - idrive e2 gui tool
  - idrive e2 to s3
  - idrive e2 rclone
  - idrive e2 file manager
  - idrive e2 mount local drive
  - idrive e2 google drive
  - idrive e2 object storage
  - s3 compatible storage gui
tags:
  - idrive-e2
  - s3-compatible
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Penyimpanan Objek IDrive e2 ke AWS S3 atau Google Drive dengan RcloneView

> IDrive e2 menawarkan penyimpanan S3-compatible yang sangat terjangkau seharga $0.004/GB/bulan. Namun tanpa klien sinkronisasi desktop, pengelolaan file berarti harus menggunakan API call atau web UI. RcloneView memberi Anda antarmuka visual yang lengkap.

IDrive e2 adalah salah satu layanan penyimpanan objek S3-compatible paling hemat biaya yang tersedia — lebih murah dibandingkan Backblaze B2, Wasabi, dan AWS S3. Layanan ini ideal untuk pencadangan, arsip, dan cold storage. Namun seperti kebanyakan penyedia penyimpanan objek lainnya, IDrive e2 tidak memiliki klien desktop native. RcloneView terhubung melalui S3 API, memberi Anda manajemen file visual, sinkronisasi cloud-to-cloud, dan otomatisasi terjadwal.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa IDrive e2?

| Penyedia | Biaya per TB/bulan | Egress |
|----------|-------------------|--------|
| IDrive e2 | $4.00 | Gratis (3x kapasitas penyimpanan) |
| Backblaze B2 | $6.00 | $0.01/GB |
| Wasabi | $6.99 | Gratis |
| AWS S3 Standard | $23.00 | $0.09/GB |

Harga IDrive e2 menjadikannya pilihan menarik bagi siapa pun yang membutuhkan penyimpanan objek yang terjangkau dan andal.

## Menghubungkan IDrive e2

Karena IDrive e2 bersifat S3-compatible:

1. Klik **Add Remote** → pilih **Amazon S3**.
2. Pilih **IDrive e2** atau **Other** dari dropdown penyedia S3.
3. Masukkan kredensial Anda:
   - **Access Key** dan **Secret Key** dari dashboard IDrive e2.
   - **Endpoint**: Endpoint regional Anda (misalnya, `https://s3.us-west-1.idrivecloud.io`).
4. Simpan — bucket e2 Anda kini dapat dijelajahi.

<img src="/support/images/en/blog/new-remote.png" alt="Add IDrive e2 as S3-compatible remote" class="img-large img-center" />

## Jelajahi dan Kelola

Lihat bucket IDrive e2 berdampingan dengan cloud lainnya:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse IDrive e2 buckets" class="img-large img-center" />

## Skenario Sinkronisasi

### Google Drive → IDrive e2 (Pencadangan Terjangkau)

Gunakan e2 sebagai pencadangan berbiaya rendah untuk Google Drive Anda:

1. Buat job Copy: Google Drive → bucket IDrive e2.
2. Jadwalkan setiap malam dengan [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).
3. Bayar hanya sebagian kecil dari biaya yang dikenakan Google untuk data yang sama.

### IDrive e2 → AWS S3 (Redundansi Lintas-Cloud)

1. Buat job Sync: IDrive e2 → bucket S3.
2. Pertahankan redundansi di dua penyedia S3-compatible yang berbeda.

### Local/NAS → IDrive e2 (Arsip Offsite)

1. Buat job Copy: Folder lokal atau NAS → IDrive e2.
2. Sempurna untuk pencadangan offsite dengan biaya minimal.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run IDrive e2 sync job" class="img-large img-center" />

## Mount sebagai Drive Lokal

Akses IDrive e2 sebagai folder biasa:

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount IDrive e2 as local drive" class="img-large img-center" />

## Otomatisasi dan Pemantauan

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule IDrive e2 backups" class="img-large img-center" />

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor IDrive e2 transfers" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan IDrive e2** sebagai remote S3-compatible.
3. **Jelajahi, mount, atau sinkronkan** ke tujuan mana pun.
4. **Jadwalkan** untuk pencadangan cloud otomatis berbiaya rendah.

IDrive e2 adalah raja hemat biaya dalam penyimpanan objek. RcloneView memberikannya pengalaman desktop yang layak didapatkannya.

---

**Panduan Terkait:**

- [Menambahkan AWS S3 dan S3-Compatible](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Mount Penyimpanan Cloud sebagai Drive Lokal](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Membandingkan Isi Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
