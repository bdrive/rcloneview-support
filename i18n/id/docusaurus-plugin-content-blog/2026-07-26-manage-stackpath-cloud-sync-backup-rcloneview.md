---
slug: manage-stackpath-cloud-sync-backup-rcloneview
title: "Kelola Object Storage StackPath — Sinkronkan dan Cadangkan File dengan RcloneView"
authors:
  - jay
description: "Hubungkan object storage StackPath ke RcloneView untuk manajemen file drag-and-drop, pencadangan terjadwal, dan sinkronisasi lintas cloud."
keywords:
  - object storage StackPath
  - StackPath S3
  - RcloneView StackPath
  - kelola file StackPath
  - pencadangan StackPath
  - sinkronisasi cloud StackPath
  - GUI penyimpanan kompatibel S3
  - object storage edge
tags:
  - RcloneView
  - object-storage
  - s3-compatible
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Object Storage StackPath — Sinkronkan dan Cadangkan File dengan RcloneView

> Jelajahi, sinkronkan, dan cadangkan object storage StackPath yang kompatibel dengan S3 dari jendela yang sama dengan yang Anda gunakan untuk cloud lainnya.

Object storage StackPath menyediakan API yang kompatibel dengan S3, artinya ia cocok digunakan dengan alat berbasis rclone, tetapi jarang dilengkapi GUI desktop khusus. Akibatnya, tim harus membuat skrip untuk unggahan atau berpindah-pindah antara sesi CLI terpisah hanya untuk memeriksa isi sebuah bucket. RcloneView menjembatani hal ini dengan memperlakukan StackPath seperti remote lainnya — penjelajahan file lengkap, transfer drag-and-drop, dan tugas terjadwal, tanpa menulis satu pun perintah.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Bucket StackPath

Karena StackPath menggunakan protokol S3, Anda menambahkannya di RcloneView dengan cara yang sama seperti menambahkan Amazon S3 atau Wasabi: buat remote baru, pilih opsi penyedia yang kompatibel dengan S3, lalu masukkan Access Key, Secret Key, dan URL endpoint StackPath untuk wilayah Anda. Setelah terhubung, bucket akan muncul sebagai tab normal di panel Explorer — tanpa file kredensial terpisah, tanpa perlu terminal untuk memverifikasi koneksi berhasil.

Hubungkan S3, Azure, atau Backblaze B2 dengan akses baca/tulis penuh pada lisensi FREE, sehingga memasangkan StackPath dengan akun kompatibel S3 lainnya tidak memerlukan peningkatan lisensi untuk mulai memindahkan file.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a StackPath object storage remote in RcloneView" class="img-large img-center" />

## Menjelajahi dan Mengelola File Sehari-hari

Setelah remote disiapkan, bucket StackPath berperilaku persis seperti folder lokal di Explorer RcloneView. Anda dapat mengurutkan berdasarkan nama, jenis, tanggal modifikasi, atau ukuran, beralih ke tampilan thumbnail untuk bucket yang berisi banyak gambar, dan menggunakan Get Size untuk memeriksa berapa banyak ruang yang digunakan sebuah folder aset sebelum memutuskan apakah akan mengarsipkannya ke tempat lain. Pemilihan berganda dengan Ctrl+Klik atau Shift+Klik bekerja sama seperti pada drive lokal, sehingga penghapusan atau pengunduhan massal hanya memakan waktu beberapa detik alih-alih memerlukan skrip.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing StackPath bucket contents in RcloneView" class="img-large img-center" />

## Mencadangkan ke dan dari StackPath

Untuk pencadangan berkala, atur tugas Sync dengan StackPath sebagai sumber atau tujuan. Wizard 4 langkah memungkinkan Anda mengonfigurasi transfer bersamaan, mengaktifkan verifikasi checksum sehingga file dibandingkan berdasarkan hash, bukan hanya stempel waktu, dan menerapkan filter untuk mengecualikan jenis file yang tidak perlu diarsipkan. Jalankan Dry Run terlebih dahulu untuk melihat pratinjau persis apa yang akan disalin atau dihapus sebelum melakukan transfer — pengaman yang berguna ketika sebuah bucket menyimpan aset produksi.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a StackPath backup job in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buat remote baru dan pilih jenis penyedia yang kompatibel dengan S3.
3. Masukkan Access Key, Secret Key, dan endpoint StackPath Anda.
4. Atur tugas Sync atau Copy untuk memindahkan file antara StackPath dan remote lainnya.

Setelah StackPath terhubung ke RcloneView, mengelola object storage tidak lagi menjadi pekerjaan skrip, melainkan menjadi bagian dari alur kerja file normal Anda.

---

**Panduan Terkait:**

- [Kelola Object Storage Ceph — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-ceph-object-storage-s3-rcloneview)
- [Kelola Object Storage Scaleway — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Perbaiki S3 Access Denied — Kesalahan Izin dengan RcloneView](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)

<CloudSupportGrid />
