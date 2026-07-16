---
slug: rcloneview-openmediavault-nas-cloud-backup
title: "Jalankan RcloneView di OpenMediaVault — Pencadangan Cloud untuk NAS DIY Anda"
authors:
  - tayson
description: "OpenMediaVault mengubah PC apa pun menjadi NAS. Tambahkan RcloneView melalui Docker untuk menyinkronkan share OMV Anda ke penyimpanan cloud demi pencadangan offsite dan manajemen multi-cloud."
keywords:
  - openmediavault cloud backup
  - openmediavault rclone
  - omv cloud sync
  - openmediavault s3 backup
  - omv rcloneview
  - openmediavault offsite backup
  - omv google drive
  - openmediavault docker rclone
  - diy nas cloud backup
  - omv backup solution
tags:
  - RcloneView
  - nas
  - docker
  - platform
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Jalankan RcloneView di OpenMediaVault — Pencadangan Cloud untuk NAS DIY Anda

> OpenMediaVault (OMV) memberi Anda NAS yang tangguh dengan perangkat keras hemat biaya. Namun penyimpanan lokal saja tidak cukup aman. Tambahkan RcloneView untuk mendorong data NAS Anda ke cloud demi pemulihan bencana.

OpenMediaVault adalah OS NAS pilihan utama bagi para pembangun DIY — jalankan di PC lama, Raspberry Pi, atau perangkat keras khusus. OMV menyediakan RAID, berbagi SMB/NFS, dan antarmuka web. Yang tidak disediakannya adalah pencadangan cloud. RcloneView mengisi kekosongan itu, berjalan sebagai kontainer Docker di OMV dan menyinkronkan share Anda ke lebih dari 70 penyedia cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa OMV + RcloneView?

Fitur bawaan OMV menangani penyimpanan lokal dengan baik, tetapi integrasi cloud-nya terbatas. RcloneView menambahkan:

- **70+ penyedia cloud** — Google Drive, S3, B2, Wasabi, dan lainnya
- **Manajemen file visual** — jelajahi NAS berdampingan dengan penyimpanan cloud
- **Pencadangan terjadwal** — perlindungan offsite otomatis
- **Verifikasi** — Folder Comparison memastikan integritas pencadangan
- **Enkripsi** — remote crypt untuk pencadangan pribadi

## Instal via Docker

OMV mendukung Docker melalui plugin omv-extras. Jalankan RcloneView sebagai kontainer dengan folder share Anda dipasang sebagai volume.

## Alur Kerja Utama

### Cadangkan share ke cloud

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OMV to cloud backup" class="img-large img-center" />

### Jadwalkan pencadangan offsite setiap malam

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OMV backup" class="img-large img-center" />

### Verifikasi integritas pencadangan

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify OMV backup" class="img-large img-center" />

### Enkripsi data sensitif

Gunakan remote crypt untuk mengenkripsi pencadangan sebelum meninggalkan jaringan Anda.

## Pengaturan yang Disarankan

| Share OMV | Tujuan Pencadangan | Jadwal |
|-----------|-------------------|----------|
| Documents | Google Drive | Setiap 6 jam |
| Photos | Backblaze B2 | Setiap malam |
| Media | Wasabi | Setiap malam |
| System config | B2 | Mingguan |

## Memulai

1. **Instal Docker** di OMV melalui omv-extras.
2. **Deploy RcloneView** sebagai kontainer.
3. **Pasang share Anda** sebagai volume kontainer.
4. **Tambahkan akun cloud** dan buat job pencadangan.
5. **Jadwalkan dan verifikasi**.

NAS DIY, pencadangan cloud dengan kualitas profesional.

---

**Panduan Terkait:**

- [Jalankan RcloneView di Docker](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [Jalankan RcloneView di TrueNAS](https://rcloneview.com/support/blog/rcloneview-truenas-cloud-backup-sync)
- [Jalankan RcloneView di Unraid](https://rcloneview.com/support/blog/run-rcloneview-unraid-server-cloud-sync)

<CloudSupportGrid />
