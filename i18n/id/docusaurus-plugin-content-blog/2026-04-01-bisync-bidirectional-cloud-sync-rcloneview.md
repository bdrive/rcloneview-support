---
slug: bisync-bidirectional-cloud-sync-rcloneview
title: "Bisync: Sinkronisasi Cloud Dua Arah Sejati dengan RcloneView"
authors:
  - tayson
description: "Gunakan fitur bisync milik rclone melalui RcloneView untuk menjaga dua lokasi cloud tetap tersinkronisasi dalam kedua arah. Pelajari kapan menggunakan bisync, cara mengaturnya, dan cara menangani konflik."
keywords:
  - bisync rcloneview
  - sinkronisasi cloud dua arah rclone
  - panduan rclone bisync
  - sinkronisasi cloud dua arah
  - sinkronisasi kedua arah cloud
  - pengaturan bisync rcloneview
  - sinkronisasi dua arah rclone
  - sinkronisasi dua arah google drive
  - sinkronisasi dua arah onedrive
  - cermin dua arah folder cloud
tags:
  - RcloneView
  - sync
  - cloud-sync
  - feature
  - guide
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Bisync: Sinkronisasi Cloud Dua Arah Sejati dengan RcloneView

> Sync standar rclone bersifat satu arah — ia membuat tujuan menyerupai sumber. Bisync melangkah lebih jauh: perubahan di salah satu lokasi akan diteruskan ke lokasi lainnya. Jika Anda menambahkan file di Lokasi A, file itu akan muncul di Lokasi B, dan sebaliknya. Berikut cara mengonfigurasinya di RcloneView.

Sebagian besar skenario sinkronisasi cloud bersifat satu arah: mesin lokal melakukan pencadangan ke cloud, atau cloud utama mencerminkan ke cloud cadangan. Namun beberapa alur kerja membutuhkan sinkronisasi dua arah sejati — folder bersama yang diedit oleh dua orang, mesin kerja dan mesin rumah yang harus tetap selaras, atau dua akun cloud yang berperan setara. Perintah `bisync` milik rclone menyediakan ini, dan RcloneView membuatnya dapat dikonfigurasi tanpa command line.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Sync vs Bisync: Apa Bedanya?

| Perilaku | rclone sync | rclone bisync |
|----------|------------|--------------|
| Arah | Satu arah (sumber → tujuan) | Dua arah (kedua arah) |
| Penghapusan | Menghapus dari tujuan jika hilang di sumber | Meneruskan penghapusan di kedua arah |
| Konflik | Sumber selalu menang | Perlu penanganan konflik secara eksplisit |
| Risiko kehilangan data | Mungkin terjadi jika arah salah | Risiko lebih rendah; kedua sisi diperiksa |
| Kompleksitas | Sederhana | Lebih kompleks; membutuhkan pengaturan yang cermat |

## Kapan Menggunakan Bisync

**Gunakan bisync ketika:**
- Dua orang atau sistem sama-sama berkontribusi perubahan ke folder yang sama.
- Anda mengedit file di beberapa perangkat yang tidak selalu online secara bersamaan.
- Anda menjaga dua akun cloud sebagai cermin aktif dengan perubahan dari kedua sisi.

**Gunakan Sync biasa ketika:**
- Anda memiliki sumber (source) dan cadangan (secondary) yang jelas.
- Hanya satu sisi yang membuat file baru — sisi lainnya hanya untuk dibaca (read-only).
- Kesederhanaan dan prediktabilitas menjadi prioritas.

## Menyiapkan Bisync di RcloneView

Bisync membutuhkan inisialisasi satu kali (resync) untuk menetapkan status dasar (baseline) sebelum menjalankan proses berikutnya untuk melacak perubahan.

### Langkah 1 — Tambahkan dua remote Anda

Pastikan kedua lokasi telah dikonfigurasi sebagai remote di RcloneView. Contohnya:
- `gdrive-work:/Projects/Active/` (akun kerja Google Drive)
- `onedrive-home:/Projects/Active/` (akun rumah OneDrive)

<img src="/support/images/en/blog/new-remote.png" alt="Configure remotes for bisync in RcloneView" class="img-large img-center" />

### Langkah 2 — Jalankan resync awal

Jalankan bisync pertama harus menggunakan `--resync` untuk menetapkan baseline. Di **Terminal** RcloneView:

```bash
rclone bisync gdrive-work:/Projects/Active/ onedrive-home:/Projects/Active/ --resync --verbose
```

Perintah ini membuat file status baseline (disimpan di `~/.cache/rclone/bisync/`) yang digunakan bisync untuk mendeteksi perubahan pada proses berikutnya. Resync membuat kedua sisi identik dengan menyalin file yang lebih baru ke masing-masing sisi.

### Langkah 3 — Buat Job Bisync di RcloneView

1. Buka **Jobs** di RcloneView.
2. Pilih **Custom Command** atau gunakan panel Terminal.
3. Masukkan perintah bisync untuk proses yang berkelanjutan:

```bash
rclone bisync gdrive-work:/Projects/Active/ onedrive-home:/Projects/Active/ --verbose --log-file /tmp/bisync.log
```

4. Simpan sebagai job dan jadwalkan agar berjalan setiap jam atau setiap hari.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule bisync job in RcloneView" class="img-large img-center" />

## Penanganan Konflik

Bisync mendeteksi konflik ketika sebuah file dimodifikasi di kedua lokasi di antara dua kali proses berjalan. Secara default, rclone bisync menandai konflik ini dan tidak menimpa versi mana pun.

Tambahkan `--conflict-resolve newer` untuk secara otomatis memilih file yang lebih baru:

```bash
rclone bisync path1 path2 --conflict-resolve newer
```

Atau `--conflict-resolve larger` untuk memilih file yang lebih besar (berguna untuk skenario pertumbuhan dokumen).

File yang berkonflik dan tidak terselesaikan secara otomatis akan diganti namanya dengan akhiran `.conflict` sehingga kedua versi tetap terjaga.

## Flag Bisync yang Umum Digunakan

| Flag | Tujuan |
|------|---------|
| `--resync` | Menginisialisasi atau menetapkan ulang baseline (gunakan sekali) |
| `--conflict-resolve newer` | Menyelesaikan konflik secara otomatis dengan memilih file yang lebih baru |
| `--filters-file /path/to/filters` | Menerapkan aturan include/exclude |
| `--max-delete 10` | Membatalkan proses jika lebih dari 10 file akan dihapus (keamanan) |
| `--dry-run` | Melihat pratinjau perubahan yang akan dilakukan tanpa benar-benar menjalankannya |
| `--verbose` | Output detail untuk keperluan debugging |

Flag `--max-delete` sangat penting — flag ini mencegah bisync secara tidak sengaja menghapus banyak file akibat kesalahan konfigurasi.

## Memantau Proses Bisync

Periksa output bisync di **Job History** RcloneView setelah setiap proses berjalan:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor bisync results in RcloneView" class="img-large img-center" />

Proses bisync yang sehat menampilkan:
- File yang disalin dari path1 ke path2
- File yang disalin dari path2 ke path1
- Konflik yang terdeteksi dan bagaimana konflik itu diselesaikan
- Total waktu dan statistik transfer

## Keterbatasan Bisync

- **Tidak cocok untuk pengeditan bersamaan pada file yang sama** — bisync membandingkan antar proses yang berjalan, bukan secara real time.
- **Penerusan penghapusan bisa berbahaya** — file yang dihapus di satu sisi akan dihapus di sisi lain setelah proses berikutnya berjalan.
- **Membutuhkan status yang stabil di antara setiap proses** — jika sebuah proses gagal di tengah jalan, jalankan ulang dengan `--resync` untuk membangun ulang baseline.
- **Path besar berjalan lebih lambat** — perbandingan baseline memindai kedua lokasi secara menyeluruh pada setiap proses.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Konfigurasikan kedua remote** di RcloneView.
3. **Jalankan `--resync` awal** dari terminal RcloneView untuk menetapkan baseline.
4. **Jadwalkan proses bisync secara berkala** untuk sinkronisasi yang berkelanjutan.

Bisync menghadirkan sinkronisasi dua arah sejati untuk pasangan remote apa pun yang didukung rclone — disk lokal, penyedia cloud, share NAS, dan lainnya.

---

**Panduan Terkait:**

- [Sync, Copy, Move — Perbedaan yang Dijelaskan](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [Aturan Filter dan Sinkronisasi Selektif](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Menghindari Kehilangan Data akibat Arah Sync yang Salah](https://rcloneview.com/support/blog/avoid-data-loss-wrong-sync-direction-rcloneview)

<CloudSupportGrid />
