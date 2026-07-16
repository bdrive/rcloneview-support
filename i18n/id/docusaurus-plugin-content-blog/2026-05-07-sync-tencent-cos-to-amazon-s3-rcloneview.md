---
slug: sync-tencent-cos-to-amazon-s3-rcloneview
title: "Sinkronisasi Tencent COS ke Amazon S3 — Pencadangan Cloud dengan RcloneView"
authors:
  - tayson
description: "Pelajari cara menyinkronkan data Tencent Cloud COS ke Amazon S3 menggunakan RcloneView untuk ketersediaan global, redundansi lintas wilayah, dan pekerjaan pencadangan cloud otomatis."
keywords:
  - Tencent COS to S3
  - Tencent COS sync
  - Amazon S3 backup
  - RcloneView Tencent
  - cloud-to-cloud sync
  - S3-compatible storage
  - China cloud to global
  - cross-region cloud sync
tags:
  - tencent-cos
  - amazon-s3
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Tencent COS ke Amazon S3 — Pencadangan Cloud dengan RcloneView

> Bisnis yang menjalankan Tencent Cloud COS untuk data wilayah China dapat menggunakan RcloneView untuk menyinkronkan data tersebut ke Amazon S3 demi ketersediaan global dan redundansi lintas wilayah.

Tencent Cloud Object Storage (COS) banyak digunakan oleh bisnis dengan pengguna atau operasi di daratan China, di mana layanan ini menawarkan latensi rendah dan kepatuhan terhadap regulasi data lokal. Namun, untuk ketersediaan global atau pemulihan bencana, organisasi sering kali perlu mereplikasi data tersebut ke Amazon S3, yang memiliki jangkauan internasional lebih luas. RcloneView membuat sinkronisasi lintas-cloud ini menjadi mudah melalui dukungan remote yang kompatibel dengan S3 untuk kedua penyedia, semuanya dikelola dari satu antarmuka grafis.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menyiapkan Remote Tencent COS

Baik Tencent COS maupun Amazon S3 kompatibel dengan S3, sehingga RcloneView menanganinya melalui kerangka kerja penyedia S3 yang sama. Klik **New Remote** di RcloneView dan pilih **S3 Compatible Storage**. Dari menu dropdown penyedia, pilih **Tencent Cloud COS**. Masukkan **SecretId** dan **SecretKey** Tencent Cloud Anda dari Tencent Cloud Console, beserta **endpoint** yang sesuai untuk wilayah COS Anda — misalnya, `cos.ap-guangzhou.myqcloud.com` untuk Guangzhou.

Setelah disimpan, remote Tencent COS akan muncul di penjelajah dua panel. Anda dapat menelusuri bucket dan objek COS Anda, memverifikasi bahwa konten dapat diakses, dan memastikan struktur folder sesuai harapan sebelum menyiapkan pekerjaan sinkronisasi.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Tencent Cloud COS as an S3-compatible remote in RcloneView" class="img-large img-center" />

## Menambahkan Amazon S3 sebagai Tujuan

Klik **New Remote** lagi dan pilih **Amazon S3**. Masukkan **Access Key ID** dan **Secret Access Key** AWS Anda, lalu tentukan wilayah AWS tempat bucket tujuan Anda berada. Jika bucket tujuan Anda belum ada, buat terlebih dahulu di AWS S3 Console — RcloneView akan terhubung ke bucket tersebut selama konfigurasi.

Setelah kedua remote dikonfigurasi, buka keduanya berdampingan di penjelajah dua panel untuk membandingkan konten dan memverifikasi konektivitas. Anda dapat melakukan pemeriksaan spot dengan menelusuri beberapa folder di masing-masing sisi sebelum menjalankan pekerjaan sinkronisasi penuh.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud view of Tencent COS and Amazon S3 in RcloneView" class="img-large img-center" />

## Membuat dan Menjadwalkan Pekerjaan Sinkronisasi

Buka **Job Manager** dan luncurkan **Job Wizard**. Atur bucket Tencent COS (atau prefix tertentu) sebagai sumber dan bucket Amazon S3 Anda sebagai tujuan. Sebelum menjalankan sinkronisasi langsung, gunakan opsi **dry run** untuk melihat pratinjau apa yang akan ditransfer. Untuk migrasi massal awal dari bucket COS yang sudah ada, dry run membantu memperkirakan ukuran transfer dan menangkap masalah path atau encoding.

Setelah pekerjaan berhasil dijalankan, pertimbangkan untuk mengaturnya pada jadwal berulang. Pengguna lisensi PLUS dapat mengonfigurasi pekerjaan sinkronisasi otomatis yang berjalan secara harian atau mingguan, menjaga replika S3 tetap terbaru seiring masuknya data baru di Tencent COS. Panel **Job History** mencatat setiap eksekusi, memberi Anda visibilitas terhadap volume transfer dan kesalahan apa pun.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Tencent COS to Amazon S3 sync in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote **Tencent Cloud COS** melalui **New Remote** > **S3 Compatible Storage** > **Tencent Cloud COS**.
3. Tambahkan remote **Amazon S3** dengan kredensial AWS Anda.
4. Gunakan **Job Wizard** untuk membuat pekerjaan sinkronisasi dari COS ke S3 dan jalankan dry run terlebih dahulu.
5. Jadwalkan pekerjaan sinkronisasi berulang dengan lisensi PLUS untuk replikasi lintas-cloud yang berkelanjutan.

Menyinkronkan dari Tencent COS ke Amazon S3 melalui RcloneView adalah salah satu cara paling bersih untuk mencapai ketersediaan data global dari penyimpanan utama di wilayah China.

---

**Panduan Terkait:**

- [Kelola Tencent COS — Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-tencent-cos-cloud-sync-rcloneview)
- [Kelola Amazon S3 — Sinkronisasi Cloud dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Sentralisasi S3, Wasabi, dan R2 dengan RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
