---
slug: rcloneview-on-raspberry-pi-cloud-backup-rcloneview
title: "Jalankan RcloneView di Raspberry Pi — Bangun Perangkat Pencadangan Cloud Berdaya Rendah"
authors:
  - tayson
description: "Ubah Raspberry Pi Anda menjadi perangkat pencadangan cloud 24/7. Siapkan RcloneView di Raspberry Pi untuk sinkronisasi otomatis antara penyimpanan lokal dan penyedia cloud."
keywords:
  - rcloneview raspberry pi
  - raspberry pi cloud backup
  - rclone raspberry pi
  - raspberry pi nas cloud sync
  - raspberry pi cloud storage
  - diy cloud backup appliance
  - raspberry pi s3 backup
  - low power cloud sync
  - raspberry pi google drive sync
  - raspberry pi automated backup
tags:
  - raspberry-pi
  - platform
  - self-hosted
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Jalankan RcloneView di Raspberry Pi — Bangun Perangkat Pencadangan Cloud Berdaya Rendah

> Raspberry Pi hanya mengonsumsi daya 5–15 watt. Itu lebih kecil dari daya lampu pijar. Biarkan berjalan 24/7, dan ia menjadi perangkat pencadangan cloud yang senyap dan selalu aktif, menyinkronkan data Anda saat Anda tidur.

Raspberry Pi adalah komputer yang cukup mumpuni untuk tugas-tugas penyimpanan cloud. Padukan dengan drive USB eksternal dan RcloneView, dan Anda memiliki mesin pencadangan khusus yang menyinkronkan file lokal ke penyimpanan cloud (atau sebaliknya) sepanjang waktu — dengan biaya daya yang jauh lebih rendah dibandingkan PC atau NAS lengkap.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Raspberry Pi untuk Pencadangan Cloud?

### Selalu aktif, daya rendah

| Perangkat | Konsumsi Daya | Biaya Tahunan (24/7) |
|--------|-----------|-------------------|
| Raspberry Pi 4 | 5–7W | ~$8 |
| Raspberry Pi 5 | 8–15W | ~$14 |
| PC Desktop | 100–300W | ~$150–400 |
| NAS (2-bay) | 20–40W | ~$30–60 |

Raspberry Pi hampir tidak memerlukan biaya untuk dijalankan 24/7.

### Senyap dan ringkas

Tanpa kipas (Pi 4), tanpa suara bising. Letakkan di rak dan lupakan begitu saja.

### Cukup mumpuni

Raspberry Pi 4 dan 5 mampu menangani:

- Menyinkronkan ribuan file ke penyimpanan cloud.
- Menjalankan tugas pencadangan terjadwal.
- Melakukan mount penyimpanan cloud untuk akses lokal.
- Mengelola beberapa akun cloud secara bersamaan.

## Pengaturan Perangkat Keras

### Perangkat keras yang direkomendasikan

- **Raspberry Pi 4** (4 GB) atau **Raspberry Pi 5** (4–8 GB).
- **Drive eksternal USB 3.0** atau SSD untuk penyimpanan lokal.
- **Kartu MicroSD** (32 GB) untuk sistem operasi.
- **Koneksi Ethernet** (direkomendasikan dibanding Wi-Fi untuk transfer besar).
- **Catu daya** (catu daya resmi Pi direkomendasikan).

### Arsitektur penyimpanan

```
External USB Drive → Raspberry Pi → Cloud Storage
                          ↕
                    RcloneView (scheduling, monitoring)
```

Drive eksternal menyimpan file lokal Anda. RcloneView di Pi menyinkronkannya ke penyimpanan cloud sesuai jadwal.

## Instalasi

### 1) Instal Raspberry Pi OS

Gunakan Raspberry Pi Imager untuk mem-flash Raspberry Pi OS (64-bit) ke kartu microSD Anda. Edisi Desktop diperlukan untuk GUI RcloneView.

### 2) Instal RcloneView

Unduh paket `.deb` ARM64 dari [rcloneview.com](https://rcloneview.com/src/download.html):

```bash
sudo dpkg -i rcloneview_*_arm64.deb
sudo apt-get install -f
```

### 3) Instal FUSE (untuk mount)

```bash
sudo apt-get install fuse3
```

### 4) Mount drive eksternal Anda

```bash
sudo mkdir /mnt/backup
sudo mount /dev/sda1 /mnt/backup
```

Tambahkan ke `/etc/fstab` agar terpasang otomatis saat boot.

### 5) Jalankan RcloneView

```bash
rcloneview
```

Jika berjalan headless (melalui VNC), pastikan VNC diaktifkan di `raspi-config`.

## Konfigurasi Pencadangan Cloud

### Tambahkan remote cloud Anda

<img src="/support/images/en/blog/new-remote.png" alt="Add cloud remote on Raspberry Pi" class="img-large img-center" />

Tambahkan tujuan pencadangan Anda — Google Drive, S3, Backblaze B2, atau salah satu dari 70+ penyedia yang didukung.

### Buat tugas pencadangan

Siapkan tugas Copy dari drive eksternal Anda ke penyimpanan cloud:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create backup job" class="img-large img-center" />

### Jadwalkan pencadangan otomatis

Jadwalkan pencadangan setiap malam:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Pi backup jobs" class="img-large img-center" />

## Kasus Penggunaan

### 1) Pencadangan server file rumahan

Sambungkan drive USB berisi foto keluarga, dokumen, dan media Anda. Jadwalkan pencadangan malam hari ke Google Drive atau Backblaze B2.

### 2) Pelengkap NAS

Jika NAS Anda tidak memiliki fitur sinkronisasi cloud yang baik, gunakan Pi sebagai jembatan:

```
NAS (SMB share) → Pi (reads via mount) → Cloud Storage (via RcloneView)
```

### 3) Arsip kamera keamanan

Cadangkan rekaman kamera keamanan dari NVR lokal ke penyimpanan cloud untuk perlindungan di luar lokasi.

### 4) Pencadangan pengembang

Sinkronkan repositori kode dan file proyek Anda ke penyimpanan cloud:

- Filter agar hanya menyertakan file sumber (kecualikan `node_modules`, `.git`).
- Jadwalkan pencadangan per jam.

### 5) Cermin pustaka media

Simpan cermin cloud dari pustaka media lokal Anda. Gunakan untuk streaming dari Google Drive saat jauh dari rumah.

## Ekspektasi Performa

Bersikaplah realistis mengenai performa Pi:

| Tugas | Raspberry Pi 4 | Raspberry Pi 5 |
|------|----------------|----------------|
| Sinkronisasi file kecil (dokumen) | Baik | Sangat baik |
| Transfer file besar | Dibatasi oleh USB 3/jaringan | Baik |
| Ribuan file kecil | Fase pemeriksaan lambat | Sedang |
| Transfer terenkripsi | Dibatasi CPU | Lebih baik (dukungan AES) |
| Kecepatan jaringan | ~300 Mbps (Gigabit Ethernet) | ~1 Gbps |

Untuk transfer besar, kesabaran sangat membantu. Pi memang tidak cepat, tetapi berjalan 24/7 — pada akhirnya tugas tetap selesai.

### Tips optimalisasi

- **Kurangi transfer paralel** — 2–4 optimal untuk Pi 4. Pi 5 dapat menangani 4–8.
- **Gunakan ethernet** — Wi-Fi menambah latensi dan mengurangi throughput.
- **Jadwalkan di luar jam sibuk** — Jalankan tugas berat di malam hari.
- **SSD dibanding HDD** — SSD USB membaca jauh lebih cepat dibanding disk berputar.

## Pantau dan Verifikasi

Lacak pencadangan Anda:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Pi backup transfers" class="img-large img-center" />

Verifikasi dengan Folder Comparison:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Pi cloud backup" class="img-large img-center" />

## Operasi Headless

Untuk penyiapan yang benar-benar set-and-forget:

1. Konfigurasikan semua tugas dan jadwal melalui VNC atau secara langsung.
2. Aktifkan autostart RcloneView (lihat [panduan Ubuntu/Debian](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)).
3. Lepaskan monitor dan keyboard.
4. Pi berjalan secara senyap, menjalankan tugas-tugas terjadwal.

## Memulai

1. **Dapatkan Raspberry Pi 4 atau 5** dengan drive USB eksternal.
2. **Instal Raspberry Pi OS** (64-bit Desktop).
3. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
4. **Tambahkan remote cloud dan buat tugas pencadangan**.
5. **Jadwalkan lalu lupakan** — Pi Anda yang mengurus sisanya.

Perangkat pencadangan cloud yang paling murah, paling senyap, dan paling efisien yang bisa Anda bangun.

---

**Panduan Terkait:**

- [Instal RcloneView di Ubuntu/Debian](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [Membuat Tugas Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Penjadwalan Tugas](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Mengatur Batas Bandwidth](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
