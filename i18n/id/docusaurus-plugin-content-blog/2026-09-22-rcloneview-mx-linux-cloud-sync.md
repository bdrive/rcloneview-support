---
slug: rcloneview-mx-linux-cloud-sync
title: "RcloneView di MX Linux — Sinkronisasi dan Backup Penyimpanan Cloud"
authors:
  - casey
description: "Jalankan RcloneView di MX Linux melalui .deb atau AppImage dan kelola 90+ penyedia cloud dengan sinkronisasi drag-and-drop, mount, dan backup terjadwal dalam satu GUI."
keywords:
  - RcloneView MX Linux
  - penyimpanan cloud MX Linux
  - GUI rclone MX Linux
  - instal RcloneView deb
  - sinkronisasi cloud MX Linux
  - backup cloud MX Linux
  - klien cloud berbasis Debian
  - pengelola cloud lintas platform Linux
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView di MX Linux — Sinkronisasi dan Backup Penyimpanan Cloud

> Jalankan RcloneView di MX Linux melalui paket .deb resmi atau AppImage, dan kelola setiap remote cloud yang didukung rclone dari GUI native.

MX Linux membangun reputasinya sebagai distro yang ringan dan berbasis Debian tanpa membawa versi paket Debian yang lebih konservatif, menjadikannya pilihan umum untuk perangkat keras lama dan desktop minimalis. Kombinasi tersebut adalah persis apa yang dibutuhkan pengelola file cloud agar tidak mengganggu: jejak yang kecil, lingkungan desktop yang sesungguhnya, dan kompatibilitas .deb yang diwarisi langsung dari Debian. RcloneView me-mount dan menyinkronkan 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux, sehingga perangkat MX Linux mendapatkan kumpulan fitur yang sama seperti platform lain yang didukung, bukan versi yang dipangkas.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menginstal RcloneView di MX Linux

Karena MX Linux berbasis Debian, paket `.deb` dari [halaman unduhan resmi](https://rcloneview.com/src/download.html) terpasang dengan cara yang sama seperti di Debian atau Ubuntu — unduh build x86_64 atau aarch64 dan instal melalui pengelola paket pilihan Anda (MX Package Installer, GDebi, atau `dpkg -i` dari terminal). Jika Anda lebih suka tidak menyentuh pengelola paket sama sekali, build `.AppImage` juga berfungsi: tandai sebagai executable dan jalankan langsung, tanpa langkah instalasi.

Tidak ada repositori atau PPA khusus MX Linux untuk RcloneView, dan juga tidak ada paket komunitas gaya AUR — halaman unduhan adalah satu-satunya saluran distribusi resmi. Sebelum menginstal, pastikan GTK+ 3.0 dan salah satu dari `libayatana-appindicator3-1` atau `libappindicator3-1` tersedia untuk ikon system tray, serta FUSE (disarankan fuse3) sudah terinstal jika Anda berencana me-mount remote sebagai drive lokal.

<img src="/support/images/en/blog/new-remote.png" alt="Jendela utama RcloneView berjalan di MX Linux dengan dialog remote baru terbuka" class="img-large img-center" />

## Menghubungkan Remote Cloud

Pengaturan remote di MX Linux bekerja persis sama seperti pada distro Linux lain yang didukung RcloneView. Buka tab Remote > New Remote, pilih penyedia, lalu autentikasi melalui popup browser (Google Drive, Dropbox, OneDrive, Box, pCloud) atau masukkan kredensial secara langsung (Amazon S3, Backblaze B2, SFTP). Binari rclone bawaan berkomunikasi dengan `http://127.0.0.1:5582` secara default, sehingga tidak ada instalasi rclone terpisah yang perlu dikelola kecuali Anda secara khusus ingin terhubung ke instance rclone eksternal yang berjalan di tempat lain pada jaringan.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Me-mount remote cloud sebagai drive lokal di MX Linux dengan RcloneView" class="img-large img-center" />

Setelah terhubung, mount remote melalui `nfsmount` dan remote tersebut akan berperilaku seperti path lokal lainnya — pengelola file atau aplikasi apa pun di sistem dapat menjelajahinya tanpa perlu tahu bahwa itu didukung oleh cloud.

## Menjadwalkan Backup

Untuk mesin MX Linux yang menyala sebagian besar hari, pekerjaan sinkronisasi terjadwal mengubah aplikasi menjadi alat backup yang cukup diatur sekali lalu dibiarkan berjalan. Ikuti wizard Sync 4 langkah, terapkan filter untuk melewati direktori cache atau file yang terlalu besar, dan pada lisensi PLUS lampirkan jadwal bergaya crontab agar pekerjaan berjalan tanpa harus dimulai secara manual.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Membuat pekerjaan sinkronisasi cloud terjadwal di MX Linux di RcloneView" class="img-large img-center" />

Job History mencatat durasi, kecepatan transfer, dan jumlah file setiap kali dijalankan, sehingga memudahkan untuk memastikan backup terjadwal benar-benar selesai, bukannya gagal secara diam-diam semalaman.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html) — ambil .deb sesuai arsitektur Anda, atau .AppImage jika Anda lebih suka melewati instalasi.
2. Instal paket tersebut (atau tandai AppImage sebagai executable) dan pastikan GTK+3 serta FUSE sudah tersedia.
3. Tambahkan remote cloud pertama Anda melalui tab Remote > New Remote.
4. Atur sinkronisasi atau mount untuk mulai mengelola penyimpanan cloud dari MX Linux.

Dengan paket apa pun yang terinstal, MX Linux mendapatkan pengalaman sinkronisasi dan mount cloud lengkap yang sama seperti desktop Linux lain yang didukung.

---

**Panduan Terkait:**

- [RcloneView di Debian Linux — Sinkronisasi Cloud](https://rcloneview.com/support/blog/rcloneview-debian-linux-cloud-sync)
- [Menginstal RcloneView di Ubuntu dan Debian Linux](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [RcloneView di Linux Mint — Sinkronisasi Cloud](https://rcloneview.com/support/blog/rcloneview-linux-mint-cloud-sync)

<CloudSupportGrid />
