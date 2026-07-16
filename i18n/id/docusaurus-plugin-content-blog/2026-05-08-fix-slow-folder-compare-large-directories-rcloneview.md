---
slug: fix-slow-folder-compare-large-directories-rcloneview
title: "Perbaiki Folder Compare yang Lambat untuk Direktori Besar — Panduan RcloneView"
authors:
  - jay
description: "Percepat operasi Folder Compare pada direktori besar di RcloneView — mencakup concurrency checker, aturan filter, dan strategi untuk membandingkan jutaan file secara efisien."
keywords:
  - slow folder compare RcloneView
  - fix slow cloud directory comparison
  - RcloneView folder compare large files
  - speed up cloud folder comparison
  - RcloneView compare performance
  - large directory cloud comparison
  - folder compare timeout fix
  - optimize RcloneView compare
tags:
  - folder-comparison
  - troubleshooting
  - tips
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Folder Compare yang Lambat untuk Direktori Besar — Panduan RcloneView

> Membandingkan direktori dengan puluhan ribu file bisa berjalan lambat jika pengaturan Anda belum dioptimalkan. Berikut cara menyetel Folder Compare RcloneView untuk direktori cloud berskala besar.

Folder Compare milik RcloneView adalah salah satu fiturnya yang paling kuat — menunjukkan secara tepat file mana yang berbeda antara dua lokasi, mana yang hanya ada di satu sisi, dan mana yang identik. Namun membandingkan dua bucket S3 dengan 500.000 file, atau direktori NAS dengan arsip cloud, bisa berjalan sangat lambat jika konfigurasinya tidak disetel sesuai beban kerja. Penyesuaian berikut mengubah waktu compare dari hitungan jam menjadi hitungan menit.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Kurangi Cakupan dengan Filter Sebelum Membandingkan

Cara tercepat untuk mempercepat folder compare adalah mengurangi jumlah file yang dibandingkan. Gunakan **Folder Compare with Filter** (lisensi PLUS) untuk mengecualikan jenis file yang tidak perlu Anda verifikasi — misalnya, kecualikan file `.tmp`, `.log`, dan `.DS_Store` yang tidak memengaruhi penilaian integritas data Anda. Anda juga dapat memfilter berdasarkan nama folder untuk hanya membandingkan subdirektori tertentu dari struktur direktori yang besar.

Sintaks filter mengikuti aturan filter rclone: `.tmp` mengecualikan file apa pun dengan ekstensi tersebut, `/.git/*` mengecualikan file dalam direktori `.git` di root, dan `/archive/` melewati seluruh folder tingkat atas. Menerapkan aturan ini sebelum memulai compare secara drastis mengurangi jumlah item yang perlu dienumerasi dan di-hash oleh rclone.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare with filter to reduce scope in RcloneView" class="img-large img-center" />

## Sesuaikan Concurrency Checker untuk Backend yang Lambat

Pengaturan job RcloneView mencakup **Number of equality checkers**, yang secara default bernilai 8. Untuk backend cloud yang lambat (yang memiliki latensi tinggi atau batas laju API yang ketat), nilai default yang tinggi ini dapat menyebabkan checker menumpuk sambil menunggu respons API, yang justru memperlambat prosesnya. Untuk penyedia seperti Google Drive, OneDrive, atau server WebDAV yang lambat, coba kurangi jumlah checker menjadi 2–4.

Sebaliknya, untuk backend yang kompatibel dengan S3 dan cepat seperti Wasabi atau Cloudflare R2, menaikkan jumlah checker menjadi 16 atau lebih dapat secara signifikan mempercepat proses listing bucket besar. Uji berbagai nilai — titik optimalnya bervariasi tergantung penyedia dan kondisi jaringan.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring checker concurrency for folder compare in RcloneView" class="img-large img-center" />

## Gunakan Mode Size-Only untuk Pemeriksaan Awal

Secara default, rclone membandingkan file berdasarkan ukuran dan waktu modifikasi. Untuk pemeriksaan awal yang cepat pada direktori yang sangat besar, Anda dapat menggunakan perbandingan berbasis ukuran saja (size-only) untuk mengidentifikasi ketidaksesuaian yang jelas (file yang ada di satu sisi tetapi tidak di sisi lain, atau file dengan ukuran yang jelas berbeda) tanpa menanggung overhead verifikasi checksum.

Di RcloneView, Anda dapat meneruskan `--size-only` sebagai Global Rclone Flag di **Settings → Embedded Rclone → Global Rclone Flags** untuk sesi compare. Cara ini mengorbankan sedikit akurasi demi kecepatan — gunakan untuk audit awal berskala besar, lalu lanjutkan dengan compare checksum penuh pada file yang mencurigakan.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing folder compare history and timing in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Gunakan **Folder Compare with Filter** (PLUS) untuk mengecualikan jenis file yang tidak relevan sebelum membandingkan.
3. Turunkan concurrency checker menjadi 2–4 untuk backend yang lambat; naikkan untuk penyedia S3 yang cepat.
4. Gunakan mode size-only untuk audit awal yang cepat pada direktori yang sangat besar.

Dengan konfigurasi yang tepat, Folder Compare dapat menangani jutaan file di berbagai penyedia cloud tanpa penundaan yang tidak perlu.

---

**Panduan Terkait:**

- [Panduan Perbandingan Folder — Deteksi Perbedaan dengan RcloneView](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Aturan Filter dan Sinkronisasi Selektif dengan RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Periksa dan Verifikasi Integritas File Cloud dengan RcloneView](https://rcloneview.com/support/blog/check-verify-cloud-file-integrity-rcloneview)

<CloudSupportGrid />
