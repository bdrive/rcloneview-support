---
slug: rcloneview-terramaster-nas-cloud-backup
title: "Gunakan RcloneView dengan TerraMaster NAS untuk Pencadangan dan Sinkronisasi Cloud"
authors:
  - tayson
description: "Siapkan RcloneView dengan TerraMaster NAS untuk menyinkronkan dan mencadangkan data NAS ke penyimpanan cloud. Hubungkan melalui SFTP atau SMB dan otomatiskan pencadangan ke S3, B2, atau Google Drive."
keywords:
  - rcloneview
  - terramaster nas cloud backup
  - terramaster cloud sync
  - terramaster backup to cloud
  - terramaster rclone
  - nas cloud backup gui
  - terramaster google drive
  - terramaster s3 backup
  - terramaster file sync
  - nas to cloud transfer
tags:
  - RcloneView
  - nas
  - platform
  - cloud-backup
  - backup
  - guide
  - sftp
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gunakan RcloneView dengan TerraMaster NAS untuk Pencadangan dan Sinkronisasi Cloud

> Perangkat TerraMaster NAS menawarkan penyimpanan jaringan yang terjangkau, tetapi opsi pencadangan cloud bawaannya terbatas — **RcloneView** memperluas TerraMaster Anda dengan pencadangan multi-cloud, sinkronisasi, dan manajemen file melalui GUI visual.

TerraMaster memproduksi perangkat NAS populer yang menjalankan TOS (TerraMaster Operating System). Meskipun TOS menyertakan fitur sinkronisasi cloud dasar untuk beberapa penyedia, TOS tidak mendukung rentang lengkap layanan penyimpanan cloud yang dibutuhkan oleh bisnis dan pengguna tingkat lanjut. RcloneView terhubung ke TerraMaster NAS Anda melalui SFTP atau SMB dan menjembataninya ke lebih dari 70 penyedia cloud — memungkinkan pencadangan otomatis, sinkronisasi cloud-ke-NAS, dan manajemen file lintas cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Menambahkan Pencadangan Cloud ke TerraMaster Anda

NAS menyediakan penyimpanan lokal yang cepat dan redundansi RAID, tetapi tidak melindungi terhadap:

- **Bencana tingkat lokasi**: Kebakaran, banjir, pencurian, atau lonjakan listrik dapat menghancurkan NAS dan seluruh drive-nya secara bersamaan. RAID melindungi terhadap kegagalan drive, bukan kehilangan lokasi.
- **Ransomware**: Jika ransomware mencapai jaringan Anda, ia dapat mengenkripsi share NAS. Pencadangan cloud (terutama ke penyimpanan yang tidak dapat diubah) menyediakan titik pemulihan.
- **Kegagalan perangkat keras di luar RAID**: Kegagalan papan kontroler, kerusakan catu daya, atau kerusakan firmware dapat membuat seluruh NAS tidak dapat diakses terlepas dari level RAID.

Pencadangan cloud menyediakan redundansi geografis yang tidak dapat diberikan oleh NAS lokal. RcloneView mengotomatiskan pencadangan ini sambil menjaga alur kerja utama Anda tetap pada NAS lokal yang cepat.

## Menghubungkan RcloneView ke TerraMaster Anda

RcloneView berjalan di desktop Anda atau mesin terpisah (bukan di TerraMaster itu sendiri) dan terhubung ke NAS melalui jaringan. Dua metode koneksi tersedia:

### Koneksi SFTP

Aktifkan SSH pada TerraMaster Anda (TOS Control Panel > Services > SSH). Kemudian tambahkan remote SFTP di Remote Manager RcloneView:

- Host: Alamat IP TerraMaster Anda (misalnya, `192.168.1.100`)
- Port: 22 (port SSH default)
- Username: Nama pengguna admin TOS Anda
- Password atau kunci SSH: Kredensial TOS Anda

SFTP menyediakan transfer file terenkripsi dan merupakan metode yang direkomendasikan untuk mengakses data NAS dari RcloneView.

### Koneksi SMB

Jika share TerraMaster Anda dapat diakses melalui SMB (berbagi file Windows), tambahkan remote SMB di RcloneView. Ini menggunakan format jalur jaringan Windows standar dan nyaman jika Anda sudah memiliki share SMB yang dikonfigurasi.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting RcloneView to TerraMaster NAS via SFTP" class="img-large img-center" />

## Mencadangkan Data NAS ke Penyimpanan Cloud

Setelah terhubung, siapkan tugas pencadangan dari TerraMaster Anda ke tujuan cloud:

1. Buka remote SFTP TerraMaster di panel kiri.
2. Buka tujuan cloud Anda (AWS S3, Backblaze B2, Google Drive, Wasabi) di panel kanan.
3. Navigasikan ke folder yang ingin Anda cadangkan di NAS.
4. Buat tugas sinkronisasi yang menyalin data NAS ke cloud.

Deteksi delta RcloneView memastikan hanya file yang telah berubah sejak pencadangan terakhir yang ditransfer. Untuk NAS dengan data berukuran terabyte, pencadangan awal mungkin memakan waktu berhari-hari, tetapi pencadangan harian berikutnya hanya mentransfer perubahan hari itu — biasanya selesai dalam hitungan menit.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Backing up TerraMaster NAS to cloud storage in RcloneView" class="img-large img-center" />

## Memilih Tujuan Pencadangan Cloud

Untuk pencadangan NAS, penyimpanan yang hemat biaya tanpa biaya egress adalah pilihan ideal:

- **Backblaze B2**: $6/TB/bulan, egress gratis melalui kemitraan Cloudflare. Harga sederhana, cocok untuk pencadangan yang mudah.
- **Wasabi**: $6.99/TB/bulan, tanpa biaya egress. Berlaku durasi penyimpanan minimum 90 hari.
- **AWS S3 Glacier Deep Archive**: $0.99/TB/bulan untuk data arsip. Pengambilan data memerlukan waktu berjam-jam dan dikenakan biaya pengambilan per-GB, tetapi biaya penyimpanan adalah yang terendah yang tersedia.
- **Google Drive**: Praktis jika tim Anda sudah menggunakan Google Workspace. Biaya penyimpanan lebih tinggi tetapi integrasinya mulus.

Bagi sebagian besar pengguna TerraMaster, Backblaze B2 menawarkan keseimbangan terbaik antara biaya, kesederhanaan, dan kecepatan pengambilan.

## Menjadwalkan Pencadangan Otomatis

Konfigurasikan penjadwal RcloneView untuk menjalankan pencadangan NAS secara otomatis:

- **Inkremental harian**: Sinkronkan file yang berubah dari NAS ke cloud setiap malam. Penggunaan bandwidth minimal setelah seeding awal.
- **Verifikasi penuh mingguan**: Jalankan operasi pembandingan setiap minggu untuk memverifikasi bahwa semua file NAS cocok dengan pencadangan cloud. Ini menangkap ketidaksesuaian akibat transfer yang terputus atau kerusakan data yang tidak terdeteksi.

Tetapkan batas bandwidth untuk mencegah trafik pencadangan menghabiskan jaringan Anda selama jam kerja. Jadwalkan pencadangan untuk semalaman atau jam sepi.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling TerraMaster NAS backup in RcloneView" class="img-large img-center" />

## Menyinkronkan Data Cloud ke TerraMaster Anda

Alur kerja sebaliknya juga berguna: menarik data cloud ke NAS Anda untuk akses lokal. Jika tim Anda berkolaborasi di Google Drive tetapi membutuhkan akses lokal yang cepat ke file proyek, sinkronkan folder Drive yang relevan ke TerraMaster Anda. Edit file secara lokal dengan kecepatan NAS, dan RcloneView menyinkronkan perubahan kembali ke cloud sesuai jadwal.

Pendekatan hybrid ini memberi Anda manfaat kolaborasi dari penyimpanan cloud dengan performa akses NAS lokal.

## Mengenkripsi Pencadangan NAS

Untuk data sensitif, gunakan remote crypt RcloneView untuk mengenkripsi file sebelum meninggalkan jaringan Anda. Enkripsi terjadi pada mesin desktop Anda (tempat RcloneView berjalan) sebelum diunggah ke cloud. Bahkan jika penyedia cloud disusupi, data pencadangan NAS Anda tetap tidak dapat dibaca.

## Pemantauan dan Verifikasi

Riwayat tugas RcloneView mencatat setiap proses pencadangan dengan statistik: file yang ditransfer, file yang dilewati, total byte, waktu yang berlalu, dan kesalahan apa pun. Tinjau riwayat secara berkala untuk memastikan pencadangan selesai dengan sukses. Gunakan fitur pembandingan secara berkala untuk memverifikasi bahwa pencadangan cloud cocok dengan isi NAS.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Monitoring TerraMaster NAS backup history in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Aktifkan SSH pada TerraMaster Anda dan tambahkan sebagai remote SFTP di RcloneView.
3. Tambahkan tujuan cloud (B2, S3, Google Drive, atau Wasabi).
4. Buat dan jadwalkan tugas pencadangan harian dari NAS ke cloud.
5. Verifikasi pencadangan secara berkala dengan fitur pembandingan.

TerraMaster NAS Anda menangani penyimpanan dan berbagi lokal. RcloneView menambahkan lapisan pencadangan cloud yang melindungi data Anda terhadap bencana tingkat lokasi, ransomware, dan kegagalan perangkat keras di luar RAID.

---

**Panduan Terkait:**

- [Jelajahi dan Kelola Penyimpanan Remote](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Buat Tugas Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Penjadwalan Tugas](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Riwayat Tugas](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)

<CloudSupportGrid />
