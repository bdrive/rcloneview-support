---
slug: bisync-bidirectional-sync-rcloneview
title: "Bisync Bidirectional Sync — Sinkronisasi Cloud Dua Arah di RcloneView"
authors:
  - tayson
description: "Pelajari cara menggunakan bisync bidirectional sync milik RcloneView untuk menjaga file lokal dan cloud tetap tersinkronisasi dua arah di berbagai perangkat dan penyedia layanan."
keywords:
  - bisync rcloneview
  - sinkronisasi dua arah
  - two-way cloud sync
  - rclone bisync
  - sinkronisasi file cloud
  - sinkronisasi file dua arah
  - pengaturan bisync
  - rcloneview sync
  - sinkronisasi multi-perangkat
  - pencadangan dua arah
tags:
  - feature
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Bisync Bidirectional Sync — Sinkronisasi Cloud Dua Arah di RcloneView

> Bisync menyebarkan perubahan ke kedua arah, menjaga file lokal dan penyimpanan cloud Anda tetap tercermin sempurna tanpa menimpa salah satu sisi.

Operasi sinkronisasi standar bersifat satu arah: operasi tersebut membuat tujuan menjadi sama dengan sumber, menghapus apa pun di tujuan yang tidak ada di sumber. Bisync bekerja secara berbeda. Bisync melacak perubahan pada kedua sisi sejak proses terakhir dijalankan dan menyebarkan penambahan, modifikasi, serta penghapusan ke kedua arah. RcloneView menghadirkan fitur bisync dari rclone melalui antarmuka grafisnya, sehingga sinkronisasi cloud dua arah dapat diakses tanpa perlu menulis skrip baris perintah.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cara Kerja Bisync

Perintah bisync milik rclone menjaga sepasang file listing yang mencatat status kedua sisi, sumber (Path1) dan tujuan (Path2), setelah setiap proses berhasil dijalankan. Pada proses berikutnya, bisync membandingkan status terkini masing-masing sisi dengan listing yang tersimpan untuk menentukan apa yang berubah. File baru di Path1 disalin ke Path2, file baru di Path2 disalin ke Path1, dan penghapusan dicerminkan ke kedua arah.

Deteksi konflik sudah terintegrasi. Jika file yang sama diubah pada kedua sisi di antara dua proses, bisync menandainya sebagai konflik alih-alih menimpa salah satu versi secara diam-diam. Perilaku default akan mengganti nama salinan yang berkonflik, mempertahankan kedua versi sehingga Anda dapat menyelesaikan perbedaan tersebut secara manual. Hal ini sangat penting untuk alur kerja bersama di mana beberapa pengguna atau perangkat mungkin mengedit dokumen yang sama.

Proses bisync pertama memerlukan flag `--resync` untuk membangun listing dasar awal. RcloneView menangani hal ini secara otomatis saat Anda membuat pekerjaan bisync baru — proses awal melakukan resync, dan semua proses terjadwal berikutnya berjalan dalam mode delta normal.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Bisync bidirectional transfer configuration in RcloneView" class="img-large img-center" />

## Menyiapkan Bisync di RcloneView

Untuk membuat pekerjaan bisync di RcloneView, buka job manager dan pilih bisync sebagai jenis operasi. Pilih dua path Anda — misalnya, direktori lokal seperti `/home/user/Documents` sebagai Path1 dan folder Google Drive sebagai Path2. Anda juga dapat melakukan bisync antara dua remote cloud, seperti menjaga folder Dropbox tetap tercermin ke OneDrive.

Aturan filter bekerja dengan bisync sama seperti pada sinkronisasi standar. Gunakan pola include dan exclude untuk membatasi bisync hanya pada jenis file atau subdirektori tertentu. Misalnya, Anda dapat melakukan bisync hanya untuk file `*.docx` dan `*.xlsx` antara folder proyek lokal dan direktori OneDrive bersama, mengabaikan file sementara dan metadata OS.

Job scheduler milik RcloneView mendukung menjalankan bisync pada interval reguler — setiap 15 menit, setiap jam, atau pada jadwal cron kustom. Interval yang sering meminimalkan jendela waktu terjadinya konflik dan memastikan sinkronisasi yang hampir real-time antara mesin lokal Anda dan penyimpanan cloud.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a bisync job from the RcloneView job manager" class="img-large img-center" />

## Kasus Penggunaan Praktis untuk Bisync

**Sinkronisasi dokumen multi-perangkat:** Jaga folder dokumen kerja tetap tersinkronisasi antara desktop dan penyimpanan cloud Anda. Saat Anda mengedit file di laptop (yang tersinkronisasi ke folder cloud yang sama melalui pekerjaan bisync-nya sendiri), perubahan tersebut menyebar ke semua perangkat yang terhubung pada proses berikutnya.

**Folder proyek kolaboratif:** Tim yang berbagi folder penyimpanan cloud dapat menggunakan bisync untuk menjaga salinan kerja lokal. Perubahan lokal setiap anggota tim didorong ke cloud, dan perubahan jarak jauh dari rekan kerja ditarik turun secara otomatis. Deteksi konflik memastikan bahwa edit yang terjadi bersamaan tidak saling menimpa secara diam-diam.

**Alur kerja hybrid lokal-cloud:** Developer atau desainer yang membutuhkan akses file lokal yang cepat namun juga menginginkan pencadangan cloud dapat melakukan bisync pada direktori proyek mereka. Operasi file lokal tetap instan, sementara salinan cloud tetap terkini untuk keperluan pencadangan dan berbagi.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring bisync job in RcloneView" class="img-large img-center" />

## Praktik Terbaik Bisync

Jalankan bisync pada jadwal yang konsisten untuk meminimalkan konflik. Semakin lama interval antar proses, semakin tinggi kemungkinan terjadinya edit yang berkonflik. Untuk direktori kerja yang aktif, interval 15 hingga 30 menit memberikan keseimbangan yang baik antara responsivitas dan penggunaan sumber daya. Hindari menjalankan bisync pada pohon direktori yang sangat besar tanpa filter, karena perbandingan listing dapat memakan waktu lama. Gunakan riwayat pekerjaan RcloneView untuk memantau konflik yang berulang dan menyesuaikan alur kerja Anda.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Bisync job history showing completed two-way synchronization runs" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Konfigurasikan remote sumber dan tujuan Anda (folder lokal, Google Drive, OneDrive, dll.).
3. Buat pekerjaan bisync baru di job manager dan jalankan resync awal.
4. Jadwalkan pekerjaan bisync untuk berjalan pada interval pilihan Anda demi sinkronisasi dua arah yang berkelanjutan.

Bisync di RcloneView menghadirkan sinkronisasi cloud dua arah yang sesungguhnya ke desktop Anda tanpa skrip, cron job, atau kerumitan baris perintah.

---

**Panduan Terkait:**

- [Sync, Copy, Move — Perbedaan yang Dijelaskan di RcloneView](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [Aturan Filter dan Sinkronisasi Selektif di RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [RcloneView vs Syncthing — Perbandingan](https://rcloneview.com/support/blog/rcloneview-vs-syncthing-comparison)

<CloudSupportGrid />
