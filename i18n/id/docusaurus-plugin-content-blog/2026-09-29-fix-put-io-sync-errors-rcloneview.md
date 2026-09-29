---
slug: fix-put-io-sync-errors-rcloneview
title: "Perbaiki Error Sinkronisasi Put.io — Diagnosis dan Atasi dengan RcloneView"
authors:
  - kai
description: "Perbaiki error sinkronisasi Put.io dengan RcloneView: otorisasi ulang OAuth, atur transfer, baca riwayat job dan log, lalu verifikasi hasil dengan Folder Compare."
keywords:
  - perbaiki error sinkronisasi put.io
  - error autentikasi put.io
  - transfer put.io gagal
  - error putio rclone
  - RcloneView put.io
  - otorisasi ulang oauth put.io
  - pemecahan masalah sinkronisasi cloud
  - unduhan put.io gagal
  - debug log rclone
  - sinkronisasi put.io GUI
tags:
  - RcloneView
  - troubleshooting
  - tips
  - putio
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Sinkronisasi Put.io — Diagnosis dan Atasi dengan RcloneView

> Telusuri penyebab umum transfer Put.io yang gagal, mulai dari otorisasi kedaluwarsa hingga konkurensi berlebihan, menggunakan alat bawaan RcloneView.

Sinkronisasi Put.io yang berhenti di tengah jalan sering membuat Anda menebak-nebak: apakah karena login, jaringan, atau pengaturan job? RcloneView menampilkan buktinya di satu tempat. Tab Transferring, Job History, dan penampil log masing-masing menunjukkan bagian yang berbeda dari apa yang terjadi, dan Folder Compare memberi tahu apa yang masih belum ada sesudahnya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mulai dari Otorisasi

Put.io terhubung melalui OAuth berbasis browser. Jika job langsung gagal dengan pesan autentikasi atau izin, otorisasi yang tersimpan adalah tersangka pertama. Buka **Remote Manager** dari tab Remote, edit remote Put.io, lalu ulangi login melalui browser. Pastikan Anda masuk dengan akun Put.io yang sama dengan yang menyimpan file Anda, karena akun kedua di browser yang sama adalah penyebab umum daftar file yang kosong.

<img src="/support/images/en/blog/new-remote.png" alt="Otorisasi ulang remote Put.io di RcloneView" class="img-large img-center" />

Setelah otorisasi ulang, segarkan panel Put.io dengan F5 (Cmd+R di macOS) dan pastikan folder Anda tampil dengan benar sebelum menjalankan ulang job apa pun.

## Baca Job History dan Log

Saat job gagal di tengah jalan, buka **Job History**. Setiap eksekusi mencatat jenis eksekusi, waktu mulai, waktu yang dihabiskan, status (Completed, Errored, atau Canceled), ukuran total, kecepatan, dan jumlah file. Membandingkan eksekusi yang gagal dengan eksekusi sebelumnya yang berhasil menunjukkan apakah job gagal di awal, yang mengarah ke kredensial, atau di akhir, yang mengarah ke masalah jaringan atau volume.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History yang menampilkan eksekusi Put.io yang error dan yang selesai" class="img-large img-center" />

Untuk detailnya, aktifkan pencatatan log ke file di **Settings > Embedded Rclone**, atur level log ke DEBUG, lalu klik Restart Embedded Rclone. Reproduksi kegagalannya, lalu baca file yang gagal dan teks error di tab log. Tab Terminal juga memungkinkan Anda menjalankan `rclone about "putio:"` (dengan nama remote Anda sendiri) untuk memastikan remote merespons.

## Atur Pengaturan Job

Kegagalan transfer pada layanan jarak jauh sering kali disebabkan oleh diri sendiri. Di Advanced Settings pada wizard sinkronisasi, kurangi **Number of file transfers** dan **Number of equality checkers**; untuk backend yang lambat, disarankan menjaga checkers di angka 4 atau kurang. Biarkan **Retry entire sync if fails** pada nilai default 3 agar gangguan singkat dapat pulih dengan sendirinya. Jika file yang sangat besar menjadi masalah, gunakan filter ukuran file maksimum untuk membagi pekerjaan menjadi tahap pertama untuk file yang lebih kecil dan tahap terpisah untuk sisanya.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menjalankan job sinkronisasi Put.io setelah pengaturan disesuaikan" class="img-large img-center" />

## Pastikan Apa yang Masih Hilang

Setelah dijalankan ulang, buka **Compare** dengan Put.io di satu sisi dan tujuan Anda di sisi lain. File Left-only adalah file yang tidak pernah sampai, dan **Copy right** hanya mengirim file tersebut. RcloneView menyediakan ini dengan lisensi FREE, bersama mount dan sinkronisasi, sehingga Anda dapat menyelesaikan pemulihan tanpa upgrade.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare yang menampilkan file yang masih belum ada di tujuan" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Otorisasi ulang remote Put.io di Remote Manager lalu segarkan daftar file.
3. Tinjau Job History, dan aktifkan log DEBUG jika penyebabnya belum jelas.
4. Kurangi konkurensi, jalankan ulang, lalu gunakan Compare untuk menyalin sisa file.

Membaca bukti terlebih dahulu mengubah kegagalan yang samar menjadi pengaturan yang spesifik dan dapat diperbaiki.

---

**Panduan terkait:**

- [Kelola Penyimpanan Put.io](https://rcloneview.com/support/blog/manage-put-io-cloud-sync-backup-rcloneview)
- [Migrasi Put.io ke Google Drive](https://rcloneview.com/support/blog/migrate-put-io-to-google-drive-rcloneview)
- [Perbaiki Error Sinkronisasi Cloud karena Token OAuth Kedaluwarsa](https://rcloneview.com/support/blog/fix-oauth-token-expired-cloud-sync-rcloneview)

<CloudSupportGrid />
