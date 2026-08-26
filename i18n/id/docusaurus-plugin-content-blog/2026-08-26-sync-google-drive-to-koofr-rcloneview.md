---
slug: sync-google-drive-to-koofr-rcloneview
title: "Sinkronisasi Google Drive ke Koofr — Pencadangan Cloud dengan RcloneView"
authors:
  - alex
description: "Sinkronkan Google Drive ke Koofr dengan RcloneView untuk mendapatkan salinan cadangan yang di-hosting di Eropa, dikonfigurasi tanpa command line."
keywords:
  - sync google drive to koofr
  - pencadangan google drive koofr
  - sinkronisasi koofr RcloneView
  - pencadangan cloud eropa google drive
  - sinkronisasi penyimpanan cloud koofr
  - migrasi google drive ke koofr
  - alat sinkronisasi lintas cloud
  - transfer koofr google drive
  - sinkronisasi cloud ke cloud rcloneview
tags:
  - RcloneView
  - google-drive
  - koofr
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Google Drive ke Koofr — Pencadangan Cloud dengan RcloneView

> Pertahankan mirror Google Drive Anda yang di-hosting di Eropa pada Koofr tanpa menulis satu pun perintah rclone.

Tim dengan klien berbasis UE atau preferensi residensi data sering kali ingin memiliki salinan kedua konten Google Drive mereka di infrastruktur Eropa. Koofr, yang berbasis di UE, cocok secara alami untuk peran tersebut, tetapi mengunggah ulang file secara manual setiap kali ada perubahan tidaklah berkelanjutan. RcloneView menghubungkan kedua akun dan menjalankan sinkronisasi sebagai job yang tersimpan, menjaga salinan Koofr tetap terkini tanpa perlu memindahkan file secara manual.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Google Drive dan Koofr

Kedua remote menggunakan metode penyiapan yang asli untuk masing-masing provider: Google Drive terhubung melalui login browser OAuth, dan Koofr ditambahkan dengan cara yang sama dari tab Remote > New Remote. Setelah keduanya muncul di Remote Manager, buka dua panel Explorer berdampingan — satu di Google Drive, satu di Koofr — sehingga Anda dapat menyeret dan melepas salinan uji cepat sebelum menyiapkan job otomatis. Menyeret antara kedua panel selalu menyalin, bukan memindahkan, karena keduanya adalah remote yang terpisah.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Koofr remotes in RcloneView" class="img-large img-center" />

## Mengonfigurasi Job Sinkronisasi

Jalankan wizard sinkronisasi dari tab Home dan atur Google Drive sebagai sumber, Koofr sebagai tujuan. Pilih satu arah "Modifying destination only" agar salinan Koofr selalu mencerminkan Drive tanpa secara tidak sengaja menghapus apa pun di sumber. Di Langkah 2, mengaktifkan perbandingan checksum memastikan file dicocokkan berdasarkan konten, bukan hanya waktu modifikasi, yang penting ketika file melewati berbagai klien sinkronisasi sebelum mencapai Drive.

Sinkronisasi 1:N milik RcloneView dapat mencerminkan folder Google Drive yang sama ke Koofr dan tujuan tambahan sekaligus, dengan lisensi FREE — berguna jika target cadangan kedua ditambahkan nanti tanpa perlu membangun ulang job.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from Google Drive to Koofr" class="img-large img-center" />

## Menjalankan Dry Run Sebelum Sinkronisasi Pertama

Sebelum melakukan transfer penuh, jalankan Dry Run untuk melihat pratinjau persis file mana yang akan disalin dan memastikan tidak ada yang akan terhapus dari Koofr secara tidak terduga. Ini sangat berguna saat job berjalan untuk pertama kalinya terhadap akun Koofr yang sudah memiliki konten di folder tujuan, karena hal ini mengungkap konflik sebelum menjadi penimpaan (overwrite) yang sesungguhnya.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job from Google Drive to Koofr in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Google Drive dan Koofr sebagai remote.
3. Buat job sinkronisasi satu arah dengan perbandingan checksum diaktifkan.
4. Jalankan dry run, lalu eksekusi job untuk membangun mirror Koofr pertama Anda.

Sinkronisasi Google Drive ke Koofr yang berjalan terus-menerus memberi Anda cadangan yang di-hosting di Eropa dan dapat dijalankan ulang hanya dengan beberapa klik, sehingga salinan pemulihan Anda tidak pernah bergantung pada pembangunan ulang job dari awal.

---

**Panduan Terkait:**

- [Migrasi Koofr ke Google Drive — Transfer File dengan RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)
- [Kelola Penyimpanan Koofr — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Sinkronisasi Koofr ke Amazon S3 — Pencadangan Cloud dengan RcloneView](https://rcloneview.com/support/blog/sync-koofr-to-amazon-s3-rcloneview)

<CloudSupportGrid />
