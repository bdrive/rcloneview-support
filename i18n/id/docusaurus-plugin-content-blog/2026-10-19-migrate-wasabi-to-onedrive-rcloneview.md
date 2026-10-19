---
slug: migrate-wasabi-to-onedrive-rcloneview
title: "Migrasi Wasabi ke OneDrive — Transfer File dengan RcloneView"
authors:
  - tayson
description: "Migrasikan Wasabi ke OneDrive dengan RcloneView: hubungkan kedua remote, pratinjau dengan Dry Run, salin data bucket dari cloud ke cloud, dan verifikasi dengan Folder Compare."
keywords:
  - migrasi wasabi ke onedrive
  - transfer wasabi ke onedrive
  - pindahkan bucket wasabi ke onedrive
  - RcloneView wasabi
  - RcloneView onedrive
  - migrasi cloud ke cloud
  - sinkronisasi wasabi onedrive
  - s3 ke onedrive
tags:
  - RcloneView
  - wasabi
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Wasabi ke OneDrive — Transfer File dengan RcloneView

> Pindahkan data dari bucket Wasabi ke OneDrive dengan penyalinan cloud ke cloud yang dapat dipratinjau dan diverifikasi, bukan jalan memutar dengan mengunduh lalu mengunggah ulang.

Tim yang menyimpan arsip proyek di Wasabi terkadang membutuhkan data tersebut di OneDrive, tempat rekan kerja sudah bekerja di Microsoft 365. Penyimpanan objek dan layanan sinkronisasi file berperilaku berbeda, sehingga penyalinan secara membabi buta bisa mengejutkan Anda. RcloneView menghubungkan kedua layanan secara berdampingan, memratinjau job dengan Dry Run, dan memverifikasi hasilnya setelahnya. Hubungkan S3, Azure, atau Backblaze B2 dengan akses baca/tulis penuh pada lisensi FREE, bersama 90+ penyedia lainnya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan Wasabi dan OneDrive

Wasabi diakses melalui protokol S3 rclone, sehingga Anda memasukkan Access Key, Secret Key, dan endpoint untuk region Wasabi Anda. OneDrive menggunakan OAuth browser: RcloneView membuka halaman login Microsoft, Anda menyetujui akses, dan remote terhubung tanpa kunci apa pun yang perlu disalin.

Buka kedua remote di dua panel Explorer. Telusuri bucket dan struktur folder OneDrive agar Anda tahu di mana data berada dan ke mana data harus dipindahkan.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote Wasabi dan OneDrive di RcloneView" class="img-large img-center" />

## Rencanakan Penyalinan

Bayangkan sebuah studio desain dengan beberapa bucket berisi folder proyek yang sudah selesai. Alih-alih memindahkan semuanya sekaligus, salin satu bucket atau prefix per job. Job yang singkat lebih mudah diulang dan lebih mudah diperiksa.

Pilih Copy, bukan Sync, jika OneDrive sudah berisi file yang ingin Anda pertahankan, karena sinkronisasi satu arah membuat tujuan sama dengan sumber. Langkah filter memungkinkan Anda membatasi ukuran atau usia file dan menggunakan grup bawaan seperti Document, Image, atau Video. Tinjau juga nama file sebelumnya: kunci objek dapat berisi karakter atau path yang sangat panjang yang mungkin ditolak OneDrive, jadi Dry Run layak dilakukan meski hanya semenit.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Membandingkan folder Wasabi dan OneDrive sebelum migrasi" class="img-large img-center" />

## Jalankan Transfer

Untuk penyalinan cepat satu kali, seret folder dari panel Wasabi ke panel OneDrive. Menyeret antar remote yang berbeda akan menyalin, bukan memindahkan, sehingga bucket tetap utuh sampai Anda puas. Untuk proses yang dapat diulang, simpan job melalui wizard empat langkah: penyimpanan, pengaturan lanjutan, filter, dan penjadwalan (penjadwalan memerlukan PLUS).

Pantau tab Transferring untuk melihat kecepatan, jumlah file, dan progres. Jika OneDrive melambat pada proses besar, kurangi jumlah transfer file bersamaan di Advanced Settings. Job sinkronisasi akan mengulang seluruh proses jika gagal (default: 3 kali).

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer cloud ke cloud dari Wasabi ke OneDrive" class="img-large img-center" />

## Verifikasi dan Simpan Catatan

Setelah penyalinan selesai, buka Folder Compare pada kedua root. Filter menampilkan file yang hanya ada di kiri, hanya di kanan, identik, dan berbeda, dan Anda dapat menyalin item yang hilang dengan satu klik. Job History mencatat waktu mulai, durasi, status, dan file yang ditransfer, yang sekaligus berfungsi sebagai log migrasi.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Riwayat job untuk migrasi Wasabi ke OneDrive" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote Wasabi (access key, secret key, endpoint region) dan remote OneDrive (login browser).
3. Jalankan Dry Run pada satu prefix, lalu eksekusi job penyalinan.
4. Verifikasi dengan Folder Compare dan ulangi untuk bucket lainnya.

Migrasi bertahap yang terverifikasi memastikan setiap file terhitung sebelum Anda menghentikan penggunaan bucket.

---

**Panduan Terkait:**

- [Migrasi OneDrive ke Wasabi](https://rcloneview.com/support/blog/migrate-onedrive-to-wasabi-rcloneview)
- [Kelola Penyimpanan Wasabi](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Dry Run: Pratinjau Sinkronisasi Sebelum Transfer](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
