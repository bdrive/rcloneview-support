---
slug: manage-box-business-cloud-sync-backup-rcloneview
title: "Kelola Box for Business — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - robin
description: "Hubungkan Box for Business di RcloneView untuk menjelajahi, menyinkronkan, dan mencadangkan file perusahaan dengan satu GUI lintas platform."
keywords:
  - box for business
  - penyimpanan cloud enterprise box
  - RcloneView box business
  - box_sub_type enterprise
  - sinkronisasi file box business
  - pencadangan box for business
  - kelola akun enterprise box
  - GUI penyimpanan cloud box
  - manajemen file box business
tags:
  - RcloneView
  - box
  - cloud-storage
  - cloud-sync
  - backup
  - business
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Box for Business — Sinkronisasi dan Pencadangan File dengan RcloneView

> Akun Box for Business memerlukan satu pengaturan tambahan saat menghubungkan — RcloneView menanganinya, lalu memberi Anda pengelola file lengkap di atasnya.

Box for Business berjalan pada jenis akun yang berbeda dari akun Box pribadi, dan menghubungkannya dengan benar memerlukan pengaktifan flag enterprise selama pengaturan remote. Agensi desain dengan folder enterprise bersama di puluhan kursi tidak mampu menanggung remote yang rusak dan diam-diam menjelajahi workspace yang salah. RcloneView menambahkan pengaturan yang benar selama penyiapan, lalu memperlakukan Box for Business seperti remote lainnya — dapat dijelajahi, disinkronkan, dan di-mount dari satu jendela.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Akun Box for Business

Box for Business menggunakan login browser OAuth yang sama seperti akun Box pribadi, tetapi memerlukan `box_sub_type = enterprise` diatur selama pembuatan remote agar RcloneView mengarah ke workspace enterprise yang benar, bukan struktur folder pribadi. Buka tab Remote > New Remote, pilih Box, selesaikan proses sign-in browser, dan atur sub-type sebelum menyimpan. Berbeda dengan alat yang hanya mendukung mount, RcloneView juga menyinkronkan dan membandingkan folder pada remote Box for Business — dengan lisensi FREE.

Setelah terhubung, remote muncul di bilah tab Explorer seperti penyimpanan cloud lainnya. Anda dapat menjelajahi folder enterprise, memeriksa jumlah dan ukuran file di ringkasan footer, serta beralih antar beberapa workspace Box tanpa perlu autentikasi ulang setiap kali.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Box for Business remote in RcloneView" class="img-large img-center" />

## Mencadangkan Folder Enterprise

Job sinkronisasi melindungi konten Box for Business dengan cara yang sama seperti melindungi remote lainnya: konfigurasikan sumber dan tujuan di Langkah 1 pada wizard sinkronisasi, pilih satu arah "Modifying destination only" untuk arah pencadangan yang stabil, dan tambahkan filter di Langkah 3 untuk mengecualikan file sementara atau lampiran berukuran besar. Bagi tim yang menangani kontrak atau hasil kerja klien, sinkronisasi satu arah setiap malam ke penyimpanan lokal atau akun cloud kedua menjaga salinan pemulihan di luar workspace bersama.

Job History kemudian melacak setiap eksekusi — status, jumlah file, ukuran yang ditransfer, dan durasi — sehingga admin dapat memastikan pencadangan benar-benar selesai, alih-alih berasumsi jadwal berjalan diam-diam di latar belakang.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Box for Business backup runs" class="img-large img-center" />

## Me-mount Box for Business sebagai Drive Lokal

Mounting mengubah akun enterprise menjadi huruf drive atau mount point yang dapat dibuka langsung oleh aplikasi desktop apa pun, tanpa mengunduh file terlebih dahulu. Ini penting bagi tim yang menjalankan software desain atau dokumen yang mengharapkan jalur file lokal, bukan dialog unggah web. Atur mode cache sebagai "writes" untuk keseimbangan antara responsivitas dan keandalan, dan aktifkan Read only untuk reviewer yang tidak boleh mengubah konten bersama.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a Box for Business folder from the Remote Explorer panel" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buat remote Box baru dan aktifkan sub-type enterprise selama penyiapan.
3. Konfigurasikan job sinkronisasi satu arah untuk mencadangkan folder enterprise yang penting.
4. Mount remote untuk tim yang membutuhkan akses file lokal langsung.

Akun enterprise berhak mendapatkan cakupan sinkronisasi dan pencadangan yang sama andalnya seperti penyimpanan cloud lainnya — RcloneView hanya memastikan koneksi dikonfigurasi dengan benar sejak awal.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Box — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Mengelola Penyimpanan Dropbox for Business — Sinkronisasi dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-dropbox-business-cloud-sync-backup-rcloneview)
- [Mount Penyimpanan Box sebagai Network Drive dengan RcloneView untuk Akses Tim yang Mulus](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
