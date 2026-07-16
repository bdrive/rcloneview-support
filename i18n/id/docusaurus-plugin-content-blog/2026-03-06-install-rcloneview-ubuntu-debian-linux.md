---
slug: install-rcloneview-ubuntu-debian-linux
title: "Cara Menginstal RcloneView di Ubuntu dan Debian Linux — Panduan Setup Lengkap"
authors:
  - tayson
description: "Panduan langkah demi langkah untuk menginstal RcloneView di Ubuntu 22.04/24.04 dan Debian 12. Mencakup unduhan, dependensi, setup FUSE untuk mount, dan pemecahan masalah umum."
keywords:
  - install rcloneview linux
  - rcloneview ubuntu
  - rcloneview debian
  - rclone gui linux
  - rcloneview linux setup
  - cloud sync tool linux
  - rclone desktop linux
  - mount cloud storage linux
  - rcloneview installation guide
  - linux cloud file manager
tags:
  - linux
  - ubuntu
  - debian
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cara Menginstal RcloneView di Ubuntu dan Debian Linux — Panduan Setup Lengkap

> RcloneView berjalan secara native di Linux. Panduan ini memandu Anda melalui instalasi di Ubuntu dan Debian, termasuk setup FUSE untuk mount penyimpanan cloud sebagai drive lokal.

Pengguna Linux telah lama mengandalkan command line rclone untuk manajemen penyimpanan cloud. RcloneView menambahkan antarmuka grafis lengkap di atas rclone — file explorer dua panel, sync job visual, penjadwalan, dan mounting sekali klik. Berikut cara menjalankannya di Ubuntu dan Debian.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Persyaratan Sistem

- **OS**: Ubuntu 20.04, 22.04, 24.04 atau Debian 11, 12
- **Arsitektur**: x86_64 (AMD64)
- **RAM**: minimum 4 GB (8 GB direkomendasikan untuk transfer besar)
- **Disk**: 200 MB untuk instalasi
- **Dependensi**: FUSE 3 (untuk mount), library runtime Qt 6

## Langkah 1: Unduh RcloneView

Unduh paket `.deb` dari situs resmi:

Kunjungi [rcloneview.com/src/download.html](https://rcloneview.com/src/download.html) dan unduh paket Linux `.deb`.

## Langkah 2: Instal Paket

Instal menggunakan `dpkg`:

```bash
sudo dpkg -i rcloneview_*.deb
```

Jika ada dependensi yang hilang, perbaiki dengan:

```bash
sudo apt-get install -f
```

Ini akan menginstal RcloneView dan menarik library Qt yang diperlukan secara otomatis.

## Langkah 3: Siapkan FUSE untuk Mount

Untuk mount penyimpanan cloud sebagai direktori lokal, Anda memerlukan FUSE:

```bash
sudo apt-get install fuse3
```

Verifikasi bahwa FUSE berfungsi:

```bash
fusermount3 --version
```

### Izinkan mounting non-root

Edit konfigurasi FUSE:

```bash
sudo nano /etc/fuse.conf
```

Hapus tanda komentar pada baris:

```
user_allow_other
```

Ini memungkinkan RcloneView untuk melakukan mount dengan flag `--allow-other`, sehingga drive yang di-mount dapat diakses oleh pengguna Anda.

## Langkah 4: Jalankan RcloneView

Jalankan dari menu aplikasi atau terminal:

```bash
rcloneview
```

Pada peluncuran pertama, RcloneView akan mendeteksi atau mengunduh binary rclone terbaru secara otomatis.

## Langkah 5: Tambahkan Remote Pertama Anda

Klik **Add Remote** dan konfigurasikan penyedia cloud Anda:

<img src="/support/images/en/blog/new-remote.png" alt="Add cloud remote on Linux" class="img-large img-center" />

## Langkah 6: Mount Penyimpanan Cloud

Mount remote apa pun sebagai direktori lokal. Akses Google Drive, S3 bucket, atau OneDrive Anda seolah-olah itu adalah folder lokal:

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount cloud storage on Linux" class="img-large img-center" />

Remote yang di-mount muncul sebagai direktori biasa — jelajahi di Nautilus, Dolphin, atau file manager apa pun.

## Pemecahan Masalah

### "rclone not found"

RcloneView menyertakan atau mengunduh rclone secara otomatis. Jika tidak dapat menemukannya:

```bash
which rclone
```

Jika rclone belum terinstal, RcloneView akan meminta Anda untuk mengunduhnya. Alternatifnya, instal secara manual:

```bash
sudo apt-get install rclone
```

### Mount gagal dengan "Permission denied"

Pastikan FUSE telah terinstal dan `user_allow_other` diaktifkan di `/etc/fuse.conf`. Lalu restart RcloneView.

### Error library Qt

Jika Anda melihat error library Qt yang hilang:

```bash
sudo apt-get install libqt6widgets6 libqt6gui6 libqt6core6 libqt6network6
```

### Alternatif AppImage

Jika Anda lebih memilih untuk tidak menginstal secara system-wide, RcloneView juga menyediakan AppImage:

```bash
chmod +x RcloneView-*.AppImage
./RcloneView-*.AppImage
```

AppImage menyertakan semua dependensi dan berjalan tanpa instalasi.

## Autostart saat Login

Untuk memulai RcloneView secara otomatis saat Anda login, tambahkan ke autostart desktop environment Anda:

**GNOME (Ubuntu):**

Buat `~/.config/autostart/rcloneview.desktop`:

```ini
[Desktop Entry]
Type=Application
Name=RcloneView
Exec=rcloneview
Hidden=false
X-GNOME-Autostart-enabled=true
```

Ini memastikan sync job terjadwal dan drive yang di-mount tersedia segera setelah Anda login.

## Apa yang Bisa Anda Lakukan Sekarang

Dengan RcloneView berjalan di Linux, Anda dapat:

- **Menjelajahi** 70+ penyedia cloud dalam explorer dua panel.
- **Mount** cloud apa pun sebagai direktori lokal.
- **Sinkronisasi** antara cloud, NAS, dan penyimpanan lokal.
- **Menjadwalkan** job pencadangan otomatis.
- **Membandingkan** folder sebelum sinkronisasi untuk mencegah konflik.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView running on Linux" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Instal** dengan `dpkg -i` dan `apt-get install -f`.
3. **Siapkan FUSE** untuk mount.
4. **Tambahkan remote**, mount, sinkronisasi, dan jadwalkan.

---

**Panduan Terkait:**

- [Mount Penyimpanan Cloud sebagai Drive Lokal](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Membuat Sync Job](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Penjadwalan Job](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Membandingkan Isi Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
