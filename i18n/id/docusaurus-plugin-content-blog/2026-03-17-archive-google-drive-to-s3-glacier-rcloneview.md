---
slug: archive-google-drive-to-s3-glacier-rcloneview
title: "Arsipkan File Google Drive ke S3 Glacier — Penyimpanan Jangka Panjang dengan Biaya 90% Lebih Rendah bersama RcloneView"
authors:
  - tayson
description: "Penyimpanan Google Drive mahal untuk data arsip. Pindahkan file lama ke S3 Glacier dengan biaya beberapa sen per GB sambil tetap bisa dipulihkan. RcloneView mengotomatiskan seluruh prosesnya."
keywords:
  - google drive to glacier
  - google drive archive
  - s3 glacier archive
  - cheap cloud archive
  - google drive cold storage
  - archive old cloud files
  - google drive to s3
  - reduce google drive cost
  - long term cloud storage
  - cloud archive strategy
tags:
  - google-drive
  - s3
  - glacier
  - archive
  - cost-optimization
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Arsipkan File Google Drive ke S3 Glacier — Penyimpanan Jangka Panjang dengan Biaya 90% Lebih Rendah bersama RcloneView

> Anda membayar $10/bulan untuk 2 TB Google Drive, tetapi 80% dari file tersebut tidak pernah dibuka dalam setahun terakhir. Pindahkan file-file itu ke S3 Glacier dengan biaya $1/TB/bulan dan pangkas tagihan penyimpanan Anda secara signifikan.

Harga Google Drive dirancang untuk file aktif — dokumen yang Anda buka setiap hari, file yang Anda bagikan dengan rekan kerja. Namun sebagian besar akun Google Drive mengumpulkan file bertahun-tahun yang tidak pernah diakses: folder proyek lama, pekerjaan yang sudah selesai, foto arsip, dokumen usang. File-file ini menempati penyimpanan yang mahal padahal bisa disimpan di S3 Glacier dengan biaya jauh lebih murah.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Perbandingan Biaya

| Penyimpanan | Harga per TB/bulan |
|---------|-------------------|
| Google Drive (One) | ~$5 |
| Google Workspace Business | ~$6 |
| S3 Standard | ~$23 |
| S3 Glacier Instant Retrieval | ~$4 |
| S3 Glacier Flexible Retrieval | ~$3.6 |
| S3 Glacier Deep Archive | ~$1 |

Memindahkan 1 TB file yang tidak aktif dari Google Drive ke Glacier Deep Archive menghemat ~$48/tahun.

## Apa yang Perlu Diarsipkan

Kandidat yang baik untuk Glacier:

- Folder proyek yang sudah selesai (lebih dari 6 bulan)
- Dokumen pajak dan catatan keuangan (setelah dilaporkan)
- Cadangan foto/video lama
- Data mantan karyawan
- File tim yang sudah diarsipkan

Kandidat yang kurang cocok (tetap simpan di Google Drive):

- Dokumen dan spreadsheet aktif
- File kolaborasi yang dibagikan
- File yang dibuka mingguan atau bulanan

## Proses Pengarsipan

### 1) Identifikasi kandidat arsip

Telusuri Google Drive Anda di explorer dan identifikasi folder yang belum diakses baru-baru ini:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Google Drive for archive candidates" class="img-large img-center" />

### 2) Transfer ke S3 Glacier

Buat job Copy dari Google Drive ke bucket S3 Anda yang dikonfigurasi dengan storage class Glacier:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Transfer to Glacier" class="img-large img-center" />

### 3) Verifikasi arsip

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify archive completeness" class="img-large img-center" />

### 4) Hapus dari Google Drive

Hanya setelah verifikasi. Ini akan membebaskan kuota penyimpanan Google Drive Anda.

### 5) Jadwalkan pengarsipan berkala

Atur jalannya pengarsipan bulanan untuk kandidat baru:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule monthly archival" class="img-large img-center" />

## Catatan Penting

- **Pengambilan data dari Glacier memerlukan biaya dan waktu** — Glacier Instant Retrieval menyediakan akses cepat; Deep Archive bisa memakan waktu 12+ jam
- **Durasi penyimpanan minimum** — Glacier mengenakan biaya untuk penghapusan dini (90-180 hari tergantung kelasnya)
- **Verifikasi sebelum menghapus** — selalu pastikan arsip sudah lengkap sebelum menghapusnya dari Drive

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan remote Google Drive** dan **S3**.
3. **Identifikasi file tidak aktif** di Google Drive.
4. **Salin ke Glacier**, verifikasi, lalu bersihkan Drive.

File aktif tetap di Drive. Sisanya di Glacier.

---

**Panduan Terkait:**

- [Biaya Tersembunyi Penyimpanan Cloud](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)
- [Arsip Dingin dengan Glacier](https://rcloneview.com/support/blog/cold-archive-glacier-rcloneview)
- [Membandingkan Isi Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
