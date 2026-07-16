---
slug: fix-cloud-sync-missing-files-after-transfer-rcloneview
title: "Memperbaiki File yang Hilang Setelah Sinkronisasi Cloud dengan RcloneView"
authors:
  - tayson
description: "Diagnosis dan perbaiki file yang hilang setelah operasi sinkronisasi cloud. Pelajari penyebab umum seperti aturan filter, karakter khusus, dan masalah arah sinkronisasi di RcloneView."
keywords:
  - rcloneview
  - missing files after sync
  - cloud sync missing files
  - rclone files not syncing
  - cloud transfer missing data
  - sync direction wrong
  - google docs not syncing
  - rclone filter rules
  - cloud file transfer issues
  - fix cloud sync
tags:
  - RcloneView
  - troubleshooting
  - cloud-sync
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki File yang Hilang Setelah Sinkronisasi Cloud dengan RcloneView

> Anda menjalankan tugas sinkronisasi dan semuanya terlihat berhasil, tetapi beberapa file hilang di tujuan. **RcloneView** menyediakan alat untuk mendiagnosis dengan tepat apa yang terjadi dan mencegahnya terulang.

Menemukan file yang hilang setelah sinkronisasi cloud adalah salah satu situasi paling membuat stres dalam manajemen file cloud. Transfer selesai tanpa kesalahan, log tugas menunjukkan keberhasilan, tetapi ketika Anda memeriksa tujuan, file tertentu tidak ditemukan di mana pun. Sebelum Anda panik, ketahuilah bahwa ini hampir selalu disebabkan oleh masalah konfigurasi logis, bukan kehilangan data.

Panduan ini membahas alasan paling umum mengapa file hilang setelah operasi sinkronisasi dan menunjukkan cara menggunakan fitur perbandingan, pencatatan log, dan dry-run RcloneView untuk mengidentifikasi dan memperbaiki masalah.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Aturan Filter yang Diam-Diam Mengecualikan File

Penyebab paling umum dari file yang hilang adalah aturan filter yang mengecualikannya. Jika Anda menyiapkan aturan `--exclude`, `--include`, atau `--filter` dan lupa akan aturan tersebut, file yang cocok dengan pola tersebut akan dilewati secara diam-diam selama sinkronisasi. Rclone tidak memperingatkan Anda tentang file yang dikecualikan dalam output standarnya.

**Kesalahan filter yang umum:**

- Aturan `--include "*.jpg"` yang secara tidak sengaja mengecualikan semua file non-JPG, termasuk dokumen dan spreadsheet.
- Aturan `--exclude "*.tmp"` yang juga menangkap file dengan `.tmp` di tengah namanya.
- Flag `--min-size` yang melewatkan file kecil tetapi penting seperti file konfigurasi atau catatan teks.
- Aturan filter tersisa dari tugas sebelumnya yang terbawa saat membuat tugas baru.

**Cara mendiagnosis:** Di RcloneView, tinjau flag dan filter yang terpasang pada tugas sinkronisasi Anda. Hapus semua filter sementara dan jalankan perbandingan untuk melihat apakah file yang hilang muncul. Kemudian tambahkan kembali filter satu per satu untuk mengidentifikasi aturan mana yang mengecualikannya.

## Kebingungan Arah Sinkronisasi

Perbedaan antara `sync`, `copy`, dan `move` sangat penting, dan memilih yang salah dapat menyebabkan file hilang.

- **Sync** membuat tujuan sesuai dengan sumber. File di tujuan yang tidak ada di sumber akan **dihapus**. Jika Anda tidak sengaja melakukan sinkronisasi ke arah yang salah (tujuan ke sumber, bukan sumber ke tujuan), file sumber Anda bisa terhapus.
- **Copy** hanya menambahkan file ke tujuan. Ini tidak pernah menghapus apa pun. Ini adalah opsi yang lebih aman ketika Anda tidak yakin.
- **Move** mentransfer file lalu menghapusnya dari sumber.

Jika file hilang dari sumber setelah sinkronisasi, kemungkinan Anda menjalankan sinkronisasi ke arah yang salah. Selalu periksa kembali panel mana yang menjadi sumber dan mana yang menjadi tujuan di penjelajah dua panel RcloneView sebelum menjalankannya.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Google Docs, Sheets, dan Slides

Dokumen Google Workspace (Docs, Sheets, Slides, Drawings) bukanlah file tradisional. Dokumen tersebut adalah objek cloud-native yang tidak memiliki ukuran tetap atau format biner yang dapat diunduh dalam bentuk aslinya. Saat melakukan sinkronisasi dari Google Drive, rclone mengonversinya menjadi format yang dapat diunduh (misalnya, `.docx`, `.xlsx`, `.pdf`), tetapi perilaku ini bergantung pada konfigurasi Anda.

**Masalah umum:**

- Google Docs muncul sebagai file berukuran nol byte atau dilewati sepenuhnya jika format ekspor tidak dikonfigurasi.
- File dengan nama yang sangat panjang mungkin gagal diekspor pada beberapa sistem operasi.
- Shortcut di Google Drive bukan file sungguhan dan tidak akan ditransfer.

**Cara memperbaiki:** Periksa apakah remote Google Drive Anda dikonfigurasi dengan format ekspor yang sesuai. Sebagai alternatif, jika Anda tidak memerlukan Google Docs di tujuan, kecualikan secara eksplisit untuk menghindari kebingungan tentang file yang hilang.

## Sensitivitas Huruf Besar/Kecil dan Karakter Khusus

Penyedia cloud yang berbeda menangani nama file secara berbeda. File bernama `Report.PDF` dan `report.pdf` mungkin diperlakukan sebagai file yang sama di Windows dan OneDrive tetapi sebagai dua file berbeda di Linux dan S3. Selama sinkronisasi, salah satunya dapat menimpa yang lain secara diam-diam.

**Karakter bermasalah meliputi:**

- Spasi atau titik di akhir nama (ditolak oleh OneDrive dan Windows).
- Titik dua, tanda tanya, dan tanda kurung siku (tidak valid di Windows).
- Emoji atau karakter Unicode (beberapa penyedia menanganinya secara tidak konsisten).
- Jalur file yang sangat panjang melebihi 260 karakter di Windows.

**Cara mendiagnosis:** Gunakan fitur perbandingan RcloneView untuk mencantumkan file secara berdampingan. Cari file yang ada di sumber tetapi hilang atau memiliki nama berbeda di tujuan. Log rclone mungkin menampilkan peringatan penggantian nama untuk file dengan karakter yang tidak kompatibel.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## Batas Ukuran File dan Pembatasan Penyedia

Beberapa penyedia cloud menetapkan batas ukuran file maksimum yang dapat menyebabkan file besar dilewati secara diam-diam:

- Google Drive: 5 TB per file.
- OneDrive: 250 GB per file.
- Dropbox: 2 GB per file melalui API (350 GB melalui klien desktop).
- MEGA: batas ukuran file bervariasi menurut jenis akun.
- Banyak penyedia yang kompatibel dengan S3: 5 TB per objek, tetapi bagian unggahan individual dibatasi hingga 5 GB.

Jika Anda melakukan sinkronisasi file yang melebihi batas penyedia tujuan, file tersebut akan gagal ditransfer. Periksa riwayat tugas Anda di RcloneView untuk entri kesalahan yang terkait dengan file berukuran terlalu besar.

## Menggunakan Perbandingan untuk Menemukan File yang Hilang

Fitur perbandingan folder RcloneView adalah cara tercepat untuk mengidentifikasi dengan tepat file mana yang hilang. Buka sumber di satu sisi dan tujuan di sisi lain, lalu jalankan perbandingan. Alat ini akan menyoroti file yang hanya ada di sumber, hanya ada di tujuan, atau yang berbeda antara keduanya.

Ini memberi Anda daftar pasti tentang apa yang tidak berhasil ditransfer, yang kemudian dapat Anda selidiki satu per satu. Perhatikan polanya -- apakah semua file yang hilang berada dalam satu folder? Apakah mereka memiliki ekstensi file yang sama? Apakah semuanya di bawah ukuran tertentu? Pola-pola ini menunjukkan akar penyebabnya.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## Menjalankan Dry Run Sebelum Sinkronisasi

Cara terbaik untuk mencegah file hilang adalah menjalankan dry run sebelum setiap sinkronisasi. Dry run mensimulasikan operasi tanpa benar-benar mentransfer atau menghapus file apa pun. Ini menunjukkan kepada Anda dengan tepat apa yang akan dilakukan rclone, termasuk file mana yang akan dilewati, ditransfer, atau dihapus.

Di RcloneView, Anda dapat menggunakan flag `--dry-run` saat mengonfigurasi tugas sinkronisasi. Tinjau output dengan cermat. Jika file yang Anda harapkan untuk ditransfer tidak tercantum, selidiki aturan filter dan konfigurasi Anda sebelum menjalankan sinkronisasi yang sebenarnya.

## Strategi Pencegahan

Untuk menghindari file hilang pada sinkronisasi di masa mendatang:

1. **Selalu bandingkan terlebih dahulu.** Gunakan fitur perbandingan RcloneView sebelum sinkronisasi untuk memahami kondisi terkini di kedua lokasi.
2. **Gunakan copy alih-alih sync** ketika Anda tidak ingin ada yang dihapus di tujuan.
3. **Mulai dengan dry run.** Tambahkan `--dry-run` untuk menguji konfigurasi sinkronisasi baru sebelum menerapkannya.
4. **Dokumentasikan aturan filter Anda.** Simpan catatan tentang apa yang dilakukan setiap aturan filter dan mengapa aturan itu ada.
5. **Periksa riwayat tugas.** Setelah setiap sinkronisasi, tinjau riwayat tugas di RcloneView untuk memastikan jumlah file yang ditransfer sesuai harapan.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka penjelajah dua panel dengan remote sumber dan tujuan Anda, lalu jalankan perbandingan folder.
3. Periksa konfigurasi tugas sinkronisasi Anda untuk aturan filter, arah sinkronisasi, dan flag apa pun yang mungkin mengecualikan file.
4. Gunakan `--dry-run` untuk melihat pratinjau operasi sinkronisasi sebelum menjalankannya.

File yang hilang setelah sinkronisasi hampir selalu merupakan masalah konfigurasi, bukan kehilangan data. Diagnosis yang metodis menggunakan alat perbandingan dan pencatatan log RcloneView akan menemukan penyebabnya setiap saat.

---

**Panduan Terkait:**

- [Menjelajahi dan Mengelola Penyimpanan Remote](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Membandingkan isi folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Menyinkronkan Penyimpanan Remote Secara Instan](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)

<CloudSupportGrid />
