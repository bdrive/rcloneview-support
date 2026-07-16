---
slug: rcloneview-terminal-rclone-cli-inside-gui
title: "RcloneView Terminal: Manfaatkan Sepenuhnya rclone CLI di Dalam GUI"
authors:
  - tayson
description: "Jalankan rclone CLI lengkap di dalam Terminal RcloneView dengan autocomplete, mode layar penuh, dan log yang dapat disalin--tanpa memerlukan shell terpisah."
keywords:
  - rclone terminal
  - rcloneview terminal
  - rclone cli gui
  - rclone commands
  - cloud storage cli tool
  - cloud automation
  - rclone beginners
  - rclone power users
  - cloud devops tools
  - rcloneview
tags:
  - sync
  - file-management
  - cli

---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView Terminal: Manfaatkan Sepenuhnya rclone CLI di Dalam GUI

> Jalankan setiap perintah rclone tanpa meninggalkan RcloneView. Terminal baru ini menghadirkan autocomplete, log yang dapat disalin, dan output layar penuh dalam jendela yang sama yang Anda gunakan untuk menjelajah, membandingkan, dan melakukan sinkronisasi.

RcloneView kini menyertakan Terminal bawaan sehingga Anda dapat menjalankan rclone CLI lengkap di dalam aplikasi -- tanpa perlu CMD, PowerShell, atau jendela Terminal tambahan. Pemula dapat mempelajari perintah dengan konteks visual, sementara engineer, power user, dan admin IT dapat mempertahankan flag otomasi, log verbose, dan alur scripting mereka tanpa perlu berpindah konteks.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa membawa CLI ke dalam GUI?

- Berhenti berpindah-pindah antara GUI untuk menjelajah dan shell untuk flag lanjutan atau diagnostik.
- Simpan output dan log rclone berdampingan dengan transfer, mount, dan pekerjaan terjadwal Anda.
- Ajarkan rekan tim rclone dengan aman melalui panduan visual UI, bukan terminal kosong.

## Apa itu RcloneView Terminal?

Terminal berada di bagian bawah workspace RcloneView dan menjalankan binary rclone yang sama dengan yang sudah Anda gunakan di aplikasi. Ketik `rclone` lalu tekan spasi untuk menampilkan semua perintah yang didukung, kemudian jalankan langsung--Windows, macOS, dan Linux semuanya memiliki pengalaman yang sama.

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-bottom.png" alt="Terminal tab in RcloneView" class="img-medium img-center" />

## Manfaat untuk pemula

- Tanpa stres pengaturan: rclone sudah terpasang, jadi Anda dapat berlatih perintah tanpa perlu menginstal atau mencari path sistem.
- Autocomplete memudahkan penemuan--ketik `rclone ` untuk melihat daftar perintah sebelum menjalankan apa pun.
- Output tetap berada di dalam aplikasi, memudahkan untuk menyalin, menjalankan ulang, atau membandingkan dengan yang terlihat di GUI.

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone.png" alt="Autocomplete list for rclone commands" class="img-medium img-center" />

## Manfaat untuk engineer & power user

- Pertahankan satu workspace untuk mount, Compare, Scheduler, dan eksperimen CLI--tanpa perlu berpindah konteks.
- Tangkap log verbose (`-vv`) untuk menelusuri masalah latensi cloud atau throttling API, lalu salin semuanya dengan satu klik.
- Konfigurasikan remote lebih cepat dengan `rclone config create`, validasikan backend, dan lanjutkan ke pekerjaan yang di-scripting.
- Gunakan tampilan expand untuk membaca output panjang atau skrip multi-baris dengan nyaman.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-expand.png" alt="Expanded Terminal view" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-shrink.png" alt="Shrink Terminal view" class="img-medium img-center" />
</div>

## Sekilas fitur utama

- **Command auto discovery**: Ketik `rclone` + spasi untuk melihat setiap perintah dalam konteksnya sebelum dieksekusi.
- **Full-screen Terminal**: Perbesar untuk listing panjang, perkecil saat Anda perlu melihat sekilas Compare atau Transfers.
- **Copy, Paste, Copy All**: Bagikan log dengan rekan tim atau support tanpa perlu mengekspor file.

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-select-copy.png" alt="Copy and paste options in the Terminal" class="img-medium img-center" />

## Perintah praktis untuk dicoba sekarang

### 1) Periksa penggunaan penyimpanan untuk sebuah remote
```bash
rclone about "mygoogle:"
```
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about-mygoogle.png" alt="rclone about output in RcloneView Terminal" class="img-medium img-center" />

### 2) Temukan setiap remote yang telah dikonfigurasi
```bash
rclone listremotes
```
<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-listremotes.png" alt="rclone listremotes in RcloneView Terminal" class="img-medium img-center" />

### 3) Buat remote baru melalui CLI
```bash
rclone config create mygoogledrive drive
rclone listremotes
```
<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-config-create-drive.png" alt="Create Google Drive remote with rclone config create" class="img-medium img-center" />

### 4) Pratinjau folder sebelum transfer
```bash
rclone lsf mygoogledrive:Projects --dirs-only --recursive --max-depth 2
```

### 5) Latihan migrasi dengan log verbose
```bash
rclone sync mygoogledrive:Projects s3backup:Projects --dry-run -vv --progress
```
Gunakan `--dry-run` untuk mensimulasikan perubahan dan `-vv` untuk mendeteksi backend yang lambat atau throttling sebelum menjalankan pekerjaan sesungguhnya.

## Kapan memilih GUI vs Terminal

- **Gunakan GUI** untuk drag-and-drop antar cloud, membandingkan perbedaan secara visual, menjadwalkan pekerjaan berulang, atau mount penyimpanan sebagai drive.
- **Gunakan Terminal** untuk menguji flag backend, menjalankan diagnostik ad-hoc, atau mengeksekusi perintah rclone lanjutan yang lebih cepat diketik daripada diklik.
- **Gunakan keduanya bersama**: pratinjau dengan Compare, sesuaikan rencana dengan flag CLI, lalu simpan alur kerja sebagai pekerjaan terjadwal.

## Mulai cepat dan keamanan

1. Buka tab **Terminal**, ketik `rclone `, dan pilih perintah dari daftar.
2. Mulai dengan perintah read-only (`listremotes`, `lsf`, `about`) sebelum menjalankan operasi sinkronisasi atau hapus apa pun.
3. Untuk panduan lengkap dengan tangkapan layar, lihat [Menggunakan Terminal di RcloneView](/howto/rcloneview-basic/using-terminal-in-rcloneview).

> Tips pro: Perintah destruktif seperti `delete`, `purge`, atau `sync` yang tidak diperiksa dapat menghapus data. Periksa kembali path dan remote sebelum menekan Enter.

## Kesimpulan

RcloneView Terminal menghadirkan rclone CLI lengkap berdampingan dengan alat visual yang sudah Anda gunakan, sehingga pemula dapat belajar lebih cepat dan pakar dapat bekerja lebih cepat. Cobalah sekarang untuk menjaga operasi cloud, eksperimen otomasi, dan log debug Anda dalam satu tempat.

<CloudSupportGrid />
