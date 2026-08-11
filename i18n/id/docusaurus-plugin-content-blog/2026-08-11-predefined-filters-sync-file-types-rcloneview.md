---
slug: predefined-filters-sync-file-types-rcloneview
title: "Filter Standar — Sinkronkan Hanya File yang Anda Butuhkan di RcloneView"
authors:
  - steve
description: "Gunakan filter standar RcloneView untuk mensinkronkan hanya gambar, video, musik, atau dokumen alih-alih mentransfer seluruh folder."
keywords:
  - filter RcloneView
  - filter standar
  - sinkronisasi jenis file
  - filter sinkronisasi cloud
  - sinkronisasi selektif
  - sinkronisasi khusus gambar
  - filter sinkronisasi video
  - filter sinkronisasi dokumen
  - filter Google Docs
tags:
  - RcloneView
  - feature
  - filters
  - sync
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Filter Standar — Sinkronkan Hanya File yang Anda Butuhkan di RcloneView

> Lewati jenis file yang tidak Anda butuhkan dan sinkronkan hanya yang Anda perlukan, tanpa harus menulis aturan pengecualian secara manual.

Tidak setiap tugas sinkronisasi perlu memindahkan setiap file dalam sebuah folder. Sebuah studio fotografi yang mencadangkan drive bersama penuh file RAW, PSD, dan beberapa PDF yang tercecer biasanya hanya peduli pada gambar-gambarnya — bukan faktur yang ada di sebelahnya. Langkah Pengaturan Filter di RcloneView mencakup filter standar sekali klik untuk kategori file umum, sehingga Anda dapat membatasi cakupan tugas sinkronisasi tepat pada konten yang penting tanpa harus membuat aturan khusus dari awal.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cakupan Filter Standar

Langkah 3 dari wizard Sinkronisasi, Pengaturan Filter, menawarkan filter standar sekali klik untuk Musik, Video, Gambar, Dokumen, Google Docs, dan Box Docs. Memilih salah satunya akan membatasi tugas hanya pada jenis file yang cocok — misalnya pilih Gambar, maka tugas sinkronisasi akan mengabaikan semua hal lain di folder sumber, terlepas dari seberapa dalam letaknya atau apa lagi yang ada di sana.

Ini penting untuk folder berisi konten campuran yang menumpuk seiring waktu: drive bersama tim pemasaran yang penuh dengan video hasil ekspor, dokumen merek, dan spreadsheet tidak perlu semuanya dicerminkan ke remote arsip video. Satu filter standar saja sudah cukup menjaga tujuan tetap rapi tanpa perlu pembersihan manual setelahnya.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Memilih filter jenis file standar di wizard sinkronisasi RcloneView" class="img-large img-center" />

Opsi Google Docs dan Box Docs secara khusus menargetkan format dokumen native milik penyedia yang tidak berperilaku seperti file biasa selama transfer — berguna saat mensinkronkan dari Google Drive atau Box dan Anda ingin memisahkan dokumen native dari file biner yang diunggah.

## Menggabungkan Filter Standar dan Kustom

Filter standar tidak eksklusif terhadap aturan kustom. Anda dapat melapisi filter Gambar standar dengan pengecualian kustom tambahan — misalnya aturan jalur `/thumbnails/*` — untuk menghilangkan file pratinjau yang dihasilkan otomatis, yang jika tidak dihapus akan mengotori sinkronisasi khusus gambar yang seharusnya bersih. Filter kustom juga mendukung batasan ukuran file maksimum dan usia file maksimum, sehingga studio fotografi dengan 2TB file RAW dapat menggabungkan filter Gambar dengan batas usia file untuk hanya mensinkronkan pemotretan terbaru alih-alih seluruh arsip historis.

Berbeda dari alat yang hanya mendukung mount, RcloneView juga mensinkronkan dan membandingkan folder pada lisensi FREE, sehingga penyaringan ini berlaku baik saat Anda menjalankan transfer sekali jalan maupun tugas tersimpan yang dapat diulang.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Tugas sinkronisasi terfilter yang hanya mentransfer file gambar antar dua remote" class="img-large img-center" />

## Memverifikasi Hasil Terfilter dengan Dry Run

Sebelum menjalankan sinkronisasi terfilter pada folder besar atau yang belum Anda kenal, jalankan terlebih dahulu dalam mode Dry Run. Dry Run menampilkan daftar pasti file yang akan disalin dan dihapus berdasarkan pengaturan filter saat ini, cara tercepat untuk memastikan filter standar menangkap apa yang Anda harapkan — dan tidak diam-diam mengecualikan file yang sebenarnya ingin Anda transfer.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menjalankan dry run untuk melihat pratinjau tugas sinkronisasi terfilter sebelum dieksekusi" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Mulai tugas Sinkronisasi baru dan pilih remote sumber dan tujuan Anda.
3. Di Langkah 3, Pengaturan Filter, pilih filter standar yang sesuai dengan jenis konten yang ingin Anda sinkronkan.
4. Jalankan Dry Run untuk memastikan hasilnya, lalu simpan tugas tersebut untuk menggunakan kembali filter yang sama pada sinkronisasi berikutnya.

Menyaring pada tingkat sinkronisasi, alih-alih menyortir file secara manual terlebih dahulu, menjaga folder tujuan tetap fokus pada konten yang benar-benar Anda butuhkan di sana.

---

**Panduan Terkait:**

- [Dry Run — Pratinjau Sinkronisasi Cloud Sebelum Transfer di RcloneView](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [Perbandingan Folder dengan Filter — Membatasi Perbandingan di RcloneView](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)
- [Bisync — Sinkronisasi Cloud Dua Arah dengan RcloneView](https://rcloneview.com/support/blog/bisync-bidirectional-cloud-sync-rcloneview)

<CloudSupportGrid />
