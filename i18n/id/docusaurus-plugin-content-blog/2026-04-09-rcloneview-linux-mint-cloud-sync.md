---
slug: rcloneview-linux-mint-cloud-sync
title: "Instal dan Gunakan RcloneView di Linux Mint untuk Sinkronisasi Cloud"
authors:
  - tayson
description: "Instal RcloneView di Linux Mint dan atur sinkronisasi cloud, pencadangan, serta manajemen file. Panduan langkah demi langkah untuk edisi Cinnamon, MATE, dan Xfce."
keywords:
  - rcloneview
  - linux mint cloud sync
  - rcloneview linux mint
  - linux mint cloud storage
  - linux mint google drive
  - linux mint onedrive
  - linux mint cloud backup
  - linux mint file manager cloud
  - mint rclone gui
  - linux mint dropbox alternative
tags:
  - RcloneView
  - linux
  - platform
  - cloud-sync
  - guide
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Instal dan Gunakan RcloneView di Linux Mint untuk Sinkronisasi Cloud

> Linux Mint adalah salah satu distribusi desktop Linux paling populer, tetapi tidak memiliki integrasi penyimpanan cloud bawaan selain plugin dasar dari file manager Nemo — **RcloneView** mengisi kekurangan tersebut dengan dukungan multi-cloud yang lengkap.

Linux Mint hadir dengan perangkat desktop yang unggul — file manager Nemo, Timeshift untuk pencadangan sistem, dan desktop Cinnamon (atau MATE/Xfce) yang rapi. Namun, integrasi penyimpanan cloud masih minim. Tidak ada klien Google Drive, OneDrive, atau Dropbox bawaan dari sistem. Meskipun ada solusi pihak ketiga (Insync, rclone CLI, GNOME Online Accounts di MATE), tidak satu pun yang menyediakan GUI multi-cloud yang komprehensif. RcloneView berjalan secara native di Linux Mint di semua edisi dan terhubung ke lebih dari 70 penyedia cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Instalasi di Linux Mint

Linux Mint berbasis Ubuntu LTS, sehingga proses instalasinya sama seperti pada sistem Ubuntu/Debian.

### Metode 1: AppImage (Direkomendasikan)

AppImage adalah metode instalasi paling sederhana dan bekerja di semua edisi Linux Mint (Cinnamon, MATE, Xfce):

1. Unduh AppImage RcloneView dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Jadikan dapat dieksekusi: klik kanan pada file di Nemo, pilih Properties > Permissions, lalu centang "Allow executing file as program". Atau jalankan `chmod +x RcloneView-*.AppImage` di terminal.
3. Klik dua kali untuk menjalankannya.

AppImage ini menyertakan semua yang dibutuhkan RcloneView, termasuk binary rclone yang sudah tertanam. Tidak ada paket sistem tambahan yang diperlukan.

### Metode 2: Paket .deb

Unduh paket `.deb` dari situs web RcloneView. Instal dengan klik dua kali (yang akan membuka package manager) atau melalui terminal:

```
sudo dpkg -i rcloneview_*.deb
sudo apt-get install -f
```

Paket `.deb` ini terintegrasi dengan sistem — menambahkan RcloneView ke menu aplikasi dan menangani asosiasi berkas desktop.

## Pengaturan FUSE untuk Mounting

Untuk melakukan mount penyimpanan cloud sebagai direktori lokal di Linux Mint, FUSE harus tersedia. Sebagian besar instalasi Mint sudah menyertakan FUSE secara default. Periksa dengan menjalankan:

```
fusermount --version
```

Jika FUSE belum terpasang, tambahkan dengan:

```
sudo apt install fuse3
```

Pastikan pengguna Anda berada dalam grup `fuse`:

```
sudo usermod -a -G fuse $USER
```

Logout lalu login kembali agar perubahan grup berlaku. Setelah itu, RcloneView dapat me-mount penyedia cloud apa pun sebagai direktori lokal yang muncul di Nemo bersama folder lokal Anda.

## Menambahkan Remote Penyimpanan Cloud

Jalankan RcloneView dan buka Remote Manager. Tambahkan akun cloud Anda:

- **Google Drive**: Pilih Google Drive, lakukan otorisasi via OAuth di browser default Anda (Firefox atau Chromium di Mint).
- **OneDrive**: Pilih Microsoft OneDrive, lakukan otorisasi via OAuth.
- **Dropbox**: Pilih Dropbox, lakukan otorisasi via OAuth.
- **S3-compatible**: Masukkan access key, secret key, dan endpoint untuk AWS S3, Wasabi, Backblaze B2 S3, dll.

Setiap remote akan muncul di dropdown explorer. Browser default Linux Mint menangani alur OAuth dengan lancar — tanpa konfigurasi khusus.

<img src="/support/images/en/blog/new-remote.png" alt="Adding cloud remotes on Linux Mint in RcloneView" class="img-large img-center" />

## Menelusuri dan Mengelola File Cloud

Explorer dua panel milik RcloneView melengkapi Nemo untuk operasi cloud. Meskipun Nemo menangani file lokal dengan sangat baik, RcloneView memperluas kemampuan tersebut ke penyimpanan cloud. Telusuri Google Drive di satu panel dan direktori home lokal Anda di panel lainnya. Seret dan lepas file di antara keduanya, atau antara dua penyedia cloud yang berbeda.

Bagi pengguna yang sudah terbiasa dengan mode dual-pane Nemo (tersedia melalui ekstensi Nemo), tata letak RcloneView akan terasa familiar. Perbedaannya adalah panel RcloneView dapat membuka penyedia cloud apa pun, tidak hanya jalur lokal dan jaringan.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing cloud storage on Linux Mint with RcloneView" class="img-large img-center" />

## Mounting Penyimpanan Cloud di Nemo

Setelah di-mount, direktori penyimpanan cloud muncul di Nemo seperti folder lainnya. Anda dapat membuka file langsung dari penyimpanan cloud yang di-mount menggunakan aplikasi Linux Mint Anda — LibreOffice, GIMP, VLC, atau aplikasi lainnya.

Mount Google Drive Anda ke `~/GoogleDrive` dan folder tersebut akan muncul di sidebar Nemo. Aktifkan VFS caching untuk performa yang lebih lancar — file yang baru diakses akan di-cache secara lokal, sehingga akses berulang menjadi instan. Sesuaikan ukuran cache berdasarkan ruang disk yang tersedia.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting cloud storage as local drive on Linux Mint" class="img-large img-center" />

## Menjadwalkan Pencadangan dengan Integrasi Sistem

Scheduler bawaan RcloneView menangani tugas pencadangan yang berulang. Konfigurasikan sinkronisasi malam hari dari direktori home Anda (atau folder tertentu) ke Google Drive, Backblaze B2, atau penyedia cloud lainnya. RcloneView menjalankan tugas terjadwal ini secara otomatis.

Bagi pengguna Linux Mint yang lebih menyukai penjadwalan tingkat sistem, Anda juga dapat memicu perintah rclone melalui cron atau systemd timer menggunakan mode koneksi rclone eksternal milik RcloneView.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling cloud backup on Linux Mint in RcloneView" class="img-large img-center" />

## Autostart Saat Login

Agar RcloneView berjalan otomatis saat Anda login ke Linux Mint:

1. Buka **Startup Applications** dari menu sistem.
2. Klik Add dan masukkan path menuju AppImage RcloneView atau binary yang terpasang.
3. RcloneView akan berjalan bersama sesi desktop Anda, siap untuk tugas terjadwal dan drive yang di-mount.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html) — AppImage atau .deb.
2. Instal FUSE jika Anda berencana melakukan mount penyimpanan cloud.
3. Tambahkan akun cloud Anda di Remote Manager.
4. Telusuri, sinkronkan, dan cadangkan file Anda dari desktop Linux Mint.

Linux Mint menghadirkan pengalaman desktop yang rapi, dan RcloneView menambahkan manajemen file multi-cloud yang belum tersedia secara native pada sistem. Bersama-sama, keduanya memberi Anda kendali penuh atas penyimpanan lokal maupun cloud.

---

**Panduan Terkait:**

- [Menambahkan Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [Mount Penyimpanan Cloud sebagai Drive Lokal](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Penjadwalan Tugas](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
