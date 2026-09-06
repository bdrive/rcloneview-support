---
slug: fix-google-cloud-storage-auth-errors-rcloneview
title: "Memperbaiki Error Autentikasi Google Cloud Storage — Selesaikan dengan RcloneView"
authors:
  - morgan
description: "Atasi kegagalan autentikasi Google Cloud Storage di RcloneView, mulai dari Project Number yang hilang hingga token OAuth yang kedaluwarsa."
keywords:
  - error autentikasi Google Cloud Storage
  - memperbaiki error autentikasi GCS
  - Google Cloud Storage Project Number
  - token OAuth GCS kedaluwarsa
  - RcloneView Google Cloud Storage
  - Google Cloud Storage izin ditolak
  - pemecahan masalah koneksi GCS
  - perbaikan autentikasi penyimpanan cloud
tags:
  - RcloneView
  - troubleshooting
  - tips
  - google-cloud-storage
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki Error Autentikasi Google Cloud Storage — Selesaikan dengan RcloneView

> Sebagian besar kegagalan autentikasi Google Cloud Storage di RcloneView berujung pada satu kolom yang hilang atau satu token yang kedaluwarsa — berikut cara mengisolasi dan memperbaiki keduanya.

Google Cloud Storage berbeda dari koneksi Google Drive pribadi: dibutuhkan Project Number saat pengaturan remote, dan model izinnya diatur oleh peran IAM, bukan sekadar berbagi akun. Jika salah satu salah konfigurasi, RcloneView akan menampilkan error autentikasi atau izin begitu Anda mencoba menelusuri bucket. Panduan ini membahas penyebab paling umum dan cara mengatasi masing-masing langsung di dalam RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mendiagnosis Penyebab Utama

Error autentikasi pada remote Google Cloud Storage umumnya terbagi menjadi tiga kelompok: Project Number yang hilang atau salah yang dimasukkan saat pembuatan remote, token OAuth yang kedaluwarsa atau dicabut dari sisi akun Google, atau peran IAM pada akun layanan yang tidak memberikan akses baca/tulis ke bucket target. Buka Remote Manager terlebih dahulu dan periksa konfigurasi remote — jika kolom Project Number kosong atau tidak cocok dengan proyek pemilik bucket, itu hampir selalu menjadi penyebabnya.

<img src="/support/images/en/blog/new-remote.png" alt="Memeriksa pengaturan remote Google Cloud Storage di Remote Manager" class="img-large img-center" />

Jika Project Number tampak benar, kecurigaan berikutnya adalah sesi OAuth itu sendiri. Token dapat menjadi tidak valid karena perubahan kata sandi, otorisasi aplikasi yang dicabut di pengaturan keamanan akun Google Anda, atau sekadar kedaluwarsa setelah periode tidak aktif yang lama.

## Melakukan Autentikasi Ulang dan Memperbaiki Konfigurasi Proyek

Untuk memperbaiki token yang sudah usang, edit remote tersebut dan jalankan kembali alur login OAuth berbasis browser — ini menyegarkan kredensial tanpa perlu membangun ulang remote dari awal. Untuk ketidakcocokan Project Number, perbarui kolom tersebut agar sesuai dengan ID proyek yang benar seperti tertera di Google Cloud Console, lalu simpan dan sambungkan kembali.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Melakukan autentikasi ulang remote Google Cloud Storage setelah error token" class="img-large img-center" />

RcloneView melakukan mount SEKALIGUS sinkronisasi 90+ penyedia dari satu jendela di Windows, macOS, dan Linux, sehingga begitu remote tersambung kembali, Anda dapat langsung melanjutkan pekerjaan sinkronisasi atau mount yang terputus tanpa perlu mengonfigurasi ulang apa pun. Sebelum membangun ulang pekerjaan sinkronisasi besar, gunakan Rclone Terminal bawaan untuk menjalankan `rclone about "yourremote:"` — cara cepat untuk memastikan perbaikan berhasil sebelum Anda mempercayakannya pada transfer sungguhan.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menguji koneksi Google Cloud Storage sebelum melanjutkan pekerjaan sinkronisasi" class="img-large img-center" />

## Mencegah Kegagalan Berulang

Jika error terus berulang secara berkala, periksa apakah peran IAM Google Cloud yang mendasarinya diberi cakupan yang terlalu sempit — peran yang hanya memberikan akses baca akan berhasil melakukan autentikasi tetapi kemudian gagal pada operasi unggah atau hapus, yang bisa terlihat seperti error autentikasi yang tidak menentu, bukan masalah izin. Untuk kasus yang terus berlanjut atau tidak jelas, aktifkan Enable rclone Logging di Settings dengan level log diatur ke DEBUG, reproduksi kegagalan tersebut, dan tinjau entri log terperinci di tab Log untuk menemukan secara tepat panggilan API mana yang ditolak.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka Remote Manager dan verifikasi Project Number pada remote Google Cloud Storage Anda.
3. Jalankan kembali login OAuth jika token telah kedaluwarsa, atau perbaiki Project Number jika tidak cocok.
4. Konfirmasi perbaikan dengan `rclone about` di tab Terminal sebelum melanjutkan pekerjaan sinkronisasi atau pencadangan.

Pemeriksaan lima menit pada dua pengaturan ini menyelesaikan sebagian besar masalah autentikasi Google Cloud Storage.

---

**Panduan Terkait:**

- [Mengelola Bucket Google Cloud Storage — Sinkronisasi dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-google-cloud-storage-buckets-rcloneview)
- [Memperbaiki Token OAuth Kedaluwarsa — Selesaikan Error Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/fix-cloud-oauth-token-expired-refresh-rcloneview)
- [Menyinkronkan Amazon S3 ke Google Cloud Storage dengan RcloneView](https://rcloneview.com/support/blog/sync-s3-to-google-cloud-storage-rcloneview)

<CloudSupportGrid />
