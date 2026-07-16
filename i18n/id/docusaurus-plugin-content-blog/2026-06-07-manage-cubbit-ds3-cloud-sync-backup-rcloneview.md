---
slug: manage-cubbit-ds3-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan Cubbit DS3 — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - alex
description: "Pelajari cara menghubungkan Cubbit DS3 ke RcloneView dan melakukan sinkronisasi, pencadangan, atau mengelola penyimpanan cloud Eropa yang terdistribusi secara geografis dari GUI desktop yang sederhana."
keywords:
  - Cubbit DS3 sync
  - Cubbit DS3 backup
  - Cubbit S3-compatible storage
  - RcloneView Cubbit
  - European cloud storage backup
  - geo-distributed object storage
  - Cubbit DS3 setup guide
  - private cloud backup RcloneView
  - S3 compatible storage management
  - Cubbit DS3 file manager
tags:
  - s3-compatible
  - object-storage
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan Cubbit DS3 — Sinkronisasi dan Pencadangan File dengan RcloneView

> RcloneView terhubung ke Cubbit DS3 melalui protokol S3, memungkinkan Anda menelusuri, melakukan sinkronisasi, dan mencadangkan penyimpanan cloud Eropa yang terdistribusi secara geografis tanpa menulis satu pun perintah CLI.

Cubbit DS3 adalah layanan penyimpanan objek yang kompatibel dengan S3 dan terdistribusi secara geografis di seluruh node Eropa. Berbeda dengan penyedia terpusat, Cubbit memecah (shard) dan mengenkripsi data Anda di seluruh jaringan sel terdistribusi, menjadikannya pilihan menarik bagi tim yang tunduk pada persyaratan GDPR atau mereka yang menginginkan penyimpanan yang bersifat privat sejak desainnya. Karena Cubbit DS3 sepenuhnya kompatibel dengan S3, RcloneView terhubung ke sana menggunakan alur kredensial yang sama seperti penyedia S3 lainnya — tanpa plugin atau konfigurasi khusus.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Cubbit DS3 ke RcloneView

Buka RcloneView dan buka **Remote tab > New Remote**. Pilih **Amazon S3** sebagai jenis remote, lalu pilih **Cubbit DS3** dari daftar penyedia S3. Masukkan Access Key ID, Secret Access Key Cubbit Anda, dan URL endpoint S3 yang disalin dari dasbor konsol Cubbit Anda. Biarkan kolom region kosong atau gunakan nilai yang direkomendasikan dalam dokumentasi Cubbit. Klik **Save**, dan remote Cubbit DS3 Anda akan muncul sebagai tab baru di file explorer.

Koneksi langsung berlaku. Anda dapat memperluas bucket Anda di pohon folder di sebelah kiri, menelusuri objek dengan tampilan daftar terperinci, atau beralih ke tampilan thumbnail untuk melihat pratinjau aset gambar yang tersimpan di bucket.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Cubbit DS3 as a new S3-compatible remote in RcloneView" class="img-large img-center" />

## Mengunggah dan Mengelola File di Cubbit DS3

Tata letak dual-pane RcloneView membuat pengunggahan file ke Cubbit DS3 menjadi mudah. Buka folder lokal di satu panel dan bucket Cubbit DS3 Anda di panel lainnya. Seret folder — misalnya, kumpulan gambar CAD firma arsitektur — dari panel kiri ke panel Cubbit di sebelah kanan. RcloneView menangani unggahan multi-thread secara otomatis, dan monitor transfer di bagian bawah menampilkan kecepatan transfer, jumlah file, dan progres secara langsung.

Klik kanan pada objek apa pun di panel Cubbit akan menampilkan menu konteks lengkap: Copy, Cut, Delete, Rename, Get Size, dan Get Public Link. Opsi **Get Size** sangat berguna untuk menghitung konsumsi penyimpanan di seluruh folder bucket yang besar sebelum menentukan strategi sinkronisasi.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag-and-drop upload to Cubbit DS3 bucket in RcloneView" class="img-large img-center" />

## Menyiapkan Tugas Sinkronisasi Terjadwal ke Cubbit DS3

Untuk pencadangan otomatis, gunakan tombol **Sync** di tab Home untuk membuka wizard tugas 4 langkah. Pilih folder lokal Anda atau remote cloud lain sebagai sumber, dan bucket Cubbit DS3 Anda sebagai tujuan. Pada Langkah 2, tingkatkan jumlah transfer file bersamaan untuk memanfaatkan sepenuhnya bandwidth terdistribusi Cubbit. Pada Langkah 3, terapkan filter jenis file — misalnya, kecualikan file `.tmp` dan `.log` agar pencadangan tetap bersih.

Pengguna lisensi PLUS membuka Langkah 4: penjadwalan gaya cron. Atur tugas untuk berjalan setiap malam pukul 3 pagi, tambahkan filter usia file maksimum untuk menyinkronkan hanya file yang baru diubah, dan konfigurasikan notifikasi email untuk mengonfirmasi setiap eksekusi. Ini ideal untuk tim riset yang membutuhkan snapshot malam otomatis dari arsip dataset mereka ke backend penyimpanan Eropa yang sesuai regulasi.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated sync jobs to Cubbit DS3 in RcloneView" class="img-large img-center" />

## Melacak Transfer dengan Job History

Setelah setiap eksekusi sinkronisasi, tampilan **Job History** RcloneView mencatat waktu eksekusi, durasi, total byte yang ditransfer, kecepatan transfer, dan status akhir. Untuk Cubbit DS3, log audit ini sangat berharga saat Anda perlu memastikan bahwa pencadangan penting telah selesai dengan sukses, atau saat menyelidiki eksekusi yang gagal untuk mengidentifikasi file mana yang menyebabkan kesalahan.

Gunakan fitur **Dry Run** sebelum operasi yang bersifat destruktif — fitur ini mensimulasikan sinkronisasi dan mencantumkan setiap file yang akan disalin atau dihapus, sehingga Anda dapat memverifikasi cakupannya tanpa menyentuh bucket.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Cubbit DS3 sync in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka **Remote tab > New Remote**, pilih Amazon S3, dan pilih Cubbit DS3 sebagai penyedia.
3. Masukkan Access Key, Secret Key Cubbit, dan endpoint S3 Anda dari konsol Cubbit.
4. Telusuri bucket Anda di file explorer dan seret file untuk langsung mulai mengunggah.

Dengan Cubbit DS3 terhubung ke RcloneView, Anda mendapatkan alur kerja yang sepenuhnya visual untuk penyimpanan Eropa yang terdistribusi secara geografis — tanpa memerlukan terminal.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Cloud Cloudflare R2 dengan RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Kelola DigitalOcean Spaces — Sinkronisasi dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [Sentralisasi Penyimpanan S3, Wasabi, dan R2 dengan RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
