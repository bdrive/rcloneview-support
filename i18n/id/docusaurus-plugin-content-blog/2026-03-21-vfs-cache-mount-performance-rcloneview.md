---
slug: vfs-cache-mount-performance-rcloneview
title: "VFS Cache — Tingkatkan Performa Mount untuk Cloud Drive di RcloneView"
authors:
  - tayson
description: "Konfigurasikan mode VFS cache di RcloneView untuk meningkatkan performa cloud drive yang di-mount. Pelajari strategi cache minimal, writes, dan full untuk alur kerja Anda."
keywords:
  - VFS cache
  - performa mount
  - kecepatan cloud drive
  - rclone cache
  - mode VFS
  - optimasi cache
  - penyimpanan cloud yang di-mount
  - strategi disk cache
  - penyetelan performa
  - optimasi akses file
tags:
  - vfs
  - mount
  - performance
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# VFS Cache — Tingkatkan Performa Mount untuk Cloud Drive di RcloneView

> Cloud drive yang di-mount terasa lambat secara default—VFS caching di RcloneView menukar ruang disk dengan kecepatan, memungkinkan Anda bekerja dengan kecepatan setara drive lokal.

Saat Anda melakukan mount cloud drive (Google Drive, Dropbox, AWS S3) melalui RcloneView, setiap akses file melewati jaringan. Ini berfungsi tetapi terasa lambat—membuka dokumen butuh satu-dua detik, membuka daftar folder tersendat, dan membaca file terasa terhambat. VFS cache mengatasi ini dengan menyimpan cache file yang sering diakses secara lokal.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Apa Itu VFS Cache?

VFS (Virtual File System) cache menyimpan file dan metadata folder yang baru diakses di disk lokal Anda. Saat Anda membuka file dari cloud drive yang di-mount, RcloneView memeriksa cache terlebih dahulu—akses instan jika tersedia, pengambilan via jaringan jika tidak. Seiring Anda bekerja, cache akan bertambah; entri lama akan dihapus untuk memberi ruang.

Strategi sederhana ini menghilangkan latensi jaringan dari operasi umum.

## Mode VFS Cache

RcloneView mendukung tiga mode cache, masing-masing menyeimbangkan kecepatan dengan penggunaan disk:

### Mode 1: Off (Tanpa Cache)
Setiap akses melewati jaringan. Paling aman untuk file dinamis, paling lambat untuk akses berulang. Gunakan mode ini hanya jika ruang disk sangat terbatas atau konflik cache menjadi masalah.

### Mode 2: Minimal Cache
Menyimpan cache metadata file (nama, ukuran) dan file yang baru dibuka. Cepat untuk navigasi folder dan pembacaan berulang. Menggunakan disk minimal—biasanya di bawah 1 GB untuk sebagian besar alur kerja.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="RcloneView remote explorer and mount interface" width="600" />

**Paling cocok untuk**: Pengeditan dokumen, penelusuran foto, akses file rutin pada mesin dengan disk terbatas.

### Mode 3: Writes Cache
Seperti minimal, tetapi juga menyimpan cache operasi penulisan. File yang baru saja Anda ubah tetap berada di lokal sebelum disinkronkan di latar belakang. Sangat mempercepat alur kerja dengan penulisan yang sering.

**Paling cocok untuk**: Pembuatan konten, pengeditan video, operasi file massal—perubahan volume tinggi sebelum sinkronisasi ke cloud.

### Mode 4: Full Cache
Caching agresif—semua file yang diakses disimpan secara permanen hingga dihapus secara manual. Tercepat untuk akses berulang, jejak disk terbesar. Membutuhkan manajemen cache secara manual.

**Paling cocok untuk**: Data arsip, alur kerja dengan pembacaan intensif, mesin dengan ruang disk berlimpah.

## Mengonfigurasi VFS Cache di RcloneView

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView cloud-to-cloud transfer configuration" width="600" />

Buka RcloneView dan navigasikan ke konfigurasi mount:

1. Pilih remote cloud Anda (misalnya, Google Drive)
2. Buka **Advanced Settings** → **VFS Cache**
3. Pilih mode cache: Minimal, Writes, atau Full
4. Atur direktori cache (default: `/tmp/rcloneview-cache` di Linux, `%TEMP%\rcloneview-cache` di Windows)
5. Konfigurasikan batas ukuran cache (misalnya, 10 GB)—RcloneView otomatis menghapus file lama saat batas terlampaui
6. Aktifkan cache backend jika menggunakan SSD lokal untuk kecepatan ekstra

Terapkan dan mount ulang—performa langsung meningkat.

## Praktik Terbaik untuk Direktori Cache

- **Tempatkan cache pada penyimpanan cepat**: SSD lebih disarankan daripada HDD
- **Pisahkan dari sistem**: Gunakan partisi khusus untuk menghindari memenuhi drive OS Anda
- **Pantau penggunaan disk**: Periksa ukuran cache secara berkala; tingkatkan batas jika penghapusan sering terjadi
- **Bersihkan secara berkala**: Hapus cache lama jika Anda berhenti menggunakan sebuah remote (aman—cache akan dibangun ulang)

## Peningkatan Performa di Dunia Nyata

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView monitoring and performance tracking" width="600" />

Tanpa cache, membuka daftar folder berukuran 50 MB membutuhkan waktu 2-3 detik. Dengan minimal cache, aksesnya instan pada percobaan kedua. Menulis ke drive yang di-mount? Dengan writes cache diaktifkan, Anda mendapatkan kecepatan setara disk lokal (milidetik) alih-alih latensi jaringan (detik).

Trade-off: Membutuhkan ruang disk 5-50 GB tergantung alur kerja Anda. Bagi sebagian besar pengguna, ini sepadan.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buat mount baru untuk penyimpanan cloud Anda.
3. Di Advanced Settings, aktifkan cache Minimal (mulai secara konservatif).
4. Mount ulang dan uji—buka file, jelajahi folder, ukur peningkatan kecepatan.
5. Jika alur kerja Anda melibatkan banyak penulisan, tingkatkan ke mode Writes cache.
6. Pantau cache hit rate pada panel statistik; sesuaikan batas ukuran sesuai kebutuhan.

VFS cache adalah salah satu fitur unggulan tersembunyi RcloneView—penyesuaian kecil, peningkatan kecepatan yang besar.

---

**Panduan Terkait:**

- [Mount Penyimpanan Cloud sebagai Drive Lokal — Panduan Lengkap di RcloneView](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)
- [Atasi Transfer Cloud yang Lambat — Percepat Sinkronisasi di RcloneView](https://rcloneview.com/support/blog/fix-slow-cloud-transfers-speed-rcloneview)
- [Alias Remote — Buat Shortcut dan Path Kustom di RcloneView](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)

<CloudSupportGrid />
