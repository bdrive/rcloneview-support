---
slug: manage-multiple-cloud-accounts-rcloneview
title: "Kelola Banyak Akun Cloud dalam Satu Tampilan dengan RcloneView (Google, OneDrive, Dropbox, S3)"
authors:
  - tayson
description: Kelola Google Drive, OneDrive, Dropbox, dan S3 tanpa menyentuh CLI. RcloneView menyatukan banyak akun cloud sehingga Anda dapat menjelajah, transfer, dan sinkronisasi data dalam satu antarmuka yang intuitif.
keywords:
  - rcloneview
  - multiple cloud accounts
  - google drive
  - onedrive
  - dropbox
  - s3
  - cloud sync
  - rclone gui
  - migrate files
tags:
  - google-drive
  - onedrive
  - dropbox
  - s3
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Banyak Akun Cloud dalam Satu Tampilan dengan RcloneView (Google, OneDrive, Dropbox, S3)

> Satu dashboard bersih untuk semua cloud Anda—jelajah, bandingkan, transfer, dan otomatisasi tanpa command line.

Penyebaran penyimpanan cloud yang berserakan itu nyata. Gmail pribadi + akun Google kantor, OneDrive yang terikat ke Microsoft 365, Dropbox lama yang masih Anda bagikan dengan vendor, dan bucket S3 untuk arsip. Login dan logout dari berbagai portal membuang waktu dan membuat Anda mudah kehilangan jejak data yang tersimpan di mana. RcloneView mengatasi hal ini dengan menyatukan setiap akun ke dalam satu explorer visual yang didukung oleh rclone—sehingga Anda dapat berpindah antar provider dengan percaya diri, lengkap dengan pratinjau, dry-run, dan tugas terjadwal.

<!-- truncate -->

Dengan RcloneView, Anda tidak perlu mempelajari `rclone config` atau menghafal flag. Aplikasi ini memandu Anda menghubungkan setiap akun sekali, lalu menggunakan kembali koneksi tersebut di berbagai alur kerja salin, bandingkan, dan sinkronisasi. Ideal untuk:

- Pengguna sehari-hari yang hanya ingin drag file antar akun
- Engineer yang mengonsolidasikan data proyek yang tersebar di berbagai cloud
- Admin IT yang menstandarkan pencadangan dan migrasi multi-akun

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

### Memahami tantangannya

- UI yang terfragmentasi: Setiap provider punya web console sendiri dan batasan pada operasi massal.
- API dan kuota yang berbeda: Google, Microsoft, Dropbox, dan S3 semuanya berperilaku berbeda saat pemindahan data besar.
- Audit dan repeatability: Anda butuh pratinjau, log, dan eksekusi terjadwal—bukan drag manual satu kali di browser.

### Apa yang berubah dengan antarmuka terpadu

- Satu explorer: Buka banyak akun berdampingan—tanpa loop relogin
- Compare-first: Lihat perbedaan sebelum menyalin; hindari duplikasi dan kejutan
- Jobs dan riwayat: Simpan sinkronisasi, jadwalkan eksekusi di luar jam kerja, dan simpan jejak audit

| Pendekatan                   | Tempat Anda bekerja    | Pratinjau perbedaan | Jadwal & pengulangan | Multi-provider      |
| ----------------------------- | ---------------------- | -------------------- | ---------------------- | -------------------- |
| Web UI cloud native           | Tab browser terpisah   | Terbatas              | Manual                 | Hanya satu provider  |
| GUI multi-akun RcloneView     | Satu aplikasi desktop  | Ya (Compare)          | Ya (Jobs)               | Backend rclone apa pun |



## Persiapan

1. Petakan akun dan tujuan: Daftar akun yang Anda gunakan (misalnya, Google Drive pribadi, OneDrive kantor, Dropbox, S3/Wasabi/R2) dan apa yang ingin Anda lakukan: konsolidasi, pencadangan, atau reorganisasi.
2. Konfirmasi akses: Anda memerlukan akses login atau API key jika diperlukan.
3. Mulai dari yang kecil: Uji dengan folder kecil; validasi pratinjau dan hasil sebelum meningkatkan skala.

Tautan yang membantu

- [Pengaturan cepat Google OAuth](/howto/remote-storage-connection-settings/add-oath-online-login)
- [Login Microsoft/SharePoint](/howto/remote-storage-connection-settings/connect-using-cli/add-sharepoint-for-business)
- [Pengaturan S3/Wasabi/R2](/howto/remote-storage-connection-settings/s3) · [Kredensial Cloudflare R2](/howto/cloud-storage-setting/cloudflare-r2-credential)
- [Pengaturan OAuth Dropbox](/howto/remote-storage-connection-settings/add-oath-online-login)

## Hubungkan Akun Anda di RcloneView

RcloneView membungkus konfigurasi rclone dalam wizard yang mudah digunakan. Tambahkan setiap cloud sekali; akun akan muncul di Explorer sebelah kiri untuk digunakan kembali.

1. Buka RcloneView → klik `+ New Remote`.

<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

2. Pilih provider dan ikuti petunjuknya:
   - Google Drive: login via OAuth dan beri nama yang jelas (misalnya, `Drive-Personal`, `Drive-Work`). Lihat: [Panduan login OAuth](/howto/remote-storage-connection-settings/add-oath-online-login)
   - OneDrive/SharePoint: login dengan akun Microsoft Anda. Lihat: [Pengaturan Microsoft/SharePoint](/howto/remote-storage-connection-settings/connect-using-cli/add-sharepoint-for-business)
   - Dropbox: gunakan wizard OAuth Dropbox RcloneView untuk menghubungkan. Lihat: [Panduan login OAuth](/howto/remote-storage-connection-settings/add-oath-online-login)
   - S3/Wasabi/R2: atur endpoint/region dan key. → [Pengaturan koneksi S3](/howto/remote-storage-connection-settings/s3) · [Kredensial Cloudflare R2](/howto/cloud-storage-setting/cloudflare-r2-credential)
3. Ulangi untuk setiap akun. Anda dapat membuka banyak remote sekaligus dan menjelajahinya secara berdampingan.

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-mega-view.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Pindahkan dan Sinkronisasi Tanpa Kejutan

RcloneView mendukung tiga pola yang sama di semua akun yang Anda hubungkan. Mulai dengan folder percobaan kecil, lalu tingkatkan skalanya.

### Drag and Drop

Buka sumber di sebelah kiri dan tujuan di sebelah kanan; drag file atau folder ke seberang.

Lihat: [Menyalin file menggunakan drag and drop](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

  <img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

### Bandingkan Sebelum Menyalin

Jalankan Compare untuk menampilkan daftar yang baru, berubah, atau hilang antara dua folder—bahkan lintas provider yang berbeda. Batalkan pilihan apa pun yang ingin Anda lewati, lalu salin.

Lihat: [Hasil perbandingan dan kelola file](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Preview and select differences before copying" class="img-large img-center" />

### Sinkronisasi dan Penjadwalan

Cerminkan folder terpilih di berbagai akun dengan Sync. Selalu jalankan dry-run terlebih dahulu, lalu simpan tugas dan jadwalkan eksekusi di luar jam kerja. Pantau progres dan riwayat di Job Manager.

Lihat: [Sinkronisasi Remote Storage](/howto/rcloneview-basic/synchronize-remote-storages), [Membuat Sync Job](/howto/rcloneview-basic/create-sync-jobs), [Penjadwalan & Eksekusi Job](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/add-job-configure-storage.png" alt="Configure and run a sync job in RcloneView" class="img-large img-center" />

## Kasus Penggunaan Praktis

- Google Drive pribadi + kantor: Simpan cerminan read-only dari folder pribadi terpilih di akun kantor, atau sebaliknya, dengan sinkronisasi terjadwal dan log yang jelas.
- Peralihan tim OneDrive ↔ Google Drive: Gunakan Compare untuk menyiapkan cutover, lalu Sync setiap malam hingga tujuan menjadi sumber kebenaran (source of truth).
- Pembersihan dan pengarsipan Dropbox: Drag folder bersama yang jarang digunakan ke bucket S3/Wasabi untuk penyimpanan yang lebih murah sambil tetap menyimpan salinan online untuk kolaborator.
- Pencadangan multi-cloud: Simpan arsip terenkripsi di bucket yang kompatibel dengan S3 sambil tetap menjaga kolaborasi sehari-hari di Drive/OneDrive. Padukan dengan `crypt` rclone jika Anda memerlukan enkripsi sisi klien. Lihat: /blog/encrypt-cloud-backups-google-drive-onedrive-s3-with-rcloneview

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule multi-account jobs in RcloneView" class="img-large img-center" />

## Tips untuk Operasi yang Lancar

- Beri nama remote dengan jelas: `Drive-Personal`, `Drive-Work`, `OneDrive-DeptA`, `Dropbox-Shared`, `S3-Archive`.
- Coba dulu: Bandingkan dan salin sampel kecil sebelum menjalankan tugas massal.
- Perhatikan kuota: Batas upload/copy Google Drive dan pembatasan API dapat memengaruhi eksekusi besar; jadwalkan di malam hari bila memungkinkan.
- Simpan jejak audit: Ekspor log dari Job History untuk pelacakan perubahan.

## Penutup

RcloneView mengubah kekacauan login dan tab browser menjadi satu ruang kerja yang andal. Hubungkan semua akun Anda sekali, pratinjau setiap perubahan, dan otomatisasi bagian yang berulang—tanpa menulis satu perintah pun. Baik Anda sedang mengonsolidasikan data pribadi, mengatur peralihan tim, atau menjalankan migrasi IT, GUI multi-akun yang terpadu membuat pekerjaan cloud lebih cepat dan lebih aman.

Ingin bantuan menyiapkan provider tertentu? Cek berikut ini:

- Ikhtisar Remote Manager: [Remote Manager](/howto/rcloneview-basic/remote-manager)
- Pemantauan transfer real-time: [Pemantauan transfer real-time](/howto/rcloneview-basic/real-time-transfer-monitoring)
- Mount cloud sebagai local drive: [Mount penyimpanan cloud sebagai local drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<CloudSupportGrid />
