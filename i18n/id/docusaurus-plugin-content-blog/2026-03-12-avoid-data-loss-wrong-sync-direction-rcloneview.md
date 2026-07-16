---
slug: avoid-data-loss-wrong-sync-direction-rcloneview
title: "Cara Sinkronisasi Dapat Menghapus File Anda — Hindari Kehilangan Data akibat Arah Sinkronisasi yang Salah"
authors:
  - tayson
description: "Arah sinkronisasi yang salah dapat menghapus semua file Anda. Pelajari cara kerja rclone sync, mengapa ia menghapus file, dan cara menggunakan dry run serta perbandingan folder untuk mencegah bencana."
keywords:
  - sync deleted my files
  - rclone sync data loss
  - wrong sync direction
  - sync vs copy safe
  - prevent sync data loss
  - cloud sync deleted files
  - rclone dry run
  - safe cloud sync
  - sync direction wrong
  - cloud sync mistake fix
tags:
  - sync
  - data-loss
  - safety
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cara Sinkronisasi Dapat Menghapus File Anda — Hindari Kehilangan Data akibat Arah Sinkronisasi yang Salah

> "Saya menjalankan rclone sync dan sekarang 500 GB file saya hilang." Ini adalah salah satu bencana penyimpanan cloud yang paling umum terjadi. Sync sangat kuat — tapi ia menghapus file. Berikut cara menggunakannya dengan aman.

Sync membuat tujuan (destination) sama persis dengan sumber (source). Ini termasuk menghapus file di tujuan yang tidak ada di sumber. Jika Anda secara tidak sengaja menukar sumber dan tujuan, atau melakukan sinkronisasi dari folder kosong, Sync akan dengan senang hati menghapus semua yang ada di tujuan. Panduan ini menjelaskan cara mencegah hal itu.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Bagaimana Sync Menghapus File

```
Source: Folder A (3 files: doc1, doc2, doc3)
Destination: Folder B (5 files: doc1, doc2, doc3, report1, report2)

After Sync A → B:
Folder B: doc1, doc2, doc3
(report1 and report2 are DELETED)
```

Sync membuat B identik dengan A. File-file yang hanya ada di B pun dihapus.

## Bencana yang Umum Terjadi

### Sumber dan tujuan tertukar

Anda bermaksud melakukan sinkronisasi `Cloud → NAS` tetapi mengetik `NAS → Cloud`. Jika NAS kosong (drive baru), Sync akan menghapus semua isi Cloud.

### Sinkronisasi dari folder yang kosong atau salah

Mengarahkan Sync ke sumber yang kosong berarti "buat tujuan menjadi kosong juga."

### Aturan filter yang salah

Filter yang mengecualikan semuanya membuat sumber terlihat kosong bagi Sync. Semua isi di tujuan akan terhapus.

## Langkah-Langkah Keamanan di RcloneView

### 1) Selalu gunakan Dry Run terlebih dahulu

Dry run menunjukkan dengan tepat apa yang akan dilakukan Sync — tanpa benar-benar melakukannya. Tinjau daftar file yang akan dihapus sebelum menjalankannya secara nyata.

### 2) Gunakan Perbandingan Folder sebelum Sync

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare before syncing" class="img-large img-center" />

Bandingkan sumber dan tujuan. Perhatikan file "Right only" — itulah yang akan dihapus oleh Sync. Apakah Anda rela kehilangan file-file tersebut?

### 3) Gunakan Copy alih-alih Sync untuk pencadangan

Copy tidak pernah menghapus file. Jika Anda sedang melakukan pencadangan, Copy hampir selalu menjadi pilihan yang tepat.

| Situation | Use Copy | Use Sync |
|-----------|:--------:|:--------:|
| Backup | ✅ | ❌ |
| Mirror (exact replica) | ❌ | ✅ |
| Initial migration | ✅ | ❌ |
| Ongoing replication | ❌ | ✅ (carefully) |

### 4) Periksa ulang sumber dan tujuan

Di penjelajah dua panel RcloneView, kenali dengan jelas mana sisi yang menjadi sumber dan mana yang menjadi tujuan sebelum menjalankan proses apa pun.

### 5) Gunakan `--backup-dir`

Rclone mendukung `--backup-dir` — file yang seharusnya dihapus akan dipindahkan ke direktori cadangan alih-alih dihapus secara permanen. Ini memberikan Anda jaring pengaman.

## Pemulihan Setelah Sync yang Tidak Disengaja

Jika Anda sudah terlanjur menjalankan Sync yang salah:

1. **Hentikan segera** — Jangan jalankan Sync lagi.
2. **Periksa tempat sampah (trash) penyedia cloud** — Google Drive (30 hari), OneDrive (93 hari), Dropbox (30-180 hari).
3. **Periksa versioning** — Versioning S3 dan B2 menyimpan salinan lama.
4. **Pulihkan dari pencadangan terpisah** — Jika Anda memiliki pencadangan berbasis Copy, file Anda aman di sana.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Gunakan Perbandingan Folder** sebelum menjalankan operasi Sync apa pun.
3. **Jalankan Dry Run** untuk melihat pratinjau perubahan.
4. **Gunakan Copy untuk pencadangan** — simpan Sync untuk mirroring yang memang disengaja.
5. **Pertimbangkan `--backup-dir`** untuk operasi Sync sebagai jaring pengaman.

Sync adalah alat yang tajam. Gunakan dengan hati-hati.

---

**Related Guides:**

- [Penjelasan Sync vs Copy vs Move](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [Bandingkan Isi Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Memulihkan File yang Terhapus Secara Tidak Sengaja](https://rcloneview.com/support/blog/recover-accidentally-deleted-cloud-files-rcloneview)

<CloudSupportGrid />
