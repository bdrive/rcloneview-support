---
slug: fix-google-photos-sync-errors-rcloneview
title: "Mengatasi Error Sinkronisasi Google Photos — Pustaka Kosong, 403 Forbidden, dan Masalah Read-Only di RcloneView"
authors:
  - steve
description: "Atasi error umum Google Photos di RcloneView — remote yang tampak kosong atau melaporkan tidak ada perubahan, 403 Forbidden akibat client ID yang dihentikan atau batas laju, error tujuan read-only, dan file yang hilang setelah unggah."
keywords:
  - error sinkronisasi Google Photos RcloneView
  - folder Google Photos kosong rclone
  - Google Photos 403 client ID
  - atasi masalah pencadangan Google Photos
  - error rclone Google Photos
  - error kuota API Google Photos
  - pemecahan masalah RcloneView Google Photos
  - masalah unggah Google Photos
  - perbaikan pencadangan Google Photos
tags:
  - RcloneView
  - google-photos
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengatasi Error Sinkronisasi Google Photos — Pustaka Kosong, 403 Forbidden, dan Masalah Read-Only di RcloneView

> Google Photos memiliki batasan API yang tidak dimiliki drive cloud lain. Sebagian besar "error" yang ditemui di RcloneView sebenarnya adalah aturan dari Google — berikut arti masing-masing dan apa yang harus dilakukan.

Google Photos populer untuk menyimpan foto pribadi, tetapi backend rclone-nya berperilaku sangat berbeda dari drive cloud biasa. Sejak 31 Maret 2025, API Google Photos hanya menampilkan kepada aplikasi pihak ketiga media yang diunggah oleh aplikasi itu sendiri; media yang sudah ada tidak dapat diubah atau dihapus melalui API; dan batas lajunya lebih ketat daripada Google Drive. Memahami batasan ini adalah langkah pertama untuk mengatasi error saat bekerja dengan Google Photos di RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Remote Tampak Kosong — "No Changes Detected" atau 0 File Disalin

Laporan yang paling sering muncul: Anda menambahkan remote Google Photos, membukanya di Explorer, dan hampir tidak menemukan apa pun — atau job Copy ke NAS Anda selesai dalam hitungan detik tanpa satu file pun ditransfer. Tidak ada yang rusak. Pada 31 Maret 2025 Google menghapus scope API yang memungkinkan aplikasi pihak ketiga membaca seluruh pustaka pengguna. Dalam kata-kata Google, aplikasi "can now only list, search, and retrieve albums and media items that were created by your app." Karena itu RcloneView hanya melihat foto yang diunggah melalui RcloneView atau rclone; unggahan dari ponsel dan web tidak terlihat, dan album bersama mengembalikan `403 PERMISSION_DENIED`.

RcloneView 1.6 dan yang lebih baru menjelaskan pembatasan ini di dalam aplikasi saat Anda membuka remote Google Photos, sehingga tidak lagi terlihat seperti akun kosong.

Yang perlu dilakukan: gunakan **Google Takeout** untuk mengekspor pustaka Anda yang sudah ada — sebaiknya dikirim ke Google Drive — lalu biarkan RcloneView menyalin hasil ekspor ke drive eksternal, NAS, atau penyimpanan cloud lain. Panduan lengkapnya ada di [Cara Mencadangkan Google Photos ke Drive Eksternal atau NAS](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview).

## Error: "403 Forbidden" — Client ID yang Dihentikan atau Batas Laju

Error `403` dari Google Photos memiliki dua penyebab berbeda. Periksa **tab Log** RcloneView untuk membedakannya.

**403 saat menghubungkan atau menampilkan daftar — client ID bersama.** Client ID Google Photos bawaan rclone akan dihentikan sepanjang 2026, dan Google kini mewajibkan setiap pengguna terhubung dengan client ID OAuth miliknya sendiri. Jika remote gagal terhubung atau setiap permintaan ditolak, inilah penyebabnya. RcloneView 1.6 dan yang lebih baru memandu Anda membuat client ID sendiri di wizard koneksi saat koneksi tidak dapat dibuat; [dokumentasi Google Photos](https://rclone.org/googlephotos/#making-your-own-client-id) rclone menjelaskan langkah yang sama di Google Cloud Console.

**403 dengan `userRateLimitExceeded` saat unggah — kuota tulis.** Google menetapkan batas harian per pengguna untuk unggah foto melalui API, dan mengunggah ribuan foto sekaligus dapat mencapai batas tersebut di tengah transfer. Kurangi konkurensi transfer — buka Advanced Settings pada job Anda dan atur jumlah transfer file menjadi 2 atau 3 — lalu aktifkan **Retry on failure** (5 kali percobaan atau lebih) agar RcloneView mencoba ulang unggahan yang dibatasi, bukan menggagalkan seluruh job. Bagi unggahan yang sangat besar ke beberapa hari jika perlu.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Memantau laju unggah Google Photos di RcloneView" class="img-large img-center" />

## Error: "Can't Copy — Destination is Read Only"

Jika Anda melihat error tentang tujuan read-only, berarti Anda mencoba melakukan sinkronisasi dua arah atau menimpa foto yang sudah ada di Google Photos. API Google Photos tidak mengizinkan perubahan atau penghapusan media yang sudah ada melalui rclone, dan RcloneView mematuhi batasan ini.

Solusinya adalah mengatur job sebagai **Copy** satu arah (bukan Sync) dari sumber Anda ke Google Photos. Cara ini mengunggah file baru tanpa mencoba menghapus atau menimpa apa pun di sisi Google Photos. Jika Anda perlu menghapus foto, lakukan di aplikasi web atau aplikasi seluler Google Photos.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Mengonfigurasi job Copy ke Google Photos di RcloneView" class="img-large img-center" />

## File Hilang Setelah Unggah

Google Photos mengatur media berdasarkan album dan tanggal pembuatan, bukan struktur folder asli Anda. Saat Anda menyalin hierarki folder ke Google Photos, file masuk ke pustaka tetapi tidak mempertahankan folder yang Anda harapkan — API tidak menyimpan struktur folder. Perhatikan juga bahwa foto yang diunduh kembali melalui API tidak berada pada resolusi asli dan kehilangan data lokasi EXIF.

Untuk mempertahankan pengaturan folder Anda, salin ke Google Drive sebagai gantinya, di mana subdirektori dipertahankan persis seperti di sumber. Untuk arsip foto yang sesungguhnya, Backblaze B2 atau Amazon S3 dengan salinan pohon folder asli Anda adalah pilihan jangka panjang yang lebih andal.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Meninjau riwayat job setelah job Google Photos" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Jika remote tampak kosong, itu adalah pembatasan API Google — ekspor pustaka Anda yang sudah ada dengan Google Takeout dan salin hasil ekspor dengan RcloneView.
3. Untuk 403 saat menghubungkan, buat client ID OAuth Anda sendiri; untuk `userRateLimitExceeded`, kurangi konkurensi menjadi 2–3 dan tambah jumlah percobaan ulang.
4. Gunakan jenis job **Copy**, bukan Sync, saat mengunggah ke Google Photos.

Dengan mengetahui aturan Google mana yang Anda hadapi, Anda dapat mengonfigurasi RcloneView dengan benar sejak awal dan menghindari siklus percobaan ulang yang melelahkan.

---

**Panduan Terkait:**

- [Cara Mencadangkan Google Photos ke Drive Eksternal atau NAS — Google Takeout + RcloneView](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)
- [Mengatasi Error Kuota dan Batas Laju Google Drive](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [Menambahkan Remote melalui Log-in Berbasis Browser (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)

<CloudSupportGrid />
