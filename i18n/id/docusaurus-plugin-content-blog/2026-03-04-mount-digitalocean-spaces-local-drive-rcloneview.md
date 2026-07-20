---
slug: mount-digitalocean-spaces-local-drive-rcloneview
title: "Mount DigitalOcean Spaces sebagai Local Drive untuk Akses File yang Mudah dengan RcloneView"
authors:
  - tayson
description: "Akses penyimpanan objek DigitalOcean Spaces Anda seperti folder biasa — mount sebagai local drive, drag and drop file, dan sinkronisasi dengan cloud lain menggunakan RcloneView."
keywords:
  - digitalocean spaces mount
  - digitalocean spaces local drive
  - spaces s3 compatible mount
  - digitalocean spaces gui
  - digitalocean spaces file manager
  - mount object storage local drive
  - digitalocean spaces sync
  - digitalocean spaces backup
  - spaces rclone gui
  - digitalocean spaces desktop
tags:
  - RcloneView
  - digitalocean-spaces
  - cloud-storage
  - mount
  - s3-compatible
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mount DigitalOcean Spaces sebagai Local Drive untuk Akses File yang Mudah dengan RcloneView

> DigitalOcean Spaces sangat baik untuk menyimpan aset, tetapi mengakses file melalui web console itu lambat dan merepotkan. Bagaimana jika Anda bisa menjelajahi bucket Spaces Anda seperti folder biasa di desktop?

DigitalOcean Spaces menyediakan penyimpanan objek yang kompatibel dengan S3 dengan harga terjangkau, tetapi dashboard web-nya tidak dirancang untuk pengelolaan file sehari-hari. Mengunggah folder, mengatur file, atau melihat pratinjau konten dengan cepat berarti terus-menerus berpindah tab browser. RcloneView memungkinkan Anda mount bucket Spaces mana pun sebagai local drive — jelajahi, drag and drop, dan sinkronisasi file secara alami seperti bekerja dengan sistem file lokal Anda.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Mount DigitalOcean Spaces secara Lokal?

Spaces bekerja dengan baik sebagai penyimpanan backend untuk aplikasi, tetapi ketika manusia perlu berinteraksi langsung dengannya:

- **Web console lambat** — Menavigasi bucket besar dengan ribuan file itu membosankan. Tidak ada bulk rename, tidak ada pratinjau cepat, tidak ada drag-and-drop.
- **Alat CLI memerlukan hafalan perintah** — `s3cmd` dan `aws s3` berfungsi, tetapi tidak semua orang ingin mengetik perintah untuk operasi file dasar.
- **Tidak ada integrasi desktop native** — Berbeda dengan Dropbox atau Google Drive, Spaces tidak memiliki klien sinkronisasi desktop.

Mounting Spaces sebagai local drive menyelesaikan ketiganya. Bucket Anda muncul sebagai folder di file manager Anda — buka file, salin folder, hapus item, semuanya dengan alat yang sudah familiar.

## Menyiapkan DigitalOcean Spaces sebagai Remote

Karena Spaces kompatibel dengan S3, penyiapan di RcloneView menggunakan tipe provider S3:

1. Buka RcloneView dan klik **Add Remote**.
2. Pilih **Amazon S3** sebagai tipe provider (Spaces menggunakan API S3).
3. Pilih **DigitalOcean Spaces** dari dropdown provider S3.
4. Masukkan kredensial Anda:
   - **Access Key** dan **Secret Key** dari pengaturan API DigitalOcean Anda.
   - **Region**: Region Spaces Anda (misalnya, `nyc3`, `sfo3`, `ams3`, `sgp1`).
   - **Endpoint**: `https://{region}.digitaloceanspaces.com`
5. Simpan remote — bucket Spaces Anda kini dapat dijelajahi.

<img src="/support/images/en/blog/new-remote.png" alt="Add DigitalOcean Spaces as S3-compatible remote" class="img-large img-center" />

## Mounting Spaces sebagai Local Drive

Setelah terhubung, mounting bucket Spaces Anda sebagai local drive hanya membutuhkan beberapa klik:

1. Jelajahi remote Spaces Anda di Explorer.
2. Klik kanan pada bucket atau folder yang ingin Anda mount.
3. Pilih **Mount** dari menu konteks.
4. Pilih titik mount lokal (huruf drive di Windows, path mount di Mac/Linux).
5. Klik **Mount** — bucket Spaces Anda kini muncul sebagai local drive.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount DigitalOcean Spaces from Explorer" class="img-large img-center" />

Sebagai alternatif, gunakan Mount Manager untuk kontrol lebih atas opsi mount:

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure Spaces mount in Mount Manager" class="img-large img-center" />

### Apa yang bisa Anda lakukan dengan drive yang di-mount

- **Buka file langsung** — Klik dua kali pada gambar, dokumen, atau video untuk membukanya di aplikasi default Anda.
- **Salin dan tempel** — Pindahkan file antara sistem file lokal Anda dan Spaces menggunakan file manager OS Anda.
- **Drag and drop** — Seret file dari desktop Anda ke drive yang di-mount.
- **Gunakan di aplikasi** — Arahkan aplikasi seperti Photoshop, VS Code, atau video editor langsung ke file di drive yang di-mount.

## Menjelajahi dan Mengelola File

Bahkan tanpa mounting, Explorer dua panel RcloneView memberi Anda file manager yang andal untuk Spaces:

- **Navigasi bucket dan folder** dengan navigasi tree yang familiar.
- **Drag and drop** file antara Spaces dan remote lain mana pun (Google Drive, S3, disk lokal).
- **Buat, ganti nama, dan hapus** file dan folder.
- **Lihat ukuran dan tanggal file** untuk pengelolaan yang mudah.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to DigitalOcean Spaces" class="img-large img-center" />

## Sinkronisasi Spaces dengan Cloud Lain

DigitalOcean Spaces tidak berdiri sendiri. Alur kerja umum meliputi:

### Sinkronisasi Spaces ↔ AWS S3

Simpan salinan cadangan data Spaces Anda di AWS S3 (atau sebaliknya):

1. Buat Sync job dengan Spaces sebagai sumber dan S3 sebagai tujuan.
2. Jadwalkan agar berjalan setiap malam.
3. Gunakan [Folder Comparison](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) untuk memverifikasi kedua sisi cocok.

### Sinkronisasi Spaces ↔ Folder Pengembangan Lokal

Simpan salinan lokal aset Spaces Anda untuk pengembangan:

1. Buat Sync job dari Spaces ke folder lokal.
2. Lakukan perubahan secara lokal, lalu sinkronisasi kembali ke Spaces.

### Distribusi dari Spaces ke Beberapa Cloud

Gunakan v1.3 [Batch Jobs](https://rcloneview.com/support/blog/batch-jobs-run-multiple-cloud-tasks-rcloneview) untuk menyalin konten Spaces ke Google Drive, OneDrive, dan S3 dalam satu rangkaian otomatis.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync DigitalOcean Spaces with other clouds" class="img-large img-center" />

## Mengotomatiskan Alur Kerja Spaces

### Pencadangan terjadwal

Siapkan Copy job harian dari bucket Spaces Anda ke cloud lain atau penyimpanan lokal:

1. Buat job di Job Manager.
2. Jadwalkan melalui [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).
3. Dapatkan notifikasi melalui [Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control) atau [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control).

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule DigitalOcean Spaces sync jobs" class="img-large img-center" />

### Tips performa

- **Transfer paralel**: 8–16 (Spaces menangani konkurensi tinggi dengan baik).
- **Ukuran chunk**: 64MB untuk file besar.
- **Fast-list**: Aktifkan untuk listing direktori yang lebih cepat pada bucket besar.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan Spaces** sebagai remote yang kompatibel dengan S3 menggunakan kunci API Anda.
3. **Mount** bucket Anda sebagai local drive atau jelajahi di Explorer.
4. **Sinkronisasi atau cadangkan** ke cloud lain dengan job terjadwal.

Berhentilah berjuang dengan web console. Mount DigitalOcean Spaces Anda sebagai local drive dan kerjakan file Anda seperti cara Anda bekerja dengan hal lainnya — dari desktop Anda.

---

**Panduan Terkait:**

- [Menambahkan AWS S3 dan Kompatibel S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Mount Penyimpanan Cloud sebagai Local Drive](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Menjelajahi & Mengelola Remote](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Membandingkan Isi Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Penjadwalan Job](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
