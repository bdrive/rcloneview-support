---
slug: sync-dropbox-to-google-drive-rcloneview
title: "Sinkronisasi Dropbox ke Google Drive — Otomatiskan Pencadangan Cloud dengan RcloneView"
authors:
  - casey
description: "Pelajari cara menyinkronkan Dropbox ke Google Drive secara otomatis dengan RcloneView. Siapkan tugas pencadangan cloud-to-cloud berulang dengan penjadwalan, pemfilteran, dan pemantauan transfer langsung."
keywords:
  - sync Dropbox to Google Drive
  - Dropbox Google Drive sync
  - Dropbox to Google Drive backup
  - cloud to cloud sync RcloneView
  - automate Dropbox Google Drive transfer
  - rclone Dropbox Google Drive GUI
  - Dropbox cloud backup solution
  - recurring cloud sync job
  - cross-cloud backup automation
  - RcloneView cloud sync tool
tags:
  - dropbox
  - google-drive
  - cloud-to-cloud
  - sync
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Dropbox ke Google Drive — Otomatiskan Pencadangan Cloud dengan RcloneView

> Jaga agar Dropbox dan Google Drive Anda tetap tersinkronisasi secara otomatis — tanpa skrip, terminal, atau layanan sinkronisasi pihak ketiga yang mahal.

Banyak tim mengandalkan Dropbox untuk berbagi file sehari-hari, tetapi strategi cloud yang cerdas berarti menyimpan salinan cadangan di penyedia kedua seperti Google Drive. Baik Anda melindungi dari penghapusan yang tidak disengaja, mempersiapkan migrasi workspace, atau memenuhi kebijakan pencadangan dua-cloud, RcloneView memberi Anda pipeline berbasis GUI dan terjadwal untuk menyinkronkan Dropbox ke Google Drive secara andal.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan Dropbox dan Google Drive sebagai Remote

Sebelum menjadwalkan tugas sinkronisasi apa pun, RcloneView memerlukan koneksi yang diotorisasi ke kedua penyedia. Buka aplikasi, buka **tab Remote**, lalu klik **New Remote**. Pilih **Dropbox** dari daftar penyedia dan selesaikan login OAuth di browser — tidak diperlukan API key. Ulangi proses ini untuk **Google Drive**, dengan autentikasi menggunakan akun Google Anda.

Kedua remote sekarang muncul di Remote Manager dan dapat diakses dari panel Explorer mana pun. Anda dapat menjelajahi folder Dropbox di panel kiri dan tujuan Google Drive di panel kanan, sehingga memudahkan identifikasi sumber dan tujuan sebelum membuat tugas.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Google Drive remotes in RcloneView" class="img-large img-center" />

Untuk tim yang menggunakan **Dropbox for Business**, atur parameter `dropbox_business = true` selama pengaturan remote. Untuk **Google Shared Drives**, aktifkan opsi shared drive agar folder tim dapat diakses di remote explorer.

## Buat Tugas Sinkronisasi dengan Penjadwalan

Setelah kedua remote terhubung, buka **tab Home** dan klik **Sync** untuk membuka wizard tugas. Pada Langkah 1, pilih folder Dropbox Anda sebagai sumber dan folder Google Drive sebagai tujuan. Beri nama tugas yang deskriptif seperti `dropbox-to-gdrive-backup`.

Pada Langkah 2, sesuaikan jumlah transfer bersamaan dengan kecepatan koneksi Anda. Mengaktifkan **verifikasi checksum** memastikan integritas file dikonfirmasi byte demi byte, bukan hanya berdasarkan ukuran. Langkah 3 memungkinkan Anda memfilter berdasarkan jenis file — misalnya, mengecualikan file `.tmp` atau `.lnk` yang terkadang ditinggalkan Dropbox di folder tim yang disinkronkan.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting up a scheduled Dropbox to Google Drive sync job in RcloneView" class="img-large img-center" />

Langkah 4 adalah saat otomatisasi terjadi. Dengan **lisensi PLUS**, atur jadwal bergaya cron — misalnya, setiap malam pukul 02.00 — sehingga konten Dropbox terbaru secara otomatis dicerminkan ke Google Drive. Gunakan ekspresi cron `0 2 * * *` untuk eksekusi harian atau `0 2 * * 0` untuk sinkronisasi mingguan setiap hari Minggu. Tombol **Simulate schedule** menampilkan pratinjau beberapa waktu eksekusi berikutnya sebelum Anda menyimpannya.

## Pantau Transfer Langsung dan Tinjau Riwayat

Setelah tugas Anda berjalan, **tab Transferring** di bagian bawah aplikasi menampilkan progres transfer secara langsung: jumlah file, kecepatan transfer, total data yang dipindahkan, dan tombol batal jika Anda perlu menghentikan proses di tengah jalan. Bagi agensi kreatif yang menyinkronkan 80 GB arsip proyek dari Dropbox ke Google Drive, Anda dapat mengamati status setiap file bertambah seiring transfer selesai.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring for Dropbox to Google Drive sync" class="img-large img-center" />

Setelah setiap eksekusi, tampilan **Job History** mencatat jenis eksekusi (manual atau terjadwal), durasi, total byte yang ditransfer, kecepatan, dan status akhir — Completed, Errored, atau Canceled. Jika suatu eksekusi mengalami batas laju API sementara dari Dropbox atau Google Drive, mekanisme percobaan ulang bawaan (default: 3 kali percobaan) menangani kegagalan sementara tanpa intervensi manual.

## Verifikasi Hasil Sinkronisasi dengan Folder Compare

Setelah sinkronisasi penuh awal, gunakan alat **Folder Compare** milik RcloneView untuk memvalidasi bahwa kedua sisi cocok. Jalankan dari tab Home, pilih sumber Dropbox dan tujuan Google Drive Anda, lalu klik Compare. Hasilnya menampilkan file yang hanya ada di kiri (belum disinkronkan), file yang hanya ada di kanan (ditambahkan secara manual ke Drive), file yang sama, dan file dengan ukuran yang tidak cocok.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying Dropbox and Google Drive are in sync" class="img-large img-center" />

Jalankan **Dry Run** sebelum sinkronisasi langsung pertama untuk melihat pratinjau file mana yang akan disalin atau dihapus. Ini sangat penting saat menyinkronkan folder tim Dropbox yang aktif — Anda ingin memastikan cakupannya sebelum ada perubahan yang menyentuh tujuan Google Drive.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote Dropbox Anda melalui login OAuth (tab Remote > New Remote).
3. Tambahkan remote Google Drive Anda dengan cara yang sama.
4. Buat tugas Sync dari Dropbox ke Google Drive dengan jadwal pilihan Anda.

Dengan pipeline Dropbox-ke-Google Drive yang tepat, data Anda tersimpan di dua cloud — melindungi dari gangguan penyedia, penghapusan yang tidak disengaja, dan kejutan penagihan.

---

**Panduan Terkait:**

- [Migrasi Dropbox ke Google Drive dengan RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-google-drive-with-rcloneview)
- [Kelola Dropbox — Sinkronisasi dan Pencadangan Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Sinkronisasi Google Drive ke Dropbox dengan RcloneView](https://rcloneview.com/support/blog/sync-google-drive-to-dropbox-rcloneview)

<CloudSupportGrid />
