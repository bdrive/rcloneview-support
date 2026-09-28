---
slug: sync-seafile-to-dropbox-rcloneview
title: "Sinkronkan Seafile ke Dropbox — Pencadangan Cloud dengan RcloneView"
authors:
  - casey
description: "Cadangkan server Seafile self-hosted ke Dropbox dengan RcloneView, menggunakan pekerjaan sinkronisasi terjadwal dan pratinjau Dry Run untuk transfer yang aman dan terverifikasi."
keywords:
  - sinkronkan Seafile ke Dropbox
  - pencadangan Seafile Dropbox
  - pencadangan cloud self-hosted
  - RcloneView Seafile
  - sinkronisasi cloud ke cloud
  - pencadangan offsite Seafile
  - alat pencadangan Dropbox
  - pemulihan bencana Seafile
  - migrasi self-hosted ke Dropbox
tags:
  - RcloneView
  - seafile
  - dropbox
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronkan Seafile ke Dropbox — Pencadangan Cloud dengan RcloneView

> Berikan server Seafile self-hosted salinan offsite di Dropbox tanpa perlu menulis skrip apa pun secara manual.

Seafile populer justru karena menjaga data tetap di bawah kendali organisasi sendiri, tetapi kemandirian yang sama ini berarti tidak ada jalur bawaan menuju pencadangan eksternal. Jika server, disknya, atau hostnya mengalami gangguan, apa pun yang belum disalin ke tempat lain akan hilang. RcloneView terhubung ke Seafile bersama Dropbox dalam jendela yang sama dan memindahkan file di antara keduanya sebagai pekerjaan sinkronisasi terjadwal, sehingga server self-hosted mendapatkan salinan offsite yang nyata tanpa perlu ada yang menulis skrip cron atau perintah rclone secara manual. RcloneView memasang (mount) dan menyinkronkan lebih dari 90 penyedia dari satu jendela, di Windows, macOS, dan Linux, sehingga pengaturan yang sama berfungsi baik pekerjaan sinkronisasi dijalankan dari laptop seorang admin maupun dari mesin khusus pencadangan.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Seafile dan Dropbox

Seafile ditambahkan sebagai remote dengan memasukkan URL server, pustaka (library), dan kredensial akun, dan RcloneView memverifikasi koneksi sebelum menyimpannya. Dropbox menggunakan alur OAuth yang lebih sederhana: jendela browser terbuka, akun diotorisasi, dan remote muncul secara otomatis sebagai tab. Setelah keduanya dikonfigurasi, Remote Manager menampilkannya berdampingan, dan masing-masing dapat diedit kemudian tanpa mengganggu yang lain.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a self-hosted Seafile server and Dropbox as remotes in RcloneView" class="img-large img-center" />

Setelah kedua remote terhubung, buka tata letak dua panel untuk menjelajahi pustaka Seafile dan folder tujuan Dropbox bersamaan sebelum menjalankan sinkronisasi penuh.

## Membangun Pekerjaan Sinkronisasi

Buat pekerjaan sinkronisasi satu arah dengan pustaka Seafile sebagai sumber dan folder Dropbox khusus sebagai tujuan, sehingga proses pencadangan tidak pernah secara tidak sengaja mengubah data Seafile asli. Di Filtering Settings, kecualikan apa pun yang tidak boleh meninggalkan server — file sementara, folder `.git/` dari proyek mana pun yang menggunakan kontrol versi, atau jenis file di atas ambang ukuran tertentu — menggunakan sintaks filter kustom yang sama yang diterapkan RcloneView pada pekerjaan sinkronisasi mana pun. Jalankan Dry Run terlebih dahulu: fitur ini mencantumkan semua file yang akan disalin tanpa benar-benar mentransfer apa pun, cara tercepat untuk menemukan folder sumber yang salah sebelum menghabiskan bandwidth.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Seafile to Dropbox backup job in RcloneView" class="img-large img-center" />

Pengguna lisensi PLUS dapat melampirkan jadwal bergaya crontab pada pekerjaan tersebut sehingga pencadangan berjalan setiap malam tanpa perlu dimulai secara manual — berguna untuk server Seafile yang berubah sepanjang hari kerja.

## Memverifikasi Pencadangan di Job History

Aktifkan perbandingan checksum di Advanced Settings agar RcloneView memastikan file cocok berdasarkan hash dan ukuran, bukan hanya mengandalkan ukuran file — penting ketika kontrol versi Seafile dapat meninggalkan file dengan ukuran identik tetapi konten berbeda. Setelah setiap proses selesai, Job History menampilkan total file yang ditransfer, waktu yang dihabiskan, dan item mana pun yang mengalami kesalahan, sehingga memudahkan untuk memastikan salinan Dropbox benar-benar terkini sebelum mempercayainya sebagai titik pemulihan.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing a completed Seafile to Dropbox sync" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan server Seafile Anda sebagai remote dengan jalur pustaka dan kredensialnya.
3. Tambahkan Dropbox melalui alur login OAuth.
4. Jalankan Dry Run, lalu jalankan pekerjaan sinkronisasi dan konfirmasi hasilnya di Job History.

Salinan Dropbox yang terjadwal dan terverifikasi mengubah instalasi Seafile self-hosted dari satu titik kegagalan tunggal menjadi server dengan cadangan yang nyata.

---

**Panduan Terkait:**

- [Kelola Cloud Self-Hosted Seafile dengan Google Drive, S3, dan Penyimpanan Eksternal Menggunakan RcloneView](https://rcloneview.com/support/blog/manage-seafile-self-hosted-cloud-sync-rcloneview)
- [Kelola Dropbox — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Perbaiki Kesalahan Sinkronisasi Seafile dengan RcloneView](https://rcloneview.com/support/blog/fix-seafile-sync-errors-rcloneview)

<CloudSupportGrid />
