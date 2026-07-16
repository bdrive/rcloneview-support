---
slug: fix-slow-cloud-uploads-speed-optimization-rcloneview
title: "Mengapa Unggahan Cloud Saya Lambat? Tips Optimasi Kecepatan dengan RcloneView"
authors:
  - tayson
description: "Unggahan cloud terasa lambat? Pelajari mengapa transfer cloud menjadi lambat dan cara mengoptimalkan kecepatan dengan transfer paralel, chunking, kontrol bandwidth, dan penyesuaian khusus provider di RcloneView."
keywords:
  - slow cloud upload fix
  - speed up cloud transfer
  - cloud upload slow
  - optimize cloud sync speed
  - parallel cloud transfers
  - rclone speed optimization
  - google drive upload slow
  - s3 upload speed
  - cloud transfer performance
  - fast cloud sync tool
tags:
  - RcloneView
  - performance
  - cloud-storage
  - optimization
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengapa Unggahan Cloud Saya Lambat? Tips Optimasi Kecepatan dengan RcloneView

> Anda memulai unggahan cloud dengan perkiraan 30 menit. Dua jam kemudian, baru mencapai 40%. Sebelum menyalahkan koneksi internet Anda, masalahnya mungkin ada pada alat yang Anda gunakan — bukan pada koneksi Anda.

Transfer cloud yang lambat memang menjengkelkan, tetapi jarang disebabkan oleh satu masalah tunggal. Biasanya ini merupakan kombinasi dari pengaturan default yang tidak dioptimalkan untuk situasi Anda, throttling khusus provider, dan metode transfer yang tidak efisien. RcloneView memberi Anda kontrol untuk memperbaiki semua ini.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Transfer Cloud Lambat

### 1) Transfer single-threaded

Sebagian besar alat sinkronisasi cloud mengunggah satu file pada satu waktu. Jika Anda memiliki 10.000 file kecil, setiap file memerlukan koneksi HTTP terpisah — setup, transfer, verifikasi. Overhead per file bisa melebihi waktu transfer sebenarnya.

**Solusi**: Tingkatkan transfer paralel. Rclone secara default menggunakan 4, tetapi banyak koneksi dapat menangani 8–16 atau lebih.

### 2) Ukuran chunk terlalu kecil

File besar diunggah dalam bentuk chunk. Jika ukuran chunk terlalu kecil, setiap chunk memerlukan permintaan HTTP-nya sendiri, menambah overhead. Jika terlalu besar, satu chunk yang gagal berarti harus mengunggah ulang lebih banyak data.

**Solusi**: Untuk koneksi yang stabil, tingkatkan ukuran chunk. Untuk Google Drive, coba 64M atau 128M. Untuk S3, coba 16M–64M.

### 3) Batasan rate dari provider

Provider cloud membatasi (throttle) unggahan untuk mencegah penyalahgunaan:

- **Google Drive**: batas unggahan ~750 GB/hari.
- **OneDrive**: throttling setelah throughput tinggi yang berkelanjutan.
- **Dropbox**: throttling progresif di bawah beban berat.
- **S3**: 3.500 permintaan PUT/detik per prefix.

**Solusi**: Patuhi batasan rate dengan menyesuaikan kecepatan transfer. Gunakan [pembatasan bandwidth](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview) untuk tetap berada di bawah ambang batas.

### 4) Tidak ada server-side copy

Saat mentransfer antara dua layanan cloud (misalnya, S3 ke S3), beberapa alat mengunduh ke mesin Anda lalu mengunggah ulang. Rclone mendukung server-side copy untuk provider yang kompatibel — data berpindah langsung antar cloud tanpa melalui mesin Anda.

**Solusi**: RcloneView menggunakan server-side copy secara otomatis jika tersedia.

### 5) Memeriksa setiap file

Sebelum mentransfer, rclone memeriksa apakah setiap file sudah ada di tujuan. Dengan jumlah file yang besar, tahap pemeriksaan ini bisa memakan waktu lebih lama daripada transfer itu sendiri.

**Solusi**: Gunakan `--no-check-dest` untuk transfer massal awal. Gunakan pemeriksaan normal untuk sinkronisasi inkremental.

## Pengaturan Optimasi Kecepatan

### Transfer paralel

Tingkatkan jumlah transfer file yang berjalan secara bersamaan:

| Skenario | Pengaturan yang Disarankan |
|----------|-------------------|
| Default | 4 transfer |
| Internet cepat (100+ Mbps) | 8–16 transfer |
| Banyak file kecil | 16–32 transfer |
| Hanya file besar | 4–8 transfer |

Transfer paralel yang lebih banyak membantu untuk banyak file kecil. Untuk beberapa file besar saja, ukuran chunk lebih berpengaruh.

### Ukuran chunk berdasarkan provider

| Provider | Chunk Default | Rekomendasi |
|----------|--------------|-------------|
| Google Drive | 8 MB | 64–128 MB |
| OneDrive | 10 MB | 64 MB |
| S3 | 5 MB | 16–64 MB |
| Dropbox | 48 MB | 48–150 MB |

Chunk yang lebih besar berarti lebih sedikit permintaan HTTP dan overhead yang lebih rendah.

### Ukuran buffer

Tingkatkan buffer in-memory untuk pembacaan yang lebih cepat:

- Default: 16 MB
- Rekomendasi: 64–256 MB (jika Anda memiliki RAM yang cukup)

Ini membantu saat membaca dari sumber yang lambat (NAS, disk spinning).

## Pantau dan Ukur

Lacak kecepatan transfer secara real time untuk melihat efek dari perubahan yang Anda buat:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer speed in real time" class="img-large img-center" />

### Apa yang perlu diperhatikan

- **Kecepatan transfer** — Harus sesuai dengan persentase yang wajar dari kecepatan unggah internet Anda.
- **Transfer aktif** — Harus sesuai dengan pengaturan transfer paralel Anda.
- **Error** — Error rate limit (429, 403) berarti Anda perlu memperlambat.
- **Checks vs transfers** — Jika pemeriksaan memakan waktu terlalu lama, pertimbangkan untuk melewatkannya pada unggahan awal.

## Tips Khusus Provider

### Google Drive

- Atur ukuran chunk ke 64M atau lebih tinggi.
- Jaga transfer paralel di 4–8 (Google melakukan throttling secara agresif di atas angka ini).
- Jika Anda mencapai batas harian 750 GB, jadwalkan transfer di beberapa hari.

### OneDrive / SharePoint

- Gunakan 4–8 transfer paralel.
- Ukuran chunk 64 MB bekerja dengan baik.
- OneDrive melakukan throttling berdasarkan total volume — sebarkan transfer besar sepanjang waktu.

### AWS S3

- S3 menangani paralelisme tinggi dengan baik — coba 16–32 transfer.
- Gunakan multipart upload untuk file di atas 100 MB.
- Pilih region S3 yang dekat dengan lokasi Anda untuk latensi lebih rendah.

### Backblaze B2

- Mendukung paralelisme tinggi — 16+ transfer bekerja dengan baik.
- Ukuran chunk tidak berlaku (B2 menggunakan API file besar miliknya sendiri).
- Tidak ada batasan transfer harian.

## Batch Jobs untuk Alur Kerja yang Dioptimalkan

Dengan Batch Jobs v1.3, rangkai urutan transfer yang dioptimalkan:

1. Transfer massal dengan pengaturan agresif.
2. Perbandingan verifikasi.
3. Notifikasi saat selesai.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Batch optimized transfer workflow" class="img-large img-center" />

## Checklist Cepat

- **Tingkatkan transfer paralel** — terutama untuk banyak file kecil.
- **Tingkatkan ukuran chunk** — terutama untuk file besar.
- **Periksa kecepatan internet Anda** — `speedtest-cli` untuk menetapkan baseline koneksi Anda.
- **Pantau rate limit** — perhatikan error 429/403 di log transfer.
- **Gunakan server-side copy** — saat mentransfer antar cloud yang kompatibel.
- **Jadwalkan transfer besar** — di luar jam sibuk untuk menghindari dampak pada jaringan Anda.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Sesuaikan pengaturan transfer Anda** di konfigurasi job.
3. **Pantau kecepatan** secara real time.
4. **Sesuaikan dan iterasi** — perubahan kecil dapat meningkatkan throughput secara signifikan.

Pengaturan default sudah cukup untuk sebagian besar situasi. Namun, ketika Anda memindahkan data dalam skala terabyte, optimasi akan segera memberikan hasil.

---

**Panduan Terkait:**

- [Atur Batas Bandwidth](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [Membuat Job Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Penjadwalan Job](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
