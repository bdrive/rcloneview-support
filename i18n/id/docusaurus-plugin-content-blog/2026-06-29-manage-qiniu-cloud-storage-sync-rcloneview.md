---
slug: manage-qiniu-cloud-storage-sync-rcloneview
title: "Kelola Penyimpanan Objek Cloud Qiniu — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - kai
description: "Hubungkan penyimpanan objek Qiniu Cloud Kodo ke RcloneView dan sinkronkan, cadangkan, atau transfer file di lebih dari 90 penyedia cloud dari satu GUI di Windows, macOS, dan Linux."
keywords:
  - Sinkronisasi penyimpanan Qiniu Cloud
  - GUI penyimpanan objek Kodo
  - Pengaturan RcloneView Qiniu
  - Qiniu S3 compatible rclone
  - sinkronkan file ke Qiniu Cloud
  - Klien pencadangan Qiniu Windows
  - Manajer penyimpanan cloud Qiniu
  - transfer file Qiniu RcloneView
  - Klien desktop Qiniu Kodo S3
  - kelola bucket Qiniu GUI
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

# Kelola Penyimpanan Objek Cloud Qiniu — Sinkronisasi dan Pencadangan File dengan RcloneView

> Hubungkan penyimpanan objek Kodo dari Qiniu Cloud ke antarmuka dual-pane RcloneView dan tangani unggahan, pencadangan, serta transfer lintas cloud tanpa menyentuh CLI.

Qiniu Cloud (七牛云) adalah salah satu penyedia infrastruktur cloud terkemuka di Tiongkok, dan layanan penyimpanan objek Kodo-nya banyak digunakan untuk pengiriman media, manajemen aset aplikasi, dan pengarsipan data skala besar. Karena Kodo menerapkan API yang kompatibel dengan S3, RcloneView terhubung dengannya menggunakan alur kerja yang sama seperti Amazon S3, Wasabi, atau Cloudflare R2 — tanpa memerlukan plugin khusus. Berbeda dengan alat yang hanya mendukung mount, RcloneView juga menyinkronkan dan membandingkan folder terhadap Kodo dan lebih dari 90 penyedia lain pada lisensi FREE, menjadikannya alat tunggal yang praktis untuk tim dengan lingkungan cloud campuran.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menyiapkan Qiniu Kodo sebagai Remote S3 di RcloneView

Untuk menambahkan Qiniu Kodo, buka tab **Remote** dan klik **New Remote**. Pilih protokol S3 dari daftar penyedia, lalu pilih **Qiniu** sebagai penyedia S3. Anda memerlukan tiga kredensial dari Qiniu Cloud Console: **Access Key**, **Secret Key**, dan **regional endpoint** untuk zona bucket tersebut. Setelah dimasukkan, RcloneView menyimpan konfigurasi ke file konfigurasi rclone lokal Anda dan remote langsung muncul di panel explorer.

Tidak diperlukan instalasi rclone terpisah — RcloneView dilengkapi dengan binary rclone tertanam yang menangani semua komunikasi API. Jika Anda sudah mengelola rclone secara eksternal, Anda dapat menghubungkan RcloneView ke instance tersebut melalui Settings > Connect Manager.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Qiniu Cloud S3 remote in RcloneView" class="img-large img-center" />

Setelah disimpan, bucket Kodo Anda akan muncul di bilah tab panel. Klik bucket mana pun untuk menelusuri isinya di daftar file, dengan kolom yang menampilkan nama, jenis, tanggal modifikasi, dan ukuran.

## Menelusuri dan Mengelola Bucket Kodo

Tata letak dual-pane RcloneView memungkinkan Anda bekerja dengan Qiniu Kodo bersama remote lain — folder lokal, Google Drive, bucket S3 perusahaan — dalam jendela yang sama. Seret file dari panel lokal ke panel Kodo untuk mengunggah, atau sebaliknya untuk mengunduh. Memindahkan file antara dua remote Qiniu (atau bucket) akan menyalinnya secara langsung tanpa melalui disk lokal Anda.

Untuk pekerjaan massal, gunakan Shift+Klik atau Ctrl+Klik untuk memilih beberapa objek sekaligus lalu menyalin, memindahkan, atau menghapusnya dalam satu tindakan. Mode tampilan Thumbnail berguna saat menelusuri bucket Kodo yang berisi banyak gambar. Sebelum operasi destruktif apa pun, tombol **Dry Run** menampilkan pratinjau file mana saja yang akan terpengaruh — pengaman penting saat membersihkan aset produksi.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files between local storage and Qiniu Kodo buckets in RcloneView" class="img-large img-center" />

## Menyinkronkan dan Mencadangkan File dengan Qiniu Cloud

Wizard sinkronisasi 4 langkah RcloneView mengonfigurasi pekerjaan yang dapat diulang terhadap Kodo. Pada **Step 1**, pilih Qiniu sebagai sumber atau tujuan dan pasangkan dengan remote lain — misalnya, menyinkronkan pustaka media lokal ke bucket Kodo untuk distribusi CDN. Pada **Step 2**, sesuaikan jumlah transfer paralel dan aktifkan verifikasi checksum untuk memastikan setiap objek yang diunggah identik bit-per-bit dengan sumbernya. **Step 3** menawarkan filter jenis file, rentang usia, dan batas ukuran sehingga Anda dapat mengecualikan file cache atau membatasi sinkronisasi hanya pada aset yang baru dimodifikasi.

Dengan lisensi PLUS, **Step 4** membuka penjadwalan bergaya cron: konfigurasikan pencadangan malam hari dari direktori server produksi ke Kodo dan RcloneView menjalankannya secara otomatis di latar belakang. Fitur **1:N sync** memungkinkan satu sumber direplikasi secara bersamaan ke beberapa tujuan — berguna untuk mendistribusikan kumpulan aset yang sama ke Qiniu Kodo dan arsip S3 sekunder dalam satu pekerjaan.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Qiniu Cloud Kodo in RcloneView" class="img-large img-center" />

## Memantau Transfer dan Riwayat Pekerjaan

Tab **Transferring** di bagian bawah RcloneView menampilkan progres langsung untuk pekerjaan Kodo yang aktif: nama file, byte yang ditransfer, kecepatan saat ini, dan penyelesaian keseluruhan. Untuk seeding awal berskala besar — misalnya mengunggah ratusan gigabyte aset video ke bucket baru — tampilan pemantauan transfer langsung ini menghilangkan kebutuhan akan dashboard pemantauan terpisah.

Tab **Job History** mencatat setiap proses yang selesai dengan waktu mulai, durasi, ukuran total, kecepatan transfer, jumlah file, dan status. Filter berdasarkan rentang tanggal atau jenis pekerjaan untuk mengaudit aktivitas sinkronisasi selama berminggu-minggu atau berbulan-bulan.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Qiniu Cloud sync runs in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka tab **Remote**, klik **New Remote**, pilih protokol S3, dan pilih **Qiniu** sebagai penyedia.
3. Masukkan **Access Key**, **Secret Key**, dan regional endpoint dari Qiniu Cloud Console Anda.
4. Buat pekerjaan sinkronisasi yang mengarah ke bucket Kodo Anda dan jalankan untuk mencadangkan file lokal atau mentransfer data antara Qiniu dan cloud lain.

Dengan Qiniu Kodo terhubung, RcloneView memberi Anda kendali penuh atas penyimpanan objek cloud Tiongkok Anda dari antarmuka yang sama yang Anda gunakan untuk setiap penyedia lainnya.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Amazon S3 — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Kelola Penyimpanan Cloudflare R2 — Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Kelola Penyimpanan Cloud Wasabi — Sinkronisasi dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
