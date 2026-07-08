---
slug: recover-interrupted-failed-transfers-rcloneview
title: "Cara Memulihkan Transfer Cloud yang Terputus atau Gagal dengan RcloneView"
authors:
  - tayson
description: "Lanjutkan transfer cloud yang terputus, pulihkan dari unggahan sebagian, dan perbaiki tugas sinkronisasi yang gagal di RcloneView. Teknik praktis untuk transfer file besar yang tidak selesai."
keywords:
  - resume interrupted cloud transfer rclone
  - recover failed file transfer rcloneview
  - rclone resume partial upload
  - interrupted cloud sync recovery
  - rcloneview transfer failed
  - rclone retry failed transfers
  - cloud upload resume after disconnect
  - partial cloud transfer recovery
  - rclone resume large file upload
  - fix interrupted sync rcloneview
tags:
  - RcloneView
  - cloud-storage
  - troubleshooting
  - tips
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cara Memulihkan Transfer Cloud yang Terputus atau Gagal dengan RcloneView

> Koneksi jaringan yang terputus, timeout API, laptop yang sleep, dan pemadaman listrik dapat mengganggu transfer cloud. RcloneView dan rclone memiliki mekanisme bawaan untuk melanjutkan transfer dengan aman tanpa perlu mengunggah ulang semuanya dari awal.

Mentransfer terabyte data ke cloud bukanlah operasi lima menit. Selama tugas yang berjalan lama, gangguan konektivitas hampir tidak dapat dihindari. Kabar baiknya, mesin transfer cerdas rclone — yang digunakan RcloneView di balik layar — dirancang khusus untuk skenario ini. Operasi Copy dan Sync bersifat idempoten: menjalankannya ulang akan melewati file yang sudah ditransfer dan melanjutkan dari titik terakhir yang terputus.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Bagaimana Rclone Menangani Transfer yang Terputus

Rclone membandingkan sumber dan tujuan sebelum mentransfer setiap file. Saat Anda menjalankan ulang tugas Copy atau Sync setelah terjadi gangguan:

- **File yang sudah ditransfer** akan dilewati (berdasarkan ukuran+waktu modifikasi, atau checksum jika diaktifkan).
- **File yang ditransfer sebagian** akan dibersihkan dan ditransfer ulang dari awal.
- **File yang belum dimulai** akan dimasukkan ke antrean dan ditransfer pada proses lanjutan.

Ini berarti dalam sebagian besar kasus tidak ada tombol "resume" khusus — cukup jalankan ulang tugas yang sama.

## Langkah 1 — Jalankan Ulang Tugas yang Sama

Setelah terjadi gangguan, buka **Jobs** di RcloneView dan klik **Run** pada tugas yang sama lagi:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Re-run a failed transfer job in RcloneView" class="img-large img-center" />

RcloneView akan:
1. Membuat daftar sumber dan tujuan.
2. Membandingkan file yang sudah ada di tujuan.
3. Melewati file yang berhasil ditransfer.
4. Mentransfer hanya file yang hilang atau dimodifikasi.

Untuk tugas dengan 10.000 file di mana 8.000 berhasil, menjalankan ulang hanya memerlukan sebagian kecil dari waktu awal.

## Langkah 2 — Periksa Job History untuk File yang Gagal

Sebelum menjalankan ulang, tinjau **Job History** di RcloneView untuk memahami apa yang gagal:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Review failed files in RcloneView job history" class="img-large img-center" />

Log menampilkan:
- File spesifik mana yang gagal
- Pesan error untuk setiap kegagalan
- Apakah kegagalan bersifat sementara (error jaringan) atau persisten (izin, path terlalu panjang)

Error persisten memerlukan perbaikan sebelum dijalankan ulang — error sementara akan teratasi saat dicoba kembali.

## Langkah 3 — Menangani File Besar yang Diunggah Sebagian

Untuk file yang sangat besar (multi-GB), gangguan di tengah unggahan meninggalkan file sebagian di tujuan. Perilaku rclone bergantung pada penyedia:

| Penyedia | Perilaku File Sebagian |
|----------|-----------------------|
| Amazon S3 / kompatibel S3 | Unggahan multipart: bagian yang belum selesai menjadi orphan, rclone mencoba ulang dari awal |
| Google Drive | Unggahan resumable: rclone dapat melanjutkan dari tengah file jika sesi masih valid |
| OneDrive | Unggahan resumable: mirip dengan Google Drive |
| Backblaze B2 | Bagian file besar: unggahan yang belum selesai terlihat di konsol B2 |

**Untuk unggahan multipart S3 yang orphan:** Ini akan menumpuk dan memakan biaya. Bersihkan menggunakan:
- RcloneView Terminal: `rclone cleanup s3-remote:bucket-name`
- Atau melalui konsol AWS di S3 → Your Bucket → Multipart uploads

## Langkah 4 — Gunakan `--retries` dan `--low-level-retries`

Untuk tugas yang gagal karena error sementara, konfigurasikan tugas RcloneView agar mencoba ulang secara otomatis:

Tambahkan ini ke kolom **Custom flags**:
```
--retries 5 --retries-sleep 10s --low-level-retries 20
```

- `--retries 5` — coba ulang seluruh tugas hingga 5 kali jika terjadi error
- `--retries-sleep 10s` — tunggu 10 detik di antara percobaan ulang
- `--low-level-retries 20` — coba ulang operasi tingkat rendah individual (panggilan API) hingga 20 kali

## Langkah 5 — Menangani Ketidakcocokan Checksum

Setelah transfer yang terputus, menjalankan ulang dengan verifikasi checksum memastikan integritas data:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify transfer integrity with folder comparison" class="img-large img-center" />

Di RcloneView, aktifkan **Checksum verification** pada pengaturan tugas. Ini memaksa rclone untuk membandingkan konten file (bukan hanya ukuran/mtime) — lebih lambat, tetapi menjamin bahwa file yang ditulis sebagian akan terdeteksi dan ditransfer ulang.

## Langkah 6 — Pulihkan dari Sync yang Menghapus File

Jika tugas Sync berjalan ke arah yang salah — menyalin tujuan ke sumber alih-alih sebaliknya — Anda perlu memulihkan dari fitur versioning penyedia cloud:

- **Google Drive**: Pulihkan dari Trash atau riwayat versi (tersedia selama 30–180 hari).
- **OneDrive**: Pulihkan dari Recycle Bin atau riwayat versi.
- **S3 dengan versioning**: Pulihkan dari versi sebelumnya di konsol S3.
- **Backblaze B2**: Pulihkan dari riwayat versi jika diaktifkan.

Inilah sebabnya menggunakan mode **Copy** (non-destruktif) untuk transfer besar awal sangat direkomendasikan dibandingkan Sync.

## Pencegahan: Konfigurasikan Transfer untuk Ketahanan

Bangun ketahanan ke dalam tugas transfer Anda sejak awal:

| Pengaturan | Rekomendasi |
|---------|----------------|
| Mode tugas | Gunakan **Copy** untuk migrasi awal; Sync untuk pemeliharaan berkelanjutan |
| Retries | Atur `--retries 5 --retries-sleep 10s` |
| Checksum | Aktifkan untuk data penting |
| Transfers | Turunkan jumlah konkuren untuk koneksi yang tidak stabil |
| Jadwal | Jalankan pada periode jaringan yang stabil (malam hari, di luar VPN) |
| Bandwidth | Atur batas untuk mencegah timeout akibat saturasi jaringan |

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Periksa Job History** untuk mengidentifikasi apa yang gagal dan mengapa.
3. **Jalankan ulang tugas** — rclone secara otomatis melewati file yang sudah selesai.
4. **Konfigurasikan retries dan verifikasi checksum** untuk ketahanan di masa depan.

Sebagian besar transfer yang terputus hanya memerlukan klik Run lagi. Rclone melakukan sisanya.

---

**Panduan Terkait:**

- [Hindari Kehilangan Data dari Arah Sync yang Salah](https://rcloneview.com/support/blog/avoid-data-loss-wrong-sync-direction-rcloneview)
- [Migrasi Cloud Terverifikasi Checksum](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [Percepat Transfer Cloud Berukuran Besar](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)

<CloudSupportGrid />
