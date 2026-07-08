---
slug: manage-alibaba-oss-cloud-sync-backup-rcloneview
title: "Kelola Alibaba Cloud OSS — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - tayson
description: "Pelajari cara menghubungkan Alibaba Cloud OSS ke RcloneView, menjelajahi bucket, dan menjalankan tugas sinkronisasi serta pencadangan untuk beban kerja di kawasan Asia-Pasifik dan China."
keywords:
  - Alibaba Cloud OSS
  - RcloneView
  - S3-compatible storage
  - cloud sync
  - cloud backup
  - object storage
  - Asia-Pacific cloud
  - rclone OSS
tags:
  - RcloneView
  - alibaba-cloud
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Alibaba Cloud OSS — Sinkronisasi dan Pencadangan File dengan RcloneView

> Alibaba Cloud OSS adalah platform penyimpanan objek terkemuka untuk beban kerja di Asia-Pasifik — dan RcloneView memudahkan Anda menjelajahi, menyinkronkan, dan mencadangkan bucket tanpa perlu menyentuh command line.

Alibaba Cloud Object Storage Service (OSS) adalah platform penyimpanan andalan bagi tim dengan kebutuhan residensi data di China atau di kawasan Asia-Pasifik. Baik Anda mengarsipkan file media berukuran besar, mencadangkan data aplikasi, atau menyinkronkan dataset antar region, RcloneView menyediakan antarmuka grafis yang bersih di atas dukungan OSS milik rclone yang sudah teruji. Tidak diperlukan instalasi rclone terpisah — RcloneView sudah dilengkapi binary rclone bawaan.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menambahkan Alibaba Cloud OSS sebagai Remote

Buka RcloneView dan klik tombol **New Remote** di sidebar. Dari daftar provider, pilih **S3 Compatible Storage** lalu pilih **Alibaba OSS** sebagai provider (atau, jika tersedia, pilih tipe khusus **Alibaba Cloud Object Storage**). Anda memerlukan **Access Key ID**, **Access Key Secret**, dan endpoint OSS yang sesuai untuk region Anda — misalnya, `oss-cn-hangzhou.aliyuncs.com` untuk East China atau `oss-ap-southeast-1.aliyuncs.com` untuk Singapura.

Setelah kredensial dimasukkan, RcloneView akan memvalidasi koneksi dan langsung menampilkan daftar bucket Anda. Jika bucket Anda berada di region tertentu, pastikan endpoint-nya sesuai — ketidakcocokan ini adalah penyebab paling umum kegagalan koneksi dengan OSS.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Alibaba Cloud OSS remote in RcloneView" class="img-large img-center" />

## Menjelajahi Bucket dan Mentransfer File

Setelah remote ditambahkan, remote Alibaba OSS akan muncul di file explorer dual-pane. Anda dapat menjelajahi folder dan objek layaknya sistem file lokal. Seret dan lepas (drag and drop) file dari drive lokal Anda ke dalam bucket OSS, atau pindahkan objek langsung antar prefix OSS. RcloneView menampilkan progres transfer secara langsung sehingga Anda selalu tahu status unggahan file besar.

Bagi tim dengan beberapa bucket OSS di berbagai region, Anda dapat menambahkan setiap endpoint region sebagai remote terpisah dan mengelola semuanya dari satu jendela RcloneView. Ini membuat perpindahan data lintas region menjadi mudah tanpa harus berpindah-pindah sesi command line.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud file transfer using RcloneView" class="img-large img-center" />

## Menjalankan Tugas Sinkronisasi dan Pencadangan

Kekuatan sesungguhnya RcloneView untuk alur kerja OSS terletak pada sistem tugas sinkronisasi. Gunakan **Job Wizard** untuk membuat tugas sinkronisasi dari folder lokal mana pun atau remote cloud ke bucket OSS Anda dalam empat langkah terpandu. Opsi **dry run** memungkinkan Anda melihat pratinjau file mana yang akan ditransfer sebelum benar-benar menjalankannya — sangat penting saat bekerja dengan bucket OSS berukuran besar.

Fitur **1:N sync** milik RcloneView memungkinkan Anda menyinkronkan satu sumber ke beberapa bucket OSS secara bersamaan, yang berguna untuk menjaga salinan redundan di berbagai region OSS. **Job Manager** melacak semua tugas yang sedang berjalan, sementara **Job History** memberikan log lengkap transfer sebelumnya untuk keperluan audit. Pemegang lisensi PLUS dapat menjadwalkan tugas-tugas ini pada pengatur waktu berulang sehingga pencadangan berjalan otomatis tanpa intervensi manual.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a sync job for Alibaba OSS in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Klik **New Remote**, pilih **S3 Compatible Storage**, lalu pilih **Alibaba OSS** sebagai provider.
3. Masukkan **Access Key ID**, **Access Key Secret**, dan endpoint regional OSS Anda.
4. Jelajahi bucket Anda di file explorer dual-pane dan seret file untuk mentransfernya.
5. Buka **Job Manager**, gunakan wizard untuk membuat tugas sinkronisasi, dan jalankan dry run sebelum sinkronisasi langsung pertama Anda.

Alibaba Cloud OSS cocok secara alami dengan alur kerja data di kawasan Asia-Pasifik mana pun, dan RcloneView menghilangkan hambatan command line sehingga seluruh tim Anda dapat mengelola penyimpanan dengan percaya diri.

---

**Panduan Terkait:**

- [Kelola Amazon S3 — Sinkronisasi dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Kelola Cloudflare R2 — Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Sentralisasi S3, Wasabi, dan R2 dengan RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
