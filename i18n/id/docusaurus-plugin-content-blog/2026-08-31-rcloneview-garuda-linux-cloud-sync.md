---
slug: rcloneview-garuda-linux-cloud-sync
title: "RcloneView di Garuda Linux — Sinkronisasi dan Pencadangan Penyimpanan Cloud"
authors:
  - steve
description: "Jalankan RcloneView di Garuda Linux untuk memasang, menyinkronkan, dan mencadangkan 90+ penyedia cloud dengan GUI desktop lengkap tanpa memerlukan paket AUR."
keywords:
  - rcloneview garuda linux
  - sinkronisasi cloud garuda linux
  - penyimpanan cloud garuda linux
  - install rcloneview arch based linux
  - pencadangan garuda linux
  - penyimpanan cloud garuda
  - rcloneview appimage garuda
  - sinkronisasi file garuda linux
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

# RcloneView di Garuda Linux — Sinkronisasi dan Pencadangan Penyimpanan Cloud

> Desktop Garuda Linux yang dioptimalkan untuk performa cocok dengan GUI Flutter RcloneView yang ringan untuk mengelola penyimpanan cloud tanpa menyentuh terminal.

Garuda Linux dibuat untuk orang-orang yang menginginkan sistem berbasis Arch tanpa harus menghabiskan akhir pekan untuk mengonfigurasinya — desktop yang sudah dioptimalkan, pengaturan default yang masuk akal, dan fokus untuk segera mulai bekerja. RcloneView mengikuti filosofi yang sama untuk penyimpanan cloud: aplikasi desktop native yang memasang, menyinkronkan, dan mencadangkan 90+ penyedia cloud dari satu jendela, tanpa perlu menulis skrip perintah rclone secara manual. Karena Garuda hadir dengan desktop grafis lengkap secara default, RcloneView berjalan persis seperti yang dimaksudkan — tanpa perlu solusi alternatif headless.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menginstal RcloneView di Garuda Linux

RcloneView hanya didistribusikan dari [rcloneview.com](https://rcloneview.com/src/download.html) — tidak ada paket AUR yang bisa diambil dengan `pacman` atau AUR helper. Unduh build `.AppImage` untuk opsi portabel tanpa instalasi, atau ambil paket `.rpm` jika Anda lebih suka terdaftar di basis data paket sistem Anda. Build x86_64 dan aarch64 keduanya tersedia, sesuai dengan perangkat keras yang menjalankan instalasi Garuda Anda.

RcloneView dibuat dengan Flutter dan Dart, bukan Qt atau Electron, sehingga tidak memerlukan rantai dependensi dari toolkit terpisah. Ia bergantung pada GTK+3 dan pustaka indikator tray (libayatana-appindicator3-1 atau libappindicator3-1) untuk ikon trainya, keduanya standar pada edisi KDE, GNOME, dan desktop lainnya di Garuda. Untuk memasang penyimpanan cloud sebagai drive lokal, pastikan `fuse3` telah terinstal.

<img src="/support/images/en/blog/new-remote.png" alt="Layar pengaturan remote RcloneView di Garuda Linux" class="img-large img-center" />

## Menyiapkan Mount dan Remote

Edisi desktop Garuda menjalankan X11 atau Wayland, dan fitur mount RcloneView bekerja dengan keduanya. Tambahkan remote melalui tab Remote, autentikasi via OAuth untuk penyedia seperti Google Drive atau Dropbox, atau masukkan kredensial secara langsung untuk penyimpanan kompatibel S3 dan berbasis protokol. Pasang remote tersebut sebagai jalur lokal menggunakan nfsmount, jenis mount default RcloneView di Linux, dan jelajahi file cloud Anda melalui pengelola file native Garuda seolah-olah berada di disk.

Mode cache secara default diatur ke "writes", menyeimbangkan responsivitas dengan penggunaan memori — patut diperiksa jika Anda memasang remote yang penuh dengan file besar dan ingin kontrol yang lebih ketat atas caching lokal.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Memasang remote cloud dari Mount Manager RcloneView di Linux" class="img-large img-center" />

## Mengotomatiskan Pencadangan dan Tugas Sinkronisasi

Setelah remote Anda terhubung, Job Manager menangani pekerjaan yang berulang: mencadangkan folder lokal ke penyimpanan cloud, menyinkronkan dua penyedia satu sama lain, atau mencerminkan satu sumber ke beberapa tujuan sekaligus. Konfigurasikan filter untuk melewati jenis file yang tidak diinginkan, dan jalankan Dry Run terlebih dahulu untuk melihat pratinjau tepat apa yang akan diubah oleh sebuah tugas.

Job History mencatat setiap eksekusi — waktu mulai, durasi, kecepatan transfer, dan jumlah file — sehingga pencadangan terjadwal meninggalkan jejak audit yang dapat Anda periksa tanpa perlu menggali file log.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Menjadwalkan tugas sinkronisasi cloud di RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh AppImage atau .rpm** dari [rcloneview.com](https://rcloneview.com/src/download.html) — tidak ada paket AUR, jadi instal langsung.
2. **Pastikan fuse3 dan GTK+3** ada di sistem Anda untuk dukungan mount dan tray.
3. **Tambahkan remote cloud pertama Anda** melalui tab Remote dan pasang atau siapkan tugas sinkronisasi.
4. **Simpan tugas berulang** di Job Manager sehingga pencadangan berjalan dengan cara yang sama setiap kali.

Desktop siap pakai dari Garuda dan GUI native RcloneView membentuk perpaduan yang lugas — unduh sekali, hubungkan cloud Anda, dan kelola semuanya tanpa meninggalkan lingkungan grafis tempat Garuda dibangun.

---

**Panduan Terkait:**

- [Instal RcloneView di Arch Linux — Panduan Sinkronisasi dan Pencadangan Cloud](https://rcloneview.com/support/blog/rcloneview-arch-linux-cloud-sync)
- [RcloneView di Manjaro Linux — Sinkronisasi Penyimpanan Cloud](https://rcloneview.com/support/blog/rcloneview-manjaro-linux-cloud-sync)
- [Instal RcloneView di Fedora dan RHEL — Panduan Sinkronisasi Cloud](https://rcloneview.com/support/blog/rcloneview-fedora-rhel-linux-cloud-sync)

<CloudSupportGrid />
