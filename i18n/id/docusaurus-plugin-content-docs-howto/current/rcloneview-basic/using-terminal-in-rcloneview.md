---
sidebar_position: 13
description: Jalankan perintah CLI rclone langsung di dalam Terminal bawaan RcloneView untuk pengujian, pengelolaan remote, dan pemecahan masalah.
keywords:
  - rcloneview
  - rclone
  - terminal
  - cli
  - pengelolaan remote
  - pemecahan masalah
  - rclone config
tags:
  - RcloneView
  - Terminal
  - CLI
  - rclone
  - troubleshooting
date: 2025-12-04
author: tayson
---

# Menggunakan Terminal di RcloneView

RcloneView menyertakan Terminal bawaan sehingga Anda dapat menjalankan perintah CLI `rclone` secara penuh tanpa membuka CMD, PowerShell, atau shell sistem. Fitur ini sangat cocok untuk pengujian cepat, mengelola remote, atau merekam log tanpa perlu keluar dari aplikasi.

Panduan ini menjelaskan cara membuka Terminal, menjalankan perintah `rclone`, memperbesar/memperkecil tampilan, dan menggunakan opsi salin untuk membagikan hasil.

---

## Membuka Terminal

- Klik tab **`Terminal`** di bagian bawah RcloneView.  
  <img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-bottom.png" alt="terminal bottom" class="img-medium img-center" />
- Terminal bekerja seperti antarmuka baris perintah `rclone` standar dan menjalankan perintah dalam konteks RcloneView saat ini.

---

## Menampilkan Daftar Perintah rclone yang Tersedia

Ketik rclone lalu tekan spasi untuk secara otomatis menampilkan semua perintah yang didukung.  
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone.png" alt="terminal input rclone" class="img-medium img-center" />

---

## Melihat Bantuan dan Detail Remote (`rclone about`)

- Untuk bantuan umum tentang `about`:  
  <img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about.png" alt="terminal input rclone about" class="img-medium img-center" />
- Untuk mendapatkan informasi penyimpanan pada remote tertentu (contoh: `mygoogle`):
  ```bash
  rclone about "mygoogle:"
  ```
  <img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about-mygoogle.png" alt="terminal input rclone about my google" class="img-medium img-center" />

Contoh hasil:  
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone-about-mygoogle-result.png" alt="terminal about my google result" class="img-medium img-center" />

---

## Menampilkan Semua Remote yang Terkonfigurasi

Gunakan perintah `listremotes` untuk memastikan remote mana saja yang tersedia:

```bash
rclone listremotes
```

<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-listremotes.png" alt="rclone listremotes" class="img-medium img-center" />

---

## Memperbesar atau Memperkecil Tampilan Terminal

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-expand.png" alt="terminal expand" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-shrink.png" alt="terminal shrink" class="img-medium img-center" />
</div>

- **Perbesar (Expand)**: Beralih ke Terminal layar penuh untuk output yang panjang.
- **Perkecil (Shrink)**: Kembali ke tata letak default.

---

## Membuat Remote melalui CLI (`rclone config create`)

Contoh: membuat remote Google Drive bernama `mygoogledrive` lalu memverifikasinya:

```bash
rclone config create mygoogledrive drive
rclone listremotes
```

<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-config-create-drive.png" alt="rclone config create drive" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/terminal/rclone-input-config-create-check.png" alt="rclone config create check" class="img-medium img-center" />

---

## Copy, Paste, dan Copy All

Pilih output Terminal mana pun untuk membuka menu konteks, lalu pilih **Copy**, **Paste**, atau **Copy All**.  
<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-select-copy.png" alt="terminal select copy" class="img-medium img-center" />

Fitur ini berguna untuk membagikan log kepada tim dukungan atau menyimpan hasil ke dalam dokumentasi.

---

## Kasus Penggunaan yang Direkomendasikan

- Menguji perintah `rclone` tingkat lanjut (`lsf`, `tree`, flag backend) sebelum diotomatisasi.
- Memvalidasi skrip atau perintah sisi server di dalam RcloneView.
- Mengelola atau membuat remote dengan cepat saat jalur GUI terasa lebih lambat.

:::caution Berhati-hatilah dengan perintah yang bersifat destruktif
Perintah seperti `delete`, `purge`, atau flag `sync` yang salah dapat menghapus data secara permanen. Periksa kembali path dan remote sebelum menjalankannya di Terminal.
:::
