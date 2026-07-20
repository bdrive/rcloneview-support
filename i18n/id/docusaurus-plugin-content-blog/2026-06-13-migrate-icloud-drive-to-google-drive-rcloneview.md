---
slug: migrate-icloud-drive-to-google-drive-rcloneview
title: "Migrasi iCloud Drive ke Google Drive — Transfer File dengan RcloneView"
authors:
  - jay
description: "Migrasikan iCloud Drive ke Google Drive menggunakan RcloneView — panduan langkah demi langkah untuk mentransfer file cloud Apple ke Google tanpa unduhan manual."
keywords:
  - iCloud Drive to Google Drive
  - migrate iCloud Drive to Google Drive
  - iCloud Drive migration
  - transfer iCloud files to Google Drive
  - RcloneView iCloud Drive
  - cloud migration tool
  - move files from iCloud to Google Drive
  - cross-cloud file transfer
  - iCloud Drive sync RcloneView
tags:
  - RcloneView
  - cloud-to-cloud
  - migration
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi iCloud Drive ke Google Drive — Transfer File dengan RcloneView

> Pindahkan seluruh koleksi iCloud Drive Anda ke Google Drive tanpa perlu mengunduh semuanya terlebih dahulu — RcloneView menangani transfer langsung antara kedua layanan.

Beralih dari alur kerja yang berpusat pada Apple ke Google Workspace — atau sekadar ingin file dapat diakses di semua platform — sering kali berarti melakukan migrasi iCloud Drive ke Google Drive. Mengunduh dan mengunggah ulang data sebesar gigabyte secara manual membuang waktu dan berisiko menghasilkan transfer yang tidak lengkap. RcloneView terhubung langsung ke kedua layanan dan memindahkan file di cloud, sambil menjaga file asli Anda tetap utuh selama proses berlangsung.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Beralih dari iCloud Drive ke Google Drive

iCloud Drive terintegrasi erat dengan ekosistem Apple, tetapi di luar macOS dan iOS pengalamannya menjadi terpecah-pecah. Google Drive bekerja secara native di setiap platform utama dan terhubung dengan alat Google Workspace yang diandalkan oleh tim lintas platform setiap hari. Sebagai contoh, sebuah studio desain dengan 300GB file proyek mungkin memerlukan semuanya berada di Google Drive saat mengonboarding klien yang bekerja secara eksklusif dengan Google Docs dan Slides.

iCloud Drive secara diam-diam menyinkronkan folder Desktop, Documents, dan folder lainnya ke server Apple — yang berarti file yang terkumpul selama bertahun-tahun sering kali berada di sana tanpa inventaris yang jelas. Bermigrasi ke Google Drive memberi Anda visibilitas terpusat, kontrol berbagi yang lebih terperinci, dan akses dari perangkat mana pun tanpa memerlukan akun Apple.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive and Google Drive as remotes in RcloneView" class="img-large img-center" />

## Menyiapkan iCloud Drive di RcloneView

Binari rclone bawaan RcloneView (v1.69.1+) memenuhi persyaratan minimum rclone v1.69 untuk dukungan iCloud Drive. Tidak diperlukan instalasi terpisah.

Untuk menambahkan iCloud Drive, buka tab **Remote** dan klik **New Remote**. Pilih iCloud Drive dari daftar penyedia, lalu masukkan alamat email Apple ID dan kata sandi Anda. Jika akun Apple Anda menggunakan autentikasi dua faktor, buat kata sandi khusus aplikasi dari pengaturan keamanan Apple ID Anda dan gunakan itu sebagai pengganti kata sandi biasa. Setelah disimpan, folder iCloud Drive Anda langsung muncul di panel penjelajah file — Desktop, Documents, dan direktori lain yang disinkronkan semuanya dapat dijelajahi.

## Menghubungkan Google Drive

Google Drive menggunakan autentikasi OAuth. Di RcloneView, tambahkan remote baru dan pilih Google Drive — jendela browser akan terbuka secara otomatis agar Anda dapat masuk ke akun Google dan memberikan akses. Tidak diperlukan kunci API atau kredensial pengembang. Koneksi selesai dalam hitungan detik, dan folder Drive Anda muncul di panel kedua bersebelahan dengan iCloud Drive.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from iCloud Drive to Google Drive in RcloneView" class="img-large img-center" />

## Menjalankan Migrasi

Setelah kedua remote dikonfigurasi, buka **Job Manager** dan buat job **Copy**. Tetapkan folder sumber iCloud Drive Anda, pilih folder tujuan Google Drive sebagai destinasi, dan beri nama job tersebut. Mode Copy mentransfer file yang belum ada di destinasi tanpa menyentuh file asli — isi iCloud Drive Anda tetap tidak tersentuh.

Sebelum melakukan transfer penuh, jalankan **Dry Run** dari opsi job. RcloneView menampilkan setiap file yang akan disalin — nama, jalur, ukuran — tanpa memindahkan satu byte pun. Pratinjau ini sangat berguna ketika iCloud Drive berisi konten campuran dari bertahun-tahun dan Anda ingin memastikan cakupannya sebelum memulai.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a cloud migration job in RcloneView" class="img-large img-center" />

Setelah yakin, jalankan job tersebut dan pantau progresnya di tab **Transferring** di bagian bawah antarmuka. Kecepatan, jumlah file, dan persentase penyelesaian diperbarui secara langsung. Untuk koleksi besar, aktifkan verifikasi checksum di Advanced Settings job untuk memastikan setiap file tiba tanpa kerusakan.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka tab **Remote**, klik **New Remote**, dan tambahkan iCloud Drive dengan kredensial Apple ID Anda.
3. Tambahkan Google Drive sebagai remote kedua melalui login browser OAuth.
4. Buat job Copy dengan folder iCloud Drive Anda sebagai sumber dan folder Google Drive sebagai destinasi.
5. Jalankan Dry Run untuk melihat pratinjau transfer, lalu jalankan job dan pantau progresnya di tab Transferring.

Dengan kedua layanan terhubung berdampingan, migrasi seluruh iCloud Drive Anda ke Google Drive hanya soal mengonfigurasi satu job dan membiarkannya berjalan.

---

**Panduan Terkait:**

- [Kelola iCloud Drive — Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [Migrasi Dropbox ke Google Drive dengan RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-google-drive-with-rcloneview)
- [Migrasi Google Drive ke pCloud dengan RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-pcloud-rcloneview)

<CloudSupportGrid />
