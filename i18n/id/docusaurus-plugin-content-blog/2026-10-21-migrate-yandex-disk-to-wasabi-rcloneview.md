---
slug: migrate-yandex-disk-to-wasabi-rcloneview
title: "Migrasi Yandex Disk ke Wasabi — Transfer File dengan RcloneView"
authors:
  - alex
description: "Migrasi Yandex Disk ke penyimpanan objek Wasabi dengan RcloneView: hubungkan kedua remote, jalankan dry run, salin dari cloud ke cloud, dan verifikasi dengan checksum."
keywords:
  - migrasi Yandex Disk ke Wasabi
  - pencadangan Yandex Disk
  - migrasi Wasabi
  - RcloneView Yandex Disk
  - RcloneView Wasabi
  - transfer cloud ke cloud
  - pencadangan S3
  - rclone GUI
  - migrasi penyimpanan objek
  - alat migrasi cloud
tags:
  - RcloneView
  - yandex-disk
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Yandex Disk ke Wasabi — Transfer File dengan RcloneView

> Salin arsip Yandex Disk ke bucket Wasabi tanpa melewati disk lokal, dan pastikan setiap file telah sampai.

Yandex Disk berfungsi sebagai drive pribadi, tetapi arsip jangka panjang dan data proyek bersama sering kali lebih cocok di penyimpanan objek yang kompatibel dengan S3, tempat Anda mengendalikan bucket dan kunci akses. RcloneView menghubungkan Yandex Disk dan Wasabi sebagai remote dalam satu jendela dan menjalankan transfer di antara keduanya, sehingga Anda tidak perlu menampung data berukuran terabyte di disk lokal terlebih dahulu.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Siapkan Kedua Remote

Yandex Disk masuk melalui browser: pilih di **Remote > New Remote**, setujui akses, dan remote akan terhubung. Wasabi dikonfigurasi sebagai penyedia yang kompatibel dengan S3. Buat bucket di konsol Wasabi, buat Access Key dan Secret Key, lalu masukkan ke RcloneView bersama endpoint untuk region bucket Anda.

Wasabi adalah penyedia yang kompatibel dengan S3, sehingga dapat digunakan dengan pengaturan remote yang sama seperti layanan kompatibel S3 lainnya.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote Yandex Disk dan Wasabi di RcloneView" class="img-large img-center" />

## Pilih yang Akan Dipindahkan

Telusuri Yandex Disk di satu panel explorer dan bucket Wasabi Anda di panel lainnya. Pola yang umum adalah satu bucket untuk arsip, dengan folder tingkat atas di bucket yang mencerminkan folder Yandex. Penyimpanan objek tidak memiliki folder sungguhan, jadi jaga konsistensi nama dan hindari jalur yang sangat panjang.

Jika sebagian disk berisi file yang tidak diperlukan, gunakan langkah filter pada job untuk mengecualikannya berdasarkan ekstensi, ukuran maksimum, atau usia file, sehingga Anda hanya memigrasikan yang dibutuhkan.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Menyeret file antara Yandex Disk dan Wasabi di RcloneView" class="img-large img-center" />

## Dry Run dan Transfer

Buat job dengan Yandex Disk sebagai sumber dan bucket Wasabi Anda sebagai tujuan. Pilih Copy agar sumber tetap utuh sampai Anda memverifikasi hasilnya. Jalankan **Dry Run** untuk melihat pratinjau daftar file, lalu mulai job. Di Advanced Settings, Anda dapat mengaktifkan perbandingan **checksum**, yang memeriksa hash beserta ukuran jika penyedia mendukungnya, dan menyesuaikan jumlah transfer file bersamaan jika Yandex melambat.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Pemantauan langsung transfer dari Yandex Disk ke Wasabi" class="img-large img-center" />

## Verifikasi dan Jadwalkan Tindak Lanjut

Setelah job selesai, buka **Compare** pada kedua lokasi untuk menemukan file left-only atau yang tidak cocok, lalu salin file yang tertinggal dari tampilan perbandingan. Jika Yandex Disk masih digunakan selama masa transisi, lisensi PLUS memungkinkan Anda menjadwalkan job dengan pengaturan waktu bergaya crontab sehingga file baru terus masuk ke Wasabi sampai Anda beralih sepenuhnya.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Menjadwalkan job berulang dari Yandex Disk ke Wasabi" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Yandex Disk dan Wasabi dari **Remote > New Remote**.
3. Buat job Copy, jalankan Dry Run, lalu mulai transfer.
4. Verifikasi dengan Folder Compare sebelum menghapus apa pun di sumber.

Setelah arsip berada di bucket yang Anda kendalikan, menghapus salinan lama menjadi keputusan yang disengaja, bukan pertaruhan.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Yandex Disk — Sinkronisasi dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [Kelola Penyimpanan Wasabi — Sinkronisasi dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Migrasi Cloud Terverifikasi Checksum dengan RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
