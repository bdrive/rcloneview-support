---
slug: migrate-onedrive-to-backblaze-b2-rcloneview
title: "Migrasikan OneDrive ke Backblaze B2 untuk Pencadangan Cloud yang Terjangkau dengan RcloneView"
authors:
  - tayson
description: "Kurangi biaya penyimpanan dengan memigrasikan file OneDrive ke Backblaze B2 menggunakan RcloneView. Panduan langkah demi langkah untuk memindahkan data pribadi atau bisnis ke penyimpanan S3-compatible yang lebih murah."
keywords:
  - migrate onedrive to backblaze b2
  - onedrive to b2 migration
  - rcloneview onedrive backblaze
  - move onedrive to backblaze b2
  - rclone onedrive backblaze b2
  - onedrive cheaper storage alternative
  - backblaze b2 from onedrive
  - cloud storage cost reduction
  - onedrive backup to b2
  - transfer onedrive backblaze
tags:
  - RcloneView
  - onedrive
  - backblaze-b2
  - cloud-migration
  - migration
  - backup
  - cost-optimization
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasikan OneDrive ke Backblaze B2 untuk Pencadangan Cloud yang Terjangkau dengan RcloneView

> Biaya penyimpanan OneDrive bisa membengkak — terutama untuk tim atau individu dengan banyak data arsip berukuran terabyte. Backblaze B2 menawarkan penyimpanan object storage yang S3-compatible dengan harga jauh lebih murah. RcloneView membuat proses migrasi menjadi mudah.

OneDrive memang praktis untuk kolaborasi aktif, tetapi bukan pilihan paling hemat biaya untuk arsip jangka panjang, pencadangan dingin (cold backup), atau koleksi media berukuran besar. Dengan harga sekitar $0,006/GB per bulan, Backblaze B2 jauh lebih murah dibandingkan paket per-pengguna OneDrive untuk data yang jarang diakses. Memindahkan data arsip dari OneDrive ke Backblaze B2 — sambil tetap menyimpan file kerja aktif di OneDrive — adalah strategi optimasi biaya yang cerdas, dan RcloneView dapat melakukannya tanpa memerlukan keahlian command-line sama sekali.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Kapan Migrasi Ini Masuk Akal?

- Anda melebihi kuota penyimpanan Microsoft 365 dan ingin menghindari upgrade paket.
- Anda memiliki arsip media berukuran besar (foto, video, file proyek) yang tersimpan di OneDrive tetapi jarang diakses.
- Anda ingin mengganti OneDrive dengan Backblaze B2 sebagai tujuan pencadangan utama.
- Anda menginginkan penyimpanan S3-compatible dengan dukungan native rclone dan tanpa biaya egress ke region lain.

## Perbandingan Biaya: OneDrive vs Backblaze B2

| Penyimpanan | 1 TB/bulan | 5 TB/bulan |
|---------|-----------|-----------|
| OneDrive (Microsoft 365) | ~$9,99/pengguna | ~$50+ (per batas pengguna) |
| Backblaze B2 | ~$6,00 | ~$30,00 |

Bagi pengguna dengan banyak arsip, Backblaze B2 dapat memangkas tagihan penyimpanan Anda hingga 40–60%.

## Langkah 1 — Hubungkan OneDrive di RcloneView

<img src="/support/images/en/blog/new-remote.png" alt="Connect OneDrive in RcloneView" class="img-large img-center" />

1. Buka RcloneView dan klik **New Remote**.
2. Pilih **Microsoft OneDrive**.
3. Klik **Authorize** — sebuah jendela browser akan terbuka untuk OAuth Microsoft.
4. Masuk (login) dan berikan akses.
5. Pilih jenis OneDrive Anda (Personal, Business, atau SharePoint) dan simpan remote dengan nama `onedrive`.

## Langkah 2 — Hubungkan Backblaze B2 di RcloneView

1. Masuk ke [Backblaze dashboard](https://www.backblaze.com) dan buka **App Keys**.
2. Buat application key baru dengan akses **Read and Write** ke bucket target Anda.
3. Catat **keyID** dan **applicationKey**.
4. Di RcloneView, tambahkan remote baru bertipe **Backblaze B2**.
5. Masukkan keyID dan applicationKey, beri nama `b2`, lalu simpan.

## Langkah 3 — Buat Bucket Target

Di Backblaze B2, buat bucket tujuan sebelum memulai migrasi:

- **Nama bucket**: pilih nama yang unik (misalnya, `onedrive-archive-2026`)
- **Jenis bucket**: Private (untuk pencadangan pribadi) atau Public (untuk distribusi media)
- **Versioning**: Opsional — memungkinkan pemulihan file yang tertimpa (overwritten)

## Langkah 4 — Jalankan Migrasi

Buka **Jobs** di RcloneView dan konfigurasikan:

| Pengaturan | Nilai |
|---------|-------|
| Source | `onedrive:/Archives/` (atau folder mana pun yang Anda migrasikan) |
| Destination | `b2:onedrive-archive-2026/` |
| Mode | **Copy** (mempertahankan salinan OneDrive sampai diverifikasi) |
| Transfers | 4–8 secara bersamaan (sesuaikan dengan bandwidth Anda) |
| Checksum | Diaktifkan |

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Transfer OneDrive to Backblaze B2 in progress" class="img-large img-center" />

Klik **Run**. RcloneView menampilkan progres per file, kecepatan transfer, dan estimasi waktu penyelesaian.

## Langkah 5 — Verifikasi Migrasi dengan Folder Comparison

Setelah job selesai, gunakan **Folder Comparison** di RcloneView untuk memverifikasi bahwa setiap file OneDrive telah berhasil dipindahkan ke B2:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify OneDrive to B2 migration" class="img-large img-center" />

Setiap perbedaan akan ditandai secara otomatis. Jalankan kembali job tersebut — rclone akan melewati file yang sudah ada dan hanya mentransfer ulang file yang hilang.

## Langkah 6 — Jadwalkan Pencadangan Berkelanjutan (Opsional)

Jika Anda ingin menjadikan B2 sebagai pencadangan langsung (live backup) dari OneDrive ke depannya:

1. Ubah mode job menjadi **Sync**, bukan Copy.
2. Buka **Schedule** dan atur interval berulang (misalnya, setiap malam pukul 2 pagi).
3. File OneDrive yang baru atau berubah akan dicadangkan ke B2 secara otomatis.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive to B2 backup" class="img-large img-center" />

## Tips untuk Migrasi OneDrive Berskala Besar

- **Migrasikan folder demi folder** — pecah akun besar menjadi bagian-bagian berukuran 100–500 GB.
- **Hindari jam sibuk** — Microsoft membatasi (throttle) akses API OneDrive saat beban tinggi.
- **Gunakan batas bandwidth** — atur batas di RcloneView agar tidak mengganggu pekerjaan harian selama jam kerja.
- **Jaga OneDrive tetap aktif** — jangan hapus file dari OneDrive sampai B2 telah diverifikasi.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan remote OneDrive dan Backblaze B2** melalui wizard pengaturan RcloneView.
3. **Buat bucket B2 Anda** di Backblaze dashboard.
4. **Salin, verifikasi, lalu putuskan** apakah akan mempertahankan OneDrive sebagai penyimpanan aktif atau beralih sepenuhnya ke B2.

Lebih sedikit ketergantungan pada Microsoft, biaya lebih rendah, dan kompatibilitas S3 — Backblaze B2 adalah tempat pendaratan yang cerdas untuk arsip OneDrive Anda.

---

**Panduan Terkait:**

- [Pencadangan Dropbox ke Backblaze B2](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [Migrasikan Google Drive ke OneDrive](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [Biaya Penyimpanan Cloud Tersembunyi — Hemat Uang dengan RcloneView](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)

<CloudSupportGrid />
