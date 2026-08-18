---
slug: manage-icloud-photos-cloud-sync-rcloneview
title: "Mengelola iCloud Photos — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - robin
description: "Kelola iCloud Photos dengan RcloneView — jelajahi, sinkronkan, dan cadangkan pustaka foto Apple Anda ke cloud lain dari satu GUI lintas platform."
keywords:
  - manajemen iCloud Photos
  - pencadangan iCloud Photos
  - sinkronisasi iCloud Photos
  - RcloneView iCloud Photos
  - pencadangan cloud Apple Photos
  - iCloud Photos to Google Drive
  - migrasi iCloud Photos
  - alat pencadangan pustaka foto Apple
  - iCloud Photos rclone
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - macos
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengelola iCloud Photos — Sinkronisasi dan Pencadangan File dengan RcloneView

> Hubungkan pustaka iCloud Photos Anda di RcloneView dan cadangkan ke cloud lain tanpa harus mengekspor album satu per satu secara manual.

Ekosistem Photos milik Apple menyimpan gambar dan video selama bertahun-tahun terkunci di dalam iCloud, dan untuk mendapatkan salinan kedua di tempat lain biasanya berarti mengekspor album satu per satu melalui aplikasi Photos. RcloneView terhubung ke iCloud Photos sebagai remote khususnya sendiri — paket terpisah dari iCloud Drive — sehingga Anda dapat menjelajahi pustaka secara langsung dan menyalinnya ke Google Drive, Amazon S3, atau drive cadangan lokal tanpa langkah ekspor manual. Hubungkan S3, Azure File Storage, atau Backblaze B2 dengan akses baca/tulis penuh pada lisensi FREE, sehingga sisi tujuan dari pencadangan foto tidak memerlukan biaya tambahan untuk disiapkan.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan iCloud Photos sebagai Remote

iCloud Photos ditambahkan melalui tab Remote > New Remote di RcloneView, dan disiapkan sebagai jenis remote khusus tersendiri, terpisah dari iCloud Drive — keduanya berperilaku sebagai remote yang terpisah meskipun sama-sama berasal dari akun Apple yang sama. Setelah diautentikasi, pustaka akan muncul di panel Explorer seperti penyimpanan cloud lainnya, lengkap dengan folder, thumbnail, dan metadata file yang dapat Anda jelajahi dan pilih.

<img src="/support/images/en/blog/new-remote.png" alt="Adding an iCloud Photos remote in RcloneView" class="img-large img-center" />

Karena pustaka bisa mencapai puluhan ribu file bagi pengguna iCloud jangka panjang, beralih ke Thumbnail View milik RcloneView sebelum melakukan penyalinan massal sangat berharga — fitur ini memungkinkan Anda menelusuri pratinjau gambar untuk memastikan Anda menunjuk ke album atau rentang tanggal yang tepat sebelum transfer dimulai.

## Mencadangkan ke Cloud Kedua

Setelah iCloud Photos terhubung, siapkan tugas sinkronisasi melalui wizard 4 langkah: pilih iCloud Photos sebagai sumber, pilih remote tujuan — Google Drive, bucket yang kompatibel dengan S3, atau drive eksternal lokal — lalu jalankan Dry Run terlebih dahulu untuk melihat pratinjau persis apa yang akan disalin sebelum transfer benar-benar terjadi. Khusus untuk pustaka foto, perbandingan checksum pada Langkah 2 berguna karena file foto jarang berubah ukurannya, tetapi Anda tetap ingin yakin bahwa salinannya cocok dengan aslinya byte demi byte.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job from iCloud Photos to another cloud remote in RcloneView" class="img-large img-center" />

Filtering Settings pada Langkah 3 juga membantu mempersempit cakupan pustaka besar — filter usia file maksimum membatasi tugas pencadangan hanya pada penambahan terbaru, yang menjaga eksekusi berulang tetap cepat setelah salinan penuh awal selesai.

## Mengotomatiskan Pencadangan Berulang

Ekspor satu kali tidak melindungi foto yang diambil bulan depan, sehingga sebagian besar pengguna iCloud Photos menyiapkan tugas sinkronisasi berulang alih-alih dijalankan manual satu kali. Pada lisensi PLUS, lampirkan jadwal bergaya crontab ke tugas tersebut agar berjalan otomatis sesuai jadwal yang Anda inginkan — harian, mingguan, atau setelah jam tertentu setiap malam — lalu periksa Job History setelahnya untuk memastikan eksekusi selesai dan melihat berapa banyak file yang ditransfer.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring iCloud Photos backup job in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote iCloud Photos melalui tab Remote > New Remote.
3. Konfigurasikan tugas sinkronisasi ke tujuan pencadangan pilihan Anda dan jalankan Dry Run terlebih dahulu.
4. Jadwalkan pencadangan berulang agar foto baru tetap terlindungi secara otomatis.

Memiliki salinan kedua pustaka foto Anda di luar ekosistem Apple berarti satu titik kegagalan tunggal lebih sedikit jika akun terkunci atau perangkat hilang.

---

**Panduan Terkait:**

- [iCloud Drive dengan RcloneView](https://rcloneview.com/support/blog/icloud-drive-with-rcloneview)
- [Mengelola Sinkronisasi Cloud iCloud Drive dengan RcloneView](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [Memperbaiki Kesalahan Sinkronisasi iCloud Drive dengan RcloneView](https://rcloneview.com/support/blog/fix-icloud-drive-sync-errors-rcloneview)

<CloudSupportGrid />
