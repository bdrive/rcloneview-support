---
slug: migrate-google-drive-to-wasabi-rcloneview
title: "Migrasi Google Drive ke Wasabi — Transfer File dengan RcloneView"
authors:
  - alex
description: "Migrasikan Google Drive ke Wasabi dengan RcloneView. Salin file antar-cloud, verifikasi dengan Dry Run dan Folder Compare, dan simpan arsip yang kompatibel dengan S3."
keywords:
  - migrasi google drive ke wasabi
  - google drive to wasabi
  - transfer google drive wasabi
  - arsip google drive s3
  - migrasi wasabi GUI
  - transfer cloud ke cloud
  - rcloneview google drive wasabi
  - pindahkan google drive ke object storage
  - backup google drive wasabi
  - sinkronisasi bucket wasabi
tags:
  - RcloneView
  - google-drive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Google Drive ke Wasabi — Transfer File dengan RcloneView

> Pindahkan atau arsipkan Google Drive ke bucket Wasabi tanpa perlu mengunduh apa pun ke disk Anda sendiri terlebih dahulu.

Sebuah studio desain dengan 2TB proyek yang sudah selesai mungkin ingin memindahkannya dari Google Drive ke object storage yang kompatibel dengan S3. RcloneView mentransfer langsung dari Drive ke Wasabi, dengan Dry Run sebelumnya dan Folder Compare sesudahnya agar Anda dapat memastikan tidak ada yang terlewat.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan Kedua Remote

Google Drive menggunakan OAuth: pilih di **New Remote** lalu masuk melalui browser. Wasabi adalah penyedia yang kompatibel dengan S3, jadi Anda memasukkan Access Key, Secret Key, dan endpoint untuk region Wasabi Anda. Buat bucket di konsol Wasabi terlebih dahulu agar Anda memiliki tujuan.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote Google Drive dan Wasabi di RcloneView" class="img-large img-center" />

Hubungkan S3, Azure, atau Backblaze B2 dengan akses baca/tulis penuh pada lisensi FREE — Wasabi dan layanan lain yang kompatibel dengan S3 bekerja dengan cara yang sama.

## Rencanakan Transfer dengan Dry Run

Buka Google Drive di satu panel Explorer dan bucket Wasabi Anda di panel lainnya. Untuk pemindahan sekali jalan, seret folder di antara panel; antar-remote yang berbeda akan melakukan penyalinan. Untuk pustaka besar, buat job sebagai gantinya. Step 1 menetapkan sumber dan tujuan, Step 2 memungkinkan Anda mengatur jumlah transfer bersamaan, dan Step 3 dapat memfilter berdasarkan ukuran, usia, atau jenis file. Jalankan **Dry Run** untuk melihat pratinjau setiap file yang akan disalin.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer cloud ke cloud dari Google Drive ke Wasabi" class="img-large img-center" />

Pilih jenis job **Copy**, bukan Sync, selama migrasi. Copy tidak pernah menghapus apa pun di tujuan, yang merupakan pilihan lebih aman sampai Anda memverifikasi hasilnya.

## Pantau Transfer

Mulai job dan ikuti progresnya di tab Transferring di bagian bawah jendela: persentase, kecepatan, dan jumlah file. Jika pembatasan laju Google Drive memperlambat proses, turunkan jumlah transfer file bersamaan di pengaturan lanjutan job lalu jalankan lagi; file yang sudah disalin akan dilewati.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Memantau transfer ke Wasabi di RcloneView" class="img-large img-center" />

## Verifikasi Sebelum Membersihkan

Gunakan **Compare** untuk melihat kedua lokasi berdampingan. Filter menampilkan file yang hanya ada di kiri, hanya di kanan, identik, dan berbeda, sehingga setiap kekurangan terlihat jelas. Baru setelah perbandingan bersih Anda sebaiknya mempertimbangkan untuk menghapus data dari Google Drive. Job History menyimpan catatan setiap eksekusi.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Memverifikasi migrasi Google Drive ke Wasabi dengan Folder Compare" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Google Drive (OAuth) dan Wasabi (Access Key, Secret Key, endpoint) sebagai remote.
3. Buat job Copy dari Drive ke bucket Anda dan jalankan Dry Run.
4. Mulai job, lalu konfirmasi hasilnya dengan Compare.

Salinan terverifikasi di bucket yang Anda kendalikan membuat sisa proses pembersihan berisiko rendah.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Wasabi dengan RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Migrasi OneDrive ke Wasabi](https://rcloneview.com/support/blog/migrate-onedrive-to-wasabi-rcloneview)
- [Migrasi Dropbox ke Wasabi](https://rcloneview.com/support/blog/migrate-dropbox-to-wasabi-rcloneview)

<CloudSupportGrid />
