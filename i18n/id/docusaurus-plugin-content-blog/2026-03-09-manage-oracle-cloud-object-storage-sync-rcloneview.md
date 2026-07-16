---
slug: manage-oracle-cloud-object-storage-sync-rcloneview
title: "Kelola Oracle Cloud Object Storage — Sinkronisasi dengan S3, Google Drive, dan NAS Menggunakan RcloneView"
authors:
  - tayson
description: "Oracle Cloud Infrastructure menawarkan harga object storage yang kompetitif. Pelajari cara mengelola, menyinkronkan, dan mencadangkan Oracle Cloud Object Storage bersama cloud lain menggunakan RcloneView."
keywords:
  - oracle cloud object storage
  - oracle cloud storage sync
  - oracle oci rclone
  - oracle cloud s3 compatible
  - oracle cloud backup tool
  - oracle object storage gui
  - oracle cloud file manager
  - oracle oci storage transfer
  - sync oracle cloud google drive
  - oracle cloud storage migration
tags:
  - oracle-cloud
  - s3-compatible
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Oracle Cloud Object Storage — Sinkronisasi dengan S3, Google Drive, dan NAS Menggunakan RcloneView

> Oracle Cloud Infrastructure (OCI) menawarkan 10 GB object storage gratis dan harga kompetitif setelahnya. Namun mengelola penyimpanan OCI bersama cloud lain Anda membutuhkan alat yang tepat.

Oracle Cloud Object Storage bersifat kompatibel dengan S3, tahan lama, dan hemat biaya — terutama dengan tingkat gratis Oracle yang murah hati dan sumber daya Always Free. Banyak organisasi menggunakan OCI bersama AWS, Google Cloud, atau Azure. RcloneView menghubungkan semuanya, memberi Anda antarmuka visual untuk mengelola Oracle Cloud Object Storage bersama 70+ penyedia lainnya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Oracle Cloud Object Storage?

### Harga kompetitif

| Fitur | Oracle Cloud | AWS S3 | Google Cloud |
|---------|-------------|--------|-------------|
| Storage (TB/bulan) | $26 | $23 | $20 |
| Egress (10 TB pertama) | Gratis | $90 | $120 |
| Tingkat gratis | 10 GB + Always Free | 5 GB (12 bulan) | 5 GB |

Keunggulan terbesar Oracle: **egress gratis** untuk 10 TB/bulan pertama. Jika Anda sering mengunduh data, ini saja bisa menghemat ratusan dolar.

### Kompatibilitas S3

OCI Object Storage menyediakan API yang kompatibel dengan S3, artinya alat apa pun yang bekerja dengan S3 — termasuk rclone dan RcloneView — bekerja dengan Oracle Cloud.

### Fitur enterprise

- **Storage tiers**: Standard, Infrequent Access, dan Archive.
- **Object versioning**: Melindungi dari penghapusan yang tidak disengaja.
- **Lifecycle policies**: Memindahkan data antar tingkat secara otomatis.
- **Replication**: Replikasi lintas wilayah untuk pemulihan bencana.

## Menyiapkan Oracle Cloud di RcloneView

### Dapatkan kredensial Anda

1. Masuk ke OCI Console.
2. Navigasi ke Identity → Users → Your user → Customer Secret Keys.
3. Buat Access Key dan Secret Key.
4. Catat namespace dan region Anda (misalnya, `us-phoenix-1`).

### Tambahkan Oracle Cloud sebagai Remote

1. Buka RcloneView dan klik **Add Remote**.
2. Pilih **S3 Compatible** sebagai tipe.
3. Pilih **Oracle** (atau Other S3) sebagai provider.
4. Masukkan Access Key, Secret Key, region, dan endpoint Anda.

<img src="/support/images/en/blog/new-remote.png" alt="Add Oracle Cloud Object Storage remote" class="img-large img-center" />

Format endpoint-nya adalah: `https://<namespace>.compat.objectstorage.<region>.oraclecloud.com`

## Alur Kerja Praktis

### 1) Jelajahi Oracle Cloud secara visual

Tidak perlu lagi OCI Console untuk manajemen file. Jelajahi bucket dan objek Anda di explorer dua panel RcloneView:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Oracle Cloud in RcloneView" class="img-large img-center" />

### 2) Migrasi dari AWS S3 ke Oracle Cloud

Manfaatkan egress gratis Oracle dengan memindahkan data dari S3:

1. Tambahkan S3 dan Oracle Cloud sebagai remote.
2. Buat job Copy dari S3 → Oracle Cloud.
3. Pantau transfer dan verifikasi dengan Folder Comparison.

### 3) Sinkronkan Oracle Cloud dengan Google Drive

Simpan salinan yang ramah kolaborasi di Google Drive sambil mengarsipkan di Oracle Cloud:

- Jadwalkan sinkronisasi harian dari Google Drive → Oracle Cloud.
- Oracle Cloud berfungsi sebagai arsip Anda yang tahan lama dan hemat biaya.

### 4) Strategi pencadangan multi-cloud

Gunakan Oracle Cloud sebagai salah satu bagian dari pencadangan multi-cloud:

```
Primary (Google Drive) → Oracle Cloud (archive with free egress)
Primary (Google Drive) → Backblaze B2 (second archive)
```

### 5) Pencadangan NAS ke Oracle Cloud

Cadangkan NAS Synology atau QNAP Anda ke Oracle Cloud:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule NAS to Oracle Cloud backup" class="img-large img-center" />

## Verifikasi Transfer

Bandingkan sumber dan tujuan Oracle Cloud Anda:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Oracle Cloud transfer" class="img-large img-center" />

## Pantau Transfer Besar

Lacak progres unggahan ke Oracle Cloud:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Oracle Cloud upload" class="img-large img-center" />

## Tingkatan Penyimpanan Oracle Cloud

Gunakan tingkatan yang tepat untuk setiap kasus penggunaan:

| Tingkat | Terbaik Untuk | Harga |
|------|----------|-------|
| Standard | Data yang sering diakses | $26/TB/bulan |
| Infrequent Access | Akses bulanan | $10/TB/bulan |
| Archive | Akses tahunan | $3/TB/bulan |

Lifecycle policies dapat memindahkan data antar tingkatan secara otomatis berdasarkan usia data.

## Memulai

1. **Buat akun Oracle Cloud** (termasuk 10 GB penyimpanan gratis).
2. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
3. **Tambahkan Oracle Cloud** sebagai remote yang kompatibel dengan S3.
4. **Jelajahi, transfer, sinkronkan** bersama cloud lain Anda.
5. **Jadwalkan pencadangan otomatis** untuk operasi tanpa perlu campur tangan.

Egress gratis Oracle Cloud menjadikannya pilihan yang sangat menarik untuk data yang sering Anda akses.

---

**Panduan Terkait:**

- [Membuat Job Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Penjadwalan Job](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Membandingkan Isi Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
