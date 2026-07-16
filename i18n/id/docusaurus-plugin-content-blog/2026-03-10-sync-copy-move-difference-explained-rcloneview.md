---
slug: sync-copy-move-difference-explained-rcloneview
title: "Sync vs Copy vs Move — Operasi Transfer Cloud Mana yang Harus Anda Gunakan?"
authors:
  - tayson
description: "Bingung kapan harus menggunakan Sync, Copy, atau Move untuk transfer cloud? Panduan ini menjelaskan perbedaannya dan kapan masing-masing menjadi pilihan yang tepat di RcloneView."
keywords:
  - rclone sync vs copy
  - cloud sync vs copy difference
  - when to use sync or copy
  - rclone move command
  - cloud transfer operations
  - sync copy move explained
  - rclone operations guide
  - cloud file operations
  - which cloud sync type
  - safe cloud transfer method
tags:
  - sync
  - copy
  - move
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sync vs Copy vs Move — Operasi Transfer Cloud Mana yang Harus Anda Gunakan?

> Anda ingin mentransfer file antar-cloud. RcloneView menawarkan Sync, Copy, dan Move. Ketiganya terdengar mirip, tetapi memilih yang salah bisa menghapus file yang tidak ingin Anda hilangkan. Berikut cara kerja masing-masing dan kapan harus menggunakannya.

Ini adalah salah satu keputusan terpenting dalam manajemen file cloud. Setiap operasi memiliki perilaku berbeda terkait apa yang terjadi pada file yang ada di tujuan tetapi tidak ada di sumber. Memahami hal ini mencegah kehilangan data yang tidak disengaja.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Tiga Operasi Ini

### Copy

**Yang dilakukan**: Menyalin file dari sumber ke tujuan. Jika sebuah file sudah ada di tujuan dan identik, file tersebut dilewati. Jika ada tetapi berbeda, file tersebut ditimpa.

**Yang tidak dilakukan**: Menghapus apa pun dari tujuan. Tidak pernah.

```
Source:      A, B, C
Destination: B, D
After Copy:  B, D, A, C  (D is untouched, A and C are added)
```

### Sync

**Yang dilakukan**: Membuat tujuan identik dengan sumber. Menyalin file baru dan yang berubah. **Menghapus file dari tujuan yang tidak ada di sumber.**

```
Source:      A, B, C
Destination: B, D
After Sync:  A, B, C  (D is deleted! A and C are added)
```

### Move

**Yang dilakukan**: Seperti Copy, tetapi **menghapus file dari sumber** setelah berhasil ditransfer.

```
Source:      A, B, C
Destination: B, D
After Move:
  Source: (empty)
  Destination: B, D, A, C
```

## Referensi Cepat

| Behavior | Copy | Sync | Move |
|----------|:----:|:----:|:----:|
| Adds new files to destination | ✅ | ✅ | ✅ |
| Updates changed files | ✅ | ✅ | ✅ |
| Deletes from destination | ❌ | ✅ | ❌ |
| Deletes from source | ❌ | ❌ | ✅ |
| Safe for backups | ✅ | ⚠️ | ❌ |
| Creates exact mirror | ❌ | ✅ | ❌ |

## Kapan Menggunakan Masing-Masing

### Gunakan Copy ketika:

- **Melakukan pencadangan** — Anda menginginkan jaring pengaman. Copy tidak pernah menghapus dari tujuan, jadi meskipun Anda menghapus file dari sumber, cadangan tetap menyimpannya.
- **Migrasi awal** — Memindahkan data ke cloud baru untuk pertama kalinya.
- **Menambahkan file** — Anda ingin menambahkan konten baru tanpa memengaruhi file yang sudah ada.
- **Anda tidak yakin** — Copy adalah default paling aman. Copy tidak bisa kehilangan data di tujuan.

**Contoh:**
- Pencadangan harian: Google Drive → Backblaze B2.
- Migrasi awal: OneDrive → Google Drive.
- Pengiriman ke klien: Copy file yang sudah selesai ke Dropbox klien.

### Gunakan Sync ketika:

- **Mirroring** — Tujuan harus menjadi salinan persis dari sumber setiap saat.
- **Folder kerja aktif** — Anda ingin tujuan mencerminkan semua perubahan, termasuk penghapusan.
- **Pembersihan penyimpanan** — File yang dihapus dari sumber juga harus dihapus dari mirror.

**Contoh:**
- Menjaga mirror NAS di S3 (replika persis).
- Mirroring folder proyek antara dua anggota tim.
- Menjaga server staging tetap sinkron dengan folder aset produksi.

**Peringatan**: Sync menghapus file. Selalu jalankan **dry run** terlebih dahulu untuk melihat pratinjau apa yang akan dihapus.

### Gunakan Move ketika:

- **Pengarsipan** — Memindahkan file lama ke penyimpanan murah dan menghapusnya dari sumber yang mahal.
- **Alur pemrosesan** — File masuk ke inbox, diproses, lalu dipindahkan ke arsip.
- **Membebaskan ruang** — Memindahkan file dari drive yang penuh ke penyimpanan cloud, menghapus salinan lokalnya.

**Contoh:**
- Memindahkan file yang lebih lama dari 90 hari dari Google Drive ke S3 Glacier.
- Memindahkan upload yang telah diproses dari bucket staging ke bucket arsip.
- Memindahkan foto dari cadangan ponsel yang penuh ke arsip cloud.

## Jaring Pengaman Dry Run

Sebelum menjalankan operasi apa pun (terutama Sync), gunakan **dry run** untuk melihat pratinjau persis apa yang akan terjadi:

- File mana yang akan disalin.
- File mana yang akan dihapus (khusus Sync).
- File mana yang akan dipindahkan (khusus Move).

Pratinjau ini tidak memakan biaya apa pun dan mencegah kejutan.

## Perbandingan Folder Terlebih Dahulu

Sebelum melakukan transfer apa pun, gunakan Folder Comparison untuk memahami kondisi saat ini:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare before transferring" class="img-large img-center" />

Ini menunjukkan:
- File yang ada di kedua lokasi (dan apakah cocok).
- File yang hanya ada di sumber.
- File yang hanya ada di tujuan.

## Kesalahan Umum

### Menggunakan Sync untuk pencadangan

```
Day 1: Sync Google Drive → S3  (all files backed up)
Day 2: Accidentally delete a folder from Google Drive
Day 3: Sync Google Drive → S3  (folder deleted from S3 too!)
```

Gunakan **Copy** untuk pencadangan agar hal ini tidak terjadi.

### Menggunakan Copy saat Anda menginginkan mirror

```
Day 1: Copy Source → Dest  (files transferred)
Day 2: Delete old files from Source
Day 3: Copy Source → Dest  (old files still on Dest, taking up space)
```

Jika Anda ingin tujuan tetap bersih, gunakan **Sync**.

### Menggunakan Move saat Anda menginginkan kedua salinan

Move menghapus sumber. Jika Anda membutuhkan file di kedua lokasi, gunakan **Copy**.

## Diagram Alur Keputusan

1. **Apakah Anda memerlukan file di kedua lokasi?**
   - Ya → Copy atau Sync.
   - Tidak (hapus dari sumber) → Move.

2. **Haruskah tujuan sama persis dengan sumber?**
   - Ya (termasuk penghapusan) → Sync.
   - Tidak (cukup tambahkan file baru) → Copy.

3. **Apakah ini pencadangan?**
   - Ya → Hampir selalu Copy.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Bandingkan folder** untuk memahami kondisi saat ini.
3. **Pilih operasi yang tepat** sesuai dengan tujuan Anda.
4. **Dry run terlebih dahulu** untuk melihat pratinjau perubahan.
5. **Jalankan** dengan percaya diri.

Operasi yang tepat untuk pekerjaan yang tepat. Jangan menebak — pahami.

---

**Panduan Terkait:**

- [Membuat Job Sync](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Membandingkan Isi Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Aturan Filter Rclone](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)

<CloudSupportGrid />
