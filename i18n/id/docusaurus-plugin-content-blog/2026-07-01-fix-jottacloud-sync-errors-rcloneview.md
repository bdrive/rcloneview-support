---
slug: fix-jottacloud-sync-errors-rcloneview
title: "Perbaiki Error Sinkronisasi Jottacloud — Troubleshoot dan Atasi dengan RcloneView"
authors:
  - robin
description: "Diagnosis dan perbaiki kegagalan sinkronisasi Jottacloud yang umum di RcloneView, mulai dari transfer yang macet hingga koneksi terputus, dengan langkah troubleshooting praktis."
keywords:
  - jottacloud sync errors
  - fix jottacloud sync
  - jottacloud connection issues
  - jottacloud rcloneview
  - jottacloud troubleshooting
  - jottacloud backup failed
  - jottacloud sync stuck
  - rcloneview jottacloud fix
tags:
  - jottacloud
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Sinkronisasi Jottacloud — Troubleshoot dan Atasi dengan RcloneView

> Ketika job sinkronisasi Jottacloud macet, mengalami error, atau diam-diam melewati file, perbaikannya biasanya ada di pengaturan lanjutan job tersebut, bukan pada penyedia layanannya. RcloneView memberi Anda visibilitas untuk menemukan dan memperbaikinya.

Jottacloud adalah penyedia penyimpanan cloud asal Norwegia dengan jaminan privasi yang kuat, dan RcloneView terhubung langsung ke layanan ini untuk menjelajahi, sinkronisasi, dan pencadangan. Error sinkronisasi pada Jottacloud cenderung mengikuti beberapa pola yang berulang: koneksi autentikasi terputus, transfer yang macet di tengah jalan, dan file yang tidak sesuai setelah proses selesai. Karena RcloneView menampilkan log job secara detail dan memungkinkan Anda menyesuaikan pengaturan transfer per job, sebagian besar masalah ini dapat diisolasi dan diselesaikan tanpa perlu keluar dari aplikasi.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mendiagnosis Kegagalan dengan Job History dan Log

Sebelum mengubah pengaturan apa pun, periksa terlebih dahulu apa yang sebenarnya terjadi. Job History mencatat jenis eksekusi, status (Completed / Errored / Canceled), total ukuran yang ditransfer, dan durasi setiap proses — ini langsung menunjukkan apakah job gagal total atau selesai dengan hasil sebagian. Untuk detail yang lebih mendalam, aktifkan logging rclone di Settings, atur log level ke DEBUG, dan mulai ulang koneksi rclone yang tertanam sebelum mereproduksi sinkronisasi tersebut. File log yang dihasilkan menunjukkan respons API persis yang dikembalikan Jottacloud, yang jauh lebih berguna dibandingkan pesan umum seperti "sync failed".

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Job History to diagnose a failed Jottacloud sync in RcloneView" class="img-large img-center" />

## Memperbaiki Transfer yang Macet atau Berhenti

Jika job Jottacloud tampak macet di tengah jalan tanpa progres di tab Transferring, penyebab paling umum adalah terlalu banyak koneksi bersamaan yang membebani API penyedia layanan. Kurangi jumlah file transfer dan multi-thread transfer pada langkah Advanced Settings job sinkronisasi — Jottacloud menangani jumlah stream bersamaan yang lebih sedikit dengan lebih andal dibandingkan penyedia dengan toleransi API yang lebih tinggi. Mengurangi jumlah equality checker menjadi 4 atau kurang juga disarankan untuk backend yang lebih lambat, sehingga mengurangi permintaan perbandingan paralel yang dapat memicu throttling.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Adjusting transfer settings before re-running a Jottacloud sync job in RcloneView" class="img-large img-center" />

## Menangkap Ketidaksesuaian Sebelum Menjadi Kehilangan Data

Error sinkronisasi tidak selalu berupa kegagalan yang jelas — terkadang job selesai tetapi meninggalkan file yang tidak sinkron akibat perbedaan timestamp atau checksum. Menjalankan Dry Run sebelum sinkronisasi sesungguhnya menunjukkan dengan tepat file mana yang akan disalin atau dihapus, sehingga Anda bisa menangkap perubahan yang tidak terduga sebelum terjadi. Jika file terus-menerus terlihat berbeda meskipun kontennya sama, mengaktifkan opsi perbandingan checksum memaksa RcloneView membandingkan file berdasarkan hash dan ukuran, bukan waktu modifikasi, yang menyelesaikan sebagian besar kasus ketidaksesuaian palsu. RcloneView melakukan mount DAN sinkronisasi 90+ penyedia dari satu jendela, sehingga Anda dapat memeriksa silang ukuran file yang dicurigai langsung di panel Explorer sebelum melanjutkan troubleshooting.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to verify Jottacloud files after a sync error in RcloneView" class="img-large img-center" />

Pengaturan retry juga penting di sini: membiarkan "Retry entire sync if fails" pada nilai default 3 memberi kesempatan bagi gangguan koneksi Jottacloud yang sifatnya sementara untuk pulih secara otomatis sebelum Anda perlu turun tangan secara manual.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka Job History untuk job Jottacloud yang gagal dan catat status serta error yang tepat.
3. Aktifkan logging DEBUG dan reproduksi sinkronisasi untuk menangkap respons API yang spesifik.
4. Sesuaikan jumlah transfer bersamaan dan checker, lalu jalankan ulang dengan Dry Run terlebih dahulu.

Beberapa penyesuaian tertarget pada pengaturan sinkronisasi menyelesaikan sebagian besar masalah sinkronisasi Jottacloud, menjaga pencadangan Anda tetap andal tanpa perlu menebak-nebak.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Jottacloud — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Perbaiki Error Sinkronisasi Nextcloud — Cara Mengatasinya dengan RcloneView](https://rcloneview.com/support/blog/fix-nextcloud-sync-errors-rcloneview)
- [Dry Run — Pratinjau Sinkronisasi Cloud Sebelum Transfer di RcloneView](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
