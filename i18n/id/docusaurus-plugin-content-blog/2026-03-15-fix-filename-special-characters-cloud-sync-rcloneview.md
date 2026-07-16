---
slug: fix-filename-special-characters-cloud-sync-rcloneview
title: "Perbaiki Error Nama File Terlalu Panjang dan Karakter Khusus dalam Sinkronisasi Cloud — Panduan RcloneView"
authors:
  - tayson
description: "Sinkronisasi cloud gagal karena nama file? Path yang panjang, karakter khusus, dan ketidakcocokan encoding menyebabkan error tersembunyi. Pelajari cara mendiagnosis dan memperbaiki masalah ini di RcloneView."
keywords:
  - filename too long cloud
  - special characters cloud sync
  - cloud sync filename error
  - path too long error
  - rclone filename encoding
  - cloud storage filename limit
  - unicode filename cloud
  - onedrive path length limit
  - google drive filename issues
  - fix cloud sync file errors
tags:
  - RcloneView
  - troubleshooting
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Nama File Terlalu Panjang dan Karakter Khusus dalam Sinkronisasi Cloud — Panduan RcloneView

> Job sinkronisasi Anda gagal pada 47 file. Pesan errornya berbunyi "filename too long" atau "invalid character." File-file tersebut terlihat normal di sisi Anda. Selamat datang di masalah kompatibilitas nama file lintas provider.

Setiap provider cloud memiliki aturan yang berbeda tentang nama file. Sesuatu yang sepenuhnya valid di Google Drive mungkin tidak diizinkan di OneDrive. Path yang berfungsi di S3 mungkin melebihi batas karakter di Dropbox. Saat melakukan sinkronisasi antar provider, ketidakcocokan ini menimbulkan error yang membuat frustrasi dan dapat menghambat seluruh job transfer. Panduan ini membahas masalah yang paling umum terjadi dan cara memperbaikinya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Masalah Nama File yang Umum Terjadi

### Batas panjang path

| Provider | Panjang Path Maksimum |
|----------|----------------|
| OneDrive | 400 karakter |
| SharePoint | 400 karakter |
| Google Drive | 32.768 karakter |
| S3 | 1.024 karakter |
| Dropbox | 260 karakter |
| Local (Windows) | 260 karakter (default) |

Folder yang bertingkat dalam dengan nama panjang dengan cepat melampaui batas OneDrive atau Dropbox.

### Karakter yang tidak diizinkan

| Karakter | Google Drive | OneDrive | S3 | Dropbox |
|-----------|-------------|----------|-----|---------|
| `\` | Diizinkan | Tidak diizinkan | Diizinkan | Tidak diizinkan |
| `?` | Diizinkan | Tidak diizinkan | Diizinkan | Tidak diizinkan |
| `*` | Diizinkan | Tidak diizinkan | Diizinkan | Tidak diizinkan |
| `:` | Diizinkan | Tidak diizinkan | Diizinkan | Tidak diizinkan |
| `<` `>` `\|` | Diizinkan | Tidak diizinkan | Diizinkan | Tidak diizinkan |

File yang dibuat di Google Drive dengan `?` atau `:` dalam namanya akan gagal saat disinkronkan ke OneDrive.

### Spasi dan titik di akhir nama file

OneDrive dan Windows menolak nama file yang diakhiri dengan spasi atau titik. Google Drive mengizinkannya. Hal ini menyebabkan kegagalan sinkronisasi yang tidak terlihat.

### Masalah Unicode dan encoding

Karakter non-ASCII (Jepang, Korea, Mandarin, emoji) berfungsi di sebagian besar provider tetapi dapat menyebabkan masalah pada sistem lama atau provider yang kompatibel dengan S3 tertentu.

## Cara Mendiagnosis

### Periksa riwayat job

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Find filename errors in job history" class="img-large img-center" />

Riwayat job menunjukkan dengan tepat file mana yang gagal dan alasannya. Perhatikan pesan error yang menyebutkan "invalid," "too long," atau "not allowed."

### Identifikasi file yang bermasalah

Terminal RcloneView memungkinkan Anda menjalankan `rclone check` dengan output verbose untuk mendaftar semua file yang akan gagal sebelum Anda mencoba melakukan transfer.

## Solusi

### Ganti nama file bermasalah di sumbernya

Perbaikan paling bersih: ganti nama file untuk menghapus karakter yang tidak diizinkan atau perpendek path sebelum melakukan sinkronisasi.

### Gunakan flag encoding milik rclone

Rclone dapat secara otomatis meng-encode karakter yang tidak diizinkan selama transfer. Konfigurasikan ini di pengaturan remote RcloneView untuk menangani kompatibilitas lintas provider.

### Ratakan struktur folder yang dalam

Jika panjang path menjadi masalah, susun ulang folder yang bertingkat dalam menjadi struktur yang lebih datar.

### Gunakan Folder Comparison untuk menemukan ketidakcocokan

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Find filename mismatches" class="img-large img-center" />

Folder Comparison menyoroti file yang ada di sumber tetapi tidak ada di tujuan — sering kali file inilah yang gagal karena masalah nama file.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Jalankan sinkronisasi uji coba** pada folder kecil terlebih dahulu.
3. **Periksa riwayat job** untuk error terkait nama file.
4. **Perbaiki nama file** di sumbernya atau konfigurasikan encoding.
5. **Jalankan ulang dan verifikasi** dengan Folder Comparison.

Perbaikannya biasanya lebih sederhana daripada yang disarankan oleh pesan error.

---

**Panduan Terkait:**

- [Perbaiki Error Permission Denied](https://rcloneview.com/support/blog/fix-permission-denied-cloud-sync-errors-rcloneview)
- [Batas Rate API Cloud](https://rcloneview.com/support/blog/cloud-api-rate-limits-explained-rcloneview)
- [Mengatasi Error Rclone](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
