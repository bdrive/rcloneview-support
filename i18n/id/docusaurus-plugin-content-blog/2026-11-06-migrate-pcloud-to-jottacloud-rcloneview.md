---
slug: migrate-pcloud-to-jottacloud-rcloneview
title: "Migrasi pCloud ke Jottacloud — Transfer File dengan RcloneView"
authors:
  - alex
description: "Migrasikan pCloud ke Jottacloud dengan RcloneView: hubungkan kedua remote, pratinjau dengan Dry Run, salin dari cloud ke cloud, dan verifikasi dengan Folder Compare."
keywords:
  - migrasi pCloud ke Jottacloud
  - transfer pCloud ke Jottacloud
  - migrasi pCloud Jottacloud
  - RcloneView pCloud
  - RcloneView Jottacloud
  - transfer cloud ke cloud
  - memindahkan file dari pCloud
  - migrasi penyimpanan cloud Eropa
  - migrasi rclone GUI
tags:
  - RcloneView
  - pcloud
  - jottacloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi pCloud ke Jottacloud — Transfer File dengan RcloneView

> Pindahkan pustaka pCloud ke Jottacloud dari cloud ke cloud, dengan pratinjau terlebih dahulu dan proses verifikasi di akhir.

Seorang fotografer yang menggabungkan arsip klien, atau keluarga yang memindahkan folder bersama ke penyedia baru, menghadapi pekerjaan yang sama: ribuan file di satu cloud perlu dipindahkan ke cloud lain. Mengunduh semuanya ke laptop lalu mengunggahnya kembali itu lambat dan rapuh. RcloneView menghubungkan pCloud dan Jottacloud dalam satu jendela, menjalankan penyalinan di antara keduanya, dan menyediakan Dry Run serta Folder Compare untuk memastikan hasilnya. RcloneView mem-mount DAN menyinkronkan 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan pCloud dan Jottacloud sebagai Remote

Buka tab Remote dan pilih New Remote. pCloud masuk melalui OAuth: browser Anda terbuka, Anda menyetujui akses, dan RcloneView terhubung secara otomatis. Tambahkan Jottacloud sebagai remote kedua dengan mengikuti petunjuk di layar untuk penyedia tersebut.

Ketika keduanya muncul di Remote Manager, buka berdampingan di dua panel Explorer. Menelusuri sumber dan tujuan terlebih dahulu membantu Anda memutuskan folder mana yang akan dipindahkan dan ke mana tujuannya.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote pCloud dan Jottacloud di RcloneView" class="img-large img-center" />

## Rencanakan Penyalinan dengan Filter dan Dry Run

Langkah 3 pada wizard job memungkinkan Anda membatasi transfer berdasarkan ukuran file maksimum, usia file maksimum, atau kedalaman folder. Filter bawaan mencakup file Music, Video, Image, dan Document, dan aturan kustom dapat mengecualikan pola seperti folder `.git/` atau file `.iso`, yang berguna untuk melewati installer dan image disk.

Jalankan Dry Run sebelum job yang sebenarnya. Dry Run menampilkan daftar file yang akan disalin atau dihapus tanpa mengubah kedua sisi. Untuk migrasi, pilih job Copy dan bukan sinkronisasi mirroring, sehingga tidak ada yang sudah ada di Jottacloud yang dihapus.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer cloud ke cloud dari pCloud ke Jottacloud di RcloneView" class="img-large img-center" />

## Jalankan Transfer dan Pantau Progres

Mulai job dan ikuti di tab Transferring, yang menampilkan progres, kecepatan, dan jumlah file. Untuk pustaka yang besar, naikkan jumlah transfer file pada Langkah 2, tetapi pertahankan jumlah equality checker tetap sedang jika salah satu backend merespons lambat. "Retry entire sync if fails" bernilai default 3, yang meredam error jaringan sementara.

Jika satu sesi tidak cukup, simpan job di Job Manager dan jalankan lagi nanti. Job Copy hanya mentransfer file yang hilang atau berbeda, sehingga proses berulang melanjutkan dari tempat proses terakhir berhenti.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menjalankan job Copy pCloud ke Jottacloud di RcloneView" class="img-large img-center" />

## Verifikasi dengan Folder Compare

Setelah job selesai, buka Compare dengan pCloud di kiri dan Jottacloud di kanan. Filter untuk file hanya di kiri, hanya di kanan, dan berbeda menunjukkan apa yang masih perlu dipindahkan, dan aksi salin ke kanan mentransfer file yang tertinggal. Job History menyimpan status, ukuran, kecepatan, dan jumlah file dari setiap proses sebagai catatan migrasi.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Membandingkan folder pCloud dan Jottacloud setelah migrasi" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan pCloud (OAuth) dan Jottacloud sebagai remote.
3. Buat job Copy dengan filter, lalu jalankan Dry Run.
4. Jalankan job, lalu konfirmasi hasilnya dengan Folder Compare.

Biarkan akun pCloud tidak tersentuh sampai Compare menunjukkan kedua sisi cocok.

---

**Panduan Terkait:**

- [Kelola Penyimpanan pCloud — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Kelola Penyimpanan Jottacloud — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Migrasi Jottacloud ke pCloud dengan RcloneView](https://rcloneview.com/support/blog/migrate-jottacloud-to-pcloud-rcloneview)

<CloudSupportGrid />
