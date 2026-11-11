---
slug: rcloneview-endeavouros-cloud-sync
title: "RcloneView di EndeavourOS — Sinkronisasi dan Pencadangan Penyimpanan Cloud"
authors:
  - steve
description: "Jalankan RcloneView di EndeavourOS dengan AppImage resmi. Membahas kebutuhan GTK+3 dan FUSE, mount drive cloud, dan sinkronisasi 90+ penyedia cloud."
keywords:
  - RcloneView EndeavourOS
  - sinkronisasi cloud EndeavourOS
  - GUI rclone EndeavourOS
  - pencadangan cloud Linux berbasis Arch
  - RcloneView AppImage
  - mount drive cloud di EndeavourOS
  - sinkronisasi Google Drive di EndeavourOS
  - pengelola file multi-cloud Linux
  - pencadangan cloud rolling release
tags:
  - RcloneView
  - linux
  - platform
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView di EndeavourOS — Sinkronisasi dan Pencadangan Penyimpanan Cloud

> EndeavourOS memberi Anda basis Arch rolling dengan desktop siap pakai, dan AppImage resmi RcloneView berjalan di atasnya tanpa paket pihak ketiga apa pun.

Pengguna EndeavourOS biasanya menginginkan perangkat lunak terbaru dan sedikit pengaturan manual. Penyimpanan cloud sering menjadi celahnya: Google Drive, OneDrive, dan bucket S3 tidak memiliki klien desktop native di sini, dan mengelola beberapa konfigurasi CLI cukup merepotkan. RcloneView melakukan mount dan sinkronisasi 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux, serta menyertakan rclone tertanam miliknya sendiri.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menginstal dengan AppImage Resmi

RcloneView hanya didistribusikan melalui [rcloneview.com](https://rcloneview.com/src/download.html). Tidak ada paket AUR, jadi abaikan instruksi `yay` atau `paru` yang Anda temukan di tempat lain. Untuk sistem berbasis Arch, AppImage adalah pilihan yang wajar. Unduh build untuk arsitektur Anda (x86_64 atau aarch64), jadikan dapat dieksekusi, lalu jalankan:

```bash
chmod +x RcloneView-*-x86_64.AppImage
./RcloneView-*-x86_64.AppImage
```

RcloneView adalah aplikasi desktop Flutter, bukan aplikasi Qt. Aplikasi ini memerlukan GTK+3, sesi X11 atau Wayland yang sedang berjalan, dan pustaka AppIndicator untuk ikon system tray. Edisi desktop bawaan EndeavourOS (KDE Plasma, Xfce, GNOME, dan lainnya) sudah menyediakan display server dan biasanya GTK+3. Instal FUSE untuk mount; fuse3 direkomendasikan (`sudo pacman -S --needed fuse3`).

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote cloud baru di RcloneView pada EndeavourOS" class="img-large img-center" />

Karena AppImage bersifat mandiri, `pacman -Syu` pada rolling release tidak akan menggantikannya. Pembaruan otomatis hanya tersedia di macOS, jadi untuk memperbarui di Linux Anda mengunduh AppImage yang lebih baru dari halaman yang sama.

## Menghubungkan Remote dan Melakukan Mount Drive

Buka **Remote > New Remote**. Google Drive, Dropbox, OneDrive, Box, dan pCloud masuk melalui browser dengan OAuth. S3, Backblaze B2, dan Cloudflare R2 menggunakan access key. Remote Anda muncul sebagai tab di Explorer, dan Anda dapat membagi hingga empat panel untuk menjelajahi share NAS di samping bucket cloud.

Untuk bekerja dengan file cloud di Dolphin atau Thunar, lakukan mount pada remote. Klik ikon Mount di toolbar panel, atau buka Mount Manager dan buat mount baru. Di Linux Anda memilih jalur lokal seperti `~/cloud/gdrive`, dan mode cache bawaan `writes` sudah menangani sebagian besar pengeditan. Aktifkan **Allow other** hanya jika pengguna lokal lain perlu mengakses mount tersebut.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Melakukan mount remote cloud dari explorer RcloneView di Linux" class="img-large img-center" />

## Sinkronisasi dan Penjadwalan Pencadangan

Bayangkan sebuah workstation developer dengan `~/Projects` dan `~/Documents`. Buat job sinkronisasi dari disk lokal ke Backblaze B2, tambahkan filter `.git/` di Step 3, lalu jalankan Dry Run untuk melihat dengan tepat apa yang akan ditransfer. Sinkronisasi satu arah hanya mengubah tujuan. Sinkronisasi dua arah (Beta) masih eksperimental, jadi uji terlebih dahulu pada folder yang tidak penting.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Pemantauan transfer langsung di RcloneView selama job pencadangan Linux" class="img-large img-center" />

Dengan lisensi PLUS, Step 4 menambahkan penjadwalan bergaya crontab, sehingga job berjalan setiap malam selama RcloneView berada di tray. RcloneView memerlukan sesi desktop Anda untuk berjalan dan tidak dapat dijalankan sebagai layanan systemd. Pada server Arch headless, jalankan `rclone rcd` di server tersebut dan hubungkan dari desktop Anda melalui Connect Manager.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Membuat job sinkronisasi terjadwal di RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html), pilih AppImage Linux untuk arsitektur Anda.
2. Jadikan AppImage dapat dieksekusi, instal `fuse3` jika memerlukan mount, lalu jalankan dari sesi desktop Anda.
3. Tambahkan remote cloud Anda dan lakukan mount pada remote yang ingin digunakan di pengelola file.
4. Buat job sinkronisasi, uji dengan Dry Run, dan jadwalkan jika Anda memiliki PLUS.

Desktop rolling release dan satu jendela multi-cloud menghasilkan pengaturan pencadangan yang minim perawatan.

---

**Panduan Terkait:**

- [Performa Mount dengan VFS Cache](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [Mengatasi Error FUSE pada Mount Rclone](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)
- [Connection Manager — Rclone Tertanam dan Eksternal](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)

<CloudSupportGrid />
