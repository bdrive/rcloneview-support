---
slug: sync-onedrive-to-s3-enterprise-backup-rcloneview
title: "Sinkronisasi OneDrive ke AWS S3 — Pencadangan Cloud-to-Cloud untuk Enterprise dengan RcloneView"
authors:
  - tayson
description: "OneDrive untuk kolaborasi, S3 untuk pencadangan yang tahan lama. Siapkan pencadangan otomatis dari OneDrive ke S3 untuk perlindungan data enterprise menggunakan RcloneView."
keywords:
  - onedrive to s3 backup
  - sync onedrive aws
  - onedrive cloud backup
  - onedrive s3 sync
  - onedrive enterprise backup
  - onedrive offsite backup
  - microsoft 365 backup s3
  - onedrive aws transfer
  - onedrive data protection
  - onedrive redundancy
tags:
  - onedrive
  - s3
  - aws-s3
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi OneDrive ke AWS S3 — Pencadangan Cloud-to-Cloud untuk Enterprise dengan RcloneView

> Microsoft 365 tidak menyertakan pencadangan sesungguhnya. File yang terhapus, ransomware, atau kesalahan admin dapat menghancurkan data OneDrive secara permanen. Pencadangan S3 menyediakan salinan independen yang Anda butuhkan.

Kebijakan retensi Microsoft 365 bukanlah pencadangan. Item yang dihapus masuk ke recycle bin selama 93 hari, lalu hilang selamanya. Ransomware dapat mengenkripsi file yang tersinkronisasi di semua perangkat. Kesalahan admin dapat menghapus seluruh team site. Pencadangan independen di AWS S3 — di luar ekosistem Microsoft — memberikan perlindungan data yang sesungguhnya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa S3 untuk Pencadangan OneDrive?

- **Penyedia independen** — jika Microsoft mengalami masalah, pencadangan S3 Anda tidak terpengaruh
- **Versioning** — S3 versioning menyimpan salinan historis setiap file
- **Tingkatan biaya** — S3 Glacier untuk retensi jangka panjang seharga $1/TB/bulan
- **Kepatuhan** — S3 Object Lock untuk pencadangan yang tidak dapat diubah (kebutuhan regulasi)

## Menyiapkan Pencadangan

<img src="/support/images/en/blog/new-remote.png" alt="Connect OneDrive and S3" class="img-large img-center" />

## Membuat Job Pencadangan

Buka OneDrive di satu panel, S3 di panel lainnya. Buat job Copy per departemen atau pengguna:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to S3 backup" class="img-large img-center" />

## Menjadwalkan Pencadangan Otomatis

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive backup" class="img-large img-center" />

Jalankan setiap malam. Setiap eksekusi hanya mentransfer perubahan, sehingga biaya tetap minimal.

## Verifikasi dan Pemantauan

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify OneDrive backup" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Monitor backup jobs" class="img-large img-center" />

## Enkripsi untuk Kepatuhan

Enkripsi pencadangan OneDrive dengan remote crypt sebelum mencapai S3 — memenuhi kebutuhan perlindungan data tanpa bergantung pada enkripsi bawaan S3 saja.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan remote OneDrive** dan **AWS S3**.
3. **Buat job Copy** untuk pencadangan.
4. **Jadwalkan setiap malam** dan verifikasi setiap minggu.

Kolaborasi di OneDrive. Perlindungan di S3.

---

**Panduan Terkait:**

- [Sinkronisasi Google Drive ke Backblaze B2](https://rcloneview.com/support/blog/sync-google-drive-to-backblaze-b2-rcloneview)
- [Sinkronisasi Dropbox ke Pencadangan S3](https://rcloneview.com/support/blog/sync-dropbox-to-s3-backup-rcloneview)
- [Daftar Periksa Keamanan Penyimpanan Cloud](https://rcloneview.com/support/blog/cloud-storage-security-checklist-rcloneview)

<CloudSupportGrid />
