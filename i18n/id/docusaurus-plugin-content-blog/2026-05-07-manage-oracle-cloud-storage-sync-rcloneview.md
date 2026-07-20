---
slug: manage-oracle-cloud-storage-sync-rcloneview
title: "Kelola Oracle Cloud Object Storage — Sinkronisasi dan Pencadangan dengan RcloneView"
authors:
  - tayson
description: "Hubungkan Oracle Cloud Object Storage ke RcloneView menggunakan access key yang kompatibel dengan S3, jelajahi bucket, dan jalankan pekerjaan sinkronisasi serta pencadangan otomatis dengan mudah."
keywords:
  - Oracle Cloud Object Storage
  - RcloneView
  - S3-compatible
  - cloud sync
  - cloud backup
  - OCI storage
  - object storage
  - rclone oracle
tags:
  - RcloneView
  - oracle-cloud
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Oracle Cloud Object Storage — Sinkronisasi dan Pencadangan dengan RcloneView

> Oracle Cloud Object Storage menawarkan harga yang kompetitif dan SLA enterprise yang kuat — RcloneView memberi Anda antarmuka grafis sederhana untuk mengelola, menyinkronkan, dan mencadangkan bucket OCI Anda.

Oracle Cloud Infrastructure (OCI) Object Storage adalah penyimpanan objek yang sepenuhnya kompatibel dengan S3, dengan tingkatan Always Free yang murah hati dan jaminan durabilitas kelas enterprise. Tim yang menjalankan beban kerja di OCI atau mencari alternatif hemat biaya untuk AWS S3 akan menganggap Oracle Cloud Object Storage sebagai pilihan yang menarik. RcloneView terhubung ke layanan ini melalui API yang kompatibel dengan S3, memberikan GUI lengkap untuk manajemen bucket, transfer file, dan pekerjaan sinkronisasi otomatis — tanpa memerlukan CLI.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menyiapkan Oracle Cloud Object Storage di RcloneView

Untuk menghubungkan RcloneView ke Oracle Cloud Object Storage, Anda memerlukan tiga hal: **Customer Access Key** (bukan OCI API key Anda), **namespace**, dan **endpoint regional**. Buat access key di OCI Console pada profil pengguna Anda > Customer Secret Keys. Format endpoint-nya adalah `https://<namespace>.compat.objectstorage.<region>.oraclecloud.com` — misalnya, `https://axyz1234abcd.compat.objectstorage.us-ashburn-1.oraclecloud.com`.

Di RcloneView, klik **New Remote**, pilih **S3 Compatible Storage**, lalu pilih **Oracle Cloud Infrastructure Object Storage** dari dropdown penyedia. Tempelkan Access Key ID, Secret Key, dan endpoint regional Anda. Atur kolom region agar sesuai dengan kode region OCI Anda. Klik **Save** dan RcloneView akan langsung terhubung serta menampilkan daftar bucket Anda.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Oracle Cloud Object Storage remote in RcloneView" class="img-large img-center" />

## Menjelajahi Bucket dan Mengelola File

Setelah terhubung, Oracle Cloud Object Storage berperilaku seperti remote lain pada umumnya di explorer dua panel RcloneView. Jelajahi namespace bucket dan prefix objek, unggah file dengan drag and drop, dan unduh objek ke komputer lokal Anda. RcloneView menampilkan metrik transfer secara langsung sehingga Anda dapat memantau unggahan besar saat berlangsung.

Jika Anda menggunakan beberapa region OCI untuk redundansi geografis, tambahkan setiap endpoint regional sebagai remote bernama terpisah. Anda kemudian dapat membukanya berdampingan di explorer dan menyalin objek langsung antar-region melalui transfer cloud-to-cloud — tanpa perlu mengunduh secara lokal.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud file transfer between OCI buckets in RcloneView" class="img-large img-center" />

## Membuat Pekerjaan Sinkronisasi untuk Pencadangan

**Job Wizard** RcloneView memandu Anda membuat pekerjaan sinkronisasi ke atau dari Oracle Cloud Object Storage dalam empat langkah: pilih sumber, pilih tujuan, konfigurasikan opsi, dan tinjau sebelum menjalankan. Gunakan mode **dry run** terlebih dahulu untuk melihat dengan tepat file mana yang akan ditransfer atau dihapus — hal ini sangat penting saat menyinkronkan ke OCI karena operasi sinkronisasi dapat menghapus file di tujuan yang sudah tidak ada lagi di sumber.

Panel **Job History** mencatat setiap pekerjaan yang dijalankan beserta stempel waktu dan statistik transfer, memberikan jejak audit untuk keperluan kepatuhan. Pengguna lisensi PLUS dapat menambahkan **jadwal** ke setiap pekerjaan sehingga pencadangan berjalan secara otomatis — misalnya, setiap malam pukul 2 pagi — tanpa tindakan manual apa pun.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Oracle Cloud sync jobs in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buat **Customer Secret Key** di OCI Console dan catat namespace serta region Anda.
3. Di RcloneView, klik **New Remote** > **S3 Compatible Storage** > **Oracle Cloud Infrastructure Object Storage**.
4. Masukkan Access Key ID, Secret Key, dan URL endpoint regional Anda.
5. Jelajahi bucket Anda dan gunakan **Job Wizard** untuk membuat pekerjaan sinkronisasi atau pencadangan pertama Anda.

Kompatibilitas S3 pada Oracle Cloud Object Storage menjadikannya tambahan yang langsung cocok untuk strategi multi-cloud apa pun yang dikelola melalui RcloneView.

---

**Panduan Terkait:**

- [Kelola Amazon S3 — Sinkronisasi dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Sentralisasi S3, Wasabi, dan R2 dengan RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)
- [Kelola IDrive e2 — Sinkronisasi dan Pencadangan Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
