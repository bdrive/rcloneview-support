---
slug: optimize-rcloneview-mount-s3-r2-performance
title: "Optimalkan Performa Mount RcloneView untuk S3 dan Cloudflare R2"
authors:
  - tayson
description: Sesuaikan mount RcloneView untuk Amazon S3 dan Cloudflare R2 dengan mode cache, ukuran chunk, dan konkurensi yang tepat agar media server dan pekerjaan analitik tetap cepat dan stabil.
keywords:
  - rcloneview
  - rclone mount
  - s3 mount performance
  - cloudflare r2 mount
  - vfs cache
  - rclone tuning
  - multi-thread streams
  - s3 chunk size
tags:
  - RcloneView
  - mount
  - cloudflare-r2
  - aws-s3
  - performance
unlisted: true
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Optimalkan Performa Mount RcloneView untuk S3 dan Cloudflare R2

> Dapatkan pemutaran yang lebih lancar dan pembacaan yang lebih cepat dengan menyesuaikan pengaturan mount RcloneView untuk penyimpanan yang kompatibel dengan S3, tanpa mengedit satu pun flag CLI.

Melakukan mount bucket S3 atau Cloudflare R2 ke workstation, NAS, atau media server Anda membuka akses instan, tetapi pengaturan default dapat menghambat throughput. Dengan beberapa penyesuaian tertarget di RcloneView, Anda dapat mengurangi latensi, mengurangi buffering, dan menjaga biaya tetap dapat diprediksi di AWS maupun R2.

<!-- truncate -->

**Kata kunci utama:** *rclone mount*, *performa mount S3*, *Cloudflare R2*, *VFS cache*, *multi-thread streams*.

---

## Mengapa penyesuaian mount itu penting

- Streaming tanpa jeda: media server dan alat BI membutuhkan read-ahead dan caching yang konsisten untuk menghindari buffering.  
- Melindungi API dari overload: konkurensi yang terkontrol mencegah throttling 429/503 pada endpoint yang kompatibel dengan S3.  
- Menghemat egress dan pembacaan ulang: caching yang lebih cerdas mengurangi GET duplikat dan lalu lintas jaringan.  
- Menjaga penulisan tetap aman: mode cache yang benar menghindari kerusakan database atau upload yang terputus saat koneksi terputus.

---

## Prasyarat dan pemeriksaan cepat

1. Penempatan dan latensi: pilih region AWS yang paling dekat dengan pengguna Anda; untuk R2, pilih lokasi Cloudflare terdekat untuk meminimalkan RTT.  
2. Jalur jaringan: pastikan aturan VPN/firewall mengizinkan lalu lintas HTTPS (443) yang berkelanjutan tanpa throttling IDS yang agresif.  
3. Kredensial di RcloneView: tambahkan remote untuk Amazon S3 dan Cloudflare R2 (endpoint kompatibel S3 seperti `https://<account>.r2.cloudflarestorage.com`).  
   - Butuh penyegaran? Lihat [Cara menambahkan remote S3](/howto/remote-storage-connection-settings/s3) dan [Cara mendapatkan kredensial API Cloudflare R2](/howto/cloud-storage-setting/cloudflare-r2-credential).  
4. Pahami beban kerja: streaming media membutuhkan read-ahead; analitik membutuhkan pembacaan paralel; target pencadangan mungkin memerlukan write caching yang lebih aman.

---

## Langkah 1 - Buat mount di RcloneView

1. Buka **RcloneView** -> **Mounts** -> **New Mount**.  
2. Pilih remote Anda (S3 atau R2) dan path mount lokal.  
3. Aktifkan **Auto-start on launch** jika Anda menjalankan layanan (Plex/Jellyfin, alat BI) saat reboot.  
4. Simpan, lalu jalankan mount sekali untuk memastikan mount tersebut muncul di file explorer OS Anda.

> Tip: Untuk R2, atur endpoint yang benar di Advanced Settings agar latensi regional tetap rendah.

---

## Langkah 2 - Tetapkan mode VFS cache yang tepat

| Kasus penggunaan | `--vfs-cache-mode` yang direkomendasikan | Alasan |
| --- | --- | --- |
| Pemutaran media / dashboard BI | `writes` | Melakukan buffer download dan penulisan sementara; lebih aman untuk pembaruan sebagian |
| Editing foto/video | `full` | Memastikan pembacaan/penulisan acak mengenai cache lokal sebelum diunggah |
| Penjelajahan baca-saja sederhana | `off` (default) | Overhead paling rendah ketika Anda jarang mengubah file |

Pengaturan cache tambahan di modal mount:

- Ukuran maksimum cache: mulai dengan 10-50 GB di SSD; naikkan jika Anda melakukan streaming pustaka besar.  
- `--vfs-read-ahead`: atur 32M-128M agar pemutar melakukan pre-buffer tanpa jeda.  
- `--buffer-size`: 8M-32M per file menjaga jendela TCP tetap penuh pada koneksi berlatensi tinggi.  
- `--dir-cache-time`: 5m-30m untuk mengurangi panggilan LIST pada bucket yang dalam; padukan dengan `--poll-interval` (misalnya, 30s) agar pembaruan tetap tersebar.

---

## Langkah 3 - Buka throughput dengan penyesuaian konkurensi dan multipart

Bahkan untuk mount, rclone tetap menghormati flag penyesuaian backend:

- `--multi-thread-streams`: meningkatkan pembacaan file tunggal pada jalur berlatensi tinggi (coba 4-8).  
- `--transfers`: mengatur upload konkuren dari cache; mulai di 4-8 untuk menghindari throttling penyedia.  
- Ukuran chunk S3: atur `--s3-chunk-size 64M` (128M untuk 1Gbps+) untuk mengurangi round trip pada file besar.  
- Konkurensi upload S3: `--s3-upload-concurrency 4` adalah baseline yang aman; naikkan jika CPU dan jaringan memungkinkan.  
- Checksum: pertahankan `--s3-disable-checksum=false` untuk integritas kecuali Anda mengoptimalkan murni untuk kecepatan pada data yang tidak kritis.  
- Multipart R2: gunakan `--chunk-size 64M` dan `--upload-cutoff 64M` untuk memaksa upload multipart pada aset yang lebih besar.

Perhatikan rate limit; jika Anda melihat respons 429/503, kurangi transfers sebesar 25% dan tambahkan `--retries-sleep 10s`.

---

## Langkah 4 - Jaga mount tetap stabil selama sesi panjang

- Retry dan backoff: atur `--retries 10` dan `--low-level-retries 20`; padukan dengan `--retries-sleep 5s`.  
- Keamanan timeout: untuk Wi-Fi yang tidak stabil, tambahkan `--contimeout 15s` dan `--timeout 5m` agar pembacaan panjang tetap bertahan.  
- Keamanan penulisan: pada beban kerja editing bersama, aktifkan `--immutable` hanya untuk arsip yang tidak boleh pernah berubah.  
- Logging: aktifkan log verbose di mount RcloneView; pantau log tersebut saat menyesuaikan konkurensi untuk mendeteksi throttling.  
- Pemeriksaan kesehatan: jadwalkan pekerjaan `--size-only` atau `--checksum` setiap malam antara S3 dan R2 untuk verifikasi integritas.

---

## Langkah 5 - Profil untuk skenario umum

### Streaming media dari R2/S3 ke Plex atau Jellyfin
- `--vfs-cache-mode writes`  
- `--vfs-read-ahead 96M`, `--buffer-size 16M`  
- `--multi-thread-streams 6`  
- Batasi `--transfers 4` agar R2/S3 tetap nyaman; aktifkan `--bwlimit 80M` selama jam sibuk.

### Dashboard BI atau notebook data science pada parquet/CSV yang di-mount
- `--vfs-cache-mode full` untuk pembacaan acak  
- `--multi-thread-streams 8`, `--transfers 6`  
- `--s3-chunk-size 128M` yang lebih besar dan `--s3-upload-concurrency 6` untuk penulisan spill yang cepat dari cache.

### Target drop pencadangan (NAS ke S3/R2)
- `--vfs-cache-mode writes`, `--dir-cache-time 30m`  
- `--transfers 4` yang konservatif, `--checkers 8`  
- Aktifkan enkripsi sisi server jika kebijakan bucket Anda mengharuskannya; pertahankan checksum tetap aktif.

---

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Daftar periksa pemecahan masalah

1. Penjelajahan folder besar terasa lambat? Tambahkan `--fast-list` jika penyedia Anda mengizinkannya dan perpanjang `--dir-cache-time`.  
2. Buffering masih terjadi? Naikkan `--vfs-read-ahead` dan pastikan ruang cache SSD; pantau antrean disk OS.  
3. Error throttling? Turunkan `--transfers` dan `--multi-thread-streams`; tambahkan `--bwlimit` untuk jam kerja.  
4. Upload macet di 99%? Naikkan `--timeout`, pastikan ukuran chunk multipart memenuhi minimum penyedia (5 MB untuk S3, 5-50 MB untuk R2).  
5. Aplikasi melihat metadata yang basi? Kurangi `--poll-interval` dan restart mount untuk menyegarkan dir cache.

---

## FAQ

**T. Apakah saya perlu mount berbeda untuk S3 dan R2?**  
**J.** Buat mount terpisah untuk setiap remote; Anda dapat menjaga keduanya tetap aktif dan drag/drop di antara keduanya di dalam RcloneView.

**T. Apakah ukuran cache memengaruhi biaya?**  
**J.** Ya - cache yang lebih besar menurunkan GET berulang, yang dapat mengurangi biaya egress dan request, terutama pada model per-request R2.

**T. Bisakah saya menggabungkan beban kerja baca-saja dan baca/tulis?**  
**J.** Gunakan dua mount: satu baca-saja (`--read-only`) untuk pemutaran media, satu lagi baca/tulis untuk editor sehingga izin dan caching tetap dapat diprediksi.

**T. Bagaimana cara saya memantau performa dari waktu ke waktu?**  
**J.** Ekspor log mount dan Job History setiap minggu, beri tag pada konfigurasi (misalnya, `[MountTest] R2 64M/6threads`), dan simpan runbook singkat berisi pengaturan yang berhasil untuk tim Anda.

---

Mount terasa seperti lokal ketika disesuaikan dengan baik. Dengan kontrol GUI RcloneView untuk cache, konkurensi, dan logging, Anda dapat menjaga S3 dan R2 tetap berperforma seperti penyimpanan on-prem - tanpa perlu shell script.

<CloudSupportGrid />
