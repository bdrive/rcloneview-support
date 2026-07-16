---
slug: encrypt-cloud-backups-crypt-remote-guide-rcloneview
title: "Enkripsi Pencadangan Cloud dengan Rclone Crypt — Enkripsi Zero-Knowledge untuk Google Drive, S3, dan Lainnya"
authors:
  - tayson
description: "Enkripsi file cloud Anda sebelum diunggah dengan remote crypt milik rclone. Panduan lengkap enkripsi zero-knowledge untuk Google Drive, OneDrive, S3, dan penyedia cloud apa pun menggunakan RcloneView."
keywords:
  - enkripsi penyimpanan cloud
  - remote crypt rclone
  - enkripsi zero knowledge cloud
  - enkripsi file google drive
  - pencadangan cloud terenkripsi
  - panduan enkripsi rclone
  - enkripsi file onedrive
  - enkripsi sisi klien cloud
  - enkripsi file s3
  - alat penyimpanan cloud terenkripsi
tags:
  - RcloneView
  - encryption
  - crypt
  - security
  - feature
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Enkripsi Pencadangan Cloud dengan Rclone Crypt — Enkripsi Zero-Knowledge untuk Google Drive, S3, dan Lainnya

> Saat Anda mengunggah file ke Google Drive, Google dapat membacanya. Saat Anda menyimpan data di S3, Amazon dapat mengaksesnya. Remote crypt milik rclone mengubah ini — file Anda dienkripsi sebelum meninggalkan komputer Anda.

Penyedia cloud mengenkripsi data "saat disimpan" (at rest) di server mereka, tetapi mereka memegang kuncinya. Ini berarti penyedia (dan berpotensi lembaga pemerintah, peretas yang membobol penyedia, atau karyawan nakal) dapat mengakses file Anda. Remote crypt milik rclone menyediakan enkripsi zero-knowledge sejati: file dienkripsi di komputer Anda sebelum diunggah, dan hanya Anda yang memiliki kuncinya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Apa Itu Remote Crypt?

Remote crypt adalah lapisan virtual yang berada di atas remote cloud yang sudah ada:

```
Your Files → Crypt Remote (encrypts) → Cloud Remote (uploads encrypted blobs)
```

Saat Anda membaca file:

```
Cloud Remote (encrypted blobs) → Crypt Remote (decrypts) → Your Files
```

Penyedia cloud hanya menyimpan data terenkripsi. Nama file, nama direktori, dan isi file semuanya dienkripsi. Penyedia tidak dapat melihat apa yang Anda simpan.

## Cara Kerja Enkripsi Crypt

### Standar enkripsi

- **Isi file**: AES-256 dalam mode CTR dengan autentikasi HMAC-SHA256.
- **Nama file**: AES-256 EME (encrypt-mix-encrypt) dengan opsi obfuscation.
- **Nama direktori**: Sama seperti nama file (dienkripsi secara default).

### Apa saja yang dienkripsi

| Komponen | Mode Standar | Dengan Enkripsi Nama |
|-----------|:---:|:---:|
| Isi file | ✅ Terenkripsi | ✅ Terenkripsi |
| Nama file | ❌ Terlihat | ✅ Terenkripsi |
| Nama direktori | ❌ Terlihat | ✅ Terenkripsi |
| Ukuran file | ❌ Terlihat (sedikit di-padding) | ❌ Terlihat (sedikit di-padding) |
| Struktur direktori | ❌ Terlihat | ✅ Terenkripsi |

**Rekomendasi**: Selalu aktifkan enkripsi nama file untuk privasi maksimal.

## Mengatur Crypt di RcloneView

### Langkah 1: Miliki remote yang sudah ada

Pertama, tambahkan penyimpanan cloud Anda sebagai remote biasa (misalnya, Google Drive, S3, Backblaze B2):

<img src="/support/images/en/blog/new-remote.png" alt="Add base cloud remote" class="img-large img-center" />

### Langkah 2: Buat remote crypt di atasnya

Tambahkan remote baru dengan tipe **Crypt**. Konfigurasikan agar mengarah ke folder pada remote Anda yang sudah ada:

- **Remote**: `gdrive:encrypted-backup/` (folder di Google Drive Anda).
- **File name encryption**: Standard (encrypted).
- **Directory name encryption**: True.
- **Password**: Kata sandi yang kuat (ini adalah kunci enkripsi Anda — **jangan sampai hilang**).
- **Password2 (salt)**: Kata sandi tambahan untuk keamanan ekstra.

### Langkah 3: Gunakan remote crypt

Sekarang saat Anda menjelajahi atau mentransfer file melalui remote crypt, semuanya dienkripsi secara transparan. Unggah melalui remote crypt → file tiba dalam keadaan terenkripsi di Google Drive. Unduh melalui remote crypt → file didekripsi secara otomatis.

## Alur Kerja Pencadangan Terenkripsi

### Menyiapkan job pencadangan terenkripsi

Buat job Copy dari penyimpanan lokal Anda (atau cloud lain) ke remote crypt:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create encrypted backup job" class="img-large img-center" />

### Jadwalkan pencadangan terenkripsi harian

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule encrypted backup" class="img-large img-center" />

### Apa yang dilihat penyedia cloud

Jika seseorang menjelajahi Google Drive Anda, mereka akan melihat:

```
encrypted-backup/
  q6r2v8s3f1g4h5j6k7l8/
    a1b2c3d4e5f6g7h8i9j0k1l2m3n4.bin
    p5q6r7s8t9u0v1w2x3y4z5a6b7c8.bin
  m9n0o1p2q3r4s5t6u7v8/
    d9e0f1g2h3i4j5k6l7m8n9o0p1q2.bin
```

Nama file tidak dapat dibaca. Isinya terenkripsi. Bahkan struktur foldernya pun tersembunyi.

### Apa yang Anda lihat (melalui remote crypt)

```
encrypted-backup/
  Documents/
    tax-return-2025.pdf
    passport-scan.jpg
  Medical/
    lab-results-march.pdf
```

File normal, dapat dibaca — didekripsi secara otomatis (on the fly).

## Kasus Penggunaan Praktis

### 1) Pencadangan Google Drive terenkripsi

Google Drive pribadi Anda untuk penggunaan sehari-hari. Pencadangan terenkripsi untuk file sensitif pada Google Drive yang sama:

```
gdrive:Documents/     ← Normal files (Google can see)
gdrive-crypt:Sensitive/ ← Encrypted (Google sees only blobs)
```

### 2) Arsip S3 terenkripsi

Arsipkan data sensitif di S3 dengan enkripsi sisi klien. Bahkan jika akun AWS Anda diretas, data tersebut tidak dapat dibaca tanpa kata sandi Anda.

### 3) Penyimpanan kepatuhan HIPAA/regulasi

Data kesehatan, hukum, dan keuangan yang memerlukan enkripsi saat disimpan (at rest). Remote crypt menyediakan enkripsi sisi klien yang dapat diverifikasi.

### 4) Perlindungan data lintas batas negara

Menyimpan data di wilayah cloud tempat Anda tidak sepenuhnya mempercayai kebijakan akses data penyedia.

## Verifikasi Pencadangan Terenkripsi

Gunakan Folder Comparison melalui remote crypt untuk memverifikasi bahwa pencadangan terenkripsi Anda cocok dengan sumbernya:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify encrypted backup" class="img-large img-center" />

## Peringatan Penting

### Jangan sampai kehilangan kata sandi Anda

Tidak ada pemulihan "lupa kata sandi". Jika Anda kehilangan kata sandi crypt, data terenkripsi Anda tidak dapat diakses secara permanen. Tidak ada yang bisa memulihkannya — bukan rclone, bukan Google, bukan Amazon.

**Simpan kata sandi Anda dengan aman:**

- Tuliskan dan simpan di brankas fisik.
- Gunakan pengelola kata sandi (password manager) yang terpisah dari cloud yang Anda enkripsi.
- Simpan setidaknya dua salinan di lokasi berbeda.

### Jangan mengubah file terenkripsi secara langsung

Jangan pernah mengedit blob terenkripsi secara langsung di penyedia cloud. Selalu akses melalui remote crypt. Modifikasi langsung akan merusak file.

### Dampak kinerja

Enkripsi menambah sedikit beban CPU:

- Dapat diabaikan pada desktop dan laptop modern.
- Terasa pada Raspberry Pi atau perangkat berdaya rendah.
- Tidak memengaruhi kecepatan jaringan (enkripsi terjadi sebelum unggah).

## Beberapa Remote Crypt

Anda dapat membuat beberapa remote crypt berbeda untuk tujuan yang berbeda:

| Remote Crypt | Mengarah Ke | Kata Sandi | Kasus Penggunaan |
|-------------|-----------|----------|----------|
| crypt-personal | gdrive:encrypted/ | Password A | File sensitif pribadi |
| crypt-work | s3:work-encrypted/ | Password B | Dokumen kerja |
| crypt-archive | b2:archive-encrypted/ | Password C | Arsip jangka panjang |

Masing-masing menggunakan kata sandi berbeda dan penyimpanan dasar yang berbeda.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan penyimpanan cloud Anda** sebagai remote biasa.
3. **Buat remote crypt** yang mengarah ke folder pada cloud tersebut.
4. **Tetapkan kata sandi yang kuat** dan simpan dengan aman.
5. **Gunakan remote crypt** untuk semua operasi file sensitif.
6. **Jadwalkan pencadangan terenkripsi** untuk otomatisasi.

Data Anda. Kunci Anda. Kendali Anda.

---

**Panduan Terkait:**

- [Membuat Job Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Penjadwalan Job](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Membandingkan Isi Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Penyimpanan Cloud yang Sesuai HIPAA](https://rcloneview.com/support/blog/cloud-storage-hipaa-compliance-healthcare-rcloneview)

<CloudSupportGrid />
