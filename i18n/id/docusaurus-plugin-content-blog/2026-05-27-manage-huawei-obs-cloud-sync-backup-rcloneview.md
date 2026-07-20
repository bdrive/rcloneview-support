---
slug: manage-huawei-obs-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan Huawei OBS — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - alex
description: "Kelola bucket Huawei OBS dengan RcloneView — sinkronisasi, cadangkan, dan transfer file dengan GUI. Pengaturan S3-compatible, tugas terjadwal, dan transfer lintas cloud."
keywords:
  - Huawei OBS
  - Huawei Object Storage Service
  - RcloneView Huawei OBS
  - sync Huawei OBS
  - backup files to Huawei OBS
  - cloud storage management GUI
  - S3-compatible storage RcloneView
  - Huawei cloud file manager
  - OBS bucket sync rclone
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan Huawei OBS — Sinkronisasi dan Pencadangan File dengan RcloneView

> Hubungkan bucket Huawei OBS ke pengelola file visual, lalu sinkronkan dan cadangkan file di berbagai cloud tanpa menyentuh command line.

Huawei Object Storage Service (OBS) adalah platform penyimpanan objek skalabel setara perusahaan yang digunakan di berbagai penerapan Asia-Pasifik dan lingkungan perusahaan global. Baik Anda mengelola data lake berukuran multi-terabyte atau mencadangkan arsip proyek kantor regional, OBS memberikan keandalan yang diharapkan organisasi besar. RcloneView terhubung ke Huawei OBS melalui API yang kompatibel dengan S3, memberikan pengalaman GUI penuh untuk menjelajahi bucket, mentransfer file, dan menjalankan tugas pencadangan otomatis—sehingga tim Anda menghabiskan waktu untuk pekerjaan sebenarnya, bukan menghafal flag rclone.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan RcloneView ke Huawei OBS

Menambahkan Huawei OBS sebagai remote di RcloneView mengikuti pengaturan S3-compatible yang sama seperti yang digunakan untuk penyedia seperti Alibaba Cloud OSS atau IDrive E2. Dari tab **Remote**, klik **New Remote**, pilih tipe penyedia S3, lalu pilih Huawei OBS dari daftar penyedia. Anda akan memasukkan tiga kredensial: Access Key ID, Secret Access Key, dan URL endpoint regional untuk bucket OBS Anda. Endpoint Huawei mengikuti pola `obs.{region}.myhuaweicloud.com`—misalnya, `obs.cn-north-4.myhuaweicloud.com` untuk region North China 4.

Setelah dikonfigurasi, panel penjelajah file RcloneView menampilkan bucket OBS Anda sebagai folder tingkat atas. Navigasikan prefix objek bertingkat menggunakan bilah jalur breadcrumb, beralih antara tampilan daftar dan thumbnail, serta lihat metadata file—nama, ukuran, dan tanggal modifikasi—sekilas. Pohon folder di sebelah kiri memudahkan menemukan dataset tertentu di lingkungan multi-bucket tanpa harus menggulir daftar file yang datar.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Huawei OBS as an S3-compatible remote in RcloneView" class="img-large img-center" />

RcloneView juga mendukung hingga empat panel penjelajah secara bersamaan, sehingga Anda dapat membuka satu panel ke bucket OBS Anda dan panel lain ke drive lokal atau penyedia cloud lain—memungkinkan perbandingan berdampingan tanpa berpindah jendela.

## Menyinkronkan dan Mencadangkan File ke Huawei OBS

Wizard sinkronisasi 4 langkah RcloneView memudahkan pembuatan tugas pencadangan berulang yang menargetkan Huawei OBS. Tetapkan sumber Anda (folder lokal, jalur NAS, atau remote cloud lain) dan tujuan Anda (prefix bucket OBS), beri nama tugas, lalu konfigurasikan opsi lanjutan. Meningkatkan jumlah transfer bersamaan mempercepat throughput pada koneksi berbandwidth tinggi, sementara mengaktifkan verifikasi checksum memastikan setiap file tiba dengan utuh—sangat berharga saat memindahkan dataset 2TB berupa gambar teknik atau catatan keuangan di mana kerusakan data yang tidak terdeteksi tidak dapat diterima.

Pemfilteran menjaga bucket OBS Anda tetap ramping dan hemat biaya. Kecualikan jenis file besar yang tidak perlu diarsipkan (`.iso`, `.vmdk`), batasi sinkronisasi hanya pada file yang dimodifikasi dalam jendela waktu bergulir menggunakan filter max-age, atau batasi kedalaman folder untuk menghindari penyalinan direktori sementara yang bertingkat dalam. Bagi organisasi dengan persyaratan kepatuhan, filter ini memastikan hanya file yang tepat yang mencapai OBS tanpa pemilihan manual pada setiap eksekusi.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Huawei OBS in RcloneView" class="img-large img-center" />

Jalankan simulasi dry-run sebelum eksekusi langsung pertama—RcloneView menunjukkan secara tepat file mana yang akan ditambahkan atau dihapus tanpa menyentuh data apa pun, jaring pengaman penting saat menyinkronkan bucket produksi.

## Menjadwalkan Pencadangan Otomatis dan Memantau Tugas

Dengan lisensi RcloneView PLUS, pencadangan Huawei OBS Anda berjalan secara otomatis menggunakan penjadwalan bergaya crontab. Konfigurasikan pencadangan diferensial setiap malam pukul 02:00 pada setiap hari kerja, sinkronisasi bucket penuh mingguan setiap Minggu, atau kadensi apa pun yang sesuai dengan siklus hidup data Anda. Simulator jadwal di wizard menampilkan pratinjau lima waktu eksekusi berikutnya sehingga Anda dapat memverifikasi pola sebelum menerapkannya.

Riwayat tugas menyediakan jejak audit lengkap untuk setiap eksekusi—waktu mulai, durasi, kecepatan transfer, jumlah file, total ukuran yang ditransfer, dan status akhir (Completed, Errored, atau Canceled). Bagi tim yang mengelola pengarsipan kepatuhan di beberapa region OBS, log ini juga berfungsi sebagai dokumentasi untuk audit internal. Pemegang lisensi PLUS juga dapat mengonfigurasi notifikasi penyelesaian tugas sehingga orang yang tepat diberi tahu segera setelah tugas selesai atau gagal.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Huawei OBS sync jobs in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka tab **Remote** → **New Remote** → pilih **S3** → pilih **Huawei OBS**.
3. Masukkan Access Key ID, Secret Access Key, dan URL endpoint OBS regional Anda.
4. Jelajahi bucket Anda di penjelajah file dan buat tugas sinkronisasi atau pencadangan melalui **Job Manager**.

Setelah terhubung, Huawei OBS berperilaku seperti drive lain di RcloneView—memberikan tim Anda jalur yang andal dan berbasis GUI menuju penyimpanan objek perusahaan tanpa beban CLI.

---

**Panduan Terkait:**

- [Kelola Alibaba Cloud OSS — Sinkronisasi dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-alibaba-oss-cloud-sync-backup-rcloneview)
- [Kelola Penyimpanan Objek Tencent COS dengan RcloneView](https://rcloneview.com/support/blog/manage-tencent-cos-cloud-sync-rcloneview)
- [Sentralisasi Penyimpanan S3, Wasabi, dan R2 dengan RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
