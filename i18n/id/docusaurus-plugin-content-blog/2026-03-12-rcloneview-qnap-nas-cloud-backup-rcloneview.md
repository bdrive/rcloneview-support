---
slug: rcloneview-qnap-nas-cloud-backup-rcloneview
title: "Gunakan RcloneView dengan QNAP NAS — Pencadangan Cloud dan Sinkronisasi Multi-Cloud untuk NAS Anda"
authors:
  - tayson
description: "Pemilik QNAP NAS dapat menggunakan RcloneView untuk pencadangan cloud ke S3, B2, Google Drive, dan lainnya. Pelajari cara menghubungkan, menyinkronkan, dan mengotomatiskan pencadangan dari QNAP NAS Anda."
keywords:
  - qnap cloud backup
  - qnap nas rclone
  - qnap cloud sync
  - qnap s3 backup
  - qnap google drive sync
  - qnap multi cloud
  - qnap nas cloud storage
  - qnap backup tool
  - qnap rcloneview
  - qnap automated backup
tags:
  - qnap
  - nas
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gunakan RcloneView dengan QNAP NAS — Pencadangan Cloud dan Sinkronisasi Multi-Cloud untuk NAS Anda

> Perangkat QNAP NAS menyimpan data terpenting Anda secara lokal. Namun penyimpanan yang hanya lokal berarti risiko yang juga hanya lokal — kerusakan perangkat keras, kebakaran, pencurian, atau banjir dapat menghilangkan semuanya. Pencadangan cloud melalui RcloneView menambahkan perlindungan di luar lokasi dengan lebih dari 70 penyedia cloud.

QNAP NAS menawarkan sinkronisasi cloud bawaan melalui HBS 3 (Hybrid Backup Sync), tetapi dukungan penyedia cloudnya terbatas dibandingkan dengan lebih dari 70 penyedia yang didukung rclone. RcloneView, yang berjalan di desktop atau perangkat khusus yang terhubung ke QNAP Anda, memberi Anda akses ke setiap penyedia yang didukung rclone — ditambah manajemen visual, perbandingan folder, dan tugas batch.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan QNAP ke RcloneView

### Melalui network share (SMB/CIFS)

Akses folder bersama QNAP Anda dari komputer yang menjalankan RcloneView. Petakan share QNAP Anda sebagai network drive, lalu gunakan sebagai sumber lokal dalam tugas RcloneView.

### Melalui SFTP

Tambahkan QNAP Anda sebagai remote SFTP:

1. Aktifkan SFTP di QNAP Anda (Control Panel → Network & File Services → Telnet/SSH).
2. Tambahkan remote SFTP di RcloneView dengan alamat IP dan kredensial QNAP Anda.

<img src="/support/images/en/blog/new-remote.png" alt="Add QNAP NAS as remote" class="img-large img-center" />

## Alur Kerja Pencadangan

### QNAP → Backblaze B2

Pencadangan di luar lokasi yang terjangkau dengan harga $6/TB/bulan:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Backup QNAP to B2" class="img-large img-center" />

### QNAP → AWS S3

Daya tahan setara perusahaan untuk data bisnis yang penting.

### QNAP → Google Drive

Jadikan file NAS dapat diakses untuk kolaborasi melalui Google Drive.

### Jadwalkan pencadangan setiap malam

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule QNAP backup" class="img-large img-center" />

## Verifikasi Pencadangan

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify QNAP backup" class="img-large img-center" />

## QNAP HBS 3 vs RcloneView

| Fitur | QNAP HBS 3 | RcloneView |
|---------|-----------|------------|
| Penyedia cloud | ~15 | 70+ |
| Berjalan langsung di NAS | ✅ | Di perangkat yang terhubung |
| Explorer dua panel | ❌ | ✅ |
| Perbandingan folder | ❌ | ✅ |
| Tugas batch | ❌ | ✅ |
| Notifikasi | Email | Slack/Discord/Telegram |
| Remote terenkripsi | Terbatas | ✅ (crypt) |

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Hubungkan ke QNAP** melalui network share atau SFTP.
3. **Tambahkan tujuan pencadangan cloud**.
4. **Jadwalkan pencadangan otomatis**.
5. **Verifikasi dengan Perbandingan Folder**.

Data NAS Anda layak mendapatkan perlindungan di luar lokasi.

---

**Panduan Terkait:**

- [RcloneView di Synology NAS](https://rcloneview.com/support/blog/run-rcloneview-synology-nas-docker-rcloneview)
- [Membuat Tugas Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Penjadwalan Tugas](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
