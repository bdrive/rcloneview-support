---
sidebar_position: 13
description: Aktifkan App Lock di RcloneView untuk mewajibkan kata sandi saat aplikasi dijalankan dan melindungi remote, transfer, job, mount, serta database internal.
keywords:
  - rcloneview
  - app lock
  - kata sandi
  - keamanan
  - rclone_view.db
  - riwayat job
  - riwayat transfer
  - pengaturan
tags:
  - RcloneView
  - Tutorial
  - security
  - settings
  - password
date: 2025-12-08
author: tayson
---

# Menggunakan App Lock (Perlindungan Kata Sandi)

**App Lock** mewajibkan kata sandi saat RcloneView dijalankan atau dibuka kembali, sehingga melindungi remote, catatan transfer, job, informasi mount, riwayat job, dan database internal (`rclone_view.db`) Anda. Fitur ini ideal untuk PC bersama atau PC perusahaan yang dapat diakses oleh banyak pengguna.

<img src="/support/images/en/tutorials/applock/app-lock-locking.png" class="img-medium img-center" alt="App Lock enabled screen" />

## Mengapa menggunakan App Lock?

- Menjaga job, mount, dan riwayat transfer RcloneView tetap privat.  
- Cocok untuk PC bersama atau lingkungan kantor.  
- Melindungi operasi sinkronisasi/mount yang sensitif serta job otomatisasi.  
- Menambahkan lapisan keamanan meskipun job otomatis sedang berjalan di latar belakang.

## Cara mengaktifkan App Lock

### Langkah 1 — Buka Settings

- Buka **Settings → General Settings** dari menu atas.  
  <img src="/support/images/en/tutorials/applock/mainwindow-menu-settings.png" class="img-medium img-center" alt="Open settings menu" />

### Langkah 2 — Aktifkan App Lock di tab General

- Pada **General**, centang **Enable App Lock**.  
- Masukkan kata sandi yang ingin Anda gunakan.  
- Klik **Close** untuk menyimpan.  

<img src="/support/images/en/tutorials/applock/app-lock-settings.png" class="img-medium img-center" alt="App Lock toggle" />
<img src="/support/images/en/tutorials/applock/app-lock-settings-password.png" class="img-medium img-center" alt="Set App Lock password" />

## Cara kerja App Lock

Saat App Lock diaktifkan, menjalankan RcloneView atau membuka kembali jendelanya akan memunculkan permintaan kata sandi sebelum akses diberikan.

<img src="/support/images/en/tutorials/applock/app-lock-unlock.png" class="img-medium img-center" alt="App Lock unlock prompt" />

## Mereset App Lock (Reset App)

Jika Anda lupa kata sandi, klik **Reset App** pada layar permintaan kata sandi.

<img src="/support/images/en/tutorials/applock/app-lock-reset-app.png" class="img-medium img-center" alt="Reset App button" />
<img src="/support/images/en/tutorials/applock/app-lock-reset-app-confirm.png" class="img-medium img-center" alt="Reset App confirmation" />

**Peringatan:** Reset App menghapus semua data internal RcloneView:

- Kata sandi App Lock  
- Semua nilai pengaturan  
- Riwayat transfer  
- Definisi job  
- Riwayat job  

Tidak direset: **rclone config** (`rclone.conf`) tetap ada, sehingga definisi remote tetap utuh.

## Penggunaan yang disarankan

- PC bersama atau publik.  
- Lingkungan perusahaan atau institusi.  
- Saat Anda menjalankan banyak job otomatis dan ingin mencegah gangguan.  
- Saat Anda perlu melindungi riwayat job/transfer serta data internal.

## Ringkasan

| Item | Deskripsi |
| --- | --- |
| Fungsi | Mewajibkan kata sandi saat RcloneView dijalankan/dibuka kembali |
| Melindungi | Pengaturan, job, riwayat transfer, file DB |
| Pemicu | Aplikasi dijalankan atau dibuka kembali |
| Reset | **Reset App** menghapus data internal; `rclone.conf` tetap dipertahankan |
| Terbaik untuk | PC bersama, lingkungan dengan keamanan tinggi |

App Lock adalah saklar kecil yang memberikan perlindungan kuat. Aktifkan fitur ini untuk menjaga aktivitas dan riwayat RcloneView Anda tetap privat.
