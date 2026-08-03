---
slug: manage-magalu-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan Magalu Cloud — Sinkronisasi dan Cadangkan File dengan RcloneView"
authors:
  - jay
description: "Hubungkan penyimpanan objek Magalu Cloud ke RcloneView untuk manajemen file drag-and-drop, sinkronisasi terjadwal, dan alur kerja pencadangan lintas cloud."
keywords:
  - penyimpanan cloud magalu
  - penyimpanan objek magalu
  - gui penyimpanan kompatibel s3
  - rcloneview magalu
  - pencadangan penyimpanan objek
  - gui sinkronisasi cloud
  - penjelajah file multi-cloud
  - manajer kompatibel s3
  - pencadangan magalu
  - penyimpanan cloud brasil
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan Magalu Cloud — Sinkronisasi dan Cadangkan File dengan RcloneView

> Jelajahi, sinkronkan, dan cadangkan penyimpanan objek Magalu Cloud dari jendela yang sama yang Anda gunakan untuk mengelola semua cloud lain.

Magalu Cloud adalah layanan penyimpanan objek yang kompatibel dengan S3, artinya layanan ini bekerja dengan alat apa pun yang dibangun di atas protokol S3 — termasuk rclone. RcloneView membungkus dukungan protokol tersebut dalam penjelajah file visual, sehingga tim yang sudah menggunakan bucket Magalu untuk data aplikasi atau pencadangan tidak perlu menghafal flag `s3cmd` atau berpindah-pindah tab konsol terpisah hanya untuk memindahkan file. Hubungkan sebuah bucket sekali, dan bucket tersebut akan berperilaku seperti remote lainnya di aplikasi.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Magalu Cloud sebagai Remote

Karena Magalu Cloud menggunakan protokol S3, RcloneView terhubung ke layanan ini dengan cara yang sama seperti terhubung ke Amazon S3, Wasabi, atau Backblaze B2: melalui jenis remote kompatibel S3. Buka **New Remote**, pilih opsi kompatibel S3, lalu masukkan Access Key, Secret Key, dan URL endpoint Magalu Cloud untuk wilayah Anda. RcloneView melakukan mount dan sinkronisasi 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux, sehingga bucket Magalu berada tepat di samping koneksi Google Drive, OneDrive, atau NAS on-premise yang sudah ada.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote Magalu Cloud S3 kompatibel baru di RcloneView" class="img-large img-center" />

Setelah remote disimpan, remote tersebut muncul sebagai tab di panel Explorer dengan navigasi pohon folder lengkap, pratinjau thumbnail untuk bucket yang penuh gambar, dan operasi klik kanan yang sama (salin, potong, ganti nama, hapus) yang tersedia untuk file lokal.

## Menyinkronkan Bucket Magalu dengan Penyimpanan Lain

Penyimpanan objek jarang berdiri sendiri — sebagian besar tim memadukannya dengan cloud lain untuk redundansi atau dengan infrastruktur lokal untuk staging. Wizard Sync RcloneView memungkinkan Anda menetapkan bucket Magalu sebagai sumber atau tujuan, memilih arah sinkronisasi satu arah atau sinkronisasi dua arah (Beta), dan menerapkan filter seperti ukuran file maksimum atau usia file sebelum ada yang ditransfer.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Mengonfigurasi tugas sinkronisasi antara bucket Magalu Cloud dan remote lain" class="img-large img-center" />

Jalankan **Dry Run** terlebih dahulu untuk melihat pratinjau objek mana saja yang akan disalin atau dihapus — pemeriksaan yang berguna sebelum mencerminkan bucket produksi ke tujuan cadangan untuk pertama kalinya.

## Mengotomatiskan Pencadangan Berulang

Untuk bucket yang berubah setiap hari, transfer manual tidak dapat diskalakan. Simpan konfigurasi sinkronisasi Magalu Anda sebagai Job, lalu gunakan langkah penjadwalan (lisensi PLUS) untuk menentukan pengulangan bergaya crontab — setiap malam, mingguan, atau interval kustom.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Menjadwalkan tugas pencadangan berulang untuk bucket Magalu Cloud" class="img-large img-center" />

Setiap eksekusi dicatat di Job History beserta status, kecepatan transfer, dan jumlah file, sehingga Anda dapat memastikan pencadangan terjadwal benar-benar selesai alih-alih hanya mengasumsikannya.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buat Access Key dan Secret Key untuk akun Magalu Cloud Anda dan catat endpoint wilayah Anda.
3. Tambahkan Magalu Cloud sebagai remote kompatibel S3 baru di RcloneView.
4. Siapkan tugas sinkronisasi — dengan Dry Run terlebih dahulu — untuk menghubungkannya ke tujuan cadangan atau penyimpanan sekunder Anda.

Memperlakukan bucket kompatibel S3 sebagai folder biasa di pengelola file Anda menghilangkan hambatan yang biasanya membuat penyimpanan objek terisolasi dari alur kerja Anda yang lain.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Cloud Wasabi dengan RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Kelola Penyimpanan Cloudflare R2 dengan RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Kelola Penyimpanan Cloud IDrive e2 dengan RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
