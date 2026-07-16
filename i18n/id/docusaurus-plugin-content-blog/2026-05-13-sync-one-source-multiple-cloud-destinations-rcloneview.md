---
slug: sync-one-source-multiple-cloud-destinations-rcloneview
title: "Sinkronisasi 1:N — Cadangkan Satu Sumber ke Banyak Tujuan Cloud dengan RcloneView"
authors:
  - kai
description: "Gunakan sinkronisasi 1:N milik RcloneView untuk mencadangkan satu folder sumber ke banyak tujuan cloud secara bersamaan. Lindungi file Anda dengan pencadangan multi-cloud yang redundan."
keywords:
  - 1 to N sync RcloneView
  - multiple cloud backup destinations
  - sync one source multiple clouds
  - redundant cloud backup RcloneView
  - multi-cloud sync backup
  - backup multiple cloud providers
  - RcloneView multiple destinations
  - parallel cloud backup
  - one source multiple backups RcloneView
  - automated multi-destination sync
tags:
  - RcloneView
  - backup
  - cloud-sync
  - multi-cloud
  - feature
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi 1:N — Cadangkan Satu Sumber ke Banyak Tujuan Cloud dengan RcloneView

> Satu tugas sinkronisasi, banyak tujuan — RcloneView mencerminkan satu sumber ke sebanyak apa pun penyedia cloud yang Anda butuhkan dalam satu kali jalan.

Sebagian besar strategi pencadangan gagal dalam hal redundansi: file hanya menuju satu tujuan, sehingga menciptakan satu titik kegagalan tunggal. Sinkronisasi 1:N milik RcloneView memungkinkan Anda mencadangkan satu folder sumber ke banyak tujuan cloud dalam satu tugas — sehingga data Anda tersimpan di Google Drive, Backblaze B2, dan penyedia yang kompatibel dengan S3 secara bersamaan, tanpa perlu menjalankan tugas terpisah untuk masing-masing. Fitur ini tersedia dengan lisensi FREE dan berfungsi pada kombinasi remote cloud apa pun yang telah Anda konfigurasikan.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cara Kerja Sinkronisasi 1:N di RcloneView

Saat Anda membuat tugas sinkronisasi di Job Manager RcloneView, Langkah 1 dari wizard 4 langkah memungkinkan Anda menambahkan beberapa folder tujuan. Setelah memilih sumber dan tujuan pertama, klik **Add Destination** untuk menambahkan target lainnya. Setiap tujuan disinkronkan secara independen namun digerakkan oleh sumber yang sama — artinya sumber dibaca satu kali dan penulisan dilakukan ke semua tujuan secara paralel. Ini berbeda secara signifikan dari menjalankan tugas terpisah: dengan eksekusi terpisah, jika sumber Anda berubah di antara eksekusi, setiap tujuan mungkin menangkap snapshot yang sedikit berbeda.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring 1:N sync with multiple destinations in RcloneView" class="img-large img-center" />

Pengaturan praktis untuk perusahaan media digital mungkin terlihat seperti ini: sumbernya adalah folder NAS produksi lokal berisi file video master; tujuan 1 adalah Google Drive untuk akses tim; tujuan 2 adalah Backblaze B2 untuk arsip jangka panjang; tujuan 3 adalah Wasabi untuk salinan cadangan tambahan di luar lokasi. Ketiga tujuan tersebut tetap tersinkronisasi dengan status sumber yang sama dari satu kali eksekusi tugas.

## Menyiapkan Tugas Sinkronisasi Multi-Tujuan

Buka **Job Manager** dari tab Home dan klik **Add Job** untuk membuat tugas Sync baru. Pada Langkah 1, pilih sumber Anda (remote atau folder lokal apa pun yang telah dikonfigurasikan). Setelah memilih folder tujuan pertama, klik **Add Destination** untuk menyisipkan target tambahan — masing-masing menunjuk ke remote dan path folder yang berbeda. Beri nama tugas yang deskriptif dan mencerminkan maksud multi-tujuan tersebut.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a 1:N sync job to multiple cloud destinations in RcloneView" class="img-large img-center" />

Pada Langkah 2, konfigurasikan pengaturan transfer yang digunakan bersama oleh semua tujuan: jumlah transfer bersamaan, pengaturan multi-thread, dan apakah akan mengaktifkan verifikasi checksum. Untuk tugas 1:N yang melakukan sinkronisasi ke penyedia cloud dengan batas laju (rate limit) yang berbeda-beda, pertahankan jumlah transfer bersamaan pada tingkat moderat — paralelisme yang agresif ke banyak tujuan secara bersamaan dapat memicu pembatasan (throttling) pada penyedia yang lebih ketat. Langkah 3 memungkinkan Anda menambahkan aturan filter yang berlaku secara seragam untuk semua tujuan, sehingga Anda tidak perlu menduplikasi logika pengecualian per target.

## Memverifikasi Tugas dengan Dry Run

Sebelum menjalankan sinkronisasi 1:N berskala besar, gunakan opsi **Dry Run** di Job Manager. Dry run menampilkan setiap operasi yang direncanakan — file yang akan disalin ke setiap tujuan — tanpa melakukan perubahan aktual apa pun. Untuk tugas yang melakukan sinkronisasi ke tiga penyedia, pratinjau tersebut mencantumkan operasi per tujuan, memberi Anda keyakinan bahwa path sudah benar dan cakupannya sesuai dengan yang Anda harapkan.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing 1:N sync job history in RcloneView" class="img-large img-center" />

Setelah eksekusi, tab **Job History** mencatat waktu mulai, durasi, total byte yang ditransfer, dan status akhir (Completed, Errored, Canceled) untuk setiap eksekusi tugas. Bagi tim dengan persyaratan kepatuhan terkait verifikasi pencadangan, log ini menyediakan jejak audit siap pakai tanpa memerlukan alat tambahan.

## Menjadwalkan Pencadangan Multi-Tujuan Otomatis

Dengan lisensi PLUS, Anda dapat melampirkan jadwal bergaya cron ke tugas 1:N Anda pada Langkah 4 sehingga tugas berjalan secara otomatis pada interval pilihan Anda. Tombol **Simulate schedule** menampilkan pratinjau waktu eksekusi mendatang sebelum Anda menyimpan. Setelah aktif, integrasi system tray RcloneView menjaga tugas tetap berjalan di latar belakang, dan notifikasi penyelesaian tugas mengonfirmasi bahwa semua tujuan telah menerima data terbaru.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling 1:N multi-destination backup in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan dua atau lebih remote cloud melalui **Remote** > **New Remote**.
3. Buat tugas **Sync** dan gunakan **Add Destination** pada Langkah 1 untuk menambahkan setiap penyedia dan folder target.
4. Jalankan **Dry Run** untuk memverifikasi cakupan, lalu simpan dengan jadwal untuk redundansi multi-cloud otomatis.

Dengan sinkronisasi 1:N, satu tugas RcloneView berubah menjadi strategi pencadangan multi-cloud yang lengkap — tanpa skrip tambahan, tanpa langkah tambahan.

---

**Panduan Terkait:**

- [Otomatiskan Pencadangan Cloud Harian dengan RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Strategi Pencadangan Multi-Cloud dengan RcloneView](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)
- [Ekspor dan Impor Tugas — Alur Kerja Portabel dengan RcloneView](https://rcloneview.com/support/blog/job-export-import-portable-workflow-rcloneview)

<CloudSupportGrid />
