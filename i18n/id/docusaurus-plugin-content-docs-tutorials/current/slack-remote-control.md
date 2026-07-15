---

sidebar_position: 10
description: Gunakan Slack Remote Control di RcloneView untuk menerima notifikasi job dan mengontrol job dari jarak jauh - melihat daftar, memulai, menghentikan, serta memeriksa status job dari Slack.
keywords:
  - rcloneview
  - slack remote control
  - slack bot
  - notifikasi job
  - kontrol job jarak jauh
  - rclone job manager
tags:
  - RcloneView
  - Tutorial
  - Slack
  - Remote-Control
  - Job-Management
date: 2026-01-19
author: steve

---

# RcloneView Slack Remote Control

Slack Remote Control memungkinkan Anda menerima notifikasi job RcloneView dan mengontrol job langsung dari Slack — tanpa harus duduk di depan PC Anda.

Tutorial ini mencakup:

* Membuat Slack app (menggunakan App Manifest)
* Menerbitkan token yang diperlukan (App Token dan Bot Token)
* Menemukan Slack Member ID Anda
* Mengaktifkan Slack Remote Control di RcloneView
* Menggunakan perintah Slack untuk melihat daftar, memulai, menghentikan job, dan memeriksa status

---

## Apa itu Slack Remote Control?

Slack Remote Control adalah fitur bawaan RcloneView yang memungkinkan Anda untuk:

* Menerima notifikasi real-time saat job dimulai, selesai, dan terjadi error
* Melihat daftar job yang terdaftar
* Memulai job dari jarak jauh
* Menghentikan job yang sedang berjalan
* Memeriksa progres dan status job kapan saja

Selama RcloneView berjalan, Anda dapat mengelola job cloud Anda hanya dengan aplikasi Slack di ponsel.

---

## Persyaratan

* RcloneView terinstal dan berjalan (Desktop atau Headless)
* Akun dan workspace Slack
* Koneksi internet

---

## Langkah 1: Membuat Slack App (App Manifest)

Untuk proses penyiapan tercepat dan paling akurat, kita menggunakan metode "App Manifest" untuk membuat bot Anda.

### 1-1 Buka Slack API Dashboard

1. Buka [Slack API Dashboard](https://api.slack.com/apps).
2. Klik tombol **Create New App**.

### 1-2 Buat menggunakan Manifest

1. Pilih opsi **From an app manifest**.
2. Pilih **Workspace** tempat Anda ingin memasang app.
3. Pilih tab **JSON** dan tempel kode konfigurasi berikut:

```json
{
    "display_information": {
        "name": "RcloneView",
        "description": "Effortlessly browse, organize, transfer files across your cloud storages.",
        "background_color": "#3f2f3f"
    },
    "features": {
        "bot_user": {
            "display_name": "RcloneView",
            "always_online": false
        },
        "slash_commands": [
            {
                "command": "/help",
                "description": "Show all commands",
                "should_escape": false
            },
            {
                "command": "/joblist",
                "description": "List jobs",
                "should_escape": false
            },
            {
                "command": "/start",
                "description": "Starts a job (Enter number or name)",
                "usage_hint": "<#number> or <jobName>",
                "should_escape": false
            },
            {
                "command": "/stop",
                "description": "Stop a running job by JobId",
                "usage_hint": "<JobId>",
                "should_escape": false
            },
            {
                "command": "/jobstatus",
                "description": "Check status by JobId",
                "usage_hint": "<JobId>",
                "should_escape": false
            }
        ]
    },
    "oauth_config": {
        "scopes": {
            "bot": [
                "commands",
                "chat:write",
                "chat:write.public",
                "im:write",
                "app_mentions:read",
                "files:write"
            ]
        }
    },
    "settings": {
        "interactivity": {
            "is_enabled": true
        },
        "org_deploy_enabled": false,
        "socket_mode_enabled": true,
        "token_rotation_enabled": false
    }
}

```

4. Klik **Next**, lalu klik **Create** untuk menyelesaikan.

---

## Langkah 2: Menerbitkan dan Menyimpan Token

RcloneView memerlukan dua jenis token. **Perlakukan token ini seperti kata sandi.**

### 2-1 Menerbitkan App Token (untuk Socket Mode)

1. Klik **Basic Information** di menu kiri.
2. Pada bagian **App-Level Tokens**, klik **Generate Token and Scopes**.
3. Beri nama token `RcloneView`, tambahkan scope `connections:write`, lalu buat tokennya.
4. Simpan token yang diawali dengan **`xapp-`**.

### 2-2 Mendapatkan Bot Token

1. Klik **Install App** di menu kiri.
2. Klik **Install to Workspace** lalu klik **Allow**.
3. Salin **Bot User OAuth Token** yang diawali dengan **`xoxb-`**.

---

### Langkah 3: Mengaktifkan Tab Messages

1. Klik **App Home** di menu kiri.
2. Aktifkan `Messages Tab`
3. Centang `Allow users to send Slash commands and messages from the messages tab`

Ini akan memungkinkan Anda mengirim perintah slash langsung ke bot Anda.

---

## Langkah 4: Menemukan Slack Member ID Anda

Bot memerlukan ID unik Anda untuk mengetahui pengguna mana yang harus menerima notifikasi.

1. Buka Slack, klik **foto profil** Anda, lalu pilih **Profile**.
2. Klik tombol **More(···)** lalu pilih **Copy member ID**.
3. Simpan ID tersebut (misalnya, `U1234567890`).
   <img src="/support/images/en/tutorials/slack/slack-copy-member-id.png" alt="Copy Slack Member ID" class="img-large img-center" />

---

## Langkah 5: Mengaktifkan Slack Remote Control di RcloneView

### 5-1 Buka Settings

1. Jalankan RcloneView.
2. Buka **Settings** -> **Interfaces & Notifications**.

### 5-2 Masukkan Kredensial

1. Aktifkan toggle **Slack Remote Control**.
2. Masukkan token dan ID Anda:
* **Slack App Token**: `xapp-...`
* **Slack Bot Token**: `xoxb-...`
* **My Member ID**: `U...`

### 5-3 Kirim Pesan Uji Coba

Klik **Send Test Message**. Jika berhasil, Anda akan menerima pesan di ponsel Anda.

---

## Langkah 6: Perintah Slack (Kontrol Job)

Ketik perintah berikut di chat mana pun tempat bot terpasang.

### `/help`

Menampilkan semua perintah yang tersedia.

### `/joblist`

Menampilkan daftar job untuk koneksi yang sedang dipilih.

### `/start <jobName>`

Memulai job tertentu berdasarkan namanya.

### `/start #<number>` (Direkomendasikan)

Memulai job menggunakan indeks dari hasil `/joblist` terbaru (misalnya, `/start #1`).

### `/stop <JobId>`

Menghentikan job yang sedang berjalan.

### `/jobstatus <JobId>`

Memeriksa progres dan statistik real-time dari job tertentu.

---

## Notifikasi Job Otomatis

Setelah diaktifkan, RcloneView secara otomatis mengirim notifikasi untuk:

* Job dimulai
* Job selesai dengan sukses
* Job gagal dengan error

---

## Catatan Keamanan

* Perintah hanya diproses jika berasal dari **Member ID** yang telah dikonfigurasi.
* Jaga kerahasiaan **App Token** dan **Bot Token** Anda.
* Jika Anda perlu menjeda remote control, cukup matikan toggle di pengaturan.

---

## Ringkasan

Slack Remote Control membuat pengelolaan tugas cloud yang berjalan lama menjadi jauh lebih efisien:

* Pengelolaan job jarak jauh tanpa terikat lokasi
* Pembaruan status real-time melalui notifikasi
* Kontrol instan melalui ponsel tanpa perlu PC

Siapkan sekali dan nikmati lingkungan otomasi cloud yang lebih cerdas mulai hari ini!
