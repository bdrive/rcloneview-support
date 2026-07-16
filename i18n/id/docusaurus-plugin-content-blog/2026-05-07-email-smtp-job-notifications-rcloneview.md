---
slug: email-smtp-job-notifications-rcloneview
title: "Notifikasi Email SMTP untuk Job — Selalu Terinformasi Status Sinkronisasi di RcloneView"
authors:
  - tayson
description: "Siapkan notifikasi email SMTP di RcloneView PLUS untuk menerima peringatan penyelesaian job sinkronisasi, mengonfigurasi banyak penerima, dan memantau job pencadangan tanpa pengawasan melalui email."
keywords:
  - notifikasi email RcloneView
  - notifikasi sinkronisasi SMTP
  - peringatan email sinkronisasi cloud
  - notifikasi job SMTP
  - email pemantauan pencadangan
  - notifikasi RcloneView PLUS
  - peringatan penyelesaian sinkronisasi
  - notifikasi email rclone
tags:
  - RcloneView
  - feature
  - automation
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Notifikasi Email SMTP untuk Job — Selalu Terinformasi Status Sinkronisasi di RcloneView

> RcloneView PLUS memungkinkan Anda mengonfigurasi notifikasi email SMTP langsung untuk penyelesaian job sinkronisasi, sehingga tim Anda selalu tahu kapan pencadangan selesai — atau gagal — tanpa perlu memeriksanya secara manual.

Menjalankan job sinkronisasi dan pencadangan cloud secara terjadwal hanyalah separuh dari persamaan otomatisasi. Separuh lainnya adalah mengetahui hasilnya tanpa harus membuka aplikasi dan memeriksa Riwayat Job secara manual. RcloneView PLUS mendukung notifikasi email melalui konfigurasi SMTP langsung, mengirimkan pesan status sinkronisasi langsung ke kotak masuk Anda begitu sebuah job selesai. Hal ini membuat pemantauan pencadangan tanpa pengawasan menjadi praktis, baik untuk individu maupun tim.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengonfigurasi SMTP di RcloneView

Untuk menyiapkan notifikasi email, buka pengaturan notifikasi RcloneView (tersedia dengan lisensi PLUS). Masukkan detail server SMTP Anda:

- **SMTP Host**: Server surat keluar dari penyedia email Anda (misalnya, `smtp.gmail.com` untuk Gmail atau server Exchange/SMTP organisasi Anda).
- **Port**: Biasanya port **587** untuk STARTTLS (direkomendasikan) atau port 465 untuk SSL. Hindari port 25 di sebagian besar lingkungan konsumen dan cloud, karena umumnya diblokir.
- **Autentikasi**: Masukkan username email dan kata sandi Anda, atau kata sandi khusus aplikasi. Untuk Gmail, gunakan App Password jika 2FA diaktifkan pada akun Anda.
- **From Address**: Alamat pengirim yang akan muncul pada email notifikasi.

Setelah memasukkan detailnya, gunakan tombol **Test** untuk mengirim email uji coba dan memastikan koneksi SMTP berfungsi sebelum mengandalkannya untuk notifikasi produksi.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring SMTP email notification settings in RcloneView PLUS" class="img-large img-center" />

## Menambahkan Penerima dan Pengaturan Tingkat Job

Setelah SMTP dikonfigurasi secara global, Anda dapat menambahkan penerima notifikasi di tingkat job. Buka pengaturan sebuah job sinkronisasi dan masukkan satu atau beberapa alamat email untuk diberi notifikasi saat job tersebut selesai. Job yang berbeda dapat memberi notifikasi kepada orang yang berbeda pula — misalnya, job pencadangan untuk dokumen keuangan dapat memberi notifikasi kepada tim keuangan, sementara job sinkronisasi media memberi notifikasi kepada tim konten.

RcloneView juga memungkinkan Anda menetapkan ambang batas untuk notifikasi — misalnya, hanya mengirim email saat sebuah job mentransfer lebih dari jumlah megabyte yang dapat dikonfigurasi. Ini berguna untuk job yang berjalan secara sering dan sering kali selesai tanpa ada perubahan: Anda hanya menerima notifikasi saat sesuatu yang berarti benar-benar terjadi, sehingga mengurangi kelelahan akibat terlalu banyak peringatan.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Setting email notification recipients on a sync job in RcloneView" class="img-large img-center" />

## Kasus Penggunaan Notifikasi Email

**Pemantauan pencadangan tanpa pengawasan** adalah kasus penggunaan utama. Jika Anda menjadwalkan pencadangan malam hari dari file lokal Anda ke Backblaze B2, konfigurasikan notifikasi email ke alamat pribadi Anda. Jika job gagal — karena gangguan jaringan, masalah kredensial, atau disk penuh — Anda akan menerima email kegagalan di pagi hari, alih-alih menemukan masalah tersebut berminggu-minggu kemudian saat mencoba melakukan pemulihan.

**Kesadaran tim** juga sama berharganya. Ketika job sinkronisasi cloud bersama selesai — misalnya, sinkronisasi mingguan folder proyek bersama ke Amazon S3 — memberi notifikasi kepada seluruh tim memastikan sinkronisasi tersebut terkini tanpa mengharuskan siapa pun masuk ke RcloneView. Anda dapat mengonfigurasi job yang berbeda untuk memberi notifikasi kepada penerima yang berbeda, sehingga orang yang tepat mendapat informasi sesuai bidang tanggung jawab mereka.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history and notification log in RcloneView PLUS" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html) dan aktifkan lisensi PLUS.
2. Buka **Notification Settings** dan masukkan SMTP host, port 587, dan kredensial autentikasi Anda.
3. Klik **Test** untuk mengirim email uji coba dan memverifikasi koneksi.
4. Buka pengaturan tiap job sinkronisasi dan tambahkan alamat email yang akan diberi notifikasi.
5. Secara opsional, tetapkan ambang batas ukuran transfer sehingga notifikasi hanya muncul saat data yang dipindahkan cukup signifikan.

Notifikasi email SMTP di RcloneView PLUS melengkapi alur pemantauan pencadangan otomatis — memberi Anda ketenangan pikiran bahwa job sinkronisasi cloud Anda berjalan dengan sukses, atau segera memberi peringatan saat tidak berjalan sebagaimana mestinya.

---

**Panduan Terkait:**

- [Peringatan Notifikasi untuk Penyelesaian Sinkronisasi dengan RcloneView](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [Otomatiskan Pencadangan Cloud Harian dengan RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Kontrol Jarak Jauh RcloneView Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control)

<CloudSupportGrid />
