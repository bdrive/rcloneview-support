---
slug: manage-netease-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan Netease — Sinkronisasi dan Cadangkan File dengan RcloneView"
authors:
  - morgan
description: "Hubungkan penyimpanan objek yang kompatibel dengan S3 dari Netease ke RcloneView untuk penelusuran lintas platform, transfer seret-dan-lepas, dan tugas pencadangan terjadwal."
keywords:
  - penyimpanan objek Netease
  - kelola penyimpanan cloud Netease
  - GUI penyimpanan kompatibel S3
  - RcloneView Netease
  - sinkronisasi penyimpanan objek Netease
  - cadangkan penyimpanan kompatibel S3
  - penyimpanan Netease NOS
  - pengelola file penyimpanan objek
  - klien GUI multi-cloud
  - pengaturan kunci akses endpoint S3
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan Netease — Sinkronisasi dan Cadangkan File dengan RcloneView

> Telusuri, transfer, dan cadangkan penyimpanan objek yang kompatibel dengan S3 dari Netease di jendela yang sama yang sudah Anda gunakan untuk setiap cloud lainnya, tanpa alur kerja CLI terpisah.

Tim yang menyediakan penyimpanan melalui layanan objek kompatibel S3 dari Netease sering kali mengelolanya secara terpisah dari sisa ekosistem cloud mereka, karena sebagian besar pengelola file desktop hanya memahami drive konsumen umum. RcloneView memperlakukan Netease seperti remote kompatibel S3 lainnya — explorer yang sama, tugas sinkronisasi yang sama, perbandingan folder yang sama — sehingga bucket Netease berdampingan dengan Google Drive, Dropbox, atau disk lokal dalam satu antarmuka. RcloneView memasang (mount) dan menyinkronkan 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Penyimpanan Objek Netease

Menambahkan Netease ke RcloneView mengikuti alur remote kompatibel S3 standar: buat remote baru, pilih jenis protokol S3, lalu masukkan Access Key ID, Secret Access Key, dan URL endpoint Netease untuk wilayah bucket Anda. Setelah disimpan, remote muncul sebagai tab tersendiri di Explorer, dan setiap folder di dalamnya dapat ditelusuri dengan cara yang sama seperti drive lokal — tidak perlu tab konsol atau sesi CLI terpisah untuk memeriksa apa yang sebenarnya ada di dalam bucket.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote kompatibel S3 baru untuk penyimpanan objek Netease di RcloneView" class="img-large img-center" />

Karena RcloneView menyimpan konfigurasi setiap remote secara independen, Anda dapat mendaftarkan beberapa bucket Netease — atau bucket yang sama dengan cakupan akses berbeda — secara berdampingan, lalu beralih di antaranya hanya dengan satu klik, alih-alih melakukan autentikasi ulang di terminal setiap kali.

## Memindahkan Data Antara Netease dan Cloud Lainnya

Setelah Netease terhubung, seret-dan-lepas antar panel menangani transfer lintas remote secara otomatis: menyeret file dari Netease ke panel remote lain memicu penyalinan, sedangkan menyeret dalam bucket Netease yang sama akan memindahkan file. Ini membuat migrasi ad-hoc — misalnya mencerminkan sebagian objek dari Netease ke Backblaze B2 untuk redundansi — cukup dengan membuka dua panel alih-alih menulis perintah rclone satu kali pakai.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer cloud-ke-cloud antara penyimpanan objek Netease dan remote lain di RcloneView" class="img-large img-center" />

Untuk transfer yang berulang, wizard Sinkronisasi 4 langkah memungkinkan Anda menetapkan Netease sebagai sumber atau tujuan, menerapkan filter ukuran atau usia file, dan menjalankan dry run terlebih dahulu untuk melihat pratinjau persis apa yang akan disalin atau dihapus sebelum sesuatu benar-benar berpindah.

## Menjadwalkan Pencadangan Berulang

Untuk perlindungan berkelanjutan alih-alih transfer satu kali, tugas Sinkronisasi yang mengarah ke Netease dapat berjalan pada jadwal berulang (lisensi PLUS) menggunakan bidang gaya crontab untuk menit, jam, hari, dan bulan. Riwayat Tugas kemudian mencatat setiap proses yang berjalan — waktu mulai, durasi, kecepatan transfer, dan jumlah file — sehingga Anda memiliki jejak audit konkret tentang apa yang berpindah dan kapan, tanpa harus menggali file log mentah.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Menjadwalkan tugas pencadangan berulang ke penyimpanan objek Netease di RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buat remote baru, pilih jenis kompatibel S3, dan masukkan Access Key, Secret Key, dan endpoint Netease Anda.
3. Buka remote Netease di panel Explorer dan pastikan bucket serta objek Anda dimuat dengan benar.
4. Siapkan tugas Sinkronisasi untuk mencerminkan bucket ke remote lain atau disk lokal, jalankan dry run terlebih dahulu.

Setelah Netease diatur sebagai remote, perilakunya sama seperti penyedia penyimpanan lain di RcloneView — satu sistem lebih sedikit yang perlu dikelola secara terpisah dari sisa tumpukan cloud Anda.

---

**Panduan Terkait:**

- [Kelola Penyimpanan China Mobile — Sinkronisasi dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-china-mobile-cloud-sync-backup-rcloneview)
- [Kelola Penyimpanan Cloud Alibaba OSS — Sinkronisasi dan Cadangkan dengan RcloneView](https://rcloneview.com/support/blog/manage-alibaba-oss-cloud-sync-backup-rcloneview)
- [Kelola Penyimpanan Cloud Huawei OBS — Sinkronisasi dan Cadangkan dengan RcloneView](https://rcloneview.com/support/blog/manage-huawei-obs-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
