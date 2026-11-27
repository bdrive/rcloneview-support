---
slug: migrate-pcloud-to-koofr-rcloneview
title: "Migrasi pCloud ke Koofr — Transfer File dengan RcloneView"
authors:
  - jay
description: "Migrasikan pCloud ke Koofr dengan RcloneView. Salin folder antar-cloud, pratinjau dengan Dry Run, verifikasi dengan Folder Compare, dan lewati siklus unduh lalu unggah ulang."
keywords:
  - migrasi pcloud ke koofr
  - transfer pcloud ke koofr
  - migrasi pcloud koofr
  - pindahkan file dari pcloud ke koofr
  - migrasi antar-cloud
  - migrasi penyimpanan cloud eropa
  - rcloneview pcloud
  - rcloneview koofr
  - alat transfer file koofr
  - migrasi cloud rclone gui
tags:
  - RcloneView
  - pcloud
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi pCloud ke Koofr — Transfer File dengan RcloneView

> Pindahkan pustaka pCloud Anda ke Koofr folder demi folder, pratinjau setiap perubahan terlebih dahulu, dan pastikan tidak ada yang tertinggal.

Tim dan individu pindah dari pCloud ke Koofr karena berbagai alasan: menggabungkan akun, menjadikan Koofr sebagai pusat utama, atau menyimpan salinan kedua di penyedia lain. Mengunduh semuanya ke laptop lalu mengunggahnya kembali membuang ruang disk dan waktu berhari-hari. RcloneView menghubungkan kedua layanan dalam satu jendela dan menyalin data di antara keduanya melalui rclone, sehingga migrasi berjalan sebagai job terkelola yang dapat Anda pantau, ulangi, dan verifikasi.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan pCloud dan Koofr sebagai Remote

Buka tab **Remote** dan klik **New Remote**. pCloud menggunakan OAuth: pilih pCloud, dan browser Anda akan terbuka agar Anda dapat masuk dan menyetujui akses. Tidak perlu kunci API. Kemudian tambahkan remote kedua untuk Koofr dan masukkan kredensial akun yang diminta formulir penyiapan.

Setelah kedua remote ada, buka keduanya berdampingan di dua panel Explorer. Anda dapat mengubah tata letak menjadi pembagian horizontal atau vertikal di **Settings > Layout**, dan menjelajahi setiap akun dengan pohon folder, tampilan daftar, atau tampilan thumbnail untuk folder foto.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote pCloud dan Koofr di RcloneView" class="img-large img-center" />

Sebelum memindahkan apa pun, klik kanan folder tingkat atas pCloud Anda dan gunakan **Get Size**. Mengetahui totalnya membantu Anda memastikan akun Koofr memiliki ruang yang cukup.

## Salin Folder Antar-Cloud

Untuk sejumlah kecil folder, seret dari panel pCloud ke panel Koofr. Menyeret antar-remote yang berbeda melakukan **Copy**, sehingga file asli di pCloud tetap utuh.

Untuk migrasi penuh, buat job sebagai gantinya. Klik **Sync** di tab Home, pilih folder pCloud sebagai sumber dan folder Koofr sebagai tujuan, lalu beri job nama seperti `pcloud-to-koofr`. Di Advanced Settings, aktifkan **checksum** jika Anda ingin file dibandingkan berdasarkan hash dan ukuran, dan biarkan **Retry entire sync if fails** pada nilai default 3 agar koneksi yang terputus tidak menghentikan proses.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer antar-cloud dari pCloud ke Koofr di RcloneView" class="img-large img-center" />

Jalankan **Dry Run** terlebih dahulu. Fitur ini menampilkan setiap file yang akan disalin atau dihapus, sehingga menjadi cara yang andal untuk menemukan jalur tujuan yang salah sebelum data sungguhan dipindahkan. RcloneView melakukan mount dan sinkronisasi 90+ penyedia dari satu jendela di Windows, macOS, dan Linux, sehingga alur job yang sama berlaku untuk pasangan mana pun yang Anda migrasikan nanti.

## Pantau Transfer dan Tinjau Riwayat

Selama job berjalan, tab **Transferring** menampilkan progres, kecepatan, dan jumlah file, dan Anda dapat membatalkannya kapan saja. Seorang fotografer yang memindahkan 400 GB hasil pemotretan dapat meminimalkan aplikasi ke system tray, dan job tetap berjalan di latar belakang.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Memantau progres transfer pCloud ke Koofr di RcloneView" class="img-large img-center" />

Setelah selesai, buka **Job History** untuk memeriksa status (Completed, Errored, atau Canceled), ukuran total, kecepatan, dan jumlah file. Jika Anda menambahkan file baru ke pCloud selama masa peralihan, jalankan job yang sama lagi. Hanya file baru atau yang berubah yang ditransfer.

## Verifikasi dengan Folder Compare

Klik **Compare** lalu muat folder pCloud di kiri dan folder Koofr di kanan. Filter **left-only files** untuk menemukan apa pun yang belum ada di Koofr, dan gunakan **Copy right** untuk mengisi kekurangannya. Saat kedua sisi ditampilkan sama, migrasi selesai dan Anda dapat memutuskan kapan menghentikan salinan di pCloud.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Membandingkan folder pCloud dan Koofr setelah migrasi di RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan pCloud (login browser OAuth) dan Koofr sebagai remote dari **New Remote**.
3. Buat job Sync dari pCloud ke Koofr dan pratinjau dengan **Dry Run**.
4. Jalankan job, tinjau **Job History**, dan konfirmasi dengan **Folder Compare**.

Migrasi yang terencana dan terverifikasi berarti Anda berganti penyedia sesuai jadwal Anda, bukan saat salinan manual akhirnya selesai.

---

**Panduan Terkait:**

- [Kelola Penyimpanan pCloud — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Kelola Penyimpanan Koofr — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Memperbaiki Error Sinkronisasi Koofr dengan RcloneView](https://rcloneview.com/support/blog/fix-koofr-sync-errors-rcloneview)

<CloudSupportGrid />
