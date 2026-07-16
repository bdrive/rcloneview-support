---
slug: sync-dropbox-to-hetzner-storage-box-rcloneview
title: "Sinkronisasi Dropbox ke Hetzner Storage Box — Pencadangan Cloud dengan RcloneView"
authors:
  - tayson
description: "Gunakan RcloneView untuk menyinkronkan dan mencadangkan file Dropbox ke Hetzner Storage Box. Panduan langkah demi langkah untuk migrasi atau mempertahankan salinan cadangan dari Dropbox ke Hetzner."
keywords:
  - sync Dropbox to Hetzner Storage Box
  - Dropbox Hetzner backup
  - migrate Dropbox to Hetzner
  - Hetzner Storage Box cloud backup
  - rclone Dropbox Hetzner
  - Dropbox to SFTP backup
  - European cloud backup Dropbox
  - RcloneView Dropbox Hetzner
tags:
  - RcloneView
  - dropbox
  - hetzner
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Dropbox ke Hetzner Storage Box — Pencadangan Cloud dengan RcloneView

> RcloneView menyinkronkan Dropbox ke Hetzner Storage Box melalui SFTP — memberikan pengguna Eropa tujuan pencadangan sekunder yang sesuai GDPR untuk file Dropbox mereka.

Hetzner Storage Box adalah layanan penyimpanan hemat biaya yang di-hosting di Jerman dan mendukung akses SFTP, FTP, Samba, dan WebDAV. Bisnis dan developer Eropa yang menggunakan Dropbox untuk kolaborasi sering menambahkan Hetzner Storage Box sebagai target pencadangan sekunder: jauh lebih murah untuk volume besar dan menjaga data tetap berada dalam yurisdiksi UE. RcloneView menghubungkan keduanya melalui backend Dropbox dan SFTP milik rclone, menjadikan sinkronisasi terjadwal Dropbox-ke-Hetzner sebagai operasi GUI yang sederhana.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menyiapkan Dropbox dan Hetzner Storage Box

Tambahkan Dropbox terlebih dahulu: **Remote tab → New Remote → Dropbox**, autentikasi melalui login browser OAuth. Folder Dropbox Anda akan langsung muncul di Explorer.

Tambahkan Hetzner Storage Box sebagai remote SFTP: **New Remote → SFTP**. Konfigurasikan dengan:
- **Host**: `yourboxid.your-storagebox.de`
- **User**: nama pengguna Storage Box Anda (ditampilkan di panel Hetzner Robot)
- **Authentication**: SSH key (disarankan) atau password
- **Port**: 23 (Hetzner Storage Box menggunakan port 23, bukan port standar 22)

Uji koneksi sebelum menyimpan. Setelah kedua remote ditambahkan, buka Explorer split-panel untuk menjelajahi Dropbox di sebelah kiri dan Hetzner di sebelah kanan.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Dropbox and Hetzner Storage Box SFTP remote in RcloneView" class="img-large img-center" />

## Membuat Pekerjaan Sinkronisasi Terjadwal

Untuk skenario pencadangan berkelanjutan, buat pekerjaan Sync di Job Manager: sumbernya adalah folder Dropbox Anda (misalnya, `dropbox:/Team/Projects/`), tujuannya adalah path Hetzner Anda (misalnya, `hetzner:/backups/dropbox/`). Di Step 2, atur concurrent transfers ke 4–6 — Hetzner Storage Box menangani koneksi SFTP dengan baik pada tingkat konkurensi ini.

Jadwalkan pekerjaan untuk berjalan setiap malam pukul 2:00 pagi (lisensi PLUS). Sinkronisasi inkremental hanya menyalin file yang baru atau dimodifikasi, sehingga waktu transfer tetap singkat setelah sinkronisasi penuh awal. Job History mencatat status, ukuran transfer, dan durasi setiap eksekusi untuk catatan Anda.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling nightly Dropbox to Hetzner sync in RcloneView" class="img-large img-center" />

## Migrasi Satu Kali dari Dropbox ke Hetzner

Jika Anda bermigrasi dari Dropbox ke Hetzner Storage Box sebagai lokasi penyimpanan utama, gunakan pekerjaan Copy alih-alih Sync. Copy mentransfer semua file dari Dropbox ke Hetzner tanpa menghapus apa pun di sumbernya — menjaga konten Dropbox Anda tetap utuh selama masa transisi. Jalankan Dry Run terlebih dahulu untuk memverifikasi jumlah file dan total ukuran transfer sebelum melanjutkan.

Untuk akun Dropbox besar dengan ratusan GB, aktifkan verifikasi checksum di Step 2 untuk mengonfirmasi integritas setiap file setelah transfer. Fitur Folder Compare memungkinkan Anda memverifikasi bahwa migrasi selesai dengan benar dengan membandingkan struktur folder Dropbox dan Hetzner secara berdampingan setelah pekerjaan selesai.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Dropbox and Hetzner Storage Box folders after migration in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Dropbox melalui OAuth dan Hetzner Storage Box melalui SFTP (port 23) di wizard New Remote.
3. Buat pekerjaan Sync dari path Dropbox Anda ke path Hetzner Anda di Job Manager.
4. Jadwalkan sinkronisasi setiap malam dan tinjau Job History untuk log audit transfer.

Menyinkronkan Dropbox ke Hetzner Storage Box dengan RcloneView memberikan tim Eropa pencadangan sekunder yang hemat biaya, sesuai GDPR, dan berjalan secara otomatis tanpa intervensi manual apa pun.

---

**Panduan Terkait:**

- [Mount Hetzner Storage Box dan Sinkronisasi ke Cloud dengan RcloneView](https://rcloneview.com/support/blog/mount-hetzner-storage-box-sync-cloud-rcloneview)
- [Cadangkan Dropbox ke Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [Cadangkan Dropbox ke AWS S3 dengan RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)

<CloudSupportGrid />
