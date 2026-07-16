---
slug: remote-management-add-edit-delete-rcloneview
title: "Panduan Manajemen Remote — Menambah, Mengedit, dan Mengatur Koneksi Cloud di RcloneView"
authors:
  - tayson
description: "Mengelola 70+ penyedia cloud dimulai dengan remote yang terorganisir dengan baik. Pelajari cara menambah, mengonfigurasi, mengedit, dan mengatur koneksi cloud Anda di remote manager RcloneView."
keywords:
  - rcloneview remote manager
  - add cloud remote rcloneview
  - manage cloud connections
  - rclone remote setup
  - cloud connection manager
  - rcloneview configure remote
  - add cloud account rcloneview
  - rcloneview setup guide
  - cloud remote configuration
  - organize cloud accounts
tags:
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Panduan Manajemen Remote — Menambah, Mengedit, dan Mengatur Koneksi Cloud di RcloneView

> Remote pertama Anda hanya butuh 2 menit untuk disiapkan. Remote ke-15 membutuhkan sebuah sistem. Berikut cara mengelola semua koneksi cloud Anda secara efisien seiring berkembangnya setup multi-cloud Anda.

Setiap penyedia cloud di RcloneView dimulai sebagai sebuah "remote" — koneksi bernama dengan kredensial dan konfigurasi. Saat Anda memiliki dua atau tiga remote, pengelolaannya sederhana. Namun seiring bertambahnya penyedia yang Anda tambahkan (dan banyak pengguna akhirnya memiliki 10+), menjaganya tetap terorganisir menjadi penting. Panduan ini mencakup semuanya, mulai dari menambahkan remote pertama Anda hingga mengelola setup multi-cloud yang kompleks.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menambahkan Remote Baru

<img src="/support/images/en/blog/new-remote.png" alt="Add new remote" class="img-large img-center" />

Remote manager memandu Anda dalam menambahkan salah satu dari 70+ penyedia. Setiap jenis penyedia memiliki field konfigurasi yang berbeda — Google Drive menggunakan OAuth, S3 menggunakan access key, WebDAV menggunakan URL dan kredensial.

### Jenis penyedia umum

| Jenis Koneksi | Contoh | Metode Autentikasi |
|----------------|---------|-------------|
| OAuth | Google Drive, OneDrive, Dropbox | Login browser |
| Access Keys | S3, B2, Wasabi, R2 | Key + Secret |
| Username/Password | WebDAV, FTP, SFTP | Kredensial |
| Token | Box, Mega | Token API |

## Konvensi Penamaan

Penamaan yang baik menghindarkan kebingungan di kemudian hari. Pertimbangkan pola berikut:

- **Berdasarkan penyedia**: `gdrive-personal`, `gdrive-work`, `s3-backup`
- **Berdasarkan tujuan**: `backup-primary`, `backup-secondary`, `archive`
- **Berdasarkan tim**: `marketing-drive`, `engineering-s3`, `finance-onedrive`

## Mengedit Konfigurasi Remote

Perlu memperbarui kredensial, mengubah endpoint, atau memodifikasi pengaturan? Edit remote apa pun melalui remote manager tanpa perlu membuatnya ulang.

Alasan umum untuk mengedit:

- **Token OAuth kedaluwarsa** — otorisasi ulang tanpa kehilangan konfigurasi job
- **Access key berubah** — perbarui kredensial S3 setelah rotasi
- **Endpoint berbeda** — beralih region S3 atau endpoint kustom

## Konfigurasi Lanjutan

### Remote crypt

Buat wrapper terenkripsi di sekitar remote yang sudah ada. Remote crypt mengenkripsi nama file dan konten sebelum sampai ke cloud:

### Remote Union/Combine

Gabungkan beberapa remote menjadi satu tampilan virtual. Berguna untuk menggabungkan tier penyimpanan gratis dari berbagai penyedia.

## Mengatur Remote Anda

Seiring bertambahnya jumlah remote Anda:

- **Gunakan penamaan yang konsisten** agar remote terurut secara logis
- **Dokumentasikan setup Anda** — remote mana yang mencadangkan ke remote mana
- **Bersihkan remote yang tidak terpakai** — hapus akun trial lama
- **Uji koneksi secara berkala** — token kedaluwarsa menyebabkan kegagalan diam-diam

## Menggunakan Remote di Explorer

Setelah dikonfigurasi, remote akan muncul di explorer dua panel. Pilih remote apa pun sebagai panel sumber atau tujuan:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse remotes in explorer" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan remote pertama Anda** — ikuti setup terpandu.
3. **Beri nama yang jelas** untuk referensi di masa mendatang.
4. **Tambahkan lebih banyak remote** sesuai kebutuhan.
5. **Jaga agar tetap terorganisir** dengan penamaan yang konsisten.

Manajemen remote yang baik adalah fondasi dari manajemen cloud yang baik.

---

**Panduan Terkait:**

- [Panduan Connection Manager](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)
- [Mengenkripsi Cadangan Cloud](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [Remote Virtual: Combine, Union, Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)

<CloudSupportGrid />
