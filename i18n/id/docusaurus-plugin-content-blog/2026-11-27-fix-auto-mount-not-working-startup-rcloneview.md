---
slug: fix-auto-mount-not-working-startup-rcloneview
title: "Memperbaiki Auto Mount yang Tidak Berfungsi saat Startup — Pulihkan Drive Cloud dengan RcloneView"
authors:
  - steve
description: "Drive cloud hilang setelah reboot? Perbaiki auto mount RcloneView saat startup: periksa lisensi, Launch at login, huruf drive, FUSE di Linux, dan izin macOS."
keywords:
  - auto mount tidak berfungsi
  - drive cloud tidak ter-mount saat startup
  - rcloneview auto mount
  - mount penyimpanan cloud saat boot
  - drive ter-mount hilang setelah reboot
  - perbaikan rclone mount saat startup
  - jalankan drive cloud saat login
  - error mount fuse linux
  - konflik huruf drive mount
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki Auto Mount yang Tidak Berfungsi saat Startup — Pulihkan Drive Cloud dengan RcloneView

> Jika drive cloud Anda hilang setiap kali reboot, daftar periksa singkat biasanya bisa mengembalikannya untuk seterusnya.

Anda sudah menyiapkan mount untuk Google Drive atau bucket S3, mount itu berfungsi sesuai harapan, lalu setelah restart huruf drive atau folder mount-nya hilang. Auto mount bergantung pada beberapa pengaturan yang bekerja bersama: aplikasi harus berjalan, mount harus ditandai untuk auto mount, dan sistem operasi harus mengizinkannya. Panduan ini membahas setiap penyebabnya di RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Periksa Lisensi dan Pengaturan Auto Mount

**Auto Mount on Startup** adalah fitur lisensi PLUS. Dengan lisensi FREE, mount dan unmount berfungsi penuh, tetapi setiap mount harus dijalankan secara manual setelah aplikasi dibuka. Footer jendela utama menunjukkan lisensi mana yang aktif.

Dengan PLUS aktif, buka **Mount Manager** dari tab Remote dan pastikan mount tersebut mengaktifkan **Auto mount**. Ingat bahwa Edit dinonaktifkan selama mount aktif, jadi lakukan unmount terlebih dahulu, edit pengaturannya, lalu pilih **Save and mount**.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mengaktifkan auto mount di Mount Manager RcloneView" class="img-large img-center" />

## Pastikan RcloneView Benar-Benar Berjalan

Auto mount dijalankan saat RcloneView dibuka, jadi aplikasinya sendiri harus berjalan saat login. Di **Settings > General**, aktifkan **Launch at login**. Nyalakan **Start minimized** jika Anda ingin aplikasi langsung terbuka di system tray. Menu tray kemudian menampilkan drive yang ter-mount dan memungkinkan Anda mengaktifkan atau menonaktifkan masing-masing.

Periksa juga **Quit on close**. Jika aktif, menutup jendela akan keluar dari aplikasi dan melakukan unmount pada drive Anda. Matikan opsi ini agar RcloneView, beserta mount-nya, tetap berjalan di latar belakang.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Melakukan mount folder cloud dari explorer RcloneView" class="img-large img-center" />

## Atasi Hambatan Khusus Platform

**Windows:** Jika mount menggunakan huruf drive tetap yang sudah lebih dulu dipakai oleh USB flash drive atau network share, mount tidak dapat terpasang. Atur **Target** ke Auto, atau pilih huruf yang tidak dipakai oleh apa pun.

**Linux:** Mount memerlukan FUSE (fuse3 direkomendasikan). Mount menggunakan nfsmount secara default, dan aplikasi memerlukan GTK+3 serta sesi desktop X11 atau Wayland yang sedang berjalan. RcloneView adalah aplikasi GUI dan tidak dapat menjalankan mount sebagai layanan systemd headless.

**macOS:** Jika titik mount berada di dalam Desktop, Documents, atau Downloads, berikan akses kepada RcloneView di **Privacy & Security > Files & Folders** atau **Full Disk Access**, lalu restart aplikasi.

## Baca Log Jika Cara Lain Tidak Berhasil

Token OAuth yang kedaluwarsa dan keterlambatan jaringan saat boot juga dapat menghentikan mount. Aktifkan **rclone logging** di Settings > Embedded Rclone, atur level log ke DEBUG, restart embedded rclone, lalu reboot. Log akan menampilkan error yang tepat. Error autentikasi berarti Anda perlu mengedit remote dan menghubungkannya kembali; error jaringan biasanya hilang setelah Anda melakukan mount lagi dari tray.

<img src="/support/images/en/blog/new-remote.png" alt="Menghubungkan kembali remote cloud di RcloneView setelah error autentikasi" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Pastikan lisensi PLUS aktif dan aktifkan **Auto mount** pada setiap mount di Mount Manager.
3. Nyalakan **Launch at login** dan matikan **Quit on close** di Settings > General.
4. Selesaikan masalah huruf drive, FUSE, atau izin macOS, lalu reboot untuk menguji.

Setelah daftar periksa terpenuhi, drive cloud Anda siap setiap kali Anda mulai bekerja.

---

**Panduan Terkait:**

- [Auto Mount Penyimpanan Cloud saat Startup dengan RcloneView](https://rcloneview.com/support/blog/auto-mount-startup-rcloneview)
- [Memperbaiki Konflik Huruf Drive Mount di Windows dengan RcloneView](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)
- [Memperbaiki Error FUSE rclone Mount dengan RcloneView](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
