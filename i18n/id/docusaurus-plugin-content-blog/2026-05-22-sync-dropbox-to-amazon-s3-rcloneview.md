---
slug: sync-dropbox-to-amazon-s3-rcloneview
title: "Sinkronisasi Dropbox ke Amazon S3 — Pencadangan Cloud dengan RcloneView"
authors:
  - tayson
description: "Pelajari cara menyinkronkan dan mencadangkan file Dropbox ke Amazon S3 menggunakan RcloneView. Siapkan transfer cloud-to-cloud dengan penjadwalan, pratinjau dry-run, dan riwayat transfer."
keywords:
  - Dropbox to Amazon S3
  - Dropbox S3 backup
  - sync Dropbox to S3
  - RcloneView cloud-to-cloud
  - Dropbox backup to object storage
  - Amazon S3 backup
  - cloud migration rclone GUI
  - automate Dropbox backup
  - Dropbox S3 sync
  - cloud-to-cloud file transfer
tags:
  - RcloneView
  - dropbox
  - amazon-s3
  - cloud-to-cloud
  - migration
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Dropbox ke Amazon S3 — Pencadangan Cloud dengan RcloneView

> Cerminkan file Dropbox Anda ke Amazon S3 untuk penyimpanan objek yang tahan lama dan dikelola secara independen — menggunakan sinkronisasi cloud-to-cloud visual RcloneView tanpa CLI sama sekali.

Banyak tim mengandalkan Dropbox untuk kolaborasi sehari-hari tetapi ingin memiliki pencadangan sekunder di Amazon S3 untuk retensi jangka panjang, pengarsipan kepatuhan, atau mengurangi ketergantungan pada satu vendor. RcloneView membuatnya mudah untuk menyinkronkan file langsung dari Dropbox ke bucket S3 tanpa merutekan data melalui komputer lokal Anda atau menulis perintah rclone secara manual. Sebuah perusahaan produksi video dengan 500 GB file proyek dapat menyiapkan pekerjaan pencadangan Dropbox-ke-S3 setiap malam hanya dalam beberapa menit dan memiliki jejak audit lengkap dari setiap eksekusi.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan Dropbox dan Amazon S3 sebagai Remote

Mulailah dengan menambahkan kedua penyedia di RcloneView. Buka **Remote tab > New Remote** dan pilih **Dropbox** — RcloneView akan membuka jendela browser untuk autentikasi OAuth. Berikan akses dan akun Dropbox Anda akan langsung muncul di panel Explorer, tanpa memerlukan API key atau konfigurasi token manual.

Untuk Amazon S3, tambahkan remote kedua, pilih **Amazon S3**, lalu masukkan **Access Key ID**, **Secret Access Key**, dan **kode region** tujuan (misalnya, `us-east-1`). Kedua remote kemudian akan muncul sebagai tab di Explorer, memungkinkan Anda menelusuri masing-masing sisi dan memastikan struktur folder sebelum membuat pekerjaan apa pun. Klik kanan pada folder Dropbox akan menampilkan ukurannya sebelum Anda memutuskan untuk menyinkronkannya.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Amazon S3 remotes in RcloneView" class="img-large img-center" />

## Konfigurasikan Pekerjaan Sinkronisasi Cloud-to-Cloud

Setelah kedua remote siap, buka **Home tab > Sync** untuk menjalankan wizard sinkronisasi 4 langkah:

1. **Configure Storage** — Pilih folder sumber Dropbox Anda (misalnya, `/Project Files`) dan bucket tujuan Amazon S3 dengan prefix key (misalnya, `my-backup-bucket/dropbox-mirror`). Beri nama pekerjaan dengan jelas untuk log riwayat.
2. **Advanced Settings** — Atur jumlah transfer bersamaan untuk menyeimbangkan kecepatan dengan batas rate API, dan aktifkan verifikasi checksum jika Anda memerlukan jaminan integritas data hingga level byte di S3.
3. **Filtering** — Kecualikan file metadata sistem `.dropbox`, direktori cache, atau tipe file apa pun yang tidak Anda butuhkan di S3. Kategori filter yang telah ditentukan (Image, Video, Document) memberikan pintasan cepat untuk skenario pemfilteran umum.
4. **Schedule (PLUS license)** — Konfigurasikan jadwal bergaya crontab untuk eksekusi otomatis setiap malam. UI penjadwalan memungkinkan Anda mensimulasikan waktu eksekusi berikutnya untuk memastikan waktunya sebelum menyimpan.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a Dropbox to Amazon S3 cloud-to-cloud sync job in RcloneView" class="img-large img-center" />

## Jalankan Dry Run Sebelum Sinkronisasi Live Pertama

Sebelum melakukan transfer live pertama — terutama jika bucket S3 Anda sudah memiliki beberapa data — gunakan fitur **Dry Run**. Dry Run mensimulasikan sinkronisasi dan menunjukkan dengan tepat file mana yang akan disalin dan mana (jika ada) yang akan dihapus dari tujuan, tanpa membuat perubahan sebenarnya. Pratinjau ini menangkap jalur sumber yang salah konfigurasi atau penghapusan yang tidak terduga sebelum mencapai bucket S3 Anda.

Setelah Anda puas dengan hasil dry-run, klik **Run** di Job Manager untuk memulai sinkronisasi sebenarnya.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Dropbox to Amazon S3 sync job in RcloneView Job Manager" class="img-large img-center" />

## Pantau Transfer dan Tinjau Riwayat Pekerjaan

Saat pekerjaan berjalan, tab **Transferring** di bagian bawah RcloneView menampilkan progres secara langsung: nama file, kecepatan transfer, dan total byte yang dipindahkan. File berpindah langsung antara Dropbox dan S3 tanpa melewati workstation lokal Anda, sehingga kecepatan yang ditampilkan mencerminkan bandwidth sisi cloud, bukan koneksi lokal Anda.

Setelah setiap sinkronisasi selesai, tab **Job History** mencatat waktu mulai, durasi, status (Completed / Errored / Canceled), dan total data yang ditransfer. Untuk alur kerja yang sensitif terhadap kepatuhan, log ini menyediakan dokumentasi yang diperlukan untuk memastikan bahwa pencadangan terjadwal berjalan tepat waktu dan tanpa kesalahan.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Dropbox to Amazon S3 backup runs in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Dropbox melalui **Remote tab > New Remote > Dropbox** dan autentikasi melalui alur OAuth browser.
3. Tambahkan Amazon S3 melalui **Remote tab > New Remote > Amazon S3** dengan Access Key ID, Secret Access Key, dan region Anda.
4. Buka **Home tab > Sync**, pilih Dropbox sebagai sumber dan S3 sebagai tujuan, jalankan pratinjau dry-run, lalu simpan dan jadwalkan untuk pencadangan otomatis setiap malam.

File Dropbox Anda akan memiliki pencadangan yang tahan lama dan dikelola secara independen di Amazon S3 — berjalan sesuai jadwal yang Anda tetapkan, dengan riwayat lengkap dari setiap transfer.

---

**Panduan Terkait:**

- [Migrasikan OneDrive ke Amazon S3 dengan RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-amazon-s3-rcloneview)
- [Kelola Amazon S3 — Sinkronisasi dan Pencadangan Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Pencadangan Incremental Google Drive ke Amazon S3 dengan RcloneView](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)

<CloudSupportGrid />
