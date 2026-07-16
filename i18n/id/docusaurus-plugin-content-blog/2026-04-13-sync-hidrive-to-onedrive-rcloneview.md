---
slug: sync-hidrive-to-onedrive-rcloneview
title: "Sinkronisasi HiDrive ke OneDrive — Pencadangan Cloud dengan RcloneView"
authors:
  - tayson
description: "Sinkronisasi file dari HiDrive ke OneDrive dengan RcloneView. Transfer penyimpanan Strato HiDrive langsung ke Microsoft OneDrive tanpa mengunduh secara lokal."
keywords:
  - HiDrive to OneDrive
  - sync HiDrive OneDrive
  - HiDrive migration
  - Strato HiDrive sync
  - cloud-to-cloud transfer
  - HiDrive RcloneView
  - OneDrive backup
  - European cloud migration
  - RcloneView sync
  - cloud storage transfer
tags:
  - hidrive
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi HiDrive ke OneDrive — Pencadangan Cloud dengan RcloneView

> Transfer file dari Strato HiDrive langsung ke Microsoft OneDrive dengan RcloneView — sinkronisasi cloud-ke-cloud langsung tanpa perlu mengunduh secara lokal.

HiDrive dari Strato adalah layanan penyimpanan cloud Eropa yang populer di kalangan bisnis yang membutuhkan kepatuhan residensi data GDPR. Seiring organisasi mengadopsi Microsoft 365, banyak yang ingin mengonsolidasikan file HiDrive mereka ke OneDrive untuk kolaborasi yang mulus dalam Teams dan SharePoint. RcloneView membuat transisi ini mudah: tambahkan kedua layanan sebagai remote, lalu sinkronkan folder HiDrive langsung ke OneDrive melalui GUI RcloneView tanpa perlu mengunduh file ke mesin lokal perantara.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan HiDrive dan OneDrive

HiDrive menggunakan autentikasi OAuth di rclone — saat Anda menambahkan HiDrive sebagai remote di RcloneView, sebuah jendela browser akan terbuka agar Anda dapat masuk dengan kredensial Strato HiDrive Anda dan memberikan akses. Alur OAuth yang sama berlaku untuk OneDrive: pilih Microsoft OneDrive dari daftar penyedia, autentikasi melalui akun Microsoft Anda, dan remote pun terkonfigurasi.

Dengan kedua remote aktif, buka keduanya berdampingan di explorer dua panel RcloneView. Struktur folder HiDrive Anda muncul di satu sisi, OneDrive Anda di sisi lainnya. Tata letak visual ini membantu Anda merencanakan migrasi: identifikasi folder HiDrive mana yang dipetakan ke tujuan OneDrive mana sebelum membuat tugas sinkronisasi.

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive and OneDrive remotes in RcloneView" class="img-large img-center" />

## Mengonfigurasi Tugas Sinkronisasi

Gunakan wizard Sync untuk membuat transfer HiDrive-ke-OneDrive. Pilih folder sumber HiDrive dan folder tujuan OneDrive Anda, lalu ikuti langkah-langkah konfigurasi. Sinkronisasi satu arah (opsi default yang stabil) mencerminkan konten HiDrive Anda ke OneDrive — file baru dan yang berubah akan disalin, dan secara opsional, file yang dihapus dari HiDrive juga akan dihapus dari OneDrive.

Bagi tim yang mengonsolidasikan arsip proyek, langkah Filtering sangat berguna: atur usia file maksimum untuk memigrasikan hanya file yang dibuat atau dimodifikasi dalam dua tahun terakhir, atau gunakan filter jenis file untuk hanya menyertakan dokumen, spreadsheet, dan presentasi sambil mengecualikan file video berukuran besar. Aturan filter khusus seperti `.tmp` atau `/.git/` memungkinkan Anda mengecualikan file yang tidak diperlukan dari migrasi.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing HiDrive folders to OneDrive with RcloneView" class="img-large img-center" />

Jalankan mode Dry Run sebelum transfer sesungguhnya untuk memastikan daftar file sesuai dengan yang Anda harapkan. Simulasi ini menunjukkan dengan tepat file mana yang akan disalin tanpa membuat perubahan — langkah yang berharga saat memindahkan data bisnis antar penyedia.

## Menjadwalkan Sinkronisasi Berkelanjutan

Bagi tim yang menjalankan HiDrive dan OneDrive secara paralel selama periode transisi, sinkronisasi berbasis jadwal (lisensi PLUS) menjaga kedua layanan tetap selaras. Tentukan jadwal berulang — harian, dua kali seminggu, atau pada interval cron kustom — dan RcloneView akan menjalankan sinkronisasi di latar belakang. Job History mencatat setiap eksekusi dengan waktu mulai, jumlah file yang ditransfer, dan status penyelesaian.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling recurring HiDrive to OneDrive sync in RcloneView" class="img-large img-center" />

Jika Anda perlu memverifikasi bahwa sinkronisasi telah selesai dengan benar, gunakan Folder Compare untuk memeriksa bahwa OneDrive sekarang berisi file yang diharapkan dari HiDrive. Tampilan perbandingan menunjukkan file yang hanya ada di kiri, hanya ada di kanan, dan yang berbeda ukuran, membantu Anda menemukan hal-hal yang perlu ditransfer ulang.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan HiDrive melalui alur login browser OAuth di tab Remote.
3. Tambahkan OneDrive melalui alur login browser OAuth.
4. Gunakan wizard Sync untuk mentransfer folder HiDrive ke OneDrive, dengan Dry Run untuk pratinjau terlebih dahulu.

Berpindah dari HiDrive ke OneDrive melalui RcloneView membuat prosesnya tetap berbasis GUI dan dapat diaudit, tanpa penggunaan penyimpanan lokal perantara.

---

**Panduan Terkait:**

- [Mengelola Sinkronisasi Cloud HiDrive Strato dengan RcloneView](https://rcloneview.com/support/blog/manage-hidrive-strato-sync-cloud-rcloneview)
- [Mengelola Sinkronisasi dan Pencadangan Cloud OneDrive dengan RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Migrasi Cloud-ke-Cloud dengan RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />
