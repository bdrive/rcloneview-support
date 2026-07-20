---
slug: fix-azure-files-connection-errors-rcloneview
title: "Perbaiki Error Koneksi Azure Files — Atasi Masalah Azure SMB dengan RcloneView"
authors:
  - tayson
description: "Atasi error koneksi Azure Files di RcloneView — perbaiki kredensial yang salah, blokir firewall port SMB 445, ketidakcocokan TLS, dan masalah nama share."
keywords:
  - Azure Files connection error
  - Azure SMB troubleshooting
  - RcloneView Azure Files
  - SMB port 445
  - Azure File Storage fix
  - Azure Files credentials
  - cloud storage troubleshooting
  - rclone Azure Files
tags:
  - RcloneView
  - azure-files
  - troubleshooting
  - tips
  - smb
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Koneksi Azure Files — Atasi Masalah Azure SMB dengan RcloneView

> Error koneksi Azure Files di RcloneView hampir selalu disebabkan oleh salah satu dari tiga masalah — kredensial yang salah, port SMB yang diblokir, atau ketidakcocokan konfigurasi TLS. Berikut cara memperbaiki masing-masing.

Azure Files menyediakan share file SMB dan NFS terkelola yang dihosting di Azure, dan RcloneView mendukung Azure File Storage secara langsung sebagai jenis remote. Namun, koneksi Azure Files lebih sering gagal dibandingkan penyedia lain karena bergantung pada kredensial yang benar, aturan firewall, dan pengaturan TLS yang harus selaras secara bersamaan. Panduan ini membahas mode kegagalan yang paling umum dan cara mengatasinya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Memverifikasi Kredensial Azure Files Anda

Azure Files memerlukan tiga informasi: **Storage Account Name**, **Shared Key** (juga disebut Storage Account Key), dan **Share Name**. Ketidakcocokan pada salah satu dari tiga bidang ini akan langsung menyebabkan kegagalan autentikasi. Pesan error dari Azure dalam kasus ini tidak selalu spesifik tentang bidang mana yang salah.

Di RcloneView, buka konfigurasi remote Azure Files Anda dan periksa kembali setiap bidang:
- **Account Name**: Ini adalah nama storage account, bukan nama tampilan atau nama subscription.
- **Account Key**: Ditemukan di Azure Portal di bawah storage account Anda > **Access Keys** > Key1 atau Key2. Salin key secara lengkap — key tersebut berupa string base64 yang panjang dan mudah terpotong secara tidak sengaja.
- **Share Name**: Nama persis dari file share di dalam storage account, bersifat case-sensitive.

Jika Anda baru saja melakukan rotasi access key di Azure Portal, segera perbarui key tersebut di konfigurasi remote RcloneView, karena key lama akan menjadi tidak valid.

<img src="/support/images/en/blog/new-remote.png" alt="Azure Files remote configuration in RcloneView with Account Name and Key fields" class="img-large img-center" />

## Masalah Firewall Port SMB 445

Azure Files menggunakan protokol SMB melalui port TCP 445. Banyak jaringan korporat dan ISP memblokir port 445 keluar sebagai langkah keamanan terhadap kerentanan SMB lama. Jika kredensial Anda sudah benar tetapi koneksi tetap timeout, blokir port 445 adalah penyebab yang paling mungkin.

Untuk menguji apakah port 445 dapat diakses, jalankan `Test-NetConnection -ComputerName <storage-account>.file.core.windows.net -Port 445` di PowerShell (Windows) atau `nc -zv <storage-account>.file.core.windows.net 445` di Linux/macOS. Jika koneksi gagal, Anda memiliki dua opsi: bekerja sama dengan administrator jaringan Anda untuk mengizinkan port 445 keluar, atau gunakan Azure Files melalui NFS (jika tersedia) atau akses Azure Blob Storage yang mendasarinya sebagai gantinya.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Diagnosing Azure Files port 445 connectivity for RcloneView" class="img-large img-center" />

## Konfigurasi TLS dan Endpoint

Remote Azure Files RcloneView menggunakan HTTPS untuk control plane dan SMB untuk transfer data. Pastikan endpoint Anda diatur dengan benar — untuk storage account Azure standar, endpoint-nya adalah `<accountname>.file.core.windows.net`. Jika Anda menggunakan Azure Government, Azure China, atau private endpoint, hostname akan berbeda dan harus ditentukan secara eksplisit dalam konfigurasi remote.

Ketidakcocokan versi TLS dapat terjadi pada sistem Windows yang lebih lama di mana TLS 1.2 tidak diaktifkan secara default. Azure Files memerlukan TLS 1.2 atau lebih tinggi. Di Windows, aktifkan TLS 1.2 melalui registry atau melalui Group Policy jika koneksi gagal dengan pesan error terkait TLS. Di Linux, pastikan versi OpenSSL sistem Anda mendukung TLS 1.2 (setiap distribusi modern sudah mendukungnya).

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Successful Azure Files connection and transfer monitoring in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Verifikasi bahwa **Account Name**, **Account Key**, dan **Share Name** Anda semuanya benar dan sesuai persis dengan Azure Portal.
3. Uji konektivitas keluar ke port 445 menggunakan `nc` atau PowerShell `Test-NetConnection`.
4. Jika port 445 diblokir, hubungi tim jaringan Anda atau pertimbangkan metode akses alternatif.
5. Pastikan TLS 1.2 diaktifkan di sistem Anda jika Anda melihat error TLS handshake.

Mengatasi error koneksi Azure Files biasanya hanya masalah memeriksa kredensial dan konfigurasi jaringan — setelah keduanya benar, remote akan bekerja dengan andal di RcloneView untuk penjelajahan, sinkronisasi, dan tugas pencadangan.

---

**Panduan Terkait:**

- [Mengelola Azure Files — Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-azure-files-cloud-sync-rcloneview)
- [Perbaiki Error Mount Network Share SMB Windows dengan RcloneView](https://rcloneview.com/support/blog/fix-smb-windows-network-share-mount-errors-rcloneview)
- [Perbaiki Error Autentikasi SAS Token Azure Blob dengan RcloneView](https://rcloneview.com/support/blog/fix-azure-blob-sas-token-auth-errors-rcloneview)

<CloudSupportGrid />
