---
slug: manage-box-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan Box — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - tayson
description: "Kelola penyimpanan cloud Box dengan RcloneView. Sinkronkan file perusahaan, jadwalkan pencadangan, dan transfer data antara Box dan penyedia lain menggunakan antarmuka visual."
keywords:
  - box cloud sync
  - box backup rcloneview
  - box file transfer
  - box cloud storage manager
  - box rclone gui
  - box enterprise backup
  - box to s3 migration
  - box cloud management
  - box automated sync
  - box multi-cloud backup
tags:
  - box
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan Box — Sinkronisasi dan Pencadangan File dengan RcloneView

> Box dibangun untuk manajemen konten perusahaan, dan RcloneView memperluas jangkauannya dengan menghubungkan Box ke seluruh infrastruktur multi-cloud Anda.

Box telah menempatkan dirinya sebagai platform konten perusahaan pilihan, dengan fitur seperti kontrol akses granular, alur kerja berbasis metadata, dan sertifikasi kepatuhan (HIPAA, FedRAMP, GxP). Paket individu dimulai dari 10 GB gratis, sementara paket Business menawarkan penyimpanan tak terbatas mulai dari $17,30 per pengguna/bulan. RcloneView terhubung ke Box melalui API berbasis OAuth-nya, memberikan Anda antarmuka visual untuk menelusuri file, menjalankan sinkronisasi ke cloud lain, mount Box sebagai drive lokal, dan menjadwalkan pencadangan otomatis — semuanya tanpa bergantung pada klien sinkronisasi native Box atau konsol admin untuk tugas portabilitas data.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Box di RcloneView

Menambahkan Box ke RcloneView mengikuti alur otorisasi OAuth 2.0. Buka Remote Manager, pilih **Box**, dan klik authorize. Browser Anda akan terbuka ke halaman login Box tempat Anda memberikan akses ke RcloneView. Token disimpan secara lokal di file konfigurasi rclone Anda.

Box memberlakukan batas laju API yang bervariasi menurut tingkat paket. Akun Free dan Personal Pro memiliki batas yang lebih ketat (sekitar 10 panggilan API per detik), sementara akun Enterprise memungkinkan throughput yang jauh lebih tinggi. RcloneView menangani respons pembatasan laju (HTTP 429) dengan percobaan ulang otomatis dan backoff, sehingga transfer besar berjalan tanpa intervensi manual.

Satu catatan penting: Box memiliki batas ukuran file individu maksimum 5 GB pada paket Business dan 15 GB pada paket Enterprise. File yang melebihi batas ini akan gagal diunggah. RcloneView mencatat kesalahan ini dengan jelas di output pekerjaan sehingga Anda dapat mengidentifikasi file yang berukuran terlalu besar dan menanganinya secara terpisah.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Box remote in RcloneView Remote Manager" class="img-large img-center" />

## Menyinkronkan Box dengan Penyedia Lain

Explorer dua panel RcloneView membuat transfer data antara Box dan cloud lain menjadi intuitif. Tempatkan Box di satu sisi dan AWS S3, Google Drive, Dropbox, atau folder lokal di sisi lainnya. Seret file, atau buat pekerjaan untuk operasi yang berulang.

Box menggunakan checksum SHA-1 untuk integritas file, dan RcloneView memanfaatkan ini selama operasi sinkronisasi untuk mendeteksi perubahan secara akurat. Hanya file dengan hash atau waktu modifikasi yang berbeda yang ditransfer, menjaga penggunaan API dan bandwidth tetap minimal. Ini sangat berharga untuk akun enterprise di mana anggaran panggilan API Box penting untuk integrasi bersama.

Bagi organisasi yang bermigrasi dari Box atau mempertahankan strategi multi-cloud, RcloneView mendukung sinkronisasi direktori penuh dengan aturan filter. Anda dapat menyertakan atau mengecualikan file berdasarkan ekstensi, ukuran, atau pola jalur — misalnya, sinkronkan hanya file `.docx` dan `.pdf` dari folder kolaborasi Box ke SharePoint, sambil mengabaikan file sementara dan metadata sistem.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing files between Box and another cloud provider in RcloneView" class="img-large img-center" />

## Menjadwalkan Pencadangan Otomatis dari Box

Data perusahaan di Box sering kali tunduk pada kebijakan retensi dan kepatuhan yang menuntut pencadangan independen. Penjadwal pekerjaan RcloneView memungkinkan Anda menentukan pekerjaan pencadangan berulang — harian, mingguan, atau dengan jadwal cron kustom — untuk mereplikasi konten Box ke penyedia sekunder.

Pola yang terbukti untuk industri yang diatur: jadwalkan sinkronisasi harian dari Box ke Backblaze B2 dengan Object Lock diaktifkan. Ini menghasilkan salinan data Box Anda yang tidak dapat diubah dan bervarsi, yang memenuhi persyaratan audit untuk daya tahan data dan kustodi independen. Riwayat pekerjaan RcloneView memberikan petugas kepatuhan log yang jelas dari setiap eksekusi pencadangan, termasuk stempel waktu, jumlah file, dan detail kesalahan.

Bagi tim IT yang mengelola beberapa instance Box di berbagai departemen, Anda dapat mengonfigurasi remote terpisah untuk setiap akun Box dan menjalankan pekerjaan pencadangan paralel dari satu instalasi RcloneView.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated backup from Box storage in RcloneView" class="img-large img-center" />

## Mount Box sebagai Network Drive

Fitur mount RcloneView memetakan penyimpanan Box sebagai huruf drive lokal (Windows) atau titik mount (macOS/Linux). Ini memungkinkan aplikasi lama, skrip, dan alat desktop mengakses file Box seolah-olah file tersebut lokal. Lapisan cache VFS menyangga pembacaan dan penulisan, sehingga performa tetap dapat diterima untuk penyuntingan dokumen dan alur kerja pratinjau media.

Bagi tim yang membutuhkan konten Box tersedia di Windows Explorer tanpa menginstal Box Drive, ini adalah alternatif ringan yang tidak memerlukan hak akses admin atau agen sinkronisasi latar belakang.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting Box storage as a network drive in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Otorisasi akun Box Anda melalui OAuth di Remote Manager.
3. Telusuri folder Box Anda di explorer dua panel dan sinkronkan atau salin file ke cloud lain.
4. Buat pekerjaan pencadangan terjadwal untuk mempertahankan salinan independen dari data Box penting.

Box menangani tata kelola dan kolaborasi di tingkat perusahaan, dan RcloneView memastikan data dapat dipindahkan, dicadangkan, dan terintegrasi dengan seluruh infrastruktur cloud Anda.

---

**Panduan Terkait:**

- [Mount Penyimpanan Box sebagai Network Drive dengan RcloneView](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)
- [Pencadangan Dropbox ke AWS S3 dengan RcloneView](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)
- [Kelola Penyimpanan Icedrive — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-icedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
