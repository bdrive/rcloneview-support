---
slug: manage-leviia-cloud-sync-backup-rcloneview
title: "Mengelola Penyimpanan Objek Leviia — Sinkronkan dan Cadangkan Berkas dengan RcloneView"
authors:
  - casey
description: "Hubungkan penyimpanan objek Leviia yang kompatibel dengan S3 ke RcloneView untuk manajemen berkas seret-dan-lepas, pencadangan terjadwal, dan sinkronisasi lintas cloud."
keywords:
  - penyimpanan objek Leviia
  - Leviia S3
  - RcloneView Leviia
  - mengelola berkas Leviia
  - pencadangan cloud Leviia
  - sinkronisasi Leviia
  - GUI penyimpanan kompatibel S3
  - penyimpanan objek Eropa
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengelola Penyimpanan Objek Leviia — Sinkronkan dan Cadangkan Berkas dengan RcloneView

> Jelajahi, sinkronkan, dan cadangkan penyimpanan objek Leviia yang kompatibel dengan S3 dari jendela yang sama yang Anda gunakan untuk setiap layanan cloud lainnya.

Leviia menawarkan penyimpanan objek kompatibel S3 yang dihosting di Eropa, menjadikannya pilihan umum bagi tim yang menginginkan jaminan residensi data tanpa harus melepaskan perangkat yang sudah cocok dengan S3. Kekurangannya, penyedia yang kompatibel dengan S3 jarang menghadirkan klien desktop mereka sendiri yang rapi, sehingga pengguna harus menulis skrip untuk unggahan atau berkutat dengan CLI polos. RcloneView menghilangkan hambatan tersebut dengan memperlakukan Leviia seperti remote lainnya — penjelajahan berkas penuh, transfer seret-dan-lepas, dan pekerjaan sinkronisasi terjadwal, tanpa perlu perintah apa pun.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Bucket Leviia

Karena Leviia menggunakan protokol S3, Anda menambahkannya ke RcloneView dengan cara yang sama seperti menambahkan Amazon S3 atau Wasabi: buat remote baru, pilih opsi penyedia yang kompatibel dengan S3, lalu masukkan Access Key, Secret Key, dan URL endpoint Leviia untuk wilayah akun Anda. Setelah disimpan, bucket akan muncul sebagai tab biasa di panel Explorer, siap untuk langsung dijelajahi dan ditransfer.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Leviia object storage remote in RcloneView" class="img-large img-center" />

RcloneView memasang dan menyinkronkan lebih dari 90 penyedia dari satu jendela, di Windows, macOS, dan Linux, sehingga bucket Leviia berada berdampingan dengan setiap akun cloud lain yang Anda kelola tanpa perlu berpindah alat.

## Menjelajahi dan Mengatur Penyimpanan Leviia

Setelah terhubung, bucket Leviia berperilaku persis seperti folder lokal di Explorer. Urutkan berdasarkan nama, jenis, tanggal modifikasi, atau ukuran, alihkan ke tampilan thumbnail untuk bucket yang penuh gambar, dan gunakan Get Size untuk memeriksa berapa banyak ruang yang digunakan sebuah folder sebelum memutuskan apakah akan mengarsipkannya ke tempat lain. Pemilihan ganda dengan Ctrl+Klik atau Shift+Klik mencakup unduhan dan penghapusan massal tanpa loop skrip.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browsing Leviia bucket contents in RcloneView" class="img-large img-center" />

## Mencadangkan Ke dan Dari Leviia

Untuk pencadangan berulang, siapkan pekerjaan Sync dengan Leviia sebagai sumber atau tujuan. Wizard 4 langkah mencakup jumlah transfer bersamaan, verifikasi checksum sehingga berkas dibandingkan berdasarkan hash dan ukuran alih-alih hanya stempel waktu, serta aturan pemfilteran untuk mengecualikan jenis berkas yang tidak ingin Anda arsipkan. Menjalankan Dry Run terlebih dahulu untuk melihat pratinjau apa yang akan disalin atau dihapus sangat disarankan sebelum mengarahkan pekerjaan sinkronisasi ke bucket yang menyimpan data produksi.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Leviia backup job in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buat remote baru dan pilih jenis penyedia yang kompatibel dengan S3.
3. Masukkan Access Key, Secret Key, dan URL endpoint Leviia Anda.
4. Siapkan pekerjaan Sync atau Copy untuk memindahkan berkas antara Leviia dan remote cloud lainnya.

Setelah Leviia terhubung ke RcloneView, mengelola penyimpanan objek Anda tidak lagi menjadi pekerjaan skrip yang merepotkan, melainkan menjadi bagian dari alur kerja berkas normal Anda.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan Objek Ceph dengan RcloneView — GUI Kompatibel S3 untuk Klaster Ceph Anda](https://rcloneview.com/support/blog/manage-ceph-object-storage-s3-rcloneview)
- [Mengelola Penyimpanan Objek Scaleway — Sinkronisasi dan Pencadangan Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Mengelola Penyimpanan Objek IONOS — Sinkronkan dan Cadangkan Berkas dengan RcloneView](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)

<CloudSupportGrid />
