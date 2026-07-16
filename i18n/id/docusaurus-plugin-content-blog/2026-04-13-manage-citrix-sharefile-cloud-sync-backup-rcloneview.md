---
slug: manage-citrix-sharefile-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan Citrix ShareFile — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - tayson
description: "Pelajari cara menghubungkan dan mengelola penyimpanan Citrix ShareFile dengan RcloneView. Sinkronkan, cadangkan, dan transfer data ShareFile ke cloud lain dari satu GUI."
keywords:
  - Citrix ShareFile
  - sinkronisasi ShareFile
  - pencadangan ShareFile
  - manajemen cloud ShareFile
  - RcloneView ShareFile
  - sinkronisasi file enterprise
  - ShareFile ke cloud
  - manajemen penyimpanan cloud
  - migrasi ShareFile
  - sinkronisasi cloud RcloneView
tags:
  - sharefile
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan Citrix ShareFile — Sinkronisasi dan Pencadangan File dengan RcloneView

> Hubungkan Citrix ShareFile ke RcloneView dan kelola file enterprise Anda bersama dengan lebih dari 90 layanan penyimpanan cloud lainnya dari satu GUI.

Citrix ShareFile banyak digunakan oleh perusahaan dan tim layanan profesional untuk berbagi file secara aman dan manajemen dokumen. Meskipun ShareFile memiliki klien tersendiri, tim yang mengelola file di berbagai platform cloud sering kali membutuhkan alat yang terpusat. RcloneView, sebuah klien GUI yang dibangun di atas rclone, memungkinkan Anda menghubungkan ShareFile bersama layanan lain — Google Drive, OneDrive, Amazon S3, dan lainnya — dari satu antarmuka.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Citrix ShareFile ke RcloneView

Menambahkan Citrix ShareFile ke RcloneView memerlukan kredensial akun ShareFile Anda dan Root Folder ID Anda. Root Folder ID mengidentifikasi folder mana di akun ShareFile Anda yang akan digunakan rclone sebagai root dari koneksi tersebut — ini biasanya dapat ditemukan di antarmuka web ShareFile Anda pada bagian properti folder.

Untuk menyiapkan remote, buka RcloneView dan navigasikan ke tab Remote, lalu klik New Remote. Pilih Citrix ShareFile dari daftar penyedia dan masukkan konfigurasi yang diperlukan, termasuk Root Folder ID Anda. RcloneView dilengkapi dengan binary rclone bawaan, sehingga instalasi rclone terpisah tidak diperlukan.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Citrix ShareFile remote in RcloneView" class="img-large img-center" />

Setelah terhubung, ShareFile akan muncul sebagai remote di File Explorer. Anda dapat menelusuri folder, melihat metadata file (nama, ukuran, tanggal modifikasi), dan melakukan operasi seperti copy, cut, paste, rename, dan delete — semuanya tanpa perlu keluar dari antarmuka RcloneView.

## Menyinkronkan ShareFile dengan Layanan Cloud Lain

Salah satu manfaat praktis mengelola ShareFile melalui RcloneView adalah kemampuan untuk menyinkronkannya langsung dengan penyimpanan cloud lain. Sebagai contoh, sebuah firma hukum dapat menyinkronkan folder klien ShareFile ke Amazon S3 untuk pengarsipan jangka panjang, atau mencerminkan konten ShareFile ke OneDrive untuk integrasi Microsoft 365.

Untuk membuat pekerjaan sinkronisasi, klik tombol Sync di tab Home dan ikuti panduan 4 langkah: pilih folder ShareFile Anda sebagai sumber (atau tujuan), pilih remote dan folder target, konfigurasikan opsi transfer, dan secara opsional tambahkan aturan filter. Fitur Dry Run memungkinkan Anda melihat pratinjau file mana saja yang akan disalin atau dihapus sebelum melanjutkan sinkronisasi.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Citrix ShareFile to another cloud with RcloneView" class="img-large img-center" />

Untuk perlindungan data yang berkelanjutan, sinkronisasi berbasis jadwal (tersedia dengan lisensi PLUS) memungkinkan Anda menjalankan pencadangan ShareFile dengan jadwal bergaya crontab — harian, mingguan, atau pada interval khusus. Job History melacak setiap eksekusi dengan waktu mulai, durasi, jumlah file, dan status.

## Mengatur dan Membandingkan Konten ShareFile

Fitur Folder Compare milik RcloneView sangat berguna untuk mengaudit konten ShareFile terhadap tujuan pencadangan. Jalankan melalui tombol Compare di tab Home, pilih ShareFile sebagai salah satu sisi dan penyimpanan target Anda sebagai sisi lainnya, dan tampilan akan menyoroti file yang hanya ada di satu sisi, berbeda ukuran, atau identik.

Alur kerja compare-first ini praktis untuk migrasi: jalankan perbandingan sebelum sinkronisasi untuk memahami dengan tepat apa yang akan berubah. Untuk audit yang lebih terarah, Folder Compare with Filter (lisensi PLUS) memungkinkan Anda membatasi perbandingan berdasarkan jenis file atau nama folder, berguna saat menangani repositori ShareFile berskala besar.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison between ShareFile and backup storage in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka tab Remote dan klik **New Remote**, lalu pilih Citrix ShareFile.
3. Masukkan kredensial ShareFile Anda dan Root Folder ID untuk menyelesaikan penyiapan.
4. Gunakan panduan Sync untuk membuat pekerjaan pencadangan ShareFile ke cloud tujuan pilihan Anda.

Mengelola ShareFile bersama layanan cloud lain Anda dari satu antarmuka mengurangi perpindahan konteks dan memberi Anda alur kerja yang konsisten untuk pencadangan, migrasi, dan pengaturan file.

---

**Panduan Terkait:**

- [Kelola Sinkronisasi dan Pencadangan Cloud SharePoint dengan RcloneView](https://rcloneview.com/support/blog/manage-sharepoint-cloud-sync-backup-rcloneview)
- [Migrasikan Citrix ShareFile ke OneDrive dan SharePoint dengan RcloneView](https://rcloneview.com/support/blog/migrate-citrix-sharefile-onedrive-sharepoint-rcloneview)
- [Migrasi Cloud-to-Cloud dengan RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />
