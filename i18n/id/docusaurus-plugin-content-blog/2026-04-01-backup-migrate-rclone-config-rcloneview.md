---
slug: backup-migrate-rclone-config-rcloneview
title: "Cara Mencadangkan, Memigrasikan, dan Mengelola Konfigurasi Rclone Anda dengan RcloneView"
authors:
  - tayson
description: "Pelajari cara mencadangkan, memulihkan, dan memigrasikan file konfigurasi rclone Anda — termasuk remote terenkripsi — menggunakan RcloneView. Jaga koneksi cloud Anda tetap portabel dan terlindungi."
keywords:
  - backup rclone config
  - migrate rclone configuration
  - rclone config file location
  - rcloneview config backup
  - rclone config portable
  - export rclone remotes
  - rclone config file backup
  - move rclone to new computer
  - rclone config migration
  - rcloneview configuration management
tags:
  - feature
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cara Mencadangkan, Memigrasikan, dan Mengelola Konfigurasi Rclone Anda dengan RcloneView

> File konfigurasi rclone Anda berisi semua konfigurasi remote cloud Anda — detail koneksi, token autentikasi, kunci enkripsi, dan pengaturan khusus. Kehilangan file ini berarti harus mengonfigurasi ulang setiap remote dari awal. Berikut cara mencadangkannya, memigrasikannya, dan menjaganya tetap portabel.

Setelah menghabiskan waktu mengonfigurasi puluhan remote cloud di RcloneView — alur OAuth, kunci API, frasa sandi enkripsi, endpoint khusus — hal terakhir yang Anda inginkan adalah kehilangan hasil kerja tersebut akibat kegagalan disk, pemasangan ulang OS, atau upgrade mesin. File konfigurasi rclone adalah satu file teks yang mengenkode seluruh pengaturan tersebut. Memahami di mana file ini berada dan cara melindunginya merupakan perawatan penting bagi setiap pengguna RcloneView yang serius.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Di Mana Letak File Konfigurasi Rclone?

Lokasi file konfigurasi bergantung pada sistem operasi Anda:

| OS | Lokasi Default |
|----|----------------|
| **Windows** | `%APPDATA%\rclone\rclone.conf` |
| **macOS** | `~/.config/rclone/rclone.conf` |
| **Linux** | `~/.config/rclone/rclone.conf` |

Anda dapat memverifikasi lokasinya di **Terminal** RcloneView:

```bash
rclone config file
```

Perintah ini menampilkan path pasti yang digunakan di sistem Anda.

## Apa Isi File Konfigurasi

File konfigurasi adalah file teks biasa berformat INI. Setiap bagian mewakili satu remote:

```ini
[my-google-drive]
type = drive
client_id =
client_secret =
token = {"access_token":"ya29...","expiry":"2026-05-01T..."}

[s3-backup]
type = s3
provider = AWS
access_key_id = AKIA...
secret_access_key = abc123...
region = us-east-1

[encrypted-drive]
type = crypt
remote = my-google-drive:encrypted/
password = *** ENCRYPTED ***
password2 = *** ENCRYPTED ***
```

**Penting:** Token OAuth (untuk Google Drive, OneDrive, Dropbox) disimpan di dalam file konfigurasi. Token ini akan kedaluwarsa dan diperbarui secara otomatis saat digunakan. Cadangkan konfigurasi secara berkala untuk menangkap token valid terbaru.

## Mencadangkan File Konfigurasi

### Pencadangan manual

Salin file konfigurasi ke lokasi yang aman:

**Windows:**
```
copy %APPDATA%\rclone\rclone.conf C:\Backups\rclone-config-backup.conf
```

**macOS/Linux:**
```bash
cp ~/.config/rclone/rclone.conf ~/backups/rclone-config-$(date +%Y%m%d).conf
```

### Pencadangan otomatis dengan RcloneView

Siapkan sebuah job di RcloneView untuk mencadangkan file konfigurasi itu sendiri ke penyimpanan cloud:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule config file backup in RcloneView" class="img-large img-center" />

1. Buat job **Copy** baru.
2. Sumber: lokasi file konfigurasi (`~/.config/rclone/`)
3. Tujuan: folder cloud (`s3-backup:system-configs/rclone/`)
4. Jadwal: mingguan atau setelah perubahan besar.

**Catatan keamanan:** File konfigurasi berisi kredensial. Cadangkan hanya ke penyimpanan terenkripsi atau folder cloud terenkripsi (misalnya, remote Crypt).

## Mengenkripsi File Konfigurasi Saat Disimpan

Rclone dapat mengenkripsi seluruh file konfigurasi dengan kata sandi. Aktifkan ini dari terminal RcloneView:

```bash
rclone config
# Choose: s - Set configuration password
```

Setelah menetapkan kata sandi, file konfigurasi akan terenkripsi di disk. Anda perlu memasukkan kata sandi setiap kali RcloneView dimulai atau saat menjalankan perintah rclone. Ini melindungi kredensial bahkan jika file konfigurasi dicuri.

<img src="/support/images/en/blog/new-remote.png" alt="Set config password in RcloneView terminal" class="img-large img-center" />

## Memigrasikan ke Mesin Baru

### Metode 1 — Salin langsung

Migrasi paling sederhana:

1. Salin `rclone.conf` dari mesin lama Anda ke path yang sama di mesin baru.
2. Instal RcloneView di mesin baru.
3. Buka RcloneView — semua remote Anda langsung muncul.

Tidak diperlukan autentikasi ulang untuk sebagian besar remote (S3, WebDAV, FTP, dll). Remote OAuth (Google Drive, OneDrive, Dropbox) akan menggunakan token yang tersimpan, yang tetap valid hingga kedaluwarsa (biasanya 60–90 hari sejak penggunaan terakhir).

### Metode 2 — Autentikasi ulang remote OAuth

Jika token OAuth telah kedaluwarsa, otorisasi ulang setiap remote yang terpengaruh:

1. Buka **Remotes** di RcloneView.
2. Pilih remote dan pilih **Edit**.
3. Klik **Re-authorize** untuk menghasilkan token baru.

Hanya remote dengan token OAuth yang kedaluwarsa yang memerlukan langkah ini.

### Metode 3 — Gunakan flag `--config`

Jika Anda menyimpan konfigurasi di lokasi non-standar (misalnya, Dropbox untuk portabilitas), gunakan:

```bash
rclone --config /path/to/rclone.conf <command>
```

Atau atur variabel lingkungan `RCLONE_CONFIG` agar ini menjadi default untuk semua operasi rclone di mesin tersebut.

## Melihat dan Mengedit Konfigurasi di RcloneView

Antarmuka manajemen remote RcloneView menyediakan GUI untuk menambah dan mengedit remote — tetapi bagi pengguna tingkat lanjut yang lebih menyukai akses langsung, file konfigurasi selalu menjadi cara yang valid untuk membuat perubahan. Setelah mengedit file konfigurasi secara manual, mulai ulang RcloneView agar perubahan tersebut diterapkan.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Manage remotes in RcloneView" class="img-large img-center" />

## Praktik Terbaik

| Praktik | Alasan |
|----------|-----|
| Cadangkan konfigurasi setiap minggu | Token OAuth diperbarui; tangkap kondisi valid terbaru |
| Enkripsi lokasi pencadangan | Konfigurasi berisi kredensial dan token |
| Gunakan kata sandi konfigurasi untuk instalasi yang sensitif | Perlindungan ekstra jika mesin disusupi |
| Jangan commit konfigurasi ke repositori Git publik | Kunci akses dan token dapat terekspos |
| Uji pemulihan secara berkala | Verifikasi bahwa cadangan Anda benar-benar dapat digunakan |

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Temukan file konfigurasi Anda** menggunakan `rclone config file` di terminal RcloneView.
3. **Siapkan job pencadangan otomatis** untuk menyalin konfigurasi ke penyimpanan cloud terenkripsi.
4. **Simpan kata sandi konfigurasi** (jika diatur) di pengelola kata sandi — kehilangannya berarti kehilangan akses ke konfigurasi.

Konfigurasi rclone Anda adalah satu file terpenting dalam pengaturan RcloneView Anda. Lindungi dengan semestinya.

---

**Panduan Terkait:**

- [Enkripsi Pencadangan Cloud dengan Remote Crypt](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [Terminal RcloneView: CLI di Dalam GUI](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [Amankan RcloneView dengan Kunci Aplikasi](https://rcloneview.com/support/blog/secure-rcloneview-app-lock-password)

<CloudSupportGrid />
