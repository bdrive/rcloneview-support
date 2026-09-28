---
slug: rcloneview-void-linux-cloud-sync
title: "RcloneView di Void Linux — Sinkronisasi dan Cadangan Penyimpanan Cloud"
authors:
  - steve
description: "Instal dan jalankan RcloneView di Void Linux untuk manajemen file multi-cloud, mount, dan sinkronisasi menggunakan build AppImage."
keywords:
  - RcloneView Void Linux
  - penyimpanan cloud void linux
  - void linux appimage
  - rclone gui void linux
  - mount penyimpanan cloud void linux
  - alat cadangan void linux
  - xbps rclone gui
  - void linux runit sinkronisasi cloud
  - pengelola file cloud void linux
  - gui cloud lintas platform linux
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView di Void Linux — Sinkronisasi dan Cadangan Penyimpanan Cloud

> Jalankan pengelola multi-cloud grafis yang lengkap di Void Linux tanpa perlu menunggu paket XBPS muncul.

Basis paket rolling-release dan independen milik Void Linux (XBPS, runit) berarti banyak aplikasi GUI yang datang terlambat atau tidak pernah dikemas sama sekali. RcloneView tidak ada di repositori XBPS, tetapi karena tersedia sebagai .AppImage, .deb, dan .rpm untuk Linux dari halaman unduhannya sendiri, pengguna Void dapat menjalankannya langsung tanpa memerlukan build khusus distribusi. Lingkungan desktop dengan X11 atau Wayland diperlukan, karena RcloneView adalah aplikasi GUI native, bukan layanan headless.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menginstal RcloneView di Void

Cara paling andal di Void adalah .AppImage, karena membawa runtime-nya sendiri dan sepenuhnya menghindari masalah penamaan paket atau ketidakcocokan dependensi XBPS. Unduh file `RcloneView-{version}-{arch}.AppImage` untuk x86_64 atau aarch64, jadikan dapat dieksekusi, lalu jalankan langsung dari pengelola file atau terminal Anda. Void tidak memelihara repositori APT atau RPM, jadi jika Anda lebih suka build .deb atau .rpm, Anda perlu mengekstraknya secara manual alih-alih menginstalnya melalui `xbps-install`. RcloneView hanya didistribusikan dari rcloneview.com — tidak ada paket AUR, Flatpak, atau Snap sebagai alternatif.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote setup running on Void Linux" class="img-large img-center" />

Sebelum menjalankannya, pastikan GTK+3 serta `libayatana-appindicator3-1` atau `libappindicator3-1` sudah ada untuk mendukung system tray — basis minimal Void tidak menginstalnya secara default seperti beberapa distribusi yang berfokus pada desktop.

## Menyiapkan Remote dan Mount

Setelah RcloneView berjalan, tambahkan remote cloud Anda dengan cara yang sama seperti di platform lain: login OAuth untuk layanan seperti Google Drive atau Dropbox, entri kredensial untuk endpoint yang kompatibel dengan S3 atau SFTP. Mount bekerja melalui metode nfsmount dari rclone bawaan di Linux, yang memerlukan FUSE — instal `fuse3` melalui XBPS jika belum ada, karena instalasi minimal Void sering kali melewatkannya.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a cloud remote as a local drive on Void Linux" class="img-large img-center" />

RcloneView terhubung ke 90+ penyedia dan me-mount serta menyinkronkan semuanya dari jendela yang sama, baik di Windows, macOS, maupun Linux — berguna jika Anda membagi pekerjaan antara workstation Void Linux dan mesin lain.

## Menjadwalkan Cadangan dengan Mempertimbangkan runit

RcloneView tidak dapat berjalan sebagai layanan systemd, dan Void sama sekali tidak menggunakan systemd — ia menjalankan runit. Perbedaan itu tidak menjadi masalah di sini, karena Job Manager milik RcloneView sendiri menangani penjadwalan secara internal alih-alih bergantung pada sistem init. Siapkan tugas sinkronisasi terjadwal melalui penjadwal gaya crontab (fitur PLUS) agar cadangan berjalan sesuai jadwal selagi aplikasi tetap terbuka di system tray.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring cloud backup job on Void Linux" class="img-large img-center" />

Jika Anda benar-benar menginginkan daemon latar belakang tanpa GUI sama sekali di Void, itu adalah tugas untuk `rclone rcd` secara langsung, bukan RcloneView — aplikasi itu sendiri selalu memerlukan server tampilan untuk berjalan.

## Memulai

1. **Unduh AppImage** dari [rcloneview.com](https://rcloneview.com/src/download.html) dan jadikan dapat dieksekusi.
2. Instal `fuse3` dan pustaka AppIndicator melalui XBPS jika fitur mount atau tray tidak langsung berfungsi.
3. Tambahkan remote cloud Anda dan konfirmasi akses di panel Explorer.
4. Buat tugas sinkronisasi atau cadangan dan, jika diinginkan, jadwalkan agar berjalan otomatis.

Minimalisme Void tidak harus berarti mengelola penyimpanan cloud secara manual — RcloneView membawa alur kerja GUI yang sama ke sini seperti di tempat lain.

---

**Panduan Terkait:**

- [RcloneView di Gentoo Linux — Sinkronisasi dan Cadangan Penyimpanan Cloud](https://rcloneview.com/support/blog/rcloneview-gentoo-linux-cloud-sync)
- [RcloneView di Arch Linux — Sinkronisasi dan Cadangan Penyimpanan Cloud](https://rcloneview.com/support/blog/rcloneview-arch-linux-cloud-sync)
- [Menginstal RcloneView di Ubuntu dan Debian Linux](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)

<CloudSupportGrid />
