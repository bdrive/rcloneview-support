---
slug: migrate-sharepoint-to-google-drive-rcloneview
title: "Migrasi SharePoint ke Google Drive — Transfer Document Library dengan RcloneView"
authors:
  - tayson
description: "Beralih dari Microsoft 365 ke Google Workspace? Transfer document library SharePoint dan file OneDrive ke Google Drive dan Shared Drives menggunakan RcloneView."
keywords:
  - sharepoint to google drive
  - migrate sharepoint to gdrive
  - sharepoint migration tool
  - microsoft to google migration
  - sharepoint to google workspace
  - sharepoint document library transfer
  - office 365 to google
  - sharepoint google drive sync
  - cross platform cloud migration
  - enterprise cloud migration
tags:
  - RcloneView
  - sharepoint
  - google-drive
  - migration
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi SharePoint ke Google Drive — Transfer Document Library dengan RcloneView

> Organisasi Anda sedang beralih dari Microsoft 365 ke Google Workspace. Library SharePoint, file pribadi OneDrive, dan dokumen tim selama bertahun-tahun semuanya perlu dipindahkan ke Google Drive secara utuh. Berikut caranya.

Migrasi dari SharePoint ke Google Drive adalah kebalikan dari salah satu migrasi cloud enterprise yang paling umum. Baik didorong oleh biaya, preferensi platform, atau perubahan organisasi, tantangannya tetap sama: ribuan file dalam document library yang terstruktur perlu ditransfer dengan rapi ke Google Drive dan Shared Drives. RcloneView menangani kedua sisi secara native.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Merencanakan Migrasi

### Pemetaan struktur

| SharePoint | Google Workspace |
|-----------|-----------------|
| Document Libraries | Shared Drives |
| OneDrive (personal) | My Drive (personal) |
| Team Sites | Shared Drive per tim |
| Shared files | Folder Shared Drive |

### Hubungkan kedua platform

<img src="/support/images/en/blog/new-remote.png" alt="Connect SharePoint and Google Drive" class="img-large img-center" />

Tambahkan akun SharePoint/OneDrive dan Google Drive Anda di RcloneView.

## Langkah-Langkah Migrasi

### 1) Transfer document library

Buka SharePoint di satu panel, Google Shared Drive di panel lainnya. Transfer library demi library:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="SharePoint to Google Drive transfer" class="img-large img-center" />

### 2) Migrasikan file OneDrive pribadi

File OneDrive tiap pengguna dipindahkan ke My Drive Google Drive mereka.

### 3) Verifikasi kelengkapan

Folder Comparison memastikan setiap file berhasil ditransfer:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration" class="img-large img-center" />

### 4) Jadwalkan migrasi besar di malam hari

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule overnight migration" class="img-large img-center" />

### 5) Pantau progres

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor migration progress" class="img-large img-center" />

## Pertimbangan Penting

- **Konversi format file**: Google dapat menampilkan file Office secara native; konversi ke format Google Docs bersifat opsional
- **Pemetaan izin**: Izin file tidak ikut ditransfer secara otomatis — rencanakan izin Shared Drive Anda secara terpisah
- **Panjang path**: SharePoint mengizinkan path yang lebih panjang dari yang biasanya diperkirakan; verifikasi kompatibilitasnya
- **Library besar**: Bagi menjadi beberapa batch berdasarkan departemen atau proyek

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan remote SharePoint** dan **Google Drive**.
3. **Petakan library** ke Shared Drives.
4. **Transfer dan verifikasi** dalam batch.

Peralihan platform yang bersih, tanpa kehilangan data.

---

**Panduan Terkait:**

- [Migrasi Google Workspace ke Microsoft 365](https://rcloneview.com/support/blog/migrate-google-workspace-to-microsoft-365-rcloneview)
- [Migrasi Cloud Tanpa Downtime](https://rcloneview.com/support/blog/migrate-cloud-storage-zero-downtime-rcloneview)
- [Membandingkan Isi Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
