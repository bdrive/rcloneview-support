---
slug: run-rcloneview-synology-nas-docker-rcloneview
title: "Jalankan RcloneView di Synology NAS — Pencadangan dan Sinkronisasi Cloud dari NAS Anda"
authors:
  - tayson
description: "Ubah Synology NAS Anda menjadi hub pencadangan cloud. Pelajari cara menggunakan RcloneView dengan Synology NAS untuk sinkronisasi cloud otomatis, pencadangan, dan manajemen multi-cloud."
keywords:
  - rcloneview synology nas
  - synology cloud backup
  - synology cloud sync alternative
  - synology rclone
  - synology nas s3 backup
  - synology google drive sync
  - synology multi cloud
  - nas cloud backup tool
  - synology automated backup
  - synology nas cloud manager
tags:
  - synology
  - nas
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Jalankan RcloneView di Synology NAS — Pencadangan dan Sinkronisasi Cloud dari NAS Anda

> Synology NAS Anda menyimpan data penting bernilai terabyte. Cloud Sync bawaan Synology cukup untuk kebutuhan dasar, tetapi ketika Anda memerlukan manajemen multi-cloud, penjadwalan, perbandingan folder, dan tugas batch — RcloneView melengkapi kekurangan tersebut.

Perangkat Synology NAS sangat baik untuk penyimpanan lokal terpusat, tetapi integrasi cloud-nya memiliki keterbatasan. Synology Cloud Sync mendukung sekitar 20 penyedia cloud dengan sinkronisasi dasar. Synology Hyper Backup menangani pencadangan tetapi tidak memiliki manajemen file multi-cloud. RcloneView melengkapi keduanya dengan 70+ penyedia cloud, manajemen file visual, dan otomatisasi tingkat lanjut.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa RcloneView untuk Synology?

### Melampaui Synology Cloud Sync

| Fitur | Synology Cloud Sync | RcloneView |
|---------|-------------------|------------|
| Penyedia cloud | ~20 | 70+ |
| Penjelajah file dua panel | ❌ | ✅ |
| Perbandingan folder | ❌ | ✅ |
| Transfer cloud-ke-cloud | ❌ | ✅ |
| Tugas batch | ❌ | ✅ |
| Notifikasi Slack/Discord | ❌ | ✅ |
| Aturan filter | Dasar | Filter rclone lengkap |
| Remote terenkripsi | ❌ | ✅ (crypt) |
| Mount drive cloud | ❌ | ✅ |
| Penyedia yang kompatibel dengan S3 | Terbatas | Semua |

### Deteksi otomatis Synology

RcloneView mendeteksi perangkat Synology NAS secara otomatis di jaringan Anda:

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Synology NAS auto-detection" class="img-large img-center" />

Tidak perlu konfigurasi jaringan manual.

## Opsi Pengaturan

### Opsi 1: RcloneView di desktop, terhubung ke NAS

Pendekatan paling sederhana. Jalankan RcloneView di desktop Windows/Mac/Linux Anda:

1. Tambahkan Synology NAS Anda sebagai remote (terdeteksi otomatis atau melalui SFTP/WebDAV).
2. Tambahkan tujuan cloud Anda (S3, B2, Google Drive, dll).
3. Buat tugas sinkronisasi/salin antara NAS dan cloud.
4. Jadwalkan tugas agar berjalan secara otomatis.

Cara ini cocok untuk pengguna rumahan dan kantor kecil.

### Opsi 2: RcloneView di mesin khusus

Gunakan Raspberry Pi atau laptop lama sebagai pengontrol pencadangan khusus:

1. Instal RcloneView di mesin khusus tersebut.
2. Hubungkan ke Synology NAS melalui network mount.
3. Konfigurasikan dan jadwalkan semua tugas pencadangan.
4. Biarkan berjalan 24/7.

## Alur Kerja Pencadangan

### NAS → Cloud (pencadangan off-site)

Alur kerja yang paling penting. Cadangkan NAS Anda ke penyimpanan cloud:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Backup NAS to cloud" class="img-large img-center" />

Target yang direkomendasikan:

| Data NAS | Target Cloud | Alasan |
|----------|-------------|-----|
| Foto & Video | Backblaze B2 | Murah, $6/TB |
| Dokumen | Google Drive | Mudah diakses, dapat dicari |
| Data bisnis | AWS S3 | Tahan lama, kelas enterprise |
| Semua data (terenkripsi) | Apa pun + crypt | Pencadangan zero-knowledge |

### Cloud → NAS (mirror lokal)

Simpan salinan lokal dari data cloud untuk akses cepat:

```
Google Drive → NAS/CloudMirror/GoogleDrive/
OneDrive → NAS/CloudMirror/OneDrive/
```

### NAS → NAS (pencadangan lokasi jarak jauh)

Jika Anda memiliki perangkat NAS di dua lokasi, sinkronkan antara keduanya melalui RcloneView dengan penyedia cloud sebagai penyimpanan perantara.

## Jadwalkan Pencadangan Otomatis

Atur pencadangan NAS setiap malam:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule NAS cloud backup" class="img-large img-center" />

### Jadwal yang direkomendasikan

| Tugas | Frekuensi | Waktu |
|-----|-----------|------|
| Data penting → B2 | Setiap malam | 02:00 |
| Foto → Google Drive | Setiap malam | 03:00 |
| NAS lengkap → S3 | Mingguan | Sabtu tengah malam |
| Verifikasi (bandingkan) | Mingguan | Minggu pukul 06:00 |

## Verifikasi Pencadangan

Bandingkan isi NAS dengan pencadangan cloud:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify NAS backup against cloud" class="img-large img-center" />

## Pencadangan NAS Terenkripsi

Gunakan remote crypt untuk mengenkripsi data NAS Anda sebelum mengunggahnya ke penyimpanan cloud. Penyedia cloud tidak akan pernah melihat file Anda yang belum dienkripsi.

## Tugas Batch untuk Admin NAS

Otomatiskan seluruh rutinitas pencadangan NAS Anda:

1. Salin /photos → B2.
2. Salin /documents → Google Drive.
3. Salin /business → S3 (terenkripsi).
4. Bandingkan ketiganya.
5. Beri notifikasi melalui Slack.

Semua dalam satu batch terjadwal.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Hubungkan ke Synology NAS Anda** (terdeteksi otomatis).
3. **Tambahkan remote penyimpanan cloud**.
4. **Buat dan jadwalkan tugas pencadangan**.
5. **Verifikasi dengan Perbandingan Folder**.

Data NAS Anda berharga. Berikan jaring pengaman off-site untuknya.

---

**Panduan Terkait:**

- [Buat Tugas Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Penjadwalan Tugas](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Bandingkan Isi Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Enkripsi Pencadangan Cloud](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
