---
slug: fix-backblaze-b2-upload-errors-rcloneview
title: "Perbaiki Error Upload Backblaze B2 — Atasi Masalah Transfer Cloud dengan RcloneView"
authors:
  - alex
description: "Selesaikan error upload Backblaze B2 di RcloneView. Perbaiki kegagalan autentikasi, rate limiting, masalah file besar, dan error izin akses saat sinkronisasi ke B2."
keywords:
  - perbaiki error upload Backblaze B2
  - error sinkronisasi Backblaze B2 RcloneView
  - error autentikasi Backblaze B2
  - perbaikan rate limit B2
  - error upload file besar Backblaze B2
  - troubleshooting RcloneView Backblaze
  - error izin bucket B2
  - perbaikan error upload cloud
  - Backblaze B2 access denied
tags:
  - RcloneView
  - troubleshooting
  - backblaze-b2
  - tips
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Upload Backblaze B2 — Atasi Masalah Transfer Cloud dengan RcloneView

> Diagnosis dan perbaiki error upload Backblaze B2 yang paling umum langsung dari antarmuka RcloneView — tanpa perlu menyentuh command line.

Backblaze B2 adalah backend penyimpanan objek yang populer untuk pencadangan dan pengarsipan, tetapi error upload dapat muncul karena beberapa alasan: kredensial yang kedaluwarsa atau salah konfigurasi, ketidakcocokan izin bucket, batas rate API, atau transfer yang macet pada file besar. Perusahaan produksi video yang mengirim hasil render harian ke bucket B2, atau developer yang melakukan sinkronisasi dataset multi-terabyte, dapat mengalami masalah ini tanpa jalan keluar yang jelas. RcloneView menyediakan alat diagnostik dan kontrol transfer untuk mengidentifikasi dan memperbaiki masalah ini dari satu antarmuka GUI — termasuk log error terperinci, pengeditan kredensial remote, dan penyesuaian transfer per job.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mendiagnosis Error Autentikasi dan Kredensial

Penyebab paling umum kegagalan upload B2 adalah kredensial yang tidak valid atau kedaluwarsa. Backblaze B2 menggunakan Application Key ID dan Application Key — bukan kata sandi akun utama Anda — dan kunci ini dapat dihapus atau dirotasi di konsol B2 kapan saja. Saat RcloneView menemui error Unauthorized atau "Bad credentials", penyebabnya hampir selalu adalah ketidakcocokan kunci.

Untuk mendiagnosis ini di RcloneView, buka tab Remote dan klik Remote Manager. Cari remote B2 Anda dan klik Edit untuk meninjau Application Key ID yang dikonfigurasi. Bandingkan nilai ini dengan kunci yang terdaftar di konsol Backblaze B2 Anda di bagian App Keys. Jika kunci telah dihapus atau tidak lagi terlihat, buat Application Key baru dan perbarui konfigurasi remote di RcloneView dengan kredensial baru tersebut.

<img src="/support/images/en/blog/new-remote.png" alt="Editing Backblaze B2 remote credentials in RcloneView Remote Manager" class="img-large img-center" />

Masalah autentikasi umum lainnya adalah cakupan kunci. Application key di B2 dapat dibatasi ke bucket tertentu. Jika kunci Anda dibuat dengan akses ke bucket A tetapi Anda mencoba mengunggah ke bucket B, transfer akan gagal dengan error izin. Selalu pastikan cakupan bucket kunci Anda sesuai dengan bucket tujuan yang dikonfigurasi dalam job sinkronisasi Anda.

## Memperbaiki Rate Limiting dan Transfer yang Lambat

Backblaze B2 menerapkan batas rate pada panggilan API, yang dapat menyebabkan upload gagal atau macet ketika terlalu banyak permintaan bersamaan berjalan secara simultan. Di RcloneView, atasi hal ini dengan menyesuaikan pengaturan konkurensi transfer pada job sinkronisasi Anda. Buka job di Job Manager, navigasi ke Step 2 (Advanced Settings), dan kurangi Number of file transfers menjadi 2 atau 3. Untuk Number of multi-thread transfers, mengaturnya ke 0 menonaktifkan chunking multi-part dan mengurangi total volume panggilan API.

Jika Anda perlu menjalankan transfer B2 bersamaan dengan operasi lain tanpa membebani koneksi Anda, tab Transferring di RcloneView menampilkan kecepatan langsung dan jumlah file. Perhatikan transfer yang dimulai cepat lalu melambat — ini menunjukkan bahwa B2 sedang membatasi rate koneksi Anda. Mengurangi konkurensi dan memulai ulang job biasanya menyelesaikan kegagalan rate-limit yang terjadi sesekali.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Backblaze B2 upload speed and transfer progress in RcloneView" class="img-large img-center" />

## Menyelesaikan Error File Besar dan Izin Akses

Backblaze B2 membagi file yang lebih besar dari 5 MB menjadi beberapa bagian menggunakan multipart upload. Jika multipart upload terputus di tengah transfer — karena koneksi jaringan terputus atau aplikasi restart — bagian yang belum lengkap dapat tetap tersimpan di B2, menghalangi upload ulang untuk selesai dengan bersih. Mekanisme retry bawaan RcloneView (dapat dikonfigurasi di Step 2 pada "Retry entire sync if fails") menangani sebagian besar kegagalan sementara secara otomatis. Untuk kegagalan yang terus-menerus terjadi pada file besar, menjalankan job sinkronisasi baru akan membersihkan status multipart yang macet dan memulai ulang dengan bersih.

Error izin akses muncul sebagai pesan "Access Denied" di tampilan log RcloneView. Selain masalah cakupan bucket, hal ini terjadi ketika Application Key B2 Anda tidak memiliki akses tulis ke bucket tujuan. Di konsol Backblaze, pastikan kunci tersebut memiliki izin Read dan Write pada tujuan. Setelah memperbarui izin kunci di B2, cukup edit remote di RcloneView untuk memasukkan ulang kredensial — izin yang diperbarui akan berlaku langsung tanpa perlu membuat ulang remote.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Backblaze B2 upload error history in RcloneView Job History" class="img-large img-center" />

Gunakan tab Job History setelah setiap run untuk meninjau status, jumlah error, dan ukuran transfer. Memfilter berdasarkan status "Errored" dengan cepat mengisolasi job yang gagal, dan detail log untuk setiap run menampilkan pesan error persis yang dikembalikan oleh API B2 — sehingga memudahkan untuk membedakan error autentikasi dari timeout jaringan atau respons rate limit.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka Remote Manager dan verifikasi Application Key ID dan nilai kunci Backblaze B2 Anda.
3. Pastikan cakupan bucket kunci sesuai dengan tujuan upload Anda di konsol App Keys B2.
4. Di Job Manager, kurangi transfer bersamaan menjadi 2–3 jika Anda mengalami kegagalan rate-limit.
5. Periksa Job History dengan filter Errored untuk membaca pesan error API yang tepat guna perbaikan yang tepat sasaran.

Dengan diagnostik bawaan dan kontrol transfer RcloneView, menyelesaikan error upload Backblaze B2 hanya masalah memverifikasi kredensial, menyesuaikan konkurensi, dan membaca log job — tanpa memerlukan flag command-line.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Cloud Backblaze B2 — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Perbaiki Error Upload Cloudflare R2 — Atasi Masalah dengan RcloneView](https://rcloneview.com/support/blog/fix-cloudflare-r2-upload-errors-rcloneview)
- [Perbaiki Error Cap Exceeded Backblaze B2 — Selesaikan Masalah Batas Penyimpanan dengan RcloneView](https://rcloneview.com/support/blog/fix-backblaze-b2-cap-exceeded-errors-rcloneview)

<CloudSupportGrid />
