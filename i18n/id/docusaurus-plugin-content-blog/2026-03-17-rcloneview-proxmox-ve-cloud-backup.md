---
slug: rcloneview-proxmox-ve-cloud-backup
title: "Jalankan RcloneView di Proxmox VE — Pencadangan Cloud untuk Virtual Machine dan Container Anda"
authors:
  - tayson
description: "Proxmox VE menghosting VM dan container Anda. Tambahkan RcloneView untuk mencadangkan data VM, pustaka ISO, dan konfigurasi ke penyimpanan cloud untuk pemulihan bencana offsite."
keywords:
  - proxmox cloud backup
  - proxmox rclone
  - proxmox offsite backup
  - proxmox ve cloud sync
  - proxmox backup s3
  - proxmox google drive backup
  - proxmox rcloneview
  - proxmox vm backup cloud
  - proxmox disaster recovery
  - proxmox cloud storage
tags:
  - RcloneView
  - platform
  - docker
  - backup
  - disaster-recovery
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Jalankan RcloneView di Proxmox VE — Pencadangan Cloud untuk Virtual Machine dan Container Anda

> Proxmox VE mencadangkan VM secara lokal. Namun pencadangan lokal tidak dapat bertahan dari kegagalan hardware, kebakaran, atau pencurian. Tambahkan RcloneView untuk mengirim pencadangan VM Anda ke penyimpanan cloud demi pemulihan bencana yang lengkap.

Proxmox VE adalah salah satu hypervisor open-source paling populer, menjalankan virtual machine dan container LXC untuk home lab maupun lingkungan produksi. Proxmox Backup Server bawaannya menangani pencadangan lokal dengan sangat baik, namun pencadangan yang hanya lokal saja belumlah lengkap. RcloneView menambahkan lapisan cloud — mengirim pencadangan VM, pustaka ISO, dan hasil ekspor konfigurasi ke S3, B2, Google Drive, atau penyedia cloud apa pun.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Perlu Pencadangan Cloud untuk Proxmox?

Pencadangan lokal Proxmox melindungi dari kerusakan VM dan penghapusan tidak sengaja. Pencadangan cloud melindungi dari:

- **Kegagalan hardware** — seluruh server mati
- **Ransomware** — pencadangan lokal ikut terenkripsi bersama VM
- **Bencana fisik** — kebakaran, banjir, pencurian
- **Kegagalan situs** — datacenter atau home lab hilang

## Opsi Deployment

### Container Docker di Proxmox

Jalankan RcloneView sebagai container Docker di dalam container LXC yang ringan pada host Proxmox Anda.

### Container LXC khusus

Buat container LXC minimal yang didedikasikan untuk RcloneView dengan akses ke penyimpanan pencadangan Anda.

## Alur Kerja Utama

### Sinkronisasi pencadangan VM ke cloud

Arahkan RcloneView ke penyimpanan pencadangan Proxmox Anda dan sinkronkan ke cloud:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Proxmox backup to cloud" class="img-large img-center" />

### Jadwalkan pencadangan offsite setiap malam

Setelah Proxmox membuat pencadangan lokal, RcloneView mengirimkannya ke cloud:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Proxmox cloud backup" class="img-large img-center" />

### Cadangkan pustaka ISO

Koleksi ISO dan template container Anda sulit untuk dibuat ulang. Cadangkan ke penyimpanan cloud.

### Verifikasi integritas pencadangan

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Proxmox backup" class="img-large img-center" />

### Enkripsi data VM yang sensitif

Pencadangan VM dapat berisi data sensitif. Gunakan remote crypt untuk mengenkripsi sebelum diunggah.

## Strategi yang Disarankan

| Jenis Data | Tingkat Cloud | Retensi |
|-----------|-----------|-----------|
| Pencadangan VM (terbaru) | S3 / B2 | 7 hari terakhir |
| Pencadangan VM (arsip) | S3 Glacier | 90 hari terakhir |
| Pustaka ISO | B2 | Permanen |
| Konfigurasi Proxmox | Google Drive | 30 hari terakhir |

## Memulai

1. **Deploy RcloneView** sebagai container di Proxmox.
2. **Tambahkan akun cloud** untuk tujuan pencadangan.
3. **Buat job sinkronisasi** yang mengarah ke penyimpanan pencadangan Anda.
4. **Jadwalkan setelah pencadangan lokal** selesai.
5. **Verifikasi secara berkala** dengan Folder Comparison.

Pencadangan lokal menyelamatkan Anda dari kesalahan. Pencadangan cloud menyelamatkan Anda dari bencana.

---

**Panduan Terkait:**

- [Jalankan RcloneView di Docker](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [Lindungi dari Ransomware](https://rcloneview.com/support/blog/protect-cloud-storage-ransomware-backup-rcloneview)
- [Enkripsi Pencadangan Cloud](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
