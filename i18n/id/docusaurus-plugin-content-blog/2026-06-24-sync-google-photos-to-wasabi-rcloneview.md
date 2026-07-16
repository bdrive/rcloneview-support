---
slug: sync-google-photos-to-wasabi-rcloneview
title: "Sinkronisasi Google Photos ke Wasabi — Pencadangan Arsip Foto Terjangkau dengan RcloneView"
authors:
  - steve
description: "Pelajari cara menyinkronkan dan mencadangkan pustaka Google Photos Anda ke penyimpanan Wasabi yang kompatibel dengan S3 menggunakan RcloneView — arsip foto luar lokasi yang redundan dan terjangkau."
keywords:
  - sync Google Photos to Wasabi
  - Google Photos Wasabi backup
  - RcloneView Google Photos backup
  - Wasabi photo archive storage
  - affordable cloud photo backup
  - Google Photos offsite backup
  - rclone Google Photos Wasabi
  - cloud photo library backup
tags:
  - google-photos
  - wasabi
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Google Photos ke Wasabi — Pencadangan Arsip Foto Terjangkau dengan RcloneView

> Lindungi foto-foto berharga selama bertahun-tahun dengan menyinkronkan pustaka Google Photos Anda ke penyimpanan Wasabi yang kompatibel dengan S3 — redundan, luar lokasi, dan hemat biaya.

Google Photos adalah tempat jutaan orang menyimpan pustaka foto mereka, namun bergantung pada satu platform saja untuk kenangan yang tak tergantikan membawa risiko nyata. Kuota penyimpanan bisa penuh, kebijakan akun bisa berubah, dan akses dapat dicabut dengan sedikit peringatan. Menyinkronkan ke Wasabi — layanan object storage yang kompatibel dengan S3 — menciptakan salinan luar lokasi yang andal dan independen yang sepenuhnya Anda kendalikan. RcloneView menghubungkan kedua layanan tersebut dalam antarmuka dua panel visual, membuat transfer foto cloud-to-cloud menjadi mudah tanpa perlu pengaturan command-line.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Google Photos dan Wasabi di RcloneView

Mulailah dengan menambahkan Google Photos sebagai remote. Buka tab **Remote**, klik **New Remote**, lalu pilih Google Photos dari daftar provider. RcloneView akan membuka jendela browser untuk autentikasi OAuth — masuk dengan akun Google Anda dan berikan izin akses. Foto dan album Anda akan langsung dapat dijelajahi di panel explorer.

Selanjutnya, tambahkan Wasabi sebagai remote yang kompatibel dengan S3. Klik **New Remote** lagi, pilih Amazon S3 sebagai tipe, lalu pilih Wasabi sebagai provider. Masukkan Wasabi Access Key, Secret Key, dan endpoint regional Anda. Buat bucket tujuan di konsol Wasabi terlebih dahulu agar siap menerima file. Setelah kedua remote tersimpan, Anda dapat menjelajahi pustaka Google Photos di satu panel dan bucket Wasabi Anda di panel lainnya.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Photos and Wasabi remotes in RcloneView" class="img-large img-center" />

RcloneView menyediakan akses baca/tulis penuh ke provider yang kompatibel dengan S3 seperti Wasabi pada lisensi FREE — menjadikannya tujuan pencadangan yang andal tanpa perlu meningkatkan paket Anda.

## Membuat dan Menjalankan Job Sinkronisasi

Dengan kedua remote terlihat di explorer, buka **Job Manager** dan buat job Sync baru. Atur Google Photos sebagai sumber dan bucket Wasabi Anda sebagai tujuan. Pada langkah Advanced Settings, aktifkan **checksum verification** — ini membandingkan file yang ditransfer berdasarkan hash konten, bukan hanya ukuran, sehingga dapat mendeteksi kerusakan yang terjadi saat transfer.

Sebelum menjalankan sinkronisasi penuh, gunakan **Dry Run** untuk melihat pratinjau daftar file lengkap. Untuk pustaka foto yang terkumpul selama bertahun-tahun, dry run membantu Anda memahami volume data yang terlibat dan memverifikasi bahwa pengaturan filter Anda — jika ada — telah dikonfigurasi dengan benar.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Transferring Google Photos files to a Wasabi bucket in RcloneView" class="img-large img-center" />

## Memantau Progres Transfer Secara Langsung

Setelah job dimulai, tab **Transferring** di bagian bawah RcloneView menampilkan progres secara langsung: kecepatan transfer, jumlah file yang selesai, dan total ukuran yang dipindahkan. Bagi fotografer dengan lebih dari 80.000 file asli, sinkronisasi awal mungkin berjalan selama beberapa jam — proses selanjutnya hanya mentransfer file yang baru atau berubah, sehingga pencadangan inkremental tetap cepat.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of the Google Photos to Wasabi transfer" class="img-large img-center" />

**Job History** mencatat setiap proses lengkap dengan waktu mulai, durasi, jumlah file, dan status. Meninjaunya secara berkala memastikan pencadangan Anda selesai dengan sukses dan memungkinkan Anda mendeteksi kesalahan berulang sejak dini.

## Menjadwalkan Pencadangan Rutin dengan PLUS

Dengan lisensi PLUS, Anda dapat menjadwalkan sinkronisasi Google Photos ke Wasabi agar berjalan otomatis sesuai jadwal crontab apa pun — harian, mingguan, atau pada waktu tertentu. Alat Simulate Schedule menampilkan pratinjau waktu eksekusi mendatang sebelum Anda menyimpan job, sehingga Anda dapat memverifikasi apakah frekuensinya sesuai dengan alur kerja Anda.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting a schedule for the Google Photos to Wasabi backup job" class="img-large img-center" />

Seorang fotografer pernikahan yang mencadangkan galeri klien, misalnya, dapat menjadwalkan job malam hari untuk mengirim hasil pengiriman baru dari Google Photos ke bucket arsip Wasabi — tanpa perlu intervensi manual setelah setiap sesi pemotretan.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Google Photos melalui **New Remote** (login browser OAuth).
3. Tambahkan Wasabi melalui **New Remote** — pilih Amazon S3, pilih Wasabi sebagai provider, dan masukkan kredensial Anda.
4. Buat job Sync di **Job Manager** dengan Google Photos sebagai sumber dan bucket Wasabi Anda sebagai tujuan.

Pustaka Google Photos Anda kini memiliki arsip luar lokasi yang terjangkau dan dikendalikan secara independen, menjaga kenangan Anda tetap aman di luar satu platform mana pun.

---

**Panduan Terkait:**

- [Sinkronisasi Google Photos ke Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/sync-google-photos-to-backblaze-b2-rcloneview)
- [Kelola Penyimpanan Google Photos — Sinkronisasi dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)
- [Kelola Penyimpanan Cloud Wasabi dengan RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
