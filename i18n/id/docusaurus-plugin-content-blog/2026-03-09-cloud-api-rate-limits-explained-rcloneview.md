---
slug: cloud-api-rate-limits-explained-rcloneview
title: "Batas Rate API Cloud Dijelaskan — Mengapa Transfer Anda Gagal dan Cara Memperbaikinya"
authors:
  - tayson
description: "Error 403 Google Drive? OneDrive throttling? Pelajari apa itu batas rate API cloud, mengapa hal ini menghentikan transfer Anda, dan cara mengonfigurasi RcloneView untuk menghindarinya."
keywords:
  - cloud api rate limit
  - google drive 403 error
  - onedrive throttling
  - s3 rate limit
  - cloud transfer failed
  - api rate limit exceeded
  - cloud sync error fix
  - google drive quota exceeded
  - dropbox rate limit
  - cloud storage api limits
tags:
  - troubleshooting
  - api
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Batas Rate API Cloud Dijelaskan — Mengapa Transfer Anda Gagal dan Cara Memperbaikinya

> Sinkronisasi cloud Anda dimulai dengan lancar, lalu tiba-tiba melambat drastis. Pesan error muncul: "Rate limit exceeded," "403 Forbidden," "Too many requests." Transfer Anda macet di 60%. Apa yang terjadi?

Setiap penyedia penyimpanan cloud membatasi seberapa cepat Anda dapat berinteraksi dengan API mereka. Batas rate ini melindungi infrastruktur mereka dari penyalahgunaan, tetapi juga memengaruhi pengguna sah yang memindahkan data dalam jumlah besar. Memahami batas ini — dan mengonfigurasi alat Anda agar mematuhinya — adalah perbedaan antara transfer yang selesai dengan andal dan transfer yang gagal di tengah jalan.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Apa Itu Batas Rate API?

Saat Anda mengunggah, mengunduh, menampilkan daftar, atau memodifikasi file di penyimpanan cloud, alat Anda membuat panggilan API. Setiap operasi adalah satu atau beberapa permintaan API. Batas rate membatasi berapa banyak permintaan yang dapat Anda buat dalam periode waktu tertentu.

### Jenis-jenis batas

- **Permintaan per detik** — Berapa banyak panggilan API per detik (misalnya, S3: 3.500 permintaan PUT/detik per prefix).
- **Permintaan per hari** — Total panggilan API harian (misalnya, Google Drive: ~10 miliar query/hari untuk aplikasi, tetapi jauh lebih rendah per pengguna).
- **Bandwidth per hari** — Total volume data (misalnya, Google Drive: ~750 GB unggah/hari).
- **Koneksi bersamaan** — Berapa banyak koneksi simultan yang diizinkan.
- **Batas burst** — Lonjakan jangka pendek yang diizinkan sebelum throttling diberlakukan.

## Batas Rate Berdasarkan Penyedia

### Google Drive

| Batas | Nilai |
|-------|-------|
| Unggah per hari | ~750 GB |
| Unduh per hari | ~10 TB |
| Query API per 100 detik | 1.000 per pengguna |
| Operasi file per detik | ~10 |
| Kode error | 403 (userRateLimitExceeded), 429 |

Google Drive adalah salah satu penyedia dengan pembatasan rate paling ketat. Jika Anda melihat `403` atau `userRateLimitExceeded`, Anda sedang menabrak batas tersebut.

### OneDrive / SharePoint

| Batas | Nilai |
|-------|-------|
| Panggilan API | Throttling dinamis |
| Unggahan bersamaan | ~4 direkomendasikan |
| Kode error | 429 (Too Many Requests), 503 |

Microsoft menggunakan throttling dinamis — batas semakin ketat seiring bertambahnya penggunaan Anda dalam satu sesi.

### AWS S3

| Batas | Nilai |
|-------|-------|
| PUT/COPY/POST/DELETE | 3.500 per detik per prefix |
| GET/HEAD | 5.500 per detik per prefix |
| Tidak ada batas bandwidth harian | Tanpa batas |
| Kode error | 503 (Slow Down) |

S3 adalah yang paling longgar. Sebagian besar pengguna tidak pernah menabrak batas rate kecuali melakukan ribuan operasi file kecil.

### Dropbox

| Batas | Nilai |
|-------|-------|
| Panggilan API | ~300 per menit untuk aplikasi |
| Unggah per sesi | Throttling progresif |
| Kode error | 429 |

### Backblaze B2

| Batas | Nilai |
|-------|-------|
| Panggilan API | Tergantung paket |
| Unggahan bersamaan | Tidak ada batas keras |
| Bandwidth | Bayar sesuai pemakaian, tanpa batas |

B2 sangat permisif — batas rate jarang menjadi masalah.

## Bagaimana RcloneView Menangani Batas Rate

### Percobaan ulang otomatis

Ketika rclone menerima error batas rate (429, 403, 503), secara otomatis rclone akan:

1. Menjeda transfer yang terpengaruh.
2. Menunggu selama waktu yang ditentukan oleh server (atau menggunakan exponential backoff).
3. Mencoba ulang operasi tersebut.

Anda akan melihat ini di log transfer sebagai "rate limited, waiting X seconds."

### Transfer paralel yang dapat dikonfigurasi

Kurangi transfer paralel untuk menurunkan tingkat permintaan API Anda:

| Penyedia | Transfer Paralel yang Direkomendasikan |
|----------|-------------------------------|
| Google Drive | 3–4 |
| OneDrive | 4 |
| Dropbox | 3–4 |
| S3 | 8–32 |
| B2 | 8–16 |

### Pembatasan bandwidth

Gunakan [batas bandwidth](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview) untuk mengontrol laju data dan secara tidak langsung mengurangi panggilan API.

### Coba Ulang Transfer Gagal di v1.3

Jika transfer tetap gagal meski penanganan batas rate sudah berjalan, fitur coba ulang di v1.3 dapat menjalankan ulang file yang gagal setelah tugas selesai.

## Strategi untuk Menghindari Batas Rate

### 1) Transfer di luar jam sibuk

Jadwalkan transfer besar untuk malam hari dan akhir pekan saat pengguna lain (dan aplikasi Anda sendiri) tidak sedang membuat panggilan API:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule transfers during off-hours" class="img-large img-center" />

### 2) Sebar ke beberapa hari

Untuk migrasi yang melebihi batas unggah harian 750 GB Google Drive:

- Hari 1: Transfer folder A (500 GB).
- Hari 2: Transfer folder B (500 GB).
- Hari 3: Transfer folder C + verifikasi semuanya.

### 3) Gunakan kredensial API Anda sendiri

Google Drive dan beberapa penyedia lain mengizinkan batas rate yang lebih tinggi jika Anda menggunakan kredensial aplikasi OAuth Anda sendiri, bukan yang dibagikan. Konfigurasikan proyek API Google Anda sendiri untuk kuota yang lebih tinggi.

### 4) Kurangi pemeriksaan file

Untuk unggahan massal awal, lewati pemeriksaan tujuan. Ini menghilangkan setengah dari panggilan API Anda (yaitu yang memeriksa apakah setiap file sudah ada).

### 5) Gabungkan file-file kecil

Jika Anda memiliki ribuan file kecil, pertimbangkan untuk mengarsipkannya ke dalam ZIP sebelum mentransfer. Satu ZIP 1 GB hanya membutuhkan 1 panggilan API, dibandingkan 10.000 unggahan file individual yang membutuhkan 10.000 panggilan.

## Pantau Masalah Batas Rate

Perhatikan progres transfer Anda untuk tanda-tanda throttling:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor for rate limit errors" class="img-large img-center" />

Tanda peringatan:

- Kecepatan transfer tiba-tiba turun setelah awalnya berjalan cepat.
- Jeda berkala dalam transfer.
- Pesan error di log dengan kode 429 atau 403.
- Kecepatan transfer berosilasi (cepat → lambat → cepat).

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Atur transfer paralel yang sesuai** untuk penyedia cloud Anda.
3. **Jadwalkan transfer besar** di luar jam sibuk.
4. **Pantau progres** dan perhatikan indikator throttling.
5. **Gunakan fitur coba ulang** (v1.3) untuk keandalan.

Batas rate tidak akan hilang — tetapi dengan pengaturan yang tepat, Anda dapat bekerja dalam batasan tersebut secara andal.

---

**Panduan Terkait:**

- [Memperbaiki Error Batas Rate 403 Google Drive](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)
- [Mengatur Batas Bandwidth](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [Penjadwalan Tugas](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
