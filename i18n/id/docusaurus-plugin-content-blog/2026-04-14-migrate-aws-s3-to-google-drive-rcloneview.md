---
slug: migrate-aws-s3-to-google-drive-rcloneview
title: "Migrasi AWS S3 ke Google Drive — Transfer File dengan RcloneView"
authors:
  - tayson
description: "Pindahkan file dari bucket AWS S3 ke Google Drive menggunakan GUI RcloneView. Tidak perlu CLI untuk migrasi S3 ke Google Drive — transfer, verifikasi, dan jadwalkan dengan mudah."
keywords:
  - migrasi AWS S3 ke Google Drive
  - transfer S3 ke Google Drive
  - migrasi AWS S3 Google Drive
  - rclone S3 ke Google Drive
  - alat migrasi cloud-to-cloud
  - pindahkan file S3 ke Google Drive
  - object storage ke Google Drive
  - migrasi S3 RcloneView
tags:
  - amazon-s3
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi AWS S3 ke Google Drive — Transfer File dengan RcloneView

> RcloneView menangani migrasi S3-ke-Google-Drive sebagai transfer cloud-to-cloud langsung — tanpa perlu mengunduh ke lokal, dengan progres real-time dan verifikasi checksum.

Migrasi dari AWS S3 ke Google Drive adalah skenario umum ketika tim beralih dari penyimpanan yang berfokus pada infrastruktur ke platform yang berorientasi kolaborasi. Sebuah startup mungkin mengarsipkan bertahun-tahun log aplikasi dan aset S3 ke Google Drive agar lebih mudah diakses lintas tim. Sebuah agensi kecil mungkin menggabungkan hasil kerja klien dari bucket S3 per proyek ke dalam satu Google Drive bersama. RcloneView membuat migrasi ini visual dan dapat diaudit, menangani transfer di sisi server tanpa menyimpan file sementara di komputer lokal Anda.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menyiapkan Kedua Remote

Sebelum melakukan migrasi, tambahkan kedua penyedia cloud ke RcloneView. Untuk AWS S3, buka **Tab Remote → New Remote → Amazon S3**, masukkan Access Key ID, Secret Access Key, dan pilih region bucket Anda. Untuk Google Drive, tambahkan remote lain menggunakan login OAuth via browser — RcloneView akan membuka halaman otorisasi Google dan menyimpan token secara otomatis.

Setelah kedua remote dikonfigurasi, buka Explorer dalam tampilan dua panel. Panel kiri menampilkan bucket S3 Anda, panel kanan menampilkan folder Google Drive tujuan. Tampilan berdampingan ini ideal untuk memastikan struktur folder sebelum migrasi dimulai.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring AWS S3 and Google Drive remotes in RcloneView" class="img-large img-center" />

## Menjalankan Migrasi dengan Sync Wizard

Untuk migrasi berskala besar, gunakan wizard Sync Job alih-alih drag-and-drop manual. Di **Job Manager → Add Job**, atur source ke path bucket S3 Anda (misalnya, `mybucket/exports/`) dan destination ke folder Google Drive Anda. Pada Step 2, atur concurrent transfers ke 8–12 tergantung bandwidth Anda, dan aktifkan verifikasi checksum untuk memastikan integritas setiap file setelah transfer.

Jalankan **Dry Run** terlebih dahulu. RcloneView akan menampilkan daftar setiap file yang akan disalin tanpa benar-benar mentransfernya. Untuk bucket dengan 50.000 file berukuran ratusan GB, pratinjau ini memungkinkan Anda memastikan cakupannya sebelum menghabiskan berjam-jam waktu transfer. Jika daftar file terlihat benar, jalankan sinkronisasi secara langsung.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="S3 to Google Drive cloud-to-cloud transfer in RcloneView" class="img-large img-center" />

## Menangani Perbedaan Jenis File dan Filter

Bucket S3 sering berisi file yang dihasilkan secara otomatis — file `.log`, unggahan sementara, objek penanda berukuran nol byte — yang tidak perlu masuk ke Google Drive. Gunakan filter di Step 3 untuk mengecualikan ekstensi yang tidak diinginkan: tambahkan `.log`, `.tmp`, dan `.part` ke filter pengecualian kustom. Anda juga dapat mengatur filter max-file-age untuk hanya memigrasikan file yang dimodifikasi dalam 90 hari terakhir, sehingga mengurangi cakupan transfer untuk kasus penggunaan aktif.

Google Drive memiliki beberapa keunikan dalam penamaan file: karakter seperti `?`, `*`, dan `:` pada object key S3 akan ditransliterasikan secara otomatis oleh rclone. RcloneView menampilkan error encoding di tab Log sehingga Anda dapat meninjau objek mana saja yang memerlukan perubahan nama.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Executing the S3 to Google Drive migration job in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote AWS S3 Anda menggunakan Access Key + Secret + Region di wizard New Remote.
3. Tambahkan remote Google Drive Anda melalui autentikasi OAuth via browser.
4. Buat job Sync di Job Manager, jalankan Dry Run untuk pratinjau, lalu jalankan migrasinya.

Dengan RcloneView, migrasi S3-ke-Google-Drive Anda berjalan dengan visibilitas penuh — tanpa skrip CLI, tanpa biaya staging, dan riwayat job lengkap untuk catatan Anda.

---

**Panduan Terkait:**

- [Migrasi Google Drive ke AWS S3 dengan RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-aws-s3-rcloneview)
- [Pencadangan Inkremental: Google Drive ke Amazon S3](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [Migrasi Cloud dengan Verifikasi Checksum menggunakan RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
