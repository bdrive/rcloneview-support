---
slug: link-public-shared-links-cloud-rcloneview
title: "Membuat Tautan Berbagi Publik untuk File Cloud dengan RcloneView"
authors:
  - tayson
description: "Buat tautan unduhan publik untuk file cloud menggunakan perintah link RcloneView. Bagikan file dari Google Drive, OneDrive, Dropbox, S3, dan lainnya tanpa memberikan akses akun."
keywords:
  - rcloneview
  - public link cloud file
  - share cloud file link
  - rclone link command
  - generate download link
  - presigned url s3
  - shared link google drive
  - cloud file sharing
  - public url cloud storage
  - share file without account
tags:
  - feature
  - tips
  - collaboration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Membuat Tautan Berbagi Publik untuk File Cloud dengan RcloneView

> Membagikan file di cloud biasanya berarti membuka antarmuka web penyedia, mengatur izin, lalu menyalin tautan. Fitur link pada RcloneView membuat URL yang dapat dibagikan langsung dari file explorer — untuk provider mana pun yang mendukungnya.

Ketika Anda perlu membagikan file yang tersimpan di cloud kepada seseorang yang tidak memiliki akses ke akun Anda, tautan publik atau pre-signed adalah solusi standar. Google Drive membuat tautan yang dapat dibagikan, S3 menghasilkan pre-signed URL, dan Dropbox menyediakan shared link — masing-masing melalui antarmuka dan alur kerja yang berbeda. RcloneView menyatukan semuanya menjadi satu tindakan: klik kanan pada file, buat tautan, dan bagikan.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cara Kerja Tautan Publik di Berbagai Provider

Setiap penyedia cloud mengimplementasikan berbagi file secara berbeda:

| Provider | Jenis Tautan | Kedaluwarsa Default | Catatan |
|---|---|---|---|
| Google Drive | Shareable link | Tidak kedaluwarsa | Mengubah izin file menjadi "anyone with the link" |
| OneDrive | Sharing link | Dapat dikonfigurasi | Anonim atau terbatas untuk organisasi |
| Dropbox | Shared link | Tidak kedaluwarsa | Tautan unduhan read-only |
| AWS S3 | Pre-signed URL | Dapat dikonfigurasi (maksimum 7 hari) | Sementara, ditandatangani secara kriptografis |
| Backblaze B2 | Download URL | Tidak kedaluwarsa | Memerlukan bucket publik atau menggunakan auth token |
| Cloudflare R2 | Pre-signed URL | Dapat dikonfigurasi | Pre-signed URL yang kompatibel dengan S3 |

RcloneView menggunakan perintah `link` milik rclone di baliknya, yang secara otomatis membuat jenis tautan yang sesuai untuk setiap provider. Anda tidak perlu mengetahui mekanisme berbagi khusus provider — RcloneView yang menanganinya.

## Membuat Tautan di RcloneView

Untuk membuat tautan publik untuk sebuah file:

1. Buka file di file explorer RcloneView.
2. Klik kanan pada file dan pilih opsi link/share.
3. RcloneView membuat tautan dan menyalinnya ke clipboard Anda (atau menampilkannya untuk disalin secara manual).

Untuk provider yang mendukung kedaluwarsa (seperti S3 pre-signed URL), Anda dapat menentukan durasi tautan menggunakan flag `--expire` pada custom options. Misalnya, `--expire 24h` membuat tautan yang kedaluwarsa dalam 24 jam.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Generating a public link for a cloud file in RcloneView" class="img-large img-center" />

## Menggunakan Perintah Link Melalui Terminal

Untuk kontrol yang lebih besar, gunakan terminal bawaan RcloneView untuk menjalankan perintah link secara langsung:

```
rclone link remote:path/to/file.pdf
```

Ini menghasilkan URL publik. Untuk provider yang kompatibel dengan S3, tambahkan kedaluwarsa:

```
rclone link remote:bucket/file.pdf --expire 48h
```

Pendekatan terminal berguna saat membuat tautan untuk banyak file sekaligus atau menjadikan pembuatan tautan bagian dari alur kerja skrip.

## Perilaku Khusus Provider

### Google Drive

Saat Anda membuat tautan untuk file Google Drive, rclone mengubah pengaturan berbagi file menjadi "anyone with the link can view." Tautan tidak akan kedaluwarsa kecuali Anda mencabut akses berbagi secara manual. Perlu diperhatikan bahwa ini mengubah izin file — siapa pun yang memiliki URL dapat mengakses file tersebut.

Untuk akun Google Workspace, administrator dapat membatasi berbagi tautan hanya untuk anggota organisasi. Dalam kasus ini, tautan yang dibuat hanya akan berfungsi untuk orang-orang di dalam organisasi Anda.

### OneDrive dan SharePoint

OneDrive membuat sharing link melalui Microsoft Graph API. Jenis tautan bergantung pada kebijakan berbagi organisasi Anda — bisa berupa anonim (dapat diakses siapa saja) atau terbatas untuk anggota organisasi. Akun OneDrive personal dapat membuat tautan anonim.

### AWS S3 dan yang Kompatibel dengan S3

Pre-signed URL S3 adalah opsi paling aman. URL tersebut berisi tanda tangan kriptografis yang memberikan akses sementara ke objek tertentu. Tautan kedaluwarsa setelah durasi yang ditentukan (default bervariasi, maksimum 7 hari untuk kredensial IAM user). Tidak ada perubahan pada izin objek — pre-signed URL itu sendiri yang membawa otorisasi.

Hal ini membuat pre-signed URL S3 ideal untuk membagikan file secara sementara: tautan berfungsi selama durasi yang ditentukan lalu menjadi tidak valid, tanpa perlu pembersihan manual.

### Dropbox

Dropbox membuat shared link yang memberikan akses read-only ke file. Tautan tidak kedaluwarsa secara default pada paket Dropbox Plus dan Professional. Pada Dropbox Business, administrator dapat menerapkan kebijakan kedaluwarsa.

## Kasus Penggunaan

### Berbagi File dengan Cepat

Buat tautan untuk laporan, file desain, atau dataset yang tersimpan di cloud lalu kirimkan melalui email, Slack, atau chat. Penerima dapat mengunduh file tanpa memerlukan akun cloud atau akses ke penyimpanan Anda.

### Akses Sementara untuk Klien

Bagi freelancer dan agensi, pre-signed URL S3 sangat ideal untuk pengiriman hasil kerja ke klien. Unggah deliverable ke S3, buat pre-signed URL berdurasi 7 hari, lalu kirimkan ke klien. Setelah 7 hari, tautan kedaluwarsa secara otomatis — tanpa perlu pembersihan manual.

### Distribusi Konten Publik

Untuk file yang ditujukan untuk distribusi luas (dokumentasi, rilis, media kit), buat tautan permanen dari Google Drive atau Dropbox dan sematkan di situs web atau dokumentasi Anda. RcloneView membuat tautan tanpa harus membuka antarmuka web provider.

## Pertimbangan Keamanan

- **Tautan permanen membuat file terekspos tanpa batas waktu**: Tautan Google Drive dan Dropbox tidak kedaluwarsa secara default. Jika Anda membagikan file sensitif, ingat untuk mencabut tautan saat akses tidak lagi diperlukan.
- **Pre-signed URL memiliki batas waktu tetapi tetap dapat dibagikan**: Siapa pun yang memiliki URL dapat mengakses file selama periode validitasnya. Jangan bagikan pre-signed URL di kanal publik jika file bersifat rahasia.
- **Pembuatan tautan mengubah izin pada beberapa provider**: Tautan Google Drive mengubah pengaturan berbagi file. Perubahan ini terlihat oleh pengguna lain yang memiliki akses ke file tersebut.
- **Audit tautan yang dibagikan secara berkala**: Tinjau dan cabut tautan lama, terutama untuk file sensitif. File explorer RcloneView memudahkan Anda menelusuri file dan memeriksa status berbaginya.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote cloud Anda di Remote Manager.
3. Buka file di file explorer dan buat tautan publik.
4. Untuk tautan berbatas waktu, gunakan pre-signed URL S3 dengan flag `--expire`.

Membuat tautan yang dapat dibagikan dari RcloneView membebaskan Anda dari harus berpindah ke antarmuka web setiap provider. Baik Anda memerlukan tautan berbagi cepat, URL pengiriman sementara untuk klien, atau tautan unduhan permanen, RcloneView menanganinya langsung dari file explorer.

---

**Panduan Terkait:**

- [Jelajahi dan Kelola Remote Storage](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Tambahkan AWS S3 dan yang Kompatibel dengan S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Tambahkan Remote via Browse-based Log-in(OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)

<CloudSupportGrid />
