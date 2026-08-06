---
slug: manage-magalu-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan Cloud Magalu — Sinkronkan dan Cadangkan File dengan RcloneView"
authors:
  - robin
description: "Hubungkan penyimpanan objek Magalu Cloud yang kompatibel dengan S3 ke RcloneView untuk penjelajahan seret-dan-lepas, pencadangan terjadwal, dan sinkronisasi lintas cloud."
keywords:
  - penyimpanan cloud Magalu
  - Magalu S3
  - RcloneView Magalu
  - kelola file Magalu
  - cadangan cloud Magalu
  - sinkronisasi Magalu
  - GUI penyimpanan kompatibel S3
  - penyimpanan cloud Brasil
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

# Kelola Penyimpanan Cloud Magalu — Sinkronkan dan Cadangkan File dengan RcloneView

> Jelajahi, sinkronkan, dan cadangkan penyimpanan objek Magalu Cloud yang kompatibel dengan S3 dari jendela yang sama yang Anda gunakan untuk setiap cloud lainnya.

Magalu Cloud adalah layanan penyimpanan objek yang kompatibel dengan S3, dan seperti kebanyakan penyedia yang kompatibel dengan S3, layanan ini tidak dilengkapi pengelola file desktop khusus — Anda harus membuat skrip panggilan `curl` atau menyiapkan CLI hanya untuk memindahkan file. RcloneView menutup celah ini dengan memperlakukan bucket Magalu persis seperti remote lainnya: penjelajahan file penuh, transfer seret-dan-lepas, dan tugas sinkronisasi terjadwal, tanpa memerlukan terminal.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Bucket Magalu

Karena Magalu Cloud menggunakan protokol S3, Anda menambahkannya di RcloneView dengan cara yang sama seperti menambahkan Amazon S3 atau Backblaze B2: buat remote baru, pilih opsi penyedia yang kompatibel dengan S3, lalu masukkan Access Key, Secret Key, dan URL endpoint Magalu untuk wilayah akun Anda. Setelah disimpan, bucket akan muncul sebagai tab normal di panel Explorer, siap untuk dijelajahi dan ditransfer segera.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote Magalu Cloud yang kompatibel dengan S3 di RcloneView" class="img-large img-center" />

Sambungkan S3, Azure, atau Backblaze B2 dengan akses baca/tulis penuh pada lisensi FREE, sehingga Magalu bergabung dengan jajaran cloud Anda yang sudah ada tanpa penghalang biaya.

## Menjelajahi dan Mengatur Penyimpanan Magalu

Setelah terhubung, bucket Magalu berperilaku seperti folder lokal biasa di Explorer. Urutkan berdasarkan nama, jenis, tanggal modifikasi, atau ukuran, beralih ke tampilan thumbnail saat bucket penuh dengan gambar, dan gunakan Get Size untuk memeriksa berapa banyak ruang yang digunakan sebuah folder sebelum memutuskan apakah akan mengarsipkannya ke tempat lain. Pemilihan banyak item dengan Ctrl+Klik atau Shift+Klik menangani unduhan dan penghapusan massal tanpa loop berbasis skrip.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Menjelajahi isi bucket Magalu Cloud di RcloneView" class="img-large img-center" />

## Mencadangkan Ke dan Dari Magalu

Untuk pencadangan berulang, siapkan tugas Sinkronisasi dengan Magalu sebagai sumber atau tujuan. Wizard 4 langkah ini mencakup jumlah transfer bersamaan, verifikasi checksum sehingga file dibandingkan berdasarkan hash dan ukuran alih-alih hanya stempel waktu, serta aturan pemfilteran untuk mengecualikan jenis file yang tidak ingin Anda arsipkan. Jalankan Dry Run terlebih dahulu untuk melihat pratinjau persis apa yang akan disalin atau dihapus — langkah ini patut dilakukan sebelum menjalankan tugas sinkronisasi pada bucket yang menyimpan data produksi.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Menjadwalkan tugas pencadangan Magalu Cloud di RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buat remote baru dan pilih jenis penyedia yang kompatibel dengan S3.
3. Masukkan Access Key, Secret Key, dan URL endpoint Magalu Anda.
4. Siapkan tugas Sinkronisasi atau Salin untuk memindahkan file antara Magalu dan remote cloud Anda yang lain.

Setelah Magalu terhubung ke RcloneView, mengelola penyimpanan objek Anda tidak lagi menjadi pekerjaan skrip yang merepotkan, melainkan menjadi bagian dari alur kerja file normal Anda.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Objek Scaleway — Sinkronisasi dan Pencadangan Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Kelola Penyimpanan Objek IONOS — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)
- [Kelola Penyimpanan Objek Leviia — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-leviia-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
