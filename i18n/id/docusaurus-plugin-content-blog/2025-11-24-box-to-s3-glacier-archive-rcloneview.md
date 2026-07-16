---
slug: box-to-s3-glacier-archive-rcloneview
title: "Box ke S3 + Glacier: Arsip Bertingkat dengan RcloneView"
authors:
  - tayson
description: "Migrasikan pustaka Box ke penyimpanan panas Amazon S3 dan Glacier Deep Archive untuk retensi jangka panjang, lengkap dengan compare, verifikasi checksum, dan sinkronisasi terjadwal di RcloneView."
keywords:
  - rcloneview
  - box migration
  - s3
  - glacier
  - cloud archive
  - checksum verification
  - scheduler
  - multi cloud
  - rclone
  - tiered storage
  - cloud backup
  - compare sync
  - mount
  - job history
  - visual dashboard
  - gui
  - aws
  - vault
  - compliance
  - long term retention
tags:
  - cloud-migration
  - s3
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box ke S3 + Glacier: Arsip Bertingkat dengan RcloneView

> Pindahkan pustaka Box ke Amazon S3 untuk akses aktif dan Glacier untuk retensi jangka panjang, dengan compare visual, sinkronisasi yang diverifikasi checksum, dan job terjadwal -- tanpa perlu flag CLI.

Box sangat baik untuk kolaborasi, tetapi retensi jangka panjang dan pustaka media berukuran besar dapat menjadi mahal. RcloneView memungkinkan Anda mencerminkan folder Box ke bucket S3 untuk akses panas, lalu memindahkan data yang sudah lama ke kelas Glacier sesuai jadwal. Anda mendapatkan compare berdampingan, job yang tercatat, dan percobaan ulang otomatis tanpa perlu mengawasi skrip.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Apa yang Kami Selesaikan

- Mengurangi biaya penyimpanan Box dengan menempatkan data dingin ke tingkat Glacier.
- Menjaga salinan S3 yang selalu tersedia untuk tim aktif sementara Glacier menyimpan riwayatnya.
- Menjaga integritas dengan job yang diverifikasi checksum dan jejak audit.

## Hubungkan Remote Box dan S3 dengan Cepat

- Tambahkan remote Box dan S3 melalui `+ New Remote`. Pengaturan OAuth dan key: [add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login), [s3](/howto/remote-storage-connection-settings/s3).  

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />. 

- Gunakan **Remote Explorer** untuk memeriksa kedalaman folder dan penamaan sebelum sinkronisasi pertama.  

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />. 

- Opsional: mount salah satu remote secara lokal untuk pemeriksaan cepat: [mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive).  

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />. 

## Bandingkan Sebelum Anda Memindahkan

- Jalankan **Compare** antara Box dan prefix S3 tujuan untuk melihat file yang hilang atau lebih baru sebelum melanjutkan: [compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents).
- Saring berdasarkan ekstensi (misalnya PDF, CAD, media) untuk mempersempit cakupan tinjauan.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />. 


## Bangun Pipeline Dua Tingkat (S3 Panas, Glacier Dingin)

- Langkah 1: Buat job **copy** dari Box ke S3 untuk tingkat aktif: [create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs). Mulai dengan copy demi keamanan; beralih ke sync setelah hasilnya tervalidasi.  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />. 

- Langkah 2: Terapkan kebijakan siklus hidup (lifecycle policy) S3 pada bucket untuk memindahkan objek ke kelas Glacier setelah N hari. Jaga agar job RcloneView tetap menargetkan prefix panas (misalnya, `s3:box-archive/hot/`).
- Langkah 3: Untuk arsip dalam (deep archive), jadwalkan job kedua untuk memindahkan folder yang jarang digunakan langsung ke prefix yang berfokus pada Glacier (misalnya, `s3:box-archive/cold/`).  

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />. 


RcloneView memberi Anda cara visual dan berulang untuk keluar dari Box, memangkas biaya penyimpanan, dan menjaga arsip yang patuh (compliant) di AWS. Bandingkan lebih dulu, salin dengan aman, jadwalkan sisanya -- dan tidurlah dengan tenang.


<CloudSupportGrid />
