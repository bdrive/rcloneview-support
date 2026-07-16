---
slug: manage-storj-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan Storj — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - tayson
description: "Pelajari cara mengelola penyimpanan cloud terdesentralisasi Storj dengan RcloneView. Sinkronkan, cadangkan, dan transfer file di Storj menggunakan GUI sederhana — tanpa perlu CLI."
keywords:
  - Storj cloud storage management
  - RcloneView Storj sync
  - Storj backup files
  - decentralized cloud storage GUI
  - Storj file transfer
  - Storj rclone GUI
  - Storj sync backup tool
  - manage Storj with RcloneView
  - Storj desktop client
  - Storj S3 compatible GUI
tags:
  - RcloneView
  - storj
  - cloud-storage
  - cloud-sync
  - backup
  - decentralized-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan Storj — Sinkronisasi dan Pencadangan File dengan RcloneView

> RcloneView memberi Anda GUI lengkap untuk menyinkronkan, mencadangkan, dan mengelola penyimpanan cloud terdesentralisasi Storj tanpa perlu menulis satu pun perintah.

Storj adalah platform penyimpanan objek terdesentralisasi yang mendistribusikan fragmen file terenkripsi ke jaringan node global. Tim yang mengelola data sensitif — rekam medis, arsip keuangan, atau aset kreatif — memilih Storj karena enkripsi bawaan dan ketahanannya. Dengan RcloneView, Anda dapat menghubungkan bucket Storj Anda dan mengelolanya secara visual bersama semua akun cloud lainnya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Storj ke RcloneView

RcloneView mendukung Storj melalui dua metode koneksi: backend Storj native dan endpoint yang kompatibel dengan S3. Bagi kebanyakan pengguna, jalur yang kompatibel dengan S3 adalah yang paling sederhana — Anda membuat kredensial S3 di konsol Storj (Access Key ID, Secret Access Key, dan URL endpoint regional), lalu menambahkan remote baru di RcloneView dengan memilih Amazon S3 sebagai jenis provider dan memasukkan kredensial tersebut.

Backend Storj native memerlukan token Access Grant, yang dapat Anda buat di web UI Storj. Tambahkan remote baru, pilih Storj sebagai provider, dan tempelkan Access Grant Anda. Kedua pendekatan ini memakan waktu kurang dari dua menit, dan RcloneView menyimpan kredensial Anda dengan aman menggunakan penyimpanan lokal terenkripsi.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Storj remote in RcloneView" class="img-large img-center" />

Setelah terhubung, bucket Storj Anda akan muncul di file explorer bersama remote lainnya. Jelajahi folder, pratinjau thumbnail, dan kelola file persis seperti pada provider cloud lainnya.

## Sinkronisasi dan Pencadangan File ke Storj

Wizard sinkronisasi 4 langkah dari RcloneView memudahkan konfigurasi pencadangan berkala ke Storj. Pilih folder lokal atau remote cloud sebagai sumber, pilih bucket atau subfolder Storj Anda sebagai tujuan, beri nama pekerjaan, dan pilih mode sinkronisasi atau salin. Untuk studio fotografi yang mengarsipkan 2TB file RAW, pekerjaan sinkronisasi setiap malam menjaga bucket Storj tetap terkini tanpa intervensi manual.

Aktifkan opsi **checksum** di pengaturan lanjutan untuk memverifikasi integritas data — penyimpanan erasure-coded milik Storj memang tangguh, tetapi memverifikasi unggahan dengan perbandingan hash memberikan lapisan keyakinan tambahan. Atur jumlah percobaan ulang ke 3 (default) untuk menangani gangguan jaringan sementara dengan baik.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Storj in RcloneView" class="img-large img-center" />

## Menjadwalkan Pencadangan Storj Otomatis (PLUS)

Dengan lisensi PLUS, Anda dapat menjadwalkan pekerjaan pencadangan Storj menggunakan penjadwal bergaya crontab. Atur pencadangan harian pukul 2 pagi, proses pengarsipan mingguan, atau interval kustom apa pun. Fitur **Simulate schedule** dari RcloneView menampilkan pratinjau waktu eksekusi berikutnya sebelum Anda menerapkannya.

Riwayat pekerjaan mencatat setiap proses — waktu mulai, durasi, jumlah byte yang ditransfer, dan status penyelesaian — sehingga Anda memiliki jejak audit yang jelas untuk setiap file yang dikirim ke Storj.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Storj backup jobs in RcloneView" class="img-large img-center" />

## Transfer Antara Storj dan Cloud Lain

Storj bekerja dengan baik sebagai salinan cadangan off-site kedua dari data yang sudah ada di Google Drive atau Dropbox. File explorer dua panel dari RcloneView memungkinkan Anda menyeret file langsung antar remote. Untuk migrasi berskala besar, gunakan pekerjaan sinkronisasi dengan mode **dry run** untuk melihat pratinjau apa yang akan ditransfer sebelum menerapkannya.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from another remote to Storj" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka tab Remote > New Remote, pilih provider Storj atau yang kompatibel dengan S3.
3. Masukkan Access Grant Storj Anda atau kredensial yang kompatibel dengan S3, lalu simpan.
4. Buka file explorer untuk menjelajahi bucket Storj Anda dan membuat pekerjaan sinkronisasi.

Arsitektur terdesentralisasi Storj menjadikannya target pencadangan off-site yang sangat baik, dan RcloneView membuat pengelolaannya semudah provider cloud utama mana pun.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Amazon S3 — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Migrasi Dropbox ke Storj — Transfer File dengan RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-storj-rcloneview)
- [Transfer Antara Storj dan Google Drive dengan RcloneView](https://rcloneview.com/support/blog/transfer-storj-and-google-drive-with-rcloneview)

<CloudSupportGrid />
