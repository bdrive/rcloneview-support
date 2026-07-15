---
sidebar_position: 12
description: Pindahkan file dari OneDrive ke Wasabi dengan kecepatan tinggi dengan menjalankan daemon Rclone eksternal dan mengendalikannya dengan RcloneView.
keywords:
  - rcloneview
  - rclone
  - external rclone
  - onedrive
  - wasabi
  - s3 compatible
  - cloud migration
  - cloud sync
  - cloud transfer
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - onedrive
  - wasabi
date: 2025-07-15
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Pindahkan OneDrive ke Wasabi via Rclone Eksternal

Saat kumpulan data Microsoft 365 berukuran besar, memindahkannya melalui laptop bisa lambat dan tidak stabil. Menjalankan **Rclone** pada VM cloud (EC2, GCE, atau host Linux mana pun) dan mengendalikannya dari **RcloneView** membuat lalu lintas data tetap berada di data center, menghindari bottleneck jaringan rumah, dan memungkinkan autentikasi tanpa browser.

Anda akan:

1. Menjalankan **rclone rcd** pada server jarak jauh sebagai engine eksternal.
2. Membuka **jendela RcloneView baru** yang terhubung ke Rclone eksternal tersebut.
3. Menambahkan remote **OneDrive** dan **Wasabi** (termasuk jalur autentikasi headless/khusus CLI).
4. Menyalin, menyinkronkan, atau menjadwalkan job dari OneDrive ke Wasabi tanpa membebani bandwidth lokal.

## Bagian 1. Deploy Rclone di Server (Rclone Eksternal)

1. Jalankan VM Linux kecil (misalnya, `t3.medium` di AWS atau setara).  
2. Buka TCP **5572** ke IP Anda atau tunnel melalui SSH.  
3. Instal Rclone:
```bash
curl https://rclone.org/install.sh | sudo bash
```
4. Jalankan daemon remote-control dengan autentikasi:
```bash
rclone rcd --rc-addr=0.0.0.0:5572 --rc-user=admin --rc-pass=admin --log-level INFO
```
5. Dari laptop Anda, pastikan server dapat diakses:
```bash
curl -u admin:admin -X POST "http://<SERVER-IP>:5572/rc/noop"
```
   Respons `{}` berarti daemon siap digunakan oleh RcloneView.

👉 Butuh penyegaran? Lihat [Run Rclone on AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2).

## Bagian 2. Buka Jendela RcloneView Baru

Setiap jendela RcloneView dapat dipasangkan dengan instance Rclone yang berbeda.

1. Jalankan **RcloneView**.  
2. Klik **`New Window`** dari menu **Home**.  
3. Jendela kedua terbuka; jendela ini akan terhubung ke Rclone eksternal yang baru saja Anda jalankan.

👉 Pelajari lebih lanjut: [Using Multiple Rclone Connections with New Window](/howto/rcloneview-advanced/multi-window).

## Bagian 3. Hubungkan RcloneView ke Rclone Eksternal

Pada jendela baru:

1. Buka **Settings -> Connection Manager** -> **New Connection**.  
2. Isi:

| Field          | Value                              |
| -------------- | ---------------------------------- |
| Display Name   | `external-rclone`                  |
| Remote Address | `http://<SERVER-IP>:5572`          |
| Username       | `admin`                            |
| Password       | `admin`                            |

3. Klik **Test Connection** -> **Save** -> **Connect**. Status bar akan menunjukkan bahwa Anda terhubung ke daemon eksternal.

## Bagian 4. Tambahkan Remote Wasabi dan OneDrive (Di Dalam Rclone Eksternal)

Semua remote yang Anda buat sekarang berada di dalam proses Rclone eksternal dan digunakan bersama oleh jendela RcloneView yang terhubung.

### ➕ Tambahkan Wasabi (Kompatibel S3)

1. Buka tab **Remote** -> **`+ New Remote`**.  
2. Pilih **S3 / Wasabi**.  
3. Masukkan **Access Key**, **Secret Key**, dan **endpoint** untuk region Anda (misalnya `s3.ap-northeast-2.wasabisys.com`).  
4. Simpan remote (misalnya, beri nama `wasabi-prod`).

👉 Detail: [How to Add Wasabi Remote](/tutorials/#2-add-wasabi-as-a-remote-in-rcloneview).

### ➕ Tambahkan OneDrive (Berfungsi Tanpa Browser Lokal)

1. Klik **`+ New Remote`** lagi dan pilih **OneDrive**.  
2. Jika server memiliki browser, selesaikan alur OAuth standar di RcloneView.  
3. Jika server bersifat headless atau tidak dapat membuka browser, ikuti metode headless/CLI: buat token pada perangkat yang memiliki browser, lalu tempelkan ke konfigurasi sisi server.  

👉 Alur headless langkah demi langkah: [Add Microsoft remotes from EC2/headless](/howto/remote-storage-connection-settings/ec2-onedrive-headless).
Setelah disimpan, Anda akan melihat dua remote terdaftar di Explorer: **OneDrive** dan **Wasabi**.

## Bagian 5. Transfer atau Sinkronisasi ke Wasabi

### Metode A: Copy/Sync Sekali Jalan

1. Di Explorer, buka **OneDrive** di satu sisi dan **Wasabi** di sisi lainnya.  
2. Pilih folder sumber di OneDrive dan bucket/folder tujuan di Wasabi.  
3. Klik **`Sync`** (membuat tujuan sesuai dengan sumber) atau gunakan **Copy ->** untuk penyalinan sederhana.  
4. Opsional, jalankan **Dry Run** terlebih dahulu, lalu **Run** untuk memulai. Progres akan muncul di tab **Transfer**.

### Metode B: Simpan atau Jadwalkan Job

1. Konfigurasikan copy/sync seperti di atas, lalu pilih **Save to Jobs** pada dialog.  
2. Buka **Job Manager** untuk menjalankan ulang job yang tersimpan kapan saja.  
3. Untuk mengotomatiskan, aktifkan **Schedule** di Job Manager (fitur PLUS) dan atur jadwal yang diinginkan.  
4. Periksa **Job History** untuk log dan hasilnya.

👉 Selengkapnya tentang job dan penjadwalan:  
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)  
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)  
- [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

## Tips Cepat untuk Upload Wasabi Lebih Cepat

- Jaga agar VM eksternal berada di region yang sama dengan Wasabi jika memungkinkan untuk mengurangi latensi.  
- Untuk objek berukuran besar, nilai `--transfers` dan `--s3-upload-concurrency` yang lebih tinggi dapat meningkatkan throughput; sesuaikan secara bertahap berdasarkan CPU dan jaringan.  
- Gunakan **Dry Run** sebelum melakukan sinkronisasi yang destruktif untuk memastikan apa yang akan berubah.

## ✅ Penutup

Dengan menjalankan Rclone sebagai daemon jarak jauh dan mengendalikannya dari jendela RcloneView khusus, Anda mendapatkan migrasi OneDrive -> Wasabi yang andal tanpa bottleneck lokal. Alur autentikasi headless tetap mendukung Anda saat tidak ada browser yang tersedia, dan job/penjadwalan membuat proses berulang menjadi mudah.

## 🔗 Panduan Terkait

- **Autentikasi & Remote**  
  - [Add Microsoft remotes from EC2/headless](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-onedrive-headless)  
  - [How to Add S3-Compatible Remote](/howto/remote-storage-connection-settings/s3)  
- **Rclone Eksternal & Jendela**  
  - [Using Multiple Rclone Connections with New Window](/howto/rcloneview-advanced/multi-window)  
  - [Run Rclone on AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)  
- **Transfer & Otomatisasi**  
  - [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)  
  - [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)  
  - [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
