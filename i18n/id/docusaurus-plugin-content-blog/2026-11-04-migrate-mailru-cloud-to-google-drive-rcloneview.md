---
slug: migrate-mailru-cloud-to-google-drive-rcloneview
title: "Migrasi Mail.ru Cloud ke Google Drive — Transfer File dengan RcloneView"
authors:
  - tayson
description: "Migrasi Mail.ru Cloud ke Google Drive dengan RcloneView: hubungkan kedua remote, jalankan dry run, salin folder dari cloud ke cloud, dan verifikasi hasilnya dengan Folder Compare."
keywords:
  - migrasi Mail.ru Cloud ke Google Drive
  - transfer Mail.ru Cloud
  - Mail.ru ke Google Drive
  - RcloneView Mail.ru
  - migrasi cloud ke cloud
  - pindahkan file antar cloud
  - pencadangan Mail.ru Cloud
  - migrasi GUI rclone
  - alat migrasi Google Drive
  - verifikasi Folder Compare
tags:
  - RcloneView
  - mailru
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Mail.ru Cloud ke Google Drive — Transfer File dengan RcloneView

> Pindahkan file Mail.ru Cloud Anda ke Google Drive dengan alur kerja visual yang dapat diverifikasi, bukan unduh dan unggah ulang secara manual.

Memindahkan dokumen, hasil pindaian, dan media selama bertahun-tahun dari Mail.ru Cloud biasanya berarti mengunduh semuanya ke laptop lalu mengunggahnya kembali. RcloneView, GUI berbasis rclone, menghubungkan kedua layanan sebagai remote sehingga Anda dapat menyalin di antara keduanya dari satu jendela dan memverifikasi hasilnya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan Kedua Remote

Buka RcloneView dan gunakan **New Remote** untuk menambahkan Mail.ru Cloud dan Google Drive. Google Drive masuk melalui browser dengan OAuth, jadi tidak perlu API key. Mail.ru Cloud termasuk dalam daftar provider yang didukung; ikuti petunjuk di layar untuk kredensialnya. Setelah keduanya muncul di Remote Manager, buka berdampingan di dua panel Explorer.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote Mail.ru Cloud dan Google Drive di RcloneView" class="img-large img-center" />

RcloneView mendukung 90+ layanan penyimpanan cloud dari satu jendela, di Windows, macOS, dan Linux, sehingga pengaturan yang sama juga berlaku untuk migrasi berikutnya.

## Rencanakan Penyalinan Sebelum Memindahkan Apa Pun

Telusuri pohon sumber terlebih dahulu. Gunakan **Get Size** pada folder tingkat atas untuk memperkirakan volume, lalu tentukan apa yang dipindahkan sekarang dan apa yang bisa menunggu. Usaha kecil dengan folder bersama "Contracts" dan folder besar "Archive" dapat memigrasikan yang pertama segera dan menjadwalkan yang kedua di luar jam kerja.

Seret folder dari panel Mail.ru ke panel Google Drive: menyeret di antara remote yang berbeda akan melakukan **Copy**, sehingga sumber tetap utuh sampai Anda puas. Untuk pemindahan yang lebih besar, buat job Copy di wizard Sync, atur jumlah transfer di Advanced Settings, dan gunakan filter untuk melewati file yang tidak diperlukan, seperti image ISO.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer cloud ke cloud antara dua remote di RcloneView" class="img-large img-center" />

## Dry Run, Transfer, dan Pemantauan

Jalankan **Dry Run** terlebih dahulu. Ini mencantumkan apa yang akan disalin tanpa menyentuh kedua sisi, sehingga path yang salah terdeteksi sebelum menghabiskan waktu. Jika daftarnya sudah benar, mulai job dan pantau progres, kecepatan, dan jumlah file di tab Transferring.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Memantau transfer yang sedang berjalan di tab Transferring RcloneView" class="img-large img-center" />

## Verifikasi dengan Folder Compare

Setelah penyalinan selesai, buka **Compare** dengan Mail.ru Cloud di kiri dan Google Drive di kanan. Filter file left-only dan different untuk melihat apa pun yang hilang atau tidak cocok, lalu salin file tersebut. Job History menyimpan catatan status, ukuran, dan durasi untuk file Anda.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare menampilkan perbedaan antara sumber dan tujuan" class="img-large img-center" />

## Mulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Mail.ru Cloud dan Google Drive melalui **New Remote**.
3. Jalankan Dry Run pada satu folder, lalu mulai job Copy.
4. Konfirmasi dengan Folder Compare sebelum menutup akun lama.

Salinan langsung cloud ke cloud yang terverifikasi menjaga migrasi tetap berisiko rendah dan mudah dilanjutkan.

---

**Panduan Terkait:**

- [Kelola Sinkronisasi Mail.ru Cloud](https://rcloneview.com/support/blog/manage-mailru-cloud-sync-rcloneview)
- [Transfer Mail.ru Cloud ke Google Drive dan S3](https://rcloneview.com/support/blog/transfer-mailru-cloud-google-drive-s3-rcloneview)
- [Migrasi Mail.ru Cloud ke Backblaze B2](https://rcloneview.com/support/blog/migrate-mailru-cloud-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
