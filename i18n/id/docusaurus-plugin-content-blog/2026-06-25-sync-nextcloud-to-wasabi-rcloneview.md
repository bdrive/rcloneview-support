---
slug: sync-nextcloud-to-wasabi-rcloneview
title: "Sinkronisasi Nextcloud ke Wasabi — Pencadangan Cloud dengan RcloneView"
authors:
  - jay
description: "Sinkronkan instance Nextcloud Anda ke Wasabi S3 dengan RcloneView — hubungkan remote WebDAV dan S3, otomatiskan tugas pencadangan, dan jaga data self-hosted tetap terlindungi di luar lokasi."
keywords:
  - sync nextcloud to wasabi
  - nextcloud wasabi backup
  - nextcloud s3 backup gui
  - backup nextcloud to s3
  - nextcloud cloud backup rcloneview
  - wasabi s3 backup tool
  - webdav to s3 sync rcloneview
  - nextcloud off-site backup
  - rcloneview nextcloud wasabi
tags:
  - nextcloud
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Nextcloud ke Wasabi — Pencadangan Cloud dengan RcloneView

> Instance Nextcloud self-hosted memerlukan pencadangan di luar lokasi — RcloneView membuat sinkronisasi folder Nextcloud Anda ke penyimpanan Wasabi S3 menjadi mudah dan sepenuhnya dapat diotomatisasi.

Server Nextcloud self-hosted memberi Anda kendali penuh atas file Anda, tetapi kendali itu datang dengan tanggung jawab: jika server gagal, terkena ransomware, atau disknya rusak, data Anda akan ikut hilang. Sinkronisasi ke Wasabi memberi Anda salinan tahan lama di luar lokasi tanpa kejutan biaya transfer. RcloneView terhubung ke Nextcloud melalui WebDAV dan ke Wasabi melalui protokol S3, lalu memungkinkan Anda membangun tugas sinkronisasi yang andal di antara keduanya — tanpa memerlukan CLI.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Instance Nextcloud Anda sebagai Remote

Buka RcloneView dan buka **Remote tab > New Remote**. Pilih **WebDAV** sebagai tipe remote dan pilih **Nextcloud** sebagai vendor. Masukkan URL server Nextcloud Anda dalam format `https://cloud.yourdomain.com/remote.php/dav/files/username/`, beserta username Nextcloud Anda dan kata sandi akun Anda atau kata sandi khusus aplikasi yang dibuat dari Security Settings Nextcloud. Simpan remote tersebut dan remote akan muncul sebagai sumber yang dapat dijelajahi di file explorer.

Tidak seperti tool yang hanya mendukung mount, RcloneView menyinkronkan sumber WebDAV seperti Nextcloud langsung ke tujuan yang kompatibel dengan S3 seperti Wasabi — sepenuhnya pada lisensi FREE.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Nextcloud as a WebDAV remote in RcloneView" class="img-large img-center" />

Setelah terhubung, jelajahi direktori Nextcloud Anda untuk memastikan koneksi berfungsi. Anda dapat memeriksa nama file, ukuran, dan tanggal modifikasi — berguna untuk menentukan folder mana yang akan disertakan dalam tugas pencadangan dan direktori internal Nextcloud mana (seperti `trashbin`) yang harus dikecualikan.

## Menambahkan Wasabi sebagai Remote yang Kompatibel dengan S3

Dari **Remote tab > New Remote** lagi, pilih **Amazon S3** dan pilih **Wasabi** sebagai provider. Masukkan Access Key ID dan Secret Access Key Wasabi Anda, pilih endpoint region yang sesuai (misalnya, `s3.us-east-1.wasabisys.com`), dan tentukan bucket tujuan. Setelah disimpan, RcloneView dapat membuka bucket Wasabi Anda di panel explorer kedua di samping Nextcloud — Anda dapat menyeret file individual di antara keduanya untuk memverifikasi koneksi sebelum menjalankan sinkronisasi penuh.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Nextcloud and Wasabi remotes open side by side for cloud-to-cloud backup in RcloneView" class="img-large img-center" />

API Wasabi yang kompatibel dengan S3 berarti RcloneView memperlakukannya secara identik dengan Amazon S3, sehingga semua operasi sinkronisasi, salin, pindah, dan filter berfungsi tanpa konfigurasi tambahan.

## Mengonfigurasi Tugas Sinkronisasi

Klik **Sync** dari Home tab untuk membuka wizard tugas 4 langkah. Pada Step 1, atur folder Nextcloud Anda sebagai sumber dan bucket Wasabi Anda (atau subfolder seperti `nextcloud-backup/`) sebagai tujuan. Beri nama tugas yang deskriptif, seperti `nextcloud-to-wasabi-daily`.

Pada Step 2, tingkatkan jumlah transfer paralel jika koneksi Anda memungkinkan — ini mempercepat sinkronisasi sejumlah besar file kecil yang umum ditemukan di Nextcloud. Aktifkan **checksum verification** untuk membandingkan hash file, bukan hanya ukuran, yang menangkap korupsi apa pun yang terjadi selama unggahan parsial sebelumnya. Pada Step 3, tambahkan aturan filter untuk mengecualikan folder `trashbin` Nextcloud dan file sementara unggahan chunked apa pun sehingga pencadangan tetap bersih.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Nextcloud to Wasabi sync job in RcloneView" class="img-large img-center" />

Dengan lisensi PLUS, Step 4 memungkinkan Anda menambahkan jadwal bergaya crontab — misalnya, setiap malam pukul 2 pagi — sehingga pencadangan berjalan tanpa pemicu manual apa pun. Scheduler mendukung hari kerja tertentu, interval bulanan, dan rentang berbasis langkah.

## Meninjau Riwayat Transfer

Setelah setiap eksekusi, tab **Job History** mencatat setiap eksekusi: waktu mulai, durasi, status (Completed / Errored / Canceled), total byte yang dipindahkan, dan kecepatan transfer. Log ini adalah tempat pertama untuk diperiksa jika pencadangan tampak macet atau ada file yang terlewat, sehingga memudahkan untuk mengaudit apakah data Nextcloud tiba di Wasabi sebagaimana mestinya.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log showing completed Nextcloud to Wasabi backup runs" class="img-large img-center" />

Untuk operasi yang menjalankan beberapa instance Nextcloud atau mencadangkan ke bucket Wasabi di region yang berbeda untuk redundansi geografis, sinkronisasi 1:N RcloneView memungkinkan Anda mengatur satu sumber terhadap beberapa tujuan dan menjalankannya bersama-sama dalam satu tugas.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan server Nextcloud Anda sebagai remote WebDAV (Remote tab > New Remote > WebDAV > vendor Nextcloud).
3. Tambahkan Wasabi sebagai remote yang kompatibel dengan S3 dengan Access Key, Secret Key, endpoint region, dan nama bucket Anda.
4. Buat tugas sinkronisasi dengan Nextcloud sebagai sumber dan bucket Wasabi Anda sebagai tujuan — aktifkan checksum verification di Step 2 untuk pencadangan yang terjamin integritasnya.

Data Nextcloud self-hosted Anda akan memiliki salinan yang andal di luar lokasi di Wasabi, berjalan secara otomatis tanpa skrip command-line apa pun.

---

**Panduan Terkait:**

- [Mengelola Sinkronisasi dan Pencadangan Cloud Nextcloud dengan RcloneView](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)
- [Mengelola Sinkronisasi dan Pencadangan Cloud Wasabi dengan RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Sinkronisasi Nextcloud ke Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
