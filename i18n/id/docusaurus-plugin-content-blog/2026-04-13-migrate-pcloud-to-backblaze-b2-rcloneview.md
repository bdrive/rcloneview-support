---
slug: migrate-pcloud-to-backblaze-b2-rcloneview
title: "Migrasi pCloud ke Backblaze B2 — Transfer File dengan RcloneView"
authors:
  - tayson
description: "Panduan langkah demi langkah untuk migrasi file dari pCloud ke Backblaze B2 menggunakan RcloneView. Hubungkan via OAuth dan App Key, pratinjau dengan Dry Run, dan jalankan job sinkronisasi."
keywords:
  - migrate pCloud to Backblaze B2
  - pCloud Backblaze B2 transfer
  - pCloud migration RcloneView
  - pCloud to B2 sync
  - cloud-to-cloud migration
  - Backblaze B2 archive
  - pCloud backup alternative
  - RcloneView cloud migration
tags:
  - RcloneView
  - pcloud
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi pCloud ke Backblaze B2 — Transfer File dengan RcloneView

> Beralih dari pCloud ke Backblaze B2 memberi Anda penyimpanan arsip yang jauh lebih murah — RcloneView menangani transfer cloud-to-cloud tanpa mengalirkan data melalui perangkat Anda.

pCloud adalah layanan penyimpanan cloud pribadi yang andal dengan opsi paket seumur hidup, tetapi untuk mengarsipkan data dalam jumlah besar, harga per-GB Backblaze B2 sering kali lebih hemat biaya. Baik Anda sedang mengonsolidasikan layanan cloud atau menambahkan B2 sebagai tingkat arsip, RcloneView membuat migrasi menjadi mudah: hubungkan kedua penyedia, pratinjau dengan Dry Run, dan jalankan job sinkronisasi. Seluruh transfer berlangsung cloud-to-cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Langkah 1 — Hubungkan pCloud

Buka RcloneView dan pergi ke **Remote Manager**. Klik **New Remote** dan pilih **pCloud** dari daftar penyedia. pCloud menggunakan login browser OAuth — RcloneView membuka browser Anda, Anda login dan memberikan otorisasi, lalu token akan disimpan. Tidak ada API key yang perlu dikelola secara manual.

Setelah otorisasi, buka remote pCloud di File Explorer untuk memastikan Anda dapat melihat file dan folder Anda. Catat direktori tingkat atas mana yang ingin Anda migrasikan.

<img src="/support/images/en/blog/new-remote.png" alt="Adding pCloud and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Langkah 2 — Hubungkan Backblaze B2

Masih di **Remote Manager**, klik **New Remote** lagi dan pilih **Backblaze B2**. Backblaze B2 melakukan autentikasi dengan **Application Key ID** dan **Application Key** — keduanya dapat ditemukan di konsol Backblaze pada bagian **App Keys**. Buat key dengan izin yang sesuai (baca dan tulis pada bucket target, atau semua bucket jika ini adalah migrasi). Masukkan kedua nilai tersebut di RcloneView dan simpan.

Buka remote B2 untuk memastikan bucket Anda termuat. Jika bucket target belum ada, Anda dapat membuatnya langsung dari file explorer RcloneView dengan mengklik kanan pada level root.

## Langkah 3 — Konfigurasi Job Migrasi

Pergi ke **Jobs** dan klik **New Job**. Atur pCloud sebagai sumber dan pilih folder tertentu atau root. Atur Backblaze B2 sebagai tujuan dan pilih bucket serta path target.

Pada langkah 2 dari wizard job, tinjau opsi transfer:

- Aktifkan **Dry Run** terlebih dahulu untuk melihat persis apa yang akan disalin
- Atur **transfers** ke 4–8 untuk keseimbangan antara kecepatan dan stabilitas API
- Aktifkan **checksum verification** jika Anda ingin memastikan integritas file setelah transfer

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud migration from pCloud to Backblaze B2" class="img-large img-center" />

## Langkah 4 — Jalankan Dry Run, Lalu Migrasi Sesungguhnya

Dengan Dry Run diaktifkan, klik **Run**. RcloneView mencatat apa yang akan ditransfer — nama file, ukuran, dan jumlahnya — tanpa membuat perubahan apa pun. Tinjau output di tab **Log**. Jika daftarnya sudah terlihat benar, kembali ke pengaturan job, nonaktifkan Dry Run, dan jalankan lagi.

Migrasi sesungguhnya berjalan cloud-to-cloud: pCloud mengirim data ke B2 tanpa melalui perangkat lokal Anda, sehingga bandwidth lokal Anda bukan menjadi hambatan. Kecepatan transfer bergantung pada server kedua penyedia.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the pCloud to Backblaze B2 migration job" class="img-large img-center" />

## Memverifikasi Migrasi

Setelah job selesai, buka alat **Folder Compare** dan arahkan ke sumber pCloud serta tujuan B2. RcloneView membandingkan kedua sisi dan menyoroti setiap perbedaan. Untuk data yang bernilai tinggi, langkah ini memastikan migrasi selesai sepenuhnya sebelum Anda menghapus file dari pCloud.

Job History mencatat seluruh proses: total file, data yang ditransfer, durasi, dan error apa pun. Simpan ini sebagai referensi.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Hubungkan pCloud via OAuth dan Backblaze B2 via Application Key di **Remote Manager**.
3. Buat job sinkronisasi dengan pCloud sebagai sumber dan B2 sebagai tujuan; jalankan Dry Run terlebih dahulu.
4. Nonaktifkan Dry Run dan jalankan migrasi; verifikasi dengan Folder Compare.

Setelah migrasi terkonfirmasi, Backblaze B2 memberi Anda penyimpanan arsip yang tahan lama dan hemat biaya untuk semua yang sebelumnya ada di pCloud.

---

**Panduan Terkait:**

- [Pencadangan pCloud ke AWS S3 dengan RcloneView](https://rcloneview.com/support/blog/backup-pcloud-to-aws-s3-rcloneview)
- [Migrasi pCloud ke OneDrive dengan RcloneView](https://rcloneview.com/support/blog/migrate-pcloud-to-onedrive-rcloneview)
- [Migrasi Cloud Terverifikasi Checksum dengan RcloneView](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
