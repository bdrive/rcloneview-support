---
slug: sync-nextcloud-to-google-drive-rcloneview
title: "Sinkronisasi Nextcloud ke Google Drive — Migrasi dan Pencadangan File dengan RcloneView"
authors:
  - tayson
description: "Pelajari cara menyinkronkan Nextcloud ke Google Drive dengan RcloneView. Transfer file dari server Nextcloud yang di-hosting sendiri ke Google Drive dengan dukungan otomatisasi penuh."
keywords:
  - Nextcloud to Google Drive sync
  - migrate Nextcloud Google Drive
  - RcloneView Nextcloud Google Drive
  - sync self-hosted cloud to Google Drive
  - Nextcloud WebDAV sync RcloneView
  - backup Nextcloud to Google Drive
  - cloud migration self-hosted RcloneView
  - transfer Nextcloud files Google Drive
  - Nextcloud Google Drive automated sync
  - RcloneView WebDAV cloud transfer
tags:
  - nextcloud
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Nextcloud ke Google Drive — Migrasi dan Pencadangan File dengan RcloneView

> Nextcloud memberi Anda kendali penuh atas data Anda — RcloneView menambahkan jembatan ke Google Drive untuk redundansi, migrasi, atau akses tim.

Nextcloud memberikan organisasi kepemilikan atas infrastruktur penyimpanan mereka, tetapi data yang di-hosting sendiri tetap membutuhkan salinan offsite. Menyinkronkan Nextcloud ke Google Drive dengan RcloneView membuat salinan kedua di platform cloud besar tanpa scripting atau transfer file manual. Baik Anda sedang berpindah sepenuhnya dari infrastruktur self-hosted maupun mempertahankan Nextcloud sebagai penyimpanan utama dengan Google Drive sebagai pencadangan sekunder, RcloneView menangani transfer melalui antarmuka sinkronisasi visual dengan dukungan penjadwalan yang sudah terintegrasi.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menyiapkan Kedua Remote di RcloneView

Anda memerlukan dua remote yang sudah dikonfigurasi sebelum membuat sync job. Untuk Google Drive, buka tab **Remote**, klik **New Remote**, lalu pilih Google Drive — jendela browser akan terbuka untuk autentikasi OAuth, sehingga tidak ada API key atau kredensial yang perlu dikelola secara manual. Untuk Nextcloud, pilih **WebDAV** sebagai tipe remote. Masukkan URL server Nextcloud Anda dengan format `https://your-nextcloud.example.com/remote.php/dav/files/username/`, beserta username dan password Nextcloud Anda (atau app password jika autentikasi dua faktor aktif pada akun Anda).

<img src="/support/images/en/blog/new-remote.png" alt="Adding Nextcloud WebDAV and Google Drive remotes in RcloneView" class="img-large img-center" />

Setelah kedua remote tersimpan, klik masing-masing dari panel explorer untuk memverifikasi koneksi. Koneksi Nextcloud yang berhasil akan menampilkan struktur folder direktori home Anda; Google Drive akan menampilkan root Drive Anda. Jika Nextcloud mengembalikan error autentikasi, pastikan URL sudah menyertakan path WebDAV lengkap — kelalaian mencantumkan `/remote.php/dav/files/username/` adalah kesalahan pengaturan yang paling umum.

## Membuat Sync Job dari Nextcloud ke Google Drive

Setelah kedua remote terverifikasi, buka **Job Manager** dari tab Home dan buat **Sync** job baru. Pada Step 1, atur path Nextcloud Anda sebagai source dan folder Google Drive Anda sebagai destination. Pastikan arah sinkronisasi diatur ke satu arah (source mengubah destination saja) — ini mencerminkan konten Nextcloud ke Google Drive tanpa mengubah file Nextcloud Anda.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Nextcloud to Google Drive sync job in RcloneView" class="img-large img-center" />

Pada Step 2, konfigurasikan transfer bersamaan (concurrent transfers) berdasarkan kapasitas upload server Anda. Untuk library Nextcloud berukuran besar — misalnya folder proyek bersama tim desain dengan 200 GB aset — meningkatkan jumlah transfer bersamaan akan mempercepat pengisian awal destination Google Drive. Aktifkan verifikasi **checksum** ketika integritas data sangat penting; fitur ini memastikan setiap file yang ditransfer cocok dengan source berdasarkan content hash, bukan hanya ukuran file.

## Memfilter Folder Sistem dan Metadata

Server Nextcloud mengumpulkan folder sistem, cache thumbnail, dan file sementara yang tidak seharusnya berada dalam mirror Google Drive. Pada Step 3 dari job wizard, tambahkan aturan filter untuk mengecualikan path tersebut. Pola seperti `.nextcloud/` atau `.thumbs/` akan melewati direktori metadata yang hanya menambah noise pada destination tanpa memberikan nilai tambah. Preset filter bawaan RcloneView untuk Images, Documents, dan Videos memungkinkan Anda membatasi cakupan sinkronisasi hanya pada tipe file yang relevan bagi tim Anda.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Nextcloud to Google Drive sync job in RcloneView" class="img-large img-center" />

Sebelum menjalankan job secara langsung, gunakan opsi **Dry Run** dari Job Manager untuk melihat pratinjau semua operasi yang direncanakan. Dry run menampilkan daftar setiap file yang akan disalin tanpa membuat perubahan apa pun — pemeriksaan yang berguna sebelum melakukan transfer awal berskala besar.

## Mengotomatiskan Sinkronisasi dengan Jadwal

Setelah Anda memvalidasi dry run, simpan job tersebut dan — dengan lisensi PLUS — lampirkan jadwal pada Step 4. Jadwal bergaya cron setiap malam akan menjaga salinan Google Drive Anda tetap terkini dengan perubahan harian pada Nextcloud tanpa intervensi manual. Notifikasi penyelesaian sinkronisasi akan memberi tahu Anda setiap kali proses terjadwal berhasil.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Nextcloud to Google Drive sync in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote **Google Drive** (login browser OAuth) dan remote **Nextcloud** (URL WebDAV + kredensial) melalui New Remote.
3. Buat **Sync** job dengan path Nextcloud Anda sebagai source dan folder Google Drive sebagai destination.
4. Jalankan **Dry Run** untuk memverifikasi cakupan, lalu simpan dengan jadwal untuk sinkronisasi berkelanjutan yang otomatis.

Menjaga salinan Google Drive yang tersinkronisasi dari data Nextcloud Anda memastikan bahwa gangguan server atau penghapusan yang tidak disengaja tidak pernah berarti kehilangan data secara permanen.

---

**Panduan Terkait:**

- [Sinkronisasi Nextcloud ke Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)
- [Mengelola Sinkronisasi Cloud dan Pencadangan Nextcloud dengan RcloneView](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)
- [Migrasi Seafile ke Google Drive dengan RcloneView](https://rcloneview.com/support/blog/migrate-seafile-to-google-drive-rcloneview)

<CloudSupportGrid />
