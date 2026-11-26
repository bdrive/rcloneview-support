---
slug: fix-linux-system-tray-icon-missing-rcloneview
title: "Memperbaiki Ikon System Tray yang Hilang di Linux — Pulihkan Mount dan Job Latar Belakang dengan RcloneView"
authors:
  - alex
description: "Ikon tray RcloneView tidak muncul di Linux? Pelajari bagaimana pustaka AppIndicator, pengaturan desktop, dan opsi RcloneView memulihkan mount di tray dan job latar belakang."
keywords:
  - ikon tray rcloneview hilang linux
  - ikon system tray linux tidak muncul
  - libayatana-appindicator3-1
  - ikon tray appindicator gnome
  - pemecahan masalah rcloneview linux
  - system tray rclone gui linux
  - sinkronisasi cloud latar belakang linux
  - mount manager system tray
  - rcloneview mulai diminimalkan
tags:
  - RcloneView
  - troubleshooting
  - tips
  - linux
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki Ikon System Tray yang Hilang di Linux — Pulihkan Mount dan Job Latar Belakang dengan RcloneView

> Jika RcloneView berjalan di Linux tetapi ikon tray-nya tidak pernah muncul, penyebabnya hampir selalu pustaka AppIndicator yang belum terpasang atau desktop yang menyembunyikan ikon tray.

Ikon system tray RcloneView lebih dari sekadar hiasan. Ikon ini menampilkan daftar drive yang di-mount, mengalihkan mount dan unmount, memulai mount baru, dan menjaga aplikasi tetap dapat diakses saat job berjalan di latar belakang. Ketika ikon ini hilang di Linux — hal yang umum pada instalasi baru Ubuntu, Fedora, atau desktop minimal — pengguna harus membiarkan jendela utama terbuka sepanjang hari atau kehilangan jejak aplikasi setelah menutupnya. Berikut cara mendiagnosis dan memperbaikinya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Ikon Tray Menghilang

Di Linux, RcloneView terintegrasi dengan desktop melalui D-Bus dan AppIndicator. Hal itu memerlukan salah satu dari dua pustaka: **libayatana-appindicator3-1** atau **libappindicator3-1**. Jika keduanya tidak terpasang, aplikasi tetap terbuka — untuk itu diperlukan GTK+ 3.0 dan sesi X11 atau Wayland — tetapi ikon tray tidak memiliki tempat untuk mendaftar.

Penyebab kedua adalah lingkungan desktop. Beberapa desktop, terutama GNOME, tidak menampilkan ikon AppIndicator secara bawaan dan memerlukan ekstensi AppIndicator yang diaktifkan. KDE Plasma, Xfce, Cinnamon, dan MATE umumnya menampilkannya tanpa langkah tambahan.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager RcloneView yang digunakan saat ikon tray Linux tidak tersedia" class="img-large img-center" />

## Perbaikan Langkah demi Langkah

1. **Pasang pustaka AppIndicator.** Gunakan pengelola paket distribusi Anda untuk memasang libayatana-appindicator3-1 (atau libappindicator3-1 pada distribusi yang masih menyediakannya). Nama paket sedikit berbeda antar distribusi, jadi cari "appindicator" di pengelola paket Anda.
2. **Aktifkan dukungan tray di desktop Anda.** Di GNOME, aktifkan ekstensi AppIndicator/KStatusNotifierItem, lalu keluar dan masuk kembali.
3. **Mulai ulang RcloneView sepenuhnya.** Keluar dari aplikasi — bukan hanya menutup jendelanya — lalu jalankan kembali agar aplikasi mendaftar ke tray saat startup.

Jika ikon masih tidak muncul, buka tab **Log** di Info View bagian bawah untuk melihat kesalahan, atau aktifkan logging rclone pada level DEBUG di Settings > Embedded Rclone untuk mengumpulkan detail bagi tim dukungan.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount remote cloud dari explorer RcloneView di Linux" class="img-large img-center" />

## Periksa Pengaturan yang Bergantung pada Tray

Dua pengaturan General berkaitan dengan tray. **Start minimized** menjalankan RcloneView langsung ke tray — tanpa ikon tray yang berfungsi, aplikasi bisa tampak tidak berjalan sama sekali. **Quit on close** menentukan apakah tombol tutup keluar dari aplikasi atau membiarkannya tetap berjalan di latar belakang. Sampai tray diperbaiki, matikan Start minimized dan perhatikan pengaturan Quit on close agar job yang sedang berjalan tidak terhenti secara tidak sengaja.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History RcloneView yang mengonfirmasi job latar belakang selesai" class="img-large img-center" />

## Pastikan Pekerjaan Latar Belakang Berjalan

Setelah ikon kembali, tutup jendela utama dan periksa bahwa menu tray masih menampilkan mount Anda. Job tetap berjalan di latar belakang dan notifikasi muncul setiap kali job selesai. Setelah itu, **Job History** menunjukkan apakah setiap eksekusi selesai, mengalami kesalahan, atau dibatalkan. RcloneView me-mount DAN menyinkronkan 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux — dan tray-lah yang menjaga jendela itu agar tidak mengganggu Anda.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html) dalam format .deb, .rpm, atau .AppImage.
2. Pasang libayatana-appindicator3-1 atau libappindicator3-1 dengan pengelola paket distribusi Anda.
3. Aktifkan dukungan AppIndicator di lingkungan desktop Anda jika desktop menyembunyikan ikon tray.
4. Mulai ulang RcloneView sepenuhnya dan pastikan mount Anda muncul di menu tray.

Dengan tray yang berfungsi, drive cloud dan job sinkronisasi Anda tetap dapat dijangkau dengan sekali klik tanpa memenuhi layar.

---

**Panduan Terkait:**

- [System Tray dan Sinkronisasi Latar Belakang di RcloneView](https://rcloneview.com/support/blog/system-tray-background-sync-rcloneview)
- [Memasang RcloneView di Ubuntu dan Debian Linux](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [Memperbaiki Kesalahan FUSE Mount Rclone dengan RcloneView](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
