---
slug: migrate-box-to-sharepoint-onedrive-rcloneview
title: "Cara Migrasi dari Box ke SharePoint atau OneDrive — Migrasi Cloud Enterprise dengan RcloneView"
authors:
  - tayson
description: "Berpindah dari Box ke Microsoft 365? Pelajari cara migrasi file dari Box ke SharePoint Online atau OneDrive for Business sambil tetap mempertahankan struktur folder menggunakan RcloneView."
keywords:
  - migrate box to sharepoint
  - box to onedrive migration
  - box to microsoft 365 transfer
  - box sharepoint migration tool
  - move files from box
  - box migration tool
  - enterprise cloud migration
  - box to office 365
  - box data migration
  - box alternative migration
tags:
  - RcloneView
  - box
  - sharepoint
  - onedrive
  - migration
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cara Migrasi dari Box ke SharePoint atau OneDrive — Migrasi Cloud Enterprise dengan RcloneView

> Perusahaan Anda telah memutuskan untuk beralih sepenuhnya ke Microsoft 365. Langkah pertama: migrasikan semua file dari Box ke SharePoint dan OneDrive. Langkah kedua: jangan sampai ada data yang hilang dalam prosesnya.

Box telah lama menjadi andalan untuk berbagi file di lingkungan enterprise, tetapi banyak organisasi kini mengonsolidasikan ekosistem cloud mereka ke Microsoft 365. Migrasi dari Box ke SharePoint Online atau OneDrive for Business adalah proyek besar — terutama ketika Anda harus menangani data yang terkumpul selama bertahun-tahun, struktur folder yang kompleks, dan ruang kerja bersama. RcloneView membuat proses ini menjadi lebih mudah dikelola.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Perencanaan Migrasi

### Menilai lingkungan Box Anda

Sebelum melakukan migrasi, buat inventaris dari apa yang Anda miliki:

- **Folder pribadi** → Migrasikan ke masing-masing akun OneDrive.
- **Folder/ruang kerja bersama** → Migrasikan ke document library SharePoint.
- **Data arsip** → Pertimbangkan untuk memindahkannya ke penyimpanan yang lebih murah (S3, B2) daripada SharePoint.
- **Total volume data** — Menentukan jadwal dan pendekatan yang digunakan.

### Pemetaan tujuan

| Sumber Box | Tujuan Microsoft 365 |
|-----------|--------------------------|
| My Files | OneDrive for Business |
| Shared Folders | SharePoint Team Sites |
| Department Folders | SharePoint Document Libraries |
| Archive/Cold Data | OneDrive atau Azure Blob Storage |

## Migrasi Langkah demi Langkah

### 1) Tambahkan remote Box dan Microsoft

Hubungkan kedua layanan di RcloneView:

<img src="/support/images/en/blog/new-remote.png" alt="Add Box and SharePoint remotes" class="img-large img-center" />

Untuk SharePoint, tambahkan sebagai remote OneDrive Business dan tentukan URL situs SharePoint.

### 2) Jelajahi dan bandingkan

Buka Box di sisi kiri dan SharePoint/OneDrive di sisi kanan:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Box and SharePoint side by side" class="img-large img-center" />

### 3) Transfer secara bertahap

Jangan mencoba memigrasikan semuanya sekaligus. Prioritaskan:

**Fase 1: Proyek aktif** — File yang dibutuhkan orang setiap hari.
**Fase 2: Ruang kerja bersama** — Folder tim dan ruang kolaborasi.
**Fase 3: Arsip** — Proyek lama dan data historis.

### 4) Jalankan job Copy

Buat job Copy untuk setiap fase:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Box to SharePoint migration job" class="img-large img-center" />

### 5) Verifikasi setiap fase

Setelah setiap fase, bandingkan sumber dan tujuan:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Box to SharePoint migration" class="img-large img-center" />

## Menangani Batasan

### Batasan nama file

SharePoint/OneDrive memiliki aturan penamaan yang lebih ketat dibandingkan Box:

- Karakter yang tidak diperbolehkan: `" * : < > ? / \ |`
- Nama file tidak boleh diawali atau diakhiri dengan spasi.
- Panjang path maksimum: 400 karakter.

Rclone secara otomatis menangani banyak konversi ini selama proses transfer.

### Box Notes

Box Notes bersifat proprietary dan tidak memiliki padanan langsung di Microsoft 365. File-file ini perlu diekspor sebagai PDF atau disalin secara manual ke OneNote/Word.

### Izin akses dan berbagi

RcloneView mentransfer file tetapi tidak izin akses berbagi (sharing permissions). Setelah migrasi, Anda perlu mengatur ulang pengaturan berbagi di SharePoint/OneDrive. Rencanakan ini sebagai langkah terpisah.

### Batas kecepatan (rate limit)

Baik Box maupun SharePoint memiliki batas kecepatan API:

- **Box**: Bervariasi tergantung paket (biasanya 10–20 permintaan/detik).
- **SharePoint**: Microsoft membatasi berdasarkan pola penggunaan.

RcloneView menghormati batasan ini. Untuk migrasi berskala besar, jadwalkan transfer di luar jam kerja dan gunakan fitur retry (v1.3).

## Menjaga Box dan SharePoint Tetap Sinkron Selama Masa Transisi

Tidak semua orang akan beralih pada hari yang sama. Jadwalkan sinkronisasi untuk menjaga kedua platform tetap up-to-date:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule sync during Box to SharePoint transition" class="img-large img-center" />

Ini memberi tim Anda waktu untuk bertransisi secara bertahap tanpa ada kesenjangan data.

## Memantau Transfer Berskala Besar

Migrasi enterprise melibatkan data dalam skala terabyte. Pantau progresnya:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Box to SharePoint migration" class="img-large img-center" />

## Batch Jobs untuk Alur Kerja Migrasi

Gunakan Batch Jobs v1.3 untuk mengotomatiskan seluruh urutan migrasi:

1. Copy Box → SharePoint (proyek aktif).
2. Copy Box → OneDrive (file pribadi).
3. Bandingkan Box vs SharePoint untuk verifikasi.
4. Kirim notifikasi Slack setelah selesai.

## Setelah Migrasi

1. **Verifikasi semua file** — Jalankan Folder Comparison final.
2. **Atur izin akses SharePoint** — Bangun kembali struktur berbagi.
3. **Latih tim Anda** — Bantu pengguna menemukan file mereka di lokasi baru.
4. **Pantau selama 30 hari** — Biarkan Box tetap aktif sebagai cadangan.
5. **Nonaktifkan Box** — Batalkan setelah memastikan semuanya stabil.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan Box dan SharePoint/OneDrive** sebagai remote.
3. **Rencanakan fase migrasi Anda**.
4. **Jalankan job Copy** untuk setiap fase.
5. **Verifikasi dengan Folder Comparison** setelah setiap fase.
6. **Jadwalkan sinkronisasi** selama masa transisi.

Migrasi enterprise tidak harus berarti kompleksitas ala enterprise.

---

**Panduan Terkait:**

- [Membuat Job Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Membandingkan Isi Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Penjadwalan Job](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Mengatur Batas Bandwidth](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
