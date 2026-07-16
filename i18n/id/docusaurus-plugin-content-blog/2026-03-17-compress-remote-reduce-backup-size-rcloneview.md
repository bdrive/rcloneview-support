---
slug: compress-remote-reduce-backup-size-rcloneview
title: "Compress Remote — Kurangi Ukuran Pencadangan Cloud Secara Otomatis di RcloneView"
authors:
  - tayson
description: "RcloneView mendukung compress remote dari rclone, yang secara otomatis mengompresi file sebelum diunggah ke penyimpanan cloud. Hemat biaya penyimpanan dan bandwidth pada setiap pencadangan."
keywords:
  - rclone compress remote
  - kompresi pencadangan cloud
  - kurangi ukuran penyimpanan cloud
  - unggahan cloud terkompresi
  - rcloneview compress
  - hemat ruang penyimpanan cloud
  - kompres sebelum unggah
  - kompresi pencadangan cloud
  - kurangi ukuran pencadangan
  - kompresi rclone
tags:
  - RcloneView
  - feature
  - cost-optimization
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Compress Remote — Kurangi Ukuran Pencadangan Cloud Secara Otomatis di RcloneView

> Pencadangan 500 GB Anda bisa menjadi 300 GB dengan kompresi. Compress remote membungkus penyedia cloud mana pun dengan kompresi gzip otomatis — pencadangan lebih kecil, biaya lebih rendah, data tetap sama.

Biaya penyimpanan cloud berskala sesuai ukuran. Jika Anda dapat mengurangi ukuran pencadangan sebesar 30-60%, Anda menghemat sebesar itu pada tagihan penyimpanan setiap bulan. Compress remote dari rclone menyediakan kompresi transparan — file dikompresi sebelum diunggah dan didekompresi saat diunduh, tanpa langkah manual yang diperlukan. RcloneView memungkinkan Anda mengatur ini secara visual dan mengelola pencadangan terkompresi berdampingan dengan akun cloud Anda yang lain.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cara Kerja Compress Remote

Compress remote membungkus remote lain (Google Drive, S3, B2, dll.) dan secara otomatis:

1. **Mengompresi file** menggunakan gzip sebelum diunggah
2. **Mendekompresi file** secara transparan saat diunduh
3. **Melewati format yang sudah terkompresi** (jpg, mp4, zip, dll.) untuk menghindari pemborosan CPU

Anda berinteraksi dengan compress remote seperti remote lainnya — menelusuri, menyalin, sinkronisasi — tetapi file di tujuan disimpan dalam kondisi terkompresi.

## Penghematan Kompresi Berdasarkan Jenis File

| Jenis File | Kompresi Umum | Contoh |
|-----------|-------------------|---------|
| File teks, CSV, log | 60-90% lebih kecil | 100 MB → 10-40 MB |
| Dokumen Office (docx, xlsx) | 5-15% lebih kecil | Sudah agak terkompresi |
| Dump database | 50-80% lebih kecil | 1 GB → 200-500 MB |
| Kode sumber | 60-80% lebih kecil | 500 MB → 100-200 MB |
| Foto (JPG, PNG) | ~0% | Sudah terkompresi |
| Video (MP4, MKV) | ~0% | Sudah terkompresi |
| Arsip ZIP/RAR | ~0% | Sudah terkompresi |

Paling cocok untuk: data yang banyak teks, log, pencadangan database, kode sumber, format data yang tidak terkompresi.
Tidak berguna untuk: foto, video, dan arsip yang sudah terkompresi.

## Menyiapkan Compress Remote

<img src="/support/images/en/blog/new-remote.png" alt="Create compress remote" class="img-large img-center" />

Buat compress remote yang membungkus remote penyimpanan Anda yang sudah ada. Kemudian gunakan compress remote sebagai tujuan pencadangan Anda, bukan remote mentah.

## Kasus Penggunaan

### Kompres pencadangan log

Log server terkompresi dengan sangat baik (80-90%). Arsip log 50 GB menjadi 5-10 GB di penyimpanan cloud.

### Kurangi biaya pencadangan database

Dump database harian sangat mudah dikompresi. Kompres sebelum diunggah untuk mengurangi tagihan penyimpanan cloud.

### Arsip kode sumber

Proyek pengembangan dengan ribuan file teks mendapat manfaat signifikan dari kompresi.

### Jadwalkan pencadangan terkompresi

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule compressed backup" class="img-large img-center" />

## Catatan Penting

- **Beban CPU**: kompresi menggunakan CPU saat mengunggah dan mengunduh. CPU modern menangani ini dengan mudah.
- **Tidak semua file terkompresi**: format yang sudah terkompresi (JPG, MP4, ZIP) diteruskan tanpa dikompresi.
- **Akses transparan**: file terlihat normal saat menelusuri melalui compress remote — dekompresi terjadi secara otomatis.
- **Dikombinasikan dengan enkripsi**: Anda dapat menumpuk compress + crypt remote untuk pencadangan yang terkompresi DAN terenkripsi.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan penyimpanan cloud Anda** sebagai remote biasa.
3. **Buat compress remote** yang membungkusnya.
4. **Gunakan compress remote** sebagai tujuan pencadangan Anda.
5. **Nikmati pencadangan yang lebih kecil** dan biaya yang lebih rendah.

Pencadangan lebih kecil, tagihan lebih rendah, data tetap sama.

---

**Panduan Terkait:**

- [Biaya Tersembunyi Penyimpanan Cloud](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)
- [Enkripsi Pencadangan Cloud](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [Virtual Remote: Combine, Union, Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)

<CloudSupportGrid />
