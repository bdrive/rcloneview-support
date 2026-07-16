---
slug: rcloneview-aws-ec2-cloud-sync
title: "Menjalankan RcloneView di AWS EC2 untuk Sinkronisasi Cloud Sisi Server"
authors:
  - tayson
description: "Jalankan RcloneView pada instance AWS EC2 untuk sinkronisasi cloud, migrasi, dan pencadangan sisi server. Akses GUI dari jarak jauh dan manfaatkan bandwidth EC2 untuk transfer yang cepat."
keywords:
  - rcloneview
  - aws ec2 cloud sync
  - rcloneview ec2
  - server cloud sync
  - ec2 rclone gui
  - cloud migration server
  - headless cloud sync
  - ec2 data transfer
  - aws ec2 file manager
  - server-side cloud transfer
tags:
  - RcloneView
  - platform
  - amazon-s3
  - cloud-sync
  - guide
  - cloud-migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Menjalankan RcloneView di AWS EC2 untuk Sinkronisasi Cloud Sisi Server

> Menjalankan RcloneView pada instance AWS EC2 memberi Anda bandwidth setara server untuk transfer cloud, operasi 24/7 untuk tugas terjadwal, dan menghilangkan kebutuhan untuk merutekan data melalui komputer lokal Anda.

Saat memigrasikan data hingga terabyte antar penyedia cloud, koneksi internet lokal Anda menjadi hambatan utama. Instance AWS EC2 dengan jaringan gigabit dapat mentransfer data antar layanan cloud dengan kecepatan yang tidak bisa ditandingi koneksi rumah atau kantor Anda. Menjalankan RcloneView di EC2 juga berarti transfer terus berjalan 24/7 tanpa perlu menyalakan komputer lokal, dan data yang berpindah antara S3 dan layanan AWS lainnya tetap berada di dalam jaringan Amazon — seringkali tanpa biaya egress.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Menjalankan RcloneView di EC2

- **Kecepatan**: Instance EC2 di pusat data AWS memiliki koneksi jaringan multi-gigabit. Transfer antara S3 dan penyedia eksternal memanfaatkan bandwidth ini alih-alih koneksi lokal Anda.
- **Transfer S3 gratis**: Transfer data antara EC2 dan S3 dalam region yang sama bersifat gratis. Untuk migrasi S3-ke-cloud berskala besar, menjalankan di EC2 menghilangkan biaya terbesar — egress lokal.
- **Operasi 24/7**: Tugas terjadwal berjalan terus-menerus tanpa perlu menyalakan komputer desktop. Instance EC2 menangani pencadangan malam hari, migrasi mingguan, dan tugas sinkronisasi yang berkelanjutan.
- **Kedekatan dengan data**: Jika data sumber Anda berada di AWS (S3, EBS, EFS), menjalankan RcloneView di EC2 menempatkannya di dekat data untuk latensi minimum.
- **Akses tim**: Beberapa anggota tim dapat mengakses instance RcloneView yang sama dari jarak jauh, berbagi konfigurasi dan riwayat tugas.

## Menyiapkan Instance EC2

### Pemilihan Instance

Untuk sebagian besar beban kerja RcloneView, instance kecil hingga menengah sudah cukup:

- **t3.medium** (2 vCPU, 4 GB RAM): Cocok untuk tugas sinkronisasi ringan dan migrasi kecil.
- **m5.large** (2 vCPU, 8 GB RAM): Lebih baik untuk transfer bersamaan dan operasi file besar.
- **c5.xlarge** (4 vCPU, 8 GB RAM): Untuk beban kerja migrasi berat dengan banyak transfer paralel.

Pilih instance di region yang sama dengan bucket S3 Anda untuk menghindari biaya transfer lintas region.

### Sistem Operasi

Luncurkan instance dengan Ubuntu Server LTS atau Amazon Linux 2. Keduanya mendukung RcloneView tanpa masalah. Instal lingkungan desktop yang ringan untuk GUI:

```
# Ubuntu
sudo apt update && sudo apt install -y xfce4 xrdp

# Amazon Linux 2
sudo yum install -y xrdp xfce
```

Aktifkan dan jalankan layanan RDP agar Anda dapat terhubung ke GUI dari jarak jauh.

### Konfigurasi Security Group

Buka port berikut pada security group EC2 Anda:

- **Port 3389** (RDP): Untuk akses remote desktop ke GUI. Batasi hanya untuk alamat IP Anda.
- **Port 22** (SSH): Untuk akses terminal. Batasi hanya untuk alamat IP Anda.
- **Port 53682** (opsional): Jika Anda perlu menjalankan alur OAuth dari instance EC2, ini adalah port callback OAuth default rclone. Sebagai alternatif, gunakan konfigurasi OAuth headless.

## Menginstal RcloneView di EC2

SSH ke instance dan unduh RcloneView:

1. Unduh paket AppImage atau .deb Linux dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Jadikan AppImage dapat dieksekusi: `chmod +x RcloneView-*.AppImage`
3. Hubungkan melalui RDP dan jalankan RcloneView dari lingkungan desktop.

## OAuth Headless untuk Penyedia Cloud

Instance EC2 biasanya tidak memiliki browser lokal untuk alur OAuth. Untuk penyedia yang memerlukan OAuth (Google Drive, OneDrive, Dropbox), gunakan autentikasi headless:

1. Di komputer lokal Anda, jalankan `rclone authorize "drive"` (atau penyedia yang relevan) untuk menyelesaikan alur OAuth.
2. Salin token yang dihasilkan.
3. Di instance EC2, tempelkan token tersebut ke dalam konfigurasi remote RcloneView.

Sebagai alternatif, konfigurasikan RcloneView dengan instance rclone eksternal dan siapkan token OAuth melalui pengelola koneksi RcloneView.

<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="Configuring external rclone on EC2 for RcloneView" class="img-large img-center" />

## Mengonfigurasi Akses S3

Untuk akses S3 dari EC2, gunakan IAM instance role alih-alih access key statis. Lampirkan IAM role dengan izin S3 ke instance EC2, dan rclone akan menggunakan instance metadata service untuk mendapatkan kredensial sementara secara otomatis. Ini lebih aman daripada menyimpan access key di instance.

Dalam konfigurasi remote S3 RcloneView, kosongkan kolom access key dan secret key lalu atur environment auth agar menggunakan instance profile.

## Menjalankan Migrasi Berskala Besar

Dengan bandwidth EC2, migrasi besar yang memakan waktu berhari-hari pada koneksi rumah dapat selesai dalam hitungan jam:

- **1 TB Google Drive ke S3**: Sekitar 2-4 jam pada kecepatan berkelanjutan.
- **10 TB S3 ke Backblaze B2**: Sekitar 1-2 hari tergantung pada pembatasan API B2.
- **Replikasi S3 lintas region**: Mendekati kecepatan jaringan internal di dalam AWS.

Transfer multi-thread RcloneView memanfaatkan sepenuhnya kapasitas jaringan EC2. Atur transfers ke 16-32 dan checkers ke 16 untuk throughput maksimum pada instance yang lebih besar.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Large-scale migration running on EC2 in RcloneView" class="img-large img-center" />

## Menjadwalkan Tugas Sisi Server

Penjadwal bawaan RcloneView menangani tugas berulang. Konfigurasikan pencadangan malam hari dari Google Drive ke S3, sinkronisasi mingguan antara S3 dan Backblaze B2, atau replikasi harian ke region DR. Instance EC2 menjalankan tugas ini terlepas dari apakah Anda terhubung melalui RDP atau tidak.

Biarkan instance EC2 berjalan terus-menerus untuk tugas terjadwal, atau gunakan jadwal start/stop (melalui AWS Instance Scheduler atau fungsi Lambda) untuk menjalankan instance hanya selama jendela waktu pencadangan.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling server-side sync jobs on EC2 in RcloneView" class="img-large img-center" />

## Manajemen Biaya

Biaya EC2 bervariasi berdasarkan tipe instance dan waktu berjalan:

- **t3.medium on-demand**: ~$0,042/jam ($30/bulan jika berjalan 24/7)
- **Spot instance**: Hingga 90% lebih murah untuk beban kerja yang dapat diinterupsi seperti migrasi satu kali.
- **Reserved instance**: Tarif per jam lebih rendah untuk pengaturan sinkronisasi sisi server jangka panjang.

Untuk migrasi satu kali, gunakan spot instance — luncurkan, jalankan migrasi, verifikasi, lalu hentikan. Untuk pencadangan terjadwal yang berkelanjutan, reserved t3.small atau t3.medium lebih hemat biaya.

Ingat: transfer data S3 dalam region yang sama dari EC2 bersifat gratis. Transfer data keluar ke internet (misalnya, ke Backblaze B2 atau Google Drive) dikenakan biaya egress standar AWS.

## Memulai

1. Luncurkan instance EC2 dengan Ubuntu atau Amazon Linux dan lingkungan desktop.
2. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html) dan instal pada instance.
3. Konfigurasikan remote menggunakan OAuth headless untuk penyedia cloud dan IAM role untuk S3.
4. Jalankan migrasi dan jadwalkan tugas pencadangan dengan memanfaatkan bandwidth EC2.
5. Hentikan atau matikan instance saat tidak digunakan untuk mengendalikan biaya.

Menjalankan RcloneView di EC2 memberi Anda kecepatan jaringan pusat data AWS, kemudahan GUI untuk mengelola transfer, dan operasi 24/7 untuk tugas terjadwal — pengaturan ideal untuk migrasi cloud berskala besar dan sinkronisasi sisi server yang berkelanjutan.

---

**Panduan Terkait:**

- [Menambahkan AWS S3 dan yang Kompatibel dengan S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Menambahkan OneDrive headless](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-onedrive-headless)
- [Google Drive Headless](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-google-drive-connection)
- [Contoh rclone eksternal](https://rcloneview.com/support/tutorials/new-window-with-external-rclone)

<CloudSupportGrid />
