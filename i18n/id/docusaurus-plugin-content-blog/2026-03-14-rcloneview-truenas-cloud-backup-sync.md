---
slug: rcloneview-truenas-cloud-backup-sync
title: "Jalankan RcloneView di TrueNAS untuk Pencadangan Cloud dan Sinkronisasi Multi-Cloud"
authors:
  - tayson
description: "TrueNAS dibuat untuk penyimpanan lokal. Tambahkan RcloneView untuk memperluasnya ke cloud — cadangkan dataset ke S3, sinkronkan pool dengan Google Drive, dan kelola penyimpanan multi-cloud dari NAS Anda."
keywords:
  - truenas cloud backup
  - truenas rclone
  - truenas cloud sync
  - truenas s3 backup
  - truenas google drive
  - truenas offsite backup
  - truenas rcloneview
  - truenas cloud storage
  - freenas cloud sync
  - truenas multi cloud
tags:
  - RcloneView
  - nas
  - platform
  - backup
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Jalankan RcloneView di TrueNAS untuk Pencadangan Cloud dan Sinkronisasi Multi-Cloud

> TrueNAS memberikan penyimpanan lokal yang sangat andal dengan ZFS. Namun penyimpanan lokal saja bukanlah strategi pencadangan. Tambahkan RcloneView untuk menyinkronkan dataset NAS Anda ke cloud dengan pengelola file visual.

TrueNAS (sebelumnya FreeNAS) adalah salah satu sistem operasi NAS paling populer, dipercaya karena integritas datanya yang didukung ZFS. Namun ZFS hanya melindungi dari kegagalan drive, bukan dari kebakaran, pencurian, ransomware, atau bencana yang melanda seluruh lokasi. Untuk perlindungan data yang sesungguhnya, Anda memerlukan pencadangan offsite. RcloneView menambahkan pengelolaan cloud visual ke setup TrueNAS Anda, membuatnya mudah untuk menyinkronkan dataset ke lebih dari 70 penyedia cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa TrueNAS + RcloneView?

TrueNAS menyertakan fitur Cloud Sync Tasks dasar, tetapi cakupannya terbatas dan sulit untuk di-troubleshoot. RcloneView menyediakan:

- **Penjelajahan file visual** — lihat file TrueNAS Anda berdampingan dengan penyimpanan cloud
- **70+ penyedia cloud** — jauh lebih banyak daripada yang didukung TrueNAS Cloud Sync secara native
- **Perbandingan folder** — verifikasi bahwa pencadangan lengkap dan akurat
- **Penjadwalan tugas** — penjadwalan fleksibel dengan pemantauan
- **Pencadangan terenkripsi** — remote crypt untuk enkripsi zero-knowledge

## Opsi Deployment

### Kontainer Docker (direkomendasikan)

Jalankan RcloneView sebagai kontainer Docker di TrueNAS SCALE. Ini adalah pendekatan paling bersih — terisolasi dari sistem host dengan pembaruan yang mudah.

### Instalasi langsung

Di TrueNAS SCALE (berbasis Linux), Anda dapat menginstal RcloneView secara langsung. TrueNAS CORE (berbasis FreeBSD) sebaiknya menggunakan pendekatan Docker melalui VM atau jail.

## Alur Kerja Utama

### Cadangkan dataset ke S3 atau B2

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="TrueNAS to cloud backup" class="img-large img-center" />

Jelajahi dataset TrueNAS Anda di satu panel, penyimpanan cloud di panel lainnya. Buat job sinkronisasi yang mencadangkan dataset penting ke Backblaze B2, AWS S3, atau Wasabi.

### Jadwalkan pencadangan setiap malam

Siapkan pencadangan malam otomatis agar salinan cloud Anda selalu terkini:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule TrueNAS backup" class="img-large img-center" />

### Verifikasi integritas pencadangan

Checksum ZFS melindungi data lokal. Gunakan Folder Comparison untuk memverifikasi bahwa pencadangan cloud sesuai dengan NAS Anda:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify TrueNAS backup" class="img-large img-center" />

### Enkripsi sebelum mengunggah

Lindungi data NAS sensitif dengan remote crypt. Penyedia pencadangan Anda tidak dapat membaca file — hanya Anda yang memegang kunci enkripsi.

### Redundansi multi-cloud

Cadangkan ke dua atau lebih penyedia secara bersamaan. Jika satu penyedia mengalami gangguan, data Anda tetap aman di penyedia lainnya.

## Strategi Pencadangan yang Direkomendasikan

| Jenis Data | Tingkat Cloud | Jadwal |
|-----------|-----------|----------|
| Dokumen penting | S3 Standard | Setiap 6 jam |
| Pustaka media | Backblaze B2 | Setiap malam |
| Arsip | S3 Glacier | Mingguan |

## Memulai

1. **Instal RcloneView** melalui Docker di TrueNAS SCALE.
2. **Tambahkan akun cloud Anda** di pengelola remote.
3. **Buat job pencadangan** untuk dataset penting.
4. **Jadwalkan dan verifikasi** dengan Folder Comparison.

ZFS melindungi data Anda secara lokal. RcloneView melindunginya di mana pun lainnya.

---

**Panduan Terkait:**

- [Jalankan RcloneView di Docker](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [Cadangkan NAS ke Beberapa Cloud](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)
- [Enkripsi Pencadangan Cloud](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
