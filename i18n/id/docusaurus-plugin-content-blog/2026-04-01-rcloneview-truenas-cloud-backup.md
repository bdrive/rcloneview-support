---
slug: rcloneview-truenas-cloud-backup
title: "Gunakan RcloneView dengan TrueNAS untuk Pencadangan dan Sinkronisasi Cloud"
authors:
  - tayson
description: "Hubungkan RcloneView ke TrueNAS (CORE atau SCALE) untuk pencadangan cloud, sinkronisasi, dan manajemen multi-cloud. Gantikan atau lengkapi tugas TrueNAS Cloud Sync dengan fitur lengkap rclone."
keywords:
  - rcloneview truenas
  - truenas cloud backup rclone
  - truenas scale rclone gui
  - truenas core cloud sync
  - rclone truenas setup
  - truenas s3 backup rcloneview
  - truenas google drive backup
  - truenas cloud storage management
  - backup truenas to cloud
  - truenas rclone integration
tags:
  - RcloneView
  - nas
  - cloud-backup
  - guide
  - platform
  - linux
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gunakan RcloneView dengan TrueNAS untuk Pencadangan dan Sinkronisasi Cloud

> TrueNAS memiliki tugas Cloud Sync bawaan yang didukung oleh rclone — namun antarmuka bawaannya terbatas. Menjalankan RcloneView bersama TrueNAS membuka fitur lengkap rclone: manajemen multi-cloud, remote Crypt, Bisync, aturan filter, perbandingan folder, dan banyak lagi.

TrueNAS CORE dan SCALE sama-sama menyertakan rclone di baliknya untuk fitur tugas Cloud Sync. Namun GUI web-nya hanya menampilkan sebagian kecil kemampuan rclone — pilihan provider yang terbatas, tanpa lapisan enkripsi, tanpa bisync, dan tanpa tugas lintas cloud. Dengan menjalankan RcloneView di TrueNAS (melalui Docker, VM, atau workstation jarak jauh), Anda mendapatkan akses ke fitur lengkap rclone sambil tetap menggunakan TrueNAS sebagai platform penyimpanan utama Anda.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## TrueNAS + RcloneView: Dua Pendekatan Integrasi

### Pendekatan 1 — RcloneView dalam kontainer TrueNAS SCALE (Docker)

TrueNAS SCALE mendukung kontainer Docker secara native melalui antarmuka Apps-nya. Anda dapat menjalankan RcloneView sebagai kontainer persisten:

1. Di TrueNAS SCALE, buka **Apps → Available Applications** atau gunakan opsi **Custom App**.
2. Deploy image Docker RcloneView dengan volume mount yang mengarah ke path dataset TrueNAS Anda.
3. Akses antarmuka web RcloneView dari browser Anda.

Cara ini menjaga RcloneView tetap berada di NAS itu sendiri, sehingga tugas pencadangan berjalan tanpa memerlukan mesin terpisah.

### Pendekatan 2 — RcloneView di workstation, NAS sebagai remote

Jalankan RcloneView di desktop Anda dan tambahkan dataset TrueNAS Anda sebagai remote:

- **SMB**: Tambahkan share Windows sebagai remote lokal atau SMB di RcloneView.
- **SFTP**: Aktifkan SFTP di TrueNAS dan tambahkan sebagai remote SFTP di RcloneView.
- **NFS**: Mount share NFS NAS Anda secara lokal dan perlakukan sebagai path lokal di RcloneView.

Pendekatan ini lebih sederhana untuk disiapkan dan berfungsi tanpa memerlukan keahlian Docker.

## Menyiapkan SFTP dari TrueNAS

Metode akses remote yang paling andal:

### Langkah 1 — Aktifkan SSH di TrueNAS

Di TrueNAS: **System → Services → SSH → Enable**. Buat pengguna khusus dengan akses terbatas pada dataset pencadangan Anda.

### Langkah 2 — Tambahkan TrueNAS sebagai remote SFTP di RcloneView

<img src="/support/images/en/blog/new-remote.png" alt="Add TrueNAS SFTP remote in RcloneView" class="img-large img-center" />

1. Klik **New Remote** di RcloneView.
2. Pilih **SFTP**.
3. Masukkan IP TrueNAS Anda, port SSH (default 22), username, dan kunci SSH atau password.
4. Atur root path ke dataset Anda (misalnya, `/mnt/tank/Backups`).
5. Simpan.

RcloneView sekarang menampilkan dataset TrueNAS Anda sebagai remote yang dapat dijelajahi.

## Tugas Pencadangan Cloud untuk TrueNAS

Dengan TrueNAS dapat diakses sebagai remote SFTP, Anda dapat membuat tugas pencadangan yang komprehensif:

### Mencadangkan dataset TrueNAS ke S3

1. Buat tugas **Sync** baru di RcloneView.
2. Source: `truenas-sftp:/mnt/tank/Photos/`
3. Destination: `s3-backup:truenas-photos-backup/`
4. Aktifkan verifikasi checksum untuk integritas data.
5. Jadwalkan setiap malam.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule TrueNAS to S3 backup job" class="img-large img-center" />

### Pencadangan terenkripsi ke cloud

Untuk dataset yang sensitif, tambahkan lapisan remote Crypt:

1. Buat remote Crypt yang membungkus remote S3 Anda.
2. Atur remote Crypt sebagai destination, menggantikan remote S3 mentah.
3. File dienkripsi di sisi klien sebelum meninggalkan TrueNAS Anda.

### Pencadangan multi-cloud

Gunakan RcloneView untuk mencadangkan dataset TrueNAS yang sama ke dua provider cloud secara bersamaan:

- Tugas 1: `truenas-sftp:/mnt/tank/` → `s3-primary:` (harian)
- Tugas 2: `truenas-sftp:/mnt/tank/` → `b2-secondary:` (mingguan)

## Keunggulan Dibanding Cloud Sync Bawaan TrueNAS

| Fitur | TrueNAS Cloud Sync | RcloneView |
|---------|-------------------|-----------|
| Dukungan provider | ~20 provider | 70+ provider |
| Lapisan Crypt/enkripsi | ✗ | ✓ |
| Bisync (dua arah) | ✗ | ✓ |
| Aturan filter | Terbatas | Dukungan filter rclone penuh |
| Perbandingan folder | ✗ | ✓ |
| Lintas cloud (cloud A → cloud B) | ✗ | ✓ |
| Penjadwalan tugas | ✓ | ✓ |
| Pemantauan real-time | Terbatas | ✓ |

## Pemantauan dan Verifikasi

Gunakan **Folder Comparison** RcloneView untuk secara berkala memverifikasi bahwa pencadangan TrueNAS Anda sesuai dengan penyimpanan cloud:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify TrueNAS backup in cloud with folder comparison" class="img-large img-center" />

Bandingkan source TrueNAS dengan destination cloud — file yang hilang atau berubah akan langsung terlihat. Jadwalkan pemeriksaan verifikasi bulanan sebagai pengecekan integritas data.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Aktifkan SSH di TrueNAS** dan tambahkan sebagai remote SFTP di RcloneView.
3. **Buat tugas pencadangan** dari dataset TrueNAS ke provider cloud Anda.
4. **Jadwalkan dan enkripsi** — siapkan tugas pencadangan malam hari dan tambahkan remote Crypt untuk dataset yang sensitif.

TrueNAS adalah perangkat lunak NAS yang sangat baik. Padukan dengan RcloneView dan Anda memiliki strategi pencadangan cloud yang lengkap dan fleksibel, jauh melampaui apa yang ditawarkan alat bawaan TrueNAS.

---

**Panduan Terkait:**

- [Jalankan RcloneView di Synology NAS](https://rcloneview.com/support/blog/rcloneview-synology-rclone-gui)
- [Jalankan RcloneView di Docker](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)
- [Mencadangkan NAS ke Beberapa Cloud](https://rcloneview.com/support/blog/backup-nas-to-multiple-clouds-rcloneview)

<CloudSupportGrid />
