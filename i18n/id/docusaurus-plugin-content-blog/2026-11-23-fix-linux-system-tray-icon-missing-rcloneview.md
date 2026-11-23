---
slug: fix-linux-system-tray-icon-missing-rcloneview
title: "Atasi Ikon System Tray yang Hilang di Linux — Pulihkan Kontrol Latar Belakang di RcloneView"
authors:
  - steve
description: "Ikon tray RcloneView tidak muncul di Linux? Instal pustaka AppIndicator, aktifkan dukungan tray di desktop Anda, dan dapatkan kembali kontrol mount serta job latar belakang."
keywords:
  - ikon tray rcloneview hilang linux
  - ikon system tray linux tidak muncul
  - libayatana-appindicator3-1
  - libappindicator3-1
  - gnome appindicator tray
  - pemecahan masalah rcloneview linux
  - menu tray mount cloud linux
  - sinkronisasi latar belakang linux gui
  - rcloneview ubuntu tray
tags:
  - RcloneView
  - troubleshooting
  - tips
  - linux
  - ubuntu
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Atasi Ikon System Tray yang Hilang di Linux — Pulihkan Kontrol Latar Belakang di RcloneView

> Tanpa ikon tray, tidak ada tombol cepat untuk mount dan tidak ada cara mudah kembali ke aplikasi yang diminimalkan. Berikut cara memunculkannya kembali.

Di Windows dan macOS, ikon tray RcloneView langsung muncul. Di Linux, ikon ini bergantung pada dua hal yang tidak dikendalikan aplikasi: pustaka AppIndicator di sistem dan lingkungan desktop yang menampilkan ikon indikator. Jika salah satunya tidak ada, RcloneView tetap berjalan, tetapi ikon yang menampilkan daftar drive yang di-mount, mengaktifkan/menonaktifkan mount, dan membuka kembali jendela tidak pernah muncul.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Ikon Menghilang

RcloneView adalah aplikasi desktop Flutter. Di Linux, aplikasi ini membutuhkan sesi X11 atau Wayland yang berjalan, GTK+ 3.0, serta **libayatana-appindicator3-1** atau **libappindicator3-1** untuk system tray. Paket `.deb` dan `.rpm` dibangun dan diuji pada Ubuntu 22.04 LTS, sehingga instalasi minimal, distro lain, atau AppImage yang dijalankan di sistem yang dipangkas bisa saja tidak memiliki pustaka indikator.

Penyebab kedua adalah desktop. Beberapa lingkungan, terutama GNOME bawaan, tidak menampilkan ikon AppIndicator sampai ekstensi indikator diaktifkan. Pustakanya bisa saja sudah terinstal, tetapi ikonnya tetap tersembunyi.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager di RcloneView sebagai alternatif saat ikon tray Linux hilang" class="img-large img-center" />

## Langkah 1: Instal Pustaka AppIndicator

Di Debian, Ubuntu, dan turunannya, instal `libayatana-appindicator3-1` dari repositori distribusi Anda (atau `libappindicator3-1` pada rilis lama). Di Fedora dan sistem berbasis RHEL, instal paket GTK3 ayatana atau libappindicator yang setara yang disediakan rilis Anda. Pastikan juga GTK+ 3 tersedia.

Tutup RcloneView sepenuhnya lalu jalankan kembali. Tray disiapkan saat aplikasi diluncurkan, jadi pustaka yang diinstal saat aplikasi terbuka baru berlaku setelah restart.

## Langkah 2: Aktifkan Dukungan Indikator di Desktop Anda

Di GNOME, aktifkan ekstensi AppIndicator/KStatusNotifierItem melalui pengelola ekstensi distribusi Anda; Ubuntu menyertakan satu yang aktif secara default. KDE Plasma, Xfce, Cinnamon, dan MATE menampilkan ikon indikator melalui widget panel atau area notifikasi mereka sendiri. Pastikan widget tersebut ada di panel dan tidak disembunyikan.

Jika Anda menggunakan tiling window manager, tambahkan bar yang mendukung StatusNotifierItem, atau ikon tidak punya tempat untuk muncul.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount remote cloud dari Explorer RcloneView di Linux" class="img-large img-center" />

## Langkah 3: Periksa Pengaturan Start Minimized dan Quit on Close

Tanpa ikon tray, **Start minimized** dapat membuat RcloneView tampak seperti tidak pernah berjalan, karena aplikasi langsung diluncurkan ke tray yang tidak terlihat. Sampai ikon berfungsi, buka **Settings > General**, matikan Start minimized, dan aktifkan **Quit on close** agar menutup jendela tidak meninggalkan proses tersembunyi yang tetap berjalan.

Anda tidak memerlukan tray untuk pekerjaan inti. **Mount Manager** melakukan mount dan unmount drive, **Job Manager** menjalankan job yang tersimpan, dan **Job History** menunjukkan apa yang dijalankan dan apakah sudah selesai.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History di RcloneView mengonfirmasi job latar belakang di Linux" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html) sebagai `.deb`, `.rpm`, atau `.AppImage` untuk x86_64 atau ARM64.
2. Instal `libayatana-appindicator3-1` (atau `libappindicator3-1`) dan pastikan GTK+ 3 tersedia.
3. Aktifkan dukungan AppIndicator di lingkungan desktop Anda, lalu restart RcloneView sepenuhnya.
4. Aktifkan kembali **Start minimized** setelah ikon muncul dan Anda dapat mengakses mount dari tray.

Tidak seperti alat yang hanya untuk mount, RcloneView juga menyediakan sinkronisasi dan perbandingan folder dengan FREE License, dan setelah ikon tray kembali, semuanya hanya sejauh satu klik.

---

**Panduan Terkait:**

- [System Tray dan Sinkronisasi Latar Belakang — Jaga Job Cloud Tetap Berjalan di RcloneView](https://rcloneview.com/support/blog/system-tray-background-sync-rcloneview)
- [Cara Menginstal RcloneView di Ubuntu dan Debian Linux — Panduan Pengaturan Lengkap](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [Atasi Error Mount Rclone dan FUSE di RcloneView](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
