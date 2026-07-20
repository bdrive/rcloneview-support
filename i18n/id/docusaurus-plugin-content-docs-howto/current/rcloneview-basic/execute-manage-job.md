---
sidebar_position: 7
description: Pelajari cara menjalankan, memantau, dan mengelola job sinkronisasi menggunakan Job Manager RcloneView, termasuk dry run, riwayat job, dan notifikasi.
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - job manager
  - run sync job
  - dry run
  - job execution
  - Job Monitor
  - job history
  - scheduled jobs
  - rclone automation
tags:
  - RcloneView
  - Cloud
  - Sync
  - Job-Management
  - cloud-storage
  - job-history
  - job-monitoring
  - Remote-storage-managent
date: 2025-06-16
author: Jay
---
# Menjalankan dan Mengelola Job

Klik toolbar `Job Manager` pada menu utama untuk membuka Job Manager.  

Pilih job yang ingin Anda jalankan, lalu klik tombol **`Run`** untuk mengeksekusinya.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="job run click" class="img-medium img-center" />


<details>
<summary>Deskripsi Kolom </summary>

- `Job Name` : Nama job. - > Ikon ini secara visual merepresentasikan arah sinkronisasi dari sumber ke tujuan. Jika job memiliki beberapa tujuan, ikon terpisah akan ditampilkan untuk setiap remote target.  
- `Source` : Folder pada penyimpanan cloud yang berfungsi sebagai sumber.  
- `Destination` : Folder pada penyimpanan cloud yang berfungsi sebagai tujuan.   
- `Upcoming Schedule` : Menampilkan waktu berikutnya job ini akan dijalankan sesuai jadwal. Jika tidak ada jadwal yang diatur, akan ditampilkan sebagai **Unscheduled**.    
  ⚠️ _Fitur ini hanya tersedia dengan lisensi PLUS._ Lihat:: [Cara mengonfigurasi Penjadwalan Job](/howto/rcloneview-advanced/job-scheduling-and-execution). 
- `Last execution` : Waktu terakhir job ini dijalankan secara otomatis melalui jadwal.   
- `Created At` : Tanggal dan waktu job dibuat.  
- `History` : Membuka riwayat eksekusi untuk job ini. Mengklik ini akan membuka jendela riwayat lengkap.  

</details>

<details>
<summary>Toolbar untuk mengelola Job</summary>

Toolbar untuk mengelola Job

Setelah memilih sebuah job, Anda dapat mengelolanya menggunakan opsi toolbar berikut:

- **`Add Job`** : Membuat dan menambahkan job baru. [Lihat: Cara membuat Job](/howto/rcloneview-basic/create-sync-jobs)  
- **`Edit Job`** : Mengedit job yang dipilih.
- **`Duplicate`** : Membuat salinan dari job yang dipilih. 
  Job hasil duplikasi akan otomatis diberi nama dengan akhiran seperti (1), (2), …, (n).
  Anda kemudian dapat menggunakan Edit Job untuk dengan cepat menyesuaikannya menjadi job baru berdasarkan job asli.  
- **`Delete`** : Menghapus job yang dipilih.

</details>


:::tip 💡 Ekspor dan Impor Job
Klik **ikon pengaturan** <img src="/support/icons/setting-icon.png" alt="setting icon" class="inline-icon" /> di kanan atas **Job Manager** untuk mengekspor job Anda saat ini atau mengimpor job yang sebelumnya disimpan. Job diekspor dan disimpan dalam file bernama `rclone_jobs_~.json`    

:::
### Simulasi: Menjalankan dry run (opsional)

Anda dapat menjalankan **Dry run** untuk mensimulasikan operasi sinkronisasi tanpa membuat perubahan apa pun.

Klik tombol **`Dry run`** untuk mensimulasikan sinkronisasi tanpa membuat perubahan.

- Pratinjau ini menampilkan file mana yang akan disalin ke **Destination** dan file mana yang akan dihapus.
- Klik **`See details`** untuk melihat daftar lengkap operasi yang akan terjadi (misalnya, copy, create, delete) pada tujuan.
- Untuk job dengan beberapa tujuan, hasil dikelompokkan berdasarkan masing-masing tujuan, dengan **`See details`** terpisah untuk setiap tujuan.

<img src="/support/images/en/howto/rcloneview-basic/job-dry-run-result.png" alt="job dry run result" class="img-medium img-center" />

## Memantau hasil eksekusi Job

Anda dapat memeriksa progres dan hasil operasi sinkronisasi secara real time.

### Status Transfer (sedang berlangsung)

- Selama sinkronisasi berlangsung, buka tab **`Transfer`** untuk melihat progres real-time setiap file.
- Klik ikon **+** untuk memperluas dan memantau transfer file secara individual.
<img src="/support/images/en/howto/rcloneview-basic/sync-transfer-window.png" alt="sync transfer window" class="img-medium img-center" />

### Job selesai (setelah eksekusi job)

- Setelah sinkronisasi selesai, buka tab **`Completed`** untuk melihat hasilnya.
- Klik ikon **+** untuk melihat detail tingkat file dari setiap job yang telah selesai.
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-window.png" alt="sync completed window" class="img-medium img-center" />
:::tip Buka remote yang telah disinkronkan dengan cepat
Pada tab **`Completed`**, Anda dapat mengklik dua kali job yang telah selesai untuk membuka folder sumber dan tujuan sekaligus di panel Explorer.  
Ini memudahkan Anda untuk langsung meninjau folder yang telah disinkronkan.
:::

### Notifikasi alarm penyelesaian (Windows)

Setelah sinkronisasi selesai, sebuah popup notifikasi akan muncul di system tray Windows, menampilkan ringkasan operasi sinkronisasi.

  - Anda dapat mengklik **`See details`** untuk melihat rincian lengkap hasilnya.
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-windows-alarm.png" alt="sync completed windows alarm" class="img-medium img-center" />
:::tip Lihat pesan alarm pada notifikasi Windows
Jika Anda melewatkan popup tersebut, Anda tetap dapat memeriksa notifikasi sinkronisasi dengan mengklik **ikon notifikasi** pada **system tray Windows**.
<img src="/support/images/en/howto/rcloneview-basic/click-windows-alarm-notification.png" alt="click windows alarm notification" class="img-small img-left" />
:::


## Melihat Riwayat Job


Dari **`Job Manager`**, klik ikon **`History`** <img src="/support/icons/history-icon.png" alt="history icon" class="inline-icon" /> di sebelah job untuk melihat log eksekusinya.

Jika sebuah job dijalankan dengan beberapa tujuan, setiap tujuan akan ditampilkan sebagai tab terpisah pada riwayat.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-medium img-center" />

<details>
<summary>Deskripsi Kolom</summary>

Deskripsi Kolom


- `Execution Type` : 
	- Manual :  Dijalankan secara manual oleh pengguna
	- Scheduled : -Dijalankan secara otomatis oleh RcloneView 
- `Start Time` : Waktu job dimulai   
- `Time Spent` : Total durasi sinkronisasi  
- `Status` : Hasil eksekusi Job  
	- Completed : Berhasil   
	- Errored : Gagal, dengan pesan error yang tersedia. 
- `Total Size` : Total ukuran data yang ditransfer
- `Speed` : Kecepatan transfer rata-rata. 
- `Files` : Jumlah file yang ditransfer. 
- `Job Type` : Saat ini Sync, pembaruan mendatang mungkin mencakup Copy, Purge, atau Batch jobs   
- `Delete` : Menghapus entri riwayat yang dipilih. 

</details>


<details>
<summary>Toolbar untuk Memfilter & Menghapus Riwayat</summary>

Toolbar untuk Memfilter & Menghapus Riwayat

Ketika sejumlah besar catatan riwayat terkumpul, Anda dapat memfilter atau menghapusnya menggunakan opsi toolbar.

- `From ~ To` : Pilih rentang tanggal khusus menggunakan kalender untuk menampilkan riwayat dalam periode tersebut.  
- `Today` : Hanya menampilkan entri riwayat dari hari ini.  
- `Yesterday` : Menampilkan entri riwayat dari tepat satu hari yang lalu.  
- `Last week` : Menampilkan riwayat dari 7 hari terakhir.
- `Last month` : Menampilkan riwayat dari 30 hari terakhir.
- `Delete all` : - Menghapus permanen semua catatan riwayat.   ⚠️ _Tindakan ini tidak dapat dibatalkan. Harap lakukan dengan hati-hati._

</details>



