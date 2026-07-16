---
slug: sync-google-drive-to-wasabi-archive-rcloneview
title: "Sinkronisasi Google Drive ke Wasabi — Arsip dan Pencadangan Terjangkau dengan RcloneView"
authors:
  - tayson
description: "Arsipkan Google Drive Anda ke penyimpanan cloud hot Wasabi untuk pencadangan yang andal dengan biaya jauh lebih rendah dibanding AWS S3 menggunakan RcloneView."
keywords:
  - pencadangan Google Drive
  - penyimpanan cloud Wasabi
  - arsip cloud terjangkau
  - pencadangan ke Wasabi
  - RcloneView
  - sinkronisasi cloud-to-cloud
  - pengarsipan data
  - pencadangan hemat biaya
  - arsip Google Drive
  - hot storage
tags:
  - google-drive
  - wasabi
  - archive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Google Drive ke Wasabi — Arsip dan Pencadangan Terjangkau dengan RcloneView

> Google Drive nyaman untuk kolaborasi aktif, tetapi biaya penyimpanan jangka panjang bisa menumpuk. Wasabi menawarkan hot storage yang kompatibel dengan S3 dengan harga setengahnya—sempurna untuk mengarsipkan Google Drive Anda dengan RcloneView.

Google Drive ideal untuk kolaborasi tim, tetapi penyimpanan tak terbatas membawa kerumitan retensi data. Wasabi menyediakan penyimpanan cloud hot dengan harga yang dapat diprediksi dan tanpa biaya egress. RcloneView mengotomatiskan proses pengarsipan proyek yang telah selesai, file lama, dan data dingin ke Wasabi.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Google Drive dan Wasabi

Menyiapkan kedua remote di RcloneView cepat dan aman.

**Google Drive:**
1. Klik **Add Remote** → Pilih **Google Drive**
2. Otorisasi RcloneView melalui OAuth
3. Berikan izin akses folder/file
4. Verifikasi koneksi

**Wasabi:**
1. Klik **Add Remote** → Pilih **Wasabi**
2. Masukkan Access Key dan Secret Key Wasabi Anda
3. Pilih bucket dan region Anda
4. Uji konektivitas

![New Remote Setup](/images/en/blog/new-remote.png)

## Mengarsipkan Google Drive ke Hot Storage Wasabi

Buat job sinkronisasi sekali jalan atau berkala untuk memindahkan file Anda. Hot storage Wasabi dapat diakses secara instan—tanpa jeda pemulihan seperti glacier.

**Skenario pengarsipan:**
- **Penyelesaian proyek**: Arsipkan hasil kerja klien setelah proyek selesai
- **Optimalisasi penyimpanan**: Pindahkan file yang lebih tua dari 90 hari ke Wasabi
- **Pencadangan kepatuhan**: Simpan salinan catatan bisnis yang dapat dicari

![Wasabi Transfer Setup](/images/en/tutorials/wasabi-drag-and-drop.png)

## Memantau Performa Transfer secara Real-Time

RcloneView menampilkan metrik langsung untuk job arsip Anda—kecepatan transfer, jumlah file yang diproses, dan sisa durasi.

![Real-Time Transfer Monitoring](/images/en/tutorials/wasabi-real-time-monitoring-transferring.png)

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buat akun Wasabi di [wasabi.com](https://wasabi.com/).
3. Tambahkan Google Drive sebagai remote menggunakan autentikasi OAuth.
4. Konfigurasikan bucket Wasabi Anda sebagai remote.
5. Buat job sinkronisasi atau salin, lalu mulai pengarsipan.
6. Jadwalkan pencadangan rutin agar arsip tetap up to date.

Arsipkan dengan terjangkau, ambil kembali secara instan—Wasabi dan RcloneView membuatnya mudah.

---

**Panduan Terkait:**

- [Sinkronisasi Google Drive ke Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/sync-google-drive-to-backblaze-b2-rcloneview)
- [Mengarsipkan Google Drive ke S3 Glacier dengan RcloneView](https://rcloneview.com/support/blog/archive-google-drive-to-s3-glacier-rcloneview)
- [Biaya Egress Penyimpanan Cloud — Cara Menghindarinya dengan RcloneView](https://rcloneview.com/support/blog/cloud-storage-egress-fees-avoid-rcloneview)

<CloudSupportGrid />
