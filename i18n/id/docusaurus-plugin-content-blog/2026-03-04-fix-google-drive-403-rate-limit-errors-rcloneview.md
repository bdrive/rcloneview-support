---
slug: fix-google-drive-403-rate-limit-errors-rcloneview
title: "Mengatasi Error 403 dan Rate Limit Google Drive: Panduan Praktis dengan RcloneView"
authors:
  - tayson
description: "Mengalami error 403 Forbidden atau rate limit di Google Drive? Pelajari mengapa hal ini terjadi dan cara mengonfigurasi pengaturan transfer RcloneView untuk menghindarinya secara permanen."
keywords:
  - google drive 403 error
  - google drive rate limit
  - google drive api limit
  - fix google drive sync error
  - google drive forbidden error
  - rclone google drive 403
  - google drive transfer limit
  - google drive api quota exceeded
  - google drive too many requests
  - fix rclone google drive error
tags:
  - RcloneView
  - google-drive
  - troubleshooting
  - cloud-storage
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengatasi Error 403 dan Rate Limit Google Drive: Panduan Praktis dengan RcloneView

> "Error 403: Rate Limit Exceeded." Jika Anda pernah melihat pesan ini saat melakukan sinkronisasi Google Drive, Anda tidak sendirian. Berikut alasan mengapa hal ini terjadi dan cara mengatasinya secara permanen.

Google Drive menerapkan batasan rate limit API yang ketat yang dapat mengganggu transfer besar, tugas sinkronisasi otomatis, bahkan penelusuran file dasar. Ketika Anda mencapai batas ini, Anda akan mendapatkan error 403 Forbidden yang menghentikan transfer Anda dan memaksa percobaan ulang. RcloneView memberikan Anda alat untuk mengonfigurasi pengaturan transfer secara cerdas sehingga Anda tetap berada dalam batas Google sambil tetap memindahkan data secepat mungkin.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Google Drive Mengembalikan Error 403

Google Drive memberlakukan beberapa jenis batasan:

- **Batas rate per pengguna** — Terlalu banyak permintaan API per detik dari satu akun.
- **Kuota per proyek** — Terlalu banyak permintaan dari OAuth client ID yang sama.
- **Batas unggah harian** — ~750 GB per hari per akun untuk unggahan.
- **Batas unduh harian** — ~10 TB per hari (bervariasi).
- **Batas operasi file** — Membuat, mengganti nama, atau menghapus terlalu banyak file terlalu cepat.

Ketika salah satu batasan ini terlampaui, Google akan mengembalikan error `403 rateLimitExceeded` atau `403 userRateLimitExceeded`.

## Penyebab Umum

1. **Terlalu banyak transfer paralel** — Menjalankan 8+ unggahan/unduhan simultan membebani API secara berlebihan.
2. **Daftar direktori yang besar** — Menelusuri folder dengan ribuan file menghasilkan banyak panggilan API.
3. **Operasi file kecil yang sering** — Melakukan sinkronisasi ribuan file kecil menghasilkan lebih banyak panggilan API dibandingkan beberapa file besar.
4. **Beberapa alat mengakses akun yang sama** — Klien sinkronisasi desktop + RcloneView + aplikasi lain = tekanan rate yang bertambah.

## Cara Mengatasinya di RcloneView

### 1) Kurangi Transfer Paralel

Perbaikan yang paling berdampak. Dalam pengaturan job Anda:

- **Rekomendasi**: 3–4 transfer paralel untuk Google Drive
- **Minimum aman**: 2 untuk batasan rate yang sangat ketat
- **Default (8)**: Terlalu agresif untuk sebagian besar akun Google

### 2) Aktifkan Pacer / Rate Limiting

RcloneView (melalui rclone) memiliki pacer bawaan yang secara otomatis mengurangi kecepatan saat rate limit tercapai. Pastikan fitur ini berfungsi dengan mempertahankan pengaturan percobaan ulang default:

- **Low-level retries**: 10 (default)
- **Retry delay**: Exponential backoff

### 3) Gunakan Google API Client ID Milik Anda Sendiri

Client ID OAuth default rclone digunakan bersama oleh ribuan pengguna, artinya Anda bersaing untuk kuota yang sama. Membuat proyek Google Cloud dan client ID Anda sendiri memberikan Anda kuota khusus:

1. Buka [Google Cloud Console](https://console.cloud.google.com).
2. Buat sebuah proyek dan aktifkan Google Drive API.
3. Buat kredensial OAuth.
4. Masukkan Client ID dan Secret Anda saat menambahkan remote Google Drive di RcloneView.

Perubahan tunggal ini seringkali menghilangkan error 403 sepenuhnya.

### 4) Gunakan --fast-list dengan Hati-hati

`--fast-list` mengurangi jumlah panggilan API untuk daftar direktori tetapi menggunakan lebih banyak memori. Untuk Google Drive berukuran besar, ini justru dapat membantu menghindari rate limit dengan menggabungkan operasi daftar.

### 5) Jadwalkan Transfer Besar di Luar Jam Sibuk

Rate limit Google akan direset seiring waktu. Menjadwalkan transfer besar selama jam-jam sepi mengurangi kemungkinan mencapai batasan:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Google Drive transfers off-peak" class="img-large img-center" />

## Pengaturan yang Direkomendasikan untuk Google Drive

| Pengaturan | Nilai yang Direkomendasikan | Alasan |
|---------|-------------------|-----|
| Transfer paralel | 3–4 | Tetap berada dalam batas rate API |
| Checkers | 4–8 | Mengurangi panggilan API untuk daftar |
| Ukuran chunk | 8–32 MB | Menyeimbangkan kecepatan dengan panggilan API |
| Drive pacer min sleep | 100ms | Jeda minimum antar panggilan API |
| Low-level retries | 10 | Percobaan ulang yang cukup untuk rate limit sementara |

## Pantau dan Sesuaikan

Gunakan [Job History](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history) untuk melacak tingkat error di berbagai run:

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Track Google Drive error rates" class="img-large img-center" />

Jika error masih berlanjut, kurangi transfer paralel sebanyak 1 dan coba lagi. Jika error hilang, Anda dapat menaikkannya secara hati-hati.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Google Drive transfer with rate limit awareness" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan Google Drive** dengan OAuth Client ID Anda sendiri jika memungkinkan.
3. **Konfigurasikan pengaturan transfer yang konservatif** (3–4 transfer paralel).
4. **Jalankan dan pantau** — sesuaikan berdasarkan tingkat error.
5. **Jadwalkan transfer besar** untuk jam-jam sepi.

Error 403 bukan berarti Google Drive rusak. Ini berarti Anda perlu pengaturan transfer yang lebih cerdas. RcloneView memberikan Anda kontrol untuk menemukan titik yang tepat.

---

**Panduan Terkait:**

- [Mengatasi Error API Rate Limit Kuota Google Drive](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [Menambahkan Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [Pemantauan Transfer Real-time](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Penjadwalan Job](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
