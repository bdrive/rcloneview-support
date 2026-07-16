---
slug: secure-rcloneview-app-lock-password
title: "Kunci RcloneView dengan App Lock: Lindungi Remote, Job, dan Riwayat"
authors:
  - tayson
description: "Tambahkan gerbang kata sandi ke RcloneView dengan App Lock sehingga hanya pengguna yang berwenang yang dapat melihat remote, riwayat transfer, job, mount, dan database internal—bahkan di PC bersama."
keywords:
  - keamanan rcloneview
  - rcloneview app lock
  - proteksi kata sandi rclone
  - gui rclone aman
  - lindungi remote rclone
  - rclone_view.db
  - keamanan otomatisasi cloud
  - keamanan pc bersama
  - proteksi riwayat job
  - proteksi riwayat transfer
tags:
  - security
  - job-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';


# Kunci RcloneView dengan App Lock: Lindungi Remote, Job, dan Riwayat

> PC bersama atau perusahaan? Aktifkan App Lock untuk mewajibkan kata sandi sebelum siapa pun dapat membuka RcloneView, sehingga remote, job, dan riwayat transfer tetap tersembunyi.

App Lock milik RcloneView menambahkan layar kata sandi sederhana saat aplikasi diluncurkan atau dibuka kembali. Fitur ini melindungi database internal (`rclone_view.db`), yang menyimpan remote, definisi job, pengaturan mount, riwayat job, dan log transfer Anda—sehingga otomatisasi yang sensitif tetap privat meskipun workstation digunakan bersama.

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Apa yang dilindungi App Lock

- Definisi remote dan kredensial yang tersimpan di `rclone.conf` (akses dibatasi oleh aplikasi)  
- Riwayat dan log transfer  
- Pengaturan dan jadwal job  
- Konfigurasi mount dan status UI  
- Database SQLite (`rclone_view.db`) yang menghubungkan semuanya

<img src="/support/images/en/tutorials/applock/app-lock-locking.png" class="img-medium img-center" alt="App Lock enabled screen" />

## Siapa yang diuntungkan

- Tim yang berbagi satu workstation atau jump box  
- Admin IT yang menjalankan job sinkronisasi/mount terjadwal dan memerlukan ketahanan terhadap gangguan  
- Pengguna dengan alur kerja lintas-cloud yang sensitif (pencadangan, arsip kepatuhan)  
- Siapa pun yang menginginkan lapisan keamanan cepat tanpa perubahan tingkat OS

## Cara mengaktifkan App Lock (hanya perlu semenit)

1) Buka **Settings → General Settings** di menu atas.  
<img src="/support/images/en/tutorials/applock/mainwindow-menu-settings.png" class="img-medium img-center" alt="Open Settings menu" />

2) Di **General**, centang **Enable App Lock**, masukkan kata sandi Anda, lalu klik **Close**.  
<img src="/support/images/en/tutorials/applock/app-lock-settings.png" class="img-medium img-center" alt="App Lock toggle" />
<img src="/support/images/en/tutorials/applock/app-lock-settings-password.png" class="img-medium img-center" alt="Set App Lock password" />

Selesai. Saat RcloneView dijalankan lagi atau jendelanya dibuka kembali, Anda akan melihat prompt buka kunci.

<img src="/support/images/en/tutorials/applock/app-lock-unlock.png" class="img-medium img-center" alt="App Lock unlock prompt" />

## Mereset saat Anda lupa kata sandi

- Di layar buka kunci, klik **Reset App**.  
- Konfirmasi reset untuk menghapus App Lock dan seluruh data internal (pengaturan, job, riwayat transfer, riwayat job).  
- `rclone.conf` Anda tetap utuh, sehingga definisi remote tetap tersedia setelah Anda membuka aplikasi kembali.

<img src="/support/images/en/tutorials/applock/app-lock-reset-app.png" class="img-medium img-center" alt="Reset App button" />
<img src="/support/images/en/tutorials/applock/app-lock-reset-app-confirm.png" class="img-medium img-center" alt="Reset App confirmation" />

## Praktik terbaik untuk operasi yang aman

- Gunakan App Lock di PC bersama atau di kantor tempat beberapa pengguna dapat membuka sesi Anda.  
- Padukan dengan kata sandi akun OS atau enkripsi disk untuk perlindungan berlapis.  
- Beri nama job secara jelas, tetapi hindari menyisipkan informasi rahasia dalam nama atau catatan job.  
- Cadangkan `rclone_view.db` ke lokasi yang aman dan dapat ditulis pengguna (lihat [ubah lokasi database](/tutorials/change-rcloneview-database-location)).  
- Aktifkan scheduler hanya untuk job yang Anda percaya dan pantau melalui Job History.

## FAQ Singkat

**Apakah App Lock menghentikan job terjadwal?**  
Tidak—job yang telah Anda jadwalkan tetap berjalan. App Lock membatasi akses UI sehingga orang lain tidak dapat melihat atau mengubahnya.

**Bagaimana jika saya mereset App Lock?**  
Data internal terhapus, tetapi `rclone.conf` tetap ada, sehingga remote tetap tersedia. Buat ulang job/riwayat sesuai kebutuhan.

**Apakah saya masih bisa menggunakan Terminal?**  
Ya. Setelah dibuka kuncinya, Terminal bawaan bekerja normal; App Lock hanya membatasi akses saat peluncuran.

## Penutup

Prompt kata sandi mungkin terlihat kecil, tetapi ini adalah pelindung yang kuat untuk remote, otomatisasi, dan riwayat. Aktifkan App Lock, simpan `rclone_view.db` Anda di lokasi yang aman, dan jalankan alur kerja cloud Anda dengan tenang karena tetap privat—bahkan di mesin bersama.

<CloudSupportGrid />
