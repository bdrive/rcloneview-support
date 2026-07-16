---
slug: migrate-sharepoint-to-aws-s3-cross-platform-rcloneview
title: "Migrasikan File SharePoint ke AWS S3 untuk Akses Lintas Platform dengan RcloneView"
authors:
  - tayson
description: "Pindahkan atau cadangkan pustaka dokumen Microsoft SharePoint ke AWS S3 — untuk akses lintas platform, pengarsipan jangka panjang, atau redundansi multi-cloud — menggunakan RcloneView."
keywords:
  - sharepoint to s3
  - sharepoint migration aws
  - sharepoint backup s3
  - migrate sharepoint files
  - sharepoint to aws transfer
  - sharepoint archival s3
  - sharepoint cross platform
  - sharepoint rclone
  - sharepoint s3 sync
  - sharepoint document library backup
tags:
  - sharepoint
  - aws-s3
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasikan File SharePoint ke AWS S3 untuk Akses Lintas Platform dengan RcloneView

> SharePoint sangat cocok untuk tim yang berbasis Microsoft, tetapi ketika Anda perlu data di AWS atau dapat diakses di luar ekosistem Microsoft, mengeluarkan file dari sana ternyata lebih sulit dari yang seharusnya. RcloneView menjembatani kesenjangan ini.

Microsoft SharePoint terintegrasi secara mendalam dengan Microsoft 365, sehingga menjadi tempat penyimpanan dokumen default bagi banyak perusahaan. Namun ketika tim pengembangan Anda berjalan di atas AWS, pipeline data science Anda membutuhkan akses S3, atau Anda hanya perlu pencadangan lintas platform — mengekstrak data dari SharePoint menjadi sebuah tantangan. RcloneView terhubung ke pustaka dokumen SharePoint dan mentransfer konten ke S3 (atau cloud mana pun) dengan alur kerja visual yang dapat diverifikasi.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Memindahkan SharePoint ke S3?

- **Infrastruktur berbasis AWS** — Aplikasi dan komputasi Anda berjalan di AWS. Data juga perlu berada di sana.
- **Akses lintas platform** — S3 dapat diakses dari bahasa, framework, atau platform apa pun melalui API universal.
- **Pengarsipan yang hemat biaya** — S3 Glacier menawarkan penyimpanan jangka panjang yang lebih murah daripada SharePoint.
- **Kepatuhan (compliance)** — Beberapa regulasi mengharuskan salinan data berada di luar ekosistem Microsoft.
- **Diversifikasi vendor** — Mengurangi ketergantungan pada satu vendor.

## Menghubungkan SharePoint

1. Klik **Add Remote** → pilih **SharePoint** (atau **OneDrive for Business**).
2. Autentikasi melalui OAuth — RcloneView akan membuka browser Anda untuk login Microsoft.
3. Pilih situs SharePoint dan pustaka dokumen yang ingin Anda akses.
4. Simpan — pustaka SharePoint Anda kini dapat dijelajahi.

### Menghubungkan AWS S3

1. Klik **Add Remote** → pilih **Amazon S3**.
2. Masukkan Access Key ID dan Secret Access Key Anda.
3. Pilih region Anda.

<img src="/support/images/en/blog/new-remote.png" alt="Add SharePoint and S3 remotes" class="img-large img-center" />

## Alur Kerja Migrasi

### Fase 1: Jelajahi dan Nilai

Lihat pustaka SharePoint berdampingan dengan bucket S3 Anda:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse SharePoint alongside S3" class="img-large img-center" />

### Fase 2: Salin

1. Buat **Copy job**: pustaka SharePoint → bucket S3.
2. Jalankan transfer dan pantau secara real time.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor SharePoint to S3 transfer" class="img-large img-center" />

### Fase 3: Verifikasi

Pastikan kelengkapan dengan [Folder Comparison](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents):

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify SharePoint migration to S3" class="img-large img-center" />

### Fase 4: Otomatiskan Sinkronisasi Berkelanjutan

Jaga SharePoint dan S3 tetap sinkron selama masa transisi:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule SharePoint to S3 sync" class="img-large img-center" />

## Kasus Penggunaan

- **Ingesti pipeline data** — Secara otomatis mendorong dokumen SharePoint ke S3 untuk diproses oleh AWS Lambda, Glue, atau Athena.
- **Pengarsipan jangka panjang** — Pindahkan konten SharePoint lama ke S3 Glacier. Hemat biaya lisensi Microsoft.
- **Pemulihan bencana (disaster recovery)** — Pertahankan salinan S3 independen dari data SharePoint yang penting.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan SharePoint** dan **AWS S3** sebagai remote.
3. **Salin, verifikasi, jadwalkan** — migrasi penuh atau sinkronisasi berkelanjutan.

SharePoint tidak harus berarti terkunci pada satu vendor. RcloneView membuat data Microsoft Anda portabel.

---

**Panduan Terkait:**

- [Migrasi SharePoint ke Google Drive](https://rcloneview.com/support/blog/sharepoint-to-google-drive-migration-rcloneview)
- [Menambahkan AWS S3 dan yang Kompatibel dengan S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Membandingkan Isi Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Penjadwalan Job](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
