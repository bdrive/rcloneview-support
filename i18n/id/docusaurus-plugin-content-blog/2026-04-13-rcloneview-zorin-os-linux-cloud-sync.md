---
slug: rcloneview-zorin-os-linux-cloud-sync
title: "RcloneView di Zorin OS — Sinkronisasi dan Pencadangan Penyimpanan Cloud"
authors:
  - tayson
description: "Instal dan gunakan RcloneView di Zorin OS untuk sinkronisasi dan pencadangan penyimpanan cloud. Manajemen cloud berbasis GUI untuk Google Drive, OneDrive, S3, dan 90+ layanan di Zorin OS."
keywords:
  - RcloneView Zorin OS
  - penyimpanan cloud Zorin OS
  - sinkronisasi cloud Zorin OS
  - pencadangan cloud Zorin OS
  - RcloneView Linux Debian
  - file manager cloud Zorin OS
  - instal RcloneView Zorin
  - GUI penyimpanan cloud Linux
  - Zorin OS Google Drive
  - sinkronisasi cloud berbasis Ubuntu
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView di Zorin OS — Sinkronisasi dan Pencadangan Penyimpanan Cloud

> Instal RcloneView di Zorin OS dan kelola 90+ layanan penyimpanan cloud dari GUI — sinkronkan Google Drive, OneDrive, Amazon S3, dan lainnya di desktop Zorin OS Anda.

Zorin OS adalah distribusi Linux berbasis Ubuntu yang dirancang dengan antarmuka desktop yang familier dan rapi — terutama populer di kalangan pengguna yang beralih dari Windows atau macOS. Fondasi Ubuntu/Debian-nya berarti sistem ini bekerja mulus dengan paket `.deb`, sehingga instalasi RcloneView menjadi mudah. RcloneView adalah aplikasi desktop GUI yang dibangun dengan Flutter dan memerlukan display server (X11 atau Wayland) serta desktop environment yang berjalan — desktop berbasis GNOME milik Zorin OS memenuhi persyaratan ini.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menginstal RcloneView di Zorin OS

RcloneView didistribusikan melalui unduhan langsung dari [rcloneview.com](https://rcloneview.com/src/download.html). Tidak ada repositori apt atau paket Snap — jangan mencoba `apt install rcloneview` atau `snap install rcloneview` karena keduanya tidak ada. Unduh paket `.deb` untuk arsitektur Anda dari halaman unduhan resmi.

**Instal paket .deb:**

```bash
sudo dpkg -i rclone_view-*-linux-x86_64.deb
```

Jika `dpkg` melaporkan dependensi yang hilang, atasi dengan:

```bash
sudo apt install -f
```

Ini akan menginstal pustaka GTK atau sistem yang hilang secara otomatis di Zorin OS (yang mewarisi repositori apt Ubuntu).

Sebagai alternatif, gunakan `.AppImage` untuk instalasi portabel yang tidak memerlukan integrasi sistem:

```bash
chmod +x RcloneView-*-x86_64.AppImage
./RcloneView-*-x86_64.AppImage
```

<img src="/support/images/en/blog/new-remote.png" alt="Setting up cloud storage remotes in RcloneView on Zorin OS" class="img-large img-center" />

## Pustaka yang Diperlukan di Zorin OS

Zorin OS dilengkapi dengan GTK+ 3.0 dan X11/Wayland sebagai bagian dari instalasi desktop GNOME default-nya. Untuk dukungan system tray, instal pustaka AppIndicator jika belum tersedia:

```bash
sudo apt install libayatana-appindicator3-1
```

Untuk mount drive cloud (fitur virtual drive), instal FUSE3:

```bash
sudo apt install fuse3
```

Setelah instalasi, jalankan RcloneView dari menu aplikasi atau terminal. Aplikasi ini terintegrasi dengan desktop Zorin OS, termasuk dukungan ikon system tray dan notifikasi desktop native untuk penyelesaian tugas.

## Menghubungkan Penyimpanan Cloud

RcloneView dilengkapi dengan binary rclone bawaan — tidak diperlukan instalasi rclone terpisah. Tambahkan layanan cloud Anda melalui tab Remote: klik New Remote dan pilih penyedia Anda. Untuk layanan berbasis OAuth seperti Google Drive, OneDrive, dan Dropbox, jendela browser akan terbuka untuk autentikasi akun. Untuk layanan yang kompatibel dengan S3, masukkan Access Key, Secret Key, dan endpoint URL Anda.

Desktop berbasis GNOME milik Zorin OS menangani pengalihan browser OAuth dengan mulus — jendela autentikasi terbuka di browser default Anda dan kredensial dikirim kembali ke RcloneView secara otomatis.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud sync running in RcloneView on Zorin OS" class="img-large img-center" />

## Sinkronisasi dan Mount Penyimpanan Cloud

Setelah remote dikonfigurasi, gunakan wizard Sync untuk membuat tugas pencadangan atau migrasi. Pilih remote sumber dan tujuan, konfigurasikan opsi transfer dan filter, dan opsional jadwalkan proses berulang (lisensi PLUS). RcloneView berjalan sebagai aplikasi GUI di Zorin OS — sistem ini memerlukan sesi desktop aktif dan display server. Aplikasi ini tidak dapat dikonfigurasi langsung sebagai layanan latar belakang systemd; untuk tugas terjadwal tanpa pengawasan tanpa sesi pengguna, gunakan `rclone rcd` milik rclone sendiri dengan layanan systemd dan hubungkan ke sana dari RcloneView.

Untuk mount penyimpanan cloud sebagai direktori lokal, gunakan Mount Manager di tab Remote. Di Zorin OS, tentukan path mount point dan klik Save and Mount. Folder yang di-mount akan muncul di Nautilus (file manager default Zorin OS) dan dapat diakses seperti direktori lokal biasa.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting Google Drive as a local folder on Zorin OS with RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html) — pilih `.deb` Linux untuk x86_64.
2. Instal dengan `sudo dpkg -i rclone_view-*-linux-x86_64.deb` dan jalankan `sudo apt install -f` jika dependensi hilang.
3. Instal `fuse3` dan `libayatana-appindicator3-1` jika diperlukan untuk dukungan mount dan tray.
4. Tambahkan remote cloud Anda dan mulai sinkronisasi dari lingkungan desktop Zorin OS yang familier.

Kompatibilitas Ubuntu milik Zorin OS membuat instalasi RcloneView menjadi mudah, memberikan pengguna alat manajemen penyimpanan cloud berbasis GUI yang cocok secara alami dengan alur kerja desktop Zorin OS yang rapi.

---

**Panduan Terkait:**

- [Instal RcloneView di Ubuntu dan Debian Linux](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [RcloneView di Pop!_OS Linux — Sinkronisasi Cloud](https://rcloneview.com/support/blog/rcloneview-pop-os-linux-cloud-sync)
- [RcloneView di Fedora, RHEL, dan CentOS Linux](https://rcloneview.com/support/blog/rcloneview-fedora-rhel-centos-linux)

<CloudSupportGrid />
