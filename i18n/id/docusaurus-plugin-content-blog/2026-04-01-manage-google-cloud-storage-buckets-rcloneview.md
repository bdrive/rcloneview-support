---
slug: manage-google-cloud-storage-buckets-rcloneview
title: "Kelola Bucket Google Cloud Storage dengan RcloneView"
authors:
  - tayson
description: "Gunakan RcloneView untuk menjelajahi, mengunggah, menyinkronkan, dan mengelola bucket Google Cloud Storage (GCS) secara visual. Tidak perlu CLI — pengelolaan GCS lengkap melalui GUI."
keywords:
  - google cloud storage rcloneview
  - manage gcs buckets gui
  - rclone google cloud storage
  - gcs bucket management tool
  - google cloud storage gui
  - sync files google cloud storage
  - upload to gcs without cli
  - rcloneview gcs
  - google cloud storage backup
  - gcs rclone gui
tags:
  - RcloneView
  - google-cloud-storage
  - cloud-storage
  - guide
  - object-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Bucket Google Cloud Storage dengan RcloneView

> Google Cloud Storage adalah tulang punggung object storage GCP — tahan lama, cepat, dan terintegrasi erat dengan platform cloud Google. RcloneView memberi Anda pengelola file visual untuk bucket GCS tanpa perlu `gsutil` atau konsol GCP.

Google Cloud Storage (GCS) adalah object store pilihan bagi tim yang sudah menggunakan Google Cloud Platform — baik untuk data aplikasi, dataset ML, staging BigQuery, atau distribusi media. Meski `gsutil` dan konsol GCP berfungsi, keduanya lambat untuk operasi file massal dan pengelolaan file sehari-hari. RcloneView menyediakan pengelola file dua panel untuk bucket GCS, memungkinkan Anda menjelajahi, mentransfer, dan menyinkronkan file layaknya menggunakan file explorer desktop.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Apa yang Ditambahkan RcloneView pada Pengelolaan GCS

| Tugas | Konsol GCP | gsutil CLI | RcloneView |
|------|------------|------------|------------|
| Menjelajahi bucket secara visual | ✓ | ✗ | ✓ |
| Unggah drag-and-drop | Terbatas | ✗ | ✓ |
| Sinkronisasi ke cloud lain | ✗ | ✗ | ✓ |
| Transfer ke disk lokal | Lambat | ✓ | ✓ |
| Menjadwalkan pekerjaan sinkronisasi | ✗ | Manual | ✓ |
| Pemantauan transfer real-time | ✗ | ✓ | ✓ |

## Menghubungkan Google Cloud Storage ke RcloneView

### Langkah 1 — Buat Service Account

Di konsol GCP:

1. Buka **IAM & Admin → Service Accounts**.
2. Buat service account baru dengan peran **Storage Admin** (atau **Storage Object Admin** untuk akses baca/tulis tanpa pengelolaan bucket).
3. Buat file kunci JSON dan unduh.

### Langkah 2 — Tambahkan remote GCS di RcloneView

Buka RcloneView dan klik **New Remote**:

<img src="/support/images/en/blog/new-remote.png" alt="Add Google Cloud Storage remote in RcloneView" class="img-large img-center" />

1. Pilih **Google Cloud Storage** dari daftar tipe remote.
2. Arahkan ke **file kunci service account JSON** yang telah diunduh.
3. Masukkan **GCP Project ID** Anda.
4. Beri nama remote (misalnya, `gcs-prod`) dan simpan.

Setelah terhubung, bucket GCS Anda akan muncul sebagai folder tingkat atas di file browser RcloneView.

## Menjelajahi dan Mengelola Bucket GCS

Masuk ke bucket mana pun untuk melihat isinya. RcloneView merender hierarki object key sebagai folder, sesuai dengan tampilan di konsol GCP.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browse GCS buckets in RcloneView" class="img-large img-center" />

Dari antarmuka dua panel, Anda dapat:
- **Menyalin file** antar-path GCS atau ke/dari disk lokal
- **Memindahkan object** dalam satu bucket atau antar-bucket
- **Menghapus object** dengan konfirmasi
- **Mengganti nama** dengan menyalin ke key baru lalu menghapus yang lama

## Menyinkronkan File ke dan dari GCS

### Mengunggah dataset lokal ke GCS

1. Buka **Job** di RcloneView.
2. Atur sumber ke folder lokal Anda (misalnya, `D:\ml-dataset\`).
3. Atur tujuan ke path GCS (misalnya, `gcs-prod:my-ml-bucket/training-data/`).
4. Pilih **Copy** (hanya menambahkan file baru) atau **Sync** (mencerminkan secara persis).
5. Jalankan job dan pantau progresnya secara langsung.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Upload dataset to GCS in RcloneView" class="img-large img-center" />

### Lintas-cloud: GCS ke penyedia lain

RcloneView mentransfer langsung antar-cloud. Alur kerja GCS yang umum:

- **GCS → AWS S3** — mereplikasi bucket antar-cloud untuk redundansi
- **GCS → Backblaze B2** — mengarsipkan data dingin ke penyimpanan yang lebih murah
- **GCS → Google Drive** — berbagi hasil olahan dengan pemangku kepentingan non-teknis
- **GCS → NAS lokal** — menarik data untuk pemrosesan on-premises

## Kesadaran Kelas Penyimpanan GCS

GCS memiliki beberapa kelas penyimpanan: Standard, Nearline, Coldline, dan Archive. Saat menyiapkan job sinkronisasi di RcloneView, Anda dapat memberikan flag rclone untuk menargetkan kelas penyimpanan tertentu bagi object baru:

| Kelas Penyimpanan | Kasus Penggunaan | Durasi Penyimpanan Minimum |
|--------------|----------|--------------------------|
| Standard | Data yang sering diakses | Tidak ada |
| Nearline | Akses bulanan | 30 hari |
| Coldline | Akses triwulanan | 90 hari |
| Archive | Akses tahunan | 365 hari |

Gunakan kolom **Custom flags** di editor job RcloneView untuk memberikan `--gcs-storage-class COLDLINE` untuk data arsip.

## Menjadwalkan Sinkronisasi GCS Berkala

Untuk job pencadangan rutin — unggahan malam hari, sinkronisasi staging harian, atau proses arsip mingguan:

1. Buat job dengan sumber dan tujuan GCS Anda.
2. Buka pengaturan **Schedule**.
3. Atur frekuensi (harian, mingguan, cron kustom).
4. Aktifkan peringatan email atau notifikasi saat selesai.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule GCS sync job" class="img-large img-center" />

## Perbandingan Folder untuk Verifikasi

Setelah transfer besar, gunakan **Folder Comparison** milik RcloneView untuk memverifikasi bahwa file lokal Anda cocok dengan yang ada di GCS — memeriksa jumlah file, ukuran, dan checksum:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify GCS sync with folder comparison" class="img-large img-center" />

Object yang hilang atau tidak cocok akan disorot, sehingga Anda dapat menjalankan ulang hanya file yang terpengaruh.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Buat service account** di konsol GCP dengan izin Storage Object Admin.
3. **Unduh kunci JSON** dan tambahkan remote GCS di RcloneView.
4. **Jelajahi bucket Anda** dan mulai mentransfer file secara visual.

GCS adalah infrastruktur yang andal — RcloneView membuat pengelolaan file sehari-hari terasa semudah drive lokal.

---

**Panduan Terkait:**

- [Transfer Google Cloud Storage ke AWS S3](https://rcloneview.com/support/blog/transfer-google-cloud-storage-aws-s3-without-cli-rcloneview)
- [Mount Bucket Amazon S3 sebagai Drive Lokal](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)
- [Sentralisasi S3, Wasabi, dan R2 dengan RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
