---
slug: manage-pixeldrain-cloud-sync-rcloneview
title: "Kelola Penyimpanan Cloud Pixeldrain — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - tayson
description: "Hubungkan Pixeldrain ke RcloneView untuk menelusuri file yang Anda simpan dan menyinkronkannya ke penyedia cloud lain untuk pencadangan atau pengarsipan jangka panjang."
keywords:
  - Pixeldrain RcloneView
  - Sinkronisasi cloud Pixeldrain
  - Pencadangan Pixeldrain
  - Kelola file Pixeldrain
  - Pixeldrain rclone GUI
  - Transfer file Pixeldrain
  - Pencadangan cloud Pixeldrain
  - Pengaturan sinkronisasi Pixeldrain
tags:
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan Cloud Pixeldrain — Sinkronisasi dan Pencadangan File dengan RcloneView

> Pixeldrain adalah layanan hosting file dengan fitur penyimpanan cloud pribadi — RcloneView menghubungkannya dengan ekosistem cloud Anda yang lebih luas untuk pencadangan dan pengelolaan file yang terorganisir.

Pixeldrain adalah platform berbagi dan hosting file yang juga berfungsi sebagai penyimpanan cloud pribadi, memungkinkan pengguna mengunggah, mengatur, dan berbagi file. Meskipun antarmuka web mencakup operasi dasar, pengguna yang perlu menyinkronkan konten Pixeldrain mereka ke cloud lain — atau mengunduh file untuk arsip lokal — akan diuntungkan dengan alat khusus. RcloneView mencantumkan Pixeldrain sebagai penyedia yang didukung, sehingga Anda dapat menghubungkannya bersama semua remote lain Anda dan mengelola transfer dari satu antarmuka.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Pixeldrain ke RcloneView

Buka RcloneView dan navigasikan ke **Remote Manager**. Klik **New Remote** dan gulir daftar penyedia untuk menemukan **Pixeldrain**. Koneksi ini menggunakan kunci API Pixeldrain Anda, yang dapat dibuat dari pengaturan akun Anda di situs web Pixeldrain. Masukkan kunci API di formulir konfigurasi dan simpan.

Setelah disimpan, buka remote tersebut di File Explorer. File dan direktori Pixeldrain Anda akan dimuat di panel, siap untuk ditelusuri dan ditransfer.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Pixeldrain remote in RcloneView" class="img-large img-center" />

## Menelusuri dan Mengatur File

File Explorer RcloneView menampilkan penyimpanan Pixeldrain Anda dengan tampilan pohon dan daftar yang sama seperti pada penyedia lain. Navigasikan direktori, pilih file, dan gunakan opsi klik kanan untuk menyalin, memindahkan, atau menghapus. Untuk koleksi yang banyak berisi gambar, alihkan ke **Thumbnail View** untuk melihat pratinjau dalam bentuk grid — berguna jika Anda menyimpan foto atau tangkapan layar di Pixeldrain dan ingin mengidentifikasi konten sebelum mentransfernya.

Membuka panel kedua yang mengarah ke remote lain — Google Drive, Backblaze B2, atau folder lokal — memungkinkan Anda menyeret dan melepaskan file langsung antara Pixeldrain dan tujuan Anda.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Pixeldrain folders with another cloud in RcloneView" class="img-large img-center" />

## Membuat Job Pencadangan

Untuk pencadangan sistematis konten Pixeldrain Anda, gunakan fitur **Job**. Buka **Jobs**, klik **New Job**, dan atur Pixeldrain sebagai sumber. Pilih remote yang telah dikonfigurasi sebagai tujuan. Pada langkah 2 dari wizard job, konfigurasikan opsi transfer:

- **Number of transfers**: berapa banyak file yang ditransfer secara bersamaan
- **Dry Run**: pratinjau apa yang akan disalin tanpa benar-benar memindahkan apa pun
- **Checksum verification**: aktifkan untuk memastikan integritas data setelah transfer

Jalankan job tersebut, dan RcloneView menampilkan progres secara real-time dengan kecepatan transfer dan jumlah file. Setelah job selesai, hasilnya dicatat di **Job History**.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Pixeldrain files to another cloud provider" class="img-large img-center" />

## Folder Compare untuk Verifikasi

Setelah memindahkan konten dari Pixeldrain ke cloud lain, alat **Folder Compare** memberikan keyakinan bahwa transfer telah selesai secara lengkap. Buka folder sumber Pixeldrain dan folder tujuan secara berdampingan, dan RcloneView akan menyoroti file yang hanya ada di satu sisi atau berbeda ukurannya. Ini sangat berguna ketika Anda melakukan migrasi selama beberapa sesi dan ingin memastikan tidak ada yang terlewat.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Pixeldrain sync records" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buat kunci API Pixeldrain Anda dari pengaturan akun di pixeldrain.com.
3. Buka **Remote Manager**, klik **New Remote**, pilih **Pixeldrain**, dan masukkan kunci API Anda.
4. Telusuri file Anda dan konfigurasikan job pencadangan ke cloud tujuan pilihan Anda.

RcloneView memudahkan pemindahan konten Pixeldrain ke pengaturan penyimpanan jangka panjang yang lebih terstruktur.

---

**Panduan Terkait:**

- [Migrasi Cloud-ke-Cloud dengan RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [Mengatasi File yang Hilang Setelah Sinkronisasi Cloud](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)
- [Pemantauan Job History dan Log Transfer](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
