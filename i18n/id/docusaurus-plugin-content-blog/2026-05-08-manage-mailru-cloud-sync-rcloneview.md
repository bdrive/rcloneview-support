---
slug: manage-mailru-cloud-sync-rcloneview
title: "Kelola Penyimpanan Cloud Mail.ru — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - tayson
description: "Pelajari cara menghubungkan dan mengelola penyimpanan Mail.ru Cloud dengan RcloneView. Sinkronisasi, cadangkan, dan transfer file Mail.ru menggunakan GUI yang bersih tanpa perintah CLI apa pun."
keywords:
  - Mail.ru cloud storage RcloneView
  - Mail.ru cloud sync GUI
  - manage Mail.ru files
  - Mail.ru backup tool
  - rclone Mail.ru GUI
  - Mail.ru file transfer
  - cloud storage management
  - Mail.ru sync desktop app
tags:
  - RcloneView
  - mailru
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan Cloud Mail.ru — Sinkronisasi dan Pencadangan File dengan RcloneView

> Hubungkan Mail.ru Cloud ke RcloneView dan kelola file Anda, jalankan pencadangan otomatis, dan sinkronkan data antar penyedia — semuanya dari satu GUI desktop.

Mail.ru Cloud menawarkan ruang penyimpanan gratis yang besar dan banyak digunakan di Rusia dan negara-negara tetangganya. Mengelolanya secara efisien bisa menjadi tantangan tanpa alat yang tepat. RcloneView menjembatani kesenjangan tersebut, terhubung ke Mail.ru Cloud melalui backend Mail.ru milik rclone yang telah terbukti, dan menampilkan file Anda dalam explorer dua panel yang familiar. Tidak diperlukan pengetahuan command-line.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menambahkan Mail.ru Cloud sebagai Remote di RcloneView

Menyiapkan Mail.ru di RcloneView hanya membutuhkan waktu kurang dari dua menit. Buka **tab Remote** di menu bar dan klik **New Remote**. Gulir daftar penyedia untuk menemukan Mail.ru Cloud (atau ketik "mail" pada kolom pencarian), lalu masukkan kredensial akun Mail.ru Anda — nama pengguna dan kata sandi. RcloneView meneruskan kredensial ini ke instance rclone yang tertanam, yang menangani autentikasi terhadap API Mail.ru.

Setelah disimpan, remote akan langsung muncul di panel explorer Anda. Anda dapat menjelajahi folder, melihat pratinjau thumbnail, memeriksa metadata file, dan menavigasi struktur folder seperti halnya drive lokal. Bilah jalur breadcrumb memberikan hierarki yang dapat diklik sehingga menelusuri direktori bertingkat menjadi cepat.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Mail.ru Cloud as a new remote in RcloneView" class="img-large img-center" />

## Menyinkronkan File Mail.ru ke Cloud Lain atau Drive Lokal

Salah satu fitur terkuat RcloneView adalah transfer cloud-ke-cloud yang mulus. Jika Anda perlu menyalin file dari Mail.ru Cloud ke Google Drive, Backblaze B2, atau folder lokal, buka kedua lokasi tersebut berdampingan di explorer dua panel. Seret file dari satu panel ke panel lainnya, atau klik kanan lalu pilih **Copy** kemudian **Paste** di panel tujuan.

Untuk pencadangan berulang, gunakan Job Manager bawaan. Tentukan job Sync atau Copy dengan Mail.ru sebagai sumber dan tujuan pilihan Anda. Konfigurasikan concurrency transfer dan aktifkan verifikasi checksum untuk menangkap file yang rusak selama transfer. Dengan lisensi PLUS, Anda dapat menjadwalkan job-job ini pada timer bergaya crontab sehingga pencadangan berjalan otomatis tanpa intervensi manual apa pun.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Mail.ru sync job in RcloneView Job Manager" class="img-large img-center" />

## Memantau Transfer dan Meninjau Riwayat

Tab **Transferring** di bagian bawah jendela RcloneView menampilkan progres langsung untuk job aktif mana pun — jumlah file, byte yang ditransfer, dan kecepatan saat ini. Anda dapat membatalkan job yang sedang berjalan kapan saja jika perlu menjeda atau menyesuaikan pengaturan.

Setelah setiap job selesai, tab **Job History** menyimpan catatan lengkap: waktu mulai, durasi, total ukuran yang ditransfer, dan status akhir (Completed, Errored, atau Canceled). Bagi bisnis fotografi yang menyimpan hasil kerja klien di Mail.ru, riwayat ini memberikan jejak audit yang andal dan memudahkan untuk mendeteksi jika job pencadangan gagal semalaman.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log showing Mail.ru sync results" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka **tab Remote → New Remote**, pilih Mail.ru Cloud, dan masukkan kredensial Anda.
3. Jelajahi file Mail.ru Anda di panel explorer dan seret item ke tujuan mana pun.
4. Buat job Sync di **Job Manager** untuk pencadangan berulang otomatis.

Dengan RcloneView, Mail.ru Cloud terintegrasi dengan rapi ke dalam alur kerja multi-cloud Anda — tanpa memerlukan terminal.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Cloud Yandex Disk dengan RcloneView](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [Transfer Mail.ru Cloud ke Google Drive dan S3](https://rcloneview.com/support/blog/transfer-mailru-cloud-google-drive-s3-rcloneview)
- [Kelola Beberapa Akun Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)

<CloudSupportGrid />
