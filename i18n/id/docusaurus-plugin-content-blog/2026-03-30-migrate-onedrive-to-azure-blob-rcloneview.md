---
slug: migrate-onedrive-to-azure-blob-rcloneview
title: "Migrasi OneDrive ke Azure Blob — Transfer File dengan RcloneView"
authors:
  - tayson
description: "Migrasikan file OneDrive ke Azure Blob Storage menggunakan RcloneView. Pindahkan dokumen perusahaan ke object storage yang skalabel tanpa alat CLI atau skrip."
keywords:
  - onedrive to azure blob
  - migrate onedrive to azure
  - onedrive azure blob transfer
  - cloud-to-cloud migration
  - azure blob storage migration
  - rcloneview onedrive transfer
  - microsoft cloud migration
  - enterprise cloud migration
  - onedrive backup azure
  - object storage migration
tags:
  - onedrive
  - azure
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi OneDrive ke Azure Blob — Transfer File dengan RcloneView

> Beralih dari OneDrive ke Azure Blob Storage memberi tim Anda penyimpanan objek yang skalabel dan dapat diprogram — dan RcloneView membuat perpindahan ini tanpa hambatan.

OneDrive bekerja dengan baik untuk kolaborasi dokumen sehari-hari, tetapi tim perusahaan sering kali melampaui batas penyimpanannya atau membutuhkan akses terprogram ke file melalui REST API Azure. Azure Blob Storage menawarkan penetapan harga bertingkat (Hot, Cool, dan Archive), skalabilitas yang sangat besar, dan integrasi erat dengan Azure Functions, Logic Apps, dan Data Factory. RcloneView menjembatani kedua layanan Microsoft ini, memungkinkan Anda memigrasikan file dari OneDrive ke container Azure Blob tanpa menulis satu baris kode pun.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Saat OneDrive Mencapai Batasnya

OneDrive for Business menyertakan 1 TB per pengguna pada sebagian besar paket Microsoft 365, dengan add-on opsional hingga 5 TB. Itu terdengar besar sampai organisasi Anda mengumpulkan arsip proyek bertahun-tahun, aset media, atau catatan kepatuhan. Azure Blob Storage dapat berskala hingga exabyte dan hanya mengenakan biaya serendah $0,018 per GB per bulan pada tingkat Cool — sebagian kecil dari biaya kapasitas OneDrive yang setara.

Selain kapasitas mentah, Azure Blob mendukung fitur yang tidak dapat ditandingi OneDrive: kebijakan penyimpanan immutable untuk kepatuhan regulasi, integrasi Azure CDN untuk pengiriman konten global, dan kontrol akses terperinci melalui Shared Access Signatures (SAS). Memigrasikan data arsip atau data berskala besar dari OneDrive ke Azure Blob memusatkan penyimpanan di tempat infrastruktur Anda sudah berada.

<img src="/support/images/en/blog/new-remote.png" alt="Creating OneDrive and Azure Blob remotes in RcloneView" class="img-large img-center" />

## Mengonfigurasi Kedua Remote

Tambahkan remote OneDrive di RcloneView dengan memilih "Microsoft OneDrive" sebagai jenis penyedia. Alur OAuth akan membuka browser Anda untuk autentikasi akun Microsoft. Pilih antara OneDrive Personal, OneDrive for Business, atau pustaka dokumen SharePoint tertentu tergantung lokasi file sumber Anda. RcloneView menampilkan root dari drive yang dipilih setelah autentikasi selesai.

Untuk Azure Blob, buat remote baru dan pilih "Microsoft Azure Blob Storage." Masukkan nama Storage Account Anda beserta Account Key atau SAS URL. Jika organisasi Anda menerapkan autentikasi Azure Active Directory, RcloneView juga mendukung jalur tersebut. Pilih container tujuan — atau catat nama container untuk konfigurasi job. RcloneView mengonfirmasi koneksi dan menampilkan daftar container dan blob yang sudah ada.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Setting up a cloud-to-cloud transfer from OneDrive to Azure Blob" class="img-large img-center" />

## Menjalankan Migrasi

Buka explorer dua panel dengan OneDrive di satu sisi dan Azure Blob di sisi lainnya. Arahkan ke folder OneDrive yang ingin Anda migrasikan — misalnya, `/Documents/Projects` atau seluruh root. Di sisi Azure, jelajahi ke container tujuan Anda.

Untuk migrasi yang terstruktur, buat job Copy di Job Manager. Atur OneDrive sebagai jalur sumber dan container Azure Blob sebagai tujuan. Pilih mode "Copy" untuk mentransfer file tanpa menghapusnya dari OneDrive selama masa transisi. Aktifkan flag `--ignore-existing` jika Anda berencana menjalankan job ini beberapa kali, sehingga file yang sudah ditransfer dilewati secara efisien.

API OneDrive menerapkan batas kecepatan (rate limit) yang dapat memperlambat transfer besar. RcloneView menangani pembatasan dan percobaan ulang secara otomatis, dan Anda dapat mengonfigurasi transfer paralel (flag `--transfers`) untuk mengoptimalkan throughput dalam batas yang ditetapkan Microsoft.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Migration job history showing OneDrive to Azure Blob transfers" class="img-large img-center" />

## Verifikasi Pascamigrasi

Setelah job selesai, bandingkan jumlah dan ukuran file antara OneDrive dan Azure Blob menggunakan fitur pembanding RcloneView. Buka kedua remote secara berdampingan dan jalankan perbandingan untuk mengidentifikasi ketidaksesuaian apa pun. Azure Blob menyimpan hash MD5 untuk objek yang diunggah, sehingga verifikasi checksum dapat menangkap kerusakan apa pun yang terjadi selama transfer.

Setelah diverifikasi, konfigurasikan aplikasi Anda untuk membaca dari Azure Blob alih-alih OneDrive. Pertahankan koneksi remote OneDrive di RcloneView selama masa transisi, jalankan job sinkronisasi berkala untuk menangkap file apa pun yang terus ditambahkan pengguna ke OneDrive sebelum masa peralihan selesai.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling periodic OneDrive to Azure Blob sync during migration" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Autentikasikan akun OneDrive Anda melalui Microsoft OAuth dan pilih jenis drive yang benar.
3. Tambahkan remote Azure Blob Anda menggunakan nama Storage Account dan access key atau SAS token.
4. Buat job Copy dari OneDrive ke Azure Blob, aktifkan verifikasi checksum, dan jalankan.

Setelah semua file dikonfirmasi ada di Azure Blob, alihkan alur kerja Anda dan pensiunkan penyimpanan OneDrive dengan kecepatan Anda sendiri.

---

**Panduan Terkait:**

- [Migrasi OneDrive ke Google Drive dengan RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [Mount Azure Blob Storage sebagai Drive Lokal dengan RcloneView](https://rcloneview.com/support/blog/mount-azure-blob-storage-local-drive-rcloneview)
- [Sinkronkan Azure Blob ke AWS S3 dengan RcloneView](https://rcloneview.com/support/blog/sync-azure-blob-to-aws-s3-rcloneview)

<CloudSupportGrid />
