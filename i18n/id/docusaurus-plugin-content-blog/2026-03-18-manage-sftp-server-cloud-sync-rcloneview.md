---
slug: manage-sftp-server-cloud-sync-rcloneview
title: "Hubungkan Server SFTP Apa Pun ke RcloneView — Sinkronkan Server Jarak Jauh dengan Penyimpanan Cloud"
authors:
  - tayson
description: "SFTP adalah standar untuk akses file yang aman di server Linux, VPS, dan hosting. Hubungkan server SFTP apa pun ke RcloneView dan sinkronkan dengan Google Drive, S3, atau 70+ cloud."
keywords:
  - sftp cloud sync
  - sftp to google drive
  - sftp backup tool
  - sftp file manager gui
  - sftp to s3 sync
  - ssh file transfer cloud
  - sftp cloud backup
  - sftp gui client
  - sftp remote manager
  - linux server cloud sync
tags:
  - RcloneView
  - sftp
  - sync
  - cloud-storage
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Hubungkan Server SFTP Apa Pun ke RcloneView — Sinkronkan Server Jarak Jauh dengan Penyimpanan Cloud

> Setiap server Linux, VPS, dan web host mendukung SFTP. RcloneView mengubah endpoint SFTP apa pun menjadi remote yang dapat dikelola — Anda dapat menelusurinya, melakukan sinkronisasi ke penyimpanan cloud, dan menjadwalkan pencadangan secara berkala.

SFTP (SSH File Transfer Protocol) adalah protokol universal untuk akses file yang aman di server jarak jauh. Baik itu web server, mesin pengembangan, VPS, atau dedicated server, SFTP hampir selalu tersedia. RcloneView terhubung ke server SFTP apa pun dan menempatkannya berdampingan dengan akun cloud Anda — telusuri file server secara visual, sinkronkan ke S3 atau Google Drive, dan jadwalkan pencadangan otomatis.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menambahkan Remote SFTP

<img src="/support/images/en/blog/new-remote.png" alt="Add SFTP remote" class="img-large img-center" />

Konfigurasikan dengan hostname server, port (default 22), username, dan otentikasi menggunakan password atau SSH key. Sistem file server Anda akan langsung muncul di explorer.

## Alur Kerja Utama

### Mencadangkan web server ke cloud

Sinkronkan direktori `/var/www` atau `/home` di web server Anda ke S3 atau Google Drive:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="SFTP server to cloud" class="img-large img-center" />

### Menjadwalkan pencadangan server

Otomatiskan pencadangan server setiap malam ke penyimpanan cloud:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule SFTP backup" class="img-large img-center" />

### Migrasi antar-server

Berpindah ke server baru? Buka SFTP server lama di satu panel, server baru di panel lainnya. Transfer langsung antar keduanya.

### Menyinkronkan file pengembangan

Jaga lingkungan pengembangan lokal Anda tetap sinkron dengan server jarak jauh melalui penyimpanan cloud sebagai perantara.

### Memverifikasi pencadangan

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify SFTP backup" class="img-large img-center" />

## Otentikasi SSH Key

Untuk pencadangan otomatis, otentikasi menggunakan SSH key lebih disarankan daripada password. Konfigurasikan key Anda di pengaturan remote untuk koneksi yang aman tanpa memerlukan password.

## Tips Performa

- **Gunakan kompresi** untuk transfer file berbasis teks pada koneksi yang lambat
- **Batasi transfer bersamaan** menjadi 2-4 untuk shared hosting
- **Kecualikan file sementara** — saring `.cache`, `node_modules`, `__pycache__`
- **Jadwalkan di luar jam sibuk** untuk menghindari dampak pada performa server

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan server SFTP Anda** sebagai remote.
3. **Telusuri file server** di explorer dua panel.
4. **Sinkronkan ke cloud** dan jadwalkan pencadangan.

Jika ada SSH, RcloneView dapat mengelolanya.

---

**Panduan Terkait:**

- [Mount SFTP/SMB sebagai Local Drive](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [Hubungkan Server WebDAV](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [Migrasikan Server FTP ke Cloud](https://rcloneview.com/support/blog/migrate-ftp-server-to-cloud-storage-rcloneview)

<CloudSupportGrid />
