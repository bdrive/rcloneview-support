---
slug: fix-google-drive-storage-quota-exceeded-rcloneview
title: "Mengatasi Kuota Penyimpanan Google Drive Penuh — Pindahkan File dengan RcloneView"
authors:
  - tayson
description: "Atasi kuota penyimpanan Google Drive yang penuh — pindahkan file ke cloud lain, bebaskan ruang, dan kelola penyimpanan Drive Anda dengan RcloneView."
keywords:
  - Google Drive storage full
  - quota exceeded fix
  - Google Drive cleanup
  - move files from Google Drive
  - free up Google Drive space
  - RcloneView storage management
  - cloud storage overflow
  - Drive quota solution
  - Google Drive archive
  - Google Drive space recovery
tags:
  - google-drive
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengatasi Kuota Penyimpanan Google Drive Penuh — Pindahkan File dengan RcloneView

> Kuota Google Drive yang penuh menghambat unggahan dan mengganggu alur kerja — RcloneView mengidentifikasi konsumen ruang terbesar dan memindahkannya ke penyimpanan arsip yang hemat biaya, membebaskan kuota Anda dengan segera.

Ketika Google Drive menampilkan "Storage is full" atau unggahan mulai gagal dengan error kuota, Anda dihadapkan pada pilihan yang sudah biasa: membayar untuk penyimpanan tambahan, atau memindahkan konten keluar. RcloneView menawarkan jalan ketiga — secara efisien mengidentifikasi file besar atau usang dan memindahkannya dari Google Drive ke tingkat penyimpanan yang lebih murah, membebaskan kuota tanpa kehilangan data.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengidentifikasi Apa yang Menghabiskan Kuota Anda

Hubungkan Google Drive Anda di RcloneView (**Remote tab > New Remote > Google Drive**, login OAuth). Setelah terhubung, klik kanan folder mana pun di explorer dan pilih **Get Size** untuk melihat berapa banyak penyimpanan yang digunakannya. Telusuri folder tingkat atas Anda secara sistematis — ekspor video, file proyek tidak terkompresi, dan dataset duplikat adalah penyebab paling umum pada akun Drive yang penuh.

<img src="/support/images/en/blog/new-remote.png" alt="Browsing Google Drive in RcloneView to identify storage usage" class="img-large img-center" />

Fitur **Folder Compare** RcloneView membantu mengidentifikasi konten duplikat: bandingkan dua folder dengan nama serupa untuk menemukan file yang ada di kedua lokasi (konten sama yang dicadangkan dua kali), sehingga Anda dapat menghapus salah satu salinan dengan aman. Filter "same files" pada hasil perbandingan menunjukkan kecocokan persis antara dua lokasi.

## Memindahkan File ke Penyimpanan Arsip

Setelah Anda mengidentifikasi folder terbesar yang perlu dibersihkan, konfigurasikan remote arsip di RcloneView — **Amazon S3**, **Backblaze B2**, atau **Wasabi** cocok digunakan sebagai tingkat penyimpanan dingin yang hemat biaya. Buat job **Move** di **Job Manager**: sumbernya adalah folder Google Drive yang berisi file besar atau lama, tujuannya adalah bucket arsip Anda.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Moving Google Drive files to Backblaze B2 archive in RcloneView" class="img-large img-center" />

Operasi Move menyalin file ke tujuan lalu menghapusnya dari sumber — membebaskan kuota Drive Anda dengan segera sambil tetap menjaga data. Seorang editor video dengan 200 GB proyek yang sudah selesai di Drive dan tidak lagi membutuhkan akses kolaboratif dapat membebaskan seluruh kuotanya dalam satu job Move ke B2. Tab **Transferring** RcloneView menampilkan progres secara real time.

## Mencegah Masalah Kuota di Masa Depan

Setelah mengatasi kelebihan kuota yang mendesak, atur kebijakan pengarsipan berkala menggunakan fitur penjadwalan RcloneView (lisensi PLUS). Job Sync yang dikonfigurasi dengan filter **Max File Age** (misalnya, file yang lebih lama dari 180 hari) secara otomatis mengarsipkan konten lama dari Drive ke penyimpanan dingin dengan jadwal bulanan — menjaga Drive tetap sebagai tingkat kerja aktif, bukan tempat penumpukan data.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Drive archiving in RcloneView" class="img-large img-center" />

Tab **Job History** melacak setiap proses pengarsipan, memberi Anda catatan yang jelas tentang apa yang dipindahkan keluar dari Drive dan kapan — berguna untuk pengambilan kembali saat Anda perlu mengakses file arsip lama.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Hubungkan Google Drive Anda di RcloneView dan gunakan **Get Size** untuk mengidentifikasi folder terbesar.
3. Tambahkan penyimpanan arsip Anda (S3, B2, Wasabi) sebagai remote kedua.
4. Buat job **Move** di Job Manager dari folder-folder besar ke remote arsip Anda.

Google Drive yang penuh adalah masalah pengelolaan, bukan batas penyimpanan — RcloneView memberi Anda alat untuk mengarahkan konten ke tingkat yang tepat dan menjaga Drive tetap berfungsi.

---

**Panduan Terkait:**

- [Mengatasi Error Kuota dan Rate Limit API Google Drive dengan RcloneView](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [Mengelola Penyimpanan Cloud Google Drive — Sinkronisasi dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Mengelola Penyimpanan Cloud Backblaze B2 — Sinkronisasi dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
