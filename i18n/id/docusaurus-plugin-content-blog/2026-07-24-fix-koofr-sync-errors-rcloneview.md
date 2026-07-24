---
slug: fix-koofr-sync-errors-rcloneview
title: "Memperbaiki Error Sinkronisasi Koofr — Troubleshoot dan Atasi dengan RcloneView"
authors:
  - morgan
description: "Perbaiki error sinkronisasi Koofr yang umum terjadi di RcloneView, mulai dari login gagal hingga batas kuota dan transfer yang macet, dengan solusi langkah demi langkah yang jelas."
keywords:
  - error sinkronisasi Koofr
  - perbaiki Koofr RcloneView
  - login Koofr gagal
  - koneksi Koofr timeout
  - kuota Koofr terlampaui
  - troubleshooting RcloneView
  - sinkronisasi cloud Koofr
  - error backup Koofr
  - Koofr rclone
  - troubleshooting penyimpanan cloud
tags:
  - RcloneView
  - koofr
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki Error Sinkronisasi Koofr — Troubleshoot dan Atasi dengan RcloneView

> Job sinkronisasi Koofr macet, gagal melakukan autentikasi, atau diam-diam melewati file? **RcloneView** memberi Anda visibilitas dan kontrol untuk mendiagnosis dan menyelesaikan masalah dengan cepat.

Koofr adalah pilihan penyimpanan cloud Eropa yang solid, tetapi seperti penyedia lainnya, job sinkronisasi dapat mengalami kendala autentikasi, batas kuota, atau error transfer yang membuat Anda bertanya-tanya apa yang salah. Alat Job History, tab Log, dan Dry Run milik RcloneView memudahkan Anda menemukan penyebabnya tanpa perlu menebak-nebak. Panduan ini membahas error sinkronisasi Koofr yang paling umum dan cara memperbaiki masing-masing dari dalam RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Kegagalan Login atau Koneksi

Jika remote Koofr tiba-tiba berhenti terhubung, kredensial yang tersimpan mungkin telah kedaluwarsa atau dicabut dari sisi akun Koofr, atau perubahan kata sandi di Koofr belum tercermin di RcloneView.

**Cara memperbaikinya:**

Buka Remote Manager, pilih remote Koofr, dan masukkan ulang kredensial Anda untuk menyegarkan koneksi. Jika remote tetap gagal terhubung, hapus lalu tambahkan kembali sebagai remote baru melalui wizard New Remote, alih-alih mengedit yang bermasalah — autentikasi ulang yang bersih menyelesaikan sebagian besar masalah sesi lama.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Koofr remote in RcloneView" class="img-large img-center" />

## Job Sinkronisasi Gagal di Tengah Jalan

Job yang menyalin sebagian file lalu berhenti, atau menunjukkan status "Errored" di Job History, biasanya menandakan masalah jaringan sementara, batas laju (rate limit), atau satu file bermasalah (karakter tidak valid, path yang terlalu panjang, atau file lock berukuran nol byte) yang menghambat sisa batch.

**Cara memperbaikinya:**

Buka Job History dan filter berdasarkan "Errored" untuk melihat persis proses mana yang gagal dan kapan. Tingkatkan jumlah "Retry entire sync if fails" di Langkah 2 wizard job — nilai default 3 menangani sebagian besar gangguan jaringan sementara secara otomatis. Jika file yang sama terus gagal, gunakan aturan filter khusus di Langkah 3 untuk mengecualikannya sementara dan pastikan sisa sinkronisasi selesai dengan bersih.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Adjusting retry and advanced sync settings in RcloneView" class="img-large img-center" />

## Kuota Penyimpanan Tercapai

Jika unggahan ke Koofr berhenti di tengah sinkronisasi tanpa error yang jelas, periksa apakah akun telah mencapai batas penyimpanannya. Koofr, seperti kebanyakan penyedia, akan langsung menolak penulisan baru begitu kuota penuh.

**Cara memperbaikinya:**

Jalankan `rclone about "koofr:"` di tab Rclone Terminal bawaan untuk memeriksa penggunaan saat ini dibandingkan kuota Anda. Jika ruang menipis, gunakan alat penemuan perubahan ukuran di Folder Compare untuk menemukan folder yang paling banyak menghabiskan ruang sebelum membebaskan ruang atau meningkatkan paket Koofr Anda.

## File Tidak Cocok Setelah Sinkronisasi

Jika file tampak sudah disalin tetapi Koofr menunjukkan ukuran atau stempel waktu yang berbeda dari sumbernya, ini biasanya merupakan masalah arah atau waktu sinkronisasi, bukan bug khusus Koofr.

**Cara memperbaikinya:**

Jalankan Dry Run sebelum sinkronisasi sesungguhnya untuk melihat pratinjau persis apa yang akan disalin atau dihapus — ini menangkap kesalahan arah sebelum memengaruhi data Anda. Kemudian gunakan Folder Compare antara sumber dan remote Koofr untuk memastikan kedua sisi cocok. Alat sinkronisasi dan Folder Compare RcloneView keduanya tersedia pada lisensi FREE, sehingga Anda dapat memverifikasi hasil tanpa meninggalkan aplikasi.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing source and Koofr folders in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan kembali remote Koofr Anda jika autentikasi gagal, alih-alih mengedit yang sudah kedaluwarsa.
3. Periksa Job History untuk mengetahui titik kegagalan yang tepat dan sesuaikan pengaturan retry atau filter.
4. Jalankan Dry Run dan Folder Compare setelah setiap perbaikan untuk memastikan sinkronisasi berjalan bersih ke depannya.

Rutinitas diagnostik sederhana — Job History dulu, lalu Dry Run, lalu Compare — menyelesaikan sebagian besar masalah sinkronisasi Koofr tanpa perlu baris perintah.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan Koofr — Sinkronisasi dan Backup File dengan RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Koofr sebagai Hub Multi-Cloud dengan RcloneView](https://rcloneview.com/support/blog/koofr-multi-cloud-hub-google-drive-onedrive-dropbox-rcloneview)
- [Migrasi dari Koofr ke Google Drive dengan RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)

<CloudSupportGrid />
