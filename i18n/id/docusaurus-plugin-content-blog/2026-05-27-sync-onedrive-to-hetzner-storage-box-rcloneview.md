---
slug: sync-onedrive-to-hetzner-storage-box-rcloneview
title: "Sinkronisasi OneDrive ke Hetzner Storage Box — Pencadangan Cloud dengan RcloneView"
authors:
  - jay
description: "Sinkronkan OneDrive ke Hetzner Storage Box menggunakan RcloneView. Siapkan pencadangan SFTP, jadwalkan sinkronisasi otomatis, dan lindungi file Microsoft Anda dengan penyimpanan Eropa."
keywords:
  - sync OneDrive to Hetzner Storage Box
  - Microsoft OneDrive Hetzner backup
  - RcloneView OneDrive Hetzner
  - Hetzner Storage Box SFTP backup
  - cloud storage to Hetzner sync
  - OneDrive backup Europe GDPR
  - cloud file sync automation
  - Hetzner cloud backup tool
  - OneDrive off-site backup
tags:
  - RcloneView
  - onedrive
  - hetzner
  - sftp
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi OneDrive ke Hetzner Storage Box — Pencadangan Cloud dengan RcloneView

> Buat pencadangan off-site yang independen untuk file OneDrive Anda dengan menyinkronkannya ke Hetzner Storage Box menggunakan RcloneView—tanpa memerlukan skrip.

Hetzner Storage Box adalah solusi penyimpanan SFTP yang hemat biaya dan dihosting di Eropa, populer di kalangan pengembang dan tim IT yang menginginkan penyimpanan pencadangan yang andal dan menghormati privasi di luar penyedia hyperscaler besar. Menyinkronkan konten Microsoft OneDrive Anda ke Hetzner Storage Box dengan RcloneView menciptakan salinan off-site yang sepenuhnya independen dari ekosistem Microsoft—berguna untuk pemulihan bencana, kepatuhan residensi data terkait GDPR, atau perlindungan terhadap penangguhan akun yang tidak terduga. Seluruh alur kerja dapat dikonfigurasi melalui antarmuka visual RcloneView tanpa menulis satu pun perintah rclone.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengonfigurasi OneDrive dan Hetzner Storage Box sebagai Remote

Sebelum melakukan sinkronisasi, Anda perlu mendaftarkan kedua layanan sebagai remote di RcloneView. OneDrive menggunakan autentikasi browser OAuth—klik tab **Remote** → **New Remote** → **OneDrive**, dan RcloneView akan membuka browser Anda untuk login Microsoft satu klik. Tidak ada kunci API atau kredensial klien yang perlu dikelola secara manual. Akun OneDrive pribadi maupun OneDrive bisnis untuk Microsoft 365 sama-sama berfungsi melalui alur ini.

Hetzner Storage Box terhubung melalui SFTP. Pada dialog New Remote, pilih **SFTP**, lalu masukkan hostname Storage Box Anda (dengan format `u{number}.your-storagebox.de`), nama pengguna, serta kata sandi atau jalur ke kunci privat SSH Anda. Hetzner mendukung autentikasi berbasis kata sandi maupun kunci—tim yang mengelola beberapa tujuan pencadangan seringkali lebih memilih kunci SSH untuk otomatisasi tanpa pengawasan tanpa menyimpan kata sandi dalam bentuk teks biasa.

<img src="/support/images/en/blog/new-remote.png" alt="Adding OneDrive and Hetzner Storage Box as remotes in RcloneView" class="img-large img-center" />

Setelah kedua remote muncul di tab explorer RcloneView, jelajahi masing-masing sisi untuk memastikan koneksi sebelum membuat pekerjaan sinkronisasi Anda.

## Membuat Pekerjaan Sinkronisasi OneDrive-ke-Hetzner

Setelah kedua remote siap, buka **Job Manager** dari tab Home dan klik **Add Job**. Dalam wizard 4 langkah, atur folder sumber OneDrive Anda—ini bisa berupa seluruh root OneDrive Anda atau subfolder tertentu seperti `Documents/Contracts` atau folder Teams bersama. Atur jalur Hetzner Storage Box sebagai tujuan.

Pada langkah Advanced Settings, konfigurasikan jumlah transfer bersamaan agar sesuai dengan kecepatan koneksi Anda dan aktifkan verifikasi checksum untuk data yang penting. Sebuah firma hukum yang mencadangkan 30GB berkas kasus ke Hetzner dapat mengandalkan mode checksum untuk memverifikasi bahwa setiap dokumen tiba dengan utuh—menangkap kerusakan apa pun yang terjadi selama transit. Langkah Filtering memungkinkan Anda mengecualikan file kunci sementara Office (`.tmp`, `.lock`) atau membatasi pekerjaan hanya pada jenis dokumen tertentu seperti PDF dan spreadsheet.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to Hetzner Storage Box sync job configuration in RcloneView" class="img-large img-center" />

Jalankan simulasi dry-run terlebih dahulu—RcloneView menampilkan dengan tepat file mana yang akan disalin atau dihapus tanpa membuat perubahan apa pun. Setelah puas dengan pratinjau tersebut, jalankan pekerjaannya. Tab **Transferring** di bagian bawah menampilkan progres transfer secara langsung, kecepatan transfer, dan jumlah file selama proses berlangsung.

## Menjadwalkan dan Memantau Pencadangan Otomatis

Dengan lisensi RcloneView PLUS, otomatisasi pencadangan OneDrive-ke-Hetzner Anda pada jadwal crontab. Mengatur sinkronisasi harian pada pukul 03:00 memastikan file OneDrive Anda dicadangkan ke Hetzner setiap malam tanpa intervensi manual. Simulator jadwal dalam wizard menampilkan pratinjau waktu eksekusi berikutnya sehingga Anda dapat memastikan polanya sebelum menyimpan pekerjaan.

Riwayat pekerjaan menyimpan log audit lengkap—setiap proses mencatat waktu mulai, durasi, kecepatan transfer, jumlah file, dan hasilnya. Jika pencadangan gagal karena masalah jaringan sementara, logika coba ulang (retry) RcloneView yang dapat dikonfigurasi akan mencoba menjalankan pekerjaan tersebut lagi secara otomatis. Dengan notifikasi penyelesaian pekerjaan (tersedia dengan PLUS), tim Anda akan diberi tahu tentang kegagalan apa pun sebelum hari kerja berikutnya dimulai—sehingga tidak ada jendela pencadangan yang terlewat tanpa disadari.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling daily OneDrive to Hetzner Storage Box sync in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan **OneDrive** sebagai remote OAuth melalui tab Remote → **New Remote** → OneDrive.
3. Tambahkan **Hetzner Storage Box** sebagai remote SFTP dengan hostname dan kredensial Anda.
4. Buat pekerjaan sinkronisasi di **Job Manager** dengan OneDrive sebagai sumber dan jalur Hetzner Anda sebagai tujuan.

Mencadangkan OneDrive ke Hetzner Storage Box memberi Anda jaring pengaman berbiaya rendah yang dihosting di Eropa dan berjalan secara otomatis—memastikan file Microsoft Anda tetap terlindungi bahkan saat layanan cloud mengalami gangguan yang tidak terduga.

---

**Panduan Terkait:**

- [Kelola Sinkronisasi Hetzner Storage Box dengan RcloneView](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [Kelola Penyimpanan OneDrive — Sinkronisasi dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Sinkronisasi Dropbox ke Hetzner Storage Box dengan RcloneView](https://rcloneview.com/support/blog/sync-dropbox-to-hetzner-storage-box-rcloneview)

<CloudSupportGrid />
