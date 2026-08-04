---
slug: manage-petabox-cloud-sync-backup-rcloneview
title: "Mengelola Penyimpanan Petabox — Sinkronkan dan Cadangkan File dengan RcloneView"
authors:
  - kai
description: "Hubungkan penyimpanan Petabox yang kompatibel dengan S3 ke RcloneView untuk menjelajah, sinkronisasi, pencadangan, dan mount lintas platform bersama 90+ penyedia cloud lainnya."
keywords:
  - Petabox
  - Petabox RcloneView
  - Sinkronisasi Petabox
  - Pencadangan Petabox
  - Penyimpanan kompatibel S3
  - Mengelola Petabox
  - GUI penyimpanan objek
  - Penyimpanan cloud Petabox
  - Manajer cloud kompatibel S3
  - Petabox rclone
tags:
  - RcloneView
  - s3-compatible
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengelola Penyimpanan Petabox — Sinkronkan dan Cadangkan File dengan RcloneView

> Jelajahi, sinkronkan, dan cadangkan penyimpanan objek Petabox dalam jendela yang sama dengan setiap cloud lain yang Anda gunakan — tanpa memerlukan klien S3 terpisah.

Petabox adalah layanan penyimpanan objek yang kompatibel dengan S3, artinya ia terhubung ke RcloneView dengan cara yang sama seperti Amazon S3 atau Wasabi: melalui Access Key, Secret Key, dan endpoint kustom. Setelah terhubung, Petabox berperilaku seperti remote lainnya di penjelajah file RcloneView — dapat dijelajahi, disinkronkan, dan di-mount berdampingan dengan penyedia lain Anda. Ini penting bagi tim yang memilih Petabox karena efisiensi biaya penyimpanan objeknya, tetapi tetap membutuhkan pengalaman manajer file biasa, bukan AWS CLI atau konsol web yang terbatas pada bucket.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Petabox sebagai Remote yang Kompatibel dengan S3

Menambahkan Petabox mengikuti alur remote kompatibel S3 standar RcloneView: buka "New Remote", pilih tipe yang kompatibel dengan S3, lalu masukkan Access Key ID Petabox, Secret Access Key, dan URL endpoint bucket dari dashboard Petabox Anda. RcloneView dilengkapi dengan biner rclone bawaan, sehingga tidak diperlukan langkah instalasi terpisah — cukup dengan kredensial saja, bucket sudah dapat dibawa ke penjelajah file.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Petabox S3-compatible remote in RcloneView" class="img-large img-center" />

Setelah ditambahkan, Petabox muncul sebagai tab di panel penjelajah, sama seperti Google Drive atau OneDrive. Berbeda dengan browser S3 yang hanya mendukung mount, RcloneView juga menyinkronkan dan membandingkan folder dengan Petabox — pada lisensi FREE, tanpa perlu pembelian terpisah untuk sinkronisasi dasar.

## Menyinkronkan Petabox dengan Penyedia Cloud Lain

Kasus penggunaan umum Petabox adalah mengarsipkan data yang saat ini berada di penyedia yang lebih mahal, atau mencerminkan bucket yang sedang digunakan demi redundansi. Wizard sinkronisasi RcloneView memungkinkan Anda mengatur Petabox sebagai sumber atau tujuan, dengan filter berdasarkan jenis file, usia, dan ukuran, sehingga hanya data yang Anda inginkan yang benar-benar dipindahkan.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Petabox object storage with another cloud provider in RcloneView" class="img-large img-center" />

Mode Dry Run menampilkan pratinjau persis apa yang akan disalin atau dihapus sebelum apa pun benar-benar terjadi — berguna saat mengarahkan sinkronisasi satu arah ke bucket yang tidak ingin Anda timpa secara tidak sengaja. Tampilan Compare melangkah lebih jauh, menampilkan file yang hanya ada di kiri, hanya di kanan, dan yang berbeda ukurannya antara Petabox dan remote kedua sebelum Anda melakukan penyalinan.

## Menjadwalkan Pencadangan Petabox Berulang

Untuk perlindungan berkelanjutan, simpan sinkronisasi Petabox Anda sebagai tugas di Job Manager alih-alih menjalankannya ulang secara manual. Pengguna lisensi PLUS dapat melampirkan jadwal bergaya crontab sehingga pencadangan ke atau dari Petabox berjalan secara otomatis, dengan Job History melacak status, kecepatan transfer, dan jumlah file untuk setiap eksekusi.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Petabox backup job in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka "New Remote" dan pilih tipe penyimpanan kompatibel S3 untuk Petabox.
3. Masukkan Access Key, Secret Key, dan endpoint Petabox Anda, lalu jelajahi bucket.
4. Siapkan tugas sinkronisasi atau pencadangan, dan jika diperlukan, lampirkan jadwal di Job Manager.

Struktur harga penyimpanan objek Petabox berpadu baik dengan kemampuan RcloneView untuk memindahkan data secara bebas antara Petabox dan cloud lain mana pun yang sudah Anda kelola.

---

**Panduan Terkait:**

- [Mengelola Cloudflare R2 — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Mengelola Penyimpanan Wasabi — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Mount Bucket Amazon S3 sebagai Drive Lokal dengan RcloneView](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)

<CloudSupportGrid />
