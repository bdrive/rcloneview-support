---
slug: manage-arvan-cloud-storage-sync-backup-rcloneview
title: "Mengelola Penyimpanan Arvan Cloud — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - jay
description: "Hubungkan penyimpanan objek Arvan Cloud ke RcloneView untuk penjelajahan file, sinkronisasi, pencadangan, dan transfer lintas cloud yang kompatibel dengan S3."
keywords:
  - Arvan Cloud
  - Arvan Cloud RcloneView
  - penyimpanan kompatibel S3
  - GUI penyimpanan objek
  - sinkronisasi Arvan Cloud
  - pencadangan Arvan Cloud
  - pengelola penyimpanan cloud
  - transfer file Arvan Cloud
  - GUI multi-cloud
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengelola Penyimpanan Arvan Cloud — Sinkronisasi dan Pencadangan File dengan RcloneView

> Jelajahi, sinkronkan, dan cadangkan bucket penyimpanan objek Arvan Cloud bersama semua remote lain yang Anda kelola, semuanya dari satu jendela desktop.

Penyimpanan objek Arvan Cloud menggunakan protokol S3, yang berarti dapat langsung digunakan pada alat apa pun yang dibangun berdasarkan kredensial Access Key + Secret Key + Endpoint — termasuk RcloneView. Alih-alih harus mengelola klien S3 terpisah hanya untuk penyedia yang berfokus pada satu wilayah ini, Anda dapat menambahkannya sebagai remote dan memperlakukannya persis seperti Amazon S3, Wasabi, atau penyimpanan berbasis bucket lainnya dalam alur kerja Anda yang sudah ada.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Arvan Cloud sebagai Remote yang Kompatibel dengan S3

Arvan Cloud diakses melalui backend S3 milik rclone, sehingga proses penyiapannya mengikuti pola input kredensial yang sama seperti layanan kompatibel S3 lainnya yang didukung RcloneView: Access Key, Secret Key, dan endpoint kustom yang mengarah ke layanan penyimpanan objek Arvan. Tidak ada alur login OAuth melalui browser di sini — Anda cukup membuat pasangan kunci dari konsol Arvan Cloud Anda dan menempelkannya langsung ke wizard Remote Baru.

Setelah remote ditambahkan, perilakunya sama seperti panel lain di Explorer: navigasi pohon folder, pratinjau thumbnail untuk bucket yang berisi banyak gambar, dan operasi file klik kanan yang sama (salin, pindah, ganti nama, dapatkan ukuran) seperti yang Anda gunakan pada disk lokal. RcloneView me-mount DAN mensinkronkan lebih dari 90 penyedia dari satu jendela, di Windows, macOS, dan Linux, sehingga Arvan Cloud berdampingan dengan cloud lain Anda alih-alih berada dalam aplikasi terisolasi tersendiri.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan Arvan Cloud sebagai remote baru yang kompatibel dengan S3 di RcloneView" class="img-large img-center" />

Bagi tim yang sudah terstandarisasi dengan perkakas S3, ini berarti kebijakan bucket, prefiks, dan struktur folder dapat langsung diterapkan — tidak ada yang berubah pada model penyimpanan objek hanya karena penyedianya berbeda.

## Mensinkronkan dan Mencadangkan Bucket Arvan Cloud

Setelah remote terhubung, gunakan wizard Sinkronisasi untuk mengonfigurasi tugas satu arah yang mencerminkan folder lokal — atau remote cloud lain — ke dalam bucket Arvan Cloud. Atur jumlah transfer bersamaan dan pemeriksa kesetaraan pada langkah Pengaturan Lanjutan, dan gunakan filter untuk mengecualikan jenis file atau folder yang tidak ingin Anda hitung dalam volume transfer, seperti image `.iso` atau direktori `.git` bertingkat.

Dry Run memungkinkan Anda melihat pratinjau persis file mana yang akan disalin atau dihapus sebelum menjalankan tugas, yang paling penting saat sinkronisasi pertama Anda terhadap bucket yang sudah ada di mana Anda belum yakin apa yang sudah ada di dalamnya.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Mengonfigurasi tugas sinkronisasi ke bucket penyimpanan Arvan Cloud di RcloneView" class="img-large img-center" />

## Menjadwalkan Pencadangan Berkala

Setelah tugas sinkronisasi tervalidasi, simpan di Job Manager, dan dengan lisensi PLUS, tambahkan jadwal bergaya crontab agar pencadangan ke Arvan Cloud berjalan otomatis tanpa perlu Anda picu secara manual. Job History kemudian mencatat durasi, kecepatan transfer, jumlah file, dan status penyelesaian setiap eksekusi, memberi Anda catatan yang dapat diperiksa untuk memverifikasi bahwa pencadangan terjadwal benar-benar selesai.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Menjadwalkan tugas pencadangan berkala ke penyimpanan Arvan Cloud" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buat Access Key dan Secret Key dari konsol penyimpanan objek Arvan Cloud Anda.
3. Di RcloneView, buat remote baru yang kompatibel dengan S3 menggunakan kredensial tersebut dan endpoint Arvan Cloud.
4. Jalankan Dry Run terlebih dahulu, lalu simpan tugas sinkronisasi terjadwal untuk pencadangan berkelanjutan.

Memperlakukan Arvan Cloud sebagai sekadar endpoint S3 lainnya berarti satu alat khusus lebih sedikit yang perlu Anda pelihara dalam tumpukan penyimpanan cloud Anda.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan Wasabi — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Mengelola Penyimpanan Selectel — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-selectel-cloud-sync-backup-rcloneview)
- [Memperbaiki S3 Access Denied — Kesalahan Izin dengan RcloneView](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)

<CloudSupportGrid />
