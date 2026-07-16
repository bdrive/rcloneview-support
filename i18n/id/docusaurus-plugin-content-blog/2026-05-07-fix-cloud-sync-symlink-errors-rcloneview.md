---
slug: fix-cloud-sync-symlink-errors-rcloneview
title: "Perbaiki Error Symlink pada Sinkronisasi Cloud — Atasi Masalah Transfer Link dengan RcloneView"
authors:
  - tayson
description: "Pelajari cara memperbaiki error symlink saat sinkronisasi cloud di RcloneView — pahami cara rclone menangani symbolic link dan konfigurasikan pengaturan yang tepat untuk menghindari kegagalan."
keywords:
  - error symlink sinkronisasi cloud
  - symlink rclone
  - troubleshooting RcloneView
  - flag copy-links
  - error sinkronisasi cloud
  - transfer symbolic link
  - flag rclone
  - error sinkronisasi file
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Symlink pada Sinkronisasi Cloud — Atasi Masalah Transfer Link dengan RcloneView

> Symbolic link dapat diam-diam merusak job sinkronisasi cloud — berikut cara memahami perilaku symlink pada rclone dan mengonfigurasi RcloneView agar menanganinya dengan benar.

Jika job sinkronisasi cloud Anda gagal dengan error yang tidak terduga atau ada file yang seolah hilang, symbolic link bisa jadi penyebabnya. Rclone — mesin yang menggerakkan RcloneView — memiliki perilaku default tertentu untuk symlink yang sering membuat banyak pengguna terkejut. Memahami perilaku tersebut dan mengetahui pengaturan mana yang perlu disesuaikan di RcloneView akan menyelesaikan sebagian besar masalah sinkronisasi terkait symlink dengan cepat.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Bagaimana Rclone Menangani Symlink secara Default

Secara default, rclone mengikuti symbolic link dan mentransfer file atau direktori yang menjadi tujuan symlink tersebut — bukan symlink itu sendiri. Artinya, jika Anda memiliki symlink yang menunjuk ke file besar di lokasi lain pada sistem Anda, rclone akan menyalin konten file yang sebenarnya ke tujuan cloud. Dalam kebanyakan kasus, ini adalah perilaku yang diinginkan, tetapi dapat menimbulkan kebingungan ketika target symlink tidak ada, berada di luar root sinkronisasi, atau menciptakan referensi melingkar (circular reference).

Ketika target symlink hilang atau tidak dapat diakses, rclone akan mencatat error dan melewati symlink tersebut. File yang dilewati ini bisa mudah terlewat dalam log transfer yang panjang. Panel **Job History** milik RcloneView mencatat error-error ini, jadi selalu periksa riwayat setelah job selesai untuk memastikan tidak ada file yang terlewat secara diam-diam.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Checking job history for symlink errors in RcloneView" class="img-large img-center" />

## Menggunakan Flag --copy-links di RcloneView

Jika Anda ingin rclone mengikuti symlink dan menyalin konten target (bahkan jika target tersebut berada di luar root sinkronisasi), Anda dapat menambahkan flag `--copy-links` melalui pengaturan **Global Rclone Flags** di RcloneView. Buka preferensi RcloneView, cari kolom **Global Rclone Flags**, lalu tambahkan `--copy-links`. Ini akan menginstruksikan rclone untuk memperlakukan symlink sebagai file biasa dengan menyalin konten yang mendasarinya.

Gunakan `--copy-links` dengan hati-hati pada sistem di mana symlink menunjuk ke direktori yang sangat besar, karena dapat meningkatkan ukuran transfer secara drastis. Perlu diperhatikan juga bahwa beberapa penyedia cloud memiliki batasan panjang nama file atau path yang dapat menyebabkan masalah jika target symlink memiliki path yang panjang.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring global rclone flags in RcloneView settings" class="img-large img-center" />

## Mengecualikan Symlink dengan Filter

Alternatif yang lebih aman untuk banyak alur kerja adalah dengan mengecualikan symlink sepenuhnya dari sinkronisasi. Dalam konfigurasi job RcloneView, Anda dapat menambahkan aturan filter untuk melewati symbolic link. Gunakan opsi `--exclude` dengan pola yang cocok dengan nama symlink Anda, atau gunakan `--links` untuk menyalin symlink sebagai file teks (menyimpan path target link, bukan kontennya). Pendekatan ini membuat sinkronisasi Anda tetap dapat diprediksi tanpa risiko transfer yang tiba-tiba menjadi sangat besar.

Untuk proyek seperti repositori pengembangan software di mana symlink sering ditemukan, mengombinasikan aturan filter dengan dry run adalah praktik terbaik sebelum menjalankan sinkronisasi secara langsung. Mode dry run pada RcloneView menunjukkan secara persis file mana yang akan ditransfer, dilewati, atau mengalami error — memberi Anda keyakinan sebelum melakukan sinkronisasi penuh.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using filters and dry run to handle symlinks in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Setelah sinkronisasi gagal, buka **Job History** untuk mengidentifikasi pesan error terkait symlink.
3. Buka preferensi RcloneView dan tambahkan `--copy-links` ke **Global Rclone Flags** jika Anda ingin konten symlink ditransfer.
4. Sebagai alternatif, tambahkan aturan filter di **Job Wizard** untuk mengecualikan symlink dari cakupan sinkronisasi.
5. Jalankan **dry run** untuk memverifikasi perilaku sebelum menjalankan sinkronisasi secara langsung.

Menangani symlink dengan benar adalah salah satu detail konfigurasi kecil yang memberikan perbedaan besar pada keandalan sinkronisasi — dan RcloneView memberi Anda semua alat untuk melakukannya dengan tepat.

---

**Panduan Terkait:**

- [Flag Rclone Kustom dan Opsi Lanjutan di RcloneView](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)
- [Aturan Filter untuk Sinkronisasi Selektif di RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Mengatasi Error Rclone dengan RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
