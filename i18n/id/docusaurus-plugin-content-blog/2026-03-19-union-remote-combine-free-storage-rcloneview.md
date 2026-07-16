---
slug: union-remote-combine-free-storage-rcloneview
title: "Union Remote — Gabungkan Beberapa Akun Cloud Gratis Menjadi Satu Kolam Penyimpanan Raksasa dengan RcloneView"
authors:
  - tayson
description: "Google Drive memberikan 15 GB gratis. OneDrive memberikan 5 GB. Dropbox memberikan 2 GB. Gabungkan semuanya menjadi satu kolam penyimpanan virtual 22 GB menggunakan union remote milik rclone di RcloneView."
keywords:
  - gabungkan penyimpanan cloud gratis
  - union remote rclone
  - gabungkan akun cloud
  - kombinasikan penyimpanan cloud
  - rclone union drive
  - kolam penyimpanan cloud gratis
  - kolam penyimpanan multi cloud
  - gabungkan google drive onedrive
  - penyimpanan cloud virtual
  - agregasi penyimpanan cloud
tags:
  - RcloneView
  - feature
  - cloud-storage
  - multi-cloud
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Union Remote — Gabungkan Beberapa Akun Cloud Gratis Menjadi Satu Kolam Penyimpanan Raksasa dengan RcloneView

> 15 GB dari Google. 5 GB dari OneDrive. 2 GB dari Dropbox. 1 TB dari Terabox. Secara individu jumlahnya kecil. Digabungkan menjadi union remote, semuanya menjadi kolam penyimpanan multi-terabyte gratis.

Sebagian besar penyedia cloud menawarkan tingkat penyimpanan gratis, tetapi secara individu kapasitasnya terlalu kecil untuk penggunaan serius. Union remote milik rclone menggabungkan beberapa lokasi penyimpanan menjadi satu sistem file virtual. RcloneView memungkinkan Anda mengatur ini secara visual, lalu menjelajahi, melakukan sinkronisasi, dan mengelola kolam gabungan tersebut seolah-olah itu adalah satu drive raksasa.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cara Kerja Union Remote

Union remote menggabungkan beberapa remote menjadi satu tampilan virtual:

- **Membaca**: file dari semua remote yang mendasarinya muncul dalam satu daftar direktori
- **Menulis**: file baru ditulis ke remote dengan ruang kosong terbanyak (atau berdasarkan kebijakan yang Anda konfigurasikan)
- **Transparan**: Anda berinteraksi dengan satu remote; rclone mengelola distribusinya

## Penyimpanan Gratis yang Bisa Digabungkan

| Provider | Free Tier |
|----------|----------|
| Google Drive | 15 GB |
| OneDrive | 5 GB |
| Dropbox | 2 GB |
| pCloud | 10 GB |
| Terabox | 1 TB |
| MEGA | 20 GB |
| Icedrive | 10 GB |
| Koofr | 10 GB |

Digabungkan: berpotensi lebih dari 1 TB penyimpanan gratis.

## Mengatur Union Remote

<img src="/support/images/en/blog/new-remote.png" alt="Create union remote" class="img-large img-center" />

1. Tambahkan setiap akun cloud gratis sebagai remote terpisah
2. Buat union remote yang menggabungkan semuanya
3. Jelajahi union tersebut sebagai satu kolam penyimpanan

## Kasus Penggunaan

### Maksimalkan penyimpanan gratis

Mahasiswa, freelancer, dan pengguna yang sadar anggaran dapat menggabungkan tingkat gratis untuk mendapatkan penyimpanan gratis yang signifikan.

### Distribusikan pencadangan ke beberapa provider

Sebarkan data pencadangan ke beberapa akun gratis untuk redundansi. Jika satu provider bermasalah, provider lain tetap memiliki data.

### Buat kolam penyimpanan bertingkat

Gabungkan penyimpanan cepat (Google Drive) dengan penyimpanan besar (Terabox) dalam satu kolam.

## Menjelajahi Kolam Gabungan

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse union remote" class="img-large img-center" />

Penjelajah dua panel menampilkan union remote seperti remote lainnya. File dari semua provider yang mendasarinya muncul bersamaan.

## Catatan Penting

- **File tidak dipindahkan** antar remote yang mendasarinya — setiap file tetap berada di provider tempat file tersebut ditulis
- **Menghapus** akan menghapus file dari provider mana pun yang menyimpannya
- **Performa** bergantung pada provider yang mendasarinya paling lambat saat melakukan listing
- **Kebijakan penulisan** menentukan provider mana yang menerima file baru

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan akun cloud gratis** sebagai remote individual.
3. **Buat union remote** yang menggabungkannya.
4. **Jelajahi dan gunakan** sebagai satu kolam penyimpanan.

Tingkat gratis yang kecil, digabungkan menjadi sesuatu yang berguna.

---

**Panduan Terkait:**

- [Virtual Remotes: Combine, Union, Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Mengelola Penyebaran Cloud](https://rcloneview.com/support/blog/manage-cloud-sprawl-too-many-accounts-rcloneview)
- [Panduan Manajemen Remote](https://rcloneview.com/support/blog/remote-management-add-edit-delete-rcloneview)

<CloudSupportGrid />
