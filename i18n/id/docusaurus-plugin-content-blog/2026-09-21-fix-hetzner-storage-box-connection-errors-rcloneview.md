---
slug: fix-hetzner-storage-box-connection-errors-rcloneview
title: "Memperbaiki Error Koneksi Hetzner Storage Box — Pemecahan Masalah dengan RcloneView"
authors:
  - kai
description: "Pecahkan masalah kegagalan koneksi Hetzner Storage Box di RcloneView, mulai dari kesalahan konfigurasi endpoint hingga error kredensial dan mount."
keywords:
  - error koneksi Hetzner Storage Box
  - pemecahan masalah Hetzner S3
  - memperbaiki sinkronisasi cloud Hetzner
  - error penyimpanan objek Hetzner
  - RcloneView Hetzner
  - error konfigurasi endpoint S3
  - koneksi penyimpanan cloud ditolak
  - pengaturan kredensial Hetzner
tags:
  - RcloneView
  - troubleshooting
  - hetzner
  - s3-compatible
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki Error Koneksi Hetzner Storage Box — Pemecahan Masalah dengan RcloneView

> Kegagalan koneksi ke penyimpanan objek Hetzner yang kompatibel S3 hampir selalu berasal dari endpoint, region, atau pasangan kredensial yang salah — uji koneksi RcloneView menunjukkan persis mana yang bermasalah sebelum Anda membuang waktu untuk sinkronisasi penuh.

Penyimpanan objek Hetzner diakses melalui protokol S3-compatible milik rclone, artinya remote memerlukan Access Key, Secret Key, dan endpoint yang dimasukkan dengan benar — berbeda dengan penyedia berbasis OAuth, di mana login melalui browser menangani autentikasi secara otomatis. RcloneView me-mount DAN menyinkronkan lebih dari 90 penyedia dari satu jendela, di Windows, macOS, dan Linux, tetapi remote yang kompatibel dengan S3 seperti Hetzner memerlukan sedikit lebih banyak ketelitian saat pengaturan dibandingkan remote OAuth sekali klik. Berikut cara mendiagnosis kegagalan koneksi yang paling umum.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Memverifikasi Kecocokan Endpoint dan Region

Penyebab paling umum dari error koneksi Hetzner adalah endpoint yang tidak cocok dengan region tempat storage box dibuat. Endpoint penyimpanan objek Hetzner bersifat spesifik per region, dan menempelkan endpoint yang salah — atau endpoint sisa yang disalin dari penyedia S3-compatible lain — menghasilkan kegagalan koneksi yang terlihat identik dengan kredensial yang salah.

<img src="/support/images/en/blog/new-remote.png" alt="Mengedit pengaturan remote Hetzner Storage Box di RcloneView" class="img-large img-center" />

Buka Remote Manager, pilih remote Hetzner, dan periksa kolom endpoint terhadap nilai persis yang ditampilkan di Hetzner Cloud Console untuk storage box tersebut. Ketidakcocokan region mudah terlewat karena remote sering kali tetap memuat layar konfigurasi tanpa error — kegagalan baru muncul saat RcloneView benar-benar mencoba mendaftar file.

## Menguji Koneksi Sebelum Sinkronisasi Penuh

Daripada menemukan masalah kredensial di tengah transfer, gunakan uji koneksi RcloneView saat menambahkan atau mengedit remote. Jika uji gagal dengan error autentikasi, curigai Access Key ID atau Secret Access Key terlebih dahulu daripada endpoint — periksa apakah ada spasi tambahan di akhir, atau apakah kunci telah dibuat ulang di konsol Hetzner setelah remote pertama kali dikonfigurasi di RcloneView.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Membandingkan file lokal dengan Hetzner Storage Box setelah memperbaiki error koneksi" class="img-large img-center" />

Jika uji berhasil tetapi tugas sinkronisasi masih gagal di tengah jalan, periksa tab Log di Info View bagian bawah — Hetzner terkadang mengembalikan respons pembatasan laju (rate-limit) selama unggahan batch besar, dan log detail akan menampilkan status HTTP spesifik alih-alih timeout umum.

## Memeriksa Firewall dan Akses Jaringan

Firewall perusahaan dan beberapa konfigurasi VPN memblokir lalu lintas keluar ke endpoint S3 yang kurang umum sementara tetap mengizinkan lalu lintas ke penyedia besar seperti Amazon S3. Jika uji koneksi macet alih-alih gagal dengan cepat, pastikan mesin dapat menjangkau endpoint Hetzner secara langsung — pemblokiran tingkat jaringan akan terlihat identik dengan remote yang salah konfigurasi dari dalam RcloneView.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Meninjau Job History setelah menyelesaikan masalah koneksi Hetzner" class="img-large img-center" />

Setelah tugas berjalan dengan sukses, Job History menyimpan catatan kecepatan transfer dan jumlah file, yang berguna untuk memastikan perbaikan tetap bertahan selama sinkronisasi penuh.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka Remote Manager dan periksa ulang endpoint Hetzner terhadap region yang ditampilkan di Hetzner Cloud Console.
3. Masukkan ulang Access Key dan Secret Key jika uji koneksi gagal dengan error autentikasi.
4. Jalankan sinkronisasi Dry Run sebelum transfer sebenarnya untuk menemukan masalah yang tersisa tanpa memindahkan data.

Endpoint dan pasangan kredensial yang dikonfigurasi dengan benar menyelesaikan sebagian besar masalah koneksi Hetzner, sehingga tugas sinkronisasi dan pencadangan dapat berjalan dengan andal ke depannya.

---

**Panduan Terkait:**

- [Mengelola Hetzner Storage Box — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [Memperbaiki Error Koneksi dan Autentikasi MinIO dengan RcloneView](https://rcloneview.com/support/blog/fix-minio-connection-authentication-errors-rcloneview)
- [Memperbaiki Error Koneksi Linode Object Storage dengan RcloneView](https://rcloneview.com/support/blog/fix-linode-object-storage-connection-errors-rcloneview)

<CloudSupportGrid />
