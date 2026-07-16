---
slug: migrate-google-drive-to-backblaze-b2-rcloneview
title: "Migrasi Google Drive ke Backblaze B2 — Transfer File dengan RcloneView"
authors:
  - tayson
description: "Migrasikan Google Drive ke Backblaze B2 dengan RcloneView — transfer file cloud-ke-cloud, arsipkan data secara hemat biaya, dan verifikasi migrasi dengan GUI."
keywords:
  - Google Drive to Backblaze B2
  - migrate Google Drive
  - Backblaze B2 backup
  - cloud migration tool
  - Google Drive export
  - RcloneView migration
  - cloud-to-cloud transfer
  - S3 archive Google Drive
  - Google Drive archiving
  - Backblaze cold storage
tags:
  - google-drive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Google Drive ke Backblaze B2 — Transfer File dengan RcloneView

> Google Drive dirancang untuk kolaborasi, bukan pengarsipan dingin — RcloneView memindahkan konten Drive Anda langsung ke Backblaze B2 tanpa menyentuh disk lokal, sehingga menghemat biaya penyimpanan dalam skala besar.

Google Drive unggul dalam kolaborasi real-time, tetapi tidak dirancang untuk pengarsipan jangka panjang yang hemat biaya dalam skala besar. Backblaze B2 menawarkan penyimpanan objek yang kompatibel dengan S3 dengan biaya jauh lebih rendah dibandingkan penyimpanan Google, menjadikannya tujuan populer untuk mengarsipkan dataset besar, proyek video, dan catatan bisnis yang tidak memerlukan akses harian. RcloneView menangani migrasi langsung antara kedua cloud tersebut — tanpa memerlukan disk lokal sebagai perantara.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menyiapkan Kedua Remote

Di RcloneView, tambahkan Google Drive terlebih dahulu — **Remote tab > New Remote > Google Drive** — lalu autentikasi melalui OAuth browser. Kemudian tambahkan Backblaze B2: pilih dari daftar provider dan masukkan Application Key ID serta Application Key Anda. Kedua remote akan langsung aktif.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

Buka kedua remote secara berdampingan di dual-panel explorer RcloneView. Tampilan langsung ini sangat berguna untuk merencanakan migrasi: verifikasi apa yang ada di folder Drive Anda di sisi kiri, konfirmasi struktur bucket B2 target di sisi kanan, dan identifikasi folder mana yang perlu diprioritaskan sebelum memulai transfer.

## Mengonfigurasi Job Migrasi

Buka **Job Manager** dan buat job sync atau copy baru. Atur source ke folder Google Drive Anda (atau subfolder tertentu untuk migrasi bertahap) dan destination ke path bucket Backblaze B2 Anda.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring Google Drive to Backblaze B2 migration job in RcloneView" class="img-large img-center" />

Untuk migrasi berskala besar — misalnya perusahaan produksi video yang memindahkan 2 TB proyek yang sudah selesai dari Drive ke B2 — aktifkan transfer multi-thread dan tingkatkan jumlah file konkuren di Advanced Settings job tersebut. Fitur **Dry Run** menunjukkan dengan tepat file mana yang akan ditransfer sebelum job sebenarnya dijalankan, sehingga mencegah penimpaan yang tidak disengaja atau konten yang terlewat. Mengaktifkan verifikasi checksum memastikan setiap file tiba dengan utuh di B2, yang sangat penting untuk pengarsipan di mana file mungkin tidak diakses selama bertahun-tahun.

## Verifikasi dan Pembersihan Setelah Migrasi

Setelah transfer selesai, gunakan **Folder Compare** RcloneView untuk membandingkan sumber Google Drive dengan tujuan B2. Tampilan perbandingan menyorot file yang hanya ada di kiri (belum dimigrasikan), file yang hanya ada di kanan (sudah ada di B2), dan file yang sama — memberi Anda checklist visual yang jelas sebelum menghapus apa pun dari Drive.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Google Drive and Backblaze B2 after migration in RcloneView" class="img-large img-center" />

Menjalankan job migrasi untuk kedua kalinya setelah perbandingan adalah aman — rclone akan melewati file yang sudah ada di destination dengan ukuran dan timestamp yang cocok, sehingga hanya perbedaan yang tersisa yang akan ditransfer. Perilaku idempoten ini membuat migrasi berskala besar tetap andal bahkan di beberapa sesi.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote Google Drive (autentikasi OAuth browser) dan remote Backblaze B2 (kredensial Application Key).
3. Buka **Job Manager** dan buat job sync atau copy dari Google Drive ke B2.
4. Aktifkan Dry Run untuk melihat pratinjau, lalu jalankan — gunakan Folder Compare untuk memverifikasi penyelesaiannya.

Migrasi ke Backblaze B2 dengan RcloneView menghilangkan kerumitan cloud egress dan memberi Anda arsip yang terverifikasi dan hemat biaya tanpa perlu menulis satu pun perintah CLI.

---

**Panduan Terkait:**

- [Migrasi Backblaze B2 ke Google Drive dengan RcloneView](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-google-drive-rcloneview)
- [Kelola Penyimpanan Cloud Backblaze B2 — Sinkronisasi dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Pencadangan Dropbox ke Backblaze B2 — Penyimpanan Terjangkau dengan RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />
