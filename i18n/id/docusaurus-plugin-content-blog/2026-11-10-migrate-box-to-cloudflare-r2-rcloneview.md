---
slug: migrate-box-to-cloudflare-r2-rcloneview
title: "Migrasi Box ke Cloudflare R2 — Transfer File dengan RcloneView"
authors:
  - robin
description: "Migrasi Box ke Cloudflare R2 dengan RcloneView: hubungkan kedua remote, uji salinan dengan dry run, jalankan transfer cloud ke cloud, dan verifikasi hasilnya."
keywords:
  - migrasi Box ke Cloudflare R2
  - transfer Box ke R2
  - migrasi cloud Box
  - pencadangan Cloudflare R2
  - RcloneView
  - transfer cloud ke cloud
  - Box ke penyimpanan kompatibel S3
  - arsip Box ke object storage
  - rclone GUI
tags:
  - RcloneView
  - box
  - s3-compatible
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Box ke Cloudflare R2 — Transfer File dengan RcloneView

> Pindahkan konten Box selama bertahun-tahun ke object storage Cloudflare R2 tanpa mengunduh apa pun ke disk Anda sendiri.

Tim keuangan yang sudah melampaui paket Box-nya, atau departemen yang menutup proyek lama, sering menginginkan arsip object storage sebagai gantinya. RcloneView menghubungkan Box dan Cloudflare R2 secara berdampingan dan menyalin langsung di antara keduanya. Hubungkan S3, Azure, atau Backblaze B2 dengan akses baca/tulis penuh pada lisensi FREE, dan hal yang sama berlaku untuk R2.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Box dan Cloudflare R2

Box adalah remote OAuth: RcloneView membuka browser Anda, Anda masuk, dan remote dibuat tanpa API key. Jika perusahaan Anda menggunakan Box for Business, remote memerlukan `box_sub_type = enterprise`. Periksa ini terlebih dahulu, karena remote bertipe personal tidak akan melihat konten enterprise.

Cloudflare R2 menggunakan kredensial. Buat bucket R2 di dasbor Cloudflare, buat API token dengan izin Admin Read & Write, lalu masukkan detail token dan endpoint akun Anda, `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`, pada dialog New Remote.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote Box dan Cloudflare R2 di RcloneView" class="img-large img-center" />

## Merencanakan Struktur Folder

Buka Box di satu panel Explorer dan R2 di panel lainnya. R2 adalah object storage datar, jadi tentukan struktur prefix sebelum menyalin: misalnya satu folder tingkat atas per departemen Box, lalu subfolder aslinya di bawahnya. Gunakan Get Size pada folder Box yang besar untuk memperkirakan volume yang akan dipindahkan.

Box Docs seperti Box Notes bukan file biasa. Filter bawaan di wizard sinkronisasi menyertakan opsi Box Docs, yang memungkinkan Anda mengecualikannya jika tidak ingin menyertakannya di arsip.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box dan Cloudflare R2 berdampingan di panel explorer RcloneView" class="img-large img-center" />

## Dry Run, Lalu Salin

Buat job Copy, bukan job Sync, untuk putaran pertama, sehingga tidak ada yang pernah dihapus dari kedua sisi. Jalankan sebagai Dry Run terlebih dahulu: RcloneView mencantumkan file yang akan disalin tanpa mentransfernya, yang membantu menemukan folder sumber yang salah.

Pada langkah Advanced Settings, tingkatkan jumlah transfer file jika Anda memiliki banyak file kecil, dan aktifkan perbandingan checksum jika ingin pencocokan hash dan ukuran. Kemudian jalankan job dan ikuti progresnya di tab Transferring: persentase, kecepatan, dan jumlah file diperbarui secara langsung.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menjalankan job salin Box ke R2 di RcloneView" class="img-large img-center" />

## Memverifikasi Migrasi

Setelah job selesai, buka Folder Compare dengan Box di kiri dan R2 di kanan. Gunakan filter left-only untuk melihat apa pun yang belum sampai, dan filter different-files untuk menemukan ketidaksesuaian ukuran. Job History menyimpan status, durasi, ukuran total, dan jumlah file dari setiap proses, yang berguna sebagai bukti untuk jejak audit.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare memverifikasi migrasi Box ke R2" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote Box Anda (OAuth) dan remote Cloudflare R2 Anda (API token dan endpoint).
3. Buat job Copy dari folder Box ke prefix bucket R2 dan jalankan Dry Run.
4. Jalankan job, lalu konfirmasi hasilnya dengan Folder Compare.

Memindahkan konten Box ke R2 hanya membutuhkan beberapa klik setelah kedua remote terhubung.

---

**Panduan Terkait:**

- [Migrasi Box ke AWS S3](https://rcloneview.com/support/blog/migrate-box-to-aws-s3-rcloneview)
- [Kelola Penyimpanan Box dengan RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Dry Run: Pratinjau Sinkronisasi Sebelum Transfer](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
