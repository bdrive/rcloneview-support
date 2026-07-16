---
slug: rcloneview-discord-remote-control
title: "Kontrol Jarak Jauh Discord RcloneView: Kelola Job Cloud dari Discord"
authors:
  - steve
description: "Dapatkan notifikasi job dan jalankan perintah RcloneView dari Discord menggunakan bot Anda sendiri yang aman, Application ID, dan Discord User ID."
keywords:
  - rcloneview discord
  - rclone discord bot
  - rclone remote control
  - rcloneview notifications
  - discord chatops
  - cloud backup alerts
  - remote job management
  - rcloneview job status
tags:
  - job-management
  - security
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import RvCta from '@site/src/components/RvCta';

# Kontrol Jarak Jauh Discord RcloneView: Kelola Job Cloud dari Discord

> Ubah RcloneView menjadi konsol chatops Discord: dapatkan notifikasi job, lihat daftar job, dan mulai atau hentikan job dari Discord tanpa membuka PC Anda.

Dengan Discord Remote Control, RcloneView mengirimkan notifikasi saat job dimulai, selesai, dan mengalami error kepada Anda, serta menerima perintah sederhana untuk menjalankan atau menghentikan job. Fitur ini sangat cocok untuk pencadangan yang berlangsung lama, sinkronisasi semalaman, atau server jarak jauh yang tetap ingin Anda kontrol dengan cepat melalui Discord di desktop atau ponsel.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Apa yang bisa Anda lakukan dari Discord

- **Notifikasi Real-time**: Dapatkan pemberitahuan segera saat job dimulai, selesai, atau mengalami error.
- **List Jobs**: Lihat semua job RcloneView yang terdaftar dalam daftar yang rapi.
- **Kontrol Job Jarak Jauh**: Mulai job berdasarkan nama atau indeks (#N), atau hentikan secara instan.
- **Status Sesuai Permintaan**: Periksa progres, kecepatan transfer, dan perkiraan waktu tersisa kapan saja.

*Catatan: RcloneView harus tetap berjalan di PC atau server Anda agar dapat memproses perintah Discord.*

## Prasyarat

- RcloneView terpasang dan berjalan (Desktop atau Headless).
- Akun Discord.
- Server Discord tempat Anda dapat memasang bot (Guild Install).
- Koneksi internet.

---

## Langkah 1: Buat Discord Application dan Bot Anda

Untuk keamanan maksimal, RcloneView menggunakan pendekatan “bring your own bot”. Data Anda mengalir langsung antara RcloneView dan Discord—tanpa relay pihak ketiga.

1. Buka [Discord Developer Portal](https://discord.com/developers/applications) dan klik **New Application**. Beri nama (misalnya, `RcloneView`).
2. Buka **Installation**, pilih **Guild Install** sebagai Installation Context (nonaktifkan User Install jika aktif), lalu simpan.
3. Buka tab **Bot**, klik **Add Bot**, lalu salin atau reset untuk mendapatkan **Discord Bot Token** Anda. Jaga kerahasiaannya.
4. Jika Anda berencana mengirim perintah teks biasa (bukan hanya slash commands), aktifkan **MESSAGE CONTENT INTENT** di tab Bot agar RcloneView dapat membaca teks perintah.

---

## Langkah 2: Buat Server dan Pasang Bot

Untuk menggunakan bot, Anda memerlukan server Discord (juga disebut "Guild") tempat bot dapat berada. Jika Anda belum memiliki server privat untuk log RcloneView Anda, ikuti langkah-langkah di bawah ini.

### Langkah 2-1 Buat Server Discord Baru

1. Buka **aplikasi Discord** Anda (Desktop atau Web).
2. Klik **ikon plus (+)** (Add a Server) di bagian bawah daftar server Anda di sebelah kiri.
3. Pilih **Create My Own**.
4. Pilih **For me and my friends**.
5. Beri nama server Anda (misalnya, `RcloneView Control Center`) dan klik **Create**.
   

### Langkah 2-2 Pasang Bot ke Server Anda

1. Kembali ke **Discord Developer Portal**.
2. Buka **OAuth2 > URL Generator**.
3. Pilih scope: **bot** dan **applications.commands**.
4. Di **Bot Permissions**, pilih **Send Messages**, **Use Slash Commands**, dan **Attach Files** (jika Anda ingin menerima file log).
5. Salin URL yang dihasilkan di bagian bawah dan tempelkan ke browser Anda.
6. Pilih server yang baru saja Anda buat (misalnya, `RcloneView Control Center`) dan klik **Authorize**.

---

## Langkah 3: Kumpulkan Nilai yang Dibutuhkan RcloneView

- **Discord Bot Token**: Dari tab **Bot** (Langkah 1-3).
- **Discord Application ID**: Dari **General Information** di Developer Portal.
- **My Discord User ID (Snowflake)**: ID numerik panjang yang secara unik mengidentifikasi Anda.

### Cara mendapatkan Discord User ID Anda

1. Di Discord (Desktop atau Web), buka **User Settings** (⚙️).
2. Buka **Advanced** dan aktifkan **Developer Mode**.
3. Klik kanan pada **foto profil** atau **username** Anda (di kiri bawah atau di daftar anggota) dan pilih **Copy User ID**. Simpan angka tersebut (contoh: `123456789012345678`).

Mengapa ID ini diperlukan?

- **Keamanan**: Hanya perintah dari akun Anda yang diproses oleh aplikasi.
- **Notifikasi Langsung**: Bot mengetahui dengan pasti pengguna mana yang harus di-DM saat job dimulai atau gagal.

---

## Langkah 4: Aktifkan Kontrol Discord di RcloneView

1. Buka RcloneView dan pergi ke **Settings -> Interfaces & Notifications**.
2. Aktifkan sakelar **Discord Remote Control**.
3. Masukkan **Discord Bot Token**, **Discord Application ID**, dan **My Discord User ID** Anda pada kolom yang tersedia.
4. Klik **Send Test Message** untuk memverifikasi bahwa Anda menerima DM dari bot.

---

## ⌨️ Panduan Perintah (ChatOps)

Kirim perintah ke bot (DM disarankan untuk privasi; channel juga berfungsi jika bot memiliki akses):

- `/help` — Menampilkan semua perintah yang tersedia.
- `/joblist` — Menampilkan daftar semua job terdaftar untuk koneksi saat ini.
- `/start <jobName>` — Memulai job berdasarkan nama persisnya.
- `/start #<number>` — Memulai job menggunakan indeksnya dari `/joblist` (misalnya, `/start #1`).
- `/stop <JobId>` — Menghentikan job yang sedang berjalan menggunakan Job ID-nya.
- `/jobstatus <JobId>` — Memeriksa progres dan statistik real-time untuk job tertentu.

---

## Tips Keamanan dan Pengelolaan

- **Identifikasi Pengguna**: Hanya Discord User ID yang telah dikonfigurasi yang diizinkan untuk menjalankan perintah.
- **Keamanan Token**: Perlakukan Bot Token dan Application ID Anda seperti kata sandi. Reset jika bocor.
- **Status Online**: Jika RcloneView tidak berjalan, bot Discord tidak akan merespons perintah.

## Sumber Daya Terkait

- [Panduan Dasar RcloneView](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic)
- [Penjadwalan dan Otomatisasi Job](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling)
- [Pemantauan Transfer Real-time](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic/monitoring)

## Penutup

Discord mengubah RcloneView menjadi pusat komando mobile: Anda tetap mendapat notifikasi, dapat memulai atau menghentikan job secara instan, dan merespons kegagalan lebih cepat. Siapkan sekali, jaga keamanan token, dan kelola otomatisasi cloud Anda dengan percaya diri bahkan saat Anda jauh dari meja kerja.

<CloudSupportGrid />
