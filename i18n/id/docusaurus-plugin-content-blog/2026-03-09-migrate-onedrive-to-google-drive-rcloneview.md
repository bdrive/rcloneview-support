---
slug: migrate-onedrive-to-google-drive-rcloneview
title: "Cara Migrasi dari OneDrive ke Google Drive — Panduan Transfer Langkah demi Langkah dengan RcloneView"
authors:
  - tayson
description: "Beralih dari Microsoft 365 ke Google Workspace? Pelajari cara memigrasikan semua file dari OneDrive ke Google Drive sambil mempertahankan struktur folder menggunakan RcloneView."
keywords:
  - migrate onedrive to google drive
  - onedrive to google drive transfer
  - switch microsoft 365 to google workspace
  - move files onedrive google drive
  - onedrive google drive migration tool
  - cloud migration tool
  - onedrive to gdrive sync
  - transfer onedrive files
  - microsoft to google migration
  - onedrive migration tool
tags:
  - onedrive
  - google-drive
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cara Migrasi dari OneDrive ke Google Drive — Panduan Transfer Langkah demi Langkah dengan RcloneView

> Organisasi Anda sedang beralih ke Google Workspace. Sekarang Anda perlu memindahkan terabyte file OneDrive ke Google Drive tanpa mengganggu alur kerja tim Anda. Berikut cara melakukannya dengan benar.

Baik Anda beralih paket produktivitas, mengonsolidasikan akun cloud, atau menjaga pencadangan paralel, migrasi dari OneDrive ke Google Drive memerlukan perencanaan yang cermat. RcloneView menangani pekerjaan berat — transfer langsung antar-cloud yang mempertahankan struktur folder Anda dan menangani perbedaan format file secara otomatis.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Tidak Cukup Unduh dan Unggah Ulang Saja?

Pendekatan manual — unduh dari OneDrive, lalu unggah ke Google Drive — memiliki kelemahan serius:

- **Membutuhkan ruang disk lokal** untuk seluruh kumpulan data.
- **Dua kali lebih lama** — unduh + unggah, bukan transfer langsung.
- **Tidak ada pembaruan inkremental** — perubahan apa pun selama transfer akan hilang.
- **Gagal pada kumpulan data besar** — unggahan browser gagal pada file di atas beberapa GB.

RcloneView mentransfer langsung antar-cloud, hanya membutuhkan bandwidth — bukan penyimpanan lokal.

## Langkah-Langkah Migrasi

### 1) Hubungkan Kedua Akun

Tambahkan OneDrive dan Google Drive sebagai remote di RcloneView:

<img src="/support/images/en/blog/new-remote.png" alt="Add OneDrive and Google Drive remotes" class="img-large img-center" />

### 2) Kaji dan Rencanakan

Jelajahi kedua cloud secara berdampingan:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse OneDrive and Google Drive side by side" class="img-large img-center" />

Sebelum bermigrasi, periksa:

- **Ukuran total** — Berapa banyak data yang perlu dipindahkan?
- **Jenis file** — Dokumen Office dikonversi secara otomatis (lihat di bawah).
- **Folder bersama** — Item bersama OneDrive memerlukan penanganan terpisah.
- **Panjang jalur** — Google Drive memiliki batas jalur 400 karakter.

### 3) Penanganan Format File

Saat mentransfer, dokumen Office dapat diunggah apa adanya ke Google Drive. Google Drive mendukung pembukaan `.docx`, `.xlsx`, dan `.pptx` secara native. Secara opsional, Anda dapat mengonversinya ke format native Google setelah migrasi.

| Format OneDrive | Penanganan Google Drive |
|-----------------|---------------------|
| .docx | Terbuka secara native atau dikonversi ke Google Docs |
| .xlsx | Terbuka secara native atau dikonversi ke Google Sheets |
| .pptx | Terbuka secara native atau dikonversi ke Google Slides |
| Gambar, PDF | Ditransfer apa adanya |

### 4) Jalankan Migrasi

Buat job **Copy** dari OneDrive ke Google Drive:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run OneDrive to Google Drive migration" class="img-large img-center" />

Gunakan **Copy**, bukan Sync — ini hanya menambahkan file, tidak pernah menghapus dari tujuan.

### 5) Pantau Progres

Pantau migrasi secara real time:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor migration progress" class="img-large img-center" />

### 6) Verifikasi

Bandingkan kedua sisi setelah migrasi:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify migration completeness" class="img-large img-center" />

## Menangani Kasus Khusus

### Pustaka Dokumen SharePoint

Pustaka SharePoint terpisah dari OneDrive pribadi. Tambahkan SharePoint sebagai remote terpisah di RcloneView untuk memigrasikan situs tim.

### OneDrive for Business vs Personal

Jika bermigrasi dari OneDrive for Business, penyiapan OAuth berbeda dari OneDrive pribadi. RcloneView memandu Anda melalui kedua alur autentikasi tersebut.

### Migrasi besar (500 GB+)

Untuk kumpulan data yang sangat besar:

- **Migrasi secara bertahap** — Mulai dengan folder penting, lalu data sekunder.
- **Gunakan aturan filter** — Prioritaskan berdasarkan jenis file atau tanggal.
- **Jadwalkan di luar jam kerja** — Jalankan pada malam/akhir pekan untuk menghindari batasan laju.
- **Aktifkan retry** — Fitur retry v1.3 menangani kegagalan sementara.

### Selama masa transisi

Jaga kedua cloud tetap sinkron selama tim Anda bertransisi:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule ongoing sync during transition" class="img-large img-center" />

Jadwalkan sinkronisasi harian dari OneDrive → Google Drive hingga semua orang telah beralih.

## Daftar Periksa Pasca-Migrasi

1. **Verifikasi jumlah file** — Folder Comparison memastikan semua file telah ditransfer.
2. **Uji akses file** — Buka dokumen penting di Google Drive.
3. **Perbarui berbagi** — Bagikan ulang folder di Google Drive dengan anggota tim.
4. **Perbarui integrasi aplikasi** — Arahkan skrip, alat, dan alur kerja ke Google Drive.
5. **Jaga OneDrive tetap aktif** — Pertahankan akun lama selama 30 hari sebagai jaring pengaman.
6. **Nonaktifkan** — Setelah memastikan semuanya berfungsi, batalkan langganan OneDrive.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan OneDrive dan Google Drive** sebagai remote.
3. **Jalankan job Copy** untuk mentransfer file.
4. **Verifikasi dengan Folder Comparison**.
5. **Jadwalkan sinkronisasi inkremental** selama transisi.

Migrasi sudah cukup membuat stres tanpa harus khawatir kehilangan file. Biarkan RcloneView menangani transfer sementara Anda fokus pada rencana transisi.

---

**Panduan Terkait:**

- [Membuat Job Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Membandingkan Isi Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Migrasi Google Drive ke OneDrive](https://rcloneview.com/support/blog/migrate-google-drive-to-onedrive-rcloneview)
- [Penjadwalan Job](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
