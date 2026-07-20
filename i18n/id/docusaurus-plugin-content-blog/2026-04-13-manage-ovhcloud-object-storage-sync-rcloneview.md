---
slug: manage-ovhcloud-object-storage-sync-rcloneview
title: "Kelola OVHcloud Object Storage — Sinkronisasi dan Pencadangan dengan RcloneView"
authors:
  - tayson
description: "Hubungkan OVHcloud Object Storage ke RcloneView menggunakan kredensial yang kompatibel dengan S3 dan sinkronkan bucket Eropa Anda yang sesuai GDPR dengan penyedia cloud apa pun."
keywords:
  - OVHcloud object storage RcloneView
  - OVHcloud S3 sync
  - OVHcloud backup rclone
  - OVHcloud cloud storage GUI
  - European GDPR cloud sync
  - OVHcloud bucket transfer
  - S3-compatible object storage
  - OVHcloud rcloneview setup
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola OVHcloud Object Storage — Sinkronisasi dan Pencadangan dengan RcloneView

> OVHcloud Object Storage adalah layanan yang kompatibel dengan S3 dan sesuai GDPR yang dihosting di Eropa — RcloneView menghubungkannya dengan seluruh ekosistem cloud Anda menggunakan Access Key, Secret Key, dan endpoint.

OVHcloud adalah salah satu penyedia cloud terbesar di Eropa, menawarkan object storage di berbagai wilayah di Prancis, Jerman, Inggris, dan lainnya. Antarmukanya yang kompatibel dengan S3 berarti RcloneView dapat terhubung dengannya persis seperti AWS S3 — Anda memasukkan kredensial dan endpoint, lalu siap untuk menjelajah, mentransfer, dan mengotomatisasi pencadangan. Untuk organisasi dengan persyaratan residensi data Eropa, OVHcloud yang dikombinasikan dengan RcloneView adalah solusi yang praktis dan dapat diaudit.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengambil Kredensial S3 OVHcloud Anda

OVHcloud menyediakan akses yang kompatibel dengan S3 melalui penawaran **High Performance Object Storage**. Untuk mendapatkan kredensial, masuk ke OVHcloud Control Panel, buka proyek Anda, dan navigasikan ke **Object Storage**. Di bawah **S3 users**, buat pengguna baru dan unduh Access Key dan Secret Key. Catat endpoint untuk wilayah Anda — misalnya, `s3.rbx.io.cloud.ovh.net` untuk Roubaix atau `s3.gra.io.cloud.ovh.net` untuk Gravelines.

Simpan URL endpoint tersebut; ini menunjukkan wilayah tempat bucket Anda berada dan harus sesuai dengan apa yang Anda masukkan di RcloneView.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring OVHcloud Object Storage as a new remote in RcloneView" class="img-large img-center" />

## Menghubungkan OVHcloud ke RcloneView

Buka RcloneView, buka **Remote Manager**, dan klik **New Remote**. Pilih **S3 Compatible** dari daftar penyedia dan isi kolom berikut:

- **Access Key ID**: kunci dari halaman S3 users OVHcloud
- **Secret Access Key**: secret yang sesuai
- **Endpoint**: endpoint regional Anda (misalnya, `s3.gra.io.cloud.ovh.net`)

Simpan remote tersebut dan buka di File Explorer. Bucket OVHcloud Anda akan muncul di level root. Navigasikan ke dalam bucket mana pun untuk melihat isinya yang diorganisasi berdasarkan prefix.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer between OVHcloud and another provider" class="img-large img-center" />

## Menyinkronkan OVHcloud dengan Penyedia Cloud Lain

Buka panel kedua di RcloneView yang mengarah ke remote lain apa pun — Google Drive, Backblaze B2, penyedia lain yang kompatibel dengan S3, atau folder lokal. Seret dan lepas file antar-panel, atau klik kanan untuk menyalin seluruh direktori. Untuk migrasi bucket berskala besar, sistem **Job** lebih dapat diandalkan: konfigurasikan sumber dan tujuan, atur konkurensi dan batas bandwidth di langkah 2, dan opsional aktifkan verifikasi checksum.

API S3 milik OVHcloud mendukung multipart upload untuk objek besar, dan RcloneView memanfaatkan ini secara otomatis saat mendeteksi file di atas ambang ukuran tertentu. Ini memastikan file video besar, dump database, atau arsip dapat ditransfer secara andal tanpa mencapai batas ukuran permintaan tunggal.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of OVHcloud transfer progress" class="img-large img-center" />

## Menjadwalkan Pencadangan Rutin

Dengan lisensi PLUS, Anda dapat menjadwalkan job sinkronisasi OVHcloud agar berjalan secara otomatis. Buka **Jobs**, konfigurasikan job, dan di langkah 3 atur jadwal cron — misalnya, `0 3 * * *` untuk menyinkronkan setiap malam pukul 3 pagi. Ini sangat berguna untuk alur pencadangan di mana data produksi yang disimpan di tempat lain memerlukan salinan sekunder di OVHcloud demi kepatuhan residensi data Eropa.

**Job History** mencatat setiap eksekusi: file yang ditransfer, volume data, kecepatan transfer, dan error apa pun. Jika job malam hari gagal, entri log menunjukkan dengan tepat file mana yang menyebabkan masalah sehingga Anda dapat menyelidikinya dengan cepat.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buat pengguna S3 di OVHcloud Control Panel dan catat Access Key, Secret Key, dan endpoint regional.
3. Buka **Remote Manager** di RcloneView, klik **New Remote**, pilih **S3 Compatible**, dan masukkan kredensial Anda.
4. Jelajahi bucket Anda dan konfigurasikan job sinkronisasi untuk mengintegrasikan OVHcloud ke dalam strategi cloud Anda yang lebih luas.

Infrastruktur Eropa milik OVHcloud dan sistem job RcloneView yang fleksibel menjadi kombinasi yang andal untuk alur kerja multi-cloud yang sadar GDPR.

---

**Panduan Terkait:**

- [Kelola Scaleway Object Storage — Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Kelola Sinkronisasi dan Pencadangan Cloud IDrive E2](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [Otomatiskan Pencadangan Cloud Harian dengan RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
