---
slug: backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview
title: "Cadangkan Dropbox ke Backblaze B2 untuk Penyimpanan Jangka Panjang yang Terjangkau dengan RcloneView"
authors:
  - tayson
description: "Lindungi data Dropbox Anda dengan mencadangkannya ke Backblaze B2 dengan biaya yang jauh lebih murah — secara otomatis, dengan penjadwalan dan verifikasi — menggunakan RcloneView."
keywords:
  - dropbox backup to backblaze
  - dropbox to b2
  - backup dropbox cheap
  - dropbox backblaze b2 sync
  - dropbox long-term backup
  - affordable cloud backup
  - dropbox data protection
  - dropbox to backblaze transfer
  - dropbox rclone backup
  - cheap dropbox backup solution
tags:
  - dropbox
  - backblaze-b2
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cadangkan Dropbox ke Backblaze B2 untuk Penyimpanan Jangka Panjang yang Terjangkau dengan RcloneView

> Dropbox sangat bagus untuk sinkronisasi sehari-hari, tetapi mahal untuk pencadangan jangka panjang. Backblaze B2 harganya jauh lebih murah. RcloneView menghubungkan keduanya dan mengotomatiskan pencadangan.

Dropbox unggul dalam sinkronisasi file real-time dan kolaborasi, tetapi menggunakannya sebagai satu-satunya pencadangan berisiko dan mahal — terutama untuk pustaka file berukuran besar. Backblaze B2 menawarkan penyimpanan objek yang kompatibel dengan S3 seharga $0,006/GB/bulan (sekitar 1/3 biaya dari kebanyakan pesaing), sehingga ideal untuk pengarsipan jangka panjang. RcloneView menjembatani keduanya: mencadangkan Dropbox Anda ke B2 secara otomatis sesuai jadwal, memverifikasi dengan checksum, dan memulihkan kapan saja.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Mencadangkan Dropbox ke Backblaze B2?

### Penghematan biaya

| Penyedia | Biaya per TB/bulan | 10 TB/tahun |
|----------|-------------------|------------|
| Dropbox Business | ~$15/pengguna (terbatas) | Bervariasi |
| Backblaze B2 | $6 | $72 |
| AWS S3 Standard | $23 | $276 |

Harga B2 menjadikannya salah satu tujuan pencadangan cloud paling murah yang tersedia.

### Independensi dari Dropbox

- **Masalah akun** — Jika akun Dropbox Anda ditangguhkan atau disusupi, cadangan B2 Anda tidak terpengaruh.
- **Penghapusan tidak sengaja** — Riwayat versi Dropbox memiliki batasan. B2 memberi Anda jaring pengaman yang independen.
- **Perlindungan ransomware** — Cadangan B2 terpisah dengan aturan siklus hidup dapat berfungsi sebagai titik pemulihan yang tidak dapat diubah.

## Menyiapkan Pencadangan

### Langkah 1: Tambahkan Dropbox

1. Klik **Add Remote** → pilih **Dropbox**.
2. Autentikasi melalui OAuth.
3. File Dropbox Anda sekarang dapat dijelajahi.

### Langkah 2: Tambahkan Backblaze B2

1. Klik **Add Remote** → pilih **Backblaze B2** (atau yang kompatibel dengan S3).
2. Masukkan Application Key ID dan Application Key B2 Anda.
3. Bucket B2 Anda sekarang dapat dijelajahi.

<img src="/support/images/en/blog/new-remote.png" alt="Add Dropbox and Backblaze B2 remotes" class="img-large img-center" />

### Langkah 3: Buat Job Pencadangan

1. Buat **Copy job**: Dropbox → bucket B2.
2. Gunakan Copy (bukan Sync) untuk menghindari penghapusan file B2 saat file Dropbox dihapus.
3. Jalankan pencadangan awal.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Dropbox to B2 backup job" class="img-large img-center" />

### Langkah 4: Verifikasi

Gunakan [Folder Comparison](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) untuk memastikan setiap file berhasil masuk ke B2:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Dropbox backup on B2" class="img-large img-center" />

### Langkah 5: Jadwalkan

Siapkan pencadangan otomatis harian:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Dropbox to B2 backups" class="img-large img-center" />

## Pemantauan

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Dropbox to B2 transfer" class="img-large img-center" />

Tambahkan notifikasi [Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control) atau [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control) untuk mengetahui saat pencadangan selesai atau gagal.

## Memulihkan dari B2

Jika Anda perlu memulihkan:

1. Buat Copy job secara terbalik: B2 → Dropbox (atau B2 → drive lokal).
2. Gunakan Folder Comparison untuk memilih file tertentu yang akan dipulihkan.
3. RcloneView menangani transfer secara visual — tanpa perlu CLI.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan Dropbox** dan **Backblaze B2** sebagai remote.
3. **Buat Copy job** dan jalankan pencadangan awal.
4. **Jadwalkan** untuk perlindungan otomatis harian.
5. **Tidur nyenyak** karena mengetahui data Dropbox Anda memiliki cadangan yang terjangkau dan independen.

---

**Panduan Terkait:**

- [Tambah Remote via Login Berbasis Browser (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Bandingkan Isi Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Membuat Job Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Penjadwalan Job](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
