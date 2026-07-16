---
slug: one-to-many-sync-multiple-destinations-rcloneview
title: "Sinkronisasi 1:N — Sinkronkan Satu Sumber ke Banyak Tujuan di RcloneView"
authors:
  - tayson
description: "Gunakan fitur sinkronisasi 1:N RcloneView untuk mencerminkan satu folder sumber ke banyak tujuan cloud secara bersamaan. Lakukan pencadangan ke S3, Google Drive, dan Backblaze B2 dalam satu job."
keywords:
  - 1:N sync RcloneView
  - sinkronisasi satu sumber ke banyak tujuan
  - pencadangan multi-tujuan
  - pencadangan cloud banyak penyedia cloud
  - RcloneView 1 to N sync
  - replikasi cloud banyak penyedia
  - mirror ke banyak cloud
  - fitur sinkronisasi RcloneView
  - job pencadangan multi-cloud
  - one to many cloud sync
tags:
  - feature
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi 1:N — Sinkronkan Satu Sumber ke Banyak Tujuan di RcloneView

> Sinkronisasi 1:N RcloneView memungkinkan Anda mencerminkan satu folder sumber ke banyak tujuan cloud dalam satu job — melakukan pencadangan ke Google Drive, Amazon S3, dan Backblaze B2 secara bersamaan.

Prinsip inti dari ketahanan data adalah aturan pencadangan 3-2-1: tiga salinan data, pada dua media berbeda, dengan satu salinan di luar lokasi. Penyimpanan cloud membuat hal ini dapat dicapai tanpa drive fisik — tetapi menjalankan job sinkronisasi terpisah secara manual ke setiap penyedia bersifat repetitif dan rawan kesalahan. Fitur sinkronisasi 1:N RcloneView memungkinkan Anda mengonfigurasi satu folder sumber untuk disinkronkan ke banyak tujuan cloud secara bersamaan, sehingga satu kali menjalankan job mencakup semua target pencadangan Anda sekaligus. Fitur ini tersedia dengan lisensi FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Apa Itu Sinkronisasi 1:N?

Sinkronisasi 1:N (one-to-many synchronization) berarti satu sumber dicerminkan ke N remote tujuan dalam satu kali eksekusi job. Saat Anda menjalankan job, RcloneView menyinkronkan sumber ke setiap tujuan yang dikonfigurasi — menambahkan berkas yang belum ada, memperbarui berkas yang telah berubah, dan secara opsional menghapus berkas yang telah dihapus dari sumber.

Ini berbeda dari menjalankan job sinkronisasi terpisah secara berurutan. Dengan sinkronisasi 1:N, semua tujuan ditulis pada jendela eksekusi yang sama, dan progres untuk setiap tujuan dilacak di tab Transferring. Job History mencatat hasil untuk setiap tujuan dalam ringkasan run.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="1:N sync job sending source to multiple cloud destinations in RcloneView" class="img-large img-center" />

## Mengonfigurasi Job Sinkronisasi 1:N

Menyiapkan job sinkronisasi multi-tujuan menggunakan wizard Sync 4 langkah yang sama seperti job biasa. Perbedaannya ada di Langkah 1: setelah memilih remote dan folder sumber Anda, klik tombol Add Destination untuk menambahkan lebih banyak remote tujuan. Anda dapat menambahkan sebanyak mungkin tujuan sesuai kebutuhan — misalnya, Google Drive, Amazon S3, dan Backblaze B2.

**Contoh alur kerja untuk strategi pencadangan produksi:**

1. **Sumber:** Folder NAS lokal `/data/projects`
2. **Tujuan 1:** Google Drive `/Backups/Projects`
3. **Tujuan 2:** Bucket Amazon S3 `my-company-backup/projects`
4. **Tujuan 3:** Bucket Backblaze B2 `projects-archive`

Setiap tujuan menerima salinan identik dari konten sumber. Nama job sinkronisasi, aturan filter, dan pengaturan lanjutan berlaku secara seragam untuk semua tujuan dalam job tersebut.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring 1:N sync with multiple cloud destinations in RcloneView" class="img-large img-center" />

## Kasus Penggunaan Praktis

**Implementasi pencadangan 3-2-1:** Konfigurasikan sumber lokal → Google Drive + Amazon S3 + Backblaze B2. Satu kali menjalankan job, tiga salinan di penyedia cloud berbeda.

**Distribusi konten:** Tim produksi video menyinkronkan hasil ekspor akhir dari server editing mereka ke Dropbox (untuk peninjauan klien), Google Drive (untuk arsip internal), dan bucket origin CDN secara bersamaan.

**Replikasi regional:** Sebuah organisasi menyinkronkan repositori dokumen pusat ke bucket cloud regional di zona geografis berbeda karena alasan latensi dan ketersediaan.

**Redundansi lintas penyedia:** Sinkronkan folder OneDrive utama ke Backblaze B2 dan Cloudflare R2 sekaligus, sehingga jika satu penyedia mengalami gangguan, penyedia lainnya tetap memiliki salinan terkini.

## Menjadwalkan Job Sinkronisasi 1:N

Untuk job 1:N yang perlu dijalankan secara rutin, sinkronisasi terjadwal (lisensi PLUS) berlaku untuk job multi-tujuan sama seperti pada job tujuan tunggal. Konfigurasikan jadwal bergaya crontab di Langkah 4 dari wizard, dan RcloneView akan menjalankan sinkronisasi multi-tujuan penuh pada setiap interval terjadwal. Job History mencatat hasil untuk setiap run, menunjukkan apakah semua tujuan berhasil menerima pembaruan.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling 1:N multi-destination sync in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan semua penyedia cloud target sebagai remote di tab Remote.
3. Buka wizard Sync dan gunakan Add Destination di Langkah 1 untuk mengonfigurasi banyak tujuan untuk sumber Anda.
4. Secara opsional, tambahkan jadwal (lisensi PLUS) untuk menjalankan sinkronisasi multi-tujuan secara otomatis.

Sinkronisasi 1:N adalah salah satu fitur RcloneView yang paling menghemat waktu untuk strategi pencadangan — konfigurasikan sekali, lindungi di mana saja, setiap kali job dijalankan.

---

**Panduan Terkait:**

- [Automate Daily Cloud Backups with RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Multi-Cloud Backup Strategy with RcloneView](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)
- [Backup NAS to Multiple Clouds with RcloneView](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />
