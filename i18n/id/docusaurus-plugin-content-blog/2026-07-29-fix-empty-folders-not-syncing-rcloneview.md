---
slug: fix-empty-folders-not-syncing-rcloneview
title: "Mengatasi Folder Kosong Tidak Ikut Sinkron — Mengaktifkan Pembuatan Direktori dengan RcloneView"
authors:
  - robin
description: "Pelajari mengapa folder kosong menghilang saat sinkronisasi cloud dan cara mengatasinya dengan opsi buat direktori kosong milik RcloneView."
keywords:
  - folder kosong tidak sinkron
  - mengatasi folder hilang saat sinkronisasi cloud
  - RcloneView buat direktori kosong
  - struktur folder sinkronisasi cloud
  - rclone sinkronisasi direktori kosong
  - struktur folder tidak dipertahankan
  - folder kosong hilang saat sinkronisasi
  - pengaturan sinkronisasi RcloneView
tags:
  - RcloneView
  - troubleshooting
  - tips
  - sync
  - job-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengatasi Folder Kosong Tidak Ikut Sinkron — Mengaktifkan Pembuatan Direktori dengan RcloneView

> Jika pekerjaan sinkronisasi meninggalkan folder kosong yang sudah Anda susun rapi, solusinya adalah satu tombol di pengaturan sinkronisasi RcloneView, bukan bug pada penyedia cloud Anda.

Sebagian besar mesin sinkronisasi, termasuk rclone, hanya mentransfer objek yang benar-benar berisi data — folder kosong tidak memiliki apa pun untuk disalin, sehingga secara default dilewati sepenuhnya. Hal ini tidak menjadi masalah untuk backup yang sederhana, tetapi merusak alur kerja apa pun yang bergantung pada struktur folder tetap, seperti template proyek, struktur penerimaan klien, atau direktori placeholder yang diharapkan tim untuk terlihat bahkan sebelum berkas benar-benar ada di dalamnya. RcloneView menampilkan pengaturan yang mengontrol perilaku ini langsung di wizard sinkronisasi, sehingga Anda tidak perlu menyentuh berkas konfigurasi atau menjalankan ulang pekerjaan secara membabi buta.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Folder Kosong Terlewat

Saat RcloneView (melalui rclone) menelusuri pohon sumber selama sinkronisasi, daftar transfernya dibangun berdasarkan berkas, bukan direktori. Folder yang hanya berisi subfolder tanpa berkas di mana pun di bawahnya tidak menghasilkan objek yang dapat ditransfer, sehingga tidak ada apa pun yang memberi tahu tujuan bahwa folder tersebut seharusnya ada. Ini adalah perilaku sinkronisasi yang memang diharapkan, bukan cacat — tetapi mengejutkan bagi siapa pun yang mengira sinkronisasi folder-ke-folder mempertahankan pohon struktur yang persis sama, termasuk cabang-cabang yang kosong.

<img src="/support/images/en/blog/new-remote.png" alt="Wizard pengaturan sinkronisasi RcloneView menampilkan opsi konfigurasi Langkah 1" class="img-large img-center" />

Solusinya berada di Langkah 1 pada wizard konfigurasi sinkronisasi, berdampingan dengan sumber, tujuan, dan arah sinkronisasi — mudah terlewat pada percobaan pertama karena secara default dalam keadaan nonaktif.

## Mengaktifkan "Buat Direktori Kosong"

Pada Langkah 1 dari wizard sinkronisasi 4 langkah, aktifkan opsi "Buat direktori kosong" sebelum menyimpan pekerjaan. Setelah diaktifkan, RcloneView memerintahkan rclone untuk mereplikasi struktur direktori lengkap di tujuan, termasuk cabang yang saat ini tidak berisi berkas apa pun. Hal ini paling penting untuk pekerjaan yang dijalankan berulang kali sesuai jadwal — folder yang kosong hari ini mungkin akan menerima berkas minggu depan, dan struktur tujuan yang sudah siap sejak awal menghindarkan kebingungan tentang di mana konten baru harus ditempatkan.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Tombol buat direktori kosong pada Langkah 1 konfigurasi sinkronisasi RcloneView" class="img-large img-center" />

Berbeda dari alat yang hanya bisa mount, RcloneView juga melakukan sinkronisasi dan membandingkan folder — pada lisensi FREE — sehingga solusi ini berlaku baik saat Anda mencerminkan satu tujuan maupun saat menyebarkan satu sumber ke beberapa tujuan dengan sinkronisasi 1:N.

## Memverifikasi Perbaikan dengan Dry Run

Sebelum menjalankan sinkronisasi penuh, gunakan fitur Dry Run milik RcloneView untuk melihat pratinjau folder dan berkas mana saja yang akan dibuat atau diubah. Dry Run menampilkan daftar operasi yang tertunda tanpa menyentuh tujuan, yang merupakan cara yang andal untuk memastikan folder kosong Anda benar-benar akan muncul sebelum Anda menjalankan pekerjaan tersebut secara nyata — sangat berguna terutama jika Anda menerapkan opsi ini secara retroaktif pada pekerjaan yang sudah berjalan cukup lama.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menjalankan pratinjau dry run sebelum mengeksekusi pekerjaan sinkronisasi di RcloneView" class="img-large img-center" />

Jika pekerjaan terjadwal sudah pernah dijalankan tanpa opsi ini diaktifkan, simpan ulang dengan mencentang "Buat direktori kosong" lalu jalankan sekali lagi — eksekusi berikutnya akan melengkapi struktur direktori yang hilang di tujuan.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka atau buat pekerjaan sinkronisasi Anda dan lanjutkan ke Langkah 1: Konfigurasi Penyimpanan.
3. Centang "Buat direktori kosong" sebelum menyimpan.
4. Jalankan Dry Run terlebih dahulu untuk memastikan struktur folder sesuai dengan yang diharapkan.

Cukup satu centang saja untuk menjaga struktur folder Anda tetap utuh di setiap cloud yang Anda sinkronkan.

---

**Panduan Terkait:**

- [Panduan Perbandingan Folder — Deteksi Perbedaan dengan RcloneView](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Dry Run — Pratinjau Sinkronisasi Cloud Sebelum Transfer dengan RcloneView](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [Aturan Filter — Sinkronisasi Selektif dengan RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
