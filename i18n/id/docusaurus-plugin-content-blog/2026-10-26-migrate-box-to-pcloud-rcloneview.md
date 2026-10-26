---
slug: migrate-box-to-pcloud-rcloneview
title: "Migrasi Box ke pCloud — Transfer File dengan RcloneView"
authors:
  - jay
description: "Migrasi Box ke pCloud dengan RcloneView: hubungkan kedua remote, jalankan Dry Run, salin antar cloud, dan verifikasi hasilnya dengan Folder Compare."
keywords:
  - migrasi Box ke pCloud
  - transfer Box ke pCloud
  - pindahkan file Box ke pCloud
  - migrasi Box pCloud
  - RcloneView antar cloud
  - sinkronisasi Box ke pCloud
  - rclone GUI
  - alat migrasi cloud
  - verifikasi transfer cloud
  - penyimpanan alternatif Box
tags:
  - RcloneView
  - box
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Box ke pCloud — Transfer File dengan RcloneView

> Pindahkan folder Box Anda ke pCloud dalam satu proses yang terkendali, dengan pratinjau sebelum apa pun disalin dan perbandingan setelahnya.

Tim yang sudah melampaui workspace Box, atau pekerja lepas yang ingin mengendalikan penyimpanan pribadinya sendiri, sering menghadapi pekerjaan yang sama: ribuan file di folder proyek bersarang yang harus berpindah utuh ke akun baru. Mengunduh lalu mengunggah ulang lewat browser itu lambat dan rapuh. RcloneView menghubungkan Box dan pCloud berdampingan dan mentransfer langsung di antara keduanya, sehingga tidak ada yang perlu ditampung sementara di disk lokal Anda.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan Box dan pCloud sebagai Remote

Kedua layanan menggunakan login OAuth berbasis browser di RcloneView. Buka **Remote > New Remote**, pilih Box, lalu setujui akses di jendela browser yang terbuka. Ulangi untuk pCloud. Jika file Anda berada di akun Box Business, pengaturan sub-tipe enterprise (`box_sub_type = enterprise`) diperlukan; akun pribadi tidak membutuhkannya.

RcloneView dapat melakukan mount dan sinkronisasi 90+ penyedia dari satu jendela di Windows, macOS, dan Linux, sehingga kedua remote muncul sebagai tab di Explorer yang sama.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan Box dan pCloud sebagai remote baru di RcloneView" class="img-large img-center" />

## Telusuri Kedua Sisi Sebelum Menyalin

Buka Box di satu panel Explorer dan pCloud di panel lainnya. Gunakan Folder Tree dan Get Size untuk memperkirakan jumlah data yang akan dipindahkan, lalu putuskan apakah akan memigrasikan semuanya atau hanya sebagian. Menyeret di antara dua remote yang berbeda melakukan **salinan**, sehingga file asli Box Anda tetap utuh sampai Anda siap menghentikannya.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box dan pCloud dibuka berdampingan untuk transfer antar cloud" class="img-large img-center" />

## Buat Job Copy dengan Dry Run

Untuk jumlah file yang lebih dari segelintir, buat job alih-alih menyeret. Di wizard Sync, atur Box sebagai sumber dan folder pCloud sebagai tujuan, lalu pilih tipe job **Copy** agar tidak ada yang dihapus di tujuan. Di Advanced Settings, aktifkan perbandingan checksum dan pertahankan jumlah equality checker tetap rendah jika Box mulai membatasi kecepatan. Di Filtering, gunakan Max file size atau aturan pengecualian seperti `.git/` untuk melewati file yang tidak Anda perlukan.

Jalankan **Dry Run** terlebih dahulu. Fitur ini mencantumkan file yang akan disalin dan dihapus, sehingga kesalahan memilih folder terlihat sebelum data apa pun berpindah. Filter bawaan **Box Docs** dapat mengecualikan dokumen native cloud milik Box jika Anda tidak ingin menyertakannya dalam salinan.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menjalankan job Copy Box ke pCloud di RcloneView" class="img-large img-center" />

## Verifikasi dengan Folder Compare

Setelah job selesai, buka **Compare** dengan Box di kiri dan pCloud di kanan. Filter file yang hanya ada di kiri dan file yang berbeda; apa pun yang masih tercantum membutuhkan satu putaran lagi. Job History mencatat status, ukuran, kecepatan, dan jumlah file untuk setiap eksekusi, yang berguna sebagai bukti bahwa migrasi telah selesai.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare menampilkan perbedaan antara Box dan pCloud" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Box dan pCloud melalui **Remote > New Remote** dan masuk dengan OAuth.
3. Buat job Copy dari Box ke pCloud dan jalankan Dry Run.
4. Jalankan job, lalu konfirmasi hasilnya dengan Folder Compare sebelum membersihkan Box.

Migrasi bertahap yang menyalin dulu lalu memverifikasi menjaga data Box Anda tetap aman sampai pCloud memegang semua yang Anda butuhkan.

---

**Panduan Terkait:**

- [Migrasi Box ke Backblaze B2](https://rcloneview.com/support/blog/migrate-box-to-backblaze-b2-rcloneview)
- [Migrasi Box ke Google Drive](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)
- [Kelola Penyimpanan pCloud](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
