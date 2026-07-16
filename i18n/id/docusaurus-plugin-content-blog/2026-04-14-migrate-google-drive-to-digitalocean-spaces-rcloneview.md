---
slug: migrate-google-drive-to-digitalocean-spaces-rcloneview
title: "Migrasi Google Drive ke DigitalOcean Spaces — Transfer File dengan RcloneView"
authors:
  - tayson
description: "Pindahkan file dari Google Drive ke penyimpanan objek DigitalOcean Spaces menggunakan RcloneView. Panduan langkah demi langkah untuk migrasi cloud-to-cloud langsung tanpa scripting CLI."
keywords:
  - migrasi Google Drive ke DigitalOcean Spaces
  - migrasi Google Drive ke penyimpanan objek
  - pencadangan DigitalOcean Spaces dari Google Drive
  - rclone Google Drive DigitalOcean
  - migrasi cloud-to-cloud Google Drive
  - pindahkan Google Drive ke S3 compatible
  - migrasi Google Drive RcloneView
  - transfer file DigitalOcean Spaces
tags:
  - google-drive
  - digitalocean-spaces
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Google Drive ke DigitalOcean Spaces — Transfer File dengan RcloneView

> RcloneView menangani migrasi Google Drive ke DigitalOcean Spaces sebagai transfer cloud-to-cloud langsung — tanpa staging lokal, visibilitas progres penuh, dan verifikasi checksum saat selesai.

Memindahkan file dari Google Drive ke DigitalOcean Spaces adalah alur kerja umum bagi developer yang bermigrasi dari penyimpanan berorientasi konsumen ke penyimpanan objek setara infrastruktur. Sebuah startup mungkin beralih dari menggunakan Google Drive untuk berbagi file ke menggunakan Spaces untuk akses programatik, integrasi CDN, dan biaya per GB yang lebih rendah dalam skala besar. RcloneView menghubungkan kedua provider secara bersamaan dan mentransfer file secara langsung, tanpa mengalirkan gigabyte data melalui mesin lokal Anda.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menyiapkan Kedua Remote

Tambahkan Google Drive sebagai remote OAuth: **tab Remote → New Remote → Google Drive**, autentikasi di browser. Folder Drive Anda akan langsung muncul di Explorer.

Tambahkan DigitalOcean Spaces sebagai remote yang kompatibel dengan S3: **New Remote → Amazon S3 Compatible → DigitalOcean Spaces**. Masukkan access key Spaces, secret key, dan region endpoint (misalnya, `nyc3.digitaloceanspaces.com`). Buat bucket tujuan di DigitalOcean Control Panel jika belum ada.

Buka tampilan Explorer dua panel: Google Drive di kiri, DigitalOcean Spaces di kanan. Telusuri keduanya untuk memastikan struktur folder sebelum menjalankan migrasi.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up Google Drive and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

## Menjalankan Migrasi

Untuk migrasi tingkat folder (misalnya, migrasi `Google Drive:/Client Projects/` ke `do-spaces:projects-bucket/`), gunakan wizard job Sync di Job Manager. Atur source dan destination, lalu konfigurasikan di Step 2:

- **Concurrent transfers**: 8–12 untuk throughput maksimum pada koneksi cepat
- **Verifikasi checksum**: diaktifkan — Google Drive menggunakan skema hash-nya sendiri; rclone menangani konversinya
- **Retries**: 3 — menangani rate limit sementara dari Google API tanpa membuat seluruh job gagal

Jalankan Dry Run terlebih dahulu. Google Drive sering berisi file Google Docs, Sheets, dan Slides yang tidak dapat disalin langsung ke Spaces (file-file ini hanya ada dalam format Google, bukan sebagai file yang dapat diunduh). Dry Run akan menampilkan item-item ini, dan Anda dapat memutuskan apakah akan mengekspornya terlebih dahulu atau mengecualikannya dengan aturan filter.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Drive to DigitalOcean Spaces cloud-to-cloud transfer in RcloneView" class="img-large img-center" />

## Menangani File Google Workspace

File Google Workspace native (Docs, Sheets, Slides) tidak memiliki format file langsung — file-file ini harus diekspor terlebih dahulu. Rclone dapat mengekspornya secara otomatis sebagai PDF atau format Office selama transfer berlangsung. Dalam job sync RcloneView, Google Docs dilewati secara default kecuali Anda mengonfigurasi format ekspor. Gunakan tab Terminal untuk menjalankan `rclone copy --drive-export-formats docx,xlsx,pptx` untuk proses ekspor satu kali, atau tambahkan flag khusus di Settings → Global Rclone Flags.

File biasa (PDF, gambar, video, kode) ditransfer tanpa penanganan khusus dan akan tiba di Spaces dengan format dan nama file aslinya tetap utuh.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Google Drive to DigitalOcean Spaces migration with folder comparison" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Google Drive (OAuth) dan DigitalOcean Spaces (kredensial S3) sebagai remote.
3. Buat job Sync di Job Manager, jalankan Dry Run, tinjau penanganan file Google Workspace.
4. Jalankan migrasi dan gunakan Folder Compare untuk memverifikasi penyelesaiannya.

Migrasi dari Google Drive ke DigitalOcean Spaces dengan RcloneView adalah proses yang terstruktur dan dapat diverifikasi — dengan riwayat job dan log transfer yang memberikan catatan jelas tentang apa yang dipindahkan dan kapan.

---

**Panduan Terkait:**

- [Kelola Sinkronisasi Cloud dan Pencadangan DigitalOcean Spaces dengan RcloneView](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [Migrasi Google Drive ke AWS S3 dengan RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-aws-s3-rcloneview)
- [Migrasi Cloud Terverifikasi Checksum dengan RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
