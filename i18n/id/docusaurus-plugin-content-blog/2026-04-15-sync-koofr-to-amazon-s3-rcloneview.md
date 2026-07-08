---
slug: sync-koofr-to-amazon-s3-rcloneview
title: "Sinkronisasi Koofr ke Amazon S3 — Pencadangan Cloud dengan RcloneView"
authors:
  - tayson
description: "Sinkronkan Koofr ke Amazon S3 dengan RcloneView — transfer file antara penyimpanan cloud Eropa dan AWS S3 menggunakan GUI andal yang dibangun di atas rclone."
keywords:
  - Koofr to Amazon S3 sync
  - Koofr backup to S3
  - cloud sync tool
  - RcloneView Koofr
  - S3 archiving
  - cloud-to-cloud sync
  - AWS backup
  - European cloud to S3
  - Koofr rclone sync
  - GDPR cloud to S3
tags:
  - RcloneView
  - koofr
  - amazon-s3
  - cloud-to-cloud
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Koofr ke Amazon S3 — Pencadangan Cloud dengan RcloneView

> Penyimpanan Koofr yang dihosting di Eropa dan daya tahan global Amazon S3 memiliki peran yang saling melengkapi — RcloneView melakukan sinkronisasi langsung di antara keduanya, menciptakan strategi pencadangan lintas penyedia tanpa beban disk lokal.

Pusat data Eropa milik Koofr dan infrastrukturnya yang sesuai GDPR menjadikannya platform penyimpanan aktif yang kuat, sementara Amazon S3 memberikan daya tahan kelas dunia dan integrasi CDN untuk pengarsipan dan distribusi. Sinkronisasi antara keduanya menciptakan strategi dua tingkat yang tangguh: menyimpan data kerja di pusat data Eropa milik Koofr sambil mengarsipkan ke S3 untuk optimalisasi biaya jangka panjang. RcloneView menangani sinkronisasi langsung antara kedua remote tanpa menyentuh disk lokal Anda.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menyiapkan Kedua Remote

Di RcloneView, tambahkan Koofr melalui **Remote tab > New Remote > Koofr** dan masukkan kredensial Anda. Kemudian tambahkan **Amazon S3**: pilih dari daftar penyedia dan masukkan Access Key ID, Secret Access Key, dan AWS Region Anda. Dengan kedua remote aktif, buka dual-panel explorer — Koofr di satu sisi, bucket S3 Anda di sisi lain — untuk tampilan berdampingan dari penyimpanan Anda.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Koofr and Amazon S3 remotes in RcloneView" class="img-large img-center" />

Perbandingan langsung ini berguna untuk perencanaan: tinjau isi Koofr, konfirmasi struktur bucket S3 yang Anda inginkan, dan verifikasi nama folder sebelum memulai job sinkronisasi.

## Mengonfigurasi Job Sinkronisasi

Di **Job Manager**, buat job sinkronisasi dari folder Koofr Anda ke path bucket S3 target. Bagi tim compliance yang mencadangkan dokumen sensitif dari Koofr ke S3 Standard-IA untuk retensi yang hemat biaya, job sinkronisasi berjalan setiap minggu menggunakan penjadwalan (lisensi PLUS).

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Koofr to Amazon S3 sync job in RcloneView" class="img-large img-center" />

Opsi filtering RcloneView memungkinkan Anda membatasi sinkronisasi ke jenis file tertentu — misalnya, hanya menyinkronkan file `.pdf` dan `.docx` sambil mengecualikan file sementara dan thumbnail. Filter **Max File Age** lebih lanjut membatasi sinkronisasi ke file yang baru diubah, menjaga proses inkremental tetap cepat dan terfokus.

## Pemantauan dan Verifikasi

Setelah sinkronisasi awal, proses berikutnya hanya mentransfer perubahan — RcloneView membandingkan ukuran file dan tanggal modifikasi untuk mengidentifikasi perbedaan. Tab **Job History** menampilkan hasil setiap sinkronisasi dengan jumlah byte yang ditransfer, jumlah file, durasi, dan status.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Koofr to S3 sync runs in RcloneView" class="img-large img-center" />

Bagi organisasi yang mempertahankan Koofr sebagai penyimpanan utama yang sesuai GDPR dan S3 sebagai tingkat arsip, pola sinkronisasi ini menciptakan siklus hidup data yang jelas: aktif di Koofr, diarsipkan ke S3 sesuai jadwal. Fitur **Folder Compare** menyediakan verifikasi point-in-time bahwa kedua platform tersinkronisasi saat diperlukan.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote **Koofr** (kredensial) dan remote **Amazon S3** (Access Key).
3. Buat job sinkronisasi di **Job Manager** dari Koofr ke S3.
4. Aktifkan penjadwalan (PLUS) untuk mengotomatiskan pencadangan rutin.

RcloneView mengubah arsitektur dua-cloud menjadi alur kerja yang terkelola dan otomatis — Koofr untuk compliance, S3 untuk pengarsipan, dengan sinkronisasi yang menjaga keduanya tetap terkini.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan Koofr — Sinkronisasi dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Koofr sebagai Hub Multi-Cloud — Google Drive, OneDrive, Dropbox dengan RcloneView](https://rcloneview.com/support/blog/koofr-multi-cloud-hub-google-drive-onedrive-dropbox-rcloneview)
- [Pencadangan Dropbox ke AWS S3 dengan RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)

<CloudSupportGrid />
