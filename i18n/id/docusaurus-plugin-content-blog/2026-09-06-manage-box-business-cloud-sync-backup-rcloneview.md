---
slug: manage-box-business-cloud-sync-backup-rcloneview
title: "Mengelola Box for Business — Sinkronisasi dan Pencadangan Cloud Perusahaan dengan RcloneView"
authors:
  - casey
description: "Konfigurasikan Box for Business di RcloneView untuk alur kerja sinkronisasi, pencadangan, dan mount perusahaan di seluruh akun Box yang dikelola admin Anda."
keywords:
  - Box for Business
  - mengelola Box for Business
  - sinkronisasi cloud perusahaan Box
  - pencadangan bisnis Box
  - RcloneView Box
  - box_sub_type enterprise
  - sinkronisasi penyimpanan cloud perusahaan
  - alat pencadangan akun Box
tags:
  - RcloneView
  - box
  - business
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengelola Box for Business — Sinkronisasi dan Pencadangan Cloud Perusahaan dengan RcloneView

> Akun Box for Business memerlukan satu pengaturan tambahan sebelum RcloneView dapat melihat semua yang telah disediakan oleh admin Anda — berikut cara mengonfigurasinya dengan benar.

Remote Box standar berfungsi baik untuk akun pribadi, tetapi akun Box for Business (perusahaan) menyusun folder dan izin secara berbeda di baliknya. Jika Anda menghubungkannya dengan cara yang sama seperti akun Box pribadi, sebagian konten yang dikelola perusahaan bisa saja hilang dari explorer. RcloneView mengatasi hal ini dengan pengaturan khusus `box_sub_type = enterprise` pada remote, sehingga folder bersama tim Anda, konten yang dimiliki bersama, dan penyimpanan yang disediakan admin semuanya muncul dengan benar.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menyiapkan Remote Box for Business

Mulailah dengan membuat remote baru dan memilih Box sebagai penyedia — login OAuth berbasis browser bekerja sama seperti pada akun pribadi, jadi tidak ada alur kredensial terpisah yang perlu dipelajari. Perbedaannya muncul setelah autentikasi: buka pengaturan lanjutan remote tersebut dan atur `box_sub_type = enterprise`. Ini memberi tahu rclone (mesin yang menjalankan RcloneView) untuk mengurai struktur folder bercakupan perusahaan alih-alih default akun pribadi.

<img src="/support/images/en/blog/new-remote.png" alt="Membuat remote Box for Business baru di RcloneView" class="img-large img-center" />

Setelah dikonfigurasi, telusuri remote tersebut dengan cara yang sama seperti remote lainnya — navigasi pohon folder, pratinjau thumbnail, dan operasi file (salin, potong, ganti nama, hapus) semuanya berfungsi identik baik akun yang mendasarinya bersifat pribadi maupun tingkat bisnis.

## Menyinkronkan dan Mencadangkan Konten Box Perusahaan

Skenario umum bagi tim IT adalah mencadangkan akun Box for Business ke lokasi sekunder — NAS on-premises, cloud lain, atau penyimpanan objek yang kompatibel dengan S3 untuk pengarsipan dingin. Bangun pekerjaan sinkronisasi dengan Box for Business sebagai sumber, atur arah ke satu arah "hanya memodifikasi tujuan" untuk pencadangan yang aman dan non-destruktif, lalu jalankan dry run terlebih dahulu untuk melihat pratinjau persis apa yang akan disalin.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Mengonfigurasi pekerjaan sinkronisasi pencadangan Box for Business di RcloneView" class="img-large img-center" />

Bagi departemen yang mengelola drive bersama di puluhan folder Box, memfilter berdasarkan usia file maksimum atau filter dokumen yang telah ditentukan membuat pekerjaan malam hari hanya berfokus pada apa yang berubah, alih-alih memindai ulang seluruh akun setiap kali dijalankan. RcloneView juga melakukan sinkronisasi dan membandingkan folder — dengan lisensi FREE — sehingga alur kerja pencadangan perusahaan tidak memerlukan peningkatan untuk memulai.

## Menjadwalkan Pencadangan Perusahaan Berulang

Ekspor manual tidak dapat diskalakan untuk akun perusahaan dengan banyak kontributor yang menambahkan file setiap hari. Job Manager memungkinkan Anda menyimpan sinkronisasi Box for Business sebagai pekerjaan bernama, lalu melampirkan jadwal bergaya crontab (fitur lisensi PLUS) sehingga berjalan secara otomatis semalaman atau pada interval apa pun yang disyaratkan oleh kebijakan kepatuhan Anda.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Menjadwalkan pekerjaan sinkronisasi Box for Business yang berulang" class="img-large img-center" />

Setiap eksekusi tercatat di Job History lengkap dengan waktu mulai, durasi, kecepatan transfer, dan jumlah file — bukti yang berguna ketika audit menanyakan bagaimana pencadangan diverifikasi.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buat remote Box baru dan selesaikan login OAuth browser dengan kredensial Box for Business Anda.
3. Buka pengaturan lanjutan remote tersebut dan atur `box_sub_type = enterprise` untuk membuka folder bercakupan perusahaan.
4. Bangun pekerjaan sinkronisasi atau pencadangan yang memasangkan Box for Business dengan remote lain yang didukung atau penyimpanan lokal.

Menetapkan satu pengaturan ini dengan benar sejak awal menghemat berjam-jam pemecahan masalah "ke mana perginya file saya" di kemudian hari.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan Box — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Mengelola Dropbox for Business — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-dropbox-business-cloud-sync-backup-rcloneview)
- [Migrasi Box ke OneDrive — Transfer File dengan RcloneView](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)

<CloudSupportGrid />
