---
slug: fix-crypt-remote-password-decrypt-errors-rcloneview
title: "Memperbaiki Error Dekripsi Remote Crypt — Masalah Password dan Konfigurasi di RcloneView"
authors:
  - kai
description: "Atasi kegagalan dekripsi remote crypt, error bad-decrypt, dan password yang hilang di RcloneView. Solusi praktis untuk penyimpanan cloud terenkripsi."
keywords:
  - crypt remote decryption error
  - rclone crypt bad decrypt
  - fix rclone crypt password
  - error penyimpanan cloud terenkripsi
  - password konfigurasi rclone hilang
  - crypt remote troubleshooting
  - error enkripsi rcloneview
  - dekripsi file cloud rclone
  - crypt remote config corrupted
  - rclone crypt filename error
tags:
  - RcloneView
  - troubleshooting
  - tips
  - encryption
  - crypt
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki Error Dekripsi Remote Crypt — Masalah Password dan Konfigurasi di RcloneView

> Remote crypt yang tiba-tiba menampilkan error "bad decrypt" atau menolak menampilkan daftar file biasanya berarti satu hal: password yang digunakan untuk membaca data tidak cocok dengan password yang digunakan untuk mengenkripsinya.

Remote virtual crypt milik rclone membungkus remote yang sudah ada dan mengenkripsi nama file, nama folder, serta isi file sebelum meninggalkan perangkat Anda. Perlindungan ini kuat, tetapi juga berarti satu password yang tidak cocok atau entri konfigurasi yang rusak dapat membuat Anda terkunci dari file yang sebenarnya masih utuh di cloud. RcloneView menampilkan error ini langsung di tab Log dan Terminal, sehingga memungkinkan Anda mendiagnosis dengan tepat apa yang salah alih-alih menebak-nebak.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Dekripsi Crypt Gagal

Remote crypt menyimpan dua rahasia: password utama dan password kedua yang bersifat opsional ("salt"). Keduanya disamarkan dan disimpan dalam konfigurasi rclone Anda saat Anda menyiapkan remote melalui wizard New Remote di RcloneView. Dekripsi gagal ketika salah satu nilai tersebut tidak cocok dengan yang digunakan sebelumnya — penyebab umum adalah membuat ulang remote crypt dari ingatan setelah reset konfigurasi, atau menyalin file `rclone.conf` antar perangkat tanpa menyalin string password tersamarkan yang persis sama.

Pemicu umum lainnya adalah menerapkan mode "enkripsi nama file" crypt yang salah. Jika remote asli menggunakan enkripsi nama file standar dan remote yang dibangun ulang menggunakan "off" atau "obfuscate" sebagai gantinya, RcloneView akan menampilkan nama yang berantakan atau gagal total saat mencoba membaca struktur direktori yang tidak dapat diinterpretasikannya.

<img src="/support/images/en/blog/new-remote.png" alt="Membuat remote crypt di RcloneView dengan kolom password" class="img-large img-center" />

## Memperbaiki Error Bad Decrypt dan Nama File Berantakan

Mulailah dari Remote Manager dan buka pengaturan remote crypt untuk membandingkannya dengan konfigurasi remote dasar yang dibungkusnya. Pastikan kolom password dan password2, mode enkripsi nama file, serta path tujuan semuanya cocok dengan yang digunakan sebelumnya. Jika Anda tidak yakin dengan pengaturan yang tepat, periksa tab Log setelah mengaktifkan logging rclone pada level DEBUG di Settings — teks error biasanya menyebutkan kolom spesifik yang ditolak oleh rclone.

Jika remote crypt dibangun ulang setelah konfigurasi dihapus dan Anda masih memiliki `rclone.conf` asli, jangan ketik ulang password secara manual. Password yang disimpan dalam file konfigurasi rclone bersifat tersamarkan, bukan teks biasa, sehingga menempelkan string tersamarkan yang persis sama akan mempertahankannya secara presisi — mengetik ulang menimbulkan risiko password yang sedikit berbeda namun terlihat identik, padahal tidak dapat mendekripsi apa pun.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Riwayat pekerjaan menampilkan sinkronisasi yang gagal akibat error remote crypt" class="img-large img-center" />

## Memulihkan Ketika Password Benar-Benar Hilang

Tidak ada pintu belakang: enkripsi crypt milik rclone dirancang agar tanpa password yang benar, data tidak dapat dipulihkan — bukan oleh RcloneView, bukan oleh rclone, dan bukan oleh penyedia cloud. Jika password benar-benar hilang, jalan praktis ke depan adalah pencegahan, bukan pemulihan. Ekspor konfigurasi rclone Anda secara berkala melalui Settings, dan simpan file yang diekspor (atau setidaknya password crypt) di tempat yang aman dan terpisah dari perangkat yang menjalankan RcloneView.

RcloneView juga melakukan sinkronisasi dan membandingkan folder pada lisensi FREE, sehingga setelah remote crypt bekerja dengan benar, Anda dapat menjalankan sinkronisasi Dry Run terhadapnya untuk memastikan dekripsi berhasil sebelum mempercayakannya dengan data baru. Ini menangkap ketidakcocokan password sebelum menyebabkan pekerjaan backup gagal.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Tampilan perbandingan folder yang memverifikasi konten remote crypt sesuai harapan" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka Remote Manager dan temukan remote crypt yang menampilkan error.
3. Aktifkan Logging rclone pada level DEBUG di Settings, lalu reproduksi error untuk menangkap pesan kegagalan yang tepat.
4. Bandingkan password, password2, dan mode enkripsi nama file pada remote crypt dengan catatan pengaturan asli Anda atau konfigurasi yang diekspor.

Menyelesaikan error remote crypt dengan cepat menentukan perbedaan antara pemeriksaan konfigurasi kecil dan backup yang benar-benar tidak dapat dipulihkan — perlakukan password enkripsi Anda dengan kehati-hatian yang sama seperti data yang dilindunginya.

---

**Panduan Terkait:**

- [Zero-CLI Encryption with RcloneView Crypt Remote: Protect Any Cloud Folder](https://rcloneview.com/support/blog/zero-cli-crypt-remote-rcloneview)
- [How to Backup, Migrate, and Manage Your Rclone Config with RcloneView](https://rcloneview.com/support/blog/backup-migrate-rclone-config-rcloneview)
- [Fix Rclone Config Corruption and Recovery Issues in RcloneView](https://rcloneview.com/support/blog/fix-rclone-config-corruption-rcloneview)

<CloudSupportGrid />
