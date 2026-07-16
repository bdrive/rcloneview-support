---
slug: manage-vultr-object-storage-cloud-sync-backup-rcloneview
title: "Kelola Vultr Object Storage — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - alex
description: "Hubungkan Vultr Object Storage ke RcloneView dan kelola bucket S3-compatible Anda dengan GUI — sinkronisasi, pencadangan, mount, dan otomatisasi transfer tanpa CLI."
keywords:
  - Vultr Object Storage
  - RcloneView Vultr
  - Vultr S3 compatible backup
  - Vultr cloud sync GUI
  - S3-compatible object storage manager
  - Vultr bucket sync
  - object storage backup tool
  - cloud file transfer Vultr
  - Vultr cloud management
  - S3 compatible GUI rclone
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Vultr Object Storage — Sinkronisasi dan Pencadangan File dengan RcloneView

> RcloneView terhubung ke API S3-compatible milik Vultr Object Storage, memberikan Anda GUI lengkap untuk menjelajahi bucket, menjadwalkan pencadangan, dan mount penyimpanan cloud sebagai drive lokal.

Vultr Object Storage adalah layanan penyimpanan objek S3-compatible yang dibangun di atas infrastruktur cloud Vultr, disukai oleh developer dan tim infrastruktur yang membutuhkan penyimpanan terdistribusi global dan hemat biaya bersamaan dengan layanan komputasi Vultr. Meskipun layanan ini mudah dikonfigurasi secara programatik, mengelola file sehari-hari melalui CLI atau menulis skrip khusus adalah hambatan yang ingin dihindari sebagian besar tim. RcloneView menyelesaikan hal ini dengan memperlakukan bucket Vultr persis seperti remote lainnya — Anda dapat menjelajahinya di file explorer split-pane, menyiapkan tugas sinkronisasi berulang melalui wizard, dan memantau transfer secara langsung tanpa menulis satu perintah rclone pun.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Vultr Object Storage di RcloneView

Menambahkan Vultr ke RcloneView menggunakan pengaturan S3-compatible standar. Buka tab **Remote** dan klik **New Remote**, lalu pilih **Amazon S3** sebagai tipe provider. Masukkan Access Key dan Secret Key Vultr Object Storage Anda — kredensial ini tersedia di panel kontrol Vultr pada bagian kredensial instance Object Storage Anda. Di kolom **Endpoint**, tempelkan URL endpoint yang ditampilkan di dashboard Vultr Anda (setiap region datacenter memiliki URL endpoint-nya sendiri). Biarkan kolom region sebagai `auto` atau kosong; Vultr menangani routing berdasarkan endpoint.

Setelah disimpan, bucket Vultr Anda akan muncul sebagai folder tingkat atas di panel Explorer RcloneView. Navigasikan prefix objek melalui bilah path breadcrumb, beralih antara tampilan list dan thumbnail, serta lihat nama file, ukuran, dan tanggal modifikasi sekilas. Tata letak dual-pane memungkinkan Anda membuka Vultr di satu panel dan folder lokal, path NAS, atau cloud lain di panel satunya — membuat unggah, unduh, dan penyalinan lintas provider dengan drag-and-drop menjadi mudah.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Vultr Object Storage as an S3-compatible remote in RcloneView" class="img-large img-center" />

RcloneView dapat menampilkan hingga empat panel Explorer secara bersamaan, yang berguna saat memindahkan data antar beberapa region Vultr atau melakukan cross-upload antara Vultr dan provider seperti Backblaze B2.

## Sinkronisasi dan Pencadangan File ke Vultr Object Storage

Tugas pencadangan otomatis di RcloneView mengikuti wizard 4 langkah. Pilih sumber Anda — folder lokal, drive eksternal, atau remote cloud lain — dan pilih bucket Vultr sebagai tujuan. Beri nama tugas, pilih sinkronisasi satu arah untuk mencerminkan data ke Vultr, lalu konfigurasikan filtering dan opsi lanjutan. Meningkatkan jumlah transfer bersamaan mempercepat throughput untuk beban kerja seperti tim software yang mencadangkan artefak build setiap malam (ratusan file kecil). Mengaktifkan perbandingan checksum memastikan setiap file tiba identik byte demi byte, yang penting saat mengarsipkan binary hasil kompilasi atau dump database.

Sebelum menjalankan yang pertama secara langsung, klik **Dry Run** untuk melihat pratinjau daftar lengkap file yang akan ditransfer atau dihapus. Pemeriksaan keamanan ini mencegah penghapusan yang tidak diinginkan pada bucket yang dibagikan. Setelah puas, klik **Run** — tab Transferring di bagian bawah RcloneView menampilkan jumlah file, kecepatan transfer, dan total byte dengan pembaruan langsung.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Vultr Object Storage in RcloneView" class="img-large img-center" />

Pengguna RcloneView PLUS dapat menjadwalkan tugas dengan aturan bergaya crontab — misalnya, pencadangan setiap malam pukul 03:00 yang berjalan Senin hingga Jumat — dan menerima notifikasi penyelesaian.

## Melakukan Mount Penyimpanan Vultr sebagai Drive Lokal

Fitur Mount RcloneView memungkinkan Anda melampirkan bucket Vultr langsung sebagai huruf drive lokal (Windows) atau mount point (macOS/Linux), sehingga dapat diakses oleh aplikasi apa pun tanpa langkah sinkronisasi eksplisit. Buka **Mount Manager** dari tab Remote, klik **New Mount**, pilih remote Vultr Anda, dan pilih bucket atau subfolder yang ingin ditampilkan. Atur mode VFS cache ke **writes** untuk sebagian besar beban kerja, lalu klik **Save and Mount**.

Bucket akan muncul sebagai volume lokal. Sebagai contoh, pipeline CI yang menyimpan artefak build langsung ke drive yang di-mount tidak memerlukan kesadaran apa pun terhadap API Vultr — ia menulis file seolah-olah ke disk lokal, dan rclone menangani unggahan secara transparan.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a Vultr Object Storage bucket as a local drive using RcloneView's Mount Manager" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Di panel kontrol Vultr, buka instance Object Storage Anda dan salin Access Key, Secret Key, dan URL endpoint.
3. Di RcloneView, buka **Remote tab → New Remote → Amazon S3**, masukkan kredensial Anda dan endpoint Vultr, lalu simpan.
4. Jelajahi bucket Anda di panel Explorer atau konfigurasikan tugas pencadangan otomatis melalui **Job Manager**.

Setelah terhubung, Vultr Object Storage terintegrasi dengan mulus ke dalam alur kerja multi-cloud apa pun yang Anda kelola di RcloneView — bersama penyimpanan lokal, NAS, dan provider cloud lainnya dalam satu antarmuka.

---

**Panduan Terkait:**

- [Sinkronisasi Vultr Object Storage ke Google Drive dengan RcloneView](https://rcloneview.com/support/blog/sync-vultr-object-storage-s3-google-drive-rcloneview)
- [Kelola Penyimpanan Cloud Cloudflare R2 dengan RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Mount Amazon S3 Buckets sebagai Drive Lokal dengan RcloneView](https://rcloneview.com/support/blog/mount-amazon-s3-buckets-as-local-drives-rcloneview)

<CloudSupportGrid />
