---
slug: hasher-remote-add-checksums-rcloneview
title: "Remote Hasher — Tambahkan Checksum ke Penyimpanan yang Tidak Memilikinya di RcloneView"
authors:
  - steve
description: "Gunakan remote virtual Hasher di RcloneView untuk menambahkan pemeriksaan integritas berbasis hash pada remote yang tidak menyediakan checksum sendiri."
keywords:
  - remote Hasher rclone
  - tambahkan checksum ke penyimpanan cloud
  - pemeriksaan integritas file cloud
  - verifikasi hash file cloud
  - remote virtual Hasher
  - remote virtual RcloneView
  - sinkronisasi checksum
  - rclone GUI
tags:
  - RcloneView
  - feature
  - rclone
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Remote Hasher — Tambahkan Checksum ke Penyimpanan yang Tidak Memilikinya di RcloneView

> Remote virtual Hasher menambahkan hashing di atas remote yang sudah ada, sehingga pemeriksaan integritas tetap berfungsi di penyimpanan yang tidak memiliki checksum.

Beberapa backend penyimpanan tidak dapat menyediakan hash file, yang melemahkan perbandingan dan verifikasi setelah transfer. RcloneView mendukung remote virtual Hasher milik rclone, yaitu pembungkus yang menambahkan hashing di atas remote yang sudah Anda miliki. Panduan ini membahas kapan Hasher berguna dan cara menggunakannya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Apa yang Dilakukan Remote Hasher

Remote virtual membungkus remote yang sudah ada untuk menambahkan perilaku. Alias memperpendek path, Crypt mengenkripsi, dan Hasher menambahkan hashing untuk pemeriksaan integritas. Jika sebuah backend tidak menyediakan checksum, perbandingan beralih ke ukuran dan waktu modifikasi, yang dapat melewatkan konten yang berubah tanpa mengubah keduanya.

Dengan membungkus backend tersebut dalam remote Hasher, Anda memberinya kemampuan hash sehingga perbandingan berbasis checksum memiliki data untuk dikerjakan. Ini cocok untuk arsip dan pencadangan yang mengutamakan ketepatan daripada kecepatan.

<img src="/support/images/en/blog/new-remote.png" alt="Membuat remote virtual baru di RcloneView" class="img-large img-center" />

## Membuat Remote Hasher

Buka tab Remote dan pilih New Remote, lalu pilih tipe Hasher. Arahkan ke remote dan folder dasar yang ingin Anda bungkus, dan beri nama yang mudah dikenali, misalnya `archive-hashed`. Setelah disimpan, remote tersebut muncul di explorer seperti remote lainnya.

Gunakan remote yang dibungkus di mana pun Anda biasa menggunakan remote aslinya: menelusuri, menyalin, atau sebagai sumber atau tujuan sinkronisasi. Perlu diingat bahwa hash terikat pada pembungkus, jadi gunakan remote Hasher secara konsisten untuk data yang ingin Anda verifikasi.

## Gunakan dengan Sinkronisasi dan Compare

Di Advanced Settings job sinkronisasi, aktifkan **Enable checksum** agar file dibandingkan berdasarkan hash dan ukuran. Dikombinasikan dengan remote Hasher, hasilnya lebih dapat dipercaya daripada hanya ukuran dan waktu.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Tampilan Folder Compare yang menunjukkan perbedaan antara dua folder" class="img-large img-center" />

Jalankan Dry Run terlebih dahulu untuk melihat pratinjau apa yang akan disalin atau dihapus, lalu eksekusi. RcloneView mendukung mount dan sinkronisasi untuk 90+ provider dari satu jendela, di Windows, macOS, dan Linux, sehingga pendekatan verifikasi yang sama dapat dipakai di seluruh cloud Anda.

## Tinjau Hasil di Job History

Setelah dijalankan, buka Job History untuk memastikan status, file yang ditransfer, dan total ukuran. Jika job melaporkan error, tab Log menampilkan detailnya.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Riwayat job yang menampilkan eksekusi sinkronisasi yang telah selesai" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote yang tidak memiliki checksum, jika belum ditambahkan.
3. Buat remote Hasher yang membungkusnya dari Remote > New Remote.
4. Buat job sinkronisasi dengan **Enable checksum** aktif, dan jalankan Dry Run terlebih dahulu.

Verifikasi yang lebih kuat berarti Anda menemukan perbedaan tersembunyi sebelum menjadi masalah.

---

**Panduan Terkait:**

- [Remote Virtual — Combine, Union, dan Alias dengan RcloneView](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Perbaiki Ketidakcocokan Checksum pada Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-checksum-mismatch-rcloneview)
- [Perbaiki Kegagalan Verifikasi Pencadangan Cloud dengan RcloneView](https://rcloneview.com/support/blog/fix-cloud-backup-verification-failures-rcloneview)

<CloudSupportGrid />
