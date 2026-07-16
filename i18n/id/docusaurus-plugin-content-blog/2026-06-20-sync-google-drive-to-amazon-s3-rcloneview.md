---
slug: sync-google-drive-to-amazon-s3-rcloneview
title: "Sinkronisasi Google Drive ke Amazon S3 — Pencadangan Cloud Otomatis dengan RcloneView"
authors:
  - jay
description: "Sinkronkan Google Drive ke Amazon S3 dengan RcloneView. Siapkan job pencadangan cloud-to-cloud otomatis, jadwalkan transfer, dan pantau progres dari satu GUI."
keywords:
  - Google Drive to Amazon S3
  - sync Google Drive to S3
  - backup Google Drive to S3
  - RcloneView Google Drive S3
  - cloud to cloud sync
  - Amazon S3 backup
  - Google Drive backup
  - automated cloud backup
  - cloud storage migration
  - rclone Google Drive S3
tags:
  - google-drive
  - amazon-s3
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Google Drive ke Amazon S3 — Pencadangan Cloud Otomatis dengan RcloneView

> Mencadangkan Google Drive ke Amazon S3 menciptakan salinan independen dari data Anda pada infrastruktur cloud yang terpisah — RcloneView mengubah ini menjadi alur kerja set-and-forget.

Google Drive sangat baik untuk kolaborasi, tetapi mengandalkannya sebagai satu-satunya salinan file penting adalah risiko yang tidak seharusnya diambil sebagian besar tim. Amazon S3 menyediakan penyimpanan objek yang tahan lama dan terjangkau, melengkapi Google Drive sebagai tujuan pencadangan independen. Dengan sistem job berbasis GUI dari RcloneView, tim konten yang mengelola 200 GB file proyek bersama dapat membangun pencadangan cloud-to-cloud otomatis dalam hitungan menit — tanpa perlu perintah rclone.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menyiapkan Google Drive dan Amazon S3 di RcloneView

Kedua remote perlu dikonfigurasi sebelum membuat job sinkronisasi. Di RcloneView, klik **Remote tab > New Remote**. Untuk Google Drive, pilih dari daftar provider — jendela browser akan terbuka untuk autentikasi OAuth. Masuk dan berikan akses; remote akan disimpan secara otomatis tanpa perlu mengelola API key secara manual.

Untuk Amazon S3, pilih **Amazon S3** sebagai provider, lalu masukkan **Access Key ID**, **Secret Access Key**, dan **Region** dari bucket S3 Anda (misalnya, `us-east-1`). RcloneView menyimpan semua kredensial dengan aman di penyimpanan lokal terenkripsi. Setelah kedua remote disimpan, masing-masing muncul sebagai tab di panel explorer, siap untuk dijelajahi.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Amazon S3 remotes in RcloneView" class="img-large img-center" />

## Mengonfigurasi Job Sinkronisasi Cloud-to-Cloud

Klik **Home tab > Sync** untuk membuka wizard job. Tetapkan Google Drive — atau subfolder tertentu seperti `My Drive/Projects` — sebagai sumber, dan prefix bucket S3 (misalnya, `my-backup-bucket/google-drive/`) sebagai tujuan. Beri nama job dengan deskriptif, seperti `gdrive-to-s3-daily`.

Di **Advanced Settings**, aktifkan **checksum verification** untuk membandingkan file berdasarkan hash, bukan hanya ukuran — ini menangkap file yang memiliki ukuran sama tetapi isinya berbeda akibat penulisan ulang sebagian. Atur jumlah transfer bersamaan sesuai kapasitas jaringan Anda; 4–8 transfer cocok untuk sebagian besar koneksi broadband tanpa memicu batas rate Google Drive.

Langkah **Filtering** memberikan kontrol presisi atas apa yang disinkronkan: kecualikan file video besar jika Anda hanya membutuhkan pencadangan dokumen, atau batasi hanya pada file yang diubah dalam 90 hari terakhir menggunakan field Max File Age.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Google Drive to Amazon S3 sync job in RcloneView" class="img-large img-center" />

## Menjalankan dan Memantau Transfer

Sebelum sinkronisasi penuh pertama, gunakan **Dry Run** bawaan untuk melihat pratinjau file mana yang akan disalin atau dihapus di tujuan. Ini sangat berguna pada penyiapan awal ketika bucket S3 masih kosong dan Anda ingin memastikan konfigurasi job sebelum mengirimkan data dalam jumlah gigabyte.

Klik **Run** ketika sudah siap. Tab **Transferring** di bagian bawah RcloneView menampilkan progres langsung: kecepatan, jumlah file, dan persentase penyelesaian. Untuk pustaka Google Drive besar dengan puluhan ribu file, sinkronisasi awal dapat memakan waktu beberapa jam — proses berikutnya hanya mentransfer file yang berubah dan selesai jauh lebih cepat.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Google Drive to S3 transfer progress in RcloneView" class="img-large img-center" />

## Menjadwalkan Pencadangan Otomatis Harian

Dengan **lisensi PLUS**, buka job di **Job Manager** dan tambahkan jadwal menggunakan antarmuka bergaya cron — misalnya, setiap hari pukul 1 pagi. Alat **Simulate Schedule** menampilkan pratinjau sepuluh waktu eksekusi berikutnya sehingga Anda dapat memastikan pencadangan berjalan pada waktu yang tepat. Setelah disimpan, pencadangan berjalan secara otomatis baik jendela RcloneView terbuka atau tidak.

Setelah setiap proses, **Job History** mencatat durasi, kecepatan transfer, jumlah file, dan status penyelesaian, memberikan jejak audit yang jelas untuk setiap pencadangan Google Drive yang dikirim ke S3.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Drive to Amazon S3 backup in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote Google Drive melalui login OAuth di **Remote tab > New Remote**.
3. Tambahkan remote Amazon S3 dengan AWS Access Key ID, Secret Key, dan region bucket Anda.
4. Buat job sinkronisasi: sumber = folder Google Drive, tujuan = prefix bucket S3, lalu jalankan atau jadwalkan.

Data Google Drive Anda kini dicadangkan secara independen pada infrastruktur AWS — terlindungi dari penghapusan tidak sengaja, penangguhan akun, atau gangguan layanan pada salah satu platform.

---

**Panduan Terkait:**

- [Pencadangan Inkremental: Google Drive ke Amazon S3 dengan RcloneView](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [Mount Bucket Amazon S3 sebagai Drive Lokal dengan RcloneView](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)
- [Otomatiskan Pencadangan Cloud Harian dengan RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
