---
sidebar_position: 1
description: Aktifkan Web Server bawaan RcloneView untuk mengakses Explorer, Jobs, Remotes, dan Settings dari browser mana pun di jaringan lokal Anda.
keywords:
  - rcloneview
  - web frontend
  - web server
  - akses browser
  - akses remote
  - web ui
  - rclone web interface
tags:
  - RcloneView
  - Tutorial
  - Web-Frontend
  - Remote-Access
date: 2026-03-27
author: steve
---

# RcloneView Web Frontend

RcloneView menyertakan Web Server bawaan yang memungkinkan Anda mengakses seluruh antarmuka RcloneView dari browser web mana pun. Anda dapat menjelajahi remote, mengelola job, dan mengonfigurasi pengaturan — semuanya tanpa membuka jendela aplikasi desktop.

Tutorial ini mencakup:

- Mengaktifkan Web Server di pengaturan RcloneView
- Mengonfigurasi port, username, dan password
- Mengakses Web Frontend dari browser
- Mengizinkan akses remote dari perangkat lain di jaringan Anda

---

## Apa itu Web Frontend?

Web Frontend adalah antarmuka berbasis browser untuk RcloneView yang mencerminkan pengalaman aplikasi desktop. Setelah Web Server bawaan berjalan, Anda dapat membuka browser dan berinteraksi dengan RcloneView melalui UI yang familiar, meliputi:

- **Explorer** — menjelajahi penyimpanan lokal dan remote
- **Jobs** — melihat dan mengelola job sinkronisasi/salin
- **Remotes** — mengelola koneksi remote
- **Settings** — mengonfigurasi opsi RcloneView

Fitur ini berguna saat Anda ingin mengelola transfer dari perangkat lain di jaringan yang sama, atau sekadar lebih menyukai alur kerja berbasis browser.

---

## Persyaratan

- RcloneView terpasang dan berjalan (Desktop)
- Browser web modern (Chrome, Firefox, Safari, Edge, dll.)
- Untuk akses remote: perangkat di jaringan lokal yang sama

---

## Langkah 1: Buka Pengaturan Web Server

1. Jalankan **RcloneView**.
2. Buka **Settings** > **Network & Misc**.
3. Cari bagian **Web Server** (ditandai sebagai **Beta**).

<img src="/support/images/en/tutorials/web-frontend/web-server-settings.png" alt="Web Server settings in RcloneView" class="img-large img-center" />

---

## Langkah 2: Konfigurasikan Web Server

Di bagian **Web Server**, konfigurasikan hal berikut:

- **Port**: Nomor port untuk web server (default: `8580`). Ubah ini jika port default bentrok dengan layanan lain.
- **Username**: Tetapkan username untuk autentikasi (misalnya, `admin`).
- **Password**: Tetapkan password untuk melindungi akses ke Web Frontend.

---

## Langkah 3: Aktifkan Web Server

1. Aktifkan toggle **Enable Web Server** ke **On**.
2. Status berubah dari **Stopped** menjadi **Running on port 8580** (atau port yang Anda konfigurasikan).
3. Tombol **Restart Server** akan muncul, yang dapat Anda gunakan setelah mengubah pengaturan apa pun.

<img src="/support/images/en/tutorials/web-frontend/web-server-running.png" alt="Web Server running on port 8580" class="img-large img-center" />

---

## Langkah 4: Akses Web Frontend

1. Buka browser web di komputer yang sama.
2. Navigasikan ke `http://localhost:8580` (atau port yang Anda konfigurasikan).
3. Layar login RcloneView akan muncul. Masukkan **Username** dan **Password** yang Anda konfigurasikan di Langkah 2, lalu klik **Sign In**.

<img src="/support/images/en/tutorials/web-frontend/web-frontend-login.png" alt="RcloneView Web Frontend login screen" class="img-large img-center" />

4. Web Frontend RcloneView akan dimuat dengan antarmuka lengkap — Explorer, Jobs, Remotes, dan Settings semuanya dapat diakses dari sidebar kiri.

<img src="/support/images/en/tutorials/web-frontend/web-frontend-explorer.png" alt="RcloneView Web Frontend Explorer" class="img-large img-center" />

---

## Langkah 5: Izinkan Akses Remote (Opsional)

Secara default, Web Server hanya menerima koneksi dari **localhost (127.0.0.1)**. Untuk mengakses RcloneView dari perangkat lain di jaringan Anda:

1. Aktifkan toggle **Allow remote access** ke **On**.
2. Klik **Restart Server** untuk menerapkan perubahan.
3. Di perangkat lain, buka browser dan navigasikan ke `http://<your-computer-ip>:8580`.

> **Catatan Keamanan:** Mengaktifkan akses remote memungkinkan perangkat mana pun di jaringan Anda menjangkau Web Frontend. Selalu gunakan username dan password yang kuat untuk melindungi akses.

---

## Ringkasan

RcloneView Web Frontend memberi Anda akses berbasis browser ke semua fitur inti:

- Aktifkan Web Server dari **Settings > Network & Misc**
- Tetapkan port, username, dan password untuk akses yang aman
- Akses UI lengkap di `http://localhost:8580`
- Aktifkan akses remote secara opsional untuk perangkat lain di jaringan Anda

Biarkan RcloneView tetap berjalan di latar belakang, dan kelola penyimpanan cloud Anda dari browser mana pun.
