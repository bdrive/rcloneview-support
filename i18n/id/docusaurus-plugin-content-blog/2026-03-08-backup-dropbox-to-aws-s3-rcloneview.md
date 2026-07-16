---
slug: backup-dropbox-to-aws-s3-rcloneview
title: "Cara Mencadangkan Dropbox ke AWS S3 — Pencadangan Cloud-to-Cloud Otomatis dengan RcloneView"
authors:
  - tayson
description: "Lindungi file Dropbox Anda dengan mencadangkannya ke AWS S3. Siapkan pencadangan cloud-to-cloud otomatis dengan penjadwalan dan verifikasi menggunakan RcloneView."
keywords:
  - backup dropbox to s3
  - dropbox aws s3 sync
  - dropbox cloud backup
  - dropbox to s3 transfer
  - cloud to cloud backup dropbox
  - dropbox backup solution
  - dropbox data protection
  - sync dropbox aws
  - automated dropbox backup
  - dropbox migration s3
tags:
  - dropbox
  - aws-s3
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cara Mencadangkan Dropbox ke AWS S3 — Pencadangan Cloud-to-Cloud Otomatis dengan RcloneView

> Dropbox sangat baik untuk kolaborasi. Namun apa yang terjadi jika file terhapus secara tidak sengaja, ransomware mengenkripsi folder bersama Anda, atau Dropbox sendiri mengalami gangguan layanan? Pencadangan cloud-to-cloud ke AWS S3 melindungi Anda dari semua hal tersebut.

Mengandalkan satu penyedia cloud saja untuk file penting berisiko tinggi. Riwayat versi Dropbox membantu mengatasi perubahan yang tidak disengaja, tetapi tidak melindungi dari kompromi akun, penghapusan permanen di luar jendela retensi, atau gangguan layanan. Mencadangkan ke AWS S3 memberi Anda salinan independen dan tahan lama dari semua data Anda.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Mencadangkan Dropbox ke S3?

- **Salinan independen** — Jika Dropbox mengalami gangguan atau akun Anda dikompromikan, S3 tetap menyimpan file Anda.
- **Daya tahan 99,999999999%** — Sebelas angka sembilan daya tahan S3 berarti data Anda sangat aman.
- **Pengarsipan hemat biaya** — S3 Glacier mulai dari $4/TB/bulan untuk file yang jarang diakses.
- **Kepatuhan (compliance)** — Beberapa industri mewajibkan pencadangan pada infrastruktur terpisah.
- **Perlindungan ransomware** — Versioning dan object lock S3 mencegah penimpaan (overwrite) file.

## Pengaturan

### 1) Hubungkan Dropbox dan AWS S3

Tambahkan keduanya sebagai remote di RcloneView:

<img src="/support/images/en/blog/new-remote.png" alt="Add Dropbox and S3 remotes" class="img-large img-center" />

Untuk S3, Anda memerlukan Access Key ID, Secret Access Key, dan region pilihan Anda.

### 2) Jelajahi Kedua Sisi

Buka Dropbox di panel kiri dan S3 di panel kanan pada explorer dua panel:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Dropbox and S3 side by side" class="img-large img-center" />

### 3) Buat Job Copy

Gunakan **Copy** untuk mencadangkan Dropbox ke bucket S3. Copy hanya menambahkan file tanpa menghapus — aman untuk pencadangan:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run Dropbox to S3 backup" class="img-large img-center" />

### 4) Jadwalkan Pencadangan Malam Hari

Atur job untuk berjalan setiap malam agar pencadangan S3 Anda selalu terkini:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule nightly Dropbox backup" class="img-large img-center" />

### 5) Verifikasi Kelengkapan

Gunakan Folder Comparison untuk memastikan semua file telah dicadangkan:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Dropbox backup on S3" class="img-large img-center" />

## Memilih Storage Class S3 yang Tepat

AWS S3 menawarkan berbagai storage class dengan tingkat harga berbeda:

| Storage Class | Paling Cocok Untuk | Harga (TB/bulan) |
|---------------|----------|------------------|
| S3 Standard | Pencadangan yang sering diakses | $23 |
| S3 Standard-IA | Pencadangan yang diakses bulanan | $12.50 |
| S3 Glacier Instant | Akses jarang, pengambilan instan | $4 |
| S3 Glacier Deep Archive | Kepatuhan, akses tahunan | $1 |

Untuk sebagian besar pencadangan Dropbox, **S3 Standard-IA** (Infrequent Access) adalah pilihan yang paling seimbang — Anda tidak mengakses cadangan setiap hari, tetapi tetap menginginkan pemulihan cepat saat diperlukan.

## Pencadangan Selektif dengan Filter

Anda mungkin tidak perlu mencadangkan semua file. Gunakan aturan filter rclone:

- **Sertakan hanya dokumen**: `--include "*.pdf" --include "*.docx" --include "*.xlsx"`
- **Kecualikan file sementara**: `--exclude "*.tmp" --exclude ".dropbox*"`
- **Lewati media berukuran besar**: `--max-size 500M`

Lihat [Penjelasan Aturan Filter Rclone](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview) untuk detailnya.

## Batch Jobs untuk Alur Kerja Pencadangan Lengkap

Dengan Batch Jobs di v1.3, Anda dapat merangkai beberapa operasi:

1. Copy Dropbox → S3.
2. Compare Dropbox vs S3.
3. Kirim notifikasi Slack saat selesai.

Semuanya dalam satu urutan otomatis.

## Memulihkan dari Pencadangan

Jika Anda perlu memulihkan file dari S3 kembali ke Dropbox:

1. Buka S3 di panel kiri, Dropbox di panel kanan.
2. Pilih file atau folder yang ingin dipulihkan.
3. Jalankan job Copy dari S3 → Dropbox.

Prosesnya sama, hanya arahnya terbalik.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan Dropbox dan AWS S3** sebagai remote.
3. **Jalankan job Copy** dari Dropbox ke S3.
4. **Jadwalkan pencadangan malam hari**.
5. **Verifikasi dengan Folder Comparison**.

File Dropbox Anda layak memiliki lebih dari satu rumah.

---

**Panduan Terkait:**

- [Membuat Job Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Penjadwalan Job](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Membandingkan Isi Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Aturan Filter Rclone](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)

<CloudSupportGrid />
