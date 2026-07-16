---
slug: run-rcloneview-unraid-server-cloud-sync
title: "Jalankan RcloneView di Unraid — Pencadangan Cloud dan Sinkronisasi Multi-Cloud untuk Server Anda"
authors:
  - tayson
description: "Unraid membuat server rumah dan bisnis kecil menjadi mudah. Tambahkan RcloneView melalui Docker untuk menyinkronkan share Unraid Anda ke penyimpanan cloud untuk pencadangan offsite dan manajemen multi-cloud."
keywords:
  - unraid cloud backup
  - unraid rclone
  - unraid cloud sync
  - unraid rcloneview
  - unraid s3 backup
  - unraid google drive
  - unraid offsite backup
  - unraid docker cloud sync
  - unraid backup solution
  - unraid multi cloud
tags:
  - nas
  - docker
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Jalankan RcloneView di Unraid — Pencadangan Cloud dan Sinkronisasi Multi-Cloud untuk Server Anda

> Unraid sangat andal untuk penyimpanan lokal. Namun parity drive tidak melindungi dari kebakaran, pencurian, atau ransomware. Tambahkan RcloneView untuk mencadangkan share Anda ke cloud dengan file manager visual.

Unraid adalah salah satu platform server rumah dan bisnis kecil yang paling populer. Penyimpanan berbasis parity-nya melindungi dari kegagalan drive, tetapi perlindungan lokal saja tidak cukup. Untuk keamanan data yang sesungguhnya, Anda memerlukan pencadangan offsite. RcloneView berjalan sebagai container Docker di Unraid, menambahkan manajemen cloud visual dan kemampuan pencadangan otomatis ke server Anda.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Unraid + RcloneView?

Community Apps Unraid mencakup plugin rclone dasar, tetapi seringkali hanya berbasis CLI atau terbatas cakupannya. RcloneView menyediakan:

- **File browser visual** — lihat share Unraid Anda berdampingan dengan penyimpanan cloud
- **70+ penyedia cloud** — hubungkan ke cloud apa pun dari server Unraid Anda
- **Pencadangan terjadwal** — otomatiskan perlindungan offsite
- **Perbandingan Folder** — verifikasi integritas pencadangan
- **Pencadangan terenkripsi** — remote crypt menjaga privasi data

## Instal via Docker

RcloneView berjalan sebagai container Docker di Unraid. Instal melalui Community Apps atau konfigurasikan container secara manual.

Petakan share Unraid Anda sebagai volume agar RcloneView dapat mengakses data Anda.

## Alur Kerja Utama

### Cadangkan share ke cloud

Buka share Unraid Anda di satu panel, penyimpanan cloud di panel lainnya. Buat job pencadangan untuk data penting:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Unraid to cloud backup" class="img-large img-center" />

### Jadwalkan pencadangan offsite setiap malam

Atur pencadangan otomatis yang berjalan setiap malam saat server Anda dalam kondisi idle:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Unraid backups" class="img-large img-center" />

### Verifikasi integritas pencadangan

Parity melindungi data lokal. Gunakan Perbandingan Folder untuk memverifikasi pencadangan cloud:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Unraid backup" class="img-large img-center" />

### Enkripsi data sensitif

Gunakan remote crypt untuk mengenkripsi pencadangan sebelum meninggalkan server Anda. Penyedia cloud Anda tidak akan pernah melihat data yang tidak terenkripsi.

### Strategi pencadangan multi-cloud

Cadangkan ke dua penyedia untuk perlindungan maksimal:

| Share | Pencadangan Utama | Pencadangan Sekunder |
|-------|---------------|-----------------|
| Documents | Google Drive | Backblaze B2 |
| Media | Backblaze B2 | Wasabi |
| Photos | Google Photos (via Drive) | S3 |
| Appdata | B2 | S3 Glacier |

## Pantau Pencadangan Anda

Periksa riwayat job untuk memastikan pencadangan berhasil diselesaikan:

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Monitor backup jobs" class="img-large img-center" />

## Memulai

1. **Instal RcloneView** sebagai container Docker di Unraid.
2. **Petakan share Anda** sebagai volume container.
3. **Tambahkan akun cloud** di remote manager.
4. **Buat job pencadangan** untuk share yang penting.
5. **Jadwalkan dan verifikasi** dengan Perbandingan Folder.

Parity melindungi dari kegagalan drive. Pencadangan cloud melindungi dari segala hal lainnya.

---

**Panduan Terkait:**

- [Jalankan RcloneView di Docker](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [Jalankan RcloneView di TrueNAS](https://rcloneview.com/support/blog/rcloneview-truenas-cloud-backup-sync)
- [Cadangkan NAS ke Beberapa Cloud](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />
