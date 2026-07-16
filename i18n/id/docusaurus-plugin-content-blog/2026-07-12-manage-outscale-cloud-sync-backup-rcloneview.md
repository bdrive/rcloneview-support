---
slug: manage-outscale-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan Outscale — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - morgan
description: "Hubungkan Outscale Object Storage ke RcloneView untuk penjelajahan file, sinkronisasi, dan pencadangan yang kompatibel dengan S3 di Windows, macOS, dan Linux."
keywords:
  - Outscale storage
  - Outscale Object Storage
  - S3-compatible storage GUI
  - RcloneView Outscale
  - cloud backup software
  - sync Outscale to cloud
  - manage cloud storage GUI
  - object storage sync tool
  - multi-cloud file manager
  - S3 credentials setup
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan Outscale — Sinkronisasi dan Pencadangan File dengan RcloneView

> Jelajahi, sinkronkan, dan cadangkan bucket Outscale Object Storage dari antarmuka grafis, tanpa perlu repot mengelola kredensial S3 mentah melalui command line.

Outscale Object Storage diakses melalui protokol S3-compatible milik rclone, yang berarti pengaturannya memerlukan Access Key, Secret Key, dan endpoint — detail yang mudah salah ketik dalam file konfigurasi. RcloneView membungkus proses pengaturan ini dalam formulir terpandu dan menambahkan penjelajah file lengkap, mesin sinkronisasi, serta penjadwal job di atasnya, sehingga tim yang sudah menyimpan data di Outscale dapat mengelolanya dengan cara yang sama seperti remote lainnya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Outscale sebagai Remote yang Kompatibel dengan S3

Menambahkan Outscale di RcloneView mengikuti alur input kredensial yang sama seperti layanan S3-compatible lainnya: buka tab Remote > New Remote, pilih tipe S3-compatible, lalu masukkan Access Key ID, Secret Access Key, dan endpoint Outscale. Connect Manager juga memungkinkan Anda mengarahkan RcloneView ke instance rclone eksternal, jika integrasi Outscale Anda sudah berjalan melalui rclone daemon bersama di server.

Setelah remote disimpan, remote tersebut akan muncul sebagai tab tersendiri di panel Explorer, berdampingan dengan penyimpanan cloud atau lokal lain yang sudah dikonfigurasi. Anda dapat mengganti nama koneksi menggunakan Alias remote untuk mempersingkat jalur bucket yang bertingkat dalam menjadi sesuatu yang lebih mudah dinavigasi sehari-hari.

<img src="/support/images/en/blog/new-remote.png" alt="Adding an Outscale S3-compatible remote in RcloneView" class="img-large img-center" />

## Menjelajahi, Menyinkronkan, dan Mencadangkan Data Outscale

Setelah remote terhubung, File Explorer menampilkan tampilan dua panel untuk membandingkan data di Outscale dengan folder lokal atau remote cloud lainnya. Menyeret dan melepas (drag and drop) antar-panel akan memicu penyalinan saat berpindah antara dua remote yang berbeda, dan menu klik kanan mencakup rename, delete, get size, serta download/upload untuk operasi file sehari-hari.

Untuk pencadangan berkala, wizard Sync mengonfigurasi sumber dan tujuan, konkurensi transfer, serta aturan filter dalam empat langkah, termasuk opsi seperti usia file maksimum dan filter bawaan untuk jenis media atau dokumen. Hubungkan layanan S3-compatible seperti Outscale dengan akses baca/tulis penuh pada lisensi FREE — tidak perlu upgrade hanya untuk menulis data kembali ke bucket. Sinkronisasi 1:N dapat mencerminkan bucket Outscale yang sama ke beberapa tujuan dalam satu job, berguna saat pencadangan perlu mendarat di drive lokal sekaligus remote cloud kedua.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Outscale storage and another remote" class="img-large img-center" />

## Mengotomatiskan Pencadangan Outscale Berkala

Job Manager menyimpan setiap job sync, copy, atau move yang Anda buat dalam satu daftar, dengan setiap eksekusi tercatat di Job History lengkap dengan status, ukuran transfer, dan jumlah file. Dry Run memungkinkan Anda melihat pratinjau file mana saja yang akan disalin atau dihapus sebelum melakukan transfer sungguhan — pemeriksaan keamanan yang berguna sebelum sinkronisasi pertama berskala besar ke bucket Outscale baru.

Pengguna lisensi PLUS dapat melampirkan jadwal bergaya crontab ke sebuah job sehingga pencadangan Outscale berjalan otomatis pada interval berkala, dengan opsi simulasi untuk melihat pratinjau waktu eksekusi mendatang sebelum menyimpan.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for Outscale storage" class="img-large img-center" />

## Mount Outscale sebagai Drive Lokal

Penyimpanan Outscale juga dapat di-mount sebagai virtual drive, memungkinkan aplikasi desktop lain membaca dan menulis konten bucket seolah-olah file tersebut lokal. Konfigurasi mount mencakup mode VFS cache (default: writes), batas ukuran cache, dan mode read-only, dan mount dapat dijalankan langsung dari toolbar panel remote atau dari Mount Manager khusus.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting an Outscale bucket as a local drive in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka tab Remote > New Remote dan pilih opsi S3-compatible untuk memasukkan kredensial dan endpoint Outscale Anda.
3. Gunakan Folder Compare atau drag and drop untuk memindahkan data yang ada ke Outscale, lalu siapkan job Sync untuk pencadangan berkelanjutan.
4. Tambahkan job tersebut ke Job Manager dan, pada lisensi PLUS, lampirkan jadwal agar pencadangan berjalan tanpa intervensi manual.

Setelah remote dikonfigurasi, penyimpanan Outscale berperilaku seperti koneksi lain di RcloneView — dapat dijelajahi, disinkronkan, dan siap dicadangkan sesuai jadwal.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Wasabi — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Kelola Scaleway Object Storage — Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Kelola Hetzner Object Storage — Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-hetzner-object-storage-cloud-sync-rcloneview)

<CloudSupportGrid />
