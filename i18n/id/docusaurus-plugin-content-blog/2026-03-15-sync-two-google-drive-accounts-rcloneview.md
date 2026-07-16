---
slug: sync-two-google-drive-accounts-rcloneview
title: "Cara Sinkronisasi Dua Akun Google Drive — Sinkronisasi Drive Pribadi dan Kerja dengan RcloneView"
authors:
  - tayson
description: "Banyak orang memiliki beberapa akun Google Drive — pribadi, kerja, sekolah. Pelajari cara sinkronisasi file di antara akun-akun tersebut tanpa mengunduh apa pun secara lokal menggunakan RcloneView."
keywords:
  - sync two google drive accounts
  - google drive to google drive
  - transfer between google drives
  - multiple google drive sync
  - google drive personal to work
  - sync google accounts
  - google drive account transfer
  - google drive cross account
  - two google drive sync tool
  - google drive migration between accounts
tags:
  - google-drive
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cara Sinkronisasi Dua Akun Google Drive — Sinkronisasi Drive Pribadi dan Kerja dengan RcloneView

> Google Drive pribadi Anda berisi foto keluarga. Google Drive kerja Anda berisi file proyek. Drive kampus Anda akan segera kedaluwarsa. Google tidak menyediakan cara bawaan untuk sinkronisasi antar akun — tetapi RcloneView bisa.

Hampir semua orang akhirnya memiliki beberapa akun Google Drive. Satu akun Gmail pribadi, satu akun Workspace dari kantor, mungkin juga akun sekolah yang akan kedaluwarsa. Google memudahkan penggunaan setiap akun secara terpisah, tetapi tidak menyediakan cara untuk sinkronisasi atau transfer file antar akun tersebut. Akhirnya Anda harus mengunduh dari satu akun lalu mengunggah ke akun lain — manual, lambat, dan menghabiskan penyimpanan lokal Anda. RcloneView menghubungkan beberapa akun Google Drive secara bersamaan dan mentransfer file langsung di antara mereka.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Tambahkan Beberapa Akun Google Drive

<img src="/support/images/en/blog/new-remote.png" alt="Add multiple Google Drive accounts" class="img-large img-center" />

Tambahkan setiap akun Google Drive sebagai remote terpisah di RcloneView. Beri nama yang jelas — "GDrive-Personal", "GDrive-Work", "GDrive-School" — agar Anda dapat membedakannya dengan mudah.

## Transfer Antar Akun

Buka satu akun di panel kiri, dan akun lainnya di panel kanan. Seret file dan folder di antara keduanya:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer between Google Drive accounts" class="img-large img-center" />

File ditransfer langsung melalui server Google — tidak ada yang diunduh ke komputer Anda, dan proses transfer berlangsung cepat.

## Kasus Penggunaan Umum

### Menyimpan file dari akun sekolah yang akan kedaluwarsa

Akun Google Workspace kampus sering kali dihapus setelah kelulusan. Transfer semua data ke Google Drive pribadi Anda sebelum kehilangan akses.

### Memisahkan file pribadi dan kerja

Tidak sengaja menyimpan file pribadi di Google Drive kerja? Pindahkan file tersebut ke akun pribadi Anda tanpa perlu melibatkan tim IT.

### Menggabungkan akun lama

Gabungkan file dari akun Gmail lama ke akun yang Anda gunakan sekarang. RcloneView membuat proses ini semudah drag-and-drop.

### Mencerminkan folder penting

Jaga agar folder tertentu tetap tersinkronisasi antara kedua akun. Buat job sinkronisasi yang berjalan secara otomatis:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Sync job between accounts" class="img-large img-center" />

## Jadwalkan Sinkronisasi Berkelanjutan

Untuk folder yang ingin Anda sinkronisasikan secara terus-menerus antar akun, jadwalkan sinkronisasi otomatis:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule cross-account sync" class="img-large img-center" />

## Verifikasi Transfer

Gunakan Folder Comparison untuk memastikan file telah berhasil ditransfer dengan benar antar akun:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify cross-account transfer" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan kedua akun Google Drive** sebagai remote terpisah.
3. **Buka kedua akun** di explorer dua panel.
4. **Transfer langsung** — tanpa perlu mengunduh secara lokal.

Akun Google Anda, akhirnya terhubung.

---

**Panduan Terkait:**

- [Migrasi Google Drive ke OneDrive](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [Sinkronisasi Google Drive ke Dropbox](https://rcloneview.com/support/blog/sync-google-drive-to-dropbox-rcloneview)
- [Unggah File Besar ke Google Drive](https://rcloneview.com/support/blog/upload-large-files-google-drive-sync-rcloneview)

<CloudSupportGrid />
