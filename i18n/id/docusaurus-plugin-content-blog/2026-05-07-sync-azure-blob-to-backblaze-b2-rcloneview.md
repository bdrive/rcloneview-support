---
slug: sync-azure-blob-to-backblaze-b2-rcloneview
title: "Sinkronisasi Azure Blob Storage ke Backblaze B2 — Pencadangan Cloud dengan RcloneView"
authors:
  - tayson
description: "Pelajari cara melakukan sinkronisasi atau migrasi file dari Azure Blob Storage ke Backblaze B2 menggunakan RcloneView untuk penghematan biaya, redundansi, dan pencadangan cloud otomatis."
keywords:
  - Azure Blob Storage
  - Backblaze B2
  - migrasi cloud
  - RcloneView
  - sinkronisasi cloud-to-cloud
  - pencadangan cloud
  - penghematan biaya penyimpanan
  - rclone azure b2
tags:
  - azure
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Azure Blob Storage ke Backblaze B2 — Pencadangan Cloud dengan RcloneView

> Memindahkan data dari Azure Blob Storage ke Backblaze B2 dapat secara signifikan mengurangi biaya penyimpanan Anda — RcloneView membuat proses migrasi dan sinkronisasi berkelanjutan menjadi mudah dengan antarmuka grafis yang terpandu.

Azure Blob Storage banyak digunakan untuk beban kerja enterprise, namun Backblaze B2 menawarkan harga penyimpanan yang jauh lebih rendah — seringkali hanya sebagian kecil dari biaya Azure — sehingga menarik sebagai target pencadangan sekunder atau tujuan migrasi penuh. Baik Anda menginginkan migrasi satu kali maupun sinkronisasi berkelanjutan untuk redundansi, RcloneView menangani keduanya tanpa memerlukan keahlian command-line. RcloneView dilengkapi dengan binary rclone bawaan, jadi tidak ada yang perlu diinstal tambahan.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menyiapkan Azure Blob Storage di RcloneView

Klik **New Remote** di RcloneView dan pilih **Microsoft Azure Blob Storage** dari daftar penyedia. Anda memerlukan **Storage Account Name** dan **Storage Account Key** dari Azure Portal (di bawah storage account Anda > Access Keys). Sebagai alternatif, Anda dapat menggunakan SAS token atau connection string. Setelah disimpan, RcloneView akan terhubung dan menampilkan daftar semua blob container Anda.

Jika Anda menggunakan beberapa akun Azure storage — misalnya, akun terpisah per environment atau region — tambahkan masing-masing sebagai remote bernama tersendiri. RcloneView mengelola semuanya dari antarmuka yang sama, sehingga Anda dapat membandingkan container dan memindahkan data antar akun dengan mudah.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Azure Blob Storage remote in RcloneView" class="img-large img-center" />

## Menghubungkan Backblaze B2

Tambahkan remote kedua untuk Backblaze B2 dengan mengklik **New Remote** lagi dan memilih **Backblaze B2**. Masukkan **Application Key ID** dan **Application Key** Anda dari dashboard Backblaze. Anda dapat membatasi cakupan key ke bucket tertentu untuk keamanan tambahan. Setelah disimpan, remote B2 akan muncul di explorer di samping remote Azure Anda.

Sekarang Anda dapat membuka kedua remote secara berdampingan dalam tampilan dual-pane. Seret dan lepas (drag and drop) file individual atau seluruh struktur folder dari Azure ke B2 untuk transfer satu kali. Untuk migrasi container berukuran besar, pendekatan sync job lebih andal dan dapat dilanjutkan kembali (resumable).

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Azure Blob to Backblaze B2 in RcloneView" class="img-large img-center" />

## Membuat dan Menjadwalkan Sync Job

Buka **Job Manager** dan gunakan **Job Wizard** empat langkah untuk membuat sync job dengan Azure Blob sebagai sumber dan Backblaze B2 sebagai tujuan. Selalu jalankan **dry run** terlebih dahulu — ini menampilkan pratinjau semua penambahan dan penghapusan tanpa mengubah data Anda. Setelah Anda puas dengan pratinjau tersebut, jalankan sinkronisasi secara langsung (live sync).

Untuk redundansi berkelanjutan, pengguna lisensi PLUS dapat menambahkan **jadwal (schedule)** untuk menjalankan sinkronisasi Azure-ke-B2 secara otomatis dengan interval harian atau mingguan. Panel **Job History** mencatat setiap eksekusi dengan jumlah file dan ukuran transfer, sehingga Anda dapat memverifikasi bahwa pencadangan berhasil diselesaikan dan memenuhi persyaratan kepatuhan (compliance) apa pun.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Azure Blob to Backblaze B2 sync in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote **Azure Blob Storage** menggunakan Storage Account Name dan Key Anda.
3. Tambahkan remote **Backblaze B2** menggunakan Application Key ID dan Key Anda.
4. Buka kedua remote di dual-pane explorer dan gunakan **Job Wizard** untuk membuat sync job.
5. Jalankan **dry run** terlebih dahulu, kemudian jadwalkan sinkronisasi berulang dengan lisensi PLUS.

Melakukan sinkronisasi dari Azure Blob ke Backblaze B2 melalui RcloneView adalah salah satu cara paling efisien untuk membangun strategi pencadangan cloud yang hemat biaya tanpa mengorbankan keandalan.

---

**Panduan Terkait:**

- [Mengelola Azure Blob Storage — Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-azure-blob-storage-cloud-sync-rcloneview)
- [Mengelola Backblaze B2 — Sinkronisasi dan Pencadangan Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Migrasi OneDrive ke Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
