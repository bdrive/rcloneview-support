---
slug: set-bandwidth-limits-cloud-transfers-rcloneview
title: "Cara Mengatur Batas Bandwidth untuk Transfer Cloud di RcloneView"
authors:
  - tayson
description: "Kendalikan berapa banyak bandwidth yang digunakan oleh job sinkronisasi dan pencadangan cloud — cegah perlambatan jaringan di jam kerja dan maksimalkan kecepatan di malam hari dengan pengaturan throttling RcloneView."
keywords:
  - rclone bandwidth limit
  - cloud transfer speed limit
  - throttle cloud sync
  - rcloneview bandwidth control
  - limit upload speed rclone
  - cloud backup bandwidth
  - rclone bwlimit
  - network throttle cloud sync
  - control cloud transfer speed
  - rcloneview transfer settings
tags:
  - RcloneView
  - cloud-storage
  - performance
  - tips
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cara Mengatur Batas Bandwidth untuk Transfer Cloud di RcloneView

> Menjalankan sinkronisasi cloud besar-besaran di jam kerja? Tim Anda pasti akan menyadarinya. Berikut cara membatasi bandwidth agar pencadangan tetap berjalan tanpa mematikan koneksi internet semua orang.

Job sinkronisasi dan pencadangan cloud dapat memenuhi koneksi jaringan Anda — memperlambat panggilan video, browsing web, dan pekerjaan penting lainnya. Ini terutama bermasalah di lingkungan kantor, kantor rumah dengan koneksi bersama, atau saat menyinkronkan data berukuran terabyte. RcloneView memungkinkan Anda mengatur batas bandwidth yang presisi sehingga transfer cloud berjalan di latar belakang tanpa mengganggu jaringan Anda.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Batas Bandwidth Penting

### Jaringan bersama

Di kantor dengan koneksi 100 Mbps, satu job sinkronisasi cloud tanpa batas dapat mengonsumsi 80+ Mbps — hampir tidak menyisakan apa pun untuk anggota tim lainnya.

### Kantor rumah

Panggilan video membutuhkan ~5–10 Mbps. Jika job pencadangan Anda mengambil semua bandwidth yang tersedia, panggilan Zoom Anda akan turun ke kualitas rendah.

### Kebijakan fair use ISP

Beberapa ISP membatasi atau mengenakan biaya tambahan untuk penggunaan bandwidth tinggi yang berkelanjutan. Membatasi transfer cloud mencegah tagihan tak terduga atau perlambatan.

### Batas rate penyedia cloud

Beberapa penyedia (terutama Google Drive) membatasi atau mengembalikan error saat transfer terlalu cepat. Pembatasan bandwidth menjaga Anda tetap dalam batas aman.

## Cara Mengatur Batas Bandwidth

### Metode 1: Batas bandwidth per job

Saat membuat atau mengedit job di RcloneView, tambahkan flag batas bandwidth di opsi rclone:

- **`--bwlimit 10M`** — Membatasi hingga 10 MB/s (megabyte per detik)
- **`--bwlimit 50M`** — Membatasi hingga 50 MB/s
- **`--bwlimit 1M`** — Membatasi hingga 1 MB/s (bagus untuk sinkronisasi trickle di latar belakang)

### Metode 2: Penjadwalan bandwidth berbasis waktu

rclone mendukung batas bandwidth berbasis waktu — gunakan kecepatan berbeda pada waktu yang berbeda dalam sehari:

```
--bwlimit "08:00,5M 18:00,50M 23:00,off"
```

Artinya:
- **8 pagi – 6 sore**: Dibatasi hingga 5 MB/s (jam kerja, dampak minimal)
- **6 sore – 11 malam**: Dibatasi hingga 50 MB/s (malam hari, lebih banyak tersedia)
- **11 malam – 8 pagi**: Tanpa batas (dini hari, kecepatan penuh)

Ini adalah titik ideal bagi kebanyakan pengguna — transfer berjalan 24/7 tetapi hanya berjalan kecepatan penuh saat jaringan sedang idle.

### Metode 3: Batas unggah vs unduh

Atur batas berbeda untuk unggah dan unduh:

```
--bwlimit "10M:5M"
```

Ini membatasi unggah hingga 10 MB/s dan unduh hingga 5 MB/s. Berguna saat ISP Anda memiliki kecepatan asimetris (umum pada koneksi kabel dan DSL).

## Contoh Praktis

### Kantor rumah dengan koneksi 100 Mbps

```
--bwlimit "09:00,2M 17:00,off"
```
- Selama jam kerja: 2 MB/s (nyaris tidak terasa bersamaan dengan panggilan video)
- Setelah jam kerja: Tanpa batas

### Kantor kecil dengan koneksi bersama 50 Mbps

```
--bwlimit "08:00,3M 18:00,25M 22:00,off"
```
- Jam kerja: 3 MB/s (menyisakan 47 Mbps untuk staf)
- Malam hari: 25 MB/s (setengah kapasitas)
- Dini hari: Kecepatan penuh

### Migrasi besar selama akhir pekan

```
--bwlimit off
```
- Tanpa batas — maksimalkan kecepatan transfer selama jendela pemeliharaan.

## Menggabungkan dengan Penjadwalan Job

Pendekatan paling ampuh: jadwalkan **job berat di malam hari tanpa batas bandwidth** dan **job ringan di siang hari dengan batas ketat**.

1. Buat dua versi dari job sinkronisasi Anda:
   - **Job siang hari**: `--bwlimit 5M` — berjalan siang untuk sinkronisasi inkremental cepat
   - **Job malam hari**: tanpa batas bandwidth — berjalan pukul 2 pagi untuk transfer berat
2. Jadwalkan keduanya dengan [Penjadwalan Job](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule transfers with different bandwidth limits" class="img-large img-center" />

## Memantau Kecepatan Aktual

Gunakan pemantauan transfer real-time untuk memverifikasi bahwa batas bandwidth Anda bekerja:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer speed with bandwidth limits" class="img-large img-center" />

Tampilan kecepatan transfer harus menunjukkan nilai pada atau di bawah batas yang Anda konfigurasikan. Jika Anda melihat kecepatan lebih rendah dari batas Anda, hambatannya ada di tempat lain (jaringan, API penyedia, kecepatan disk).

## Referensi Cepat

| Skenario | Pengaturan | Efek |
|----------|---------|--------|
| Sinkronisasi ringan di latar belakang | `--bwlimit 2M` | Nyaris tidak terasa |
| Transfer sedang | `--bwlimit 10M` | Terlihat tetapi masih terkendali |
| Hanya jam kerja | `--bwlimit "09:00,5M 17:00,off"` | Dibatasi selama jam kerja |
| Unggah intensif | `--bwlimit "20M:5M"` | 20M unggah, 5M unduh |
| Tanpa batas | `--bwlimit off` atau dihilangkan | Kecepatan maksimum |

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan remote Anda** dan buat job sinkronisasi/salin.
3. **Tambahkan `--bwlimit`** ke flag rclone job tersebut.
4. **Uji dan pantau** untuk menemukan keseimbangan yang tepat.
5. **Gabungkan dengan penjadwalan** untuk hasil terbaik dari keduanya.

Transfer cepat itu bagus. Tapi transfer yang tidak merusak panggilan video tim Anda jauh lebih baik.

---

**Panduan Terkait:**

- [Mempercepat Transfer Cloud Besar](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)
- [Membuat Job Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Penjadwalan Job](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Pemantauan Transfer Real-time](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Mengatasi Error Batas Rate Google Drive](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)

<CloudSupportGrid />
