---
slug: rcloneview-kali-linux-cloud-sync
title: "RcloneView di Kali Linux — Sinkronisasi dan Backup Penyimpanan Cloud"
authors:
  - jay
description: "Instal RcloneView di Kali Linux untuk mount, sinkronisasi, dan backup 90+ penyedia cloud dengan alur kerja GUI yang aman dan dapat diaudit."
keywords:
  - RcloneView Kali Linux
  - cloud storage Kali Linux
  - install RcloneView Debian
  - cloud sync penetration testing
  - mount cloud drive Kali
  - rclone GUI Kali Linux
  - backup forensic evidence cloud
  - cloud backup security professionals
  - Kali Linux cloud storage GUI
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView di Kali Linux — Sinkronisasi dan Backup Penyimpanan Cloud

> Jalankan pengelola file multi-cloud berbasis grafis di Kali Linux untuk sinkronisasi data engagement, image forensik, dan deliverable klien tanpa menyentuh CLI.

Kali Linux adalah distribusi berbasis Debian yang dibuat untuk pengujian penetrasi dan forensik digital, dan tim keamanan yang bekerja di Kali sering perlu memindahkan kumpulan bukti besar, hasil packet capture, atau laporan klien antara penyimpanan lokal dan akun cloud. RcloneView menghadirkan pengelola file berbasis grafis untuk alur kerja tersebut, memungkinkan Anda menjelajahi, sinkronisasi, dan mount penyimpanan cloud dari desktop yang sama tempat Anda menjalankan alat lainnya. Karena Kali menyertakan desktop Xfce lengkap dengan X11, ini memenuhi persyaratan tampilan yang dibutuhkan RcloneView untuk berjalan.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menginstal RcloneView di Kali Linux

Karena Kali dibangun di atas Debian, paket `.deb` resmi dari [rcloneview.com](https://rcloneview.com/src/download.html) diinstal dengan cara yang sama seperti di Debian atau Ubuntu — unduh file `rclone_view-{version}-linux-{arch}.deb` dan instal dengan `dpkg -i`, selesaikan dependensi yang hilang dengan `apt --fix-broken install`. Kali menyediakan build `x86_64` secara langsung, dan format `.AppImage` adalah alternatif yang baik jika Anda lebih memilih untuk tidak menginstal paket secara sistem-wide, karena format ini berjalan langsung tanpa instalasi.

RcloneView adalah aplikasi GUI berbasis Flutter, bukan alat command-line, sehingga memerlukan sesi grafis Xfce/X11 yang dijalankan Kali secara default — aplikasi ini tidak akan berjalan pada koneksi SSH headless tanpa X11 forwarding atau sesi remote desktop. Aplikasi ini juga bergantung pada GTK+3 dan pustaka AppIndicator untuk ikon system tray-nya, yang keduanya sudah tersedia dalam instalasi desktop Kali standar.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new cloud remote in RcloneView on Kali Linux" class="img-large img-center" />

## Menghubungkan Penyimpanan Cloud untuk Data Engagement

Setelah terinstal, tambahkan remote melalui wizard New Remote di tab Remote. Amazon S3, Cloudflare R2, dan Backblaze B2 bekerja dengan baik, menggunakan input access key dan secret credential, untuk menyimpan image disk forensik dan hasil packet capture berukuran besar, sementara Google Drive, OneDrive, atau Box menangani pengiriman laporan yang ditujukan untuk klien melalui login browser OAuth. Fitur sinkronisasi dan Folder Compare RcloneView tersedia pada lisensi FREE, sehingga Anda dapat mengirim bukti yang telah dikumpulkan ke penyimpanan cloud dan memverifikasi bahwa data tersebut sampai dengan utuh tanpa perlu membayar upgrade.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files between cloud remotes in RcloneView on Kali" class="img-large img-center" />

## Sinkronisasi dan Verifikasi Backup Bukti

Untuk alur kerja chain-of-custody, jalankan Dry Run sebelum menjalankan job sinkronisasi apa pun untuk melihat pratinjau file mana saja yang akan disalin atau dihapus, lalu gunakan Folder Compare untuk memverifikasi bahwa sumber dan tujuan cocok setelahnya. Tampilan perbandingan menandai file berdasarkan perbedaan ukuran dan menampilkan kecocokan file yang identik secara berdampingan, yang berguna saat Anda perlu memastikan bahwa image forensik ditransfer tanpa kerusakan. Aktifkan perbandingan checksum pada langkah Advanced Settings dari job sinkronisasi untuk verifikasi integritas yang lebih kuat dibandingkan pemeriksaan berbasis ukuran saja.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder compare results view in RcloneView" class="img-large img-center" />

## Melakukan Mount Penyimpanan Cloud Selama Engagement

Anda juga dapat melakukan mount remote cloud sebagai drive lokal menggunakan Mount Manager, yang mengandalkan FUSE dan metode `nfsmount` di Linux — pastikan `fuse3` telah terinstal. Ini memungkinkan Anda membuka file kasus yang di-hosting di cloud langsung di alat Kali lainnya tanpa perlu langkah unduh manual terlebih dahulu, dengan opsi untuk melakukan mount secara read-only saat Anda ingin mencegah penulisan yang tidak disengaja pada bukti yang dibagikan.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a cloud remote from the Mount Manager in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html) — ambil build `.deb` atau `.AppImage` untuk `x86_64`.
2. Instal dengan `dpkg -i` (atau jadikan AppImage dapat dieksekusi lalu jalankan langsung).
3. Tambahkan remote cloud Anda melalui wizard New Remote, menggunakan login OAuth atau input credential tergantung penyedianya.
4. Jalankan Dry Run, lalu job sinkronisasi sebenarnya, dan verifikasi hasilnya dengan Folder Compare.

Menjaga bukti dan deliverable klien tetap terorganisir di seluruh disk lokal dan penyimpanan cloud menjadi jauh lebih minim kesalahan dengan GUI yang bisa Anda verifikasi secara visual sebelum setiap transfer.

---

**Panduan Terkait:**

- [Instal RcloneView di Ubuntu / Debian Linux](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [RcloneView di Debian Linux — Sinkronisasi dan Backup Penyimpanan Cloud](https://rcloneview.com/support/blog/rcloneview-debian-linux-cloud-sync)
- [Penyimpanan Cloud untuk Perusahaan Keamanan Siber dengan RcloneView](https://rcloneview.com/support/blog/cloud-storage-cybersecurity-companies-rcloneview)

<CloudSupportGrid />
