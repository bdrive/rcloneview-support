---
slug: min-age-max-age-time-based-filters-rcloneview
title: "Gunakan Filter Berbasis Waktu Min-Age dan Max-Age di RcloneView"
authors:
  - tayson
description: "Gunakan filter berbasis waktu min-age dan max-age di RcloneView untuk melakukan sinkronisasi, penyalinan, atau pencadangan hanya pada file yang dimodifikasi dalam rentang waktu tertentu. Transfer perubahan terbaru atau lewati file lama."
keywords:
  - rcloneview
  - min-age filter
  - max-age filter
  - time-based sync
  - rclone min-age
  - rclone max-age
  - sync recent files only
  - filter by date
  - incremental sync time
  - cloud sync filter date
tags:
  - feature
  - filters
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gunakan Filter Berbasis Waktu Min-Age dan Max-Age di RcloneView

> Tidak setiap tugas sinkronisasi perlu mentransfer semua file. Filter berbasis waktu RcloneView memungkinkan Anda menargetkan hanya file yang dimodifikasi dalam rentang waktu tertentu — sinkronkan perubahan hari ini, lewati file yang lebih lama dari 30 hari, atau cadangkan hanya unggahan terbaru.

Flag `--min-age` dan `--max-age` milik rclone adalah alat yang ampuh untuk mengontrol file mana yang ikut serta dalam operasi sinkronisasi, penyalinan, atau pemindahan berdasarkan waktu modifikasinya. RcloneView menampilkan opsi ini melalui antarmuka custom flags miliknya, memungkinkan kontrol yang presisi atas pemilihan file berbasis waktu tanpa perlu menyentuh command line.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Memahami Min-Age dan Max-Age

Kedua flag ini bekerja sebagai filter berbasis waktu pada tanggal modifikasi file:

- **`--max-age`**: Hanya menyertakan file yang dimodifikasi dalam rentang waktu yang ditentukan. File yang dimodifikasi 2 jam lalu lolos `--max-age 24h`. File yang dimodifikasi 3 hari lalu gagal pada `--max-age 24h` dan akan dilewati.
- **`--min-age`**: Hanya menyertakan file yang dimodifikasi *sebelum* rentang waktu yang ditentukan. File yang dimodifikasi 30 hari lalu lolos `--min-age 7d`. File yang dimodifikasi kemarin gagal pada `--min-age 7d` dan akan dilewati.

Pahami dengan cara ini:
- `--max-age 24h` = "file yang lebih baru dari 24 jam" (baru saja dimodifikasi)
- `--min-age 7d` = "file yang lebih lama dari 7 hari" (belum baru saja dimodifikasi)

## Format Waktu

Kedua flag menerima format waktu yang fleksibel:

| Format | Contoh | Arti |
|---|---|---|
| Durasi | `30s`, `5m`, `2h`, `7d`, `4w` | Detik, menit, jam, hari, minggu |
| Gabungan | `1d2h30m` | 1 hari, 2 jam, 30 menit |
| Tanggal absolut | `2026-04-01` | File sebelum/sesudah 1 April 2026 |
| Tanggal dan waktu | `2026-04-01T15:00:00` | File sebelum/sesudah 1 April pukul 15:00 |

Nilai durasi bersifat relatif terhadap waktu saat ini ketika tugas dijalankan.

## Kasus Penggunaan 1: Sinkronkan Hanya Perubahan Hari Ini

Ketika Anda memiliki penyimpanan cloud besar dengan data terabyte tetapi hanya ingin menyinkronkan file yang berubah hari ini:

```
--max-age 24h
```

Tambahkan ini ke kolom custom flags dalam konfigurasi tugas RcloneView. Tugas sinkronisasi hanya akan mempertimbangkan file yang dimodifikasi dalam 24 jam terakhir, secara drastis mengurangi waktu yang dihabiskan untuk mendata dan membandingkan file. Ini berguna untuk pencadangan inkremental harian di mana Anda tahu hanya sebagian kecil file yang berubah setiap harinya.

## Kasus Penggunaan 2: Mengarsipkan File Lama

Pindahkan file yang lebih lama dari 90 hari dari penyimpanan aktif ke penyimpanan dingin (cold storage):

```
--min-age 90d
```

Gunakan ini dengan operasi **move** (bukan sync) untuk mentransfer file yang lebih lama dari 90 hari dari Google Drive ke S3 Glacier. File-file tersebut dihapus dari Google Drive setelah transfer berhasil, membebaskan ruang pada penyimpanan aktif sambil tetap menyimpannya di arsip.

## Kasus Penggunaan 3: Sinkronisasi Rentang Waktu

Gabungkan kedua flag untuk menargetkan rentang waktu tertentu. Misalnya, sinkronkan file yang dimodifikasi antara 7 dan 30 hari lalu:

```
--min-age 7d --max-age 30d
```

Ini berguna untuk alur kerja arsip bertahap — file yang berusia kurang dari 7 hari tetap berada di penyimpanan aktif, file antara 7 dan 30 hari dipindahkan ke penyimpanan hangat (warm storage), dan file yang lebih lama dari 30 hari dipindahkan ke penyimpanan dingin.

## Kasus Penggunaan 4: Lewati File yang Baru Dimodifikasi

Selama migrasi, Anda mungkin ingin melewati file yang sedang aktif diedit untuk menghindari transfer pekerjaan yang belum selesai:

```
--min-age 1h
```

Ini memastikan hanya file yang sudah stabil setidaknya selama satu jam yang ditransfer. File yang sedang diedit atau disimpan akan ditinggalkan untuk siklus sinkronisasi berikutnya.

## Kasus Penggunaan 5: Pencadangan Malam Hari untuk Pekerjaan Terbaru

Untuk tugas pencadangan malam hari yang hanya menangkap pekerjaan hari itu:

```
--max-age 25h
```

Menggunakan 25 jam (bukan 24) memberikan tumpang tindih 1 jam dengan pencadangan hari sebelumnya, memastikan tidak ada file yang terlewat akibat perbedaan waktu antara jadwal pencadangan dan waktu modifikasi file.

## Menerapkan Filter Waktu di RcloneView

Dalam konfigurasi tugas RcloneView:

1. Buka pengaturan tugas sync atau copy.
2. Navigasi ke bagian opsi lanjutan atau custom flags.
3. Tambahkan `--max-age 24h` atau `--min-age 7d` (atau keduanya) ke kolom flags.
4. Simpan tugas dan jalankan.

Flag tersebut berlaku untuk setiap perbandingan file selama tugas berlangsung. File yang tidak memenuhi kriteria waktu akan sepenuhnya dilewati — tidak didata, dibandingkan, atau ditransfer. Hal ini dapat secara signifikan mengurangi durasi tugas untuk penyimpanan remote berskala besar.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a time-filtered sync job in RcloneView" class="img-large img-center" />

## Menggabungkan dengan Filter Lain

Filter berbasis waktu bekerja bersama opsi filter rclone lainnya:

- **Dengan include/exclude**: `--max-age 24h --include "*.pdf"` menyinkronkan hanya file PDF yang dimodifikasi dalam 24 jam terakhir.
- **Dengan filter ukuran**: `--max-age 7d --min-size 1M` menyinkronkan hanya file yang lebih besar dari 1 MB yang dimodifikasi dalam seminggu terakhir.
- **Dengan filter direktori**: `--max-age 24h --include "/projects/**"` membatasi cakupan ke direktori tertentu.

Kemampuan kombinasi ini memungkinkan Anda membangun aturan transfer yang presisi tanpa skrip yang rumit.

## Lakukan Dry Run Terlebih Dahulu

Sebelum menjalankan tugas berfilter waktu pada data produksi, gunakan mode dry run milik RcloneView untuk melihat pratinjau file mana yang akan terpengaruh. Dry run mendata file yang cocok dengan kriteria filter Anda tanpa benar-benar mentransfernya. Ini memastikan nilai `--min-age` dan `--max-age` Anda memilih file yang tepat sebelum menjalankan operasi sesungguhnya.

## Kesalahan Umum

- **Zona waktu**: Waktu modifikasi dibandingkan dalam UTC. Jika zona waktu lokal Anda memiliki selisih signifikan dari UTC, sesuaikan nilai durasi Anda atau gunakan format tanggal absolut.
- **Akurasi provider**: Beberapa provider cloud (terutama Google Drive) melaporkan waktu modifikasi dengan presisi terbatas. File yang dimodifikasi "hari ini" di Google Drive mungkin memiliki timestamp yang berbeda beberapa detik dari waktu modifikasi sebenarnya.
- **Sync vs. Copy dengan min-age**: Menggunakan `--min-age` dengan sync dapat berbahaya — sync menghapus file di tujuan yang tidak ada di sumber. Jika `--min-age` menyaring file terbaru dari daftar sumber, sync dapat menghapusnya di tujuan. Gunakan copy (bukan sync) saat menggunakan `--min-age` untuk menghindari penghapusan yang tidak diinginkan.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buat tugas sync atau copy di job manager.
3. Tambahkan flag `--max-age` atau `--min-age` di bagian custom flags.
4. Uji dengan dry run untuk memverifikasi pemilihan file.
5. Jadwalkan tugas untuk pencadangan otomatis berbasis waktu.

Filter berbasis waktu mengubah RcloneView menjadi alat presisi untuk pencadangan inkremental, pengarsipan bertahap, dan operasi sinkronisasi yang tertarget. Gunakan untuk mengurangi waktu transfer, meminimalkan penggunaan bandwidth, dan menerapkan alur kerja siklus hidup data yang canggih.

---

**Panduan Terkait:**

- [Membuat Tugas Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Menjalankan & Mengelola Tugas](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)
- [Penjadwalan Tugas](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
