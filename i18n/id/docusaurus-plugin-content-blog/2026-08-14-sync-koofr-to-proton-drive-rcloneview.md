---
slug: sync-koofr-to-proton-drive-rcloneview
title: "Sinkronisasi Koofr ke Proton Drive — Pencadangan Cloud dengan RcloneView"
authors:
  - alex
description: "Pelajari cara menyinkronkan file dari Koofr ke Proton Drive menggunakan RcloneView, GUI lintas platform untuk menjaga dua cloud tetap tercadangkan secara sinkron."
keywords:
  - sinkronisasi Koofr ke Proton Drive
  - pencadangan Koofr Proton Drive
  - RcloneView Koofr
  - RcloneView Proton Drive
  - sinkronisasi cloud ke cloud
  - pencadangan Koofr
  - sinkronisasi Proton Drive
  - pencadangan cloud terenkripsi
  - alat sinkronisasi multi-cloud
tags:
  - RcloneView
  - koofr
  - proton-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Koofr ke Proton Drive — Pencadangan Cloud dengan RcloneView

> Simpan pencadangan tetap dari file Koofr Anda di Proton Drive tanpa perlu mengunduhnya terlebih dahulu ke disk lokal.

Koofr adalah layanan penyimpanan cloud Eropa yang juga dapat mengagregasi akun lain, sementara Proton Drive menghadirkan penyimpanan terenkripsi end-to-end dari pembuat Proton Mail. Beberapa pengguna menginginkan keduanya — Koofr untuk tampilan terpadunya, Proton Drive untuk jaminan privasinya — dan RcloneView memungkinkan Anda menghubungkan keduanya secara berdampingan dan menyinkronkan langsung antar-cloud tanpa melalui disk lokal.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menambahkan Koofr dan Proton Drive sebagai Remote

Tambahkan Koofr sebagai remote melalui Remote Manager menggunakan kredensial akun, lalu ulangi proses tersebut untuk Proton Drive, yang melakukan autentikasi dengan email Proton, kata sandi, dan kode dua faktor opsional Anda. Kedua remote muncul sebagai tab terpisah di explorer, sehingga Anda dapat membuka Koofr di satu panel dan Proton Drive di panel lainnya untuk perbandingan langsung sebelum menyiapkan transfer apa pun.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan Koofr dan Proton Drive sebagai remote di RcloneView" class="img-large img-center" />

Anda juga dapat menghubungkan S3, Azure, atau Backblaze B2 dengan akses baca/tulis penuh pada lisensi FREE, sehingga sinkronisasi Koofr ke Proton Drive dapat berjalan berdampingan dengan pencadangan penyimpanan objek apa pun yang sudah Anda jalankan — semuanya dari jendela yang sama.

## Menyiapkan Sinkronisasi Satu Arah

Buka wizard Sync dari tab Home dan pilih Koofr sebagai sumber, Proton Drive sebagai tujuan, lalu pilih "Modifying destination only" untuk pencadangan satu arah yang tidak pernah mengubah data asli Koofr Anda. Di Advanced Settings, aktifkan perbandingan checksum sehingga file dicocokkan berdasarkan hash dan ukuran, bukan hanya waktu modifikasi — hal ini penting ketika Koofr dan Proton Drive melaporkan stempel waktu secara berbeda.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Mengonfigurasi sinkronisasi satu arah dari Koofr ke Proton Drive" class="img-large img-center" />

Sebelum menjalankannya secara langsung, gunakan Dry Run untuk melihat persis file mana yang akan disalin, dan terapkan filter — berdasarkan jenis file, ukuran maksimum, atau kedalaman folder — jika Anda hanya ingin mencerminkan folder tertentu, bukan seluruh akun Koofr.

## Menjadwalkan dan Melacak Pencadangan

Simpan konfigurasi sebagai pekerjaan di Job Manager, dan pengguna lisensi PLUS dapat melampirkan jadwal bergaya crontab sehingga sinkronisasi Koofr ke Proton Drive berjalan otomatis dengan interval tetap, dengan pratinjau waktu eksekusi mendatang sebelum menyimpannya.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Menjadwalkan pekerjaan sinkronisasi berulang dari Koofr ke Proton Drive" class="img-large img-center" />

Setiap eksekusi tercatat di Job History lengkap dengan durasi, kecepatan transfer, jumlah file, dan total ukuran yang ditransfer, memberi Anda catatan untuk memastikan pencadangan berjalan lancar atau menemukan eksekusi yang perlu dicoba ulang.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Koofr dan Proton Drive sebagai remote di Remote Manager.
3. Buat pekerjaan sinkronisasi satu arah dari Koofr ke Proton Drive dan jalankan Dry Run terlebih dahulu.
4. Simpan pekerjaan tersebut, dan jika Anda menggunakan PLUS, lampirkan jadwal untuk pencadangan berulang tanpa repot.

Setelah dikonfigurasi, file Koofr Anda tercermin di Proton Drive pada setiap eksekusi, memberi Anda salinan terenkripsi tanpa pernah meninggalkan RcloneView.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan Proton Drive — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Mengelola Penyimpanan Koofr — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Migrasi Proton Drive ke Backblaze B2 — Transfer File dengan RcloneView](https://rcloneview.com/support/blog/migrate-proton-drive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
