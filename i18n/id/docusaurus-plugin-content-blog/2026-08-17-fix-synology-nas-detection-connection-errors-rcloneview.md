---
slug: fix-synology-nas-detection-connection-errors-rcloneview
title: "Perbaiki Kesalahan Deteksi dan Koneksi Synology NAS — Pencadangan Andal dengan RcloneView"
authors:
  - casey
description: "Selesaikan masalah deteksi otomatis dan kegagalan koneksi Synology NAS di RcloneView, dengan perbaikan untuk penemuan jaringan lokal dan pengaturan manual."
keywords:
  - Synology NAS RcloneView
  - kesalahan deteksi otomatis Synology
  - koneksi NAS RcloneView
  - perbaiki NAS tidak terdeteksi
  - pencadangan cloud Synology
  - penyimpanan jaringan lokal NAS
  - pemecahan masalah RcloneView
  - pemasangan SMB Synology
  - sinkronisasi penyimpanan lokal
tags:
  - RcloneView
  - troubleshooting
  - synology
  - nas
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Kesalahan Deteksi dan Koneksi Synology NAS — Pencadangan Andal dengan RcloneView

> Ketika RcloneView tidak dapat menemukan Synology Anda di jaringan lokal, perbaikannya biasanya adalah pengaturan, bukan NAS yang rusak.

RcloneView dapat mendeteksi otomatis Synology NAS di jaringan lokal Anda, tetapi deteksi otomatis bergantung pada visibilitas jaringan, bukan hanya pada apakah NAS menyala. Studio fotografi yang mencadangkan 2TB file RAW setiap malam dapat kehilangan seluruh jendela pencadangan karena NAS yang diam-diam berhenti muncul di penjelajah. Panduan ini membahas penyebab umum kegagalan deteksi dan koneksi Synology serta cara mengatasi masing-masing di RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Deteksi Otomatis Gagal

Pengaturan deteksi otomatis Synology RcloneView memindai segmen jaringan lokal tempat mesin Anda terhubung. Jika NAS berada di balik VLAN, subnet yang berbeda, atau terowongan VPN, siaran tidak pernah mencapainya dan NAS tidak muncul secara otomatis — ini adalah batasan topologi jaringan, bukan bug RcloneView. Pastikan dulu pengaturannya sendiri sudah aktif: tab Settings > General > Auto-detect Synology NAS harus diaktifkan, karena ini dikontrol oleh toggle dan mudah tertinggal nonaktif setelah instalasi baru.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Toggle deteksi otomatis Synology NAS di pengaturan RcloneView" class="img-large img-center" />

Jika toggle sudah aktif tetapi deteksi tetap gagal, periksa apakah mesin klien dan NAS berada di segmen jaringan fisik atau virtual yang sama. Jaringan korporat dengan isolasi klien yang diaktifkan pada titik akses Wi-Fi memblokir penemuan antar-perangkat sepenuhnya, meskipun kedua perangkat menunjukkan status "terhubung".

## Koneksi Manual Ketika Deteksi Otomatis Tidak Dapat Menjangkau NAS

Ketika deteksi otomatis tidak memungkinkan — kantor jarak jauh, jaringan tersegmentasi, atau unit NAS pada VLAN yang berbeda — sambungkan secara manual alih-alih memecahkan masalah penemuan. Tambahkan Synology sebagai remote SFTP atau SMB/CIFS di Remote Manager menggunakan alamat IP atau nama host secara langsung, sepenuhnya melewati pemindaian jaringan lokal.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan Synology NAS secara manual sebagai remote SFTP" class="img-large img-center" />

Jalur manual ini juga mengatasi masalah sekunder paling umum: waktu tunggu koneksi habis yang terlihat seperti kegagalan deteksi tetapi sebenarnya adalah masalah autentikasi. Periksa kembali apakah layanan SSH atau SMB NAS diaktifkan di panel kontrol Synology itu sendiri — RcloneView tidak dapat terhubung ke layanan yang tidak dijalankan oleh NAS itu sendiri.

## Memverifikasi Koneksi dan Mengotomatiskan Pencadangan

Setelah remote ditambahkan, gunakan Test Connection sebelum menyimpan untuk mengonfirmasi kredensial dan keterjangkauan dalam satu langkah, bukannya menemukan kegagalan di tengah transfer. RcloneView memasang dan menyinkronkan lebih dari 90 penyedia dari satu jendela, di Windows, macOS, dan Linux, sehingga setelah Synology terhubung, ia berada di penjelajah yang sama dengan remote cloud Anda tanpa memerlukan aplikasi terpisah.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Riwayat Tugas menampilkan proses pencadangan Synology yang selesai" class="img-large img-center" />

Dari sana, buat tugas sinkronisasi yang mencerminkan NAS ke tujuan cloud dan periksa Riwayat Tugas setelah jalankan pertama — tugas yang selesai dengan nol file yang ditransfer biasanya berarti jalur sumber salah, bukan berarti koneksi terputus.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Aktifkan Auto-detect Synology NAS di Settings, atau sambungkan secara manual melalui SFTP/SMB menggunakan alamat IP NAS.
3. Jalankan Test Connection sebelum menyimpan remote.
4. Siapkan tugas sinkronisasi ke tujuan cloud dan konfirmasi transfer di Riwayat Tugas.

NAS yang terhubung secara andal sepadan dengan lima menit pemecahan masalah jaringan — pencadangan otomatis hanya melindungi Anda jika benar-benar berjalan.

---

**Panduan Terkait:**

- [Sinkronkan Synology ke Google Drive Tanpa Kehilangan Data](https://rcloneview.com/support/blog/sync-synology-google-drive-without-data-loss)
- [Cadangkan Synology ke Cloud dengan RcloneView](https://rcloneview.com/support/blog/synology-to-cloud-backup-with-rcloneview)
- [Perbaiki Kesalahan Pemasangan Berbagi Jaringan SMB/Windows — RcloneView](https://rcloneview.com/support/blog/fix-smb-windows-network-share-mount-errors-rcloneview)

<CloudSupportGrid />
