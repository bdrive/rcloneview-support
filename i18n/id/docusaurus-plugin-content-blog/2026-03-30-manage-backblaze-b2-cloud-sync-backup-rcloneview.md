---
slug: manage-backblaze-b2-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan Backblaze B2 — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - tayson
description: "Pelajari cara mengelola penyimpanan cloud Backblaze B2 dengan RcloneView. Sinkronisasi, cadangkan, dan transfer file antar bucket B2 serta penyedia cloud lainnya dengan mudah."
keywords:
  - backblaze b2 sync
  - backblaze b2 backup
  - rcloneview backblaze
  - b2 cloud storage manager
  - backblaze b2 file transfer
  - b2 bucket management
  - s3 compatible backup
  - backblaze b2 rclone gui
  - cloud to cloud sync b2
  - b2 lifecycle rules
tags:
  - RcloneView
  - backblaze-b2
  - Backblaze
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan Backblaze B2 — Sinkronisasi dan Pencadangan File dengan RcloneView

> Backblaze B2 menawarkan penyimpanan objek setara perusahaan dengan biaya jauh lebih murah dibanding AWS S3, dan RcloneView membuat pengelolaannya menjadi mudah.

Backblaze B2 telah menjadi pilihan utama bagi tim maupun individu yang membutuhkan penyimpanan cloud yang terjangkau dan andal tanpa kerumitan penyedia S3 tradisional. Dengan biaya $0,006 per GB/bulan untuk penyimpanan dan $0,01 per GB untuk egress (dengan 10 GB pertama gratis setiap hari melalui Cloudflare bandwidth alliance), B2 jauh lebih murah dibanding sebagian besar kompetitornya. RcloneView memberi Anda antarmuka grafis lengkap untuk mengelola bucket B2 — menjelajahi file, menjadwalkan pencadangan, menjalankan sinkronisasi, dan mentransfer data ke atau dari cloud lain tanpa perlu menyentuh command line.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Backblaze B2 di RcloneView

Menyiapkan Backblaze B2 di RcloneView hanya membutuhkan waktu kurang dari satu menit. Buka Remote Manager, pilih **Backblaze B2** sebagai penyedia, lalu masukkan Application Key ID dan Application Key Anda. Anda dapat menggunakan master key atau app-specific key yang dibatasi untuk satu bucket saja. App-specific key sangat direkomendasikan untuk alur kerja produksi karena mengikuti prinsip least privilege — jika kunci tersebut bocor, hanya satu bucket yang terekspos.

Setelah terhubung, RcloneView menampilkan semua bucket yang dapat diakses di explorer dua panel. Anda dapat menjelajahi direktori, melihat pratinjau file, dan memeriksa metadata seperti ukuran file, waktu modifikasi, dan checksum SHA-1 yang dihitung oleh B2 di sisi server.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Backblaze B2 remote in RcloneView Remote Manager" class="img-large img-center" />

## Sinkronisasi dan Transfer File dengan B2

RcloneView mendukung operasi **sync**, **copy**, dan **move** antara Backblaze B2 dan remote lain yang telah dikonfigurasi — termasuk drive lokal, Google Drive, Dropbox, AWS S3, dan Wasabi. Explorer dua panel memungkinkan Anda menyeret dan melepas file secara langsung, sementara sistem job menangani antrean dan logika percobaan ulang secara otomatis.

Untuk migrasi berskala besar, egress gratis dari B2 melalui kemitraan CDN Cloudflare atau Fastly berarti Anda dapat menarik data keluar dari B2 tanpa biaya bandwidth yang membengkak. Pembatasan bandwidth bawaan RcloneView dan transfer multi-thread memungkinkan Anda memaksimalkan koneksi saat kecepatan penting, atau menguranginya selama jam kerja.

Saat menyinkronkan folder, RcloneView membandingkan checksum secara default. B2 menyimpan hash SHA-1 untuk setiap file, dan RcloneView menggunakannya untuk melewati file yang tidak berubah — menghemat waktu sekaligus panggilan API. Ini sangat berharga karena B2 mengenakan biaya $0,004 per 10.000 transaksi Class B (download).

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files between Backblaze B2 and another cloud in RcloneView" class="img-large img-center" />

## Menjadwalkan Pencadangan Otomatis ke B2

Salah satu kegunaan terkuat B2 adalah sebagai target pencadangan. Job scheduler RcloneView memungkinkan Anda menentukan job pencadangan berulang — harian, mingguan, atau dengan jadwal cron kustom. Tetapkan folder lokal atau remote cloud lain sebagai sumber, B2 sebagai tujuan, dan biarkan scheduler menangani sisanya.

Aturan lifecycle B2 melengkapi alur kerja ini. Anda dapat mengonfigurasi bucket untuk secara otomatis menyembunyikan file setelah periode tertentu atau menghapus versi lama secara permanen, sehingga biaya penyimpanan tetap dapat diprediksi. Panel riwayat job RcloneView memberikan jejak audit yang jelas untuk setiap transfer, termasuk jumlah file, byte yang ditransfer, kesalahan, dan waktu yang berlalu.

Bagi tim yang tunduk pada persyaratan kepatuhan, menggabungkan sinkronisasi terjadwal RcloneView dengan fitur Object Lock milik B2 menghasilkan pencadangan yang tidak dapat diubah atau dihapus selama periode retensi.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling an automated backup job to Backblaze B2" class="img-large img-center" />

## Mounting B2 sebagai Drive Lokal

Fitur mount RcloneView memungkinkan Anda memetakan bucket B2 sebagai huruf drive lokal di Windows atau titik mount di macOS dan Linux. Ini berguna untuk aplikasi yang membutuhkan akses file lokal — pemutar media, editor foto, atau skrip yang memproses file dari sebuah direktori. Lapisan VFS cache menangani buffering read-ahead, sehingga pembacaan berurutan tetap berjalan baik meskipun melalui koneksi internet standar.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a Backblaze B2 bucket as a local drive in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buat Application Key di dashboard Backblaze B2 Anda dan tambahkan sebagai remote baru di RcloneView.
3. Jelajahi bucket Anda di explorer dua panel dan seret file untuk sinkronisasi atau transfer.
4. Buat job terjadwal untuk mengotomatiskan pencadangan malam hari ke B2.

Backblaze B2 memberikan ekonomi penyimpanan yang membuat pencadangan cloud praktis dalam skala besar, dan RcloneView menghilangkan hambatan CLI sehingga seluruh tim Anda dapat mengelolanya.

---

**Panduan Terkait:**

- [Migrasikan Backblaze B2 ke AWS S3 dengan RcloneView](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [Sinkronkan Google Drive ke Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/sync-google-drive-to-backblaze-b2-rcloneview)
- [Cadangkan Dropbox ke Backblaze B2 — Penyimpanan Terjangkau dengan RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />
