---
slug: sync-dropbox-to-digitalocean-spaces-rcloneview
title: "Sinkronisasi Dropbox ke DigitalOcean Spaces — Pencadangan Cloud dengan RcloneView"
authors:
  - morgan
description: "Pelajari cara menyinkronkan dan mencadangkan file Dropbox ke DigitalOcean Spaces menggunakan RcloneView. Siapkan transfer cloud-to-cloud otomatis tanpa memerlukan CLI."
keywords:
  - sync Dropbox to DigitalOcean Spaces
  - Dropbox to DigitalOcean backup
  - RcloneView Dropbox DigitalOcean
  - cloud-to-cloud sync
  - DigitalOcean Spaces backup
  - Dropbox backup object storage
  - cloud sync GUI
  - RcloneView S3 sync
  - automated cloud backup
  - DigitalOcean Spaces rclone
tags:
  - RcloneView
  - dropbox
  - digitalocean-spaces
  - cloud-to-cloud
  - sync
  - backup
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Dropbox ke DigitalOcean Spaces — Pencadangan Cloud dengan RcloneView

> Cadangkan file Dropbox Anda ke penyimpanan objek DigitalOcean Spaces secara otomatis — tanpa perintah CLI apa pun.

Dropbox adalah alat kolaborasi alami bagi tim yang berbagi file setiap hari. DigitalOcean Spaces menawarkan penyimpanan objek yang kompatibel dengan S3, dirancang untuk pengembang yang menginginkan penyimpanan yang skalabel dan terjangkau, terintegrasi dengan infrastruktur mereka. Memadukan keduanya dengan RcloneView memberi Anda alur pencadangan offsite otomatis: file tetap berada di Dropbox untuk kolaborasi aktif, sementara Spaces menyimpan salinan cadangan yang tahan lama. RcloneView menangani seluruh transfer cloud-to-cloud secara visual — tanpa memerlukan terminal.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Dropbox dan DigitalOcean Spaces

Mulailah dengan menambahkan kedua layanan sebagai remote di RcloneView. Untuk Dropbox, buka **Remote tab > New Remote**, pilih **Dropbox**, dan ikuti alur OAuth di browser untuk mengotorisasi RcloneView. Tidak perlu menyalin API key — jendela browser yang terbuka akan menangani autentikasi secara otomatis dan mengembalikan Anda ke RcloneView setelah selesai.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

Untuk DigitalOcean Spaces, buat remote baru kedua, pilih **S3**, dan pilih **DigitalOcean** sebagai provider. Anda memerlukan **Access Key** dan **Secret Key** dari panel kontrol DigitalOcean (di bawah API > Spaces Keys), serta **region endpoint** untuk region Spaces Anda — misalnya, `nyc3.digitaloceanspaces.com` untuk New York. Setelah kedua remote tersimpan, keduanya akan muncul sebagai tab yang dapat dijelajahi di file explorer RcloneView.

## Mengonfigurasi Sync Job

Setelah kedua remote terhubung, klik **Sync** di **Home tab** untuk membuka wizard sinkronisasi 4 langkah. Pada Step 1, atur folder Dropbox Anda sebagai **source** dan bucket DigitalOcean Spaces Anda (atau subdirektori di dalamnya) sebagai **destination**. Beri nama job dengan sesuatu yang deskriptif — `dropbox-spaces-backup` cukup baik — dan pilih **one-way sync** agar destination tetap menjadi replika setia dari source.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud sync job from Dropbox to DigitalOcean Spaces in RcloneView" class="img-large img-center" />

Pada Step 2, atur jumlah transfer file yang berjalan bersamaan agar sesuai dengan kapasitas koneksi Anda. Untuk agensi desain dengan ribuan file aset kecil yang tersebar di banyak folder Dropbox, menaikkan nilai ini akan mempercepat sinkronisasi penuh awal secara signifikan. Pada Step 3, tambahkan aturan filter untuk mengecualikan apa pun yang tidak Anda perlukan di Spaces — misalnya, file `.DS_Store`, dokumen Dropbox Paper, atau folder mana pun yang hanya Anda gunakan untuk draf sementara.

Sebelum menjalankan job untuk pertama kalinya, klik **Dry Run** untuk melihat persis file mana yang akan ditransfer atau dihapus. Ini memastikan aturan filter Anda bekerja sesuai keinginan sebelum ada data yang dipindahkan.

## Memantau Transfer yang Berjalan

Setelah Anda klik **Run Job**, tab **Transferring** di bagian bawah RcloneView menampilkan progres secara langsung: jumlah file, kecepatan transfer, dan total byte yang dipindahkan. Untuk sinkronisasi awal berskala besar — sebuah studio konten yang memindahkan 80.000 file dari akun Dropbox penuh — tampilan ini memudahkan untuk memperkirakan berapa lama job akan berjalan dan menangkap kesalahan sejak dini. Anda dapat membatalkan job yang sedang berjalan kapan saja, dan pengaturan retry (dapat dikonfigurasi di Step 2) menangani gangguan jaringan sementara secara otomatis.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live transfer monitoring of Dropbox to DigitalOcean Spaces in RcloneView" class="img-large img-center" />

## Menjadwalkan Pencadangan Otomatis (Lisensi PLUS)

Untuk rutinitas pencadangan yang bebas tangan, pengguna **lisensi PLUS** dapat menambahkan jadwal bergaya crontab di Step 4 pada wizard sinkronisasi. Atur job untuk berjalan setiap malam, setiap beberapa jam, atau pada hari-hari tertentu dalam seminggu. Klik **Simulate Schedule** sebelum menyimpan untuk melihat pratinjau beberapa waktu eksekusi berikutnya dan memastikan waktunya sudah benar.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Dropbox to DigitalOcean Spaces backup in RcloneView" class="img-large img-center" />

Setelah dijadwalkan, RcloneView menjalankan job di latar belakang dan mengirimkan notifikasi desktop saat selesai. Tampilan **Job History** mencatat setiap eksekusi — waktu mulai, durasi, jumlah file, total ukuran, dan status akhir — sehingga Anda selalu memiliki catatan yang jelas tentang kapan pencadangan Dropbox Anda terakhir dijalankan dan apakah berhasil.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan **Dropbox** sebagai remote melalui alur login OAuth di browser.
3. Tambahkan **DigitalOcean Spaces** sebagai remote S3 dengan Access Key, Secret Key, dan region endpoint Anda.
4. Buka wizard sinkronisasi, atur Dropbox sebagai source dan Spaces sebagai destination, lalu klik **Run Job**.

Dengan pengaturan ini, konten Dropbox Anda akan terus dicerminkan ke DigitalOcean Spaces — memberi Anda pencadangan offsite yang tahan lama dan terjaga secara otomatis, tanpa memerlukan upaya manual yang berkelanjutan.

---

**Panduan Terkait:**

- [Kelola Dropbox — Sinkronisasi dan Pencadangan Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Kelola DigitalOcean Spaces — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [Cadangkan Dropbox ke Backblaze B2 — Penyimpanan Cloud Terjangkau dengan RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />
