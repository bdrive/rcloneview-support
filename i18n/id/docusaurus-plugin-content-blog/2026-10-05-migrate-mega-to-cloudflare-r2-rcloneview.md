---
slug: migrate-mega-to-cloudflare-r2-rcloneview
title: "Migrasi Mega ke Cloudflare R2 — Transfer File dengan RcloneView"
authors:
  - robin
description: "Migrasikan Mega ke Cloudflare R2 dengan RcloneView: hubungkan kedua remote, jalankan Dry Run, transfer dari cloud ke cloud, dan verifikasi dengan Folder Compare."
keywords:
  - migrasi Mega ke Cloudflare R2
  - transfer Mega ke R2
  - backup Mega ke R2
  - migrasi cloud ke cloud
  - penyimpanan objek Cloudflare R2
  - penyimpanan cloud Mega
  - RcloneView
  - rclone GUI
  - memindahkan file dari Mega
tags:
  - RcloneView
  - mega
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Mega ke Cloudflare R2 — Transfer File dengan RcloneView

> Pindahkan pustaka Mega ke bucket Cloudflare R2 dengan RcloneView, dengan pratinjau job sebelum dijalankan.

Mega cocok untuk penyimpanan pribadi, tetapi proyek yang membutuhkan akses berbasis bucket, API yang kompatibel dengan S3, atau pemisahan yang jelas antara penyimpanan dan berbagi sering berakhir di penyimpanan objek. RcloneView menghubungkan Mega dan Cloudflare R2 sebagai remote dan mentransfer di antara keduanya dalam satu job, dengan pratinjau, pemantauan, dan riwayat setiap proses.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan Mega dan Cloudflare R2

Buka New Remote dan pilih Mega. Mega menggunakan kredensial akun: email dan kata sandi Anda. Selanjutnya, buat remote R2. Di dasbor Cloudflare, buat bucket dan hasilkan token API dengan izin Admin Read & Write. RcloneView meminta kredensial token, Account ID Anda, dan endpoint yang berbentuk `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote Mega dan Cloudflare R2 di RcloneView" class="img-large img-center" />

RcloneView mendukung 90+ layanan penyimpanan cloud di Windows, macOS, dan Linux, dan kedua remote tampil berdampingan di Explorer setelah disimpan.

## Pratinjau Sebelum Transfer

Buka dua panel Explorer, dengan Mega di kiri dan bucket R2 Anda di kanan. Seret folder ke seberang untuk salinan cepat, karena menyeret di antara remote yang berbeda akan menyalin, bukan memindahkan. Untuk seluruh pustaka, gunakan wizard sinkronisasi: pilih folder Mega sebagai sumber dan bucket sebagai tujuan, lalu jalankan Dry Run untuk melihat file mana yang akan disalin atau dihapus.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Pengaturan job transfer dari Mega ke Cloudflare R2" class="img-large img-center" />

Bayangkan seorang editor video dengan arsip proyek 800 GB di Mega. Pada Step 2 Anda dapat menambah jumlah transfer file untuk banyak file kecil, dan mengaktifkan perbandingan checksum jika ingin pemeriksaan hash dan ukuran. Filter pada Step 3 dapat mengecualikan folder atau membatasi ukuran file.

## Pantau dan Verifikasi

Setelah job dimulai, tab Transferring menampilkan progres, kecepatan, dan jumlah file, dan Anda dapat membatalkan proses jika perlu. Perhatikan error, dan jalankan ulang job jika sesi berhenti lebih awal. Job History menyimpan status, durasi, ukuran, dan jumlah file.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Memantau transfer Mega ke R2 di RcloneView" class="img-large img-center" />

Setelah selesai, buka Folder Compare dengan Mega di satu sisi dan R2 di sisi lain. File Left-only menunjukkan apa pun yang belum ada di bucket, dan Anda dapat menyalinnya langsung dari tampilan perbandingan.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare antara Mega dan Cloudflare R2" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Mega dengan email dan kata sandi Anda, serta Cloudflare R2 dengan token API, Account ID, dan endpoint Anda.
3. Buat job sinkronisasi dari Mega ke bucket R2 dan jalankan Dry Run.
4. Mulai transfer, lalu konfirmasi hasilnya dengan Folder Compare.

Migrasi dengan pratinjau dan pemeriksaan akhir Folder Compare memungkinkan Anda memastikan apa yang telah sampai di R2.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Mega — Sinkronkan dan Backup File dengan RcloneView](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [Kelola Cloudflare R2 — Sinkronisasi dan Backup dengan RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Dry Run — Pratinjau Sinkronisasi Sebelum Transfer di RcloneView](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
