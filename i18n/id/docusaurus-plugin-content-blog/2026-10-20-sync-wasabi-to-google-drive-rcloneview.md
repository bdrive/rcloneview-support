---
slug: sync-wasabi-to-google-drive-rcloneview
title: "Sinkronkan Wasabi ke Google Drive — Backup Cloud dengan RcloneView"
authors:
  - morgan
description: "Sinkronkan Wasabi ke Google Drive dengan RcloneView: hubungkan kedua remote, pratinjau dengan Dry Run, jalankan sinkronisasi satu arah, dan verifikasi hasilnya dengan Folder Compare."
keywords:
  - sinkronkan wasabi ke google drive
  - backup wasabi ke google drive
  - transfer wasabi google drive
  - RcloneView wasabi
  - RcloneView google drive
  - sinkronisasi cloud ke cloud
  - s3 ke google drive
  - backup bucket wasabi
tags:
  - RcloneView
  - wasabi
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronkan Wasabi ke Google Drive — Backup Cloud dengan RcloneView

> Simpan salinan kedua bucket Wasabi Anda yang ramah kolaborasi di Google Drive dengan sinkronisasi satu arah yang dapat dipratinjau.

Wasabi sering menjadi tempat arsip dan hasil akhir proyek, tetapi orang-orang yang membutuhkan file tersebut sering bekerja di Google Drive. Menyinkronkan keduanya menjaga salinan yang dapat dibaca di tempat rekan kerja sudah bekerja, dan memberi Anda lokasi kedua jika satu akun bermasalah. RcloneView menghubungkan kedua layanan dalam satu jendela, memratinjau job, dan memverifikasi hasilnya. Hubungkan S3, Azure, atau Backblaze B2 dengan akses baca/tulis penuh pada lisensi FREE, bersama 90+ penyedia lainnya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan Kedua Remote

Wasabi diakses melalui protokol S3 rclone: masukkan Access Key, Secret Key, dan endpoint untuk region Wasabi Anda. Google Drive menggunakan OAuth browser, sehingga RcloneView membuka halaman masuk Google dan terhubung setelah Anda menyetujui akses.

Buka setiap remote di panel Explorer masing-masing. Jelajahi bucket dan pohon folder Drive berdampingan agar Anda tahu persis prefix mana yang sesuai dengan folder mana.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote Wasabi dan Google Drive di RcloneView" class="img-large img-center" />

## Konfigurasikan Job Sinkronisasi

Bayangkan studio video dengan bucket berisi hasil editan akhir yang ingin dilihat produser di folder Drive bersama. Buat job dari tombol Sync: pilih prefix Wasabi sebagai sumber dan folder Drive sebagai tujuan, lalu beri job nama menggunakan huruf, angka, tanda hubung, atau garis bawah.

Sinkronisasi satu arah ("Modifying destination only") membuat tujuan sama dengan sumber, sehingga file yang hanya ada di folder Drive akan dihapus. Jika folder Drive berisi file yang ingin Anda simpan, gunakan job Copy. Di Advanced Settings, Anda dapat mengatur berapa banyak file yang ditransfer sekaligus dan mengaktifkan perbandingan checksum. Ingat bahwa Google Docs, Sheets, dan Slides bukan file biasa, sehingga filter Google Docs yang sudah ditentukan berguna untuk mengecualikannya.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer cloud ke cloud antara Wasabi dan Google Drive di RcloneView" class="img-large img-center" />

## Pratinjau dengan Dry Run

Sebelum menjalankan yang sebenarnya untuk pertama kali, gunakan Dry Run. Fitur ini mencantumkan file yang akan disalin dan dihapus tanpa mengubah apa pun, yang merupakan cara termurah untuk menangkap prefix sumber yang salah atau penghapusan yang tidak terduga. Jalankan job setelah daftarnya tampak benar dan pantau progres, kecepatan, dan jumlah file di tab Transferring.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menjalankan job sinkronisasi di RcloneView" class="img-large img-center" />

## Verifikasi dan Ulangi

Setelah sinkronisasi, buka Folder Compare pada kedua lokasi untuk memastikan tidak ada yang tersisa hanya di satu sisi atau berbeda. Job History mencatat status, durasi, ukuran, dan jumlah file dari setiap eksekusi, sehingga Anda dapat meninjau eksekusi sebelumnya. Dengan lisensi PLUS, Anda dapat menambahkan jadwal bergaya crontab agar salinan diperbarui secara otomatis.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Tampilan Folder Compare di RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote Wasabi dengan Access Key, Secret Key, dan endpoint region, lalu tambahkan Google Drive melalui login browser.
3. Buat job Sync dari prefix Wasabi ke folder Drive dan jalankan Dry Run terlebih dahulu.
4. Jalankan job, lalu konfirmasi hasilnya dengan Folder Compare.

Salinan Drive dari bucket Anda mengubah arsip menjadi sesuatu yang dapat dibuka seluruh tim Anda.

---

**Panduan Terkait:**

- [Migrasi Wasabi ke OneDrive](https://rcloneview.com/support/blog/migrate-wasabi-to-onedrive-rcloneview)
- [Dry Run — Pratinjau Sinkronisasi Sebelum Transfer](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [Alur Kerja Bandingkan Dahulu](https://rcloneview.com/support/blog/compare-first-workflow-rcloneview)

<CloudSupportGrid />
