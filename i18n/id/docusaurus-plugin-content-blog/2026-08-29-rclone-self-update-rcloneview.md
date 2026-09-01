---
slug: rclone-self-update-rcloneview
title: "Pembaruan Mandiri Rclone — Jaga Mesin Bawaan Anda Tetap Terbaru di RcloneView"
authors:
  - casey
description: "Perbarui biner rclone bawaan di dalam RcloneView hanya dengan satu klik, sehingga perbaikan dan fitur penyedia baru hadir tanpa instal ulang manual."
keywords:
  - pembaruan mandiri rclone
  - perbarui rclone bawaan
  - versi rclone RcloneView
  - jaga rclone tetap terbaru
  - GUI pembaruan biner rclone
  - RcloneView rclone bawaan
  - versi rclone rc api
  - pembaruan GUI penyimpanan cloud
  - versi minimum rclone
tags:
  - RcloneView
  - feature
  - automation
  - installation
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Pembaruan Mandiri Rclone — Jaga Mesin Bawaan Anda Tetap Terbaru di RcloneView

> RcloneView hadir dengan rclone bawaan, dan dapat memperbarui biner bawaan tersebut dari dalam aplikasi, alih-alih meminta Anda melacak unduhan terpisah.

RcloneView tidak sekadar memanggil rclone apa pun yang kebetulan terpasang di sistem Anda — ia hadir dengan biner rclone bawaannya sendiri dan berkomunikasi dengannya melalui rclone RC API lokal. Biner bawaan itulah yang sebenarnya menjalankan setiap penyalinan, sinkronisasi, dan pemasangan (mount), sehingga menjaganya tetap terbaru penting untuk mendapatkan perbaikan penyedia baru, perubahan protokol, dan peningkatan performa. Alih-alih mengharuskan instal ulang aplikasi penuh setiap kali rclone merilis versi baru, RcloneView menyertakan fitur Pembaruan Mandiri dalam aplikasi untuk mesin bawaan tersebut.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Versi Rclone Bawaan Penting

RcloneView memerlukan versi rclone minimum v1.69.1 atau lebih baru, karena fitur-fitur aplikasi terbaru bergantung pada kemampuan RC API yang hanya tersedia sejak versi tersebut. Penyedia terkadang mengubah API mereka, dan rilis rclone menambal perubahan tersebut — menjalankan biner bawaan yang sudah usang dapat berarti remote yang sebelumnya berfungsi tiba-tiba menampilkan galat autentikasi atau pendataan yang sama sekali tidak berkaitan dengan konfigurasi RcloneView Anda.

<img src="/support/images/en/blog/new-remote.png" alt="Konfigurasi remote RcloneView yang mengandalkan mesin rclone bawaan" class="img-large img-center" />

Karena rclone bawaan berkomunikasi melalui `http://127.0.0.1:5582` pada localhost, memperbaruinya tidak memengaruhi remote, tugas sinkronisasi, atau kredensial tersimpan Anda — semua itu tersimpan dalam konfigurasi RcloneView sendiri, terpisah dari versi biner.

## Memicu Pembaruan Mandiri

Aksi pembaruan mandiri terletak di samping detail koneksi rclone, di mana RcloneView sudah menampilkan versi rclone yang sedang berjalan, alamat API lokal, dan OS host. Menjalankan pembaruan dari sana akan mengambil dan memasang build rclone kompatibel terbaru tanpa perlu keluar dari aplikasi atau membuka terminal.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Memeriksa versi rclone dan riwayat tugas setelah pembaruan rclone bawaan di RcloneView" class="img-large img-center" />

Ini layak diperiksa setelah utas dukungan atau catatan rilis menyebutkan perbaikan khusus penyedia — memperbarui biner bawaan terlebih dahulu adalah cara cepat untuk menyingkirkan kemungkinan pergeseran versi sebelum menelusuri masalah tugas sinkronisasi lebih jauh.

## Menggabungkan Pembaruan Mandiri dengan Pencatatan Log

Jika sebuah tugas mulai gagal tepat setelah pembaruan, mengaktifkan pencatatan log rclone (Pengaturan > Rclone Bawaan > Aktifkan Pencatatan Log rclone) dan mengatur level log ke DEBUG memberi Anda catatan sebelum-dan-sesudah yang jelas. Mulai ulang proses rclone bawaan, reproduksi tugas tersebut, dan file log akan menunjukkan dengan tepat versi mana yang menangani permintaan tersebut — berguna saat melaporkan masalah atau membandingkan perilaku antar versi.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menjalankan tugas sinkronisasi setelah memperbarui mesin rclone bawaan di RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka footer atau pengaturan koneksi untuk memeriksa versi rclone bawaan yang sedang berjalan.
3. Jalankan Pembaruan Mandiri dalam aplikasi untuk mengambil build rclone kompatibel terbaru.
4. Jalankan ulang sinkronisasi atau mount yang sudah ada untuk memastikan semuanya tetap terhubung seperti yang diharapkan.

Menjaga mesin bawaan tetap terbaru adalah kebiasaan kecil yang mencegah sebagian besar masalah sinkronisasi cloud bertipe "kemarin masih berfungsi".

---

**Panduan Terkait:**

- [Pengelola Koneksi RcloneView — Rclone Bawaan dan Eksternal](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)
- [Rclone RC API — Kontrol Jarak Jauh dengan RcloneView](https://rcloneview.com/support/blog/rclone-rc-api-remote-control-rcloneview)
- [Flag Rclone Kustom — Opsi Lanjutan di RcloneView](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)

<CloudSupportGrid />
