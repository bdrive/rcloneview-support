---
slug: fix-box-upload-errors-rcloneview
title: "Perbaiki Error Upload Box — Cara Mengatasi Masalah Transfer dengan RcloneView"
authors:
  - alex
description: "Diagnosis dan perbaiki error upload Box menggunakan RcloneView — pelajari cara menyesuaikan pengaturan transfer, memeriksa log, dan melakukan sinkronisasi file Box secara andal."
keywords:
  - fix Box upload errors
  - Box sync errors RcloneView
  - Box transfer failed rclone
  - Box API rate limit RcloneView
  - troubleshoot Box cloud sync
  - Box authentication error rclone
  - Box file upload issues
  - RcloneView troubleshooting guide
  - resolve Box cloud errors
tags:
  - RcloneView
  - box
  - troubleshooting
  - tips
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Upload Box — Cara Mengatasi Masalah Transfer dengan RcloneView

> Satu error API Box saja dapat membuat proses sinkronisasi terhenti secara diam-diam — berikut cara mendiagnosis penyebab pastinya dan memperbaikinya di RcloneView.

Box adalah platform cloud enterprise yang banyak digunakan, tetapi API-nya menerapkan batas laju (rate limit), jendela kedaluwarsa token, dan aturan path file yang dapat menyebabkan upload gagal di tengah proses transfer. Ketika sebuah job sinkronisasi berhenti tanpa pesan yang jelas, kebanyakan pengguna akan mengulang seluruh job dan berharap hasilnya lebih baik. RcloneView memberi Anda output log terstruktur, perilaku percobaan ulang (retry) yang dapat dikonfigurasi, dan kontrol autentikasi per remote — alat yang tepat untuk menemukan masalah sebenarnya dan mencegahnya terulang.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Penyebab Umum Error Upload Box

Kegagalan upload Box umumnya terbagi ke dalam beberapa kategori. **Pembatasan laju API (rate limiting)** adalah penyebab paling sering: ketika RcloneView mengirim terlalu banyak permintaan bersamaan, Box mengembalikan error HTTP 429 dan membatasi koneksi. Menjalankan transfer paralel ke Box lebih banyak dari jumlah default dapat memicu hal ini, terutama pada akun Box for Business dengan kuota API yang lebih ketat.

**Token OAuth yang kedaluwarsa** adalah penyebab utama kedua. Access token Box kedaluwarsa setelah periode waktu tertentu. Jika job yang berjalan lama sedang berlangsung saat token kedaluwarsa, upload mulai gagal dengan error autentikasi. RcloneView menyimpan kredensial Box Anda secara aman dan memperbarui access token saat kedaluwarsa, tetapi jika refresh token itu sendiri sudah kedaluwarsa — biasanya setelah tidak digunakan dalam waktu lama — Anda perlu melakukan autentikasi ulang pada remote tersebut.

**Masalah path dan penamaan file** juga menyebabkan error. Box menerapkan batasan pada karakter khusus tertentu dan panjang path file. File dengan karakter yang tidak diterima Box akan gagal secara diam-diam kecuali logging diaktifkan.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView showing a Box sync transfer job in progress" class="img-large img-center" />

## Baca Log untuk Mengidentifikasi Error yang Tepat

Sebelum mengubah pengaturan apa pun, aktifkan debug logging untuk menangkap konteks error secara lengkap. Di RcloneView, buka **Settings > Embedded Rclone** dan centang **Enable rclone Logging**, lalu atur level log ke **DEBUG**. Klik **Restart Embedded Rclone**, kemudian ulangi kegagalan upload tersebut. Buka file log dari folder log yang telah dikonfigurasi — kode error dan respons HTTP dari Box akan tercatat dengan jelas.

Sebagai alternatif, periksa **Log tab** di bagian bawah antarmuka RcloneView untuk melihat entri error dengan timestamp dari sesi saat ini. Tab **Job History** (dapat diakses melalui Job Manager) mencatat status, durasi, dan kecepatan transfer untuk setiap job sebelumnya. Job yang selesai dengan status "Errored" berisi konteks jumlah file dan ukuran yang Anda butuhkan untuk membatasi ruang lingkup masalah.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history in RcloneView showing Box sync error details" class="img-large img-center" />

## Sesuaikan Pengaturan Transfer dengan Batasan Box

Setelah Anda mengetahui jenis error-nya, buka job yang bermasalah di **Job Manager** dan klik **Edit**. Pada Langkah 2 (Advanced Settings), kurangi **Number of file transfers** untuk menurunkan jumlah permintaan bersamaan — memulai dengan 2 atau 3 adalah dasar yang aman untuk Box. Kurangi juga **Number of equality checkers** menjadi 4 atau kurang, karena Box juga bisa kesulitan menangani paralelisme tinggi pada sisi metadata.

Tingkatkan jumlah **Retry entire sync if fails** dari default 3 menjadi 5 atau lebih untuk kondisi jaringan yang tidak stabil. Logika retry RcloneView melewati file yang sudah berhasil ditransfer pada percobaan berikutnya, sehingga percobaan ulang tidak menduplikasi pekerjaan — proses akan melanjutkan persis dari titik terakhir percobaan sebelumnya berhenti. Aktifkan verifikasi **checksum** jika integritas data sangat penting, meskipun ini meningkatkan volume permintaan, sehingga sebaiknya dikombinasikan dengan pengaturan konkurensi yang lebih rendah.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring advanced transfer settings for Box in RcloneView" class="img-large img-center" />

## Lakukan Autentikasi Ulang Box Jika Error Token Terus Terjadi

Jika log menunjukkan kegagalan autentikasi yang terus berlanjut bahkan setelah mengurangi konkurensi, token OAuth Box perlu diperbarui. Di RcloneView, buka **Remote tab > Remote Manager**, pilih remote Box Anda, dan klik **Edit**. Menjalankan ulang alur OAuth akan membuka jendela browser agar Anda dapat masuk ke Box kembali, sehingga menerbitkan pasangan token baru. Untuk akun Box for Business, pastikan pengaturan `box_sub_type = enterprise` masih ada di konfigurasi remote sebelum menyimpan.

Setelah autentikasi ulang, jalankan kembali job tersebut. Gunakan opsi **Dry Run** (tersedia di Job Manager) untuk melihat pratinjau file mana yang akan ditransfer tanpa membuat perubahan sebenarnya — ini memungkinkan Anda memastikan koneksi berfungsi dan daftar file sudah sesuai harapan sebelum menjalankan upload penuh.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Aktifkan logging **DEBUG** di Settings > Embedded Rclone dan ulangi error upload untuk menangkap kode error yang tepat.
3. Edit job yang gagal di Job Manager, kurangi jumlah transfer bersamaan menjadi 2–3, dan tingkatkan jumlah retry.
4. Jika error autentikasi terus terjadi, lakukan autentikasi ulang pada remote Box melalui Remote Manager dan gunakan Dry Run untuk memastikan konektivitas sebelum menjalankan job secara penuh.

Dengan pengaturan konkurensi yang tepat dan token yang valid, upload Box melalui RcloneView berjalan dengan andal — bahkan untuk arsip enterprise berskala besar yang mencakup puluhan ribu file.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Cloud Box — Sinkronisasi dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Perbaiki Error Timeout Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-timeout-errors-rcloneview)
- [Perbaiki Error Pembatasan Laju API Cloud dengan RcloneView](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
