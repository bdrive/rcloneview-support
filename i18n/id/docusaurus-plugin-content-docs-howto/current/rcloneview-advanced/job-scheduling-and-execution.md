---
sidebar_position: 2
description: "Pelajari cara menjalankan sync job secara otomatis di RcloneView menggunakan opsi penjadwalan yang fleksibel. Memerlukan lisensi Plus."
keywords:
  - rcloneview
  - job scheduling
  - sync automation
  - scheduled sync
  - rclone
  - job manager
  - cloud sync
  - job scheduler
  - rclone automation
  - crontab
  - plus license
  - recurring sync
tags:
  - RcloneView
  - Job-Manager
  - Scheduling
  - Sync
  - PLUS-Feature
  - automation
date: 2025-05-23
author: Jay
---
# Penjadwalan Job dan Eksekusi Otomatis

Penjadwalan Job memungkinkan Anda menjalankan Sync Job secara otomatis pada waktu dan interval tertentu.


:::important ANDA MEMERLUKAN LISENSI PLUS UNTUK MENJADWALKAN JOB
Anda perlu membeli [**lisensi PLUS**](https://rcloneview.com/src/pricing.html) untuk mengaktifkan fitur ini.
:::


## Mengatur Penjadwalan Job

Anda dapat mengonfigurasi penjadwalan saat:

- Membuat job baru ([Langkah 4: Penjadwalan](/howto/rcloneview-basic/create-sync-jobs#step4-scheduling-available-with-plus-license))
- Mengedit job yang sudah ada untuk menambahkan jadwal

## Menambah atau Mengedit Job untuk Mengonfigurasi Penjadwalan


Untuk membuka **`Job Manager`**, klik ikon toolbar di menu Home.  
Kemudian, klik **`Add Job`** atau **`Edit Job`**, lalu buka **Langkah 4: Penjadwalan**.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-medium img-center" />
### **Cara Menjadwalkan Job**

1. Centang kotak berlabel **`Run whenever time units ~`** untuk mengaktifkan penjadwalan.
2. Tetapkan jadwal pengulangan yang diinginkan menggunakan kolom Time dan Date.
3. Klik **`Simulate`** untuk melihat pratinjau kapan job akan dijalankan.
4. Setelah memastikan jadwal sudah benar, klik **`Save`**.

  Setelah disimpan, klik ikon kalender <img src="/support/icons/calendar-icon.png" alt="calendar icon" class="inline-icon" /> atau **tanggal terjadwal** di bawah **`Upcoming Schedule`** untuk meninjau secara visual waktu eksekusi yang telah dikonfigurasi.

<img src="/support/images/en/howto/rcloneview-advanced/verify-job-schedule.png" alt="verify job schedule" class="img-medium img-center" />

<details>
<summary>Memahami Kolom Time dan Date</summary>

Memahami Kolom Time dan Date

**Konfigurasi jadwal mendukung nilai bergaya Crontab**, memungkinkan penjadwalan yang presisi dan fleksibel untuk memenuhi berbagai kebutuhan pengguna.

| Nama Kolom   | Nilai yang Diizinkan | Deskripsi                             |
| ------------ | -------------- | --------------------------------------- |
| Minute       | 0-59           | Menit dalam satu jam                      |
| Hour         | 0-23           | Jam dalam satu hari                         |
| Day of Week  | 0-6            | 0 = Minggu, 1 = Senin, …, 6 = Sabtu |
| Day of Month | 1-31           | Tanggal dalam bulan                                        |
| Month        | 1-12           | 1 adalah Januari, 2 adalah Februari, dan seterusnya. |

**Format yang Diterima:**

- **Nilai kosong** : Cocok dengan setiap unit (misalnya, setiap menit jika Minutes dikosongkan).
- **n1, n2, ...** : Daftar nilai (misalnya, 1,3,5 untuk Senin, Rabu, Jumat).
- **n1-n2** : Rentang nilai (misalnya, 0-2 berarti 0, 1, 2).
- **n1-n2/n3**: Rentang dengan step (misalnya, 6-12/3 berarti 6, 9, 12).

Kolom-kolom — **Minute**, **Hour**, **Day of Week**, **Day of Month**, dan **Month** — bekerja bersama menggunakan operasi logika **AND**. Artinya job hanya akan berjalan jika **semua** kondisi terpenuhi.

📌 Contoh: **Menjalankan sync job pukul 1:30 pagi pada hari Minggu pertama setiap bulan**. 
Untuk mencapai jadwal ini, konfigurasikan kolom berikut:

- **Time (1:30 AM):**
    - **Minute:** 30
    - **Hour:** 1
    
- **Date (Minggu pertama setiap bulan):**
    - **Day of Month:** 1-7 — cocok dengan tujuh hari pertama dalam bulan
    - **Day of Week:** 0 — di mana 0 mewakili Minggu
    - **Month:** _Kosongkan_ — berlaku untuk semua bulan

✅ Kombinasi ini memastikan job berjalan **hanya ketika tanggal berada dalam minggu pertama** dan **jatuh pada hari Minggu**, sehingga secara efektif menjadwalkannya untuk hari Minggu pertama setiap bulan pukul 1:30 pagi.

<img src="/support/images/en/howto/rcloneview-advanced/example-of-job-schedule.png" alt="example of job schedule" class="img-medium img-center" />

</details>


:::caution RcloneView Harus Berjalan agar Job Terjadwal Dapat Dieksekusi
Agar job terjadwal dapat berjalan dengan baik, **RcloneView harus berjalan** di latar belakang.  
Jika job Anda dikonfigurasi untuk menggunakan engine `rclone` eksternal, pastikan instance `rclone` eksternal tersebut juga aktif dan berjalan pada waktu yang dijadwalkan.  
:::

## Memeriksa Hasil Penjadwalan Job


### **Melihat Riwayat Eksekusi di Job Manager**

  
Anda dapat memverifikasi waktu eksekusi terbaru (`Last execution`) maupun jadwal berjalan berikutnya (`Upcoming Schedule`) di jendela **Job Manager**.

<img src="/support/images/en/howto/rcloneview-advanced/open-job-schedule-history.png" alt="open job schedule history" class="img-medium img-center" />
Untuk melihat detail riwayat eksekusi job:

- Buka **Job Manager**.
- Klik **ikon history** <img src="/support/icons/history-icon.png" alt="history icon" class="inline-icon" />untuk membuka riwayat eksekusi job untuk job yang dipilih.
  

Pada kolom **`Execution Type`**, entri yang ditandai sebagai `Scheduled` menunjukkan bahwa job dipicu secara otomatis oleh scheduler.

<img src="/support/images/en/howto/rcloneview-advanced/view-history-of-scheduled-job.png" alt="view history of scheduled job" class="img-medium img-center" />


:::info Verifikasi Log untuk Beberapa Destinasi  
Jika job Anda mencakup beberapa remote destinasi, klik masing-masing tab destinasi satu per satu pada tampilan History untuk meninjau detail log setiap target.
:::


### Notifikasi alarm penyelesaian (Windows)

Setelah job selesai, sebuah **popup notifikasi** akan muncul di system tray Windows, menampilkan ringkasan operasi sinkronisasi.

  - Anda dapat mengklik **`See details`** untuk melihat rincian lengkap hasilnya.
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-windows-alarm.png" alt="sync completed windows alarm" class="img-medium img-center" />
:::tip Lihat pesan alarm pada notifikasi Windows
Jika Anda melewatkan popup tersebut, Anda tetap dapat memeriksa peringatan sinkronisasi dengan mengklik **ikon notifikasi** di **system tray Windows**.
<img src="/support/images/en/howto/rcloneview-basic/click-windows-alarm-notification.png" alt="click windows alarm notification" class="img-small img-left" />
:::

