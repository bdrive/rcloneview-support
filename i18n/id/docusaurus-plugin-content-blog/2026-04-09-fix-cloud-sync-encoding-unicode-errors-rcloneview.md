---
slug: fix-cloud-sync-encoding-unicode-errors-rcloneview
title: "Mengatasi Error Encoding dan Nama File Unicode saat Sinkronisasi Cloud di RcloneView"
authors:
  - tayson
description: "Cara mengatasi error encoding dan nama file Unicode saat sinkronisasi cloud di RcloneView. Selesaikan ketidakcocokan karakter antar penyedia layanan."
keywords:
  - rcloneview
  - unicode filename error
  - cloud sync encoding error
  - special characters cloud sync
  - filename encoding fix
  - rclone encoding
  - cloud file name error
  - unicode cloud transfer
  - character encoding fix
  - cross-platform filename issues
tags:
  - RcloneView
  - troubleshooting
  - cloud-sync
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengatasi Error Encoding dan Nama File Unicode saat Sinkronisasi Cloud di RcloneView

> Setiap penyedia cloud dan sistem operasi menangani nama file secara berbeda. Karakter Unicode, simbol khusus, dan ketidakcocokan encoding dapat menyebabkan kegagalan sinkronisasi — berikut cara mendiagnosis dan memperbaikinya di RcloneView.

File bernama `résumé_2026.pdf` di Google Drive mungkin gagal disinkronkan ke OneDrive for Business. Folder dengan karakter Jepang di NAS lokal mungkin tidak dapat ditransfer ke S3. File dengan nama yang mengandung `#`, `%`, atau `:` mungkin berfungsi di Dropbox tetapi ditolak oleh SharePoint. Masalah encoding dan kompatibilitas karakter ini termasuk yang paling membuat frustrasi dalam sinkronisasi cloud karena secara diam-diam melewati file atau menghasilkan error yang sulit dipahami.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Gejala Umum

- **Error "Invalid filename" atau "Unsupported character"**: Penyedia tujuan menolak nama file yang mengandung karakter yang tidak didukungnya.
- **File dilewati secara diam-diam saat sinkronisasi**: Transfer selesai "dengan sukses" tetapi beberapa file hilang di tujuan. File-file ini biasanya memiliki karakter bermasalah dalam namanya.
- **Nama file rusak di tujuan**: File sampai tetapi namanya mengandung urutan escape `%xx`, karakter pengganti (`?`), atau mojibake (rendering karakter yang salah).
- **Error "Path too long"**: Nama file yang di-encode menjadi lebih panjang daripada batas panjang path tujuan (misalnya, 400 karakter untuk SharePoint, 1024 untuk S3).
- **File duplikat dengan nama serupa**: Dua file yang terlihat identik (misalnya, `café` dengan Unicode composed vs. decomposed) diperlakukan sebagai file yang berbeda.

## Memahami Masalahnya

### Batasan Karakter Penyedia

Setiap penyedia cloud memiliki aturan berbeda tentang karakter nama file yang diizinkan:

| Provider | Restricted Characters |
|---|---|
| OneDrive Business | `" * : < > ? / \ \|` dan `#` `%` dalam konteks tertentu |
| SharePoint | `" * : < > ? / \ \| #` `%` `~` serta spasi di awal/akhir |
| Google Drive | Hanya `/` dan null byte yang dibatasi |
| Dropbox | `/` dan null byte; spasi dan titik di akhir pada Windows |
| AWS S3 | Hampir tidak ada batasan (urutan byte UTF-8 apa pun) |
| Local filesystem (Windows) | `" * : < > ? / \ \|` dan nama yang dicadangkan (CON, PRN, dll.) |

Saat melakukan sinkronisasi dari penyedia yang permisif (Google Drive, S3) ke penyedia yang restriktif (OneDrive Business, SharePoint), file dengan karakter yang dibatasi akan gagal kecuali di-encode.

### Normalisasi Unicode

Unicode menyediakan beberapa cara untuk merepresentasikan karakter yang sama. Misalnya, `é` dapat berupa:
- **NFC (composed)**: Satu code point U+00E9
- **NFD (decomposed)**: Dua code point U+0065 + U+0301

macOS umumnya menggunakan NFD, sedangkan Windows dan Linux menggunakan NFC. Google Drive mempertahankan encoding asli, sedangkan OneDrive menormalkan ke NFC. Ini berarti file yang dibuat di macOS dan diunggah ke Google Drive mungkin tidak cocok dengan file yang sama di OneDrive saat dibandingkan — meskipun nama file terlihat identik bagi manusia.

## Solusi 1: Aktifkan Encoding Karakter Otomatis

RcloneView (melalui rclone) secara otomatis meng-encode karakter yang dibatasi saat melakukan transfer antar penyedia. Secara default, setiap tipe remote memiliki preset encoding yang menangani batasan spesifiknya. Misalnya, saat menyalin ke OneDrive, karakter seperti `"`, `*`, dan `:` secara otomatis diganti dengan padanan Unicode yang terlihat mirip tetapi diizinkan.

Jika Anda tetap mengalami error encoding meskipun begitu, pastikan encoding tidak dinonaktifkan. Pada konfigurasi remote, periksa bahwa parameter `encoding` diatur ke nilai default-nya (jangan diatur ke `None`). Anda dapat melihat dan mengubahnya di Remote Manager RcloneView.

## Solusi 2: Menangani Normalisasi Unicode

Jika Anda melakukan sinkronisasi antara file yang berasal dari macOS dan penyedia cloud berbasis Windows, perbedaan normalisasi Unicode dapat menyebabkan false positive saat perbandingan (file terlihat berbeda padahal sebenarnya sama) atau file duplikat di tujuan.

Gunakan flag `--no-unicode-normalization` di custom flags RcloneView jika Anda ingin mempertahankan urutan byte nama file secara persis. Sebagai alternatif, sebagian besar penyedia cloud menormalkan nama file di sisi server, dan perilaku default rclone sudah menangani hal ini dengan benar untuk kasus-kasus paling umum.

Untuk masalah yang terus berulang, flag `--fix-case` dapat membantu ketika perbedaan sensitivitas huruf besar/kecil antar penyedia menyebabkan masalah (misalnya, S3 bersifat case-sensitive; local filesystem Windows tidak).

## Solusi 3: Ganti Nama File Bermasalah

Untuk sejumlah kecil file dengan karakter bermasalah, solusi paling sederhana adalah mengganti namanya di sumber. Gunakan explorer RcloneView untuk mengidentifikasi file dengan karakter khusus dan ganti namanya secara langsung. Karakter umum yang perlu dihindari di semua penyedia:

- `# % & { } \ < > * ? / $ ! ' " : @ + \`` \| =`
- Spasi atau titik di awal atau akhir nama
- Nama yang dicadangkan Windows (CON, PRN, AUX, NUL, COM1-9, LPT1-9)

## Solusi 4: Gunakan Aturan Filter untuk Melewati File Bermasalah

Jika Anda tidak dapat mengganti nama file (misalnya, file berada di drive bersama yang tidak Anda kendalikan), gunakan aturan filter untuk mengecualikan file dengan pola karakter tertentu dari sinkronisasi. Ini adalah solusi sementara, bukan perbaikan permanen, tetapi mencegah sinkronisasi gagal atau macet pada file bermasalah.

Pada konfigurasi job RcloneView, tambahkan aturan filter seperti:
- `--exclude "**/*#*"` untuk melewati file yang mengandung `#`
- `--exclude "**/*%*"` untuk melewati file yang mengandung `%`

Tinjau log sinkronisasi setelahnya untuk mengidentifikasi file mana yang dilewati dan tangani secara manual jika diperlukan.

## Solusi 5: Periksa Batas Panjang Path

Ketika nama file di-encode, nama tersebut menjadi lebih panjang (setiap karakter yang dibatasi diganti dengan urutan Unicode multi-byte). Jika path sumber sudah mendekati batas tujuan, encoding akan membuatnya melampaui batas tersebut.

SharePoint memiliki batas path 400 karakter. Windows memiliki batas 260 karakter secara default (dapat dikonfigurasi). S3 memiliki batas key 1024 karakter.

Jika Anda mengalami error path-too-long, perpendek nama folder dalam hierarki sumber atau ratakan struktur yang bersarang terlalu dalam. Explorer RcloneView menampilkan path lengkap, sehingga memudahkan identifikasi file yang bersarang dalam.

## Mencegah Masalah di Masa Depan

- **Standarkan nama file sebelum diunggah**: Hindari karakter khusus dalam nama file sejak awal. Gunakan karakter alfanumerik, tanda hubung, garis bawah, dan titik.
- **Uji dengan dry run**: Sebelum melakukan sinkronisasi besar antar penyedia dengan aturan karakter yang berbeda, gunakan mode dry run RcloneView untuk mengidentifikasi potensi masalah encoding tanpa benar-benar mentransfer data.
- **Tinjau log sinkronisasi**: Setelah setiap sinkronisasi, periksa riwayat job untuk peringatan tentang file yang dilewati atau diganti namanya. Tangani hal ini secara proaktif sebelum menumpuk.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Pastikan konfigurasi remote Anda menggunakan pengaturan encoding default.
3. Gunakan dry run untuk mengidentifikasi masalah encoding sebelum melakukan transfer sebenarnya.
4. Ganti nama atau filter file bermasalah sesuai kebutuhan.

Masalah encoding dan Unicode memang halus tetapi umum terjadi saat melakukan sinkronisasi antar penyedia. Encoding otomatis RcloneView menangani sebagian besar kasus, dan langkah-langkah pemecahan masalah di atas menyelesaikan sisanya.

---

**Panduan Terkait:**

- [Menjelajahi dan Mengelola Remote Storage](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Membuat Job Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Riwayat Job](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)

<CloudSupportGrid />
