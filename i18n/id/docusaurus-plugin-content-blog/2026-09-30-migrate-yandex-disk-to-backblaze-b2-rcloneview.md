---
slug: migrate-yandex-disk-to-backblaze-b2-rcloneview
title: "Migrasi Yandex Disk ke Backblaze B2 — Transfer File dengan RcloneView"
authors:
  - morgan
description: "Migrasi Yandex Disk ke Backblaze B2 dengan RcloneView: hubungkan kedua remote, uji penyalinan dengan dry run, verifikasi dengan Folder Compare, dan simpan backup yang tahan lama."
keywords:
  - migrasi yandex disk ke backblaze b2
  - yandex disk to b2
  - backup yandex disk
  - migrasi backblaze b2
  - RcloneView yandex disk
  - transfer cloud ke cloud
  - pindahkan file dari yandex disk
  - rclone yandex backblaze
  - migrasi cloud GUI
  - ekspor file yandex disk
tags:
  - RcloneView
  - yandex-disk
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Yandex Disk ke Backblaze B2 — Transfer File dengan RcloneView

> Salin semua isi Yandex Disk ke bucket Backblaze B2, dan pastikan setiap file sampai, tanpa menyentuh command line.

Jika file Anda berada di Yandex Disk tetapi Anda menginginkan salinan independen berbasis bucket di Backblaze B2, cara yang biasa dilakukan adalah mengunduh secara manual lalu mengunggah ulang melalui komputer Anda sendiri. RcloneView menghubungkan kedua layanan dalam satu jendela dan menjalankan transfer di antara keduanya, dengan dry run sebelumnya dan perbandingan folder sesudahnya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan Yandex Disk dan Backblaze B2

Yandex Disk menggunakan OAuth: pilih di **New Remote**, dan RcloneView akan membuka browser Anda agar Anda dapat masuk dan memberi otorisasi akses. Tidak diperlukan API key. Backblaze B2 menggunakan Application Key ID dan Application Key dari halaman manajemen kunci Backblaze. Buat kunci yang dibatasi ke bucket tujuan agar kredensial migrasi tidak dapat menjangkau apa pun selain itu.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Yandex Disk and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

Buka Yandex Disk di satu panel Explorer dan bucket B2 di panel lainnya. RcloneView dapat mount dan sinkronisasi 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux, sehingga kedua sisi tetap terlihat saat Anda bekerja.

## Rencanakan Tata Letak dan Salin

Tentukan bagaimana folder dipetakan ke bucket. Sebuah studio desain kecil dengan folder proyek selama satu dekade dapat mencerminkan setiap folder tingkat atas Yandex Disk sebagai prefix dalam satu bucket, sehingga path tetap mudah dibaca di kemudian hari. Buat folder tujuan terlebih dahulu dengan **New Folder**.

Seret folder dari panel Yandex Disk ke panel B2; di antara remote yang berbeda, seret dan lepas berarti menyalin, sehingga file asli tetap di tempatnya. Untuk migrasi yang lebih besar atau berulang, gunakan wizard Sync: tetapkan Yandex Disk sebagai sumber, path bucket sebagai tujuan, dan beri nama job dengan huruf, angka, tanda hubung, atau garis bawah.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Yandex Disk to Backblaze B2" class="img-large img-center" />

## Dry Run dan Pantau Transfer

Jalankan **Dry Run** terlebih dahulu. Fitur ini mencantumkan file yang akan disalin dan file yang akan dihapus, sehingga sumber atau tujuan yang salah dapat diketahui sebelum menimbulkan kerusakan. Hal ini paling penting pada sinkronisasi satu arah, yang mengubah tujuan agar sesuai dengan sumber.

Di Advanced Settings, atur jumlah transfer file bersamaan dan aktifkan perbandingan checksum jika Anda menginginkan verifikasi hash plus ukuran. Mulailah secara konservatif, lalu tingkatkan konkurensi setelah transfer stabil. Pantau progres, kecepatan, dan jumlah file di tab **Transferring**.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Yandex Disk to B2 transfer in real time" class="img-large img-center" />

## Verifikasi dengan Folder Compare

Setelah job selesai, buka **Compare** dari tab Home dengan Yandex Disk di kiri dan B2 di kanan. Filter file yang hanya ada di kiri atau yang berbeda untuk menemukan yang hilang, lalu gunakan Copy right untuk melengkapinya. Job History mencatat status, ukuran, kecepatan, dan jumlah file untuk setiap proses, yang berguna sebagai catatan migrasi.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare between Yandex Disk and Backblaze B2" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Yandex Disk melalui OAuth dan Backblaze B2 dengan application key yang dibatasi ke bucket.
3. Jalankan Dry Run, lalu mulai job penyalinan atau sinkronisasi.
4. Gunakan Folder Compare untuk memastikan bucket sesuai dengan sumber.

Salinan kedua yang terverifikasi di penyimpanan objek berarti Yandex Disk tidak lagi menjadi satu-satunya tempat file Anda berada.

---

**Panduan Terkait:**

- [Migrasi HiDrive ke Backblaze B2](https://rcloneview.com/support/blog/migrate-hidrive-to-backblaze-b2-rcloneview)
- [Migrasi Yandex Disk ke Dropbox](https://rcloneview.com/support/blog/migrate-yandex-disk-to-dropbox-rcloneview)
- [Dry Run: Pratinjau Sinkronisasi Sebelum Transfer](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
