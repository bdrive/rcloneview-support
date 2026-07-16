---
slug: rclone-filter-rules-include-exclude-explained-rcloneview
title: "Aturan Filter Rclone Dijelaskan: Pola Include dan Exclude untuk Sinkronisasi yang Lebih Cerdas"
authors:
  - tayson
description: "Kuasai aturan filter rclone untuk menyinkronkan hanya apa yang Anda butuhkan. Pelajari pola include, exclude, filter-from, dan min/max size/age — dengan contoh praktis untuk RcloneView."
keywords:
  - rclone filter rules
  - rclone include exclude
  - rclone exclude folder
  - rclone filter from file
  - rclone sync specific files
  - rclone ignore files
  - rclone exclude pattern
  - rclone filter examples
  - rclone min size max size
  - rclone selective sync
tags:
  - rclone
  - filters
  - sync
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Aturan Filter Rclone Dijelaskan: Pola Include dan Exclude untuk Sinkronisasi yang Lebih Cerdas

> Menyinkronkan semuanya itu boros. Menyinkronkan hal yang salah itu berbahaya. Aturan filter rclone memungkinkan Anda mengontrol dengan presisi apa yang ditransfer — tetapi sintaksnya bisa membingungkan. Panduan ini menjelaskan semuanya dengan contoh praktis.

Saat Anda menyinkronkan atau menyalin file antar cloud, Anda jarang membutuhkan semuanya. Mungkin Anda hanya butuh file `.pdf`, atau semuanya kecuali file `.tmp`, atau file yang diubah dalam 7 hari terakhir, atau file di bawah 100 MB. Sistem filter rclone menangani semua ini — dan RcloneView memungkinkan Anda mengonfigurasi filter ini secara visual di pengaturan job Anda.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cara Kerja Filter Rclone

Rclone memproses aturan filter **secara berurutan, dari atas ke bawah**. Untuk setiap file, rclone memeriksa aturan satu per satu:

1. Jika sebuah aturan cocok, file tersebut disertakan atau dikecualikan (tergantung aturannya).
2. Jika tidak ada aturan yang cocok, file tersebut **disertakan secara default**.

Perilaku "kecocokan pertama menang" ini penting untuk dipahami. Urutan sangat berpengaruh.

## Pola Dasar

### Mengecualikan file atau folder tertentu

```
--exclude "*.tmp"
--exclude "node_modules/**"
--exclude ".DS_Store"
```

Pola ini mengecualikan:
- Semua file `.tmp` di mana pun dalam struktur folder.
- Seluruh folder `node_modules` beserta isinya.
- Semua file `.DS_Store` (metadata macOS).

### Menyertakan hanya file tertentu

```
--include "*.pdf"
--include "*.docx"
```

Saat Anda menggunakan `--include`, rclone **secara otomatis mengecualikan semua yang lain**. Jadi `--include "*.pdf"` berarti "hanya sinkronkan PDF, tidak ada yang lain."

### Menggabungkan include dan exclude

```
--include "*.jpg"
--include "*.png"
--exclude "*"
```

Ini secara eksplisit hanya menyertakan file JPG dan PNG. `--exclude "*"` di akhir menangkap semua yang lain.

## Flag --filter

Flag `--filter` memberikan Anda include dan exclude dalam satu aturan:

```
--filter "+ *.pdf"
--filter "+ *.docx"
--filter "- *"
```

Awalan `+` berarti include, `-` berarti exclude. Ini setara dengan flag `--include` dan `--exclude` terpisah tetapi lebih ringkas.

## File Filter-From

Untuk kumpulan aturan yang kompleks, letakkan filter Anda dalam sebuah file:

```
--filter-from /path/to/filters.txt
```

**filters.txt:**
```
# Include documents
+ *.pdf
+ *.docx
+ *.xlsx

# Include images
+ *.jpg
+ *.png

# Exclude everything else
- *
```

Baris yang dimulai dengan `#` adalah komentar. Ini adalah pendekatan yang direkomendasikan untuk job sinkronisasi apa pun dengan lebih dari 2-3 aturan.

## Filter Direktori

### Mengecualikan direktori tertentu

```
--exclude "backup/**"
```

`**` berarti "direktori ini dan semua yang ada di dalamnya."

### Menyertakan hanya direktori tertentu

```
--include "/projects/**"
--exclude "*"
```

Ini menyinkronkan hanya folder `projects` di level root.

### Mengecualikan direktori berdasarkan pola

```
--exclude ".git/**"
--exclude "__pycache__/**"
--exclude "node_modules/**"
```

Umum digunakan oleh developer yang menyinkronkan repositori kode — melewati folder version control dan dependency.

## Filter Ukuran

### Ukuran file minimum

```
--min-size 1M
```

Lewati file yang lebih kecil dari 1 MB. Berguna untuk mengabaikan thumbnail atau file cache kecil.

### Ukuran file maksimum

```
--max-size 100M
```

Lewati file yang lebih besar dari 100 MB. Berguna saat Anda menginginkan dokumen tetapi bukan file video.

### Satuan ukuran

- `k` atau `K` — Kilobyte
- `M` — Megabyte
- `G` — Gigabyte

Contoh: `--min-size 500k --max-size 2G` menyinkronkan file antara 500 KB dan 2 GB.

## Filter Usia

### Hanya file terbaru

```
--max-age 7d
```

Sinkronkan hanya file yang diubah dalam 7 hari terakhir. Ideal untuk pencadangan bertahap proyek yang aktif.

### Hanya file yang lebih lama

```
--min-age 30d
```

Sinkronkan hanya file yang tidak berubah dalam 30 hari. Berguna untuk mengarsipkan data yang sudah usang.

### Satuan usia

- `ms` — Milidetik
- `s` — Detik
- `m` — Menit
- `h` — Jam
- `d` — Hari
- `w` — Minggu
- `M` — Bulan
- `y` — Tahun

## Contoh Praktis

### Contoh 1: Mencadangkan hanya dokumen

Sinkronkan PDF, dokumen Word, dan spreadsheet dari Google Drive ke Backblaze B2:

```
--include "*.pdf"
--include "*.docx"
--include "*.xlsx"
--include "*.pptx"
--exclude "*"
```

### Contoh 2: Melewati file video besar

Sinkronkan semuanya kecuali file video di atas 500 MB:

```
--exclude "*.mp4"
--exclude "*.mov"
--exclude "*.avi"
--exclude "*.mkv"
```

Atau gunakan filter ukuran: `--max-size 500M`

### Contoh 3: Sinkronisasi proyek developer

Sinkronkan proyek kode tanpa dependency dan build artifact:

```
--exclude "node_modules/**"
--exclude ".git/**"
--exclude "__pycache__/**"
--exclude "dist/**"
--exclude "build/**"
--exclude "*.pyc"
```

### Contoh 4: Mengarsipkan file yang lebih tua dari 90 hari

Pindahkan file lama dari Google Drive ke S3 Glacier:

```
--min-age 90d
```

### Contoh 5: Pencadangan foto (lewati RAW, simpan JPEG)

```
--include "*.jpg"
--include "*.jpeg"
--include "*.png"
--include "*.heic"
--exclude "*.cr2"
--exclude "*.nef"
--exclude "*.arw"
--exclude "*"
```

## Menggunakan Filter di RcloneView

Saat membuat job sync atau copy di RcloneView, Anda dapat menambahkan aturan filter di konfigurasi job. Aturan ini diteruskan langsung ke rclone:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configure filter rules in RcloneView jobs" class="img-large img-center" />

### Dry run untuk verifikasi

Selalu gunakan dry run terlebih dahulu saat menguji aturan filter baru. Ini menunjukkan dengan tepat file mana yang akan disertakan atau dikecualikan tanpa benar-benar mentransfer apa pun.

### Perbandingan Folder dengan filter

Gunakan [Perbandingan Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) untuk melihat kondisi sumber dan tujuan Anda. Dikombinasikan dengan filter, ini membantu Anda memahami dengan tepat apa yang akan disinkronkan.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison to verify filter results" class="img-large img-center" />

## Kesalahan Umum

### Lupa menambahkan `**` di akhir untuk direktori

```
# Wrong — only excludes a FILE named "logs"
--exclude "logs"

# Right — excludes the logs DIRECTORY and everything in it
--exclude "logs/**"
```

### Menyertakan tanpa mengecualikan sisanya

```
# This includes PDFs but doesn't exclude anything else
--include "*.pdf"

# This works — include already implies "exclude everything else"
# But only when using --include alone
```

### Urutan sangat berpengaruh

```
# This excludes everything, then tries to include (too late!)
--exclude "*"
--include "*.pdf"

# This works — include first, then exclude the rest
--include "*.pdf"
--exclude "*"
```

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Buat job** dengan aturan filter di konfigurasi.
3. **Dry run terlebih dahulu** untuk memverifikasi filter Anda menangkap file yang tepat.
4. **Jalankan job** setelah Anda yakin.
5. **Gunakan file filter-from** untuk kumpulan aturan yang kompleks dan dapat digunakan kembali.

Filter mengubah "sinkronkan semuanya" yang kasar menjadi "sinkronkan persis apa yang saya butuhkan" yang presisi. Kuasai sekali, gunakan di mana saja.

---

**Panduan Terkait:**

- [Membuat Job Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Membandingkan Isi Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Penjadwalan Job](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Mengatur Batas Bandwidth](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
