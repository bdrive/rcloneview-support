---
slug: migrate-google-drive-to-onedrive-rcloneview
title: "Cara Migrasi dari Google Drive ke OneDrive — Panduan Transfer Lengkap dengan RcloneView"
authors:
  - tayson
description: "Pindah dari Google Workspace ke Microsoft 365? Pelajari cara memigrasikan semua file Google Drive Anda ke OneDrive tanpa kehilangan struktur folder menggunakan RcloneView."
keywords:
  - migrate google drive to onedrive
  - google drive to onedrive transfer
  - switch google workspace to microsoft 365
  - move files google drive onedrive
  - google to microsoft migration
  - cloud to cloud migration tool
  - google drive onedrive sync
  - transfer google drive files
  - google workspace to office 365
  - cloud migration without data loss
tags:
  - RcloneView
  - google-drive
  - onedrive
  - migration
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cara Migrasi dari Google Drive ke OneDrive — Panduan Transfer Lengkap dengan RcloneView

> Beralih dari Google Workspace ke Microsoft 365? Masalah terbesarnya bukan aplikasi barunya — melainkan memindahkan terabyte file dari Google Drive ke OneDrive tanpa kehilangan struktur folder, berbagi akses, atau kewarasan Anda.

Baik organisasi Anda sedang berganti suite produktivitas atau Anda hanya ingin menyimpan salinan Google Drive di OneDrive, proses migrasi bisa sangat merepotkan. Google Takeout mengekspor file ZIP yang menghilangkan struktur folder. Drag-and-drop manual memakan waktu sangat lama. RcloneView menanganinya dengan benar — transfer langsung cloud-ke-cloud yang mempertahankan folder Anda.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Tidak Menggunakan Google Takeout?

Google Takeout adalah alat ekspor resmi dari Google, tetapi memiliki keterbatasan signifikan untuk migrasi:

- **Diekspor sebagai ZIP** — Anda mendapatkan arsip terkompresi, bukan struktur folder yang langsung dapat digunakan.
- **Kehilangan organisasi** — Shared Drive dan hierarki folder bisa menjadi rata (flattened).
- **Tidak ada pembaruan bertahap** — Jika file berubah selama proses ekspor, Anda harus mulai dari awal lagi.
- **Unggah ulang manual** — Anda tetap perlu mengunggah semuanya ke OneDrive.

RcloneView mentransfer file langsung dari Google Drive ke OneDrive, mempertahankan struktur folder asli.

## Migrasi Langkah demi Langkah

### 1) Hubungkan Kedua Akun

Tambahkan Google Drive dan OneDrive sebagai remote di RcloneView:

<img src="/support/images/en/blog/new-remote.png" alt="Add Google Drive and OneDrive remotes" class="img-large img-center" />

### 2) Jelajahi dan Rencanakan

Buka kedua remote di explorer dua panel. Google Drive di sebelah kiri, OneDrive di sebelah kanan:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Google Drive and OneDrive side by side" class="img-large img-center" />

Tinjau struktur Google Drive Anda sebelum bermigrasi. Identifikasi:

- Folder mana saja yang akan dimigrasikan (mungkin tidak semuanya).
- Ukuran total (memengaruhi waktu transfer).
- Google Docs/Sheets/Slides (ini memerlukan konversi — lihat di bawah).

### 3) Menangani File Native Google

Google Docs, Sheets, dan Slides bukan file tradisional — file-file ini berbasis web. Saat ditransfer, rclone mengonversinya ke format Microsoft Office:

| Format Google | Dikonversi Menjadi |
|---------------|------------|
| Google Docs | .docx |
| Google Sheets | .xlsx |
| Google Slides | .pptx |
| Google Drawings | .png |

Konversi ini terjadi secara otomatis selama transfer.

### 4) Mulai Transfer

Buat job **Copy** dari Google Drive ke OneDrive:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run migration job" class="img-large img-center" />

Gunakan **Copy** (bukan Sync) untuk migrasi. Copy hanya menambahkan file ke tujuan — tidak pernah menghapus apa pun.

### 5) Pantau Kemajuan

Amati transfer secara real time:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Google Drive to OneDrive transfer" class="img-large img-center" />

### 6) Verifikasi dengan Perbandingan Folder

Setelah transfer selesai, bandingkan kedua sisi untuk memastikan tidak ada yang terlewat:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration completeness" class="img-large img-center" />

## Tips Migrasi

### Migrasi secara bertahap

Untuk drive berukuran besar (500 GB+), migrasikan folder demi folder alih-alih semuanya sekaligus:

1. Mulai dengan folder penting (Documents, Projects).
2. Pindahkan folder yang dibagikan (shared) berikutnya.
3. Arsip dan media terakhir.

Dengan cara ini, pengguna dapat langsung mulai bekerja di OneDrive dengan file-file terpenting mereka.

### Menangani batas kecepatan (rate limit)

Baik Google Drive maupun OneDrive memiliki batas kecepatan API. RcloneView secara otomatis menghormati batas ini, tetapi untuk migrasi dalam skala sangat besar:

- Gunakan [pembatasan bandwidth](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview) untuk menghindari batas tersebut.
- Jadwalkan transfer di luar jam sibuk.
- Biarkan transfer yang gagal dicoba ulang secara otomatis (fitur v1.3).

### Jalankan pembaruan bertahap (incremental)

Setelah migrasi awal, jalankan kembali job Copy yang sama. Ini hanya mentransfer file baru atau yang berubah — melewati file yang sudah disalin. Ini menangkap file apa pun yang ditambahkan ke Google Drive selama proses migrasi.

## Setelah Migrasi: Menjaga Kedua Cloud Tetap Sinkron

Jika Anda perlu mengaktifkan kedua cloud selama periode transisi, siapkan sinkronisasi terjadwal:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule ongoing sync during transition" class="img-large img-center" />

Ini membuat OneDrive tetap diperbarui dengan perubahan apa pun di Google Drive hingga Anda sepenuhnya beralih.

## Masalah Umum

### "File name too long"

OneDrive memiliki batas path 400 karakter. Google Drive lebih longgar. Jika Anda mengalami ini, perpendek nama folder yang bertingkat sangat dalam sebelum bermigrasi.

### File Shared Drive

Google Shared Drive (Team Drive) terpisah dari My Drive pribadi Anda. Tambahkan sebagai remote terpisah atau konfigurasikan rclone untuk menyertakan Shared Drive.

### File berukuran besar

OneDrive Business mendukung file hingga 250 GB. OneDrive Personal juga mendukung hingga 250 GB. Verifikasi file terbesar Anda sebelum memulai.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan Google Drive dan OneDrive** sebagai remote.
3. **Jalankan job Copy** — struktur folder dipertahankan secara otomatis.
4. **Verifikasi dengan Perbandingan Folder** — pastikan tidak ada yang hilang.
5. **Jadwalkan pembaruan bertahap** hingga transisi selesai.

Jangan biarkan migrasi file menjadi hambatan dalam pergantian platform Anda.

---

**Panduan Terkait:**

- [Membuat Job Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Membandingkan Isi Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Mengatur Batas Bandwidth](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)
- [Penjadwalan Job](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
