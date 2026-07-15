---
sidebar_position: 7
description: "Pelajari cara mentransfer dan menyinkronkan file antara Box dan Google Drive dengan mulus menggunakan GUI RcloneView—dengan fitur drag-and-drop, perbandingan folder, dan penjadwalan tugas."
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - cloud to cloud transfer
  - rclone GUI
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
  - Box
  - google drive
  - box to google drive
tags:
  - RcloneView
  - Cloud
  - Sync
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - box
  - google-drive
  - cloud-to-cloud
date: 2025-07-10
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Panduan Transfer File Box ↔ Google Drive

Platform penyimpanan cloud seperti **Box** dan **Google Drive** masing-masing menawarkan keunggulan unik. Box dirancang untuk kolaborasi perusahaan dengan fitur keamanan dan alur kerja tingkat lanjut, sementara Google Drive terintegrasi secara mulus dengan Google Workspace dan menawarkan ruang penyimpanan gratis yang besar. Namun, mengelola file di kedua platform ini bisa merepotkan—terutama saat Anda perlu memigrasikan data di antara keduanya.

Dengan **RcloneView**, Anda dapat dengan mudah **mentransfer file dua arah** antara Box dan Google Drive menggunakan GUI yang intuitif—tanpa memerlukan command-line.

  
<img src="/support/images/en/tutorials/transfer-files-between-box-and-google-drive.png" alt="transfer files between box and google drive" class="img-medium img-center" />

## **Mengapa Menggunakan RcloneView untuk Transfer Multi-Cloud?**

RcloneView menyederhanakan transfer cloud yang kompleks dengan menawarkan:

- Integrasi OAuth yang aman untuk Box dan Google Drive  
- Transfer file drag-and-drop antar cloud
- Alat perbandingan folder untuk melihat pratinjau perbedaan sebelum transfer  
- Sinkronisasi dan penjadwalan transfer serta pencadangan berulang
- Pratinjau dry-run, filter, dan opsi transfer tingkat lanjut  
- Pemantauan transfer di latar belakang dengan log progres  

Alih-alih mengunduh lalu mengunggah ulang file secara manual, RcloneView memanfaatkan transfer berbasis API langsung—membuat alur kerja Anda lebih cepat dan andal.

## 🔄 Transfer File: Box ↔ Google Drive

### Langkah 1: Hubungkan Remote Cloud Anda

1. Jalankan **RcloneView**, lalu pilih **`+ New Remote`** dari menu **Remote**.  
2. Pada tab **`Provider`**, cari dan pilih **Box**.
3. Selesaikan login OAuth sesuai petunjuk.
4. Ulangi proses yang sama untuk **Google Drive**.


👉 Pelajari lebih lanjut:  

- [Menambahkan Remote Box](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)  
- [Menambahkan Remote Google Drive](/howto/#step-2-adding-remote-storage-google-drive-example)

### Langkah 2: Buka Remote Secara Berdampingan

1. Buka tab **Browse** pada panel Explorer.
2. Di salah satu panel, klik ikon plus `+` dan pilih remote **Box** Anda.
3. Di panel lainnya, klik `+` dan pilih remote **Google Drive** Anda.
4. Kedua remote akan muncul berdampingan, memudahkan drag, salin, atau sinkronisasi di antara keduanya.

Sekarang Anda dapat melakukan transfer di antara keduanya dengan mulus.

<img src="/support/images/en/tutorials/open-box-and-google-drive-remotes.png" alt="open box and google drive remotes" class="img-medium img-center" />

### 📌 4 Metode Transfer File

RcloneView menawarkan beberapa cara fleksibel untuk memindahkan atau menyinkronkan data dari Box ke Google Drive. Pilih yang sesuai dengan alur kerja Anda:

#### 🖱️ Metode 1: Drag & Drop Antar Panel Explorer

1. Buka **RcloneView** dan navigasikan ke tab **Browse**.
2. Pastikan remote Box dan Google Drive terlihat berdampingan.
3. **Seret file atau folder** dari panel Box dan **lepaskan** ke panel Google Drive.
4. Transfer dimulai secara otomatis. Pantau progres di tab Log **`Transfer`**.

Antarmuka drag-and-drop yang intuitif ini membuat transfer cloud-to-cloud jadi mudah—tanpa perlu perintah.

👉 Detail lebih lanjut: [Menjelajah & Mengelola Penyimpanan Remote](/howto/rcloneview-basic/browse-and-manage-remote-storage)

#### 🔍 Metode 2: Bandingkan Isi Folder, Salin, atau Hapus

1. Di kedua panel Explorer, navigasikan dan pilih folder yang ingin Anda bandingkan (kiri: Box, kanan: Google Drive).
2. Klik tombol **`Compare`** di menu utama.
3. RcloneView akan menyorot:
   - File yang hanya ada di satu sisi
   - File dengan nama sama tetapi ukuran berbeda
   - File yang identik
4. Pilih file untuk ditransfer atau dihapus.
5. Untuk mentransfer file dari kiri ke kanan, klik **`Copy →`**. Untuk mentransfer dari kanan ke kiri, gunakan **`← Copy`**. Untuk menghapus file, klik **`Delete`**.
6. Progres dan ringkasan pembaruan muncul di bilah status.

Perbandingan visual membantu mencegah kesalahan dan memastikan Anda hanya memindahkan apa yang diinginkan.

👉 Pelajari lebih lanjut: [Panduan Membandingkan Isi Folder](/howto/rcloneview-basic/compare-folder-contents)

  
#### 🔁 Metode 3: Gunakan Sync atau Job

1. Di panel Explorer, pilih folder **Box** dan folder **Google Drive** yang ingin Anda sinkronkan.
2. Klik tombol **`Sync`** di menu `home`.
3. Pilih opsi sinkronisasi (satu arah atau dua arah), pratinjau tindakan, dan konfirmasi.
4. RcloneView menjalankan sinkronisasi dan menampilkan progres di tab log **`transfer`**.

- Untuk transfer berulang atau terjadwal:
  1. Klik **`Save to Jobs`** di modal Sync, atau buka **`Job Manager`** → **`Add Job`**.
  2. Konfigurasikan sumber, tujuan, dan opsi.
  3. Simpan dan jalankan secara manual atau atur jadwal.

👉 Pelajari lebih lanjut:
- [Menyinkronkan Penyimpanan Remote](/howto/rcloneview-basic/synchronize-remote-storages)
- [Membuat Sync Job](/howto/rcloneview-basic/create-sync-jobs)
- [Menjalankan & Mengelola Job](/howto/rcloneview-basic/execute-manage-job)

  
#### ⏰ Metode 4: Jadwalkan Sync Job Otomatis

1. Di panel Explorer, pilih folder **Box** dan **Google Drive** yang ingin Anda jaga tetap sinkron.
2. Buka **`Job Manager`** dari menu **`Home`** atau **`Remote`**, lalu klik **`Add Job`**.
3. Konfirmasikan sumber dan tujuan Anda.
4. Gunakan editor jadwal untuk mengatur waktu job dijalankan. Pratinjau jadwal Anda sebelum menyimpan.
5. Simpan dan aktifkan job terjadwal.

RcloneView akan menjalankan sinkronisasi pada waktu yang Anda tentukan. Periksa detail eksekusi dan log di **`Job History`** dan terima notifikasi setelah selesai.

👉 Pelajari lebih lanjut: [Penjadwalan dan Eksekusi Job](/howto/rcloneview-advanced/job-scheduling-and-execution)

  
## ✅ Ringkasan

Baik untuk migrasi data satu kali maupun menjaga sinkronisasi berkelanjutan, RcloneView memungkinkan transfer file yang cepat, aman, dan andal antara Box dan Google Drive—menghilangkan kebutuhan akan unduhan manual atau alat command-line.

  
Cobalah dan permudah alur kerja multi-cloud Anda!

  
## 🔗 Panduan Terkait

- [Cara Menambahkan Remote Box](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)  
- [Cara Menambahkan Remote Google Drive](/howto/#step-2-adding-remote-storage-google-drive-example)  
- [Menjelajah & Mengelola Penyimpanan Remote](/howto/rcloneview-basic/browse-and-manage-remote-storage)  
- [Membandingkan Isi Folder](/howto/rcloneview-basic/compare-folder-contents)  
- [Menyinkronkan Penyimpanan Remote](/howto/rcloneview-basic/synchronize-remote-storages)  
- [Membuat Sync Job](/howto/rcloneview-basic/create-sync-jobs)  
- [Menjalankan & Mengelola Job](/howto/rcloneview-basic/execute-manage-job)  
- [Penjadwalan dan Eksekusi Job](/howto/rcloneview-advanced/job-scheduling-and-execution)

  

<CloudSupportGrid />
