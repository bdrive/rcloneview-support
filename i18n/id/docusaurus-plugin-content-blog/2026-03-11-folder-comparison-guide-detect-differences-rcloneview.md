---
slug: folder-comparison-guide-detect-differences-rcloneview
title: "Panduan Mendalam Perbandingan Folder — Deteksi Setiap Perbedaan Antara Lokasi Penyimpanan Cloud"
authors:
  - tayson
description: "Folder Comparison dari RcloneView menemukan file yang hilang, ketidaksesuaian ukuran, dan sync drift antara dua lokasi penyimpanan cloud mana pun. Panduan lengkap dengan contoh praktis."
keywords:
  - folder comparison tool
  - compare cloud folders
  - detect missing files cloud
  - cloud sync verification
  - compare google drive onedrive
  - folder diff tool
  - cloud storage comparison
  - verify cloud backup
  - find missing cloud files
  - cloud folder diff
tags:
  - RcloneView
  - folder-comparison
  - feature
  - cloud-storage
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Panduan Mendalam Perbandingan Folder — Deteksi Setiap Perbedaan Antara Lokasi Penyimpanan Cloud

> Anda menjalankan pencadangan minggu lalu. Apakah semua file berhasil dipindahkan? Apakah ukurannya sudah benar? Adakah yang hilang? Satu-satunya cara untuk memastikannya adalah dengan membandingkan sumber dan tujuan file demi file. Itulah yang dilakukan Folder Comparison.

Folder Comparison adalah salah satu fitur paling berharga dari RcloneView. Fitur ini membandingkan dua lokasi penyimpanan — kombinasi apa pun dari lokal, NAS, dan cloud — dan menunjukkan dengan tepat apa yang berbeda. File yang hilang, ketidaksesuaian ukuran, perbedaan tanggal, dan file yang hanya ada di satu sisi semuanya teridentifikasi dengan jelas.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Apa yang Ditampilkan Folder Comparison

### Kategori file

Setelah membandingkan dua lokasi, file dikategorikan sebagai berikut:

- **Match** — File ada di kedua lokasi dengan ukuran dan waktu modifikasi yang sama. ✅
- **Left only** — File hanya ada di sumber (sisi kiri). Mungkin perlu disalin.
- **Right only** — File hanya ada di tujuan (sisi kanan). Bisa jadi file yatim (orphan) atau salinan tambahan.
- **Different** — File ada di kedua lokasi tetapi berbeda dalam ukuran atau tanggal. Mungkin perlu diperbarui.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Comparison results" class="img-large img-center" />

## Kapan Menggunakan Folder Comparison

### 1) Setelah pencadangan — verifikasi kelengkapan

Setelah menjalankan job Copy atau Sync apa pun, bandingkan sumber dan tujuan:

- **Semua match?** → Pencadangan lengkap.
- **Ada file left only?** → File-file ini belum dicadangkan. Selidiki penyebabnya.
- **Ada file right only?** → File dihapus dari sumber tetapi masih ada di backup (wajar terjadi pada job Copy).

### 2) Sebelum sinkronisasi — pratinjau perubahan

Sebelum menjalankan job Sync, lakukan perbandingan untuk melihat apa yang akan berubah:

- **Left only** → Akan disalin ke tujuan.
- **Right only** → Akan DIHAPUS dari tujuan (hanya pada Sync!).
- **Different** → Akan ditimpa (overwrite).

Ini seperti simulasi visual (dry run).

### 3) Setelah migrasi — pastikan tidak ada yang hilang

Setelah bermigrasi dari satu cloud ke cloud lain:

- Bandingkan cloud lama vs cloud baru.
- Setiap file seharusnya berstatus "match" atau "right only" (sudah berada di tujuan).
- File dengan status "left only" berarti terlewat dan perlu ditransfer ulang.

### 4) Audit rutin — deteksi drift

Meskipun sinkronisasi terjadwal sudah berjalan, kesalahan bisa terjadi tanpa disadari. Perbandingan bulanan dapat menangkap:

- Transfer yang gagal tetapi tidak dilaporkan.
- File yang dilewati karena rate-limit.
- File yang rusak (ukuran berbeda).
- Token OAuth yang kedaluwarsa di tengah job.

## Contoh Praktis

### Membandingkan Google Drive dan backup S3

Sumber: Google Drive (utama).
Tujuan: S3 (backup).

**Hasil yang diharapkan setelah pencadangan yang sehat:**
- Sebagian besar file: Match ✅
- Beberapa "left only": File yang ditambahkan ke Google Drive sejak backup terakhir (akan disalin pada proses berikutnya).
- Sedikit "right only": File yang dihapus dari Google Drive tetapi masih tersimpan di backup (ini bagus — backup Anda berhasil mempertahankannya).

### Membandingkan dua volume NAS

Kiri: NAS Volume 1 (data aktif).
Kanan: NAS Volume 2 (mirror).

**Perbedaan apa pun menandakan mirror tidak lagi sinkron.** Segera perbaiki.

### Membandingkan sebelum menonaktifkan akun cloud

Sebelum membatalkan Dropbox:
1. Bandingkan Dropbox vs Google Drive (tempat Anda memigrasikan data).
2. Pastikan tidak ada file "left only" (semua data dari Dropbox sudah ada di Google Drive).
3. Baru setelah itu batalkan Dropbox.

## Opsi Perbandingan

### Metode pemeriksaan

- **Size** — Membandingkan ukuran file. Cepat, tetapi tidak mendeteksi kerusakan pada level bit.
- **Modification time** — Membandingkan stempel waktu. Berguna untuk mendeteksi file yang diperbarui.
- **Checksum** — Membandingkan hash file (MD5, SHA1). Paling lambat tetapi paling menyeluruh. Mendeteksi bit-rot dan kerusakan data.

Untuk data penting, gunakan checksum. Untuk pemeriksaan rutin, size + modification time sudah cukup.

### Tips performa

- **Direktori besar (10.000+ file)** — Perbandingan bisa memakan waktu beberapa menit. Bersabarlah.
- **Perbandingan lintas cloud** — Memerlukan pendaftaran (listing) dari kedua cloud. Gunakan `--fast-list` untuk efisiensi.
- **Persempit cakupan** — Bandingkan subdirektori tertentu, bukan seluruh cloud, agar hasilnya lebih cepat.

## Bertindak atas Perbedaan

Setelah perbandingan, Anda dapat langsung bertindak:

- **File left only** → Pilih dan Copy ke sisi kanan.
- **File different** → Pilih dan perbarui di sisi kanan.
- **File right only** → Tinjau apakah perlu dipertahankan atau dihapus.

Ini menjadikan Folder Comparison bukan hanya alat diagnostik, tetapi juga alat kerja (workflow tool).

## Integrasi dengan Batch Jobs

v1.3 Batch Jobs dapat menyertakan langkah perbandingan:

1. Copy sumber → tujuan.
2. Bandingkan sumber vs tujuan.
3. Laporkan perbedaan apa pun melalui Slack.

Alur kerja verifikasi otomatis setelah pencadangan ini memastikan Anda selalu mengetahui kondisi backup Anda.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan dua lokasi** yang ingin Anda bandingkan.
3. **Jalankan Folder Comparison** di antara keduanya.
4. **Tinjau hasilnya** — match, left only, right only, different.
5. **Bertindak atas perbedaan** — salin, perbarui, atau selidiki.

Jika Anda tidak bisa memverifikasinya, Anda tidak bisa mempercayainya.

---

**Panduan Terkait:**

- [Membandingkan Isi Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Membuat Job Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Riwayat Job dan Pemantauan](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
