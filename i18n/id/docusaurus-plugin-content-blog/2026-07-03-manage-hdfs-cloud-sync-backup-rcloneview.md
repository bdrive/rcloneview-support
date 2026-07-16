---
slug: manage-hdfs-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan HDFS — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - kai
description: "Hubungkan cluster Hadoop Distributed File System (HDFS) ke RcloneView untuk menelusuri, menyinkronkan, dan mencadangkan penyimpanan big data di lebih dari 90 penyedia cloud."
keywords:
  - hdfs rcloneview
  - kelola penyimpanan cloud hdfs
  - hadoop distributed file system gui
  - migrasi hdfs ke cloud
  - pencadangan cloud hdfs
  - sinkronisasi hdfs ke penyimpanan cloud
  - hdfs rclone gui
  - sinkronisasi cloud data lake hybrid
  - pencadangan cloud hadoop on-prem
tags:
  - self-hosted
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan HDFS — Sinkronisasi dan Pencadangan File dengan RcloneView

> Cluster Hadoop menyimpan data hasil pemrosesan selama bertahun-tahun, tetapi memindahkan data tersebut antara penyimpanan on-prem dan cloud biasanya berarti harus terjun ke skrip dan alat CLI — RcloneView memberi HDFS rumah visual sebagai gantinya.

Hadoop Distributed File System (HDFS) adalah lapisan penyimpanan di balik banyak sekali pipeline big data on-premise, tetapi tidak dilengkapi cara yang ramah pengguna untuk memeriksa, mentransfer, atau mengarsipkan data tersebut di luar ekosistem Hadoop. RcloneView terhubung ke HDFS sebagai remote berbasis protokol seperti halnya SFTP, FTP, dan WebDAV, sehingga seorang data engineer dapat menelusuri isi cluster dalam file explorer yang familiar dan memindahkan dataset ke dan dari penyimpanan cloud tanpa perlu menulis job distcp atau skrip khusus. Aplikasi ini berjalan sama di Windows, macOS, dan Linux, yang penting ketika tim data Anda tidak semuanya menggunakan sistem operasi yang sama.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menambahkan Cluster HDFS sebagai Remote

HDFS termasuk dalam kategori penyimpanan berbasis protokol RcloneView, yang dikonfigurasi melalui wizard New Remote yang sama seperti yang digunakan untuk koneksi SFTP dan WebDAV. Setelah cluster ditambahkan, cluster tersebut muncul sebagai tab tersendiri di panel Explorer, lengkap dengan folder tree standar, daftar file, dan tampilan thumbnail untuk menelusuri dataset yang tersimpan di seluruh namenode cluster. Operasi klik kanan — salin, unduh, ganti nama, Get Size — berfungsi persis seperti pada remote lainnya, artinya engineer yang kurang terbiasa dengan perintah `hadoop fs` tetap bisa memeriksa apa saja yang sebenarnya tersimpan di HDFS.

<img src="/support/images/en/blog/new-remote.png" alt="Adding an HDFS remote in RcloneView's New Remote wizard" class="img-large img-center" />

RcloneView melakukan mount DAN sinkronisasi lebih dari 90 penyedia dari satu jendela, sehingga sesi yang sama yang digunakan untuk menelusuri HDFS bisa membuka Google Drive, S3 bucket, atau disk lokal di panel sebelahnya untuk perbandingan langsung.

## Menjembatani Penyimpanan On-Prem dengan Penyimpanan Objek Cloud

Alasan paling umum untuk menghubungkan HDFS ke RcloneView adalah memindahkan data dingin atau data yang telah diproses dari cluster yang mahal dan terbatas kapasitasnya ke penyimpanan cloud yang lebih murah untuk retensi jangka panjang. Job sinkronisasi satu arah dengan arah "Modifying destination only" menyalin output HDFS — dataset hasil pemrosesan, artefak pelatihan model, arsip log — ke bucket S3, Azure Blob, atau Backblaze B2 tanpa menyentuh sumbernya. Pengaturan filter di Langkah 3 dari wizard sinkronisasi memungkinkan Anda membatasi job pada jenis file tertentu atau mengecualikan file `_SUCCESS` dan file sementara yang ditinggalkan oleh job Hadoop, sehingga bucket tujuan hanya menyimpan data yang memang layak disimpan.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing HDFS cluster data to cloud object storage in RcloneView" class="img-large img-center" />

Untuk dataset besar, menyesuaikan jumlah transfer file dan jumlah transfer multi-thread di Advanced Settings membantu memaksimalkan bandwidth yang tersedia antara cluster dan tujuan, sementara menjaga jumlah equality checker tetap moderat menghindari beban baca yang tidak perlu pada namenode selama fase perbandingan.

## Menjadwalkan Job Pengarsipan Berulang

Pipeline data jarang berjalan hanya sekali. Pengguna lisensi PLUS dapat melampirkan jadwal bergaya crontab pada job sinkronisasi HDFS sehingga output yang baru masuk secara otomatis dicerminkan ke penyimpanan cloud setelah setiap batch run selesai, tanpa perlu ada orang yang mengingat untuk memulai transfer secara manual. Job History kemudian mencatat setiap eksekusi — status, ukuran yang ditransfer, durasi — memberikan tim jejak audit yang menunjukkan dengan tepat kapan setiap dataset meninggalkan cluster dan ke mana ia berakhir.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring HDFS to cloud storage sync job in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan cluster HDFS Anda sebagai remote baru menggunakan opsi penyimpanan berbasis protokol.
3. Telusuri cluster di panel Explorer untuk memastikan dataset dan izin akses sudah benar.
4. Siapkan job sinkronisasi satu arah ke tujuan cloud arsip Anda, dengan filter untuk mengecualikan file sementara.

Menghadirkan HDFS ke dalam jendela yang sama dengan remote cloud Anda mengubah proses ekspor yang berbasis skrip dan rawan kesalahan menjadi job yang berulang, dapat dipantau, dan dapat dijadwalkan.

---

**Panduan Terkait:**

- [Kelola Penyimpanan MinIO — Sinkronisasi Cloud Self-Hosted di RcloneView](https://rcloneview.com/support/blog/manage-minio-self-hosted-cloud-sync-rcloneview)
- [Penyimpanan Cloud untuk Data Scientist — Sederhanakan Dataset dengan RcloneView](https://rcloneview.com/support/blog/cloud-storage-data-scientists-rcloneview)
- [Pipeline Dataset Pelatihan AI — Bangun dan Sinkronkan dengan RcloneView](https://rcloneview.com/support/blog/ai-training-dataset-pipeline-rcloneview)

<CloudSupportGrid />
