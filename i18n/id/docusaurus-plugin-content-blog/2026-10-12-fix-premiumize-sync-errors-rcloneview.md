---
slug: fix-premiumize-sync-errors-rcloneview
title: "Perbaiki Error Sinkronisasi premiumize.me — Masalah Otorisasi dan Transfer Teratasi dengan RcloneView"
authors:
  - casey
description: "Atasi error sinkronisasi premiumize.me seperti otorisasi kedaluwarsa, transfer gagal, dan file hilang menggunakan log, riwayat job, dan Folder Compare di RcloneView."
keywords:
  - perbaiki error sinkronisasi premiumize.me
  - error premiumize rclone
  - otorisasi premiumize gagal
  - transfer premiumize gagal
  - pemecahan masalah premiumize
  - RcloneView premiumize
  - pemecahan masalah sinkronisasi cloud
  - premiumize GUI
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Sinkronisasi premiumize.me — Masalah Otorisasi dan Transfer Teratasi dengan RcloneView

> Saat job premiumize.me gagal, riwayat job, log DEBUG, dan Folder Compare di RcloneView menunjukkan apakah penyebabnya adalah login, beban transfer, atau file yang tidak pernah sampai.

Job premiumize.me yang berhenti lebih awal, atau meninggalkan folder yang baru separuh tersalin, sulit didiagnosis hanya dari command line. RcloneView menyatukan pemeriksaan remote, catatan job, log, dan perbandingan berdampingan dalam satu jendela, sehingga Anda dapat memperbaiki penyebab sebenarnya alih-alih menjalankan ulang secara membabi buta. RcloneView melakukan mount DAN sinkronisasi 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Otorisasi Ulang Remote

premiumize.me terhubung melalui OAuth di browser. Jika job gagal dalam hitungan detik, login adalah tersangka pertama. Buka Remote Manager dari tab Remote, edit remote premiumize.me, lalu masuk kembali melalui prompt browser.

Kemudian buka remote di panel Explorer dan telusuri folder root. Jika daftarnya tampil normal, koneksi sehat dan kegagalan ada pada transfer itu sendiri.

<img src="/support/images/en/blog/new-remote.png" alt="Otorisasi ulang remote premiumize.me di RcloneView" class="img-large img-center" />

## Baca Riwayat Job dan Aktifkan Log DEBUG

Buka Job History dan periksa status, durasi, serta jumlah file dari proses yang gagal. Job yang error di tengah jalan biasanya menunjuk pada file tertentu atau beban, bukan kredensial.

Untuk pesan persis per file, buka Settings > Embedded Rclone, aktifkan logging rclone, atur level ke DEBUG, lalu klik Restart Embedded Rclone. Reproduksi kegagalan, lalu baca tab Log atau file log di folder yang Anda konfigurasikan.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Riwayat job RcloneView menampilkan job premiumize.me yang error" class="img-large img-center" />

## Kurangi Beban dan Pratinjau Proses Ulang

Kegagalan yang sporadis sering mereda dengan lebih sedikit transfer bersamaan. Di Langkah 2 wizard sinkronisasi, turunkan jumlah transfer file dan atur equality checkers ke 4 atau kurang. Pertahankan "Retry entire sync if fails" di angka 3 agar error sementara dicoba ulang.

Sebelum menjalankan ulang, gunakan Dry Run untuk melihat file mana yang akan disalin atau dihapus, sehingga percobaan ulang tidak menimbulkan kejutan.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menjalankan ulang job premiumize.me dengan konkurensi lebih rendah" class="img-large img-center" />

## Konfirmasi dengan Folder Compare

Setelah dijalankan ulang, buka Compare dengan folder lokal di satu sisi dan premiumize.me di sisi lain. Filter file yang hanya ada di kiri, hanya di kanan, dan yang berbeda, lalu salin hanya yang masih hilang alih-alih mengulang seluruh job.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare menampilkan file yang hilang di premiumize.me" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Otorisasi ulang remote premiumize.me dan pastikan folder root tampil.
3. Periksa Job History dan aktifkan logging DEBUG untuk job yang gagal.
4. Turunkan konkurensi, jalankan Dry Run, jalankan ulang, dan verifikasi dengan Folder Compare.

Dengan penyebab yang terlihat di log dan perbandingan, kegagalan premiumize.me menjadi perbaikan yang singkat dan dapat diulang.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Cloud premiumize.me dengan RcloneView](https://rcloneview.com/support/blog/manage-premiumize-me-cloud-sync-backup-rcloneview)
- [Sinkronkan Unduhan Cloud premiumize.me dengan RcloneView](https://rcloneview.com/support/blog/sync-premiumize-cloud-downloads-rcloneview)
- [Perbaiki Error Sinkronisasi put.io dengan RcloneView](https://rcloneview.com/support/blog/fix-put-io-sync-errors-rcloneview)

<CloudSupportGrid />
