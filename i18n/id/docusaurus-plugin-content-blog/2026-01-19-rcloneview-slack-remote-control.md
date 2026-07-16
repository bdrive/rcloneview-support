---
slug: rcloneview-slack-remote-control
title: "Kontrol Jarak Jauh Slack RcloneView: Kelola Tugas Cloud dari Ponsel Anda"
authors:
  - steve
description: "Dapatkan notifikasi tugas secara instan dan mulai, hentikan, atau periksa tugas RcloneView langsung dari Slack dengan aplikasi yang aman dan perintah slash yang sederhana."
keywords:
  - rcloneview slack
  - rclone slack bot
  - rclone remote control
  - rcloneview notifications
  - slack chatops
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

# Kontrol Jarak Jauh Slack RcloneView: Kelola Tugas Cloud dari Ponsel Anda

> Ubah RcloneView menjadi konsol chatops: dapatkan notifikasi tugas, lihat daftar tugas, dan mulai atau hentikan tugas dari Slack, bahkan saat Anda jauh dari PC.

Dengan Kontrol Jarak Jauh Slack, RcloneView mengirimkan notifikasi mulai, selesai, dan error tugas ke ponsel Anda, serta menerima perintah slash sederhana untuk menjalankan atau menghentikan tugas. Fitur ini sangat cocok untuk pencadangan yang berlangsung lama, sinkronisasi semalaman, atau server jarak jauh yang tetap ingin Anda kendalikan dengan cepat melalui mobile.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Apa yang bisa Anda lakukan dari Slack

- **Notifikasi Real-time**: Dapatkan notifikasi langsung saat tugas dimulai, selesai, atau mengalami error.
- **Daftar Tugas**: Lihat semua tugas RcloneView Anda yang terdaftar dalam daftar yang rapi.
- **Kontrol Tugas Jarak Jauh**: Mulai tugas berdasarkan nama atau indeks (#N), atau hentikan secara instan.
- **Status Sesuai Permintaan**: Periksa progres, kecepatan transfer, dan estimasi waktu yang tersisa kapan saja.

*Catatan: RcloneView harus berjalan di PC atau server Anda untuk memproses perintah Slack.*

## Prasyarat

- RcloneView terinstal dan berjalan (Desktop atau Headless).
- Akun Slack dan workspace Anda sendiri.
- Koneksi internet.

---

## Langkah 1: Buat Aplikasi Slack Anda (Menggunakan Manifest)

Untuk keamanan maksimal, RcloneView menggunakan pendekatan "aplikasi privat" di mana Anda membuat bot Anda sendiri. Ini memastikan data Anda tidak pernah melewati server pihak ketiga mana pun—data langsung mengalir dari PC Anda ke Slack.

1. Buka [Slack API Dashboard](https://api.slack.com/apps) dan klik **[Create New App]**.
   
2. Pilih **[From a manifest]**.
   
3. Pilih **Workspace** tempat Anda ingin menginstal aplikasi ini dan klik **[Next]**.
4. Pilih tab **[JSON]**, hapus konten yang ada, dan tempel kode di bawah ini:

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
                "description": "Start a job (Enter number or name)",
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

5. Klik **[Next]**, lalu klik **[Create]** untuk menyelesaikan pembuatan aplikasi Anda.

---

## Langkah 2: Dapatkan Token Anda

Anda memerlukan dua jenis token untuk pengaturan RcloneView. **Perlakukan token ini seperti kata sandi dan jangan pernah membagikannya kepada orang lain.**

### ① Dapatkan App Token (Untuk Socket Mode)

1. Di menu kiri, buka **[Basic Information]**.
2. Gulir ke bawah ke bagian **[App-Level Tokens]** dan klik **[Generate Token and Scopes]**.
3. Atur nama menjadi `RcloneView`, klik **[Add Scope]**, pilih `connections:write`, lalu klik **[Generate]**.
4. Salin token yang dimulai dengan `xapp-...` dan simpan.

### ② Dapatkan Bot Token (Untuk Pengiriman Pesan)

1. Di menu kiri, buka **[Install App]**.
2. Klik tombol hijau **[Install to Workspace]** lalu klik **[Allow]**.
3. Salin **Bot User OAuth Token** yang dimulai dengan `xoxb-...` dan simpan.

---

### Langkah 3: Aktifkan Tab Messages

1. Klik **App Home** di menu kiri.
2. Aktifkan `Messages Tab`
3. Centang `Allow users to send Slash commands and messages from the messages tab`

Ini akan memungkinkan Anda mengirim perintah slash langsung ke bot Anda.

---

## Langkah 4: Temukan Member ID Anda

Bot memerlukan ID unik Anda untuk mengetahui pengguna mana yang akan dikirimi notifikasi (DM).

1. Buka aplikasi Slack Anda, klik foto profil Anda, lalu pilih **[Profile]**.
2. Klik tombol **[More (···)]**.
3. Pilih **[Copy member ID]** di bagian bawah menu. (Contoh: `U1234567890`)
   <img src="/support/images/en/tutorials/slack/slack-copy-member-id.png" alt="Copy Slack Member ID" class="img-large img-center" />


---

## Langkah 5: Aktifkan Kontrol Slack di RcloneView

1. Buka RcloneView dan masuk ke **Settings -> Interfaces & Notifications**.
2. Aktifkan sakelar **Slack Remote Control**.
3. Masukkan **App Token**, **Bot Token**, dan **Member ID** Anda pada kolom masing-masing.
4. Klik **[Send Test Message]** untuk memverifikasi bahwa Anda menerima pesan di ponsel Anda.

---

## ⌨️ Panduan Perintah (ChatOps)

Ketik perintah berikut di chat mana pun tempat bot berada:

* `/help` - Tampilkan semua perintah yang tersedia.
* `/joblist` - Tampilkan daftar semua tugas terdaftar untuk koneksi saat ini.
* `/start <jobName>` - Mulai tugas berdasarkan nama persisnya.
* `/start #<number>` - Mulai tugas menggunakan indeksnya dari `/joblist` (misalnya, `/start #1`).
* `/stop <JobId>` - Hentikan tugas yang sedang berjalan menggunakan Job ID-nya.
* `/jobstatus <JobId>` - Periksa progres dan statistik real-time untuk tugas tertentu.

---

## Tips Keamanan dan Manajemen

* **Identifikasi Pengguna**: Hanya Member ID yang telah dikonfigurasi yang diizinkan menjalankan perintah.
* **Rotasi Token**: Jika token Anda pernah terekspos, segera buka halaman Slack API dan klik `Regenerate`.
* **Status Offline**: Jika RcloneView tidak berjalan, bot Slack tidak akan merespons perintah.

## Sumber Daya Terkait

* [Panduan Dasar RcloneView](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic)
* [Penjadwalan Tugas dan Otomatisasi](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling)
* [Pemantauan Transfer Real-time](https://www.google.com/search?q=https://rcloneview.com/support/howto/rcloneview-basic/monitoring)

## Penutup

Slack mengubah RcloneView menjadi pusat kendali mobile: Anda tetap mendapat notifikasi, dapat memulai atau menghentikan tugas secara instan, dan dapat merespons kegagalan lebih cepat. Siapkan sekali, jaga keamanan token, dan kelola otomatisasi cloud Anda dengan percaya diri bahkan saat Anda jauh dari meja kerja.

<CloudSupportGrid />
