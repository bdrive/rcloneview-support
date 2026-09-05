---
slug: manage-box-for-business-cloud-sync-backup-rcloneview
title: "Mengelola Box for Business — Sinkronisasi dan Cadangkan File dengan RcloneView"
authors:
  - tayson
description: "Hubungkan Box for Business ke RcloneView untuk menjelajahi, menyinkronkan, mount, dan mencadangkan file cloud perusahaan bersama 90+ penyedia lainnya."
keywords:
  - Box for Business
  - penyimpanan enterprise Box
  - RcloneView
  - sinkronisasi cloud enterprise
  - manajemen penyimpanan cloud
  - perangkat lunak pencadangan cloud
  - box_sub_type enterprise
  - manajemen file multi-cloud
  - penyimpanan cloud bisnis
  - alat perbandingan folder
tags:
  - RcloneView
  - box
  - enterprise
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengelola Box for Business — Sinkronisasi dan Cadangkan File dengan RcloneView

> Perlakukan akun Box for Business organisasi Anda seperti drive lainnya — jelajahi, sinkronkan, mount, dan cadangkan dari satu aplikasi desktop.

Akun Box for Business sering menyimpan file departemen yang dibagikan selama bertahun-tahun, tersebar di puluhan folder tim yang bertingkat, dan staf IT membutuhkan cara yang andal untuk memeriksa, memindahkan, dan melindungi konten tersebut tanpa harus terus-menerus berada di tab browser. RcloneView terhubung ke Box for Business melalui login OAuth yang sama seperti yang digunakan untuk akun Box pribadi, lalu menerapkan flag konfigurasi khusus enterprise agar aplikasi dapat melihat struktur folder lengkap organisasi Anda. Setelah terhubung, akun tersebut berperilaku seperti remote lainnya di alat explorer, sinkronisasi, dan mount RcloneView, dengan fitur sinkronisasi dan perbandingan folder yang sudah tersedia di lisensi FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menyiapkan Remote Box for Business Anda

Buat remote baru di RcloneView dan pilih Box — aplikasi akan membuka browser Anda untuk login OAuth standar, sehingga tidak diperlukan kunci API atau entri token manual. Masuk dengan kredensial Box perusahaan Anda untuk mengotorisasi koneksi.

Akun Box for Business memerlukan satu pengaturan tambahan selain login Box pribadi: `box_sub_type = enterprise`, yang dimasukkan pada konfigurasi lanjutan remote. Pengaturan ini memberi tahu rclone untuk melihat struktur tim bersama organisasi, bukan satu akun pribadi, dan inilah yang membuat folder seluruh perusahaan muncul di panel explorer RcloneView.

<img src="/support/images/en/blog/new-remote.png" alt="Membuat remote Box for Business baru di RcloneView" class="img-large img-center" />

Jika Anda mengelola beberapa akun Box for Business di berbagai departemen, Remote Manager menjaga setiap akun tetap terpisah sehingga Anda dapat mengedit kredensial atau flag enterprise secara independen.

## Membandingkan dan Menyinkronkan Folder Enterprise

Sebelum memigrasikan sebuah departemen dari server file lama atau menggabungkan folder tim yang duplikat, gunakan Folder Compare untuk melihat dengan tepat apa yang berbeda antara folder Box for Business Anda dan lokasi tujuan. Tampilan perbandingan memfilter hasil berdasarkan hanya di kiri, hanya di kanan, identik, dan berbeda, sehingga Anda hanya perlu menyalin yang hilang alih-alih mengunggah ulang semuanya.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Membandingkan dan menyinkronkan folder Box for Business dengan remote cloud lain" class="img-large img-center" />

Untuk perlindungan berkelanjutan, tugas sinkronisasi satu arah menjaga salinan cadangan folder Box for Business penting tetap terkini tanpa menyentuh sumbernya, dan dry run menunjukkan dengan tepat file mana yang akan disalin atau dihapus sebelum ada yang benar-benar berpindah.

## Menjadwalkan Pencadangan dan Memantau Tugas

Job Manager memungkinkan Anda mengonfigurasi tugas sinkronisasi, salin, atau 1:N yang mencerminkan konten Box for Business yang sama ke dua tujuan sekaligus — misalnya, NAS lokal dan bucket yang kompatibel dengan S3, sehingga satu tugas sinkronisasi memenuhi kebutuhan pencadangan di lokasi maupun di luar lokasi. Job History kemudian mencatat waktu mulai, durasi, status, dan jumlah file untuk setiap eksekusi, yang berguna ketika admin perlu memastikan pencadangan malam hari benar-benar selesai.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Menjadwalkan tugas pencadangan Box for Business berulang di RcloneView" class="img-large img-center" />

Pengguna lisensi PLUS dapat mengotomatiskan ini lebih lanjut dengan penjadwalan bergaya crontab, sehingga pencadangan berjalan semalaman tanpa ada yang perlu memicunya secara manual.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote Box baru dan selesaikan login OAuth dengan akun perusahaan Anda.
3. Edit pengaturan lanjutan remote dan atur `box_sub_type = enterprise` untuk membuka folder perusahaan.
4. Konfigurasikan tugas sinkronisasi atau mount untuk mulai mengelola konten Box for Business Anda.

Setelah akun Box enterprise Anda berada berdampingan dengan setiap remote lainnya dalam satu antarmuka, manajemen file sehari-hari dan pencadangan pemulihan bencana tidak lagi menjadi dua alur kerja terpisah.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan Box — Sinkronisasi dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Cara Migrasi dari Box ke SharePoint atau OneDrive — Migrasi Cloud Enterprise dengan RcloneView](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)
- [Mount Penyimpanan Box sebagai Network Drive dengan RcloneView untuk Akses Tim yang Mulus](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
