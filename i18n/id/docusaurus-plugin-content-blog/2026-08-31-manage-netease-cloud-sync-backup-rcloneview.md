---
slug: manage-netease-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan NetEase — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - jay
description: "Hubungkan penyimpanan objek NetEase di RcloneView untuk sinkronisasi kompatibel S3, pencadangan, dan pengelolaan file multi-cloud di seluruh alur kerja Anda."
keywords:
  - penyimpanan cloud netease
  - penyimpanan objek netease rcloneview
  - sinkronisasi penyimpanan kompatibel s3
  - pencadangan netease
  - rcloneview netease
  - penyimpanan cloud china
  - gui penyimpanan objek
  - alat sinkronisasi netease
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

# Kelola Penyimpanan NetEase — Sinkronisasi dan Pencadangan File dengan RcloneView

> Hubungkan penyimpanan objek NetEase yang kompatibel dengan S3 ke RcloneView dan kelola bersama semua cloud lain yang sudah Anda gunakan.

Tim yang beroperasi di kawasan Asia-Pasifik sering kali memiliki penyimpanan yang tersebar di beberapa penyedia regional, dan layanan penyimpanan objek NetEase sering menjadi bagian dari campuran itu. RcloneView menjangkaunya melalui backend kompatibel S3 milik rclone, sehingga Anda mendapatkan explorer drag-and-drop, tugas sinkronisasi, dan perbandingan folder yang sama seperti yang Anda gunakan dengan remote lainnya — tanpa aplikasi terpisah, tanpa perlu berpindah konteks. Ini hanyalah satu bucket lagi dalam satu jendela yang sudah menangani 90+ layanan penyimpanan cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Penyimpanan NetEase sebagai Remote

Menambahkan penyimpanan NetEase mengikuti pengaturan standar kompatibel S3 di RcloneView: buat remote baru, pilih jenis penyedia S3, dan masukkan Access Key ID, Secret Access Key, serta URL endpoint NetEase. Tidak ada alur OAuth di sini — kredensial berasal langsung dari konsol akun NetEase Anda, sama seperti cara Anda mengonfigurasi Wasabi, MinIO, atau layanan kompatibel S3 lainnya di RcloneView.

Setelah disimpan, remote akan muncul di panel Explorer seperti koneksi lainnya. Jelajahi bucket, masuk ke folder, dan beralih antara NetEase dan penyedia lain menggunakan bilah tab — semuanya tetap dalam satu jendela, bukan klien terpisah khusus untuk satu penyimpanan.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote kompatibel S3 NetEase di RcloneView" class="img-large img-center" />

RcloneView memasang (mount) dan menyinkronkan 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux — menghubungkan NetEase tidak memerlukan alat berbeda untuk penyedia yang berbeda.

## Menyinkronkan Antara NetEase dan Cloud Lain

Setelah remote dikonfigurasi, perlakukan NetEase seperti endpoint lain dalam tugas sinkronisasi. Tetapkan sebagai sumber atau tujuan dalam wizard sinkronisasi 4 langkah RcloneView, pilih sinkronisasi satu arah untuk jalur pencadangan yang stabil, dan tambahkan filter jika Anda hanya ingin menyertakan jenis file atau folder tertentu. Advanced Settings memungkinkan Anda menyesuaikan jumlah transfer bersamaan dan multi-thread untuk batch besar.

Jalankan Dry Run sebelum sinkronisasi pertama — ini menampilkan pratinjau tepat tentang apa yang akan disalin atau dihapus tanpa menyentuh data sebenarnya, yang penting saat menyiapkan pipeline lintas-wilayah baru. Setelah yakin, Job Manager menyimpan tugas untuk dijalankan berulang kali dan melacak setiap eksekusi di Job History.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Tugas transfer cloud-ke-cloud antara NetEase dan remote lain" class="img-large img-center" />

## Membandingkan dan Mencadangkan Bucket NetEase

Folder Compare memberikan tampilan berdampingan antara bucket NetEase dengan folder lokal atau remote cloud lain, menandai file yang hanya ada di satu sisi atau berbeda ukurannya. Ini berguna untuk memverifikasi bahwa migrasi selesai dengan bersih, atau memeriksa sepintas apakah pencadangan terjadwal benar-benar menangkap semuanya.

Untuk perlindungan berkelanjutan, tugas sinkronisasi 1:N dapat mencerminkan sumber lokal yang sama ke NetEase dan penyedia kedua sekaligus — tersedia pada lisensi FREE — sehingga satu gangguan penyimpanan tidak membuat Anda kehilangan salinan.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History RcloneView menampilkan catatan transfer NetEase" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan remote NetEase** menggunakan Access Key, Secret Key, dan endpoint Anda di bawah jenis penyedia kompatibel S3.
3. **Jalankan sinkronisasi Dry Run** untuk mengonfirmasi pilihan file Anda sebelum benar-benar mentransfer apa pun.
4. **Simpan tugas** di Job Manager sehingga sinkronisasi dan pencadangan berikutnya hanya perlu satu klik.

Dengan NetEase berdampingan dengan remote lain Anda di RcloneView, penyimpanan regional berhenti menjadi alur kerja terpisah dan hanya menjadi tujuan lain yang Anda kelola dari explorer yang sama.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Cloud Qiniu — Sinkronisasi dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-qiniu-cloud-storage-sync-rcloneview)
- [Kelola Penyimpanan Cloud China Mobile — Sinkronisasi dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-china-mobile-cloud-sync-backup-rcloneview)
- [Kelola Alibaba OSS — Sinkronisasi dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-alibaba-oss-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
