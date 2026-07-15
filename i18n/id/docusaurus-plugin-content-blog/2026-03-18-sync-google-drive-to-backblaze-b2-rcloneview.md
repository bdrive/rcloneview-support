---
slug: sync-google-drive-to-backblaze-b2-rcloneview
title: "Sinkronisasi Google Drive ke Backblaze B2 — Pencadangan Cloud-ke-Cloud yang Terjangkau dengan RcloneView"
authors:
  - tayson
description: "Google Drive untuk kerja sehari-hari, Backblaze B2 untuk pencadangan yang terjangkau. Pelajari cara menyiapkan pencadangan cloud-ke-cloud otomatis dari Google Drive ke B2 menggunakan RcloneView."
keywords:
  - google drive to backblaze b2
  - google drive backup b2
  - sync google drive b2
  - google drive cloud backup
  - backblaze b2 backup tool
  - google drive offsite backup
  - google drive b2 sync
  - affordable google drive backup
  - cloud to cloud backup google
  - google drive redundancy
tags:
  - RcloneView
  - google-drive
  - backblaze-b2
  - backup
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Google Drive ke Backblaze B2 — Pencadangan Cloud-ke-Cloud yang Terjangkau dengan RcloneView

> Google Drive menyimpan pekerjaan Anda. Backblaze B2 melindunginya dengan biaya $6/TB/bulan. Bersama-sama, keduanya membentuk salah satu strategi pencadangan cloud paling hemat biaya yang tersedia.

Google Drive adalah tempat file Anda berada sehari-hari. Namun Google Drive saja bukanlah pencadangan — penghapusan tidak sengaja, akun yang diretas, dan kesalahan sinkronisasi dapat menghancurkan data yang tidak bisa dipulihkan oleh Google. Backblaze B2 dengan biaya $6/TB/bulan menyediakan jaring pengaman: salinan independen dari semuanya, yang diperbarui secara otomatis oleh RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa B2 untuk Pencadangan Google Drive?

| Faktor | Backblaze B2 |
|--------|-------------|
| Biaya penyimpanan | $6/TB/bulan |
| Biaya unduhan | $0.01/GB |
| Egress gratis | 3x penyimpanan/bulan |
| Durabilitas | 99.999999999% |
| API | Kompatibel S3 |

B2 dirancang khusus untuk beban kerja pencadangan: penyimpanan murah, bayar sesuai pemakaian, dan kompatibel S3 untuk dukungan alat yang universal.

## Menyiapkan Pencadangan

<img src="/support/images/en/blog/new-remote.png" alt="Connect Google Drive and B2" class="img-large img-center" />

Tambahkan Google Drive dan Backblaze B2 sebagai remote di RcloneView.

## Membuat Tugas Pencadangan

Buka Google Drive di satu panel, B2 di panel lainnya. Buat tugas Copy:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Drive to B2" class="img-large img-center" />

Gunakan **Copy** (bukan Sync) agar file yang dihapus dari Google Drive tetap tersimpan di B2.

## Jadwalkan Pencadangan Malam Hari

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule nightly backup" class="img-large img-center" />

Setiap kali dijalankan, hanya file baru dan yang berubah yang ditransfer. Pencadangan harian untuk akun Google Drive biasa menggunakan bandwidth yang minimal.

## Verifikasi Integritas Pencadangan

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify backup" class="img-large img-center" />

## Menambahkan Enkripsi

Untuk data sensitif, tambahkan lapisan remote crypt di atas B2. File dienkripsi sebelum meninggalkan perangkat Anda — Backblaze tidak pernah melihat data yang tidak terenkripsi.

## Contoh Biaya

| Ukuran Google Drive | Biaya Bulanan B2 |
|-------------------|----------------|
| 100 GB | $0.60 |
| 500 GB | $3.00 |
| 1 TB | $6.00 |
| 5 TB | $30.00 |

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan remote Google Drive** dan **Backblaze B2**.
3. **Buat tugas Copy** untuk pencadangan.
4. **Jadwalkan proses malam hari**.
5. **Tidur nyenyak** karena tahu file Anda terlindungi.

Kerja harian di Drive. Pencadangan malam hari di B2.

---

**Panduan Terkait:**

- [Mencadangkan Dropbox ke Backblaze B2](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [Sinkronisasi Dropbox ke S3 untuk Pencadangan](https://rcloneview.com/support/blog/sync-dropbox-to-s3-backup-rcloneview)
- [Mengenkripsi Pencadangan Cloud](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
