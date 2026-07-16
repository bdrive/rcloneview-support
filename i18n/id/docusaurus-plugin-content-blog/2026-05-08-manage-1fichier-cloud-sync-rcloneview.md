---
slug: manage-1fichier-cloud-sync-rcloneview
title: "Kelola Penyimpanan Cloud 1Fichier — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - steve
description: "Hubungkan 1Fichier ke RcloneView untuk pengelolaan file berbasis GUI, pencadangan otomatis, dan transfer lintas cloud. Kelola pustaka 1Fichier Anda tanpa alat command-line."
keywords:
  - 1Fichier RcloneView sync
  - manage 1Fichier files GUI
  - 1Fichier cloud backup
  - 1Fichier file transfer RcloneView
  - 1Fichier to Google Drive
  - rclone 1Fichier GUI
  - 1Fichier storage management
  - 1Fichier backup tool
tags:
  - 1fichier
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan Cloud 1Fichier — Sinkronisasi dan Pencadangan File dengan RcloneView

> Hubungkan akun 1Fichier Anda ke RcloneView dan kelola file, buat pencadangan otomatis, serta transfer data ke penyedia cloud lain — semuanya tanpa menyentuh command line.

1Fichier adalah layanan penyimpanan cloud dan hosting file asal Prancis yang populer karena penawaran penyimpanannya yang besar dan kemampuan berbagi file. Meskipun antarmuka web 1Fichier menangani penjelajahan dan pengunduhan manual, pengguna yang perlu memindahkan pustaka besar, membuat pencadangan otomatis, atau mengintegrasikan 1Fichier ke dalam alur kerja multi-cloud memerlukan alat yang lebih mumpuni. Backend 1Fichier milik RcloneView menangani semua itu melalui GUI yang bersih.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan 1Fichier ke RcloneView

Di RcloneView, buka **Remote tab → New Remote** dan pilih 1Fichier dari daftar penyedia. Autentikasi memerlukan API key 1Fichier Anda, yang dapat Anda buat di pengaturan akun 1Fichier pada bagian API. Tempelkan API key tersebut ke dialog konfigurasi RcloneView lalu simpan. Remote akan langsung siap digunakan.

Folder dan file 1Fichier Anda akan muncul di panel explorer, dapat dijelajahi melalui folder tree dan daftar file yang dapat diurutkan. Jumlah total dan ukuran folder mana pun tersedia melalui klik kanan → **Get Size**, yang berguna untuk mengaudit seberapa banyak data yang Anda miliki sebelum merencanakan migrasi atau tugas pencadangan.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting 1Fichier to RcloneView as a new remote" class="img-large img-center" />

## Mengunduh dan Mengatur Konten 1Fichier

Bagi pengguna yang menyimpan arsip file berukuran besar di 1Fichier dan ingin memindahkannya ke penyedia yang lebih mudah diakses seperti Google Drive, OneDrive, atau NAS lokal, tugas Copy lintas cloud milik RcloneView adalah alat yang tepat. Buka 1Fichier di satu panel dan tujuan di panel lainnya, lalu buat tugas Copy di Job Manager. Atur konkurensi transfer yang sesuai — 1Fichier menerapkan batasan kecepatan unduh pada akun gratis, sehingga pemegang akun premium akan mendapatkan throughput yang lebih cepat.

Filter tugas berdasarkan jenis file atau nama folder untuk memigrasikan konten secara selektif. Misalnya, ekstrak hanya file video dari arsip berisi konten campuran, atau salin struktur folder tertentu sambil membiarkan sisanya tetap di tempat.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files from 1Fichier to another cloud in RcloneView" class="img-large img-center" />

## Mencadangkan File ke 1Fichier

Fitur hosting file milik 1Fichier menjadikannya target pencadangan sekunder yang layak, terutama bagi pengguna yang menginginkan salinan arsip di Eropa. Buat tugas Sync atau Copy dari Google Drive, Dropbox, atau folder lokal sebagai sumber, dengan akun 1Fichier Anda sebagai tujuan. Job Manager menangani percobaan ulang transfer saat terjadi kegagalan, yang penting mengingat layanan hosting file dapat memiliki waktu respons API yang bervariasi.

Pantau progres transfer di **Transferring tab** dan tinjau **Job History** untuk jejak audit lengkap tentang apa yang dicadangkan dan kapan.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring 1Fichier backup transfer progress in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buat API key di pengaturan akun 1Fichier Anda.
3. Tambahkan 1Fichier sebagai remote di **Remote tab → New Remote**.
4. Buat tugas Copy atau Sync untuk memindahkan atau mencadangkan data 1Fichier Anda.

RcloneView menjadikan 1Fichier sebagai bagian yang mudah dikelola dari perangkat penyimpanan cloud Anda, dengan antarmuka drag-and-drop yang sama seperti yang Anda gunakan untuk penyedia lainnya.

---

**Panduan Terkait:**

- [Unduh dan Atur Penyimpanan 1Fichier dengan RcloneView](https://rcloneview.com/support/blog/download-organize-1fichier-cloud-storage-rcloneview)
- [Migrasi Cloud-ke-Cloud dengan RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [Kelola Beberapa Akun Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)

<CloudSupportGrid />
