---
sidebar_position: 9
description: Gunakan Telegram Remote Control di RcloneView untuk menerima notifikasi job dan melakukan list, start, stop, serta memeriksa status job dari jarak jauh melalui Telegram.
keywords:
  - rcloneview
  - telegram remote control
  - telegram bot
  - notifikasi job
  - kontrol job jarak jauh
  - rclone job manager
tags:
  - RcloneView
  - Tutorial
  - Telegram
  - Remote-Control
  - Job-Management
date: 2025-12-17
author: tayson
---

# RcloneView Telegram Remote Control

Telegram Remote Control memungkinkan Anda menerima notifikasi job RcloneView dan mengontrol job langsung dari Telegram — tanpa perlu duduk di depan PC.

Tutorial ini mencakup:

- Membuat bot Telegram (BotFather)
- Menemukan Chat ID Telegram Anda
- Mengaktifkan Telegram Remote Control di RcloneView
- Menggunakan perintah Telegram untuk list/start/stop job dan memeriksa status
- Contoh praktis dan catatan keamanan

---

## Apa itu Telegram Remote Control?

Telegram Remote Control adalah fitur bawaan RcloneView yang memungkinkan Anda untuk:

- Menerima notifikasi job dimulai/selesai/error
- Menampilkan daftar job
- Memulai job dari jarak jauh
- Menghentikan job yang sedang berjalan
- Memeriksa progres/status job

Jika RcloneView sedang berjalan, Anda dapat mengelola job hanya dengan ponsel Anda.

---

## Persyaratan

- RcloneView terpasang dan berjalan
- Akun Telegram
- Koneksi internet
- Izin untuk membuat bot Telegram (melalui BotFather)

---

## Langkah 1 Membuat Bot Telegram (BotFather)

### Langkah 1-1 Buka BotFather

1. Buka Telegram.
2. Cari **BotFather**.
3. Buka chat BotFather.

<img src="/support/images/en/tutorials/telegram/telegram-botfather-search.jpg" alt="telegram botfather search" class="img-large img-center" />

### Langkah 1-2 Buat bot baru

Gunakan BotFather untuk membuat bot baru dan atur:

- **Bot Name** (nama tampilan)
- **Bot Username** (harus diakhiri dengan `bot`)

Contoh:

- Bot Name: `RcloneView_test_bot`
- Bot Username: `rcloneview_test_bot`

<img src="/support/images/en/tutorials/telegram/telegram-newbot_rcloneview_test_bot.jpg" alt="telegram create new bot" class="img-large img-center" />

### Langkah 1-3 Simpan token bot Anda (Penting)

Setelah bot dibuat, BotFather akan memberikan token seperti:

```
123456789:AAHxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

:::caution Rahasiakan token Anda
Token ini diperlukan di pengaturan RcloneView. Jangan bagikan token ini secara publik.
:::

<img src="/support/images/en/tutorials/telegram/telegram-bot-token.jpg" alt="telegram bot token" class="img-large img-center" />

---

## Langkah 2 Mulai Bot Anda di Telegram (Penting)

Anda harus memulai chat dengan bot Anda sebelum dapat mengambil Chat ID melalui `getUpdates`.

### Langkah 2-1 Cari bot Anda

1. Cari bot Anda berdasarkan nama atau username.
2. Buka chat bot tersebut.

<img src="/support/images/en/tutorials/telegram/telegram-search-my-bot.jpg" alt="telegram search my bot" class="img-large img-center" />

### Langkah 2-2 Tekan Start dan kirim pesan

1. Klik **Start** (atau kirim `/start`).
2. Kirim satu pesan lagi (contoh: `hi`).

Ini akan membuat catatan update yang nantinya bisa dibaca dari Telegram.

<img src="/support/images/en/tutorials/telegram/telegram-start-bot.jpg" alt="telegram start bot" class="img-large img-center" />

---

## Langkah 3 Menemukan Chat ID Telegram Anda

### Langkah 3-1 Buka getUpdates di browser

Buka URL ini (ganti dengan token Anda):

```
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
```

<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_1.png" alt="telegram getUpdates url" class="img-large img-center" />
<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_2.png" alt="telegram getUpdates example url" class="img-large img-center" />

### Langkah 3-2 Ambil `chat.id`

Dalam respons JSON, temukan:

```json
"chat": {
  "id": 987654321
}
```

**Chat ID** Anda adalah angka pada `chat.id` (contoh: `987654321`).

<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_3.png" alt="telegram chat id" class="img-large img-center" />

---

## Langkah 4 Mengaktifkan Telegram Remote Control di RcloneView

### Langkah 4-1 Buka pengaturan

1. Buka RcloneView.
2. Buka **Settings**.
3. Pilih **Interfaces & Notifications**.
4. Temukan **Telegram Remote Control**.

### Langkah 4-2 Aktifkan

Aktifkan **Telegram Remote Control**:

<img src="/support/images/en/tutorials/telegram/rcloneview-telegram-enable.png" alt="rcloneview telegram enable" class="img-large img-center" />

### Langkah 4-3 Masukkan Token dan Chat ID

- **Telegram Bot Token**: dari BotFather
- **Telegram Chat ID**: dari `getUpdates`

<img src="/support/images/en/tutorials/telegram/rcloneview-telegram-fields.png" alt="rcloneview telegram token chat id fields" class="img-large img-center" />

### Langkah 4-4 Kirim pesan uji coba

Klik **Send Test Message**. Jika berhasil, Anda akan menerima:
`RcloneView Telegram Test Message`

<img src="/support/images/en/tutorials/telegram/telegram-test-message.jpg" alt="telegram test message" class="img-large img-center" />

---

## Langkah 5 Perintah Telegram (Kontrol Job)

Ketik perintah-perintah berikut di chat Telegram Anda dengan bot.

### `/help`

Menampilkan semua perintah yang tersedia:

```
/help
```

<img src="/support/images/en/tutorials/telegram/telegram-help.jpg" alt="telegram help" class="img-large img-center" />

### `/listjobs`

Menampilkan daftar job untuk koneksi yang sedang dipilih:

```
/listjobs
```

Contoh output:

```
Total: 3
1) Backup_Photos
2) Sync_Documents
3) Archive_To_NAS
```

<img src="/support/images/en/tutorials/telegram/telegram-listjobs.jpg" alt="telegram listjobs" class="img-large img-center" />

### `/start <jobName>`

Memulai job berdasarkan nama:

```
/start Backup_Photos
```

:::note Nama job harus sama persis
Gunakan `/listjobs` untuk menyalin nama job yang tepat.
:::

<img src="/support/images/en/tutorials/telegram/telegram-job-start_by_jobname.jpg" alt="telegram start by job name" class="img-large img-center" />

### `/start #<number>` (Direkomendasikan)

Memulai job berdasarkan nomornya dari hasil `/listjobs` terbaru:

```
/start #2
```

:::important Jalankan `/listjobs` terlebih dahulu
Nomor tersebut berdasarkan output daftar job saat ini.
:::

<img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_1.jpg" alt="telegram start by index step1" class="img-large img-center" />
<img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_2.jpg" alt="telegram start by index step2" class="img-large img-center" />

### `/stop <jobId>`

Menghentikan job yang sedang berjalan:

```
/stop 123
```

<img src="/support/images/en/tutorials/telegram/telegram-job-stop.jpg" alt="telegram job stop" class="img-large img-center" />

### `/status <jobId>`

Menampilkan progres untuk job yang sedang berjalan:

```
/status 123
```

<img src="/support/images/en/tutorials/telegram/telegram-job-status.jpg" alt="telegram job status" class="img-large img-center" />

---

## Notifikasi Job Otomatis

Ketika Telegram Remote Control diaktifkan, RcloneView dapat secara otomatis mengirim notifikasi untuk:

- Job dimulai
- Job selesai dengan sukses
- Job gagal dengan error

<img src="/support/images/en/tutorials/telegram/telegram-job-notifications.jpg" alt="telegram job notifications" class="img-large img-center" />

---

## Catatan Keamanan

- Perintah hanya diproses dari **Chat ID** yang sudah dikonfigurasi.
- Jaga kerahasiaan **Bot Token** Anda. Perlakukan seperti kata sandi.
- Jika ingin menjeda remote control, matikan switch di pengaturan.

---

## Ringkasan

Telegram Remote Control membuat RcloneView lebih mudah dioperasikan untuk job yang berjalan lama:

- Kelola job dari jarak jauh
- Tetap mendapat informasi dengan notifikasi real-time
- Kontrol job dari perangkat mobile tanpa membuka PC

Coba fitur ini saat Anda menjalankan pencadangan terjadwal, sinkronisasi, atau transfer besar dan ingin tetap memiliki visibilitas di mana saja.
