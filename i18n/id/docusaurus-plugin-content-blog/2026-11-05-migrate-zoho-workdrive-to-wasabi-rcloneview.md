---
slug: migrate-zoho-workdrive-to-wasabi-rcloneview
title: "Migrasi Zoho WorkDrive ke Wasabi — Transfer Berkas dengan RcloneView"
authors:
  - morgan
description: "Migrasikan Zoho WorkDrive ke penyimpanan objek Wasabi dengan RcloneView: hubungkan kedua remote, Dry Run, salin dari cloud ke cloud, dan verifikasi dengan Folder Compare."
keywords:
  - migrasi Zoho WorkDrive ke Wasabi
  - Zoho WorkDrive ke Wasabi
  - ekspor Zoho WorkDrive
  - migrasi penyimpanan objek Wasabi
  - pencadangan Zoho WorkDrive
  - transfer cloud ke cloud
  - migrasi GUI rclone
  - RcloneView Wasabi
tags:
  - RcloneView
  - zoho
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Zoho WorkDrive ke Wasabi — Transfer Berkas dengan RcloneView

> Arsipkan folder tim Zoho WorkDrive ke bucket Wasabi tanpa menyimpan apa pun sementara di disk Anda sendiri.

Tim beralih dari Zoho WorkDrive ketika sebuah proyek selesai, departemen berganti alat, atau bagian keuangan menginginkan arsip jangka panjang yang lebih murah. Wasabi adalah tujuan yang kompatibel dengan S3 yang cocok untuk peran arsip tersebut, tetapi memindahkan ribuan berkas secara manual itu lambat. RcloneView menghubungkan kedua layanan dalam satu jendela dan menyalin dari cloud ke cloud, dengan Dry Run sebelumnya dan perbandingan sesudahnya. Hubungkan penyimpanan yang kompatibel dengan S3 seperti Wasabi dengan akses baca/tulis penuh pada lisensi FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan Zoho WorkDrive dan Wasabi

Buka tab Remote dan pilih New Remote. Zoho WorkDrive memerlukan pemilihan region saat penyiapan, jadi pilih pusat data yang sesuai dengan akun Zoho Anda. Wasabi ditambahkan sebagai remote yang kompatibel dengan S3: masukkan Access Key, Secret Key, dan endpoint untuk region bucket Anda.

Ketika keduanya muncul di Remote Manager, buka di dua panel Explorer. Telusuri folder tim di sebelah kiri dan bucket di sebelah kanan sebelum memindahkan apa pun.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote Zoho WorkDrive dan Wasabi di RcloneView" class="img-large img-center" />

## Rencanakan Penyalinan dan Jalankan Dry Run

Tentukan apa yang termasuk dalam arsip. Pada Langkah 3 wizard job, Anda dapat menetapkan usia berkas maksimum, ukuran berkas maksimum, atau batas kedalaman folder, dan menambahkan aturan khusus seperti mengecualikan folder `.git/`. Pilih job Copy, bukan sinkronisasi mirroring, agar tidak ada yang dihapus di tujuan.

Lalu jalankan Dry Run. Fitur ini mencantumkan setiap berkas yang akan disalin atau dihapus tanpa mengubah kedua sisi, sehingga ini adalah saat termurah untuk menemukan folder atau filter yang salah.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer cloud ke cloud dari Zoho WorkDrive ke Wasabi" class="img-large img-center" />

## Jalankan Transfer dan Pantau

Mulai job dan ikuti di tab Transferring, yang menampilkan progres, kecepatan, dan jumlah berkas. Pada Langkah 2, Anda dapat menaikkan jumlah transfer berkas untuk arsip besar; pertahankan equality checkers pada tingkat sedang jika sisi Zoho merespons lambat. "Retry entire sync if fails" bernilai default 3, yang mencakup kesalahan jaringan sementara.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Memantau transfer dari Zoho WorkDrive ke Wasabi" class="img-large img-center" />

## Verifikasi dengan Folder Compare dan Job History

Setelah job selesai, buka Compare dengan Zoho WorkDrive di satu sisi dan bucket Wasabi di sisi lain. Filter berkas hanya-kiri, hanya-kanan, dan berbeda menunjukkan apa yang masih kurang, dan aksi salin mentransfer sisanya. Job History mencatat status, ukuran, dan jumlah berkas dari setiap eksekusi, yang sekaligus berfungsi sebagai catatan migrasi.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Membandingkan Zoho WorkDrive dan Wasabi setelah migrasi" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Zoho WorkDrive (dengan regionnya) dan Wasabi sebagai remote.
3. Buat job Copy dengan filter dan jalankan Dry Run.
4. Jalankan job, lalu konfirmasi dengan Folder Compare sebelum menghentikan sumber.

Biarkan data Zoho tetap di tempatnya sampai Compare menunjukkan kedua sisi cocok.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Zoho WorkDrive dengan RcloneView](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Migrasi Zoho WorkDrive ke Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/migrate-zoho-workdrive-to-backblaze-b2-rcloneview)
- [Kelola Penyimpanan Wasabi — Sinkronisasi dan Cadangkan Berkas dengan RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
