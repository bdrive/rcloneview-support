---
slug: manage-sugarsync-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan SugarSync — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - tayson
description: "Hubungkan SugarSync ke RcloneView dan kelola file cloud Anda secara visual. Sinkronisasi, cadangkan, dan transfer data SugarSync antar platform dengan GUI yang mudah digunakan."
keywords:
  - manajemen penyimpanan cloud SugarSync
  - sinkronisasi RcloneView SugarSync
  - pencadangan file SugarSync
  - GUI transfer file SugarSync
  - SugarSync rclone
  - kelola SugarSync dengan RcloneView
  - alternatif klien desktop SugarSync
  - alat pencadangan cloud SugarSync
  - sinkronisasi file SugarSync
  - SugarSync multi-cloud
tags:
  - RcloneView
  - sugarsync
  - cloud-storage
  - cloud-sync
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan SugarSync — Sinkronisasi dan Pencadangan File dengan RcloneView

> RcloneView menghadirkan kontrol GUI penuh untuk penyimpanan SugarSync Anda — jelajahi, sinkronkan, dan cadangkan file tanpa hanya mengandalkan klien desktop asli SugarSync.

SugarSync telah menjadi solusi pencadangan cloud tepercaya bagi bisnis kecil dan profesional individu yang membutuhkan sinkronisasi file yang andal di berbagai perangkat. Meskipun aplikasi asli SugarSync mencakup sinkronisasi sehari-hari, RcloneView menambahkan fitur canggih untuk administrator IT dan pengguna tingkat lanjut: pekerjaan terjadwal, transfer cloud-ke-cloud, migrasi massal, dan manajemen terpusat bersama akun cloud lainnya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan SugarSync ke RcloneView

RcloneView terhubung ke SugarSync menggunakan backend SugarSync milik rclone. Di RcloneView, buka tab Remote > New Remote dan pilih SugarSync dari daftar penyedia. Anda akan diminta untuk melakukan autentikasi melalui kredensial akun SugarSync Anda, dan token akan disimpan secara aman di penyimpanan lokal terenkripsi milik RcloneView.

Setelah terhubung, folder SugarSync Anda — termasuk Magic Briefcase dan folder sinkronisasi kustom lainnya — akan muncul di file explorer. Jelajahi isi folder, periksa ukuran file, dan lakukan operasi manajemen file menggunakan menu klik kanan.

<img src="/support/images/en/blog/new-remote.png" alt="Adding SugarSync as a remote in RcloneView" class="img-large img-center" />

## Mencadangkan SugarSync ke Cloud Lain

Salah satu kasus penggunaan menarik untuk menghubungkan SugarSync ke RcloneView adalah pencadangan lintas-cloud: menyalin isi SugarSync ke penyedia sekunder seperti Backblaze B2 atau Amazon S3. Seorang konsultan lepas dengan bertahun-tahun dokumen klien di SugarSync dapat mengonfigurasi pekerjaan sinkronisasi mingguan untuk mencerminkan konten tersebut ke arsip yang kompatibel dengan S3, memastikan redundansi jika akun utama suatu saat tidak dapat diakses.

Wizard sinkronisasi RcloneView memandu Anda melalui pemilihan sumber, pengaturan tujuan, opsi pemfilteran, dan penjadwalan. Aktifkan verifikasi checksum untuk memastikan setiap file yang ditransfer cocok persis dengan sumbernya.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a backup job from SugarSync in RcloneView" class="img-large img-center" />

## Menjelajahi dan Mengatur File SugarSync

File explorer dua panel memungkinkan Anda bekerja dengan SugarSync dan cloud atau folder lokal lainnya secara berdampingan. Bandingkan isi folder secara visual menggunakan fitur folder compare bawaan RcloneView — temukan file yang ada di satu sisi tetapi tidak di sisi lainnya, atau identifikasi file dengan perbedaan ukuran yang mungkin mengindikasikan sinkronisasi yang tidak lengkap.

Untuk pustaka SugarSync besar dengan ribuan file, gunakan fitur sort dan filter pada daftar file untuk bernavigasi dengan cepat. Ringkasan footer menampilkan jumlah file total dan total ukuran penyimpanan sekilas.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing SugarSync folder contents in RcloneView" class="img-large img-center" />

## Bermigrasi dari SugarSync

Jika Anda berencana bermigrasi dari SugarSync ke penyedia lain, RcloneView menyederhanakan proses ini secara signifikan. Konfigurasikan pekerjaan sinkronisasi satu kali dari SugarSync ke tujuan target Anda, gunakan dry run untuk melihat pratinjau apa yang akan ditransfer, lalu jalankan migrasi penuh. Riwayat pekerjaan memberikan catatan lengkap tentang file yang telah dipindahkan.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating SugarSync data to another cloud provider with RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka tab Remote > New Remote dan pilih SugarSync.
3. Lakukan autentikasi dengan kredensial SugarSync Anda dan simpan remote tersebut.
4. Jelajahi file di file explorer dan konfigurasikan pekerjaan sinkronisasi atau pencadangan ke penyedia lain.

RcloneView memberikan pengguna SugarSync alat sinkronisasi dan pencadangan setara perusahaan tanpa mengganti alur kerja yang sudah mereka kuasai.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Dropbox — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Kelola Penyimpanan Google Drive — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Penyimpanan Cloud untuk Pekerja Lepas dan Kontraktor Independen — RcloneView](https://rcloneview.com/support/blog/cloud-storage-freelancers-independent-contractors-rcloneview)

<CloudSupportGrid />
