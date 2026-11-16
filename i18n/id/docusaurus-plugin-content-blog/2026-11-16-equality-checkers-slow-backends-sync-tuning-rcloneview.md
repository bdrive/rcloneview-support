---
slug: equality-checkers-slow-backends-sync-tuning-rcloneview
title: "Number of Equality Checkers — Sesuaikan Perbandingan Sinkronisasi untuk Backend Lambat di RcloneView"
authors:
  - kai
description: "Pelajari fungsi pengaturan Number of equality checkers di wizard sinkronisasi RcloneView dan cara menyesuaikannya untuk SFTP, FTP, WebDAV, serta remote cloud dengan batas permintaan."
keywords:
  - pengaturan rclone checkers
  - number of equality checkers
  - rclone checkers GUI
  - menyesuaikan sinkronisasi untuk backend lambat
  - performa sinkronisasi SFTP
  - sinkronisasi WebDAV lambat
  - batas permintaan API cloud sinkronisasi
  - pengaturan sinkronisasi lanjutan RcloneView
  - sinkronisasi perbandingan checksum
tags:
  - RcloneView
  - feature
  - performance
  - cloud-sync
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Number of Equality Checkers — Sesuaikan Perbandingan Sinkronisasi untuk Backend Lambat di RcloneView

> Sebelum menyalin apa pun, sinkronisasi harus menentukan file mana yang sudah cocok. Jumlah checker menentukan seberapa besar beban yang diberikan langkah itu pada penyimpanan Anda.

Setiap job Sync di RcloneView dimulai dengan membandingkan file sumber dan tujuan untuk menentukan apa yang benar-benar perlu ditransfer. Pekerjaan itu dilakukan oleh equality checker, dan Step 2 di wizard sinkronisasi memungkinkan Anda mengatur berapa banyak yang berjalan secara paralel. Nilai default 8 cocok untuk sebagian besar penyedia cloud, tetapi server SFTP kecil, share WebDAV, atau penyedia dengan batas API ketat sering kali berjalan lebih baik dengan jumlah yang lebih sedikit.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Apa yang Dilakukan Equality Checker

Checker memeriksa file di kedua sisi dan memutuskan apakah file tersebut sama. Secara default, perbandingan menggunakan ukuran dan waktu modifikasi. Jika Anda mencentang **Enable checksum** di langkah yang sama, file dibandingkan berdasarkan hash dan ukuran — lebih ketat, tetapi meminta hash dari backend untuk setiap file.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Opening a sync job in RcloneView to adjust advanced settings" class="img-large img-center" />

Checker terpisah dari **Number of file transfers**, yang mengatur berapa banyak file yang disalin sekaligus. Sinkronisasi 200.000 file kecil yang sebagian besar tidak berubah menghabiskan jauh lebih banyak waktu untuk memeriksa daripada mentransfer, sehingga jumlah checker bisa lebih berpengaruh daripada jumlah transfer.

## Kapan Menurunkan Jumlah Checker

Panduan RcloneView adalah menggunakan 4 atau kurang untuk backend lambat. Kasus umum:

- **SFTP atau FTP di server sederhana.** Pemeriksaan paralel berarti lebih banyak koneksi bersamaan, dan VPS kecil atau NAS lama mungkin menolak atau membatasi sesi tambahan.
- **Share WebDAV** yang lambat merespons permintaan metadata.
- **Penyedia cloud dengan batas permintaan ketat**, di mana lonjakan permintaan paralel memicu error batas permintaan dan percobaan ulang.

Menurunkan checker menukar paralelisme mentah dengan kemajuan yang lebih stabil. Jika log menunjukkan percobaan ulang atau error koneksi berulang selama fase perbandingan, turunkan ke 4, lalu ke 2, dan jalankan ulang.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring sync progress and speed in the RcloneView Transferring tab" class="img-large img-center" />

## Kapan Nilai Default Sudah Cukup

Penyimpanan objek yang kompatibel dengan S3 seperti Amazon S3, Wasabi, atau Cloudflare R2 biasanya menangani 8 checker tanpa masalah, dan disk lokal atau NAS di LAN cepat jarang perlu disesuaikan. RcloneView me-mount DAN menyinkronkan 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux, sehingga satu komputer sering membutuhkan nilai checker berbeda per job: biarkan job S3 pada default dan turunkan hanya job SFTP.

## Ukur Perubahan dengan Dry Run dan Job History

Ubah satu pengaturan setiap kali. Jalankan Dry Run untuk memastikan cakupan job, lalu jalankan sinkronisasi dan buka Job History, yang mencatat Time Spent, Status, dan jumlah file untuk setiap eksekusi. Membandingkan dua eksekusi dari job yang sama dengan nilai checker berbeda menunjukkan apakah perubahan itu membantu. Jika pengaturan percobaan ulang (**Retry entire sync if fails**, default 3) terus aktif, itu juga tanda bahwa backend menginginkan lebih sedikit permintaan paralel.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Comparing sync run durations in RcloneView Job History after changing the checker count" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka Job Manager dan edit job sinkronisasi yang menargetkan remote lambat Anda.
3. Di Step 2, atur **Number of equality checkers** ke 4 dan tentukan apakah Anda memerlukan **Enable checksum**.
4. Jalankan job, lalu bandingkan Time Spent dan status dengan eksekusi sebelumnya di Job History.

Beberapa menit penyesuaian mengubah sinkronisasi yang macet di fase perbandingan menjadi sinkronisasi yang selesai dengan stabil.

---

**Panduan Terkait:**

- [Percepat Transfer Cloud — Upload Multi-Thread dan Stream Paralel di RcloneView](https://rcloneview.com/support/blog/multi-threaded-transfers-parallel-streams-rcloneview)
- [Atasi Transfer Cloud yang Lambat — Percepat Sinkronisasi dan Salin di RcloneView](https://rcloneview.com/support/blog/fix-slow-cloud-transfers-speed-rcloneview)
- [Migrasi Cloud Terverifikasi Checksum dengan RcloneView (Drive, Dropbox, S3, R2)](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
