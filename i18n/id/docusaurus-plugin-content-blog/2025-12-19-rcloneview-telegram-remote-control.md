---
slug: rcloneview-telegram-remote-control
title: "Kontrol Jarak Jauh Telegram RcloneView: Kelola Job Cloud dari Ponsel Anda"
authors:
  - tayson
description: "Dapatkan notifikasi job secara instan dan mulai, hentikan, atau periksa job RcloneView langsung dari Telegram dengan bot yang aman dan beberapa perintah sederhana."
keywords:
  - rcloneview telegram
  - rclone telegram bot
  - rclone remote control
  - rcloneview notifications
  - mobile job control
  - rclone chatops
  - cloud backup alerts
  - remote job management
  - rcloneview job status
  - rclone cli telegram
tags:
  - RcloneView
  - backup
  - cloud-storage
  - job-management
  - security
  - automation
---


import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kontrol Jarak Jauh Telegram RcloneView: Kelola Job Cloud dari Ponsel Anda

> Ubah RcloneView menjadi konsol chatops: dapatkan notifikasi job, lihat daftar job, dan mulai atau hentikan job dari Telegram, bahkan saat Anda jauh dari PC.

Dengan Kontrol Jarak Jauh Telegram, RcloneView mengirimkan notifikasi job mulai, selesai, dan error ke ponsel Anda serta menerima perintah chat sederhana untuk menjalankan atau menghentikan job. Fitur ini sangat cocok untuk pencadangan yang berlangsung lama, sinkronisasi semalaman, atau server headless di mana Anda tetap ingin memiliki kontrol cepat.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Apa yang bisa Anda lakukan dari Telegram

- Menerima notifikasi: job dimulai, job selesai, job error.
- Melihat daftar job yang tersedia.
- Memulai job berdasarkan nama atau indeks.
- Menghentikan job yang sedang berjalan.
- Memeriksa progres dan status job kapan saja.

RcloneView harus sedang berjalan (desktop atau headless) untuk memproses perintah Telegram.

## Prasyarat

- RcloneView terpasang dan berjalan.
- Akun Telegram.
- Koneksi internet.
- Izin untuk membuat bot Telegram (melalui BotFather).

## Membuat bot Telegram Anda (BotFather)

1. Buka Telegram dan cari **BotFather**, lalu buka chat-nya.  
   <img src="/support/images/en/tutorials/telegram/telegram-botfather-search.jpg" alt="telegram botfather search" class="img-large img-center" />

2. Buat bot: atur **Bot Name** dan **Bot Username** yang diakhiri dengan `bot`.  
   Contoh: `RcloneView_test_bot` / `rcloneview_test_bot`.  
   <img src="/support/images/en/tutorials/telegram/telegram-newbot_rcloneview_test_bot.jpg" alt="telegram create new bot" class="img-large img-center" />

3. Salin **Bot Token** yang ditampilkan oleh BotFather. Rahasiakan token ini-RcloneView membutuhkannya untuk pengaturan.  
   <img src="/support/images/en/tutorials/telegram/telegram-bot-token.jpg" alt="telegram bot token" class="img-large img-center" />

## Memulai bot Anda (penting)

Anda harus memulai bot terlebih dahulu agar Telegram dapat mengembalikan pembaruan chat Anda.

1. Cari bot Anda berdasarkan nama atau username lalu buka chat-nya.  
   <img src="/support/images/en/tutorials/telegram/telegram-search-my-bot.jpg" alt="telegram search my bot" class="img-large img-center" />

2. Ketuk **Start** (atau kirim `/start`), lalu kirim satu pesan lagi (misalnya, `hi`).  
   <img src="/support/images/en/tutorials/telegram/telegram-start-bot.jpg" alt="telegram start bot" class="img-large img-center" />

## Menemukan Chat ID Telegram Anda

1. Di browser, buka:  
   `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`

<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_1.png" alt="telegram getUpdates url" class="img-large img-center" />
<img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_2.png" alt="telegram getUpdates example url" class="img-large img-center" />

2. Pada respons JSON, catat angka pada `chat.id` (contoh: `987654321`). Itulah Chat ID Anda.  
   <img src="/support/images/en/tutorials/telegram/telegram-get-chat-id_3.png" alt="telegram chat id" class="img-large img-center" />

:::caution Jaga kerahasiaan token
Perlakukan Bot Token dan Chat ID seperti kata sandi. Hanya Chat ID yang telah dikonfigurasi yang diizinkan untuk mengontrol job.
:::

## Mengaktifkan Kontrol Jarak Jauh Telegram di RcloneView

1. Buka **Settings -> Interfaces & Notifications**.
2. Aktifkan **Telegram Remote Control**.  
   <img src="/support/images/en/tutorials/telegram/rcloneview-telegram-enable.png" alt="rcloneview telegram enable" class="img-large img-center" />

3. Masukkan **Bot Token** dan **Chat ID** Anda.  
   <img src="/support/images/en/tutorials/telegram/rcloneview-telegram-fields.png" alt="rcloneview telegram token chat id fields" class="img-large img-center" />

4. Klik **Send Test Message**. Anda akan menerima: `RcloneView Telegram Test Message`.  
   <img src="/support/images/en/tutorials/telegram/telegram-test-message.jpg" alt="telegram test message" class="img-large img-center" />

## Panduan perintah (chatops untuk job)

Gunakan perintah berikut di chat bot:

- `/help` - Menampilkan semua perintah.  
  <img src="/support/images/en/tutorials/telegram/telegram-help.jpg" alt="telegram help" class="img-large img-center" />

- `/listjobs` - Menampilkan daftar job untuk koneksi saat ini.  
  <img src="/support/images/en/tutorials/telegram/telegram-listjobs.jpg" alt="telegram listjobs" class="img-large img-center" />

- `/start <jobName>` - Memulai job berdasarkan nama persisnya.  
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_jobname.jpg" alt="telegram start by job name" class="img-large img-center" />

- `/start #<n>` (disarankan) - Memulai berdasarkan indeks daftar dari `/listjobs` terbaru.  
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_1.jpg" alt="telegram start by index step1" class="img-large img-center" />
  <img src="/support/images/en/tutorials/telegram/telegram-job-start_by_index_2.jpg" alt="telegram start by index step2" class="img-large img-center" />

- `/stop <jobId>` - Menghentikan job yang sedang berjalan.  
  <img src="/support/images/en/tutorials/telegram/telegram-job-stop.jpg" alt="telegram job stop" class="img-large img-center" />

- `/status <jobId>` - Memeriksa progres dan ukuran data yang telah ditransfer.  
  <img src="/support/images/en/tutorials/telegram/telegram-job-status.jpg" alt="telegram job status" class="img-large img-center" />

## Mengapa ini penting untuk otomatisasi

- Transfer semalaman atau berdurasi panjang: dapatkan notifikasi lalu mulai ulang atau hentikan tanpa perlu VPN ke server.
- Pencadangan terjadwal: konfirmasi keberhasilan atau kegagalan secara instan dan jalankan ulang dari ponsel Anda.
- Job multi-cloud: pertahankan pusat kontrol terpadu bahkan saat Anda tidak berada di depan konsol.
- Respons insiden lebih cepat: hentikan job yang bermasalah, jadwalkan ulang, atau beralih ke preset lain dengan cepat.

## Tips keamanan

- Hanya Chat ID yang telah dikonfigurasi yang dapat menjalankan perintah.
- Rotasi Bot Token Anda jika suatu saat terekspos.
- Nonaktifkan Telegram Remote Control di pengaturan jika Anda sementara tidak memerlukan kontrol jarak jauh.

## Sumber daya terkait

- [Cara menggunakan Kontrol Jarak Jauh Telegram (tutorial)](https://rcloneview.com/support/tutorials/telegram-remote-control)
- [Membuat dan mengelola job](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Menjalankan dan mengelola job](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)
- [Penjadwalan job](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Pemantauan transfer secara real-time](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Menggunakan Terminal bawaan](https://rcloneview.com/support/tutorials/rcloneview-terminal-rclone-cli-inside-gui) <!-- replace with actual link if different -->

## Penutup

Telegram mengubah RcloneView menjadi pusat komando mobile: Anda tetap mendapat notifikasi, dapat memulai atau menghentikan job secara instan, dan merespons kegagalan lebih cepat. Atur sekali, jaga kerahasiaan token, dan jalankan otomatisasi cloud Anda dengan percaya diri bahkan saat Anda jauh dari meja kerja.

<CloudSupportGrid />
