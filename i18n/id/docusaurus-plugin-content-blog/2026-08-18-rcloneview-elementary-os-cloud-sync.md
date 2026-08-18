---
slug: rcloneview-elementary-os-cloud-sync
title: "RcloneView di Elementary OS — Sinkronisasi dan Pencadangan Penyimpanan Cloud"
authors:
  - alex
description: "Instal RcloneView di Elementary OS dan kelola 90+ penyedia cloud dengan sinkronisasi seret-dan-lepas, mount, dan pencadangan terjadwal dari satu GUI."
keywords:
  - RcloneView Elementary OS
  - penyimpanan cloud Elementary OS
  - Elementary OS rclone GUI
  - install RcloneView deb Elementary
  - sinkronisasi cloud Elementary OS
  - pencadangan cloud Elementary OS
  - klien penyimpanan cloud Pantheon
  - cross-platform cloud manager Linux
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView di Elementary OS — Sinkronisasi dan Pencadangan Penyimpanan Cloud

> Jalankan RcloneView di Elementary OS untuk menjelajahi, menyinkronkan, memasang (mount), dan mencadangkan 90+ penyedia cloud dari GUI native yang selaras dengan desktop Pantheon.

Elementary OS dibangun di atas Ubuntu LTS tetapi menghadirkan desktop Pantheon miliknya sendiri, dan pengguna yang memilihnya demi alur kerja yang bersih dan mirip macOS sering kali juga menginginkan alat penyimpanan cloud mereka memiliki kesan serupa, alih-alih kembali ke terminal polos. RcloneView terpasang sebagai paket .deb native di Elementary OS dan menyediakan antarmuka bergaya pengelola file yang lengkap untuk setiap remote yang didukung rclone, mulai dari Google Drive hingga Amazon S3 dan server SFTP. Berbeda dari alat yang hanya bisa mount, RcloneView juga menyinkronkan dan membandingkan folder — bahkan pada lisensi FREE — sehingga memasang drive dan menjalankan pencadangan terjadwal sama-sama berasal dari aplikasi yang sama.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menginstal RcloneView di Elementary OS

Karena Elementary OS berbasis Debian/Ubuntu, RcloneView diinstal dari paket .deb yang tersedia di [halaman unduhan](https://rcloneview.com/src/download.html) resmi — ambil build x86_64 (atau aarch64 jika Anda menjalankan Elementary di perangkat keras ARM64) dan instal dengan `sudo dpkg -i rclone_view-*-linux-{arch}.deb` dari terminal. Tidak ada paket Flathub atau Snap Store yang tersedia di sini — unduhan langsung .deb adalah satu-satunya jalur instalasi yang didukung, dan AppImage juga tersedia jika Anda lebih suka melewati manajemen paket sepenuhnya.

Elementary OS menghadirkan GTK+ dan sesi Wayland/X11 secara default melalui Pantheon, yang sudah memenuhi kebutuhan tampilan dan toolkit RcloneView begitu saja. Satu hal yang layak dipastikan setelah instalasi adalah `libayatana-appindicator3-1`, karena ikon system tray RcloneView bergantung padanya, dan beberapa instalasi Elementary minimal menghilangkan pustaka indikator untuk menjaga desktop tetap ringan.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView main window running on Elementary OS with a new remote dialog open" class="img-large img-center" />

## Menghubungkan Remote Cloud

Setelah RcloneView terinstal, menambahkan remote bekerja sama persis seperti di platform lain: tab Remote > New Remote, pilih penyedia Anda, lalu autentikasi melalui jendela pop-up browser (Google Drive, Dropbox, OneDrive, Box) atau masukkan kredensial secara langsung (Amazon S3, Backblaze B2, SFTP). Binary rclone bawaan menangani semuanya melalui `http://127.0.0.1:5582`, sehingga tidak ada yang perlu diinstal atau dikonfigurasi tambahan di Elementary OS, kecuali Anda ingin mengarahkan RcloneView ke instans rclone eksternal yang berjalan terpisah.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a cloud remote as a local drive on Elementary OS with RcloneView" class="img-large img-center" />

Pemasangan (mount) menggunakan `nfsmount` di Linux — pilih folder remote di Explorer, klik ikon mount di toolbar panel, dan folder cloud akan muncul sebagai path lokal yang dapat dibuka langsung oleh aplikasi Pantheon mana pun. FUSE (disarankan fuse3) perlu diinstal agar fungsi mount dapat berjalan.

## Menjadwalkan Tugas Sinkronisasi

Untuk komputer Elementary OS yang tetap menyala sepanjang hari, tugas sinkronisasi terjadwal mengubah RcloneView menjadi alat pencadangan tanpa perlu campur tangan, bukan sesuatu yang harus dipicu secara manual. Bangun tugas melalui wizard Sync 4 langkah, tambahkan filter untuk melewati file sementara atau file yang terlalu besar, lalu — dengan lisensi PLUS — lampirkan jadwal bergaya crontab agar dijalankan secara otomatis sesuai jadwal yang Anda butuhkan.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Creating a scheduled sync job on Elementary OS in RcloneView" class="img-large img-center" />

Job History mencatat setiap eksekusi lengkap dengan status, durasi, dan kecepatan transfer, sehingga memudahkan Anda memastikan pencadangan semalam benar-benar selesai, bukan diam-diam gagal saat Anda tidak mengawasi.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html) — ambil .deb x86_64 atau aarch64 untuk Elementary OS.
2. Instal dengan `sudo dpkg -i rclone_view-*-linux-{arch}.deb`.
3. Tambahkan remote cloud pertama Anda melalui tab Remote > New Remote.
4. Siapkan sinkronisasi atau mount untuk mulai mengelola penyimpanan cloud langsung dari desktop Pantheon.

Dengan .deb terinstal, Elementary OS mendapatkan pengalaman pengelolaan cloud seret-dan-lepas yang sama seperti pengguna Windows dan macOS, tanpa mengorbankan kesan desktop yang bersih dan konsisten.

---

**Panduan Terkait:**

- [Menginstal RcloneView di Ubuntu dan Debian Linux](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [RcloneView di Linux Mint — Sinkronisasi dan Pencadangan Penyimpanan Cloud](https://rcloneview.com/support/blog/rcloneview-linux-mint-cloud-sync)
- [RcloneView di Zorin OS — Sinkronisasi dan Pencadangan Penyimpanan Cloud](https://rcloneview.com/support/blog/rcloneview-zorin-os-linux-cloud-sync)

<CloudSupportGrid />
