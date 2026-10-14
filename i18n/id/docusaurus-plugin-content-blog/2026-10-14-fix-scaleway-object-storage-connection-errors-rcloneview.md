---
slug: fix-scaleway-object-storage-connection-errors-rcloneview
title: "Perbaiki Error Koneksi Scaleway Object Storage — Atasi dengan RcloneView"
authors:
  - steve
description: "Atasi error koneksi Scaleway Object Storage di RcloneView: perbaiki ketidakcocokan region, endpoint, dan access key pada remote yang kompatibel dengan S3."
keywords:
  - error scaleway object storage
  - perbaiki koneksi scaleway
  - RcloneView scaleway
  - pemecahan masalah kompatibel S3
  - region endpoint scaleway
  - akses ditolak bucket scaleway
  - access key scaleway
  - remote rclone scaleway
tags:
  - RcloneView
  - troubleshooting
  - tips
  - object-storage
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Koneksi Scaleway Object Storage — Atasi dengan RcloneView

> Sebagian besar kegagalan koneksi Scaleway disebabkan oleh ketidakcocokan region, endpoint, atau key — berikut cara menemukan dan memperbaikinya di RcloneView.

Scaleway Object Storage diakses melalui protokol yang kompatibel dengan S3, sehingga sebuah remote memerlukan Access Key, Secret Key, region, dan endpoint yang cocok. Jika salah satunya tidak sesuai dengan lokasi bucket yang sebenarnya, Anda akan mendapat error akses ditolak atau bucket tidak ditemukan yang tampak seperti masalah jaringan. RcloneView menampilkan error tersebut di lognya dan memungkinkan Anda membangun ulang remote tanpa kehilangan job sinkronisasi.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Periksa Region dan Endpoint Terlebih Dahulu

Bucket Scaleway terikat pada sebuah region, dan endpoint harus berasal dari region yang sama. Tim yang membuat bucket di satu region tetapi mengonfigurasi remote untuk region lain akan mengalami kegagalan bergaya autentikasi meskipun key-nya valid. Bandingkan region yang ditampilkan di konsol Scaleway dengan region dan endpoint pada pengaturan remote Anda, karakter demi karakter.

<img src="/support/images/en/blog/new-remote.png" alt="Mengonfigurasi remote Scaleway yang kompatibel dengan S3 di RcloneView" class="img-large img-center" />

## Verifikasi Kredensial dan Izin

Selanjutnya, pastikan Access Key dan Secret Key. Key yang dibuat ulang atau dihapus adalah penyebab umum ketika job yang sebelumnya berjalan tiba-tiba gagal. Periksa juga bahwa izin key mencakup bucket dan proyek yang Anda tuju; key yang valid tanpa akses ke bucket tetap mengembalikan akses ditolak. Buka Remote Manager, edit remote, dan tempel nilai yang baru.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Menjelajahi bucket Scaleway setelah memperbaiki kredensial di RcloneView" class="img-large img-center" />

## Uji, Lalu Lanjutkan Job

Setelah mengedit remote, buka Rclone Terminal dan tampilkan daftar bucket untuk memastikan koneksi berfungsi. Kemudian jalankan Dry Run pada job sinkronisasi Anda untuk memastikan file yang diharapkan terlihat sebelum transfer sebenarnya dilanjutkan. Jika masalah berlanjut, aktifkan logging rclone pada level DEBUG di Pengaturan, mulai ulang rclone tertanam, reproduksi error, dan baca lognya.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Meninjau riwayat job Scaleway di RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka Remote Manager dan edit remote Scaleway Anda.
3. Samakan region dan endpoint dengan bucket, lalu masukkan ulang key.
4. Tampilkan daftar bucket, jalankan Dry Run, lalu lanjutkan job Anda.

Remote yang region, endpoint, dan key-nya cocok berperilaku seperti penyimpanan kompatibel S3 lainnya dalam alur kerja Anda.

---

**Panduan Terkait:**

- [Kelola Scaleway Object Storage — Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Perbaiki Error Koneksi Linode Object Storage — Atasi dengan RcloneView](https://rcloneview.com/support/blog/fix-linode-object-storage-connection-errors-rcloneview)
- [Migrasi IBM COS ke Scaleway — Transfer File dengan RcloneView](https://rcloneview.com/support/blog/migrate-ibm-cos-to-scaleway-rcloneview)

<CloudSupportGrid />
