---
slug: fix-yandex-disk-sync-errors-rcloneview
title: "Perbaiki Error Sinkronisasi Yandex Disk — Diagnosis dan Atasi Transfer yang Gagal dengan RcloneView"
authors:
  - kai
description: "Perbaiki error sinkronisasi Yandex Disk dengan RcloneView: otorisasi ulang OAuth, atur checkers dan percobaan ulang, baca log DEBUG, dan verifikasi hasil dengan Dry Run dan Folder Compare."
keywords:
  - perbaiki error sinkronisasi Yandex Disk
  - transfer Yandex Disk gagal
  - otorisasi ulang OAuth Yandex Disk
  - pemecahan masalah RcloneView Yandex Disk
  - sinkronisasi Yandex Disk tidak berfungsi
  - error rclone Yandex
  - pemecahan masalah sinkronisasi cloud
  - log debug rclone
  - pencadangan Yandex Disk gagal
  - job Yandex Disk error
tags:
  - RcloneView
  - yandex-disk
  - troubleshooting
  - tips
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Sinkronisasi Yandex Disk — Diagnosis dan Atasi Transfer yang Gagal dengan RcloneView

> Cara bertahap untuk mengetahui mengapa job Yandex Disk error dan memperbaikinya tanpa menyalin ulang semuanya.

Job Yandex Disk yang berakhir sebagai "Errored" di Job History memang menjengkelkan, terutama jika dijalankan semalaman. Sebagian besar kegagalan masuk ke beberapa kelompok: login kedaluwarsa, paralelisme terlalu tinggi untuk backend yang lambat, atau kesalahan path dan filter. RcloneView menyediakan pengaturan dan log yang diperlukan untuk membedakannya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mulai dari Job History dan Tab Log

Buka **Job History** dan temukan eksekusi yang gagal. Status, waktu yang dihabiskan, ukuran total, dan jumlah file menunjukkan apakah job gagal seketika (kemungkinan autentikasi atau path) atau di tengah jalan (kemungkinan throttling atau file tertentu). Lalu periksa tab **Log** di Info View bagian bawah untuk melihat entri berstempel waktu di sekitar kegagalan.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History menampilkan eksekusi yang error di RcloneView" class="img-large img-center" />

Jika log terlalu sedikit, buka Settings > Embedded Rclone, aktifkan rclone Logging, setel level ke DEBUG, klik Restart Embedded Rclone, lalu ulangi masalahnya. File yang dihasilkan menunjukkan dengan tepat operasi mana yang gagal.

## Otorisasi Ulang Login yang Kedaluwarsa atau Ditolak

Yandex Disk terhubung melalui OAuth di browser. Jika menampilkan daftar folder langsung gagal, atau setiap file error dengan pesan otorisasi, buka Remote Manager, edit remote Yandex Disk, dan selesaikan lagi proses masuk di browser. Lalu segarkan panel Explorer. Daftar yang berhasil tampil mengonfirmasi koneksi sebelum Anda menjalankan job apa pun.

<img src="/support/images/en/blog/new-remote.png" alt="Mengedit dan mengotorisasi ulang remote di RcloneView" class="img-large img-center" />

## Sesuaikan Pengaturan Job untuk Backend yang Lebih Lambat

Jika error hanya muncul pada job besar, kurangi bebannya. Di Advanced Settings wizard Sync, kurangi jumlah transfer file, dan jaga equality checkers tetap 4 atau kurang untuk backend yang lambat (default-nya 8). Default 3 kali percobaan ulang untuk seluruh sinkronisasi berguna untuk kegagalan sementara, jadi biarkan tetap aktif. Pertimbangkan mengaktifkan checksum saat Anda perlu memastikan isi file, bukan hanya ukurannya.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Pengaturan job lanjutan dan penjadwalan di RcloneView" class="img-large img-center" />

## Konfirmasi Perbaikan Tanpa Menyalin Ulang

Jalankan **Dry Run** untuk melihat apa yang masih akan ditransfer, lalu jalankan job lagi. Buka **Compare** untuk membandingkan Yandex Disk dengan sumber: file left-only atau different menunjukkan sisa yang belum beres, dan Anda bisa menyalin hanya file tersebut.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare digunakan untuk memastikan perbedaan yang tersisa" class="img-large img-center" />

## Mulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Periksa eksekusi yang gagal di Job History dan tab Log.
3. Otorisasi ulang remote Yandex Disk jika daftar gagal ditampilkan.
4. Kurangi transfer dan checkers, lakukan Dry Run, lalu jalankan ulang dan Compare.

Diagnosis yang sistematis mengubah status "Errored" yang samar menjadi daftar singkat yang bisa diperbaiki.

---

**Panduan Terkait:**

- [Perbaiki Error Kuota Penuh Yandex Disk](https://rcloneview.com/support/blog/fix-yandex-disk-quota-full-errors-rcloneview)
- [Kelola Sinkronisasi dan Pencadangan Cloud Yandex Disk](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [Sinkronkan Yandex Disk ke Google Drive dan S3](https://rcloneview.com/support/blog/sync-yandex-disk-google-drive-s3-rcloneview)

<CloudSupportGrid />
