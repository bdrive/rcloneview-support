---
sidebar_position: 11
description: Gunakan Discord Remote Control di RcloneView untuk menerima notifikasi job serta menampilkan daftar, memulai, menghentikan, dan memeriksa status job dari Discord.
keywords:
  - rcloneview
  - discord remote control
  - discord bot
  - notifikasi job
  - kontrol job jarak jauh
  - rclone job manager
tags:
  - RcloneView
  - Tutorial
  - Discord
  - Remote-Control
  - Job-Management
date: 2026-01-20
author: steve
---

# RcloneView Discord Remote Control

Discord Remote Control memungkinkan Anda menerima notifikasi job RcloneView dan mengontrol job langsung dari Discord — tanpa harus duduk di depan PC Anda.

Tutorial ini mencakup:

- Membuat aplikasi dan bot Discord
- Mengatur Installation Context ke **Guild Install**
- Mendapatkan ID yang diperlukan (Bot Token, Application ID, Discord User ID)
- Mengaktifkan Discord Remote Control di RcloneView
- Menggunakan perintah Discord untuk menampilkan daftar/memulai/menghentikan job dan memeriksa status

---

## Apa itu Discord Remote Control?

Discord Remote Control adalah fitur bawaan RcloneView yang memungkinkan Anda untuk:

- Menerima notifikasi real-time saat job dimulai, selesai, dan terjadi error
- Menampilkan daftar job yang terdaftar
- Memulai job dari jarak jauh
- Menghentikan job yang sedang berjalan
- Memeriksa progres dan status job sesuai kebutuhan

Selama RcloneView berjalan, Anda dapat mengelola job cloud Anda dari klien Discord Anda.

---

## Persyaratan

- RcloneView terpasang dan berjalan (Desktop atau Headless)
- Akun Discord
- Izin untuk membuat dan memasang bot Discord di server (Guild Install)
- Koneksi internet

---

## Langkah 1: Membuat Aplikasi dan Bot Discord

### Langkah 1-1 Buka Discord Developer Portal

1. Buka [Discord Developer Portal](https://discord.com/developers/applications).
2. Klik **New Application** dan beri nama (misalnya, `RcloneView`).
   <img src="/support/images/en/tutorials/discord/discord-new-application.png" class="img-large img-center" />

### Langkah 1-2 Atur Installation Context ke Guild Install

1. Di menu sebelah kiri, buka **Installation**.
2. Pada **Installation Contexts**, pilih **Guild Install**. (Nonaktifkan User Install jika sedang aktif.)
3. Simpan perubahan Anda.
   <img src="/support/images/en/tutorials/discord/discord-installation-context.png" class="img-large img-center" />

### Langkah 1-3 Tambahkan Bot dan terbitkan Bot Token

1. Buka tab **Bot**.
2. Klik **Add Bot** dan konfirmasi.
3. Klik **Reset Token** (atau **Copy Token**) untuk mendapatkan **Discord Bot Token** Anda. Jaga kerahasiaannya.
   <img src="/support/images/en/tutorials/discord/discord-bot-token.png" class="img-large img-center" />

### Langkah 1-4 Izinkan bot membaca pesan (disarankan)

Jika Anda berencana mengirim perintah teks (bukan perintah slash), aktifkan **MESSAGE CONTENT INTENT** pada tab Bot agar RcloneView dapat membaca teks perintah Anda di DM atau channel.
   <img src="/support/images/en/tutorials/discord/discord-privileged-intent.png" class="img-large img-center" />

---

## Langkah 2: Membuat Server dan Memasang Bot

Untuk menggunakan bot, Anda memerlukan server Discord (juga disebut "Guild") tempat bot dapat beroperasi. Jika Anda belum memiliki server pribadi untuk log RcloneView Anda, ikuti langkah-langkah di bawah ini.

### Langkah 2-1 Membuat Server Discord Baru

1. Buka **aplikasi Discord** Anda (Desktop atau Web).
2. Klik ikon **plus (+)** (Add a Server) di bagian bawah daftar server Anda di sebelah kiri.
3. Pilih **Create My Own**.
4. Pilih **For me and my friends**.
5. Berikan nama untuk server Anda (misalnya, `RcloneView Control Center`) dan klik **Create**.
   

### Langkah 2-2 Memasang Bot ke Server Anda

1. Kembali ke **Discord Developer Portal**.
2. Buka **OAuth2 > URL Generator**.
3. Pilih scope: **bot** dan **applications.commands**.
4. Pada **Bot Permissions**, pilih **Send Messages**, **Use Slash Commands**, dan **Attach Files** (jika Anda ingin menerima file log).
5. Salin URL yang dihasilkan di bagian bawah dan tempelkan ke browser Anda.
6. Pilih server yang baru saja Anda buat (misalnya, `RcloneView Control Center`) lalu klik **Authorize**.

---

## Langkah 3: Kumpulkan Nilai yang Diperlukan RcloneView

- **Discord Bot Token**: Dari tab **Bot** (Langkah 1-3).
- **Discord Application ID**: Dari **General Information** di Developer Portal.
- **My Discord User ID (Snowflake)**: Nomor panjang yang secara unik mengidentifikasi Anda.

### Cara mendapatkan Discord User ID Anda

Untuk mendapatkan `Discord User ID` Anda, terlebih dahulu aktifkan Developer Mode:

1. Buka Discord (Desktop atau Web).
2. Klik **User Settings** (⚙️) di kiri bawah.
3. Pada **App Settings**, buka **Advanced**.
4. Aktifkan **Developer Mode** ke posisi **On**.

Kemudian salin ID Anda:

1. Klik kanan pada **Foto Profil** atau **Username** Anda (di kiri bawah atau di daftar chat/anggota).
2. Klik **Copy User ID**.
3. Simpan string angka panjang tersebut (contoh: `123456789012345678`).
   <img src="/support/images/en/tutorials/discord/discord-copy-userid.png" class="img-large img-center" />

Mengapa ID ini diperlukan?

- Keamanan: Hanya perintah dari akun Anda yang diproses oleh aplikasi Flutter.
- Notifikasi Langsung: Bot mengetahui dengan tepat pengguna mana yang harus dikirimi DM saat sebuah job dimulai atau gagal.

---

## Langkah 4: Mengaktifkan Discord Remote Control di RcloneView

### Langkah 4-1 Buka Settings

1. Jalankan RcloneView.
2. Buka **Settings** -> **Interfaces & Notifications**.

### Langkah 4-2 Masukkan kredensial

1. Aktifkan **Discord Remote Control**.
2. Masukkan:
   - **Discord Bot Token**: `...`
   - **Discord Application ID**: Dari **General Information**.
   - **My Discord User ID**: `123456789012345678`

### Langkah 4-3 Kirim pesan uji coba

Klik **Send Test Message**. Jika berhasil, Anda akan menerima DM dari bot di Discord.
   <img src="/support/images/en/tutorials/discord/discord-test-message-received.png" class="img-large img-center" />

---

## Langkah 5: Perintah Discord (Kontrol Job)

Kirim perintah ke bot (DM disarankan untuk privasi, tetapi Anda juga dapat menggunakan channel tempat bot berada dan Anda memiliki izin untuk menjalankannya).

### `/help`

Menampilkan semua perintah yang tersedia.

### `/joblist`

Menampilkan daftar job untuk koneksi yang sedang dipilih.

### `/start <jobName>`

Memulai job tertentu berdasarkan namanya.

### `/start #<number>` (Disarankan)

Memulai job menggunakan indeks dari hasil `/joblist` terbaru (contoh: `/start #1`).

### `/stop <JobId>`

Menghentikan job yang sedang berjalan.

### `/jobstatus <JobId>`

Memeriksa progres dan statistik real-time dari job tertentu.

---

## Notifikasi Job Otomatis

Setelah diaktifkan, RcloneView secara otomatis mengirim notifikasi untuk:

- Job dimulai
- Job selesai dengan sukses
- Job gagal karena error

---

## Catatan Keamanan

- Perintah hanya diproses jika berasal dari **Discord User ID** yang telah dikonfigurasi.
- Jaga kerahasiaan **Discord Bot Token** dan **Application ID** Anda.
- Jika Anda perlu menjeda remote control, cukup matikan toggle di settings.

---

## Ringkasan

Discord Remote Control memungkinkan Anda mengoperasikan transfer yang berjalan lama tanpa harus berada di depan PC Anda:

- Manajemen job jarak jauh dari Discord
- Pembaruan status real-time melalui notifikasi
- Kontrol instan melalui Discord versi mobile atau desktop

Siapkan sekali dan kelola otomasi cloud Anda dari mana saja.
