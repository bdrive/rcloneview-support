---
slug: sync-dropbox-to-box-rcloneview
title: "Sinkronisasi Dropbox ke Box — Pencadangan Cloud dengan RcloneView"
authors:
  - casey
description: "Sinkronisasi Dropbox ke Box dengan RcloneView: hubungkan kedua remote OAuth, pratinjau dengan dry run, jadwalkan job, dan verifikasi hasil menggunakan Folder Compare."
keywords:
  - sinkronisasi Dropbox ke Box
  - pencadangan Dropbox ke Box
  - sinkronisasi Dropbox Box
  - sinkronisasi antar-cloud
  - RcloneView
  - pencadangan Dropbox
  - penyimpanan cloud Box
  - pencadangan multi-cloud
  - rclone GUI
tags:
  - RcloneView
  - dropbox
  - box
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Dropbox ke Box — Pencadangan Cloud dengan RcloneView

> Simpan salinan kedua file Dropbox Anda di Box, dikelola dari satu jendela desktop.

Tim sering bekerja di Dropbox sementara klien atau mitra bersikeras menggunakan Box. Menjaga keduanya tetap selaras secara manual berarti terus-menerus mengunduh dan mengunggah ulang. RcloneView menautkan kedua akun sebagai remote dan menyinkronkan folder langsung di antara keduanya, dengan pratinjau dan riwayat agar Anda selalu tahu apa yang berubah.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Tambahkan Dropbox dan Box sebagai Remote

Kedua penyedia menggunakan login OAuth di browser, sehingga tidak diperlukan kunci API. Klik New Remote, pilih Dropbox, dan setujui akses di browser Anda; ulangi untuk Box. Untuk akun bisnis, gunakan pengaturan Dropbox for Business (`dropbox_business = true`) atau pengaturan Box for Business (`box_sub_type = enterprise`), jadi pilih varian tersebut bila relevan.

<img src="/support/images/en/blog/new-remote.png" alt="Membuat remote Dropbox dan Box di RcloneView" class="img-large img-center" />

## Konfigurasikan Job Sinkronisasi Satu Arah

Buka wizard sinkronisasi, pilih folder Dropbox sebagai sumber dan folder Box sebagai tujuan, lalu beri nama job menggunakan huruf, angka, tanda hubung, atau garis bawah. Mode satu arah hanya mengubah tujuan, yang cocok untuk peran pencadangan. Karena sinkronisasi membuat tujuan sama dengan sumber, selalu jalankan Dry Run terlebih dahulu untuk melihat file mana yang akan disalin atau dihapus.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Konfigurasi job sinkronisasi Dropbox ke Box" class="img-large img-center" />

Bayangkan sebuah agensi desain dengan 150 GB hasil kerja untuk klien. Filter berdasarkan ukuran atau usia file menjaga file kerja yang besar tetap di luar salinan Box, sementara filter bawaan dapat melewati kategori seperti video.

## Jadwalkan dan Pantau

Dengan lisensi PLUS, Langkah 4 pada wizard menerima jadwal bergaya crontab, dan opsi simulasi menampilkan pratinjau waktu eksekusi berikutnya. Proses malam hari menjaga Box tetap mutakhir tanpa usaha manual. Tab Transferring menampilkan kecepatan dan progres secara langsung, dan Job History mencatat status, durasi, ukuran, dan file untuk setiap eksekusi.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Menjadwalkan job sinkronisasi Dropbox ke Box" class="img-large img-center" />

## Verifikasi dengan Folder Compare

Setelah proses selesai, buka Folder Compare pada kedua folder. File yang hanya ada di kiri dan yang berbeda akan dicantumkan, dan Anda dapat menyalin item yang hilang dari tampilan perbandingan. Job History membantu Anda menemukan proses yang mengalami error.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Riwayat job untuk sinkronisasi Dropbox ke Box" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** [rcloneview.com](https://rcloneview.com/src/download.html) dari tautan ini.
2. Tambahkan remote Dropbox dan Box melalui login OAuth.
3. Buat job sinkronisasi satu arah dan jalankan Dry Run.
4. Jalankan, lalu jadwalkan jika Anda memiliki lisensi PLUS.

Salinan kedua di penyedia yang berbeda mengubah satu titik kegagalan menjadi jaring pengaman.

---

**Panduan Terkait:**

- [Box ke Dropbox Tanpa Downtime](https://rcloneview.com/support/blog/zero-downtime-box-to-dropbox-rcloneview)
- [Sinkronisasi Box ke Google Drive](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)
- [Kelola Penyimpanan Dropbox](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
