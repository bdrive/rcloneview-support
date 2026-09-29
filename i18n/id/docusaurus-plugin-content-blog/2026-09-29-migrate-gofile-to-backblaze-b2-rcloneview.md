---
slug: migrate-gofile-to-backblaze-b2-rcloneview
title: "Migrasi Gofile ke Backblaze B2 — Transfer File dengan RcloneView"
authors:
  - tayson
description: "Migrasi Gofile ke Backblaze B2 dengan RcloneView: hubungkan kedua remote, uji salin dengan Dry Run, verifikasi dengan Folder Compare, dan simpan pencadangan yang tahan lama."
keywords:
  - migrasi gofile ke backblaze b2
  - gofile ke b2
  - pencadangan gofile
  - migrasi backblaze b2
  - RcloneView gofile
  - transfer cloud ke cloud
  - alat transfer file gofile
  - pindahkan file dari gofile
  - rclone gofile backblaze
  - migrasi cloud GUI
tags:
  - RcloneView
  - gofile
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Gofile ke Backblaze B2 — Transfer File dengan RcloneView

> Pindahkan file yang dibagikan melalui Gofile ke penyimpanan objek Backblaze B2, dan pastikan setiap file sampai tanpa menulis satu perintah pun.

Gofile praktis untuk menyerahkan file kepada orang lain, tetapi bukan tempat yang baik untuk menyimpan satu-satunya salinan sesuatu yang penting. Backblaze B2 adalah penyimpanan objek yang dibuat untuk retensi jangka panjang, dengan kontrol tingkat bucket atas apa yang Anda simpan. RcloneView menghubungkan kedua layanan dalam satu jendela dan menyalin dari satu antarmuka, sehingga Anda tidak perlu mengunduh lalu mengunggah ulang setiap file secara manual.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan Gofile dan Backblaze B2

Gofile melakukan autentikasi dengan Access Token. Salin dari kolom token API di halaman profil Gofile Anda, lalu pilih Gofile di **New Remote** dan tempelkan. Backblaze B2 memerlukan Application Key ID dan Application Key, yang Anda buat di halaman pengelolaan kunci Backblaze. Buat kunci yang dibatasi pada bucket tujuan, bukan kunci master, agar kredensial migrasi hanya dapat mengakses apa yang diperlukan.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote Gofile dan Backblaze B2 di RcloneView" class="img-large img-center" />

Setelah kedua remote ada, buka Gofile di satu panel Explorer dan bucket B2 Anda di panel lain. RcloneView menampilkan hingga empat panel sekaligus, sehingga Anda juga dapat membuka folder lokal untuk pemeriksaan acak. Hubungkan S3, Azure, atau Backblaze B2 dengan akses baca/tulis penuh pada lisensi FREE.

## Rencanakan Tata Letak Sebelum Menyalin

Tentukan bagaimana konten Gofile dipetakan ke bucket. Sebuah studio fotografi dengan hasil kerja klien di selusin folder Gofile, misalnya, dapat membuat satu bucket B2 dan mencerminkan setiap folder sebagai prefiks tingkat teratas, sehingga path tetap mudah dibaca di kemudian hari. Buat folder tujuan terlebih dahulu dengan **New Folder** di panel B2.

Seret folder dari panel Gofile ke panel B2. Di antara remote yang berbeda, seret dan lepas melakukan penyalinan, sehingga file asli di Gofile tetap utuh sampai Anda memutuskan lain. Untuk migrasi yang lebih besar dan dapat diulang, gunakan wizard Sync: pilih Gofile sebagai sumber, path bucket sebagai tujuan, dan beri job nama yang terdiri dari huruf, angka, tanda hubung, atau garis bawah.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer cloud ke cloud dari Gofile ke Backblaze B2 di RcloneView" class="img-large img-center" />

## Dry Run, Transfer, dan Pemantauan

Sebelum eksekusi sebenarnya, gunakan **Dry Run**. Fitur ini mendaftar file yang akan disalin dan file yang akan dihapus, sehingga sumber atau tujuan yang salah dapat diketahui sebelum menimbulkan kerugian. Jika Anda memilih sinkronisasi satu arah, ingat bahwa sinkronisasi ini mengubah tujuan agar sama dengan sumber, sehingga Dry Run layak dilakukan meski hanya memakan waktu satu menit.

Di Advanced Settings, Anda dapat mengatur jumlah transfer file bersamaan dan mengaktifkan perbandingan checksum. Mulailah dengan konservatif pada eksekusi pertama, lalu naikkan konkurensi jika transfer stabil. Pantau progres, kecepatan, dan jumlah file di tab **Transferring** di bagian bawah jendela.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Memantau progres transfer di tab Transferring" class="img-large img-center" />

## Verifikasi dengan Folder Compare

Setelah transfer selesai, buka **Compare** dari tab Home dengan Gofile di kiri dan B2 di kanan. Filter ke file left-only untuk melihat apa pun yang gagal sampai, dan ke file different untuk menemukan ketidakcocokan ukuran. Copy right melengkapi yang kurang tanpa mengirim ulang file yang sudah cocok. Job History mencatat setiap eksekusi beserta status, ukuran, dan durasinya, sehingga Anda memiliki catatan migrasi.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare yang menampilkan perbedaan antara Gofile dan B2" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote Gofile dengan Access Token dan remote Backblaze B2 dengan application key yang dibatasi pada bucket.
3. Buka kedua remote berdampingan, jalankan **Dry Run**, lalu salin atau sinkronkan folder.
4. Gunakan **Compare** untuk memastikan tidak ada yang hilang sebelum Anda membersihkan sisi Gofile.

Salinan terverifikasi di B2 mengubah tautan berbagi sementara menjadi pencadangan yang Anda kendalikan.

---

**Panduan terkait:**

- [Migrasi Gofile ke Google Drive](https://rcloneview.com/support/blog/migrate-gofile-to-google-drive-rcloneview)
- [Kelola Penyimpanan Gofile](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [Migrasi IDrive e2 ke Backblaze B2](https://rcloneview.com/support/blog/migrate-idrive-e2-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
