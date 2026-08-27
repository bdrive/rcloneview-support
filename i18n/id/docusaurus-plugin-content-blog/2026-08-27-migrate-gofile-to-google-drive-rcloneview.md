---
slug: migrate-gofile-to-google-drive-rcloneview
title: "Migrasi Gofile ke Google Drive — Transfer File dengan RcloneView"
authors:
  - steve
description: "Pindahkan file dari Gofile ke Google Drive dengan RcloneView — hubungkan kedua remote, transfer langsung dari cloud ke cloud, dan otomatiskan pengambilan berulang."
keywords:
  - migrasi Gofile ke Google Drive
  - transfer Gofile ke Google Drive
  - pindahkan file Gofile ke Google Drive
  - migrasi RcloneView Gofile
  - pengaturan token akses Gofile
  - alat transfer cloud ke cloud
  - sinkronisasi Gofile Google Drive
  - konsolidasi penyimpanan cloud
  - transfer file lintas cloud
  - pengelolaan file Gofile
tags:
  - RcloneView
  - gofile
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Gofile ke Google Drive — Transfer File dengan RcloneView

> Tarik file yang dikirimkan melalui Gofile langsung ke Google Drive dengan RcloneView, tanpa mengunduhnya secara lokal terlebih dahulu atau berpindah-pindah tab browser.

Gofile adalah titik pengiriman umum untuk berbagi file sekali pakai — klien mengirimkan sekumpulan aset, kontraktor mengunggah hasil kerja, tautan unduhan diteruskan ke seluruh tim. Tetapi bukan di situ konten tersebut seharusnya berada dalam jangka panjang. RcloneView menghubungkan baik Gofile maupun Google Drive sebagai remote dalam jendela yang sama, sehingga menarik file keluar dari Gofile dan memasukkannya ke penyimpanan Google Drive yang permanen dan terorganisir menjadi transfer langsung, bukan proses unduh-lalu-unggah ulang.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Gofile dan Google Drive

Gofile menggunakan input kredensial alih-alih OAuth: buat Access Token dari halaman profil akun Gofile Anda dan tempel ke layar New Remote. Google Drive, sebaliknya, menggunakan OAuth berbasis browser — klik melalui wizard New Remote dan autentikasi di jendela pop-up, tanpa token untuk disalin. Tambahkan keduanya sebagai remote terpisah dan keduanya akan muncul sebagai tab yang dapat Anda buka di panel Explorer yang berdekatan.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote Gofile dan Google Drive di RcloneView" class="img-large img-center" />

Berbeda dari alat yang hanya mendukung mount, RcloneView juga menyinkronkan dan membandingkan folder antar remote — pada lisensi FREE — sehingga pengaturan dua remote yang sama ini mencakup baik pembersihan satu kali maupun rutinitas pengambilan yang berkelanjutan.

## Mentransfer File Langsung Antar Remote

Buka Gofile di panel kiri dan Google Drive di panel kanan, lalu pilih file atau folder yang akan dipindahkan. Menyeret antara dua remote yang berbeda akan menyalin, bukan memindahkan, sehingga tidak ada yang hilang dari Gofile sampai Anda menghapusnya secara eksplisit — berguna jika Anda ingin memastikan transfer telah berhasil sebelum membersihkan sumbernya.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Mentransfer file dari Gofile ke Google Drive di RcloneView" class="img-large img-center" />

Untuk batch yang lebih besar, klik kanan dan gunakan Copy atau Download alih-alih seret dan lepas — tab Transferring di Info View bagian bawah menampilkan kemajuan langsung, kecepatan transfer, dan jumlah file sehingga Anda dapat memastikan semuanya berhasil sampai sebelum menutup aplikasi.

## Mengotomatiskan Pengambilan Berulang

Jika Gofile terus menerima pengiriman baru — serah terima klien yang berulang, ekspor terjadwal — tugas sinkronisasi yang tersimpan lebih baik daripada mengulangi transfer manual setiap kali. Wizard empat langkah dari Job Manager memungkinkan Anda menetapkan Gofile sebagai sumber dan folder Google Drive tertentu sebagai tujuan, menerapkan filter usia maksimum file agar hanya unggahan terbaru yang diambil, dan menjalankan Dry Run untuk melihat pratinjau secara tepat apa yang akan disalin sebelum sesuatu benar-benar berpindah.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Menjadwalkan tugas sinkronisasi berulang dari Gofile ke Google Drive di RcloneView" class="img-large img-center" />

Job History kemudian mencatat setiap eksekusi — status, jumlah file, durasi — sehingga Anda dapat memastikan pengambilan terjadwal telah selesai tanpa membuka aplikasi untuk memeriksanya.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Gofile sebagai remote menggunakan Access Token Anda dari halaman akun Gofile.
3. Tambahkan Google Drive sebagai remote melalui login OAuth di browser.
4. Buka keduanya berdampingan di panel Explorer dan seret batch pertama Anda, atau buat tugas sinkronisasi untuk apa pun yang berulang.

Setelah kedua remote berada dalam jendela yang sama, mengeluarkan konten dari Gofile dan memasukkannya ke penyimpanan Google Drive yang terorganisir tidak lagi bergantung pada berapa lama tautan berbagi tetap berlaku.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan Gofile — Sinkronisasi dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [Mengelola File Google Drive dan Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Mengatasi Kuota Penyimpanan Google Drive Terlampaui — Transfer File dengan RcloneView](https://rcloneview.com/support/blog/fix-google-drive-storage-quota-exceeded-rcloneview)

<CloudSupportGrid />
