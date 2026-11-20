---
slug: migrate-icloud-drive-to-pcloud-rcloneview
title: "Migrasi iCloud Drive ke pCloud — Transfer File dengan RcloneView"
authors:
  - tayson
description: "Pindahkan file iCloud Drive ke pCloud dengan RcloneView: hubungkan kedua remote, pratinjau dengan Dry Run, jalankan pekerjaan sinkronisasi cloud-ke-cloud, dan verifikasi dengan Folder Compare."
keywords:
  - iCloud Drive ke pCloud
  - migrasi iCloud Drive ke pCloud
  - transfer iCloud ke pCloud
  - pindahkan file dari iCloud Drive
  - alat migrasi pCloud
  - alternatif iCloud Drive di Windows dan Linux
  - migrasi cloud ke cloud dengan GUI
  - RcloneView iCloud Drive
  - RcloneView pCloud
tags:
  - RcloneView
  - pcloud
  - cloud-to-cloud
  - migration
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi iCloud Drive ke pCloud — Transfer File dengan RcloneView

> Pindahkan pustaka iCloud Drive ke pCloud tanpa berpindah-pindah jendela Finder atau bergulat dengan unggahan browser yang terhenti di tengah jalan.

iCloud Drive praktis selama semua perangkat Anda adalah perangkat Apple. Begitu laptop Windows atau workstation Linux ikut bergabung, banyak pengguna mencari cloud yang bekerja sama di setiap platform, dan pCloud adalah tujuan yang umum. RcloneView menghubungkan kedua layanan dalam satu jendela, menyalin data dengan pekerjaan sinkronisasi yang dapat diulang, dan memungkinkan Anda memverifikasi hasilnya sebelum membatalkan apa pun.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan iCloud Drive dan pCloud sebagai Remote

Buka tab **Remote** dan klik **New Remote**. Pilih **iCloud Drive**, masukkan kredensial akun Apple Anda, dan selesaikan permintaan verifikasi yang dikirim Apple ke perangkat Anda. Backend iCloud Drive milik rclone tidak berfungsi dengan Perlindungan Data Lanjutan (Advanced Data Protection), jadi pengaturan tersebut harus dimatikan di akun Apple Anda. Dukungan iCloud Drive memerlukan rclone v1.69 atau yang lebih baru; rclone bawaan yang disertakan dengan RcloneView sudah memenuhi persyaratan itu, jadi tidak ada yang perlu dipasang tambahan.

Selanjutnya, tambahkan **pCloud**. pCloud menggunakan OAuth, sehingga jendela browser terbuka, Anda masuk, dan remote tersimpan secara otomatis. Tidak diperlukan kunci API.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive and pCloud remotes in RcloneView" class="img-large img-center" />

Setelah kedua remote tersimpan, buka iCloud Drive di panel Explorer kiri dan pCloud di panel kanan. Klik kanan folder iCloud yang ingin Anda pindahkan dan gunakan **Get Size** untuk melihat berapa banyak data yang terlibat sebelum mulai.

## Pratinjau Migrasi dengan Dry Run

Buat pekerjaan sinkronisasi dari tab **Home**. Tetapkan folder iCloud Drive sebagai sumber dan folder pCloud baru, seperti `/From-iCloud`, sebagai tujuan. Pertahankan arah satu arah ("Modifying destination only") agar iCloud Drive tidak pernah diubah.

Sebelum menjalankannya, klik **Dry Run**. RcloneView mencantumkan setiap file yang akan disalin dan apa pun yang akan dihapus di tujuan, tanpa memindahkan satu byte pun. Inilah saatnya menemukan kejutan: folder bundle Mac, file `.DS_Store`, atau folder cadangan ponsel lama yang terlupakan. Tambahkan filter kustom di Step 3 untuk mengecualikan apa pun yang tidak ingin Anda bawa.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="iCloud Drive and pCloud side by side in RcloneView for a cloud-to-cloud transfer" class="img-large img-center" />

Perlu diingat bahwa ini bukan penyalinan sisi server antara Apple dan pCloud: data mengalir melalui komputer yang menjalankan RcloneView, sehingga koneksi kabel dan komputer yang tidak masuk mode tidur membantu migrasi besar selesai dalam sekali jalan.

## Jalankan, Pantau, dan Verifikasi

Mulai pekerjaan dan pantau tab **Transferring** untuk melihat progres, jumlah file, dan kecepatan saat ini. Jika koneksi terputus, jalankan lagi pekerjaan yang sama. Sinkronisasi hanya mentransfer file yang belum ada atau berbeda, sehingga file yang sudah selesai akan dilewati.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring an iCloud Drive to pCloud transfer in the RcloneView Transferring tab" class="img-large img-center" />

Setelah pekerjaan selesai, buka **Compare** dengan iCloud Drive di kiri dan pCloud di kanan. Aktifkan "Show left-only files" dan "Show different files". Hasil kosong berarti migrasi sudah lengkap. **Job History** menyimpan catatan setiap eksekusi, termasuk status, ukuran, dan jumlah file.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying the iCloud Drive to pCloud migration with RcloneView Folder Compare" class="img-large img-center" />

## Memulai

RcloneView berjalan di Windows, macOS, dan Linux, sehingga Anda dapat mengelola pustaka pCloud yang baru dari komputer mana pun setelah perpindahan selesai.

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan iCloud Drive (masuk dengan akun Apple) dan pCloud (OAuth browser) sebagai remote.
3. Buat pekerjaan sinkronisasi satu arah dari iCloud Drive ke folder pCloud dan periksa dengan **Dry Run**.
4. Jalankan pekerjaan, lalu konfirmasi hasilnya dengan **Compare** sebelum Anda meninggalkan salinan iCloud.

Migrasi yang terverifikasi dan dapat diulang berarti Anda bisa berpindah cloud tanpa khawatir ada file yang tertinggal.

---

**Panduan Terkait:**

- [Migrasi iCloud Drive ke Google Drive — Transfer File dengan RcloneView](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)
- [Kelola Penyimpanan pCloud — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Atasi Error Sinkronisasi iCloud Drive — Cara Mengatasinya dengan RcloneView](https://rcloneview.com/support/blog/fix-icloud-drive-sync-errors-rcloneview)

<CloudSupportGrid />
