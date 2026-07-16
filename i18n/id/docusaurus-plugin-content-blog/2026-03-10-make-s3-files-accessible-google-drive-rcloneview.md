---
slug: make-s3-files-accessible-google-drive-rcloneview
title: "Cara Membuat File AWS S3 Dapat Diakses melalui Google Drive — Sinkronkan Bucket S3 untuk Kolaborasi Tim"
authors:
  - tayson
description: "AWS S3 sangat baik untuk penyimpanan tetapi sulit diakses oleh tim non-teknis. Pelajari cara menyinkronkan isi bucket S3 ke Google Drive agar mudah dibagikan menggunakan RcloneView."
keywords:
  - s3 to google drive sync
  - aws s3 google drive
  - share s3 files team
  - s3 bucket google drive
  - make s3 accessible
  - s3 collaboration tool
  - sync s3 google drive
  - s3 files non technical users
  - aws s3 file sharing
  - s3 to gdrive transfer
tags:
  - aws-s3
  - google-drive
  - collaboration
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cara Membuat File AWS S3 Dapat Diakses melalui Google Drive — Sinkronkan Bucket S3 untuk Kolaborasi Tim

> Tim developer Anda menyimpan semuanya di bucket S3. Tim marketing Anda menggunakan Google Drive. Ketika marketing membutuhkan file dari S3, mereka meminta developer untuk mengunduh dan membagikannya. Ada cara yang lebih baik.

AWS S3 memang canggih dan hemat biaya, tetapi dirancang untuk developer. AWS Console tidak ramah bagi anggota tim non-teknis, dan membagikan objek S3 satu per satu memerlukan pembuatan presigned URL. Dengan menyinkronkan folder S3 tertentu ke Google Drive, semua orang dapat mengakses file yang mereka butuhkan tanpa memerlukan kredensial AWS.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Masalahnya

- **Developer** menyimpan aset, laporan, dan hasil ekspor di S3.
- **Tim non-teknis** (marketing, sales, manajemen) tidak dapat mengakses S3 dengan mudah.
- **Solusi sementara saat ini**: Seseorang mengunduh dari S3, lalu mengunggahnya secara manual ke Google Drive.
- **Hasilnya**: File yang usang, kerja ekstra, dan tim yang frustrasi.

## Solusinya

Gunakan RcloneView untuk menyinkronkan folder S3 tertentu ke Google Drive secara otomatis:

```
S3: reports/monthly/ → Google Drive: Shared/Monthly Reports/
S3: assets/marketing/ → Google Drive: Shared/Marketing Assets/
S3: exports/data/ → Google Drive: Shared/Data Exports/
```

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync S3 to Google Drive" class="img-large img-center" />

## Pengaturan

### 1) Hubungkan kedua akun

Tambahkan AWS S3 dan Google Drive sebagai remote:

<img src="/support/images/en/blog/new-remote.png" alt="Add S3 and Google Drive remotes" class="img-large img-center" />

### 2) Buat job sinkronisasi selektif

Jangan sinkronkan seluruh bucket S3 — sinkronkan hanya folder yang dibutuhkan oleh tim non-teknis. Gunakan aturan filter untuk menyertakan path atau tipe file tertentu.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create S3 to Google Drive sync job" class="img-large img-center" />

### 3) Jadwalkan pembaruan otomatis

Sinkronkan setiap jam atau setiap hari agar Google Drive selalu memiliki file terbaru:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule S3 to Google Drive sync" class="img-large img-center" />

### 4) Verifikasi kelengkapan sinkronisasi

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify S3 and Google Drive are in sync" class="img-large img-center" />

## Satu Arah vs Dua Arah

### Satu arah (S3 → Google Drive)

Gunakan **Copy** atau **Sync** dari S3 ke Google Drive. Google Drive bersifat read-only (sebagai cermin/mirror). Perubahan harus dilakukan di S3.

Paling cocok untuk: Laporan, hasil ekspor, aset yang dihasilkan secara otomatis.

### Dua arah

Sinkronkan kedua arah. Perubahan di Google Drive akan tersinkronisasi kembali ke S3, dan sebaliknya.

Paling cocok untuk: Folder kerja bersama di mana kedua tim sama-sama berkontribusi.

## Filter agar Tetap Relevan

Jangan membanjiri Google Drive dengan semua isi S3. Gunakan filter:

- Sertakan hanya `*.pdf`, `*.xlsx`, `*.pptx` — dokumen bisnis.
- Kecualikan raw data, log, dan file sementara.
- Gunakan `--max-age 90d` untuk menyinkronkan hanya file terbaru.

## Kesadaran Biaya

Biaya egress S3 tidaklah gratis ($90/TB untuk 10 TB pertama). Untuk sinkronisasi dataset besar yang sering dilakukan, pertimbangkan:

- Sinkronkan pada jam-jam sepi (off-peak).
- Gunakan filter untuk membatasi volume data.
- Pertimbangkan Backblaze B2 atau Wasabi sebagai perantara (egress gratis/murah).

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan S3 dan Google Drive** sebagai remote.
3. **Buat job sinkronisasi yang ditargetkan** untuk folder tertentu.
4. **Jadwalkan pembaruan setiap jam atau setiap hari**.
5. **Bagikan folder Google Drive** dengan tim Anda.

Jembatani kesenjangan antara infrastruktur developer dan kolaborasi tim.

---

**Panduan Terkait:**

- [Membuat Job Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Aturan Filter Rclone](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [Penjadwalan Job](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Mengatur Batas Bandwidth](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
