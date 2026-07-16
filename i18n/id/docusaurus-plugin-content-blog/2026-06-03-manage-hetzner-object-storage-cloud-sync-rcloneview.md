---
slug: manage-hetzner-object-storage-cloud-sync-rcloneview
title: "Kelola Hetzner Object Storage — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - kai
description: "Pelajari cara menghubungkan Hetzner Object Storage ke RcloneView untuk sinkronisasi dan pencadangan otomatis. Kelola bucket yang kompatibel dengan S3 melalui GUI sederhana — tanpa perlu CLI."
keywords:
  - Hetzner Object Storage
  - pencadangan cloud Hetzner
  - RcloneView Hetzner
  - penyimpanan cloud kompatibel S3
  - sinkronisasi file Hetzner
  - GUI pencadangan cloud
  - Hetzner rclone
  - pencadangan object storage
  - penyimpanan cloud Eropa
  - manajemen bucket Hetzner
tags:
  - RcloneView
  - hetzner
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Hetzner Object Storage — Sinkronisasi dan Pencadangan File dengan RcloneView

> Hubungkan Hetzner Object Storage ke RcloneView dan otomatiskan tugas pencadangan Anda tanpa menulis satu pun perintah CLI.

Hetzner Object Storage adalah layanan penyimpanan cloud yang kompatibel dengan S3 dan menawarkan harga kompetitif untuk tim yang membutuhkan penyimpanan data yang andal dan berbasis Eropa. Baik Anda sedang mengarsipkan file proyek, mencadangkan snapshot server, atau mereplikasi data dari cloud lain, RcloneView memberi Anda antarmuka visual untuk mengelola semuanya. Anda mengonfigurasi Hetzner dengan cara yang sama seperti penyedia lain yang kompatibel dengan S3 — dengan access key, secret key, dan endpoint bucket Anda — lalu mengelola semuanya melalui file explorer dua panel yang sama yang Anda gunakan untuk remote lainnya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Hetzner Object Storage ke RcloneView

Hetzner Object Storage menggunakan protokol S3, sehingga pengaturan di RcloneView mengikuti pola yang sama seperti Amazon S3 atau Wasabi. Buka **Remote tab** dan klik **New Remote**. Dari daftar penyedia, pilih **S3** lalu pilih **Hetzner** sebagai penyedia. Anda memerlukan tiga informasi dari Hetzner Cloud Console: **Access Key ID**, **Secret Access Key**, dan **endpoint URL** untuk wilayah yang Anda pilih — misalnya, `fsn1.your-objectstorage.com` untuk wilayah Falkenstein.

Setelah memasukkan kredensial dan endpoint wilayah Anda, klik **Save**. RcloneView akan membangun koneksi dan bucket Hetzner Anda akan langsung muncul sebagai folder yang dapat dijelajahi di file explorer.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Hetzner Object Storage remote in RcloneView" class="img-large img-center" />

Setelah terhubung, Anda dapat menjelajahi bucket, mengunggah file dengan drag and drop, mengunduh objek, mengganti nama item, menghapus file, dan membuat folder baru — semuanya tanpa menyentuh terminal. Bilah breadcrumb path menunjukkan posisi Anda saat ini dalam hierarki bucket, dan footer merangkum jumlah total file serta ukuran untuk direktori yang dipilih.

## Mengunggah dan Mengatur File

File explorer dua panel milik RcloneView memudahkan pemindahan data antara Hetzner Object Storage dan mesin lokal Anda atau cloud lain. Buka disk lokal Anda di panel kiri dan remote Hetzner Anda di panel kanan, lalu seret file ke seberang. Untuk unggahan dari Windows Explorer, Anda dapat menyeret file langsung ke panel RcloneView dan file tersebut akan langsung masuk ke bucket Hetzner Anda dalam satu langkah.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to Hetzner Object Storage in RcloneView" class="img-large img-center" />

Untuk dataset besar — misalnya perusahaan produksi media yang mencadangkan 500 GB hasil render — pengaturan **multi-threaded transfer** dalam wizard sinkronisasi memungkinkan Anda mendorong lebih banyak data secara paralel. Nilai default 4 stream bersamaan bekerja dengan baik untuk sebagian besar koneksi, tetapi meningkatkan nilai ini untuk file besar pada koneksi berbandwidth tinggi dapat secara signifikan mempersingkat waktu transfer.

## Menjalankan Tugas Sinkronisasi dan Pencadangan

Untuk alur kerja pencadangan yang berkelanjutan, **Job Manager** milik RcloneView memberi Anda daftar tugas sinkronisasi yang telah dikonfigurasi dan dapat dijalankan sesuai permintaan atau sesuai jadwal. Buka dari **Home tab** dan klik **Add Job** untuk memulai wizard sinkronisasi 4 langkah:

1. **Langkah 1:** Tentukan sumber (folder lokal atau remote lain) dan tujuan (bucket Hetzner Anda atau subdirektori di dalamnya), lalu beri nama tugas tersebut
2. **Langkah 2:** Konfigurasikan pengaturan konkurensi — jumlah transfer file, jumlah multi-thread, dan apakah akan mengaktifkan verifikasi checksum untuk pemeriksaan integritas
3. **Langkah 3:** Tambahkan aturan filter untuk mengecualikan jenis file atau path yang tidak ingin Anda simpan di Hetzner, seperti file `.tmp` atau direktori `/cache/`
4. **Langkah 4 (lisensi PLUS):** Atur jadwal bergaya crontab agar pencadangan berjalan secara otomatis pada interval yang ditentukan

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Hetzner Object Storage in RcloneView" class="img-large img-center" />

Sebelum menjalankan tugas baru, gunakan opsi **Dry Run** untuk melihat pratinjau file mana saja yang akan disalin atau dihapus. Ini sangat berguna saat pertama kali Anda menyiapkan sinkronisasi, atau setiap kali Anda mengubah aturan filter untuk memastikan tidak ada hal penting yang terkecualikan.

## Meninjau Riwayat Transfer

Setelah tugas dijalankan, tampilan **Job History** mencatat setiap eksekusi: waktu mulai, durasi, total ukuran yang ditransfer, kecepatan rata-rata, jumlah file, dan status akhir. Bagi tim yang menjalankan pencadangan setiap malam ke Hetzner Object Storage, log ini menyediakan jejak audit yang jelas yang menunjukkan run mana yang selesai dengan lancar dan mana yang mengalami error — berguna baik untuk pemecahan masalah maupun untuk menunjukkan kepatuhan terhadap kebijakan retensi data.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Hetzner Object Storage sync in RcloneView" class="img-large img-center" />

Filter riwayat memungkinkan Anda mempersempit hasil berdasarkan rentang tanggal (hari ini, kemarin, minggu lalu, bulan lalu), sehingga Anda dapat dengan cepat menemukan catatan untuk jendela pencadangan tertentu tanpa perlu menggulir seluruh log.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka **Remote tab > New Remote**, pilih **S3**, lalu pilih **Hetzner** sebagai penyedia.
3. Masukkan Access Key ID, Secret Access Key, dan endpoint wilayah Hetzner Anda dari Hetzner Cloud Console.
4. Buka **Job Manager**, buat tugas sinkronisasi dengan bucket Hetzner Anda sebagai tujuan, lalu klik **Run Job**.

Dengan Hetzner Object Storage terhubung, Anda mendapatkan penyimpanan objek berbasis Eropa yang andal dan dikelola sepenuhnya dari GUI yang bersih — tanpa perlu perintah rclone.

---

**Panduan Terkait:**

- [Kelola Hetzner Storage Box — Sinkronisasi dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [Kelola Wasabi Cloud Storage — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Kelola Cloudflare R2 — Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)

<CloudSupportGrid />
