---
slug: manage-cloudinary-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan Cloudinary — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - jay
description: "Pelajari cara mengelola, menyinkronkan, dan mencadangkan aset digital Cloudinary Anda ke Amazon S3, Google Drive, atau penyimpanan cloud lain menggunakan RcloneView."
keywords:
  - kelola Cloudinary dengan RcloneView
  - pencadangan Cloudinary ke S3
  - sinkronisasi Cloudinary Google Drive
  - Cloudinary rclone
  - pencadangan aset Cloudinary
  - manajemen penyimpanan cloud Cloudinary
  - sinkronisasi file Cloudinary
  - pencadangan aset digital Cloudinary
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - guide
  - dam
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan Cloudinary — Sinkronisasi dan Pencadangan File dengan RcloneView

> Cloudinary menyimpan aset gambar dan video produksi Anda — RcloneView memungkinkan Anda mencadangkannya ke Amazon S3, Google Drive, atau cloud lain tanpa menulis satu skrip pun.

Cloudinary telah menjadi platform pilihan bagi developer dan tim kreatif yang mengelola pustaka besar berisi gambar, video, dan file media kaya lainnya. Namun, menyimpan semuanya hanya di Cloudinary menciptakan satu titik kegagalan tunggal: penghapusan massal yang tidak disengaja, masalah akun, atau gangguan API dapat membuat seluruh pustaka media Anda tidak dapat diakses dalam hitungan menit. RcloneView, dibangun di atas backend Cloudinary milik rclone, memberi Anda antarmuka visual untuk menjelajahi, menyinkronkan, dan mencadangkan akun Cloudinary Anda ke penyimpanan cloud lain yang didukung — menjaga salinan terverifikasi di tempat yang Anda kendalikan sendiri.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Cloudinary ke RcloneView

Buka RcloneView dan navigasikan ke tab Remote, lalu klik New Remote. Pilih Cloudinary dari daftar provider dan masukkan kredensial Anda untuk menyelesaikan pengaturan. Setelah terhubung, penyimpanan Cloudinary Anda muncul sebagai remote yang dapat dijelajahi di panel explorer — gunakan pohon folder di sebelah kiri untuk menavigasi pustaka media Anda, dan daftar file di sebelah kanan untuk memeriksa aset individual berikut nama, ukuran, dan tanggal modifikasinya.

Tampilan thumbnail sangat berguna untuk konten Cloudinary: beralih ke mode thumbnail pada daftar file untuk mendapatkan tampilan grid visual dari gambar Anda alih-alih hanya nama file, sehingga memudahkan Anda memastikan sedang melihat folder yang benar sebelum memicu operasi apa pun.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Cloudinary as a new remote in RcloneView" class="img-large img-center" />

## Mencadangkan Aset Cloudinary ke Cloud Lain

Dengan Cloudinary terbuka di satu panel explorer dan tujuan seperti Amazon S3, Backblaze B2, atau Google Drive terbuka di panel lainnya, mulai tugas sinkronisasi melalui tab Home > Sync. Wizard 4 langkah memungkinkan Anda mengonfigurasi persis apa yang akan ditransfer:

- Pilih folder Cloudinary Anda sebagai sumber dan cloud pencadangan Anda sebagai tujuan
- Gunakan filter file yang telah ditentukan di Langkah 3 (Image, Video) untuk menargetkan jenis media tertentu dan melewati file yang tidak diperlukan
- Tetapkan usia file maksimum untuk menjalankan sinkronisasi inkremental yang hanya menangkap aset yang baru diperbarui

Selalu jalankan **Dry Run** terlebih dahulu — ini menampilkan pratinjau persis file mana yang akan ditransfer atau dilewati tanpa mengubah apa pun. Untuk pustaka Cloudinary yang besar, ini menangkap kesalahan konfigurasi filter sebelum menyebabkan pencadangan yang terlewat.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop interface for transferring Cloudinary assets to S3 backup" class="img-large img-center" />

## Menjadwalkan Pencadangan Cloudinary Otomatis

Untuk perlindungan aset yang berkelanjutan, RcloneView PLUS menambahkan penjadwalan bergaya crontab ke Langkah 4 wizard sinkronisasi. Sinkronisasi malam hari pukul 2 pagi menangkap aset yang baru diunggah pada hari itu sambil menjaga penggunaan bandwidth di luar jam sibuk. Gunakan pratinjau Simulate schedule untuk memverifikasi waktu eksekusi berikutnya sebelum menyimpan — tidak ada kejutan saat run terjadwal pertama dijalankan.

Setelah berjalan, notifikasi penyelesaian tugas memberi tahu Anda dengan status, jumlah file yang ditransfer, dan volume data. Bagi tim dengan puluhan transformasi dan unggahan Cloudinary aktif per hari, pemberitahuan pasif ini berarti Anda tahu pencadangan berjalan dengan benar tanpa perlu masuk untuk memeriksanya.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring a nightly scheduled backup of Cloudinary assets in RcloneView" class="img-large img-center" />

## Memverifikasi Kelengkapan Pencadangan

Gunakan fitur Folder Compare (tab Home > Compare) untuk membandingkan sumber Cloudinary Anda dengan tujuan pencadangan kapan saja. RcloneView menampilkan file left-only, right-only, same, dan different secara berdampingan — Anda dapat mengidentifikasi celah dalam cakupan sekilas dan menyalin file yang hilang langsung dari tampilan perbandingan tanpa perlu membuat tugas baru. Untuk aset media dengan taruhan tinggi, mengaktifkan checksum di Advanced Settings tugas sinkronisasi memverifikasi isi file di luar sekadar kecocokan ukuran, memastikan setiap file tiba dengan utuh.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison between Cloudinary source and S3 backup destination" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Cloudinary sebagai remote melalui tab Remote > New Remote dan selesaikan konfigurasinya.
3. Tambahkan tujuan pencadangan Anda (Amazon S3, Backblaze B2, Google Drive) sebagai remote kedua.
4. Buat tugas sinkronisasi dari Cloudinary ke tujuan, jalankan Dry Run, lalu aktifkan penjadwalan PLUS untuk pencadangan harian otomatis.

Cloudinary menyimpan aset produksi Anda yang paling terlihat — menjaga salinan tersinkronisasi di cloud kedua mengubah satu titik kegagalan tunggal menjadi pencadangan yang andal dan dapat diaudit, yang sepenuhnya Anda kendalikan.

---

**Panduan Terkait:**

- [Kelola Aset Digital di Berbagai Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-digital-assets-multi-cloud-rcloneview)
- [Kelola Penyimpanan Amazon S3 — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Cadangkan Google Photos ke Drive Eksternal atau NAS dengan RcloneView](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)

<CloudSupportGrid />
