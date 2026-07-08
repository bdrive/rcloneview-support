---
slug: rcloneview-windows-11-cloud-sync-backup
title: "RcloneView di Windows 11 — Sinkronisasi dan Pencadangan Penyimpanan Cloud"
authors:
  - tayson
description: "Instal RcloneView di Windows 11 dan mulai sinkronisasi file di 90+ penyedia cloud. Panduan pengaturan lengkap yang mencakup instalasi, konfigurasi remote, dan pencadangan terjadwal."
keywords:
  - RcloneView Windows 11
  - Windows 11 cloud sync tool
  - cloud storage backup Windows 11
  - rclone GUI Windows 11
  - Windows 11 file sync cloud
  - RcloneView installation Windows
  - cloud backup software Windows 11
  - multi-cloud sync Windows 11
tags:
  - RcloneView
  - windows
  - cloud-sync
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView di Windows 11 — Sinkronisasi dan Pencadangan Penyimpanan Cloud

> RcloneView terinstal secara native di Windows 11 dengan satu installer `.exe`, yang menyertakan rclone secara otomatis. Tidak diperlukan pengaturan command line untuk menghubungkan dan menyinkronkan 90+ penyedia penyimpanan cloud.

Windows 11 sudah menyertakan sinkronisasi OneDrive bawaan, tetapi hanya mencakup satu penyedia. RcloneView mengisi kekurangan ini: aplikasi Windows native yang terhubung ke Google Drive, Dropbox, Amazon S3, Backblaze B2, Cloudflare R2, dan 90+ penyedia lainnya secara bersamaan. Baik Anda pengguna rumahan yang mencadangkan foto ke beberapa cloud atau developer yang menyinkronkan artefak deployment ke S3, RcloneView di Windows 11 menanganinya melalui antarmuka visual tanpa memerlukan scripting PowerShell atau Command Prompt.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menginstal RcloneView di Windows 11

Unduh installer Windows dari [rcloneview.com](https://rcloneview.com/src/download.html) — file tersebut bernama `setup_rclone_view-{version}.exe` dan merupakan installer Inno Setup. Klik dua kali installer tersebut, ikuti wizard pengaturan (direktori instalasi default sudah cukup untuk sebagian besar pengguna), dan RcloneView akan muncul di menu Start dan taskbar Anda.

Installer ini sudah menyertakan rclone — tidak diperlukan instalasi rclone terpisah. RcloneView berjalan dengan instance rclone bawaan yang berjalan di `http://127.0.0.1:5582`. Anda akan melihat versi rclone dan status koneksi di footer bagian bawah aplikasi.

**Persyaratan sistem Windows 11:**
- Arsitektur: x86-64 (Intel/AMD 64-bit). Catatan: Windows ARM64 tidak didukung.
- VC++ 2015–2022 Redistributable (biasanya sudah terinstal; installer RcloneView akan memeriksanya)
- Windows Vista atau lebih baru (Windows 11 didukung sepenuhnya)

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView interface after installation on Windows 11" class="img-large img-center" />

## Menambahkan Penyedia Penyimpanan Cloud

Setelah instalasi, tambahkan penyedia penyimpanan cloud pertama Anda. Klik **Remote tab → New Remote** dan pilih penyedia Anda. Untuk layanan berbasis OAuth (Google Drive, Dropbox, OneDrive, Box, pCloud), RcloneView membuka browser default Anda untuk autentikasi — masuk dan berikan akses. Untuk layanan berbasis kredensial (Amazon S3, Backblaze B2, Cloudflare R2, Wasabi), masukkan access key dan secret key Anda secara langsung.

Browser default Windows 11 (Edge atau Chrome) menangani alur OAuth dengan lancar. Jika organisasi Anda menggunakan proxy atau membatasi OAuth berbasis browser, periksa pengaturan jaringan Anda dan pastikan redirect `localhost` diizinkan.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag-and-drop file upload from Windows 11 Explorer to cloud storage in RcloneView" class="img-large img-center" />

## Mount Penyimpanan Cloud sebagai Drive Windows

Mount Manager RcloneView memungkinkan Anda mount penyimpanan cloud sebagai huruf drive Windows (mis., `Z:\` untuk Google Drive, `Y:\` untuk Backblaze B2). Klik **Remote tab → Mount Manager → New Mount**, pilih remote dan folder Anda, pilih huruf drive, lalu klik **Save and Mount**.

Drive cloud yang di-mount akan langsung muncul di File Explorer bersama drive lokal. Aplikasi apa pun dapat membaca dan menulis file ke drive yang di-mount — berguna untuk mengakses file cloud langsung dari Office, Adobe Creative Suite, atau aplikasi Windows lainnya. Aktifkan **Auto Mount** (lisensi PLUS) agar drive cloud Anda otomatis di-mount saat Windows startup.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting cloud storage as a Windows drive letter in RcloneView Mount Manager" class="img-large img-center" />

## Mengatur Pencadangan Cloud Terjadwal

Gunakan Job Manager RcloneView untuk membuat job pencadangan otomatis. Contoh pengaturan Windows 11 yang umum: sinkronisasi `C:\Users\{user}\Documents\` ke Backblaze B2 setiap malam, dan sinkronisasi `C:\Users\{user}\Pictures\` ke Google Drive setiap minggu. Setiap job berjalan pada waktu terjadwal di latar belakang — RcloneView diperkecil ke system tray Windows dan terus menjalankan job terjadwal tanpa perlu membuka jendela utama.

Aktifkan notifikasi desktop (Settings → Notifications → Show sync completion notification) untuk menerima notifikasi toast Windows 11 setiap kali job pencadangan selesai.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html) (installer Windows x86-64).
2. Jalankan installer dan buka RcloneView dari menu Start.
3. Tambahkan penyedia penyimpanan cloud Anda melalui New Remote (browser OAuth atau input kredensial).
4. Buat job Sync di Job Manager dengan jadwal untuk pencadangan otomatis.

RcloneView di Windows 11 menggantikan selusin klien sinkronisasi cloud terpisah dengan satu antarmuka terpadu — memberi Anda kendali penuh atas ke mana file Anda pergi dan kapan file tersebut ditransfer.

---

**Panduan Terkait:**

- [RcloneView di Windows Server — Pengaturan Pencadangan Cloud](https://rcloneview.com/support/blog/rcloneview-on-windows-server-cloud-backup-rcloneview)
- [Mount Bucket Amazon S3 sebagai Drive Lokal dengan RcloneView](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)
- [Otomatisasi Pencadangan Cloud Harian dengan RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
